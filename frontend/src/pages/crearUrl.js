import React, { useState } from 'react';
import {AcortarUrl} from '../service/acortar'
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";

export default function AcortarUrlPage(){
    const [url,setUrl]=useState("");
    const [shortUrl,setShortUrl]=useState(null);
    const shortener = new AcortarUrl();


    const handleAcortar=()=>{
        shortener.crearUrl().then((data)=>setShortUrl(data));
    };
    return (
        <div>
            <h2> acortador de url</h2>
            <InputText value={url} onChange={(e)=>setUrl(e.target.value)} placeHolder="ingresa la url" />
            <Button label ="acortar" onClick={handleAcortar}/>
            {shortUrl && <p> url acortada:</p>}
        </div>
    );
}
