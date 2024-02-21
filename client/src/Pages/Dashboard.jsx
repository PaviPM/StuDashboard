import React from 'react'
import "./Dashboard.css"
import Sidemenu from '../Menu/SideMenu.jsx'

const Dashboard = ({students, employees}) => {
  return (
    <>
    <Sidemenu />
    <div className="Dashboard">
        <input placeholder="Search" type='text' className='input'/>

        <div className="box">
            <div className="employeeCount container1">
                <p>{students.length}</p>
                <h4>Students</h4>
            </div>

            <div className="employeeCount container2">
                <p>{employees.length}</p>
                <h4>Employees</h4>
            </div>

            <div className="employeeCount container3">
                <p>590</p>
                <h4>Students</h4>
            </div>

            <div className="employeeCount container4">
                <p>450</p>
                <h4>Employees</h4>
            </div>
        </div>
    </div>
    </>
  )
}

export default Dashboard