
import React, { Component }  from 'react';
import {DataTable} from 'primereact/datatable'
import { Column } from 'primereact/column';
import { Panel } from 'primereact/panel';


import'primereact/resources/themes/nova-alt/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import { listar } from '../service/listaUrls';


export default class ListUrls extends Component{
  constructor(){
    super();
    this.state={};
    this.listaUrl=new listar();    
  }

  componentDidMount(){
    this.urlList();
  }

  urlList(){
    this.listaUrl.getAll().then(data=>this.setState({productos: data}));
  }

  acortarUrl(){
    this.shorted.crearUrl().then(data=>this.setState({productos:data}));
  }



  render(){
    return (
      <div>
        <Panel header ="lista de urls">
      <DataTable value={this.state.productos}>
        <Column field='id' header="ID"></Column>
        <Column field='url' header="url"></Column>
        <Column field='shortUrl' header="url acortada"></Column>
        <Column field='clicks' header=" clicks"></Column>
        <Column field='expDate' header="fecha de expiración"></Column>
      </DataTable>
      </Panel>
      </div>

    )
  }
}


