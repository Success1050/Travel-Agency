import React from "react";
import axios from "axios";
import { Button, Form, Input, Select, Space } from "antd";
import { useState, useEffect } from "react";
const { Option } = Select;
// const layout = {
//   labelCol: {
//     span: 8,
//   },
//   wrapperCol: {
//     span: 16,
//   },
// };
// const tailLayout = {
//   wrapperCol: {
//     offset: 8,
//     span: 16,
//   },
// };

const Flight = () => {
  const [form] = Form.useForm();

  const [countries, setCountries] = useState([]);
  const [records, setRecords] = useState([]);
  console.log(countries);

  useEffect(() => {
    const fetchCountries = async () => {
      try {
        const response = await axios("https://restcountries.com/v3.1/all");
        setCountries(response.data);
        setRecords(response.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchCountries();
  }, []);

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        {records.map((record) => {
          console.log(record);

          return (
            <Option key={record.cca2}>
              <p>
                {record.idd.root
                  ? `${record.idd.root}${record.idd.suffixes[0]}`
                  : "N/A"}
              </p>
            </Option>
          );
        })}
      </Select>
    </Form.Item>
  );

  //   };
  //   const onFinish = (values) => {
  //     console.log(values);
  //   };
  //   const onReset = () => {
  //     form.resetFields();
  //   };
  //   const onFill = () => {
  //     form.setFieldsValue({
  //       note: "Hello world!",
  //       gender: "male",
  //     });
  //   };

  return (
    <>
      <div className='App  w-[70%] mx-auto'>
        <div className='App-header'>
          <Form
            labelCol={{
              span: 8,
            }}
            wrapperCol={{
              span: 16,
            }}
          >
            {/* last name */}
            <Form.Item label='Last name' name='lastName'>
              <Input placeholder='last name' />
            </Form.Item>
            {/* first name */}
            <Form.Item label='First name' name='firstName'>
              <Input placeholder='first name' />
            </Form.Item>
            {/* nationality */}
            <Form.Item label='Nationality' name='nationality'>
              <Select placeholder='Select your country'>
                {countries
                  .sort((a, b) => a.name.common.localeCompare(b.name.common))
                  .map((country) => {
                    return (
                      <Option key={country.cca2} value={country.name.common}>
                        {country.name.common}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>
            <Form.Item label='email' name='Email'>
              <Input placeholder='Email' />
            </Form.Item>
            {/* phone number */}
            <Form.Item label='Mobile No' name='mobileNumber'>
              <Input
                style={{
                  width: "100%",
                }}
                addonBefore={prefixSelector}
                placeholder='Mobile number'
              />
            </Form.Item>
            {/* class */}
            <Form.Item label='Class' name='class'>
              <Select placeholder='Class'>
                <Option value='economy'>Economy</Option>
                <Option value='premium'>Premium Economy</Option>
                <Option value='business'>Business</Option>
                <Option value='others'>Others</Option>
              </Select>
            </Form.Item>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Flight;
