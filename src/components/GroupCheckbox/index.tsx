import { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import { groupCheckBoxType, listItemType } from "./types";

export default function GroupCheckbox(props: groupCheckBoxType) {
  const {
    list = [],
    hasSearch = false,
    setSelectedItems,
    parentClassName = "",
    checkboxClassName = "",
    checkboxFilledClassName = "",
    labelClassName = "",
    searchOption = { label: "", className: "", disabled: false },
    selectType = "single",
    customIcon = null,
  } = props;
  const [mainData, setMainData] = useState(list);
  const [showData, setShowData] = useState<listItemType[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setShowData(mainData);
    let selectedFilter = mainData.filter((item: any) => item.checked);
    if (selectType == "single") {
      setSelectedItems(selectedFilter[0]);
    } else if (selectType == "multiple") {
      setSelectedItems(selectedFilter);
    }
  }, [mainData]);

  useEffect(() => {
    let newList = mainData.filter((item: any) => item.name.includes(search));
    if (!newList) return;
    setShowData(newList);
  }, [search, mainData]);

  function checkBoxHandler(e: any) {
    let updateList;
    if (selectType == "multiple") {
      updateList = mainData.map((item: any) => {
        if (item.name == e.target.id) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        }
        return item;
      });
    } else if (selectType == "single") {
      updateList = mainData.map((item: any) => {
        if (item.name == e.target.id) {
          if (item.checked) {
            item.checked = false;
          } else {
            item.checked = true;
          }
        } else {
          if (item.checked) {
            item.checked = false;
          }
        }
        return item;
      });
    }
    if (!updateList) return;
    setMainData(updateList);
  }

  return (
    <div className={parentClassName}>
      {hasSearch && (
        <input
          type="text"
          placeholder={searchOption.label}
          disabled={searchOption.disabled}
          className={searchOption.className}
          onChange={(e) => setSearch(e.target.value)}
        />
      )}
      {showData.length
        ? showData.map((item: listItemType, index: number) => {
            return (
              <Checkbox
                disabled={item.disabled}
                parentClassName={checkboxFilledClassName}
                labelClassName={labelClassName}
                inputClassName={checkboxClassName}
                key={index}
                name={item.name || ""}
                checked={item.checked}
                label={item.label || item.name}
                onChange={checkBoxHandler}
                customIcon={customIcon}
              />
            );
          })
        : hasSearch
          ? searchOption.emptyComponent || <p>Not Found!</p>
          : null}
    </div>
  );
}
