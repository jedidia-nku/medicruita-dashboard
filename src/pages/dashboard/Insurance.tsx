import React, { useState } from "react";
import AvailableInsuranceTable from "../../components/tables/availableInsuranceTable/AvailableInsuranceTable";
import InsuranceRecords from "../../components/tables/insuranceRecords/IsuranaceRecords";

const Insurance: React.FC = () => {
  const [activeTab, setActiveTab] = useState("insuranceProvider");

  return (
    <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 px-4 sm:px-6">
      <div className="flex justify-between items-center text-sm sm:text-base">
        <div className="flex flex-col gap-2 py-3">
          <span className="font-inter font-medium text-lg text-[#1E1E1E]">
            Insurance Management
          </span>
          <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
            Manage Insurance Providers, Policies, and User Enrollments.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="h-9 flex bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E] items-center px-2 gap-2 rounded-[4px]">
            <img src="/add.png" alt="" />
            <span className="font-inter font-medium text-base text-[#FFFFFF]">
              Add Provider
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

      {/* Tab Navigation */}
      <div className="flex items-center pt-5 border-b border-gray-300">
        {[
          { id: "insuranceProvider", label: "Insurance Providers & Policies" },
          { id: "insuranceTransaction", label: "User Insurance Transactions" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setActiveTab(tab.id)}
            className={`relative font-inter px-6 pb-1 text-sm sm:text-base transition-all ${
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

      {/* Table Content Switching */}
      <div className="h-[670px] overflow-x-auto mt-9">
        {activeTab === "insuranceProvider" && <AvailableInsuranceTable />}
        {activeTab === "insuranceTransaction" && <InsuranceRecords />}
      </div>
    </div>
  );
};

export default Insurance;
