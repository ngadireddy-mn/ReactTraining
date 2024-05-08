import { Button, Input, Card, Row, Col } from 'antd'
import { useState } from 'react';
import TableComp from './Datatable';

function Attendance() {
    var attendee = {};
    var [attendees, setAttendee] = useState([{ name: "Nihitha" }]);

    function updateState(attendees){
        attendees = [...attendees];
        setAttendee(attendees)
    }


    function markAttendance() {
        attendees.push(attendee);
        updateState(attendees);
        
    }

    function markName(event) {
        attendee.name = event.target.value;
    }

    function deleteAttendee(index){
        attendees.splice(index, 1)
        updateState(attendees);
    }

    return (
        <Row gutter={16}>
            <Col colspan={8}>
                <Card>
                    <Input onChange={markName} placeholder='Name'></Input>
                    <Button onClick={markAttendance} type="primary">Mark Attendance</Button>
                </Card>
            </Col>
            <Col colspan={8}>
                <TableComp deleteAttendee={deleteAttendee} Data={attendees} />

            </Col>
        </Row>

    )
}


export default Attendance