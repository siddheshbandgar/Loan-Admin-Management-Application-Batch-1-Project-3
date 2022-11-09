package com.wellsfargo.springboot;

import com.wellsfargo.springboot.model.Customer;
import com.wellsfargo.springboot.repository.CustomerRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class SpringbootBackendApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(SpringbootBackendApplication.class, args);
	}

	@Autowired
	private CustomerRepository customerRepository;

	@Override
	public void run(String... args) throws Exception {

//		Customer c1 = new Customer();
////		c1.setEmp_id("E0001");
//		c1.setFull_name("Ramesh Singh");
//		c1.setGender("Male");
//		c1.setDepartment("CCIBT");
//		c1.setDesignation("Software Engineer");
//		c1.setBirth_date("01/01/1999");
//		c1.setJoining_date("02/05/2020");
//
//		customerRepository.save(c1);
//
//		Customer c2 = new Customer();
////		c2.setEmp_id("E0002");
//		c2.setFull_name("Laila Singh");
//		c2.setGender("Female");
//		c2.setDepartment("CT");
//		c2.setDesignation("Cloud Engineer");
//		c2.setBirth_date("01/01/1998");
//		c2.setJoining_date("02/05/2021");
//
//		customerRepository.save(c2);
	}
}
