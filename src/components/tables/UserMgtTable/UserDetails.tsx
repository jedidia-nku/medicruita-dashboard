"use client"

import type React from "react"
import type { UserData } from "../../../mockdata"
import { MdOutlineCancel } from "react-icons/md"
import { FaRegCircle } from "react-icons/fa";
import { LuPencilLine } from "react-icons/lu";
import { TiCancel } from "react-icons/ti";
import { BiLeftDownArrowCircle } from "react-icons/bi";
import { PiSealCheckBold } from "react-icons/pi";

interface UserDetailsModalProps {
    isOpen: boolean
    onClose: () => void
    userData: UserData
    onEditUser: () => void
    onInitiateWithdrawal: () => void
}

const UserDetailsModal: React.FC<UserDetailsModalProps> = ({ isOpen, onClose, userData, onEditUser, onInitiateWithdrawal }) => {
    if (!isOpen) return null

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
            <div className="bg-white rounded-lg w-full max-w-2xl mx-4 sm:mx-auto max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center p-6 border-b sticky top-0 bg-white">
                    <h2 className="text-xl font-medium text-[#0D2B4E] font-inter">User Details</h2>
                    <button onClick={onClose} className="text-[#1E1E1E80]
 hover:text-gray-600">
                        <MdOutlineCancel size={24} />
                    </button>
                </div>

                <div className="p-6 space-y-6">
                    {/* User Information */}
                    <div className="space-y-4">
                        <h3 className="text-base font-medium font-inter">User Information</h3>
                        <div className="flex items-center space-x-4 font-inter gap-2">
                            <img
                                src="profilepic.png"
                                alt={userData.name}
                                width={64}
                                height={64}
                                className="rounded-full"
                            />
                            <div>
                                <p className="font-medium text-2xl text-[#000000]">{userData.name}</p>
                                <p className="text-base text-[#00000080] font-normal">
                                    {userData.email} | {userData.phone}
                                </p>
                            </div>
                        </div>
                        <div className="block text-sm font-inter">
                            <div className="flex gap-1 items-center mb-4">
                                <FaRegCircle size={6} color="#0D2B4E"/>
                                <p className="text-[#1E1E1E] pr-2">User ID:</p>
                                <p className="text-[#1E1E1EBF]">{userData.userId}</p>
                            </div>
                            <div className="flex gap-1 items-center mb-4">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Account Status:</p>
                                <div className={`py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 ${userData.accountStatus === "active" ? "bg-[#ECFDF3] text-[#027A48]"
                                    : userData.accountStatus === "inactive" ? "bg-[#C106061A] text-[#C10606]" : "bg-rose-50 text-rose-600"
                                    }`}>
                                <p>{userData.accountStatus}</p>
                                    </div>
                            </div>
                            <div className="flex gap-1 items-center mb-4">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Date Joined:</p>
                                <p className="text-[#1E1E1EBF]">{userData.dateJoined}</p>
                            </div>
                            <div className="flex gap-1 items-center mb-4">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Last Login:</p>
                                <p className="text-[#1E1E1EBF]">{userData.lastLogin}</p>
                            </div>
                        </div>
                    </div>

                    {/* KYC & Verification Status */}
                    <div className="space-y-4 font-inter">
                        <h3 className="text-base font-medium text-[#0D2B4E]">KYC & Verification Status</h3>
                        <div className="flex-col flex gap-4 text-sm">
                            <div className="flex gap-1 items-center mb">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">KYC Document Submitted:</p>
                                <p className="text-[#1E1E1EBF]" >{userData.kycStatus.documentSubmitted}</p>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaRegCircle size={6} color="#0D2B4E"/>
                                <p className="text-[#1E1E1E] pr-2">Verification:</p>
                                <div className={`py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 ${userData.kycStatus.verification === "verified" ? "bg-[#ECFDF3] text-[#027A48]"
                                    : userData.kycStatus.verification === "pending" ? "bg-[#FEF9C3] text-[#713F12]" : "bg-rose-50 text-rose-600"
                                    }`}>
                                <p >{userData.kycStatus.verification}</p>

                                </div>
                            </div>
                            <div className="flex gap-1 items-center ">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Verification Date:</p>
                                <p className="text-[#1E1E1EBF]">{userData.kycStatus.verificationDate}</p>
                            </div>
                            <div className="flex gap-1 items-center ">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Document Review:</p>
                                <div className={`py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 ${userData.kycStatus.documentReview === "view" ? "bg-[#E6E6E6] text-[#000000]"
                                    : userData.kycStatus.documentReview === "edit" ? "bg-[#C106061A] text-[#C10606]" : "bg-rose-50 text-rose-600"
                                    }`}>
                                    <p >{userData.kycStatus.documentReview}</p>
                                </div>
                            </div>
                            <div className="flex gap-1 items-center">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Last Login:</p>
                                <p className="text-[#1E1E1EBF]">{userData.kycStatus.lastLogin}</p>
                            </div>
                        </div>
                        <div className="flex justify-end gap-4">
                            <button className=" flex justify-center items-center gap-1 text-sm text-[#027A48] font-semibold"> 
                                <PiSealCheckBold size={13} />
                                <span>Approve KYC</span>
                            </button>
                            <button className="flex justify-center items-center gap-1  text-sm font-semibold text-[#C10606] "> 
                                <MdOutlineCancel size={13} />
                                <span>Reject KYC</span>
                            </button>
                        </div>
                    </div>

                    {/* Financial Overview */}
                    <div className="space-y-4">
                        <h3 className="text-base font-medium text-[#0D2B4E]">Financial Overview</h3>
                        <div className="flex flex-col gap-4 text-sm">
                            <div className="flex gap-1 items-center mb">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Total Wallet Balance:</p>
                                <p className="text-[#1E1E1EBF]">₦{userData.financial.totalBalance}</p>
                            </div>
                            <div className="flex gap-1 items-center mb">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Savings Balance:</p>
                                <p className="text-[#1E1E1EBF]">₦{userData.financial.savingsBalance}</p>
                            </div>
                            <div className="flex gap-1 items-center mb">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Investment Balance:</p>
                                <p className="text-[#1E1E1EBF]">₦{userData.financial.investmentBalance}</p>
                            </div>
                            <div className="flex gap-1 items-center mb">
                                <FaRegCircle size={6} color="#0D2B4E" />
                                <p className="text-[#1E1E1E] pr-2">Bank Account:</p>
                                <p className="text-[#1E1E1EBF]">{userData.financial.bankAccount}</p>
                            </div>
                        </div>
                        <div className="flex justify-end">
                        <button className=" flex justify-center items-center gap-1 px-4 py-2 text-sm text-[#0D2B4E] rounded-md text-end font-semibold" onClick={onInitiateWithdrawal}>
                            <BiLeftDownArrowCircle size={14} color="#0D2B4E" />
                            <span>Initiate Withdrawal on behalf of User</span>
                            
                        </button>
                        </div>
                    </div>

                    {/* Recent Activity & Transactions */}
                    <div className="space-y-4">
                        <h3 className="text-base font-medium text-[#0D2B4E]">Recent Activity & Transactions</h3>
                        <div className="space-y-2">
                            {userData.recentActivity.map((activity, index) => (
                                <div key={index} className="flex justify-start gap-2 items-center text-sm py-2 border-b">
                                    <FaRegCircle size={6} color="#0D2B4E" />
                                    <p className="text-[#1E1E1E]">{activity.date}</p>
                                    <p className="text-[#1E1E1E]">{activity.time}</p>
                                
                                
                                    <p className="text-[#1E1E1EBF]">{activity.type}</p>
                                    <p className="text-[#1E1E1EBF]">₦{activity.amount}</p>
                                   
                                </div>
                            ))}
                        </div>
                    </div>
                    <div className="space-y-4">
                        <h3 className="text-base font-medium text-[#0D2B4E]">Add Internal Note</h3>
                        <div>
                            <textarea className="w-9/12 border border-[#C2C3C1] rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-[#0D2B4E] focus:border-[#0D2B4E] text-sm font-normal text-black font-[DMSans]" rows={6} placeholder="Provide a brief note here..."></textarea>
                        </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="flex justify-end space-x-4 pt-4">
                        <button className=" flex items-center gap-1 px-4 py-2 text-sm font-medium text-[#C10606] bg-white border border-[#C10606] rounded-md hover:bg-red-50">
                            <TiCancel size = {16}/>
                            <span>Deactivate User</span>
                        </button>
                        <button className=" flex items-center gap-1 px-4 py-2 text-sm font-medium text-white bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E] border border-transparent rounded-md" onClick={onEditUser}>
                            <LuPencilLine />
                            <span>Edit User Details</span>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default UserDetailsModal

