import { useState } from "react";
import Checkbox from "../Checkbox";
import "./style.css";
import CheckboxActive from "../../assets/checkbox-active-icon.svg";
import checkboxEmpty from "../../assets//checkbox-empty-icon.svg";
import checkboxIcon1 from "../../assets/checkbox-icon-1.svg";
import checkboxIcon2 from "../../assets/checkbox-icon-2.svg";

import GroupCheckbox from "../GroupCheckbox";
export default function SectionOne() {
  const [selectedOne, setSelectedOne] = useState(true);
  const [groupSelected, setGroupSelected] = useState(false);
  const [groupOneSelected, setGroupOneSelected] = useState(false);

  let list = [
    {
      id: 1,
      name: "js",
      label: "Java Script",
    },
    {
      id: 2,
      name: "react",
      label: "React.js",
    },
    {
      id: 3,
      name: "anglar",
      label: "Angular.js",
    },
    {
      id: 4,
      name: "Ve",
      label: "Vue.js",
    },
    {
      id: 5,
      name: "Alpine",
      label: "Alpine",
    },
    {
      id: 6,
      name: "Tailwind",
      label: "tailwind css",
    },
  ];
  let list2 = [
    {
      id: 1,
      name: "js10",
      label: "Java Script",
      checked: true,
    },
    {
      id: 2,
      name: "react10",
      label: "React.js",
    },
    {
      id: 3,
      name: "anglar10",
      label: "Angular.js",
      checked: true,
    },
    {
      id: 4,
      name: "Ve10",
      label: "Vue.js",
    },
    {
      id: 5,
      name: "Alpine10",
      label: "Alpine",
      checked: true,
    },
    {
      id: 6,
      name: "Tailwind10",
      label: "tailwind css",
    },
  ];
  return (
    <section className="w-full h-full min-h-[70vh] flex flex-col  md:flex-row items-center justify-between">
      <div className="flex flex-col space-y-4 w-full md:w-2/5">
        <h1 className="text-4xl">React Checkboxify</h1>
        <p className="text-primary-orange text-base">
          Simplify checkbox management confidently with customizable icons,
          single or multiple selection, and flexible styling.
        </p>
      </div>
      <div className="w-full md:w-2/5 h-full bg-[#051432] md:py-5 px-6 rounded-2xl min-h-[40vh] md:parent flex md:grid flex-col  space-y-4 md:space-y-0 gap-y-4 gap-x-4 py-4">
        <div className="div1">
          <div className="header flex items-center justify-center w-full border-b border-b-white transition-colors pb-2 mb-3">
            <p className="text-center mt-1 w-full font-medium">
              Search & Custom Icon
            </p>
          </div>
          <GroupCheckbox
            parentClassName="flex flex-col space-y-2 mx-2 max-h-full  overflow-y-auto"
            checkboxFilledClassName="flex flex-row space-x-3 items-center"
            labelClassName="font-bold"
            hasSearch
            searchOption={{
              className:
                "border rounded-md mb-2 bg-transparent px-3 py-1 outline-none",
              label: "search...",
            }}
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
        <div className="div2 overflow-hidden pb-2">
          <div className="header flex items-center justify-center w-full border-b border-b-white transition-colors pb-2 mb-3">
            <p className="text-center mt-1 font-medium w-full">
              Customize Style
            </p>
          </div>
          <Checkbox
            parentClassName="flex flex-row items-center  space-x-6 mx-6 "
            labelClassName="text-lg cursor-pointer"
            inputClassName="w-5 h-5 accent-primary-orange cursor-pointer"
            checked={selectedOne}
            onChange={(e: any) => setSelectedOne(e.target.checked)}
            label="First Item"
            name="firstItem"
          />
        </div>
        <div className="div3 pb-2">
          <div className="header flex items-center justify-center w-full border-b border-b-white transition-colors pb-2 mb-3">
            <p className="text-center mt-1 w-full font-medium">
              Select Multiple
            </p>
          </div>
          <GroupCheckbox
            parentClassName="flex flex-col space-y-2 mx-2 max-h-full  overflow-y-auto"
            checkboxFilledClassName="flex flex-row space-x-3 items-center"
            labelClassName="font-bold"
            hasSearch
            selectType="multiple"
            searchOption={{
              className:
                "border rounded-md mb-2 bg-transparent px-3 py-1 outline-none",
              label: "search...",
            }}
            list={list2}
            customIcon={{
              checked: checkboxIcon1,
              unChecked: checkboxIcon2,
              size: 30,
            }}
            selectedItems={groupOneSelected}
            setSelectedItems={setGroupOneSelected}
          />
        </div>
        <div className="div4 overflow-hidden pb-2">
          <div className="header flex items-center justify-center w-full border-b border-b-white transition-colors pb-2 mb-3">
            <p className="text-center mt-1 font-medium w-full">Disable it !</p>
          </div>
          <Checkbox
            parentClassName="flex flex-row items-center  space-x-6 mx-6 "
            labelClassName="text-lg cursor-pointer"
            disabled
            inputClassName="w-7 h-7 accent-primary-orange cursor-pointer"
            checked
            label="disable box"
            name="disable box"
          />
        </div>
      </div>
    </section>
  );
}
