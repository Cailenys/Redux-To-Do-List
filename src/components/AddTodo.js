import React, { Component } from 'react'
import { connect } from 'react-redux'


class AddTodo extends Component {
state = {
content:''
}

handleChange = (e) => {
this.setState({
    
//following function to make id unique
id: Math.random().toString(36).substr(2, 9),
content: e.target.value
});
}

handleSubmit = (e) => {
e.preventDefault();
this.props.add(this.state);
this.setState({
content: ''
})
}

render() {
return (
<div>
<form onSubmit={this.handleSubmit}>
<label>Add a new todo:</label>
<input autoFocus type="text" onChange={this.handleChange} value={this.state.content} />
</form>
</div>
)
}
}

const mapStateToProps = (state) => {
return {
todos: state.todos
}
}

const mapDispatchToProps = (dispatch) => {
return {
add: (todo) => {dispatch({type:'ADD_TODO', addit:todo})}
}
}

export default connect(mapStateToProps,mapDispatchToProps)(AddTodo);