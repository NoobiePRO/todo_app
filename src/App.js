import './App.css';
import TextField from '@material-ui/core/TextField';
import { useEffect, useState } from "react";
import { Button } from '@material-ui/core';
import { db } from './firebase_config';
import firebase from "firebase";
import TodoListItem from './Todo';

function App() {
  const [todos,setTodos] = useState([]);
  const [todo,setTodo] = useState("");

  useEffect(() => {
    getTodo();
  }, []);

  function getTodo() {
    db.collection("todos").onSnapshot(function (querySnapshot){
      setTodos(
        querySnapshot.docs.map((doc)=>({
        id: doc.id,
        todo: doc.data().todo,
        inprogress: doc.data().inprogress,
      }))   
    );
       
    });
  }

  function appTodo(e){ 
    e.preventDefault();
    db.collection("todos").add({
      inprogress: true,
      time: firebase.firestore.FieldValue.serverTimestamp(),
      todo: todo,
    });

    setTodo("")
  }
  return (
    <div className="App" style={{display:'flex', justifyContent:'center', alignItems: 'center', flexDirection:'column'}}>
    <div>  
      <h1 style={{marginTop:"50px"}}>Daily To-Do List: [Sarthak Sharma]</h1>
      <form>
      <TextField
        id="standard-basic" 
        value={todo} 
        onChange={(e) => setTodo(e.target.value)}  
        label="Write a TODO" 
        style={{maxWidth:'500px', width:'90vw' }}
      />
      <Button type="submit" className="button" onClick={appTodo} variant="contained" style={{display:"none"}}>Submit</Button>
      </form>
      <div style={{maxWidth:'500px', width:'90vw', marginTop:"24px" }}>
      {todos.map((todo) => (
        <TodoListItem todo={todo.todo} inprogress={todo.inprogress} id={todo.id}></TodoListItem>
       ))}
      </div>
      
    </div>
    </div>
  );
}

export default App;
