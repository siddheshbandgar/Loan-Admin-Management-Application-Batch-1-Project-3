package com.wellsfargo.springboot.controller;

import com.wellsfargo.springboot.exception.ResourceNotFoundException;
import com.wellsfargo.springboot.model.Customer;
import com.wellsfargo.springboot.dao.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/customers")
public class CustomerController {


    @Autowired
    private CustomerRepository customerRepository;

    //Get all employees REST API
    @GetMapping
    public List<Customer> getAllCustomers(){

        return customerRepository.findAll();

    }

    // create customer REST API
    @PostMapping
    public Customer createCustomer(@RequestBody Customer customer){
        return customerRepository.save(customer);
    }


    // get customer by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Customer> getCustomerById(@PathVariable String id){
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: "+id));

        return ResponseEntity.ok(customer);
    }

    // update customer REST API
    @PutMapping("{id}")
    public ResponseEntity<Customer> updateCustomerDetails(@PathVariable String id, @RequestBody Customer customerDetailsToUpdate){
        Customer updatedCustomer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: "+id));

        updatedCustomer.setFull_name(customerDetailsToUpdate.getFull_name());
        updatedCustomer.setDesignation(customerDetailsToUpdate.getDesignation());
        updatedCustomer.setDepartment(customerDetailsToUpdate.getDepartment());
        updatedCustomer.setGender(customerDetailsToUpdate.getGender());
        updatedCustomer.setBirth_date(customerDetailsToUpdate.getBirth_date());
        updatedCustomer.setJoining_date(customerDetailsToUpdate.getJoining_date());

        customerRepository.save(updatedCustomer);

        return ResponseEntity.ok(updatedCustomer);
    }

    @DeleteMapping("{id}")
    // delete customer REST API
    public ResponseEntity<HttpStatus> deleteCustomer(@PathVariable String id){
        Customer customer = customerRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Employee does not exist with id: "+id));

        customerRepository.delete(customer);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}
