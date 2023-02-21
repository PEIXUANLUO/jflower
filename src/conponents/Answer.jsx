import React from 'react';

const Answer = ({answerText, onSelectAnswer}) => {

    return (
        <div className='answer' id='voteAnswer' onClick={() => onSelectAnswer(answerText)}>
          <div className="anawer-text" >{answerText}</div>
        </div>
    );
}


export default Answer;