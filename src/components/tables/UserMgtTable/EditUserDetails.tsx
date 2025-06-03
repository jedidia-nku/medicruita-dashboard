"use client"

import type React from "react"
import { useState } from "react"
import type { UserData } from "../../../mockdata"
import { MdOutlineCancel } from "react-icons/md"
import { IoDownloadOutline } from "react-icons/io5"

interface EditUserModalProps {
    isOpen: boolean
    onClose: () => void
    userData: UserData | null
}

const EditUserModal: React.FC<EditUserModalProps> = ({ isOpen, onClose, userData }) => {
    const [formData, setFormData] = useState(userData || {})

    if (!isOpen || !userData) return null

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target
        setFormData((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()

        console.log("Updated user data:", formData)
        onClose()
    }

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-medium text-[#0D2B4E] font-inter">Edit User Details</h2>
                    <button onClick={onClose} className="text-[#1E1E1E80] hover:text-gray-600">
                        <MdOutlineCancel size={24} />
                    </button>
                </div>

                <form onSubmit={handleSubmit} className="p-6 space-y-4">
                    <div className="space-y-2 font-[Manrope]">
                        <label htmlFor="name" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="name"
                            name="name"
                            value={userData.name || ""}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D2B4E]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={userData.email || ""}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D2B4E]"
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Phone Number
                        </label>
                        <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50">
                                <img
                                    src="flag.png"
                                    alt="Nigeria flag"
                                    width={28}
                                    height={20}
                                    className="rounded"
                                />
                                <span className="ml-2 text-gray-500">+234</span>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                value={userData.phone || ""}
                                onChange={handleInputChange}
                                className="flex-1 px-3 py-2 border border-gray-300 rounded-r-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="userId" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            User ID
                        </label>
                        <input
                            type="text"
                            id="userId"
                            name="userId"
                            value={userData.userId || ""}
                            readOnly
                            className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D2B4E]"
                        />
                    </div>
                    <div className="space-y-2">
                        <label htmlFor="bankAccount" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Bank Account
                        </label>
                        <input
                            type="text"
                            id="bankAccount"
                            name="bankAccount"
                            value={userData.financial.bankAccount || ""}
                            onChange={handleInputChange}
                            className="w-full px-3 py-2 border border-[#E5E7EB] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#0D2B4E]"
                        />
                    </div>
                    <div className="flex justify-end space-x-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className=" flex items-center gap-1 px-3 py-2 text-sm font-medium text-[#0D2B4E] font-inter bg-[#F7FAFD1A] border border-[#0D2B4E] rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E1E1E]"
                        >
                            <MdOutlineCancel size={13} />
                            <span>Cancel</span>
                        </button>
                        <button
                            type="submit"
                            className=" flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E]  border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#1E1E1E]"
                        >
                            <IoDownloadOutline size={12} />
                            <span>Save</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditUserModal

