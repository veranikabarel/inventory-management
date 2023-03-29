import ReactPaginate from "react-paginate";

const Pagination = ({
  pageCount,
  onPageChange,
}: {
  pageCount: number;
  onPageChange: (selectedItem: { selected: number }) => void;
}) => {
  return (
    <ReactPaginate
      previousLabel="Previous"
      nextLabel="Next"
      breakLabel="..."
      pageCount={pageCount}
      onPageChange={onPageChange}
      containerClassName="flex justify-center my-6 "
      pageClassName="mr-1"
      pageLinkClassName="py-2 px-4 bg-white text-gray-600 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      activeLinkClassName="bg-red-500 text-black"
      previousClassName="mr-2"
      nextClassName="ml-2"
      previousLinkClassName="py-2 px-4 bg-white text-gray-600 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      nextLinkClassName="py-2 px-4 bg-white text-gray-600 rounded-lg shadow-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500"
      disabledClassName="opacity-50 cursor-not-allowed"
    />
  );
};

export default Pagination;
