import React, {useState} from "react";
import ProfileSettings from "../../components/Settings/ProfileSettings";
import SecurityandAccess from "../../components/Settings/Security&Access";
import PayoutSettings from "../../components/Settings/Payout";
import GeneralSettings from "../../components/Settings/General";


const Settings: React.FC = () => {
      const [activeTab, setActiveTab] = useState("profileSettings");

    return (
        <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 px-4 sm:px-6">
            <div className="flex justify-between items-center text-sm sm:text-base">
                <div className="flex flex-col gap-2 py-3">
                        <span className="font-inter font-medium text-lg text-[#1E1E1E]">
                            Platform Settings
                        </span>
                        <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
                        Configure Platform Preferences, Payout Rules, and Security Settings.
                        </span>
                </div>
                <div className="flex items-center gap-4">
                    <button className="flex items-center gap-1 px-4 justify-center border border-[#0D2B4E] rounded-[4px] w-[86px] h-9">
                        <img src="/export.png" alt="" />
                        <span className="font-inter font-medium text-sm text-[#0D2B4E]">
                        Export
                        </span>
                    </button>
                </div> 
            </div>

                  {/* Tab Navigation */}
            <div className="flex items-center pt-5 border-b border-gray-300">
                {[
                { id: "profileSettings", label: "Profile Settings" },
                { id: "generalSettings", label: "General Settings" },
                { id: "payoutSettings", label: "Payout Settings" },
                { id: "security&Access", label: "Security & Access" },
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

        <div className="h-[670px] overflow-x-auto mt-9">
        {activeTab === "profileSettings" && <ProfileSettings />}
        {activeTab === "generalSettings" && <GeneralSettings />}
        {activeTab === "payoutSettings" && <PayoutSettings />}
        {activeTab === "security&Access" && <SecurityandAccess />} 
      </div>
        </div>
    );
};

export default Settings;