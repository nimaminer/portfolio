import { useState } from "react"
import "./header.css"

function Header() {
    const [show, setShow] = useState(false)
    const [hamburger, setHamburger] = useState(false)

    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            setHamburger(false)
            setShow(false)
        }
    }

    const navBar = () => {
        if (window.innerWidth <= 480) {
            return (
                <nav>
                    <div id="dropdown" className={hamburger ? "changex" : ""} onClick={() => navBarDropdown()}>
                        <button className="dropbtn" onClick={() => changeShow()}>
                            <span className="nav-icon-1"></span>
                            <span className="nav-icon-2"></span>
                            <span className="nav-icon-3"></span>
                        </button>
                        <div id="myDropdown" className="dropdown-content">
                            {navLinks({ scrollElement: "home", text: "Home" })}
                            {navLinks({ scrollElement: "design-projects", text: "Design" })}
                            {navLinks({ scrollElement: "programming-projects", text: "Programming" })}
                            {navLinks({ scrollElement: "about-me", text: "About Me" })}
                        </div>
                    </div>
                </nav>
            )
        }
        if (window.innerWidth >= 480) {
            return (
                <nav>
                    {navLinks({ scrollElement: "home", text: "Home" })}
                    {navLinks({ scrollElement: "design-projects", text: "Design" })}
                    {navLinks({ scrollElement: "programming-projects", text: "Programming" })}
                    {navLinks({ scrollElement: "about-me", text: "About Me" })}
                </nav>
            )
        }
    }

    const navLinks = (props) => {
        return (
            <a className="headerlink" onClick={() => { scrollToElement([props.scrollElement]) }}>{props.text}</a>
        )
    }


    const navBarDropdown = () => {
        setHamburger(!hamburger)
    }

    const changeShow = () => {
        setShow(!show)
    }

    const scrollToElement = (id) => {
        var element = document.getElementById(id);
        const offset = 40;
        const bodyRect = document.body.getBoundingClientRect().top;
        const elementRect = element.getBoundingClientRect().top;
        const elementPosition = elementRect - bodyRect;
        const offsetPosition = elementPosition - offset;
        if (element) {
            window.scrollTo({
                behavior: 'smooth',
                top: offsetPosition
            });
        }
    }

    return (
        <header className={show ? "show" : ""}>
            <a href="#page-start"> <img src="/images/header/logo.png" alt="Website Logo." /></a>
            {navBar()}
        </header>
    )
}


export default Header