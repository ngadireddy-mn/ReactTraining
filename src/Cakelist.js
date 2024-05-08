import { Alert, Button, Row } from "antd";
import Cake from "./Cake";
import { useState, useEffect } from "react";
import axios from "axios";
import Loader from "./Loader";

function Cakelist() {
    var cakes= [];
    var [cakes,setCakes] = useState([]);
    useEffect(()=>{getCakeList()},[])
    function getCakeList(){
        axios({
            url:"http://apibyauw.eu-4.evennode.com/api/allcakes",
            method:"get"
        }).then((response)=>{
            setCakes(response.data.data);
        },(error)=>{<Alert message="No Cakes Found"/>})
    } 

    if(cakes.length ==0){
        return (<Loader/>)
    }

    return (
        <>
            <Row>                
                {
                    cakes.map((cake) => {
                        return (
                            <Cake data={cake} />
                        )
                    }
                    )}
            </Row>
        </>
    )

}


export default Cakelist