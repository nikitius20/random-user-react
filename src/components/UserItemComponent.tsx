import React from 'react';

export interface IUserItemProps {
    fist:string,
    last: string,
    picture: string,
    del: Function
};

const UserItem: React.FunctionComponent<IUserItemProps> = ({fist, last, del, picture}) =>{

    return (
    <div className='user-item'>
        <img src={picture} alt="" />
        <p>First Name: {fist}</p>
        <p>Last Name: {last}</p>
        <button onClick={()=>{del()}}>delete</button>
    </div>)
};

export default UserItem;