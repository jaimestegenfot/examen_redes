export interface Question {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
}

export const questions: Question[] = [
  // Administración de Redes - Conceptos Generales
  {
    id: 1,
    question: "¿Quién es el Administrador o Gestor de una Red de Datos?",
    options: [
      "Una persona encargada de la creación y soporte de infraestructuras de tecnología informática (TI)",
      "Un software que gestiona automáticamente las redes",
      "Un protocolo de comunicación",
      "Un dispositivo de red como un router"
    ],
    correctAnswer: 0,
    explanation: "El administrador de red es aquella persona encargada y capacitada para la creación y soporte de infraestructuras de tecnología informática (TI).",
    category: "Conceptos Generales"
  },
  {
    id: 2,
    question: "¿Cuál NO es uno de los objetivos principales del administrador de red?",
    options: [
      "Mejorar la continuidad en la operación de la red",
      "Hacer uso eficiente de la red y utilizar mejor los recursos",
      "Hacer la red más segura",
      "Eliminar todos los usuarios de la red"
    ],
    correctAnswer: 3,
    explanation: "Los objetivos del administrador incluyen mejorar la continuidad, eficiencia y seguridad, pero no eliminar usuarios.",
    category: "Conceptos Generales"
  },
  {
    id: 3,
    question: "¿Qué se entiende por infraestructura tecnológica informática?",
    options: [
      "Solo los servidores y computadores",
      "El conjunto de todos los elementos tecnológicos hardware y software",
      "Únicamente el cableado estructurado",
      "Solo los protocolos de comunicación"
    ],
    correctAnswer: 1,
    explanation: "La infraestructura tecnológica informática comprende el conjunto de todos los elementos tecnológicos hardware y software: servidores, computadores, portátiles, impresoras, switches, routers, firewall, etc.",
    category: "Conceptos Generales"
  },
  {
    id: 4,
    question: "¿Por qué se considera compleja la administración de una red de datos?",
    options: [
      "Porque solo maneja datos",
      "Porque comprende una mezcla de servicios como voz, video y datos; interconexión de diferentes tipos de redes; múltiples medios de comunicación; diversos protocolos; muchos sistemas operativos y arquitecturas",
      "Porque requiere mucho dinero",
      "Porque solo funciona con Windows"
    ],
    correctAnswer: 1,
    explanation: "La administración es compleja debido a la mezcla de servicios (voz, video, datos), interconexión de diferentes tipos de redes (LAN, MAN, WAN), múltiples medios, protocolos, sistemas operativos y arquitecturas.",
    category: "Conceptos Generales"
  },
  {
    id: 5,
    question: "¿Qué son los 'Objetos' en la administración de redes?",
    options: [
      "Los programas que coleccionan información",
      "Los elementos de más bajo nivel que constituyen los aparatos administrados",
      "El administrador central",
      "Los protocolos de comunicación"
    ],
    correctAnswer: 1,
    explanation: "Los objetos son los elementos de más bajo nivel y constituyen los aparatos administrados en la red.",
    category: "Elementos de Administración"
  },
  {
    id: 6,
    question: "¿Qué es un 'Agente' en la administración de redes?",
    options: [
      "Un dispositivo físico de red",
      "Un programa o conjunto de programas que coleccionan información de administración del sistema en un nodo",
      "El administrador central",
      "Un protocolo de seguridad"
    ],
    correctAnswer: 1,
    explanation: "Los agentes son programas que coleccionan información de administración del sistema en un nodo o elemento de la red y transmiten información al administrador central.",
    category: "Elementos de Administración"
  },
  {
    id: 7,
    question: "¿Qué información transmite el agente al administrador central?",
    options: [
      "Solo datos de diagnóstico",
      "Notificación de problemas, datos de diagnóstico, identificador del nodo y características del nodo",
      "Solo el identificador del nodo",
      "Solo las características del nodo"
    ],
    correctAnswer: 1,
    explanation: "El agente transmite información sobre notificación de problemas, datos de diagnóstico, identificador del nodo y características del nodo.",
    category: "Elementos de Administración"
  },
  {
    id: 8,
    question: "¿Qué es el 'Administrador del Sistema'?",
    options: [
      "Una persona física",
      "Un conjunto de programas ubicados en un punto central",
      "Un dispositivo de red",
      "Un protocolo de comunicación"
    ],
    correctAnswer: 1,
    explanation: "El administrador del sistema es un conjunto de programas ubicados en un punto central al cual se dirigen los mensajes que requieren acción o que contienen información solicitada.",
    category: "Elementos de Administración"
  },
  {
    id: 9,
    question: "Según ITU y OSI, ¿cómo se define la administración de redes?",
    options: [
      "Solo la configuración de dispositivos",
      "La suma total de todas las políticas y procedimientos que intervienen en la planeación, configuración, control y monitoreo de los elementos de una red",
      "Solo el monitoreo de la red",
      "Solo la seguridad de la red"
    ],
    correctAnswer: 1,
    explanation: "La administración de redes es la suma total de todas las políticas y procedimientos que intervienen en la planeación, configuración, control y monitoreo de los elementos de una red para asegurar el eficiente y efectivo empleo de sus recursos.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 10,
    question: "¿Cuáles son las 3 dimensiones en la administración de redes según ITU y OSI?",
    options: [
      "Física, lógica y virtual",
      "Funcional, temporal y del escenario",
      "Hardware, software y protocolos",
      "LAN, MAN y WAN"
    ],
    correctAnswer: 1,
    explanation: "Las tres dimensiones son: Funcional (asignación de tareas por áreas funcionales), Temporal (fases cíclicas de planeación, implementación y operación) y del Escenario (escenarios adicionales).",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 11,
    question: "¿Qué significa ITU?",
    options: [
      "International Technology Union",
      "Unión Internacional de Telecomunicaciones",
      "Internet Technology Unit",
      "Information Technology Unit"
    ],
    correctAnswer: 1,
    explanation: "ITU significa Unión Internacional de Telecomunicaciones (UIT en español), que produce recomendaciones y normas para redes de telecomunicaciones.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 12,
    question: "¿Qué significa OSI?",
    options: [
      "Operating System Interface",
      "Open System Interconnection (Modelo de interconexión de sistemas abiertos)",
      "Optical System Integration",
      "Online System Integration"
    ],
    correctAnswer: 1,
    explanation: "OSI significa Open System Interconnection, es la propuesta de ISO para estandarizar la interconexión de sistemas abiertos.",
    category: "Definiciones ITU/OSI"
  },
  // Administración de la Configuración
  {
    id: 13,
    question: "¿Cuáles son las áreas funcionales de administración de redes según ITU/OSI?",
    options: [
      "Solo configuración y seguridad",
      "Configuración, Rendimiento, Fallas, Contabilidad y Seguridad",
      "Solo rendimiento y fallas",
      "Solo contabilidad y seguridad"
    ],
    correctAnswer: 1,
    explanation: "Las cinco áreas funcionales son: Administración de la Configuración, Administración de Rendimiento, Administración de Fallas, Administración de la Contabilidad y Administración de la Seguridad.",
    category: "Áreas Funcionales"
  },
  {
    id: 14,
    question: "¿Cuál es la meta de la actividad de planeación y diseño de la red?",
    options: [
      "Solo satisfacer requerimientos inmediatos",
      "Satisfacer los requerimientos inmediatos y futuros de la red, reflejarlos en su diseño hasta llegar a su implementación",
      "Solo implementar la red",
      "Solo diseñar la topología"
    ],
    correctAnswer: 1,
    explanation: "La meta es satisfacer los requerimientos inmediatos y futuros de la red, reflejarlos en su diseño hasta llegar a su implementación.",
    category: "Administración de Configuración"
  },
  {
    id: 15,
    question: "¿Qué etapas contempla el proceso de planeación y diseño de una red?",
    options: [
      "Solo diseñar la topología",
      "Reunir necesidades, diseñar topología, determinar infraestructura, diseñar distribución de tráfico y planear implementación",
      "Solo instalar hardware",
      "Solo configurar software"
    ],
    correctAnswer: 1,
    explanation: "El proceso contempla: reunir necesidades de la red, diseñar la topología, determinar y seleccionar infraestructura, diseñar distribución de tráfico y planear la implementación.",
    category: "Administración de Configuración"
  },
  {
    id: 16,
    question: "En un diseño jerárquico de red, ¿cuáles son las capas principales?",
    options: [
      "Solo acceso",
      "Acceso, distribución y núcleo (core)",
      "Solo núcleo",
      "Solo distribución"
    ],
    correctAnswer: 1,
    explanation: "En un diseño jerárquico se tienen las capas de acceso, distribución y núcleo (core).",
    category: "Administración de Configuración"
  },
  {
    id: 17,
    question: "¿Qué actividad es responsable de la instalación, desinstalación y actualización de aplicaciones en los dispositivos de red?",
    options: [
      "Administración de hardware",
      "Administración de software",
      "Administración de seguridad",
      "Administración de rendimiento"
    ],
    correctAnswer: 1,
    explanation: "La administración de software es responsable de la instalación, desinstalación y actualización de aplicaciones, sistemas operativos o funcionalidades en los dispositivos de la red.",
    category: "Administración de Configuración"
  },
  {
    id: 18,
    question: "¿Por qué es importante el respaldo frecuente de las configuraciones de los equipos de red?",
    options: [
      "Para ahorrar espacio",
      "Para tener una copia cuando un equipo se daña y tiene que ser reemplazado, evitando reconfigurar desde cero",
      "Para mejorar el rendimiento",
      "Para aumentar la seguridad"
    ],
    correctAnswer: 1,
    explanation: "Los respaldos son útiles cuando un equipo se daña y tiene que ser reemplazado, ya que no es necesario realizar la configuración nuevamente.",
    category: "Administración de Configuración"
  },
  {
    id: 19,
    question: "¿Qué es la 'Provisión' en administración de redes?",
    options: [
      "La eliminación de recursos",
      "La tarea que asegura la redundancia de los elementos de software y hardware más importantes de la red",
      "Solo la configuración inicial",
      "Solo el monitoreo"
    ],
    correctAnswer: 1,
    explanation: "La provisión es la tarea que asegura la redundancia de los elementos de software y hardware más importantes de la red.",
    category: "Administración de Configuración"
  },
  // Administración de Rendimiento
  {
    id: 20,
    question: "¿Cuál es el objetivo principal de la administración de rendimiento?",
    options: [
      "Eliminar todos los recursos",
      "Mantener el nivel de rendimiento de la red en un nivel aceptable",
      "Solo monitorear la red",
      "Solo configurar dispositivos"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es mantener el rendimiento de la red en un nivel aceptable mediante el monitoreo y análisis de métricas de rendimiento.",
    category: "Administración de Rendimiento"
  },
  {
    id: 21,
    question: "¿Qué métricas se monitorean típicamente en la administración de rendimiento?",
    options: [
      "Solo el número de usuarios",
      "Utilización de ancho de banda, tiempo de respuesta, throughput, tasa de errores, disponibilidad",
      "Solo la temperatura",
      "Solo el voltaje"
    ],
    correctAnswer: 1,
    explanation: "Se monitorean métricas como utilización de ancho de banda, tiempo de respuesta, throughput, tasa de errores y disponibilidad.",
    category: "Administración de Rendimiento"
  },
  // Administración de Fallas
  {
    id: 22,
    question: "¿Cuál es el objetivo principal de la administración de fallas?",
    options: [
      "Prevenir todas las fallas",
      "Detectar, aislar, notificar y corregir problemas operacionales en la red",
      "Solo notificar problemas",
      "Solo corregir problemas"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es detectar, aislar, notificar y corregir problemas operacionales en la red de manera eficiente.",
    category: "Administración de Fallas"
  },
  {
    id: 23,
    question: "¿Qué es un 'ping' en el contexto de monitorización de redes?",
    options: [
      "Un protocolo de seguridad",
      "Un datagrama de echo que produce una réplica inmediata cuando llega al destino, usado para verificar si un host está activo",
      "Un dispositivo de red",
      "Un sistema operativo"
    ],
    correctAnswer: 1,
    explanation: "El pinging se basa en un datagrama de echo que produce una réplica inmediata cuando llega al destino. Si recibimos réplica, sabemos que el host está activo.",
    category: "Administración de Fallas"
  },
  {
    id: 24,
    question: "¿Qué información se puede obtener mediante técnicas sofisticadas de monitorización?",
    options: [
      "Solo si un host está activo",
      "Información estadística y del estado de varios dispositivos, cuenta de clases de datagramas y errores de varios tipos",
      "Solo la temperatura",
      "Solo el voltaje"
    ],
    correctAnswer: 1,
    explanation: "Las técnicas sofisticadas permiten conocer información estadística y del estado de varios dispositivos, llevar cuenta de clases de datagramas y errores de varios tipos.",
    category: "Administración de Fallas"
  },
  // Administración de Contabilidad
  {
    id: 25,
    question: "¿Cuál es el objetivo de la administración de contabilidad?",
    options: [
      "Contar los dispositivos",
      "Hacer seguimiento del uso de los recursos de la red por parte de los usuarios individuales o grupos",
      "Solo facturar",
      "Solo registrar errores"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es hacer seguimiento del uso de los recursos de la red por parte de los usuarios individuales o grupos para fines de facturación, planificación de capacidad o auditoría.",
    category: "Administración de Contabilidad"
  },
  // Administración de Seguridad
  {
    id: 26,
    question: "¿Cuál es el objetivo principal de la administración de seguridad?",
    options: [
      "Eliminar todos los usuarios",
      "Controlar el acceso a los recursos de la red y proteger la información contra accesos no autorizados",
      "Solo instalar firewalls",
      "Solo cambiar contraseñas"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es controlar el acceso a los recursos de la red y proteger la información contra accesos no autorizados.",
    category: "Administración de Seguridad"
  },
  {
    id: 27,
    question: "¿Cuál es el objetivo de la prevención de ataques?",
    options: [
      "Detectar ataques en curso",
      "Mantener los recursos de red fuera del alcance de potenciales usuarios maliciosos",
      "Responder a ataques",
      "Eliminar todos los usuarios"
    ],
    correctAnswer: 1,
    explanation: "El objetivo de la prevención es mantener los recursos de red fuera del alcance de potenciales usuarios maliciosos, por ejemplo mediante control de acceso.",
    category: "Administración de Seguridad"
  },
  {
    id: 28,
    question: "¿Cuál es el objetivo de la detección de intrusos?",
    options: [
      "Prevenir ataques",
      "Detectar el momento en que un ataque se está llevando a cabo",
      "Responder a ataques",
      "Eliminar usuarios"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es detectar el momento en que un ataque se está llevando a cabo mediante sistemas de detección de intrusos que vigilan y registran el tráfico.",
    category: "Administración de Seguridad"
  },
  {
    id: 29,
    question: "¿Cuál es el objetivo de la respuesta a incidentes?",
    options: [
      "Prevenir ataques",
      "Tomar medidas para conocer las causas de un compromiso de seguridad y tratar de eliminar dichas causas",
      "Solo detectar ataques",
      "Solo notificar problemas"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es tomar las medidas necesarias para conocer las causas de un compromiso de seguridad cuando ha sido detectado, además de tratar de eliminar dichas causas.",
    category: "Administración de Seguridad"
  },
  {
    id: 30,
    question: "¿Cuál es la meta principal de las políticas de seguridad?",
    options: [
      "Eliminar usuarios",
      "Establecer los requerimientos recomendados para proteger adecuadamente la infraestructura de cómputo y la información",
      "Solo instalar software",
      "Solo configurar dispositivos"
    ],
    correctAnswer: 1,
    explanation: "La meta principal es establecer los requerimientos recomendados para proteger adecuadamente la infraestructura de cómputo y la información ahí contenida.",
    category: "Administración de Seguridad"
  },
  {
    id: 31,
    question: "¿Cuáles son las cinco clases de servicios de seguridad según la arquitectura OSI?",
    options: [
      "Solo confidencialidad y autenticación",
      "Confidencialidad, Autenticación, Integridad, Control de acceso y No repudio",
      "Solo integridad y control de acceso",
      "Solo no repudio"
    ],
    correctAnswer: 1,
    explanation: "La arquitectura de seguridad OSI identifica cinco clases: Confidencialidad, Autenticación, Integridad, Control de acceso y No repudio.",
    category: "Administración de Seguridad"
  },
  {
    id: 32,
    question: "¿Qué significa TACACS?",
    options: [
      "Terminal Access Control System",
      "Terminal Access Controller Access Control System",
      "Total Access Control System",
      "Technical Access Control System"
    ],
    correctAnswer: 1,
    explanation: "TACACS (Terminal Access Controller Access Control System) permite a un servidor de acceso remoto comunicarse con un servidor de autenticación para determinar si el usuario tiene acceso a la red.",
    category: "Administración de Seguridad"
  },
  {
    id: 33,
    question: "¿Qué significa RADIUS?",
    options: [
      "Remote Access Dial-In User System",
      "Remote Authentication Dial-In User Service",
      "Remote Access Data Integration User Service",
      "Remote Authentication Data Integration User System"
    ],
    correctAnswer: 1,
    explanation: "RADIUS (Remote Authentication Dial-In User Service) se caracteriza por la administración centralizada de autenticación.",
    category: "Administración de Seguridad"
  },
  {
    id: 34,
    question: "¿Qué es IPSec?",
    options: [
      "Un sistema operativo",
      "Un conjunto de protocolos cuya función es asegurar las comunicaciones sobre IP autenticando y/o cifrando cada paquete",
      "Un dispositivo de red",
      "Un protocolo de routing"
    ],
    correctAnswer: 1,
    explanation: "IPSec (Internet Protocol security) es un conjunto de protocolos cuya función es asegurar las comunicaciones sobre IP autenticando y/o cifrando cada paquete en un flujo de datos.",
    category: "Administración de Seguridad"
  },
  {
    id: 35,
    question: "¿Qué es MD5?",
    options: [
      "Un protocolo de red",
      "Un algoritmo de reducción criptográfico de 128 bits ampliamente usado",
      "Un dispositivo de red",
      "Un sistema operativo"
    ],
    correctAnswer: 1,
    explanation: "MD5 (Message-Digest Algorithm 5) es un algoritmo de reducción criptográfico de 128 bits ampliamente usado para verificar integridad.",
    category: "Administración de Seguridad"
  },
  {
    id: 36,
    question: "¿Cuáles son ejemplos de mecanismos de seguridad mencionados en el documento?",
    options: [
      "Solo firewalls",
      "Herramientas de control de acceso, cortafuegos (firewall), TACACS o RADIUS, Secure Shell, IPSec, MD5",
      "Solo TACACS",
      "Solo RADIUS"
    ],
    correctAnswer: 1,
    explanation: "Los mecanismos incluyen herramientas de control de acceso, cortafuegos, TACACS o RADIUS, mecanismos para acceso remoto como Secure Shell o IPSec, y mecanismos de integridad como MD5.",
    category: "Administración de Seguridad"
  },
  // Protocolos y Herramientas
  {
    id: 37,
    question: "¿Qué significa SNMP?",
    options: [
      "Simple Network Monitoring Protocol",
      "Simple Network Management Protocol",
      "System Network Management Protocol",
      "Secure Network Management Protocol"
    ],
    correctAnswer: 1,
    explanation: "SNMP (Simple Network Management Protocol) permite recoger información crítica de la red de una forma estandarizada.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 38,
    question: "¿Qué es una plataforma de monitorización?",
    options: [
      "Un dispositivo físico",
      "Un conjunto de módulos software que ofrecen servicios e incorporan una interfaz gráfica de usuario para realizar tareas comunes",
      "Solo un protocolo",
      "Solo un sistema operativo"
    ],
    correctAnswer: 1,
    explanation: "Una plataforma de monitorización es un conjunto de módulos software que ofrecen servicios e incorporan una interfaz gráfica de usuario que permite realizar las tareas más comunes.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 39,
    question: "¿Qué es un datagrama IP?",
    options: [
      "Un protocolo de seguridad",
      "Las unidades principales de información de Internet, con una cabecera que contiene información de direcciones de la capa de red",
      "Un dispositivo de red",
      "Un sistema operativo"
    ],
    correctAnswer: 1,
    explanation: "Los datagramas IP son las unidades principales de información de Internet. Un datagrama tiene una cabecera que contiene información de direcciones de la capa de red.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 40,
    question: "¿Qué hace la interfaz de usuario en NNM (Network Node Manager)?",
    options: [
      "Solo monitorea dispositivos",
      "Presenta la información de la red, eventos y alarmas, y tiene procesos en segundo plano para monitorizar el estado y mantener la base de datos",
      "Solo configura dispositivos",
      "Solo instala software"
    ],
    correctAnswer: 1,
    explanation: "La interfaz de usuario presenta la información de la red, eventos y alarmas, y tiene procesos en segundo plano para monitorizar el estado y configuración de los nodos y mantener la base de datos.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 41,
    question: "¿Qué tipos de redes se mencionan en el documento como parte de la complejidad de administración?",
    options: [
      "Solo LAN",
      "LAN, MAN y WAN",
      "Solo WAN",
      "Solo MAN"
    ],
    correctAnswer: 1,
    explanation: "El documento menciona la interconexión de diferentes tipos de redes LAN, MAN y WAN como parte de la complejidad de administración.",
    category: "Conceptos Generales"
  },
  {
    id: 42,
    question: "¿Qué medios de comunicación se mencionan en el documento?",
    options: [
      "Solo par trenzado",
      "Par trenzado, cable coaxial, fibra óptica, satelital, microondas",
      "Solo fibra óptica",
      "Solo cable coaxial"
    ],
    correctAnswer: 1,
    explanation: "Se mencionan múltiples medios de comunicación: par trenzado, cable coaxial, fibra óptica, satelital y microondas.",
    category: "Conceptos Generales"
  },
  {
    id: 43,
    question: "¿Qué protocolos de comunicación se mencionan en el documento?",
    options: [
      "Solo TCP/IP",
      "TCP/IP, SPX/IPX, SNA",
      "Solo SPX/IPX",
      "Solo SNA"
    ],
    correctAnswer: 1,
    explanation: "Se mencionan diversos protocolos de comunicación incluyendo TCP/IP, SPX/IPX y SNA.",
    category: "Conceptos Generales"
  },
  {
    id: 44,
    question: "¿Qué arquitecturas de red se mencionan en el documento?",
    options: [
      "Solo Ethernet",
      "Ethernet, Token Ring, FDDI, entre otras",
      "Solo Token Ring",
      "Solo FDDI"
    ],
    correctAnswer: 1,
    explanation: "Se mencionan diversas arquitecturas de red como Ethernet, Token Ring, FDDI, entre otras.",
    category: "Conceptos Generales"
  },
  {
    id: 45,
    question: "¿Qué sistemas operativos se mencionan en el documento?",
    options: [
      "Solo Windows",
      "DOS, Netware, Windows, UNIX",
      "Solo UNIX",
      "Solo DOS"
    ],
    correctAnswer: 1,
    explanation: "Se mencionan diversos sistemas operativos como DOS, Netware, Windows y UNIX.",
    category: "Conceptos Generales"
  },
  // Preguntas adicionales - Administración de Configuración (detalles)
  {
    id: 46,
    question: "¿Qué tipos de necesidades de la red se pueden reunir en el proceso de planeación?",
    options: [
      "Solo necesidades específicas",
      "Necesidades específicas o generales, tecnológicas (Multicast, Voz sobre IP, QoS) y cuantitativas (cantidad de nodos, switches)",
      "Solo necesidades cuantitativas",
      "Solo necesidades tecnológicas"
    ],
    correctAnswer: 1,
    explanation: "Las necesidades pueden ser específicas o generales, tecnológicas (Multicast, Voz sobre IP, Calidad de servicio QoS) y cuantitativas (cantidad de nodos en un edificio, cantidad de switches necesarios).",
    category: "Administración de Configuración"
  },
  {
    id: 47,
    question: "¿Qué mecanismos de ruteo se pueden usar para la distribución del tráfico en redes grandes?",
    options: [
      "Solo ruteo estático",
      "Ruteo estático o dinámico",
      "Solo ruteo dinámico",
      "Solo ruteo manual"
    ],
    correctAnswer: 1,
    explanation: "En redes grandes se puede diseñar la distribución del tráfico mediante algún mecanismo de ruteo, estático o dinámico.",
    category: "Administración de Configuración"
  },
  {
    id: 48,
    question: "¿Qué se recomienda hacer antes de adquirir equipos para la red?",
    options: [
      "Solo comparar precios",
      "Hacer un plan de pruebas previo al cual deben ser sujetos todos los equipos",
      "Solo leer las especificaciones",
      "Solo consultar con el vendedor"
    ],
    correctAnswer: 1,
    explanation: "Lo más recomendable es hacer un plan de pruebas previo al cual deben ser sujetos todos los equipos que pretendan ser adquiridos.",
    category: "Administración de Configuración"
  },
  {
    id: 49,
    question: "¿Qué tareas contempla la instalación de hardware?",
    options: [
      "Solo agregar equipos",
      "Agregación y sustitución de equipamiento, que puede abarcar un dispositivo completo o solo una parte como tarjeta de red, tarjeta procesadora, módulo",
      "Solo sustituir equipos",
      "Solo instalar tarjetas"
    ],
    correctAnswer: 1,
    explanation: "Las tareas contemplan agregación y sustitución de equipamiento, abarcando un dispositivo completo o solo una parte como tarjeta de red, tarjeta procesadora, módulo, etc.",
    category: "Administración de Configuración"
  },
  {
    id: 50,
    question: "¿Qué elementos requieren especial cuidado en cuanto a respaldo según el documento?",
    options: [
      "Solo el software",
      "Las configuraciones de los equipos de red",
      "Solo el hardware",
      "Solo los usuarios"
    ],
    correctAnswer: 1,
    explanation: "El respaldo frecuente de las configuraciones de los equipos de red es importante ya que son un elemento que requiere especial cuidado.",
    category: "Administración de Configuración"
  },
  {
    id: 51,
    question: "¿A qué niveles se puede llevar a cabo la provisión en una red?",
    options: [
      "Solo a nivel global",
      "A nivel de la red global o de un componente específico",
      "Solo a nivel de componente",
      "Solo a nivel local"
    ],
    correctAnswer: 1,
    explanation: "La provisión puede llevarse a cabo en diferentes niveles, a nivel de la red global o de un componente específico.",
    category: "Administración de Configuración"
  },
  // Administración de Rendimiento (detalles)
  {
    id: 52,
    question: "¿Qué se busca lograr con la administración de rendimiento?",
    options: [
      "Eliminar todos los recursos",
      "Mantener el nivel de rendimiento de la red en un nivel aceptable mediante monitoreo y análisis",
      "Solo monitorear sin actuar",
      "Solo configurar dispositivos"
    ],
    correctAnswer: 1,
    explanation: "El objetivo es mantener el nivel de rendimiento de la red en un nivel aceptable mediante el monitoreo y análisis de métricas de rendimiento.",
    category: "Administración de Rendimiento"
  },
  {
    id: 53,
    question: "¿Qué tipo de información estadística se necesita para técnicas sofisticadas de monitorización?",
    options: [
      "Solo información básica",
      "Llevar la cuenta de varias clases de datagramas y errores de varios tipos",
      "Solo información de temperatura",
      "Solo información de voltaje"
    ],
    correctAnswer: 1,
    explanation: "Para técnicas sofisticadas se necesita llevar la cuenta de varias clases de datagramas, así como de errores de varios tipos.",
    category: "Administración de Rendimiento"
  },
  // Administración de Fallas (detalles)
  {
    id: 54,
    question: "¿Dónde se puede recopilar información más detallada sobre datagramas según el documento?",
    options: [
      "Solo en los hosts",
      "En los gateways, puesto que clasifican los datagramas según protocolo",
      "Solo en los switches",
      "Solo en los routers"
    ],
    correctAnswer: 1,
    explanation: "Este tipo de información será más detallada en los gateways, puesto que clasifican los datagramas según protocolo e incluso, él mismo responde a ciertos tipos de datagramas.",
    category: "Administración de Fallas"
  },
  {
    id: 55,
    question: "¿Qué permite saber el ping cuando recibimos réplica?",
    options: [
      "Solo que el host está activo",
      "Que el host se encuentra activo y que la red que los conecta funciona",
      "Solo que la red funciona",
      "Solo que hay un error"
    ],
    correctAnswer: 1,
    explanation: "Si recibimos réplica del ping, sabremos que el host se encuentra activo y que la red que los conecta funciona. En caso contrario, sabremos que hay algún error.",
    category: "Administración de Fallas"
  },
  {
    id: 56,
    question: "¿Qué tipo de datagrama utiliza el ping?",
    options: [
      "Datagrama de datos",
      "Datagrama de echo (eco)",
      "Datagrama de control",
      "Datagrama de routing"
    ],
    correctAnswer: 1,
    explanation: "El pinging se basa en un datagrama de echo (eco), que es un tipo de datagrama que produce una réplica inmediata cuando llega al destino.",
    category: "Administración de Fallas"
  },
  {
    id: 57,
    question: "¿Qué programa generalmente incluyen las implementaciones TCP/IP para enviar echo?",
    options: [
      "telnet",
      "ping",
      "ftp",
      "http"
    ],
    correctAnswer: 1,
    explanation: "La mayoría de las implementaciones TCP/IP incluyen un programa (generalmente llamado ping), que envía un echo a un host en concreto.",
    category: "Administración de Fallas"
  },
  // Administración de Contabilidad (detalles)
  {
    id: 58,
    question: "¿Para qué fines se puede usar la información de la administración de contabilidad?",
    options: [
      "Solo para facturación",
      "Para facturación, planificación de capacidad o auditoría",
      "Solo para auditoría",
      "Solo para planificación"
    ],
    correctAnswer: 1,
    explanation: "La administración de contabilidad permite hacer seguimiento del uso de recursos para fines de facturación, planificación de capacidad o auditoría.",
    category: "Administración de Contabilidad"
  },
  // Administración de Seguridad (detalles)
  {
    id: 59,
    question: "¿Qué es un sistema de detección de intrusos?",
    options: [
      "Un firewall",
      "Un sistema que vigila y registra el tráfico que circula por la red apoyado en un esquema de notificaciones o alarmas",
      "Un antivirus",
      "Un router"
    ],
    correctAnswer: 1,
    explanation: "El objetivo de la detección de intrusos se puede lograr mediante un sistema de detección de intrusos que vigile y registre el tráfico que circula por la red apoyado en un esquema de notificaciones o alarmas.",
    category: "Administración de Seguridad"
  },
  {
    id: 60,
    question: "¿Qué indica un sistema de detección de intrusos cuando detecta una situación anormal?",
    options: [
      "Solo registra el evento",
      "Indica el momento en que se detecte una situación anormal en la red mediante notificaciones o alarmas",
      "Solo bloquea el tráfico",
      "Solo envía un email"
    ],
    correctAnswer: 1,
    explanation: "El sistema de detección de intrusos tiene un esquema de notificaciones o alarmas que indican el momento en que se detecte una situación anormal en la red.",
    category: "Administración de Seguridad"
  },
  {
    id: 61,
    question: "¿Qué políticas de seguridad se mencionan específicamente en el documento?",
    options: [
      "Solo políticas de acceso",
      "Cuentas de usuario, configuración de equipos de red, acceso remoto, respaldo, entre otras",
      "Solo políticas de respaldo",
      "Solo políticas de usuario"
    ],
    correctAnswer: 1,
    explanation: "Entre otras, algunas políticas son: cuentas de usuario, configuración de equipos de red, acceso remoto, respaldo, entre otras.",
    category: "Administración de Seguridad"
  },
  {
    id: 62,
    question: "¿Qué debe especificar una política de seguridad?",
    options: [
      "Solo los objetivos",
      "Los mecanismos por los cuales los requerimientos deben cumplirse",
      "Solo los requerimientos",
      "Solo las herramientas"
    ],
    correctAnswer: 1,
    explanation: "Una política debe especificar los mecanismos por los cuales estos requerimientos deben cumplirse.",
    category: "Administración de Seguridad"
  },
  {
    id: 63,
    question: "¿Qué es un servicio de seguridad según la arquitectura OSI?",
    options: [
      "Una herramienta",
      "Una característica que debe tener un sistema para satisfacer una política de seguridad",
      "Un protocolo",
      "Un dispositivo"
    ],
    correctAnswer: 1,
    explanation: "La arquitectura de seguridad OSI define que un servicio de seguridad es una característica que debe tener un sistema para satisfacer una política de seguridad.",
    category: "Administración de Seguridad"
  },
  {
    id: 64,
    question: "¿Qué conforman en su conjunto todos los elementos de seguridad mencionados?",
    options: [
      "Solo las políticas",
      "El modelo de seguridad para una red de cómputo",
      "Solo los mecanismos",
      "Solo los servicios"
    ],
    correctAnswer: 1,
    explanation: "Todos estos elementos en su conjunto conforman el modelo de seguridad para una red de cómputo.",
    category: "Administración de Seguridad"
  },
  {
    id: 65,
    question: "¿Qué caracteriza a RADIUS según el documento?",
    options: [
      "Su simplicidad",
      "La administración centralizada",
      "Su velocidad",
      "Su bajo costo"
    ],
    correctAnswer: 1,
    explanation: "RADIUS (Remote Authentication Dial-In User Service) se caracteriza por la administración centralizada.",
    category: "Administración de Seguridad"
  },
  {
    id: 66,
    question: "¿Qué permite hacer TACACS?",
    options: [
      "Solo autenticar usuarios",
      "Permite a un servidor de acceso remoto comunicarse con un servidor de autenticación para determinar si el usuario tiene acceso a la red",
      "Solo cifrar datos",
      "Solo controlar acceso"
    ],
    correctAnswer: 1,
    explanation: "TACACS (Terminal Access Controller Access Control System) permite a un servidor de acceso remoto comunicarse con un servidor de autenticación para determinar si el usuario tiene acceso a la red.",
    category: "Administración de Seguridad"
  },
  {
    id: 67,
    question: "¿Qué hace IPSec con cada paquete en un flujo de datos?",
    options: [
      "Solo los enruta",
      "Autentica y/o cifra cada paquete",
      "Solo los comprime",
      "Solo los almacena"
    ],
    correctAnswer: 1,
    explanation: "IPSec (Internet Protocol security) es un conjunto de protocolos cuya función es asegurar las comunicaciones sobre IP autenticando y/o cifrando cada paquete en un flujo de datos.",
    category: "Administración de Seguridad"
  },
  {
    id: 68,
    question: "¿Para qué se usa principalmente MD5?",
    options: [
      "Para cifrar datos",
      "Como mecanismo de integridad",
      "Para autenticar usuarios",
      "Para controlar acceso"
    ],
    correctAnswer: 1,
    explanation: "MD5 (Message-Digest Algorithm 5) es un algoritmo de reducción criptográfico de 128 bits ampliamente usado como mecanismo de integridad.",
    category: "Administración de Seguridad"
  },
  {
    id: 69,
    question: "¿Qué es Secure Shell (SSH)?",
    options: [
      "Un protocolo de routing",
      "Un mecanismo para acceso remoto",
      "Un sistema operativo",
      "Un dispositivo de red"
    ],
    correctAnswer: 1,
    explanation: "Secure Shell es un mecanismo para acceso remoto mencionado junto con IPSec como herramientas de seguridad.",
    category: "Administración de Seguridad"
  },
  // Protocolos y Herramientas (detalles)
  {
    id: 70,
    question: "¿Qué permite hacer SNMP según el documento?",
    options: [
      "Solo monitorear dispositivos",
      "Recoger información crítica de la red de una forma estandarizada",
      "Solo configurar dispositivos",
      "Solo instalar software"
    ],
    correctAnswer: 1,
    explanation: "SNMP (Simple Network Management Protocol) permite recoger información crítica de la red de una forma estandarizada.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 71,
    question: "¿Qué herramientas visualizan un mapa de la red según el documento?",
    options: [
      "Solo herramientas de texto",
      "Herramientas que muestran objetos que cambian de color cuando cambian de estado y cuadros con estadísticas",
      "Solo herramientas de línea de comandos",
      "Solo herramientas de monitoreo básico"
    ],
    correctAnswer: 1,
    explanation: "Hay varias herramientas que visualizan un mapa de la red, donde los objetos cambian de color cuando cambian de estado, y hay cuadros que muestran estadísticas sobre los datagramas y otros objetos.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 72,
    question: "¿De qué se compone NNM (Network Node Manager)?",
    options: [
      "Solo de la interfaz de usuario",
      "De la plataforma SNMP y de una interfaz de usuario",
      "Solo de la plataforma SNMP",
      "Solo de procesos en segundo plano"
    ],
    correctAnswer: 1,
    explanation: "NNM (Network Node Manager) se compone de la plataforma SNMP y de una interfaz de usuario.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 73,
    question: "¿Qué hacen los procesos en segundo plano en NNM?",
    options: [
      "Solo muestran información",
      "Monitorizan el estado y la configuración de los nodos y mantienen la base de datos con la información de la red",
      "Solo configuran dispositivos",
      "Solo instalan software"
    ],
    correctAnswer: 1,
    explanation: "NNM tiene procesos que corren en segundo plano para monitorizar el estado y la configuración de los nodos y mantener la base de datos con la información de la red.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 74,
    question: "¿Qué plataformas de gestión se mencionan en el documento?",
    options: [
      "Solo HP Open View",
      "HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager, entre otros",
      "Solo Sun SunNet Manager",
      "Solo Aprisma Spectrum"
    ],
    correctAnswer: 1,
    explanation: "Entre las plataformas de gestión existentes en el mercado tenemos: HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager, entre otros.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 75,
    question: "¿Qué contiene la cabecera de un datagrama IP?",
    options: [
      "Solo datos",
      "Información de direcciones de la capa de red",
      "Solo información de protocolo",
      "Solo información de tamaño"
    ],
    correctAnswer: 1,
    explanation: "Un datagrama tiene una cabecera que contiene una información de direcciones de la capa de red.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 76,
    question: "¿Qué examinan los encaminadores (routers) en un datagrama IP?",
    options: [
      "Solo el tamaño",
      "La dirección de destino de la cabecera para dirigir los datagramas al destino",
      "Solo el protocolo",
      "Solo los datos"
    ],
    correctAnswer: 1,
    explanation: "Los encaminadores examinan la dirección de destino de la cabecera, para dirigir los datagramas al destino.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 77,
    question: "¿Dónde es posible recopilar información de monitorización según el documento?",
    options: [
      "Solo en los hosts",
      "En un punto de monitorización central",
      "Solo en los switches",
      "Solo en los routers"
    ],
    correctAnswer: 1,
    explanation: "Es posible recopilar toda esta información en un punto de monitorización central.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 78,
    question: "¿Qué ofrece una plataforma de monitorización?",
    options: [
      "Solo hardware",
      "Un conjunto de módulos software que ofrecen una serie de servicios e incorporan una interfaz gráfica de usuario",
      "Solo protocolos",
      "Solo dispositivos"
    ],
    correctAnswer: 1,
    explanation: "Una plataforma de monitorización es un conjunto de módulos software que ofrecen una serie de servicios en las que incorporan una interfaz gráfica de usuario que permite realizar las tareas más comunes.",
    category: "Protocolos y Herramientas"
  },
  // Conceptos ITU/OSI (detalles)
  {
    id: 79,
    question: "¿Qué produce principalmente la ITU?",
    options: [
      "Hardware",
      "Recomendaciones y normas que definen cómo funcionan las redes de telecomunicaciones",
      "Software",
      "Dispositivos de red"
    ],
    correctAnswer: 1,
    explanation: "La Unión Internacional de Telecomunicaciones (UIT=ITU) produce principalmente recomendaciones, normas que definen cómo funcionan las redes de telecomunicaciones por separado y entre ellas.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 80,
    question: "¿Qué carácter tienen las recomendaciones de la ITU?",
    options: [
      "Vinculante obligatorio",
      "No tienen carácter vinculante, aunque generalmente se aplican por su gran calidad",
      "Opcional y de baja calidad",
      "Solo para algunos países"
    ],
    correctAnswer: 1,
    explanation: "Estas recomendaciones no tienen carácter vinculante, aunque generalmente se aplican por su gran calidad y porque garantizan la interconectividad de las redes.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 81,
    question: "¿Qué garantizan las recomendaciones de la ITU?",
    options: [
      "Solo la velocidad",
      "La interconectividad de las redes y permiten la prestación de servicios de telecomunicaciones a escala mundial",
      "Solo la seguridad",
      "Solo el costo"
    ],
    correctAnswer: 1,
    explanation: "Las recomendaciones garantizan la interconectividad de las redes y permiten la prestación de servicios de telecomunicaciones a escala mundial.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 82,
    question: "¿Qué organización hizo la propuesta OSI?",
    options: [
      "ITU",
      "ISO (Organización Internacional para la Estandarización)",
      "IEEE",
      "ANSI"
    ],
    correctAnswer: 1,
    explanation: "OSI es la propuesta que hizo la Organización Internacional para la Estandarización (ISO) para estandarizar la interconexión de sistemas abiertos.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 83,
    question: "¿Qué se refleja cuando se hace un uso eficiente de la red según el documento?",
    options: [
      "Solo en los costos",
      "En la calidad de los servicios ofrecidos",
      "Solo en la velocidad",
      "Solo en la seguridad"
    ],
    correctAnswer: 1,
    explanation: "El eficiente y efectivo empleo de los recursos de la red se verá reflejado en la calidad de los servicios ofrecidos.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 84,
    question: "¿Qué se refiere la dimensión funcional en la administración de redes?",
    options: [
      "A las fases temporales",
      "A la asignación de tareas de administración por medio de áreas funcionales",
      "A los escenarios",
      "A los protocolos"
    ],
    correctAnswer: 1,
    explanation: "La dimensión funcional se refiere a la asignación de tareas de administración por medio de áreas funcionales.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 85,
    question: "¿Qué se refiere la dimensión temporal en la administración de redes?",
    options: [
      "A las áreas funcionales",
      "A dividir el proceso de administración en diferentes fases cíclicas, incluyendo las fases de planeación, implementación y operación",
      "A los escenarios",
      "A los protocolos"
    ],
    correctAnswer: 1,
    explanation: "La dimensión temporal se refiere a dividir el proceso de administración en diferentes fases cíclicas, incluyendo las fases de planeación, implementación y operación.",
    category: "Definiciones ITU/OSI"
  },
  {
    id: 86,
    question: "¿Qué se refiere la dimensión del escenario en la administración de redes?",
    options: [
      "A las áreas funcionales",
      "Al resto de los escenarios adicionales al de administración de redes",
      "A las fases temporales",
      "A los protocolos"
    ],
    correctAnswer: 1,
    explanation: "La dimensión del escenario se refiere al resto de los escenarios adicionales al de administración de redes.",
    category: "Definiciones ITU/OSI"
  },
  // Conceptos Generales (detalles adicionales)
  {
    id: 87,
    question: "¿Qué ejemplos de necesidades tecnológicas se mencionan en el documento?",
    options: [
      "Solo velocidad",
      "Multicast, Voz sobre IP, Calidad de servicio QoS",
      "Solo seguridad",
      "Solo ancho de banda"
    ],
    correctAnswer: 1,
    explanation: "Las necesidades pueden ser tecnológicas (Multicast, Voz sobre IP, Calidad de servicio QoS).",
    category: "Conceptos Generales"
  },
  {
    id: 88,
    question: "¿Qué ejemplos de necesidades cuantitativas se mencionan?",
    options: [
      "Solo velocidad de conexión",
      "Cantidad de nodos en un edificio, cantidad de switches necesarios para cubrir la demanda",
      "Solo tipo de cableado",
      "Solo tipo de protocolo"
    ],
    correctAnswer: 1,
    explanation: "Las necesidades pueden ser cuantitativas (cantidad de nodos en un edificio, cantidad de switches necesarios para cubrir la demanda de nodos).",
    category: "Conceptos Generales"
  },
  {
    id: 89,
    question: "¿Qué debe cumplir la infraestructura de red según el documento?",
    options: [
      "Solo ser económica",
      "Cumplir con la mayoría de las necesidades técnicas de la red",
      "Solo ser rápida",
      "Solo ser segura"
    ],
    correctAnswer: 1,
    explanation: "La infraestructura debe cumplir con la mayoría de las necesidades técnicas de la red.",
    category: "Administración de Configuración"
  },
  {
    id: 90,
    question: "¿Qué se debe hacer si el diseño y equipo propuesto satisfacen las necesidades?",
    options: [
      "Solo comprar los equipos",
      "Proceder a planear la implementación",
      "Solo diseñar más",
      "Solo configurar"
    ],
    correctAnswer: 1,
    explanation: "Si el diseño y equipo propuesto satisfacen las necesidades, se debe proceder a planear la implementación.",
    category: "Administración de Configuración"
  },
  {
    id: 91,
    question: "¿Qué incluye la administración de software además de instalación y desinstalación?",
    options: [
      "Solo configuración",
      "Actualización de aplicaciones, sistema operativo o funcionalidad, y mantener control sobre programas creados para obtener información específica",
      "Solo desinstalación",
      "Solo instalación"
    ],
    correctAnswer: 1,
    explanation: "La administración de software es responsable de la instalación, desinstalación y actualización de una aplicación, sistema operativo o funcionalidad en los dispositivos de la red. Además, de mantener un control sobre los programas que son creados para obtener información específica en los dispositivos.",
    category: "Administración de Configuración"
  },
  {
    id: 92,
    question: "¿Qué es la técnica más primitiva de monitorización mencionada?",
    options: [
      "Usar SNMP",
      "Hacer pinging a los hosts críticos",
      "Usar herramientas gráficas",
      "Revisar logs manualmente"
    ],
    correctAnswer: 1,
    explanation: "De las prácticas rutinarias en la administración de redes como es la monitorización se puede mencionar que la técnica más primitiva es hacer pinging a los hosts críticos.",
    category: "Administración de Fallas"
  },
  {
    id: 93,
    question: "¿Qué información presenta la interfaz de usuario en NNM?",
    options: [
      "Solo eventos",
      "La información de la red, los eventos y alarmas",
      "Solo alarmas",
      "Solo estadísticas"
    ],
    correctAnswer: 1,
    explanation: "La interfaz de usuario se encarga de presentar: la información de la red, los eventos y alarmas.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 94,
    question: "¿Qué tipo de información se puede obtener de los gateways según el documento?",
    options: [
      "Solo información básica",
      "Información más detallada porque clasifican los datagramas según protocolo e incluso responden a ciertos tipos de datagramas",
      "Solo información de routing",
      "Solo información de seguridad"
    ],
    correctAnswer: 1,
    explanation: "Este tipo de información será más detallada en los gateways, puesto que clasifican los datagramas según protocolo e incluso, él mismo responde a ciertos tipos de datagramas.",
    category: "Administración de Fallas"
  },
  {
    id: 95,
    question: "¿Qué debe desarrollar el grupo encargado del área de seguridad?",
    options: [
      "Solo herramientas",
      "Todas las políticas después de haber hecho un análisis profundo de las necesidades de seguridad",
      "Solo mecanismos",
      "Solo servicios"
    ],
    correctAnswer: 1,
    explanation: "El grupo encargado de ésta área debe desarrollar todas las políticas después de haber hecho un análisis profundo de las necesidades de seguridad.",
    category: "Administración de Seguridad"
  },
  {
    id: 96,
    question: "¿Qué se debe definir para implementar los servicios de seguridad?",
    options: [
      "Solo las políticas",
      "Las herramientas necesarias para poder implementar los servicios de seguridad dictados por las políticas de seguridad",
      "Solo los servicios",
      "Solo los objetivos"
    ],
    correctAnswer: 1,
    explanation: "Se deben definir las herramientas necesarias para poder implementar los servicios de seguridad dictados por las políticas de seguridad.",
    category: "Administración de Seguridad"
  },
  {
    id: 97,
    question: "¿Qué son los datagramas IP según el documento?",
    options: [
      "Protocolos de comunicación",
      "Las unidades principales de información de Internet",
      "Dispositivos de red",
      "Sistemas operativos"
    ],
    correctAnswer: 1,
    explanation: "Los datagramas IP son las unidades principales de información de Internet.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 98,
    question: "¿Qué permite la interfaz gráfica de usuario en una plataforma de monitorización?",
    options: [
      "Solo ver información",
      "Realizar las tareas más comunes de administración",
      "Solo configurar",
      "Solo instalar"
    ],
    correctAnswer: 1,
    explanation: "Una plataforma de monitorización incorpora una interfaz gráfica de usuario que permite realizar las tareas más comunes.",
    category: "Protocolos y Herramientas"
  },
  {
    id: 99,
    question: "¿Qué se debe hacer cuando se detecta un compromiso de seguridad según el documento?",
    options: [
      "Solo bloquear el acceso",
      "Tomar las medidas necesarias para conocer las causas y tratar de eliminar dichas causas",
      "Solo notificar",
      "Solo registrar"
    ],
    correctAnswer: 1,
    explanation: "El objetivo de la respuesta a incidentes es tomar las medidas necesarias para conocer las causas de un compromiso de seguridad en un sistema que es parte de la red, cuando este ha sido detectado, además de tratar de eliminar dichas causas.",
    category: "Administración de Seguridad"
  },
  {
    id: 100,
    question: "¿Qué se busca lograr con la prevención de ataques según el documento?",
    options: [
      "Detectar todos los ataques",
      "Mantener los recursos de red fuera del alcance de potenciales usuarios maliciosos mediante estrategias como control de acceso",
      "Eliminar todos los usuarios",
      "Solo monitorear"
    ],
    correctAnswer: 1,
    explanation: "El objetivo de la prevención de ataques es mantener los recursos de red fuera del alcance de potenciales usuarios maliciosos. Una acción puede ser la implementación de alguna estrategia de control de acceso.",
    category: "Administración de Seguridad"
  }
];

