// Servicios AQUEON — datos compartidos entre el home (ServiciosIndex) y la L2 /servicios

export interface Servicio {
  id: string;
  numero: string;
  icon: string;
  imagen: string;
  alt: string;
  placeholderIcon: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  features: string[];
  entregables: string[];
  normativas: string[];
}

export interface PasoProceso {
  numero: string;
  icon: string;
  titulo: string;
  descripcion: string;
}

export interface PlanServicio {
  nombre: string;
  subtitulo: string;
  featured: boolean;
  premium: boolean;
  features: string[];
  precio: string;
  periodo: string;
}

export const proceso: PasoProceso[] = [
  {
    numero: '01',
    icon: 'fas fa-magnifying-glass-chart',
    titulo: 'Diagnóstico y Análisis de Riesgo',
    descripcion: 'Evaluamos su instalación, identificamos riesgos y determinamos el sistema óptimo según su actividad y la normativa vigente.',
  },
  {
    numero: '02',
    icon: 'fas fa-file-invoice',
    titulo: 'Propuesta Técnica y Cotización',
    descripcion: 'Entregamos una propuesta detallada con equipo certificado, cálculos, plazos, garantías y respaldo normativo.',
  },
  {
    numero: '03',
    icon: 'fas fa-screwdriver-wrench',
    titulo: 'Instalación y Puesta en Marcha',
    descripcion: 'Instalamos con personal certificado, realizamos pruebas hidrostáticas y entregamos documentación completa.',
  },
  {
    numero: '04',
    icon: 'fas fa-headset',
    titulo: 'Mantenimiento y Soporte',
    descripcion: 'Programa de mantenimiento NFPA 25, refacciones originales y soporte técnico durante toda la vida útil del equipo.',
  },
];

