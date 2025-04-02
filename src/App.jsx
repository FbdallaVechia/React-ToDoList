import { useState } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './App.css'
import Tasks from './components/Tasks'
import Header from './components/Header'
import Footer from './components/Footer'
import ModalForm from './components/ModalForm'

function App() {
  const [tasks, setTasks] = useState([])
  const [showModal, setShowModal] = useState(false)

  const onAddTask = ({ text, category }) => {
    const newTask = {
      id: Date.now(),
      text,
      category,
      isCompleted: false
    };
    setTasks([...tasks, newTask]);
    setShowModal(false)
  };

  const removeTask = (id) => {
    const newTasks = [...tasks]
    const filteredTasks = newTasks.filter(task => task.id !== id ? task : null
    );
    setTasks(filteredTasks);
  };

  const completTask = (id) => {
    const newTask = tasks.map((task) => task.id === id ? { ...task, isCompleted: !task.isCompleted } : task
    );
    setTasks(newTask);
  }
    const clearTasks = () => {
      setTasks([]);
    }

  return (
    <>
      <Header
        clearTasks={clearTasks} />
      <main className='container mt-5 flex-grow-1 p-3 '>
        <h1 className='text-center fw-bold mb-4'>Minhas tarefas:</h1>
        <div className='d-flex justify-content-center'>
          <button className='btn btn-primary btn-lg btn-dark' onClick={() => setShowModal(true)}>Adicionar Tarefa</button>
        </div>
        <div className='list-group w-100'>
          {tasks.length === 0 ? (
            <p className='text-center fw-bold mt-4'>Nada pra fazer!</p>
          ) : (
            tasks.map((task) => (
              <Tasks
                key={task.id}
                task={task}
                removeTask={removeTask}
                completTask={completTask} />
            ))
          )}
        </div>
        <ModalForm
          show={showModal}
          onClose={() => setShowModal(false)}
          onAddTask={onAddTask}
        />
      </main>
      <Footer />
    </>
  )
}

export default App
