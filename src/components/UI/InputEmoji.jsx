import { Form, Input } from "antd";
import React from "react";
import { Emoji } from 'emoji-mart'


const InputEmoji = (
  { name, placeholder, onChange, onPressEnter, form },
  ref
) => {
  const onEmojiClick = (event, emojiObject) => {
    setChosenEmoji(emojiObject);
    form.setFieldsValue({
      nhap: `${form.getFieldValue("nhap")}${emojiObject.emoji}`,
    });
  };

  return (
      <>
    <Form form={form}>
      <Form.Item name={name}>
        <Input
          ref={ref}
          placeholder={placeholder}
          onChange={(e) => onChange(e)}
          onPressEnter={() => onPressEnter()}
        ></Input>
      </Form.Item>
     </Form>
      </>
  );
};
export default React.forwardRef(InputEmoji);
