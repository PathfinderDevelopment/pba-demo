import React from 'react';
import {Form, Input, Button, Typography} from 'antd';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';

const layout = {
  align: 'middle',
  justify: 'center',
};

const InnerContainer = styled.div`
  display:table-cell;
  vertical-align:middle;
`;

const StyledForm = styled(Form)`
  margin:auto;
  width: 50%;
`;

const StyledLoginContainer = styled.div`
  display: table;
  position: absolute;
  width:100%;
  height:100%;
`;


export const Login:React.FC = () => {
  const history = useHistory();

  // The type that is returned by these functions from antd's library is not
  // importable, so I'm using the any type.
  const onFinish = (values: any) => {
    history.push('/pairdevice');
    // TODO: Track Login Event Here
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <StyledLoginContainer>
      <InnerContainer>
        <StyledForm
          {...layout}
          name="basic"
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
        >
          <Typography.Title level={2}>Welcome!</Typography.Title>
          <Form.Item
            name="username"
            rules={[{required: true, message: 'Please input your username!'}]}
          >
            <Input placeholder='Username'/>
          </Form.Item>

          <Form.Item
            name="password"
            rules={[{required: true, message: 'Please input your password!'}]}
          >
            <Input.Password placeholder='Password'/>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
          Submit
            </Button>
          </Form.Item>
        </StyledForm>
      </InnerContainer>
    </StyledLoginContainer>
  );
};
