import React, { ChangeEvent } from "react";
import { formInputsData } from "../data";

interface IuserData {
  userName: string;
  email: string;
}
interface Iprops {
  loginState: boolean;
  setLoginState: (value: boolean) => void;
  userData: { userName: string; email: string };
  setUserData: (userData: IuserData) => void;

  //   handleUserLogin: () => void;
}
const LoginForm = ({
  loginState,
  setLoginState,
  userData,
  setUserData,
}: Iprops) => {
  const insertData = (e: ChangeEvent<HTMLInputElement>) => {
    setUserData({ ...userData, [e.target.name]: e.target.value });
  };

  const inputsList = formInputsData.map((input, index) => (
    <div key={index}>
      <label htmlFor={input.id}>{input.label}:</label>
      <input
        id={input.id}
        name={input.name}
        value={userData[input.name]}
        type={input.type}
        onChange={insertData}
      />
    </div>
  ));
  return (
    <>
      <form>
        {inputsList}
        <br />
        {/* <label htmlFor="email">Email:</label>
        <input
          id="email"
          name="email"
          value={userData.email}
          type="email"
          onChange={insertData}
        /> */}
        <button type="button" onClick={() => setLoginState(!loginState)}>
          Login
        </button>
      </form>
    </>
  );
};

export default LoginForm;
