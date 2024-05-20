// import React from 'react'
import { useState } from "react";
import Auth from "../Components/Auth";

const SignUp = () => {
  const [loader, setLoader] = useState(false);

  const fetchApi = () => {
    setLoader(true);
    setTimeout(() => {
    setLoader(false);
    }, 3000);
  };
  return (
    <div>
      <Auth
        isLoading={loader}
        formname={"signup"}
        onClickEvent={fetchApi}
        formtype={"signup"}
      />
    </div>
  );
};

export default SignUp;
