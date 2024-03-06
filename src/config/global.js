export default {
  global: {
    componenteFormativo: 'Ejecución del evento',
    descripcionCurso:
      'La fase de ejecución o desarrollo propiamente del evento incluye diferentes elementos que abordaremos en el componente formativo, tales como la conformación de los comités, la asignación de tareas y responsabilidades, el control y evaluación de las mismas, así como el diseño de planes de contingencia según la necesidad.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/float-1.png'),
      },
      {
        clases: ['banner-principal-decorativo-2'],
        imagen: require('@/assets/curso/portada/float-2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3'],
        imagen: require('@/assets/curso/portada/float-3.svg'),
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
        titulo: 'Comités y responsabilidades',
        desarrolloContenidos: true,
      },

      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Asignación de actividades',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Verificación de tareas asignadas',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Desarrollo del evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Seguimiento y control del evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Contingencia',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema7',
        numero: '7',
        titulo: 'Cierre del evento',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema8',
        numero: '8',
        titulo: 'Evaluación por parte de los participantes',
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
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/122112_CF07_DU.pdf',
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
  complementario: [
    {
      tema: 'Desarrollo del evento',
      referencia:
        'Gutiérrez, J. (s. f.). <em>Organización de grandes eventos deportivos.</em>',
      tipo: 'Presentación',
      link:
        'https://www.bizkaia.eus/home2/archivos/DPTO4/Temas/deportes/claves%20evento.pdf?hash=b0858fe92dc63a58ee412f666011902f&idioma=CA',
    },
  ],
  glosario: [
    {
      termino: 'Evento',
      significado:
        'es un acontecimiento previamente organizado, que reúne determinado número de personas, en un lugar y tiempo preestablecidos, donde se desarrollará una serie de actividades afines al mismo objetivo.',
    },
    {
      termino: 'Comité de trabajo',
      significado:
        'estos grupos se crean con el propósito de dividir las tareas de la organización y pueden conformarse para llevar a cabo eventos y competencias, según las actividades contempladas.',
    },
    {
      termino: 'Ejecución',
      significado:
        'realización de una acción, especialmente en el cumplimiento de un proyecto, un encargo o una orden.',
    },
    {
      termino: 'Seguimiento y control',
      significado:
        'el seguimiento consiste básicamente en el análisis de la información generada en el proyecto, para la identificación temprana de riesgos y desviaciones respecto al plan. Por su parte, el control comprende el desarrollo de las actuaciones para conseguir que lo planificado y esperado ocurra.',
    },
    {
      termino: 'Contingencia',
      significado:
        'suceso que puede suceder o no, especialmente, un problema que se plantea de forma imprevista.',
    },
  ],
  referencias: [
    {
      referencia:
        'Año, V. (2000). Organización de grandes eventos deportivos internacionales. <em>Revista Arbor,</em> 165(650), p. 265-287.',
      link: 'https://doi.org/10.3989/arbor.2000.i650.969',
    },
    {
      referencia:
        'Año, V. (2005). La organización de grandes eventos deportivos. Los XV Juegos Mediterráneos de Almería 2005. <em>2ón Congrés Gestió de l’Esport,</em> p. 58-64.',
      link: '',
    },
    {
      referencia:
        'Brotons, J. (2005). Un enfoque integrado de la economía de los eventos deportivos. <em>EFDeportes.com, Revista Digital,</em> 10(87).',
      link: 'http://www.efdeportes.com/efd87/eventos.htm',
    },
    {
      referencia:
        'Cerezuela, B. (2003). <em>La información y documentación deportiva y los grandes eventos deportivos.</em> Centre d’Estudis Olímpics UAB.',
      link: 'https://core.ac.uk/download/pdf/13282861.pdf',
    },
    {
      referencia:
        'Garavaglia, J. y Marchena, J. (2005). América Latina de los orígenes a la independencia. <em>Investigaciones De Historia Económica,</em> 4(10), p. 171-173.',
      link: 'https://recyt.fecyt.es/index.php/IHE/article/view/70120',
    },
    {
      referencia:
        'Magaz-González, A. y Fanjul-Suárez, J. (2012). Organización de eventos deportivos y gestión de proyectos: factores, fases y áreas. <em>Revista Internacional de Medicina y Ciencias de la Actividad Física y el Deporte,</em> 12(45) p. 138-169.',
      link:
        'http://cdeporte.rediris.es/revista/revista45/artorganizacion209.htm',
    },
    {
      referencia:
        'Ocaña, I. (2014). <em>La gestión de eventos y productos turísticos.</em> Editorial Síntesis.',
    },
    {
      referencia:
        'Pousada, I. y Urdampilleta, A. (2012). Gestión de los grandes eventos deportivos y su alto nivel de repercusión social. <em>EFDeportes.com, Revista Digital,</em> 17(169).',
      link:
        'http://www.efdeportes.com/efd169/gestion-de-los-grandes-eventos-deportivos.htm',
    },
    {
      referencia:
        'Vincent, J. (2020). <em>Ejemplo de pregunta para encuestas post evento.</em> Encuesta.com.',
      link: 'https://encuesta.com/blog/preguntas-para-encuestas-postevento/',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Claudia Patricia Aristizábal Gutiérrez',
          cargo: 'Responsable del equipo',
          centro: 'Dirección General',
        },
        {
          nombre: 'Liliana Victoria Morales Gualdrón',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Tatiana Cristina Vargas',
          cargo: 'Experta temática',
          centro: 'Regional Antioquia, Centro de servicios de salud',
        },
        {
          nombre: 'Paola Andrea Quintero Aguilar',
          cargo: 'Diseñadora instruccional',
          centro: 'Regional Bogotá, Centro de Gestión Industrial',
        },
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Revisora Metodológica y Pedagógica',
          centro: 'Regional Distrito Capital- Centro de Diseño y Metrología',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable equipo de desarrollo curricular',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura',
        },
        {
          nombre: 'Darío González',
          cargo: 'Corrección de estilo',
          centro: 'Regional Tolima - Centro Agropecuario La Granja',
        },
        {
          nombre: 'Gloria Lida Alzate Suarez',
          cargo: 'Adecuación instruccional',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Alix Cecilia Chinchilla Rueda',
          cargo: 'Metodología para la formación virtual',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmín Rocío Figueroa Pacheco ',
          cargo: 'Diseñador web',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Jhon Edinson Castañeda Oviedo',
          cargo: 'Desarrollo Fullstack ',
          centro:
            'Regional Distrito Capital - Centro de Gestión de Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Diego Fernando Velasco Güiza',
          cargo: 'Desarrollo Fullstack ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Carolina Coca Salazar',
          cargo: 'Evaluación de contenidos inclusivos y accesibles',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Lina Marcela Pérez Manchego',
          cargo: 'Validación de recursos educativos digitales',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Leyson Fabian Castaño Pérez',
          cargo:
            'Validación de recursos educativos digitales y vinculación LMS',
          centro:
            'Regional Distrito Capital - Centro de Gestión De Mercados, Logística y Tecnologías de la Información',
        },
        {
          nombre: 'Viviana Herrera Quiñonez',
          cargo: 'Evaluadora Instruccional ',
          centro: 'Regional Tolima - Centro de Comercio y Servicios',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
