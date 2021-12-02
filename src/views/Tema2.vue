<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Requerimientos
    

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .fondito1.p-5
          p.mb-0 En esta unidad temática se estudiarán las generalidades que soportan la importancia de la realización de un alistamiento de infraestructura para el desarrollo de actividades en el marco del desarrollo y despliegue de <em>software</em> de acuerdo con el análisis de las necesidades particulares de los clientes. Además, presenta de manera muy simple diferentes tipos de configuraciones tradicionales de plataformas para el desarrollo e implementación de aplicaciones y servicios como lamp, wamp, xamp, wxcf, xatmj y wima.
      .col-lg-6
        figure
          img(src='@/assets/curso/tema2/gif1.gif', alt='', style='width: 380px;').m-auto

    p.mb-5 Desde la anterior perspectiva, se posibilitará trabajar en las generalidades de los requerimientos y sobre todo situándose en aquellos que no son funcionales en el proceso de desarrollo; posteriormente se abordará la arquitectura y el despliegue de aplicaciones y servicios que posibilitará conocer las necesidades de los clientes a partir de los requisitos no funcionales definidos.


    #t_2_1.titulo-segundo.color-acento-botones
      .h2 2.1 Generalidades sobre requerimientos
    
    .row.justify-content-center.align-items-center.mb-5
      .col-10.col-lg-6
        .row.justify-content-center
          .col-lg-10
            figure
              img(src='@/assets/curso/tema2/img1.svg', alt='', style='width: 460px;').m-auto
            
      .col-lg-6
        p.mb-4 El proceso de levantamiento de requerimientos es fundamental al momento de iniciar un proyecto de desarrollo de software, este permite identificar las características o funcionalidades que debe tener el <em>software</em> a construir o en algunos casos, también permite definir cuáles y de qué tipo de restricciones deben ser cubiertas por el equipo de desarrollo para que el producto sea recibido de manera satisfactoria por el cliente.
        .cajon.color-primario.p-4
          p.mb-0 Este proceso se hace a fin de que el equipo de trabajo pueda entender qué tipo de funcionalidades, complejidad, tiempos, herramientas y tecnologías podrían ser empleadas durante el proceso de construcción y posterior implementación de la solución, este es un proceso bastante crítico ya que si no se hace de manera correcta y exhaustiva, el desarrollo del proyecto puede no ser exitoso.


    .row.justify-content-start.mb-5
      .col-lg-7.mb-2
        .p-3(style='background-color: #FDF1CD;')
          p.mb-0 Según (Sommerville, 2011) los requerimientos se pueden clasificar en:

    .row.justify-content-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 2.
          span Requerimientos funcionales y no funcionales
            
        .tabla-a
          .tabla-b__header(style='background-color: #e8e8e8; color: #12263F !important; border-top: 4px solid #4DD0E1;')
              h5.mb-0(style='color: #12263F !important;') Requerimientos funcionales y no funcionales
          table
            
              tr
                td(style= "width: 30%") 
                  b Funcionales
                td Hace referencia a lo que espera el usuario que ofrezca el sistema a nivel de servicios, como, por ejemplo: registrar comentarios, hacer búsquedas por nombre, etc.
                  
              tr
                td 
                  b No funcionales
                td Hace referencia a las características y restricciones generales que debe satisfacer el sistema para poder ofrecer los servicios establecidos en los requisitos funcionales con ciertos niveles de calidad requeridos, por ejemplo: arquitectura del sistema, tiempos de respuesta, capacidad de carga, tolerancia a fallos, etc.
                  




    separador
    #t_2_2.titulo-segundo.color-acento-botones
      .h2 2.2 Requerimientos no funcionales


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-4.mb-lg-0
        figure(data-aos="flip-left")
          img(src='@/assets/curso/tema2/img2.png', alt='', style='width: 510px;').m-auto
      .col-lg-7
        p.mb-4 Estos no están relacionados de forma directa a funciones específicas del sistema, por esta razón algunos equipos de trabajo no le dedican el tiempo necesario para su definición. Sin embargo, son los requerimientos no funcionales los que se asocian a propiedades clave que determinan en buena parte la calidad de los productos y servicios desarrollados, como por ejemplo: la fiabilidad, los tiempos de respuesta a operaciones, la capacidad de almacenamiento, entre otras.
        .row.justify-content-center
          .col-lg-12.fondo-destacado
            .bloque-texto-b.p-4
              .bloque-texto-b__texto
                i.fas.fa-quote-left(style="font-size: 33px")
                p.mb-0 Los requerimientos no funcionales deben surgir de las necesidades del usuario y el problema particular que se intenta resolver, e involucran temas presupuestales, políticas de la organización, posible interoperabilidad con otros sistemas de <em>software</em> o <em>hardware</em>, además diferentes tipos de políticas como: la privacidad, la seguridad, políticas ambientales, de manejo de datos, entre otras; por lo anterior, algunas veces resolver este tipo de requerimientos puede ser más crítico que los mismos requerimientos funcionales. 
                i.fas.fa-quote-right(style="font-size: 33px")
              .bloque-texto-d__autor 
                p.mb-0 
                  b (Sommerville, 2011).


    .row.justify-content-center.fondo-unicolor.mb-0
      .col-lg-12.px-md-5.pt-4
        .row.justify-content-center.mb-5
          p.mb-0 En la figura se presentan los diferentes tipos de requerimientos funcionales según (Sommerville, 2011)
            
        .row.justify-content-center.mb-5
          .col-lg-11
            .h4.text-center.mb-4 Clasificación de requerimientos no funcionales
              
            figure
              img(src='@/assets/curso/tema2/conceptual1.svg', alt='', style='').m-auto


    .row.justify-content-center.fondo-caption.mb-5
      .col-lg-12.px-md-5.py-3
        .row.justify-content-center.mb-0
          .col-lg-12
            p.mb-0 Fuente: (Sommerville, 2011).

    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        p.mb-4 Los requerimientos de producto incluyen los requerimientos de eficiencia, de usabilidad, de fiabilidad y de portabilidad. Un ejemplo de un requerimiento no funcional de producto podría ser que el producto sea desarrollado en HTML5 sin el applet de Java ni Ajax, esto con el ánimo de garantizar que sea compatible con la mayoría de los navegadores en el mercado actual.
        p.mb-4 Los requerimientos organizacionales provienen directamente de las características de la organización objetivo para el producto o servicio de <em>software</em> a desarrollar, como por ejemplo: estándares en los procesos, requerimientos de implementación como lenguajes específicos de programación, metodologías de diseño, tiempos de entrega y/o documentación requerida por la organización.
        .row.justify-content-center
          .col-11.col-lg-11
              figure(data-aos="flip-right")
                img(src='@/assets/curso/tema2/img3.png', alt='imagen que acompaña', style='width: 512px').m-auto
      .col-lg-6.mb-0.mb-lg-0
        .row.justify-content-center.mb-4.order-2.order-lg-1
          .col-11.col-lg-11
              figure(data-aos="flip-left")
                img(src='@/assets/curso/tema2/img4.png', alt='imagen que acompaña', style='width: 512px').m-auto
        .row.order-1.order-lg-2
        p.mb-0 En los requerimientos externos se clasifican todos aquellos requerimientos no funcionales adicionales que no corresponden específicamente al producto, su proceso de desarrollo o a la organización. Entre este tipo de requerimientos están los relacionados con interoperabilidad con otros sistemas <em>software</em> o <em>hardware</em> de la empresa o terceros, lo relacionado con políticas y normativas gubernamentales o leyes, y los de tipo ético que se relacionan directamente con el público objetivo. Un ejemplo de este tipo de requerimientos puede ser que debido a la política de protección de datos no se deben mostrar los datos personales de ninguna persona en los informes generados o por ejemplo que el sistema sea compatible con los servicios de búsqueda de la Registraduría Nacional para el proceso de verificación de documentos en el registro.
        


    .row.justify-content-center.fondo-cajon.mb-5
      .col-lg-12.py-4
        .row.justify-content-center.align-items-center(data-aos='flip-up')
          .col-auto
            figure(data-aos="flip-left")
              img(src='@/assets/curso/tema2/img5.svg', alt='imagen que acompaña', style='width: 178px').m-auto
              
          .col.col-lg-8
            p.mb-0 Se recomienda especificar los requerimientos no funcionales de forma cuantitativa o al menos que exista la definición de algunos criterios de aceptación, que facilite la verificación de su cumplimiento. Normalmente los requerimientos no funcionales se especifican en el mismo documento de requerimientos, pero en una sección diferente a los requerimientos funcionales.


    p.mb-4 Existen dos corrientes para la documentación de requerimientos, independientemente de la corriente se recomienda utilizar la estructura de la siguiente tabla para la documentación de requerimientos no funcionales. Sin embargo, se puede realizar los ajustes y modificaciones que se considere enriquecen el proceso.


    .row.justify-content-center.mb-5
      .col-lg-12
        .titulo-sexto.color-acento-contenido
          h5 Tabla 3.
          span Propuesta para especificación de requisitos no funcionales.
            
        .tabla-a.color-primario.mb-0
          table
            thead
              tr
                th(style='width:30%') Nombre del requerimiento 
                th [Nombre del requerimiento]
            tbody
              tr
                td
                  b Identificador
                td [Identificador del requerimiento] 
              tr
                td
                  b Descripción
                td [Describa la solicitud realizada por el cliente] 
              tr
                td
                  b Propósito
                td Escriba la finalidad del requerimiento]
              tr
                td
                  b Forma de verificación
                td [Escriba como se puede realizar la verificación de que el requerimiento fue alcanzado con éxito, en lo posible utilizar medidas cuantitativas]



    separador
    #t_2_3.titulo-segundo.color-acento-botones
      .h2 2.3 Arquitectura de despliegue de aplicaciones y servicios


    .row.justify-content-center.mb-5
      .col-lg-6
        p.mb-4 En el desarrollo de aplicaciones, es necesario tener claridad sobre la pertinencia de cada herramienta de desarrollo según el proyecto, ya que el uso o no de una herramienta tiene costos asociados que pueden impactar el alcance y recursos del proyecto. Por ello, es importante analizar los diferentes tipos de licencias pagadas y libres a nivel de sistemas operativos, lo mismo aplica con herramientas usadas para el desarrollo de un producto como IDE, sistemas gestores de bases de datos, herramientas para la ejecución de pruebas, entre otros. Por lo anterior es importante hacer un balance y un análisis serio sobre las mejores opciones de acuerdo con las necesidades de los clientes y teniendo en cuenta los requisitos no funcionales definidos.
        .cajon.color-primario.p-4
          p.mb-0 Por esta razón, es importante elegir las herramientas que harán parte de la arquitectura tecnológica definida para el desarrollo y posterior despliegue e implementación de la solución tecnológica construida de acuerdo con el tipo de proyecto y tipo de cliente para el cual se pretende desarrollar el proyecto. 
      .col-10.col-lg-6
        figure
          img(src='@/assets/curso/tema2/gif2.gif', alt='', style='width: 600px;').m-auto


    .row.fondo2.mb-5
      .col-lg-12.px-md-5.pt-5
        .row.mb-5
          .col-auto
            .p-4.py-2(style='background-color: #C7F2F7;')
              h3.mb-0 Componentes de una arquitectura de <em>software</em>
              
        .row.justify-content-center.mb-4
          p.mb-0 Toda arquitectura definida en el proceso de construcción de un <em>software</em> debe incluir una serie de elementos o componentes, que en su conjunto definen la estructura o línea de trabajo entre todos los miembros del equipo de desarrollo. A continuación, se definirá de manera general los componentes que deben de seleccionarse o definirse para el inicio de un proyecto, la definición de los componentes dependerá del tipo de proyecto que se desea construir, por ejemplo, no es lo mismo desarrollar una aplicación <em>web</em> que una aplicación móvil. Para realizar lo anterior, se debe tener en cuenta: 
          
        .row.justify-content-center.mb-5
          .col-10.col-lg-6.mb-4.mb-lg-0
            figure
              img(src='@/assets/curso/tema2/img6.svg', alt='', style='width: 400px;').m-auto
          .col-lg-6
            .p-4(style='background-color: #FFF5D6;')
              ul.lista-ul
                li 
                  .fas.fa-circle.pe-2
                  p.mb-0 Clientes y servidores: examinar qué servicios son requeridos en el servidor como servidores <em>web</em>, DNS, FTP, entre otros y de igual manera a las aplicaciones de tipo cliente que son necesarias para acceder a estos servicios.
              .row.justify-content-center
                .col-lg-8
                  ul.lista-ul
                    li 
                      i.fas.fa-circle
                      p.mb-0 Bases de datos.
                    li 
                      i.fas.fa-circle
                      p.mb-0 Sistemas Operativos.
                    li 
                      i.fas.fa-circle
                      p.mb-0 Lenguajes de programación
                    li 
                      i.fas.fa-circle
                      p.mb-0 Niveles en sistemas jerárquicos.
            
        .row.justify-content-center.mb-5
          .col-lg-6.mb-4.mb-lg-0
            p.mb-4 En términos generales, la arquitectura de desarrollo define los componentes del <em>software</em>, su función e interacción con otros componentes de <em>software</em> y <em>hardware</em>. La selección o escogencia de estos componentes es lo que nos lleva a construir lo que se llevará a una plataforma de desarrollo, la cual nos brinda un entorno de <em>software</em> común, en el que el equipo de desarrollo realizará las actividades necesarias para la construcción del producto de <em>software</em>. Adicionalmente, la plataforma es la base para la integración de los elementos <em>software</em> y <em>hardware</em> que permiten el funcionamiento del sistema en entornos productivos, una vez que se realizan los respectivos procesos de despliegue, por lo cual es importante que la arquitectura del <em>software</em> sea definida desde el inicio del proyecto.
          .col-10.col-lg-6
            figure
              img(src='@/assets/curso/tema2/img7.svg', alt='', style='width: 600px;').m-auto


    .row.justify-content-center.mb-5
      .col-lg-6.mb-4.mb-lg-0
        .row.mb-4
          .col-lg-10
            .p-4.py-2(style='background-color: #C7F2F7;')
              h3.mb-0 Máquinas virtuales
        p.mb-4 Las máquinas virtuales son un sistema operativo completo funcionando de manera aislada dentro de otro sistema operativo anfitrión (Alarcón, 2018). De igual manera, debe existir un componente de infraestructura de tipo <em>hardware</em> que soporte todo lo anterior, que en últimas es el servidor o equipo donde se hace el desarrollo y creación de la máquina virtual o si se trata del despliegue y puesta en producción final de la aplicación, puede referirse a un proveedor que suministra el <em>hardware</em> necesario que soportará la máquina virtual como Azure, Google Cloud, AWS, Digital Ocean, entre otras.
      .col-10.col-lg-6
        .row
          .col-lg-10
            figure
              img(src='@/assets/curso/tema2/img8.png', alt='', style='width: 500px;').m-auto


    .row.justify-content-center.mb-0
      .col-lg-10
        h4.mb-4.text-center Funcionamiento de una máquina virtual
          
        figure
          img(src='@/assets/curso/tema2/img9.svg', alt='', style='').m-auto
    .row.justify-content-center.fondo-caption.mb-0
      .col-lg-12.px-md-5.py-3
        .row.justify-content-center.mb-0
          .col-lg-12
            h6.mb-0 Fuente: (Alarcón, 2018).




</template>

<script>
export default {
  name: 'Tema2',
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
