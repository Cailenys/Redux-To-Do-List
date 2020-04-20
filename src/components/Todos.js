import React from 'react';
import { connect } from 'react-redux'


class Todos extends React.Component {
render(){
const todoList = this.props.todos.length ? (
this.props.todos.map(todo => {
return (
<div className="collection-item" key={todo.id}>
<span>{todo.content}</span>
<button onClick={() => {this.props.delete(todo.id)}}>Delete</button>
</div>
)
})
) : (<p className="center">You have no todo's left, yay!</p>);
return (
<div className="todos collection">
{todoList}
</div>
)}
}

const mapStateToProps = (state) => {
return {
todos: state.todos }
}

const mapDispatchToProps = (dispatch) => {
return {
delete: (id) => {dispatch({type:'DELETE_TODO', payload:id})}
}
}

export default connect(mapStateToProps, mapDispatchToProps)(Todos);