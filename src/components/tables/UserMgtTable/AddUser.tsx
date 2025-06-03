"use client"

import type React from "react"
import { IoDownloadOutline } from "react-icons/io5"
import { MdOutlineCancel } from "react-icons/md"


interface AddUserModalProps {
    isOpen: boolean
    onClose: () => void
}

const AddUserModal: React.FC<AddUserModalProps> = ({ isOpen, onClose }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4 sm:mx-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-medium text-[#0D2B4E] font-inter">Add New User</h2>
                    <button onClick={onClose} className="text-[#1E1E1E80]">
                         <MdOutlineCancel size={24} />
                    </button>
                </div>

                <form className="p-6 space-y-6">
                    <div className="space-y-2">
                        <label htmlFor="fullName" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Full Name
                        </label>
                        <input
                            type="text"
                            id="fullName"
                            placeholder="Enter Full Name"
                            className="w-full px-3 py-2 border border-[#E5E7EB]  text-[#B1B2B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] font-[Manrope] text-sm "
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="email" className="block text-sm font-mediumtext-[#1E1E1E] font-[Manrope]">
                            Email Address
                        </label>
                        <input
                            type="email"
                            id="email"
                            placeholder="Enter Business email address"
                            className="w-full px-3 py-2 border border-[#E5E7EB]  text-[#B1B2B0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] font-[Manrope] text-sm "
                        />
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="phone" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            Phone Number
                        </label>
                        <div className="flex">
                            <div className="flex items-center px-3 border border-r-0 border-gray-300 rounded-l-md bg-gray-50 relative">

                                <span className="text-gray-500">+234</span>
                                <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                    <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                    </svg>
                                </div>
                            </div>
                            <input
                                type="tel"
                                id="phone"
                                placeholder=" (000)-000-0000"
                                className="flex-1 px-3 py-2 border border-[#E5E7EB]  text-[#B1B2B0] rounded-r-md focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] font-[Manrope] text-sm"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="role" className="block text-sm font-medium text-[#1E1E1E] font-[Manrope]">
                            User Role
                        </label>
                        <div className="relative">
                            <select
                                id="role"
                                className="w-full px-3 py-2 border border-[#E5E7EB]  text-[#1E1E1ECC] rounded-md appearance-none bg-white focus:outline-none focus:ring-2 focus:ring-[#1E1E1E] font-[Manrope] text-sm font-medium"
                                defaultValue=""
                            >
                                <option value="" disabled hidden>
                                    Select user role
                                </option>
                                <option value="super-admin" className="border-b p-2.5 border-[#0000001A] text-sm ">Super Admin</option>
                                <option value="compliance-officer" className="border-b p-2.5 border-[#0000001A] text-sm" >Compliance Officer</option>
                                <option value="financial-officer" className="border-b p-2.5 border-[#0000001A] text-sm" >Financial Officer</option>
                                <option value="support-agent" className="border-b p-2.5 border-[#0000001A] text-sm hover:bg-[#F7FAFD]" >Support Agent</option>
                            </select>
                            <div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none">
                                <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                                </svg>
                            </div>
                        </div>
                    </div>

                    <div className="flex justify-end space-x-4 pt-4 font-inter">
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

export default AddUserModal

