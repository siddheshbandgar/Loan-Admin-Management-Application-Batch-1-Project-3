package com.wellsfargo.springboot.controller;


import com.wellsfargo.springboot.exception.ResourceNotFoundException;
import com.wellsfargo.springboot.model.Admin;
import com.wellsfargo.springboot.dao.LoginRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/login")
public class LoginController {

    @Autowired
    private LoginRepository loginRepository;

    @PostMapping
    public ResponseEntity<String> validateCredentials(@RequestBody Admin enteredAdminCredentials){
        Admin admin = loginRepository.findById(enteredAdminCredentials.getUsername()).orElseThrow(() -> new ResourceNotFoundException("Please enter valid username and password"));
        if(admin.getPassword().equals(enteredAdminCredentials.getPassword())){
            return ResponseEntity.ok("Valid");
        }
        else
            return ResponseEntity.ok("Invalid");
    }
}
