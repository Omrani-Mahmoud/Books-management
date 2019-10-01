import {gql} from 'apollo-boost';
const getAuthorsQuerie = gql`
{
    authors{
        name
        id
    }
}
`

const getBooksQuerie=gql`{
    books{
        title
        id
    }
}`

const addBookMutation=gql` mutation($title:String!, $authorID:ID!){
    addBook(title:$title, authorID:$authorID){
        title
        id
    }
}`

const getBookQuerie = gql`
    query($id : ID){
        book(id:$id){
            id
            title
            author{
                id
                name
                books{
                    id
                    title
                }
            }
        }
    }
`

export {getAuthorsQuerie, getBooksQuerie, addBookMutation, getBookQuerie};