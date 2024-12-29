import { createRoot } from "react-dom/client";
import { StrictMode } from "react";
import { registerCoreBlocks } from "@wordpress/block-library";

import Editor from "./Editor";

registerCoreBlocks();

const container = document.getElementById("root");

if (container) {
  const root = createRoot(container);
  root.render(
    <StrictMode>
      <Editor />
    </StrictMode>
  );
}
