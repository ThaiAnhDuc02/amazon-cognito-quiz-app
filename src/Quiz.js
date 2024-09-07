import React, { useState, useEffect } from 'react';
import { quizData, quizTitle } from './quizData';

function Quiz() {
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState("");
    const [isCorrect, setIsCorrect] = useState(null);
    const [timeLeft, setTimeLeft] = useState(20);
    const [hasStarted, setHasStarted] = useState(false); // State to track if quiz has started

    useEffect(() => {
        if (timeLeft > 0 && !showScore && hasStarted) {
            const timerId = setTimeout(() => setTimeLeft(timeLeft - 1), 1000);
            return () => clearTimeout(timerId);
        } else if (timeLeft === 0) {
            handleNextQuestion();
        }
    }, [timeLeft, showScore, hasStarted]);

    const handleAnswerOptionClick = (option) => {
        const correctAnswer = quizData[currentQuestion].answer;
        setSelectedAnswer(option);
        if (option === correctAnswer) {
            setScore(score + 1);
            setIsCorrect(true);
        } else {
            setIsCorrect(false);
        }
        setTimeout(handleNextQuestion, 2000);
    };

    const handleNextQuestion = () => {
        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < quizData.length) {
            setCurrentQuestion(nextQuestion);
            setIsCorrect(null);
            setSelectedAnswer("");
            setTimeLeft(20);
        } else {
            setShowScore(true);
        }
    };

    const handleStartClick = () => {
        setHasStarted(true);
    };

    const colors = ['#FF6B6B', '#4ECDC4', '#45B7D1', '#FFA07A'];

    return (
        <div className='quiz' style={{ textAlign: 'center', maxWidth: '1080px', margin: '0 auto', padding: '20px' }}>
            {!hasStarted ? (
                <div className='intro-section' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    <h1>Welcome to the Quiz!</h1>
                    <p>{quizTitle}</p>
                    <button
                        onClick={handleStartClick}
                        style={{
                            backgroundColor: '#4ECDC4',
                            border: 'none',
                            padding: '15px 30px',
                            fontSize: '18px',
                            cursor: 'pointer',
                            color: 'white',
                            borderRadius: '5px',
                            marginTop: '20px',
                        }}
                    >
                        Bắt đầu
                    </button>
                </div>
            ) : showScore ? (
                <div className='score-section' style={{ fontSize: '24px', fontWeight: 'bold' }}>
                    You scored {score} out of {quizData.length}
                </div>
            ) : (
                <>
                    <div className='question-section'>
                        <div className='question-count' style={{ fontSize: '36px', marginBottom: '70px' }}>
                            <span>Question {currentQuestion + 1}</span>/{quizData.length}
                        </div>
                        <div className='question-text' style={{ fontSize: '36px', marginBottom: '20px', }}>{quizData[currentQuestion].question}</div>
                    </div>
                    <div className='answer-section' style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '200px', rowGap: '20px' }}>
                        {quizData[currentQuestion].options.map((option, index) => (
                            <button
                                onClick={() => handleAnswerOptionClick(option)}
                                key={option}
                                style={{
                                    backgroundColor: selectedAnswer === option
                                        ? (isCorrect ? 'lightgreen' : 'pink')
                                        : colors[index],
                                    border: 'none',
                                    padding: '10px',
                                    fontSize: '16px',
                                    cursor: 'pointer',
                                    color: 'white',
                                    borderRadius: '5px',
                                    width: '300px',
                                    height: '80px',
                                }}
                            >
                                {option}
                            </button>
                        ))}
                    </div>
                    {selectedAnswer && (
                        <div style={{ marginTop: '20px', fontSize: '24px', position: 'absolute', top: 20, right: 30 }}>
                            {isCorrect ? <span style={{ padding: '18px 30px', backgroundColor: "green", borderRadius: '10px' }}>Correct! 🎉</span>
                                : <span style={{ padding: '18px 30px', backgroundColor: "#FF6B6B", borderRadius: '10px' }}>Sorry, that is not right. 😢</span>}
                        </div>
                    )}
                    <div className='timer' style={{ fontSize: '24px', marginBottom: '30px', marginTop: '30px', fontWeight: '500' }}>Time left: {timeLeft}s</div>
                </>
            )}
        </div>
    );
}

export default Quiz;
