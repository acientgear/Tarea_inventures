import axios from 'axios'

export class AcortarUrl{
    baseUrl="http://localhost:8080/url/crear";

     crearUrl(){
        return axios.get(this.baseUrl).then(res=> res.data );
      
    }
    
}