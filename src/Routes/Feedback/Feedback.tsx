import React, {useEffect} from 'react';
import {Form, Button, Typography, Select} from 'antd';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';
import {useCountly} from '../../Count.ly';

export const Feedback: React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();
  const countly: any = useCountly();

  useEffect(() => {
    mixpanel.track('Viewed Feedback Form');
    countly.q.push(['add_event', {
      'key': 'Viewed Feedback Form',
    }]);
  }, [mixpanel, countly]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    mixpanel.track('Completed Feedback Form', {
      feelsTired: values.tired,
      exercises: values.exercise,
      bgInRange: values.bgInRange,
      insulinRecHelpful: values.insulinRecommendationHelpful,
    });

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
        <Select>
          <Select.Option value="Yes">Yes</Select.Option>
          <Select.Option value="No">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Do you exercise?"
        name="exercise"
      >
        <Select>
          <Select.Option value="Yes">Often</Select.Option>
          <Select.Option value="No">Seldom</Select.Option>
          <Select.Option value="No">Never</Select.Option>
        </Select>

      </Form.Item>
      <Form.Item
        label="Is your BG mostly in range?"
        name="bgInRange"
      >
        <Select>
          <Select.Option value="Yes">Yes</Select.Option>
          <Select.Option value="No">No</Select.Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Do you find insulin recommendations helpful?"
        name="insulinRecommendationHelpful"
      >
        <Select>
          <Select.Option value="Yes">Yes</Select.Option>
          <Select.Option value="No">No</Select.Option>
        </Select>
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
                    Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
