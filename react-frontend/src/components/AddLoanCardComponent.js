import React, {useEffect, useState} from 'react'
import {useNavigate,  useParams} from 'react-router-dom';
import NumberPicker from 'react-widgets/NumberPicker'
import LoanCardService from '../services/LoanCardService'



const AddLoanCardComponent = () => {

    const [loan_id, setLoanId] = useState('')
   const [loan_type, setLoanType] = useState('Furniture')
    const [duration, setduration] = useState(0)

    
    const navigate = useNavigate();
    const { id } = useParams();

    const saveOrUpdateLoanDetails = (e) => {
        e.preventDefault();
        const loan_details = {loan_id, loan_type, duration};
        if(id){
            LoanCardService.updateLoan(id, loan_details).then((response) =>{
                    console.log(response);
                    navigate('/loancards');
            }).catch(error =>{
                console.log(error);
            })
        }else{
        LoanCardService.createLoanCards(loan_details).then((response) => {
            console.log(response.data);
            navigate('/loancards');
        }).catch(error => {
            console.log(error);
            alert('Record is already present');
        })
    }}
    useEffect(() => {

        LoanCardService.getLoanById(id).then((response) => {
            setLoanId(response.data.loan_id)
            setLoanType(response.data.loan_type)
            setduration(response.data.setduration)
        }).catch((error) => {
            console.log(error);
        });

    }, []);

    const title = () => {
        if(id){
            return <h2 className='text-center' > Update Employee</h2>
        }
        else{
            return <h2 className='text-center'>Add Employee</h2>
        }
    };
  return (    
  <div> 
    <br /> <br />
        <div className = "container">
                <div className = "row">
                    <div className = "card col-md-6 offset-md-3 offset-md-3">
                        <h2 className='text-center'>Loan Card Master data Details</h2>
                       
                        <div className = "card-body">
                            <form>
                                <div className = "form-group mb-2">
                                    <label className='form-label'>Loan id: </label>
                                    <input 
                                        type= "text"
                                        placeholder = "Loan ID" 
                                        name = "loan_id" 
                                        className = "form-control"
                                        value = {loan_id}
                                        onChange = {(e) => setLoanId(e.target.value)}
                                    />
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className='form-label'>Loan Type: </label>
                                    <select value = {loan_type} onChange = {(choice) => setLoanType(choice.target.value)}>
                                            <option value = "Furniture">Furniture</option>
                                            <option value = "Home">Home</option>
                                            <option value ="Car">Car</option>
                                            <option value = "Gold">Gold</option>
                                    </select>
                                    </div>
                                    <div className = "form-group mb-2">
                                    <label className='form-label'>Duration: </label>
                                    <NumberPicker
                                        value={duration}
                                        onChange = {(value) => setduration(value)}
                                    />
                                </div>

                                <div className = "form-group mb-2">
                                <button className = 'btn btn-success' onClick = {(e) => saveOrUpdateLoanDetails(e)}>Add Data</button>  
                                </div>

                            </form>
                        </div>
                    </div>
                </div>
        </div>
  </div>
  )
}

export default AddLoanCardComponent