package com.wellsfargo.springboot.service;

import com.wellsfargo.springboot.model.LoanCard;
import com.wellsfargo.springboot.dao.LoanCardRepository;
//import net.javaguides.springboot.model.LoanCard;
//import net.javaguides.springboot.repository.LoanCardRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class LoanCarddetailsImpl implements LoanCarddetails{
	
	@Autowired
    LoanCardRepository loancardrepo;
	
	@Override
    public Optional<LoanCard> getLoanById(String loan_id) {
        return loancardrepo.findById(loan_id);
    }
}
