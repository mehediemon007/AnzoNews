import React,{useState} from 'react';
import "react-modal-video/css/modal-video.css";
import ModalVideo from "react-modal-video";

const VideoModal = () => {

    const [isOpen, setOpen] = useState(false);
    
    return (
        <>
            <div className="video-overlay">
                <ModalVideo channel='youtube' autoplay isOpen={isOpen} videoId="yzCkM5MRaaI" onClose={() => setOpen(false)} />
                <button className="vid-icon venobox vbox-item more videolink" onClick={()=> setOpen(true)}>
                    <img src="/images/svg-icons/play-icon.svg" alt="Play Icon"/>
                </button>
            </div>
        </>
    )
}

export default VideoModal