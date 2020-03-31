import React, {useContext, useEffect} from 'react';
import {Form, Input, Button, Typography} from 'antd';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';
import {AuthContext} from '../../auth/Authentication';


const layout = {
  align: 'middle',
  justify: 'center',
};

export const Login: React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();
  const {setAuthState} = useContext(AuthContext);

  useEffect(() => {
    mixpanel.track('Page View', {pageName: 'Log In'});
  }, [mixpanel]);

  // The type that is returned by these functions from antd's library is not
  // importable, so I'm using the any type.
  const onFinish = (values: any) => {
    history.push('/pairdevice');
    setAuthState(values.username);
    mixpanel.register({'username': values.username});
    mixpanel.people.set({'$first_name': values.username});
    mixpanel.identify();
    mixpanel.track('Log In');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      {...layout}
      name="login"
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
    >
      <Typography.Title level={2}>Welcome!</Typography.Title>
      <Form.Item
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input placeholder='Username' />
      </Form.Item>

      <Form.Item
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password placeholder='Password' />
      </Form.Item>

      <Form.Item>
        <Button type="primary" htmlType="submit" block>
          Submit
        </Button>
      </Form.Item>
    </Form>
  );
};
