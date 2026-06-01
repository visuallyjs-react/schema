export default function ViewComponent({ctx}) {
    const { obj, model, ui } = ctx

    function deleteView() {
        model.removeNode(obj)
    }

    function editView() {
        model.setSelection(obj)
    }

    return (<div className="vjs-schema-view vjs-schema-element">
            <div className="vjs-schema-element-name">
                <div className="vjs-schema-view-delete vjs-schema-delete vjs-schema-delete-vertex" title="Delete view" onClick={() => deleteView()}/>
                <span>{obj.data.name}</span>
                <div className="vjs-schema-buttons">
                    <div className="vjs-schema-edit-name vjs-schema-edit" title="Edit view" onClick={() => editView() }/>
                </div>
            </div>
            <div className="vjs-schema-view-details">{obj.data.query}</div>
    </div>)
}
