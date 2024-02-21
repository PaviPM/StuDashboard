import React, { useEffect, useState } from "react";
import Sidemenu from "../Menu/SideMenu";
import "./CustomerForm.css"

const CustomerForm = () => {
    const [ customer, setCustomer ] = useState(JSON.parse(localStorage.getItem("customer")) || []);

    const [ customerInfo, setCustomerInfo ] = useState({
        customerName : "",
        address : "",
        date : "",
        state : "",
        phoneno : "",
        gstin : "GSTIN6987543",
    });
    const handleInputChange = (e) => {
        const {name, value} = e.target;
        setCustomerInfo({...customerInfo, [name]: value})
    }

    const handleCreate = () => {
        setCustomer([...customer,customerInfo]);
        setCustomerInfo({
            customerName : "",
            address : "",
            date : "",
            state : "",
            phoneno : "",
            gstin : "GSTIN6987543",
        })
    }

    useEffect(()=> {
        localStorage.setItem("customer", JSON.stringify(customer));
    },[customer]);
   

    return(
        <>
        <Sidemenu />
        <div className="CustomerForm">
            <h2>Create Customer</h2>
            <form className="form">
                <label>Customer Name : </label>
                <input type="text" name="customerName" value={customerInfo.customerName} onChange={handleInputChange}/>

                <label>Address : </label>
                <input type="text" name="address" value={customerInfo.address} onChange={handleInputChange}/>

                <label>Date : </label>
                <input type="date" name="date" value={customerInfo.date} onChange={handleInputChange}/>
                <br />
                <br />
                <label>State : </label>
                <select name="state" value={customerInfo.state} onChange={handleInputChange}>
                    <option value="">Select a State</option>
                    <option value="Andhra Pradesh">Andhra Pradesh</option>
                    <option value="Assam">Assam</option>
                    <option value="Bihar">Bihar</option>
                    <option value="Gujarat">Gujarat</option>
                    <option value="Kerala">Kerala</option>
                    <option value="Tamilnadu">Tamilnadu</option>

                </select>
                <br />
                <br />

                <label>Phone No : </label>
                <input type="number" name="phoneno" value={customerInfo.phoneno} onChange={handleInputChange}/>

                <label>GSTIN : </label>
                <input type="text" name="gstin" value={customerInfo.gstin} onChange={handleInputChange}/>

                <button type="button" onClick={handleCreate}>Create</button>
                
            </form>

        </div>
        </>
    )
}

export default CustomerForm;