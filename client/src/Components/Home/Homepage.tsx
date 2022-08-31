import React, {useContext} from 'react';
import { myContext } from '../../context';
import { IUser } from '../../types/mainTypes';

const Homepage = () => {
    const context = useContext(myContext) as IUser;
    console.log(context);
  return (
    <div>
        {
        context ? <h1>Welcome back {context.username}</h1>:<h1>Welcome to home</h1>
        }       
    </div>
  )
}

export default Homepage