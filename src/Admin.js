import { useEffect } from "react";
import { useNavigate } from "react-router-dom"

export default function Admin(){
    var navigate = useNavigate();
    useEffect(()=>{
        if(!localStorage.token){
            navigate('/login');
        }
    },[])
    return(
        <>
        <h1>Admin Page</h1>
        </>
    )
}