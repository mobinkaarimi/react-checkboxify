// Core
import { useEffect, useState } from "react";
// Style
import "./App.css";
import Checkbox from "./components/Checkbox";
import GroupCheckbox from "./components/GroupCheckbox";

function App() {
  const [checboxStatus, setCheckboxStatus] = useState(false);
  const [selected, setSelected] = useState([]);
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
  ];
  useEffect(() => {
    console.log(selected);
  }, [selected]);
  return (
    <div>
      <Checkbox
        name="mobin"
        checked={checboxStatus}
        label="mobbin"
        onChange={(e: any) => {
          setCheckboxStatus(e.target.checked);
        }}
      />
      <div className="border rounded-lg py-10 mt-2">
        <GroupCheckbox
          hasSearch={true}
          parentClassName={"flex flex-col space-y-2"}
          list={list}
          selectType="single"
          selectedItems={selected}
          setSelectedItems={setSelected}
        />
      </div>
    </div>
  );
}

export default App;
