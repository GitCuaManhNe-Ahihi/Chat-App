import React from 'react'
import { Row,Col } from 'antd'
import SideBar from './SideBar/SideBar'
import ChatWindow from './ChatWindow/ChatWindow'
export default function ChatRoom() {
  return (
    <Row>
        <Col span={6}>
            <SideBar></SideBar>
        </Col>
        <Col span={18}>
            <ChatWindow></ChatWindow>
        </Col>
    </Row>
  )
}
