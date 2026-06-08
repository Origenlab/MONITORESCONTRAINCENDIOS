// Testimonios de clientes AQUEON — contenido textual exacto del index original

export interface Testimonio {
  nombre: string;
  alt: string;
  rol: string;
  empresa: string;
  imagen: string;
  rating: number; // 5 = cinco estrellas, 4.5 = cuatro y media
  texto: string;
  fecha: string;
}

export const testimonios: Testimonio[] = [
  {
    nombre: 'Ing. Roberto Martínez',
    alt: 'Ing. Roberto Martínez',
    rol: 'Gerente de Seguridad Industrial',
    empresa: 'Refinería del Golfo',
    imagen: '/images/cliente-satisfecho-monitores-contra-incendios-refineria.webp',
    rating: 5,
    texto:
      '"AQUEON nos ayudó a cumplir con los requisitos de PEMEX en tiempo récord. Su conocimiento técnico y servicio post-venta son excepcionales. Desde la cotización hasta la puesta en marcha, todo fue profesional y sin contratiempos."',
    fecha: 'Noviembre 2024',
  },
  {
    nombre: 'Lic. Andrea González',
    alt: 'Lic. Andrea González',
    rol: 'Directora de Operaciones',
    empresa: 'Parque Industrial Bajío',
    imagen: '/images/cliente-monitores-contra-incendios-parque-industrial.webp',
    rating: 5,
    texto:
      '"Buscábamos un proveedor que entendiera nuestras necesidades específicas. AQUEON no solo las entendió, las superó. El diseño propuesto optimizó nuestra inversión y mejoró significativamente nuestra cobertura de protección."',
    fecha: 'Octubre 2024',
  },
  {
    nombre: 'Cmdte. Héctor Ramírez',
    alt: 'Cmdte. Héctor Ramírez',
    rol: 'Comandante',
    empresa: 'H. Cuerpo de Bomberos',
    imagen: '/images/cliente-monitores-contra-incendios-bomberos-municipal.webp',
    rating: 5,
    texto:
      '"La asesoría en el proceso de licitación fue invaluable. Ganamos el contrato gracias a la documentación técnica que AQUEON proporcionó. Su equipo demostró conocimiento profundo de requisitos gubernamentales."',
    fecha: 'Septiembre 2024',
  },
  {
    nombre: 'Ing. Carlos Mendoza',
    alt: 'Ing. Carlos Mendoza',
    rol: 'Director de Planta',
    empresa: 'Petroquímica Nacional',
    imagen: '/images/cliente-monitores-contra-incendios-petroquimica.webp',
    rating: 5,
    texto:
      '"Después de evaluar 5 proveedores diferentes, elegimos AQUEON por su certificación FM y el soporte técnico local. La instalación se completó antes de lo programado y la capacitación a nuestro personal fue de primera clase."',
    fecha: 'Agosto 2024',
  },
  {
    nombre: 'Ing. María F. López',
    alt: 'Ing. María Fernanda López',
    rol: 'Jefa de Mantenimiento',
    empresa: 'Terminal Marítima del Pacífico',
    imagen: '/images/cliente-monitores-contra-incendios-terminal-maritima.webp',
    rating: 4.5,
    texto:
      '"El servicio de mantenimiento preventivo de AQUEON nos ha permitido mantener nuestros monitores en óptimas condiciones durante más de 5 años. Su programa de inspecciones es riguroso y la documentación impecable para auditorías."',
    fecha: 'Julio 2024',
  },
  {
    nombre: 'Lic. Fernando Vega',
    alt: 'Lic. Fernando Vega',
    rol: 'Gerente de Compras',
    empresa: 'Grupo Industrial Monterrey',
    imagen: '/images/cliente-monitores-contra-incendios-grupo-industrial.webp',
    rating: 5,
    texto:
      '"Trabajamos con AQUEON desde hace 8 años para todas nuestras plantas en el norte del país. Su tiempo de respuesta para emergencias es el mejor que hemos tenido. Recomendados al 100% para cualquier proyecto de protección contra incendio."',
    fecha: 'Junio 2024',
  },
  {
    nombre: 'Ing. Patricia Sánchez',
    alt: 'Ing. Patricia Sánchez',
    rol: 'Coordinadora HSE',
    empresa: 'Cervecería del Centro',
    imagen: '/images/cliente-monitores-contra-incendios-coordinadora-hse.webp',
    rating: 5,
    texto:
      '"La consultoría normativa de AQUEON nos ayudó a pasar nuestra auditoría de FM Global sin observaciones. Su conocimiento de las normas NFPA es impresionante y su asesoría nos ahorró meses de trabajo interno."',
    fecha: 'Mayo 2024',
  },
  {
    nombre: 'Ing. Javier Torres',
    alt: 'Ing. Javier Torres',
    rol: 'Superintendente de Seguridad',
    empresa: 'Minera del Norte',
    imagen: '/images/cliente-monitores-contra-incendios-mineria.webp',
    rating: 5,
    texto:
      '"Los monitores automáticos de AQUEON protegen nuestras bandas transportadoras 24/7. En 3 años de operación hemos tenido cero incidentes mayores. La inversión se pagó sola con las primas de seguro que ahorramos."',
    fecha: 'Abril 2024',
  },
  {
    nombre: 'Arq. Luis Hernández',
    alt: 'Arq. Luis Hernández',
    rol: 'Director de Proyectos',
    empresa: 'Constructora Metrópoli',
    imagen: '/images/cliente-monitores-contra-incendios-constructora.webp',
    rating: 4.5,
    texto:
      '"Para nuestro nuevo centro de distribución, AQUEON diseñó un sistema integral que cumple con los estándares más altos. El proyecto se entregó a tiempo y dentro del presupuesto. Excelente comunicación durante todo el proceso."',
    fecha: 'Marzo 2024',
  },
];
