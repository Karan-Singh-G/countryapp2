import * as types from "./actionTyps"
import axios from "axios"

const getDataRequest=()=>{
    return{
        type:types.GET_DATA_REQUEST,
    }
}
const getDataSuccess=(payload)=>{
    return{
        type:types.GET_DATA_SUCCESS,payload
    }
}
const getDataFailure=()=>{
    return{
        type:types.GET_DATA_REQUEST,
    }
}
function getData(dispatch){
    dispatch(getDataRequest());
    axios.get(`https://restcountries.com/v3.1/all`)
    .then((r)=> dispatch(getDataSuccess(r.data)))
    .catch((err)=>dispatch(getDataFailure(err)))
    }




export{getDataFailure,getDataRequest,getDataSuccess,getData};