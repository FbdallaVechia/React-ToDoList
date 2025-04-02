import { useState } from 'react'

const TaskForm = ({ onSubmit, onCancel }) => {

    const [taskText, setTaskText] = useState('')
    const [category, setCategory] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        onSubmit({ text: taskText, category });
        setTaskText('');
        setCategory('');

    };

    return (
        <form onSubmit={handleSubmit}>
            <div className='mb-3'>
                <label className='formLabel'>Descrição da tarefa</label>
                <input value={taskText} type="text" className='form-control' placeholder='Digite a tarefa' onChange={(e) => setTaskText(e.target.value)} required />
            </div>

            <div className='mb-3'>
                <label className='form-label'></label>
                <select className='form-select' value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="">Selecione uma categoria:</option>
                    <option value="Estudos">Estudos</option>
                    <option value="Lazer">Lazer</option>
                    <option value="Trabalho">Trabalho</option>
                </select>
            </div>

            <div className="d-flex justify-content-end gap-2">
                <button
                    type="button"
                    className="btn btn-secondary"
                    onClick={onCancel}
                >Cancelar</button>

                <button
                    type="submit" 
                    className="btn btn-primary btn-dark" 
                >
                    Adicionar Tarefa
                </button>

            </div>

        </form>
    )
}

export default TaskForm