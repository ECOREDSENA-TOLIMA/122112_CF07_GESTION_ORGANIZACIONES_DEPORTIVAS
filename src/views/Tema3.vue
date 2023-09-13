<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 3
      h1(data-aos="fade-left") Verificación de tareas asignadas 
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-1.png" style="max-width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        p(data-aos="fade-left") Cuando se organiza un evento, se deben tener claras las actividades que desarrollará cada comité y, por supuesto, realizar la verificación del cumplimiento de estas tareas, teniendo en cuenta el nivel de importancia y los tiempos asignados para ellas. Los coordinadores o supervisores de cada uno de los comités son los encargados de realizar la verificación de las tareas asignadas.
        .cajon.color-primario.p-4(style="background-color: #E0F4FE" data-aos="fade-right")
          p La supervisión y verificación de las tareas en un evento son de vital importancia para el éxito del mismo. Esta verificación puede llevarse a cabo a lo largo del desarrollo del evento, para solucionar las disfunciones que se estén presentando o los inconvenientes que ya venían de etapas anteriores.
    p.mb-5(data-aos="fade-right") Existen diferentes formas de realizar la verificación de las tareas asignadas. Se deben tener en cuenta los siguientes puntos: observación directa, listas de chequeo y <em>softwares</em> especializados.

    .row.justify-content-center.mb-5
      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-2.png", alt="imagen decorativa")
          .crd_hover_txt--body(style="background-color: #2D54FE")
            h4.mb-3.text-center.texto-blanco Observación directa
            p.mb-0.texto-blanco Verificación del desarrollo de las tareas. El coordinador o supervisor debe ir directamente a donde se requiera, para verificar a través de la observación y una lista de chequeo.

      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-3.png", alt="imagen decorativa")
          .crd_hover_txt--body(style="background-color: #FFCA00")
            h4.mb-3.text-center Lista de chequeo
            p.mb-0 Elaborar una lista de chequeo con cada una de las actividades, según el comité, en orden de importancia y tiempo, con el objetivo propuesto, todo lo cual permitirá la verificación de cada una de ellas.

      .col-xl-4.col-md-6.col-11.mb-4.mb-xl-0
        .crd_hover_txt(data-aos="flip-left")
          .crd_hover_txt--img
            figure
              img(src="@/assets/curso/temas/tema3/img-4.png", alt="imagen decorativa")
          .crd_hover_txt--body(style="background-color: #FE502D")
            h4.mb-3.text-center <em>Softwares</em> especializados
            p.mb-0 Son herramientas especializadas para la gestión de eventos, incluso la gestión de eventos deportivos, mediante las cuales se podrá hacer seguimiento, en detalle, de las tareas asignadas a cada comisión; además, permiten una comunicación fluida y permanente.
    p.mb-5(data-aos="fade-right") Es importante, después de realizar la verificación, tener un instrumento de soporte, como una lista de chequeo, y elaborar un informe del mismo, para garantizar que el seguimiento a las tareas ha sido realizado. Los supervisores y coordinadores de los comités deben tener en cuenta los siguientes aspectos para realizar la verificación de tareas:

    .d-flex.flex-wrap
      .col-lg-8.pe-lg-4.mb-0
        p(data-aos="fade-right") Para que estas actividades cumplan su objetivo y en los tiempos fijados para su realización, se deben asignar tareas teniendo en cuenta:
        ul.lista-ul--separador
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Conocer de antemano las tareas y la dependencia entre tareas.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Saber asignar los recursos a las tareas.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Controlar la evolución del proyecto.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Evaluar los compromisos que puedan aparecer.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Tomar decisiones.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Trabajar en equipo y comunicación permanente y asertiva.
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema3/img-5.png" style="max-width: 400px" data-aos="fade-left")
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
