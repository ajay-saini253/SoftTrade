
import Video from '../../../images/video.mp4'
const CareerVideo = () => {
    return (
        <div className="cp-video process-bg  pt-80 pb-80">
            <div className="container">
                <div className="xb-img pos-rel d-block">
                    <div className="career_video ">
                        <video
                            className="responsive-video"
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
        </div>
    )
}
export default CareerVideo;