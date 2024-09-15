import PersonalDetails from "@/RequestComponents/PersonalDetails";
import { Form, Input, Select, DatePicker, InputNumber, Button } from "antd";
import React from "react";
import BookingLayout from "./Layout";
import FetchData from "@/RequestComponents/FetchData";
import { tourPurpose } from "@/constants";
const { Option } = Select;

const Tours = () => {
  const { countries } = FetchData();
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
              Itenary:
            </h2>
            <Form.Item label='Tour type' name='TourType'>
              <Select placeholder='Tour Type'>
                <Option value='Independent'>Independent Tour</Option>
                <Option value='Guided'>Guided Tour</Option>
                <Option value='Customised'>Customised Tour</Option>
              </Select>
            </Form.Item>

            <Form.Item label='I would like' name='wouldLike'>
              <Select placeholder='Purpose of Tour'>
                <Option value='receiveOffers'>
                  To receive offers on tours
                </Option>
                <Option value='outOfTownTrip'>
                  To go for out-of-town-trip
                </Option>
                <Option value='exoticPlaces'>To visit Exotic places</Option>
                <Option value='completeTours'>A complete Tour package</Option>
                <Option value='others'>
                  Others (please specify in the additional comments below)
                </Option>
              </Select>
            </Form.Item>

            <Form.Item
              label='Where'
              name='where'
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            >
              <Select placeholder='Select Country of destination'>
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
              label='City'
              name='city'
              rules={[
                {
                  required: true,
                  message: "Please input the city",
                },
              ]}
            >
              <Input placeholder='city' />
            </Form.Item>
            {/* -------------------------------- */}
            <Form.Item
              label='Going for'
              name='tourPurpose'
              rules={[
                {
                  required: true,
                  message: "Please select!",
                },
              ]}
            >
              <Select placeholder='Tour purpose'>
                {tourPurpose.map((tours, index) => {
                  return (
                    <Option key={index} value={tours}>
                      {tours}
                    </Option>
                  );
                })}
              </Select>
            </Form.Item>

            <Form.Item
              label='Start Date'
              name='startDate'
              rules={[
                {
                  required: true,
                  message: "Please Select Date!",
                },
              ]}
            >
              <DatePicker className='w-full' />
            </Form.Item>
            <Form.Item
              label='End Date'
              name='endDate'
              rules={[
                {
                  required: true,
                  message: "Please select Date!",
                },
              ]}
            >
              <DatePicker className='w-full' />
            </Form.Item>

            <Form.Item
              label='Nos. of tourist'
              name='tourists'
              rules={[
                {
                  required: true,
                  message: "Please specify!",
                },
              ]}
            >
              <InputNumber style={{ width: "100%" }} />
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

export default Tours;
