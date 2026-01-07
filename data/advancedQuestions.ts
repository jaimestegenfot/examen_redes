export interface AdvancedQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  questionType: 'comparison' | 'scenario' | 'process' | 'troubleshooting' | 'application';
}

export const advancedQuestions: AdvancedQuestion[] = [
  // Preguntas de Comparación
  {
    id: 1,
    question: "¿Cuál es la principal diferencia entre TACACS y RADIUS?",
    options: [
      "TACACS es más antiguo que RADIUS",
      "TACACS solo funciona con Windows",
      "RADIUS se caracteriza por la administración centralizada, mientras que TACACS permite comunicación entre servidor de acceso remoto y servidor de autenticación",
      "RADIUS no requiere autenticación"
    ],
    correctAnswer: 2,
    explanation: "RADIUS se caracteriza por la administración centralizada, mientras que TACACS permite a un servidor de acceso remoto comunicarse con un servidor de autenticación para determinar si el usuario tiene acceso a la red.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 2,
    question: "¿Cuál es la diferencia entre ruteo estático y ruteo dinámico?",
    options: [
      "El ruteo estático requiere configuración manual de rutas, mientras que el dinámico se adapta automáticamente a cambios en la red",
      "El ruteo estático es más rápido",
      "El ruteo dinámico no existe",
      "No hay diferencia"
    ],
    correctAnswer: 0,
    explanation: "El ruteo estático requiere que el administrador configure manualmente las rutas, mientras que el ruteo dinámico utiliza protocolos que se adaptan automáticamente a los cambios en la topología de la red.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 3,
    question: "¿Cuál es la diferencia entre Administración de Configuración y Administración de Rendimiento?",
    options: [
      "No hay diferencia, son lo mismo",
      "La Configuración se enfoca en la planeación e instalación de equipos, mientras que Rendimiento se enfoca en mantener el nivel aceptable mediante monitoreo",
      "La Configuración solo trata software",
      "El Rendimiento solo trata hardware"
    ],
    correctAnswer: 1,
    explanation: "La Administración de Configuración se enfoca en planeación, diseño, instalación y configuración de equipos. La Administración de Rendimiento se enfoca en mantener el nivel de rendimiento aceptable mediante monitoreo y análisis de métricas.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 4,
    question: "¿Cuál es la diferencia entre un Agente y el Administrador del Sistema?",
    options: [
      "Son lo mismo",
      "El Agente es un programa que colecciona información en un nodo, mientras que el Administrador del Sistema es un conjunto de programas centralizados que reciben y procesan esa información",
      "El Administrador del Sistema solo existe en Windows",
      "El Agente es un dispositivo físico"
    ],
    correctAnswer: 1,
    explanation: "El Agente es un programa o conjunto de programas que coleccionan información de administración del sistema en un nodo. El Administrador del Sistema es un conjunto de programas ubicados en un punto central que reciben y procesan la información de los agentes.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 5,
    question: "¿Cuál es la diferencia entre Administración de Fallas y Administración de Seguridad?",
    options: [
      "Son conceptos idénticos",
      "La Administración de Fallas se enfoca en detectar y corregir problemas operacionales, mientras que Seguridad se enfoca en prevenir y proteger contra accesos no autorizados",
      "La Administración de Fallas solo trata hardware",
      "La Administración de Seguridad solo trata software"
    ],
    correctAnswer: 1,
    explanation: "La Administración de Fallas tiene como objetivo detectar, aislar, notificar y corregir problemas operacionales en la red. La Administración de Seguridad se enfoca en controlar el acceso a recursos y proteger la información contra accesos no autorizados.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 6,
    question: "¿Cuál es la diferencia entre IPSec y MD5?",
    options: [
      "Son protocolos idénticos",
      "IPSec es un conjunto de protocolos para asegurar comunicaciones IP autenticando/cifrando paquetes, mientras que MD5 es un algoritmo de integridad para verificar que los datos no han sido modificados",
      "MD5 es más seguro que IPSec",
      "IPSec solo funciona con Windows"
    ],
    correctAnswer: 1,
    explanation: "IPSec (Internet Protocol security) es un conjunto de protocolos que aseguran las comunicaciones sobre IP autenticando y/o cifrando cada paquete. MD5 es un algoritmo de reducción criptográfico usado como mecanismo de integridad para verificar que los datos no han sido alterados.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 7,
    question: "¿Cuál es la diferencia entre LAN, MAN y WAN?",
    options: [
      "Solo difieren en velocidad",
      "LAN es red local, MAN es metropolitana (ciudad), WAN es de área amplia (país/continente) - difieren en alcance geográfico",
      "Solo difieren en el tipo de cableado",
      "No hay diferencia"
    ],
    correctAnswer: 1,
    explanation: "LAN (Local Area Network) cubre un área pequeña como un edificio. MAN (Metropolitan Area Network) cubre una ciudad o área metropolitana. WAN (Wide Area Network) cubre grandes distancias como países o continentes. La diferencia principal es el alcance geográfico.",
    category: "Comparación",
    questionType: 'comparison'
  },
  {
    id: 8,
    question: "¿Cuál es la diferencia entre prevención de ataques y detección de intrusos?",
    options: [
      "Son lo mismo",
      "La prevención busca mantener recursos fuera del alcance de usuarios maliciosos, mientras que la detección busca identificar cuando un ataque está ocurriendo",
      "La prevención solo funciona con firewall",
      "La detección solo funciona con antivirus"
    ],
    correctAnswer: 1,
    explanation: "La prevención de ataques tiene como objetivo mantener los recursos de red fuera del alcance de potenciales usuarios maliciosos mediante estrategias como control de acceso. La detección de intrusos busca detectar el momento en que un ataque se está llevando a cabo mediante sistemas que vigilan y registran el tráfico.",
    category: "Comparación",
    questionType: 'comparison'
  },
  // Preguntas de Escenarios
  {
    id: 9,
    question: "Escenario: Una empresa necesita implementar autenticación centralizada para acceso remoto de sus empleados. ¿Qué mecanismo de seguridad sería más apropiado?",
    options: [
      "Solo firewall",
      "RADIUS o TACACS, ya que permiten administración centralizada de autenticación",
      "Solo MD5",
      "Solo IPSec"
    ],
    correctAnswer: 1,
    explanation: "RADIUS se caracteriza por la administración centralizada, lo que lo hace ideal para autenticación centralizada de acceso remoto. TACACS también permite comunicación entre servidor de acceso remoto y servidor de autenticación.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 10,
    question: "Escenario: Un administrador de red necesita verificar si un servidor crítico está activo y accesible. ¿Qué técnica debería usar primero?",
    options: [
      "Revisar logs manualmente",
      "Hacer ping al servidor, ya que es la técnica más primitiva pero efectiva para verificar conectividad",
      "Reinstalar el servidor",
      "Cambiar la contraseña"
    ],
    correctAnswer: 1,
    explanation: "El ping es la técnica más primitiva pero efectiva para verificar si un host está activo y si la red que lo conecta funciona. Si se recibe réplica, se sabe que el host está activo y la red funciona.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 11,
    question: "Escenario: Una red grande necesita distribuir el tráfico de manera eficiente y adaptarse automáticamente a cambios en la topología. ¿Qué mecanismo de ruteo debería implementar?",
    options: [
      "Ruteo estático, porque es más simple",
      "Ruteo dinámico, porque se adapta automáticamente a cambios en la topología de la red",
      "No necesita ruteo",
      "Solo configuración manual"
    ],
    correctAnswer: 1,
    explanation: "Para redes grandes que necesitan adaptarse automáticamente a cambios, el ruteo dinámico es la mejor opción ya que utiliza protocolos que se ajustan automáticamente a la topología de la red.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 12,
    question: "Escenario: Un administrador necesita recopilar información estadística detallada sobre el tráfico de red clasificado por protocolo. ¿Dónde debería enfocarse?",
    options: [
      "Solo en los hosts finales",
      "En los gateways, porque clasifican los datagramas según protocolo e incluso responden a ciertos tipos de datagramas",
      "Solo en los switches",
      "Solo en los routers"
    ],
    correctAnswer: 1,
    explanation: "La información será más detallada en los gateways, puesto que clasifican los datagramas según protocolo e incluso, ellos mismos responden a ciertos tipos de datagramas, proporcionando información más completa.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 13,
    question: "Escenario: Una organización necesita asegurar las comunicaciones entre sus oficinas remotas sobre Internet. ¿Qué mecanismo de seguridad sería más apropiado?",
    options: [
      "Solo firewall local",
      "IPSec, porque asegura las comunicaciones sobre IP autenticando y/o cifrando cada paquete",
      "Solo MD5",
      "Solo cambiar contraseñas"
    ],
    correctAnswer: 1,
    explanation: "IPSec es ideal para asegurar comunicaciones sobre IP (como Internet) autenticando y/o cifrando cada paquete en un flujo de datos, protegiendo la información en tránsito.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 14,
    question: "Escenario: Una empresa está diseñando una red corporativa grande con múltiples edificios. ¿Qué diseño de red debería considerar?",
    options: [
      "Un diseño jerárquico con capas de acceso, distribución y núcleo (core)",
      "Solo una red plana",
      "Solo switches sin organización",
      "Solo routers"
    ],
    correctAnswer: 0,
    explanation: "Para redes grandes y complejas, un diseño jerárquico con capas de acceso (conecta usuarios), distribución (conecta capas de acceso) y núcleo (backbone de alta velocidad) es el más apropiado.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 15,
    question: "Escenario: Un administrador necesita implementar un sistema que vigile el tráfico de red y alerte cuando detecte actividad sospechosa. ¿Qué debería implementar?",
    options: [
      "Solo firewall",
      "Un sistema de detección de intrusos que vigile y registre el tráfico con esquema de notificaciones o alarmas",
      "Solo antivirus",
      "Solo cambiar contraseñas"
    ],
    correctAnswer: 1,
    explanation: "Un sistema de detección de intrusos vigila y registra el tráfico que circula por la red y tiene un esquema de notificaciones o alarmas que indican cuando se detecta una situación anormal.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  {
    id: 16,
    question: "Escenario: Una empresa necesita verificar la integridad de archivos de configuración para asegurarse de que no han sido modificados. ¿Qué mecanismo debería usar?",
    options: [
      "Solo revisar manualmente",
      "Solo guardar copias",
      "Solo cambiar permisos",
      "MD5 u otro algoritmo de integridad para verificar que los datos no han sido alterados"
    ],
    correctAnswer: 3,
    explanation: "MD5 es un algoritmo de reducción criptográfico usado como mecanismo de integridad para verificar que los datos no han sido modificados. Al comparar el hash MD5, se puede detectar cualquier alteración.",
    category: "Escenarios",
    questionType: 'scenario'
  },
  // Preguntas de Orden/Proceso
  {
    id: 17,
    question: "¿Cuál es el orden correcto de las fases en la Dimensión Temporal de administración de redes?",
    options: [
      "Planeación, Implementación, Operación",
      "Operación, Implementación, Planeación",
      "Implementación, Operación, Planeación",
      "Operación, Planeación, Implementación"
    ],
    correctAnswer: 0,
    explanation: "La Dimensión Temporal divide el proceso en fases cíclicas: primero Planeación (diseño y planificación), luego Implementación (instalación y configuración), y finalmente Operación (monitoreo y mantenimiento).",
    category: "Proceso",
    questionType: 'process'
  },
  {
    id: 18,
    question: "¿Cuál es el orden correcto de las etapas en el proceso de planeación y diseño de una red?",
    options: [
      "Reunir necesidades, Diseñar topología, Determinar infraestructura, Diseñar distribución de tráfico",
      "Diseñar topología, Reunir necesidades, Determinar infraestructura, Diseñar distribución de tráfico",
      "Determinar infraestructura, Diseñar topología, Reunir necesidades, Diseñar distribución",
      "Diseñar distribución, Determinar infraestructura, Reunir necesidades, Diseñar topología"
    ],
    correctAnswer: 0,
    explanation: "El proceso correcto es: primero reunir las necesidades de la red, luego diseñar la topología basada en esas necesidades, después determinar y seleccionar la infraestructura adecuada, y finalmente diseñar la distribución del tráfico.",
    category: "Proceso",
    questionType: 'process'
  },
  {
    id: 19,
    question: "¿Cuál es el orden correcto del proceso de administración de fallas cuando se detecta un problema?",
    options: [
      "Detectar, Aislar, Notificar, Corregir",
      "Corregir, Detectar, Aislar, Notificar",
      "Notificar, Corregir, Detectar, Aislar",
      "Aislar, Corregir, Detectar, Notificar"
    ],
    correctAnswer: 0,
    explanation: "El proceso correcto de administración de fallas es: primero Detectar el problema, luego Aislar para identificar la causa, después Notificar a los responsables, y finalmente Corregir el problema.",
    category: "Proceso",
    questionType: 'process'
  },
  {
    id: 20,
    question: "¿Cuál es el orden correcto de los pasos para implementar seguridad en una red?",
    options: [
      "Analizar necesidades de seguridad, Desarrollar políticas de seguridad, Implementar mecanismos de seguridad",
      "Implementar mecanismos, Desarrollar políticas, Analizar necesidades",
      "Implementar mecanismos, Analizar necesidades, Desarrollar políticas",
      "Desarrollar políticas, Implementar mecanismos, Analizar necesidades"
    ],
    correctAnswer: 0,
    explanation: "El proceso correcto es: primero analizar las necesidades de seguridad, luego desarrollar las políticas de seguridad basadas en ese análisis, y finalmente implementar los mecanismos de seguridad que cumplan con esas políticas.",
    category: "Proceso",
    questionType: 'process'
  },
  {
    id: 21,
    question: "¿Cuál es el orden correcto de las actividades en la Administración de Configuración?",
    options: [
      "Planeación y diseño, Selección de infraestructura, Instalación de hardware y software",
      "Instalación, Planeación y diseño, Selección de infraestructura",
      "Selección de infraestructura, Instalación, Planeación",
      "Instalación, Selección, Planeación"
    ],
    correctAnswer: 0,
    explanation: "El orden correcto es: primero Planeación y diseño de la red, luego Selección de la infraestructura basada en el diseño, y finalmente Instalación de hardware y administración del software.",
    category: "Proceso",
    questionType: 'process'
  },
  {
    id: 22,
    question: "¿Cuál es el orden correcto del flujo de información en la administración de redes?",
    options: [
      "Objetos, Agente, Administrador del Sistema",
      "Administrador del Sistema, Agente, Objetos",
      "Agente, Objetos, Administrador del Sistema",
      "Administrador del Sistema, Objetos, Agente"
    ],
    correctAnswer: 0,
    explanation: "El flujo correcto es: los Objetos (elementos administrados) proporcionan información al Agente, y el Agente transmite esa información al Administrador del Sistema (punto central).",
    category: "Proceso",
    questionType: 'process'
  },
  // Preguntas de Troubleshooting
  {
    id: 23,
    question: "Un administrador nota que un host crítico no responde. ¿Cuál debería ser su primer paso de troubleshooting?",
    options: [
      "Reinstalar el sistema operativo",
      "Hacer ping al host para verificar si está activo y si la red funciona",
      "Cambiar todos los cables",
      "Reiniciar todos los servidores"
    ],
    correctAnswer: 1,
    explanation: "El primer paso debería ser hacer ping al host. Si recibimos réplica, sabemos que el host está activo y la red funciona. Si no recibimos réplica, sabemos que hay algún error que necesita investigación adicional.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 24,
    question: "Un administrador detecta que la red está experimentando problemas de rendimiento. ¿Qué debería hacer primero?",
    options: [
      "Reemplazar todos los equipos",
      "Monitorear métricas de rendimiento como utilización de ancho de banda, tiempo de respuesta y tasa de errores para identificar la causa",
      "Desconectar todos los usuarios",
      "Reiniciar toda la red"
    ],
    correctAnswer: 1,
    explanation: "Primero debe monitorear métricas de rendimiento (utilización de ancho de banda, tiempo de respuesta, throughput, tasa de errores) para identificar la causa del problema antes de tomar acciones correctivas.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 25,
    question: "Un equipo de red se daña y necesita ser reemplazado. ¿Qué debería tener el administrador para facilitar la recuperación?",
    options: [
      "Solo el equipo nuevo",
      "Un respaldo de la configuración del equipo dañado para no tener que reconfigurar desde cero",
      "Solo el manual del equipo",
      "Solo los cables"
    ],
    correctAnswer: 1,
    explanation: "Es importante tener respaldos frecuentes de las configuraciones de los equipos de red. Cuando un equipo se daña y tiene que ser reemplazado, el respaldo permite restaurar la configuración sin tener que reconfigurar desde cero.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 26,
    question: "Un administrador sospecha que hay un ataque en curso en la red. ¿Qué debería hacer primero?",
    options: [
      "Desconectar toda la red",
      "Usar el sistema de detección de intrusos para verificar y confirmar la situación anormal mediante notificaciones o alarmas",
      "Cambiar todas las contraseñas sin verificar",
      "Apagar todos los servidores"
    ],
    correctAnswer: 1,
    explanation: "Primero debe usar el sistema de detección de intrusos para verificar y confirmar si realmente hay un ataque. El sistema vigila y registra el tráfico y tiene alarmas que indican situaciones anormales.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 27,
    question: "Un administrador necesita información detallada sobre errores de datagramas en la red. ¿Dónde debería buscar esta información?",
    options: [
      "Solo en los hosts finales",
      "En los gateways, porque clasifican los datagramas según protocolo y pueden proporcionar información más detallada sobre errores",
      "Solo en los switches",
      "Solo revisando logs manualmente"
    ],
    correctAnswer: 1,
    explanation: "Los gateways clasifican los datagramas según protocolo e incluso responden a ciertos tipos de datagramas, por lo que pueden proporcionar información más detallada sobre errores y estadísticas de tráfico.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 28,
    question: "Un administrador necesita verificar si un servidor de autenticación está funcionando correctamente. ¿Qué herramienta de seguridad debería verificar primero?",
    options: [
      "Solo el firewall",
      "TACACS o RADIUS, ya que son los mecanismos que permiten la comunicación entre servidor de acceso remoto y servidor de autenticación",
      "Solo MD5",
      "Solo cambiar contraseñas"
    ],
    correctAnswer: 1,
    explanation: "TACACS y RADIUS son los mecanismos que permiten la comunicación entre servidor de acceso remoto y servidor de autenticación. Verificar su funcionamiento es esencial para diagnosticar problemas de autenticación.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  {
    id: 29,
    question: "Un administrador nota que los usuarios no pueden acceder remotamente a la red. ¿Qué debería verificar primero?",
    options: [
      "Reinstalar el sistema operativo",
      "Verificar los mecanismos de acceso remoto como Secure Shell o IPSec, y los servicios de autenticación como TACACS o RADIUS",
      "Cambiar todos los cables",
      "Reiniciar todos los equipos"
    ],
    correctAnswer: 1,
    explanation: "Primero debe verificar los mecanismos de acceso remoto (Secure Shell, IPSec) y los servicios de autenticación (TACACS, RADIUS) que permiten determinar si el usuario tiene acceso a la red.",
    category: "Troubleshooting",
    questionType: 'troubleshooting'
  },
  // Preguntas de Aplicación
  {
    id: 30,
    question: "Si una organización necesita implementar las 5 áreas funcionales de administración de redes, ¿cuál debería implementar primero?",
    options: [
      "Administración de Configuración, ya que establece la base de la red antes de poder monitorear rendimiento, fallas, contabilidad o seguridad",
      "Solo Seguridad",
      "Solo Rendimiento",
      "Solo Fallas"
    ],
    correctAnswer: 0,
    explanation: "La Administración de Configuración debe implementarse primero porque establece la base de la red mediante planeación, diseño e instalación. Sin una red configurada, no se puede monitorear rendimiento, detectar fallas, llevar contabilidad o implementar seguridad efectiva.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 31,
    question: "Una empresa quiere implementar un sistema de facturación basado en el uso de recursos de red. ¿Qué área funcional debería implementar?",
    options: [
      "Administración de Configuración",
      "Administración de Rendimiento",
      "Administración de Fallas",
      "Administración de Contabilidad, ya que hace seguimiento del uso de recursos por usuarios o grupos para fines de facturación"
    ],
    correctAnswer: 3,
    explanation: "La Administración de Contabilidad hace seguimiento del uso de los recursos de la red por parte de los usuarios individuales o grupos, lo cual es esencial para fines de facturación, planificación de capacidad o auditoría.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 32,
    question: "Una organización necesita asegurar que sus comunicaciones no puedan ser interceptadas. ¿Qué servicio de seguridad OSI debería implementar?",
    options: [
      "Solo Autenticación",
      "Solo Integridad",
      "Solo Control de acceso",
      "Confidencialidad, que asegura que la información no pueda ser entendida por usuarios no autorizados"
    ],
    correctAnswer: 3,
    explanation: "El servicio de Confidencialidad asegura que la información no pueda ser entendida por usuarios no autorizados, protegiendo las comunicaciones contra interceptación y acceso no autorizado.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 33,
    question: "Una empresa necesita verificar que los archivos de configuración no han sido modificados por personal no autorizado. ¿Qué mecanismo de seguridad debería usar?",
    options: [
      "Solo firewall",
      "Solo cambiar permisos",
      "Solo hacer respaldos",
      "MD5 u otro mecanismo de integridad para verificar que los datos no han sido alterados"
    ],
    correctAnswer: 3,
    explanation: "MD5 es un mecanismo de integridad que permite verificar que los datos no han sido modificados. Al comparar el hash MD5 de un archivo antes y después, se puede detectar cualquier alteración.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 34,
    question: "Una organización necesita una plataforma que permita visualizar un mapa de la red donde los objetos cambien de color según su estado. ¿Qué tipo de herramienta debería buscar?",
    options: [
      "Solo herramientas de línea de comandos",
      "Solo herramientas de texto",
      "Solo protocolos básicos",
      "Una plataforma de monitorización con interfaz gráfica que visualice mapas de red y muestre estadísticas"
    ],
    correctAnswer: 3,
    explanation: "Una plataforma de monitorización ofrece una interfaz gráfica de usuario que permite visualizar mapas de red donde los objetos cambian de color cuando cambian de estado, y muestra cuadros con estadísticas sobre datagramas y otros objetos.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 35,
    question: "Una empresa necesita implementar redundancia para elementos críticos de su red. ¿Qué actividad de Administración de Configuración debería realizar?",
    options: [
      "Solo instalar nuevos equipos",
      "Solo configurar software",
      "Solo hacer respaldos",
      "Provisión, que asegura la redundancia de los elementos de software y hardware más importantes de la red"
    ],
    correctAnswer: 3,
    explanation: "La Provisión es la tarea que asegura la redundancia de los elementos de software y hardware más importantes de la red, lo cual es esencial para mantener la disponibilidad y continuidad del servicio.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 36,
    question: "Una organización necesita implementar un sistema que detecte automáticamente cuando hay un compromiso de seguridad y tome medidas. ¿Qué debería implementar?",
    options: [
      "Solo firewall",
      "Solo antivirus",
      "Solo cambiar contraseñas periódicamente",
      "Un sistema de respuesta a incidentes que tome medidas para conocer las causas de un compromiso y tratar de eliminar dichas causas cuando es detectado"
    ],
    correctAnswer: 3,
    explanation: "La respuesta a incidentes tiene como objetivo tomar las medidas necesarias para conocer las causas de un compromiso de seguridad cuando ha sido detectado, además de tratar de eliminar dichas causas.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 37,
    question: "Una empresa necesita recopilar información crítica de la red de forma estandarizada desde múltiples dispositivos. ¿Qué protocolo debería usar?",
    options: [
      "Solo TCP/IP",
      "Solo HTTP",
      "Solo FTP",
      "SNMP (Simple Network Management Protocol), que permite recoger información crítica de la red de una forma estandarizada"
    ],
    correctAnswer: 3,
    explanation: "SNMP (Simple Network Management Protocol) permite recoger información crítica de la red de una forma estandarizada, lo que facilita la administración de múltiples dispositivos de diferentes fabricantes.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 38,
    question: "Una organización necesita asegurar que solo usuarios autorizados puedan acceder a recursos específicos de la red. ¿Qué servicio de seguridad OSI debería implementar?",
    options: [
      "Solo Confidencialidad",
      "Solo Autenticación",
      "Solo Integridad",
      "Control de acceso, que asegura que solo usuarios autorizados puedan acceder a recursos específicos"
    ],
    correctAnswer: 3,
    explanation: "El servicio de Control de acceso asegura que solo usuarios autorizados puedan acceder a recursos específicos de la red, implementando políticas de acceso basadas en identidad y permisos.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 39,
    question: "Una empresa necesita verificar que un mensaje fue enviado por quien dice haberlo enviado y que no puede negarlo después. ¿Qué servicio de seguridad OSI necesita?",
    options: [
      "Solo Autenticación",
      "Solo Integridad",
      "Solo Confidencialidad",
      "No repudio, que asegura que una parte no pueda negar haber realizado una acción (como enviar un mensaje)"
    ],
    correctAnswer: 3,
    explanation: "El servicio de No repudio asegura que una parte no pueda negar haber realizado una acción, como enviar un mensaje. Esto es esencial para auditoría y responsabilidad legal.",
    category: "Aplicación",
    questionType: 'application'
  },
  {
    id: 40,
    question: "Una organización necesita implementar un sistema que mantenga información actualizada sobre el estado y configuración de todos los nodos de la red. ¿Qué componente de NNM debería usar?",
    options: [
      "Solo la interfaz de usuario",
      "Solo la plataforma SNMP",
      "Los procesos en segundo plano que monitorizan el estado y configuración de los nodos y mantienen la base de datos con información de la red",
      "Solo los agentes"
    ],
    correctAnswer: 2,
    explanation: "NNM tiene procesos que corren en segundo plano para monitorizar el estado y la configuración de los nodos y mantener la base de datos con la información de la red, lo cual es esencial para tener información actualizada.",
    category: "Aplicación",
    questionType: 'application'
  }
];

