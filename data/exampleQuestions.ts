export interface ExampleQuestion {
  id: number;
  question: string;
  options: string[];
  correctAnswer: number;
  explanation: string;
  category: string;
  concept: string; // El concepto del que se piden ejemplos
}

export const exampleQuestions: ExampleQuestion[] = [
  // Dimensión Funcional - Áreas Funcionales
  {
    id: 1,
    question: "Menciona 3 ejemplos de áreas funcionales en la administración de redes (Dimensión Funcional):",
    options: [
      "Configuración, Rendimiento, Fallas, Contabilidad, Seguridad",
      "Configuración, Rendimiento, Fallas",
      "Solo Configuración y Seguridad",
      "Solo Rendimiento y Fallas"
    ],
    correctAnswer: 0,
    explanation: "Las 5 áreas funcionales de la administración de redes son: Administración de la Configuración, Administración de Rendimiento, Administración de Fallas, Administración de la Contabilidad y Administración de la Seguridad.",
    category: "Dimensión Funcional",
    concept: "Áreas Funcionales"
  },
  {
    id: 2,
    question: "¿Cuáles son ejemplos de áreas funcionales según la Dimensión Funcional?",
    options: [
      "Planeación, Implementación, Operación",
      "LAN, MAN, WAN",
      "Administración de Configuración, Administración de Rendimiento, Administración de Fallas, Administración de Contabilidad, Administración de Seguridad",
      "TCP/IP, SPX/IPX, SNA"
    ],
    correctAnswer: 2,
    explanation: "La Dimensión Funcional se refiere a la asignación de tareas por medio de áreas funcionales. Las 5 áreas son: Configuración, Rendimiento, Fallas, Contabilidad y Seguridad.",
    category: "Dimensión Funcional",
    concept: "Áreas Funcionales"
  },
  // Dimensión Temporal - Fases Cíclicas
  {
    id: 3,
    question: "Menciona 3 ejemplos de fases cíclicas en la administración de redes (Dimensión Temporal):",
    options: [
      "Configuración, Rendimiento, Seguridad",
      "LAN, MAN, WAN",
      "Planeación, Implementación, Operación",
      "Hardware, Software, Protocolos"
    ],
    correctAnswer: 2,
    explanation: "La Dimensión Temporal se refiere a dividir el proceso de administración en diferentes fases cíclicas, incluyendo las fases de: Planeación, Implementación y Operación.",
    category: "Dimensión Temporal",
    concept: "Fases Cíclicas"
  },
  {
    id: 4,
    question: "¿Cuáles son las fases cíclicas de la Dimensión Temporal?",
    options: [
      "Configuración, Rendimiento, Fallas",
      "Diseño, Instalación, Configuración",
      "Planeación, Implementación, Operación",
      "Monitoreo, Análisis, Corrección"
    ],
    correctAnswer: 2,
    explanation: "La Dimensión Temporal divide el proceso en fases cíclicas: Planeación (diseño y planificación), Implementación (instalación y configuración) y Operación (monitoreo y mantenimiento).",
    category: "Dimensión Temporal",
    concept: "Fases Cíclicas"
  },
  // Dimensión del Escenario
  {
    id: 5,
    question: "La Dimensión del Escenario se refiere a:",
    options: [
      "Las áreas funcionales",
      "Las fases temporales",
      "El resto de los escenarios adicionales al de administración de redes",
      "Los protocolos de comunicación"
    ],
    correctAnswer: 2,
    explanation: "La Dimensión del Escenario se refiere al resto de los escenarios adicionales al de administración de redes. Estos pueden incluir escenarios de integración, migración, expansión, etc.",
    category: "Dimensión del Escenario",
    concept: "Escenarios Adicionales"
  },
  // Medios de Comunicación
  {
    id: 6,
    question: "Menciona 3 ejemplos de medios de comunicación mencionados en el documento:",
    options: [
      "TCP/IP, SPX/IPX, SNA",
      "Ethernet, Token Ring, FDDI",
      "Par trenzado, Cable coaxial, Fibra óptica",
      "DOS, Netware, Windows"
    ],
    correctAnswer: 2,
    explanation: "Los medios de comunicación mencionados incluyen: par trenzado, cable coaxial, fibra óptica, satelital y microondas.",
    category: "Medios de Comunicación",
    concept: "Medios de Comunicación"
  },
  {
    id: 7,
    question: "¿Cuáles son ejemplos de medios de comunicación utilizados en redes?",
    options: [
      "Solo par trenzado y fibra óptica",
      "Solo cable coaxial",
      "Solo satelital",
      "Par trenzado, cable coaxial, fibra óptica, satelital, microondas"
    ],
    correctAnswer: 3,
    explanation: "Se mencionan múltiples medios de comunicación: par trenzado, cable coaxial, fibra óptica, satelital y microondas.",
    category: "Medios de Comunicación",
    concept: "Medios de Comunicación"
  },
  // Protocolos de Comunicación
  {
    id: 8,
    question: "Menciona 3 ejemplos de protocolos de comunicación mencionados en el documento:",
    options: [
      "Par trenzado, Coaxial, Fibra óptica",
      "Ethernet, Token Ring, FDDI",
      "TCP/IP, SPX/IPX, SNA",
      "DOS, Netware, Windows"
    ],
    correctAnswer: 2,
    explanation: "Los protocolos de comunicación mencionados incluyen: TCP/IP, SPX/IPX y SNA.",
    category: "Protocolos de Comunicación",
    concept: "Protocolos de Comunicación"
  },
  {
    id: 9,
    question: "¿Cuáles son ejemplos de protocolos de comunicación?",
    options: [
      "Solo TCP/IP",
      "Solo SPX/IPX",
      "TCP/IP, SPX/IPX, SNA",
      "Solo SNA"
    ],
    correctAnswer: 2,
    explanation: "Se mencionan diversos protocolos de comunicación incluyendo TCP/IP, SPX/IPX y SNA.",
    category: "Protocolos de Comunicación",
    concept: "Protocolos de Comunicación"
  },
  // Arquitecturas de Red
  {
    id: 10,
    question: "Menciona 3 ejemplos de arquitecturas de red mencionadas en el documento:",
    options: [
      "TCP/IP, SPX/IPX, SNA",
      "LAN, MAN, WAN",
      "Ethernet, Token Ring, FDDI",
      "DOS, Netware, Windows"
    ],
    correctAnswer: 2,
    explanation: "Se mencionan diversas arquitecturas de red como Ethernet, Token Ring, FDDI, entre otras.",
    category: "Arquitecturas de Red",
    concept: "Arquitecturas de Red"
  },
  {
    id: 11,
    question: "¿Cuáles son ejemplos de arquitecturas de red?",
    options: [
      "Solo Ethernet",
      "Solo Token Ring",
      "Solo FDDI",
      "Ethernet, Token Ring, FDDI, entre otras"
    ],
    correctAnswer: 3,
    explanation: "Se mencionan diversas arquitecturas de red como Ethernet, Token Ring, FDDI, entre otras.",
    category: "Arquitecturas de Red",
    concept: "Arquitecturas de Red"
  },
  // Sistemas Operativos
  {
    id: 12,
    question: "Menciona 3 ejemplos de sistemas operativos mencionados en el documento:",
    options: [
      "Ethernet, Token Ring, FDDI",
      "TCP/IP, SPX/IPX, SNA",
      "DOS, Netware, Windows",
      "LAN, MAN, WAN"
    ],
    correctAnswer: 2,
    explanation: "Se mencionan diversos sistemas operativos como DOS, Netware, Windows y UNIX.",
    category: "Sistemas Operativos",
    concept: "Sistemas Operativos"
  },
  {
    id: 13,
    question: "¿Cuáles son ejemplos de sistemas operativos utilizados en redes?",
    options: [
      "Solo Windows",
      "Solo UNIX",
      "DOS, Netware, Windows, UNIX",
      "Solo DOS"
    ],
    correctAnswer: 2,
    explanation: "Se mencionan diversos sistemas operativos como DOS, Netware, Windows y UNIX.",
    category: "Sistemas Operativos",
    concept: "Sistemas Operativos"
  },
  // Tipos de Redes
  {
    id: 14,
    question: "Menciona 3 ejemplos de tipos de redes mencionados en el documento:",
    options: [
      "Ethernet, Token Ring, FDDI",
      "TCP/IP, SPX/IPX, SNA",
      "LAN, MAN, WAN",
      "DOS, Netware, Windows"
    ],
    correctAnswer: 2,
    explanation: "Se menciona la interconexión de diferentes tipos de redes: LAN (Local Area Network), MAN (Metropolitan Area Network) y WAN (Wide Area Network).",
    category: "Tipos de Redes",
    concept: "Tipos de Redes"
  },
  {
    id: 15,
    question: "¿Cuáles son ejemplos de tipos de redes?",
    options: [
      "Solo LAN",
      "Solo WAN",
      "Solo MAN",
      "LAN, MAN y WAN"
    ],
    correctAnswer: 3,
    explanation: "El documento menciona la interconexión de diferentes tipos de redes LAN, MAN y WAN.",
    category: "Tipos de Redes",
    concept: "Tipos de Redes"
  },
  // Servicios de Seguridad OSI
  {
    id: 16,
    question: "Menciona 3 ejemplos de servicios de seguridad según la arquitectura OSI:",
    options: [
      "TACACS, RADIUS, IPSec",
      "Firewall, Antivirus, IDS",
      "Confidencialidad, Autenticación, Integridad",
      "MD5, SSH, VPN"
    ],
    correctAnswer: 2,
    explanation: "La arquitectura de seguridad OSI identifica cinco clases de servicios de seguridad: Confidencialidad, Autenticación, Integridad, Control de acceso y No repudio.",
    category: "Servicios de Seguridad",
    concept: "Servicios de Seguridad OSI"
  },
  {
    id: 17,
    question: "¿Cuáles son los 5 servicios de seguridad según la arquitectura OSI?",
    options: [
      "TACACS, RADIUS, IPSec, MD5, SSH",
      "Firewall, IDS, VPN, Antivirus, Antispyware",
      "Confidencialidad, Autenticación, Integridad, Control de acceso, No repudio",
      "Cifrado, Hash, Firma digital, Certificado, Token"
    ],
    correctAnswer: 2,
    explanation: "La arquitectura de seguridad OSI identifica cinco clases de servicios de seguridad: Confidencialidad, Autenticación, Integridad, Control de acceso y No repudio.",
    category: "Servicios de Seguridad",
    concept: "Servicios de Seguridad OSI"
  },
  // Mecanismos de Seguridad
  {
    id: 18,
    question: "Menciona 3 ejemplos de mecanismos de seguridad mencionados en el documento:",
    options: [
      "Confidencialidad, Autenticación, Integridad",
      "LAN, MAN, WAN",
      "Herramientas de control de acceso, Cortafuegos (firewall), TACACS o RADIUS",
      "TCP/IP, SPX/IPX, SNA"
    ],
    correctAnswer: 2,
    explanation: "Los mecanismos de seguridad incluyen: herramientas de control de acceso, cortafuegos (firewall), TACACS o RADIUS, mecanismos para acceso remoto como Secure Shell o IPSec, mecanismos de integridad como MD5.",
    category: "Mecanismos de Seguridad",
    concept: "Mecanismos de Seguridad"
  },
  {
    id: 19,
    question: "¿Cuáles son ejemplos de mecanismos de seguridad?",
    options: [
      "Solo firewalls",
      "Solo TACACS",
      "Solo RADIUS",
      "Herramientas de control de acceso, cortafuegos (firewall), TACACS o RADIUS, Secure Shell, IPSec, MD5"
    ],
    correctAnswer: 3,
    explanation: "Los mecanismos incluyen herramientas de control de acceso, cortafuegos, TACACS o RADIUS, mecanismos para acceso remoto como Secure Shell o IPSec, y mecanismos de integridad como MD5.",
    category: "Mecanismos de Seguridad",
    concept: "Mecanismos de Seguridad"
  },
  // Políticas de Seguridad
  {
    id: 20,
    question: "Menciona 3 ejemplos de políticas de seguridad mencionadas en el documento:",
    options: [
      "Confidencialidad, Autenticación, Integridad",
      "TACACS, RADIUS, IPSec",
      "Cuentas de usuario, Configuración de equipos de red, Acceso remoto",
      "Firewall, IDS, VPN"
    ],
    correctAnswer: 2,
    explanation: "Entre otras, algunas políticas son: cuentas de usuario, configuración de equipos de red, acceso remoto, respaldo, entre otras.",
    category: "Políticas de Seguridad",
    concept: "Políticas de Seguridad"
  },
  {
    id: 21,
    question: "¿Cuáles son ejemplos de políticas de seguridad?",
    options: [
      "Solo políticas de acceso",
      "Solo políticas de respaldo",
      "Cuentas de usuario, configuración de equipos de red, acceso remoto, respaldo, entre otras",
      "Solo políticas de usuario"
    ],
    correctAnswer: 2,
    explanation: "Entre otras, algunas políticas son: cuentas de usuario, configuración de equipos de red, acceso remoto, respaldo, entre otras.",
    category: "Políticas de Seguridad",
    concept: "Políticas de Seguridad"
  },
  // Plataformas de Gestión
  {
    id: 22,
    question: "Menciona 3 ejemplos de plataformas de gestión mencionadas en el documento:",
    options: [
      "SNMP, TACACS, RADIUS",
      "Ethernet, Token Ring, FDDI",
      "HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager",
      "DOS, Netware, Windows"
    ],
    correctAnswer: 2,
    explanation: "Entre las plataformas de gestión existentes en el mercado tenemos: HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager, entre otros.",
    category: "Plataformas de Gestión",
    concept: "Plataformas de Gestión"
  },
  {
    id: 23,
    question: "¿Cuáles son ejemplos de plataformas de gestión de redes?",
    options: [
      "Solo HP Open View",
      "Solo Sun SunNet Manager",
      "Solo Aprisma Spectrum",
      "HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager, entre otros"
    ],
    correctAnswer: 3,
    explanation: "Entre las plataformas de gestión existentes en el mercado tenemos: HP Open View Network Manager, Sun SunNet Manager, Aprisma Spectrum Site Manager, entre otros.",
    category: "Plataformas de Gestión",
    concept: "Plataformas de Gestión"
  },
  // Necesidades Tecnológicas
  {
    id: 24,
    question: "Menciona 3 ejemplos de necesidades tecnológicas mencionadas en el documento:",
    options: [
      "LAN, MAN, WAN",
      "TCP/IP, SPX/IPX, SNA",
      "Multicast, Voz sobre IP, Calidad de servicio QoS",
      "Ethernet, Token Ring, FDDI"
    ],
    correctAnswer: 2,
    explanation: "Las necesidades pueden ser tecnológicas (Multicast, Voz sobre IP, Calidad de servicio QoS).",
    category: "Necesidades de Red",
    concept: "Necesidades Tecnológicas"
  },
  {
    id: 25,
    question: "¿Cuáles son ejemplos de necesidades tecnológicas en una red?",
    options: [
      "Solo velocidad",
      "Solo seguridad",
      "Solo ancho de banda",
      "Multicast, Voz sobre IP, Calidad de servicio QoS"
    ],
    correctAnswer: 3,
    explanation: "Las necesidades pueden ser tecnológicas (Multicast, Voz sobre IP, Calidad de servicio QoS).",
    category: "Necesidades de Red",
    concept: "Necesidades Tecnológicas"
  },
  // Necesidades Cuantitativas
  {
    id: 26,
    question: "Menciona 2 ejemplos de necesidades cuantitativas mencionadas en el documento:",
    options: [
      "Multicast, QoS",
      "TCP/IP, SPX/IPX",
      "Cantidad de nodos en un edificio, Cantidad de switches necesarios",
      "Ethernet, Token Ring"
    ],
    correctAnswer: 2,
    explanation: "Las necesidades pueden ser cuantitativas (cantidad de nodos en un edificio, cantidad de switches necesarios para cubrir la demanda de nodos).",
    category: "Necesidades de Red",
    concept: "Necesidades Cuantitativas"
  },
  {
    id: 27,
    question: "¿Cuáles son ejemplos de necesidades cuantitativas en el diseño de red?",
    options: [
      "Solo velocidad de conexión",
      "Solo tipo de cableado",
      "Solo tipo de protocolo",
      "Cantidad de nodos en un edificio, cantidad de switches necesarios para cubrir la demanda"
    ],
    correctAnswer: 3,
    explanation: "Las necesidades pueden ser cuantitativas (cantidad de nodos en un edificio, cantidad de switches necesarios para cubrir la demanda de nodos).",
    category: "Necesidades de Red",
    concept: "Necesidades Cuantitativas"
  },
  // Capas de Diseño Jerárquico
  {
    id: 28,
    question: "Menciona las 3 capas principales en un diseño jerárquico de red:",
    options: [
      "Física, Lógica, Virtual",
      "Capa 1, Capa 2, Capa 3",
      "Acceso, Distribución, Núcleo (core)",
      "LAN, MAN, WAN"
    ],
    correctAnswer: 2,
    explanation: "En un diseño jerárquico se tienen las capas de acceso, distribución y núcleo (core).",
    category: "Diseño de Red",
    concept: "Capas de Diseño Jerárquico"
  },
  {
    id: 29,
    question: "¿Cuáles son las capas en un diseño jerárquico de red?",
    options: [
      "Solo acceso",
      "Solo núcleo",
      "Acceso, distribución y núcleo (core)",
      "Solo distribución"
    ],
    correctAnswer: 2,
    explanation: "En un diseño jerárquico se tienen las capas de acceso, distribución y núcleo (core).",
    category: "Diseño de Red",
    concept: "Capas de Diseño Jerárquico"
  },
  // Elementos de Infraestructura
  {
    id: 30,
    question: "Menciona 3 ejemplos de elementos de infraestructura tecnológica informática:",
    options: [
      "TCP/IP, SPX/IPX, SNA",
      "Ethernet, Token Ring, FDDI",
      "Servidores, Computadores, Switches",
      "LAN, MAN, WAN"
    ],
    correctAnswer: 2,
    explanation: "La infraestructura tecnológica informática comprende: servidores, computadores, portátiles, impresoras, switches, routers, firewall, escaners, cableado estructurado, software informático, equipos de comunicación, internet, red LAN.",
    category: "Infraestructura",
    concept: "Elementos de Infraestructura"
  },
  {
    id: 31,
    question: "¿Cuáles son ejemplos de elementos de infraestructura tecnológica informática?",
    options: [
      "Solo servidores y computadores",
      "Solo cableado estructurado",
      "Solo protocolos de comunicación",
      "Servidores, computadores, portátiles, impresoras, switches, routers, firewall, escaners, cableado estructurado"
    ],
    correctAnswer: 3,
    explanation: "La infraestructura tecnológica informática comprende el conjunto de todos los elementos tecnológicos hardware y software: servidores, computadores, portátiles, impresoras, switches, routers, firewall, etc.",
    category: "Infraestructura",
    concept: "Elementos de Infraestructura"
  },
  // Mecanismos de Ruteo
  {
    id: 32,
    question: "Menciona 2 ejemplos de mecanismos de ruteo mencionados en el documento:",
    options: [
      "Estático, Dinámico",
      "TCP/IP, SPX/IPX",
      "Ethernet, Token Ring",
      "LAN, WAN"
    ],
    correctAnswer: 0,
    explanation: "En redes grandes se puede diseñar la distribución del tráfico mediante algún mecanismo de ruteo, estático o dinámico.",
    category: "Ruteo",
    concept: "Mecanismos de Ruteo"
  },
  {
    id: 33,
    question: "¿Cuáles son los mecanismos de ruteo para distribución de tráfico?",
    options: [
      "Solo ruteo estático",
      "Ruteo estático o dinámico",
      "Solo ruteo dinámico",
      "Solo ruteo manual"
    ],
    correctAnswer: 1,
    explanation: "En redes grandes se puede diseñar la distribución del tráfico mediante algún mecanismo de ruteo, estático o dinámico.",
    category: "Ruteo",
    concept: "Mecanismos de Ruteo"
  },
  // Componentes de NNM
  {
    id: 34,
    question: "Menciona los 2 componentes principales de NNM (Network Node Manager):",
    options: [
      "Hardware y Software",
      "Agentes y Administrador",
      "La plataforma SNMP y la interfaz de usuario",
      "Objetos y Agentes"
    ],
    correctAnswer: 2,
    explanation: "NNM (Network Node Manager) se compone de la plataforma SNMP y de una interfaz de usuario.",
    category: "Herramientas de Gestión",
    concept: "Componentes de NNM"
  },
  {
    id: 35,
    question: "¿De qué se compone NNM (Network Node Manager)?",
    options: [
      "Solo de la interfaz de usuario",
      "De la plataforma SNMP y de una interfaz de usuario",
      "Solo de la plataforma SNMP",
      "Solo de procesos en segundo plano"
    ],
    correctAnswer: 1,
    explanation: "NNM (Network Node Manager) se compone de la plataforma SNMP y de una interfaz de usuario.",
    category: "Herramientas de Gestión",
    concept: "Componentes de NNM"
  },
  // Información que transmite el Agente
  {
    id: 36,
    question: "Menciona 4 tipos de información que transmite el agente al administrador central:",
    options: [
      "Configuración, Rendimiento, Fallas, Seguridad",
      "TCP/IP, SPX/IPX, SNA, Ethernet",
      "Notificación de problemas, Datos de diagnóstico, Identificador del nodo, Características del nodo",
      "LAN, MAN, WAN, Internet"
    ],
    correctAnswer: 2,
    explanation: "El agente transmite información al administrador central acerca de: Notificación de Problemas, Datos de Diagnóstico, Identificador del Nodo, Características del Nodo.",
    category: "Elementos de Administración",
    concept: "Información del Agente"
  },
  {
    id: 37,
    question: "¿Qué información transmite el agente al administrador central?",
    options: [
      "Solo datos de diagnóstico",
      "Notificación de problemas, datos de diagnóstico, identificador del nodo y características del nodo",
      "Solo el identificador del nodo",
      "Solo las características del nodo"
    ],
    correctAnswer: 1,
    explanation: "El agente transmite información sobre notificación de problemas, datos de diagnóstico, identificador del nodo y características del nodo.",
    category: "Elementos de Administración",
    concept: "Información del Agente"
  },
  // Etapas del Proceso de Planeación
  {
    id: 38,
    question: "Menciona 4 etapas del proceso de planeación y diseño de una red:",
    options: [
      "Configuración, Rendimiento, Fallas, Seguridad",
      "Instalar, Configurar, Monitorear, Mantener",
      "Reunir necesidades, Diseñar topología, Determinar infraestructura, Diseñar distribución de tráfico",
      "Hardware, Software, Protocolos, Cableado"
    ],
    correctAnswer: 2,
    explanation: "El proceso contempla: reunir las necesidades de la red, diseñar la topología de la Red, determinar y seleccionar la infraestructura de red, diseñar la distribución del tráfico mediante algún mecanismo de ruteo.",
    category: "Administración de Configuración",
    concept: "Etapas de Planeación"
  },
  {
    id: 39,
    question: "¿Qué etapas contempla el proceso de planeación y diseño de una red?",
    options: [
      "Solo diseñar la topología",
      "Reunir necesidades, diseñar topología, determinar infraestructura, diseñar distribución de tráfico y planear implementación",
      "Solo instalar hardware",
      "Solo configurar software"
    ],
    correctAnswer: 1,
    explanation: "El proceso contempla: reunir necesidades de la red, diseñar la topología, determinar y seleccionar infraestructura, diseñar distribución de tráfico y planear la implementación.",
    category: "Administración de Configuración",
    concept: "Etapas de Planeación"
  },
  // Tareas de Instalación de Hardware
  {
    id: 40,
    question: "Menciona 2 tipos de tareas de instalación de hardware:",
    options: [
      "Agregación y Sustitución",
      "Configuración y Monitoreo",
      "Instalación y Desinstalación",
      "Hardware y Software"
    ],
    correctAnswer: 0,
    explanation: "Las tareas de instalación de hardware contemplan, tanto la agregación como la sustitución de equipamiento.",
    category: "Administración de Configuración",
    concept: "Tareas de Instalación"
  },
  {
    id: 41,
    question: "¿Qué tareas contempla la instalación de hardware?",
    options: [
      "Solo agregar equipos",
      "Agregación y sustitución de equipamiento, que puede abarcar un dispositivo completo o solo una parte como tarjeta de red, tarjeta procesadora, módulo",
      "Solo sustituir equipos",
      "Solo instalar tarjetas"
    ],
    correctAnswer: 1,
    explanation: "Las tareas contemplan agregación y sustitución de equipamiento, abarcando un dispositivo completo o solo una parte como tarjeta de red, tarjeta procesadora, módulo, etc.",
    category: "Administración de Configuración",
    concept: "Tareas de Instalación"
  }
];

