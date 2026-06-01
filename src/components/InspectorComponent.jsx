import React, {useState} from "react";

import { isNode, isPort} from "@visuallyjs/browser-ui"

import { InspectorComponent} from "@visuallyjs/browser-ui-react";

import {datatypes, cardinalities } from "../definitions";
import {
    PROPERTY_CARDINALITY,
    TABLE, VIEW, COLUMN, RELATIONSHIP
} from "../constants";

export default function SchemaInspectorComponent() {

    const [currentType, setCurrentType] = useState('')

    const refresh = (obj) => {
        const ct = isNode(obj) ? obj.data.type : isPort(obj) ? COLUMN : RELATIONSHIP
        setCurrentType(ct)
    }

    const renderEmptyContainer = () => {
        setCurrentType('')
        return <div className="vjs-inspector-inactive">Select an element to inspect</div>
    }

    return <InspectorComponent renderEmptyContainer={renderEmptyContainer} refresh={refresh}>
        <div className="vjs-inspector">


        { currentType === TABLE &&
        <>
        <div>Table Name</div>
        <input type="text" vjs-att="name" vjs-focus="true"/>
        </>
}

    { currentType === VIEW &&
        <>
        <div>View Name</div>
        <input type="text" vjs-att="name" vjs-focus="true"/>
        <div>Query</div>
        <textarea vjs-att="query" rows="10"/>
        </>
    }

    { currentType === COLUMN &&
        <>
        <div>Name</div>
        <input type="text" vjs-att="name" vjs-focus="true"/>
        <div>Datatype</div>
        {datatypes.map(d =><label key={d.id}><input type="radio" vjs-att="datatype" name="datatype" value={d.id}/>{d.description}</label>)}
        </>
    }

    { currentType === RELATIONSHIP &&
        <>
        <div>Cardinality</div>
        {  cardinalities.map(c => <label key={c.id}><input type="radio" name={PROPERTY_CARDINALITY} vjs-att={PROPERTY_CARDINALITY} value={c.id}/>{c.name}</label>)}
        </>
    }
    </div>
</InspectorComponent>

}
