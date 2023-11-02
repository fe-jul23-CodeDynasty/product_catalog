import classNames from 'classnames';
import './PaginationArrowButton.scss';

type Props = {
  onButtonChange: () => void;
  isDisabled: boolean;
  ArrowIcon: string;
};

export const PaginationArrowButton: React.FC<Props> = ({
  onButtonChange,
  isDisabled,
  ArrowIcon,
}) => {
  return (
    <button
      className={classNames('button-pagination button-pagination--arrow', {
        'button-pagination-disabled': isDisabled,
      })}
      type="button"
      onClick={onButtonChange}
      disabled={isDisabled}
    >
      <img src={ArrowIcon} alt="arrow-icon" className="icon--arrow" />
    </button>
  );
};
