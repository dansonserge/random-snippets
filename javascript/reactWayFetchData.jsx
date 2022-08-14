import React, {useState} from 'react'

const User = ()=>{
const [loading, setLoading] = useState=(false)
const [hasError, setHasError] = useState("")
const [users, setUser] = useState([])

const loadData = async()=>{
setLoading(true)
setHasError("")
fetch(apiUrl).then(res=> res.json() )
.then((data)=> {
setUsers(data)
})
.catch((error)=> setHasError(error))
.finally(()=>setLoading(false))
}
return (

<div>
  <button onClick={loadData}> load users </button>
  {loading ? "Loading..." : ""}
  {!!users && users.map((user) => <p> {user.name} </p>)}
  {!!hasError && "Error Fetching Data"}
</div>
) } 