import axios from 'axios'

export class AcortarUrl{
    baseUrl="http://localhost:8080/url/crear";

     crearUrl( url, customSufijo){
        return axios.put(this.baseUrl,{
            url:url,
            shortUrl:customSufijo
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
      
    };
}
