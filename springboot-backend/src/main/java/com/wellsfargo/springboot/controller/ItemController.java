package com.wellsfargo.springboot.controller;

import com.wellsfargo.springboot.exception.ResourceNotFoundException;
import com.wellsfargo.springboot.model.Item;
import com.wellsfargo.springboot.dao.ItemRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin("*")
@RestController
@RequestMapping("/api/v1/items")
public class ItemController {


    @Autowired
    private ItemRepository itemRepository;

    //Get all employees REST API
    @GetMapping
    public List<Item> getAllItems(){

        return itemRepository.findAll();

    }

    // create item REST API
    @PostMapping
    public Item createItem(@RequestBody Item item){
        return itemRepository.save(item);
    }


    // get item by id REST API
    @GetMapping("{id}")
    public ResponseEntity<Item> getItemById(@PathVariable String id){
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item does not exist with id: "+id));

        return ResponseEntity.ok(item);
    }

    // update item REST API
    @PutMapping("{id}")
    public ResponseEntity<Item> updateItemDetails(@PathVariable String id, @RequestBody Item itemDetailsToUpdate){
        Item updatedItem = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item does not exist with id: "+id));

        updatedItem.setDescription(itemDetailsToUpdate.getDescription());
        updatedItem.setIssue_status(itemDetailsToUpdate.getIssue_status());
        updatedItem.setItem_make(itemDetailsToUpdate.getItem_make());
        updatedItem.setItem_category(itemDetailsToUpdate.getItem_category());
        updatedItem.setItem_valuation(itemDetailsToUpdate.getItem_valuation());

        itemRepository.save(updatedItem);

        return ResponseEntity.ok(updatedItem);
    }

    @DeleteMapping("{id}")
    // delete item REST API
    public ResponseEntity<HttpStatus> deleteItem(@PathVariable String id){
        Item item = itemRepository.findById(id)
                .orElseThrow(() -> new ResourceNotFoundException("Item does not exist with id: "+id));

        itemRepository.delete(item);

        return new ResponseEntity<>(HttpStatus.NO_CONTENT);
    }
}

