import { useState } from "react";
import { BlockEditorProvider, BlockCanvas } from "@wordpress/block-editor";

// Base styles for the content within the block canvas iframe.
const componentsStyles =
  require("!!raw-loader!@wordpress/components/build-style/style.css").default;
const blockEditorContentStyles =
  require("!!raw-loader!@wordpress/block-editor/build-style/content.css").default;
const blocksStyles =
  require("!!raw-loader!@wordpress/block-library/build-style/style.css").default;
const blocksEditorStyles =
  require("!!raw-loader!@wordpress/block-library/build-style/editor.css").default;

const contentStyles = [
  { css: componentsStyles },
  { css: blockEditorContentStyles },
  { css: blocksStyles },
  { css: blocksEditorStyles },
];

export default function Editor() {
  const [blocks, setBlocks] = useState([]);

  return (
    <BlockEditorProvider
      value={blocks}
      onChange={setBlocks}
      onInput={setBlocks}
    >
      <BlockCanvas height="500px" styles={contentStyles} />
    </BlockEditorProvider>
  );
}
