import hljs from "highlight.js";
import "highlight.js/styles/atom-one-dark.css";
import { useEffect } from "react";
export default function Installation() {
  const postData = `
  <pre>
    <code class="language-javascript">
      npm install react-checkboxify
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
    <section className="container mx-auto flex flex-col items-start">
      <h2 className="text-2xl">Installation</h2>
      <p>
        Install react-checkboxify is so easy like usage it, just need write
        bottom line in terminal of your project.
      </p>
      <div dangerouslySetInnerHTML={{ __html: postData }}></div>
    </section>
  );
}
