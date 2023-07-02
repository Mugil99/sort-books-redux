import { SORT_PUBLISHER_WISE,SORT_AUTHOR_WISE,SORT_TITLE_WISE } from "../actions/actionTypes";
const initialState={
    sortedData:[],
}
const SortReducer=(state=initialState,action)=>{
      switch(action.type){
        case SORT_AUTHOR_WISE:
            {
                const dummy=action.payload;
                let authorWiseSorted=dummy.sort((a,b)=>(
                  a.author.localeCompare(b.author)
                ) )
                // console.log(authorWiseSorted)
                return {...state,sortedData:authorWiseSorted}
            }
        case SORT_PUBLISHER_WISE:
            {
                const dummy=action.payload;
                let publisherWiseSorted=dummy.sort((a,b)=>(
                  a.publisher.localeCompare(b.publisher)
                ) )
                // console.log(publisherWiseSorted)
                return {...state,sortedData:publisherWiseSorted}
            }
            case SORT_TITLE_WISE:
                {
                    const dummy=action.payload;
                    let titleWiseSorted=dummy.sort((a,b)=>(
                      a.title.localeCompare(b.title)
                    ) )
                    // console.log(titleWiseSorted)
                    return {...state,sortedData:titleWiseSorted}
                }
            default :
                return {...state,sortedData:action.payload}
      }
}
export default SortReducer;