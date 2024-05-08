import { Button, Card, Input } from "antd"
import axios from "axios"
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom"

function Login() {
    var email,password;
    var navigate= useNavigate();
    useEffect(()=>{
        if(localStorage.token){
            navigate("/home");
        }
    },[])
    
    function handleEmail(event){
        email =  event.target.value;
    }
    function handlePassword(event){
        password =  event.target.value;
    }
    function userLogin(){        
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api/login",
            method:"post",
            data:{"email":email,"password":password}
        }).then((response)=>{console.log("Login",response.data);
            localStorage.token = response.data.token;
            // window.location.assign("/Home")},(error)=>{console.log("Error",error)
            navigate("/home")

            })
    }
    
    return (        
        <Card>
            <Input onChange={handleEmail} placeholder="Email"></Input>
            <Input onChange={handlePassword} type="password" placeholder="password" />            
            <Button onClick={userLogin} type="primary">Login</Button>            
            <Link to="/Signup">
            <a>New User?  Signup</a>
            </Link>
            
        </Card>
    )
}

export default Login