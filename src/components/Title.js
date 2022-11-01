function Title(props) {
    return (
        <div id={props.id}>
            <h1 className="f-share-tech c-aqua"><span className="c-bluegreen">{props.number} </span>{props.sectionTitle}</h1>
        </div>
    );
}

export default Title;