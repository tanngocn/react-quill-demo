import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [editorContent, setEditorContent] = useState("");

  const [leftContent, setLeftContent] = useState("");
  const [rightContent, setRightContent] = useState("");
  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }, { font: [] }],
      ["bold", "italic", "underline", "strike", "blockquote"],
      [{ list: "ordered" }, { list: "bullet" }, { indent: "-1" }, { indent: "+1" }],
      ["link", "image", "video"],
      ["clean"],
    ],
  };
  const formats = [
    "header",
    "font",
    "size",
    "bold",
    "italic",
    "underline",
    "strike",
    "blockquote",
    "list",
    "bullet",
    "indent",
    "link",
    "image",
    "video",
    "color",
  ];

  const parseContent = (content) => {
    const parser = new DOMParser();
    const doc = parser.parseFromString(content, "text/html");
    const leftContent = [];
    const rightContent = [];

    const nodes = doc.body.childNodes;
    console.log(nodes);
    nodes.forEach((node) => {
      if (node.tagName === "H1" || (node.tagName === "P" && !node.outerHTML.includes("img"))) {
        leftContent.push(node.outerHTML);
      } else if (node.tagName === "IFRAME" || node.outerHTML.includes("img")) {
        rightContent.push(node.outerHTML);
      }
    });

    return { leftContent: leftContent.join(""), rightContent: rightContent.join("") };
  };

  const handleChange = (content) => {
    setEditorContent(content);
  };

  useEffect(() => {
    const parsedContent = parseContent(editorContent);
    setLeftContent(parsedContent.leftContent);
    setRightContent(parsedContent.rightContent);
  }, [editorContent]);
  return (
    <>
      <ReactQuill formats={formats} modules={modules} theme='snow' value={editorContent} onChange={handleChange} />
      <div className='wrapper'>
        <div className='left-content' dangerouslySetInnerHTML={{ __html: leftContent }} />
        <div className='right-content' dangerouslySetInnerHTML={{ __html: rightContent }} />
      </div>
    </>
  );
}

export default App;
