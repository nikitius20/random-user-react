import React, { useEffect, useState } from 'react';

interface IUser{
   name:{
    first: string,
    second: string
   } 
}
const Main: React.FunctionComponent = () =>{

    const [users,setUsers] = useState<IUser[]>([])

    function fetchUserData(): void{
        fetch('https://randomuser.me/api')
        .then((resp)=>{
            return resp.json()
        })
        .then(body=>{ 
            console.log(body)
            setUsers([...users,...body.results])
        })
        .catch(er=>{
            console.log(er)
        })
    }

    useEffect(()=>{
        fetchUserData();
    },[])


    return (
    <div>
        {users.map(user=>{
            return(
                <p>{user.name.first}</p>
            )
        })}
        <button onClick={fetchUserData}> fatch</button>
    </div>
    )
};

export default Main;