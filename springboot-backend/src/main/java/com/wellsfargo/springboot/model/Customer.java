package com.wellsfargo.springboot.model;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;

@Getter
@Setter
@NoArgsConstructor
@AllArgsConstructor
@Entity
@Table(name="customers")
public class Customer {


    @Id
    //@GeneratedValue(strategy = GenerationType.IDENTITY)
    private String emp_id;

    @Column(name = "full_name")
    private String full_name;

    @Column(name = "designation")
    private String designation;

    @Column(name = "department")
    private String department;

    @Column(name = "gender")
    private String gender;

    @Column(name = "birth_date")
    private String birth_date;

    @Column(name = "joining_date")
    private String joining_date;

}
