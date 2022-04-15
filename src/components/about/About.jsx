import { useState } from "react";
import "./about.scss"

export default function About() {
    const [currentSlide, setCurrentSlide] = useState(0);
    const data = [
        {
            id: "1",
            icon: "./assets/personTrio.png",
            title: "About Me",
            desc: 
                "Hello Friends!  My name is Corbin Haskin, I am a Full-Stack Developer with a strong passion of working on React Apps.",
        },
        {
            id: "2",
            icon: "./assets/personTrio.png",
            title: "",
            desc: "In 2021, I got married!  Soon after the wedding, I made a decision to change careers and joined Rice University Coding Bootcamp!",
        },
        {
            id: "3",
            icon: "./assets/personTrio.png",
            title: "",
            desc: "When I'm not coding, I enjoy spending time outside with my wife, dog, and cat. We also watch way too much TV! (Big Survivor fans!)",
        },
    ]

  const handleClick = (way) => {
      way === "left"
       ? setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : 2) 
       : setCurrentSlide(currentSlide < data.length - 1 ? currentSlide + 1 : 0);
  }; 
  return (
    <div className="about" id="about">
        <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}vw)` }}>
            {data.map(d => (
                <div className="container">
                <div className="item">
                    <div className="left">
                        <div className="leftContainer">
                            <div className="imgContainer">
                                <img src={d.icon} alt=""/>
                            </div>
                        </div>
                    </div>
                    <div className="right">
                        <div className="rightContainer">
                            <h2>{d.title}</h2>
                                <p>{d.desc}</p>
                        </div>
                    </div>
                </div>
            </div>
            ))}
            
        </div>

        <img src="assets/arrow.png" className="arrow left" alt=""  onClick={()=>handleClick("left")}/>
        <img src="assets/arrow.png" className="arrow right" alt="" onClick={()=>handleClick("right")} />
    </div>
  )
}
