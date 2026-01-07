import Link from 'next/link';

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-green-50 via-emerald-50 to-teal-50 flex items-center justify-center px-4 py-8 sm:py-12">
      <div className="max-w-6xl w-full">
        {/* Header con diseño moderno */}
        <div className="text-center mb-8 sm:mb-12">
          <div className="inline-block mb-4 sm:mb-6">
            <div className="bg-gradient-to-r from-green-500 to-emerald-600 text-white text-4xl sm:text-5xl md:text-6xl font-bold px-6 sm:px-8 py-3 sm:py-4 rounded-2xl shadow-lg transform rotate-[-1deg] hover:rotate-0 transition-transform duration-300">
              📚 Repaso de Redes
            </div>
          </div>
          <p className="text-lg sm:text-xl md:text-2xl text-gray-700 font-medium">
            Sistema de estudio para examen de Administración de Redes y Telecomunicaciones
          </p>
          <div className="mt-4 flex flex-wrap justify-center gap-2 sm:gap-3">
            <span className="px-3 sm:px-4 py-1.5 bg-green-100 text-green-800 rounded-full text-sm sm:text-base font-semibold shadow-sm">
              ✨ 181 Preguntas
            </span>
          </div>
        </div>

        {/* Grid de opciones - Responsive */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 mb-8 sm:mb-12">
          {/* Quiz Principal */}
          <Link href="/quiz" className="group">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-green-200 hover:border-green-500 p-6 sm:p-8 h-full">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📖</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Quiz Principal
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  100 preguntas sobre todos los temas del PDF
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    100 preguntas
                  </span>
                  <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    Todos los temas
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-green-600 font-bold text-base sm:text-lg group-hover:text-green-700 transition-colors">
                  Comenzar <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Quiz de Ejemplos */}
          <Link href="/ejemplos" className="group">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-emerald-200 hover:border-emerald-500 p-6 sm:p-8 h-full">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">📝</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Preguntas de Ejemplos
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Preguntas que piden ejemplos específicos de conceptos
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-3 py-1.5 bg-emerald-100 text-emerald-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    41 preguntas
                  </span>
                  <span className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    Ejemplos
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-emerald-600 font-bold text-base sm:text-lg group-hover:text-emerald-700 transition-colors">
                  Comenzar <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>

          {/* Quiz Avanzado */}
          <Link href="/avanzadas" className="group sm:col-span-2 lg:col-span-1">
            <div className="bg-white rounded-3xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 cursor-pointer border-2 border-teal-200 hover:border-teal-500 p-6 sm:p-8 h-full">
              <div className="text-center">
                <div className="text-5xl sm:text-6xl mb-4 transform group-hover:scale-110 transition-transform duration-300">🚀</div>
                <h2 className="text-xl sm:text-2xl font-bold text-gray-800 mb-3">
                  Preguntas Avanzadas
                </h2>
                <p className="text-sm sm:text-base text-gray-600 mb-4">
                  Comparación, Escenarios, Procesos, Troubleshooting y Aplicación
                </p>
                <div className="flex flex-wrap gap-2 justify-center mb-4">
                  <span className="px-3 py-1.5 bg-teal-100 text-teal-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    40 preguntas
                  </span>
                  <span className="px-3 py-1.5 bg-green-100 text-green-800 rounded-full text-xs sm:text-sm font-semibold shadow-sm">
                    Avanzado
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 text-teal-600 font-bold text-base sm:text-lg group-hover:text-teal-700 transition-colors">
                  Comenzar <span className="transform group-hover:translate-x-1 transition-transform">→</span>
                </div>
              </div>
            </div>
          </Link>
        </div>

        {/* Información del contenido */}
        <div className="bg-white rounded-3xl shadow-xl p-6 sm:p-8 border-2 border-green-200">
          <h3 className="text-xl sm:text-2xl font-bold text-gray-800 mb-4 sm:mb-6 text-center sm:text-left">
            📋 Contenido del Repaso
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 text-sm sm:text-base text-gray-700">
            <div className="bg-green-50 rounded-2xl p-4 sm:p-5 border border-green-200">
              <h4 className="font-bold text-green-800 mb-2 sm:mb-3 text-lg">Quiz Principal:</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                <li>Conceptos Generales</li>
                <li>Elementos de Administración</li>
                <li>Definiciones ITU/OSI</li>
                <li>5 Áreas Funcionales</li>
                <li>Protocolos y Herramientas</li>
              </ul>
            </div>
            <div className="bg-emerald-50 rounded-2xl p-4 sm:p-5 border border-emerald-200">
              <h4 className="font-bold text-emerald-800 mb-2 sm:mb-3 text-lg">Preguntas de Ejemplos:</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                <li>Dimensión Funcional (áreas)</li>
                <li>Dimensión Temporal (fases)</li>
                <li>Medios y Protocolos</li>
                <li>Servicios de Seguridad</li>
                <li>Plataformas de Gestión</li>
              </ul>
            </div>
            <div className="bg-teal-50 rounded-2xl p-4 sm:p-5 border border-teal-200 sm:col-span-2 lg:col-span-1">
              <h4 className="font-bold text-teal-800 mb-2 sm:mb-3 text-lg">Preguntas Avanzadas:</h4>
              <ul className="list-disc list-inside space-y-1.5 text-gray-700">
                <li>🔀 Comparación</li>
                <li>🎭 Escenarios</li>
                <li>📋 Procesos</li>
                <li>🔧 Troubleshooting</li>
                <li>💼 Aplicación</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
