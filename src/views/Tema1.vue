<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Comités y responsabilidades
    
    p.mb-5 Para el desarrollo del evento, las organizaciones normalmente se estructuran a través de grupos de trabajo llamados comités, esto facilita alcanzar los objetivos específicos, al delegar la funciones y responsabilidades en diferentes comités; contribuye a un mejor proceso de planeación; y además permite que el desarrollo del evento sea más fluido y con una capacidad de respuesta más oportuna.
    
    .bloque-texto-g.bloque-texto-g--inverso.p-3.p-sm-4.mb-5(style="background-color: #FE502D")
      .bloque-texto-g__img(
        :style="{'background-image': `url(${require('@/assets/curso/temas/tema1/img-1.jpg')})`}"
        style="background-repeat: no-repeat; background-position: right;"
      )
      .bloque-texto-g__texto.p-4(data-aos="fade-left")
        p.mb-0 En los comités, se recogen todas las funciones del evento. Al frente de cada uno, existe un responsable, y detrás de este, un recurso humano con diferentes tareas a realizar, según se requiera. Es por ello que cada comité debe disponer de un organigrama, con un plan de necesidades, un presupuesto y un plan de coordinación. Cada evento requiere una organización según sea su necesidad. Si es un evento de grandes magnitudes o un evento pequeño, dependiendo del lugar, del clima, de la población, entre otros, de acuerdo con sus características, se organizarán los comités y las responsabilidades.

    p.mb-5 Teniendo en cuenta lo anterior, se desarrollarán seis áreas o comités donde se centrarían las operaciones del evento, que serían: marketing y comunicaciones, protocolo, técnico-deportiva, logística, económica y administrativa y seguridad. Cada comité es posible que funcione desde el inicio hasta el final del evento, lo que implicaría que unos comités cuenten con más personal y presupuesto; esto está determinado también por el volumen de tareas asignadas.

    TabsB.color-primario
      .py-4.py-md-5(titulo="Comité de <em>marketing</em> y<br> comunicaciones" :icono="require('@/assets/curso/temas/tema1/t-1.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Tiene como tarea principal la venta del evento en diferentes mercados, por tanto, diseña la estrategia de mercado, también diseña la publicidad, como logotipos, emblemas, trofeos, uniformes obsequios; realiza la segmentación del mercado; también se encarga de diseñar la estrategia de promoción en diferentes medios de comunicación, el reconocimiento de marca, etc. Está encargado de diseñar la estrategia de comunicación, tanto interna como externa; brinda soporte técnico según se requiera, diseña estrategias de búsqueda de patrocinios, elabora comunicados de prensa, gestiona las redes sociales y los medios de comunicación, se encarga de las publicaciones, escarapelas y la taquilla.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-2.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Comité de<br> protocolo" :icono="require('@/assets/curso/temas/tema1/t-2.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Se encarga del diseño y ornamentación del protocolo: etiqueta, banderas, himnos, ceremonias, llegadas, presentaciones, actos oficiales, actos de apertura y cierre del evento; también se encarga de realizar el calendario de ceremonias, realiza traducciones, y se encarga de la relación con los invitados especiales, invitaciones, transporte, hoteles, recepciones, discursos, etc.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-3.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Comité<br> técnico-deportivo" :icono="require('@/assets/curso/temas/tema1/t-3.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Encargado de lo correspondiente al área de las competiciones deportivas; decide las actuaciones en el desarrollo de la competencia, diseña y organiza el sistema de juego y el calendario de competencia, coordina el juzgamiento, se encarga de las decisiones disciplinarias, controla el juego limpio, acreditaciones, supervisa los deportistas y el desarrollo general de las competencias.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-4.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Comité<br> logístico" :icono="require('@/assets/curso/temas/tema1/t-4.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Permite el adecuado funcionamiento de la ejecución del evento, se encarga de la recepción de las delegaciones, la distribución de los deportistas, hoteles, habitaciones, alimentación, transporte; también se encarga de los escenarios y el material deportivo, hidratación, refrigerios, transporte a los escenarios deportivos, acompañamiento a las delegaciones. 

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-5.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Comité económico y<br> administrativo" :icono="require('@/assets/curso/temas/tema1/t-5.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Se encarga de diseñar el presupuesto del evento y de cada área, de la contabilidad y las compras necesarias del evento, realiza el control financiero y fiscal; además, realiza las actas de las reuniones; también es su tarea la gestión y distribución del recurso humano según los requerimientos de cada comité. De este comité también hace parte la asesoría jurídica que apoyará el evento.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-6.png' alt='Imagen decorativa')
      
      .py-4.py-md-5(titulo="Comité de<br> seguridad" :icono="require('@/assets/curso/temas/tema1/t-6.svg')")
        .row.col-xl-10.mx-auto
          .col-md-6.mb-4.mb-md-0
            p Tiene como función diseñar los planes de seguridad y prevención del evento, realizar la planimetría del lugar, diseñar los planes de evacuación, prever los accidentes, verificar la seguridad de los escenarios y velar porque permanezcan así durante el evento, realizar las valoraciones de seguridad, disponer la seguridad y control del público, diseñar los protocolos de bioseguridad, coordinar con entidades públicas, como policía, bomberos, defensa civil, cruz roja, etc. También tiene como tarea disponer y organizar el servicio médico, seguros, asistencia médica, urgencias, área protegida y servicios de ambulancia.

          .col-md-6
            figure
              img(src='@/assets/curso/temas/tema1/img-7.png' alt='Imagen decorativa')


      
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
