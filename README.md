# Repaso de Redes y Telecomunicaciones

Sistema de repaso interactivo para examen de **Administración de Redes de Computadores** con **181 preguntas** en total:
- **100 preguntas principales** sobre todos los temas del PDF
- **41 preguntas de ejemplos** para estudiar preguntas que piden ejemplos específicos
- **40 preguntas avanzadas** con comparación, escenarios, procesos, troubleshooting y aplicación

## Características

- ✅ **100 preguntas principales** cubriendo todos los temas del PDF
- 📝 **41 preguntas de ejemplos** para estudiar preguntas que piden ejemplos específicos
- 🚀 **40 preguntas avanzadas** con tipos: Comparación, Escenarios, Procesos, Troubleshooting y Aplicación
- 📚 **Categorías organizadas**: Conceptos Generales, Elementos de Administración, Áreas Funcionales, Seguridad, Protocolos, etc.
- 🎯 **Sistema de puntuación** en tiempo real
- 💡 **Explicaciones detalladas** para cada respuesta
- 🔄 **Modo de revisión** para repasar todas las preguntas
- 🎨 **Interfaz moderna** con soporte para modo oscuro
- 📊 **Navegación rápida** entre preguntas
- 🔀 **Preguntas aleatorias** en cada sesión
- 🎓 **Sección especial** para preguntas que piden ejemplos (Dimensión Funcional, Temporal, Medios, Protocolos, etc.)

## Temas Cubiertos

- Conceptos Generales de Administración de Redes
- Elementos de Administración (Objetos, Agentes, Administrador del Sistema)
- Definiciones ITU/OSI
- Administración de Configuración
- Administración de Rendimiento
- Administración de Fallas
- Administración de Contabilidad
- Administración de Seguridad
- Protocolos y Herramientas (SNMP, TACACS, RADIUS, IPSec, MD5)
- Tipos de redes, medios de comunicación, protocolos y arquitecturas

## Getting Started

Primero, instala las dependencias:

```bash
npm install
```

Luego, ejecuta el servidor de desarrollo:

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000) en tu navegador para ver la aplicación.

## Estructura del Proyecto

```
examen_redes/
├── app/                    # Páginas de Next.js
│   ├── page.tsx           # Página principal
│   └── layout.tsx         # Layout principal
├── components/             # Componentes React
│   └── Quiz.tsx           # Componente principal del quiz
├── data/                   # Datos
│   └── questions.ts       # Base de datos de preguntas
└── public/                 # Archivos estáticos
```

## Uso

### Página Principal
Al iniciar la aplicación, verás dos opciones:
- **Quiz Principal**: 100 preguntas sobre todos los temas
- **Preguntas de Ejemplos**: 41 preguntas que piden ejemplos específicos de conceptos

### Cómo Estudiar
1. **Iniciar el Quiz**: Las preguntas se muestran aleatoriamente
2. **Seleccionar Respuesta**: Haz clic en una de las opciones
3. **Verificar**: Presiona "Verificar Respuesta" para ver si es correcta
4. **Ver Explicación**: Lee la explicación detallada
5. **Navegar**: Usa los botones "Anterior" y "Siguiente" o la cuadrícula de navegación rápida
6. **Finalizar**: Al terminar, verás tu puntuación y podrás reiniciar o revisar todas las respuestas

### Preguntas de Ejemplos
La sección de ejemplos es especialmente útil para estudiar preguntas que piden:
- Ejemplos de áreas funcionales (Dimensión Funcional)
- Ejemplos de fases cíclicas (Dimensión Temporal)
- Ejemplos de medios de comunicación
- Ejemplos de protocolos
- Ejemplos de servicios de seguridad
- Y muchos más conceptos del PDF

### Preguntas Avanzadas
La sección avanzada incluye preguntas más complejas:
- **🔀 Comparación**: Diferencias entre conceptos similares (TACACS vs RADIUS, ruteo estático vs dinámico)
- **🎭 Escenarios**: Situaciones prácticas donde debes aplicar conocimientos
- **📋 Proceso**: Orden correcto de pasos y procesos
- **🔧 Troubleshooting**: Qué hacer cuando algo falla
- **💼 Aplicación**: Aplicar conocimiento a casos reales

## Tecnologías

- **Next.js 16** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos
- **React Hooks** - Gestión de estado

## Personalización

Puedes agregar más preguntas editando el archivo `data/questions.ts`. Cada pregunta debe seguir esta estructura:

```typescript
{
  id: number,
  question: string,
  options: string[],
  correctAnswer: number, // índice de la respuesta correcta (0-3)
  explanation: string,
  category: string
}
```

## Build para Producción

```bash
npm run build
npm start
```

¡Buena suerte en tu examen! 🚀
