export default {
  global: {
    componenteFormativo:
      'Infraestructura y requerimientos <em>software</em> y <em>hardware</em>',
    descripcionCurso:
      'En este componente formativo se explicará el tipo de infraestructura <em>Hardware</em> y <em>Software</em> requerida por una compañía u organización, teniendo en cuenta los estándares que garanticen su correcta configuración, sobre la implementación de nuevas tecnologías en <em>cloud computing</em>.',
    imagenBannerPrincipal: require('@/assets/curso/banner-principal.svg'),
    fondoBannerPrincipal: require('@/assets/curso/fondo-banner.svg'),
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
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        icono: 'far fa-file-alt',
        numero: '1',
        titulo: '<em>Networking</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '1.1',
            titulo: 'Componentes de red',
            hash: 't_1_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.2',
            titulo: 'Topologías',
            hash: 't_1_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.3',
            titulo: 'Estándares ',
            hash: 't_1_3',
          },
          {
            icono: 'far fa-file-alt',
            numero: '1.4',
            titulo: 'Direccionamiento IPV4, IPV6 ',
            hash: 't_1_4',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        icono: 'far fa-file-alt',
        numero: '2',
        titulo: 'Requerimientos',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '2.1',
            titulo: 'Generalidades sobre requerimientos',
            hash: 't_2_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.2',
            titulo: 'Requerimientos no funcionales',
            hash: 't_2_2',
          },
          {
            icono: 'far fa-file-alt',
            numero: '2.3',
            titulo: 'Arquitectura de despliegue de aplicaciones y servicios',
            hash: 't_2_3',
          },
        ],
      },
      {
        nombreRuta: 'tema3',
        icono: 'far fa-file-alt',
        numero: '3',
        titulo: '<em>Cloud computing</em>',
        desarrolloContenidos: true,
        subMenu: [
          {
            icono: 'far fa-file-alt',
            numero: '3.1',
            titulo: 'Computación en la nube',
            hash: 't_3_1',
          },
          {
            icono: 'far fa-file-alt',
            numero: '3.2',
            titulo: 'Tipos de servicios de computación en la nube',
            hash: 't_3_2',
          },
        ],
      },
    ],
    subMenu: [
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
  referencias: [
    {
      referencia:
        'Alarcón, J. M. (2018, 14 junio). ¿Qué diferencia hay entre <em>Docker</em> (Contenedores) y Máquinas virtuales (<em>VMware, VirtualBox</em>)? CampusMVP.es.',
      link:
        'https://www.campusmvp.es/recursos/post/que-diferencia-hay-entre-docker-contenedores-y-maquinas-virtuales.aspx',
    },
    {
      referencia:
        'Cadavid, S. R. et al. (2016, April 12). Componentes de una red.',
      link: 'http://contenidos.sucerman.com/nivel3/redes/unidad1/leccion2.html',
    },
    {
      referencia: 'Carazo. J. (2019). <em>Networking.</em>',
      link: 'https://economipedia.com/definiciones/networking.html',
    },
    {
      referencia:
        'Garcia. V. (2.018). ¿Qué es el <em>Networking</em> y para qué sirve esta estrategia? Webescuela.',
      link: 'https://webescuela.com/que-es-el-networking',
    },
    {
      referencia: 'Ecured (2.021). Topología de red.',
      link: 'https://www.ecured.cu/Topolog%C3%ADa_de_red',
    },
    {
      referencia: 'MID. (2021). Instalaciones.',
      link: 'https://sistemamid.com',
    },
    {
      referencia:
        'Oracle <em>Corporation</em> (2010). Modelo de referencia OSI.',
      link: 'https://docs.oracle.com/cd/E19957-01/820-2981/ipov-8/index.html',
    },
    {
      referencia:
        'Peña, X. (3 de Septiembre de 2019). ¿Qué es y para qué sirve la computación en la nube? Academia Pragma.',
      link:
        'https://www.pragma.com.co/blog/que-es-y-para-que-sirve-la-computacion-en-la-nube',
    },
    {
      referencia:
        'SENA. (2021). Despliegue de aplicaciones y servicios en contenedores <em>Docker</em>. SENA',
    },
    {
      referencia:
        'Sommerville I. (2011).  Ingeniería del <em>software</em>. México: Addison-Wesley.',
      link:
        'https://sistemamid.com/panel/uploads/biblioteca/2018-06-11_03-37-12144643.pdf',
    },
  ],
  glosario: [
    {
      termino: 'Capa',
      significado:
        'es una capa compleja que permite conectividad y elige una ruta entre dos sistemas de <em>hosts</em> que pueden estar ubicados en redes geográficamente distintas.',
    },
    {
      termino: '<em>Offline</em>',
      significado:
        'es un término que se utiliza para definir a algo que se puede realizar sin necesidad de estar conectado a la red o a internet, más exactamente que funciona localmente.',
    },
    {
      termino: 'Red de datos',
      significado:
        'se denomina red de datos a aquellas infraestructuras o redes de comunicación que se han diseñado específicamente para la transmisión de información mediante el intercambio de datos. Las redes de datos se diseñan y construyen en arquitecturas que pretenden servir a sus objetivos de uso. Las redes de datos, generalmente, están basadas en la comunicación de paquetes y se clasifican de acuerdo a su tamaño, la distancia que cubre y su arquitectura física. (Ecured, 2021).',
    },
    {
      termino: 'TI',
      significado: ' Tecnología de la Información.',
    },
  ],
  complementario: [
    {
      texto: 'M. (2021a). ¿Qué es <em>Networking</em>? [Vídeo]. Pase de lista.',
      tipo: 'Video',
      link: 'https://www.youtube.com/watch?v=YILNFYxmdZE',
    },
    {
      texto:
        'It, M. (2020, 10 mayo). Un resumen completo del modelo #TCPIP (Todas sus capas en menos de 7 minutos) [Vídeo].',
      tipo: 'Video ',
      link: 'https://youtu.be/1pB2kan_AFk',
    },
  ],
  creditos: {
    liderEquipo: [
      {
        nombre: 'Maria Camila Garcia Santamaria',
        cargo: 'Líder del equipo',
        centro: 'Dirección General',
      },
    ],
    contenidoInstruccional: [
      {
        nombre: 'Rafael Neftalí Lizcano Reyes',
        cargo: 'Asesor metodológico y pedagógico',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'José Luis Bastidas Pérez',
        cargo: 'Experto temático',
        centro:
          'Centro de Teleinformática y Producción Industrial - Regional Cauca',
      },
      {
        nombre: 'Claudia Milena Hernández Naranjo',
        cargo: 'Diseñadora instruccional',
        centro: 'Centro de Diseño y Metrología - Regional Distrito Capital',
      },
      {
        nombre: 'Alix Cecilia Chinchilla Rueda',
        cargo: 'Evaluadora instruccional ',
        centro: 'Centro de Gestión Industrial - Regional Distrito Capital',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Revisión de estilo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    desarrolloProducto: [
      {
        nombre: 'Francisco José Lizcano Reyes',
        cargo: 'Responsable del equipo',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Leyson Fabian Castaño Perez',
        cargo: 'Soporte organizacional',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: ['Sandra Carolina Durán López'],
        cargo: 'Diseño web',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Zuleidy María Ruiz Torres',
        cargo: 'Producción audiovisual',
        centro: 'Centro de Comercio y Servicios - Regional Tolima',
      },
      {
        nombre: 'Wilson Andrés Arenales Caceres',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Gilberto Junior Rodriguez Rodriguez',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'María Carolina Tamayo López',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Camilo Villamizar Lizcano ',
        cargo: 'Producción audiovisual',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jorge Leonardo Camacho Pardo',
        cargo: 'Desarrollo front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Andrés Mauricio Santaella Ochoa',
        cargo: 'Soporte front-end',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
      {
        nombre: 'Jhana Johanna Bustillo Ardila',
        cargo: 'Validación de diseño y contenido',
        centro:
          'Centro Industrial del Diseño y la Manufactura - Regional Santander',
      },
    ],
    gestoresRepositorio: [
      {
        nombre: 'Milady Tatiana Villamil Castellanos',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
      {
        nombre: 'Daniel Felipe Varón Molina',
        cargo: 'Validación y vinculación en plataforma LMS',
        centro: 'Centro de Comercio y Servicios Regional - Tolima',
      },
    ],
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
