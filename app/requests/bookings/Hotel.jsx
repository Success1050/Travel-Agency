import React from "react";
import axios from "axios";
import { useState, useEffect } from "react";
import { FaArrowDown } from "react-icons/fa";
import BookingLayout from "./Layout";
import PersonalDetails from "@/RequestComponents/PersonalDetails";
import { Form, Select, DatePicker, InputNumber, Input, Button } from "antd";
const { Option } = Select;

const Hotel = () => {
  const [form] = Form.useForm();
  const onFinish = (values) => {
    console.log(values);
    form.resetFields();
  };
  return (
    <>
      <BookingLayout>
        <Form
          labelCol={{
            span: 8,
          }}
          wrapperCol={{
            span: 14,
          }}
          onFinish={onFinish}
          form={form}
        >
          <PersonalDetails />
          <div className='mt-10'>
            <h2 className='w-full text-center font-semibold text-sm p-4'>
              Reservations:
            </h2>
            <Form.Item
              label='Hotel'
              name='hotel'
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            >
              <Select placeholder='Hotels'>
                <Option value='3 Star'>3 Star</Option>
                <Option value='4 Star'>4 Star</Option>
                <Option value='5 Star'>5 Star</Option>
                <Option value='others'>
                  Others(please specify in message box below)
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              label='Check-in Date'
              name='checkin'
              rules={[
                {
                  required: true,
                  message: "Please Date!",
                },
              ]}
            >
              <DatePicker className='w-full' />
            </Form.Item>
            <Form.Item
              label='Check-out Date'
              name='checkout'
              rules={[
                {
                  required: true,
                  message: "Please Date!",
                },
              ]}
            >
              <DatePicker className='w-full' />
            </Form.Item>

            <Form.Item
              label='Nos. of Adults (Age 12+)'
              name='adult'
              rules={[
                {
                  required: true,
                  message: "Please age!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label='Nos. of Children (Age 2 - 11)'
              name='children'
              rules={[
                {
                  required: true,
                  message: "Please age!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label='Nos. of infants (Age under 2)'
              name='infant'
              rules={[
                {
                  required: true,
                  message: "Please age!",
                },
              ]}
            >
              <InputNumber />
            </Form.Item>
            <Form.Item
              label='TextArea'
              name='TextArea'
              rules={[
                {
                  required: true,
                  message: "Please input!",
                },
              ]}
            >
              <Input.TextArea />
            </Form.Item>

            <Form.Item
              wrapperCol={{
                span: 24,
              }}
            >
              <Button type='primary' className='mb-4' block htmlType='submit'>
                Submit
              </Button>
            </Form.Item>
          </div>
        </Form>
      </BookingLayout>
    </>
  );
};

export default Hotel;
