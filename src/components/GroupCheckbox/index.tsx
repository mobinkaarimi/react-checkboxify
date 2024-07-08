import { useEffect, useState } from "react";
import Checkbox from "../Checkbox";
import { groupCheckBoxType } from "./types";
/*
 * I NEED ADD Props
 * selectType?: single, multiple --> single
 * hasSearch?: true,false --> false
 * list*: [{id:1,name: 'mobin-1', label:'mobin 1', checked: true},{id:2,name: 'mobin-2', label:'mobin 2',disabled:true}]
 * selectedCheckBox, setSelectedCheckbox
 * hasPrimaryItem?: true,false --> false
 * parentClass?: string
 * checkboxClassName?: string
 * labelClassName?: string
 * checkboxFilledClassName?: string,
 * searchLabel?: string
 */

export default function GroupCheckbox(props: groupCheckBoxType) {
  const {
    list,
    hasSearch = false,
    setSelectedItems,
    parentClassName = null,
    checkboxClassName = null,
    checkboxFilledClassName = null,
    labelClassName = null,
    searchLabel = null,
    selectType = "single",
  } = props;
  const [mainData, setMainData] = useState(list);
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setShowData(mainData);
    let selectedFilter = mainData.filter((item: any) => item.checked);
    if (selectType == "single") {
      setSelectedItems(selectedFilter[0]);
    } else if (selectType == "multi") {
      setSelectedItems(selectedFilter);
    }
  }, [mainData]);

  useEffect(() => {
    let newList = mainData.filter((item: any) => item.name.includes(search));
    setShowData(newList);
  }, [search]);

  function checkBoxHandler(e: any) {
    let updateList;
    if (selectType == "multi") {
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
    setMainData(updateList);
  }

  return (
    <div className={parentClassName}>
      {hasSearch ? (
        <input
          type="text"
          placeholder={searchLabel}
          onChange={(e) => setSearch(e.target.value)}
        />
      ) : (
        ""
      )}
      {showData.map(
        (item: { name: string; checked: boolean; label: string }, index) => {
          return (
            <Checkbox
              parentClassName={checkboxFilledClassName}
              labelClassName={labelClassName}
              inputClassName={checkboxClassName}
              key={index}
              name={item.name || ""}
              checked={item.checked}
              label={item.label || item.name}
              onChange={checkBoxHandler}
            />
          );
        },
      )}
    </div>
  );
}
