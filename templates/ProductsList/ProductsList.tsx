import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import customAxios from "utils/customAxios";
import { TProduct } from "utils/types";
import Layout from "templates/Layout";
import { Button, Select } from "antd";
import ProductCard from "ui/molecules/ProductCard";
import { FaPlusCircle } from 'react-icons/fa';
import Link from "next/link";

function ProductsListPage() {
  const router = useRouter();
  const [products, setProducts] = useState<TProduct[]>([]);
  const [list, setList] = useState<TProduct[]>([]);
  const [categories, setCategories] = useState<any[]>([]);
  const [selectedCategory, setSelectedCategory] = useState('');

  const getData = async () => {
    try {
      const [productsResult, categoriesResult] = await Promise.all([
        customAxios.get('/case-study/products'),
        customAxios.get('/case-study/categories'),
      ])
      if (productsResult.data) {
        setProducts(productsResult.data)
        setList(productsResult.data)
      }
      if (categoriesResult.data) {
        setCategories(categoriesResult.data)
      }
    } catch (err) {
      console.error({ err })
    }
  }
  const onDelete = async (productId: string) => {
    try {
      await customAxios.delete(`/case-study/products/${productId}`)
        .then(res => {
          setProducts(products.filter(_item => _item.id !== productId))
        })
    } catch (err) {
      console.error({ err })
    }
  }
  const onSearch = (query: string) => {
    if (query) {
      if (selectedCategory) {
        setList(products.filter(_item => _item.name.toLowerCase().includes(query.toLowerCase()) && _item.category === selectedCategory))
      } else {
        setList(products.filter(_item => _item.name.toLowerCase().includes(query.toLowerCase())))
      }
    } else {
      if (selectedCategory) {
        setList(products.filter(_item => _item.category === selectedCategory))
      } else {
        setList(products)
      }
    }
  }
  const onChangeCategory = (categoryId: string) => {
    setSelectedCategory(categories.find(_category => _category.id === categoryId).name)
    setList(products.filter(_product => _product.category === categories.find(_category => _category.id === categoryId).name))
  }
  useEffect(() => {
    getData()
  }, [router.pathname])
  return (
    <Layout>
      <div className='flex justify-between items-center'>
        <input
          className='min-w-[300px] h-[30px] px-[10px] border-gray-100 border-[1px] hover:border-primary-500 rounded-[4px] focus:border-primary-500 focus:shadow-none'
          placeholder={'Apple Watch, Samsung...'}
          onChange={e => onSearch(e.target.value)}
        />
        <Select
          className='bg-white shadow-md rounded-md min-w-[200px] ml-auto'
          placeholder='Categories'
          onChange={onChangeCategory}
        >
          {categories && categories.length > 0 && categories.map((_category, _i) =>
            <Select.Option key={_i} value={_category.id}>{_category.name}</Select.Option>
          )}
        </Select>
      </div>
      <div className='w-full max-w-[768px] mx-auto pt-10'>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-7">
          {list && (list.length > 0 ? list.map((_item, _i) =>
            <div key={_i}>
              <Link href={`/products/${_item.id}`} passHref>
                <a>
                  <ProductCard item={_item} />
                </a>
              </Link>
              <Button className='border-[1px] border-gray-400 px-4 mx-auto mt-3' onClick={() => onDelete(_item.id)}>Delete</Button>
            </div>)
            : <div>No Data</div>
          )}
        </div>
      </div>
      <button className='fixed bottom-6 right-10 rounded-md' onClick={() => router.push('/products/add')}>
        <FaPlusCircle size={48} />
      </button>
    </Layout>
  );
}

export default ProductsListPage;
