import {
    SurfaceProvider,
    SurfaceComponent,
    ControlsComponent,
    MiniviewComponent
} from "@visuallyjs/browser-ui-react"

import renderOptions from './render-options'
import viewOptions from './view-options'
import modelOptions from './model-options'

import SchemaInspector from "./components/InspectorComponent.jsx"

import {useRef} from "react";
import SchemaPalette from "./components/Palette.jsx";

function App({url, hideRhs}) {

    const surfaceComponent = useRef(null)

  return <div className="vjs-schema-builder">
      <SurfaceProvider>
          <div className="vjs-schema-builder-canvas">
              <SurfaceComponent renderOptions={renderOptions} modelOptions={modelOptions} viewOptions={viewOptions} ref={ surfaceComponent } url={url}>
                  <ControlsComponent/>
              </SurfaceComponent>
          </div>
          {!hideRhs && <div className="vjs-schema-builder-rhs">
              <div className="vjs-schema-builder-rhs-section">
                  <span className="vjs-schema-builder-rhs-title">Navigation</span>
                  <MiniviewComponent/>
              </div>
              <div className="vjs-schema-builder-rhs-section">
                  <span className="vjs-schema-builder-rhs-title">Components</span>
                  <SchemaPalette/>
              </div>
              <div className="vjs-schema-builder-rhs-section">
                  <span className="vjs-schema-builder-rhs-title">Inspector</span>
                  <SchemaInspector/>
              </div>
          </div>}

      </SurfaceProvider>
  </div>
}

export default App
