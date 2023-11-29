<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero(data-aos="fade-right")
        span 5
      h1(data-aos="fade-left") Seguimiento y control del evento
    .d-flex.flex-wrap
      .col-lg-7.pe-lg-4.mb-0
        p(data-aos="fade-right") El seguimiento, la coordinación y el control es lo que ayuda a que las actividades se realicen tal y como se habían propuesto, dentro de los plazos correctos, y permitirá corregir a tiempo cualquier desviación. Es importante el trabajo en equipo, que cada una de las personas involucradas conozca el plan de acción y el cronograma de trabajo. Lo anterior implica mantener una motivación y comunicación permanentes, ya que un evento es una de las máximas expresiones exitosas de lo que es el trabajo en equipo.
        .cajon.color-primario.p-4(style="background-color: #DFE5FF" data-aos="fade-left")
          p Para realizar el control y el seguimiento del desarrollo del evento, se debe tener total claridad de la tarea de cada uno de los comités. Es de suma importancia saber que el control y el seguimiento se realizan en las diferentes fases del evento.
      img.col-lg-5.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-1.png" style="max-width: 505px" alt="imagen decorativa" data-aos="fade-left")
    p.mb-5(data-aos="fade-right") Para realizar el seguimiento y el control del evento, se tendrá en cuenta lo siguiente:

    SlyderF.mb-5(columnas="col-lg-6 col-xl-4" data-aos="fade-left")
      .tarjeta.color-acento-contenido.mt-auto.p-4
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema5/slyF-1.png' style="max-width: 177px;" alt='Planificación previa del evento')
        h4.text-center.w-100(style="color: black") Planificación previa del evento
        p.text-center.mb-auto(style="color: black") No es posible hacer control y seguimiento si no se tiene estructurada la planificación del evento y conformado cada uno de los comités con el diseño de sus respectivas estrategias.
      .tarjeta.color-acento-contenido.mt-auto.p-3
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema5/slyF-2.png' style="max-width: 177px;" alt='Trabajar por objetivos')
        h4.text-center.w-100(style="color: black") Trabajar por objetivos
        p.mb-auto(style="color: black") Tener claridad sobre los objetivos propuestos por comisiones, teniendo en cuenta que los objetivos deben ser específicos, medibles, alcanzables, relevantes y con un tiempo definido.
      .tarjeta.color-acento-contenido.mt-auto.p-3
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema5/slyF-3.png' style="max-width: 177px;" alt='Reuniones de seguimiento y control')
        h4.text-center.w-100(style="color: black") Reuniones de seguimiento y control
        p.mb-auto(style="color: black") Las reuniones de control y gestión se hacen por comité, las estratégicas por coordinadores. Atienden necesidades específicas y periódicas para una atención más focalizada y eficiente.
      .tarjeta.color-acento-contenido.mt-auto.p-3
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema5/slyF-4.png' style="max-width: 177px;" alt='Reuniones operativas')
        h4.text-center.w-100(style="color: black") Reuniones operativas
        p.mb-auto(style="color: black") Se tratan en cada comité, allí se toman en cuenta los indicadores operativos de cada área; en esta reunión deberán participar las personas involucradas con el día a día de las operaciones, el objetivo es detectar problemas que se estén presentando y buscar una solución. 
      .tarjeta.color-acento-contenido.mt-auto.p-3
        img.mx-auto.mb-4(src='@/assets/curso/temas/tema5/slyF-5.png' style="max-width: 177px;" alt='Reuniones estratégicas')
        h4.text-center.w-100(style="color: black") Reuniones estratégicas
        p.mb-auto(style="color: black") Los líderes de comités y organización analizarán indicadores estratégicos para evaluar la estrategia actual, identificar riesgos y resolver problemas. Este tipo de reunión debe ser de participación obligatoria y su duración se dará de acuerdo con la relevancia de los temas que se aborden allí.
    
    p.mb-5(data-aos="fade-right") A continuación, se presenta un paralelo con respecto a reuniones estratégicas y operativas: 

    .container-decorativo-1.col-xl-10.mx-auto.mb-5
      .container-card-decorativo-1.col-12.col-lg(data-aos="fade-right")
        .d-flex.justify-content-center
          h3.header-card-decorativo Reuniones estratégicas
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 01
          p.mb-0 Se realizan con los líderes.
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 02
          p.mb-0 Se tratan los indicadores estratégicos. 
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 03
          p.mb-0 Su objetivo es evaluar si la estrategia utilizada para el evento está funcionando.
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 04
          p.mb-0 Su duración está determinada por los temas y su periodicidad es de un mes en adelante.
      .img-decorativo-1(data-aos="flip-up")
        img(src="@/assets/curso/temas/tema5/vs.svg" alt="imagen decorativa")
      .container-card-decorativo-1.col-12.col-lg(data-aos="fade-left")
        .d-flex.justify-content-center
          h3.header-card-decorativo Reuniones operativas
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 01
          p.mb-0 Se llevan a cabo con los equipos responsables de cada comité que ejecuta las operaciones.
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 02
          p.mb-0 Se tratan los indicadores operativos. 
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 03
          p.mb-0 El objetivo es detectar problemas en las actividades del día a día y buscar soluciones.
        .d-flex.mx-3.mx-lg-5.ps-lg-4.mb-4
          span.number-decorativo.pe-3 04
          p.mb-0 Su duración es corta y la periodicidad debe ser frecuente.
    p.mb-5(data-aos="fade-right") Para el control en general operativo del evento, es importante tener en cuenta estos aspectos:

    .d-flex.flex-wrap.mb-5
      .col-lg-8.pe-lg-4.mb-0
        ul.lista-ul--separador
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Control de los participantes.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Coordinación de recursos y proveedores: puntualidad, protocolo, seguridad y coordinación del servicio técnico.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Medios de comunicación: publicaciones, comunicados, redes sociales.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Calidad de los servicios y actividades desarrolladas.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Actuaciones ante los imprevistos.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Tratamiento ante las quejas y reclamos. 
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Evaluación de servicios y actividades del evento. 
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Seguimiento a los indicadores establecidos. 
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Elaboración de informes de cada comité en el desarrollo del evento. 
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Cuestionarios de satisfacción para los participantes. 
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-right")
            | Aplicar herramientas TIC especializadas para el seguimiento y gestión de eventos. 
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-2.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-left")

    .d-flex.flex-wrap.align-items-center.mb-5
      img.col-lg-4.mx-auto.mb-4.mb-lg-auto(src="@/assets/curso/temas/tema5/img-3.png" style="max-width: 400px" alt="imagen decorativa" data-aos="fade-right")
      .col-lg-8.ps-lg-4
        p Para el control operativo del evento es importante tener en cuenta:
        ul.lista-ul--separador
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-left")
            | Control y operación de los comités: impacto de las estrategias utilizadas.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-left")
            | Presupuesto.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-left")
            | Liderazgos efectivos.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-left")
            | Impacto social y económico.
          li
            i.fas.fa-angle-right(style="color: #FE502D; font-size: 20px" data-aos="fade-left")
            | Políticas públicas.
