import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = (props) => {
    const { title, className, onClick, variant = "solid" } = props
    return (
        <button
            onClick={onClick}
            className={`group flex items-center justify-center gap-2 px-6 py-3.5 rounded-full font-semibold
                transition-all duration-300 transform hover:-translate-y-0.5 active:translate-y-0
                ${variant === "solid"
                    ? "text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-cyan-500 hover:from-indigo-500 hover:via-purple-500 hover:to-cyan-400 shadow-[0_0_15px_rgba(99,102,241,0.4)] hover:shadow-[0_0_25px_rgba(99,102,241,0.6)]"
                    : "bg-slate-900/40 hover:bg-slate-900/80 backdrop-blur-md text-cyan-400 border border-cyan-500/30 hover:border-cyan-400/80 shadow-[0_0_15px_rgba(6,182,212,0.15)] hover:shadow-[0_0_25px_rgba(6,182,212,0.3)]"} 
                ${className}`}
        >
            <span className="relative z-10 transition-colors duration-300">{title}</span>
            <GoArrowUpRight className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-lg" />
        </button>
    )
}

export default Button;
