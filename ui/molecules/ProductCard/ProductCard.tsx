/* eslint-disable @next/next/no-img-element */
import React from "react";
import { TProduct } from "utils/types";

function ProductCard({ item }: { item: TProduct }) {
  return (
    <div className=''>
      <div className='bg-white rounded-lg shadow-sm w-full min-h-20 p-4'>
        {item.avatar ? <img src={item.avatar} className='h-[80px] mx-auto' alt='avatar' />
          : <div>No Avatar</div>}
      </div>
      <div className='mt-1'>{item.category}</div>
      <div className='text-center mt-1'>${item.price}</div>
    </div>
  );
}

export default ProductCard;
