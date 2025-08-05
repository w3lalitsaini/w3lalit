import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Layout from '../layout/Layout'
import Home from '../pages/Home'
import About from '../pages/About'
import Portfolio from '../pages/Portfolio'
import Service from '../pages/Service'
import Contact from '../pages/Contact'
import Signin from '../pages/Signin'
import Signup from '../pages/Signup'
import PricingPage from '../pages/PricingPage'
import ServiceDetail from '../pages/ServiceDetail'
import Terms from '../pages/Terms'
import Privacy from '../pages/Privacy'
import Sitemap from '../pages/Sitemap'

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                index: true,
                element: <Home />
            },
            {
                path: '/about',
                element: <About />
            },
            {
                path: '/work',
                element: <Portfolio />
            },
            {
                path: '/pricing',
                element: <PricingPage />
            },
            {
                path: '/service',
                element: <Service />
            },
            {
                path: "/services/:id",
                element: <ServiceDetail />
            },
            {
                path: '/Contact',
                element: <Contact />
            },
            {
                path: '/terms&conditions',
                element: <Terms />
            },
            {
                path: '/privacy-policy',
                element: <Privacy />
            },
            {
                path: '/sitemap',
                element: <Sitemap />
            },
        ]
    },
    {
        path: "/sign-in",
        element: <Signin />
    },
    {
        path: "/sign-up",
        element: <Signup />
    }
])

const Router = () => {

    return <RouterProvider router={router} />
}

export default Router