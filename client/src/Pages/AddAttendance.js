import React, { useState } from "react";
import "./AddAttendance.css";
import Sidemenu from "../Menu/SideMenu";

const AddAttendance = ({ employees, OnAttendanceSubmit }) => {
    const [ selectedStudent, setSelectedStudent ] = useState([]);
    const [status, setStatus] = useState("");
    const [inDate, setInDate] = useState("");
    const [inTime, setInTime] = useState("");
    const [outDate, setOutDate] = useState("");
    const [comments, setComments] = useState("");

    const handleStudentSelection = (studentId) => {
        if(selectedStudent.includes(studentId)){
            setSelectedStudent(selectedStudent.filter((id) => id !== studentId));
        }
        else{
            setSelectedStudent([...selectedStudent, studentId])
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        const attendanceRecord = {
            students: selectedStudent.map((studentId)=>{
                const student = employees.find((employee)=>employee.id===studentId);
                return `${student.firstname} ${student.lastname}`;
            }),
            status,
            inDate,
            inTime,
            outDate,
            comments,
        };
        OnAttendanceSubmit(attendanceRecord);

        setStatus("");
        setInDate("");
        setInTime("");
        setOutDate("");
        setComments("");
        setSelectedStudent([]);
    };

    return (
        <>
        <Sidemenu />
       <div className="Attendance">
        <h2>Attendance Form</h2>
        <br />
        <form onSubmit={handleSubmit}>
            <div className="atten1">
                <label className="heading"> Student Names : </label>
                <div className="student-checkboxes">
                    
                    {selectedStudent.map((employee)=>(
                        <label key={employee.id}>
                            <input type="checkbox" value={employee.id} checked={selectedStudent.includes(employee.id)} onChange={handleStudentSelection(employee.id)}/>
                            {`${employee.firstname} ${employee.lastname}`}
                        </label>
                    ))}
                </div>
            </div>
            <hr />

            <div className="atten1">
                <label htmlFor="selectedStudents">Selected Students :</label>
                <input type="text" id="selectedStudents" value={selectedStudent.map((studentId)=>{
                    const student= employees.find((employee)=> employee.id === studentId);
                    return `${student.firstname} ${student.lastname}`;
                })
            .join(",")} readOnly />
            </div>
            <br />

            <div className="atten1">
                <label htmlFor="status">Status :</label>
                <select id="status" value={status} onChange={(e)=> setStatus(e.target.value)}>
                    <option value="Present">Present</option>
                    <option value="Absent with Permission">Absent with Permission</option>
                </select> 
            </div>
            <br />

            <div className="atten1">
                <label htmlFor="inDate">In Date :</label>
                <input type="date" id="inDate" value={inDate} onChange={(e)=>setInDate(e.target.value)} />
            </div>
            <br />

            <div className="atten1">
                <label htmlFor="inTime">In Time :</label>
                <input type="time" id="inTime" value={inTime} onChange={(e)=>setInTime(e.target.value)} />
            </div>
            <br />

            <div className="atten1">
                <label htmlFor="outDate">Out Date :</label>
                <input type="date" id="outDate" value={outDate} onChange={(e)=>setOutDate(e.target.value)} />
            </div>
            <br />

            <div className="atten1">
                <label htmlFor="comments">Comments :</label>
                <input type="text" id="comments" value={comments} onChange={(e)=>setComments(e.target.value)} />
            </div>
            <br />

            <div className="atten1">
                <button type="submit">Submit</button>
            </div>

        
        </form>

       </div>
       </>
    )
}

export default AddAttendance;