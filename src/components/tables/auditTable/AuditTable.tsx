import { useState, useRef, useEffect } from "react";
import Pagination from "../../../helpers/paginations/Pagination";
import { mockAudits } from "../../../mockdata";

const ITEMS_PER_PAGE = 8; // Number of rows per page

type Log = {
  adminName: string;
  logId: string;
  action: string;
  affectedUser: string;
  dateTime: string;
  status: string;
  role?: string;
  email?: string;
  ipAddress?: string;
  responseMessage?: string;
};

const AuditTable: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false);
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [showLogDetails, setShowLogDetails] = useState(false); 
  const [logDetails, setLogDetails] = useState(""); 
  const [selectedLog, setSelectedLog] = useState<Log | null>(null);
  const menuRefs = useRef(new Map<number, HTMLDivElement | null>());


  // Handle click outside to close menu
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      menuRefs.current.forEach((menu) => {
        if (menu && !menu.contains(event.target as Node)) {
          setOpenMenuIndex(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Calculate total pages
  const totalPages = Math.ceil(mockAudits.length / ITEMS_PER_PAGE);

  const paginatedData = mockAudits.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  // Function to handle page change
  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  // Function to handle opening the modal with specific log details
  const handleViewDetails = (log: Log) => {
    setSelectedLog(log); // Set the log details
    setOpenMenuIndex(null); // Close the menu after selecting
  };

  // Function to close the modal
  const closeModal = () => {
    setSelectedLog(null); // Reset selected log and close the modal
  };


  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="sm:overflow-x-auto pb-4">
        <div className="inline-block align-middle w-full">
          <div className="overflow-hidden border rounded-lg border-gray-300">
            {/* Table Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#FFFFFF] py-5 px-4 sm:px-5">
              <span className="text-[20px] font-inter font-normal text-[#1E1E1ECC]">
                Admin Activity Logs
              </span>
              <div className="flex justify-between border w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <img src="/Icon.png" alt="Search Icon" />
                  <input type="text" placeholder="Search..." className="focus:outline-none" />
                </div>
                  <img src="/instant_mix.png" 
                  alt="Filter Icon" 
                  className="cursor-pointer" 
                  onClick={() => setIsFilterOpen(!isFilterOpen)}/>
              </div>
            </div>

            {/* Filter Dropdown */}
            {isFilterOpen && (
              <div className="absolute right-0 mt-2 w-[180px] h-[116px] bg-white shadow-lg border border-gray-200 
                rounded-[10px] py-2 z-10">
                  <ul className="py-2 text-sm text-gray-700">
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md font-[500] text-[12px]"
                        onClick={() => {
                          console.log("Filter by Date Range");
                          setIsFilterOpen(false);
                        }}
                      >
                        Filter By Date Range
                      </li>
                      <li
                        className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md font-[500] text-[12px]"
                        onClick={() => {
                          console.log("Filter by Status");
                          setIsFilterOpen(false);
                        }}
                      >
                        Filter By Status
                      </li>
                    </ul>
                </div>
            )}  


            {/* Responsive Table */}
            <div className="w-full">
              <table className="table-auto w-full">
                {/* Table Head */}
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-gray-50 h-[40px]">
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144]">Admin Name</th>
                    <th className="px-3 py-[10px] text-center text-[14px] font-semibold text-[#4F5144] w-[160px]">Log ID</th>
                    <th className="px-6 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[145px]">Action</th>
                    <th className="px-6 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[185px]">Affected User</th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[140px]">Date & Time</th>
                    <th className="px-3 py-[10px] text-center text-[14px] font-semibold text-[#4F5144] w-[90px]">Status</th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[80px]"></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-300 text-[rgba(30,30,30,0.75)]">
                  {paginatedData.map((log, index) => ( 
                    <tr key={log.logId} className="bg-[#FFFFFF] hover:bg-gray-50">
                      <td className="px-3 py-[16px] text-[rgba(30,30,30,0.75)]">{log.adminName}</td>
                      <td className="px-3 py-[16px] text-[rgba(30,30,30,0.75)] w-[130px]">{log.logId}</td>
                      <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[185px]">{log.action}</td>
                      <td className="px-6 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[185px]">{log.affectedUser}</td>
                      <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[160px]">{log.dateTime}</td>
                      <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[100px]">
                        <div className="flex items-center gap-4">
                          {/* Status Badge */}
                          <div
                            className={`flex justify-center items-center gap-1 
                              ${log.status === "Success" ? "bg-[#ECFDF3] text-[#027A48]" 
                              : "bg-[rgba(193,6,6,0.1)] text-[rgba(193,6,6,1)]"} 
                              rounded-[16px] px-[6px] py-[2px] w-fit`}
                          >
                            <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                              <circle cx="2.5" cy="3" r="2.5"
                                fill={log.status === "Success" ? "#027A48" : "rgba(193,6,6,1)"} 
                              />
                            </svg>
                            <span className="text-[12px] font-semibold font-['DM Sans']">{log.status}</span>
                          </div>
                        </div>
                      </td>

                      <td className="w-[80px] px-3 py-[16px] flex justify-center items-center relative">
                          <button 
                          className="p-2 rounded-full bg-[#FFFFFF] group transition-all duration-500 hover:bg-black flex items-center"
                          onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}>
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="stroke-black group-hover:stroke-[#FFFFFF]" 
                              d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" 
                              stroke="black" 
                              strokeWidth="2.5" 
                              strokeLinecap="round"></path>
                            </svg>
                          </button>

                          {openMenuIndex === index && (
                          <div ref={(el) => menuRefs.current.set(index, el)}
                            className="absolute right-0 mt-2 w-[180px] bg-white shadow-lg border border-gray-200 rounded-[10px] py-2 z-10"
                          >
                            <ul className="py-2 text-sm text-gray-700">
                              <li className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                onClick={() => {
                                  handleViewDetails(log);
                                  setOpenMenuIndex(null);
                                }}
                              >
                                View Details
                              </li>
                            </ul>
                          </div>
                        )}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>   
            </div>

            {/* Pagination Below Table */}
            <div className="py-4 bg-[#FFFFFF]">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </div>

          </div>
        </div>

        {/* Log Details Modal */}
          {selectedLog && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
              onClick={closeModal}
            onKeyDown={(e) => {
              if (e.key === 'Escape') {
                closeModal();
              }
            }}
            role="dialog"
            aria-labelledby="log-details-title"
            aria-describedby="log-details-description"
            tabIndex={-1}
          >
              <div
                onClick={(e) => e.stopPropagation()}
                aria-labelledby="log-details-title"
                style={{
                  backgroundColor: 'white',
                  width: '534px',
                  height: '712px',
                  borderRadius: '12px',
                  paddingTop: '24px',
                  paddingRight: '24px',
                  paddingBottom: '12px',
                  paddingLeft: '24px',
                }}
              >
                {/* Modal Header */}
                <div className="flex justify-between items-center">
                  <h2 className="font-inter text-[#0D2B4E] font-medium text-[20px] leading-[32px] tracking-[-1px]">Log Details</h2>
                    <button 
                      className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-500 hover:text-gray-800 hover:border-gray-800 transition-all duration-300"
                      onClick={() => setSelectedLog(null)}
                      aria-label="Close modal"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="w-5 h-5 text-gray-700"
                      >
                        <line x1="18" y1="6" x2="6" y2="18" />
                        <line x1="6" y1="6" x2="18" y2="18" />
                      </svg>
                    </button>
                </div>

                {/* Horizontal Line */}
                <hr className="my-4 border-gray-300" />

                <div className="mb-4">
                  <h2 className="font-inter text-[#0D2B4E] font-medium text-[16px] leading-[32px] tracking-[-1px]">
                    Admin Details
                  </h2>

                  <ul className="space-y-3 list-none pl-5">
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                      <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                      Admin Name:
                      </span> {selectedLog.adminName}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                        Role:
                      </span> {selectedLog.role}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">Email:
                      </span> {selectedLog.email}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">Status:
                      </span> {selectedLog.status}
                    </li>
                  </ul>
                </div>
                
                <div className="mb-4">
                  <h2 className="font-inter text-[#0D2B4E] font-medium text-[16px] leading-[32px] tracking-[-1px]">
                    Action Performed
                  </h2>
                  <ul className="space-y-3 list-none pl-5">
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">Action:
                      </span> {selectedLog.action}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                      Date & Time:
                    </span> {selectedLog.dateTime}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">IP Address:
                      </span> {selectedLog.ipAddress}
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="font-inter text-[#0D2B4E] font-medium text-[16px] leading-[32px] tracking-[-1px]">
                    Affected User Details
                  </h2>
                  <ul className="space-y-3 list-none pl-5">
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                      <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                        User Name:
                      </span> {selectedLog.affectedUser}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                        User ID:
                      </span> {selectedLog.logId}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                        Email:
                      </span> {selectedLog.email}
                    </li>
                  </ul>
                </div>

                <div className="mb-4">
                  <h2 className="font-inter text-[#0D2B4E] font-medium text-[16px] leading-[32px] tracking-[-1px]">
                    System Response
                  </h2>
                  <ul className="space-y-3 list-none pl-5">
                  <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">Status:
                      </span> {selectedLog.status}
                    </li>
                    <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                    <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                        Response Message:
                      </span> {selectedLog.responseMessage}
                    </li>
                  </ul>
                </div>
                    
              </div>
            </div>
          )} 
      </div>
    </div>
  );
};

export default AuditTable;
