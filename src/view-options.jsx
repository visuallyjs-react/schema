import {
    EVENT_TAP, DEFAULT, AnchorLocations,
    EVENT_CLICK, CONNECTOR_TYPE_ORTHOGONAL,
    consume, LabelOverlay, DotOverlay
} from "@visuallyjs/browser-ui";

import TableComponent from "./components/TableComponent.jsx";
import ViewComponent from "./components/ViewComponent.jsx";
import ColumnComponent from "./components/ColumnComponent.jsx";
import {COMMON} from "./constants.js";

const viewOptions = {
    nodes:{
        "table": {
            jsx: (ctx) => <TableComponent ctx={ctx}/>
        },
        "view": {
            jsx: (ctx) => <ViewComponent ctx={ctx}/>
        }
    },
    ports: {
        [DEFAULT]: {
            jsx:(ctx) => { return <ColumnComponent ctx={ctx}/> },
            edgeType: COMMON, // the type of edge for connections from this port type
            maxConnections: -1 // no limit on connections
        }
    },
    edges:{
        [DEFAULT]: {
            detachable: false,
            anchor: [AnchorLocations.Left, AnchorLocations.Right],
            connector:{
                type:CONNECTOR_TYPE_ORTHOGONAL
            },
            cssClass: "vjs-schema-common-edge",
            events: {
                [EVENT_CLICK]: (params) => {
                    // defaultPrevented is true when this was a delete edge click.
                    if (!params.e.defaultPrevented) {
                        params.model.setSelection(params.obj)
                    }
                }
            },
            overlays: [
                {
                    type: LabelOverlay.type,
                    options: {
                        cssClass: "vjs-schema-delete-relationship",
                        label: "×",
                        events: {
                            [EVENT_TAP]: (params) => {
                                consume(params.e)
                                params.model.removeEdge(params.edge)
                            }
                        }
                    }
                },
                {
                    type:DotOverlay.type,
                    options:{
                        location:1,
                        radius:5
                    }
                },
                {
                    type:DotOverlay.type,
                    options:{
                        location:0,
                        radius:5
                    }
                }
            ]
        }
    }
}

export default viewOptions
