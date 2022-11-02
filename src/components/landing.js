const GitHubLogoWebp = require('../img/icon-github.webp')
const GitHubLogoPng = require('../img/icon-github.png')
const LinkedinLogoWebp = require('../img/icon-linkedin.webp')
const LinkedinLogoPng = require('../img/icon-linkedin.png')
const EmailLogoWebp = require('../img/icon-email.webp')
const EmailLogoPng = require('../img/icon-email.png')

function Landing() {
    return (
        <div className="landing">
            <p className="c-aqua f-share-tech m-0">Hi there,</p>
            <h1 className="m-0">I am Maribel Melendez</h1>
            <p className="m-0">I am computer science and technology student. Keep scrolling to know where what I have been doing :D</p>

            <a href="https://github.com/marmelendez" aria-label="Github url" target="_blank">
                <picture>
                    <source srcSet={GitHubLogoWebp} type="image/webp" />
                    <source srcSet={GitHubLogoPng} type="image/png" />
                    <img src={GitHubLogoPng} alt="Github url" className="icon" />
                </picture>
            </a>

            <a href="https://www.linkedin.com/in/maribel-melendezd/" aria-label="LinkedIn url">
                <picture>
                    <source srcSet={LinkedinLogoWebp} type="image/webp" />
                    <source srcSet={LinkedinLogoPng} type="image/png" />
                    <img src={LinkedinLogoPng} alt="LinkedIn url" className="icon" />
                </picture>
            </a>

            <a href="mailto:lizbethmelendez@hotmail.com" aria-label="Email url">
                <picture>
                    <source srcSet={EmailLogoWebp} type="image/webp" />
                    <source srcSet={EmailLogoPng} type="image/png" />
                    <img src={EmailLogoPng} alt="Email url" className="icon" />
                </picture>
            </a>

        </div>
    );
}

export default Landing;