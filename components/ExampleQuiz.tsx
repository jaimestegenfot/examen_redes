'use client';

import { useState, useEffect } from 'react';
import { exampleQuestions, ExampleQuestion } from '@/data/exampleQuestions';
import Link from 'next/link';

export default function ExampleQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [shuffledQuestions, setShuffledQuestions] = useState<ExampleQuestion[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    const shuffled = [...exampleQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
  }, []);

  const currentQuestion = shuffledQuestions[currentQuestionIndex];

  const handleAnswerSelect = (answerIndex: number) => {
    if (showExplanation) return;
    setSelectedAnswer(answerIndex);
  };

  const handleSubmitAnswer = () => {
    if (selectedAnswer === null) return;
    setShowExplanation(true);
    if (selectedAnswer === currentQuestion.correctAnswer) {
      if (!answeredQuestions.has(currentQuestion.id)) {
        setScore(score + 1);
        setAnsweredQuestions(new Set([...answeredQuestions, currentQuestion.id]));
      }
    }
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < shuffledQuestions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    } else {
      setIsQuizComplete(true);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
      setSelectedAnswer(null);
      setShowExplanation(false);
    }
  };

  const handleRestart = () => {
    const shuffled = [...exampleQuestions].sort(() => Math.random() - 0.5);
    setShuffledQuestions(shuffled);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
    setScore(0);
    setAnsweredQuestions(new Set());
    setIsQuizComplete(false);
    setReviewMode(false);
  };

  const handleReviewMode = () => {
    setReviewMode(true);
    setIsQuizComplete(false);
    setCurrentQuestionIndex(0);
    setSelectedAnswer(null);
    setShowExplanation(false);
  };

  if (isQuizComplete && !reviewMode) {
    const percentage = Math.round((score / shuffledQuestions.length) * 100);
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 sm:py-12 px-4 relative overflow-hidden">
        {/* Decoración de fondo */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-8 left-1/2 w-72 h-72 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
        </div>
        
        <div className="max-w-4xl mx-auto relative z-10">
          <div className="bg-white/90 backdrop-blur-lg rounded-3xl shadow-2xl p-6 sm:p-10 text-center border-4 border-emerald-300 relative overflow-hidden">
            <div className="absolute inset-0 bg-gradient-to-r from-emerald-400/20 via-teal-400/20 to-green-400/20 animate-pulse"></div>
            
            <div className="relative z-10 mb-6">
              <div className="text-6xl sm:text-7xl mb-4 animate-bounce">🎉</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                ¡Quiz de Ejemplos Completado!
              </h2>
            </div>
            <div className="relative z-10 mb-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-emerald-500 via-teal-600 to-green-600 text-transparent bg-clip-text mb-3 animate-pulse">
                {score}/{shuffledQuestions.length}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
                {percentage}% de respuestas correctas
              </div>
              <div className="mt-4 max-w-md mx-auto">
                <div className="h-4 bg-gray-200 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 rounded-full transition-all duration-1000 shadow-lg"
                    style={{ width: `${percentage}%` }}
                  ></div>
                </div>
              </div>
            </div>
            <div className="relative z-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center">
              <button
                onClick={handleRestart}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                🔄 Reiniciar Quiz
              </button>
              <button
                onClick={handleReviewMode}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                📚 Revisar Respuestas
              </button>
              <Link
                href="/"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95"
              >
                🏠 Menú Principal
              </Link>
            </div>
          </div>
        </div>
      </div>
    );
  }

  if (!currentQuestion) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4">
        <div className="text-center">
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-emerald-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 font-semibold">Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-4 sm:py-8 px-3 sm:px-4 relative overflow-hidden">
      {/* Decoración de fondo animada */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute top-20 left-10 w-96 h-96 bg-emerald-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute top-40 right-10 w-96 h-96 bg-teal-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
        <div className="absolute bottom-20 left-1/2 w-96 h-96 bg-green-200 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
      </div>

      <div className="max-w-4xl mx-auto relative z-10">
        {/* Header con diseño mejorado */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-4 sm:p-6 mb-4 sm:mb-6 border-4 border-emerald-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400"></div>
          
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex-1">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-3 h-3 bg-emerald-500 rounded-full animate-pulse"></div>
                <h1 className="text-xl sm:text-2xl md:text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 text-transparent bg-clip-text">
                  📝 Preguntas de Ejemplos
                </h1>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 ml-5">Estudia preguntas que piden ejemplos de conceptos</p>
            </div>
            {!reviewMode && (
              <div className="text-center sm:text-right bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-2xl px-4 sm:px-6 py-2 sm:py-3 shadow-xl transform hover:scale-105 transition-transform">
                <div className="text-xs sm:text-sm font-medium mb-1">Puntuación</div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {score}/{shuffledQuestions.length}
                </div>
              </div>
            )}
          </div>
          
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <div className="flex-1 bg-emerald-100 rounded-full h-4 sm:h-5 overflow-hidden shadow-inner border-2 border-emerald-200">
              <div
                className="bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 h-full rounded-full transition-all duration-500 shadow-lg relative overflow-hidden"
                style={{
                  width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`,
                }}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
              </div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-700 whitespace-nowrap bg-emerald-50 px-3 py-1 rounded-full border-2 border-emerald-300">
              {currentQuestionIndex + 1} / {shuffledQuestions.length}
            </span>
          </div>
          
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-emerald-100 to-teal-100 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold shadow-md border-2 border-emerald-300">
              {currentQuestion.category}
            </span>
            <span className="inline-block px-3 py-1.5 bg-gradient-to-r from-teal-100 to-green-100 text-teal-800 rounded-full text-xs sm:text-sm font-semibold shadow-md border-2 border-teal-300">
              {currentQuestion.concept}
            </span>
            <Link
              href="/"
              className="ml-auto text-xs sm:text-sm text-emerald-600 hover:text-emerald-700 hover:underline font-semibold flex items-center gap-1"
            >
              ← Volver al Menú
            </Link>
          </div>
        </div>

        {/* Question Card con diseño mejorado */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-2xl p-5 sm:p-8 mb-4 sm:mb-6 border-4 border-emerald-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400"></div>
          
          <div className="mb-4 p-3 sm:p-4 bg-gradient-to-r from-yellow-50 to-amber-50 border-l-4 border-yellow-500 rounded-xl shadow-md relative z-10">
            <p className="text-xs sm:text-sm text-yellow-800 font-semibold flex items-center gap-2">
              <span className="text-lg">💡</span> Este tipo de pregunta pide ejemplos específicos del concepto
            </p>
          </div>
          
          <h2 className="text-lg sm:text-xl md:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 leading-tight relative z-10">
            <span className="inline-block w-2 h-2 bg-emerald-500 rounded-full mr-2 animate-pulse"></span>
            {currentQuestion.question}
          </h2>

          <div className="space-y-2 sm:space-y-3 relative z-10">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all duration-300 text-sm sm:text-base relative overflow-hidden group ";
              
              if (showExplanation) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "bg-gradient-to-r from-green-100 to-emerald-100 border-green-500 text-green-800 shadow-lg transform scale-105";
                } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                  buttonClass += "bg-gradient-to-r from-red-100 to-pink-100 border-red-500 text-red-800 shadow-lg";
                } else {
                  buttonClass += "bg-gray-50 border-gray-300 text-gray-600";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "bg-gradient-to-r from-emerald-100 to-teal-100 border-emerald-500 text-emerald-800 shadow-lg transform scale-105";
                } else {
                  buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:border-emerald-400 hover:bg-emerald-50 hover:shadow-md hover:scale-102";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  <div className="flex items-start gap-2 sm:gap-3 relative z-10">
                    <span className="font-bold text-base sm:text-lg mt-0.5 flex-shrink-0 w-8 h-8 flex items-center justify-center bg-emerald-500 text-white rounded-lg shadow-md">
                      {String.fromCharCode(65 + index)}
                    </span>
                    <span className="flex-1 text-left">{option}</span>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <span className="text-green-600 font-bold text-2xl flex-shrink-0 animate-bounce">✓</span>
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <span className="text-red-600 font-bold text-2xl flex-shrink-0">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-gradient-to-r from-emerald-50 to-teal-50 border-l-4 border-emerald-500 rounded-r-xl shadow-lg relative z-10">
              <div className="absolute top-0 left-0 w-1 h-full bg-gradient-to-b from-emerald-400 to-teal-400"></div>
              <h3 className="font-bold text-emerald-800 mb-2 text-base sm:text-lg flex items-center gap-2">
                <span className="text-xl">💡</span> Explicación:
              </h3>
              <p className="text-emerald-700 text-sm sm:text-base leading-relaxed pl-6">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation mejorada */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between mb-4 sm:mb-6">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-5 sm:px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 active:scale-95 disabled:transform-none"
          >
            ← Anterior
          </button>

          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-5 sm:px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 transition-all duration-300 font-bold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95 disabled:transform-none relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center justify-center gap-2">
                ✅ Verificar Respuesta
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-5 sm:px-6 py-3 bg-gradient-to-r from-emerald-500 via-teal-500 to-green-500 text-white rounded-xl hover:from-emerald-600 hover:via-teal-600 hover:to-green-600 transition-all duration-300 font-bold text-sm sm:text-base shadow-xl hover:shadow-2xl transform hover:scale-110 active:scale-95 relative overflow-hidden"
            >
              <span className="relative z-10">
                {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Siguiente →' : 'Finalizar 🎉'}
              </span>
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent opacity-0 hover:opacity-100 transition-opacity"></div>
            </button>
          )}
        </div>

        {/* Question Navigation Grid mejorado */}
        <div className="bg-white/95 backdrop-blur-lg rounded-3xl shadow-xl p-4 sm:p-6 border-4 border-emerald-300 relative overflow-hidden">
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-emerald-400 via-teal-400 to-green-400"></div>
          
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4 flex items-center gap-2">
            <span className="text-xl">🗺️</span> Navegación Rápida
          </h3>
          <div className="grid grid-cols-8 sm:grid-cols-10 gap-1.5 sm:gap-2">
            {shuffledQuestions.map((q, index) => (
              <button
                key={q.id}
                onClick={() => {
                  setCurrentQuestionIndex(index);
                  setSelectedAnswer(null);
                  setShowExplanation(false);
                }}
                className={`p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 border-2 ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-r from-emerald-500 to-teal-600 text-white shadow-xl scale-110 border-emerald-600'
                    : answeredQuestions.has(q.id)
                    ? 'bg-gradient-to-r from-green-100 to-emerald-100 text-green-800 border-green-400 hover:bg-green-200 shadow-md'
                    : 'bg-gray-100 text-gray-700 border-gray-300 hover:bg-gray-200 hover:border-emerald-300'
                }`}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes blob {
          0%, 100% {
            transform: translate(0, 0) scale(1);
          }
          33% {
            transform: translate(30px, -50px) scale(1.1);
          }
          66% {
            transform: translate(-20px, 20px) scale(0.9);
          }
        }
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-blob {
          animation: blob 7s infinite;
        }
        .animation-delay-2000 {
          animation-delay: 2s;
        }
        .animation-delay-4000 {
          animation-delay: 4s;
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .hover\:scale-102:hover {
          transform: scale(1.02);
        }
      `}</style>
    </div>
  );
}
