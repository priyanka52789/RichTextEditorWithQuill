declare interface IRtfEditorWebPartStrings {
  PropertyPaneDescription: string;
  BasicGroupName: string;
  DescriptionFieldLabel: string;
  JSFieldLabel: string;
  CSSFieldLabel: string;
  htmlFieldLabel: string;
}

declare module "RtfEditorWebPartStrings" {
  const strings: IRtfEditorWebPartStrings;
  export = strings;
}
