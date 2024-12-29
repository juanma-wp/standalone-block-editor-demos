import { createRoot } from "react-dom/client";
import Editor from "./Editor";

import { registerCoreBlocks } from "@wordpress/block-library";

registerCoreBlocks();

const rootElement = document.getElementById("app");
if (!rootElement) throw new Error("Failed to find root element");
const root = createRoot(rootElement);
root.render(<Editor />);
