import PaginationItem from "./PaginationItem";

const Pagination = (props) => {
  const { pageChangeHandler, lastPage, currentPage, firstPage } = props;

  let arr = [1, 2, 3, 4, 5, 6, 7];
  if (lastPage > 7) {
    if (currentPage < firstPage + 4) {
      arr = [
        firstPage,
        firstPage + 1,
        firstPage + 2,
        firstPage + 3,
        firstPage + 4,
        "...",
        lastPage,
      ];
    } else if (currentPage > lastPage - 4) {
      arr = [
        firstPage,
        "...",
        lastPage - 4,
        lastPage - 3,
        lastPage - 2,
        lastPage - 1,
        lastPage,
      ];
    } else {
      arr = [
        firstPage,
        "...",
        currentPage - 1,
        currentPage,
        currentPage + 1,
        "...",
        lastPage,
      ];
    }
  }

  const paginationBar = arr.map((value, index) => (
    <PaginationItem
      active={value === currentPage}
      onClick={() => pageChangeHandler(value)}
      key={index}
    >
      {value}
    </PaginationItem>
  ));

  return (
    <div className="flex flex-col items-center mt-20">
      <div className="flex text-gray-700">
        <div
          className="h-12 w-12 mx-5 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
          onClick={() => pageChangeHandler(currentPage - 1)}
        >
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>

        <div className="flex h-12 font-medium rounded-full bg-gray-200">
          {paginationBar}
        </div>

        <div
          className="h-12 w-12 mx-5 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer"
          onClick={() => pageChangeHandler(currentPage + 1)}
        >
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2"
            className="w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
