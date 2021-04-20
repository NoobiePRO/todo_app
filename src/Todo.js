import { Button, ListItem, ListItemText } from '@material-ui/core'
import React from 'react'
import { db } from './firebase_config'

export default function TodoListItem({todo, inprogress, id}) {
    function toggleInProgress(){
        db.collection("todos").doc(id).update({
            inprogress: !inprogress,
        });
    }
    function deleteTodo(){
        db.collection("todos").doc(id).delete()
    }
    return (


        <div style={{display:'flex'}}>
            <ListItem style={{fontWeight:"bolder", fontStyle:"italic"}}>
                <ListItemText style={{}} primary={todo} secondary={inprogress?"Inprogress😀":"Completed🤩"}/>
            </ListItem>
            <Button onClick={toggleInProgress} >{inprogress?"Done":"Undone"}</Button>
            <Button onClick={deleteTodo}>X</Button>
        </div>
    )
}
