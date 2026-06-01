import { uuid } from "@visuallyjs/browser-ui"

import { datatypes } from "../definitions";

import ColumnComponent from './ColumnComponent'

export default function TableComponent({ctx}) {

    const { obj, ui, model } = ctx

    function addColumn() {
        model.addNewPort(obj, "column", {
            id: uuid(),
            name: "new column",
            primaryKey: false,
            datatype: datatypes[0].id
        });
    }

    function deleteTable() {
        model.removeNode(obj)
    }

    function editTable() {
        model.setSelection(obj)
    }

    function deleteColumn(column) {
        model.removePort(obj, column)
    }

    function editColumn(column) {
        model.setSelection(obj.getPort(column))
    }

    return (<div className="vjs-schema-table vjs-schema-element">
        <div className="vjs-schema-element-name">
            <div className="vjs-schema-delete vjs-schema-delete-vertex" title="Click to delete" onClick={() => deleteTable()}/>
            <span>{obj.data.name}</span>
            <div className="vjs-schema-buttons">
                <div className="vjs-schema-edit-name vjs-schema-edit" title="Click to edit table name" onClick={() => editTable()}/>
                <div className="vjs-schema-new-column vjs-schema-add" title="Click to add a new column" onClick={() => addColumn()}/>
            </div>
        </div>
        <div className="vjs-schema-table-columns">
            {/* obj.data.columns.map(c => <ColumnComponent data={c} key={c.id} model={model} ui={ui} vertex={obj}/>) */}
            {obj.data.columns.map(c => <div key={c.id} className="vjs-schema-table-column" data-type={c.datatype} data-primary-key={(c.primaryKey || false).toString()} data-vjs-port={c.id} data-vjs-scope={c.datatype} data-vjs-source={true} data-vjs-target={true}>
                    <div className="vjs-schema-table-column-delete vjs-schema-delete" onClick={() => deleteColumn(c.id)}/>
                    <div><span>{c.name}</span></div>
                    <div className="vjs-schema-table-column-edit vjs-schema-edit" onClick={() => editColumn(c.id)}/>
                </div>)}
        </div>
    </div>)
}

/*
{ vertex.data.columns.map(c => <ColumnComponent data={c} key={c.id} toolkit={this.toolkit} surface={this.surface} vertex={vertex}/>) }
 */
