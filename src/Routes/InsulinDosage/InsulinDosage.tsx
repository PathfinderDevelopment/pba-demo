import React, { useEffect } from 'react';
import {
  StyledCardTitle,
  StyledCardSubtitle} from '../../Components/SharedStyledComponents';
import {Typography, Form, Button, Input} from 'antd';
import styled from 'styled-components';
import {useHistory} from 'react-router-dom';
import {useMixpanel} from 'react-mixpanel-browser';

const InsulinDosageSuggestion = styled.div`
  background-color: #2A6891;
  color: white;
  padding: 1.6rem;
`;

const StyledFormItem = styled(Form.Item)`
  margin-top: 16px;
  & label {
    display: block;
    text-align:center;
  }
`;

export const InsulinDosage:React.FC = () => {
  const history = useHistory();
  const mixpanel = useMixpanel();

  useEffect(() => {
    mixpanel.track('Viewed Insulin Dosage Screen');
  }, [mixpanel]);

  const onFinish = (values: any) => {
    console.log('Success:', values);
    // TODO: Track feedback input event
    history.push('success?of=dosage');
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div>
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

        <StyledFormItem
          label="Amount of insulin you plan to inject:"
          name="tired"
        >
          <Input placeholder='Insulin (U)' />
        </StyledFormItem>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            Save
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};
