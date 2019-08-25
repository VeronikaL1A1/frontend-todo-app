import React from "react";
import Todo from '../components/Todo.js';
import Masonry from 'react-masonry-component';

class TodoList extends React.Component {
    render () {
        
        const todos= this.props.todos;
        return (
       <Masonry className="todos" >
            {todos.map((todoData)=>
                {const handleFinishTodo = () => 
                    {todoData.finished = true;
                        this.props.onEdit(todoData);
                    }
                    const handleRemoveTodo =()=> {
                        this.props.onRemove(todoData);
                    };
                    return (
                        <Todo todo={todoData} key ={todoData.id} onFinish = {handleFinishTodo} onRemove ={handleRemoveTodo}/>
                    );
                })
    
            }
       </Masonry>
       );
    }
}  


export default TodoList;