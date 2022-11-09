import { Button } from 'bootstrap';
import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import CustomerService from '../services/CustomerService';
 import { ToastContainer, toast } from "react-toastify";

 import "react-toastify/dist/ReactToastify.css";

function CustomerListComponent() {


    const [customers, setCustomers] = useState([]);


    useEffect(() => {
      
        getAllCustomers();

    }, [])
    
    const getAllCustomers = () =>{
        CustomerService.getAllCustomers()
          .then((response) => {
            setCustomers(response.data);
            console.log(response.data);
          })
          .catch((e) => {
            console.log(e);
          });
    }

    const deleteCustomer = (id) =>{
        // console.log(id);

        CustomerService.deleteConstomer(id).then((response) =>{
          toast.warn("Customer data deleted", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
            getAllCustomers();
        }).catch(e=>{
          toast.error("Something went wrong", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
            console.log(e);
        })
    }

    return (
      <div className="container">
        <h2 className='text-center'>Customer Master Data Details</h2>
        <Link to='/add-customer' className='btn btn-primary mb-2'>Add Customer</Link>
        <table className="table table-bordered table-striped">
          <thead>
            <th>Employee Id</th>
            <th>Employee Name</th>
            <th>Designation</th>
            <th>Department</th>
            <th>Gender</th>
            <th>Birth Date</th>
            <th>Joining Date</th>
            <th>Actions</th>
          </thead>
          <tbody>
            {customers.map((customer) => (
              <tr key={customer.emp_id}>
                <td>{customer.emp_id}</td>
                <td>{customer.full_name}</td>
                <td>{customer.designation}</td>
                <td>{customer.department}</td>
                <td>{customer.gender}</td>
                <td>{customer.birth_date}</td>
                <td>{customer.joining_date}</td>
                <td>
                    <Link className='btn btn-light' to={`/edit-customer/${customer.emp_id}`}>Update</Link>
                    <button className='btn btn-dark' onClick={()=>deleteCustomer(customer.emp_id)}
                    style = {{marginLeft:"10px"}}>Delete</button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    );
}

export default CustomerListComponent