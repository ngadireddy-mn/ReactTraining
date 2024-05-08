import { DeleteOutlined } from "@ant-design/icons";
import { Card, Image, Badge, Button } from "antd";
import { Link } from "react-router-dom";


function Cake(data) {
    function deleteFromCart(){

    }
    // var data = {name:"Truffle Cake", Price:650,image:"truffle.png"}
    if(data.data.quantity){
        return(<>
            <Card style={{ marginLeft: 40 }}>
                <Link to={"/cake/"+data.data.cakeid}><Image height={420} src={data.data.image} width={420}></Image></Link>
                <Card>
                    <p>{data.data.name}</p>
                    <p>Quantity : {data.data.quantity}</p>
                    <p>Rs. {data.data.price}</p>
                </Card>
                <Card>
                    <Button onclick={deleteFromCart} type="primary" danger><DeleteOutlined/></Button>
                </Card>
            </Card>  
        </>)
    }
    return (
        
            <Card style={{ marginLeft: 40 }}>
                <Link to={"/cake/"+data.data.cakeid}><Image height={420} src={data.data.image} width={420}></Image></Link>
                <Card>
                    <p>{data.data.name}</p>
                    <p>{data.data.quantity}</p>
                    <p>{data.data.price}</p>
                </Card>
            </Card>        

    )

}


export default Cake