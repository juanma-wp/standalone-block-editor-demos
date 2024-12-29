declare module "@wordpress/blocks" {
  import { EditorBlock } from "./index";

  export function createBlock(
    name: string,
    attributes?: Record<string, unknown>,
    innerBlocks?: EditorBlock[]
  ): EditorBlock;

  export function serialize(blocks: EditorBlock[]): string;

  export function registerBlockType(
    name: string,
    settings: Record<string, unknown>
  ): void;
}
