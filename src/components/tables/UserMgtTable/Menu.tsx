"use client"

import type React from "react"
import { useState, useEffect, useRef } from "react"

interface ActionMenuProps {
    rowId: string
    onViewDetails: () => void
}

const ActionMenu: React.FC<ActionMenuProps> = ({ rowId, onViewDetails }) => {
    const [isOpen, setIsOpen] = useState(false)
    const [showAbove, setShowAbove] = useState(false)
    const menuRef = useRef<HTMLDivElement>(null)
    const buttonRef = useRef<HTMLButtonElement>(null)

    useEffect(() => {
        const handleClickOutside = (event: MouseEvent) => {
            if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
                setIsOpen(false)
            }
        }

        const handleResize = () => {
            if (buttonRef.current && menuRef.current) {
                const buttonRect = buttonRef.current.getBoundingClientRect()
                const spaceBelow = window.innerHeight - buttonRect.bottom
                const menuHeight = menuRef.current.offsetHeight
                setShowAbove(spaceBelow < menuHeight && buttonRect.top > menuHeight)
            }
        }

        if (isOpen) {
            document.addEventListener("mousedown", handleClickOutside)
            window.addEventListener("resize", handleResize)
            handleResize()
        }

        return () => {
            document.removeEventListener("mousedown", handleClickOutside)
            window.removeEventListener("resize", handleResize)
        }
    }, [isOpen])

    const handleToggle = () => {
        setIsOpen(!isOpen)
    }

    return (
        <div className="relative" ref={menuRef}>
            <button
                ref={buttonRef}
                className="p-2 rounded-full bg-white group transition-all duration-500 hover:bg-[#0D2B4E] flex items-center"
                onClick={handleToggle}
                aria-haspopup="true"
                aria-expanded={isOpen}
            >
                <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path
                        className="stroke-black group-hover:stroke-white"
                        d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231"
                        stroke="black"
                        strokeWidth="2.5"
                        strokeLinecap="round"
                    />
                </svg>
            </button>
            {isOpen && (
                <div
                    className={`absolute ${showAbove ? "bottom-full mb-2" : "top-full mt-2"
                        } right-0 w-56 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-50`}
                    role="menu"
                    aria-orientation="vertical"
                    aria-labelledby="options-menu"
                >
                    <div className="py-1" role="none">
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => {
                                onViewDetails()
                                setIsOpen(false)
                            }}
                        >
                            View Details
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 hover:text-gray-900"
                            role="menuitem"
                            onClick={() => {
                                // Add resend verification logic here
                                setIsOpen(false)
                            }}
                        >
                            Resend Verification Email
                        </button>
                        <button
                            className="w-full text-left px-4 py-2 text-sm text-red-600 hover:bg-gray-100 hover:text-red-700"
                            role="menuitem"
                            onClick={() => {
                                // Add deactivate user logic here
                                setIsOpen(false)
                            }}
                        >
                            Deactivate User
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}

export default ActionMenu

