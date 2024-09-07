import "highlight.js/styles/atom-one-dark.css";
import "../style.css";

import { useState } from "react";
import GroupCheckbox from "../../GroupCheckbox";
export default function SelectType() {
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
              selectType="multiple"
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
      name: "javascript5",
      label: "Java Script",
    },
    {
      id: 2,
      name: "reactjs5",
      label: "React.js",
    },
    {
      id: 3,
      name: "angularjs",
      label: "Angular.js",
    },
    {
      id: 4,
      name: "Nextjs",
      label: "Next.js",
    },
    {
      id: 5,
      name: "alpinejs",
      label: "Alpine.js",
    },
    {
      id: 6,
      name: "Vuejs",
      label: "Vue.js",
    },
  ];
  return (
    <div className="flex flex-col w-full space-y-7">
      <h3 className="text-2xl font-medium text-center">
        Select Type
        <span className="text-base px-2 text-gray-400">
          (available on Group Checkbox)
        </span>
      </h3>
      <h3 className="text-lg  border-b pb-1 px-2 font-bold">Group Checkbox</h3>
      <div className="flex flex-col md:flex-row items-start md:space-x-8">
        <div className="w-full md:max-w-[50%] flex flex-col space-y-6">
          <div className="flex flex-row space-x-1">
            <div className="flex w-full flex-col space-y-2">
              <p className="text-sm ">
                The GroupCheckbox component's selectType property lets you
                decide whether users can choose a single item (the "single"
                option) or numerous items (the "multiple" option).
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
            selectType="multiple"
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
    </div>
  );
}
