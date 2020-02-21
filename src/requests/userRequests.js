export const getAllUsers = () =>
  fetch("http://localhost:3001/users", {
    method: "GET",
    headers:{
      Accept: "application/json",
      "content-type": "application/json"
    }
  })
  .then(response => {
    if (response.ok){
      return response;
    }else{
      const errorMessage = `${response.status} (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error);
    }
  })
  .then(response => response.json())
  .catch((error)=> {console.error("error in fetch")})


export const postUser = (payload) =>
  fetch("http://localhost:3001/users", {
    method: "POST",
    body: JSON.stringify(payload),
    headers:{
      Accept:"application/json",
      "content-type": "application/json"
    }
  })
  .then(response => {
    if(response.ok){
      return response;
    }else{
      const errorMessage =
      `${response.status}
      (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
  })
  .then(response => response.json())
  .catch((error) =>{console.error("error in fetch!")})


  export const deleteUser = (id) =>
  fetch("http://localhost:3001/users/" + id,{
    method:"DELETE",
    headers:{
      Accept: "application/json",
      "content-type": "application/json"
    }
  })
  .then(response =>{
    if(response.ok){
      return response;
    }else{
      const errorMessage =
      `${response.status}
      (${response.statusText})`
      const error = new Error(errorMessage)
      throw(error)
    }
  })
  .catch((error)=>{console.error("error in fetch!!!")})
