import React, { useEffect } from 'react';
import Category from '../Pages/Home/Category.js';
// import Shopbycategory from "../Pages/Home/Shopbycategory.js"
import Fade from 'react-reveal/Fade';

export default function Products() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
  return <div className='outer-div padding-top-100 category'>
    <div className='padding-top-100 '></div> <Fade bottom>
    <h1 className='text-center'>Products</h1>
    </Fade>
      <Category />
  </div>;
}
