import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { registerCoreBlocks } from "@wordpress/block-library";

import App from "./App";

registerCoreBlocks();

const rootElement = document.getElementById("root");

if (!rootElement) {
  throw new Error("Failed to find root element");
}

createRoot(rootElement).render(
  <StrictMode>
    <App />
  </StrictMode>
);
