package com.wellsfargo.springboot.repository;

import com.wellsfargo.springboot.model.Customer;
import org.springframework.data.jpa.repository.JpaRepository;

public interface CustomerRepository extends JpaRepository<Customer, String> {

}
