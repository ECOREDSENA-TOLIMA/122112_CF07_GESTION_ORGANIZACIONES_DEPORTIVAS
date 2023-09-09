<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Asignación de actividades
    
    .d-flex.flex-wrap.mb-5
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-1.png" style="max-width: 505px")
      p.col-lg-7.ps-lg-4.mb-0.pt-lg-4 La planificación del evento es fundamental a la hora de asignar las actividades, las cuales deben mantener un cronograma y una secuencia de acuerdo con las necesidades y particularidades del evento. En este sentido, hay unas tareas que no se pueden desarrollar sin que otras se realicen previamente; se deben tener en cuenta además los recursos necesarios y la duración de la tarea. A partir de lo anterior, se realiza la asignación de las actividades:

    .d-flex.flex-wrap
      .col-lg-8.pe-lg-4.mb-0
        p Para que estas actividades cumplan su objetivo y en los tiempos fijados para su realización, se deben asignar tareas teniendo en cuenta:
        ul.lista-ul--separador
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
            | Las capacidades de las personas.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
            | Las actividades deben estar enmarcadas en uno de los comités.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
            | Cumplimiento del objetivo.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
            | Sus responsables.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
            | Coordinador por comité para supervisar el correcto funcionamiento.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema2/img-2.png" style="max-width: 400px")

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema2/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left; background-size: contain"
    )
      ImagenInfografica.col-xl-8.mx-auto.color-secundario
        template(v-slot:imagen)
          figure
            img(src='@/assets/curso/temas/tema2/img-3.svg' alt='Texto que describa la imagen')

        .tarjeta.p-3(x="10.5%" y="64%" numero="+" style="background-color: #F6F6F6")
          .h5.mb-2 Definir actividades a desarrollar
          p.mb-0 Depende de la planificación realizada previamente a partir de la conformación de los comités.
        .tarjeta.p-3(x="36%" y="64%" numero="+" style="background-color: #F6F6F6")
          .h5.mb-2 Estimar los recursos necesarios para las actividades
          p.mb-0 Económicos, talento humano y materiales requeridos para llevar a cabo esa tarea, estableciendo los responsables y cuáles serían los costos.
        .tarjeta.p-3(x="61.5%" y="64%" numero="+" style="background-color: #F6F6F6")
          .h5.mb-2 Secuencia y duración de las actividades
          p.mb-0 Depende de cómo se planearon las tareas, cuáles son las principales y cuáles son las secundarias, el orden en que se van a ejecutar.
        .tarjeta.p-3(x="87%" y="64%" numero="+" style="background-color: #F6F6F6")
          .h5.mb-2 Asignación de actividades
          p.mb-0 Teniendo la experiencia previa de a quién se le asigna la tarea y las características de la personalidad.

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
