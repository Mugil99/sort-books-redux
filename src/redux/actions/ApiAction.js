import{FETCH_DATA_REQUEST, FETCH_DATA_FAILURE, FETCH_DATA_SUCCESS} from './actionTypes';
import axios from 'axios';
export const fetchDataRequest=()=>{
    return{
        type:FETCH_DATA_REQUEST
    }
}
export const fetchDataSuccess=(data)=>{
    return{
        type:FETCH_DATA_SUCCESS,
        payload:data
    }
}
export const fetchDataFailure=(error)=>{
    return{
        type:FETCH_DATA_FAILURE,
        payload:error.message
    }
}

export const fetchData=()=>{
    return(dispatch)=>{
         dispatch(fetchDataRequest());
         axios.get('https://api.nytimes.com/svc/books/v3/lists/current/hardcover-fiction.json?api-key=LVtPAnTjKn2fPpu3uU8G6ucbbAaQqCGV')
         .then(res=>dispatch(fetchDataSuccess(res.data.results.books)))
         .catch(err=>dispatch(fetchDataFailure(err.message)))
    }
}
