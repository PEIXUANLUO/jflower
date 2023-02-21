// 假資料
import React from 'react';


// 連資料庫
// import React, { useEffect, useState } from 'react'; // 改狀態的
// import axios from 'axios'; 
// import { Link } from 'react-router-dom';
import VoteTime from './VoteTime';






//  Votecontent 一個名字，影響useState
const Votes = () => {


    // useState 會回傳一個包含兩個值的 array，
    // 第一個值是 state、第二個值是用來更新 state 的函式
    // 每當 state 值改變，就會觸發 re-render
    // const [votes, setVotes] = useState([])    // useState()會回傳一個包含兩個值的 array，([])，剛開始是空的

    // // 任何會產生 side Effect 的行為都應該 Effect Hook 裡執行
    // // 資料整合進一個單一的 API
    // useEffect(() => {
    //     const fecthAllVotes = async () => {              // fecth拿東西，async非同步，
    //         try {
    //             const res = await axios.get("http://localhost:3100/vote/1")    // await等到拿好資料，透過axios.get
    //             setVotes(res.data);
    //             console.log(res.data);
    //         } catch (err) {
    //             console.log(err)
    //         }
    //     };
    //     fecthAllVotes();
    // }, [])    // []表示只跑一次

    // console.log(votes);

    // const ShowVoteContent = () => {
    //     {votecontent.map((vvv) => {
    //         return (

    //             <div>
    //                 <p>{vvv.voteId}</p>
    //             </div>

    //           )
    //     })}

    // }

    return (
        <div>

            <VoteTime />
            <div class="votePoll">
                <div class="question" >希望在哪開據點</div>
                <img src="" alt="" />
                <div class="answers">
                    <p class="voteAnswer" tabindex="1" data-toggle="modal" data-target="#myModal">台中火車站</p>
                    <p class="voteAnswer" tabindex="1" data-toggle="modal" data-target="#myModal">一中商圈</p>
                    <p class="voteAnswer" tabindex="1" data-toggle="modal" data-target="#myModal">廟東夜市</p>
                    <p class="voteAnswer" tabindex="1" data-toggle="modal" data-target="#myModal">東海大學</p>
                </div>



            </div>

            {/* 連資料庫 */}
            {/* {votes.map((ooo) => ( */}

            {/* <div class="poll">
                    <div class="question">{ooo.voteTopic}</div>
                    <div class="answers">
                        <p class="answer" tabindex="1" data-toggle="modal" data-target="#myModal">{ooo.options1}</p>
                        <p class="answer" tabindex="1" data-toggle="modal" data-target="#myModal">{ooo.options2}</p>
                        <p class="answer" tabindex="1" data-toggle="modal" data-target="#myModal">{ooo.options3}</p>
                        <p class="answer" tabindex="1" data-toggle="modal" data-target="#myModal">{ooo.options4}</p>
                    </div>
                </div> */}




            {/* ))} */}



        </div>
    );
}


export default Votes;
