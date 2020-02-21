import React, {useState, useEffect} from 'react'
import User from "./User"
import {getAllUsers} from "../requests/userRequests"
import {postUser} from "../requests/userRequests"
import UserForm from "./UserForm"
import {deleteUser} from "../requests/userRequests"

const List = props =>{
  const [list, setList] = useState([])
 console.log("list2",list)
  useEffect(()=>{
    getAllUsers()
      .then(body=>{
        setList([
          ...body
        ])
      })
  },[])

let addNewUser=(payload)=>{
  const tempList = [...list]
  postUser(payload)
  .then(body=>{
    tempList.push(body)
    setList(tempList)
  })
}

let listOfUsers = list.map((user,i)=>{
  function handleDeleteUser(){
    const tempList = [...list]
    deleteUser(user.id)
    .then(body=>{
      console.log("bodyyy",body)
      tempList.splice(i,1)
      setList(tempList)
    })
  }
  return(
     <User
     name={user.name}
     email={user.email}
     handleDeleteUser ={handleDeleteUser}
     />
    )
  })

  return(
    <div>
    {listOfUsers}
    <UserForm
    addNewUser = {addNewUser}/>
    </div>
  )
}

export default List
