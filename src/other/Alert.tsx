// import { ReactElement } from "react";
import "./alertStyle.scss";
import { IAlertList } from "../App";
//Interfaces
interface Iprop {
  key: number;
  id: number;
  alertColor: string;
  alertTitle: string;
  alertDescription: string;
  alertList: IAlertList[];
  setAlertList: React.Dispatch<React.SetStateAction<IAlertList[]>>;
}

const Alert = ({
  id,
  alertColor,
  alertTitle,
  alertDescription,
  alertList,
  setAlertList,
}: Iprop) => {
  const deleteAlert = (event: React.MouseEvent<HTMLSpanElement>) => {
    console.log(event);
    // console.log(typeof alertList[0].id);
    const newAlertList = alertList.filter(
      (alert) => alert.id !== parseInt((event.target as HTMLSpanElement).id)
    );
    console.log(newAlertList);
    setAlertList(newAlertList);
  };

  return (
    <>
      <div id={`${id}`} className="main-alert" style={{ color: alertColor }}>
        <div className="head-alert">
          <div className="head-alert-left">
            <span>+</span>
            <h1 className="alert-title">{alertTitle}</h1>
          </div>
          <span id={`${id}`} onClick={deleteAlert}>
            X
          </span>
        </div>
        <p>{alertDescription}</p>
      </div>
    </>
  );
};

export default Alert;
