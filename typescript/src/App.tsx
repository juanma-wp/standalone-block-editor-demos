import { useState } from "react";
import { BlockEditorProvider, BlockCanvas } from "@wordpress/block-editor";
import type { Block, StyleSheet } from "./types/index";

// Base styles for the content within the block canvas iframe.
import componentsStyles from "@wordpress/components/build-style/style.css?raw";
import blockEditorContentStyles from "@wordpress/block-editor/build-style/content.css?raw";
import blocksStyles from "@wordpress/block-library/build-style/style.css?raw";
import blocksEditorStyles from "@wordpress/block-library/build-style/editor.css?raw";

const contentStyles: StyleSheet[] = [
  { css: componentsStyles },
  { css: blockEditorContentStyles },
  { css: blocksStyles },
  { css: blocksEditorStyles },
];

const Editor = (): JSX.Element => {
  const [blocks, setBlocks] = useState<Block[]>([]);

  return (
    <BlockEditorProvider
      value={blocks}
      onChange={setBlocks}
      onInput={setBlocks}
    >
      <BlockCanvas height="500px" styles={contentStyles} />
    </BlockEditorProvider>
  );
};

export default Editor;
