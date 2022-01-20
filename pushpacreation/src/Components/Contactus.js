import React, {useEffect} from 'react';

import Contacthero from '../Pages/Contactus/Contacthero';
export default function Contactus() {
    useEffect(
		() => {
            window.scrollTo(0, 0);
		},
		[]
	);
  return(
      <div>
          <Contacthero/>
      </div>
  );
}
