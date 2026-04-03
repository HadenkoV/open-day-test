import React from "react"
import { Link } from "react-router-dom"
import cuLogo from "/cu-logo.svg"

function Header() {
    return (
        <header className="border-b border-gray-200 bg-white">
            <div className="max-w-7xl mx-auto py-4 flex items-center justify-center md:justify-between">
                <Link to="/" className="flex items-center gap-4 text-center lg:text-left">
                    <img
                        src={cuLogo}
                        alt="Cardiff University logo"
                        className="h-12 w-auto"
                    />
                    <div>
                        <h1 className="text-lg font-semibold text-gray-900">
                            Cardiff University
                        </h1>
                        <p className="text-sm text-gray-500">Open Day</p>
                    </div>
                </Link>
            </div>
        </header>
    )
}

export default Header