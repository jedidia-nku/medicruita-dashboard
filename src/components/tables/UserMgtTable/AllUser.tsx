import React from 'react'
import Pagination from "../../../helpers/paginations/Pagination";
import { mockAllUsers } from "../../../mockdata";
import ActionMenu from './Menu';
import { useState } from "react";
import UserDetailsModal from "./UserDetails"
import { type UserData, mockUserData } from "../../../mockdata"
import EditUserModal from "./EditUserDetails"
import InitiateWithdrawalModal from "./InitiateWithdrawal"

const AllUser: React.FC = () => {
    const [isUserDetailsModalOpen, setIsUserDetailsModalOpen] = useState(false)
    const [selectedUser, setSelectedUser] = useState<UserData | null>(null)
    const [isEditUserModalOpen, setIsEditUserModalOpen] = useState(false)
    const [isInitiateWithdrawalModalOpen, setIsInitiateWithdrawalModalOpen] = useState(false)
    const handleViewDetails = (allUsers: any) => {
        setSelectedUser(mockUserData)
        setIsUserDetailsModalOpen(true)
    }

    const handleEditUser = () => {
        // Add handleEditUser function
        setIsUserDetailsModalOpen(false)
        setIsEditUserModalOpen(true)
    }

    const handleInitiateWithdrawal = () => {
        // Add handleInitiateWithdrawal function
        setIsUserDetailsModalOpen(false)
        setIsInitiateWithdrawalModalOpen(true)
    }



  return (
      <div className="flex flex-col w-full mx-auto ">
          <div className="sm:overflow-x-auto pb-4">
              <div className="inline-block align-middle w-full">
                  <div className="overflow-hidden border rounded-lg border-gray-300">
                      {/* Table Header */}
                      <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white py-5 px-4 sm:px-5">
                          <span className="text-xl font-normal font-inter text-[#1E1E1ECC]">User List</span>
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
                                          <input type="checkbox" className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                      </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144]"> Name </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144] min-w-[150px]"> Email </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144]">User ID </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144]"> Phone </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144]"> Status </th>
                                      <th className="px-3 py-2 text-left text-sm font-medium text-[#4F5144]"> Date Joined </th>
                                  </tr>
                              </thead>

                              {/* Table Body */}
                              <tbody className="divide-y divide-gray-300">
                                  {mockAllUsers.map((allUsers) => (
                                      <tr key={allUsers.id} className="bg-white transition-all duration-500 hover:bg-gray-50 font-inter">
                                          {/* Desktop View */}
                                          <td className="px-3 py-2 hidden sm:table-cell">
                                              <input type="checkbox" className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                          </td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{allUsers.name}</td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{allUsers.email}</td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{allUsers.id}</td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">+{allUsers.phone}</td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">
                                              <div className={`py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 ${allUsers.status === "active" ? "bg-emerald-50 text-emerald-600"
                                                  : allUsers.status === "inactive" ? "bg-[#C106061A] text-[#C10606]": "bg-rose-50 text-rose-600"
                                                  }`}>
                                                  <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                                                      <circle cx="2.5" cy="3" r="2.5" fill={
                                                          allUsers.status === "active" ? "#059669"
                                                              : allUsers.status === "inactive" ? "#D97706"
                                                                  : "#DC2626"
                                                      }></circle>
                                                  </svg>
                                                  <span className="text-xs">{allUsers.status}</span>
                                              </div>
                                          </td>
                                          <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{allUsers.date}</td>
                                          <td className="flex p-5 items-center gap-0.5">
                                              <ActionMenu rowId={allUsers.id} onViewDetails={() => handleViewDetails(allUsers)} />
                                          </td>

                                          {/* Mobile View - Stacked Layout */}
                                          <td className="px-4 py-4 sm:hidden">
                                              <div className="flex flex-col space-y-2">
                                                  <div className="flex items-center justify-between">
                                                      <div className="flex items-center gap-3">
                                                          
                                                          <p className="text-sm font-medium">{allUsers.name}</p>
                                                      </div>
                                                      <div className="text-xs px-2 py-1 rounded-full font-medium text-[#1E1E1EBF]">
                                                          {allUsers.email}
                                                      </div>
                                                  </div>

                                                  <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                      <span>User ID:</span>
                                                      <span className="font-semibold">{allUsers.id}</span>
                                                  </div>

                                                  <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                      <span>Phone:</span>
                                                      <span className="font-semibold">+{allUsers.phone}</span>
                                                  </div>

                                                  <div className="flex justify-between text-sm text-[#1E1E1EBF]">
                                                      <span>Status:</span>
                                                      <div className={`px-2 py-1 rounded-md ${allUsers.status === "active" ? "bg-green-100 text-green-600"
                                                              : allUsers.status === "inactive" ? "bg-yellow-100 text-yellow-600"
                                                                  : "bg-red-100 text-red-600"
                                                          }`}>
                                                          {allUsers.status}
                                                      </div>
                                                  </div>

                                                  <div className="flex justify-between text-sm text-gray-600">
                                                      <span>Date:</span>
                                                      <span className="font-semibold">{allUsers.date}</span>
                                                  </div>
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
                  onEditUser={handleEditUser}
                  onInitiateWithdrawal={handleInitiateWithdrawal}
              />
          )}
          <EditUserModal
              isOpen={isEditUserModalOpen}
              onClose={() => setIsEditUserModalOpen(false)}
              userData={selectedUser}
          />
          <InitiateWithdrawalModal
            isOpen={isInitiateWithdrawalModalOpen}
            onClose={() => setIsInitiateWithdrawalModalOpen(false)}
            userData={selectedUser}
          />          
      </div>
  );
}

export default AllUser