function MusicResults(props) {
    return (
        <div>
            <h2>{props.name}</h2>
            <ul>
                <li>{props.infoLink}</li>
                <li>{props.videoLink}</li>
            </ul>
        </div>
    )
}

export default MusicResults;