"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/components/Checkbox/index.tsx
var Checkbox_exports = {};
__export(Checkbox_exports, {
  default: () => Checkbox
});
module.exports = __toCommonJS(Checkbox_exports);
var import_jsx_runtime = require("react/jsx-runtime");
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
  return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", { className: parentClassName, children: [
    customIcon ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { style: inputContainerStyle, className: "cursor-pointer", children: [
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
      /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
        "label",
        {
          htmlFor: name,
          style: customCheckboxStyle,
          className: "block bg-cover cursor-pointer"
        }
      )
    ] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
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
    label ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("label", { className: labelClassName, htmlFor: name, children: label }) : null
  ] });
}
