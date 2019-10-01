import React from 'react';
import {graphql} from 'react-apollo';
import {getBookQuerie} from '../queries/queries';


function BookDetails(props) {
   // console.log(props)
   const displayBook =()=>{
       const {book} = props.data;
       if(book){
           return(
               <div className="booklist">
                   <h2>{book.title}</h2>
                   <p>{book.author.name}</p>
                   <p>all books by this author</p>
                   <ul className="booklistLI">
                        {book.author.books.map(item=>{
                        
                            return<li key={item.id}> {item.title}</li>
                            
                        })}
                   </ul>
               </div>
           )
       }
       else{
           return(<div>No book selected</div>)
       }
   }
  return (
    <div id="book-details">
     {displayBook()}
    </div>
  );
}

export default graphql(getBookQuerie,{
    options:(props)=>{
      return{
        variables:{
          id:props.BookID
        }
      }
    }
  })(BookDetails);