import React from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {StyledForm, StyledBackButton} from '../SharedStyledComponents';
import {Link} from 'react-router-dom';

export const CalorieInput: React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // TODO: Track calorie input event here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledForm
      name="calorieInput"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
    >
      <Link to='home'>
        <StyledBackButton />
      </Link>

      <Typography.Title level={2}>Input Calories</Typography.Title>
      <Form.Item
        label="Breakfast"
        name="breakfast"
        rules={[{
          required: true,
          message: 'Please input calories for breakfast.',
        }]}
      >
        <Input placeholder='Calories' />
      </Form.Item>
      <Form.Item
        label="Lunch"
        name="lunch"
        rules={[{required: true, message: 'Please input calories for lunch.'}]}
      >
        <Input placeholder='Calories' />
      </Form.Item>
      <Form.Item
        label="Dinner"
        name="dinner"
        rules={[{required: true, message: 'Please input calories for dinner.'}]}
      >
        <Input placeholder='Calories' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
                    Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};
