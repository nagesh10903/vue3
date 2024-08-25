import {createStore} from 'vuex';
import userlogin from "./modules/userlogin";
import variables from "./envronmentconfig";

const store = new createStore({
    state: {
        config: {
          environment: variables.VUE_APP_ENVIRONMENT,          
        },
    },
    modules: { 
        userlogin,        
      },
      getters: {
        getEnviornment: (state) => state.config.enviornment,
      },
      mutations: {
        setConfig(state, config) {
          state.config = config;
        }
      },
      actions: {        
      },
});

export default store;