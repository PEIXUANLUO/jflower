import React, { useEffect, useState } from 'react'; // 改狀態的
import axios from 'axios'; // 
// import "client/public/css/Votenames.css"
import { Link } from 'react-router-dom';
import VoteTime from './VoteTime';


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
         <div className="votenames m-5 " key={votenames.id}>
            {votenames.map((ooo) => (

               <div className='voteCard'>
                  <div className='img-cont'>
                     <img src="C:\Users\User\Desktop\fuckingReactTest\testSql\client\public\img\00.jpg" alt="" />
                     <span className='drop-down-window'>{ooo.voteTopic}</span>
                     <img className='voteImg' src="" alt="" />
                  </div>
                  <div className='content-cont'>
                     <span className="card-date">{ooo.releaseDate}</span>
                     <span className='card-header'>{ooo.voteSlogan}</span>
                     <span className='card-body'>{ooo.voteDescribe} </span>
                     <button className="btn-goVote "><Link to={`/Vote/${ooo.voteId}`} className="linkToVote">馬上投票123</Link></button>
                  </div>
               </div>

            ))}



         </div>
      </div>
   );
}


export default Votenames;
