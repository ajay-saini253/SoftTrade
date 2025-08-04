import Video from '../../../images/video.mp4'

const AboutVideo = () => {
    return (
        <div className="about-video pt-75">
            <div className="container">
                <div className="career_video">
                    <video
                        loop
                        muted
                        playsInline
                        autoPlay
                    >
                        <source src={Video} type="video/mp4" />
                        Your browser does not support the video.
                    </video>
                </div>
            </div>
        </div>
    )
}
export default AboutVideo