/// <reference types="react" />

export interface Block {
  name: string;
  attributes: Record<string, unknown>;
  innerBlocks: Block[];
}

export interface StyleSheet {
  css: string;
}

declare module "@wordpress/components/build-style/style.css";
declare module "@wordpress/block-editor/build-style/style.css";
declare module "@wordpress/block-library/build-style/common.css";
declare module "@wordpress/block-library/build-style/style.css";
declare module "@wordpress/block-library/build-style/editor.css";

// WordPress blocks module declaration
declare module "@wordpress/blocks" {
  export function createBlock(
    name: string,
    attributes?: Record<string, unknown>,
    innerBlocks?: Block[]
  ): Block;

  export function serialize(blocks: Block[]): string;
}

// CSS raw imports declarations
declare module "@wordpress/components/build-style/*.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-editor/build-style/*.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-library/build-style/*.css?raw" {
  const content: string;
  export default content;
}

// Specific CSS file declarations
declare module "@wordpress/components/build-style/style.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-editor/build-style/content.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-editor/build-style/style.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-library/build-style/style.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-library/build-style/editor.css?raw" {
  const content: string;
  export default content;
}
