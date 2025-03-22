import React, { Component }  from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


/*
* Component for the navigation bar
* It uses the Menubar component from PrimeReact
*/

export default function MenubarComponent(){
    const navigate = useNavigate();
    /* Items for the navigation bar */
    const items=[
        {label:"Acortar URL",command:()=> navigate("/acortar")},
        {label:"Lista de Urls",command:()=> navigate("/list")}
    ];
    return <Menubar model={items}/>
}