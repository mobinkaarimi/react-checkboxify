import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect, useState } from "react";
export default function Installation() {
  const [copied, setCopied] = useState(false);
  const updateCodeSyntaxHighlighting = () => {
    document.querySelectorAll("code").forEach((block) => {
      hljs.highlightElement(block);
    });
  };

  useEffect(() => {
    updateCodeSyntaxHighlighting();
  }, []);
  useEffect(() => {
    if (copied) {
      navigator.clipboard.writeText("npm install react-checkboxify");
    }
  }, [copied]);

  return (
    <section className="flex flex-col items-start space-y-4 w-full ">
      <h2 className="text-3xl text-primary-orange" id="installation">
        Install
      </h2>
      <div className="flex flex-col md:flex-row items-center space-y-4 md:space-y-0 md:space-x-4 w-full">
        <p>
          Installing react-checkboxify is as simple as using it; simply copy and
          paste the following code into your terminal.
        </p>
        <div
          onClick={(e) => {
            setCopied(true);
          }}
          className="w-full bg-[#051432] py-7 px-6 rounded-lg  flex flex-row items-center space-x-4 justify-between"
        >
          <span className="cursor-pointer">npm i react-checkboxify</span>
          <span
            className={`${copied ? "text-primary-orange" : "text-white"} transition-colors cursor-pointer`}
          >
            {!copied ? "Click it to copy!" : "Copied!"}
          </span>
        </div>
      </div>
    </section>
  );
}
