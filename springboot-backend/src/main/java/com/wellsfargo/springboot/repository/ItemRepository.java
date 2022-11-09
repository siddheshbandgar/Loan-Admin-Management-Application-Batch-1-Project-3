package com.wellsfargo.springboot.repository;


import com.wellsfargo.springboot.model.Item;
import org.springframework.data.jpa.repository.JpaRepository;


public interface ItemRepository extends JpaRepository<Item, String> {

}


