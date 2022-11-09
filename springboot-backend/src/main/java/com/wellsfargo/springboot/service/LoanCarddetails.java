package com.wellsfargo.springboot.service;

import com.wellsfargo.springboot.model.LoanCard;
//import net.javaguides.springboot.model.LoanCard;

import java.util.Optional;

public interface LoanCarddetails {
	
	public Optional<LoanCard> getLoanById(String loan_Id);
	
}
