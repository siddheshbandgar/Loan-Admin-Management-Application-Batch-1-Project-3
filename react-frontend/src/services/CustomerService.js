import axios from 'axios';

const CUSTOMERS_BASE_REST_API_URL = 'http://localhost:8080/api/v1/customers';

class CustomerService{
    getAllCustomers(){
        return axios.get(CUSTOMERS_BASE_REST_API_URL);
    }

    createCustomer(customer){
        return axios.post(CUSTOMERS_BASE_REST_API_URL, customer)
    }

    getCustomerById(id){
        return axios.get(CUSTOMERS_BASE_REST_API_URL + '/' + id);
    }

    updateCustomer(id, customer){
        return axios.put(CUSTOMERS_BASE_REST_API_URL+'/'+id, customer);
    }

    deleteConstomer(id){
        return axios.delete(CUSTOMERS_BASE_REST_API_URL+'/'+id);
    }
}

export default new CustomerService();