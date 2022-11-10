package com.wellsfargo.springboot.dao;

import com.wellsfargo.springboot.model.Admin;
import org.springframework.data.jpa.repository.JpaRepository;

public interface LoginRepository extends JpaRepository<Admin, String> {
}
