import React from "react";
import axios from "axios";



export class VerificarUrl{
    baseUrl="http://localhost:8080/url/buscar";

    verificar(url){
        return axios.get(`http://localhost:8080/url/buscar`,{params:{url},});
    }
}