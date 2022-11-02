import LocationIconPng from '../img/icons/icon-location.png'
import LocationIconWebp from '../img/icons/icon-location.webp'
import Button from './Button'

function Experience({ data }) {
    const topID = `experience-top-${data.company}`
    const bottomID = `experience-bottom-${data.company}`

    const showDescription = () => {
        const experienceTop = document.getElementById(topID)
        const experienceBottom = document.getElementById(bottomID)

        if (experienceBottom.classList.contains("hide")) {
            experienceTop.classList.remove("close");
            experienceBottom.classList.remove("hide")
        } else {
            experienceTop.classList.add("close")
            experienceBottom.classList.add("hide")
        }
    }

    if (data.open) {
        return (
            <div className='experience'>
                <div className='experience-top close' onClick={showDescription} id={topID}>
                    <h2 className='m-0'>{data.company}</h2>
                    <p className='m-0'>{data.date}</p>
                    <h3 className='m-0 f-inter-light'>{data.position}</h3>
                </div>

                <div className='experience-bottom' id={bottomID}>
                    <picture>
                        <source srcSet={data.imgWebp} type="image/webp" />
                        <source srcSet={data.imgPng} type="image/png" />
                        <img src={data.imgPng} alt="Company Logo" className='experience-img' />
                    </picture>

                    <p>{data.description}</p>

                    <div className='experience-location'>
                        <picture>
                            <source srcSet={LocationIconWebp} type="image/webp" />
                            <source srcSet={LocationIconPng} type="image/png" />
                            <img src={LocationIconPng} alt="Location icon" className="icon" />
                        </picture>

                        <p>{data.location}</p>
                    </div>

                    <div>
                        {
                            data.technologies.map(name => <Button techName={name}/>)
                        }
                    </div>
                </div>
            </div>
        );
    } else {
        return (
            <div className='experience'>
                <div className='experience-top close' onClick={showDescription} id={topID}>
                    <h2 className='m-0'>{data.company}</h2>
                    <p className='m-0'>{data.date}</p>
                    <h3 className='m-0 f-inter-light'>{data.position}</h3>
                </div>

                <div className='experience-bottom hide' id={bottomID}>
                    <picture>
                        <source srcSet={data.imgWebp} type="image/webp" />
                        <source srcSet={data.imgPng} type="image/png" />
                        <img src={data.imgPng} alt="Company Logo" className='experience-img' />
                    </picture>

                    <p>{data.description}</p>

                    <div className='experience-location'>
                        <picture>
                            <source srcSet={LocationIconWebp} type="image/webp" />
                            <source srcSet={LocationIconPng} type="image/png" />
                            <img src={LocationIconPng} alt="Location icon" className="icon" />
                        </picture>

                        <p>{data.location}</p>
                    </div>

                    <div>
                        {
                            data.technologies.map(name => <Button techName={name}/>)
                        }
                    </div>
                </div>
            </div>
        );
    }
}

export default Experience;