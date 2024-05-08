import { Table, Space, Button, Image } from "antd";


function TableComp({ Data, deleteAttendee }) {

    var allKeys = new Set();
    Data.forEach((element) => {
        var currentKeys = Object.keys(element);
        currentKeys.forEach(key => {
            allKeys.add(key);
        });

    })

    var columns = Array.from(allKeys).map((each) => {
        if ('Image' === each.toUpperCase()) {
            return {
                title: each.toUpperCase(),
                dataIndex: each,
                render: (_, Data, idx) => (
                    <Space size="middle">
                        <Image src="{image}"/>
                    </Space>
                ),
            }
        } else {
            return {
                title: each.toUpperCase(),
                dataIndex: each,
                key:each               
            }
        }

    })


    var actionColumn = {
        title: 'Action',
        key: 'action',
        render: (_, Data, idx) => (
            <Space size="middle">
                <Button onClick={() => deleteAttendee(idx)} type="primary" danger>Delete</Button>
            </Space>
        ),
    };
    columns.push(actionColumn)

    return (

        <Table dataSource={Data} columns={columns} />
    )
}


export default TableComp