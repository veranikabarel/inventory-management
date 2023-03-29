import { useState } from "react";
import { HardwareInUseMock, HardwareInUseProps } from "./data";
import Pagination from "./Pagination";

const HardwareInUse = () => {
  const [pageNumber, setPageNumber] = useState(0);
  const itemsPerPage = 5;
  const pagesVisited = pageNumber * itemsPerPage;

  const displayHardwareInUse = HardwareInUseMock.slice(
    pagesVisited,
    pagesVisited + itemsPerPage
  ).map((hw: HardwareInUseProps, index: number) => (
    <tr key={hw.serialNumber}>
      <td className="p-4 border-l border-r border-b">{hw.serialNumber}</td>
      <td className="p-4 border-r border-b">{hw.model}</td>
      <td className="p-4 border-r border-b">{hw.quantity}</td>
      <td className="p-4 border-r border-b">{hw.employeeName}</td>
      <td className="p-4 border-r border-b">{hw.employeeSurname}</td>
    </tr>
  ));

  const pageCount = Math.ceil(HardwareInUseMock.length / itemsPerPage);

  const changePage = ({ selected }: { selected: number }) => {
    setPageNumber(selected);
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6">Hardware in Use</h1>
      <div className="flex justify-end mb-4"></div>
      <table className="table-auto w-full text-left">
        <thead>
          <tr>
            <th className="p-4 border-t border-l border-r border-b">
              Serial Number
            </th>
            <th className="p-4 border-t border-r border-b">Model</th>
            <th className="p-4 border-t border-r border-b">Quantity</th>
            <th className="p-4 border-t border-r border-b">Employee Name</th>
            <th className="p-4 border-t border-r border-b">Employee Surname</th>
          </tr>
        </thead>
        <tbody>{displayHardwareInUse}</tbody>
      </table>
      <Pagination onPageChange={changePage} pageCount={pageCount} />
    </div>
  );
};

export default HardwareInUse;
