import React, {useState, useEffect} from 'react'
import User from "./User"
import {getAllUsers} from "../requests/userRequests"


const List = props =>{
  const [list, setList] = useState([])
 console.log("list",list)
  useEffect(()=>{
    getAllUsers()
      .then(body=>{
        console.log("body",body)
        console.log("body type", typeof body)
        setList([
          {
            "id": "1",
            "name": "Mayra Reichel",
            "email": "Jeff7@gmail.com"
          },
          {
            "id": "2",
            "name": "Raymundo Gaylord",
            "email": "Margie.OConnell@hotmail.com"
          },
          {
            "id": "3",
            "name": "Georgette O'Connell",
            "email": "Rosanna61@gmail.com"
          }
        ])
      })
  },[])

  if (!list){
    return null
  }

  return(
    <div>
    {list.map((user)=>
     <User name={user.name} email={user.email}/>
    )}
    </div>
  )
}

export default List
