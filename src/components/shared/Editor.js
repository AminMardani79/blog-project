import React, { useEffect, useRef } from "react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";

const Editor = () => {
  const editor = useRef();
  useEffect(() => {
    ClassicEditor.create(document.querySelector("#editor"), {
      toolbar: [
        "heading",
        "|",
        "bold",
        "italic",
        "link",
        "bulletedList",
        "numberedList",
        "blockQuote",
      ],
      language: "fa",
      heading: {
        options: [
          {
            model: "paragraph",
            title: "Paragraph",
            class: "ck-heading_paragraph",
          },
          {
            model: "heading1",
            view: "h1",
            title: "Heading 1",
            class: "ck-heading_heading1",
          },
          {
            model: "heading2",
            view: "h2",
            title: "Heading 2",
            class: "ck-heading_heading2",
          },
        ],
      },
    }).catch((error) => {
      console.log(error);
    });
  }, [editor]);
  return (
    <div id="editor" ref={editor} onBlur={() => console.log("hello")}></div>
  );
};

export default Editor;
