import { Controller, Control, FieldValues } from "react-hook-form";
import { Option, Rules } from "../types";

interface SelectProps {
  className: string;
  classNameContainer: string;
  control: Control<FieldValues>;
  label: string;
  name: string;
  type: string;
  rules: Rules;
  options: Option[];
}

export const Select = ({
  className,
  classNameContainer,
  control,
  label,
  name,
  rules,
  options,
}: SelectProps) => {
  return (
    <div className={classNameContainer}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <select
            className={className || "form-control"}
            id={field.name}
            value={field.value}
            onChange={(e:React.ChangeEvent<HTMLSelectElement>) => field.onChange(e.target.value)}
          >
            {options.map(({ label, value }) => (
              <option value={value}>{label}</option>
            ))}
          </select>
        )}
      />
      {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
    </div>
  );
};
