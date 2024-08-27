import GroupCheckbox from "../GroupCheckbox";
export default function Checkbox({
  name,
  onChange,
  id,
  label,
  checked = false,
  disabled = false,
  parentClassName,
  labelClassName,
  inputClassName,
  customIcon = null,
}: {
  name: string;
  onChange: React.ChangeEvent<HTMLInputElement> | any;
  id?: number | string;
  label?: string;
  checked?: boolean;
  disabled?: boolean;
  parentClassName?: string;
  labelClassName?: string;
  inputClassName?: string;
  customIcon?: {
    checked: string;
    unChecked: string;
    size: number;
  } | null;
}) {
  const customCheckboxStyle = {
    backgroundImage: `url(${checked ? customIcon?.checked : customIcon?.unChecked})`,
    backgroundSize: "cover",
    width: customIcon?.size || 16,
    height: customIcon?.size || 16,
  };
  const inputContainerStyle = {
    width: customIcon?.size || 16,
    height: customIcon?.size || 16,
  };

  return (
    <label className={parentClassName}>
      {customIcon ? (
        <div style={inputContainerStyle} className="cursor-pointer">
          <input
            className={` absolute z-10 visible opacity-0`}
            type="checkbox"
            id={name}
            data-id={id || name}
            name={name}
            checked={checked}
            onChange={onChange}
            disabled={disabled}
          />
          <label
            htmlFor={name}
            style={customCheckboxStyle}
            className="block bg-cover cursor-pointer"
          ></label>
        </div>
      ) : (
        <input
          className={inputClassName}
          type="checkbox"
          id={name}
          data-id={id || name}
          name={name}
          checked={checked}
          onChange={onChange}
          disabled={disabled}
        />
      )}
      {label ? (
        <label className={labelClassName} htmlFor={name}>
          {label}
        </label>
      ) : null}
    </label>
  );
}
export { GroupCheckbox };
