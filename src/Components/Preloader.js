import React from 'react'
import MyLoader from './MyLoader';
import { useState, useEffect } from 'react'


function Preloader() {
    const [isLoader, setIsLoader] = useState(true);

    useEffect(() => {
      return () => {
        window.addEventListener("load", () => {
          setIsLoader(false)
        })
      };
    }, []);

  return <div>{isLoader && <MyLoader/>}</div>;
}

export default Preloader