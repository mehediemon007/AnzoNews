import React from 'react';
import {Link} from 'react-router-dom'

const SingleVote = () => {
    return (
        <>
            <div className="item">
                <h4 className="mb-3">This is the title of a the of a test news</h4>
                <div className="vote-topic">
                    <div className="vote-option">
                        <span className="circle"></span>
                        <span>YES</span>
                    </div>
                    <span>40%</span>
                    <span className="progress" style={{'--w':40}}></span>
                </div>
                <div className="vote-topic">
                    <div className="vote-option">
                        <span className="circle"></span>
                        <span>NO</span>
                    </div>
                    <span>50%</span>
                    <span className="progress" style={{'--w':50}}></span>
                </div>
                <div className="vote-topic">
                    <div className="vote-option">
                        <span className="circle"></span>
                        <span>NO COMMENT</span>
                    </div>
                    <span>20%</span>
                    <span className="progress" style={{'--w':20}}></span>
                </div>
                <div className="text-center">
                    <Link to="#" className="vote-btn">Chnage Vote</Link>
                </div>
            </div>
        </>
    )
}

export default SingleVote;