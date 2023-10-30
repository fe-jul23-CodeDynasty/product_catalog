/* eslint-disable no-shadow */
import './Dropdown.scss';
import { DropdownOptions } from '../../types/DropdownOptions';

type Props = {
  title: string;
  options: DropdownOptions[];
  optionType: string | number;
  onSelectOptionChange: (event: React.ChangeEvent<HTMLSelectElement>) => void;
};

export const Dropdown: React.FC<Props> = ({
  title,
  options,
  optionType,
  onSelectOptionChange,
}) => {
  return (
    <div className="select sort-buttons--button">
      <p className="sort-buttons-text">{title}</p>

      <select
        value={optionType}
        className="button-dropdown"
        onChange={onSelectOptionChange}
      >
        {options.map(option => (
          <option key={option.id} value={option.value}>
            {option.title}
          </option>
        ))}
      </select>
    </div>
  );
};
