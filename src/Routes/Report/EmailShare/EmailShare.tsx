import React, {useEffect} from 'react';
import {Form, Typography, Button, Input} from 'antd';
import {useHistory} from 'react-router';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../../Count.ly';

export const EmailShare:React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    mixpanel.track('Viewed Email Data Screen');
    countly.q.push(['add_event', {
      'key': 'Viewed Email Data Screen',
    }]);
  }, [mixpanel, countly]);

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
