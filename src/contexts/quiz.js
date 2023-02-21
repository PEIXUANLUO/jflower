// usecontent，Context 提供了一種通過組件樹傳遞數據的方法，而無需在每個級別手動傳遞 props。

import { createContext, useReducer } from "react";
import questions from "../data"
import { shuffleAnswers } from "../helper";

// 初始值
const initialState = {
    questions,
    currentQuestionIndex: 0, // 看到第幾題
    showResults: false, //顯示結果
    correctAnswerCount: 0, //算對幾題
    answers: shuffleAnswers(questions[0]),
    totallyAnswersCount: '',
};

// 監聽動作跟狀態，用來變更的
const reducer = (state, action) => {
    // console.log，確定這邊有沒有監聽到dispatch的變更。
    console.log("reducer", state, action);
    // Quiz.jsx有行動後，看是什麼type。action描述實際發生一些事
    switch (action.type) {
        case "SELECT_ANSWER": {
            console.log("action.payload123", action.payload)
            console.log("action.payload456", action.payload)
            // 正確題數為 => 改成totallyAnswersCount
            const totallyAnswersCount =
                action.payload ===
                    state.questions[state.currentQuestionIndex].answer1
                    ? state.totallyAnswersCount + 1
                    : state.totallyAnswersCount


            // action上面第15行的 .payload新增的東西回來的地方
            //   action.payload ===
            //     // => state.questions[state.currentQuestionIndex].Answer1 
            //     state.questions[state.currentQuestionIndex].correctAnswer
            //     ? state.correctAnswersCount + 1
            //     : state.correctAnswersCount;

            // if(state.questions[state.currentQuestionIndex].Answer1 ){
            //   state.totallyAnswersCount + 1;
            // }else if (state.questions[state.currentQuestionIndex].Answer2){
            // state.totallyAnswersCount + 2;
            // }else if (state.questions[state.currentQuestionIndex].Answer3){
            // state.totallyAnswersCount + 3;
            // }else (){
            //     state.totallyAnswersCount + 3;
            // }


            return {
                ...state,
                currentAnswer: action.payload,
                totallyAnswersCount,
            };
        }
        // type為NEXT-QUESTION，則回傳
        case "NEXT-QUESTION": {
            // 按下一題之後，確認進行的題目要不要顯示答案
            const showResults =
                state.currentQuestionIndex === state.questions.length - 1;
            // showResults，如果是true，就不用再加了
            const currentQuestionIndex = showResults
                ? state.currentQuestionIndex
                : state.currentQuestionIndex + 1;
            const answers = showResults
                ? []
                : shuffleAnswers(state.questions[currentQuestionIndex]);
            return {
                ...state,
                currentQuestionIndex,
                showResults,
                answers,
                totallyAnswersCount: '',
            }
        }
    }
    return state;
}

export const QuizContext = createContext();

// QuizProvider全部內容的提供者，所以內容({children })=>{ }，要全域都拿得到
export const QuizProvider = ({ children }) => {
    // 
    const value = useReducer(reducer, initialState)
    // Context.Provider，組件允許使用組件訂閱上下文更改
    return <QuizContext.Provider value={value}>{children}</QuizContext.Provider>;
}