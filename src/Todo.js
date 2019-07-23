import React,{Component} from 'react';

class Todo extends Component{
    renderText = () => {
        const{children} = this.props;
        if(!children) return null;
        return(<p className="card-text">
            {children}
        </p>)
    }
    render() {
        const {title,createdAt,finished} = this.props;
        let classes='card'
        if (finished) classes += ' border-success'
        // daj pozor na mezdeu pred boder success pri oddelovani classes ,aby to nebola jedn super dlha classa
        console.log(this.props);
        return (
            <div className="Todo">
                <div className={classes}>
                    <div className="card-body">
                        <h5 className="card-title">
                            {title}
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            {createdAt}
                        </h6>
                        {/* {children ? 
                        <p className="card-text">
                         {children}
                        </p>
                        :null} */}
                        {this.renderText()}
                        <button className="btn btn-light">Zmazat</button>
                        {!this.props.finished?<button className="btn btn-success float-right">Dokoncit</button>:null}
                    </div>
                </div>
            </div> 
        )
    }
}

export default Todo;

// toto je jeden komponent a ten si mozem v app zavolat kolko krat chcem 
// ale napr dalsi component komentov by som uz rednereovala vtodo