import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";
export default function Example() {
  const pureCheckboxCode = `<pre>
<code >import React, {useState} from "react";
import Checkbox from "react-checkboxify";

export default function App(){

const [selected, setSelected] = useState(false);

function onChangeHandler(e) {
  setSelected(e.target.checked);
}
return  < Checkbox
           name="item"
           label="item"
           checked={selected}
           onChange={onChangeHandler}
          />
}
</code>
</pre>`;
  const DisableCheckboxCode = `<pre>
<code >import React, {useState} from "react";
import Checkbox from "react-checkboxify";

export default function App(){

const [selected, setSelected] = useState(false);

function onChangeHandler(e) {
  setSelected(e.target.checked);
}
return  < Checkbox
            disabled
            name="item"
            label="item"
            checked={selected}
            onChange={onChangeHandler}
       />
}
</code>
</pre>`;
  const CustomizeStyleCheckboxCode = `<pre>
<code >import React, {useState} from "react";
import Checkbox from "react-checkboxify";

export default function App(){

const [selected, setSelected] = useState(false);

function onChangeHandler(e) {
  setSelected(e.target.checked);
}
return  < Checkbox
            name="item"
            label="item"
            parentClassName="border rounded-lg flex items-center space-x-4 px-5 py-3"
            inputClassName="w-6 h-6"
            labelClassName="text-xl font-bold underline text-yellow-400"
            checked={selected}
            onChange={onChangeHandler}
          />
}
</code>
</pre>`;
  const CustomeIconCheckboxCode = `<pre>
<code >import React, {useState} from "react";
import Checkbox from "react-checkboxify";
import emptyCheckboxIcon from "./assets/checkbox-empty-icon.svg";
import checkedCheckboxIcon from "./assets/checkbox-checked-icon.svg";

export default function App(){

const [selected, setSelected] = useState(false);

function onChangeHandler(e) {
  setSelected(e.target.checked);
}
return  < Checkbox
            disabled
            name="item"
            label="item"
            checked={selected}
            onChange={onChangeHandler}
            parentClassName="flex flex-row items-center space-x-2"
            labelClassName="text-xl font-bold cursor-pointer"
            customIcon={{
              unChecked: emptyCheckboxIcon,
              checked: checkedCheckboxIcon,
              size: 25,
            }}
          />
}
</code>
</pre>`;
  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("code").forEach((block) => {
      hljs.highlightElement(block);
    });
  };

  useEffect(() => {
    updateCodeSyntaxHighlighting();
  }, []);

  return (
    <section className="container mx-auto flex flex-col items-start space-y-10">
      <div className="flex flex-col space-y-2">
        <h2 className="text-2xl font-medium">Examples</h2>
        <p>
          In this section, I wanna show you how import and use these components
          in your project.
        </p>
      </div>

      <div className="flex flex-row items-start space-x-3 w-full ">
        <div className="w-full flex flex-col space-y-3">
          <h3 className="text-xl">Pure Checkbox</h3>
          <p>you can see base usage of Checkbox component</p>
          <p className="max-w-[50%] mt-2">
            these attributes is necessary, and in next section we know about
            cool features that's you can use it.
          </p>
        </div>
        <div className="w-full">
          <div dangerouslySetInnerHTML={{ __html: pureCheckboxCode }}></div>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-3 w-full ">
        <div className="w-full flex flex-col space-y-3">
          <h3 className="text-xl">Disable Checkbox</h3>
          <p>
            you can disable website with disabled attribute this attribute give
            Boolean type.
          </p>
        </div>
        <div className="w-full">
          <div dangerouslySetInnerHTML={{ __html: DisableCheckboxCode }}></div>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-3 w-full ">
        <div className="w-2/4 max-w-[50%] flex flex-col space-y-3">
          <h3 className="text-xl">Customize Style</h3>
          <p>
            Checkbox component give className for each tag inside it like parent
            tag, input tag, and label tag.
            <br />
          </p>
          <p>Check example</p>
          <p>
            I use tailwindcss class, you can use any class use it or write
            classes, load your CSS file and write it in target attribute.
          </p>
        </div>
        <div className="w-2/4 max-w-[50%] ">
          <div
            dangerouslySetInnerHTML={{ __html: CustomizeStyleCheckboxCode }}
          ></div>
        </div>
      </div>
      <div className="flex flex-row items-start space-x-3 w-full ">
        <div className="w-2/4 max-w-[50%] flex flex-col space-y-3">
          <h3 className="text-xl">Custom Icon</h3>
          <p>
            I know you can use accent-color for change background-color of
            default checked icon, but many users need change icon with custom
            icon's. so you can change both icon's with customIcon attribute
          </p>
          <p>customIcon accept an object with 3 property</p>
          <ul className="flex flex-col space-y-4">
            <li className="flex flex-col space-y-1">
              <span>checked</span>
              <span>you shall add your checked icon here</span>
            </li>
            <li className="flex flex-col space-y-1">
              <span>unChecked</span>
              <span>you shall add your default style icon here</span>
            </li>
            <li className="flex flex-col space-y-1">
              <span>size</span>
              <span>you shall write number for size of icon you want</span>
            </li>
          </ul>
          <p>Check example</p>
        </div>
        <div className="w-2/4 max-w-[50%] ">
          <div
            dangerouslySetInnerHTML={{ __html: CustomeIconCheckboxCode }}
          ></div>
        </div>
      </div>
    </section>
  );
}
