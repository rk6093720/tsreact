
import * as types from "./actionTypes";

const initState = {

    isAuth: false,
    token:"",
    isLoading:false,
    isError:false,
}


const  reducer= (state = initState, action) => {

    const { type , payload} = action;
    switch (type) {
        case types.USER_LOGIN_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
      
        case types.USER_LOGIN_SUCCESS:{
            return {
                ...state,
                isLoading:false,
                isAuth:true,
                token:payload,
                isError:false,
            }
        }
      
        case types.USER_LOGIN_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isAuth:false,
                token:"",
                isError:true  
          }
        }
      
        default:
            return state
    }
}

export { reducer}