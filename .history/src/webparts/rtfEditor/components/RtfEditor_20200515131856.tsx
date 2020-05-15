import * as React from "react";
import styles from "./RtfEditor.module.scss";
import EditorViewContainer from "./EditorViewContainer";

const RtfEditor = (props) => {
  return (
    <div>
      <EditorViewContainer {...props} />
    </div>
  );
};
export default RtfEditor;
