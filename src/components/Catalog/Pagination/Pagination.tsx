import ReactPaginate from 'react-paginate';
import './Pagination.scss';

import ArrowRightIcon from '../images/arrow-right.svg';
import ArrowLeftIcon from '../images/arrow-left.svg';

type Props = {
  currentPage: number;
  totalItems: number;
  itemsOnPage: number;
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
};

export const PaginationButtons: React.FC<Props> = ({
  currentPage,
  totalItems,
  itemsOnPage,
  searchParams,
  setSearchParams,
}) => {
  const totalPages = Math.ceil(totalItems / itemsOnPage);
  const initialPage = currentPage - 1;

  const handlePageChange = (selectedPage: number) => {
    const params = new URLSearchParams(searchParams);

    params.set('currentPage', `${selectedPage}`);
    setSearchParams(params);
  };

  return (
    <ReactPaginate
      disableInitialCallback
      pageCount={totalPages}
      pageRangeDisplayed={1}
      marginPagesDisplayed={1}
      onPageChange={({ selected }) => handlePageChange(selected + 1)}
      initialPage={initialPage}
      containerClassName="pagination-container"
      previousLabel={(
        <img
          src={ArrowLeftIcon}
          alt="arrow-right"
          className="pagination-icon"
        />
      )}
      nextLabel={(
        <img
          src={ArrowRightIcon}
          alt="arrow-right"
          className="pagination-icon"
        />
      )}
      activeClassName="pagination-is-active"
    />
  );
};
