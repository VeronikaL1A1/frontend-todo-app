import React from "react";
import {withRouter} from 'react-router-dom';

class AddTodo extends React.Component{

    state={
        title:"",
        text: ""
     };

     handleSubmit = async event => {event.preventDefault();
     await this.props.onAdd(this.state);
    this.setState({title:'',
    text:''});
    this.props.history.push("/");
    };

    handleChange = event =>{const {value,name}= event.target;
    this.setState({[name]:value});};

    render () {
        const {title,text} = this.state;
        return (
            <form onSubmit = {this.handleSubmit}>
                <input className=" form-control mb-2" name="title" type="text" value={title} placeholder="your title" onChange={this.handleChange} required/>
                
                <textarea className="form-control mb-2" name= "text" type="text" value={text} placeholder="your text" onChange={this.handleChange} />
                <button type="submit" className="btn btn-outline-success" disabled={!title}>Ulozit</button>

            </form>
        );
    }

}

export default withRouter(AddTodo);