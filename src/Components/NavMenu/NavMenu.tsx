import React from 'react';
import {Menu} from 'antd';
import styled from 'styled-components';
import {MenuOutlined} from '@ant-design/icons';
import {Link} from 'react-router-dom';

const StyledMenu = styled(Menu)`
  position: absolute;
  right:-4.5rem;
  background-color: black;
  color: #d8d8d8;
`;

export const NavMenu = () => {
  return (
    <StyledMenu theme='dark'>
      <Menu.SubMenu title={<MenuOutlined style={{fontSize: '2.5rem'}} />}>
        <Menu.Item><Link to='home'>Home</Link></Menu.Item>
        <Menu.Item><Link to='report'>Reports</Link></Menu.Item>
        <Menu.Item><Link to='dosage'>Dosage</Link></Menu.Item>
        <Menu.Item><Link to='calorieinput'>Calories</Link></Menu.Item>
        <Menu.Item><Link to='feedback'>Feedback</Link></Menu.Item>
        <Menu.Item><Link to=''>Logout</Link></Menu.Item>
      </Menu.SubMenu>
    </StyledMenu>
  );
};
