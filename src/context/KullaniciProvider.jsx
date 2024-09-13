import React, { createContext, useEffect, useState } from 'react'


export const KulllaniciContext = createContext()


const KullaniciProvider = ({children}) => {
    const [users, setUsers] = useState([])
    useEffect(() => { fetch("https://api.github.com/users").then((res) => res.json()).then((veri) => console.log(veri))
        
    },[])
   

  return (
    <KulllaniciContext.Provider value={{}}>
    {children}

    </KulllaniciContext.Provider>
  )
}

export default KullaniciProvider