/* eslint-disable import/no-extraneous-dependencies */
import classNames from 'classnames';
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css';

import ArrowRightIcon from '../images/arrow-right.svg';
import ArrowLeftIcon from '../images/arrow-left.svg';
import {
  PaginationNumberButton,
  /* eslint-disable max-len */
} from './PaginationButtons/PaginationNumberButton/PaginationNumberButton';
import {
  PaginationArrowButton,
  /* eslint-disable max-len */
} from './PaginationButtons/PaginationArrowButton/PaginationArrowButton';

type Props = {
  currentPage: number;
  totalItems: number;
  itemsOnPage: number;
  searchParams: URLSearchParams;
  setSearchParams: (params: URLSearchParams) => void;
  isLoading: boolean;
};

export const PaginationButtons: React.FC<Props> = ({
  currentPage,
  totalItems,
  itemsOnPage,
  searchParams,
  setSearchParams,
  isLoading,
}) => {
  const totalPages = Math.ceil(totalItems / itemsOnPage);
  const isFirstPage = currentPage === 1;
  const isPreLastPage = currentPage === totalPages - 1;
  const isLastPage = currentPage === totalPages;
  const isLessThanFourPages = totalItems / itemsOnPage < 4;

  const handleCurrenPageChange = (page: string) => {
    const params = new URLSearchParams(searchParams);

    params.set('currentPage', page);
    setSearchParams(params);
  };

  const handleCurrenPageDecrement = () => {
    const params = new URLSearchParams(searchParams);

    if (currentPage > 1) {
      params.set('currentPage', `${currentPage - 1}`);
      setSearchParams(params);
    }
  };

  const handleCurrenPageIncrement = () => {
    const params = new URLSearchParams(searchParams);

    if (currentPage < totalPages) {
      params.set('currentPage', `${currentPage + 1}`);
      setSearchParams(params);
    }
  };

  const showFirstButtonNumber = () => {
    if (isFirstPage || isLessThanFourPages) {
      return '1';
    }

    if (isPreLastPage) {
      return `${currentPage - 2}`;
    }

    if (isLastPage) {
      return `${currentPage - 3}`;
    }

    return `${currentPage - 1}`;
  };

  const showSecondButtonNumber = () => {
    if (isFirstPage) {
      return '2';
    }

    if (isLessThanFourPages) {
      return '2';
    }

    if (isPreLastPage) {
      return `${currentPage - 1}`;
    }

    if (isLastPage) {
      return `${currentPage - 2}`;
    }

    return `${currentPage}`;
  };

  const showThirdButtonNumber = () => {
    if (isFirstPage) {
      return '3';
    }

    if (isLessThanFourPages) {
      return '3';
    }

    if (isPreLastPage) {
      return `${currentPage}`;
    }

    if (isLastPage) {
      return `${currentPage - 1}`;
    }

    return `${currentPage + 1}`;
  };

  const showFourthButtonNumber = () => {
    if (isFirstPage) {
      return '4';
    }

    if (isPreLastPage) {
      return `${currentPage + 1}`;
    }

    if (isLastPage) {
      return `${currentPage}`;
    }

    return `${currentPage + 2}`;
  };

  const handleFirstButtonChange = () => {
    if (!isFirstPage && !isPreLastPage && !isLastPage) {
      handleCurrenPageChange(`${currentPage - 1}`);
    }

    if (isPreLastPage) {
      handleCurrenPageChange(`${currentPage - 2}`);
    }

    if (isLastPage) {
      handleCurrenPageChange(`${currentPage - 3}`);
    }
  };

  const handleSecondButtonChange = () => {
    if (isFirstPage || isPreLastPage || isLastPage) {
      handleCurrenPageChange(`${currentPage + 1}`);
    }

    if (isPreLastPage || isLastPage) {
      handleCurrenPageChange(`${currentPage - 1}`);
    }

    if (isLastPage) {
      handleCurrenPageChange(`${currentPage - 2}`);
    }
  };

  const handleThirdButtonChange = () => {
    if (isFirstPage) {
      handleCurrenPageChange(`${currentPage + 2}`);
    }

    if (!isFirstPage && !isPreLastPage) {
      handleCurrenPageChange(`${currentPage + 1}`);
    }

    if (isLastPage) {
      handleCurrenPageChange(`${currentPage - 1}`);
    }
  };

  const handleFourthButtonChange = () => {
    if (currentPage < totalPages - 1) {
      handleCurrenPageChange(`${currentPage + 2}`);
    }

    if (isPreLastPage) {
      handleCurrenPageChange(`${currentPage + 1}`);
    }

    if (isFirstPage) {
      handleCurrenPageChange(`${currentPage + 3}`);
    }
  };

  const firstButtonCLasses = classNames(
    'button-pagination button-pagination--number',
    {
      'button-pagination--number-is-active': currentPage === 1,
    },
  );

  const secondButtonClasses = classNames(
    'button-pagination button-pagination--number',
    {
      'button-pagination--number-is-active':
        (currentPage !== 1 && currentPage < totalPages - 1)
        || (isLessThanFourPages && currentPage === 2),
    },
  );

  const thirdButtonClasses = classNames(
    'button-pagination button-pagination--number',
    {
      'button-pagination--number-is-active':
        (currentPage === totalPages - 1 && !isLessThanFourPages)
        || (isLessThanFourPages && currentPage === 3),
    },
  );

  const fourthButtonClasses = classNames(
    'button-pagination button-pagination--number',
    {
      'button-pagination--number-is-active': currentPage === totalPages,
    },
  );

  return (
    <div className="phones-page__bottom">
      {isLoading ? (
        <Skeleton height={40} width={40} />
      ) : (
        <PaginationArrowButton
          onButtonChange={handleCurrenPageDecrement}
          isDisabled={isFirstPage}
          ArrowIcon={ArrowLeftIcon}
        />
      )}

      <div className="wrapper-pagination">
        {isLoading ? (
          <Skeleton height={40} width={40} />
        ) : (
          <PaginationNumberButton
            buttonClasses={firstButtonCLasses}
            onButtonChange={handleFirstButtonChange}
            showButtonNumber={showFirstButtonNumber}
          />
        )}

        {isLoading ? (
          <Skeleton height={40} width={40} />
        ) : (
          <PaginationNumberButton
            buttonClasses={secondButtonClasses}
            onButtonChange={handleSecondButtonChange}
            showButtonNumber={showSecondButtonNumber}
          />
        )}

        {isLoading ? (
          <Skeleton height={40} width={40} />
        ) : (
          <PaginationNumberButton
            buttonClasses={thirdButtonClasses}
            onButtonChange={handleThirdButtonChange}
            showButtonNumber={showThirdButtonNumber}
          />
        )}

        {isLoading && !isLessThanFourPages ? (
          <Skeleton height={40} width={40} />
        ) : (
          !isLessThanFourPages && (
            <PaginationNumberButton
              buttonClasses={fourthButtonClasses}
              onButtonChange={handleFourthButtonChange}
              showButtonNumber={showFourthButtonNumber}
            />
          )
        )}
      </div>

      {isLoading ? (
        <Skeleton height={40} width={40} />
      ) : (
        <PaginationArrowButton
          onButtonChange={handleCurrenPageIncrement}
          isDisabled={isLastPage}
          ArrowIcon={ArrowRightIcon}
        />
      )}
    </div>
  );
};
