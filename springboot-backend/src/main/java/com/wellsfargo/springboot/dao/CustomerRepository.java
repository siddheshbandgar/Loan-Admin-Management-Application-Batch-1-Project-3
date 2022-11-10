package com.wellsfargo.springboot.dao;

import com.wellsfargo.springboot.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, String> {

}
