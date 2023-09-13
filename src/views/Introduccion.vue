<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span
          i.fas.fa-info
      h1(data-aos="fade-left") Introducción
    
    p.mb-5(data-aos="fade-right") Estimado aprendiz, a través del siguiente video, podrá conocer los aspectos relevantes que abordará este componente:

    figure.col-xl-10.mx-auto.mb-5(data-aos="fade-left")
      .video
        iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
    p.mb-5(data-aos="fade-right") Para la elaboración de este componente, se abordaron varios autores conocidos que han escrito sobre ejecución de eventos deportivos, de quienes se han citado y referenciado conceptos y ejemplos con fines educativos, en el entendido de que el conocimiento es social y, por lo tanto, es para ser usado por quienes necesitan adquirirlo. Se espera que este documento sea útil para todos aquellos, aprendices y lectores en general, que estén interesados en acercarse a asuntos básicos de gestión de las organizaciones deportivas.

    h3.mb-5(data-aos="fade-right") Ejecución del evento

    .container-100.pb-5(
      :style="{'background-image': `url(${require('@/assets/curso/temas/bg-1.svg')})`}"
      style="background-repeat: no-repeat; background-position: left;"
    )
      .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.mb-5(style="background-color: #D3D3D3")
        .bloque-texto-g__img(
          :style="{'background-image': `url(${require('@/assets/curso/temas/img-1.jpg')})`}"
          style="background-repeat: no-repeat; background-position: right;"
        )
        .bloque-texto-g__texto.p-4(data-aos="fade-left")
          p.mb-0 La ejecución del evento comprende específicamente las actividades correspondientes a la producción del evento, propiamente dicho; en esta fase, están implícitas las tareas que se planificaron en etapas anteriores y que se requiere realizar. Una de sus tareas principales es coordinar el equipo de trabajo para que las actividades se desarrollen de forma correcta y exitosa durante la ejecución del evento. Aquí se ponen en marcha los distintos servicios, la infraestructura necesaria, además del recurso humano, económico y tecnológico.

      img.mx-auto(src="@/assets/curso/temas/img-2.svg" style="max-width: 766px" data-aos="fade-left")


    p.mb-0(data-aos="fade-right") Para la ejecución del evento, se considera muy importante la coordinación de tareas, actividades y recursos, realizar el seguimiento y control correspondiente a través de los responsables asignados, cuando se ponen en marcha el evento.


</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
