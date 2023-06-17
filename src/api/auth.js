//it is to save data to database
import { json } from "react-router-dom"
export const SaveUserFromSite =user=>{
        const currentUser={
            email: user.email,
        }

        fetch(`http://localhost:5000/users/${user?.email}`,{
            method:'PUT',
            headers:{
                'content-type':"application/json"
            }, //the data is being sent in  json format
            body: JSON.stringify(currentUser)
        })
    .then(res=>res.json())
    .then(data=>console.log(data))
    }