import React from 'react';
import moment from "moment";
import {HashRouter,Switch,Route} from 'react-router-dom';
import findIndex from "lodash/findIndex";
import axios from "./axiosInstance.js"

// import Todo from './components/Todo.js';
import AddTodo from "./views/AddTodo.js";
import TodoList from './views/TodoList'; 
import Navbar from './components/Nav';

// vsade mazeme .json lebo...

class App extends React.Component {
  state = {
    todos:[
      // {title:"Nakupny zoznam",
      // createdAt:"23.5.2017",
      //  finished:true,
      // text:``},

      //  {title:"Kup REID",
      //  createdAt:"23.7.2019",
      //  finished:false,
      // text:`""`},

      //  {title:"Uprac byt",
      //  createdAt:"03.4.2013",
      //  finished:true,
      // text:`"hula"`}

    ]
  };



  // async componentDidMount () {
  //   const todos = await axios.get('/todos.json');
  //  const result=[];
  //  if(todos.data) Object.keys(todos.data).forEach(key=>{
  //    const todo=todos.data[key];
  //    todo.id=key;
  //    result.push(todo)
  //  });
  //  this.setState({
  //    todos:result
  //  });
  // }

   async componentDidMount () {
    const result = await axios.get('/todos');
  
   this.setState({
     todos:result.data
   });
  }

  addTodo = async todo => {
    const newTodo ={
      ...todo,
      createdAt: moment().format ('DD.MM.YYYY'),
      finished:false
      // natvrdo urcujeme ze ten novy prvok v liste bude unfinished logicky
    };
    const result= await axios.post('/todos',newTodo);
    newTodo.id=result.data;
    // mazeme name za data ?

    this.setState(prevState=>{return {todos:prevState.todos.concat(newTodo)}});
    
  };
 
editTodo= (todo) => {
  const index=findIndex(this.state.todos,{id: todo.id});
  const todos = [...this.state.todos];
  todos.splice(index,1,todo) 
  this.setState({todos:todos})
};


removeTodo = (todo) => {
  const index = findIndex(this.state.todos,{id:todo.id})
  const newTodos= [...this.state.todos];
  newTodos.splice(index,1);
  this.setState({todos: newTodos})
};

  render () {
    const {todos}= this.state;

  // return (
  //   <div className="App p-3">
      
  //     <Todo title="Nakupny zoznam" createdAt="23.5.2017" finished={true}>
  //       <ul>
  //         <li>Cokolada</li>
  //         <li>Pralinky</li>
  //         <li>Vino</li>
  //      </ul>
  //     </Todo>
  //     <Todo title="Uprac byt" createdAt="5.7.2019" finished={false}/>
  //   </div>
  // )
    return (
    
      <HashRouter>
        <div className="App">
        <Navbar/>
        <div className="p-3">
        <Switch>
          <Route path="/"
          exact render ={()=>(<TodoList todos={todos} onEdit={this.editTodo} onRemove={this.removeTodo}/>)} />
          
          <Route path="/add" exact render= {()=><AddTodo onAdd={this.addTodo}/>} />
        </Switch>
        </div>
        </div>
      </HashRouter>
     
      
       /* addTodo je funkcia 
      {todos.map((todo,index) => {
        const handleFinishTodo = () =>{
          todo.finished = true;
          this.editTodo(todo,index);
        };  */

      /* //   const handleRemoveTodo = () =>this.removeTodo(index);
      //    return (
      //     <Todo todo={todo} key={todo.id} onFinish={handleFinishTodo} onRemove= {handleRemoveTodo}/>
      //   )
      // })} */
    
  );
};
}

export default App;
