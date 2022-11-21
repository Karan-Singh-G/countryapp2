import * as types from "./actionTyps";

const intialstate={
    data:[],
    isLoading:false,
    isError:false
    
}

const Reducer=(state=intialstate,action)=>{
 const {type,payload}=action;
  
  switch(type){
    case types.GET_DATA_REQUEST:
        return{
            ...state,
            isLoading:true,
            isError:false
        }
    case types.GET_DATA_SUCCESS:
        return{
            ...state,
            data:payload,
            isLoading:false,
            isError:false
        }
    case types.GET_DATA_FAILURE:
        return{
            ...state,
            isLoading:false,
            isError:true
        }


    default:
     return state
  }
}

export default Reducer