import React, { useEffect, useRef } from "react"
import { data, href, useNavigate, useParams } from "react-router-dom"
import axios from 'axios'

const Redireccionar =()=>{
    const {sufijo}=useParams();
    const navigate = useNavigate();
    const hasRedirect=useRef();


    useEffect(()=>{
        if(hasRedirect.current)
            return;
        hasRedirect.current=true;
        const fetchOriginalUrl =async()=>{
            try {
                const response = await axios.get(`http://localhost:8080/url/${sufijo}`);
                console.log(response.data)
                if(response.data.urlOriginal){
                    let url = response.data.urlOriginal;
                // Verificar si la URL tiene el esquema (http:// o https://)
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
                navigate("/404");
            }
        };
            fetchOriginalUrl();

        },[sufijo]);
        return <p>redigiendo.. </p>
        };
export default Redireccionar;
    






