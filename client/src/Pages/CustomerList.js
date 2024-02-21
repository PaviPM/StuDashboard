import React from "react";
import Sidemenu from "../Menu/SideMenu";
import "./CustomerList.css"
import { useState, useEffect } from "react";

const CustomerList = () => {
    const [ customer, setCustomer ] = useState(JSON.parse(localStorage.getItem("customer")) || []);

    const handleDelete = (index)  => {
        const updatedCustomer = customer.filter((_, i) => i !== index);
        setCustomer(updatedCustomer);
    };

    useEffect(()=> {
        localStorage.setItem("customer", JSON.stringify(customer));
    },[customer]);


    return(
        <>
        <Sidemenu />
        <div className="CustomerList">
            <h2>Customer List</h2>
            <table>
                <thead>
                    <tr>
                        <th>Customer Name</th>
                        <th>Address</th>
                        <th>Date</th>
                        <th>State</th>
                        <th>PhoneNo</th>
                        <th>GSTIN</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {customer.map((customer, index)=>(
                        <tr key={index}>
                            <td>{customer.customerName}</td>
                            <td>{customer.address}</td>
                            <td>{customer.date}</td>
                            <td>{customer.state}</td>
                            <td>{customer.phoneno}</td>
                            <td>{customer.gstin}</td>
                            <td><button onClick={()=>handleDelete(index)}>Delete</button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
        </>
    )
}

export default CustomerList;