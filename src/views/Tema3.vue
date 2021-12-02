<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 <em>Cloud computing</em>
    

    .row.justify-content-center.mb-4
      .col-9.col-lg-5
        figure
          img(src='@/assets/curso/tema3/img1.png', alt='', style='width: 500px;').m-auto
      .col-lg-7
        p.mb-4 La industria del <em>software</em> y en general todo lo relacionado a TI, ha tenido grandes avances respecto a metodologías de trabajo, herramientas tecnológicas y demás relacionado con la infraestructura necesaria para la construcción de productos y servicios. Sin embargo, una de las preocupaciones  al momento de construir y desplegar soluciones, radica en decidir qué tipo de arquitectura tecnológica es más conveniente adquirir, teniendo presente  las grandes velocidades con las que este tipo de elementos se vuelven obsoletos. 
        .cajon.color-primario.p-4
          p.mb-0 Este componente formativo  muestra las generalidades relacionadas con una forma de dar solución al problema del alistamiento tecnológico, el cual es muy usado actualmente en la industria: la computación en la nube.


    #t_3_1.titulo-segundo.color-acento-botones
      .h2 3.1 Computación en la nube
    


    span.etiqueta Es un servicio que se puede consumir por Internet y por medio del cual se pueden rentar  recursos computacionales como son: servidores, almacenamiento, procesadores o cualquier cosa que una computadora puede hacer.


    p.mb-4.mt-3 En el campo de la TI, el concepto de nube ya existía desde los años 90, sin embargo, solo  hasta el año 2006 fue cuando se popularizó el término con la aparición del servicio EC2 de Amazon (Elastic Compute Cloud), el cual es un servicio <em>web</em> que se puede alquilar pero con la característica que es escalable de acuerdo con las necesidades del usuario (AWS, 2021), es decir, un servidor que se puede modificar en almacenamiento, poder de procesamiento, red, sistema operativo, entre otras cosas.


    .row.fondo1.mb-5
      .col-lg-12.px-md-5
        .row.justify-content-center.mb-4
          .col-lg-10
            ImagenInfografica.color-acento-botones.mb-0
              template(v-slot:imagen)
                figure
                  img(src='@/assets/curso/tema3/infografia1.svg', alt='Componentes físicos', style='')
                  
                  
              .tarjeta.color-piel.p-3(x="17.5%" y="61%" numero="1")
                .h5.mb-2 Servicios de cómputo
                p.mb-4 Este  tipo de servicios da  soporte a la capa de procesamiento de las aplicaciones, es decir, el usuario determinará entre características como:  cantidades de núcleos de procesamiento y memoria requerida para el correcto  funcionamiento  de las aplicaciones y el proveedor del servicio se encarga de provisionar y mantenerlos disponibles para el usuario cuando se requiera.
                  
              .tarjeta.color-piel.p-3(x="29.5%" y="34%" numero="2")
                .h5.mb-2 Servicios de almacenamiento
                p.mb-4 Este tipo de servicios buscan garantizar la disponibilidad de la información en cualquier momento, va más  allá de brindar grandes cantidades de almacenamiento sino que además se establecen mecanismo, como por ejemplo la replicación en diferentes ubicaciones geográficas de forma que se pueda trabajar y acceder a los datos incluso en escenarios complejos dando gran tolerancia a fallas.
                  
              .tarjeta.color-piel.p-3(x="57%" y="54%" numero="3")
                .h5.mb-2 Servicios de red
                p.mb-4 Estos están orientados a la selección de herramientas que permiten controlar la comunicación entre los diferentes servicios y la gestión de la seguridad de los recursos.


    separador
    #t_3_2.titulo-segundo.color-acento-botones
      .h2 3.2 Tipos de servicios de computación en la nube
    


    .row.justify-content-center.fondo-cajon.mb-5
      .col-lg-12.py-4
        .row.justify-content-center.align-items-center(data-aos='flip-up')
          .col-auto
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema3/img2.svg', alt='imagen que acompaña', style='width: 200px').m-auto
              
          .col.col-lg-8
            .bloque-texto-b.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="font-size: 33px")
                p.mb-0 Es importante tener claridad sobre los tipos de servicio que se pueden ofrecer por medio de la computación en la nube, porque puede ayudar a tomar la decisión de migrar o no a este tipo de servicios o seguir trabajando con los mecanismos de aprovisionamiento tradicionales.
                i.fas.fa-quote-right(style="font-size: 33px")
              .bloque-texto-d__autor 
                p.mb-0 
                  b (Peña, 2021).

    p.mb-4 Entre las ventajas que se pueden destacar del cloud computing encontramos las siguientes:


    .row.justify-content.center.mb-5
      .col-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img3.svg')})`}" style="background-size: contain; background-position: center; background-repeat: no-repeat")
            .tarjeta-flip__contenido
              figure
                img(src='@/assets/curso/tema3/flip1.svg', alt='', style=';').m-auto
              //p No es necesario invertir en una gran infraestructura ni licencias que serán obsoletas con el paso del tiempo. Hay gran variedad de servicios que se pagan de forma mensual de acuerdo con el uso y que son acompañados muchas veces de otros servicios totalmente gratuitos,
              
      .col-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img4.svg')})`}" style="background-size: contain; background-position: center; background-repeat: no-repeat")
            .tarjeta-flip__contenido
              figure
                img(src='@/assets/curso/tema3/flip2.svg', alt='', style=';').m-auto
              //p Debido a que son plataformas basadas y pensadas para la <em>web</em>.
              
      .col-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img5.svg')})`}" style="background-size: contain; background-position: center; background-repeat: no-repeat")
            .tarjeta-flip__contenido
              figure
                img(src='@/assets/curso/tema3/flip3.svg', alt='', style=';').m-auto
              //p Permite reasignar recursos sin dejar de prestar los servicios existentes y facilitando los  procesos largos de compra. El proceso de aprovisionamiento de recursos dependiendo de la complejidad, puede realizarse en pocos minutos.
              
      .col-10.col-lg-3.mb-4.mb-xl-0
        .tarjeta.tarjeta-flip(@mouseover="indicadorTarjetaFlip = false")
          .indicador--hover(v-if="indicadorTarjetaFlip")
          .tarjeta-flip__contenedor
            .tarjeta-flip__img(:style="{'background-image': `url(${require('@/assets/curso/tema3/img6.svg')})`}" style="background-size: contain; background-position: center; background-repeat: no-repeat")
            .tarjeta-flip__contenido
              figure
                img(src='@/assets/curso/tema3/flip4.svg', alt='', style=';').m-auto
              //p En cualquier momento y desde cualquier lugar en que se cuente con una conexión a internet.
              

    p Algunos de los servicios de computación en la nube más conocidos mundialmente son: Amazon Web Services, Azure y Google Cloud Platform.


    //.row.justify-content-center.position-relative.mb-5
        
      .col-auto.col-lg-3.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema3/img3.svg", alt="alt", style='width: 250px')
            .flip-back.p-4             
              p.text-center No es necesario invertir en una gran infraestructura ni licencias que serán obsoletas con el paso del tiempo. Hay gran variedad de servicios que se pagan de forma mensual de acuerdo con el uso y que son acompañados muchas veces de otros servicios totalmente gratuitos
        
      .col-auto.col-lg-3.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema3/img4.svg", alt="alt", style='width: 250px')
            .flip-back.p-4             
              p.text-center Debido a que son plataformas basadas y pensadas para la web.
            
      .col-auto.col-lg-3.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema3/img5.svg", alt="alt", style='width: 250px')
            .flip-back.p-4             
              p.text-center Permite reasignar recursos sin dejar de prestar los servicios existentes y facilitando los  procesos largos de compra. El proceso de aprovisionamiento de recursos dependiendo de la complejidad, puede realizarse en pocos minutos.
            
      .col-auto.col-lg-3.mb-4.mb-lg-0
        .flip
          .flip-content
            .flip-front
              img(src="@/assets/curso/tema3/img6.svg", alt="alt", style='width: 250px')
            .flip-back.p-4             
              p.text-center En cualquier momento y desde cualquier lugar en que se cuente con una conexión a internet.
            



</template>

<script>
export default {
  name: 'Tema3',
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
