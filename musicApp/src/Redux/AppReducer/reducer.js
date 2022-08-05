import * as types from "./actionTypes"

const initState = {
    musicRecords:[],
    isLoading:false,
    isError:false,
}


const reducer = (state = initState, action) => {
    const { type , payload }=action
    switch (type) {
        case types.GET_MUSIC_RECORDS_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case types.GET_MUSIC_RECORDS_SUCCESS:{
            return {
                ...state,
                musicRecords:payload, // payload is itself array from the api it goes the new array
                isLoading:false,
                isError:false,
            }
        }
       
        case types.GET_MUSIC_RECORDS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }
        case types.UPDATE_MUSIC_RECORDS_REQUEST:{
            return {
                ...state,
                isLoading:true,
                isError:false,
            }
        }
        case types.UPDATE_MUSIC_RECORDS_SUCCESS:{
            return {
                ...state,
                musicRecords:payload, // payload is itself array from the api it goes the new array
                isLoading:false,
                isError:false,
            }
        }
       
        case types.UPDATE_MUSIC_RECORDS_FAILURE:{
            return {
                ...state,
                isLoading:false,
                isError:true,
            }
        }
       
       
        default:
            return state;
    }
}

export { reducer }