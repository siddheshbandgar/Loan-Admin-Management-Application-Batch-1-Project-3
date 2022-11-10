import React from 'react'
import { Link, useNavigate, useParams } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";


export const HeaderComponent = () => {
  const navigate = useNavigate();
  return (
    <div>
      <header>
        <nav className="navbar navbar-expand-md navbar-dark bg-dark">
          <div>
            <a href="/dashboard" className="navbar-brand">
              Loan Admin Management Application
            </a>
          </div>
          <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
              <li class="nav-item active">
                <a class="nav-link" href="/customers">
                  Customers
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/items">
                  Items
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/loancards">
                  Loans
                </a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href onClick={(e)=>{
                  toast.info("Logged Out Successfully!", {
                  position: "bottom-center",
                  autoClose: 5000,
                  hideProgressBar: false,
                  closeOnClick: true,
                  pauseOnHover: true,
                  draggable: true,
                  progress: undefined,
                  theme: "light",
                });
                navigate("/login");}
                }>
                  Logout
                  
                </a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
    </div>
  );
}

export default HeaderComponent;
