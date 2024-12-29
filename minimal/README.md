# Minimal Standalone Block Editor Demo using Vite

This demo showcases a minimal implementation of the WordPress Block Editor (Gutenberg) running completely standalone outside of WordPress using Vite as the build tool. Key aspects of this demo include:

## Overview

- Uses Vite instead of webpack for faster development and optimized production builds
- Demonstrates how to properly load WordPress editor styles in a Vite environment
- Shows integration of core WordPress blocks and editor components
- Runs independently without requiring a WordPress backend

## Technical Implementation

The demo implements:

- A React-based application that embeds the Block Editor UI
- Direct imports of WordPress packages (@wordpress/block-editor, @wordpress/block-library)
- Static loading of required editor styles using Vite's `?raw` import syntax
- Registration of core WordPress blocks for basic content editing

### Load CSS Assets

- **Import with `?raw` query**: Using import with ?raw works because it's using Vite's built-in support for importing raw content as a string. This is the modern, ESM-compatible approach.