</template>

<script>
import SlyderF from '@/components/SlyderF.vue'
export default {
  name: 'Tema3',
  components: { SlyderF },
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
.container-decorativo-1
  display: flex
  flex-wrap: wrap
  .container-card-decorativo-1
    border: 4px solid #FE502D
    max-width: 496px
    border-radius: 10px
    overflow: hidden
    .header-card-decorativo
      padding: 1.5rem 3rem
      text-align: center
      background-color: #FE502D
      color: white
      border-bottom-right-radius: 10px
      border-bottom-left-radius: 10px
      border-bottom: 4px solid #E34728
      margin-right: auto
      margin-left: auto
      margin-bottom: 2rem
    .number-decorativo
      color: #FE502D
      font-weight: 900
      font-size: 18px
    &:last-child
      border-color: #2D54FE
      .header-card-decorativo
        background-color: #2D54FE
        border-bottom: 4px solid #284BE3
      .number-decorativo
        color: #2D54FE
  .img-decorativo-1
    position: relative
    width: 60px
    img
      min-width: 160px
      max-width: 160px
      position: absolute
      top: 50%
      left: -52px
      transform: translateY(-50%)
  @media (max-width: 991px)
    .container-card-decorativo-1
      margin-right: auto
      margin-left: auto
      margin-bottom: 1rem
    .img-decorativo-1
      max-width: 100%
      width: 100%
      margin-bottom: 1rem
      img
        position: relative
        top: 50%
        left: 50%
        transform: translate(-50%, -50%)
</style>
