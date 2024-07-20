// Core
import { useEffect, useState } from "react";
// Style
import "./App.css";
import GroupCheckbox from "./components/GroupCheckbox";
import Checkbox from "./components/Checkbox";
import checkboxs from "./assets/Checkbox.svg";
import checkboxActive from "./assets/CheckboxActive.svg";
function App() {
  const [selected, setSelected] = useState(false);
  let list = [
    {
      id: 1,
      name: "mobin1",
    },
    {
      id: 2,
      name: "mobin2",
    },
    {
      id: 3,
      name: "mobin3",
    },
    {
      id: 4,
      name: "mobin4",
    },
    {
      id: 5,
      name: "mobin5",
    },
    {
      id: 6,
      name: "mobin6",
    },
    {
      id: 7,
      name: "mobin6+1",
    },
  ];
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div>
      <div className="border rounded-lg py-10 mt-2">
        <Checkbox
          name={list[0].name}
          onChange={(e: any) => setSelected(!selected)}
          id={1}
          checked={selected}
          label="hell"
          parentClassName="flex flex-row space-x-4 mx-4 items-center"
          customIcon={{
            checked: checkboxs,
            unChecked: checkboxActive,
            size: 50,
          }}
        />
        {/* <GroupCheckbox
          parentClassName="flex flex-col space-y-2 bg-red-500"
          searchOption={{ label: "search params" }}
          selectType="multiple"
          list={list}
          selectedItems={selected}
          setSelectedItems={setSelected}
        /> */}
        {/* <GroupCheckbox
          hasSearch
          searchOption={{}}
          parentClassName={
            "flex flex-col space-y-2 bg-red-500 max-h-44 overflow-y-scroll"
          }
          list={list}
          selectType="multiple"
          selectedItems={selected}
          setSelectedItems={setSelected}
        /> */}
      </div>
    </div>
  );
}

export default App;
