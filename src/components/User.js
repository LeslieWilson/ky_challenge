import React from 'react'


const User = props =>{
  return(
<div>
 <button onClick = {props.handleDeleteUser}>delete</button>
 <button onClick={props.handleEditUser}>edit</button>
 <li>{props.name} {props.email}</li>
</div>
  )
}

export default User
