import { Spin } from 'antd';
import { onAuthStateChanged } from 'firebase/auth';
import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from 'react-toastify';
import { auth } from '../firebase/config';
export const  AuthContext = React.createContext()
export default function AuthProvider({children}) {

    const [user, setUser] = React.useState(null)
    const [loading, setLoading] = React.useState(true)
    const nav = useNavigate();

    React.useEffect(()=>{
           const unsubscribe = onAuthStateChanged(auth,user=>{ //lắng nghje cập nhật user
                if(user)
                {    
                     const {displayName, photoURL, email,uid} = user
                     setUser({displayName, photoURL, email,uid})
                     setLoading(false)
                     nav('/home');
                    return;

                }
                setUser({})
                setLoading(false)
                nav('/')
            })

            return ()=>{
                unsubscribe()
            }
           
    },[nav])
   
  return (
    <AuthContext.Provider value={{user}}>
        {loading?<Spin  style={{ position: 'fixed',marginTop:'50vh', inset: 0 }} size='large' />:children}
    </AuthContext.Provider>
  )
}
