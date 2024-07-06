interface groupCheckboxType {
  selectType?: "single" | "multiple";
  hasSearch?: boolean;
  searchLabel?: string;
  list: {
    id?: number;
    name: string;
    checked?: boolean;
    label?: string;
    disabled?: boolean;
  }[];
  selectedItems: any;
  setSelectedItems: any;
  hasPrimaryItem?: boolean;
  parentClassName?: string;
  checkboxClassName?: string;
  labelClassName?: string;
  checkboxFilledClassName?: string;
}
