package com.wellsfargo.springboot.repository;

import com.wellsfargo.springboot.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Admin, String> {
}
