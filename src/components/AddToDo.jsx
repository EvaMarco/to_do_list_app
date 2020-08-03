import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../actions/actions';
class AddToDo extends React.Component {
    constructor(props) {
        super(props);
        this.state = {input: ""};
    }
    updateInput = input =>{
        this.setState({input});
    }
    handleAddBtn = () => {
        this.props.addTodo(this.state.input);
    }
    render() {
        return (
            <>
                <input onChange={ e => this.updateInput(e.target.value) } value={this.state.value}/>
                <button onClick={this.handleAddBtn}>Add</button>
            </>
        );
    }
}

// With this connection we can write on State
export default connect(null, {addTodo})(AddToDo);
