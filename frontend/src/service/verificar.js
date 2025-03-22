import React from "react";
import axios from "axios";
import config from "../components/config";



export class VerificarUrl{
    baseUrl=config.backendURl;


    /**
     * 
     * @param {url} this is short url to verify if it exists in the database  
     * @returns true o false
     */
    verificar(url){
        return axios.get(`${this.baseUrl}/url/buscar`,{params:{url},});
    }
}