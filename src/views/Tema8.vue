<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 8
      h1(data-aos="fade-left") Evaluación por parte de los participantes
    
    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.mb-5(style="background-color: #FFCA00")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 La evaluación de los participantes hace parte de la fase de evaluación y mejora continua, la cual procura realizar una valoración de los servicios prestados a través del evento, así como tener la percepción de los participantes y asistentes al evento. Esta fase de evaluación es la última del evento e incluye la evaluación que realizan los participantes. La forma en que se entiende la calidad ha variado con el paso del tiempo, ha tomado gran relevancia el criterio del consumidor, de allí parte la importancia de conocer la valoración que tienen los participantes del evento.
    
    p.mb-5(data-aos="fade-right") Uno de los instrumentos más utilizados para realizar las evaluaciones por parte de los participantes son las encuestas de satisfacción o retroalimentación; para ello, se pueden tener en cuenta las siguientes recomendaciones:

    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema7/img-3.png" style="max-width: 400px" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        ul.lista-ul--separador
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Realizar la encuesta cuando ya haya terminado el evento, máximo un día después.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Utilizar herramientas ofimáticas para realizar las encuestas, ya que permitirán una mejor recolección de la información y facilitarán la tabulación de la misma.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Tener en cuenta, al realizar la encuesta, agradecer de antemano la realización de la misma, tener una escala de valor, evaluar el evento en general y luego dividir en diferentes subcategorías, como escenarios, alimentación, horarios, transporte, servicio, eventos, programación; preguntar si volvería a participar del mismo y, por último, dejar un espacio para los comentarios u observaciones. Se puede apoyar en varios sitios de Internet para el uso de plantillas adaptables a todo tipo de eventos.
          li.d-flex
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            p.mb-0 Crear una base de datos, teniendo en cuenta el uso adecuado de la información de acuerdo con la normativa.
    p.mb-5(data-aos="fade-left") Las encuestas son herramientas útiles y versátiles, que se utilizan para medir los resultados, en este caso, de un evento y el impacto que generó en los participantes; a través de estas, se obtienen parámetros para mejorar en la realización de próximos eventos. Estos son ejemplos de algunas preguntas, según el portal Encuestas.com (2020), que se pueden aplicar:

    .d-flex.flex-wrap
      .col-lg-6
        .card-decoration.card-decoration-left.color_amarillo(data-aos="fade-left")
          .decorador-card-2
          .decorador-card
          .container-info
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-1.svg" style="max-width: 63px; margin-left: -15px")
            p.mb-0.col.px-3.ps-0.ps-md-3 Valora del 1 al 5 cada uno de estos aspectos de la organización del evento: instalaciones del evento, organización, información, ponentes
            span.number_card 01
        
        .card-decoration.card-decoration-left.color_azul(data-aos="fade-left")
          .decorador-card-2
          .decorador-card
          .container-info
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-2.svg" style="max-width: 63px; margin-left: -15px")
            p.mb-0.col.px-3.ps-0.ps-md-3 ¿Qué es lo que menos te ha gustado del evento?
            span.number_card 02
        
        .card-decoration.card-decoration-left.color_naranja(data-aos="fade-left")
          .decorador-card-2
          .decorador-card
          .container-info
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-3.svg" style="max-width: 63px; margin-left: -15px")
            p.mb-0.col.px-3.ps-0.ps-md-3 Del 0 al 10, donde 0 es muy improbable y 10 es muy probable, ¿recomendarías este evento a un amigo?
            span.number_card 03
        
        .card-decoration.card-decoration-left.color_amarillo(data-aos="fade-left")
          .decorador-card-2
          .decorador-card
          .container-info
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-4.svg" style="max-width: 63px; margin-left: -15px")
            p.mb-0.col.px-3.ps-0.ps-md-3 ¿Cómo calificarías este evento? (Ofrecer varias opciones de respuesta: Excelente, Muy bueno, Bueno, Normal o Malo)
            span.number_card 04
        
        .card-decoration.card-decoration-left.color_azul(data-aos="fade-left")
          .decorador-card-2
          .decorador-card
          .container-info
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-5.svg" style="max-width: 63px; margin-left: -15px")
            p.mb-0.col.px-3.ps-0.ps-md-3 ¿Qué es lo que más te ha gustado del evento?
            span.number_card 05

      .col-lg-6
        .card-decoration.card-decoration-right.color_naranja(data-aos="fade-right")
          .container-info
            span.number_card 06
            p.mb-0.col.px-3.pe-0.pe-md-3 ¿Qué opinas de la organización del evento?
              br
              |(Ofrecer diferentes respuestas: Muy bien organizado, Bien organizado, Organizado, No muy bien organizado, Un desastre)
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-6.svg" style="max-width: 63px; margin-right: -15px")
          .decorador-card
          .decorador-card-2

        .card-decoration.card-decoration-right.color_amarillo(data-aos="fade-right")
          .container-info
            span.number_card 07
            p.mb-0.col.px-3.pe-0.pe-md-3 ¿Qué opinas del trabajo realizado por el servicio de orientación e información?
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-7.svg" style="max-width: 63px; margin-right: -15px")
          .decorador-card
          .decorador-card-2
        
        .card-decoration.card-decoration-right.color_azul(data-aos="fade-right")
          .container-info
            span.number_card 08
            p.mb-0.col.px-3.pe-0.pe-md-3 Del 0 al 10, donde 0 es muy poco satisfecho y 10 es muy satisfecho, ¿cómo de satisfecho estás con nuestro servicio de atención al cliente?
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-8.svg" style="max-width: 63px; margin-right: -15px")
          .decorador-card
          .decorador-card-2
        
        .card-decoration.card-decoration-right.color_naranja(data-aos="fade-right")
          .container-info
            span.number_card 09
            p.mb-0.col.px-3.pe-0.pe-md-3 Del 0 al 10, donde 0 es nada y 10 mucho, ¿fue de utilidad nuestro equipo para resolver tus dudas?
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-9.svg" style="max-width: 63px; margin-right: -15px")
          .decorador-card
          .decorador-card-2

        .card-decoration.card-decoration-right.color_amarillo(data-aos="fade-right")
          .container-info
            span.number_card 10
            p.mb-0.col.px-3.pe-0.pe-md-3 ¿Qué crees que puede mejorar en el próximo evento? (Ofrecer varias respuestas: Horarios, Precios de la entrada, Calidad del evento, Servicios del recinto, Ponentes, Promoción)
            img.d-none.d-md-flex(src="@/assets/curso/temas/tema8/decorador-10.svg" style="max-width: 63px; margin-right: -15px")
          .decorador-card
          .decorador-card-2
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

