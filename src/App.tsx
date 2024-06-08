// Core
import { useState } from "react";
// Style
import "./App.css";
import Checkbox from "./components/Checkbox";

function App() {
  const [checboxStatus, setCheckboxStatus] = useState(false);
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
    </div>
  );
}

export default App;
