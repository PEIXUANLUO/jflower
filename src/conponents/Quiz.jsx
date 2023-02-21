// whole wrapper for test
import React, { useContext } from 'react';
// 把quiz的內容引進來
import { QuizContext } from '../contexts/quiz';
import Question from "./Question";





const Quiz = () => {
    // 把quiz裡的狀態引進來。State會更新，dispatch觸發action
    const [quizState, dispatch] = useContext(QuizContext)
    console.log("quizState", quizState)
    // return有兩種結果，顯示結果true or false。
    return (
        <div classNameName='psychologicalTest'>
            {/* 如果要秀答案的話，答案內容 */}
            {quizState.showResults && (
                <div>
                    <div>
                        <p id="testAnswerWord1"><b>X 的環保屬性</b> </p>
                        <p>獲得分數： {quizState.correctAnswerCount} </p>

                    </div>

                    <div className="container">
                        <div className="row rowContainer">
                            <div id="testImgPlace" className="col-md-12 col-lg-6 col-12 p-5 ">
                                {/* <img src={pic} alt="" /> */}
                                {/* <img src={process.env.PUBLIC_URL + '/img/00.jpg'} />; */}
                                {/* <img src="/00.jpg" alt='123' classNameName='testImg'/> */}
                                {/* <div classNameName='testImg'>123</div> */}
                            </div>
                            <div id="testAnswerWords" className="col-md-12 col-lg-6 col-12  mt-lg-5 p-5 col-ps-0">
                                <div id="title">
                                    <p id="animalName">海鸚鵡</p>
                                    <p id="animalHashtag">#環保可愛吉祥物</p>
                                    <br />
                                    <p id="animalDescription">
                                        總而言之，若沒有可愛動物的存在，那麼後果可想而知。海涅曾說過，人生是疾病，世界是醫院，而死是我們的醫生。這句話讓我們得到了一個全新的觀點去思考這個問題。
                                    </p>
                                </div>


                            </div>
                        </div>
                    </div>
                    <div className=" row rowSave  testAnswerRowSave">
                        <div className=" col-0 col-lg-1 "></div>
                        <div id="saveImage" className="col-12 col-lg-2 btn m-1">點擊儲存測驗結果</div>
                        <div className=" col-0 col-lg-1 "></div>
                        <div id="btnToMap" className="col-12 col-lg-3 btn  m-1">查看循環杯地圖</div>
                        <div className="col-0 col-lg-1 "></div>
                        <div id="shareImage" className="col-12 col-lg-3 btn  m-1">分享測驗結果
                            <div className="testIcons">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-facebook" viewBox="0 0 16 16">
                                    <path
                                        d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-instagram" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z" />
                                </svg>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="bi bi-line" viewBox="0 0 16 16">
                                    <path
                                        d="M8 0c4.411 0 8 2.912 8 6.492 0 1.433-.555 2.723-1.715 3.994-1.678 1.932-5.431 4.285-6.285 4.645-.83.35-.734-.197-.696-.413l.003-.018.114-.685c.027-.204.055-.521-.026-.723-.09-.223-.444-.339-.704-.395C2.846 12.39 0 9.701 0 6.492 0 2.912 3.59 0 8 0ZM5.022 7.686H3.497V4.918a.156.156 0 0 0-.155-.156H2.78a.156.156 0 0 0-.156.156v3.486c0 .041.017.08.044.107v.001l.002.002.002.002a.154.154 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157Zm.791-2.924a.156.156 0 0 0-.156.156v3.486c0 .086.07.155.156.155h.562c.086 0 .155-.07.155-.155V4.918a.156.156 0 0 0-.155-.156h-.562Zm3.863 0a.156.156 0 0 0-.156.156v2.07L7.923 4.832a.17.17 0 0 0-.013-.015v-.001a.139.139 0 0 0-.01-.01l-.003-.003a.092.092 0 0 0-.011-.009h-.001L7.88 4.79l-.003-.002a.029.029 0 0 0-.005-.003l-.008-.005h-.002l-.003-.002-.01-.004-.004-.002a.093.093 0 0 0-.01-.003h-.002l-.003-.001-.009-.002h-.006l-.003-.001h-.004l-.002-.001h-.574a.156.156 0 0 0-.156.155v3.486c0 .086.07.155.156.155h.56c.087 0 .157-.07.157-.155v-2.07l1.6 2.16a.154.154 0 0 0 .039.038l.001.001.01.006.004.002a.066.066 0 0 0 .008.004l.007.003.005.002a.168.168 0 0 0 .01.003h.003a.155.155 0 0 0 .04.006h.56c.087 0 .157-.07.157-.155V4.918a.156.156 0 0 0-.156-.156h-.561Zm3.815.717v-.56a.156.156 0 0 0-.155-.157h-2.242a.155.155 0 0 0-.108.044h-.001l-.001.002-.002.003a.155.155 0 0 0-.044.107v3.486c0 .041.017.08.044.107l.002.003.002.002a.155.155 0 0 0 .108.043h2.242c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156v-.56a.156.156 0 0 0-.155-.157H11.81v-.589h1.525c.086 0 .155-.07.155-.156Z" />
                                </svg>
                            </div>
                        </div>
                        <div className=" col-0 col-lg-1 "></div>
                    </div>
                </div>
            )}
            {!quizState.showResults && (
                <div>
                    <div className='score' id='scoreId'>
                        Question {quizState.currentQuestionIndex + 1} / {quizState.questions.length}
                    </div>
                    <Question />
                    <div className='test-next-button' id='test-next-button'
                        onClick={() => dispatch({ type: "NEXT-QUESTION" })}
                    >Next question</div>
                </div>
            )}

        </div>
    );
}


export default Quiz;