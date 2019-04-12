'use strict';
const DateFormatted = DateTimePretty(DateTime);
const Video = props => {
    return (
        <div className="video">
            <iframe src={props.url} frameborder="0" allow="autoplay; encrypted-media" allowfullscreen></iframe>
            <DateFormatted date={props.date} />
        </div>
    )
};