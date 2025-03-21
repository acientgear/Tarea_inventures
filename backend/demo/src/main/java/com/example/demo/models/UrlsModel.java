package com.example.demo.models;

import java.time.LocalDate;


import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.PrePersist;
import jakarta.persistence.Table;


@Entity
@Table(name="shortedUrls")
public class UrlsModel {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    @Column(unique = true ,nullable = false)
    private long id;
    @Column
    private String url;
    @Column(unique = true)
    private String shortUrl;
    @Column(nullable=false)
    private int clicks=0;
    @Column
    private LocalDate expDate;
    
    public LocalDate getExpDate() {
        return expDate;
    }


    @PrePersist
    protected void onCreated(){
        this.expDate= LocalDate.now().plusDays(3);
    }


    public long getId() {
        return id;
    }
    public void setId(long id) {
        this.id = id;
    }
    public String getUrl() {
        return url;
    }
    public void setUrl(String url) {
        this.url = url;
    }
    public String getShortUrl() {
        return shortUrl;
    }
    public void setShortUrl(String shortUrl) {
        this.shortUrl = shortUrl;
    }
    public int getClicks() {
        return clicks;
    }
    public void setClicks(int clicks) {
        this.clicks = clicks;
    }
    



}
