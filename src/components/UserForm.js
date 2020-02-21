import React, {useState, useEffect} from 'react'


const UserForm = (props)=>{
  const [userInfo, setUserInfo] = useState(
    {name:"",
    email:""}
   )

  const handleFieldChange = (event)=>{
      setUserInfo({
        ...userInfo,
        [event.currentTarget.name]:
        event.currentTarget.value
      })
     }

  const handleUserSubmit = (event) =>{
    event.preventDefault()
    let payload = {
      name:userInfo.name,
      email:userInfo.email
    }
    props.addNewUser(payload)
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
