import axios from "axios"
import { useEffect, useState } from "react"
import Loader from "./Loader";
import TableComp from "./Datatable";
import { Col, Row } from "antd";
import Cake from "./Cake";

export default function Cart() {
    var [cartItems, setCartItems] = useState();
    useEffect(() => {
        axios({
            url: "http://apibyauw.eu-4.evennode.com/api/cakecart",
            method: "get",
            headers: {
                Authorization: localStorage.token
            }
        }).then((response) => {
            setCartItems(response.data.data)
        }, () => { })
    }, [])

    if (!cartItems) {
        return (<Loader />)
    }
    return (
        <Row>
            {
                cartItems.map((cartItem) => {
                    return (
                        <Col>
                            <Cake data={cartItem} />
                        </Col>
                    )
                }
                )}
        </Row>
    )
}