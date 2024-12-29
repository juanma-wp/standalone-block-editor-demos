// Regular CSS modules
declare module "*.css" {
  const content: string;
  export default content;
}

// WordPress specific CSS modules
declare module "@wordpress/components/build-style/style.css?raw" {
  const content: string;
  export default content;
}

declare module "@wordpress/block-editor/build-style/content.css?raw" {
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
