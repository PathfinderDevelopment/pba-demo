import React, {useEffect} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../Count.ly';

export const CalorieInput: React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    mixpanel.track('Viewed Calorie Input Screen');
    countly.q.push(['add_event', {
      'key': 'Viewed Calorie Input Screen',
    }]);
  }, [mixpanel, countly]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // TODO: Track calorie input event here
    history.push('/success?of=calorieEntry');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="calorieInput"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
    >
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
    </Form>
  );
};
