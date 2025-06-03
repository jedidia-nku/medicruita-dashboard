import { InsurancePolicies } from "../../../mockdata";

const AvailableInsuranceTable: React.FC = () => {
  return (
    <div className="flex flex-col w-full mx-auto">
      <div className="sm:overflow-x-auto pb-4">
        <div className="inline-block align-middle w-full">
          <div className="overflow-hidden border rounded-lg border-gray-300">
            {/* Table Header */}
            <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-[#FFFFFF] py-5 px-4 sm:px-5">
              <span className="text-xl text-[#1E1E1ECC] font-inter font-normal">
                Available Insurance Plans
              </span>
              <div className="flex justify-between border w-full sm:w-[490px] px-2 py-1 rounded-md items-center space-x-2 mt-3 sm:mt-0">
                <div className="flex items-center gap-2">
                  <img src="/Icon.png" alt="Search Icon" />
                  <input
                    type="text"
                    placeholder="Search..."
                    className="focus:outline-none w-full"
                  />
                </div>
                <img src="/instant_mix.png" alt="Filter Icon" />
              </div>
            </div>

            {/* Table */}
            <div className="overflow-x-auto">
              <table className="table-auto w-full no-scrollbar">
                {/* Table Head (Hidden on Mobile) */}
                <thead className="hidden sm:table-header-group">
                  <tr className="bg-gray-50 h-[40px]">
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">
                      Provider Name
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">
                      Policy Type
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900 min-w-[150px]">
                      Users Enrolled
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">
                      Premium (₦)
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">
                      Payment Duration
                    </th>
                    <th className="px-3 py-2 text-left text-sm font-semibold text-gray-900">
                      Status
                    </th>
                  </tr>
                </thead>

                {/* Table Body */}
                <tbody className="divide-y divide-gray-300">
                  {InsurancePolicies.map((policy) => (
                    <tr
                      key={policy.providerName}
                      className="bg-[#FFFFFF] transition-all h-[62px] duration-500 hover:bg-gray-50"
                    >
                      {/* Desktop View */}
                      <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                        {policy.providerName}
                      </td>
                      <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                        {policy.type}
                      </td>
                      <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                        {policy.usersEnrol}
                      </td>
                      <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                        ₦{policy.amount.toLocaleString()}
                      </td>
                      <td className="px-3  hidden sm:table-cell text-sm text-gray-900">
                        {policy.premium}
                      </td>
                      <td className="px-3 py-2 hidden sm:table-cell text-sm text-gray-900">
                        <div
                          className={`py-1.5 px-2.5 rounded-full flex justify-center w-20 items-center gap-1 ${
                            policy.status === "active"
                              ? "bg-emerald-50 text-emerald-600"
                              : "bg-yellow-50 text-yellow-600"
                          }`}
                        >
                          <span className="text-xs">{policy.status}</span>
                        </div>
                      </td>
                      <td className="flex items-center gap-0.5">
                        <button className="p-2 rounded-full bg-[#FFFFFF] group transition-all duration-500 hover:bg-black flex item-center">
                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path className="stroke-black group-hover:stroke-[#FFFFFF]" d="M10.0161 14.9897V15.0397M10.0161 9.97598V10.026M10.0161 4.96231V5.01231" stroke="black" stroke-width="2.5" stroke-linecap="round"></path>
                            </svg>
                        </button>
                    </td>

                      {/* Mobile View - Stacked Layout */}
                      <td className="px-4 py-4 sm:hidden w-full">
                        <div className="flex flex-col space-y-2 bg-gray-50 p-4 rounded-md shadow-sm">
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Provider:</span>
                            <span className="font-semibold">
                              {policy.providerName}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Policy Type:</span>
                            <span className="font-semibold">{policy.type}</span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Users Enrolled:</span>
                            <span className="font-semibold">
                              {policy.usersEnrol}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Premium:</span>
                            <span className="font-semibold">
                              ₦{policy.amount.toLocaleString()}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">
                              Payment Duration:
                            </span>
                            <span className="font-semibold">
                              {policy.premium}
                            </span>
                          </div>
                          <div className="flex justify-between text-sm">
                            <span className="text-gray-600">Status:</span>
                            <span
                              className={`px-2 py-1 rounded-md ${
                                policy.status === "active"
                                  ? "bg-green-100 text-green-600"
                                  : "bg-yellow-100 text-yellow-600"
                              }`}
                            >
                              {policy.status}
                            </span>
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

export default AvailableInsuranceTable;
