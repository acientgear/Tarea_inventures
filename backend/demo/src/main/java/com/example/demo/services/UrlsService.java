package com.example.demo.services;

import java.time.LocalDate;
import java.time.LocalDateTime;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.demo.models.UrlsModel;
import com.example.demo.repositories.UrlsRepository;



/*
 * service class that contains the business logic of the application
 * 
 * 
 */
@Service
public class UrlsService {

    @Autowired
    UrlsRepository urlsRepository;
   
    /*
     * method that returns all the urls in the database
     * 
     */
    public ArrayList<UrlsModel> obtenerUrls(){
        return (ArrayList<UrlsModel>) urlsRepository.findAll();

    };
    /*
     * method that saves a url in the database or updates it if it already exists
     * 
     * 
     */
    public UrlsModel guardarUrl (UrlsModel urlsModel){
        return urlsRepository.save(urlsModel);
    };

    /*
     * method that searches if exist a short url in the database
     * 
     * @name buscarUrl
     * 
     * @param shortUrl : the short url to search
     * @return : a list of urls that have the short url
     */
    public List<UrlsModel> buscarUrl(String shortUrl){
        return urlsRepository.findByShortUrl(shortUrl);
    }


    /*
     * 
     * method that returns the url of a short url if it is valid
     * 
     * @param shortUrl : the short url to validate
     * @return : the url of the short url if it is valid
     * 
     * 
     */

    public String valUrl(String shortUrl){
        Optional<UrlsModel> a = urlsRepository.findOneByShortUrl(shortUrl);
        String mensaje;
        if (a.isEmpty()){
            mensaje="url no valida";
        }
        else {
            UrlsModel url=a.get();
            LocalDate now=LocalDate.now();
            if (url.getExpDate().isAfter(now) || url.getExpDate().equals(now) ){
                mensaje=url.getUrl();
                url.setClicks(url.getClicks()+1);
                url=urlsRepository.save(url);
            }
            else{
                mensaje="url no valida";
            }}

        return mensaje;
    }


}
