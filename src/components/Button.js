import React,{Component} from 'react';


class Buttons extends Component {
// handleFinish=async () =>{
//     await axios.patch ('/todos/'+this.props.todo.id+'.json', {
//         finished: true
//     })
// };

    render() {
        let finishButton;
        const { finished } = this.props.todo;
        if (!finished) {
            finishButton = (
<button type="button" className="btn btn-success float-right" /*onClick={this.handleFinish}*/ onClick={this.props.onFinish}>
    Finish it
</button>
            )
        }
        return(
            <>
            <button type="button" className= "btn btn-light" onClick={this.props.onRemove}>Remove it</button>
            {finishButton}
            </>
        )
    }

}

export default Buttons;

// <button className="btn btn-light">Zmazat</button>
//                         {!this.props.finished?<button className="btn btn-success float-right">Dokoncit</button>:null}