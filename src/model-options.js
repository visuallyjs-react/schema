import { isPort } from "@visuallyjs/browser-ui"

import {COLUMNS} from "./constants.js";
import {cardinalities} from "./definitions.js";

const modelOptions = {
    // the name of the property in each node's data that is the key for the data for the ports for that node.
    // for more complex setups you can use `portExtractor` and `portUpdater` functions - see the documentation for examples.
    portDataProperty:COLUMNS,

    //
    // set `cardinality` to be the first entry in the list by default.
    beforeStartConnect:(source, type) => {
        return {
            cardinality:cardinalities[0].id
        }
    },

    //
    // Prevent connections from a column to itself or to another column on the same table.
    //
    beforeConnect:(source, target) => {
        return isPort(source) && isPort(target) && source !== target && source.getParent() !== target.getParent()
    }

}

export default modelOptions
