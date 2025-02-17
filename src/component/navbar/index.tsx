// import React, { useState } from "react";
export interface Iprops {
  loginState: boolean;
  setLoginState: (value: boolean) => void;
  userData: { userName: string; email: string };
  //   handleUserLogin: () => void;
}

const Navbar = ({ loginState, setLoginState, userData }: Iprops) => {
  //   const [loginState, setLoginState] = useState(false);
  //   const handleUserLogin = () => {
  //     setLoginState((prev) => !prev);
  //     // console.log(`${loginState ? "You are logged in" : "You are logged out"}`);
  //   };
  //   return <div>{props.children}</div>
  //   const userNameProfile = userData.userName;
  return (
    <>
      <div style={{ display: "flex", justifyContent: "space-between" }}>
        <div>{loginState && userData.userName}</div>
        <div>
          <button type="button" onClick={() => setLoginState(!loginState)}>
            {loginState ? "Logout" : "Login"}
          </button>
        </div>
      </div>
    </>
  );
};

export default Navbar;
