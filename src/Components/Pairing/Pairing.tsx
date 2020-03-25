import React from 'react';
import { Input, Button, Typography, Form } from 'antd';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';

const StyledForm = styled(Form)`
  margin:auto;
  width: 25%;
  text-align: center;
`;

export const Pairing: React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    history.push('/home');
    // TODO: Track Login Event Here
  };

  return (
    <StyledForm
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
    </StyledForm>
  );
};