<style lang="sass">
.card-decoration
  display: flex
  align-items: center
  position: relative
  padding: 1rem
  margin-bottom: 2.5rem
  &::after
    content: ''
    position: absolute
    top: 0
    width: 50%
    height: 100%
  &::before
    content: ''
    position: absolute
    top: 0
    border-top: 96px solid transparent
    border-bottom: 96px solid transparent
  .decorador-card
    position: relative
    z-index: 1
    width: 0
    height: 100%
    background: transparent
    border-top: 80px solid transparent
    border-bottom: 80px solid transparent
    filter: drop-shadow(0 0 3px #00000010)
  .decorador-card-2
    position: absolute
    top: 0
    border-top: 96px solid transparent
    border-bottom: 96px solid transparent
  .container-info
    width: 100%
    position: relative
    background-color: white
    z-index: 3
    height: 160px
    display: flex
    align-items: center
    justify-content: space-between
    .number_card
      font-size: 32px
      font-weight: 900
  &-right
    &::after
      right: 58px
    &::before
      right: calc( 50% +  58px)
      border-right: 50px solid gray
    .decorador-card
      border-left: 50px solid white
    .decorador-card-2
      right: 0
      border-left: 59px solid red
    .container-info
      width: 100%
      text-align: end
      padding-left: 1.5rem
      box-shadow: -3px 2px 3px #00000010
    &.color_naranja
      &::after
        background-color: #FE502D
      &::before
        border-right: 50px solid #FE502D
      .decorador-card-2
        border-left: 59px solid #FE502D
    &.color_amarillo
      &::after
        background-color: #FFCA00
      &::before
        border-right: 50px solid #FFCA00
      .decorador-card-2
        border-left: 59px solid #FFCA00
    &.color_azul
      &::after
        background-color: #2D54FE
      &::before
        border-right: 50px solid #2D54FE
      .decorador-card-2
        border-left: 59px solid #2D54FE
  &-left
    &::after
      left: 58px
    &::before
      left: calc( 50% +  58px)
      border-left: 50px solid red
    .decorador-card
      border-right: 50px solid white
    .decorador-card-2
      left: 0
      border-right: 59px solid red
    .container-info
      padding-right: 1.5rem
      box-shadow: 3px 2px 3px #00000010
    &.color_naranja
      &::after
        background-color: #FE502D
      &::before
        border-left: 50px solid #FE502D
      .decorador-card-2
        border-right: 59px solid #FE502D
    &.color_amarillo
      &::after
        background-color: #FFCA00
      &::before
        border-left: 50px solid #FFCA00
      .decorador-card-2
        border-right: 59px solid #FFCA00
    &.color_azul
      &::after
        background-color: #2D54FE
      &::before
        border-left: 50px solid #2D54FE
      .decorador-card-2
        border-right: 59px solid #2D54FE
  @media (max-width: 991px)
    &-left
      .container-info
        padding-right: 1rem
        font-size: 14px
    &-right
      .container-info
        padding-left: 1rem
        font-size: 14px
  @media (max-width: 500px)
    .container-info
      overflow: hidden
      height: 200px
      .number_card
        font-size: 26px
    .decorador-card
      border-top: 100px solid transparent
      border-bottom: 100px solid transparent
    .decorador-card-2
      border-top: 116px solid transparent
      border-bottom: 116px solid transparent
    &::before
      border-top: 116px solid transparent
      border-bottom: 116px solid transparent
</style>
