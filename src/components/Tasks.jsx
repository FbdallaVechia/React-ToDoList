import React from 'react'


const Tasks = ({ task, removeTask, completTask }) => {
    return (
        <div className='list-group-item hover-effect d-flex justify-content-between align-items-center my-2'>
            <input type="checkbox" className='form-check-input me-3 align-self-center p-3' onClick={() => completTask(task.id)} />
            <div className='flex-grow-1 text-center' style={{textDecoration: task.isCompleted ? "line-through" : "none"}}>
                <p className='mb-3 fs-4'>{task.text}</p>
                <p className='badge bg-secondary'>{task.category}</p>
            </div>
            <button className='btn btn-outline-danger btn-sm align-self-center' onClick={() => removeTask(task.id)}>
                <i className='bi bi-trash fs-3'></i>
            </button>
        </div>
    )
}

export default Tasks