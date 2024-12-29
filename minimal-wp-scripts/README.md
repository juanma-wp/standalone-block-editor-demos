# Minimal Standalone Block Editor Demo using `wp-scripts`

This project demonstrates how to use WordPress Block Editor components in a standalone React application outside of WordPress. It uses `wp-scripts` with the `--webpack-no-externals` flag to bundle all dependencies.

## Key Features

- Uses `@wordpress/scripts` for build tooling
- Standalone Block Editor implementation
- All WordPress dependencies bundled (not externalized)
- Includes necessary Block Editor styles

## Why `--webpack-no-externals`?

By default, `@wordpress/scripts` assumes the code will run within WordPress where core scripts/packages are already available as globals (wp.\* namespace). The `--webpack-no-externals` flag tells webpack to:

1. Bundle all WordPress dependencies into our output files
2. Not expect WordPress core scripts to be available globally
3. Make the build completely self-contained for running outside WordPress

## Load CSS Assets

**Require with `raw-loader`**: The require solution works in webpack-based setups because:

- `require` is CommonJS syntax that webpack understands
- `!!raw-loader` is a webpack-specific loader syntax that tells webpack to process the file as raw text
- This wouldn't work in Vite by default since it uses ES modules and has different loader conventions
