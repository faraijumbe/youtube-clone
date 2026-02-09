import React from 'react'
import './PlayVideo.css'
import video1 from '../../assets/video.mp4'
import like from '../../assets/like.png'
import dislike from '../../assets/dislike.png'
import share from '../../assets/share.png'
import save from '../../assets/save.png'
import jack from '../../assets/jack.png'
import user_profile from '../../assets/user_profile.jpg'

const PlayVideo = () => {
  return (
    <div className='play-video'>
        <video src={video1}  controls autoPlay ></video>
        <h3>Channel Names Should Start Each Word With A Capital Letter</h3>
        <div className="play-video-info">
            <p>1525 Views &bull; 2 days ago</p>
            <div>
                <span> <img src={like} alt="" /> Like </span>
                <span> <img src={dislike} alt="" /> Dislike </span>
                <span> <img src={share} alt="" /> Share </span>
                <span> <img src={save} alt="" /> Save </span>
            </div>
        </div>
        <hr />
        <div className="publisher">
            <img src={jack} alt="" />
            <div className="">
                <p>GreaterStack</p>
                <span>10M Subscriber</span>
            </div>
            <button>Subscribe</button>
        </div>
        <div className="vid-description">
            <p>Channel that is making good projects</p>
            <p>Subscribe to my youtube channel for more awesome content</p>
            <hr />
            <h4>13 Comments</h4>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3> Sive Njila <span> 1 day ago</span> </h3>
                    <div className="">I love your videos man, keep it up</div>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3> Farai Jumbe <span> 1 day ago</span> </h3>
                    <div className="">I love my videos too man</div>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3> Some Random <span> 1 day ago</span> </h3>
                    <div className="">Well, it has to be some random coment too I guess</div>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3> Some Random <span> 1 day ago</span> </h3>
                    <div className="">Well, it has to be some random coment too I guess</div>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
            <div className="comment">
                <img src={user_profile} alt="" />
                <div className="">
                    <h3> Some Random <span> 1 day ago</span> </h3>
                    <div className="">Well, it has to be some random coment too I guess</div>
                    <div className="comment-action">
                        <img src={like} alt="" />
                        <span>244</span>
                        <img src={dislike} alt="" />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default PlayVideo