export const servicios: Servicio[] = [
  {
    id: 'diseno-ingenieria',
    numero: '01',
    icon: 'fas fa-compass-drafting',
    imagen: '/images/diseno-ingenieria-sistemas-monitores-contra-incendios.webp',
    alt: 'Ingenieros diseñando sistemas contra incendios',
    placeholderIcon: 'fas fa-drafting-compass',
    titulo: 'Diseño e Ingeniería',
    subtitulo: 'Cálculo hidráulico y especificación técnica',
    descripcion:
      'Diseño profesional de sistemas contra incendio conforme a NFPA 15, NFPA 11 y NFPA 24. Nuestros ingenieros certificados desarrollan soluciones a la medida de cada proyecto.',
    features: [
      'Cálculos hidráulicos profesionales',
      'Planos y especificaciones técnicas',
      'Análisis de riesgo y cobertura',
      'Documentación para aseguradoras',
    ],
    entregables: ['Memoria de cálculo', 'Planos isométricos', 'Especificaciones', 'Lista de materiales'],
    normativas: ['NFPA 15', 'NFPA 11', 'NFPA 24'],
  },
  {
    id: 'instalacion',
    numero: '02',
    icon: 'fas fa-screwdriver-wrench',
    imagen: '/images/instalacion-monitores-contra-incendios-industriales.webp',
    alt: 'Técnicos instalando monitores contra incendios',
    placeholderIcon: 'fas fa-tools',
    titulo: 'Instalación Profesional',
    subtitulo: 'Montaje certificado e integración hidráulica',
    descripcion:
      'Montaje e instalación por técnicos certificados con amplia experiencia en proyectos industriales. Integración completa con su red hidráulica y sistemas existentes.',
    features: [
      'Técnicos certificados NFPA',
      'Pruebas hidrostáticas incluidas',
      'Documentación completa de entrega',
      'Garantía de instalación',
    ],
    entregables: ['Acta de entrega', 'Reporte de pruebas', 'Garantía por escrito'],
    normativas: ['NFPA 24', 'Pruebas hidrostáticas'],
  },
  {
    id: 'capacitacion',
    numero: '03',
    icon: 'fas fa-chalkboard-user',
    imagen: '/images/capacitacion-uso-monitores-contra-incendios.webp',
    alt: 'Capacitación de brigadas de emergencia',
    placeholderIcon: 'fas fa-chalkboard-teacher',
    titulo: 'Capacitación Especializada',
    subtitulo: 'Brigadas y operadores certificados',
    descripcion:
      'Entrenamiento completo a brigadas y operadores en uso correcto de equipos, mantenimiento básico y protocolos de emergencia. Certificados de competencia incluidos.',
    features: [
      'Capacitación teórico-práctica',
      'Certificados de competencia',
      'Material didáctico incluido',
      'Simulacros de emergencia',
    ],
    entregables: ['Certificados de competencia', 'Manual de operación', 'Constancia DC-3'],
    normativas: ['NOM-002-STPS', 'Protocolos NFPA'],
  },
  {
    id: 'mantenimiento-preventivo',
    numero: '04',
    icon: 'fas fa-clipboard-check',
    imagen: '/images/mantenimiento-preventivo-monitores-contra-incendios.webp',
    alt: 'Mantenimiento preventivo de monitores contra incendios',
    placeholderIcon: 'fas fa-clipboard-check',
    titulo: 'Mantenimiento Preventivo',
    subtitulo: 'Disponibilidad garantizada bajo NFPA 25',
    descripcion:
      'Programas de mantenimiento conforme NFPA 25 para garantizar la disponibilidad de sus equipos cuando más los necesite. Inspecciones programadas y reportes detallados.',
    features: [
      'Inspecciones programadas',
      'Reportes de condición',
      'Garantía de funcionamiento',
      'Refacciones originales',
    ],
    entregables: ['Programa anual', 'Reporte de inspección', 'Bitácora de mantenimiento'],
    normativas: ['NFPA 25'],
  },
  {
    id: 'mantenimiento-correctivo',
    numero: '05',
    icon: 'fas fa-wrench',
    imagen: '/images/mantenimiento-correctivo-monitores-contra-incendios.webp',
    alt: 'Reparación de equipos contra incendios',
    placeholderIcon: 'fas fa-wrench',
    titulo: 'Mantenimiento Correctivo',
    subtitulo: 'Respuesta de emergencia 24/7',
    descripcion:
      'Reparación de fallas con respuesta rápida. Técnicos disponibles 24/7 para emergencias. Stock de refacciones originales para minimizar tiempos de paro.',
    features: [
      'Respuesta en menos de 24 horas',
      'Refacciones 100% originales',
      'Servicio de emergencia 24/7',
      'Diagnóstico especializado',
    ],
    entregables: ['Diagnóstico de falla', 'Reporte de servicio', 'Garantía de reparación'],
    normativas: ['Refacciones OEM', 'Soporte 24/7'],
  },
  {
    id: 'consultoria-normativa',
    numero: '06',
    icon: 'fas fa-file-contract',
    imagen: '/images/consultoria-normativa-nfpa-monitores-contra-incendios.webp',
    alt: 'Consultoría normativa NFPA y NOM',
    placeholderIcon: 'fas fa-file-contract',
    titulo: 'Consultoría Normativa',
    subtitulo: 'Cumplimiento y auditorías',
    descripcion:
      'Asesoría especializada en cumplimiento de NOM-002-STPS, normas NFPA y requisitos de aseguradoras. Preparación para auditorías e inspecciones.',
    features: [
      'Auditorías de cumplimiento',
      'Preparación para inspecciones',
      'Actualización normativa',
      'Gestión con aseguradoras',
    ],
    entregables: ['Dictamen de cumplimiento', 'Plan de acción', 'Expediente para auditoría'],
    normativas: ['NOM-002-STPS', 'NFPA', 'FM Global'],
  },
];

export const planes: PlanServicio[] = [
  {
    nombre: 'AQUEON Basic',
    subtitulo: 'Para clientes con capacidad técnica interna',
    featured: false,
    premium: false,
    features: [
      'Garantía estándar de fábrica',
      'Soporte telefónico en horario de oficina',
      'Documentación técnica online',
      'Capacitación básica (2 horas)',
    ],
    precio: 'Incluido',
    periodo: 'con la compra',
  },
  {
    nombre: 'AQUEON Plus',
    subtitulo: 'Para quienes valoran la prevención',
    featured: true,
    premium: false,
    features: [
      'Todo lo incluido en Basic',
      'Mantenimiento preventivo anual',
      'Garantía extendida a 3 años',
      'Respuesta prioritaria en 24 horas',
      'Capacitación avanzada (8 horas)',
      '10% de descuento en refacciones',
    ],
    precio: '8-12%',
    periodo: 'anual del valor del equipo',
  },
  {
    nombre: 'AQUEON Premium',
    subtitulo: 'Para instalaciones críticas',
    featured: false,
    premium: true,
    features: [
      'Todo lo incluido en Plus',
      'Mantenimiento semestral',
      'Garantía extendida a 5 años',
      'Emergencia 24/7 (4 horas de respuesta)',
      'Técnico dedicado asignado',
      'Refacciones en consignación',
      'Auditorías de cumplimiento',
    ],
    precio: '15-20%',
    periodo: 'anual del valor del equipo',
  },
];
