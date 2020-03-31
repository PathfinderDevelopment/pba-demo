import React, { useEffect } from 'react';
import {Form, Button, Typography, Input} from 'antd';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';

export const Feedback: React.FC = () => {

  const history = useHistory();
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Page View', {pageName: 'Feedback Form'});
  }, [mixpanel]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    history.push('/success?of=feedback');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="feedbackInput"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      layout='vertical'
    >
      <Typography.Title level={2}>Input Calories</Typography.Title>
      <Form.Item
        label="Do you feel tired?"
        name="tired"
      >
        <Input placeholder='Calories' />
      </Form.Item>
      <Form.Item
        label="Do you exercise?"
        name="exercise"
      >
        <Input placeholder='Calories' />
      </Form.Item>
      <Form.Item
        label="Is your BG mostly in range?"
        name="bgInRange"
      >
        <Input placeholder='Calories' />
      </Form.Item>
      <Form.Item
        label="Do you find insulin recommendations helpful?"
        name="insulinRecommendationHelpful"
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
