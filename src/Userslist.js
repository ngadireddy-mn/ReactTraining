import { Menu, Card, Col, Row } from 'antd'
import TableComp from './Datatable';

function Userslist() {
    var users = [{ name: "Nihitha", location: "Hyderabad", role: "Trainee" }, 
    { name: "Teja", team: "Platform", role: "Architect" }, 
    { name: "Vijay", role: "Architect", pincode:"500084"}];
    // return (
    //     <><Row gutter={16}>
    //         {
    //             users.map((user) => {
    //                 var keys = Object.keys(user);
    //                 return (
    //                     <Col span={8}><Card hoverable style={{ width: 250 }}>
    //                         {
    //                             keys.map((each) => {
    //                                 return (
    //                                     <div>
    //                                         <Card hoverable style={{ width:200,background: 'lightblue' }}>{each} : {user[each]}</Card>
    //                                     </div>
    //                                 )
    //                             })
    //                         }
    //                     </Card>
    //                     </Col>
    //                 )
    //             })
    //         }
    //     </Row>
    //     </>
    // )
    return (<TableComp Data={users}></TableComp>)
}

export default Userslist