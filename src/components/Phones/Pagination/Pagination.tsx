/* eslint-disable import/no-extraneous-dependencies */
import classNames from 'classnames';

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
};

export const PaginationButtons: React.FC<Props> = ({
  currentPage,
  totalItems,
  itemsOnPage,
  searchParams,
  setSearchParams,
}) => {
  const totalPages = Math.ceil(totalItems / itemsOnPage);
  const isFirstPage = currentPage === 1;
  const isPreLastPage = currentPage === totalPages - 1;
  const isLastPage = currentPage === totalPages;

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
    if (isFirstPage) {
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
        currentPage !== 1 && currentPage < totalPages - 1,
    },
  );

  const thirdButtonClasses = classNames(
    'button-pagination button-pagination--number',
    {
      'button-pagination--number-is-active': currentPage === totalPages - 1,
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
      <PaginationArrowButton
        onButtonChange={handleCurrenPageDecrement}
        isDisabled={isFirstPage}
        ArrowIcon={ArrowLeftIcon}
      />

      <div className="wrapper-pagination">
        <PaginationNumberButton
          buttonClasses={firstButtonCLasses}
          onButtonChange={handleFirstButtonChange}
          showButtonNumber={showFirstButtonNumber}
        />

        <PaginationNumberButton
          buttonClasses={secondButtonClasses}
          onButtonChange={handleSecondButtonChange}
          showButtonNumber={showSecondButtonNumber}
        />

        <PaginationNumberButton
          buttonClasses={thirdButtonClasses}
          onButtonChange={handleThirdButtonChange}
          showButtonNumber={showThirdButtonNumber}
        />

        <PaginationNumberButton
          buttonClasses={fourthButtonClasses}
          onButtonChange={handleFourthButtonChange}
          showButtonNumber={showFourthButtonNumber}
        />
      </div>

      <PaginationArrowButton
        onButtonChange={handleCurrenPageIncrement}
        isDisabled={isLastPage}
        ArrowIcon={ArrowRightIcon}
      />
    </div>
  );
};
