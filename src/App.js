import React, { useEffect, useReducer } from 'react'
import './App.css';

const initialState = {
isLoading: false,
error: null,
data: []
}

const reducer = (state, action) => {
  console.log('reducer', state, action.type);
  switch (action.type){
    case 'getArticle':
      return {
        ...state,
        isLoading: true
      }

      case 'loadArticles':
      return {
        ...state,
        isLoading: false,
        data: action.payload
      }
default:
  return state;
  }
}


function App() {
const [state, dispatch] = useReducer(reducer, initialState)
console.log('render', state);

useEffect(() => {
  fetch('http://jsonplaceholder.typicode.com/posts')
  .then(res => res.json())
  .then(res => dispatch({type:'loadArticles', payload: res}))
},[])

  return (
   <div>
     <h3>this will be a Redux project</h3>
     <button onClick={() => dispatch({type: 'getArticle'})} >Start getting article</button>
   {state.isLoading && <h2>Loading</h2> }
  {state.data.map(article => <p>{article.title}</p>)}
   </div>
  );
}

export default App;
