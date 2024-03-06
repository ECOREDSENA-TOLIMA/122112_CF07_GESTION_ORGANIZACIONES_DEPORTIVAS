<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 4
      h1(data-aos="fade-left") Desarrollo del evento
    
    p.mb-5(data-aos="fade-right") En la fase de desarrollo del evento, lo más importante es coordinar. Esta fase consiste en la exitosa coordinación y ejecución de las actividades antes planeadas, las cuales se ejecutarán de acuerdo con el tiempo y lo planeado. Lo ideal en esta fase es mantener todo el tiempo el control, mientras estén en ejecución las actividades.

    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.mb-5(style="background-color: #FFCA00")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/img-1.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En el momento del desarrollo del evento, es muy importante la coordinación entre comités, actividades y recursos. Se debe realizar el respectivo control y seguimiento de estas actividades por parte de los responsables. Una vez puesto en marcha el evento, se debe mantener una retroalimentación constante en las fases iniciales, por ello, la planeación del evento debe ser flexible, de manera que, cuando se realice el control y se detecten desviaciones, se puedan subsanar a tiempo. Cuando ocurren este tipo de desviaciones, se debe hacer registro de ellas, para que, en la fase de evaluación, se analicen y se puedan aplicar los respectivos planes de mejora. 
    
    p.mb-5(data-aos="fade-right") Para lo anterior, se deben tener en cuenta los siguientes elementos: 

    .container-100.py-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/tema4/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left; background-size: contain"
    )
      .row.justify-content-center.mb-5
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          i Desarrollo del evento 
        figure.d-lg-flex.d-none(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img-2.svg' alt="En la figura 2 se muestran las actividades a realizar para el desarrollo de un evento, en donde se sigue un cronograma, se realiza una reunión, se ejecutan las actividades, se comunica, no se improvisa y se trabaja en equipo.")
        figure.d-lg-none.d-flex(data-aos="zoom-in")
          img(src='@/assets/curso/temas/tema4/img-3.svg' alt='En la figura 2 se muestran las actividades a realizar para el desarrollo de un evento, en donde se sigue un cronograma, se realiza una reunión, se ejecutan las actividades, se comunica, no se improvisa y se trabaja en equipo.')

    p.mb-5(data-aos="fade-right") Complementando el esquema de trabajo para ejecución del evento, en esta fase se tiene la siguiente secuencia:

    ul.lista-ul--separador
      li
      li.d-flex.justify-content-center.align-content-center
        p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
          i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
          | Planeación previa del evento.
        p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
          i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
          | Comités conformados.
        p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
          i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
          | Asignación y seguimiento de las tareas.
        p.mb-0.col.mx-auto.text-center(data-aos="fade-right")
          i.fas.fa-angle-right.pe-2(style="color: #FE502D; font-size: 20px")
          | Desarrollo del evento.
      li.mb-0
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
