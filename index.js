// src/components/Checkbox/index.tsx
import { jsx, jsxs } from "react/jsx-runtime";
function Checkbox({
  name,
  onChange,
  id,
  label,
  checked = false,
  disabled = false,
  parentClassName,
  labelClassName,
  inputClassName,
  customIcon = null
}) {
  const customCheckboxStyle = {
    backgroundImage: `url(${checked ? customIcon?.checked : customIcon?.unChecked})`,
    backgroundSize: "cover",
    width: customIcon?.size || 16,
    height: customIcon?.size || 16
  };
  const inputContainerStyle = {
    width: customIcon?.size || 16,
    height: customIcon?.size || 16
  };
  return /* @__PURE__ */ jsxs("label", { className: parentClassName, children: [
    customIcon ? /* @__PURE__ */ jsxs("div", { style: inputContainerStyle, className: "cursor-pointer", children: [
      /* @__PURE__ */ jsx(
        "input",
        {
          className: ` absolute z-10 visible opacity-0`,
          type: "checkbox",
          id: name,
          "data-id": id || name,
          name,
          checked,
          onChange,
          disabled
        }
      ),
      /* @__PURE__ */ jsx(
        "label",
        {
          htmlFor: name,
          style: customCheckboxStyle,
          className: "block bg-cover cursor-pointer"
        }
      )
    ] }) : /* @__PURE__ */ jsx(
      "input",
      {
        className: inputClassName,
        type: "checkbox",
        id: name,
        "data-id": id || name,
        name,
        checked,
        onChange,
        disabled
      }
    ),
    label ? /* @__PURE__ */ jsx("label", { className: labelClassName, htmlFor: name, children: label }) : null
  ] });
}
export {
  Checkbox as default
};
