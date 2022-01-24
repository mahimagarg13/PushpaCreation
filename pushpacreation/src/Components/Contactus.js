import React, { useEffect } from 'react';
import Contacthero from '../Pages/Contactus/Contacthero';
import Formcontactus from '../Pages/Contactus/Formcontactus';
export default function Contactus() {
  useEffect(
    () => {
      window.scrollTo(0, 0);
    },
    []
  );
  return (
    <div style={{ background: "#ebd8d0" }}>
      <Contacthero />
      <Formcontactus />
    </div>
  );
}
