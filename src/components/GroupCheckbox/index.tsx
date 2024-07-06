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
    selectedItems,
    setSelectedItems,
    parentClassName = null,
    checkboxClassName = null,
    checkboxFilledClassName = null,
    hasPrimaryItem = false,
    labelClassName = null,
    searchLabel = null,
    selectType = "single",
  } = props;
  const [mainData, setMainData] = useState(list);
  const [showData, setShowData] = useState([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    setShowData(mainData);
  }, []);

  useEffect(() => {
    if (selectedItems.length) {
    }
  }, [selectedItems]);

  useEffect(() => {
    console.log(showData);
    
  }, [showData]);

  function checkBoxHandler(e: any) {
    let existsInSelectedItems = selectedItems.find(
      (item: any) => item.name == e.target.id,
    );

    let ali = showData.map((item: any) => {
      if (item.name == e.target.id) {
        if (item.checked) {
          item.checked = false;
        } else {
          item.checked = true;
        }
      }
      return item;
    });
    setShowData(ali);

    // let item = showData.find((item: any) => item.name == e.target.id);
    // console.log(item)
    // if (item.checked) {
    //   // setShowData(prev => [...prev,item])
    // } else {
    //   item.checked = true;
    //   setShowData((prev) => [...prev, item]);
    // }
    // setShowData(prev => [...prev, all])
  }
  return (
    <div className={parentClassName}>
      {showData.map(
        (item: { name: string; checked: boolean; label: string }, index) => {
          return (
            <Checkbox
              labelClassName={checkboxFilledClassName}
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
