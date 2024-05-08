import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card, Col, Image, Row, Rate, Button, Space } from "antd";


export default function CakeDetails() {
    var [cakeDetails, setCakeDetails] = useState({});
    var params = useParams();

    function addToCart(cakeDetails, event) {
        var requestJson = {
            name: cakeDetails.name,
            cakeid: cakeDetails.cakeid,
            price: cakeDetails.price,
            image: cakeDetails.image,
            weight: cakeDetails.weight
        }
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api/addcaketocart",
            method: "post",
            data: requestJson,
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => { alert("Added to Cart"); }, (error) => { console.log("Error", error) })
    }

    useEffect(() => {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api/cake/" + params.cakeid,
            method: "get"
        }).then((response) => {
            setCakeDetails(response.data.data);
        }, (error) => { console.log(error); })
    }, [])

    return (
        <Row>
            <Col flex>
                <ol style={{display:"flex",listStyle:"none",marginTop: 70,flexDirection:"column"}}>
                    <li style={{marginRight:10,marginBottom:10}}>
                        <Image style={{ width: 200, height: 200 }} src={cakeDetails.image}></Image>
                    </li>
                    <li>
                        <Image style={{ width: 200, height: 200 }} src={cakeDetails.image}></Image>
                    </li>
                    <li>
                        <Image style={{ width: 200, height: 200 }} src={cakeDetails.image}></Image>
                    </li>                    
                </ol>
            </Col>
            <Col>
                <Card style={{ marginTop: 50, width: 750 }}>
                    {/* <Image src={cakeDetails.image}/> */}
                    <Image style={{ width: 700, height: 700 }} src={cakeDetails.image}></Image>
                </Card>
            </Col>
            <Col flex={3}>
                <Card style={{ marginTop: 50, width: 300 }}>
                    <Space direction="vertical" size="middle" style={{ display: 'flex' }}>
                        <Row>
                            <h3><b>{cakeDetails.name}</b></h3>
                        </Row>
                        <Row>
                            <Rate allowHalf value={cakeDetails.ratings} />
                            <b>({cakeDetails.reviews})</b>
                        </Row>
                        <Row>
                            <b>₹ {cakeDetails.price}</b>
                        </Row>
                        <Row>
                            <b>Weight {cakeDetails.weight} kg</b>
                        </Row>
                        <Card>
                            <Row>
                                <Button onClick={addToCart.bind(null, cakeDetails)} type="primary">Add To Cart</Button>
                            </Row>
                        </Card>
                    </Space>
                </Card>
            </Col>
        </Row>
    )
}