import React,{Component} from 'react';

class Todo extends Component{
    render() {
        return (
            <div className="Todo">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">
                            Nakupny zoznam
                        </h5>
                        <h6 className="card-subtitle mb-2 text-muted">
                            Vytvorene dna 30.7.2019
                        </h6>
                        <p className="card-text">
                            <ul>
                                <li>Cokolada</li>
                                <li>Pralinky</li>
                                <li>Vino</li>
                            </ul>
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

export default Todo;

// toto je jeden komponent a ten si mozem v app zavolat kolko krat chcem 
// ale napr dalsi component komentov by som uz rednereovala vtodo