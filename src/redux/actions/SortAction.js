import { SORT_AUTHOR_WISE,SORT_PUBLISHER_WISE,SORT_TITLE_WISE } from "./actionTypes";
export const sortAuthorWise=(data)=>{
    return{
        type:SORT_AUTHOR_WISE,
        payload:data
    }
}
export const sortPublisherWise = (data) => {
    return {
        type: SORT_PUBLISHER_WISE,
        payload: data
    }
}
export const sortTitleWise=(data)=>{
    return{
        type:SORT_TITLE_WISE,
        payload:data
    }
}