import React from 'react'
import Loader from "react-js-loader";


function MyLoader() {
  return (
    <div>
      <div className="parent-loader">
        <Loader
          type="bubble-top"
          bgColor={"#FFFFFF"}
          title={"Loading..."}
          color={"#FFFFFF"}
          size={100}
        />
      </div>
    </div>
  );
}

export default MyLoader