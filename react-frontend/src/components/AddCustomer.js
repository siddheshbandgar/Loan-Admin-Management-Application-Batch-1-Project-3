import React, { useState, useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import CustomerService from "../services/CustomerService";
 import { ToastContainer, toast } from "react-toastify";

 import "react-toastify/dist/ReactToastify.css";

const AddCustomer = () => {
  const [emp_id, setEmpId] = useState("");
  const [full_name, setFullName] = useState("");
  const [gender, setGender] = useState("M");
  const [designation, setDesignation] = useState("Software Engineer");
  const [department, setDepartment] = useState("DTI");
  const [joining_date, setJoiningDate] = useState("");
  const [birth_date, setBirthDate] = useState("");

  const navigate = useNavigate();
  const { id } = useParams();

  

  const saveOrUpdateCustomer = (e) => {
    e.preventDefault();

    const customer = {
      emp_id,
      full_name,
      designation,
      department,
      gender,
      joining_date,
      birth_date,
    };
    console.log(customer);
    if (id) {
      CustomerService.updateCustomer(id, customer)
        .then((response) => {

          toast.success("Customer data updated successfully!", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });
          navigate("/customers");
      
        })
        .catch((error) => {
          console.log(error);
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
        });
    } else {
      CustomerService.createCustomer(customer)
        .then((response) => {
          console.log(response.data);
          toast.success("Customer data added successfully", {
            position: "bottom-center",
            autoClose: 5000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: "light",
          });

          navigate("/customers");
        })
        .catch((error) => {
          console.log(error);
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
        });
    }
    console.log(customer);
  };

  useEffect(() => {
    CustomerService.getCustomerById(id)
      .then((response) => {
        setEmpId(response.data.emp_id);
        setFullName(response.data.full_name);
        setDesignation(response.data.designation);
        setDepartment(response.data.department);
        setGender(response.data.gender);
        setBirthDate(response.data.birth_date);
        setJoiningDate(response.data.joining_date);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  const title = () => {
    if (id) {
      return <h2 className="text-center">Update Customer</h2>;
    } else {
      return <h2 className="text-center">Add Customer</h2>;
    }
  };

  return (
    <div>
      <br />
      <br />
      <div className="container" style={{ marginBottom: "30px" }}>
        <div className="row">
          <div className="card col-md-6 offset-md-3 offset-md-3">
            {title()}
            {/* <h2 className="text-center">Add Customer</h2> */}
            <div className="card-body">
              <form>
                <div className="form-group mb-2">
                  <label className="form-label"> Employee Id :</label>
                  <input
                    type="text"
                    placeholder="Enter employee id"
                    name="emp_id"
                    className="form-control"
                    value={emp_id}
                    onChange={(e) => setEmpId(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Full Name :</label>
                  <input
                    type="text"
                    placeholder="Enter full name"
                    name="full_name"
                    className="form-control"
                    value={full_name}
                    onChange={(e) => setFullName(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Designation: </label>
                  <br></br>
                  {/* <input
                    type="text"
                    placeholder="Enter Designation"
                    name="designation"
                    className="form-control"
                    value={designation}
                    onChange={(e) => setDesignation(e.target.value)}
                  ></input> */}

                  <select
                    onChange={(e) => setDesignation(e.target.value)}
                    value={designation}
                  >
                    <option value="Software Engineer">Software Engineer</option>
                    <option value="Software Engineering Manager">
                      Software Engineering Manager
                    </option>
                    <option value="Lead Sofware Engineer">
                      Lead Sofware Engineer
                    </option>
                    <option value="Cloud Engineer">Cloud Engineer</option>
                    <option value="Scrum Master">Scrum Master</option>
                    <option value="Program Associate">Program Associate</option>
                  </select>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Department :</label>
                  <br></br>

                  <select
                    onChange={(e) => setDepartment(e.target.value)}
                    value={department}
                  >
                    <option value="DTI">DTI</option>
                    <option value="CT">CT</option>
                    <option value="TI">TI</option>
                    <option value="CCIBT">CCIBT</option>
                    <option value="COO">COO</option>
                    <option value="CSBBT">CSBBT</option>
                  </select>
                  {/* <input
                    type="text"
                    placeholder="Enter department"
                    name="department"
                    className="form-control"
                    value={department}
                    onChange={(e) => setDepartment(e.target.value)}
                  ></input> */}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Gender :</label>
                  <br></br>

                  <select
                    onChange={(e) => setGender(e.target.value)}
                    value={gender}
                  >
                    <option value="M">M</option>
                    <option value="F">F</option>
                  </select>
                  {/* <input
                    type="dropdown"
                    placeholder="Enter gender"
                    name="gender"
                    className="form-control"
                    value={gender}
                    onChange={(e) => setGender(e.target.value)}
                  ></input> */}
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Birth Date :</label>
                  <input
                    type="date"
                    placeholder="Enter birth date"
                    name="birth_date"
                    className="form-control"
                    value={birth_date}
                    onChange={(e) => setBirthDate(e.target.value)}
                  ></input>
                </div>

                <div className="form-group mb-2">
                  <label className="form-label"> Joining Date :</label>
                  <input
                    type="date"
                    placeholder="Enter joining date"
                    name="joining_date"
                    className="form-control"
                    value={joining_date}
                    onChange={(e) => setJoiningDate(e.target.value)}
                  ></input>
                </div>

                <button
                  className="btn btn-success"
                  onClick={(e) => saveOrUpdateCustomer(e)}
                >
                  Submit{" "}
                </button>
                <Link to="/customers" className="btn btn-danger">
                  {" "}
                  Cancel{" "}
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
      <br />
      <br />
    </div>
  );
};

export default AddCustomer;
