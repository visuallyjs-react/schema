# Schema Builder Implementation

This document describes how the Schema Builder is implemented using `@visuallyjs/browser-ui-react` and `@visuallyjs/browser-ui`.

## Components

The application is built using several core components from `@visuallyjs/browser-ui-react`:

- **`SurfaceProvider`**: Provides the context and state management for the schema builder.
- **`SurfaceComponent`**: The main canvas area where the schema (entities and their relationships) is rendered.
- **`ControlsComponent`**: Standard zoom and pan controls.
- **`MiniviewComponent`**: Provides a navigation map for large schemas.

### Custom Components
- **`SchemaPalette`**: A custom palette for dragging new entities and attributes onto the canvas.
- **`SchemaInspector`**: A context-sensitive panel for editing the properties of selected entities and relationships.

## Configuration Options

- **`renderOptions`**: Defines the visual style of the schema elements and the routing of relationship lines.
- **`viewOptions`**: Maps internal schema model types to their visual representations.
- **`modelOptions`**: Defines the underlying data structure and constraints for the schema (e.g., uniqueness of entity names).

## CSS Integration
- **VisuallyJS Core**: The core styles are included in `src/index.css` via `@import "@visuallyjs/browser-ui/css/visuallyjs.css";`.
- **App Styles**: Custom styles for the schema editor layout and entity styling are imported from `schema.css`.
