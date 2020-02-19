import React, {useState} from 'react'
import User from "./User"
// import db from './server/db.json'

const List = props =>{
  const [list, setList] = useState([{name:"hello"}, {name:"lesllie"}])

let listItems = list.map((user)=>{
    return(
      <User
      name = {user.name}
      />
    // <ul>{listItems}</ul>

 )
})

return(
  <div>
  {listItems}
  </div>
)
}




export default List
