import React from 'react';
import {Form, Typography, Button, Input} from 'antd';
import {useHistory} from 'react-router';

export const EmailShare:React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    history.push('/success?of=share');
    // TODO: Track Login Event Here
  };

  return (
    <Form
      name="shareData"
      onFinish={onFinish}>
      <Typography.Title level={3}>
        Enter an email address to share your data with.
      </Typography.Title>
      <Form.Item name="email">
        <Input placeholder='Email'></Input>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Share
        </Button>
      </Form.Item>
    </Form>
  );
};
