import React from 'react'
import { GoArrowUpRight } from "react-icons/go";

const Button = (props) => {
    const { title, className, onClick, variant = "solid" } = props
    return (
        <button
            onClick={onClick}
            className={`group flex items-center justify-center gap-2 px-6 py-3 rounded-md font-medium
                transition-all duration-300 
                ${variant === "solid"
                    ? "text-grayMid bg-gradient-to-r from-orange to-dark shadow-[0_0_10px_2px_rgba(255,107,53,0.5)] hover:shadow-[0_0_20px_4px_rgba(255,107,53,0.8)]"
                    : "bg-white/70 backdrop-blur-sm text-orange border border-orange hover:bg-white/20"} 
                ${className}`}
        >
            <span className="group-hover:text-white">{title}</span>
            <GoArrowUpRight className="transition-colors group-hover:text-white" />
        </button>
    )
}

export default Button;
