// import React from 'react'
import { Link } from "react-router-dom";
import Button from "./Button";
// eslint-disable-next-line react/prop-types
const Auth = ({ formname, formtype, isLoading, onClickEvent, color }) => {
  return (
    <div>
      <section className="w-full h-screen bg-orange-200 flex justify-center items-center">
        <div className="w-96 flex flex-col rounded-lg bg-white p-6">
          <span>{formname} Form </span>
          {formtype == "signup" ? (
            <input
              type="text"
              className="w-full p-2 rounded-md border mt-3"
              placeholder="email"
            />
          ) : null}
          <input
            type="text"
            className="w-full p-2 rounded-md border mt-3"
            placeholder="name"
          />
          <input
            type="text"
            className="w-full p-2 rounded-md border mt-3"
            placeholder="password"
          />
          {formtype != "login" ? (
            <select
              name="drop"
              id="drop"
              className="w-full p-2 rounded-b-md border mt-3 bg-orange-100"
            >
              <option value="gender" id="drop">
                Gender
              </option>
              <option value="male" id="drop">
                Male
              </option>
              <option value="female" id="drop">
                Female
              </option>
            </select>
          ) : null}
          <div className="flex hover:underline hover:text-blue-500 p-2">
            <Link to={`/${formtype == "login" ? "signup" : "login"}`}>
              {formtype == "login" ? "signup" : "login"}
          
            </Link>
          </div>
          {formtype != "login" ? (
            <div className="flex w-full mt-6 items-center  justify-between ">
              <div className="flex items-center h-full gap-2 text-sm">
                <input
                  type="checkbox"
                  id="checked"
                  name="checked"
                  className="w-3 h-3 rounded-md border cursor-pointer "
                />
                <label
                  htmlFor="checked"
                  className="h-4 flex cursor-pointer justify-center items-center"
                >
                  Remember Me
                </label>
              </div>

              <div className="text-blue-300 cursor-pointer">
                <span>Forgot password?</span>
              </div>
            </div>
          ) : null}
          <Button
            color={color}
            isLoading={isLoading}
            onClickEvent={onClickEvent}
          />
        </div>
      </section>
    </div>
  );
};

export default Auth;
