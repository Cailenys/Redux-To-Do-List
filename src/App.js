/*  
 From Tutorial :https://medium.com/@faz.pak/todo-app-with-react-and-redux-f91242ffa384 
*/


import React, { Component } from 'react';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import { connect } from 'react-redux';

class App extends Component {
render() {
return (
<div className="todo-app container">
<h1 className="center blue-text">My Todo List</h1>
<Todos />
<AddTodo />
</div>
);
}
}

export default connect()(App);