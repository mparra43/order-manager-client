import { Controller, Control, FieldValues } from "react-hook-form";
import { Rules } from "../types";

interface InputProps {
  className: string;
  classNameContainer: string;
  control: Control<FieldValues>;
  label: string;
  name: string;
  type: string;
  rules:Rules
}

export const Input = ({
  className,
  classNameContainer,
  control,
  label,
  name,
  rules,
  type,
  
}: InputProps) => {
  return (
    <div className={classNameContainer}>
      <label>{label}</label>
      <Controller
        name={name}
        control={control}
        rules={rules}
        render={({ field }) => (
          <input
            type={type || "text"}
            className={className || "form-control"}
            id={field.name}
            value={field.value}
            onChange={(e) => field.onChange(e.target.value)}
          />
        )}
      />
      {/* <small id="emailHelp" className="form-text text-muted">
        We'll never share your email with anyone else.
      </small> */}
    </div>
  );
};
