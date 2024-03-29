package com.filmnecting.filmnectingproject.models;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity

public class Film {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    private String title;
    private String director;
    private String contact;

    public Film() {
       
    }

    public Film(Long id, String title, String director, String contact) {
        this.id = id;
        this.title = title;
        this.director = director;
        this.contact = contact;
    }
  
    public Long getId() {
        return id;
    }
    
    public String getTitle() {
        return title;
    }
   
    public String getDirector() {
        return director;
    }
    
    public String getContact() {
        return contact;
    } 
}
