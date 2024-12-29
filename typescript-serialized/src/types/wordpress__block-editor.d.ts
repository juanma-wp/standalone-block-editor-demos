declare module "@wordpress/block-editor" {
  import { EditorBlock, StyleSheet } from "./index";
  import { ComponentType } from "react";

  export interface BlockEditorProviderProps {
    value: EditorBlock[];
    onChange: (blocks: EditorBlock[]) => void;
    onInput: (blocks: EditorBlock[]) => void;
    children?: React.ReactNode;
  }

  export interface BlockCanvasProps {
    height?: string;
    styles?: StyleSheet[];
  }

  export const BlockEditorProvider: ComponentType<BlockEditorProviderProps>;
  export const BlockCanvas: ComponentType<BlockCanvasProps>;
}
