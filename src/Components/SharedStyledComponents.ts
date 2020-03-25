import styled from 'styled-components';
import {CaretLeftOutlined} from '@ant-design/icons';
import {Form} from 'antd';

export const StyledForm = styled(Form)`
  margin:auto;
  width: 25%;
  text-align:center;
  position: relative;
`;


export const StyledBackButton = styled(CaretLeftOutlined)`
    position: absolute;
    left:-2.5rem;
    top:.75rem;
    font-size:2.5rem;
`;

export const Container = styled.div`
  margin: auto;
  width: 25%;
  text-align:center;
  position: relative;
`;
