<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Contingencia 
    
    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema6/img-1.png" style="max-width: 505px")
      .col-lg-7.ps-lg-4
        p.mb-0 La contingencia es una situación que podría acontecer en el futuro, con posibles consecuencias positivas o negativas, en este caso, para un evento. Se trata de una situación que, de llegar a materializarse, podría mejorar o empeorar el resultado del evento. La importancia de contar con un plan de contingencia no puede ser subestimada, pues este garantiza que se estará preparado ante los contratiempos que puedan ocurrir. Se deberán tener en cuenta los siguientes aspectos:
    
    AcordionA.mb-5(tipo="a" clase-tarjeta="tarjeta tarjeta--acordion-a")
      .row(titulo="Planificar")
        .d-flex.flex-wrap.mb-5
          .col-lg-7.pe-lg-4.mb-0
            p Identificar las posibles amenazas según el área de trabajo y las tareas asignadas, y construir las posibles soluciones. Esta planificación debe ir de la mano con el comité de seguridad; dentro de esta planeación, se encuentra prever y construir:
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Plan de primeros auxilios:</b> este está diseñado por el comité de seguridad, en cabeza del personal médico y de seguridad y salud.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Plan de emergencias y desastres:</b> de acuerdo con las normas que apliquen para los escenarios donde se desarrolle el evento.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Problemas técnicos:</b> esto hace referencia a los problemas asociados con las TIC.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Deserciones de invitados:</b> tener una lista en caso de una cancelación.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Público:</b> se debe contar con una estrategia de acuerdo con el tipo de evento, independientemente de si el evento es gratuito o con cobro para el ingreso, garantizando los aforos y lo requerido para la asistencia a los escenarios deportivos.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Alimentos y bebidas:</b> garantizar según la necesidad de abastecimiento.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Seguridad:</b> trabajar de la mano con las instituciones públicas encargadas de la seguridad, en todos los sentidos, y garantizar los apoyos y respuestas inmediatas.
          img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema6/img-2.png" style="max-width: 495px")

      .row(titulo="La cadena de mando")
        .d-flex.flex-wrap.mb-5
          .col-lg-7.pe-lg-4.mb-0
            p En caso de una emergencia, debe haber unas cabezas visibles, las cuales serán las encargadas de tomar las decisiones. Allí se establecen las responsabilidades individuales y de equipo, para tener un rápido accionar, evitando discusiones e inconvenientes en el momento.
          img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema6/img-3.png" style="max-width: 495px")
      
      .row(titulo="Plan de contingencia escrito")
        .d-flex.flex-wrap.mb-5
          .col-lg-7.pe-lg-4.mb-0
            p Debe estar descrito en un documento simple, que procure el entendimiento de todos. Se deben tener en cuenta los siguientes puntos:
            ul.lista-ul--separador
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Escenarios utilizados:</b> debe contener los planos y rutas de evacuación.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Plan de preparación:</b> donde describa las precauciones que se deben tomar.
              li.d-flex
                i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px")
                p.mb-0 <b>Protocolo de respuesta:</b> describir la esencia de cómo enfrentar la amenaza.
          img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema6/img-4.png" style="max-width: 495px")

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
