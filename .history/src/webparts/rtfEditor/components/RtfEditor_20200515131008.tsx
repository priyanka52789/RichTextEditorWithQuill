import * as React from "react";
import styles from "./RtfEditor.module.scss";
import { IRtfEditorProps } from "./IRtfEditorProps";
import EditorViewContainer from "./EditorViewContainer";

const RtfEditor = (props) => {
  return (
    <div className={styles.rtfEditor}>
      <EditorViewContainer {...this.props} />
    </div>
  );
};
