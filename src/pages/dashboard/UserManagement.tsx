import React, {useState} from "react";
import InactiveUsersTable from "../../components/tables/userManagementTable/InactiveUsersTable";
import PendingKYCTable from "../../components/tables/userManagementTable/PendingKYCTable";
import AllUser from "../../components/tables/UserMgtTable/AllUser";
import ActiveUsers from "../../components/tables/UserMgtTable/ActiveUsers";
import AddUserModal from "../../components/tables/UserMgtTable/AddUser";


const UserManagement: React.FC = () => {
      const [activeTab, setActiveTab] = useState("allUsers");
    const [isModalOpen, setIsModalOpen] = useState(false)


    const cards = [
        { title: "Total Active Users", value: "2,500", },
        { title: "Total Inactive Users", value: "500", },
        { title: "Total users on saving plan", value: "1,500", },
        { title: "Total users on investment plan", value: "1,000",},
    ];



    return (
        <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 px-4 sm:px-6">
            <div className="flex justify-between items-center text-sm sm:text-base">
                <div className="flex flex-col gap-2 py-3">
                        <span className="font-inter font-medium text-lg text-[#1E1E1E]">
                            User Management
                        </span>
                        <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
                            Manage Users, Verify KYC, Stay in Control!
                        </span>
                </div>
                <div className="flex items-center gap-4">
                    <button onClick={() => setIsModalOpen(true)} className="h-9 flex bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E] items-center px-4 gap-1 rounded-[4px]">
                        <img src="/add.png" alt="" />
                        <span className="font-inter font-medium text-sm text-[#FFFFFF]">
                            Add User
                        </span>
                    </button>
                    <button className="flex items-center gap-1 px-4 justify-center border border-[#0D2B4E] rounded-[4px] w-[86px] h-9">
                        <img src="/export.png" alt="" />
                        <span className="font-inter font-medium text-sm text-[#0D2B4E]">
                        Export
                        </span>
                    </button>
                </div> 
            </div>


            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-5">
                {cards.map((card, index) => (
                    <div
                        key={index}
                        className="relative px-4 py-4 h-30 rounded-2xl bg-[#FFFFFF] shadow-md flex flex-col justify-between"
                    >
                        <div className="space-y-4">
                            <div className="relative flex justify-between items-center flex-nowrap">
                                <div className="text-xs font-medium font-inter text-[#667185] w-9/12">{card.title}</div>
                                <div className="absolute top-0.5 right-1 w-9 h-9 bg-[#FAFAFB] flex justify-center items-center rounded-md">
                                    <img src="/user.png" alt="Icon" className="w-[18px] h-[15px]" />
                                </div>
                            </div>
                            <div className="text-2xl font-semibold text-[#1D2739]">{card.value}</div>
                        </div>
                    </div>
                ))}
                </div>

                  {/* Tab Navigation */}
            <div className="flex items-center pt-5 border-b border-gray-300">
                {[
                { id: "allUsers", label: "All Users" },
                { id: "activeUsers", label: "Active Users" },
                { id: "pendingKYC", label: "Pending KYC" },
                { id: "inactiveUsers", label: "Inactive Users" },
                ].map((tab) => (
                <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`relative font-inter px-3 pb-1 text-sm sm:text-base transition-all ${
                    activeTab === tab.id
                        ? "font-semibold text-[#1E1E1E] text-base"
                        : "font-normal text-[#1E1E1E] text-base"
                    }`}
                >
                    {tab.label}
                    <span
                    className={`absolute bottom-0 left-1/2 -translate-x-1/2 h-[2px] w-10/12 transition-all ${
                        activeTab === tab.id ? "bg-[#1E1E1E] h-[3px]" : ""
                    }`}
                    />
                </button>
                ))}
            </div>


        <div className=" overflow-x-auto mt-9">
        {activeTab === "allUsers" && <AllUser />}
        {activeTab === "activeUsers" && <ActiveUsers />}
        {activeTab === "pendingKYC" && <PendingKYCTable />}
        {activeTab === "inactiveUsers" && <InactiveUsersTable />} 
      </div>
            <AddUserModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
        </div>
    );
};

export default UserManagement;