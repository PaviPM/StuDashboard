import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import "../Pages/StudentList.css"
import Sidemenu from "../Menu/SideMenu.jsx";



function StudentList({students, onDeleteStudent, onUpdateStudent }) {
    const [searchInput, setSearchInput] = useState("");
    const [isEditing, setIsEditing ] = useState(false);
    const [editStudent, setEditStudent ] = useState(null);
    const [viewStudentId, setViewStudentId ] = useState(null);
    const [currentPage, setCurrentPage ] = useState(1);
    const [itemPerPage] = useState(10);
    const navigate = useNavigate();

    useEffect(()=>{
        setCurrentPage(1);
    },[students]);

    const handleView = (studentId) => {
        setViewStudentId(studentId);
    }

    const handleBackToStudentList = () => {
        setViewStudentId(null);
    }

    
    const filteredStudents = students.filter((student) => {
        const searchValue = searchInput.toLowerCase();
        return (
          student.firstname.toLowerCase().includes(searchValue) ||
          student.lastname.toLowerCase().includes(searchValue) ||
          student.contact.includes(searchValue)
    );
      });

    const indexOfLastItem = currentPage * itemPerPage;
    const indexOfFirstItem = indexOfLastItem - itemPerPage;

    const currentStudents = filteredStudents.slice(
        indexOfFirstItem,
        indexOfLastItem
    )

    const handleSaveClick =( editStudent, index) => {
        onUpdateStudent(editStudent,index);
        setIsEditing(false);
        setEditStudent(null);
    }

    const handleCancelClick = () => {
        setIsEditing(false);
        setEditStudent(null);
    }

    const handleEditClick =(student) => {
        setIsEditing(true);
        setEditStudent(student);
    }

    const handleViewClick =(studentId) => {
        setViewStudentId(studentId);
    }

    const handleConvertClick = (student) => {
        const {firstname} = student;
        navigate(`/StudentDetails?studentName=${encodeURIComponent(firstname)}`)
    }

    const totalPageCount = Math.ceil(filteredStudents.length/itemPerPage);


    const handlePreviousClick = () => {
        if (currentPage > 1) {
          setCurrentPage(currentPage - 1);
        }
      };

    const handleNextClick = () => {
        if(currentPage<totalPageCount) {
            setCurrentPage(currentPage + 1)
        }
    };

    const handlePageChange = (pageNumber) =>{
        setCurrentPage(pageNumber)
    }
  


    return(
        <>
        <Sidemenu />
        {viewStudentId === null ? (
            <div className="StudentList">
            <h2 className="head">STUDENTS LIST</h2>
            <div className="container">
            <Link className="first" to="/studentdetails">
                <i id="add" class="fa-solid fa-users"></i>
                <h2>Add Student</h2>
            </Link>
            <Link className="second" to="/studentlist">
                <i id="view" class="fa-sharp fa-solid fa-users"></i>
                <h2>View Student</h2>
            </Link>
            </div>


            {viewStudentId === null ? (
                <div>
                    <input className="inputtype" type="text" placeholder="Search by Name" />
                </div>
            ):(
                <button onClick={handleBackToStudentList}>Back toStudent List</button>
            )}

            <table className="StudentTable">
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Photo</th>
                        <th>First Name</th>
                        <th>Father Name</th>
                        <th>Mother Name</th>
                        <th>Email</th>
                        <th>Address</th>
                        <th>DOB</th>
                        <th>Contact</th>
                        <th>Father No</th>
                        <th>Marital Status</th>
                        <th>Gender</th>
                        <th>Qualification</th>
                        <th>HSC Marks</th>
                        <th>HSC School Name</th>
                        <th>HSC Passedout Year</th>
                        <th>HSC Percentage</th>
                        <th>Diploma Marks</th>
                        <th>Diploma College Name</th>
                        <th>Diploma Passedout Year</th>
                        <th>Diploma Specialization</th>
                        <th>Diploma Percentage</th>
                        <th>Diploma Class</th>
                        <th>Degree</th>
                        <th>CGPA</th>
                        <th>PassedOut Year</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentStudents.map((student, index)=>{
                        <tr key={index}>
                            <td>{student.id}</td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ?(
                                <input type="file" accept="image/*" onChange={(e)=>{
                                    const file = e.target.files[0]; 
                                    if(file){
                                        const reader = new FileReader();
                                        reader.onload = (event) =>{
                                            setEditStudent({...editStudent, photo:event.target.result,});
                                        };
                                        reader.readAsDataURL(file);
                                    }
                                }}
                                />
                                ) : (student.photo && (
                                <img src={student.photo} alt={`${student.name}`} />
                                ))}
                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.firstname}
                                onChange={(e)=>
                                    setEditStudent({
                                        ...editStudent, firstname: e.target.value,
                                    })
                                }/>
                                ) : (`${student.firstname} ${student.lastname}`)}
                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.fathername}
                                onChange={(e)=>
                                    setEditStudent({
                                        ...editStudent, fathername: e.target.value,
                                    })
                                }/>
                                ) : (student.fathername)}
                                
                            </td>

                            
                            <td> {isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.mothername} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,mothername:e.target.value,})} />
                                    ): (student.mothername)}
                            </td>

                           <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.email} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,email:e.target.value,})} />
                                    ): (student.email)}

                           </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.address} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,address:e.target.value,})} />
                                    ): (student.address)}

                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="date" value={editStudent.dob} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,dob:e.target.value,})} />
                                    ): (student.dob)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.contact} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,contact:e.target.value,})} />
                                    ): (student.contact)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.fatherno} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,fatherno:e.target.value,})} />
                                    ): (student.fatherno)}
                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <label>
                                    <input type="checkbox" checked={editStudent.maritalstatus === "yes"} 
                                onChange={()=> 
                                    setEditStudent({
                                        ...editStudent,maritalstatus:editStudent.maritalstatus === "yes" ?
                                        "no": "yes",})}  />
                                        Yes
                                </label>
                                ): (student.maritalstatus)}

                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <label>
                                    <input type="checkbox" checked={editStudent.gender === "male"} 
                                onChange={()=> 
                                    setEditStudent({
                                        ...editStudent,gender:editStudent.gender === "male" ?
                                        "": "male",})}  />
                                        Male
                                </label>
                                ): (student.gender)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.qualification} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,qualification:e.target.value,})} />
                                    ): (student.qualification)}

                            </td>


                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.hscMarks} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,hscMarks:e.target.value,})} />
                                    ): (student.hscMarks)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.hscSchoolName} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,hscSchoolName:e.target.value,})} />
                                    ): (student.hscSchoolName)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.hscPassedYear} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,hscPassedYear:e.target.value,})} />
                                    ): (student.hscPassedYear)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.hscPercentage} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,hscPercentage:e.target.value,})} />
                                    ): (student.hscPercentage)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.diplomaMarks} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaMarks:e.target.value,})} />
                                    ): (student.diplomaMarks)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.diplomaCollegeName} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaCollegeName:e.target.value,})} />
                                    ): (student.diplomaCollegeName)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.diplomaPassedYear} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaPassedYear:e.target.value,})} />
                                    ): (student.diplomaPassedYear)}

                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.diplomaSpecialization} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaSpecialization:e.target.value,})} />
                                    ): (student.diplomaSpecialization)}
                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.diplomaPercentage} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaPercentage:e.target.value,})} />
                                    ): (student.diplomaPercentage)}
                            </td>

                           <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <select value={editStudent.diplomaClass} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,diplomaClass:e.target.value,})}>
                                        <option value="First">First</option>
                                        <option value="Second">Second</option>
                                        </select>
                                    ): (student.diplomaClass)}
                            </td>
                            
                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="text" value={editStudent.degree} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,degree:e.target.value,})} />
                                    ): (student.degree)}
                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.cgpa} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,cgpa:e.target.value,})} />
                                    ): ( `${student.cgpa}%`)}
                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <input type="number" value={editStudent.passedOut} 
                                onChange={(e)=> 
                                    setEditStudent({
                                        ...editStudent,passedOut:e.target.value,})} />
                                    ): (student.passedOut)}
                            </td>

                            <td>{isEditing && editStudent && editStudent.id === student.id ? (
                                <>
                                <button className="savebutton" onClick={()=>handleSaveClick(editStudent,index)}><i class="fa-solid fa-check"></i></button>

                                <button className="cancelbutton" onClick={()=>handleCancelClick}><i class="fa-regular fa-trash"></i></button>
                                </>
                            ):( <button className="editbutton" onClick={()=>handleEditClick(student)}><i class="fa-regular fa-pen-to-square"></i></button>)}

                        {viewStudentId === null ? (
                      <button
                        onClick={() => handleViewClick(student.id)}
                        className="viewbtn">
                        <i className="fa fa-eye"></i>
                      </button>
                    ) : null}

                    <button
                      className="deletebtn"
                      onClick={() => onDeleteStudent(index)}>
                      <i className="fa fa-trash"></i>
                    </button>

                    <button
                      className="convertbtn"
                      onClick={() => handleConvertClick(student)}
                    >
                      Convert Employee
                    </button>
                  </td>           
                            
                 </tr>
                })}
                </tbody>
            </table>

            <div className="page">
                <button onClick={handlePreviousClick} disabled={currentPage === 1}>
                    Previous
                </button>
                    {Array.from({length:totalPageCount}, (_, index) =>(
                <button key={index} className={currentPage === index + 1 ? "active" : ""}
                    onClick={() => handlePageChange(index+1)}>{index+1}
                </button>
                ))}

                <button onClick={handleNextClick} disabled={currentPage === totalPageCount}>Next</button>

            </div>
        </div>

        ):(<div>
            <h2>Student Details</h2>
            <button onClick={handleBackToStudentList}>Back to Student List</button>

        {viewStudentId !== null ? (
            <>
            {students.map((student)=>{
                if(student.id === viewStudentId){
                    return(
                    <div key={student.id} className="student_details">
                        <div className="student_photo">{student.photo && (
                            <img id="photo_2" src={student.photo} alt={`${student.firstname} ${student.lastname}`} width="250" height="250" /> )}
                        </div>
                        <div className="student_info">
                            <p> {" "} 
                                <span className="bold_text">Name : </span> {" "}
                                {student.firstname} {student.lastname}
                            </p>

                            <p>
                                <span className="bold_text">Email : </span>
                                {student.email}
                            </p>

                            <p>
                                <span className="bold_text">Father Name : </span> {" "}
                                {student.fathername}
                            </p>

                            <p>
                                <span className="bold_text">Mother Name : </span> {" "}
                                {student.mothername}
                            </p>

                            <p>
                                <span className="bold_text">Address : </span> {" "}
                                {student.address}
                            </p>

                            <p>
                                <span className="bold_text">Date of Birth : </span> {" "}
                                {student.dob}
                            </p>

                            <p>
                                <span className="bold_text">Contact : </span>
                                {student.contact}
                            </p>

                            <p>
                                <span className="bold_text">Father Number : </span> {" "}
                                {student.fatherno}
                            </p>

                            <p>
                                <span className="bold_text">Marital Status : </span> 
                                {student.maritalstatus}
                            </p>

                            <p>
                                <span className="bold_text">Gender : </span> {" "}
                                {student.gender}
                            </p>

                            <p>
                                <span className="bold_text">Gender : </span> {" "}
                                {student.gender}
                            </p>

                            <p>
                                <span className="bold_text">Qualification : </span> {" "}
                                {student.qualification}
                            </p>

                            <p>
                                <span className="bold_text">HSC Marks : </span> 
                                {student.hscMarks}
                            </p>

                            <p>
                                <span className="bold_text">HSC School Name : </span> 
                                {student.hscSchoolName}
                            </p>

                            <p>
                                <span className="bold_text">HSC Passed Year : </span> 
                                {student.hscPassedYear}
                            </p>

                            <p>
                                <span className="bold_text">HSC Percentage : </span> {" "}
                                {student.hscPercentage}
                            </p>

                            <p>
                                <span className="bold_text">Diploma Marks : </span> {" "}
                                {student.diplomaMarks}
                            </p>

                            <p>
                                <span className="bold_text">Diploma College Name : </span> {" "}
                                {student.diplomaCollegeName}
                            </p>

                            <p>
                                <span className="bold_text">Diploma Passed Year : </span> {" "}
                                {student.diplomaPassedYear}
                            </p>

                            <p>
                                <span className="bold_text">Diploma Specialization : </span> {" "}
                                {student.diplomaSpecialization}
                            </p>

                            <p>
                                <span className="bold_text">Diploma Percentage : </span> {" "}
                                {student.diplomaPercentage}
                            </p>

                            <p>
                                <span className="bold_text">Diploma Class : </span> {" "}
                                {student.diplomaClass}
                            </p>

                            <p>
                                <span className="bold_text">Degree : </span> {" "}
                                {student.degree}
                            </p>

                            <p>
                                <span className="bold_text">CGPA : </span> {" "}
                                {student.cgpa}
                            </p>

                            <p>
                                <span className="bold_text">PassedOut Year : </span> {" "}
                                {student.passedOut}
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

export default StudentList



