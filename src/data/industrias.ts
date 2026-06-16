// Industrias que atiende AQUEON

export interface IndustriaStat {
  numero: string;
  texto: string;
}

export interface IndustriaFeatured {
  id: string;
  icon: string;
  imagen: string;
  alt: string;
  placeholderIcon: string;
  placeholderLabel: string;
  badge: string;
  titulo: string;
  descripcion: string;
  stats: IndustriaStat[];
  features: string[];
  aplicaciones: string[];
  normativas: string[];
}

export interface IndustriaCard {
  id?: string;
  icon: string;
  imagen: string;
  alt: string;
  placeholderIcon: string;
  placeholderLabel: string;
  titulo: string;
  subtitulo: string;
  descripcion: string;
  features: string[];
  aplicaciones: string[];
  normativas: string[];
}

export const industriaDestacada: IndustriaFeatured = {
  id: 'petroleo-gas',
  icon: 'fas fa-oil-well',
  imagen: '/images/monitores-contra-incendios-refineria-petroleo-gas.webp',
  alt: 'Monitores contra incendios en refinería petrolera PEMEX',
  placeholderIcon: 'fas fa-oil-well',
  placeholderLabel: 'Petróleo y Gas',
  badge: 'Industria Principal',
  titulo: 'Petróleo y Gas',
  descripcion:
    'Aquí un error de diseño no es una opción: hidrocarburos a presión, zonas clasificadas y tanques que, si arden, no se controlan con una manguera. Protegemos refinerías, terminales, plataformas offshore y plantas de gas con equipo FM Approved, sistemas ATEX y espuma AFFF, bajo los requisitos de PEMEX.',
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
  aplicaciones: ['Refinerías', 'Terminales de almacenamiento', 'Plataformas offshore', 'Plantas de gas natural'],
  normativas: ['PEMEX', 'NFPA 30', 'NFPA 11', 'ATEX', 'NOM-002-STPS'],
};

