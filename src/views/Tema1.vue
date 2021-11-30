<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 <em>Networking</em>
  
    p.mb-4 El siguiente video, hace una breve descripción de Networking, como lo afirma Garcia V. (2.018):

    figure.mb-5
      .video
        <iframe width="853" height="480" src="https://www.youtube.com/embed/0mbw-CgmkEA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
    .row.justify-content-center.mb-5
      .col-lg-10.mb-5(data-aos='flip-up')
        .bloque-texto-a.color-primario.p-4.p-md-5 
          .row.m-0.align-items-center.justify-content-between
            .col-lg-8.mb-4.mb-lg-0
              .bloque-texto-a__texto.p-4
                p.mb-0 Teniendo en cuenta el anterior video, se puede concluir que para comprender mejor todos sus beneficios, es importante ofrecer algo más sencillo para definir lo que se quiere decir al pronunciar el Networking, ya que este, no es solo un concepto globalizado, es una técnica de adquisición de contactos y en general de una red de contactos profesionales con otras personas que tienen intereses afines a los nuestros, que permiten crear sinergias y oportunidades laborales o de negocio a corto, medio o largo plazo. 
            .col-lg-4
              figure
                img(src='@/assets/curso/tema1/img1.svg', alt='imagen ambiental', style='width: 232px;').m-auto
            
                  




    #t_1_1.titulo-segundo.color-acento-botones
      .h2 1.1 Componentes de red
    
    
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-2 Son los equipos y programas (controladores) necesarios para establecer una red local o mayor. En conjunto forman la infraestructura de red a través de la cual viaja la información y que respalda la comunicación de las personas, los dispositivos y los medios son elementos físicos (<em>hardware</em>) de la red de datos, el <em>hardware</em> es generalmente el componente visible de la infraestructura red, como un computador, un switche, o los cables que se usan para conectar estos dispositivos. En algunas ocasiones algunos componentes no son visibles.
          
        .bloque-texto-b.color-primario.p-4.px-0
          .bloque-texto-b__texto
            i.fas.fa-quote-left(style="font-size: 28px;")
            h4.mb-0 Los servicios son programas distribuidos en toda la red y facilitan las herramientas de comunicación en línea, por ejemplo: Programas o servicios de correo electrónico, programas o servicios de mensajería instantánea, programas o servicios de páginas <em>web</em>.
            i.fas.fa-quote-right(style="font-size: 28px;")
          .bloque-texto-d__autor.d-flex.justify-content-start 
            p.mb-0 Cadavid, S.R., 2016
            
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img2.png', alt='imagen ambiental', style='width: 550px;').m-auto

    p.mb-5 Las redes están formadas por componentes de dos tipos: 

    h3.mb-4 Componentes físicos
    p.mb-5 Como anteriormente se expone, los componentes físicos representan el hardware, son los elementos físicos de una red como, por ejemplo:


    .row.fondo1.mb-5
      .col-lg-12.px-md-5
        .row.justify-content-center.mb-4
          .col-lg-3
            .h4.mb-0.text-center Componentes físicos
            
        .row.justify-content-center.mb-4
          .col-lg-6
            ImagenInfografica.color-secundario.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema1/infografia1.svg', alt='Componentes físicos', style='')
                  
                  
              .tarjeta.color-azulado.p-3(x="32%" y="30%" numero="")
                .h5.mb-2 Tarjeta de red
                p.mb-4 Es un dispositivo adaptado en los computadores de mesa y portátiles que permiten su conexión con otros dispositivos, por este puerto salen todas las comunicaciones del computador. 
                p.mb-0 Estos permiten compartir recursos entre dos o más equipos. A las tarjetas de red también se les llama adaptador de red o NIC (<em>Network Interface Card</em>, Tarjeta de Interfaz de Red en español). 
                  
              .tarjeta.color-azulado.p-3(x="66%" y="30%" numero="")
                .h5.mb-2 Cables
                p.mb-0 Hay muchos dispositivos como cables, canalizaciones, conectores, etiquetas, espacios que deben ser instalados para poder dar cabida a una infraestructura de telecomunicaciones en un determinado escenario. La instalación se debe hacer en cumplimiento de estándares para que califiquen como cableado estructurado. 
                  
              .tarjeta.color-azulado.p-3(x="15%" y="77%" numero="")
                .h5.mb-2 <em>Router</em>
                p.mb-4 Dispositivo <em>hardware</em> o <em>software</em> para interconexión de redes de computadoras que opera en la capa tres (nivel de red) del modelo OSI.  
                p.mb-0 El <em>router</em> interconecta segmentos de red o redes enteras. Hace pasar paquetes de datos entre redes tomando como base la información de la capa de red.  
                  
              .tarjeta.color-azulado.p-3(x="50%" y="77%" numero="")
                .h5.mb-2 <em>Hub</em>
                p.mb-0 Es un equipo de redes que facilita la conexión entre equipos y retransmite los paquetes que recibe desde cualquiera de ellos a todos los demás. Los hubs han salido del mercado debido al gran nivel de colisiones y tráfico de red que generan. 
                
              .tarjeta.color-azulado.p-3(x="85%" y="77%" numero="")
                .h5.mb-2 <em>Gateway</em>
                p.mb-0 O puerta de enlace, es un dispositivo que permite la conectividad entre redes con protocolos y arquitecturas diferentes a todos los niveles de comunicación. Su objetivo es traducir los paquetes del protocolo utilizado en una red al protocolo usado en la red de destino. 
                  
        .row.justify-content-center.mb-4
          .col-lg-12
            h3.mb-4 Componentes lógicos
            p.mb-5 Las redes de datos comparten recursos lógicos (componentes intangibles), como <em>software</em>, estándares, protocolos, modelos, servicios, que facilitan la comunicación. 
            p.mb-5 A continuación, se presenta algunos componentes lógicos como los modelos de referencia de una red:

    .row.fondo2.mb-5
      .col-lg-12.px-md-5.pt-5
        .row.justify-content-center.mb-5
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img3.svg', alt='imagen ambiental', style='width: 190px;').m-auto
              
          .col-lg-8
            h4.mb-4 Modelo OSI
            p.mb-4 La Organización Internacional para la Estandarización (ISO) ha diseñado el modelo de referencia de Interconexión de Sistemas Abiertos (OSI) que utiliza capas estructuradas. El modelo OSI describe una estructura de capas para las actividades de red. Cada capa tiene asociados uno o más protocolos. Las capas representan las operaciones de transferencia de datos comunes a todos los tipos de transferencias de datos entre las redes de cooperación. (Oracle corporation, 2010).
            p.mb-4 Este modelo comprende siete capas abstractas, organizadas de manera vertical como a continuación se muestra: 
            
        .row.justify-content-center.mb-5
          TabsA.color-primario.mb-2
              
            .tarjeta.color-primario.p-4(titulo="Fisica" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Se encarga de transmisión binaria Ceros y Unos
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img4.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Datos" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Se encarga de transmisión binaria Ceros y Unos
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img5.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Red" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Direccionamiento lógico a través de la IP, enrutar paquetes.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img6.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Transporte" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Transporte de paquetes extremo a extremo. Trabaja los dos protocolos TCP/IP.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img7.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Sesión" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Se encarga de poder tener varias sesiones independientes para cada aplicación.
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img8.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Presentación" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Se encarga de formatear los datos para que sean entendibles y legibles para la capa de aplicación. 
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img9.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
            .tarjeta.color-primario.p-4(titulo="Aplicación" style='background-color: #F8F1DC')
              .row.justify-content-center
                .col-lg-6.mb-4.mb-lg-0
                  p.mb-0 Tiene como misión controlar las funciones a realizar por los programas de usuario de manera que les permita el acceso al entorno OSI. 
                .col-lg-6
                  figure
                    img(src='@/assets/curso/tema1/img10.jpg', alt='imagen ambiental', style='width: 420px;').m-auto
                    
        .row.justify-content-center.mb-5
          .col-lg-2.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema1/img11.svg', alt='imagen ambiental', style='width: 190px;').m-auto
              
          .col-lg-8
            h4.mb-4 Modelos de referencia TCP/IP
            p.mb-0 El Protocolo de Control de Transmisión (TCP), es un protocolo utilizado para todos los nodos conectados a internet de manera que estos se puedan comunicar entre sí de manera fiable. Se trata de un protocolo enfocado a la conexión que junto con el protocolo IP ha servido de base para el modelo TCP/IP. Este protocolo fue usado desde antes de la aparición del Modelo OSI (Interconexiones de Sistemas Abiertos) y por esta razón el modelo TCP/IP ha sido referente al modelo OSI.
            
        .row.justify-content-center.mb-5
          .col-lg-10
            figure
              img(src='@/assets/curso/tema1/conceptual1.svg', alt='Suite de protocolos según modelos de referencia', style='').m-auto




    
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      .h2 1.2 Topologías
    
    

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Es el arreglo físico o lógico en el cual los dispositivos o nodos de una red (e.g. computadoras, impresoras, servidores, hubs, switches, routers, etc.) se interconectan entre sí sobre un medio de comunicación. Está compuesta por dos partes, la topología física, que es la disposición real de los cables (los medios) y la topología lógica, que define la forma en que los hosts acceden a los medios. 
        .cajon.color-primario.p-4.mb-0
          p.mb-0 Las topologías físicas que se utilizan comúnmente son de bus, de anillo, en estrella, en estrella extendida, jerárquica y en malla, entre otras que ya no están vigentes (Ecured, 2021):
      .col-lg-5
        
        SlyderF(columnas="col-12")
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/slider1.svg', alt='', style='').m-auto
            
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/slider2.svg', alt='', style='').m-auto
            
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/slider3.svg', alt='', style='').m-auto
                    
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/slider4.svg', alt='', style='').m-auto
                    
          .tarjeta.p-4
            .row.justify-content-center.mb-3
              .col-auto
                figure
                  img(src='@/assets/curso/tema1/slider5.svg', alt='', style='').m-auto
                    


    .row.justify-content-center
      .col-lg-12.fondo-slider
        SlyderA(tipo="b")
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red en bus
              p.mb-4 Es considerada una arquitectura de comunicación donde la conexión de los equipos la proporciona un bus o canal compartido por todos los usuarios.
              p.mb-4 Bus = Cable por donde transita la información en las redes de computadores.
              p.mb-4 Se concluye que por un solo cable (bus) lleva la información de un sitio a otro de la red.
              p.mb-0 La topología en bus permite conectar varios computadores de forma sencilla, pero causan problemas cuando dos equipos quieren transmitir datos al mismo tiempo en el canal. Hoy en día, esta topología ya no es adecuada para redes grandes.
                  
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/slider6.svg', alt='imagen que acompaña', style='width:440px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red en anillo
              p.mb-4 Se puede decir que tiene la apariencia de bus pero que estaría cerrado sobre sí mismo: el último nodo está conectado al primero, formando un anillo. 
              p.mb-0 Su modo de funcionar es mediante la asignación de una dirección a cada nodo que representa una secuencia numérica única que lo identifica respecto a los demás dentro de la red a la que pertenece. Para este caso, un elemento hardware puede ser un nodo (computador, impresora), en ocasiones son confundidos con host, debido a que los host son los computadores de la red, no a los otros elementos, en la red en anillo cada terminal tiene una única conexión de entrada y otra de salida de anillo.
                  
            .col-10.col-md-5
              figure
                img(src='@/assets/curso/tema1/slider7.svg', alt='imagen que acompaña', style='width:420px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red en estrella
              p.mb-4 Los nodos de la red están todos conectados a un nodo central, es común verlo trabajar en las redes Ethernet actuales en RJ45, ahora es la topología por excelencia en la mayoría de las redes. 
              p.mb-4 La función de este nodo central es garantizar la comunicación entre los distintos equipos de red. El nodo central suele ser un switch (conmutador) o un hubs (concentrador), aunque hoy en día suele ponerse siempre un switch, las estaciones o computadores envían a este nodo central los datos que:
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0  Si el nodo central es un hubs, envía los datos a todos los demás puertos de la red (concentrador)
                li 
                  i.fas.fa-angle-right
                  p.mb-0  Si es un switch envía los datos solo al destinatario (conmutador).
              p.mb-0 La idea de esta topología es que para poder tener comunicación con otro computador o dispositivo de la red es necesario pasar por el dispositivo central, el cable que conecta esta topología es un cable utp que contiene 4 pares trenzados que van conectados desde el computador hasta el dispositivo central, en cada punta de esta conexión están los conectores RJ45.
                  
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/slider8.svg', alt='imagen que acompaña', style='width:310px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red de árbol o jerárquica
              p.mb-4 Esta topología también llamada jerárquica se puede considerar como una colección de redes en estrella organizadas en un orden o jerarquía, esta red se divide en niveles. 
              p.mb-0 Para esta tipología su nivel superior, alto, está conectado a varios nodos de nivel inferior, generando jerarquía, estos nodos pueden conectarse ellos mismos a varios nodos de nivel inferior, como en la red en estrella convencional, los nodos individuales pueden quedar aislados de la red por un fallo de un solo punto de una ruta de transmisión al nodo, si falla un enlace que conecta una rama, esa rama está aislada, si falla una conexión a un nodo, una sección completa de la red queda aislada del resto.
                  
            .col-10.col-md-5
              figure
                img(src='@/assets/curso/tema1/slider9.svg', alt='imagen que acompaña', style='width:460px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red en malla
              p.mb-4 Esta topología identifica las redes cableadas o inalámbricas en las que todos los computadores están conectados entre pares sin una jerarquía central, conformando una estructura en forma de malla. 
              p.mb-4 Las redes de malla utilizan diferentes vías de transferencia entre nodos, esta técnica hace que la transferencia de datos siempre esté constante en caso de algún error.
              p.mb-0 Es importante recalcar que el internet se basa en una topología de malla, una red de área amplia “WAN”, que garantiza la estabilidad en caso de falla de un nodo
                  
            .col-md-5
              figure
                img(src='@/assets/curso/tema1/slider10.svg', alt='imagen que acompaña', style='width:560px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red mixta o híbrida
              p.mb-4 Se refiere a dos topologías en la cual se mezclan dos tipos de teorías y tienen un objetivo en particular y no muy alejado al de las demás topologías existentes, el de llevar paquetes entre nodos. 
              p.mb-0 Por ejemplo, si en un edificio se usa topología en estrella y en otro se usa topología en anillo, al conectarse estas dos topologías dará como resultado una topología híbrida, topología en estrella y topología en anillo, en esta unión de dos topologías se heredan las ventajas y desventajas de cada una de ellas.
                  
            .col-10.col-md-5
              figure
                img(src='@/assets/curso/tema1/slider11.svg', alt='imagen que acompaña', style='width:550px').m-auto
                  
                
          .row.justify-content-center.align-items-center
            .col-md-5.mb-4.mb-lg-0
              h4.mb-4 Red totalmente conexa
              p.mb-4 Es esta se evidencia que hay una conexión directa entre todos los pares de sus nodos. En una red que incluye los n nodos, siempre hay n (n-1) / 2 enlaces directos. 
              p.mb-0 Este tipo de topologías suelen tener un costo muy elevado para su configuración, pero siempre proporcionan un confiabilidad mayor, ya que hay muchos trayectos para la información, suministrada cierta cantidad de enlaces entre nodos, este tipo de topologías son implementadas en aplicaciones militares.
                  
            .col-10.col-md-5
              figure
                img(src='@/assets/curso/tema1/slider12.svg', alt='imagen que acompaña', style='width:520px').m-auto
                  



    
    
    separador
    #t_1_3.titulo-segundo.color-acento-botones
      .h2 1.3 Estándares
    
    .row.justify-content-center.align-items-center.gx-0.mb-5
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/tema1/img12.svg', alt='imagen que acompaña', style='width:300px').m-auto
      .col-lg-9
        .p-4.p-lg-5(style="background-color: #F3F9FF")
          p.mb-0 En los últimos años ha habido un crecimiento desbordado en el tamaño de las redes. Por ello, vienen desarrollando o implementando tecnologías de hardware y software diferentes, pero algunas redes generaban incompatibilidad, imposibilitando su comunicación. Para solucionar este problema, la Organización Internacional para la Normalización (ISO) realizó varias investigaciones acerca de los esquemas de red y reconoció que era indispensable crear un modelo de red que pudiera ayudar a los diseñadores de red a implementar redes que pudieran comunicarse y trabajar en conjunto (interoperabilidad) y, por lo tanto, elaboraron el modelo de referencia OSI en 1984.
    
    p.mb-5 A continuación, la siguiente tabla describe cada uno de los estándares internacionales:

    
    .row.justify-content-center.mb-5
      .titulo-sexto.color-acento-contenido.mb-4
        h5 Tabla 1.
        span Estándares internacionales de red 
          
      .col-lg-12
        .tabla-a.color-primario.mb-5 
          table
            caption Nota: Tomado de Red Tecnológica MID - Plataforma de Novedades, Consultas y Negocios. (2021). 
            thead
              tr
                th(style='width:30%') Especificaci&oacute;n
                th Descripci&oacute;n
            tbody
              tr
                td 802.1
                td Establece los est&aacute;ndares de interconexi&oacute;n relacionados con la gesti&oacute;n de redes.
              tr
                td 802.2
                td
                  | Define el est&aacute;ndar general para el nivel de enlace de datos. El IEEE divide este nivel en dos subniveles: los niveles LLC y MAC. El nivel MAC var&iacute;a en funci&oacute;n de los diferentes tipos de red y est&aacute; definido por el est&aacute;ndar IEEE 802.3.
              tr
                td 802.3
                td
                  | Define el nivel MAC para redes de bus que utilizan Acceso m&uacute;ltiple por detecci&oacute;n de portadora con detecci&oacute;n de colisiones (CSMA/CD, Carrier-Sense Multiple Access with Collision Detection). &Eacute;ste es el est&aacute;ndar Ethernet.
              tr
                td 802.4
                td
                  | Define el nivel MAC para redes de bus que utilizan un mecanismo de paso de testigo (red de &aacute;rea local Token Bus).
              tr
                td 802.5
                td Define el nivel MAC para redes Token Ring (red de &aacute;rea local Token Ring).
              tr
                td 802.6
                td
                  | Establece est&aacute;ndares para redes de &aacute;rea metropolitana (MAN, Metropolitan Area Networks), que son redes de datos dise&ntilde;adas para poblaciones o ciudades. En t&eacute;rminos de extensi&oacute;n geogr&aacute;fica, las redes de &aacute;rea metropolitana (MAN) son m&aacute;s grandes que las redes de &aacute;rea local (LAN), pero m&aacute;s peque&ntilde;as que las redes de &aacute;rea global (WAN). Las redes de &aacute;rea metropolitana (MAN) se caracterizan, normalmente, por conexiones de muy alta velocidad utilizando cables de fibra &oacute;ptica u otro medio digital.
              tr
                td 802.7
                td
                  | Utilizada por el grupo asesor t&eacute;cnico de banda ancha (Broadband Technical Advisory Group).
              tr
                td 802.8
                td
                  | Utilizada por el grupo asesor t&eacute;cnico de fibra &oacute;ptica (Fiber-Optic Technical Advisory Group).
              tr
                td 802.9
                td Define las redes integradas de voz y datos.
              tr
                td 802.10
                td Define la seguridad de las redes.
              tr
                td 802.11
                td Define los est&aacute;ndares de redes sin cable.
              tr
                td 802.11b
                td
                  | Ratificado el 16 de septiembre de 1.999, proporciona el espaldarazo definitivo a la normativa est&aacute;ndar inicial, ya que permite operar a velocidades de 11 Mbps y resuelve carencias t&eacute;cnicas relativas a la falta de itinerancia, seguridad, escalabilidad, y gesti&oacute;n existente hasta ahora.
              tr
                td 802.12
                td
                  | Define el acceso con prioridad por demanda (Demand Priority Access) a una LAN, 100BaseVG-AnyLAN.
              tr
                td 802.13
                td No utilizada.
              tr
                td 802.14
                td Define los est&aacute;ndares de m&oacute;dem por cable.
              tr
                td 802.15
                td Define las redes de &aacute;rea personal sin cable (WPAN, Wireless Personal)



    separador
    #t_1_4.titulo-segundo.color-acento-botones
      .h2 1.4 Direccionamiento IPV4, IPV6 

    p.mb-4 A continuación, se explicarán brevemente los conceptos de IPV4, IPV6:

    AcordionA.mb-5(tipo="b" clase-tarjeta="tarjeta tarjeta--azul")
      .row.justify-content-center(titulo="IPv4z")
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              p.mb-4 El protocolo IPv4, fué el primero desde 1983, no existe versiones previas.
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Esta fué implementada para la producción de ARPARNET. 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Usa direcciones de 32 bits limitadas. 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Las direcciones disponibles en la reserva global de IANA pertenecientes al protocolo IPv4 se agotaron oficialmente el lunes 31 de enero de 2011, 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 A raíz de esta escasez nace IPv6.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/tema1/img13.png', alt='imagen que acompaña', style='width:500px').m-auto
                  
      .row.justify-content-center(titulo="IPv6")
        .col-lg-10
          .row.justify-content-center.align-items-center
            .col-lg-6.mb-4.mb-lg-0
              ul.lista-ul
                li 
                  i.fas.fa-angle-right
                  p.mb-0 La nueva versión del protocolo IP es de IPv6, también conocido como  IPng (Internet Protocol Next Generation). 
                li 
                  i.fas.fa-angle-right
                  p.mb-0 El IPv6 es una actualización al protocolo IPv4, diseñado para resolver el problema de agotamiento de direcciones.
                li 
                  i.fas.fa-angle-right
                  p.mb-0 Algunas de las principales ventajas son: autoconfiguración en la conexión a la red, asignación jerárquica de direcciones e incorporación de mecanismos de seguridad.
            .col-10.col-lg-6
              figure
                img(src='@/assets/curso/tema1/img14.png', alt='imagen que acompaña', style='width:500px').m-auto
                  

    h3.mb-4 Direcciones públicas y privadas

    p.mb-5 Existen dos tipos de direcciones IP, las privadas y las públicas. A continuación, se explicarán sus principales características:


    .row.justify-content-center.align-items-center.py-4.mb-5(data-aos="flip-up" style='background-color: #4DD0E1; border-radius: 30px;')
      .col-lg-7.mb-4.mb-lg-0
        h4.mb-3 IP Privadas
        p.mb-0 Las direcciones Ip privadas están dentro de un esquema local, más exactamente son las direcciones que asigna un router y estas direcciones en su conjunto hacen una red LAN, estas IP son asignadas por el router y lo hace de manera manual o automática por medio de un protocolo llamado DHCP, tienen la características de privadas porque son direcciones que no son visibles ante internet ya que estas permiten la navegación a través de un dispositivo que si tiene asignada una dirección pública que es vista por internet, estas direcciones están dispuestas en rangos así:
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/tema1/img15.svg', alt='imagen que acompaña', style='width:315px').m-auto
        

    .row.justify-content-center.align-items-center
      p.mb-4
        b Clase A: 10.0.0.0 a 10.255.255.255
      .col-lg-6.mb-4.mb-lg-0
        p.mb-0 Las direcciones Ip privadas están dentro de un esquema local, más exactamente son las direcciones que asigna un router y estas direcciones en su conjunto hacen una red LAN, estas IP son asignadas por el router y lo hace de manera manual o automática por medio de un protocolo llamado DHCP, tienen la características de privadas porque son direcciones que no son visibles ante internet ya que estas permiten la navegación a través de un dispositivo que si tiene asignada una dirección pública que es vista por internet, estas direcciones están dispuestas en rangos así:
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img16.png', alt='imagen que acompaña', style='').m-auto
    hr

    .row.justify-content-center.align-items-center
      p.mb-4
        b Clase B: 172.16.0.0 a 172.31.255.255
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Este rango clase B, es usado en redes de un tamaño medio, como entidades, organizaciones o universidades. Se puede crear un número más amplio de redes que el rango A, 16.384 redes, pero con una menor cantidad de equipos conectados a ellas, 65.534 dispositivos.
        p.mb-0 El rango está en 172.16.0.0 a 172.31.255.255; los dos primeros bloques identifican la red y los restantes a los equipos conectados a ella.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img17.png', alt='imagen que acompaña', style='').m-auto
    hr
      
    .row.justify-content-center.align-items-center
      p.mb-4
        b Clase C: 192.168.0.0 a 192.168.255.255
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Este rango clase C es el más usado y el que encontramos normalmente, se utiliza en las redes comunes. Permite tener muchas más redes, 2.097.152, pero conectando menos equipos a cada una de ellas, 254.
        p.mb-0 Este rango va C va desde 192.168.0.0 a 192.168.255.255; aquí son los tres primeros bloques los que identifican la red, mientras que el último identifica a los equipos.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema1/img18.png', alt='imagen que acompaña', style='').m-auto
    hr


    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-4.mb-4.mb-lg-0
        figure
          img(src='@/assets/curso/tema1/gif1.gif', alt='', style='').m-auto
          
      .col-lg-8
        p.mb-4 Estas direcciones independientemente de la clase deberían ser únicas dentro de una red de tal manera que no exista en la red local otro dispositivo con la misma dirección IP ya que si esto llegase a suceder generaría un conflicto de direcciones bloqueando a ambos dispositivos en la LAN.
        .p-4(style='background-color: #FFF5D6')
          p.mb-0 Las direcciones IP privadas pueden estar repetidas pero en diferentes redes, por ese motivo no habrá conflictos, ya que las redes están separadas, también podemos tener dos direcciones iguales pero en distintas ciudades.

    .row.justify-content-center.align-items-center.py-4.mb-5(data-aos="flip-up" style='background-color: #4DD0E1; border-radius: 30px;')
      .col-lg-7.mb-4.mb-lg-0
        h4.mb-3 IP Públicas
        p.mb-0 Una IP pública es la dirección que se le asigna directamente a un equipo que está expuesto directamente a internet, por ejemplo los router que instalan las empresas prestadoras de servicio de internet (ISP) o los servidores que alojan información para acceder de manera remota, servidores web, entre otros.
      .col-8.col-lg-3
        figure
          img(src='@/assets/curso/tema1/img19.svg', alt='imagen que acompaña', style='width: 294px').m-auto
        


    .row.fondo3.mb-5
      .col-lg-12.px-md-5
        .row.justify-content-center.mb-4
          .col-10.col-lg-5
            figure
              img(src='@/assets/curso/tema1/img20.svg', alt='imagen que acompaña', style='width: 490px').m-auto
          .col-lg-7
            p.mb-4 Estas direcciones públicas no se pueden repetir, son direcciones únicas a diferencia de las privadas. Son asignadas por los proveedores de Internet (ISP), también son conocidas como ip dinámicas ya que cambian cada vez que reiniciamos el router o cada período de tiempo, sin embargo también existe direcciones IP pública fija o estática, en caso que estas sean necesarias, para realizar este cambio de ip pública dinámica a estática es necesario contactar a nuestro proveedor para que lo realice.
            p.mb-4 Las direcciones IP públicas también tienen rangos y corresponden los que están excluidos de los rangos de las IP privadas, van desde 1. … hasta 191. …. De tal forma que el rango de la IP pública estará en:
                
            p.mb-2 Clase A: 1.0.0.0 a 126.255.255.255
            p.mb-2 Clase B: 128.0.0.0 a 191.255.255.255
            p.mb-4 Clase C: 192.0.0.0 a 223.255.255.255
            p.mb-0 Diferencian las direcciones de IP públicas y privadas.
            
        .row.justify-content-center.mb-5
          .col-lg-8
            .p-4(style="background-color: #FFFFFF")
              h5.mb-4 Principal diferencia entre: IP Pública y Privada es:
              h5.mb-4 IP pública: se accede desde internet.
              h5.mb-0 IP privada: no puede desde internet, accede a los dispositivos conectados al punto de enlace.
            
        .row.justify-content-center.mb-5.gx-0
          .col-lg-6.mb-4.mb-lg-0
            .px-4.py-4(style="background-color: #039BE5")
              p.mb-4.text-white Sin embargo, podemos decir que, entre IP privada y pública, ambas son necesarias para que los dispositivos puedan engancharse a internet. Para poder navegar por la red es necesario tener asignado una IP pública.
              p.mb-0.text-white Al ver una IP pública y una IP privada, se pueden diferenciar al ver su rango, cuando estos difieren de los asignados, normalmente por el router de la siguiente manera:
          .col-10.col-lg-6
            figure(data-aos='zoom-in')
              img(src='@/assets/curso/tema1/img21.jpg', alt='imagen que acompaña', style='').m-auto
            









</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>

<style lang="sass"></style>
