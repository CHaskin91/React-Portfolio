import "./intro.scss"
import { init } from "ityped"
import {useEffect, useRef } from "react"

export default function Intro() {
const textRef = useRef();

  useEffect(() => {
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Developer', 'Content Creator', 'Applicant'],
    });
  }, []);

  return (
    <div className="intro" id="intro">
      <div className="left">
        <div className="imgContainer">
          <img src={process.env.PUBLIC_URL + "/assets/me.png"} alt=""/>
        </div>
      </div>
      <div className="right">
        <div className="wrapper">
          <h2>Hello! I am</h2>
          <h1>Corbin Haskin</h1>
          <h3>
            Full-Stack <span ref={textRef}> </span>
          </h3>
        </div>
        <a href="#portfolio">
          <img src={process.env.PUBLIC_URL + "/assets/downArrow2.png"} alt=""/>
        </a>
      </div>
    </div>
  )
}
