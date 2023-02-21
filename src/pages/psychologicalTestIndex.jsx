import React, { Component } from 'react';
import { Link } from 'react-router-dom';

const PsychologicalTestIndex = () => {

    return (
        <div>
            <div id="testBackground">
                <div class="testAll">


                    <div class="testWords">
                        <p id="testWord1"><b>循環新生活</b></p>

                        <p id="testWord2"><b>測出你的環保屬性</b></p>
                        <p id="testWord3"><b>點擊測驗看你是哪種環保動物</b></p>

                    </div>

                    <div id="testButtonPlace">
                        <p id="btnTest"><b><Link to={`/PsychologicalTest`} className="linkToVote">馬上測驗</Link></b></p>
                    </div>
                </div>
            </div>

        </div>
    );
}


export default PsychologicalTestIndex;