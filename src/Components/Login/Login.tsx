import React from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {StyledForm} from '../SharedStyledComponents';

const layout = {
  align: 'middle',
  justify: 'center',
};

export const Login: React.FC = () => {
  const history = useHistory();

  // The type that is returned by these functions from antd's library is not
  // importable, so I'm using the any type.
  const onFinish = (values: any) => {
    history.push('/pairdevice');
    // TODO: Track Login Event Here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledForm
      {...layout}
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Typography.Title level={2}>Welcome!</Typography.Title>
      <Form.Item
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input placeholder='Username' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </StyledForm>
  );
};
