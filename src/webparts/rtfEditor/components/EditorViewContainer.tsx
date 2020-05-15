import * as React from "react";
import styles from "./RtfEditor.module.scss";
import Editor from "./Editor";

const EditorViewContainer = (props) => {
  const [editorHtml, setEditorHtml] = React.useState("");

  React.useEffect(() => {
    console.log("htmlCode", props.htmlCode);
    setEditorHtml(props.htmlCode);
  }, [props.htmlCode]);

  function renderEditorContent() {
    return { __html: "" + editorHtml ? editorHtml : "" + "" };
  }

  function updateEditorHtml(html) {
    setEditorHtml(html);
    props.setHtmlCodeProp(html);
  }
  return (
    <div>
      {(props.pagestate == "EditMode" && (
        <div>
          <Editor
            {...props}
            placeholder={"Write something..."}
            initialValue={editorHtml}
            updateParentHtml={updateEditorHtml}
          />
          <div className={styles.editorsSrcCodeContainer}>{editorHtml}</div>
        </div>
      )) || (
        <div className="ql-snow">
          <div
            className={["ql-editor", "publishMode"].join(" ")}
            dangerouslySetInnerHTML={renderEditorContent()}
          />
        </div>
      )}
    </div>
  );
};
export default EditorViewContainer;
