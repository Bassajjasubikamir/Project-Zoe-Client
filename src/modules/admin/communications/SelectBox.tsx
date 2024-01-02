import * as React from 'react';
import { ChangeEvent } from 'react';

type SelectOption = {
  label: string;
  value: string;
};

type Props = {
  value?: string;
  disabled?: boolean;
  className?: string;
  options: SelectOption[];
  onChange: (e: ChangeEvent<HTMLSelectElement>) => void;
};

const SelectBox = ({
  value,
  disabled,
  className,
  options,
  onChange,
}: Props) => {
  const selectBox = (
    <select
      className={className}
      disabled={disabled}
      onChange={onChange}
      value={value}
    >
      {options.map(({ value, label }) => (
        <option key={value} value={value}>
          {label}
        </option>
      ))}
    </select>
  );

  return <div className="SelectBox">{selectBox}</div>;
};

export { SelectBox };
export type { SelectOption };
