import { useState } from "react";
import estilos from "../../styles/Home.module.css";

export default function PopUp({ styles, onClick, buttons }) {
  const [show, setShow] = useState(false);
  const setTrue = (e) => {
    e.preventDefault();
    setShow(true);
  };
  const setFalse = (e) => {
    e.preventDefault();
    setShow(false);
  };
  if (show)
    return (
      <>
        <img
          className={estilos.botoncitosimg}
          onClick={setFalse}
          src="/hamburger.png"
          alt="hamburger"
        />
        <div className={styles}>
        {
           buttons.map((el, i)=>(
            <button key={i} value={el.value} onClick={onClick}>
              {el.text}
            </button>
            ))
          }
        </div>
      </>
    );
  return (
    <>
      <img
        className={estilos.botoncitosimg}
        onClick={setTrue}
        src="/hamburger.png"
        alt="hamburger"
      />
      <div className={styles}></div>
    </>
  );
}
