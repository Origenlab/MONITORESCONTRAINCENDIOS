// Industrias que atiende AQUEON — contenido textual exacto del index original

export interface IndustriaStat {
  numero: string;
  texto: string;
}

export interface IndustriaFeatured {
  id: string;
  imagen: string;
  alt: string;
  placeholderIcon: string;
  placeholderLabel: string;
  badge: string;
  titulo: string;
  descripcion: string;
  stats: IndustriaStat[];
  features: string[];
}

export interface IndustriaCard {
  id?: string;
  imagen: string;
  alt: string;
  placeholderIcon: string;
  placeholderLabel: string;
  titulo: string;
  descripcion: string;
  features: string[];
}

export const industriaDestacada: IndustriaFeatured = {
  id: 'petroleo-gas',
  imagen: '/images/monitores-contra-incendios-refineria-petroleo-gas.webp',
  alt: 'Monitores contra incendios en refinería petrolera PEMEX',
  placeholderIcon: 'fas fa-oil-well',
  placeholderLabel: 'Petróleo y Gas',
  badge: 'Industria Principal',
  titulo: 'Petróleo y Gas',
  descripcion:
    'Proveemos soluciones completas para la industria petrolera mexicana: refinerías, terminales de almacenamiento, plataformas offshore y plantas de procesamiento de gas natural. Nuestros equipos cumplen con los estándares más exigentes de PEMEX y aseguradoras internacionales.',
  stats: [
    { numero: '50+', texto: 'Instalaciones Petroleras' },
    { numero: '100%', texto: 'Cumplimiento PEMEX' },
    { numero: 'ATEX', texto: 'Zonas Clasificadas' },
  ],
  features: [
    'Monitores certificados FM Approved para requisitos PEMEX',
    'Sistemas ATEX para zonas clasificadas Clase I Div. 1 y 2',
    'Sistemas de espuma AFFF para tanques de almacenamiento',
    'Cumplimiento NOM-002-STPS y NFPA 30',
  ],
};

export const industrias: IndustriaCard[] = [
  {
    id: 'petroquimica',
    imagen: '/images/monitores-contra-incendios-planta-petroquimica.webp',
    alt: 'Protección contra incendios en planta petroquímica',
    placeholderIcon: 'fas fa-flask',
    placeholderLabel: 'Petroquímica',
    titulo: 'Petroquímica y Química',
    descripcion:
      'Equipos especializados para plantas químicas y petroquímicas con materiales anticorrosivos y certificaciones para ambientes agresivos.',
    features: [
      'Materiales resistentes a químicos',
      'Certificación para áreas clasificadas',
      'Cumplimiento NFPA 30 y 652',
    ],
  },
  {
    id: 'manufactura',
    imagen: '/images/monitores-contra-incendios-industria-manufactura.webp',
    alt: 'Sistemas contra incendio en planta manufacturera',
    placeholderIcon: 'fas fa-industry',
    placeholderLabel: 'Manufactura',
    titulo: 'Manufactura e Industrial',
    descripcion:
      'Soluciones para parques industriales, plantas automotrices, almacenes y centros de distribución. Cumplimiento con requisitos de aseguradoras.',
    features: [
      'Protección de naves industriales',
      'Cumplimiento FM Global',
      'Diseño conforme NFPA 15',
    ],
  },
  {
    id: 'bomberos',
    imagen: '/images/monitores-contra-incendios-cuerpo-bomberos-emergencias.webp',
    alt: 'Equipos contra incendio para cuerpos de bomberos',
    placeholderIcon: 'fas fa-fire-extinguisher',
    placeholderLabel: 'Bomberos',
    titulo: 'Bomberos y Gobierno',
    descripcion:
      'Equipos para cuerpos de bomberos y protección civil. Asesoría especializada en procesos de licitación pública y cumplimiento normativo.',
    features: [
      'Monitores vehiculares (Deck Guns)',
      'Equipos portátiles para brigadas',
      'Asesoría en licitaciones',
    ],
  },
  {
    imagen: '/images/monitores-contra-incendios-aviacion-aeropuertos.webp',
    alt: 'Sistemas ARFF para aeropuertos y hangares',
    placeholderIcon: 'fas fa-plane',
    placeholderLabel: 'Aviación',
    titulo: 'Aviación',
    descripcion:
      'Sistemas ARFF (Aircraft Rescue and Fire Fighting) para aeropuertos, hangares y talleres MRO certificados para la industria aeronáutica.',
    features: [
      'Sistemas ARFF certificados',
      'Cumplimiento FAA y DGAC',
      'Protección para hangares',
    ],
  },
  {
    imagen: '/images/monitores-contra-incendios-industria-minera.webp',
    alt: 'Equipos contra incendio para minería',
    placeholderIcon: 'fas fa-hard-hat',
    placeholderLabel: 'Minería',
    titulo: 'Minería',
    descripcion:
      'Equipos robustos diseñados para ambientes extremos y operación continua en minas a cielo abierto y subterráneas.',
    features: [
      'Diseño para ambientes extremos',
      'Resistencia a polvo y vibración',
      'Operación 24/7',
    ],
  },
  {
    imagen: '/images/monitores-contra-incendios-generacion-energia.webp',
    alt: 'Protección contra incendios para plantas de energía',
    placeholderIcon: 'fas fa-bolt',
    placeholderLabel: 'Energía',
    titulo: 'Generación de Energía',
    descripcion:
      'Soluciones para plantas de generación eléctrica, subestaciones, turbinas de gas y centrales termoeléctricas con máxima confiabilidad.',
    features: [
      'Protección de turbinas',
      'Sistemas para subestaciones',
      'Cumplimiento CFE',
    ],
  },
];
