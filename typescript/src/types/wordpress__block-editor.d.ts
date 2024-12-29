declare module "@wordpress/block-editor" {
  import { StyleSheet } from "./index";

  export interface BlockEditorProviderProps {
    value: Block[];
    onChange: (blocks: Block[]) => void;
    onInput: (blocks: Block[]) => void;
    children?: React.ReactNode;
  }

  export interface BlockCanvasProps {
    height?: string;
    styles?: StyleSheet[];
  }

  export const BlockEditorProvider: React.ComponentType<BlockEditorProviderProps>;
  export const BlockCanvas: React.ComponentType<BlockCanvasProps>;
}
