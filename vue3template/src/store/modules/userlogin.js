

export default {
    namespaced: true,
    
    state: {
      user: undefined,
      userDetails: undefined,
      userType: "Guest",
      loggedinuser:false,
    },
    getters: {
        userName: (state) => {
            if(state?.user)
            return state?.user?.name || (state?.user?.firstName + " " + state?.user?.lastName)
            else return "";
        },
          userEmail: (state) => {
            const email = isHubRouted ? state.user.emailAddress : state.user.userName || "";
            return email;
          },
          isLoggedinUser:(state)=>{ return (state.loggedinuser)?true:false;},
    },
    mutations:{},
    actions:{},
};