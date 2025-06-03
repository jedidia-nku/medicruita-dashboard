import { useState, useEffect, useRef } from "react";
import Pagination from "../../../helpers/paginations/Pagination";
import { mockResources } from "../../../mockdata"; // Ensure mockResources is correctly imported

interface ExploreTableProps {
  isAddResourceModalOpen: boolean;
  setIsAddResourceModalOpen: (isOpen: boolean) => void;
}

const ITEMS_PER_PAGE = 8;

const ExploreTable: React.FC<ExploreTableProps> = ({
  isAddResourceModalOpen,
  setIsAddResourceModalOpen,
}) => {

  const [currentPage, setCurrentPage] = useState(1);
  const [isFilterOpen, setIsFilterOpen] = useState(false); // State for filter dropdown
  const [openMenuIndex, setOpenMenuIndex] = useState<number | null>(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [isViewResourceModalOpen, setIsViewResourceModalOpen] = useState(false);
  const [selectedResource, setSelectedResource] = useState<any>(null);
  const [resourceToDelete, setResourceToDelete] = useState<any>(null);
  const [resources, setResources] = useState(mockResources);
  const [newResource, setNewResource] = useState({ title: "", type: "", category: "", file: null, url: "", status: "Active" });

  const menuRefs = useRef<{ [key: number]: HTMLDivElement | null }>({});

  const totalPages = Math.ceil(mockResources.length / ITEMS_PER_PAGE);
  const paginatedData = mockResources.slice(
    (currentPage - 1) * ITEMS_PER_PAGE,
    currentPage * ITEMS_PER_PAGE
  );

  const handlePageChange = (page: number) => {
    setCurrentPage(page);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      Object.values(menuRefs.current).forEach((menu) => {
        if (menu && !menu.contains(event.target as Node)) {
          setOpenMenuIndex(null);
        }
      });
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleDeleteClick = (resource: any) => {
    setResourceToDelete(resource);
    setIsDeleteModalOpen(true);
  };

  const handleDeleteConfirm = () => {
    if (resourceToDelete) {
      setResources(resources.filter((r) => r.id !== resourceToDelete.id));
    }
    setIsDeleteModalOpen(false);
    setResourceToDelete(null);
  };

  const handleOutsideClick = (event: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if ((event.target as HTMLElement).id === "modal-background") {
      setIsAddResourceModalOpen(false);
    }
  };

  const handleAddResource = () => {
    if (!newResource.title || !newResource.type || !newResource.category) {
      alert("Please fill in all required fields!");
      return;
    }

    setResources([...resources, { ...newResource, id: Date.now() }]);
    setIsAddResourceModalOpen(false);
    setNewResource({ title: "", type: "", category: "", file: null, url: "", status: "Active" });
  };


  return (
    <div className="flex flex-col w-full mx-auto">
      {/* ADD RESOURCE MODAL */}
      {isAddResourceModalOpen && (
        <div
          id="modal-background"
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          onClick={handleOutsideClick}>
          <div className="bg-white p-6 w-[500px] rounded-lg shadow-lg flex flex-col space-y-4">
            <h2 className="font-inter text-[#0D2B4E] font-medium text-[20px] leading-[32px] tracking-[-1px]">Add Resource</h2>

            {/* Title Input */}
            <div className="flex flex-col">
              <label className="text-sm text-[#1E1E1E] font-medium text-gray-700 mb-1">Title</label>
              <input
                placeholder="Title"
                className="border p-2 rounded-md"
                value={newResource.title}
                onChange={(e) => setNewResource({ ...newResource, title: e.target.value })}
              />
            </div>

            {/* Type Input */}
            <div className="flex flex-col">
              <label className="text-sm text-[#1E1E1E] font-medium text-gray-700 mb-1">Type</label>
              <select
                className="border p-2 rounded-md"
                value={newResource.type}
                onChange={(e) => setNewResource({ ...newResource, type: e.target.value })}>
                <option value="">Select Resource Type</option>
                <option value="Video">Video</option>
                <option value="Article">Article</option>
                <option value="PDF">PDF</option>
                <option value="Link">Link</option>
              </select>
            </div>  

            {/* Category Input */}
            <div className="flex flex-col">
              <label className="text-sm text-[#1E1E1E] font-medium text-gray-700 mb-1">Category</label>
              <select
                className="border p-2 rounded-md"
                value={newResource.category}
                onChange={(e) => setNewResource({ ...newResource, category: e.target.value })}
              >
                <option value="">Select Category</option>
                <option value="Savings">Savings</option>
                <option value="Investments">Investments</option>
                <option value="Insurance">Insurance</option>
              </select>
            </div>

            {/* Upload File Input */}
            <div className="flex flex-col">
            <label className="text-sm text-[#1E1E1E] font-medium text-gray-700 mb-1">Upload File</label>
            <label
              htmlFor="file-upload"
              className="cursor-pointer bg-white h-[144px] rounded-lg border-2 border-dashed border-[#0D2B4E] p-6 shadow-md text-gray-700 flex flex-col items-center justify-center"
            >
              <svg viewBox="0 0 640 512" height="36" className="fill-[#0D2B4E] mb-2">
                <path d="M144 480C64.5 480 0 415.5 0 336c0-62.8 40.2-116.2 96.2-135.9c-.1-2.7-.2-5.4-.2-8.1c0-88.4 71.6-160 160-160c59.3 0 111 32.2 138.7 80.2C409.9 102 428.3 96 448 96c53 0 96 43 96 96c0 12.2-2.3 23.8-6.4 34.6C596 238.4 640 290.1 640 352c0 70.7-57.3 128-128 128H144zm79-217c-9.4 9.4-9.4 24.6 0 33.9s24.6 9.4 33.9 0l39-39V392c0 13.3 10.7 24 24 24s24-10.7 24-24V257.9l39 39c9.4 9.4 24.6 9.4 33.9 0s9.4-24.6 0-33.9l-80-80c-9.4-9.4-24.6-9.4-33.9 0l-80 80z" />
              </svg>
              <p className="text-[#0B0B0B]-500">Drag your file(s) 
                <span className="text-[#0B0B0B]-600"> or</span> 
                <span className="text-[#0D2B4E] font-medium transition-all duration-300 hover:underline"> browse</span>
              </p>
              <p className="text-[#6D6D6D]-500 fontFamilies/secondary">
                 Max 20 MB files are allowed
              </p>
              
              <input
                id="file-upload"
                type="file"
                className="hidden"
                onChange={(e) => setNewResource({ ...newResource, file: e.target.files ? e.target.files[0] : null, url: "" })}
              />
            </label>
            </div> 

            {/* Upload URL Input */}
            <div className="flex flex-col">
              <label className="text-sm font-medium text-gray-700 mb-1">Upload URL</label>
              <div className="relative h-[62px]">
                {/* Input Field */}
                <input
                  type="text"
                  placeholder="https://sharefile.xyz/file.jpg"
                  className="w-full h-full border border-[#0D2B4E] rounded-lg p-4 pr-20 outline-none text-gray-700"
                  value={newResource.url}
                  onChange={(e) => setNewResource({ ...newResource, url: e.target.value, file: null })}
                />

                {/* Upload Button*/}
                <button 
                  className="absolute right-2 top-1/2 transform -translate-y-1/2 h-[30px] rounded-md bg-[#0D2B4E] text-white font-bold transition-all duration-300 hover:bg-[#0A2342] 
                  pt-1 pr-3 pb-1 pl-3"
                >
                  Upload
                </button>
              </div>
            </div>  

            <div className="flex items-center space-x-3">
              <span className="text-sm font-medium text-gray-700">Status:</span>
              <div className="flex items-center space-x-2">
                <label className="relative inline-flex items-center cursor-pointer">
                  <input
                    type="checkbox"
                    id="statusToggle"
                    className="sr-only peer"
                    checked={newResource.status === "Active"}
                    onChange={() =>
                      setNewResource({
                        ...newResource,
                        status: newResource.status === "Active" ? "Inactive" : "Active",
                      })
                    }
                  />

                  <div
                    className="w-12 h-6 bg-gray-300 rounded-full transition-all duration-300 peer-checked:bg-[#0D2B4E] relative">
                    <div
                      className="absolute top-1 left-1 w-4 h-4 bg-white rounded-full shadow-md transition-all duration-300 peer-checked:left-7">
                    </div>
                  </div>
                </label>

                {/* Active/Inactive Text */}
                <span className="text-sm font-medium" style={{ color: newResource.status === "Active" ? "#0D2B4E" : "#6B7280" }}>
                  {newResource.status}
                </span>
              </div>
            </div>

            <div className="flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsAddResourceModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 text-white rounded-md transition-all duration-300"
                style={{
                  background: "linear-gradient(291.98deg, #0D2B4E -3.08%, #1C5CA6 129.17%)",
                }}
                onClick={handleAddResource}>
                Save
              </button>
            </div>
          </div>
        </div>
      )}

       
      {/* DELETE CONFIRMATION MODAL */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
          <div className="bg-white p-6 w-[444px] h-[253px] rounded-[12px] shadow-lg flex flex-col justify-between">
            <h2 className="text-lg font-semibold">Delete Resource</h2>
            <p className="mt-2">Are you sure you want to delete this resource?</p>
            <div className="mt-4 flex justify-end space-x-4">
              <button className="px-4 py-2 bg-gray-300 rounded-md" onClick={() => setIsDeleteModalOpen(false)}>
                Cancel
              </button>
              <button className="px-4 py-2 bg-red-600 text-white rounded-md" onClick={handleDeleteConfirm}>
                Yes, Delete
              </button>
            </div>
          </div>
        </div>
      )}

      {/* VIEW RESOURCE MODAL */}
      {isViewResourceModalOpen && selectedResource && (
        <div 
          className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50"
          onClick={() => setIsViewResourceModalOpen(false)}
        >
          <div 
            className="bg-white w-[534px] h-[333px] rounded-[12px] shadow-lg flex flex-col space-y-4 p-6"
            onClick={(e) => e.stopPropagation()} 
          >
            {/* Modal Header */}
            <div className="flex justify-between items-center">
              <h2 className="font-inter text-[#0D2B4E] font-medium text-[20px] leading-[32px] tracking-[-1px]">
                Resource Details
              </h2>
              <button 
                className="w-10 h-10 flex items-center justify-center border border-gray-500 rounded-full text-gray-500 hover:text-gray-800 hover:border-gray-800 transition-all duration-300"
                onClick={() => setIsViewResourceModalOpen(false)}
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

            <div className="flex justify-between items-center mb-4">
              <h2 className="font-inter text-[#0D2B4E] font-medium text-[16px] leading-[32px] tracking-[-1px]">
                Resource Information
              </h2>
              <div className="flex items-center gap-6">
              <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path d="M21.7 7.3l-5-5c-.4-.4-1-.4-1.4 0l-10 10c-.2.2-.3.4-.3.7l-1 5c-.1.5.1 1 .3 1.4.3.3.7.5 1.1.5.1 0 .2 0 .3 0l5-1c.3-.1.5-.2.7-.3l10-10c.4-.4.4-1 0-1.4zM6 18l1-5 4 4-5 1zm6-2l-4-4 8.3-8.3 4 4L12 16z"/>
                </svg>
                <span className="text-700 text-[14px] text-[#0D2B4E] font-medium">Edit</span>
              </button>
              <button className="flex items-center gap-2 p-2 rounded-full hover:bg-gray-200">
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24">
                  <path fill="red" d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm5 13.6c.3.3.3.8 0 1.1-.3.3-.8.3-1.1 0L12 13.1l-3.9 3.9c-.3.3-.8.3-1.1 0s-.3-.8 0-1.1l3.9-3.9-3.9-3.9c-.3-.3-.3-.8 0-1.1s.8-.3 1.1 0L12 10.9l3.9-3.9c.3-.3.8-.3 1.1 0s.3.8 0 1.1L13.1 12l3.9 3.6z"/>
                </svg>
                <span className="text-700 text-[14px] text-[#C10606] font-medium">Deactivate</span>
              </button>
              </div>
            </div>


            {/* Resource Details */}
            <ul className="space-y-3 list-none pl-5">
              <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                  Title:
                </span> {selectedResource.title}
              </li>
              <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                  Type:
                </span> {selectedResource.type}
              </li>
              <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                  Category:
                </span> {selectedResource.category}
              </li>
              <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                  Date Added:
                </span> {selectedResource.dateAdded}
              </li>
              <li className="relative before:content-['○'] before:absolute before:-left-4 before:text-gray-700">
                <span className="font-inter font-normal text-[14px] leading-[16.94px] tracking-[0px]">
                  Status:
                </span> 
                <span 
                  className={`ml-2 w-[38.5px] h-[17px] rounded-[12px] rounded-full px-[6px] py-[1.5px] text-[12px] text-white ${
                    selectedResource.status === "Active" ? "bg-[#ECFDF3] text-[rgba(2,122,72,1)]" 
                  : "bg-[#C106061A] text-[#C10606]"
                  }`}
                >
                  {selectedResource.status}
                </span>
              </li>
            </ul>
          </div>
        </div>
      )}

      

      <div className="pb-4">
        <div className="inline-block align-middle w-full">
          <div className="overflow-hidden border rounded-lg border-gray-300">
            {/* Table Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#FFFFFF] py-5 px-4 sm:px-5">
              <span className="text-[20px] font-inter font-normal text-[#1E1E1ECC]">
                Learning Resources
              </span>
              <div className="flex justify-between border w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <img src="/Icon.png" alt="Search Icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="focus:outline-none"
                  />
                </div>
                <img src="/instant_mix.png" 
                alt="Filter Icon" 
                className="cursor-pointer" 
                onClick={() => setIsFilterOpen(!isFilterOpen)}
                />
              

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
              </div>
            </div>

            {/* Table Without Scroll */}
            <div className="w-full">
              <table className="table-auto w-full">
                {/* Table Head */}
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-gray-50 h-[40px]">
                    <th className="w-[5px] px-3 py-[10px] text-left">
                      <input
                        type="checkbox"
                        className="w-5 h-5 border border-gray-300 rounded-md"
                      />
                    </th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144]">
                      Title
                    </th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[130px]">
                      Type
                    </th>
                    <th className="px-6 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[185px]">
                      Category
                    </th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[160px]">
                      Date Added
                    </th>
                    <th className="px-3 py-[10px] text-left text-[14px] font-semibold text-[#4F5144] w-[100px]">
                      Status
                    </th>
                    <th className="w-[80px] px-3 py-[10px] text-center text-sm font-semibold"></th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-300 text-[rgba(30,30,30,0.75)]">
                  {paginatedData.length > 0 ? (
                    paginatedData.map((resource, index) => (
                      <tr key={resource.id} className="bg-[#FFFFFF] hover:bg-gray-50">
                        <td className="px-3 py-[16px]">
                          <input
                            type="checkbox"
                            className="w-5 h-5 border border-gray-300 rounded-md"
                          />
                        </td>
                        <td className="px-3 py-[16px] text-[rgba(30,30,30,0.75)]">{resource.title}</td>
                        <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[130px]">{resource.type}</td>
                        <td className="px-6 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[185px]">{resource.category}</td>
                        <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[160px]">{resource.dateAdded}</td>
                        <td className="px-3 py-[16px] text-sm text-[rgba(30,30,30,0.75)] w-[100px]">
                          <div className="flex items-center gap-4">
                            <div
                              className={`flex justify-center items-center gap-1 
                              ${resource.status === "Active" ? "bg-[#ECFDF3] text-[#027A48]" 
                              : "bg-[rgba(193,6,6,0.1)] text-[rgba(193,6,6,1)]"} 
                              rounded-[16px] px-[6px] py-[2px] w-fit`}
                            >
                              <svg width="5" height="6" viewBox="0 0 5 6" fill="none">
                                <circle cx="2.5" cy="3" r="2.5"
                                  fill={resource.status === "Active" ? "#027A48" : "rgba(193,6,6,1)"} 
                                />
                              </svg>
                              <span className="text-[12px] font-semibold font-['DM Sans']">{resource.status}</span>
                            </div>
                          </div>
                        </td>

                        <td className="w-[80px] px-3 py-[16px] flex justify-center items-center">
                          <button className="p-2 rounded-full bg-[#FFFFFF] group transition-all duration-500 hover:bg-black flex items-center"
                          onClick={() => setOpenMenuIndex(openMenuIndex === index ? null : index)}
                          >
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path className="stroke-black group-hover:stroke-[#FFFFFF]" d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" stroke="black" strokeWidth="2.5" strokeLinecap="round"></path>
                            </svg>
                          </button>

                          {openMenuIndex === index && (
                            <div
                              ref={(el) => (menuRefs.current[index] = el)}
                              className="absolute right-0 mt-2 w-[180px] bg-white shadow-lg border border-gray-200 rounded-[10px] py-2 z-10"
                            >
                              <ul className="py-2 text-sm text-gray-700">
                                <li
                                  className="px-4 py-2 cursor-pointer hover:bg-gray-100 rounded-md"
                                  onClick={() => {
                                    console.log("View Resource:", resource.title);
                                    setSelectedResource(resource); 
                                    setIsViewResourceModalOpen(true); 
                                    setOpenMenuIndex(null); 
                                  }}
                                >
                                  View Resource
                                </li>

                                <li
                                  className="px-4 py-2 cursor-pointer hover:bg-red-100 text-red-500 rounded-md"
                                  onClick={() => {
                                    handleDeleteClick(resource); 
                                    setOpenMenuIndex(null);    
                                  }}
                                >

                                  Delete Resource
                                </li>
                              </ul>
                            </div>
                          )}
                        </td>
                      </tr>
                    ))
                  ) : (
                    
                    <tr>
                    <td colSpan={7} className="text-center py-6 text-gray-500">
                      <img src="/no-data.svg" alt="No Data" className="w-32 mx-auto mb-2" />
                      <p className="text-gray-500">Oops! No resources available right now.</p>
                    </td>
                  </tr>
                  
                  )}
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className="py-4 bg-[#FFFFFF]">
              <Pagination 
                currentPage={currentPage} 
                totalPages={totalPages} 
                onPageChange={handlePageChange} 
              />
            </div>

          </div>
        </div>
      </div>
    </div>
  );
};

export default ExploreTable;
