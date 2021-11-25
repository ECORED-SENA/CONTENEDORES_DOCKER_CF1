<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-botones
      .titulo-principal__numero
        span 1
      h1 <em>Networking</em>
  

    #t_1_1.titulo-segundo.color-acento-botones
      .h2 1.1 Componentes de red
    
    
    
    
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
