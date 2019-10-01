import React from 'react';
import BookList from './components/BookList';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from 'react-apollo';
import AddBook from './components/AddBook';
import "../src/index.css";

const client = new ApolloClient({
  uri:'http://localhost:30/'
  //'https://secure-retreat-19338.herokuapp.com/'
});


function App() {
  return (
      <ApolloProvider client={client}>
      <div className='main'>
        <h1>Book List</h1>
        <BookList/>
        <AddBook/>
      </div>
      </ApolloProvider>
  );
}

export default App;
