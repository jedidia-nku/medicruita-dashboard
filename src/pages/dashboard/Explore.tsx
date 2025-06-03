import React, { useState } from "react";
import ExploreTable from "../../components/tables/exploreTable/ExploreTable";

const Explore: React.FC = () => {
  const [isAddResourceModalOpen, setIsAddResourceModalOpen] = useState(false);

  return (
    <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 px-4 sm:px-6">
      <div className="flex justify-between items-center text-sm sm:text-base">
        <div className="flex flex-col gap-2 py-3">
          <span className="font-inter font-medium text-lg text-[#1E1E1E]">
            Content Management
          </span>
          <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
            Manage Financial Resources and Learning Materials.
          </span>
        </div>
        <div className="flex items-center gap-4">
          <button className="h-9 flex bg-gradient-to-r from-[#1C5CA6] to-[#0D2B4E] items-center px-2 gap-2 rounded-[4px]"     
            onClick={() => setIsAddResourceModalOpen(true)}
          >
            <img src="/add.png" alt="Add" />
            <span className="font-inter font-medium text-base text-[#FFFFFF]">
              Add New Resource
            </span>
          </button>

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
          Resource Library
        </span>
      </div>

      <div className="mt-9">
        <ExploreTable
          isAddResourceModalOpen={isAddResourceModalOpen} 
          setIsAddResourceModalOpen={setIsAddResourceModalOpen} 
        />
      </div>
    </div>
  );
};


export default Explore;
