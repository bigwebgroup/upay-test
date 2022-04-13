import { Input, Form } from "antd";
import React from "react";

interface Props {
  name: string;
  placeholder: string;
}
const FormTextarea = ({ name, placeholder }: Props) => {
  return (
    <>
      <Form.Item
        name={name}
        rules={[{ required: true, message: "Required!" }]}
      >
        <textarea
          className='h-[100px] px-[10px] py-[5px] border-gray-100 border-[1px] hover:border-primary-500 focus-visible:border-primary-500 w-full rounded-[4px] focus:border-primary-500 focus:shadow-none'
          placeholder={placeholder}
        />
      </Form.Item>
    </>
  );
};

export default FormTextarea;
