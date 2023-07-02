import logo from './logo.svg';
import './App.css';
import { useSelector,useDispatch } from 'react-redux';
import { useEffect } from 'react';
import { fetchData } from './redux/actions/ApiAction';
import { sortAuthorWise, sortPublisherWise,sortTitleWise } from './redux/actions/SortAction';

function App() {
  const dispatch=useDispatch();
  const loading=useSelector(state=>state.api.loading)
  const data=useSelector(state=>state.api.data);
  const error=useSelector(state=>state.api.error);
  const sortedData=useSelector(state=>state.sort.sortedData)
  useEffect(()=>{
     dispatch(fetchData())
  },[])
 

  return (
   <div>
    <button onClick={()=>{dispatch(sortAuthorWise(data))
                           console.log(sortedData)}}>Sort Author</button>
    <button onClick={()=>{dispatch(sortPublisherWise(data))
                           console.log(sortedData)}}>Sort Publisher</button>
    <button onClick={()=>{dispatch(sortTitleWise(data))
                           console.log(sortedData)}}>Sort Title</button>
     <div className='container'>
      {(!loading && sortedData)?
       sortedData.map((item)=>(
        <div className='card'>
        <img src={item.book_image} style={{height:'300px'}}></img>
        <h3>{item.title}</h3>
        <p><strong>Author : </strong>{item.author}</p>
        <p><strong>Description : </strong>{item.description}</p>
        <p><strong>Publisher : </strong>{item.publisher}</p>
        <a href={item.amazon_product_url}>Buy now</a>
        </div>
       ))
       :(<h1>Loading...</h1>)
      }
    </div>
   </div>
  );
}

export default App;
