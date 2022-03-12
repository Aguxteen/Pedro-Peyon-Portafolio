import { useState } from "react";
import estilos from '../styles/Home.module.css'


export default function PopUp ({styles , onClick}){

    const [show , setShow] = useState (false)
    const setTrue = (e)=>{
        e.preventDefault()
        setShow(true)
    }
    const setFalse = (e)=>{
        e.preventDefault()
        setShow(false)
    }
    if(show)return(
        <>
        <img className={estilos.botoncitosimg} onClick={setFalse} src="/hamburger.png" alt="hamburger"/>
        <div className={styles}>
        <button value="about" onClick={onClick}>About Me</button>
        <button value="skills" onClick={onClick}>My skills</button>
        <button value="projects" onClick={onClick}>My projects</button>
        <button value="contact" onClick={onClick}>Contact Me</button>
        </div>
        </>
    )
    return( <>
            <img className={estilos.botoncitosimg} onClick={setTrue} src="/hamburger.png" alt="hamburger"/>
        <div className={styles}>
        </div>
        </>
    ) 
    

}