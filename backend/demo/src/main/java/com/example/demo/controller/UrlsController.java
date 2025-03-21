package com.example.demo.controller;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.http.HttpStatus;
import org.springframework.http.HttpStatusCode;
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
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;



@RestController
@CrossOrigin("*")
@RequestMapping("/url")
public class UrlsController {
    
    @Autowired
    UrlsService  urlsService;

    @GetMapping()
    public  ArrayList<UrlsModel> obtenerUrls(){
        return urlsService.obtenerUrls();
    }
    

    @PutMapping("/crear")
    public ResponseEntity<UrlsModel> acortarUrl(@RequestBody UrlsModel urlsModel){
        try{
            UrlsModel nuevaUrl =this.urlsService.guardarUrl(urlsModel);
            return ResponseEntity.status(HttpStatus.CREATED).body(nuevaUrl);
        }
        catch(DataIntegrityViolationException e){
            return ResponseEntity.badRequest().body(urlsModel);
        }
    }

    /*@GetMapping("/buscar")
    public List<UrlsModel> buscar(@RequestParam String url){
        return this.urlsService.buscarUrl(url);
    }*/

    @GetMapping("/{sufijo}")
    public String buscarUrl(@PathVariable("sufijo") String param) {
        return this.urlsService.valUrl(param);
    }
    

}
