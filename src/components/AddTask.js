import React from 'react'

const AddTask = () => {
    return (
        <form className="add-form">
            <div className="form-control">
                <label>Task</label>
                <input type="text" name="" placeholder="Add Task"/>
            </div>
            <div className="form-control">
                <label>Task</label>
                <input type="text" name="" placeholder="Add Day & Time"/>
            </div>
            <div className="form-control">
                <label>Task</label>
                <input type="checkbox" name=""/>
            </div>

            <input className="btn btn-block" type="submit" value="Save Task"/>
        </form>
    )
}

export default AddTask
