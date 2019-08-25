import React,{Component} from 'react';
import Buttons from "./Button.js";
import axios from "../axiosInstance";
class Todo extends Component{
//     renderText = () => {
//         const{children} = this.props;
//         if(!children) return null;
//         return(<p className="card-text">
//             {children}
//         </p>)
//     }
//     render() {
//         const {title,createdAt,finished} = this.props;
//         let classes='card'
//         if (finished) classes += ' border-success'
//         // daj pozor na mezdeu pred boder success pri oddelovani classes ,aby to nebola jedn super dlha classa
//         console.log(this.props);
//         return (
//             <div className="Todo">
//                 <div className={classes}>
//                     <div className="card-body">
//                         <h5 className="card-title">
//                             {title}
//                         </h5>
//                         <h6 className="card-subtitle mb-2 text-muted">
//                             {createdAt}
//                         </h6>
//                         {this.renderText()}
//                         <Buttons todo={this.props}/>
//                     </div>
//                 </div>
//             </div> 
//         )
//     }
// }

renderText = () => {const {text} = this.props.todo;
if(!text) return null;

return (
    <div className="card-text" dangerouslySetInnerHTML={{ __html: text}}/>
) 
};

handleFinish = async () => {
     await axios.patch('/todos/' + this.props.todo.id,{
     finished:true
    });
this.props.onFinish();
}

handleRemove = async () => {await axios.delete ('/todos/' + this.props.todo.id);
this.props.onRemove();
}


render () {
    const {title,createdAt,finished} = this.props.todo;
    let classes='card'
     if (finished) classes += ' border-success';

     return (
        <div className="todo mb-2">
            <div className={classes}>
                <div className="card-body">
                    <h5 className="card-title">
                         {title}
                    </h5>
                    <h6 className="card-subtitle mb-2 text-muted">
                        Created at {createdAt}
                    </h6>
                        {this.renderText()}
                    <Buttons todo={this.props.todo} onFinish={this.handleFinish} onRemove={this.handleRemove}/> 
                </div>
            </div>
        </div> 


     );
}
}

export default Todo;

// toto je jeden komponent a ten si mozem v app zavolat kolko krat chcem 
// ale napr dalsi component komentov by som uz rednereovala vtodo