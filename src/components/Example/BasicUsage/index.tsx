import "highlight.js/styles/atom-one-dark.css";
import "../style.css";
import Checkbox from "../../Checkbox";
import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function BasicUsage() {
  const pureCheckboxCode = `<pre>
  <code >
  import React, {useState} from "react";
  import Checkbox from "react-checkboxify";
  
  export default function App(){
  
  const [selected, setSelected] = useState(false);
  
  function onChangeHandler(e) {
    setSelected(e.target.checked);
  }
  return  < Checkbox
             name="banana"
             label="Banana"
             checked={selected}
             onChange={onChangeHandler}
            />
  }
  </code>
  </pre>`;
  const pureGroupCheckboxCode = `<pre>
  <code >
  import React, {useState} from "react";
  import GroupCheckbox from "react-checkboxify";
  
  export default function App(){
    let list = [
      {
        id: 1,
        name: "javascript",
        label: "Java Script",
      },{
        id: 2,
        name: "reactjs",
        label: "React.js",
      }];
    const [selected, setSelected] = useState([]);
  
    function onChangeHandler(e) {
      setSelected(e.target.checked);
    }
    return < GroupCheckbox
      list={list}
      selectedItems={selected}
      setSelectedItems={setSelected}
    />
  }
  </code>
  </pre>`;
  const [selected, setSelected] = useState(false);
  let list = [
    {
      id: 1,
      name: "javascript",
      label: "Java Script",
      checked: false,
    },
    {
      id: 2,
      name: "reactjs",
      label: "React.js",
    },
  ];
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(e.target.checked);
  }
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">Basic Usage</h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8 ">
        <div className="w-full flex flex-col space-y-6">
          <h3 className="text-lg border-b pb-1 font-bold px-2">Checkbox</h3>
          <div className="flex flex-row space-x-1 h-full">
            <div className="flex w-full flex-col space-y-2 max-w-[40%]">
              <p className="text-sm ">
              To utilize the default checkbox component, call it and specify its name, label, onChange function, and checked state.
              </p>
            </div>
            <div className="w-full border rounded-lg py-2 px-4 h-11">
              <Checkbox
                name="banana"
                label="Banana"
                checked={selected}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{ __html: pureCheckboxCode }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6">
          <h3 className="text-lg  border-b pb-1 px-2 font-bold">
            Group Checkbox
          </h3>
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2 max-w-[70%]">
              <p className="text-sm ">
              For default GroupCheckbox, pass default list of checkboxes, selected state, and onChange function to set selected item. Each item needs a name and ID. you can pass optional keys like label, etc.
              </p>
            </div>
            <div className="w-[60%] border rounded-lg py-2 px-4">
              <GroupCheckbox
                list={list}
                selectedItems={selected}
                setSelectedItems={setSelected}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{ __html: pureGroupCheckboxCode }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
