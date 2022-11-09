package com.wellsfargo.springboot.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="items")
public class Item {


    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String item_id;

    @Column //(name = "description")
    private String description;

    @Column //(name = "issue_status")
    private String issue_status;

    @Column //(name = "item_make")
    private String item_make;

    @Column //(name = "item_category")
    private String item_category;

    @Column //(name = "item_valuation")
    private long item_valuation;
}
