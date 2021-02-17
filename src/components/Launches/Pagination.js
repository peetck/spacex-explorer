import PaginationItem from "./PaginationItem";


const Pagination = (props) => {
  return (
    <div class="flex flex-col items-center mt-20">
      <div class="flex text-gray-700">
        <div class="h-12 w-12 mr-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            class="w-6 h-6"
          >
            <polyline points="15 18 9 12 15 6" />
          </svg>
        </div>
        <div class="flex h-12 font-medium rounded-full bg-gray-200">
          <PaginationItem>1</PaginationItem>
          <PaginationItem>...</PaginationItem>
          <PaginationItem>2</PaginationItem>
          <PaginationItem active>3</PaginationItem>
          <PaginationItem>4</PaginationItem>
          <PaginationItem>...</PaginationItem>
          <PaginationItem>15</PaginationItem>
        </div>
        <div class="h-12 w-12 ml-1 flex justify-center items-center rounded-full bg-gray-200 cursor-pointer">
          <svg
            width="100%"
            height="100%"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            stroke-width="2"
            class="w-6 h-6"
          >
            <polyline points="9 18 15 12 9 6"></polyline>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
