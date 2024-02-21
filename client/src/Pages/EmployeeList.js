import React, { useState } from "react";
import { Link } from "react-router-dom";
import Sidemenu from "../Menu/SideMenu.jsx";
import "../Pages/EmployeeList.css"




function EmployeeList({employees, onDeleteEmployee, onUpdateEmployee }) {
    const [searchInput, setSearchInput] = useState("");
    const [isEditing, setIsEditing ] = useState(false);
    const [editEmployee, setEditEmployee ] = useState(null);
    const [viewEmployeeId, setViewEmployeeId ] = useState(null);
    const [currentPage, setCurrentPage ] = useState(1);
    const [itemPerPage] = useState(10);

    
    const handleBackToEmployeeList = () => {
        setViewEmployeeId(null);
    }

    
    const filteredEmployees = employees.filter((employee) => {
        const searchValue = searchInput.toLowerCase();
        return (
          employee.firstname.toLowerCase().includes(searchValue) ||
          employee.lastname.toLowerCase().includes(searchValue) ||
          employee.contact.includes(searchValue)
    );
      });
      

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currentEmployees = filteredEmployees.slice(
        indexOfFirstItem,
        indexOfLastItem
    )

    
    const handleSaveClick =( editEmployee, index) => {
        onUpdateEmployee(editEmployee,index);
        setIsEditing(false);
        setEditEmployee(null);
    }

    
    const handleCancelClick = () => {
        setIsEditing(false);
        setEditEmployee(null);
    }

    
    const handleEditClick =(employee) => {
        setIsEditing(true);
        setEditEmployee(employee);
    }

    const handleViewClick =(employeeId) => {
        setViewEmployeeId(employeeId);
    }
    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber)
    }
  
    return(
        <>
        <Sidemenu />
        {viewEmployeeId === null ? (
            <div className="EmployeeList">
            <h2 className="head">EMPLOYEE LIST</h2>
            <div className="container">
            <Link className="first" to="/employeedetails">
                <i id="add" class="fa-solid fa-users"></i>
                <h2>Add Employee</h2>
            </Link>
            <Link className="second" to="/employeelist">
                <i id="view" class="fa-sharp fa-solid fa-users"></i>
                <h2>View Employee</h2>
            </Link>
            </div>


            {viewEmployeeId === null ? (
                <div>
                    <input className="inputtype" type="text" placeholder="Search by Name" />
                </div>
            ):(
                <button onClick={handleBackToEmployeeList}>Back to Employee List</button>
            )}

            <table className="EmployeeTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Email</th>
                        <th>DOB</th>
                        <th>Contact</th>
                        <th>Designation</th>
                        <th>Salary</th>
                        <th>DateofJoining</th>
                        <th>DateofRelieving</th>
                        <th>Experience</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentEmployees.map((employee, index)=>{
                        <tr key={index}>
                            <td>{employee.id}</td>


                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ?(
                                <input type="file" accept="image/*" onChange={(e)=>{
                                    const file = e.target.files[0]; 
                                    if(file){
                                        const reader = new FileReader();
                                        reader.onload = (event) =>{
                                            setEditEmployee({...editEmployee, photo:event.target.result,});
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                />
                                ) : (employee.photo && (
                                <img src={employee.photo} alt={`${employee.name}`} />
                                ))}
                            </td>  


                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.firstname}
                                onChange={(e)=>
                                    setEditEmployee({
                                        ...editEmployee, firstname: e.target.value,
                                    })
                                }/>
                                ) : (`${employee.firstname} ${employee.lastname}`)}
                            </td>


                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.fathername}
                                onChange={(e)=>
                                    setEditEmployee({
                                        ...editEmployee, fathername: e.target.value,
                                    })
                                }/>
                                ) : (employee.fathername)}
                                
                            </td>

                            
                            <td> {isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.mothername} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,mothername:e.target.value,})} />
                                    ): (employee.mothername)}
                            </td>

                           <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.email} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,email:e.target.value,})} />
                                    ): (employee.email)}

                           </td>

                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="date" value={editEmployee.dob} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,dob:e.target.value,})} />
                                    ): (employee.dob)}

                            </td>

                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="number" value={editEmployee.contact} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,contact:e.target.value,})} />
                                    ): (employee.contact)}

                            </td>

                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.designation} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,designation:e.target.value,})} />
                                    ): (employee.designation)}
                            </td>



                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="text" value={editEmployee.salary} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,salary:e.target.value,})} />
                                    ): (employee.salary)}

                            </td>


                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="date" value={editEmployee.dateOfJoining} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,dateOfJoining:e.target.value,})} />
                                    ): (employee.dateOfJoining)}

                            </td>

                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="date" value={editEmployee.dateOfRelieving} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,dateOfRelieving:e.target.value,})} />
                                    ): (employee.dateOfRelieving)}

                            </td>

                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <input type="number" value={editEmployee.experience} 
                                onChange={(e)=> 
                                    setEditEmployee({
                                        ...editEmployee,experience:e.target.value,})} />
                                    ): (employee.experience)}

                            </td>

                           
                            <td>{isEditing && editEmployee && editEmployee.id === employee.id ? (
                                <>
                                <button className="savebutton" onClick={()=>handleSaveClick(editEmployee,index)}><i class="fa-solid fa-check"></i></button>

                                <button className="cancelbutton" onClick={()=>handleCancelClick}>{" "}<i class="fa-regular fa-trash"></i>{" "}</button>
                                </>
                            ):( <button className="editbutton" onClick={()=>handleEditClick(employee)}><i class="fa-regular fa-pen-to-square"></i></button>)}

                        {viewEmployeeId === null ? (
                      <button
                        onClick={() => handleViewClick(employee.id)}
                        className="viewbtn">
                        <i className="fa fa-eye"></i>
                      </button>
                    ) : null}

                    <button
                      className="deletebtn"
                      onClick={() => onDeleteEmployee(index)}>
                      <i className="fa fa-trash"></i>
                    </button>

                  </td>           
                            
                 </tr>
                })}
                </tbody>
            </table>

            <div className="page">
                <button onClick={()=>handlePageChange(currentPage - 1)} disabled={currentPage === 1}>
                    Previous Page
                </button>

                {Array.from({length:Math.ceil(filteredEmployees.length/itemPerPage),
                }).map((_, index) =>(
                <button key={index} className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => handlePageChange(index+1)}>{index+1}
                </button>
                ))}

                <button onClick={()=>handlePageChange(currentPage + 1)} disabled={currentPage === Math.ceil(filteredEmployees.length/itemPerPage)}>Next Page</button>

            </div>
        </div>

        ):(<div>
            <h2>Employee Details</h2>
            <button onClick={handleBackToEmployeeList}>Back to Employee List</button>

        {viewEmployeeId !== null ? (
            <>
            {employees.map((employee)=>{
                if(employee.id === viewEmployeeId){
                    return(
                    <div key={employee.id} className="student_details">
                        <div className="student_photo">{employee.photo && (
                            <img id="photo_2" src={employee.photo} alt={`${employee.firstname} ${employee.lastname}`} width="250" height="250" /> )}
                        </div>
                        <div className="student_info">
                            <p> {" "} 
                                <span className="bold_text">Name : </span> {" "}
                                {employee.firstname} {employee.lastname}
                            </p>

                            <p>
                                <span className="bold_text">Email : </span>
                                {employee.email}
                            </p>

                            <p>
                                <span className="bold_text">Father Name : </span> {" "}
                                {employee.fathername}
                            </p>

                            <p>
                                <span className="bold_text">Mother Name : </span> {" "}
                                {employee.mothername}
                            </p>

                            <p>
                                <span className="bold_text">Date of Birth : </span> {" "}
                                {employee.dob}
                            </p>

                            <p>
                                <span className="bold_text">Contact : </span>
                                {employee.contact}
                            </p>

                            <p>
                                <span className="bold_text">Designation : </span> {" "}
                                {employee.designation}
                            </p>

                            <p>
                                <span className="bold_text">Salary : </span> 
                                {employee.salary}
                            </p>

                            <p>
                                <span className="bold_text">Date of DateofJoining : </span> {" "}
                                {employee.dateOfJoining}
                            </p>

                            <p>
                                <span className="bold_text">DateofRelieving : </span> {" "}
                                {employee.dateOfRelieving}
                            </p>

                            <p>
                                <span className="bold_text">Experience : </span> {" "}
                                {employee.experience}
                            </p>

                            
                        </div>
                    </div>
                    )
                }
                return null;
            })}
            </>
        ) : (
            <p>No Employees Selected</p>
        
        )}
        </div>
        )}
        </>
    )
    
}

export default EmployeeList



