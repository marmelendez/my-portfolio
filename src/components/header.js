function Header() {

    const showMenu = () => {
        const navBar = document.getElementById("navBar")

        if (navBar.classList.contains("invisible")) {
            navBar.classList.remove("invisible")
        } else {
            navBar.classList.add("invisible")            
        }
    }
        
    return (
        <div className="header">
            <button className="header-title f-share-tech m-0" onClick={showMenu}>Menu</button>

            <nav className="nav invisible" id="navBar">
                <ul className="p-0 m-0">
                    <li>
                        <a href="#about-me" aria-label="Go to about me section" className="nav-link">
                            <span className="c-bluegreen">00 </span>About me
                        </a>
                    </li>

                    <li>
                        <a href="#experience" aria-label="Go to experience section" className="nav-link">
                            <span className="c-bluegreen">01 </span>Experience
                        </a>
                    </li>
                    
                    <li>
                        <a href="#project" aria-label="Go to projects section" className="nav-link">
                            <span className="c-bluegreen">02 </span>Project
                        </a>
                    </li>
                </ul>
            </nav>
        </div>
    )

}

export default Header;