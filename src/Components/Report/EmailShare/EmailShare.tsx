import React from 'react';
import {StyledForm, StyledBackButton} from '../../SharedStyledComponents';
import {Form, Typography, Button, Input} from 'antd';
import {useHistory} from 'react-router';
import { Link } from 'react-router-dom';

export const EmailShare:React.FC = () => {
  const history = useHistory();

  const onFinish = (values: any) => {
    history.push('/success');
    // TODO: Track Login Event Here
  };

  return (
    <StyledForm
      name="shareData"
      onFinish={onFinish}>
      <Link to='report'>
        <StyledBackButton/>
      </Link>
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
    </StyledForm>
  );
};
