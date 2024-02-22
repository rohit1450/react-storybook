import React, { useState } from "react";
import { ChevronRightIcon } from "@heroicons/react/20/solid";
import { ChevronLeftIcon } from "@heroicons/react/20/solid";

export interface TablePaginationProps {
  dataSet: {
    id: number;
    Name: string;
    Position: string;
    Office: string;
    Age: number;
    StartDate: string;
    Salary: string;
  }[];
}

const TablePagination: React.FC<TablePaginationProps> = ({ dataSet }) => {
  const [itemsPerPage, setItemsPerPage] = useState(10);
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.ceil(dataSet.length / itemsPerPage);

  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentItems = dataSet.slice(indexOfFirstItem, indexOfLastItem);

  const handlePageChange = (pageNumber: number) => {
    setCurrentPage(pageNumber);
  };

  return (
    <>
      <h1 className="text-2xl text-center uppercase font-bold mb-4">
        Employee Details
      </h1>
      <div className="flex flex-wrap justify-between items-center gap-1">
        <div className="flex items-center gap-1">
          <h5 className="text-base">Display</h5>
          <select
            value={itemsPerPage}
            onChange={(e) => setItemsPerPage(Number(e.target.value))}
            className="px-1 py-1 rounded-md border-2 border-gray outline-none"
          >
            <option value="10">10</option>
            <option value="20">20</option>
            <option value="30">30</option>
            <option value="40">40</option>
          </select>
          <h5 className="text-base">results</h5>
        </div>
      </div>

      <table className="w-full mt-5">
        <thead className="text-left hidden md:table-header-group">
          <tr>
            <th>SNo</th>
            <th>Name</th>
            <th>Position</th>
            <th>Office</th>
            <th>Age</th>
            <th>Start date</th>
            <th>Salary</th>
          </tr>
        </thead>
        <tbody>
          {currentItems.map((person, index) => (
            <React.Fragment key={index}>
              <tr
                className={`hidden sm:table-row ${index % 2 === 0 && "bg-grey-light"}`}
              >
                <td>#{person.id}</td>
                <td>{person.Name}</td>
                <td>{person.Position}</td>
                <td>{person.Office}</td>
                <td>{person.Age}</td>
                <td>{person.StartDate}</td>
                <td>${person.Salary}</td>
              </tr>
              <tr className="sm:hidden">
                <td className="bg-grey-light">
                  <div className="flex justify-between bg-tableGray px-3">
                    <strong>Name: </strong>
                    {person.Name}
                  </div>
                  <div className="flex justify-between px-3">
                    <strong>Position: </strong>
                    {person.Position}
                  </div>
                  <div className="flex justify-between px-3">
                    <strong>Office: </strong>
                    {person.Office}
                  </div>
                  <div className="flex justify-between px-3">
                    <strong>Age: </strong>
                    {person.Age}
                  </div>
                  <div className="flex justify-between px-3">
                    <strong>Start Date: </strong>
                    {person.StartDate}
                  </div>
                  <div className="flex justify-between px-3">
                    <strong>Salary: </strong>${person.Salary}
                  </div>
                </td>
              </tr>
            </React.Fragment>
          ))}
        </tbody>
      </table>

      <div className="flex flex-wrap justify-between items-center mt-5">
        <div className="text-base">
          Showing Page {currentPage} of {totalPages} Total : {dataSet.length}{" "}
          entries
        </div>
        <div className="flex gap-1 items-center">
          <button
            className="bg-tableGray rounded-md px-1 py-1"
            onClick={() => handlePageChange(currentPage - 1)}
            disabled={currentPage === 1}
          >
            <ChevronLeftIcon className="h-6 w-6" />
          </button>
          {[...Array(totalPages)].map((_, index) => (
            <button
              key={index}
              className={`${
                currentPage === index + 1
                  ? "bg-danger text-white"
                  : "bg-tableGray"
              } rounded-md px-2 py-1`}
              onClick={() => setCurrentPage(index + 1)}
            >
              {index + 1}
            </button>
          ))}
          <button
            className="bg-tableGray rounded-md px-1 py-1"
            onClick={() => handlePageChange(currentPage + 1)}
            disabled={currentPage === totalPages}
          >
            <ChevronRightIcon className="h-6 w-6" />
          </button>
        </div>
      </div>
    </>
  );
};

export default TablePagination;
