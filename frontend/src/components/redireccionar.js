import React, { useEffect, useRef } from "react"
import {useNavigate, useParams } from "react-router-dom"
import axios from 'axios'
import config from "./config";


/**
 * 
 * Component to redirect the user to the original url
 * It uses the useParams and useNavigate hooks from react-router-dom
 * 
 * 
*/

const Redireccionar =()=>{
    const {sufijo}=useParams();
    const navigate = useNavigate();
    const hasRedirect=useRef();


    useEffect(()=>{
        /*
        * Check if the redirect has already been done
        * This is to avoid multiple redirects   
        */
        if(hasRedirect.current)
            return;
        hasRedirect.current=true;
        /*
         * 
         * 
         */
        const fetchOriginalUrl =async()=>{
            try {
                const response = await axios.get(`${config.backendURl}/url/${sufijo}`);
                console.log(response.data)
                if(response.data.urlOriginal){
                    let url = response.data.urlOriginal;
                // verify if the url has (http:// o https://)
                    if (!/^https?:\/\//i.test(url)) {
                    url = `https://${url}`; // Agregar https:// si no está presente
                    }
                return window.location.assign(url);   
                }
                else{
                    navigate("/error");
                }

            }catch(error){
                console.error("error obteniendo la url",error);
                navigate("/error");
            }
        };
            fetchOriginalUrl();

        },[sufijo]);
        return <p>redigiendo.. </p>
        };
export default Redireccionar;
    






