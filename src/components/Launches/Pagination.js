import PaginationItem from "./PaginationItem";

const Pagination = (props) => {
  const { pageChangeHandler, lastPage, currentPage } = props;

  let paginationItems = (
    <div className="flex h-12 font-medium rounded-full bg-gray-200">
      <PaginationItem onClick={() => pageChangeHandler(1)}>1</PaginationItem>
      <PaginationItem>...</PaginationItem>
      <PaginationItem onClick={() => pageChangeHandler(currentPage - 1)}>
        {currentPage - 1}
      </PaginationItem>
      <PaginationItem active>{currentPage}</PaginationItem>
      <PaginationItem onClick={() => pageChangeHandler(currentPage + 1)}>
        {currentPage + 1}
      </PaginationItem>
      <PaginationItem>...</PaginationItem>
      <PaginationItem onClick={() => pageChangeHandler(lastPage)}>
        {lastPage}
      </PaginationItem>
    </div>
  );

  if (currentPage <= 3) {
    let left;

    for (let i = 1; i < currentPage; i++) {
      left = [
        left,
        <PaginationItem key={i} onClick={() => pageChangeHandler(i)}>
          {i}
        </PaginationItem>,
      ];
    }
    paginationItems = (
      <div className="flex h-12 font-medium rounded-full bg-gray-200">
        {left}
        <PaginationItem active>{currentPage}</PaginationItem>
        <PaginationItem onClick={() => pageChangeHandler(currentPage + 1)}>
          {currentPage + 1}
        </PaginationItem>
        <PaginationItem>...</PaginationItem>
        <PaginationItem onClick={() => pageChangeHandler(lastPage)}>
          {lastPage}
        </PaginationItem>
      </div>
    );
  }

  if (currentPage >= lastPage - 2) {
    // 26 27 28  >= 26
    let right;

    for (let i = currentPage + 1; i <= lastPage; i++) {
      right = [
        right,
        <PaginationItem key={i} onClick={() => pageChangeHandler(i)}>
          {i}
        </PaginationItem>,
      ];
    }
    paginationItems = (
      <div className="flex h-12 font-medium rounded-full bg-gray-200">
        <PaginationItem onClick={() => pageChangeHandler(1)}>1</PaginationItem>
        <PaginationItem>...</PaginationItem>
        <PaginationItem onClick={() => pageChangeHandler(currentPage - 1)}>
          {currentPage - 1}
        </PaginationItem>
        <PaginationItem active>{currentPage}</PaginationItem>
        {right}
      </div>
    );
  }

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
        {paginationItems}
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
