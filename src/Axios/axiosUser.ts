import { APIURL } from "../Utils/constants"
import axios from 'axios'




export const createUser = async (nombre: string, email: string, password: string) => {
    try {
        const response = await axios.post(`${APIURL}/auth/register`, { 
            nombre, 
            email, 
            password, 
        });
        return response.data;
    } catch (error: any) {
       return alert(error.response.data.errors[0].msg)
        
    }
}


export const loginUser = async (email: string, password: string) => {
    try {
        const response = await axios.post(`${APIURL}/auth/login`, {
            email, 
            password, 
        });
        return response.data;
    } catch (error: any) {
       return alert(error.response.data.msg);
       
       
        
    }

}




