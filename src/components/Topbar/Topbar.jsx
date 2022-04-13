import "./topbar.scss"
import { ContactPhone, Mail } from "@mui/icons-material"

export default function Topbar() {
  return (
    <div className="topbar active">
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
            </div>
            
            <div className="right">
                <div className="hamburger">
                    <span className="line1"></span>
                    <span className="line2"></span>
                    <span className="line3"></span>
                </div>
            </div>
        </div>
    </div>
  )
}
