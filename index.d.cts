import * as react_jsx_runtime from 'react/jsx-runtime';

declare function Checkbox({ name, onChange, id, label, checked, disabled, parentClassName, labelClassName, inputClassName, customIcon, }: {
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
}): react_jsx_runtime.JSX.Element;

export { Checkbox as default };
