import axios from 'axios'
import config from '../components/config';


/*
* 
* Service to shorten the url
*  It uses axios to make the request to the backend
*  It uses the backend url to shorten the url
*  It uses the put method to send the url to the backend
*  It uses the baseUrl to store the url to shorten
*  i choose axios for simplicity and previus uses for academic purposes
*/



export class AcortarUrl{
    baseUrl=`${config.backendURl}/url/crear `;
       
    /**
     * 
     * @param {url} originalUrl
     * @param {customSufijo} suffix this can be a custom suffix for the url or auto generated 
     * @returns 
     */
     crearUrl( url, customSufijo,fullShortUrl){
        return axios.put(this.baseUrl,{
            url:url,
            shortUrl:customSufijo,
            urlSort:fullShortUrl
        },{
            headers:{
                'Content-Type':'application/json'
            }
        })
      
    };
}
