import axios from 'axios'
import config from '../components/config';


/**
 * 
 * lista service to get all the urls
 * 
 */
export class listar{
    baseUrl=`${config.backendURl}/url`;

     getAll(){
        return axios.get(this.baseUrl).then(res=> res.data );
      
    }
}