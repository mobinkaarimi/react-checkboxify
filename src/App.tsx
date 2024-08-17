// Core
import { useEffect, useState } from "react";
// Style
import "./App.css";
import Checkbox from "./components/Checkbox";
import checkboxs from "./assets/Checkbox.svg";
import checkboxActive from "./assets/CheckboxActive.svg";
import GroupCheckbox from "./components/GroupCheckbox";
import Header from "./components/Header";
import Installation from "./components/Installation";
import Example from "./components/Example";
function App() {
  const [selected, setSelected] = useState(false);
  let list = [
    {
      id: 1,
      name: "mobin1",
      checked: true,
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
    <div className="w-screen min-h-screen">
      {/* <Header /> */}
      <main className="container mx-auto">
        {/* <Installation /> */}
        {/* <Example /> */}
        {/* <Checkbox
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
        /> */}
        <GroupCheckbox
          hasSearch
          parentClassName="flex flex-col space-y-2 bg-red-500"
          searchOption={{ label: "search params" }}
          selectType="multiple"

          list={list}
          selectedItems={selected}
          setSelectedItems={setSelected}
        />
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
      </main>
    </div>
  );
}

export default App;

// // Core;
// import { useEffect, useState } from "react";
// // Style
// import "./App.css";
// import Checkbox from "./components/Checkbox";
// import checkboxs from "./assets/Checkbox.svg";
// import checkboxActive from "./assets/CheckboxActive.svg";
// import emptyCheckboxIcon from "./assets/checkbox-empty-icon.svg";
// import checkedCheckboxIcon from "./assets/checkbox-checked-icon.svg";
// import GroupCheckbox from "./components/GroupCheckbox";

// import Header from "./components/Header";
// import Installation from "./components/Installation";
// import Example from "./components/Example";
// function App() {
//   const [selected, setSelected] = useState(false);
//   let list = [
//     {
//       id: 1,
//       name: "mobin1",
//     },
//     {
//       id: 2,
//       name: "mobin2",
//     },
//     {
//       id: 3,
//       name: "mobin3",
//     },
//     {
//       id: 4,
//       name: "mobin4",
//     },
//     {
//       id: 5,
//       name: "mobin5",
//     },
//     {
//       id: 6,
//       name: "mobin6",
//     },
//     {
//       id: 7,
//       name: "mobin6+1",
//     },
//   ];
//   useEffect(() => {
//     console.log(selected);
//   }, [selected]);
//   function onChangeHandler(e) {
//     setSelected(e.target.checked);
//   }
//   return (
//     <div className="w-screen min-h-screen flex flex-col space-y-10">
//       {/* Pure Checkbox */}
//       <Checkbox
//         name="item"
//         label="item"
//         checked={selected}
//         onChange={onChangeHandler}
//       />
//       {/* Customize Style */}
//       <Checkbox
//         name="item"
//         label="item"
//         parentClassName="border rounded-lg flex items-center space-x-4 px-5 py-3"
//         inputClassName="w-6 h-6"
//         labelClassName="text-xl font-bold underline text-yellow-400"
//         checked={selected}
//         onChange={onChangeHandler}
//       />
//       {/* Disable Checkbox */}
//       <Checkbox
//         disabled
//         name="item"
//         label="item"
//         checked={selected}
//         onChange={onChangeHandler}
//       />
//       {/* Custom Icon */}
//       <Checkbox
//         disabled
//         name="item"
//         label="item"
//         checked={selected}
//         onChange={onChangeHandler}
//         parentClassName="flex flex-row items-center space-x-2"
//         labelClassName="text-xl font-bold cursor-pointer"
//         customIcon={{
//           unChecked: emptyCheckboxIcon,
//           checked: checkedCheckboxIcon,
//           size: 25,
//         }}
//       />
//     </div>
//   );
// }

// export default App;
