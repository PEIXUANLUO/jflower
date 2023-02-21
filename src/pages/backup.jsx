import React, { useEffect, useState } from 'react'; // 改狀態的
import axios from 'axios'; // 
// import "client/public/css/Votenames.css"
import { Link } from 'react-router-dom';
import VoteTime from './voteTime';


//  Votenames 一個名字，影響useState
const Votenames = () => {

   // useState 會回傳一個包含兩個值的 array，
   // 第一個值是 state、第二個值是用來更新 state 的函式
   // 每當 state 值改變，就會觸發 re-render
   const [votenames, setVotenames] = useState([])    // useState()會回傳一個包含兩個值的 array，([])，剛開始是空的

   // 任何會產生 side Effect 的行為都應該 Effect Hook 裡執行
   // 資料整合進一個單一的 API
   useEffect(() => {
      const fecthAllVotenames = async () => {              // fecth拿東西，async非同步，
         try {
            const res = await axios.get("http://localhost:3100/votenames")    // await等到拿好資料，透過axios.get
            setVotenames(res.data);
         } catch (err) {
            console.log(err)
         }
      };
      fecthAllVotenames();
   }, [])    // []表示只跑一次

   console.log(votenames);

   return (
      <div>

         <VoteTime />
         <div className="votenames">
            {votenames.map((ooo) => (

               <div class='card'>
                  <div class='img-cont'>
                     <img src="C:\Users\User\Desktop\fuckingReactTest\testSql\client\public\img\00.jpg" alt="" />
                     <span class='drop-down-window'>{ooo.voteTopic}</span>
                  </div>
                  <div class='content-cont'>
                     <span class="card-date">{ooo.releaseDate}</span>
                     <span class='card-header'>{ooo.voteSlogan}</span>
                     <span class='card-body'>{ooo.voteDescribe} </span>
                     <button class="btn-goVote">馬上投票</button>
                  </div>
               </div>

            ))}
         </div>
      </div>
   );
}


export default Votenames;
