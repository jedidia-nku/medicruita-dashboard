// import Pagination from "../../../helpers/paginations/Pagination";
import { mockInactiveUsers } from "../../../mockdata";
import { BsThreeDotsVertical } from "react-icons/bs";

const InactiveUsersTable: React.FC = () => {
    return (
        <div className="flex flex-col w-full mx-auto">
            <div className="sm:overflow-x-auto pb-4">
                <div className="inline-block align-middle w-full">
                    <div className="overflow-hidden border rounded-lg border-gray-300 font-inter">
                        {/* Table Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-white py-5 px-4 sm:px-5">
                            <span className="text-lg text-[#1E1E1ECC]">Deactivated & Unverified Users</span>
                            <div className="flex justify-between border w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                                <div className="flex items-center gap-2">
                                    <img src="/Icon.png" alt="Search Icon" />
                                    <input type="text" placeholder="Search..." className=" focus:outline-none" />
                                </div>
                                <img src="/instant_mix.png" alt="Filter Icon" />
                            </div>
                        </div>

                        {/* Responsive Table */}
                        <div className="overflow-x-auto px-5">
                            <table className="table-auto w-full overflow-y-hidden">
                                {/* Table Head */}
                                <thead className="hidden sm:table-header-group">
                                    <tr className="bg-gray-50 h-[40px]">
                                        <th className="px-3 py-2">
                                            <input type="checkbox" className="w-5 rounded-lg h-5 border border-[#D0D5DD] rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                        </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Name </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Email </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144] min-w-[150px]"> User ID </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Phone </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Reason </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-[#4F5144]"> Date Joined</th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-300">
                                    {mockInactiveUsers.map((inactiveUser) => (
                                        <tr key={inactiveUser.id} className="bg-white transition-all duration-500 hover:bg-gray-50">
                                            {/* Desktop View */}
                                            <td className="px-3 py-2 hidden sm:table-cell">
                                                <input type="checkbox" className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell">
                                                <div className="flex items-center gap-3">
                                                    <p className="text-sm text-[#1E1E1EBF]">{inactiveUser.name}</p>
                                                </div>
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{inactiveUser.email}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{inactiveUser.id}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{inactiveUser.phone}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{inactiveUser.reason}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-[#1E1E1EBF]">{inactiveUser.joinedDate}</td>
                                            <td className="flex p-5 items-center gap-0.5">
                                            <button className="p-2 rounded-full bg-white group transition-all duration-200 hover:bg-gray-300 flex item-center">
                                                <BsThreeDotsVertical className="text-[#1E1E1E80]"/>
                                            </button>
                                        </td>

                                            {/* Mobile View - Stacked Layout */}
                                            <td className="px-4 py-4 sm:hidden">
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <p className="text-sm font-medium">{inactiveUser.name}</p>
                                                        </div>
                                                        <div className="text-xs px-2 py-1 rounded-full font-medium text-gray-600">
                                                            {inactiveUser.email}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>User ID:</span>
                                                        <span className="font-semibold">{inactiveUser.id}</span>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Phone:</span>
                                                        <span className="font-semibold">{inactiveUser.phone}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Reason:</span>
                                                        <span className="font-semibold">{inactiveUser.reason}</span>
                                                    </div>
                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Date Joined:</span>
                                                        <span className="font-semibold">{inactiveUser.joinedDate}</span>
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
        </div>
    );
};

export default InactiveUsersTable;
