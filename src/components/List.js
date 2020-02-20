import React, {useState, useEffect} from 'react'
import User from "./User"
import {getAllUsers} from "../requests/userRequests"
import UserForm from "./UserForm"

const List = props =>{
  const [list, setList] = useState([])
 console.log("list",list)
  useEffect(()=>{
    getAllUsers()
      .then(body=>{
        console.log("body",body[0].name)
        console.log("body type", typeof body)
        setList([
          ...body
        ])
      })
  },[])

  return(
    <div>
    {list.map((user)=>
     <User name={user.name} email={user.email}/>
    )}
    </div>
  )
}

export default List
