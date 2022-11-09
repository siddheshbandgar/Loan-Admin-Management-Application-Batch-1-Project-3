import axios from 'axios'

const LOANCARD_BASE_REST_API_URL = 'http://localhost:8080/api/v1/loancards';

class LoanCardService{

    getAllLoanCards(){
        return axios.get(LOANCARD_BASE_REST_API_URL)
    }

    createLoanCards(loan_card){
        return axios.post(LOANCARD_BASE_REST_API_URL, loan_card)
    }

    getLoanById(id){
        return axios.get(LOANCARD_BASE_REST_API_URL + '/' + id);
    }

    updateLoan(id, loan_card){
        return axios.put(LOANCARD_BASE_REST_API_URL + '/' + id, loan_card)
    }

    deleteLoan(id){
        return axios.delete(LOANCARD_BASE_REST_API_URL + '/' + id)
    }


}

export default new LoanCardService(); 