import React,{useState, useEffect} from 'react';
import {graphql} from 'react-apollo';
import {getBooksQuerie} from '../queries/queries';
import BookDetail from '../components/BookDetails';
function BookList(props) {
    const [selected, setSelected]= useState({
      selected:null
    });
    const [DataCharged, setDataCharged]= useState(null);
    const data = props.data;
    
    useEffect(()=>  {
      if(data.loading)
        setDataCharged(false);
        else
        {
          setDataCharged(true);
            
        };
    
      return function cleanUp(){
        setDataCharged(null);
      }
    },[data.loading]);
    if(DataCharged){
  return (
    <div>
      <ul className="booksList">
      {data.books.map(book =>{return (<li key={book.id} onClick={()=>setSelected(book.id)}>{book.title}</li>)})}  
      </ul>
     
      <BookDetail BookID={selected}/>
    </div>
  );
}
else

return(<h1>wait plz</h1>)
}

export default graphql(getBooksQuerie)(BookList);
