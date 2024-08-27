import "highlight.js/styles/atom-one-dark.css";
import "../style.css";
import Checkbox from "../../Checkbox";
import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function CustomiseStyle() {
  const customiseStyleCheckboxCode = `<pre>
  <code >
  
  return  < Checkbox
            name="banana2"
            label="Banana"
            checked={selected}
            onChange={onChangeHandler}
            parentClassName="flex flex-row items-center space-x-4"
            labelClassName="text-lg font-medium"
            inputClassName="w-10 h-10  accent-primary-orange"
            />
  </code>
  </pre>`;
  const customiseStyleGroupCheckboxCode = `<pre>
  <code >
    let list = [
      {
        id: 6,
        name: "javascript2",
        label: "Java Script",
      },{
        id: 7,
        name: "reactjs2",
        label: "React.js",
      }];
    return < GroupCheckbox
              parentClassName="flex flex-col space-y-2"
              checkboxFilledClassName="flex flex-row
              space-x-3 border-b pb-1 items-center"
              checkboxClassName="w-4 h-4"
              labelClassName="font-bold"
              list={list}
              selectedItems={selected}
              setSelectedItems={setSelected}
    />
  </code>
  </pre>`;
  const [selected, setSelected] = useState(false);
  const [groupSelected, setGroupSelected] = useState(false);

  let list = [
    {
      id: 1,
      name: "javascript2",
      label: "Java Script",
    },
    {
      id: 2,
      name: "reactjs2",
      label: "React.js",
    },
  ];
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(e.target.checked);
  }
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">
        Customize Style of Checkbox
      </h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8 ">
        <div className="w-full md:max-w-[50%] flex flex-col space-y-6">
          <h3 className="text-lg border-b pb-1 font-bold px-2">Checkbox</h3>
          <div className="flex flex-row space-x-1 ">
            <div className="flex w-full flex-col space-y-2 max-w-[50%]">
              <p className="text-sm ">
                Use the parentClassName, labelClassName, and inputClassName
                props to style checkbox elements. Apply custom CSS classes to
                the parent container, label element, and input element with
                these props.
              </p>
            </div>
            <div className="w-full border rounded-lg py-2 px-4 ">
              <Checkbox
                name="bananas"
                label="Banana"
                checked={selected}
                onChange={onChangeHandler}
                parentClassName="flex flex-row items-center space-x-4"
                labelClassName="text-lg font-medium"
                inputClassName="w-10 h-10  accent-primary-orange"
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{ __html: customiseStyleCheckboxCode }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
        <div className="w-full md:max-w-[50%] flex flex-col space-y-6">
          <h3 className="text-lg  border-b pb-1 px-2 font-bold">
            Group Checkbox
          </h3>
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2 max-w-[70%]">
              <p className="text-sm ">
                To customize the styles of individual items within a
                GroupCheckbox component, you can use the parentClassName,
                labelClassName, and inputClassName props. These props allow you
                to apply custom CSS classes to the parent container, label
                element, and input element, respectively.
              </p>
            </div>
            <div className="w-[40%] border rounded-lg py-2 px-4">
              <GroupCheckbox
                parentClassName="flex flex-col space-y-2"
                checkboxFilledClassName="flex flex-row space-x-3 border-b pb-1 items-center"
                checkboxClassName="w-4 h-4"
                labelClassName="font-bold"
                list={list}
                selectedItems={groupSelected}
                setSelectedItems={setGroupSelected}
              />
            </div>
          </div>
          <div className="w-full">
            <span className="text-lg">Source code</span>
            <div
              dangerouslySetInnerHTML={{
                __html: customiseStyleGroupCheckboxCode,
              }}
              className="relative bottom-4"
            ></div>
          </div>
        </div>
      </div>
    </div>
  );
}
