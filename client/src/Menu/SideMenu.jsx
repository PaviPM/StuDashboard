import React from 'react'
import logo from "../Menu/kk logo.png"
import { FaBars, FaChevronDown} from "react-icons/fa";
import { useState } from 'react';
import { NavLink } from 'react-router-dom';
import menuDetails from './MenuDetails';

const Sidemenu = ( { pavithra } ) => {
  const [open, setOpen] = useState(false);
  const [studentSubMenu, setStudentSubMenu] = useState(false);
  const [attendanceSubMenu, setAttendanceSubMenu] = useState(false);
  const [receiptSubMenu, setReceiptSubMenu] = useState(false);
  const [customerSubMenu, setCustomerSubMenu] = useState(false);
  const [billingSubMenu, setBillingSubMenu] = useState(false);
  const [interviewSubMenu, setInterviewSubMenu] = useState(false);
  const [leadSubMenu, setLeadSubMenu] = useState(false);
  const [masterSubMenu, setMasterSubMenu] = useState(false);


  const toggle = () => {
    setOpen(!open);
    if(!open){
      setStudentSubMenu(false);
      setAttendanceSubMenu(false);
      setReceiptSubMenu(false);
      setCustomerSubMenu(false);
      setBillingSubMenu(false);
      setInterviewSubMenu(false);
      setLeadSubMenu(false);
      setMasterSubMenu(false);
    };
  };

  const toggleStudentSubMenu = () => {
    setStudentSubMenu(!studentSubMenu);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleAttendanceSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(!attendanceSubMenu);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleReceiptSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(!receiptSubMenu);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleCustomerSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(!customerSubMenu);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleBillingSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(!billingSubMenu);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleInterviewSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(!interviewSubMenu);
    setLeadSubMenu(false);
    setMasterSubMenu(false);
  };

  const toggleLeadSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(!leadSubMenu);
    setMasterSubMenu(false);
  };

  const toggleMasterSubMenu = () => {
    setStudentSubMenu(false);
    setAttendanceSubMenu(false);
    setReceiptSubMenu(false);
    setCustomerSubMenu(false);
    setBillingSubMenu(false);
    setInterviewSubMenu(false);
    setLeadSubMenu(false);
    setMasterSubMenu(!masterSubMenu);
  }
  

  return (
    <div className="container">
        <div style={{width: open ? "250px": "50px"}} className="sidemenu">
            <div className="top">
                <div style={{display:open ? "block" : "none"}} className="logo" > <img src={logo} alt='logo'/> </div>
                <div style={{marginLeft: open ? "20px" : "7px"}} className="icon_top"><FaBars className="icon1" onClick={toggle}/></div>
            </div>

          {menuDetails.map((item, index) => (
            <div key={index}>
                {item.subDetails ? (
              <div className="sub"
                  onClick={
                  item.name === "Student Info"
                  ? toggleStudentSubMenu
                  :item.name === "Attendance"
                  ? toggleAttendanceSubMenu 
                  :item.name === "Receipt"
                  ? toggleReceiptSubMenu
                  :item.name === "Customer"
                  ? toggleCustomerSubMenu
                  :item.name === "Billing"
                  ? toggleBillingSubMenu 
                  :item.name === "Interview"
                  ? toggleInterviewSubMenu
                  :item.name === "Leads"
                  ?toggleLeadSubMenu
                  :item.name === "Master"
                  ? toggleMasterSubMenu 
                  : null
                }>

                <div className='icon_text'>{item.icon}</div>
                  <div style={{display: open ? "block" : "none"}} className='link_text'>
                      {item.name}
                  </div>

                  <div className='dropdown_icon'>
                      {open && (
                        <FaChevronDown style={{transform:
                          (item.name === "Student Info" && studentSubMenu) ||
                          (item.name === "Attendance" && attendanceSubMenu) ||
                          (item.name === "Receipt" && receiptSubMenu) ||
                          (item.name === "Customer" && customerSubMenu) ||
                          (item.name === "Billing" && billingSubMenu) ||
                          (item.name === "Interview" && interviewSubMenu) ||
                          (item.name === "Leads" && leadSubMenu) ||
                          (item.name === "Master" && masterSubMenu) ?
                          "rotate(180deg)" : "none",
                        }} />
                      )}
                  </div>
              </div>
              ):(
                <NavLink to = {item.path} className="sub" activeClassName= "secondclass">
                  <div className='icon_text'>{item.icon}</div>
                    <div style={{display: open ? "block" : "none"}} className='link_text'>
                      {item.name}
                    </div>
                </NavLink>
              )}
              {item.subDetails &&
              ((item.name === "Student Info" && studentSubMenu) ||
                (item.name === "Attendance" && attendanceSubMenu) ||
                (item.name === "Receipt" && receiptSubMenu) ||
                (item.name === "Customer" && customerSubMenu) ||
                (item.name === "Billing" && billingSubMenu) ||
                (item.name === "Interview" && interviewSubMenu) ||
                (item.name === "Leads" && leadSubMenu) ||
                (item.name === "Master" && masterSubMenu)) &&
                
                open && (
                  <div className='submenu'>
                    {item.subDetails.map((subDetail, subIndex)=>(
                      <NavLink to = {subDetail.path} key={subIndex} className="sub" activeClassName="secondClass">
                        <div className='icon_text'> </div>
                        <div className='link_text'>{subDetail.name}</div>
                      </NavLink>
                    ))}
                  </div>
                )
              }
              </div>
              ))}
    </div>
    
    <main>{pavithra}</main>
    
    </div>
    
)
}

export default Sidemenu