import React, {createContext, useState, useEffect} from "react";
import axios from 'axios';


export const myContext = createContext({});

export const MyAppProvider = (props: any) => {
    const [userObject, setUserObject] = useState<any>([]);
    useEffect(() => {
        axios.get("http://localhost:5000/getuser", {withCredentials: true}).then(res => {
            if(res.data) {
                setUserObject(res.data);
            }
        })
    }, []);
    return <myContext.Provider value={userObject}>{props.children}</myContext.Provider>
}