import { useState } from "react";
import { Hardware, HardwareProps } from "./data";
import Pagination from "./Pagination";

const Dashboard = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const [searchQuery, setSearchQuery] = useState("");
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;

  const filteredHardware = Hardware.filter((hw: HardwareProps) => {
    return hw.serialNumber.toLowerCase().includes(searchQuery.toLowerCase());
  });

  const displayHardware = filteredHardware
    .slice(pagesVisited, pagesVisited + itemsPerPage)
    .map((hw: HardwareProps, index: number) => (
      <tr key={hw.serialNumber}>
        <td className="p-4 border-l border-r border-b">{hw.serialNumber}</td>
        <td className="p-4 border-r border-b">{hw.model}</td>
        <td className="p-4 border-r border-b">{hw.quantity}</td>
      </tr>
    ));

  const pageCount = Math.ceil(filteredHardware.length / itemsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  const handleSearchInputChange = (
    event: React.ChangeEvent<HTMLInputElement>
  ) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">All Hardware</h1>
      <div className="flex justify-between mb-4">
        <div className="w-1/3">
          <input
            type="text"
            placeholder="Search by Serial Number"
            value={searchQuery}
            onChange={handleSearchInputChange}
            className="px-4 py-2 rounded-lg w-full border border-gray-300"
          />
        </div>
      </div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="p-4 border-t border-l border-r border-b">
              Serial Number
            </th>
            <th className="p-4 border-t border-r border-b">Model</th>
            <th className="p-4 border-t border-r border-b">Quantity</th>
          </tr>
        </thead>
        <tbody>{displayHardware}</tbody>
      </table>
      <Pagination onPageChange={changePage} pageCount={pageCount} />
    </div>
  );
};

export default Dashboard;
