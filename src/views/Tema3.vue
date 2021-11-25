<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 3
      h1 <em>Cloud computing</em>
    



    #t_3_1.titulo-segundo.color-acento-botones
      .h2 3.1 Computación en la nube
    
    
    separador
    #t_3_2.titulo-segundo.color-acento-botones
      .h2 3.2 Tipos de servicios de computación en la nube
    
    


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
