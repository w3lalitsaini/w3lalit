import React, { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import SEO from "../components/SEO";
import axios from "axios";

const Signin = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [status, setStatus] = useState({ type: "", message: "" });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setStatus({ type: "", message: "" });

    try {
      const response = await axios.post(
        "http://localhost:3000/auth/login",
        formData,
      );
      setStatus({ type: "success", message: response.data.message });

      // Save to localStorage
      localStorage.setItem("token", response.data.token);
      localStorage.setItem("user", JSON.stringify(response.data.user));

      setTimeout(() => {
        if (response.data.user.role === "admin") {
          navigate("/admin");
        } else {
          navigate("/");
        }
      }, 1500);
    } catch (error) {
      setStatus({
        type: "error",
        message:
          error.response?.data?.message ||
          "Something went wrong. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <SEO
        title="Sign In - W3 Lalit"
        description="Login to your W3 Lalit account to manage your projects."
      />
      <section className="w-full h-[100vh] bg-dark bg-dots flex items-center justify-center p-6 mt-16 md:mt-0">
        <form
          onSubmit={handleSubmit}
          className="bg-dark/80 backdrop-blur-md border border-grayMid/30 rounded-2xl p-8 w-full max-w-md flex flex-col gap-6 shadow-2xl"
        >
          <h1 className="text-white text-3xl text-center font-bold">
            Welcome <span className="text-orange">Back</span>
          </h1>

          <div className="flex flex-col items-start gap-2">
            <label htmlFor="email" className="text-white text-sm font-medium">
              Email Address
            </label>
            <div
              className="flex items-center gap-3 border border-grayMid/40 focus-within:border-orange
            rounded-lg px-4 py-3 w-full bg-dark/50 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="0 0 32 32"
                height={20}
                className="fill-grayMid"
              >
                <g data-name="Layer 3" id="Layer_3">
                  <path d="m30.853 13.87a15 15 0 0 0 -29.729 4.082 15.1 15.1 0 0 0 12.876 12.918 15.6 15.6 0 0 0 2.016.13 14.85 14.85 0 0 0 7.715-2.145 1 1 0 1 0 -1.031-1.711 13.007 13.007 0 1 1 5.458-6.529 2.149 2.149 0 0 1 -4.158-.759v-10.856a1 1 0 0 0 -2 0v1.726a8 8 0 1 0 .2 10.325 4.135 4.135 0 0 0 7.83.274 15.2 15.2 0 0 0 .823-7.455zm-14.853 8.13a6 6 0 1 1 6-6 6.006 6.006 0 0 1 -6 6z" />
                </g>
              </svg>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Enter your email"
                required
                className="text-white bg-transparent text-base w-full outline-none placeholder:text-grayMid/50"
              />
            </div>
          </div>

          <div className="flex flex-col items-start gap-2">
            <label
              htmlFor="password"
              className="text-white text-sm font-medium"
            >
              Password
            </label>
            <div
              className="flex items-center gap-3 border border-grayMid/40 focus-within:border-orange
            rounded-lg px-4 py-3 w-full bg-dark/50 transition-all"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width={20}
                viewBox="-64 0 512 512"
                height={20}
                className="fill-grayMid"
              >
                <path d="m336 512h-288c-26.453125 0-48-21.523438-48-48v-224c0-26.476562 21.546875-48 48-48h288c26.453125 0 48 21.523438 48 48v224c0 26.476562-21.546875 48-48 48zm-288-288c-8.8125 0-16 7.167969-16 16v224c0 8.832031 7.1875 16 16 16h288c8.8125 0 16-7.167969 16-16v-224c0-8.832031-7.1875-16-16-16zm0 0" />
                <path d="m304 224c-8.832031 0-16-7.167969-16-16v-80c0-52.929688-43.070312-96-96-96s-96 43.070312-96 96v80c0 8.832031-7.167969 16-16 16s-16-7.167969-16-16v-80c0-70.59375 57.40625-128 128-128s128 57.40625 128 128v80c0 8.832031-7.167969 16-16 16zm0 0" />
              </svg>
              <input
                type="password"
                id="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Enter password"
                required
                className="outline-none text-white bg-transparent text-base w-full placeholder:text-grayMid/50"
              />
            </div>
          </div>

          <div className="flex items-center justify-between w-full text-xs">
            <div className="flex items-center gap-2">
              <input
                type="checkbox"
                id="checkbox"
                name="checkbox"
                className="accent-orange"
              />
              <label htmlFor="checkbox" className="text-grayMid">
                Remember me
              </label>
            </div>
            <Link
              to="/forgot-password"
              className="text-orange hover:underline transition"
            >
              Forgot Password?
            </Link>
          </div>

          {status.message && (
            <p
              className={`text-center text-sm ${status.type === "success" ? "text-green-500" : "text-red-500"}`}
            >
              {status.message}
            </p>
          )}

          <button
            type="submit"
            disabled={loading}
            className={`w-full bg-orange hover:bg-orange/80 text-white font-bold py-3 rounded-lg transition duration-300 shadow-lg shadow-orange/20 ${loading ? "opacity-70 cursor-not-allowed" : ""}`}
          >
            {loading ? "Signing In..." : "Sign In"}
          </button>

          <p className="text-grayMid text-center text-sm">
            Don't have an account?{" "}
            <Link to="/sign-up" className="text-orange hover:underline">
              Create Account
            </Link>
          </p>

          <div className="relative flex items-center justify-center">
            <div className="border-t border-grayMid/30 w-full"></div>
            <span className="bg-dark px-4 text-grayMid text-xs absolute uppercase tracking-wider">
              Or continue with
            </span>
          </div>

          <div className="flex items-center gap-4">
            <button
              type="button"
              className="flex items-center justify-center gap-3 border border-grayMid/30 py-2.5
            w-full rounded-lg text-white font-medium hover:bg-white/5 transition duration-300"
            >
              <FcGoogle className="text-xl" /> Google
            </button>
            <button
              type="button"
              className="flex items-center justify-center gap-3 border border-grayMid/30 py-2.5
            w-full rounded-lg text-white font-medium hover:bg-white/5 transition duration-300"
            >
              <FaFacebook className="text-xl text-blue-500" /> Facebook
            </button>
          </div>
        </form>
      </section>
    </>
  );
};

export default Signin;
