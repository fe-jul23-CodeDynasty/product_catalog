import './Dropdown.scss';
import '../../../App.scss';
import Select, { SingleValue } from 'react-select';
import { DropdownOptions } from '../../../types/DropdownOptions';

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
  const selectOptions = options.map(option => ({
    value: option.value,
    label: option.title,
  }));

  const foundOption = selectOptions.find(
    option => option.value === optionType.toString(),
  );

  return (
    <div className="select sort-buttons--button noselect">
      <p className="sort-buttons-text">{title}</p>

      <Select
        value={foundOption}
        isSearchable={false}
        options={selectOptions}
        onChange={(
          selectedOption: SingleValue<{ value: string; label: string }>,
        ) => {
          if (selectedOption) {
            onSelectOptionChange({
              target: { value: selectedOption.value },
            } as React.ChangeEvent<HTMLSelectElement>);
          }
        }}
        classNamePrefix="button-dropdown"
      />
    </div>
  );
};
