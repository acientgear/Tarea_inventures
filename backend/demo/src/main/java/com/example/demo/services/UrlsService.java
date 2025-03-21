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

@Service
public class UrlsService {

    @Autowired
    UrlsRepository urlsRepository;
   

    public ArrayList<UrlsModel> obtenerUrls(){
        return (ArrayList<UrlsModel>) urlsRepository.findAll();

    };

    public UrlsModel guardarUrl (UrlsModel urlsModel){
        return urlsRepository.save(urlsModel);
    };

    public List<UrlsModel> buscarUrl(String shortUrl){
        return urlsRepository.findByShortUrl(shortUrl);
    }

    public String valUrl(String shortUrl){
        Optional<UrlsModel> a = urlsRepository.findOneByShortUrl(shortUrl);
        String mensaje;
        if (a.isEmpty()){
            mensaje="Empty";
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
