'use client';

import { useState, useEffect } from 'react';
import { advancedQuestions, AdvancedQuestion } from '@/data/advancedQuestions';
import Link from 'next/link';

const typeLabels = {
  comparison: '🔀 Comparación',
  scenario: '🎭 Escenario',
  process: '📋 Proceso',
  troubleshooting: '🔧 Troubleshooting',
  application: '💼 Aplicación'
};

const typeColors = {
  comparison: 'bg-green-100 text-green-800 border-green-300',
  scenario: 'bg-emerald-100 text-emerald-800 border-emerald-300',
  process: 'bg-teal-100 text-teal-800 border-teal-300',
  troubleshooting: 'bg-lime-100 text-lime-800 border-lime-300',
  application: 'bg-green-200 text-green-900 border-green-400'
};

export default function AdvancedQuiz() {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showExplanation, setShowExplanation] = useState(false);
  const [score, setScore] = useState(0);
  const [answeredQuestions, setAnsweredQuestions] = useState<Set<number>>(new Set());
  const [shuffledQuestions, setShuffledQuestions] = useState<AdvancedQuestion[]>([]);
  const [isQuizComplete, setIsQuizComplete] = useState(false);
  const [reviewMode, setReviewMode] = useState(false);

  useEffect(() => {
    const shuffled = [...advancedQuestions].sort(() => Math.random() - 0.5);
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
    const shuffled = [...advancedQuestions].sort(() => Math.random() - 0.5);
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
      <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-8 sm:py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-3xl shadow-2xl p-6 sm:p-10 text-center border-4 border-teal-300">
            <div className="mb-6">
              <div className="text-6xl sm:text-7xl mb-4">🎉</div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-800 mb-4">
                ¡Quiz Avanzado Completado!
              </h2>
            </div>
            <div className="mb-6">
              <div className="text-5xl sm:text-6xl md:text-7xl font-bold bg-gradient-to-r from-teal-500 to-green-600 text-transparent bg-clip-text mb-3">
                {score}/{shuffledQuestions.length}
              </div>
              <div className="text-xl sm:text-2xl md:text-3xl text-gray-700 font-semibold">
                {percentage}% de respuestas correctas
              </div>
            </div>
            <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center flex-wrap">
              <button
                onClick={handleRestart}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                🔄 Reiniciar Quiz
              </button>
              <button
                onClick={handleReviewMode}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-green-500 to-emerald-600 text-white rounded-xl hover:from-green-600 hover:to-emerald-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
              >
                📚 Revisar Respuestas
              </button>
              <Link
                href="/"
                className="px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-emerald-500 to-teal-600 text-white rounded-xl hover:from-emerald-600 hover:to-teal-700 transition-all duration-300 font-bold text-base sm:text-lg shadow-lg hover:shadow-xl transform hover:scale-105"
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
          <div className="animate-spin rounded-full h-16 w-16 border-4 border-teal-500 border-t-transparent mx-auto mb-4"></div>
          <p className="text-lg text-gray-700 font-semibold">Cargando preguntas...</p>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 py-4 sm:py-8 px-3 sm:px-4">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 mb-4 sm:mb-6 border-2 border-teal-200">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3 sm:gap-4 mb-4">
            <div className="flex-1">
              <h1 className="text-xl sm:text-2xl md:text-3xl font-bold text-gray-800 mb-2">
                🚀 Preguntas Avanzadas
              </h1>
              <p className="text-xs sm:text-sm text-gray-600">
                Comparación, Escenarios, Procesos, Troubleshooting y Aplicación
              </p>
            </div>
            {!reviewMode && (
              <div className="text-center sm:text-right bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl px-4 sm:px-6 py-2 sm:py-3 shadow-lg">
                <div className="text-xs sm:text-sm font-medium mb-1">Puntuación</div>
                <div className="text-2xl sm:text-3xl font-bold">
                  {score}/{shuffledQuestions.length}
                </div>
              </div>
            )}
          </div>
          <div className="flex items-center gap-2 sm:gap-4 mb-4">
            <div className="flex-1 bg-teal-100 rounded-full h-3 sm:h-4 overflow-hidden">
              <div
                className="bg-gradient-to-r from-teal-500 to-green-600 h-full rounded-full transition-all duration-500 shadow-sm"
                style={{
                  width: `${((currentQuestionIndex + 1) / shuffledQuestions.length) * 100}%`,
                }}
              ></div>
            </div>
            <span className="text-xs sm:text-sm font-bold text-gray-700 whitespace-nowrap">
              {currentQuestionIndex + 1} / {shuffledQuestions.length}
            </span>
          </div>
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className={`inline-block px-3 py-1.5 rounded-full text-xs sm:text-sm font-semibold shadow-sm border-2 ${typeColors[currentQuestion.questionType]}`}>
              {typeLabels[currentQuestion.questionType]}
            </span>
            <span className="inline-block px-3 py-1.5 bg-gray-100 text-gray-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm border-2 border-gray-300">
              {currentQuestion.category}
            </span>
            <Link
              href="/"
              className="ml-auto text-xs sm:text-sm text-teal-600 hover:text-teal-700 hover:underline font-semibold"
            >
              ← Volver al Menú
            </Link>
          </div>
        </div>

        {/* Question Card */}
        <div className="bg-white rounded-3xl shadow-xl p-5 sm:p-8 mb-4 sm:mb-6 border-2 border-teal-200">
          <div className="mb-4 p-3 sm:p-4 bg-yellow-50 border-l-4 border-yellow-500 rounded-xl shadow-sm">
            <p className="text-xs sm:text-sm text-yellow-800 font-semibold">
              💡 Esta es una pregunta de tipo: {typeLabels[currentQuestion.questionType]}
            </p>
          </div>
          <h2 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800 mb-4 sm:mb-6 leading-tight">
            {currentQuestion.question}
          </h2>

          <div className="space-y-2 sm:space-y-3">
            {currentQuestion.options.map((option, index) => {
              let buttonClass = "w-full text-left p-3 sm:p-4 rounded-xl border-2 transition-all duration-200 text-sm sm:text-base ";
              
              if (showExplanation) {
                if (index === currentQuestion.correctAnswer) {
                  buttonClass += "bg-green-100 border-green-500 text-green-800 shadow-md";
                } else if (index === selectedAnswer && index !== currentQuestion.correctAnswer) {
                  buttonClass += "bg-red-100 border-red-500 text-red-800 shadow-md";
                } else {
                  buttonClass += "bg-gray-50 border-gray-300 text-gray-600";
                }
              } else {
                if (selectedAnswer === index) {
                  buttonClass += "bg-teal-100 border-teal-500 text-teal-800 shadow-md";
                } else {
                  buttonClass += "bg-gray-50 border-gray-300 text-gray-700 hover:border-teal-400 hover:bg-teal-50 hover:shadow-sm";
                }
              }

              return (
                <button
                  key={index}
                  onClick={() => handleAnswerSelect(index)}
                  disabled={showExplanation}
                  className={buttonClass}
                >
                  <div className="flex items-start gap-2 sm:gap-3">
                    <span className="font-bold text-base sm:text-lg mt-0.5 flex-shrink-0">
                      {String.fromCharCode(65 + index)}.
                    </span>
                    <span className="flex-1 text-left">{option}</span>
                    {showExplanation && index === currentQuestion.correctAnswer && (
                      <span className="text-green-600 font-bold text-xl flex-shrink-0">✓</span>
                    )}
                    {showExplanation && index === selectedAnswer && index !== currentQuestion.correctAnswer && (
                      <span className="text-red-600 font-bold text-xl flex-shrink-0">✗</span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {showExplanation && (
            <div className="mt-4 sm:mt-6 p-4 sm:p-5 bg-teal-50 border-l-4 border-teal-500 rounded-r-xl shadow-sm">
              <h3 className="font-bold text-teal-800 mb-2 text-base sm:text-lg">
                💡 Explicación:
              </h3>
              <p className="text-teal-700 text-sm sm:text-base leading-relaxed">
                {currentQuestion.explanation}
              </p>
            </div>
          )}
        </div>

        {/* Navigation */}
        <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 justify-between mb-4 sm:mb-6">
          <button
            onClick={handlePreviousQuestion}
            disabled={currentQuestionIndex === 0}
            className="px-5 sm:px-6 py-3 bg-gray-500 text-white rounded-xl hover:bg-gray-600 transition-all duration-300 font-semibold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg disabled:shadow-none"
          >
            ← Anterior
          </button>

          {!showExplanation ? (
            <button
              onClick={handleSubmitAnswer}
              disabled={selectedAnswer === null}
              className="px-5 sm:px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 font-bold text-sm sm:text-base disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl transform hover:scale-105 disabled:transform-none"
            >
              ✅ Verificar Respuesta
            </button>
          ) : (
            <button
              onClick={handleNextQuestion}
              className="px-5 sm:px-6 py-3 bg-gradient-to-r from-teal-500 to-green-600 text-white rounded-xl hover:from-teal-600 hover:to-green-700 transition-all duration-300 font-bold text-sm sm:text-base shadow-lg hover:shadow-xl transform hover:scale-105"
            >
              {currentQuestionIndex < shuffledQuestions.length - 1 ? 'Siguiente →' : 'Finalizar 🎉'}
            </button>
          )}
        </div>

        {/* Question Navigation Grid */}
        <div className="bg-white rounded-3xl shadow-xl p-4 sm:p-6 border-2 border-teal-200">
          <h3 className="text-base sm:text-lg font-bold text-gray-800 mb-3 sm:mb-4">
            🗺️ Navegación Rápida
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
                className={`p-1.5 sm:p-2 rounded-lg text-xs sm:text-sm font-semibold transition-all duration-200 ${
                  index === currentQuestionIndex
                    ? 'bg-gradient-to-r from-teal-500 to-green-600 text-white shadow-lg scale-110'
                    : answeredQuestions.has(q.id)
                    ? 'bg-green-100 text-green-800 border-2 border-green-300 hover:bg-green-200'
                    : 'bg-gray-100 text-gray-700 border-2 border-gray-300 hover:bg-gray-200'
                }`}
                title={typeLabels[q.questionType]}
              >
                {index + 1}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
