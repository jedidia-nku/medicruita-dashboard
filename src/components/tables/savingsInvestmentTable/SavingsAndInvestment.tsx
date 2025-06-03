import { useRef, useState } from "react";
import Pagination from "../../../helpers/paginations/Pagination";
import { mockTransactions } from "../../../mockdata";
import SidebarFilter from "../../Settings/Modals/SIdebarFilter";
import ContextMenu from "../../Settings/Modals/ContextMenu";

interface savingsnTransactionProps {
    type: "allSavings" | "allInvestment" | "savingTransactions" | "investmentTransaction";
}

const SavingsAndInvestmentTable: React.FC<savingsnTransactionProps> = ({ type }) => {

    const [menuOpenId, setMenuOpenId] = useState<String | null>(null);
        const [isOpen, setIsOpen] = useState(false);
        const [menuOpen, setMenuOpen] = useState(false);
        const buttonRef = useRef<HTMLButtonElement>(null);

        const handleMenuOpen = (transactionId: String) => {
            setMenuOpenId(menuOpenId === transactionId ? null : transactionId);
          };
    
        const handleMenuClose = () => setMenuOpen(false);

    return (
        <div className="flex flex-col w-full mx-auto ">
            <div className="sm:overflow-x-auto pb-4">
                <div className="inline-block align-middle w-full">
                    <div className="overflow-hidden border rounded-lg border-gray-300">
                        {/* Table Header */}
                        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#FFFFFF] py-5 px-4 sm:px-5">
                            <span className="text-xl text-[#1E1E1ECC] font-inter font-normal ">
                                {type === "allSavings" && ("User Savings Plans Overview")}
                                {type === "allInvestment" && ("User Investment Portfolio")}
                                {type === "savingTransactions" && ("Savings Deposit & Withdrawal History")}
                                {type === "investmentTransaction" && ("Investment Funding & Payout Records")}
                            </span>
                            <div className="flex justify-between border w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                                <div className="flex items-center gap-2">
                                    <img src="/Icon.png" alt="Search Icon" />
                                    <input type="text" placeholder="Search..." className=" focus:outline-none" />
                                </div>
                                <div className="relative">
                                <button onClick={() => setIsOpen(!isOpen)}>
                                <img src="/instant_mix.png" alt="Filter Icon" />
                                </button>
                                 {/* Modal */}
                                 {isOpen && (
                                <SidebarFilter
                                    items={[
                                    { label: "Filter By Date Range", onClick: () => {} },
                                    {label: "Filter By Status", onClick: () => alert("Viewing details")}
                                    ]}
                                    isOpen={isOpen}
                                    onClose={handleMenuClose}
                                />
                                )}
                                </div>
                            </div>
                        </div>

                        {/* Responsive Table */}
                        <div className="overflow-x-auto ">
                            <table className="table-auto w-full">
                                {/* Table Head */}
                                <thead className="hidden sm:table-header-group">
                                    <tr className="bg-gray-50 h-[40px]">
                                        <th className="px-3 py-2">
                                            <input type="checkbox" className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                        </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900"> Name </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900"> Transaction ID </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900 min-w-[150px]"> Type </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900"> Amount (₦) </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900"> Date & Time </th>
                                        <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900"> Status </th>
                                    </tr>
                                </thead>

                                {/* Table Body */}
                                <tbody className="divide-y divide-gray-300">
                                    {mockTransactions.map((transaction) => (
                                        <tr key={transaction.id} className="bg-[#FFFFFF] transition-all duration-500 hover:bg-gray-50">
                                            {/* Desktop View */}
                                            <td className="px-3 py-2 hidden sm:table-cell">
                                                <input type="checkbox" className="w-5 h-5 border border-gray-300 rounded-md hover:border-indigo-500 hover:bg-indigo-100 checked:bg-indigo-100" />
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell">
                                                <p className="text-sm text-gray-900">{transaction.name}</p>
                                            </td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{transaction.id}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{transaction.type}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">₦{transaction.amount.toLocaleString()}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">{transaction.date}</td>
                                            <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                                                <div className={`py-1.5 px-2.5 rounded-full flex justify-center w-24 items-center gap-1 ${
                                                    transaction.status === "successful" ? "bg-emerald-50 text-emerald-600" 
                                                    : transaction.status === "pending" ? "bg-yellow-50 text-yellow-600"
                                                    : "bg-red-50 text-red-600"
                                                }`}>
                                                    <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                                                        <circle cx="2.5" cy="3" r="2.5" fill={
                                                            transaction.status === "successful" ? "#059669" 
                                                            : transaction.status === "pending" ? "#D97706" 
                                                            : "#DC2626"
                                                        }></circle>
                                                    </svg>
                                                    <span className="text-xs">{transaction.status}</span>
                                                </div>
                                            </td>
                                            <td className="relative flex p-5 items-center gap-0.5">
                                            <button
                                            ref={buttonRef}
                                            className="p-2 rounded-full bg-[#FFFFFF] group transition-all duration-500 hover:bg-black flex item-center"
                                            onClick={() => handleMenuOpen(transaction.id)}
                                            >
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path className="stroke-black group-hover:stroke-[#FFFFFF]" d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" stroke="black" strokeWidth="2.5" strokeLinecap="round"></path>
                                            </svg>
                                            </button>

                                            {menuOpenId === transaction.id && type === "allSavings" && (
                                                <ContextMenu
                                                items={[
                                                    { label: "View Details", onClick: () => alert("Viewing details") },
                                                    { label: "Retry  Transaction", onClick: () => alert("Retry  Transaction") },
                                                    { label: "Approve Withdrawal", onClick: () => alert("Approve Withdrawal") },
                                                    { label: "Decline Withdrawal", onClick: () => alert("Decline Withdrawal"), className: "text-[#C10606]" }
                                                ]}
                                                isOpen={menuOpenId === transaction.id}
                                                onClose={handleMenuClose}
                                                modalType="savings"
                                                />
                                            )}
                                            {menuOpenId === transaction.id && type === "allInvestment" && (
                                                <ContextMenu
                                                items={[
                                                    { label: "View Details", onClick: () => alert("Viewing details") },
                                                    { label: "Retry  Transaction", onClick: () => alert("Retry  Transaction") },
                                                    { label: "Approve Withdrawal", onClick: () => alert("Approve Withdrawal") },
                                                    { label: "Decline Withdrawal", onClick: () => alert("Decline Withdrawal"), className: "text-[#C10606]" }
                                                ]}
                                                isOpen={menuOpenId === transaction.id}
                                                onClose={handleMenuClose}
                                                modalType="investment"
                                                />
                                            )}
                                            </td>

                                            {/* Mobile View - Stacked Layout */}
                                            <td className="px-4 py-4 sm:hidden">
                                                <div className="flex flex-col space-y-2">
                                                    <div className="flex items-center justify-between">
                                                        <div className="flex items-center gap-3">
                                                            <img src={transaction.image} alt={transaction.name} className="w-8 h-8 rounded-full" />
                                                            <p className="text-sm font-medium">{transaction.name}</p>
                                                        </div>
                                                        <div className="text-xs px-2 py-1 rounded-full font-medium text-[#FFFFFF] bg-gray-800">
                                                            {transaction.type}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Transaction ID:</span>
                                                        <span className="font-semibold">{transaction.id}</span>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Amount:</span>
                                                        <span className="font-semibold">₦{transaction.amount.toLocaleString()}</span>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Status:</span>
                                                        <div className={`px-2 py-1 rounded-md ${
                                                            transaction.status === "successful" ? "bg-green-100 text-green-600" 
                                                            : transaction.status === "pending" ? "bg-yellow-100 text-yellow-600"
                                                            : "bg-red-100 text-red-600"
                                                        }`}>
                                                            {transaction.status}
                                                        </div>
                                                    </div>

                                                    <div className="flex justify-between text-sm text-gray-600">
                                                        <span>Date:</span>
                                                        <span className="font-semibold">{transaction.date}</span>
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

export default SavingsAndInvestmentTable;
