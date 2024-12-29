import { useState } from "react";
import { BlockEditorProvider, BlockCanvas } from "@wordpress/block-editor";

// Base styles for the content within the block canvas iframe.
import componentsStyles from "@wordpress/components/build-style/style.css?raw";
import blockEditorContentStyles from "@wordpress/block-editor/build-style/content.css?raw";
import blocksStyles from "@wordpress/block-library/build-style/style.css?raw";
import blocksEditorStyles from "@wordpress/block-library/build-style/editor.css?raw";

const contentStyles = [
  { css: componentsStyles },
  { css: blockEditorContentStyles },
  { css: blocksStyles },
  { css: blocksEditorStyles },
];

export default function Editor() {
  const [blocks, setBlocks] = useState([]);
  return (
    /*
      The BlockEditorProvider is the wrapper of the block editor's state.
      All the UI elements of the block editor need to be rendered within this provider.
    */
    <BlockEditorProvider
      value={blocks}
      onChange={setBlocks}
      onInput={setBlocks}
    >
      {/*
        The BlockCanvas component renders the block list within an iframe
        and wires up all the necessary events to make the block editor work.
      */}
      <BlockCanvas height="500px" styles={contentStyles} />
    </BlockEditorProvider>
  );
}
