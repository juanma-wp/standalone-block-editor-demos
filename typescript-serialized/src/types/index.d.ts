/// <reference types="react" />

export interface Block {
  clientId: string;
  name: string;
  isValid: boolean;
  attributes: Record<string, string | number | boolean | null>;
  innerBlocks: Block[];
}

export interface EditorBlock {
  clientId: string;
  name: string;
  isValid: boolean;
  attributes: Record<string, string | number | boolean | null>;
  innerBlocks: EditorBlock[];
}

export interface StyleSheet {
  css: string;
}
