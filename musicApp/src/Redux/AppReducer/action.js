

import * as types from "./actionTypes";
import axios from "axios";

// const getMusicRecordRequest =()=> {

//     return {
//        type: types.GET_MUSIC_RECORDS_REQUEST // it is behave like a object
//     }
// }

// const getMusicRecordSuccess =(payload)=> {

//     return {
//        type: types.GET_MUSIC_RECORDS_SUCCESS,
//        payload,
//     }
// }
// const getMusicRecordFailure =()=> {

//     return {
//        type: types.GET_MUSIC_RECORDS_REQUEST
//     }
// }

const getMusicRecords = (params) => dispatch =>{
    dispatch({ type: types.GET_MUSIC_RECORDS_REQUEST})
    return axios.get("http://localhost:8080/albums", params)
    .then((r) => {
       return dispatch({
            type: types.GET_MUSIC_RECORDS_SUCCESS,
            payload:r.data,
        });
    })
    .catch((e) =>{
        return dispatch ({
            type:types.GET_MUSIC_RECORDS_FAILURE,
            payload:e,
        })
    })

}
const updateMusicRecords = (id, payload) => dispatch =>{
    dispatch({ type: types.UPDATE_MUSIC_RECORDS_REQUEST})
    return axios.patch(`http://localhost:8080/albums/${id}`, payload)
    .then((r) => {
       return dispatch({
            type: types.UPDATE_MUSIC_RECORDS_SUCCESS,
            payload:r.data,
        });
    })
    .catch((e) =>{
        return dispatch ({
            type:types.UPDATE_MUSIC_RECORDS_FAILURE,
            payload:e,
        })
    })

}
export {
    // getMusicRecordFailure,
    // getMusicRecordRequest,
    // getMusicRecordSuccess
    getMusicRecords,
    updateMusicRecords 
}