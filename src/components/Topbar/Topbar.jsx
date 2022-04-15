import "./topbar.scss"
import { ContactPhone, Mail, LinkedIn, GitHub } from "@mui/icons-material"

export default function Topbar({ menuOpen, setMenuOpen }) {
  return (
    <div className={"topbar " + (menuOpen && "active")}>
        <div className="wrapper">
            <div className="left">
                <a href="#intro" className="logo">Corbin Haskin.</a>
                <div className="itemContainer">
                    <ContactPhone className="icon" />
                    <span>+515 975 2309</span>
                </div>
                <div className="itemContainer">
                    <Mail className="icon" />
                    <span>CHaskin91@gmail.com</span>
                </div>
                <div className="itemContainer">
                    <LinkedIn className="icon" />
                    <span>LinkedIn</span>
                </div>
                <div className="itemContainer">
                    <GitHub className="icon" />
                    <span>GitHub</span>
                </div>
            </div>
            
            <div className="right">
                <div className="hamburger" onClick={()=>setMenuOpen(!menuOpen)}>
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
