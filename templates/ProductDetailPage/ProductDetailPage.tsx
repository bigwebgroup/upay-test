/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable @next/next/no-img-element */
import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import customAxios from "utils/customAxios";
import { TProduct } from "utils/types";
import Layout from "templates/Layout";
import { IoIosArrowBack } from 'react-icons/io';

function ProductDetailPage() {
  const router = useRouter();
  const { id } = router.query;
  const [item, setItem] = useState<TProduct>();

  const getProductDetail = async () => {
    if (id) {
      try {
        const data = await customAxios.get(`/case-study/products/${id}`)
        if (data.data) {
          setItem(data.data)
        }
      } catch (err) {
        console.error({ err })
      }
    }
  }
  useEffect(() => {
    getProductDetail()
  }, [router.pathname])
  return (
    <Layout>
      <div className=''>
        <button className='h-10 w-10 rounded-full bg-white shadow-sm text-center' onClick={() => router.push('/')}>
          <IoIosArrowBack size={32} className='mx-auto' />
          </button>
      </div>
      {item &&
        <div className='w-full max-w-[768px] mx-auto pt-10'>
          <div className='flex items-stretch'>
            <div className='bg-white rounded-lg shadow-sm w-full min-h-20 p-4 max-w-[150px]'>
              {item.avatar ? <img src={item.avatar} className='h-[80px] mx-auto' alt='avatar' />
                : <div>No Avatar</div>}
            </div>
            <div className='flex flex-col justify-between ml-6'>
              <h2 className='font-bold text-2xl'>{item.name}</h2>
              <p className=''>${item.price}</p>
            </div>
          </div>
          <div className='h-[1px] w-full bg-gray-500 my-3' />
          <h2 className='font-semiBold text-xl'>Description</h2>
          <p className=''>{item.description}</p>
        </div>
      }
    </Layout>
  );
}

export default ProductDetailPage;
