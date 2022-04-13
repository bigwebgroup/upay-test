import React from "react";

interface Props {
  children: React.ReactNode;
}

function Layout(props: Props) {
  const { children } = props;

  return (
    <div className='w-full h-screen overflow-auto pt-10 bg-gray-200'>
      <div className='container mx-auto'>
        <div className='bg-white rounded-md py-2 px-4 flex justify-between items-center shadow-md'>
          <div className='font-bold italic'>UPayments Store</div>
          <button className='font-bold italic'>Register</button>
        </div>
        <div className='pt-6'>
          {children}
        </div>
      </div>
    </div>
  );
}

export default Layout;
