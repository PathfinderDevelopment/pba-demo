import React, { useEffect } from 'react';
import {Form, Typography, Button, Input} from 'antd';
import {useHistory} from 'react-router';
import {useMixpanel} from 'react-mixpanel-browser';

export const EmailShare:React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Page View', {pageName: 'Email Data'});
  }, [mixpanel]);

  const onFinish = (values: any) => {
    history.push('/success?of=share');
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
