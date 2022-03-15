import { Col, Row } from 'antd';
import React from 'react';
import styled from 'styled-components';
import ListRoom from './ListRoom';
import UserInfo from './UserInfo';

const Stylebar = styled.div`
    background: #1a001a;
    height: 100vh;
`

export default function SideBar() {
   
  return (
    <Stylebar>
    <Row>
        <Col span={24} style={{marginBottom:'10px',marginTop:'10px'}}>
            <UserInfo></UserInfo>
        </Col>
        <Col span={24}>
            <ListRoom></ListRoom>
        </Col>
    </Row>
    </Stylebar>
  )
}
