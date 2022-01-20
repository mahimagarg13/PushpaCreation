import React, { useEffect } from 'react';
import Abouthero from '../Pages/Aboutus/Abouthero';
import Vissionmisson from '../Pages/Aboutus/Vissionmisson';

export default function Aboutus() {
  useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
  return (
  <div className='padding-top-100'style={{    background:"#ebd8d0"  }}>
      <Abouthero />
      <Vissionmisson />
  </div>
  );
}
