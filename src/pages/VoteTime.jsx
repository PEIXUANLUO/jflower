import React from 'react';


const VoteTime = () => {

        return (
            <div className="voteTime">
            <div className="voteTimeOptions">
                <div tabIndex="1" className="voteTimeOption">
                    熱門投票
                </div>
    
                <div tabIndex="2" className="voteTimeOption">
                    最新投票
                </div>
    
                <div tabIndex="3" className="voteTimeOption">
                    過期精選
                </div>
                <div tabIndex="4" className="voteTimeOption">
                    即將到期
                </div>
            </div>
        </div>
        );
    }

 
export default VoteTime;