package com.example.demo.repositories;


import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.JpaRepository;
import com.example.demo.models.UrlsModel;
import java.util.List;
import java.util.Optional;


/*
 * 
 * repository interface that extends JpaRepository
 * 
 * 
 */

@Repository
public interface UrlsRepository extends JpaRepository <UrlsModel ,Long> {
    
    /*
     * custom query to find a url by its short url
     */
    List<UrlsModel> findByShortUrl(String shortUrl);
    
    Optional<UrlsModel> findOneByShortUrl(String shortUrl);

}


