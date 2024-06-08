export default function Checkbox({
  name,
  onChange,
  label,
  checked = false,
  disabled = false,
  parentClassName,
  labelClassName,
  inputClassName,
}: {
  name: string;
  onChange: any;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
}) {
  return (
    <label className={parentClassName}>
      <input
        className={inputClassName}
        type="checkbox"
        id={name}
        name={name}
        checked={checked}
        onChange={onChange}
        disabled={disabled}
      />
      {label ? (
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
      ) : null}
    </label>
  );
}
