import { Form, Input, Modal } from 'antd'
import React from 'react'
import { AppContext } from '../../Context/AppProvider'
import { addDocument } from '../../firebase/service';
import {CloseCircleOutlined} from '@ant-design/icons'
import InputEmoji from 'react-input-emoji';

export default function AddRoomModal() {
    const {visible,setVisible,uid} = React.useContext(AppContext)
    const [form] = Form.useForm();
    const handleOk = () => {
        addDocument('rooms',{...form.getFieldValue(),members:[uid]})
       form.resetFields()
        setVisible(false)
    }
    const handleCancel = () => {
        form.resetFields()
        setVisible(false)
    }
  return (
    <div>
        <Modal
        visible={visible}
        onOk={handleOk}
        onCancel={handleCancel}
        closeIcon={<CloseCircleOutlined style={{color:'red'}} />}
        >
            <Form form={form} layout='vertical'>
                <Form.Item label="Tên phòng" name='name'>
                    <InputEmoji placeholder='Nhập tên phòng' >
                    </InputEmoji>
                </Form.Item>
                <Form.Item label='mô tả' name='description'>
                    <Input.TextArea></Input.TextArea>
                </Form.Item>
            </Form>
        </Modal>
    </div>
  )
}
