export default function ColumnComponent({model, ui, data, vertex}) {

    const column = vertex.getPort(data.id)

    function deleteColumn() {
        model.removePort(vertex, column)
    }

    function editColumn() {
        model.setSelection(column)
    }

    return <>
            <div className="vjs-schema-table-column" data-type={data.datatype} data-primary-key={(data.primaryKey || false).toString()} data-vjs-port={column.id} data-vjs-scope={data.datatype} data-vjs-source={true} data-vjs-target={true}>
                <div className="vjs-schema-table-column-delete vjs-schema-delete" onClick={() => deleteColumn()}/>
                <div><span>{data.name}</span></div>
                <div className="vjs-schema-table-column-edit vjs-schema-edit" onClick={() => editColumn()}/>
        </div>
    </>
}
