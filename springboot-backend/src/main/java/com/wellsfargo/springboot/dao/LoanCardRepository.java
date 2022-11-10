package com.wellsfargo.springboot.dao;

import com.wellsfargo.springboot.model.LoanCard;
//import net.javaguides.springboot.model.LoanCard;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository

public interface LoanCardRepository extends JpaRepository<LoanCard, String>{

	
}
