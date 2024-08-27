import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import "./style.css";
import { useEffect } from "react";
import BasicUsage from "./BasicUsage";
import DisableCheckbox from "./DisableCheckbox";
import CustomiseStyle from "./CustomiseStyle";
import CustomIcon from "./CustomIcon";
import Search from "./Search";
import SelectType from "./SelectType";
export default function Example() {
  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("code").forEach((block) => {
      hljs.highlightElement(block);
    });
  };

  useEffect(() => {
    updateCodeSyntaxHighlighting();
  }, []);

  return (
    <section
      className="container mx-auto flex flex-col items-start space-y-6 "
      id="usage"
    >
      <div className="flex flex-col space-y-6 items-tart w-full">
        <div className="flex flex-col space-y-2">
          <h2 className="text-2xl font-medium text-primary-orange">Usage</h2>
          <p>
            Here is where you can find examples and code snippets that will help
            you use react-checkboxify in your React projects.
          </p>
        </div>
        <BasicUsage />
        <DisableCheckbox />
        <CustomiseStyle />
        <CustomIcon />
        <Search />
        <SelectType />
      </div>
    </section>
  );
}
