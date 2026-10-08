<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Información técnica de los patrones

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema3/1.png')
      .col-lg-7(data-aos="fade-left")
        .bg1.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema3/2.svg')
          p.mb-0.mx-lg-4 La lectura correcta de un patrón depende de un sistema gráfico estandarizado que condensa información dimensional y secuencial en signos concisos. Estos signos —flechas, muescas, líneas discontinuas, entre otros— garantizan que cualquier persona con formación técnica pueda interpretar, cortar y ensamblar las piezas sin ambigüedad. A continuación, se describen las convenciones gráficas esenciales (ejes, muescas, dirección de hilo) y se ofrece un glosario resumido de los símbolos y abreviaturas más habituales.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 3.
          | Símbolos en la señalización de patrones
        .tabla-a.tab3
          table
            thead
              tr
                th Denominación técnica
                th Símbolo (convención)
                th Descripción
                th Función principal
                th Ejemplo
            tbody
              tr
                td Hilo de tela
                td ↕ (flecha doble vertical).
                td Trazado recto culminado en flechas opuestas.
                td Orienta la pieza respecto a la urdimbre para asegurar caída y estabilidad dimensional.
                td Flecha paralela al centro delantero de una camisa; mantiene el drapeado uniforme.
              tr
                td Corte al sesgo / #[em bias line]
                td ↗ (flecha diagonal 45°).
                td Línea oblicua (≈ 45°) rematada con flechas en ambos extremos.
                td Señala que la pieza debe colocarse diagonal al hilo, otorgando elasticidad controlada.
                td Tira de vivo al bies para refuerzo de sisa en chaqueta ligera.
              tr
                td Doblez de tela
                td ⋯ (tres puntos en triángulo).
                td Conjunto de tres círculos dispuestos en triángulo.
                td Indica que ese borde se apoya sobre el lomo de la tela para cortar la pieza simétrica.
                td Centro espalda de un canesú corrido “colocar al doblez”.
              tr
                td Línea de corte
                td ✂ (tijeras).
                td Ícono de tijeras sobre la línea.
                td Determina dónde efectuar el corte definitivo del tejido o de la entretela.
                td Señal de recorte en la vista frontal para crear tapeta francesa.
              tr
                td Piquete / #[em notch]
                td ┤ (T horizontal).
                td Segmento perpendicular que forma una “T”.
                td Marca de ensamblaje para hacer coincidir costuras y curvas.
                td Piquete simple a ½ de la copa de manga; piquete doble a ½ de la espalda.
              tr
                td Ubicación de botón
                td ⊗ (círculo con X).
                td Círculo del diámetro del botón cruzado por “X”.
                td Precisa el tamaño y el punto exacto de costura del botón.
                td Botón de cuello deportivo: ⊗ a 1 cm del borde de pala.
              tr
                td Ubicación de ojal
                td ─┤┤ (segmento igual al ancho del ojal).
                td Trazo recto limitado por dos marcas cortas perpendiculares.
                td Define la longitud y posición del ojal.
                td Ojales horizontales de puño: cuatro marcas separadas 1,5 cm.
              tr
                td Línea de costura
                td – – – (línea guionada).
                td Serie de guiones regulares próxima al borde.
                td Indica la trayectoria de la puntada o margen interno.
                td Guionada a 1 cm dentro de la línea de corte del cuello.
              tr
                td Puntos internos / perforaciones
                td ✱ P / ✱ In (asterisco + sigla).
                td Pequeños orificios señalados con asterisco y abreviatura.
                td Sirven de referencia para ubicar piezas internas — bolsillos, pinzas, presillas—.
                td ✱ P marca inicio de pinza de pecho; ✱ In para bolsillo interior de blazer.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Marcaciones de piezas

    p.mb-5(data-aos="fade-left") En un despiece de patronaje, cada pieza debe ser marcada de forma técnica, clara y estandarizada para garantizar su correcta interpretación durante el proceso de corte y confección. Estas marcas permiten identificar la función de cada molde, su orientación en el tejido y las instrucciones necesarias para ensamblar la prenda con precisión.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 4.
          | Información detallada de los patrones
        .tabla-a.tab4
          table
            thead
              tr
                th Elemento de marcación
                th Qué debe consignarse
                th Función técnica
                th Ejemplo en patrón masculino de prenda superior
            tbody
              tr
                td Nombre de la pieza
                td Término exacto de la parte del molde.
                td Distingue y ordena los componentes durante el montaje.
                td Delantero camisa #[em sport].
              tr
                td Referencia / código de modelo
                td Clave alfanumérica asociada a la ficha técnica.
                td Permite rastrear el diseño dentro de la colección.
                td PS001, grabado bajo el nombre de pieza.
              tr
                td Talla
                td Sigla o número de la gradación.
                td Evita confusión entre moldes de tallas distintas.
                td Talla 40 (M-COL).
              tr
                td Cantidad a cortar
                td Número de capas por material (tela, forro, entretela).
                td Garantiza que todas las capas requeridas se incluyan.
                td “Cortar × 2 en tela — × 1 en entretela” para el cuello.
              tr
                td Sentido del hilo
                td Flecha recta longitudinal.
                td Asegura el comportamiento del tejido y el calce.
                td Flecha paralela al centro delantero de la chaqueta.
              tr
                td Indicaciones de doblez
                td Leyenda “al lomo / colocar al doblez”.
                td Evita costuras innecesarias y produce una pieza simétrica.
                td Centro espalda de un yugo: colocar al lomo.
              tr
                td Simbología de piquetes
                td Muescas simples, dobles o triples en bordes estratégicos.
                td Alinea correctamente costuras y puntos de unión.
                td ▼ en sisa delantero, ▼▼ en sisa espalda para casar la manga.
              tr
                td Nombre del patronista
                td Firma o iniciales del responsable.
                td Facilita trazabilidad y control de versiones.
                td Patronista: J. Rincón.
              tr
                td Observaciones adicionales
                td Notas sobre materiales o procesos especiales.
                td Aclara requisitos específicos del diseño.
                td “Refuerzo con entretela fusible en tapeta”.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 6. 
          | Patrón con especificaciones técnicas
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema3/3.svg', alt='Ficha de moldería de saco informal con piezas del patrón identificadas, talla, cantidades de corte y especificaciones técnicas.')

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/vid.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para complementar la información sobre las marcaciones técnicas y reconocer el proceso de despiece, la incorporación de márgenes de costura, el hilo de tela, los piquetes y la señalización de cada pieza, consulte el siguiente recurso audiovisual.
              h4.d-inline.mb-0.me-1 Video:
              span.par Despiece de planos
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=u0eiVcJAldI" target="_blank")
                span Abrir video
                i.fas.fa-file-video

    p.mb-0(data-aos="fade-left") La correcta construcción de un patrón no finaliza con el trazado de sus piezas. Su identificación, señalización y despiece permiten comunicar la información necesaria para orientar los procesos posteriores de corte y confección. Por ello, cada pieza debe conservar marcaciones claras relacionadas con su nombre, talla, cantidad a cortar, sentido del hilo, doblez, piquetes y demás especificaciones requeridas, favoreciendo una interpretación técnica precisa del patrón.


</template>

<script>
export default {
  name: 'Tema3',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass"></style>
