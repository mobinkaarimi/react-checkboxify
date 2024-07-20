export interface groupCheckBoxType {
  selectType?: "single" | "multiple";
  hasSearch?: boolean;
  searchOption?: SearchOptionType;
  list: listItemType[];
  selectedItems: any;
  setSelectedItems: any;
  hasPrimaryItem?: boolean;
  parentClassName?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  checkboxFilledClassName?: string;
  customIcon?: {
    checked: string;
    unChecked: string;
    size: number;
  } | null;
}
interface SearchOptionType {
  label?: string;
  className?: string;
  disabled?: boolean;
}
export interface listItemType {
  id?: number;
  name: string;
  checked?: boolean;
  label?: string;
  disabled?: boolean;
}
