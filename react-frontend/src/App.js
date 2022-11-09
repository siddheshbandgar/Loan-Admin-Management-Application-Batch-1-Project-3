import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import CustomerListComponent from './components/CustomerListComponent';
import FooterComponent from './components/FooterComponent';
import HeaderComponent from './components/HeaderComponent';
import  AddCustomer  from './components/AddCustomer';
import Login from './components/Login';
import ListLoanCardDetails from './components/ListLoanCardDetails';
import AddLoanCardComponent from './components/AddLoanCardComponent';
import { ToastContainer, toast } from "react-toastify";

import "react-toastify/dist/ReactToastify.css";
import Dashboard from './components/Dashboard';
function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
        <Routes>
          {/* <Route index element={<CustomerListComponent />} /> */}
          <Route path="/customers" element={<CustomerListComponent />}></Route>
          <Route path="/add-customer" element={<AddCustomer />}></Route>
          <Route path="/edit-customer/:id" element={<AddCustomer />}></Route>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/dashboard" element={<Dashboard />}></Route>
          <Route path = "/loancards" element = {<ListLoanCardDetails />} />
          <Route path = "/loancards/add-loandetails" element = {<AddLoanCardComponent />} />
          <Route path = "/loancards/edit-loandetails/:id" element = {<AddLoanCardComponent />} />
          <Route path="/" element={<Login />}></Route>
          <Route path="*" element={<Login />}></Route>
        </Routes>
        <ToastContainer />
        <FooterComponent />
      </Router>
    </div>
  );
}

export default App;
