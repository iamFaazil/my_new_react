// import React from "react";

// import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import Auth from "../Components/Auth";

const Login = () => {
    const navigate =  useNavigate()

  const handleClick = () => {
    navigate("/home")
  };

  return (
    <div>
      <Auth
        isLoading={false}
        onClickEvent={handleClick}
        formname={"login"}
        formtype={"login"}
      />
    </div>
  );
};

export default Login;
