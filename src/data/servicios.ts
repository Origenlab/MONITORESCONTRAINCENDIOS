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
    descripcion: 'Visitamos la instalación, identificamos los riesgos y definimos qué sistema exige su actividad y la norma que le aplica.',
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
      'Antes de comprar un solo equipo, calculamos el caudal, la presión y la reserva de agua que su instalación necesita. El resultado es un sistema dimensionado con criterio de ingeniería —no de catálogo— y la documentación que respalda cada decisión, conforme a NFPA 15, 11 y 24.',
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
      'Una instalación vale lo que valen sus pruebas. Montamos el equipo, lo integramos a su red hidráulica y ejecutamos las pruebas hidrostáticas que dejan constancia de que el sistema arranca como debe.',
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
      'El mejor monitor no apaga nada si la brigada no sabe operarlo bajo presión. Formamos a su gente en operación, mantenimiento básico y protocolo de emergencia, con práctica real y constancia DC-3.',
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
      'La disponibilidad no se supone: se verifica. Con un programa NFPA 25 —inspección, prueba y mantenimiento documentados— su sistema responde el día del incendio y usted tiene el expediente para demostrarlo.',
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
      'Una falla no avisa. Cuando ocurre, diagnosticamos la causa raíz, reparamos con refacción original y dejamos el equipo operando —con soporte 24/7 para que el sistema no quede descubierto más tiempo del necesario.',
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
      'Le decimos dónde está parado antes de que se lo diga un inspector. Diagnosticamos el cumplimiento frente a NOM-002-STPS, NFPA y los requisitos de su aseguradora, señalamos las brechas y entregamos el plan para cerrarlas.',
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
