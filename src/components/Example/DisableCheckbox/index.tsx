import "highlight.js/styles/atom-one-dark.css";
import "../style.css";
import Checkbox from "../../Checkbox";
import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function DisableCheckbox() {
  const disableCheckboxCode = `<pre>
  <code >import React, {useState} from "react";
  import Checkbox from "react-checkboxify";
  
  export default function App(){
  
  const [selected, setSelected] = useState(false);
  
  function onChangeHandler(e) {
    setSelected(e.target.checked);
  }
  return  < Checkbox
             disabled
             name="banana"
             label="Banana"
             checked={selected}
             onChange={onChangeHandler}
            />
  }
  </code>
  </pre>`;
  const disableGroupCheckboxCode = `<pre>
  <code >
    let list = [
      {
        id: 6,
        name: "javascript",
        label: "Java Script",
        disabled: true
      },{
        id: 7,
        name: "reactjs",
        label: "React.js",
      }];
    return < GroupCheckbox
      selectType="multiple"
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
      name: "javascript1",
      label: "Java Script",
      disabled: true,
    },
    {
      id: 2,
      name: "reactjs1",
      label: "React.js",
    },
  ];
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(e.target.checked);
  }
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">Disable Checkbox</h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="w-full flex flex-col space-y-6">
          <h3 className="text-lg border-b pb-1 font-bold px-2">Checkbox</h3>
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2 md:max-w-[50%]">
              <p className="text-sm ">
              Adding the disabled attribute to the checkbox component allows you to easily disable it, preventing users from interacting with it.
              </p>
            </div>
            <div className="w-full border rounded-lg py-2 px-4 h-11">
              <Checkbox
                disabled
                name="banana12"
                label="Banana"
                checked={selected}
                onChange={onChangeHandler}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{ __html: disableCheckboxCode }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
        <div className="w-full flex flex-col space-y-6">
          <h3 className="text-lg  border-b pb-1 px-2 font-bold">
            Group Checkbox
          </h3>
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2 max-w-[65%]">
              <p className="text-sm ">
              To disable specific items in a GroupCheckbox component, set the checked attribute to true. This effectively disables the items, preventing users from selecting or deselecting them.
              </p>
            </div>
            <div className="w-[60%] border rounded-lg py-2 px-4">
              <GroupCheckbox
                selectType="multiple"
                list={list}
                selectedItems={selected}
                setSelectedItems={setSelected}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{ __html: disableGroupCheckboxCode }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
