package com.example.demo.controller;

import java.util.ArrayList;
import java.util.Collections;


import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.example.demo.models.UrlsModel;
import com.example.demo.services.UrlsService;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;

import org.springframework.web.bind.annotation.PutMapping;




/*
 * controller class that contains the endpoints of the application
 * 
 * all the endpoints are mapped to the /url path
 * 
 */

@RestController
@CrossOrigin("*")
@RequestMapping("/url")
public class UrlsController {
    
    @Autowired
    UrlsService  urlsService;


    /*
     * endpoint that returns all the urls in the database
     * 
     * @name obtenerUrls
     * @return : a list of all the urls in the database
     */
    @GetMapping()
    public  ArrayList<UrlsModel> obtenerUrls(){
        return urlsService.obtenerUrls();
    }
    

    /*
     * 
     * endpoint that saves a url in the database
     * 
     * @param urlsModel : the url to save in the database this parameter is in the request body
     * @return : the url that was saved in the database
     * @trows DataIntegrityViolationException : if the url already exists in the database
     */
    @PutMapping("/crear")
    public ResponseEntity<UrlsModel> acortarUrl(@RequestBody UrlsModel urlsModel){
        /*
         * try to save the url in the database
         * if the url already exists in the database return a bad request
         */
        try{
            UrlsModel nuevaUrl =this.urlsService.guardarUrl(urlsModel);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevaUrl);
        }
        catch(DataIntegrityViolationException e){
            return ResponseEntity.badRequest().body(urlsModel);
        }
    }



    /*
     * 
     * endpoint that searches if a short url exists in the database
     * 
     * @param url : the short url to search
     * @return : a boolean that indicates if the short url exists in the database
     */
    @GetMapping("/buscar")
    public ResponseEntity<Boolean> buscar(@RequestParam String url){
        /*
         * if the boolean if false the short url exists in the database
         * 
         * 
         */
        Boolean a = this.urlsService.buscarUrl(url).isEmpty();
        return ResponseEntity.ok(a);

    }

    /*
     * 
     * endpoint that returns the url of a short url if it is valid
     * @param param : the short url to validate
     * @return : the url of the short url if it is valid
     * 
     * 
     * 
     */
    @GetMapping("/{sufijo}")
    public ResponseEntity<?> buscarUrl(@PathVariable("sufijo") String param) {
        //verify if the url is valid
        //System.out.println(param);


        String  a= this.urlsService.valUrl(param);
        if (a.equals("url no valida")){
            return ResponseEntity.status(HttpStatus.BAD_GATEWAY).body(Collections.singletonMap("error", a));
        }
        else {
            return ResponseEntity.ok(Collections.singletonMap("urlOriginal", a));
        }
        


        
    }
    

}
