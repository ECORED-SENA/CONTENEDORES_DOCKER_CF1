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






    
    separador
    #t_1_2.titulo-segundo.color-acento-botones
      .h2 1.2 Topologías
    
    
    
    
    separador
    #t_1_3.titulo-segundo
      .h2 1.3 Estándares
    
    
    
    
    separador
    #t_1_4.titulo-segundo
      .h2 1.4 Direccionamiento IPV4, IPV6 








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
