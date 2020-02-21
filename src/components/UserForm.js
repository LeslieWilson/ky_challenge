import React, {useState, useEffect} from 'react'


const UserForm = ({editInfo, addNewUser,updateUser})=>{
  const [userInfo, setUserInfo] = useState(
    {name:"",
    email:""}
   )



// the first time edit info will be null, but when I click on button, it wil be an object and useeffect wil be called again without referesning the page

useEffect(()=>{
  if(editInfo !== null){
    setUserInfo(editInfo)
    console.log("editInfo2",editInfo)
  }
}, [editInfo])

  const handleFieldChange = (event)=>{
      setUserInfo({
        ...userInfo,
        [event.currentTarget.name]:
        event.currentTarget.value
      })
     }


// in the handle user submit you have to check if the edit info not null, if its not null you have to pass in a parameter which might be equel to true, and if its null its false. you need to change the addnewuser parameter also, or maybe add a new method to the list.js. in handle user submit, put condition on addnewuser, if edit info is null, call addnewuser. else call update user. make update user function in the list.

// update user is not defined and not passed in as a prop so make these changes to list as i did addnewuser.

assignment, make sure data is updated right away or reappears when i click submit. hint- I need to pass in a prop that tells the list.js that the list of the users has changed.list changed true or false. read that prop inside the use effect. right now useeffect is watching no props. it will watch that prop to see if its changed, if its changed it will reupdate automactially.

  const handleUserSubmit = (event) =>{
    event.preventDefault()
    let payload = {
      name:userInfo.name,
      email:userInfo.email,
      id:userInfo.id
    }
    if(editInfo === null){
    addNewUser(payload)
  }else{
    updateUser(payload)
  }
    setUserInfo({
        name:"",
        email:""
      })
      console.log(userInfo)
    }


  return(
    <div className = "form">

        <form onSubmit = {handleUserSubmit}>
         <label>
           <input
             name="name"
             onChange = {handleFieldChange}
             value= {userInfo.name}
             className="form_field"
             placeholder="add user name"
           />
           <input
             name="email"
             onChange = {handleFieldChange}
             value= {userInfo.email}
             className="form_field"
             placeholder="add user email"
           />
          </label>
          <button type= "submit">submit</button>
        </form>

      </div>
  )
}



export default UserForm
