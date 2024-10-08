import Button from "./Button";

const VideoCard = ({ url, title }) => {
    return (
        <div className="video-card">
            <h1 className="title" style={{ color: "black" }}>
                {title}
            </h1>

            <div className="video-card-body">
                <iframe
                    style={{width:"100%", height:"100%"}}
                    src= {url}
                    title="YouTube video player"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                ></iframe>
            </div>
        </div>
    );
};

export default VideoCard;
