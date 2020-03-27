import React from 'react';
import {Input, Button, Typography, Form} from 'antd';
import {useHistory} from 'react-router-dom';

export const Pairing: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    history.push('/success?of=pairing');
    // TODO: Track Login Event Here
  };

  return (
    <Form
      name="pairing"
      onFinish={onFinish}>
      <Typography.Title level={3}>
        Enter your serial number to pair your device.
      </Typography.Title>
      <Form.Item name="serialNumber">
        <Input placeholder='Serial Number'></Input>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Pair
        </Button>
      </Form.Item>
    </Form>
  );
};
