import { JSX } from "react";

interface Iprop {
  children: JSX.Element[];
}

const Container = ({ children }: Iprop) => {
  return (
    <div
      className="container"
      style={{
        width: "60%",
        margin: "auto",
        padding: "5% 0",
        color: "#fff",
      }}
    >
      {children}
    </div>
  );
};

export default Container;
