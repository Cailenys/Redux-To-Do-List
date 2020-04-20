import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import './index.css';
import { Provider } from 'react-redux';
import { createStore } from 'redux';

const initState = {
 todos: [
 {id: 1, content: 'Read Redux'},
 {id: 2, content: 'Do assignment'}
 ] 
}
const reducer = (state = initState,action) => {
    switch(action.type){
    case 'ADD_TODO':
    return {
    todos: [...state.todos, action.addit],
    isLoggedIn: state.isLoggedIn
    }
    case 'DELETE_TODO':
    let newTodo = state.todos.filter(item => item.id!==action.id)
    return {
    todos: newTodo,
    isLoggedIn: state.isLoggedIn
    }
    default: return state;
    }//end switch
    }//end reducer

const store = createStore(reducer);
ReactDOM.render(
 <Provider store={store}>
 <App />
 </Provider>,
 document.getElementById('root')
);