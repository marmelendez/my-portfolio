import LocationIconPng from '../img/icon-location.png'
import LocationIconWebp from '../img/icon-location.webp'

function Experience(props) {

    const topID = `experience-top-${props.company}`
    const bottomID = `experience-bottom-${props.company}`

    const showDescription = () => {
        const experienceTop = document.getElementById(topID)
        const experienceBottom = document.getElementById(bottomID)
        console.log(experienceBottom);

        if (experienceBottom.classList.contains("hide")) {
            experienceTop.classList.remove("close");
            experienceBottom.classList.remove("hide")
        } else {
            experienceTop.classList.add("close")
            experienceBottom.classList.add("hide")
        }
    }
    
    return (
        <div className='experience'>
            <div className='experience-top' onClick={showDescription} id={topID}>
                <h2 className='m-0'>{props.company}</h2>
                <p className='m-0'>{props.date}</p>
                <h3 className='m-0 f-inter-light'>{props.position}</h3>
            </div>

            <div className='experience-bottom' id={bottomID}>
                <picture>
                    <source srcSet={props.imgWebp} type="image/webp" />
                    <source srcSet={props.imgPng} type="image/png" />
                    <img src={props.imgPng} alt="Company Logo" className='experience-img'/>
                </picture>

                <p>{props.description}</p>

                <div className='experience-location'>
                <picture>
                    <source srcSet={LocationIconWebp} type="image/webp" />
                    <source srcSet={LocationIconPng} type="image/png" />
                    <img src={LocationIconPng} alt="Location icon" className="icon" />
                </picture>

                <p>{props.location}</p>
                </div>
            </div>
        </div>
    );
}

export default Experience;