import type React from "react"
import Pagination from "../../../helpers/paginations/Pagination"
import { mockAllUsers } from "../../../mockdata"
import ActionMenu  from "./Menu"
import UserDetailsModal from "./UserDetails"
import { type UserData, mockUserData } from "../../../mockdata"
import { useState } from "react"

const ActiveUsers: React.FC = () => {
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
    // Filter only active users
    const activeUsers = mockAllUsers.filter((user) => user.status === "active")
        const handleViewDetails = (user: any) => {
            setSelectedUser(mockUserData)
            setIsUserDetailsModalOpen(true)
        }
    

    return (
        <div className="flex flex-col w-full mx-auto ">
            <div className="sm:overflow-x-auto pb-4">
                <div className="inline-block align-middle w-full">
                    <div className="overflow-hidden border rounded-lg border-gray-300">
                        {/* Table Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white py-5 px-4 sm:px-5">
                            <span className="text-xl font-normal font-inter text-[#1E1E1ECC]">Verified & Active Users</span>
                            <div className="flex justify-between border w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                                <div className="flex items-center gap-2">
                                    <img src="/Icon.png" alt="Search Icon" />
                                    <input type="text" placeholder="Search..." className=" focus:outline-none" />
                                </div>
                                <img src="/instant_mix.png" alt="Filter Icon" />
                            </div>
                        </div>

                        {/* Responsive Table */}
                        <div className="overflow-x-auto ">
                            <table className="table-auto w-full">
                                {/* Table Head */}
                                <thead className="hidden sm:table-header-group">
                                    <tr className="bg-[#FAFAFB] h-[40px] font-inter">
                                        <th className="px-3 py-2">
                                            <input
                                                type="checkbox"
                                                className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                            />
                                        </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Name </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144] min-w-[150px]"> Email </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]">User ID </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Phone </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Status </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Date Joined </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-300">
                                    {activeUsers.map((user) => (
                                        <tr key={user.id} className="bg-white transition-all duration-500 hover:bg-gray-50 font-inter">
                                            {/* Desktop View */}
                                            <td className="px-3 py-2 hidden sm:table-cell">
                                                <input
                                                    type="checkbox"
                                                    className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100"
                                                />
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{user.name}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{user.email}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{user.id}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">
                                                +{user.phone}
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">
                                                <div className="py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 bg-emerald-50 text-emerald-600">
                                                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill="#059669"></circle>
                                                    </svg>
                                                    <span className="text-xs">active</span>
                                                </div>
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{user.date}</td>
                                            <td className="flex p-5 items-center gap-0.5">
                                                <ActionMenu rowId={user.id} onViewDetails={() => handleViewDetails(user)} />
                                               
                                            </td>

                                            {/* Mobile View - Stacked Layout */}
                                            <td className="px-4 py-4 sm:hidden">
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-sm font-medium">{user.name}</p>
                                                        </div>
                                                        <div className="text-xs px-2 py-1 rounded-full font-medium text-[#1E1E1EBF]">
                                                            {user.email}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                        <span>User ID:</span>
                                                        <span className="font-semibold">{user.id}</span>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                        <span>Phone:</span>
                                                        <span className="font-semibold">+{user.phone}</span>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                        <span>Status:</span>
                                                        <div className="px-2 py-1 rounded-md bg-green-100 text-green-600">active</div>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                        <span>Date:</span>
                                                        <span className="font-semibold">{user.date}</span>
                                                    </div>
                                                    {/* <div className="flex justify-end mt-2">
                                                        <ActionMenu rowId={user.id} />
                                                    </div> */}
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            {/* Pagination Below Table */}
                            <div className="py-4 bg-[#FFFFFF]">
                                {/* <Pagination /> */}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* User Details Modal */}
            {selectedUser && (
                <UserDetailsModal
                    isOpen={isUserDetailsModalOpen}
                    onClose={() => setIsUserDetailsModalOpen(false)}
                    userData={selectedUser}
                />
            )}
        </div>
    )
}

export default ActiveUsers

