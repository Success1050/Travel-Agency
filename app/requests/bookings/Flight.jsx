import React from "react";
import {
  Button,
  Form,
  Input,
  Select,
  Space,
  DatePicker,
  InputNumber,
} from "antd";
import { MinusCircleOutlined, PlusOutlined } from "@ant-design/icons";

import { airlines } from "@/constants";
// import FetchData from "@/RequestComponents/FetchData";
import PersonalDetails from "@/RequestComponents/PersonalDetails";
import BookingLayout from "./Layout";
const { Option } = Select;
const { RangePicker } = DatePicker;

const Flight = () => {
  const [form] = Form.useForm();

  //   };
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
            span: 16,
          }}
          onFinish={onFinish}
          form={form}
        >
          {/* Start of personal details */}
          {/* last name */}
          <PersonalDetails />
          {/*   End of personal details */}

          <div className='mt-10'>
            <h2 className='w-full text-center font-semibold text-sm p-4'>
              Itenary Details:
            </h2>
            <Form.Item
              label='Class'
              name='class'
              rules={[
                {
                  required: true,
                  message: "Please choose your class!",
                },
              ]}
            >
              <Select placeholder='Class'>
                <Option value='economy'>Economy</Option>
                <Option value='premium'>Premium Economy</Option>
                <Option value='business'>Business</Option>
                <Option value='others'>Others</Option>
              </Select>
            </Form.Item>

            <Form.List name='users'>
              {(fields, { add, remove }) => (
                <>
                  {fields.map(({ key, name, ...restField }) => (
                    <Space
                      key={key}
                      style={{
                        display: "flex",
                        marginBottom: 8,
                      }}
                      align='baseline'
                    >
                      <div className='flex flex-col justify-center items-center md:flex-row'>
                        <Form.Item
                          {...restField}
                          name={[name, "from"]}
                          label='From'
                          rules={[
                            {
                              required: true,
                              message: "Where are you departing to",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>
                        <Form.Item
                          {...restField}
                          name={[name, "to"]}
                          label='To'
                          rules={[
                            {
                              required: true,
                              message: "where are you travelling to",
                            },
                          ]}
                        >
                          <Input />
                        </Form.Item>

                        <Form.Item
                          {...restField}
                          name={[name, "travelDate"]}
                          label='Travel Date'
                          rules={[
                            {
                              required: true,
                              message: "Enter travel date",
                            },
                          ]}
                        >
                          <RangePicker placeholder={["Leaving", "Return"]} />
                        </Form.Item>
                        <MinusCircleOutlined onClick={() => remove(name)} />
                      </div>
                    </Space>
                  ))}
                  <Form.Item className='text-center'>
                    <Button
                      className='md:ml-[50%] ml-0 inline-block'
                      type='dashed'
                      onClick={() => add()}
                      block
                      icon={<PlusOutlined />}
                    >
                      Add Flight Details
                    </Button>
                  </Form.Item>
                </>
              )}
            </Form.List>

            <Form.Item
              label='Airlines'
              rules={[
                {
                  required: true,
                  message: "Please choose Airline!",
                },
              ]}
            >
              <Select placeholder='Airlines'>
                {airlines
                  .sort((a, b) => {
                    if (a === "Other") return 1;
                    if (b === "Other") return -1;
                    return a.localeCompare(b);
                  })
                  .map((airline, index) => {
                    return (
                      <Option key={index} value={airline}>
                        {airline}
                      </Option>
                    );
                  })}
              </Select>
            </Form.Item>

            <h2 className='text-center mb-4'>Number of passengers</h2>
            <div className='flex flex-col justify-center items-center md:flex-row gap-4'>
              <Form.Item
                name='children'
                label='Children(2-11)'
                labelCol={{ span: "13" }}
                rules={[
                  {
                    required: true,
                    message: "Enter number of Children",
                  },
                  {
                    type: "number",
                    message: "Enter a valid number",
                  },
                ]}
              >
                <InputNumber />
              </Form.Item>

              <Form.Item
                name='adult'
                label='Adult(12+)'
                labelCol={{ span: "12" }}
                // wrapperCol={{ span: "14" }}
                rules={[
                  {
                    required: true,
                    message: "Enter number of adults",
                  },
                  {
                    type: "number",
                    message: "Enter a valid number",
                  },
                ]}
              >
                {/* <h2>Children(2 - 11)</h2> */}
                <InputNumber />
              </Form.Item>

              <Form.Item
                name='infant'
                label='infant(under 2)'
                labelCol={{ span: "14" }}
                rules={[
                  {
                    required: true,
                    message: "Enter number of Infants",
                  },
                  {
                    type: "number",
                    message: "Enter a valid number",
                  },
                ]}
              >
                {/* <h2>Infants(Under 2)</h2> */}
                <InputNumber className='w-full inline-block' />
              </Form.Item>
            </div>

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

            {/* button */}
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
          {/* class */}
        </Form>
      </BookingLayout>
    </>
  );
};

export default Flight;
