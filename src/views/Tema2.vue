<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 2
      h1 Requerimientos
    
    #t_2_1.titulo-segundo.color-acento-botones
      .h2 2.1 Generalidades sobre requerimientos
    


    separador
    #t_2_2.titulo-segundo.color-acento-botones
      .h2 2.2 Requerimientos no funcionales



    separador
    #t_2_3.titulo-segundo.color-acento-botones
      .h2 2.3 Arquitectura de despliegue de aplicaciones y servicios


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
