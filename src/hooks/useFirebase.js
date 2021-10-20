import { useEffect, useState } from 'react';
import initializeAuthentication from '../component/Firebase/Firebase.init';
import {getAuth,GoogleAuthProvider,signInWithPopup,signOut,signInWithEmailAndPassword,onAuthStateChanged,createUserWithEmailAndPassword} from "firebase/auth"
initializeAuthentication()
const googleProvider=new GoogleAuthProvider()
const auth=getAuth()
const useFirebase = () => {
const [user,setUser]=useState({})
const [error,setError]=useState('')
const [isLoading,setIsLoading]=useState(true)
const [email,setEmail]=useState('')
const [password,setPassword]=useState('')
const signInGoogle=()=>{
    setIsLoading(true)
   return signInWithPopup(auth,googleProvider)
    .then(result=>{
        setUser(result.user)
    })
    .catch(error=>{
        setError(error.message)
    })
    .finally(()=>setIsLoading(false))
}
const inputEmail=e=>{
    setEmail(e.target.value)
}
const inputPassword=e=>{
    setPassword(e.target.value)
}
const signInEmail=()=>{
    setIsLoading(true)
   return signInWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user)
    })
    .catch(error=>{
        setError(error.message)
    })
    .finally(()=>setIsLoading(false))
}
const signUpEmail=()=>{
  return  createUserWithEmailAndPassword(auth,email,password)
    .then(result=>{
        setUser(result.user)
    })
}
const logOut=()=>{
    setIsLoading(true)
    signOut(auth)
    .then(()=>{
        setUser({})
    })
    .finally(()=>setIsLoading(false))
}
useEffect(()=>{
    onAuthStateChanged(auth,user=>{
        if(user){
            setUser(user)
        }
        setIsLoading(false)
    })
},[])
    return {
        user,
        signInGoogle,
        error,
        inputEmail,
        inputPassword,
        signInEmail,
        logOut,
        signUpEmail,
isLoading
    }
};

export default useFirebase;