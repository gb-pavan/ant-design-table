import React, { useState } from "react";
import InputFields from "./components/InputFields";
import AntTable from "./components/AntTable";
import {Form } from 'antd';


const App = () => {
  const [data, setData] = useState([
    {
      key: 1,
      taskTitle: 'Task 1',
      taskDescription: 'Description for Task 1',
      createdTime: '2022-04-08 12:00:00',
      endDate: '2022-04-15 12:00:00',
      status: 'In Progress',
      tags: ['tag1', 'tag2'],
    },
    {
      key: 2,
      taskTitle: 'Task 2',
      taskDescription: 'Description for Task 2',
      createdTime: '2022-04-08 13:00:00',
      endDate: '2022-04-16 12:00:00',
      status: 'Pending',
      tags: ['tag2', 'tag3'],
    },
    {
      key: 3,
      taskTitle: 'Task 3',
      taskDescription: 'Description for Task 3',
      createdTime: '2022-04-08 14:00:00',
      endDate: '2022-04-17 12:00:00',
      status: 'Completed',
      tags: ['tag3', 'tag4'],
    },
    {
      key: 4,
      taskTitle: "Do grocery shopping",
      taskDescription: "Buy fruits, vegetables, milk and bread",
      createdTime: "2023-04-08 12:00:00",
      endDate: "2023-04-10",
      status: "In Progress",
      tags: ["shopping", "grocery"]
    },
    {
      key: 5,
      taskTitle: "Attend meeting",
      taskDescription: "Attend weekly team meeting",
      createdTime: "2023-04-08 10:00:00",
      endDate: "2023-04-08",
      status: "Completed",
      tags: ["meeting", "work"]
    },
    {
      key: 6,
      taskTitle: "Go for a run",
      taskDescription: "Run for 5km in the park",
      createdTime: "2023-04-08 06:00:00",
      endDate: "2023-04-08",
      status: "Not Started",
      tags: ["exercise", "running"]
    }
    
   
  ]
  );
  const [form] = Form.useForm();
  

  const handleAddRow = (newRow) => {
    setData([...data, newRow]);
  };

  const handleDeleteRow = (key) => {
    setData(data.filter((row) => row.key !== key));
  };

  const onFinish = (values,record,editedRow) => {
    console.log('editedRow submitted with record:',editedRow );
    console.log('Form submitted with values:', {values});
    console.log('taskTitle submitted with record:',record.taskTitle );
    const index = data.findIndex((row) => row.key === editedRow);
    const updatedRow = { ...data[index], ...values };
    const updatedData = [...data];
    updatedData[index] = updatedRow;
    setData(updatedData);
    

    
    /*handleAddRow({taskTitle:record.taskTitle,
      taskDescription: record.taskDescription,
      createdTime:record.createdTime,
      endDate:record.endDate,
      tags:record.tags,
    ...values})*/
    // Perform any actions with form data here
  };

   

  return (
    <>
      <InputFields onAddRow={handleAddRow} numOfTasks={data.length} />
      <Form form={form} >        
        <AntTable data={data} onDeleteRow={handleDeleteRow} form={form} onFinish={onFinish} />
      </Form>     
    </>
  );
};

export default App;
