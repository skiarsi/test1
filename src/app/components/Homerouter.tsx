'use client'

import React, { useEffect, useState } from 'react'

export default function Homerouter() {

  const [message, setMessage] = useState([]);

  useEffect(()=>{
    const getrouter = async () =>{
      const response = await fetch(`/api/hello`);
      const jdata = await response.json();
      setMessage(jdata.data);
    }

    getrouter();
  },[]);
  
  return (
    <p className='text-2xl block'>{message}</p>
  )
}
