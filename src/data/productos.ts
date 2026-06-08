// Catálogo de productos AQUEON — contenido textual exacto del index original

export interface ProductSpec {
  icon: string;
  text: string;
}

export interface Producto {
  modelo: string;
  nombre: string;
  badge?: string;
  badgePremium?: boolean;
  placeholderIcon: string;
  placeholderLabel: string;
  descripcion: string;
  specs: ProductSpec[];
  fichaTecnica: boolean;
}

export interface CategoriaProductos {
  id: string;
  titulo: string;
  descripcion: string;
  productos: Producto[];
}

export const categorias: CategoriaProductos[] = [
  {
    id: 'monitores-fijos',
    titulo: 'Monitores Fijos Industriales',
    descripcion:
      'Los monitores fijos son la columna vertebral de cualquier sistema de protección contra incendios industrial. Diseñados para instalación permanente, ofrecen cobertura constante y confiable en áreas críticas como tanques de almacenamiento, áreas de proceso y muelles de carga.',
    productos: [
      {
        modelo: 'MI-1500',
        nombre: 'Monitor Industrial MI-1500',
        badge: 'FM Approved',
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Fijo MI-1500',
        descripcion:
          'Monitor fijo manual de bronce con capacidad de 500-1,500 GPM. Ideal para manufactura, parques industriales y áreas de almacenamiento.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 500-1,500 GPM' },
          { icon: 'fas fa-gauge-high', text: 'Presión máxima: 150 PSI' },
          { icon: 'fas fa-certificate', text: 'Certificación: FM Approved, UL Listed' },
          { icon: 'fas fa-cog', text: 'Material: Bronce marino' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MG-4000',
        nombre: 'Monitor Magnum MG-4000',
        badge: 'Alto Caudal',
        badgePremium: true,
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Magnum MG-4000',
        descripcion:
          'Monitor de ultra-alto caudal diseñado específicamente para refinerías y terminales de almacenamiento. Cumple con requisitos PEMEX para instalaciones petroleras.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 2,000-4,000 GPM' },
          { icon: 'fas fa-gauge-high', text: 'Presión máxima: 175 PSI' },
          { icon: 'fas fa-certificate', text: 'Certificación: FM + UL + PEMEX' },
          { icon: 'fas fa-cog', text: 'Material: Acero inoxidable 316L' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MR-3000',
        nombre: 'Monitor Remoto ATEX MR-3000',
        badge: 'ATEX',
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Remoto ATEX MR-3000',
        descripcion:
          'Monitor eléctrico con control remoto certificado para atmósferas explosivas Clase I División 2. Ideal para refinerías y plantas químicas con áreas clasificadas.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 1,500-3,000 GPM' },
          { icon: 'fas fa-broadcast-tower', text: 'Control: Remoto eléctrico' },
          { icon: 'fas fa-certificate', text: 'Certificación: ATEX / IECEx' },
          { icon: 'fas fa-shield-alt', text: 'Zona: Clase I División 2' },
        ],
        fichaTecnica: true,
      },
    ],
  },
  {
    id: 'monitores-portatiles',
    titulo: 'Monitores Portátiles',
    descripcion:
      'Los monitores portátiles ofrecen flexibilidad y movilidad para respuesta rápida ante emergencias. Diseñados para ser desplegados rápidamente por brigadas de emergencia, estos equipos son esenciales para cualquier programa de protección contra incendios.',
    productos: [
      {
        modelo: 'MP-750',
        nombre: 'Monitor Portátil MP-750',
        badge: 'Más Vendido',
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Portátil MP-750',
        descripcion:
          'Monitor portátil ligero de aluminio con base plegable. Permite despliegue rápido por un solo operador. Ideal para brigadas de emergencia y respuesta inicial.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 250-750 GPM' },
          { icon: 'fas fa-weight-hanging', text: 'Peso: Solo 18 kg' },
          { icon: 'fas fa-certificate', text: 'Certificación: NFPA Compliant' },
          { icon: 'fas fa-user', text: 'Operación: 1 persona' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MT-500',
        nombre: 'Monitor Táctico MT-500',
        badge: 'Ligero',
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Táctico MT-500',
        descripcion:
          'El monitor más ligero del mercado. Diseñado para respuesta rápida y acceso a áreas de difícil acceso. Incluye kit completo de accesorios.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 200-500 GPM' },
          { icon: 'fas fa-weight-hanging', text: 'Peso: Solo 12 kg' },
          { icon: 'fas fa-box', text: 'Incluye: Kit completo' },
          { icon: 'fas fa-cog', text: 'Material: Aluminio aeronáutico' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MRT-1200',
        nombre: 'Monitor Trailer MRT-1200',
        badge: 'Profesional',
        placeholderIcon: 'fas fa-fire-extinguisher',
        placeholderLabel: 'Monitor Trailer MRT-1200',
        descripcion:
          'Monitor montado sobre remolque con sistema de posicionamiento hidráulico. Máxima movilidad y capacidad de alto caudal para emergencias industriales.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 500-1,200 GPM' },
          { icon: 'fas fa-truck', text: 'Montaje: Remolque incluido' },
          { icon: 'fas fa-certificate', text: 'Certificación: FM Approved' },
          { icon: 'fas fa-arrows-alt', text: 'Elevación: Hidráulica 360°' },
        ],
        fichaTecnica: true,
      },
    ],
  },
  {
    id: 'monitores-automaticos',
    titulo: 'Monitores Automáticos e Inteligentes',
    descripcion:
      'La última generación de monitores contra incendios incorpora tecnología de detección automática y sistemas inteligentes de posicionamiento. Estos equipos pueden detectar y responder a incendios sin intervención humana, proporcionando protección las 24 horas del día.',
    productos: [
      {
        modelo: 'AI-3000',
        nombre: 'Monitor Inteligente AI-3000',
        badge: 'Tecnología IA',
        badgePremium: true,
        placeholderIcon: 'fas fa-robot',
        placeholderLabel: 'Monitor Inteligente AI-3000',
        descripcion:
          'Monitor con detección automática de incendios mediante inteligencia artificial. Sistema de posicionamiento óptimo y conectividad IoT para monitoreo remoto.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 1,000-3,000 GPM' },
          { icon: 'fas fa-brain', text: 'Detección: Inteligencia Artificial' },
          { icon: 'fas fa-wifi', text: 'Conectividad: IoT Enabled' },
          { icon: 'fas fa-clock', text: 'Respuesta: < 3 segundos' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MO-2000',
        nombre: 'Monitor Oscilante MO-2000',
        placeholderIcon: 'fas fa-sync',
        placeholderLabel: 'Monitor Oscilante MO-2000',
        descripcion:
          'Oscilación programable con múltiples patrones de cobertura. Ideal para protección automática de grandes áreas como patios de tanques y áreas de almacenamiento.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 750-2,000 GPM' },
          { icon: 'fas fa-sync', text: 'Modos: 4 patrones de oscilación' },
          { icon: 'fas fa-sliders-h', text: 'Control: Programable' },
          { icon: 'fas fa-certificate', text: 'Certificación: FM Approved' },
        ],
        fichaTecnica: true,
      },
      {
        modelo: 'MIR-2500',
        nombre: 'Monitor Infrarrojo MIR-2500',
        badge: 'Detección IR',
        placeholderIcon: 'fas fa-satellite-dish',
        placeholderLabel: 'Monitor Infrarrojo MIR-2500',
        descripcion:
          'Sistema de detección por infrarrojos con seguimiento automático de fuego. Respuesta instantánea y precisión milimétrica para instalaciones de alto riesgo.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 1,000-2,500 GPM' },
          { icon: 'fas fa-crosshairs', text: 'Detección: Infrarrojo dual' },
          { icon: 'fas fa-bolt', text: 'Respuesta: < 1 segundo' },
          { icon: 'fas fa-certificate', text: 'Certificación: FM + SIL2' },
        ],
        fichaTecnica: true,
      },
    ],
  },
  {
    id: 'boquillas',
    titulo: 'Boquillas y Accesorios',
    descripcion:
      'Complementamos nuestra línea de monitores con una amplia gama de boquillas y accesorios de alta calidad. Cada componente está diseñado para maximizar la eficiencia de su sistema de protección contra incendios.',
    productos: [
      {
        modelo: 'BM-200',
        nombre: 'Boquilla Multipatrón BM-200',
        placeholderIcon: 'fas fa-cogs',
        placeholderLabel: 'Boquilla Multipatrón BM-200',
        descripcion:
          'Boquilla ajustable con patrón desde chorro sólido hasta niebla. Compatible con monitores de 2.5" a 4". Construcción en bronce para máxima durabilidad.',
        specs: [
          { icon: 'fas fa-tint', text: 'Capacidad: 200-1,000 GPM' },
          { icon: 'fas fa-sync', text: 'Ajuste: 0° a 120°' },
          { icon: 'fas fa-certificate', text: 'Certificación: UL Listed' },
        ],
        fichaTecnica: false,
      },
      {
        modelo: 'CE-500',
        nombre: 'Cámara de Espuma CE-500',
        placeholderIcon: 'fas fa-flask',
        placeholderLabel: 'Cámara de Espuma CE-500',
        descripcion:
          'Cámara de inyección de espuma para monitores. Proporciona concentración exacta al 3% o 6% según requerimiento. Esencial para protección de hidrocarburos.',
        specs: [
          { icon: 'fas fa-flask', text: 'Concentración: 3% o 6%' },
          { icon: 'fas fa-certificate', text: 'Certificación: NFPA 11' },
          { icon: 'fas fa-cog', text: 'Material: Acero inoxidable' },
        ],
        fichaTecnica: false,
      },
      {
        modelo: 'KC-PRO',
        nombre: 'Kit de Conexiones KC-PRO',
        placeholderIcon: 'fas fa-link',
        placeholderLabel: 'Kit de Conexiones KC-PRO',
        descripcion:
          'Kit completo de conexiones y adaptadores para monitores industriales. Incluye bridas, codos, reducciones y juntas de expansión de alta presión.',
        specs: [
          { icon: 'fas fa-compress-arrows-alt', text: 'Diámetros: 2.5" a 6"' },
          { icon: 'fas fa-gauge-high', text: 'Presión: Hasta 300 PSI' },
          { icon: 'fas fa-cog', text: 'Material: Acero / Bronce' },
        ],
        fichaTecnica: false,
      },
    ],
  },
];
