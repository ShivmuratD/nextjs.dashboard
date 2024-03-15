'use client'
import React from 'react';
import { Table } from 'antd';
const columns = [
  {
    title: 'PVT LTD',
    dataIndex: 'pvtltd',
    key: 'pvt ltd',
    width: 100,
    fixed: 'left',
    filters: [
      {
        text: 'Techno',
        value: 'techno',
      },
      {
        text: 'Black Rock',
        value: 'black rock',
      },
    ],
    onFilter: (value, record) => record.name.indexOf(value) === 0,
  },
  {
    title: 'Other',
    children: [
      {
        title: 'month',
        dataIndex: 'month',
        key: 'month',
        width: 150,
       
      },
      {
        title: 'Address',
        children: [
          {
            title: 'Street',
            dataIndex: 'street',
            key: 'street',
            width: 150,
          },
          {
            title: 'sales',
            children: [
              {
                title: 'Building',
                dataIndex: 'building',
                key: 'building',
                width: 100,
              },
              {
                title: 'Invoice No.',
                dataIndex: 'number',
                key: 'number',
                width: 100,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    title: 'Company',
    children: [
      {
        title: 'Company Address',
        dataIndex: 'companyAddress',
        key: 'companyAddress',
        width: 200,
      },
      {
        title: 'Company Name',
        dataIndex: 'companyName',
        key: 'companyName',
      },
    ],
  },
  {
    title: 'profit',
    dataIndex: 'profit',
    key: 'profit',
    width: 80,
    fixed: 'right',
  },
];
const data = [];

for (let i = 0; i < 100; i++) {
    const profit = Math.floor(Math.random() * 1000) + 1; 
    const months = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
    const month = months[Math.floor(Math.random() * months.length)]; 
    const pvtLTD = Math.random() < 0.5 ? 'Techno' : 'Black Rock'; 
 
    data.push({
        key: i,
        name: 'John Brown',
        age: i + 1,
        street: 'Lake Park',
        building: 'C',
        number: 2035,
        companyAddress: 'Lake Street 42',
        companyName: 'SoftLake Co',
        gender: 'M',
        profit: profit,
        month: month,
        pvtltd: pvtLTD
      });
}
const App = () => (
  <Table
    columns={columns}
    dataSource={data}
    bordered
    size="middle"
    scroll={{
      x: 'calc(700px + 50%)',
      y: 240,
    }}
    pagination={false}
  />
);
export default App;