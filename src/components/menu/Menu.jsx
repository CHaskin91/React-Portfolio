import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">My Work</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact Me</a>
            </li>
            {/* Resume placeholder
            <li onClick={() => setMenuOpen(false)}>
                <a href="#Resume">Resume</a>
            </li> */}
        </ul>
    </div>
  )
}