export const industrias: IndustriaCard[] = [
  {
    id: 'petroquimica',
    icon: 'fas fa-flask',
    imagen: '/images/monitores-contra-incendios-planta-petroquimica.webp',
    alt: 'Protección contra incendios en planta petroquímica',
    placeholderIcon: 'fas fa-flask',
    placeholderLabel: 'Petroquímica',
    titulo: 'Petroquímica y Química',
    subtitulo: 'Ambientes corrosivos y áreas clasificadas',
    descripcion:
      'El reto no es solo el fuego, también el ambiente que se come el acero. Especificamos equipo en 316L para vapores corrosivos y áreas clasificadas, con espuma para hidrocarburos, en reactores, tanques de proceso y zonas con atmósfera inflamable.',
    features: [
      'Materiales resistentes a químicos (acero 316L)',
      'Certificación para áreas clasificadas Clase I',
      'Sistemas de espuma para hidrocarburos',
      'Cumplimiento NFPA 30 y NFPA 652',
    ],
    aplicaciones: ['Plantas petroquímicas', 'Plantas químicas', 'Tanques de proceso', 'Áreas de reactores'],
    normativas: ['NFPA 30', 'NFPA 652', 'ATEX', 'NOM-002-STPS'],
  },
  {
    id: 'manufactura',
    icon: 'fas fa-industry',
    imagen: '/images/monitores-contra-incendios-industria-manufactura.webp',
    alt: 'Sistemas contra incendio en planta manufacturera',
    placeholderIcon: 'fas fa-industry',
    placeholderLabel: 'Manufactura',
    titulo: 'Manufactura e Industrial',
    subtitulo: 'Naves, almacenes y centros de distribución',
    descripcion:
      'Aquí quien fija el estándar suele ser la aseguradora. Cubrimos grandes superficies —naves de gran altura, almacenes y centros de distribución— con diseño conforme a FM Global y NFPA 15, y monitores de cobertura amplia para patios y exteriores.',
    features: [
      'Protección de naves industriales de gran altura',
      'Cumplimiento FM Global para aseguradoras',
      'Diseño hidráulico conforme NFPA 15',
      'Monitores oscilantes para cobertura amplia',
    ],
    aplicaciones: ['Parques industriales', 'Plantas automotrices', 'Almacenes', 'Centros de distribución'],
    normativas: ['NFPA 15', 'FM Global', 'NOM-002-STPS'],
  },
  {
    id: 'bomberos',
    icon: 'fas fa-fire-extinguisher',
    imagen: '/images/monitores-contra-incendios-cuerpo-bomberos-emergencias.webp',
    alt: 'Equipos contra incendio para cuerpos de bomberos',
    placeholderIcon: 'fas fa-fire-extinguisher',
    placeholderLabel: 'Bomberos',
    titulo: 'Bomberos y Gobierno',
    subtitulo: 'Brigadas, protección civil y licitaciones',
    descripcion:
      'En el sector público se compite con dos cosas: equipo confiable y un expediente impecable. Suministramos monitores vehiculares y portátiles para brigadas y cuerpos de bomberos, y acompañamos la licitación con fichas técnicas y la documentación que el proceso exige.',
    features: [
      'Monitores vehiculares (Deck Guns)',
      'Equipos portátiles de despliegue rápido para brigadas',
      'Asesoría técnica en licitaciones públicas',
      'Documentación y fichas técnicas para expedientes',
    ],
    aplicaciones: ['Cuerpos de bomberos', 'Protección civil', 'Unidades vehiculares', 'Brigadas industriales'],
    normativas: ['NFPA 1901', 'NFPA 1964', 'Licitaciones públicas'],
  },
  {
    id: 'aviacion',
    icon: 'fas fa-plane',
    imagen: '/images/monitores-contra-incendios-aviacion-aeropuertos.webp',
    alt: 'Sistemas ARFF para aeropuertos y hangares',
    placeholderIcon: 'fas fa-plane',
    placeholderLabel: 'Aviación',
    titulo: 'Aviación',
    subtitulo: 'Sistemas ARFF certificados',
    descripcion:
      'Un incendio de combustible de aviación se mide en segundos. Instalamos sistemas ARFF de alto caudal para plataforma, hangares y talleres MRO, con espuma para Jet A y cumplimiento NFPA 403, ICAO y DGAC.',
    features: [
      'Sistemas ARFF de alto caudal certificados',
      'Monitores para protección de hangares',
      'Cumplimiento FAA, DGAC e ICAO',
      'Agentes espumantes para combustible de aviación',
    ],
    aplicaciones: ['Aeropuertos', 'Hangares', 'Talleres MRO', 'Plataformas de operación'],
    normativas: ['NFPA 403', 'FAA', 'DGAC', 'ICAO'],
  },
  {
    id: 'mineria',
    icon: 'fas fa-helmet-safety',
    imagen: '/images/monitores-contra-incendios-industria-minera.webp',
    alt: 'Equipos contra incendio para minería',
    placeholderIcon: 'fas fa-helmet-safety',
    placeholderLabel: 'Minería',
    titulo: 'Minería',
    subtitulo: 'Ambientes extremos y operación continua',
    descripcion:
      'Cuando la ayuda externa está a horas de distancia, el equipo tiene que aguantar solo. Monitores robustos para mina a cielo abierto y subterránea, resistentes a polvo y vibración, protegiendo estaciones de combustible, bandas y talleres bajo NOM-023-STPS.',
    features: [
      'Diseño para ambientes extremos y abrasivos',
      'Resistencia a polvo y vibración',
      'Operación continua 24/7',
      'Protección de bandas transportadoras y talleres',
    ],
    aplicaciones: ['Minas a cielo abierto', 'Minas subterráneas', 'Bandas transportadoras', 'Talleres y patios'],
    normativas: ['NOM-023-STPS', 'Operación 24/7'],
  },
  {
    id: 'energia',
    icon: 'fas fa-bolt',
    imagen: '/images/monitores-contra-incendios-generacion-energia.webp',
    alt: 'Protección contra incendios para plantas de energía',
    placeholderIcon: 'fas fa-bolt',
    placeholderLabel: 'Energía',
    titulo: 'Generación de Energía',
    subtitulo: 'Termoeléctricas, subestaciones y turbinas',
    descripcion:
      'Un transformador o una turbina ardiendo puede dejar a oscuras a una región, y apagar la planta no es una opción. Protegemos termoeléctricas, subestaciones y turbinas de gas con diseño conforme a NFPA 850/851 y los requisitos de CFE.',
    features: [
      'Protección de turbinas de gas y vapor',
      'Sistemas para subestaciones eléctricas',
      'Diseño conforme NFPA 850 / 851',
      'Cumplimiento de requisitos CFE',
    ],
    aplicaciones: ['Termoeléctricas', 'Subestaciones', 'Turbinas de gas', 'Centrales de ciclo combinado'],
    normativas: ['CFE', 'NFPA 850', 'NFPA 851'],
  },
];
