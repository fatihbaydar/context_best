import React, { useContext } from 'react'

import AnaUser from "./AnaUser";
import { KulllaniciContext } from '../context/KullaniciProvider';
const Isimler = () => {

    const {users} = useContext(KulllaniciContext)
  return (
    <div>
    

   <AnaUser/>

    </div>
  );
}

export default Isimler