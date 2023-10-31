import './PaginationNumberButton.scss';

type Props = {
  buttonClasses: string;
  onButtonChange: () => void;
  showButtonNumber: () => string;
};

export const PaginationNumberButton: React.FC<Props> = ({
  buttonClasses,
  onButtonChange,
  showButtonNumber,
}) => {
  return (
    <button className={buttonClasses} type="button" onClick={onButtonChange}>
      {showButtonNumber()}
    </button>
  );
};
