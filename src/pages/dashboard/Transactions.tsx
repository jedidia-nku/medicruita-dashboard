import React from "react";
import TransactionTable from "../../components/tables/transactionsTable/TransactionsTable";

const Transactions: React.FC = () => {

    return (
        <div className="flex flex-col bg-[#FAFAFB] min-h-screen pt-5 sm:px-6">
            <div className="flex justify-between items-center text-sm sm:text-base mb-5">
                <div className="flex flex-col gap-2 py-3">
                        <span className="font-inter font-medium text-lg text-[#1E1E1E]">
                            Transactions Management
                        </span>
                        <span className="font-inter font-normal text-sm text-[#1E1E1EBF]">
                            Monitor, Track, and Manage All User Transactions in Real-Time.
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

            <div>
                <span className="font-inter font-medium text-lg text-[#1E1E1E]">
                    Transactions Records
                </span>
            </div>


            <div className="h-[670px] overflow-x-auto mt-9">
                <TransactionTable />
            </div>
        </div>
    );
};

export default Transactions;