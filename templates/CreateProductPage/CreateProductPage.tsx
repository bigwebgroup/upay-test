import React, { useEffect, useState } from "react";
import { Form, Select, Space } from 'antd'
import { useRouter } from "next/router";
import Layout from "templates/Layout";
import FormInput from "ui/atoms/FormInput";
import FormTextarea from "ui/atoms/FormTextarea";
import { TProduct } from "utils/types";
import customAxios from "utils/customAxios";
import { IoIosArrowBack } from "react-icons/io";

function CreateProductPage() {
  const router = useRouter();
  const [categories, setCategories] = useState<any[]>([]);
  const onSubmit = async (values: TProduct) => {
    customAxios.post('/case-study/products', values)
      .then(res => {
        router.push('/')
      })
      .catch(err => console.log({ err }))
  }
  const getCategories = async () => {
    try {
      const categoriesResult = await customAxios.get('/case-study/categories')
      if (categoriesResult.data) {
        setCategories(categoriesResult.data)
      }
    } catch (err) {
      console.error({ err })
    }
  }
  useEffect(() => {
    getCategories()
  }, [router.pathname])

  return (
    <Layout>
      <div className=''>
        <button className='h-10 w-10 rounded-full bg-white shadow-sm text-center' onClick={() => router.push('/')}>
          <IoIosArrowBack size={32} className='mx-auto' />
          </button>
      </div>
      <div className='w-full max-w-[768px] mx-auto pt-10'>
        <Form
          onFinish={onSubmit}
          layout='vertical'
        >
          <FormInput
            name="name"
            placeholder='Product Name'
          />
          <FormTextarea
            name="description"
            placeholder='Description'
          />
          <FormInput
            name="avatar"
            placeholder='Image URL'
          />
          <Form.Item name='category' rules={[{ required: true, message: "Required!" }]}>
            <Select className='w-full bg-white shadow-md rounded-md min-w-[200px] ml-auto' placeholder='Categories'>
              {categories && categories.length > 0 && categories.map((_category, _i) =>
                <Select.Option key={_i} value={_category.id}>{_category.name}</Select.Option>
              )}
            </Select>
          </Form.Item>
          <Form.Item name='price' rules={[{ required: true, message: "Required!" }]}>
            <input type='number' placeholder='Price' className='w-full px-[10px] h-[30px] border-gray-100 border-[1px] hover:border-primary-500 rounded-[4px] focus:border-primary-500 focus:shadow-none' />
          </Form.Item>
          <Form.Item>
            <button className='px-5 w-full uppercase h-8 rounded-md bg-white' type='submit'>Submit</button>
          </Form.Item>
        </Form>
      </div>
    </Layout>
  );
}

export default CreateProductPage;
