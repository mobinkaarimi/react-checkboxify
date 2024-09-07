import "highlight.js/styles/atom-one-dark.css";
import "../style.css";
import Checkbox from "../../Checkbox";
import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function CustomIcon() {
  const customiseStyleCheckboxCode = `<pre>
  <code >
  
  return  < Checkbox
            customIcon={{
              checked: CheckboxActiveIcon,
              unChecked: checkboxEmptyIcon,
              size: 30,
            }}
            name="banana"
            label="Banana"
            checked={selected}
            onChange={onChangeHandler}
            parentClassName="flex flex-row items-center space-x-4"
            labelClassName="text-lg font-medium"
            />
  </code>
  </pre>`;
  const customiseStyleGroupCheckboxCode = `<pre>
  <code >
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
    return < GroupCheckbox
              parentClassName="flex flex-col space-y-2"
              checkboxFilledClassName="flex flex-row
               space-x-3  items-center"
              labelClassName="font-bold"
              list={list}
              customIcon={{
                checked: CheckboxActiveIcon,
                unChecked: checkboxEmptyIcon,
                size: 30,
              }}
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
      name: "javascript3",
      label: "Java Script",
    },
    {
      id: 2,
      name: "reactjs3",
      label: "React.js",
    },
  ];
  function onChangeHandler(e: React.ChangeEvent<HTMLInputElement>) {
    setSelected(e.target.checked);
  }
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">Insert custom icon</h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8 ">
        <div className="w-full md:max-w-[50%] flex flex-col space-y-6">
          <h3 className="text-lg border-b pb-1 font-bold px-2">Checkbox</h3>
          <div className="flex flex-row space-x-1 h-[86px]">
            <div className="flex w-full flex-col space-y-2 max-w-[40%]">
              <p className="text-sm ">
                To change the default icon, give customIcon Object to the
                Checkbox component, along with an optional size parameter to
                adjust its dimensions.
              </p>
            </div>
            <div className="w-full border rounded-lg py-2 px-4 ">
              <Checkbox
                customIcon={{
                  checked:
                    "https://raw.githubusercontent.com/mobinkaarimi/codepen-assets/react-checkboxify/icons/checkbox-active-icon.svg",
                  unChecked:
                    "https://raw.githubusercontent.com/mobinkaarimi/codepen-assets/react-checkboxify/icons/checkbox-empty-icon.svg",
                  size: 30,
                }}
                name="bananas2"
                label="Banana"
                checked={selected}
                onChange={onChangeHandler}
                parentClassName="flex flex-row items-center space-x-4"
                labelClassName="text-lg font-medium"
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
            <div className="flex w-full flex-col space-y-2 max-w-[40%]">
              <p className="text-sm ">
                To change the default icon, give customIcon Object to the
                GroupCheckbox component, along with an optional size parameter
                to adjust its dimensions.
              </p>
            </div>
            <div className="w-full border rounded-lg py-2 px-4">
              <GroupCheckbox
                parentClassName="flex flex-col space-y-2 "
                checkboxFilledClassName="flex flex-row space-x-3 items-center"
                labelClassName="font-bold"
                list={list}
                customIcon={{
                  checked:
                    "https://raw.githubusercontent.com/mobinkaarimi/codepen-assets/react-checkboxify/icons/checkbox-active-icon.svg",
                  unChecked:
                    "https://raw.githubusercontent.com/mobinkaarimi/codepen-assets/react-checkboxify/icons/checkbox-empty-icon.svg",
                  size: 30,
                }}
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
