import { useState } from "react";


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
        <div className={styles}>
        <button onClick={setFalse} >...</button>
        <button value="about" onClick={onClick}>About Me</button>
        <button value="skills" onClick={onClick}>My skills</button>
        <button value="projects" onClick={onClick}>My projects</button>
        <button value="contact" onClick={onClick}>Contact Me</button>
        </div>
    )
    return(
        <div className={styles}>
             <button onClick={setTrue} >...</button>
        </div>
       
    ) 
    

}