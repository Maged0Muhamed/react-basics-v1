// import { useState } from "react";
import { useState } from "react";
import "./App.scss";
// import Navbar from "./component/navbar";
// import LoginForm from "./component/LoginForm";
import Alert from "./other/Alert";
import Container from "./other/Container";
// function App() {
//   const [loginState, setLoginState] = useState(false);
//   const [userData, setUserData] = useState({ userName: "", email: "" });

//   // const handleUserLogin = () => {
//   //   setLoginState((prev) => !prev);
//   //   // console.log(`${loginState ? "You are logged in" : "You are logged out"}`);
//   // };
//   return (
//     <>
//       <Navbar
//         loginState={loginState}
//         setLoginState={setLoginState}
//         userData={userData}
//       />
//       {loginState ? (
//         "Wellcome back Majed ;)"
//       ) : (
//         <LoginForm
//           loginState={loginState}
//           setLoginState={setLoginState}
//           userData={userData}
//           setUserData={setUserData}
//         />
//       )}
//       {/* <Navbar>AK47</Navbar> */}
//       {/* <div>
//         <a href="https://vite.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.tsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p> */}
//     </>
//   );
// }

// export default App;
export interface IAlertList {
  id: number;
  alertColor: string;
  alertTitle: string;
  alertDescription: string;
}
// const alertList: IAlertList[] = [
//   {
//     id: 1,
//     alertColor: "grey",
//     alertTitle: "Upgrade your plan",
//     alertDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
//   },
//   {
//     id: 2,
//     alertColor: "blue",
//     alertTitle: "Note",
//     alertDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
//   },
//   {
//     id: 3,
//     alertColor: "red",
//     alertTitle: "Something went wrong",
//     alertDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
//   },
//   {
//     id: 4,
//     alertColor: "green",
//     alertTitle: "Your order has been processed",
//     alertDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
//   },
//   {
//     id: 5,
//     alertColor: "yellow",
//     alertTitle: "Tips & Tricks",
//     alertDescription:
//       "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
//   },
// ];

function App() {
  const [alertList, setAlertList] = useState([
    {
      id: 1,
      alertColor: "grey",
      alertTitle: "Upgrade your plan",
      alertDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
    },
    {
      id: 2,
      alertColor: "blue",
      alertTitle: "Note",
      alertDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
    },
    {
      id: 3,
      alertColor: "red",
      alertTitle: "Something went wrong",
      alertDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
    },
    {
      id: 4,
      alertColor: "green",
      alertTitle: "Your order has been processed",
      alertDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
    },
    {
      id: 5,
      alertColor: "yellow",
      alertTitle: "Tips & Tricks",
      alertDescription:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempore vel velit amet omnis deleniti, nulla unde beatae consectetur officia, voluptates accusamus excepturi sed voluptatem fugiat aliquam id veniam optio nobis, alias deserunt! Nemo perspiciatis beatae, vero neque aliquid ut consequuntur quas dicta adipisci earum quasi vel molestiae molestias iure consequatur.",
    },
  ]);
  const showAlerts = alertList.map(
    ({ id, alertColor, alertTitle, alertDescription }) => (
      <Alert
        key={id}
        id={id}
        alertColor={alertColor}
        alertTitle={alertTitle}
        alertDescription={alertDescription}
        alertList={alertList}
        setAlertList={setAlertList}
      />
    )
  );
  return (
    <>
      <Container>{showAlerts}</Container>{" "}
    </>
  );
}
export default App;
