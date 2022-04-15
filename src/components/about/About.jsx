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
                "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
        },
        {
            id: "2",
            icon: "./assets/personTrio.png",
            title: "",
            desc: "Hello_World",
        },
        {
            id: "3",
            icon: "./assets/personTrio.png",
            title: "",
            desc: "Hello_World333333",
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
