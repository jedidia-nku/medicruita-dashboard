"use client"

import type React from "react"
import type { UserData } from "../../../mockdata"
import { IoDownloadOutline } from "react-icons/io5"
import { MdOutlineCancel } from "react-icons/md"


interface InitiateWithdrawalModalProps {
    isOpen: boolean
    onClose: () => void
    userData: UserData | null
}

const InitiateWithdrawalModal: React.FC<InitiateWithdrawalModalProps> = ({ isOpen, onClose, userData }) => {
    if (!isOpen || !userData) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-md mx-4 sm:mx-auto">
                <div className="flex justify-between items-center p-6 border-b">
                    <h2 className="text-xl font-semibold text-[#1E1E1ECC]">Initiate Withdrawal</h2>
                    <button onClick={onClose} className="text-gray-400 hover:text-gray-600">
                        {/* <X size={20} /> */}
                    </button>
                </div>

                <form className="p-6 space-y-4">
                    <div className="space-y-2">
                        <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                            Amount to Withdraw
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                            <input
                                type="text"
                                id="amount"
                                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                                placeholder="0.00"
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="fee" className="block text-sm font-medium text-gray-700">
                            Transaction Fee
                        </label>
                        <div className="relative">
                            <span className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">₦</span>
                            <input
                                type="text"
                                id="fee"
                                value="100.00"
                                className="w-full pl-7 pr-3 py-2 border border-gray-300 rounded-md bg-gray-50"
                                disabled
                            />
                        </div>
                    </div>

                    <div className="space-y-2">
                        <label htmlFor="reason" className="block text-sm font-medium text-gray-700">
                            Withdrawal Reason (Optional)
                        </label>
                        <textarea
                            id="reason"
                            rows={3}
                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                            placeholder="Provide a brief reason..."
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

export default InitiateWithdrawalModal

