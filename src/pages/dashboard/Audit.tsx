import React from "react";
import AuditTable from "../../components/tables/auditTable/AuditTable";

const Audit: React.FC = () => {  
  return (
    <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 px-4 sm:px-6">
      <div className="flex justify-between items-center text-sm sm:text-base">
        <div className="flex flex-col gap-2 py-3">
          <span className="font-inter font-medium text-lg text-[#1E1E1E]">
            Audit Logs
          </span>
          <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
            Track and Review Admin Activities in Real-Time.
          </span>
        </div>
      
        <div className="flex items-center gap-4">
          <button className="flex items-center gap-1 px-4 justify-center border border-[#0D2B4E] rounded-[4px] w-[86px] h-9">
            <img src="/export.png" alt="Export" />
              <span className="font-inter font-medium text-sm text-[#0D2B4E]">
                Export
              </span>
          </button>
        </div>
      </div>
      
      <div className="mt-5">
        <span className="font-inter font-medium text-lg text-[#1E1E1E]">
          Activity Logs
        </span>
      </div>

      <div className="mt-9">
        <AuditTable />
      </div>
    </div>
  );
};

export default Audit;  
