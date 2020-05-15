import * as React from 'react';
import styles from './RtfEditor.module.scss';
import { IRtfEditorProps } from './IRtfEditorProps';
import { escape } from '@microsoft/sp-lodash-subset';

export default class RtfEditor extends React.Component<IRtfEditorProps, {}> {
  public render(): React.ReactElement<IRtfEditorProps> {
    return (
      <div className={ styles.rtfEditor }>
        <div className={ styles.container }>
          <div className={ styles.row }>
            <div className={ styles.column }>
              <span className={ styles.title }>Welcome to SharePoint!</span>
              <p className={ styles.subTitle }>Customize SharePoint experiences using Web Parts.</p>
              <p className={ styles.description }>{escape(this.props.description)}</p>
              <a href="https://aka.ms/spfx" className={ styles.button }>
                <span className={ styles.label }>Learn more</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
