import React, { useEffect } from 'react';
import Shopbycategory from "../Pages/Home/Shopbycategory.js"
export default function Products() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
  return <div className='padding-top-100'>
      <Shopbycategory />
  </div>;
}
