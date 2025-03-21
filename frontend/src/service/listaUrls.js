import axios from 'axios'

export class listar{
    baseUrl="http://localhost:8080/url";

     getAll(){
        return axios.get(this.baseUrl).then(res=> res.data );
      
    }
}