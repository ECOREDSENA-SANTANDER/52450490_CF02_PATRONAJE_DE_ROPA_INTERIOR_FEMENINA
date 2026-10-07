<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    p.mb-5 El componente formativo aborda de manera progresiva los fundamentos del patronaje industrial y sobre medidas, sus procedimientos, herramientas, convenciones y métodos de construcción, para avanzar hacia el trazado de las bases superior e inferior femeninas, el análisis y traslado de pinzas, los sistemas de ajuste y la adaptación de las bases al comportamiento de los tejidos de punto. A partir del estudio de la elongación, la recuperación, las reducciones y la validación mediante premuestras, se desarrollan las transformaciones necesarias para interpretar y patronar diferentes tipologías de prendas interiores femeninas, tanto inferiores como superiores, considerando sus características estructurales, de cobertura, ajuste y soporte. Finalmente, se integran los criterios técnicos requeridos para identificar, señalizar y despiezar correctamente los patrones mediante símbolos, piquetes, líneas de referencia, sentido del hilo, tallas, cantidades de corte y demás especificaciones necesarias para orientar adecuadamente los procesos posteriores de corte y confección.
    
    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/sintesis.svg", alt="Mapa conceptual del patronaje de prendas interiores femeninas organizado en tres ejes: entorno, tipologías e información técnica.")
      .col-auto
        a.anexo.mb-0(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/bullets/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis


</template>

<script>
export default {
  name: 'Sintesis',
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
