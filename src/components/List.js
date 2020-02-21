import React, {useState, useEffect} from 'react'
import User from "./User"
import UserForm from "./UserForm"
import {deleteUser, editUserFetch, postUser,getAllUsers} from "../requests/userRequests"


const List = props =>{
  const [editInfo, setEditInfo] = useState(null)
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

let updateUser = (user) =>{
  const tempList = [...list]
  console.log("useredit1",user)
  editUserFetch(user)
  .then(body=>{
    console.log("updateuserbody",body)
  })
}

let editUser = (user)=>{
  setEditInfo(user)
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
     handleEditUser = { () => {
       editUser(user)
     }}
     />
    )
  })

  return(
    <div>
    {listOfUsers}
    <UserForm
    addNewUser = {addNewUser}
    editInfo = {editInfo}
    updateUser = {updateUser}/>
    </div>
  )
}

export default List
