import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import "./StudentDetails.css"
import axios from 'axios';
import Sidemenu from '../Menu/SideMenu.jsx';

<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />


const AddStudent = ( {onAddStudent, onAddStudent1, onAddStudent2}) => {

  const [ firstName, setFirstName ] = useState("");
  const [ lastName, setlastName ] = useState("");
  const [ fatherName, setFatherName ] = useState("");
  const [ motherName, setMotherName ] = useState("");
  const [ email, setEmail ] = useState("");
  const [ address, setAddress ] = useState("");
  const [ dob, setdob ] = useState("");
  const [ contact, setContact ] = useState("");
  const [ fatherno, setFatherno ] = useState("");
  const [ gender, setGender ] = useState("");
  const [ qualification, setQualification ] = useState("");
  const [ maritalStatus, setMaritalStatus ] = useState("");
  const [ hscSchoolName, setHscSchoolName ] = useState("");
  const [ hscMarks, setHscMarks ] = useState("");
  const [ hscPassedYear, setHscPassedYear ] = useState("");
  const [ hscPercentage, setHscPercentage ] = useState("");
  const [ diplomaCollegeName, setDiplomaCollegeName] = useState("");
  const [ diplomaMarks, setDiplomaMarks] = useState("");
  const [ diplomaPassedYear, setDiplomaPassedYear] = useState("");
  const [ diplomaPercentage, setDiplomaPercentage] = useState("");
  const [ diplomaSpecialization, setDiplomaSpecialization] = useState("");
  const [ diplomaClass, setDiplomaClass] = useState("");
  const [ cgp, setCgp ] = useState("");
  const [ passedOut, setPassedOut ] = useState("");
  const [ totalAmount, setTotalAmount ] = useState(40000);
  const [ paidAmount, setPaidAmount ] = useState("");
  const [ remainingAmount, setRemainingAmount ] = useState(40000);
  const [ photo, setPhoto ] =useState("");
  const [ studentCount, setStudentCount ] = useState("");


  let data = async () => {
    await axios.post( {
      firstName,
      lastName,
      fatherName,
      motherName,
      email,
      address,
      dob,
      contact,
      fatherno,
      gender,
      maritalStatus,
      qualification,
      hscMarks,
      hscSchoolName,
      hscPassedYear,
      hscPercentage,
      diplomaCollegeName,
      diplomaMarks,
      diplomaPassedYear,
      diplomaPercentage,
      diplomaSpecialization,
      diplomaClass,
      cgp,
      passedOut,
      totalAmount,
      remainingAmount,
      paidAmount,
      photo,
    })
  };

  const handleSubmit = (e) => {
      e.preventDefault();

      setStudentCount(studentCount+1);

      const id = `STU${studentCount.toString().padStart(3,"0")}`;

      const newStudent = {
        id,
        firstName,
        lastName,
        fatherName,
        motherName,
        email,
        address,
        dob,
        contact,
        fatherno,
        gender,
        maritalStatus,
        qualification,
        hscMarks,
        hscSchoolName,
        hscPassedYear,
        hscPercentage,
        diplomaCollegeName,
        diplomaMarks,
        diplomaPassedYear,
        diplomaPercentage,
        diplomaSpecialization,
        diplomaClass,
        cgp,
        passedOut,
        photo,
      };
      onAddStudent(newStudent);
      setFirstName("");
      setlastName("");
      setFatherName("");
      setMotherName("");
      setEmail("");
      setAddress("");
      setdob("");
      setContact("");
      setFatherno("");
      setGender("");
      setMaritalStatus("");
      setQualification("");
      setCgp("");
      setPassedOut("");
      setPhoto("");
      localStorage.setItem("studentCount", studentCount+1);
  };

  const handleQualificationChange = (e) => {
    const Qualify = e.target.value;
    setQualification(Qualify);

    if(Qualify === "HSC");
    setHscSchoolName("");
    setHscMarks("");
    setHscPassedYear("");
    setHscPercentage("");
    setDiplomaCollegeName("");
    setDiplomaMarks("");
    setDiplomaPassedYear("");
    setDiplomaSpecialization("");
    setDiplomaPercentage("");
    setDiplomaClass("")
  };

  const handleDiplomaClassChange = (e) => {
    setDiplomaClass(e.target.value)
  };

  const handleTotalAmountChange = () => {
    setTotalAmount(40000);
  }

  const handlePaidAmountChange = (e) => {
    setPaidAmount(e.target.value)
  }

  const handlePhotoChange = (e) => {
    const picture = e.target.files[0];
    if(picture) {
      const image = new FileReader();
      image.onload = (event) => {
        setPhoto(event.target.result)
      };
      image.readAsDataURL(picture);
    }
  };

  useEffect(()=>{
    const newRemaining = totalAmount - paidAmount;
    setRemainingAmount(newRemaining);
  }, [totalAmount, paidAmount] )

  return (
    <>
    <Sidemenu />
    <div className="StudentDetails">
        <h2>STUDENT ENTRY FORM</h2>
        <div className="container">
          <Link className="first" to="/studentdetails">
          <i id="add" class="fa-solid fa-users"></i>
            <h2>Add Student</h2>
          </Link>
          <Link className="second" to="/studentlist">
            <i id="view" class="fa-solid fa-users"></i>
            <h2>View Student</h2>
          </Link>
        </div>

        <form action="" onSubmit={handleSubmit}>
          <div>
            <label htmlFor="firstname"> First Name : </label>
            <input type="text" id="firstname" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="lastname"> Last Name : </label>
            <input type="text" id="lastname" value={lastName} onChange={(e)=>setlastName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="fathername"> Father Name : </label>
            <input type="text" id="fathername" value={fatherName} onChange={(e)=>setFatherName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="mothername"> Mother Name : </label>
            <input type="text" id="mothername" value={motherName} onChange={(e)=>setMotherName(e.target.value)} />
          </div>

          <div>
            <label htmlFor="email"> E-mail : </label>
            <input type="email" id="email" value={email} onChange={(e)=>setEmail(e.target.value)} />
          </div>

          <div>
            <label htmlFor="address"> Address : </label>
            <textarea type="address" id="address" value={address} onChange={(e)=>setAddress(e.target.value)} />
          </div>

          <div>
            <label htmlFor="dob"> Date of Birth : </label>
            <input type="date" id="dob" value={dob} onChange={(e)=>setdob(e.target.value)} />
          </div>

          <div>
            <label htmlFor="cotact"> Contact : </label>
            <input type="number" id="contact" value={contact} onChange={(e)=>setContact(e.target.value)} />
          </div>

          <div>
            <label htmlFor="fatherno"> Father Number : </label>
            <input type="number" id="fatherno" value={fatherno} onChange={(e)=>setFatherno(e.target.value)} />
          </div>

          <div>
            <label> Marital Status : </label>
              <label htmlFor="yes">
                  <input type="checkbox" id="maritalyes" value="yes" checked={maritalStatus === "yes"} onChange={(e)=>setMaritalStatus(e.target.checked ? "yes" : "no")}/> Yes
              </label>
              <label htmlFor="no">
                  <input type="checkbox" id="maritalno" value="no" checked={maritalStatus === "no"} onchange={(e)=>setMaritalStatus(e.target.checked ? "no" : "yes")}  /> No
              </label>
          </div>

          <div>
            <label> Gender : </label>
              <label htmlFor="male">
                  <input type="checkbox" id="male" value="male" checked={gender === "male"}
                  onChange={(e) => setGender(e.target.checked ? "male" : "")}/> Male
              </label>

              <label htmlFor="female">
                  <input type="checkbox" id="female" value="female" checked={gender === "female"}
                  onChange={(e) => setGender(e.target.checked ? "female" : "")} /> Female
              </label>
          </div>

          <div>
            <label> Qualification : </label>
              <label htmlFor="hsc">
                  <input type="radio" id="hsc" name="qualification" value="HSC" checked={qualification === "HSC"} onChange={handleQualificationChange} /> HSC
              </label>
              <label htmlFor="diploma">
                  <input type="radio" id="diploma" name="qualification" value="Diploma" checked={qualification === "Diploma"} onChange={handleQualificationChange} /> Diploma
              </label>
          


          {qualification === "HSC" && (
          <div>
             <label htmlFor="hscSchoolName">HSC School Name : </label>
                  <input type="text" id="hscSchoolName" value={hscSchoolName} onChange={(e)=>setHscSchoolName(e.target.value)}/>

              <label htmlFor="hscMarks">HSC Marks : </label>
                  <input type="number" id="hscMarks" value={hscMarks} onChange={(e)=>setHscMarks(e.target.value)} />

              <label htmlFor="hscPassedYear">HSC Passed Year : </label>
                  <input type="number" id="hscPassedYear" value={hscPassedYear} onChange={(e)=>setHscPassedYear(e.target.value)} />

              <label htmlFor="hscPercentage">HSC Percentage : </label>
                  <input type="number" id="hscPercentage" value={hscPercentage} onChange={(e)=>setHscPercentage(e.target.value)} />
          </div>
          )}

          
          {qualification === "Diploma" && (
          <div>
             <label htmlFor="diplomaCollegeName">Diploma College Name : </label>
                  <input type="text" id="diplomaCollegeName" value={diplomaCollegeName} onChange={(e)=>setDiplomaCollegeName(e.target.value)}/>

              <label htmlFor="diplomaMarks">Diploma Marks : </label>
                  <input type="number" id="diplomaMarks" value={diplomaMarks} onChange={(e)=>setDiplomaMarks(e.target.value)} />

              <label htmlFor="diplomaPassedYear">Diploma Passed Year : </label>
                  <input type="number" id="diplomaPassedYear" value={diplomaPassedYear} onChange={(e)=>setDiplomaPassedYear(e.target.value)}/>

              <label htmlFor="diplomaPercentage">Diploma Percentage : </label>
                  <input type="number" id="diplomaPercentage" value={diplomaPercentage} onChange={(e)=>setDiplomaPercentage(e.target.value)} />

              <label htmlFor="diplomaSpecialization">Diploma Specialization : </label>
                  <input type="text" id="diplomaSpecialization" value={diplomaSpecialization} onChange={(e)=>setDiplomaSpecialization(e.target.value)} />

              <label htmlFor="diplomaClass">Diploma Class : </label>
                <select name="" id="diplomaClass" value={diplomaClass} onChange={handleDiplomaClassChange}>
                  <option value="">Select</option>
                  <option value="first">First</option>
                  <option value="second">Second</option>
                </select>
          </div>
          )}
        </div>


          <div>
             <label htmlFor="cgp">CGPA (Percentage) : </label>
                  <input type="number" id="cgp" min="0" max="100" value={cgp} onChange={(e)=>setCgp(e.target.value)}/>
          </div>


          <div>
             <label htmlFor="passedOut">PassedOut Year : </label>
                  <input type="number" id="passedOut" value={passedOut} onChange={(e)=>setPassedOut(e.target.value)}/>
          </div> 


          <div>
             <label htmlFor="totalAmount">Total Amount : </label>
                  <input type="number" id="totalAmount" value={totalAmount} onChange={handleTotalAmountChange} readOnly/>
          </div> 

          <div>
             <label htmlFor="paidAmount">Paid Amount : </label>
                  <input type="number" id="paidAmount" value={paidAmount} onChange={handlePaidAmountChange}/>
          </div> 

          <div>
             <label htmlFor="remainingAmount">Remaining Amount : </label>
                  <input type="number" id="remainingAmount" value={remainingAmount} readOnly/>
          </div> 

          <div>
             <label htmlFor="photo">Photo : </label>
                  <input type="file" id="photo" accept="image" onChange={handlePhotoChange}/>
          </div>  

          <button type="submit" onClick={data}>Add{""}</button>

        </form>

    </div>
    </>)

}

export default AddStudent;

    



