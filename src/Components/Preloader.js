import React from 'react'
import MyLoader from './MyLoader';
import { useState, useEffect } from 'react'


function Preloader() {
    const [isLoader, setIsLoader] = useState(false);

    useEffect(() => {
      setIsLoader(true);
      window.addEventListener("load", setLoaderHandle);
      return () => {
        window.removeEventListener("load", setLoaderHandle);
      };
    }, []);

    const setLoaderHandle = () => {
      const time = setTimeout(() => setIsLoader(false), 1300);
    };
  return <div>{isLoader && <MyLoader/>}</div>;
}

export default Preloader