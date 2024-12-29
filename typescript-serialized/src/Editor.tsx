import { useState, useEffect } from "react";
import { BlockEditorProvider, BlockCanvas } from "@wordpress/block-editor";
import { serialize } from "@wordpress/blocks";
import Prism from "prismjs";
import { EditorBlock } from "./types";

// styles for markup highlighting
import "prismjs/themes/prism.css";
import "prismjs/components/prism-markup";

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
  const [blocks, setBlocks] = useState<EditorBlock[]>([]);
  const [highlightedContent, setHighlightedContent] = useState("");

  useEffect(() => {
    const serialized: string = serialize(blocks);
    const highlighted = Prism.highlight(
      serialized,
      Prism.languages.markup,
      "html"
    );
    setHighlightedContent(highlighted);
  }, [blocks]);

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1rem",
        height: "100vh",
        padding: "1rem",
      }}
    >
      <div style={{ overflow: "auto" }}>
        <BlockEditorProvider
          value={blocks}
          onChange={setBlocks}
          onInput={setBlocks}
        >
          <BlockCanvas height="calc(100vh - 2rem)" styles={contentStyles} />
        </BlockEditorProvider>
      </div>

      <div
        style={{
          overflow: "auto",
          padding: "1rem",
          backgroundColor: "#f0f0f0",
          borderRadius: "4px",
          fontFamily: "'Fira Code', monospace",
        }}
      >
        <pre style={{ margin: 0 }}>
          <code
            className="language-html"
            dangerouslySetInnerHTML={{ __html: highlightedContent }}
          />
        </pre>
      </div>
    </div>
  );
}
