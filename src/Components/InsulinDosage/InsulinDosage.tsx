import React from 'react';
import {
  Container,
  StyledBackButton,
  StyledCardTitle,
  StyledCardSubtitle} from '../SharedStyledComponents';
import {Typography, Form, Button, Input} from 'antd';
import styled from 'styled-components';
import {Link} from 'react-router-dom';

const InsulinDosageSuggestion = styled.div`
  background-color: #2A6891;
  color: white;
  padding: 1.6rem;
`;

export const InsulinDosage:React.FC = () => {
  const onFinish = (values: any) => {
    console.log('Success:', values);
    // TODO: Track feedback input event
    // TODO: Route to success screen
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Container>
      <Link to='home'>
        <StyledBackButton/>
      </Link>
      <Typography.Title level={2}>
        Recommended <br/> Insulin Dosage
      </Typography.Title>
      <InsulinDosageSuggestion>
        <StyledCardTitle>3.2 U</StyledCardTitle>
        <StyledCardSubtitle>Valid for next 18 minutes</StyledCardSubtitle>
      </InsulinDosageSuggestion>
      <Form
        name="feedbackInput"
        onFinish={onFinish}
        onFinishFailed={onFinishFailed}
        layout='vertical'>

        <Form.Item
          label="Amount of insulin you plan to inject:"
          name="tired"
        >
          <Input placeholder='Insulin (U)' />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </Container>
  );
};
