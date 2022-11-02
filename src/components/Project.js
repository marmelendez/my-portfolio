const GitHubLogoWebp = require('../img/icon-github.webp')
const GitHubLogoPng = require('../img/icon-github.png')
const ExternalLinkWebp = require('../img/icon-external-link.webp')
const ExternalLinkPng = require('../img/icon-external-link.png')


function Project({ project }) {
    return (
        <div className='project'>
            <picture>
                <source srcSet={project.imgWebp} type="image/webp" />
                <source srcSet={project.imgPng} type="image/png" />
                <img src={project.imgPng} alt="Company Logo" className='project-img' />
            </picture>
            <h2>{project.name}</h2>

            <p>{project.description}</p>

            <div className='project-links'>

                {project.hasGithub &&
                    <a href={project.githubLink}>
                        <picture>
                            <source srcSet={GitHubLogoWebp} type="image/webp" />
                            <source srcSet={GitHubLogoPng} type="image/png" />
                            <img src={GitHubLogoPng} alt="Company Logo" className='icon' />
                        </picture>
                    </a>
                }

                {project.hasLink &&
                    <a href={project.link}>
                        <picture>
                            <source srcSet={ExternalLinkWebp} type="image/webp" />
                            <source srcSet={ExternalLinkPng} type="image/png" />
                            <img src={ExternalLinkPng} alt="Company Logo" className='icon' />
                        </picture>
                    </a>
                }
            </div>
        </div>
    )

}

export default Project;