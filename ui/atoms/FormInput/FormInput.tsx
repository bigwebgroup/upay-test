import { Input, Form } from "antd";
import React from "react";

interface Props {
  name: string;
  required?: boolean;
  placeholder: string;
}
const FormInput = ({ name, required = true, placeholder }: Props) => {
  return (
    <>
      <Form.Item
        name={name}
        rules={[{ required: true, message: "Required!" }]}
      >
        <input
          className='w-full h-[30px] px-[10px] border-gray-100 border-[1px] hover:border-primary-500 rounded-[4px] focus:border-primary-500 focus:shadow-none'
          placeholder={placeholder}
        />
      </Form.Item>
    </>
  );
};

export default FormInput;
