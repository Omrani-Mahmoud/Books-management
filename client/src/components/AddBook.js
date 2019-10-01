import React, {useState} from 'react';
import {graphql, compose} from 'react-apollo';
import {getAuthorsQuerie, addBookMutation, getBooksQuerie} from '../queries/queries';



function AddBook(props){
    const [form,setForm]= useState({
        title:'',
        authorID:''
    });
    const data = props.getAuthorsQuerie;
    const DisplayAuthors=()=>{
        if(data.loading)
        return(<option>loading authors ...</option>)
        else{
            return data.authors.map(author =>{
                    return(<option key={author.id} value={author.id}>{author.name}</option>)
            })
        }
    };

    const submitForm = (e)=>{
        e.preventDefault();
        props.addBookMutation({
            variables:{
                title:form.title,
                authorID:form.authorID
            },
            refetchQueries:[{query:getBooksQuerie}]
        });
    }

    return(
        
        <form id='add_book' onSubmit={submitForm.bind(this)}>
            <div className='field'>
                <label>Title</label>
                <input type='text' onChange={(e)=>setForm({...form,title:e.target.value})}/>
            </div>
            <div className='field'>
                <label>Author</label>
                <select onChange={(e)=>setForm({...form,authorID:e.target.value})}>
                    <option>select author</option>
                    {DisplayAuthors()}
                </select>
            </div>
            <button>+</button>
        </form>

    )

}

export default compose (
    graphql(getAuthorsQuerie,{name:"getAuthorsQuerie"}),
    graphql(addBookMutation,{name:"addBookMutation"}))(AddBook);
