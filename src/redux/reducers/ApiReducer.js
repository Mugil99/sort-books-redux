import{FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from '../actions/actionTypes';
const initialState={
    loading:false,
    data:[],
    error:""
}
const ApiReducer=(state=initialState,actions)=>{
   switch(actions.type){
    case FETCH_DATA_REQUEST:
        return{
            ...state,loading:true
        }
    case FETCH_DATA_SUCCESS:
        return{
            ...state,data:actions.payload,loading:false
        }

   case FETCH_DATA_FAILURE:
    return{
        ...state,data:[],loading:false,error: actions.payload
    }
   default:
        return state;
   }
}
export default ApiReducer;
