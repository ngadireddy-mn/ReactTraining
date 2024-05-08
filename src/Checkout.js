import { Col, Row } from "antd";
import { Link, Outlet } from "react-router-dom";

export default function Checkout(){
    return(<>
    <h1>Checkout Component</h1>
    <Row gutter={16}>
        <Col colspan={8}>
        <Link to="/checkout/address"><div>Address</div></Link>
        <div>Payment</div>
        <div>Summary</div>
        
        </Col>
        <Col span={18}>
        <Outlet></Outlet>
        </Col>
    </Row>
    </>)
}