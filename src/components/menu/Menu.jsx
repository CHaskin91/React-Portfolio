import "./menu.scss"

export default function Menu({ menuOpen, setMenuOpen }) {
  return (
    <div className={"menu " + (menuOpen && "active")}>
        <ul>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#intro">Home</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#about">About Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#portfolio">My Work</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="#contact">Contact Me</a>
            </li>
            <li onClick={() => setMenuOpen(false)}>
                <a href="./assets/Resume_4.15.22.pdf">Resume</a>
            </li>
        </ul>
    </div>
  )
}
