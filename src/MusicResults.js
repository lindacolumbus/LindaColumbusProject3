function MusicResults(props) {
    return (
        <article>
            <div>
                <h2>{props.name}</h2>
                <p>{props.blurb.split(' ', 50).join(' ') + '...'} <a href={props.infoLink}>Read more</a></p>
            </div>
            <div>
                <iframe src={props.videoLink} frameBorder="0" title="Embedded YouTube Music Video"></iframe>
            </div>
        </article>
    )
}

export default MusicResults;