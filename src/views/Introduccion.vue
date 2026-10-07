<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/intro/1.png')
      .col-lg-7
        .row.justify-content-center.align-items-start.mb-4
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4.d-none.d-md-block
            img.img-t(src='@/assets/curso/intro/2.svg')
          .col-lg-10.ps-lg-0.col-md-10
            p.mb-0 El componente formativo Patronaje de prendas interiores femeninas aborda los conocimientos y procedimientos técnicos necesarios para desarrollar patrones destinados a esta categoría de vestuario, estableciendo una relación entre las bases del patronaje femenino, las propiedades de los materiales y las características estructurales de las diferentes tipologías de prendas interiores.
        p.mb-0 El recorrido formativo inicia con los fundamentos del patronaje industrial, la construcción e interpretación de patrones y el trazado de las bases superior e inferior femeninas. También se estudian las pinzas, los sistemas de ajuste y el patronaje para tejidos de punto, considerando la elongación y recuperación del material. Posteriormente, se abordan tipologías como #[em panties, bikinis, hipsters, boyshorts,] tangas, brasieres y #[em bralettes,] junto con las transformaciones requeridas según sus características estructurales.

    p.mb-5 Finalmente, se integra la información técnica necesaria para preparar los patrones antes de los procesos de corte y confección, mediante marcaciones, piquetes, líneas de referencia, datos de identificación y criterios de despiece. De esta manera, el componente contribuye al desarrollo de capacidades para elaborar patrones de ropa interior femenina de acuerdo con el procedimiento técnico, las propiedades del material y las particularidades constructivas de cada prenda.  

    .row.justify-content-center.align-items-center           
      .col-lg-12
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/vdPrCjWJSHo?si=X4NxENRo3LLXAua_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)

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
