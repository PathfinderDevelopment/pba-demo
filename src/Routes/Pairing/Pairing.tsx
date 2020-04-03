import React, {useEffect} from 'react';
import {Input, Button, Typography, Form} from 'antd';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../Count.ly';

export const Pairing: React.FC = () => {
  const history = useHistory();
  const mixpanel: any = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    mixpanel.track('Viewed Pairing Screen');
    countly.q.push(['add_event', {
      'key': 'Viewed Pairing Screen',
    }]);
  }, [mixpanel, countly]);

  const onFinish = (values: any) => {
    mixpanel.register({deviceSerialNo: values.serialNumber});
    history.push('/success?of=pairing');
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
