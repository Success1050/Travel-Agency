import React from "react";
import { Form, Input, Select } from "antd";
import FetchData from "./FetchData";

const PersonalDetails = () => {
  const { countries } = FetchData();
  const { records } = FetchData();

  const prefixSelector = (
    <Form.Item name='prefix' noStyle>
      <Select
        style={{
          width: 70,
        }}
      >
        {records.map((record) => {
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
  return (
    <>
      <div>
        <h2 className='w-full text-center text-sm font-semibold p-4'>
          Personal Details:
        </h2>
        <Form.Item
          label='Last name'
          name='lastName'
          rules={[
            {
              required: true,
              message: "Please input your Last name!",
            },
          ]}
        >
          <Input placeholder='last name' />
        </Form.Item>
        {/* other names */}
        <Form.Item
          label='Othernames (Optional)'
          name='otherNames'
          rules={[
            {
              message: "Please input your Other names!",
            },
          ]}
        >
          <Input placeholder='Othernames' />
        </Form.Item>
        {/* first name */}
        <Form.Item
          label='First name'
          name='firstName'
          rules={[
            {
              required: true,
              message: "Please input your First name!",
            },
          ]}
        >
          <Input placeholder='first name' />
        </Form.Item>
        {/* nationality */}
        <Form.Item
          label='Nationality'
          name='nationality'
          rules={[
            {
              required: true,
              message: "Please select your Country",
            },
          ]}
        >
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
        <Form.Item
          label='email'
          name='Email'
          rules={[
            {
              type: "email",
              message: "Please enter a valid email",
            },
            {
              required: "true",
              message: "Please enter your email",
            },
          ]}
        >
          <Input placeholder='Email' />
        </Form.Item>
        {/* phone number */}
        <Form.Item
          label='Mobile No'
          name='mobileNumber'
          rules={[
            {
              required: true,
              message: "Please input your phonenumber",
            },
          ]}
        >
          <Input
            style={{
              width: "100%",
            }}
            addonBefore={prefixSelector}
            placeholder='Mobile number'
          />
        </Form.Item>
      </div>
    </>
  );
};

export default PersonalDetails;
