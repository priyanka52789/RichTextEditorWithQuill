import * as React from "react";
import * as ReactDom from "react-dom";
import { Version } from "@microsoft/sp-core-library";
import {
  IPropertyPaneConfiguration,
  PropertyPaneTextField,
  PropertyPaneButton,
  PropertyPaneButtonType,
} from "@microsoft/sp-property-pane";
import { BaseClientSideWebPart } from "@microsoft/sp-webpart-base";

import * as strings from "RtfEditorWebPartStrings";
import RtfEditor from "./components/RtfEditor";
import { IRtfEditorProps } from "./components/IRtfEditorProps";
import { SPComponentLoader } from "@microsoft/sp-loader";
import { DisplayMode } from "@microsoft/sp-core-library";

export interface IRtfEditorWebPartProps {
  description: string;
  jsfilepath: string;
  cssfilepath: string;
  htmlCode: string;
  setHtmlCodeProp: (string) => void;
}

export default class RtfEditorWebPart extends BaseClientSideWebPart<
  IRtfEditorWebPartProps
> {
  private htmlCode = "";

  private setChildCompHtmlCode() {
    this.htmlCode = this.properties.htmlCode;
  }

  private setHtmlCodeProp(htmlCode: string): void {
    this.properties["htmlCode"] = htmlCode;
  }

  public render(): void {
    if (this.properties.cssfilepath) {
      SPComponentLoader.loadCss(this.properties.cssfilepath);
    }
    if (this.properties.jsfilepath) {
      SPComponentLoader.loadScript(this.properties.jsfilepath);
    }
    const element: React.ReactElement<IRtfEditorProps> = React.createElement(
      RtfEditor,
      {
        description: this.properties.description,
        jsfilepath: this.properties.jsfilepath,
        cssfilepath: this.properties.cssfilepath,
        htmlCode: this.htmlCode,
        setHtmlCodeProp: this.setHtmlCodeProp.bind(this),
        pagestate:
          this.displayMode == DisplayMode.Edit ? "EditMode" : "ReadMode",
        context: this.context,
      }
    );

    ReactDom.render(element, this.domElement);
  }

  protected onDispose(): void {
    ReactDom.unmountComponentAtNode(this.domElement);
  }

  protected get dataVersion(): Version {
    return Version.parse("1.0");
  }

  protected getPropertyPaneConfiguration(): IPropertyPaneConfiguration {
    return {
      pages: [
        {
          // header: {
          //   description: strings.PropertyPaneDescription
          // },
          groups: [
            {
              //groupName: strings.BasicGroupName,
              groupFields: [
                // PropertyPaneTextField('description', {
                //   label: strings.DescriptionFieldLabel
                // }),
                PropertyPaneTextField("jsfilepath", {
                  label: strings.JSFieldLabel,
                }),
                PropertyPaneTextField("cssfilepath", {
                  label: strings.CSSFieldLabel,
                }),
                PropertyPaneTextField("htmlCode", {
                  label: strings.htmlFieldLabel,
                  multiline: true,
                  rows: 5,
                }),
                PropertyPaneButton("setHtmlBtn", {
                  text: "Set Html",
                  buttonType: PropertyPaneButtonType.Primary,
                  onClick: this.setChildCompHtmlCode.bind(this),
                }),
              ],
            },
          ],
        },
      ],
    };
  }
}
