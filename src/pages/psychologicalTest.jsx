import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Quiz from '../conponents/Quiz';
import { QuizProvider } from '../contexts/quiz';


const PsychologicalTest = () => {

    return (
        <div>
            <QuizProvider>
                < Quiz />
            </QuizProvider >
            
        </div>
    );
}


export default PsychologicalTest;