function Header() {
    const title = "<Porfolio/>"
    return (
        <div>
            <h1>{title}</h1>

            <nav>
                <ul>
                    <li><a href="#about-me" aria-label="Go to about me section">About me</a></li>
                    <li><a href="#resume" aria-label="Go to resume section">Resume</a></li>
                    <li><a href="#portfolio" aria-label="Go to portfolio section">Portfolio</a></li>
                    <li><a href="#contact" aria-label="Go to contact section">Contact</a></li>
                </ul>
            </nav>
        </div>
    )

}

export default Header;