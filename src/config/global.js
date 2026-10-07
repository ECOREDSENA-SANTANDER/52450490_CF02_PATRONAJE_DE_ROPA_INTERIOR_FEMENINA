export default {
  global: {
    Name: 'Patronaje de prendas interiores femeninas',
    Description:
      'El componente formativo aborda los fundamentos y procedimientos técnicos para elaborar e interpretar patrones de prendas interiores femeninas. Integra bases superiores e inferiores, adaptación a tejidos de punto, análisis de elasticidad y recuperación, transformación y ajuste de patrones, tipologías de prendas, validación mediante premuestras y criterios de identificación, marcación, señalización y despiece.',
    imagenBannerPrincipal: '@/assets/curso/portada/banner-principal.png',
    fondoBannerPrincipal: '@/assets/curso/portada/fondo-banner-principal.png',
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-1.svg',
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-2.svg',
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: '@/assets/curso/portada/banner-principal-decorativo-3.svg',
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info-circle',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Patronaje industrial y entorno',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Procedimiento y entorno en el patronaje industrial',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Trazo de la base superior femenina: descripción y medidas',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Análisis y trazo de sistema de ajuste (pinzas y cortes)',
            hash: 't_1_3',
          },
          {
            numero: '1.4',
            titulo: 'Trazado del básico inferior (femenino)',
            hash: 't_1_4',
          },
          {
            numero: '1.5',
            titulo:
              'Ajuste de las bases para prendas interiores (tejido de punto)',
            hash: 't_1_5',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Patronaje de prendas interiores femeninas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '2.1',
            titulo: 'Tipologías principales de prendas inferiores íntimas',
            hash: 't_2_1',
          },
          {
            numero: '2.2',
            titulo: 'Tipologías principales de prendas superiores íntimas',
            hash: 't_2_2',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Información técnica de los patrones',
        desarrolloContenidos: true,
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/dist.pdf',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  glosario: [
    {
      termino: 'Aplome',
      significado:
        'Línea de referencia incorporada al patrón para establecer la orientación y el equilibrio de la pieza durante su ubicación sobre el material y su posterior ensamble.',
    },
    {
      termino: 'Aro',
      significado:
        'Elemento estructural empleado en determinadas tipologías de brasier para estabilizar la base de la copa y contribuir al soporte del busto.',
    },
    {
      termino: 'Banda',
      significado:
        'Componente del brasier que circunda el torso y participa en el ajuste, soporte y estabilidad de la prenda.',
    },
    {
      termino: 'Base de patronaje',
      significado:
        'Estructura inicial construida a partir de medidas y proporciones corporales que sirve como punto de partida para realizar transformaciones y desarrollar diferentes tipologías de prendas.',
    },
    {
      termino: 'Copa',
      significado:
        'Componente de una prenda interior superior destinado a contener y adaptar la estructura de la prenda al volumen del busto.',
    },
    {
      termino: 'Despiece',
      significado:
        'Procedimiento técnico mediante el cual se individualizan, organizan y preparan las piezas que conforman un patrón para facilitar su identificación, corte y ensamblaje.',
    },
    {
      termino: 'Elongación',
      significado:
        'Capacidad de un material textil para aumentar temporalmente sus dimensiones cuando es sometido a una fuerza de extensión.',
    },
    {
      termino: 'Entrepierna',
      significado:
        'Sección del patrón inferior que establece la conexión entre las piezas delantera y posterior en la región comprendida entre las piernas.',
    },
    {
      termino: 'Escalado',
      significado:
        'Procedimiento mediante el cual las dimensiones de un patrón se incrementan o disminuyen de manera controlada para obtener diferentes tallas.',
    },
    {
      termino: 'Holgura',
      significado:
        'Diferencia dimensional establecida entre las medidas corporales y las medidas de una prenda para responder a condiciones de ajuste, movilidad, diseño o comportamiento del material.',
    },
    {
      termino: 'Patronaje industrial',
      significado:
        'Sistema de construcción, transformación y reproducción de patrones destinado principalmente a procesos productivos seriados y organizado a partir de parámetros técnicos y rangos de tallas.',
    },
    {
      termino: 'Pinza',
      significado:
        'Recurso estructural empleado para controlar y redistribuir volumen, permitiendo adaptar una superficie plana a las características tridimensionales del cuerpo.',
    },
    {
      termino: 'Piquete',
      significado:
        'Marca ubicada en puntos específicos del patrón que permite establecer correspondencias entre piezas durante el proceso de ensamblaje.',
    },
    {
      termino: 'Premuestra',
      significado:
        'Prototipo inicial confeccionado para comprobar dimensiones, ajuste, cobertura, comportamiento del material y demás condiciones antes de aprobar definitivamente el patrón.',
    },
    {
      termino: 'Tejido de punto',
      significado:
        'Estructura textil formada mediante el entrelazamiento de bucles de hilo, cuyas características pueden proporcionar diferentes niveles de extensibilidad y recuperación.',
    },
  ],
  referencias: [
    {
      referencia:
        'ASTM International. (2021). ASTM D2594/D2594M-21: Standard test method for stretch properties of knitted fabrics having low power. ASTM International.',
      link: '',
    },
    {
      referencia:
        'Barnfield, J. y Richards, A. (2013). Manual de patronaje de moda: Diseño, adaptación y personalización de los patrones de costura. Promopress.',
      link: '',
    },
    {
      referencia:
        'Chen, B. Y. (2013). Técnicas de patronaje. Tomo I: Mujer. Universidad Peruana de Ciencias Aplicadas.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2014). Técnicas de patronaje de moda. Vol. 1: Cómo realizar faldas, pantalones y camisas. Mujer/Hombre. Promopress.',
      link: '',
    },
    {
      referencia:
        'Donnanno, A. (2017). Técnicas de patronaje de moda alta costura. Vol. 1: Modelos de alta costura, técnicas de drapeado, adornos. Promopress.',
      link: '',
    },
    {
      referencia:
        'Greggianin, M., Tonetto, L. M. y Brust-Renck, P. (2018). Aesthetic and functional bra attributes as emotional triggers. Fashion and Textiles, 5, artículo 31.',
      link: '',
    },
    {
      referencia:
        'Gutiérrez Rengifo, L. A., Moncayo Velazco, A. X., Tanaka, K., Kimura, F. y Moreno Brand, D. (2011). Manual de patronaje básico e interpretación de diseños. Servicio Nacional de Aprendizaje (SENA).',
      link: '',
    },
    {
      referencia:
        'International Organization for Standardization. (2018). ISO 20932-1:2018. Textiles—Determination of the elasticity of fabrics—Part 1: Strip tests. ISO.',
      link: '',
    },
    {
      referencia:
        'Matthews-Fairbanks, J. L. (2021). Bare essentials: Underwear: Panties & knickers (2.ª ed.). Independently published.',
      link: '',
    },
    {
      referencia:
        'Shin, K. (2015). Patternmaking for underwear design (2.ª ed.). CreateSpace Independent Publishing Platform.',
      link: '',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo:
            'Profesional grado 06. Responsable Ecosistema Virtual de Recursos Educativos Digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Edison Eduardo Mantilla Cuadros',
          cargo: 'Responsable de línea de producción',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Paola Angélica Castro Salazar',
          cargo: 'Experta temática',
          centro: 'Centro Agroturístico – Regional Santander',
        },
        {
          nombre: 'Angélica Varón Quintero',
          cargo: 'Evaluadora instruccional',
          centro: 'Centro Agroturístico – Regional Santander',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Julian Fernando Vanegas Vega',
          cargo: 'Diseñador de contenidos',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: 'Pedro Alonso Bolivar González',
          cargo: 'Desarrollador <em>full stack</em>',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Animadora y productora audiovisual',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: '',
          cargo: 'Validadora y vinculadora de recursos educativos digitales',
          centro: 'Centro Agroturístico - Regional Santander',
        },
        {
          nombre: '',
          cargo: 'Evaluadora de contenidos inclusivos y accesibles',
          centro: 'Centro Agroturístico - Regional Santander',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
