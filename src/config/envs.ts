import 'dotenv/config';
import 'env-var'
import {get} from 'env-var';



export const Enviroment = {

    PORT: get('PORT').required().asPortNumber(),

}
