import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, inprogress, id}) {
    function toggleInProgress(){
        db.collection("todoList").doc(id).update({
            inprogress: !inprogress,
        });
    }
    function deleteTodo(){
        db.collection("todoList").doc(id).delete()
    }
    return (


        <div style={{display:'flex'}}>
            <ListItem >
                <ListItemText style={{}} primary={todo} secondary={inprogress?"Inprogress😀":"Completed🤩"}/>
            </ListItem>
            <Button onClick={toggleInProgress} >{inprogress?"Done":"Undone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
