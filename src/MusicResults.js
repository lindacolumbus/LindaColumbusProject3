function MusicResults(props) {
    return (
        <article>
            <h2>{props.name}</h2>
                <ul>
                    {/* Render first two sentences returned from API description */}
                    <li>{props.blurb.split(' ', 50).join(' ') + '...'} <a href={props.infoLink}>Read more</a></li>
                    <li><iframe src={props.videoLink} frameBorder="0" title="Embedded YouTube Music Video" allowFullscreen="true"></iframe></li>
                </ul>
        </article>
    )
}

export default MusicResults;