import React, { useState } from 'react';
import { Table, Tag, Button,Form } from "antd";
import { DeleteOutlined, EditOutlined, SaveOutlined } from '@ant-design/icons';
import StatusInput from '../StatusInput';
import { v4 as uuidv4 } from 'uuid';
import StatusStyling from '../StatusStyling'


const AntTable = ({ data, onDeleteRow, form,onFinish}) => {
  const [editedRow, setEditedRow] = useState();
  const [editClicked, setEditClicked] = useState(false);
  const [updateStatus, setUpdateStatus] = useState();

  const onEditRow = (record) => {
    setEditedRow(record.key)
    setEditClicked(true) 
    /*form.setFieldsValue({
      status:record.status,
    })*/}

    /*const onFinish = (values,record) => {
      console.log("Values in AntTable", {values});
      console.log("record in AntTable", record);
      setEditClicked(false);
    };*/

  const columns = [
    {
      title: "Task Title",
      dataIndex: "taskTitle",
      id:uuidv4(),
    },
    {
      title: "Task Description",
      dataIndex: "taskDescription",
      id:uuidv4(),
    },
    {
      title: "Created Time",
      dataIndex: "createdTime",
      id:uuidv4(),
      sorter: (a, b) => new Date(a.createdTime) - new Date(b.createdTime)
    },
    {
      title: "End Date",
      dataIndex: "endDate",
      id:uuidv4(),
    },
    {
      title: "Status",
      dataIndex: "status",
      id:uuidv4(),
      render: (text, record) => ((editClicked === true) && (editedRow === record.key)) ?  
                <Form.Item name = "status">
                  <StatusInput defaultValue={text} onChange={setUpdateStatus} />
                </Form.Item>: <StatusStyling text={text} />,
      filters: [
        { text: "Not Started", value: "Not Started" },
        { text: "In Progress", value: "In Progress" },
        { text: "Completed", value: "Completed" },
        { text: "Cancelled", value: "Cancelled" },
      ],
      onFilter: (value, record) => record.status.includes(value)
  
                
               
    },
    {
      title: "Tags",
      dataIndex: "tags",
      id:uuidv4(),
      render: (tags) => (
        <>
          {tags.map((tag) => (
            <Tag key={tag}>{tag}</Tag>
          ))}
        </>
      ),
    },
    {
      title: "",
      dataIndex: "",
      id:uuidv4(),
      render: (_, record) => (
          <div>
            {((editClicked === true) && (editedRow === record.key)) ? 
              (
                <Button type="danger"
                htmlType="submit"
                onClick={() => {setEditClicked(false);onFinish(form.getFieldsValue(),record,editedRow)}}
                >
                  <SaveOutlined style={{ marginRight: '10px',color: 'green', fontSize: 20 }} />              
                </Button>) : 
              
              (
                <Button type="danger" onClick={() => onEditRow(record)}>
                  <EditOutlined style={{ marginRight: '10px',color: 'brown', fontSize: 20 }} />
                </Button>
              ) 
            }
            
            <Button type="danger" onClick={() => onDeleteRow(record.key)}>
              <DeleteOutlined style={{ color: 'red', fontSize: 20 }} />
            </Button>
          </div>
        ),
    },
  ];

  return <Table dataSource={data} columns={columns} />;
};

export default AntTable;
