import React, { useEffect, useState } from 'react';
import UserItem from './UserItemComponent';

interface IUser{
    id:{
        value:string
    }
   name:{
    first: string,
    last: string
   },
   picture:{
    medium:string,
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

    function deleteUser(userIndex:number){
        console.log(users)
        setUsers(users.filter((user,index) => {
            if(userIndex !== index){
                return user
            }
        }))
    }

    useEffect(()=>{
        fetchUserData();
    },[])


    return (
    <div>
        {users.map((user,index)=>{
            return(
                <UserItem 
                    key={user.id.value}
                    fist={user.name.first} 
                    last={user.name.last} 
                    picture={user.picture.medium} 
                    del={()=>{
                        deleteUser(index)
                    }}/>
            )
        })}
        <button onClick={fetchUserData}> fatch</button>
    </div>
    )
};

export default Main;