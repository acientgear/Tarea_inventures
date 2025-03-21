import React, { Component }  from 'react';
import { Menubar } from 'primereact/menubar';
import { useNavigate } from 'react-router-dom';


export default function MenubarComponent(){
    const navigate = useNavigate();
    const items=[
        {label:"Acortar URL",command:()=> navigate("/acortar")},
        {label:"Lista de Urls",command:()=> navigate("/list")}
    ];
    return <Menubar model={items}/>
}