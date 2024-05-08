import { Input,Button, Card, Alert } from "antd";
import Password from "antd/es/input/Password";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";


function Signup(){
    var name,email,password;
    var user = {};
    var navigate = useNavigate();
    var [errors,setError] = useState(null);

    function handleEmail(event){
        email = event.target.value
        user["email"] = email;

    }
    function handleName(event){
        name=event.target.value;
        user["name"] = name;
    }
    function handlePassword(event){
        password = event.target.value;
        user["password"] = password;
    }
    function createAccount(event){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api/register",
            method:"post",
            data:user
        }).then((response)=>{
            console.log("Response", response)            
        },(error)=>{
            console.log("Error",error)
        })
    }
    return(
        <Card style={{width:250}}>
            {errors && <Alert danger message={errors}/>}
        <Input placeholder="Name" onChange={handleName}/>
        <Input placeholder="Email" onChange={handleEmail}/>
        <Input type="password" placeholder="password" onChange={handlePassword}/>        
        <Button type="primary" onClick={createAccount}>Create Account</Button>        
        </Card>
    )
}

export default Signup