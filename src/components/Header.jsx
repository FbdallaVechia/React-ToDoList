import React from 'react'
import logo from '../img/icon.png'

const Header = ({clearTasks}) => {
  return (
    <header >
        <nav className="navbar navbar-expand-sm navbar-light bg-light border-bottom px-4">
            <div className="container-sm">
                
                
                    <img src={logo} alt="Check" width="30" height="30" className="me-2" />
                    <span className="fw-bold fs-5">To do List</span>
                

                
                <div className="d-flex align-items-center">
                    <button className="btn btn-secondary btn-dark me-2" onClick={clearTasks}>Limpar</button>

                </div>
            </div>
        </nav>
    </header>
  )
}

export default Header