import React from 'react'
import TaskForm from './TaskForm'


const ModalForm = ({ show, onClose, onAddTask }) => {
    return (
        <>
        {show && <div className="modal-backdrop fade show"></div>}
            <div className={`modal fade ${show ? 'show d-block' : ''}`} tabIndex='-1'>
                <div className='modal-dialog'>
                    <div className='modal-content'>
                        <div className='modal-header'>
                            <h5 className='modal-title'>Adicionar nova tarefa</h5>
                            <button type='button' className='btn-close' onClick={onClose}></button>
                        </div>
                        <div className='modal-body'>
                            <TaskForm
                                onSubmit={onAddTask}
                                onCancel={onClose} />
                        </div>
                    </div>
                </div>


            </div>
        </>
    )
}

export default ModalForm