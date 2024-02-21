import './App.css';
import Dashboard from './Pages/Dashboard.jsx';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState } from 'react';
import AddStudent from './Pages/StudentDetails.js';
import AddEmployee from './Pages/EmployeeDetails.js';
import { useEffect } from 'react';
import StudentList from './Pages/StudentList.js';
import Sidemenu from './Menu/SideMenu.jsx';
import EmployeeList from './Pages/EmployeeList.js';
import AddAttendance from './Pages/AddAttendance.js';
import ViewAttendance from './Pages/ViewAttendance.js';
import Invoice from './Pages/Invoice.js';
import CustomerForm from './Pages/CustomerForm.js';
import CustomerList from './Pages/CustomerList.js';


const App =() => {
  const [currentBalance, setCurrentBalance ] = useState(0);
  const [students, setStudents] = useState([]);
  const [lastStudentId, setLastStudentId] = useState(0);
  const [employees, setEmployees] = useState([]);
  const [lastEmployeeId, setLastEmployeeId] = useState(0);
  const [ attendanceRecords, setAttendanceRecords ] = useState([]);
  const [ customerData, setCustomerData ] = useState([]);
  const [ invoiceNo, setInvoiceNo ] = useState("KIT/24/999");
  const [ cgstRate, setCGSTRate ] = useState(9);
  const [ sgstRate, setSGSTRate ] = useState(9);
  const [ igstRate, setIGSTRate ] = useState(18);


  const handleCustomerCreate = (customer) => {
    setCustomerData([...customerData, customer]);
  };


  const handleAddStudent = (newStudent) => {
    const newStudentId = lastStudentId + 1;
    setStudents([
      ...students,
      { ...newStudent, id: `STU${newStudentId.toString().padStart(3, "0")}` },
    ]);
    setLastStudentId(newStudentId);

   
    localStorage.setItem( "students", JSON.stringify([...students, newStudent]));
    localStorage.setItem("lastStudentId", newStudentId.toString());
  };

const handleAddEmployee = (newEmployee) => {
  const newEmployeeId = lastEmployeeId + 1;
  setEmployees( [
    ...employees, 
    {...newEmployee, id: `EMP${newEmployeeId.toString().padStart(3,"0")}`},
  ]);
  setLastEmployeeId(newEmployeeId);

    localStorage.setItem("employees",JSON.stringify([...employees,newEmployee]));
    localStorage.setItem("lastEmployeeId", newEmployeeId.toString());
};

const handleDeleteStudents = (index) => {
  const updatedStudents = students.filter((_, i) => i !== index);

  let highestId = 0;
  updatedStudents.forEach((student) => {
    const studentIdNumber = parseInt(student.id.substr(3));
    if (studentIdNumber > highestId) {
      highestId = studentIdNumber;
    }
  });

  setLastStudentId(highestId);
  setStudents(updatedStudents);

  localStorage.setItem("students", JSON.stringify(updatedStudents));
  localStorage.setItem("lastStudentId", highestId.toString());
};


const handleDeleteEmployees = (index) => {
  const updatedEmployees = employees.filter((_, i) =>  i !== index);

  let highestId = 0;
  updatedEmployees.forEach((employee)=>{
    const employeeIdNumber = parseInt(employee.id.substr(3));
    if(employeeIdNumber > highestId) {
      highestId = employeeIdNumber;
    } 
  });

  setLastEmployeeId(highestId);
  setEmployees(updatedEmployees);

  localStorage.setItem("employees", JSON.stringify(updatedEmployees));
  localStorage.setItem("lastEmployeeId", highestId.toString());
};


const onUpdateStudent = (editStudent, index) => {
  const updatedStudents = [...students];
  updatedStudents[index] = editStudent;
  setStudents(updatedStudents);
};

const onUpdateEmployee = (editEmployee, index) => {
  const updatedEmployees = [...employees];
  updatedEmployees[index] = editEmployee;
  setEmployees(updatedEmployees);
};

const handleAttentanceSubmit = (attendanceRecord) => {
  setAttendanceRecords([...attendanceRecords, attendanceRecord]);
};

const handleDeleteRecord = (index) => {
  const updateRecords = [...attendanceRecords];
  updateRecords.splice(index, 1);
  setAttendanceRecords(updateRecords);
}


useEffect(()=>{
  const savedStudents = JSON.parse(localStorage.getItem("students"));
  if(savedStudents){
    setStudents(savedStudents)
  }
  const savedLastStudentId = localStorage.getItem("lastStudentId");
  if(savedLastStudentId){
      setLastStudentId(parseInt(savedLastStudentId));
  }
  else{
    setLastStudentId(0)
  }
}, []);

useEffect(()=>{
  const savedEmployees = JSON.parse(localStorage.getItem("employees"));
  if(savedEmployees){
    setEmployees(savedEmployees)
  }
  const savedLastEmployeeId = localStorage.getItem("lastEmployeeId");
  if(savedLastEmployeeId){
      setLastEmployeeId(parseInt(savedLastEmployeeId));
  }
  else{
    setLastEmployeeId(0)
  }
}, []);


// useEffect(() => {
//   localStorage.setItem("students", JSON.stringify(students));
// }, [students]);

// useEffect(() => {
//   localStorage.setItem("employees", JSON.stringify(employees));
// }, [employees]);

  return (

   <BrowserRouter>
   
    
    
        <Routes>
  

        
        <Route path="/" element={<Dashboard students={students} employees={employees} />} />

        <Route path="/dashboard" element={<Dashboard />} />

        <Route path="/studentdetails" element={<AddStudent onAddStudent={handleAddStudent} />}/>

        <Route path="/employeedetails" element={<AddEmployee onAddEmployee={handleAddEmployee} />}/>

        <Route path="/studentlist" element={<StudentList  students={students} onDeleteStudent={handleDeleteStudents} onUpdateStudent={onUpdateStudent} setCurrentBalance={setCurrentBalance} />}  />

        <Route path="/employeelist" element={<EmployeeList employees={employees} onDeleteEmployee={handleDeleteEmployees} onUpdateEmployee={onUpdateEmployee} setCurrentBalance={setCurrentBalance} /> } />


        <Route path="/addattendance" element={<AddAttendance students={students} OnAttendanceSubmit={handleAttentanceSubmit} setCurrentBalance={setCurrentBalance} />} />

        <Route path="/viewattendance" element={<ViewAttendance attendanceRecords={attendanceRecords} onDeleteRecord={handleDeleteRecord} />} />

        <Route path="/invoice" element={<Invoice invoiceNo={invoiceNo} setInvoiceNo={setInvoiceNo} setCGSTRate={setCGSTRate} setSGSTRate={setSGSTRate} setIGSTRate={setIGSTRate}  />} />
     
        <Route path="/customerform" element={<CustomerForm  onCustomerCreate= {handleCustomerCreate} />} />
        
        <Route path="/customerlist" element={<CustomerList  onCustomerCreate= {handleCustomerCreate} />} />

     
        </Routes>
       
      </BrowserRouter>

  );
};
export default App;




