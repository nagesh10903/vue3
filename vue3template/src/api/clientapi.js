//import axios from "axios";
import urls from "./urls";
import store from "../store";
import userData from '../data/user.json'

const {
    userdetaills,
}=urls;

const getBaseUrl=()=> {return "/";};
const getDataPath=()=> {return "../../public/data/";};

const apiClient={
    getLoginUser:(params) =>{
        //return axios.get(getBaseUrl() + userdetaills, params);
      },
      getLoginUserLocal:(user,email) =>{        
        return userData.filter(usr=>usr.email===email && usr.userName===user);
      },

};


export default apiClient;