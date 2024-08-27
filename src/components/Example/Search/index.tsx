import "highlight.js/styles/atom-one-dark.css";
import "../style.css";
import CheckboxActive from "../../../assets/checkbox-active-icon.svg";
import checkboxEmpty from "../../../assets//checkbox-empty-icon.svg";

import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function Search() {
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
              parentClassName="flex flex-col space-y-2 border
                rounded-lg py-2 px-6"
              hasSearch
              searchOption={{
                label: "Search Here!",
                className:
                  "py-2 px-4 rounded-lg bg-transparent border
                  outline-none",
              }}
              checkboxFilledClassName="flex flex-row space-x-3
              items-center"
              labelClassName="font-bold"
              list={list}
              customIcon={{
                checked: CheckboxActive,
                unChecked: checkboxEmpty,
                size: 30,
              }}
              selectedItems={groupSelected}
              setSelectedItems={setGroupSelected}
    />
  </code>
  </pre>`;
  const [groupSelected, setGroupSelected] = useState(false);

  let list = [
    {
      id: 1,
      name: "javascript4",
      label: "Java Script",
    },
    {
      id: 2,
      name: "reactjs4",
      label: "React.js",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">
        Search Option
        <span className="text-base px-2 text-gray-400">
          (available on Group Checkbox)
        </span>
      </h3>
      <h3 className="text-lg  border-b pb-1 px-2 font-bold">Group Checkbox</h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8 ">
        <div className="w-full md:max-w-[50%] flex flex-col space-y-6">
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2">
              <p className="text-sm ">
                The hasSearch property in the GroupCheckbox component enables
                you to insert a search bar between the items. When you set
                hasSearch=true, you can access the searchOption prop to
                customize the style of the search box, allowing users to change
                the label and input class names.
              </p>
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
        <div className="w-full">
          <GroupCheckbox
            parentClassName="flex flex-col space-y-2 border  rounded-lg py-2 px-6"
            hasSearch
            searchOption={{
              label: "Search Here!",
              className:
                "py-2 px-4 rounded-lg bg-transparent border outline-none",
            }}
            checkboxFilledClassName="flex flex-row space-x-3 items-center"
            labelClassName="font-bold"
            list={list}
            customIcon={{
              checked: CheckboxActive,
              unChecked: checkboxEmpty,
              size: 30,
            }}
            selectedItems={groupSelected}
            setSelectedItems={setGroupSelected}
          />
        </div>
      </div>
    </div>
  );
}
