import React from 'react'


const User = props =>{
  return(
<div>
 <li>{props.name} {props.email}</li>
 <button onClick = {props.handleDeleteUser}>delete</button>
 <button onClick={props.handleEditUser}>edit</button>
</div>
  )
}

export default User
