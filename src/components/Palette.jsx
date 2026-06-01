import {PaletteComponent} from "@visuallyjs/browser-ui-react";
import {PALETTE_MODE_TAP} from "@visuallyjs/browser-ui";
import {TABLE} from "../constants.js";

export default function SchemaPalette() {

    function dataGenerator (el) {
        const type = el.getAttribute("data-vjs-type"),
            base = {
                name:el.getAttribute("data-vjs-type"),
                type
            };

        if (type === TABLE) {
            base.columns = []
        } else {
            base.query =''
        }

        return base

    }

    return <PaletteComponent
            className="vjs-schema-palette"
            mode={PALETTE_MODE_TAP}
            selectAfterAdd={true}
            dataGenerator={dataGenerator}>

        <div className="vjs-schema-palette-item" data-vjs-type="table">Add Table</div>
        <div className="vjs-schema-palette-item" data-vjs-type="view">Add View</div>

    </PaletteComponent>
}
