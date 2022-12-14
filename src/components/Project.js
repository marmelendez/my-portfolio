import GitHubLogoWebp from '../img/icons/icon-github.webp'
import GitHubLogoPng from '../img/icons/icon-github.png'
import ExternalLinkWebp from '../img/icons/icon-external-link.webp'
import ExternalLinkPng from '../img/icons/icon-external-link.png'

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

            <div className='project-bottom'>
                <div>
                    {
                        project.technologies.map(name => <img src={name} alt='HTML logo' width="40px" height="40px" />)
                    }
                </div>

                <div className='project-links'>
                    {project.hasGithub &&
                        <a href={project.githubLink}>
                            <picture>
                                <source srcSet={GitHubLogoWebp} type="image/webp" />
                                <source srcSet={GitHubLogoPng} type="image/png" />
                                <img src={GitHubLogoPng} alt="Company Logo" className='icon project-icon' />
                            </picture>
                        </a>
                    }

                    {project.hasLink &&
                        <a href={project.link}>
                            <picture>
                                <source srcSet={ExternalLinkWebp} type="image/webp" />
                                <source srcSet={ExternalLinkPng} type="image/png" />
                                <img src={ExternalLinkPng} alt="Company Logo" className='icon project-icon' />
                            </picture>
                        </a>
                    }
                </div>
            </div>
        </div>
    )

}

export default Project;