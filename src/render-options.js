import {BackgroundPlugin, GeneratedGridBackground, ForceDirectedLayout, LassoPlugin, EVENT_CANVAS_CLICK} from "@visuallyjs/browser-ui";
import {edgeMappings} from "./definitions.js";

/**
 * Render options control the basic behaviour and appearance of the UI.
 */
const renderOptions = {
    activeFiltering:true,
    dragOptions: {
        cssFilter:[
            ".vjs-delete-button", ".vjs-add-button", ".vjs-schema-add", ".vjs-schema-edit"
        ].join(",")
    },
    plugins:[
        LassoPlugin.type,
        {
            type:BackgroundPlugin.type,
            options:{
                type:GeneratedGridBackground.type
            }
        }
    ],
    events: {
        [EVENT_CANVAS_CLICK]: (s) => {
            s.model.clearSelection()
        }
    },
    zoomToFit:true,
    layout:{
        type: ForceDirectedLayout.type,
        options: {
            padding: {x:150, y:150}
        }
    },
    edges:{
        propertyMappings: edgeMappings,
        editable:true
    },
    consumeRightClick:false
}

export default renderOptions
