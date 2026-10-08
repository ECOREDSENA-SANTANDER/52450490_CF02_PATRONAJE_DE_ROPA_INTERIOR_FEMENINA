<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Patronaje industrial y entorno
      
    .row.justify-content-center.align-items-center.mb-5
      .col-lg-5.mb-lg-0.mb-0.d-none.d-lg-block(data-aos="fade-right")
        img.img-t(src='@/assets/curso/tema1/1.png')
      .col-lg-7(data-aos="fade-left")
        .bg1.mb-0.p-4.cen
          img.img-t.mb-4.mx-lg-4(src='@/assets/curso/tema1/2.svg')
          p.mb-0.mx-lg-4 El patronaje traduce las formas tridimensionales del cuerpo a superficies bidimensionales, de modo que la arquitectura de la prenda quede trazada sobre planos precisos. Este proceso constituye la fase estructural del diseño de moda: a partir de líneas, contornos y ejes de aplome se generan los moldes que, al cortarse y ensamblarse, recuperan el volumen original con exactitud. Un buen patronaje no solo garantiza el ajuste y la comodidad, sino que también optimiza el consumo de material, facilita el escalado de tallas y sienta las bases para cualquier transformación creativa posterior.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 1. 
          | Plano en 3D 
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/3.svg', alt='Volumen cúbico en un sistema tridimensional con los ejes X, Y y Z como referencia de posición y orientación.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 2. 
          | Plano en 2D 
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/4.svg', alt='Desarrollo plano de un cubo con seis caras unidas que permiten el plegado y la conformación del volumen tridimensional.')

    p.mb-5(data-aos="fade-left") El patronaje cumple una función estratégica en todo el ciclo de diseño, desarrollo y producción de indumentaria. Su utilidad va mucho más allá de “pasar el cuerpo a planos técnicos”; constituye el puente operativo entre la idea creativa y la prenda terminada. A continuación, se detallan sus principales aportes:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Aportes del patronaje en la elaboración de prendas

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12
        .tarjetaf.p-lg-5.p-4.mb-0
          SlyderA(tipo="b")(data-aos="zoom-in-left")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Ajuste y ergonomía
                    p.mb-4 Traduce las proporciones anatómicas a superficies planas con puntos de control (busto, cintura, cadera, sisa, escote).
                    p.mb-0 Garantiza comodidad, libertad de movimiento y correcta caída de la prenda.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/5.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Eficiencia productiva
                    p.mb-4 Define márgenes de costura, piquetes y secuencias de ensamblaje.
                    p.mb-0 Reduce errores en corte y confección, ahorra tiempo y reduce el desperdicio de tela.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/6.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Escalado de tallas
                    p.mb-4 Sirve como “matriz” para graduar medidas hacia tallas superiores o inferiores de forma coherente.
                    p.mb-0 Permite atender diversos rangos de clientela sin rehacer desde cero cada talla.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/7.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Creatividad controlada
                    p.mb-4 Actúa como lienzo técnico para manipular pinzas, volúmenes y líneas de diseño (traslados, añadidos, recortes).
                    p.mb-0 Facilita la experimentación con siluetas manteniendo la estructura base estable.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/8.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Comunicación interdisciplinar
                    p.mb-4 Estandariza símbolos y convenciones (piquetes, líneas de aplome, códigos de pieza).
                    p.mb-0 Mejora el diálogo entre diseñadores, patronistas, cortadores y costureras, minimizando malentendidos.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/9.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Viabilidad económica
                    p.mb-4 Optimiza el consumo de material mediante tizadas eficientes y verificación previa de ajuste (#[em toile]).
                    p.mb-0 Disminuye costos de materia prima y retrabajos.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/10.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Sustentabilidad
                    p.mb-4 Proporciona bases para sistemas de corte 3D y #[em nesting] avanzado, reduciendo excedentes.
                    p.mb-0 Contribuye a prácticas de producción responsable y a la generación de menos residuos.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/11.png")
            .row.justify-content-center.align-items-center.mb-0
              .col-lg-11
                .row.justify-content-center.align-items-center
                  .col-lg-6.mb-lg-0.mb-4
                    h4.mb-4 Digitalización y archivo
                    p.mb-0 Facilita la migración a #[em software] CAD y la creación de bibliotecas de patrones reutilizables.
                  .col-lg-6.col-md-8
                    img.mb-0(src="@/assets/curso/tema1/12.png")

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para ampliar los conceptos relacionados con el proceso de patronaje, consulte el siguiente recurso complementario.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_01_#[wbr]Conceptos_#[wbr]de_#[wbr]prepatronaje
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_01_Conceptos_de_prepatronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-5(data-aos="fade-left") El patronaje se clasifica en dos grandes modalidades según su finalidad productiva: patronaje industrial y patronaje sobre medidas. La primera se orienta a la fabricación en serie bajo parámetros estandarizados, mientras que la segunda responde a procesos personalizados que atienden características específicas de una persona usuaria.

    h2.mb-5(data-aos="fade-right") A. Patronaje industrial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .bg3.p-4.mb-4
          p.mb-0.mx-lg-2.mb-lg-4.mt-lg-4 El patronaje industrial parte del estudio antropométrico de la figura corporal en su tridimensionalidad y traduce esta información a representaciones bidimensionales, ya sea mediante trazado manual sobre papel o a través de #[em software] especializado como Audaces 360, Optitex, Gerber o Lectra, herramientas ampliamente empleadas en la industria de la confección. Este procedimiento técnico permite estructurar moldes base, realizar transformaciones y optimizar tiempos de desarrollo.
        p.mb-4 Su fundamento se sustenta en tablas de medidas previamente establecidas según regiones, mercados y tipologías de prenda, lo que facilita la estandarización y el proceso de escalado. A partir de una talla base se aplican incrementos proporcionales definidos, permitiendo generar un rango de tallas sin necesidad de rediseñar cada molde, lo cual favorece la eficiencia, la uniformidad y el control en la producción en serie.
        p.mb-0 Dentro de esta modalidad se contemplan procesos como:
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/13.png')  

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Procesos del patronaje industrial

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/14.svg')
            h4.text-center.mb-4 Básicos
            p.mb-0.text-center Elaboración de básicos delanteros y posteriores.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/15.svg')
            h4.text-center.mb-4 Prendas
            p.mb-0.text-center Desarrollo de patrones para prendas superiores e inferiores.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/16.svg')
            h4.text-center.mb-4 Componentes estructurales
            p.mb-0.text-center Construcción de moldes para componentes estructurales (cuellos, escotes, mangas, puños, ribetes, bolsillos, charreteras, entre otros).
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/17.svg')
            h4.text-center.mb-4 Líneas de mercado
            p.mb-0.text-center Aplicación en diferentes líneas de mercado (infantil, femenina y masculina).
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/18.svg')
            h4.text-center.mb-4 Colecciones
            p.mb-0.text-center Proyección de colecciones articuladas con universos de vestuario y ocasiones de uso.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/19.svg')
            h4.text-center.mb-4 Propuestas
            p.mb-0.text-center Desarrollo de propuestas alineadas con gamas comerciales y segmentos del sistema moda.

    h2.mb-5(data-aos="fade-right") B. Patronaje sobre medidas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-8
        .bg3.p-4.mb-4
          p.mb-0.mx-lg-2.mb-lg-4.mt-lg-4 El patronaje sobre medidas se orienta a la elaboración de prendas ajustadas a las características específicas de una persona usuaria, priorizando adaptación ergonómica, precisión estructural y funcionalidad. Esta modalidad se emplea en contextos donde se requiere exclusividad y ajuste personalizado, particularmente en marcas o talleres dirigidos a públicos con perfiles de consumo definidos y expectativas elevadas en términos de detalle y acabado.
        p.mb-4 El procedimiento inicia con la toma rigurosa de medidas antropométricas individuales, seguida de la construcción de una prenda de prueba, comúnmente elaborada en un textil provisional, cuya finalidad es verificar proporciones, caídas y ajustes. Posteriormente, se realiza una sesión de prueba para identificar posibles correcciones antes de confeccionar la versión definitiva, garantizando coherencia entre estructura corporal y solución constructiva.
        p.mb-0 En esta modalidad se aplican principalmente dos técnicas:
      .col-lg-4.d-none.d-lg-block
        img(src='@/assets/curso/tema1/20.png')  

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Técnicas de patronaje sobre medidas

    .row.justify-content-center.align-items-stretch.mb-lg-5.mb-4(data-aos="fade-left")
      .col-lg-5.col-md-6.pe-lg-0.pe-md-0.mb-lg-0.mb-4
        .bg4.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4.my-4(src='@/assets/curso/tema1/21.svg')
          h3.mb-4.text-center Levantamiento en plano
          p.mb-lg-2.mb-0 Procedimiento semejante al utilizado en el patronaje industrial, aunque permite mayor flexibilidad en la aplicación de fórmulas, ajustes personalizados y modificaciones específicas según la morfología de la persona usuaria.
      .col-lg-5.col-md-6.ps-lg-0.ps-md-0.mb-lg-0.mb-4
        .bg5.p-lg-5.p-4.h-100
          img.img-t.img-a.mb-4.my-0(src='@/assets/curso/tema1/22.svg')
          h3.mb-4.text-center Patronaje sobre maniquí #[em (moulage)]
          p.mb-lg-2.mb-0 Técnica que consiste en construir directamente la prenda o su base estructural sobre un maniquí, facilitando el desarrollo de drapeados, plisados y configuraciones complejas. Este método se utiliza con frecuencia en prendas de ceremonia, vestidos de fiesta, sastrería, diseño infantil y propuestas con alto nivel de detalle estructural.

    .row.justify-content-center.align-items.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/23.png')  
      .col-lg-7
        p.mb-4 Dentro de los procesos productivos del sector confección, las fichas técnicas constituyen instrumentos fundamentales para la organización y estandarización del trabajo. Estos documentos estructuran de manera detallada las especificaciones del producto, los materiales requeridos, la secuencia de ensamblaje y los parámetros técnicos necesarios para su elaboración.
        p.mb-0 Su implementación facilita la comunicación entre las diferentes áreas involucradas en la producción, favoreciendo la coherencia en los procedimientos, el control de calidad y la uniformidad en los resultados. De este modo, la ficha técnica se consolida como un soporte operativo indispensable para garantizar la precisión y la consistencia en la fabricación de prendas.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 1.
          | Comparativo entre patronaje industrial y sobre medidas
        .tabla-a.tab1
          table
            thead
              tr
                th Dimensión
                th Patronaje industrial
                th Patronaje sobre medidas
            tbody
              tr
                td Finalidad
                td Producción masiva / tiradas grandes.
                td Exclusividad individual / piezas únicas.
              tr
                td Base de medidas
                td Tablas estandarizadas (S, M, L, XL, XXL).
                td 25 – 40 medidas específicas por cliente.
              tr
                td Holguras
                td Definidas para rangos de percentil.
                td Ajustadas caso por caso según postura.
              tr
                td Gradación
                td Sí, sistemática y computarizada.
                td No (cada prenda es un único tamaño).
              tr
                td N.° de pruebas
                td 0 – 1 (#[em size set] piloto).
                td 2 – 4 muestras por encargo.
              tr
                td Tecnología
                td CAD/CAM, #[em plotters], #[em nesting] automático.
                td Herramientas manuales + escáner 3D opcional.
              tr
                td Tiempo de desarrollo
                td Días o semanas.
                td Semanas o meses.
              tr
                td Costo unitario
                td Bajo – medio (economía de escala).
                td Alto (mano de obra especializada).
              tr
                td Control de calidad
                td Muestreos por lote.
                td Revisión total pieza por pieza.
              tr
                td Aplicaciones típicas
                td #[em Fast fashion], uniformes, marcas de #[em retail].
                td Alta costura, sastrería #[em bespoke], vestuario escénico.


    separador
    #t_1_1.titulo-segundo.mb-5
      h2 1.1 Procedimiento y entorno en el patronaje industrial

    p.mb-5(data-aos="fade-right") Para garantizar el desarrollo de una prenda que responda a los requerimientos específicos de la persona usuaria, resulta necesario seguir una secuencia organizada de procedimientos que permitan asegurar coherencia técnica, precisión estructural y calidad en el resultado final. Esta secuencia facilita la correcta interpretación de las medidas corporales, la construcción adecuada de los patrones y la ejecución eficiente del proceso de confección. En este sentido, se establece el siguiente procedimiento:

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Pasos que se deben seguir para realizar el procedimiento de patronaje

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para conocer de manera secuencial los procedimientos que intervienen en la definición del patronaje, consulte el siguiente recurso complementario.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_02_#[wbr]Pasos_#[wbr]para_#[wbr]definir_#[wbr]el_#[wbr]patronaje
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_02_Pasos_para_definir_el_patronaje.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Metodología y manual de patronaje SENA

    .row.justify-content-center.align-items.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 El Manual de Patronaje del SENA constituye un documento técnico elaborado por especialistas en el área de confección, con el propósito de establecer una metodología estructurada para el desarrollo de patrones a partir del análisis antropométrico y funcional del cuerpo humano. Este recurso orienta la comprensión de los principios técnicos del patronaje, facilitando la interpretación de medidas corporales y su traducción en estructuras bidimensionales aplicables a la elaboración de prendas.
        p.mb-0 Su contenido se organiza de manera progresiva, permitiendo fortalecer las competencias relacionadas con la construcción de básicos, el desarrollo de moldes y la aplicación de procesos de escalado, conforme a los estándares formativos y productivos del sector confección. Para ampliar la información, se recomienda consultar el manual en su versión oficial, disponible a través de los medios institucionales del SENA.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/24.png')  

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para ampliar la información sobre la metodología de patronaje propuesta por el SENA, consulte el siguiente recurso complementario.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_03_#[wbr]Presentación_#[wbr]del_#[wbr]manual_#[wbr]de_#[wbr]patronaje_#[wbr]SENA
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_03_Presentacion_del_manual_de_patronaje_SENA.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Metodología y convenciones

    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/25.png')  
      .col-lg-7
        .row.justify-content-center.align-items-center.mb-4
          .col-lg-5.d-none.d-lg-block
            img(src='@/assets/curso/tema1/26.svg')  
          .col-lg-7
            .bg6.p-4
              p.mb-0.mx-lg-2.mt-lg-2.mb-lg-2 Dentro del proceso de patronaje, el uso de convenciones gráficas constituye un elemento fundamental para garantizar la correcta interpretación técnica de los patrones y su adecuada aplicación durante las fases de corte y confección. Estos símbolos permiten identificar de manera precisa las características estructurales de cada pieza, facilitando la comunicación entre las diferentes etapas del proceso productivo sin depender exclusivamente de descripciones textuales.
        p.mb-0 Al realizar el despiece de un patrón, cada componente debe incorporar información técnica clara que permita su reconocimiento y correcta utilización. Entre los elementos indispensables se encuentran:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Elementos indispensables para el despiece de un patrón

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-left")
      .col-lg-6
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span a)
            | Nombre de la pieza.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span b)
            | Referencia o identificación del modelo.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span c)
            | Talla correspondiente.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span d)
            | Nombre de la persona responsable del patronaje.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span e)
            | Simbología de corte.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span f)
            | Número de veces que debe cortarse la pieza.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span g)
            | Piquetes de confección para facilitar el ensamble.
          li.d-flex
            .lista-ol--cuadro__vineta.mb-2
              span h)
            | Líneas de aplome que indican la dirección estructural del patrón.
          li.d-flex.mb-0
      .col-lg-6.d-none.d-lg-block
        img(src='@/assets/curso/tema1/27.png')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/28.png')
      .col-lg-7
        .row.justify-content-center.align-items-start.mb-3
          .col-lg-2.col-md-2.col-5.mb-lg-0.mb-4.d-none.d-md-block
            img.img-t(src='@/assets/curso/tema1/29.svg')
          .col-lg-10.ps-lg-0.col-md-10
            p.mb-0 De manera complementaria, pueden incorporarse indicaciones adicionales relacionadas con procesos específicos, como ubicación de estampación, variaciones de material, cambios cromáticos, acabados especiales o localización de componentes funcionales como bolsillos o aberturas.
        p.mb-0 En cuanto al procedimiento de construcción, el trazo del patrón se fundamenta en el uso de formas geométricas básicas, tales como líneas horizontales, verticales y perpendiculares, así como figuras como rectángulos, ángulos rectos, diagonales y curvas. Estas referencias permiten establecer estructuras precisas que responden a las dimensiones corporales previamente definidas. Toda construcción parte de un rectángulo base, el cual integra el contorno principal y el largo total de la prenda.

    p.mb-5(data-aos="fade-right") El uso de escalas facilita la representación proporcional de los patrones, permitiendo trabajar tanto en tamaño real como en formatos reducidos para fines pedagógicos o de análisis técnico. Las escalas más empleadas corresponden a:

    .row.justify-content-center.mb-lg-5.mb-md-5(data-aos="fade-left")
      .col-md-6.col-lg.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/30.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Escala 1:1
              p.mb-0.text-center Representación en tamaño real.
      .col-md-6.col-lg.mb-lg-0.mb-md-4.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/31.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Escala 1:2
              p.mb-0.text-center Representación a la mitad del tamaño real.
      .col-md-6.col-lg.mb-lg-0.mb-md-0.mb-4
        .tarjeta-avatar
          img(src='@/assets/curso/tema1/32.svg')
          .tarjeta.color-b
            .p-4
              h4.text-center.mt-3 Escala 1:4
              p.mb-0.text-center Representación a la cuarta parte del tamaño real.

    p.mb-4(data-aos="fade-right") El trazo a escala constituye una herramienta útil para comprender la estructura del patrón antes de su desarrollo definitivo.

    p.mb-5(data-aos="fade-left") Para la correcta ejecución del trazo, se recomienda el uso de herramientas técnicas que garanticen precisión y control en la construcción del patrón, entre las cuales se incluyen:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Herramientas para la ejecución del trazo

    .row.justify-content-center.align-items-start.mb-4(data-aos="fade-left")
      .col-lg-7
        ol.lista-ol--cuadro.lista-ol--separador
          li.d-flex
            .lista-ol--cuadro__vineta
              span a)
            | Regla técnica o regla mágica con cuadrícula y ángulos de referencia.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span b)
            | Curvígrafo para el desarrollo de curvas anatómicas.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span c)
            | Cinta métrica graduada en centímetros.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span d)
            | Instrumentos de marcación como lápiz técnico o portaminas.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span e)
            | Cinta adhesiva para montaje de piezas.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span f)
            | Tijeras destinadas exclusivamente al corte de papel.
          li.d-flex 
            .lista-ol--cuadro__vineta
              span g)
            | Papel técnico que facilite claridad y precisión en el trazo.
          li.d-flex
            .lista-ol--cuadro__vineta.mb-2
              span h)
            | Juego de reglas de patronaje, incluyendo la escuadra, las curvas y el sisómetro.
          li.d-flex.mb-0
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/33.png')  

    p.mb-5(data-aos="fade-right") Estas convenciones y herramientas permiten estructurar el patrón con precisión técnica, favoreciendo la correcta interpretación, reproducción y aplicación en los procesos de confección.

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para profundizar en la metodología, las convenciones y los procedimientos utilizados en la construcción e interpretación de patrones, consulte el siguiente recurso complementario.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_04_#[wbr]Manual_#[wbr]de_#[wbr]patronaje_#[wbr]básico_#[wbr]e_#[wbr]interpretación_#[wbr]de_#[wbr]diseños
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_04_Manual_de_patronaje_basico_e_interpretacion_de_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download


    separador
    #t_1_2.titulo-segundo.mb-5
      h2 1.2 Trazo de la base superior femenina: descripción y medidas

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/34.png')  
      .col-lg-7
        p.mb-4 La base superior corresponde al patrón que representa la estructura corporal desde la región del cuello hasta la línea de cintura, incorporando las proporciones anatómicas necesarias para su correcta construcción. Este molde constituye el fundamento técnico para el desarrollo de prendas como blusas, camisetas, chaquetas, chalecos, corpiños y vestidos.
        p.mb-0 La adecuada elaboración de esta base permite establecer una estructura equilibrada, facilitando su posterior transformación según los requerimientos de diseño, funcionalidad y uso. Su correcta construcción favorece el ajuste, la estabilidad y la coherencia estructural de la prenda final dentro del proceso de patronaje industrial femenino.

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para conocer las medidas y el procedimiento establecido para el trazado de las partes posterior y delantera de la base superior femenina, consulte el siguiente recurso complementario.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_05_#[wbr]Pasos_#[wbr]para_#[wbr]el_#[wbr]trazo_#[wbr]de_#[wbr]la_#[wbr]base_#[wbr]superior
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_05_Pasos_para_el_trazo_de_la_base_superior.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    p.mb-5(data-aos="fade-left") A continuación, podrá consultar el trazo del patrón básico superior femenino. 

    .tarjeta.color-primario.des.p-4.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/ti.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para ampliar el procedimiento de construcción del patrón base superior femenino, consulte el #[em Manual de patronaje básico e interpretación de diseños], específicamente las páginas 20 a 25.
              h4.d-inline.mb-0.me-1 Recurso:
              span.par Anexo_04_#[wbr]Manual_#[wbr]de_#[wbr]patronaje_#[wbr]básico_#[wbr]e_#[wbr]interpretación_#[wbr]de_#[wbr]diseños
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(:href="obtenerLink('/downloads/Anexo_04_Manual_de_patronaje_basico_e_interpretacion_de_disenos.pdf')" target="_blank")
                span Descargar 
                i.fas.fa-file-download

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Traslado de pinzas de corpiño

    p.mb-4(data-aos="fade-right") Al integrar los patrones base delantero y posterior a través de la línea de cintura, se reconoce una diferencia estructural derivada de la configuración anatómica del cuerpo. Esta variación da origen a la pinza de busto, elemento técnico que permite distribuir el volumen necesario para lograr la adaptación de la prenda en la región superior del torso. La pinza constituye un recurso fundamental en el patronaje, ya que posibilita ajustar la superficie plana del patrón a la forma tridimensional del cuerpo.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 El traslado de pinzas corresponde a un procedimiento técnico mediante el cual el volumen concentrado en una pinza puede redistribuirse hacia diferentes zonas del patrón, manteniendo el mismo nivel de ajuste. Este proceso se realiza tomando como referencia el punto de busto, considerado eje estructural o punto de rotación, desde el cual se puede reubicar la pinza hacia el costado, la sisa, el escote, el hombro o la cintura, según las necesidades del diseño.
        p.mb-0 Esta técnica permite desarrollar diversas configuraciones formales, facilitando la incorporación de recursos constructivos como cortes, pliegues, frunces o líneas estructurales que responden a criterios funcionales o estéticos. En algunos casos, la pinza se integra de manera visible como parte del diseño, mientras que en otros se incorpora dentro de líneas de corte, permaneciendo como un elemento estructural interno.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/35.png')  
      
    .cajon.color-acento-botones.p-lg-5.p-4.mb-5(data-aos="fade-right")
      p.mb-0 Toda pinza debe finalizar antes de alcanzar el punto de busto, conservando una distancia de seguridad que permita mantener la correcta distribución del volumen sin generar deformaciones en la estructura del patrón.

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/vid.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para reconocer de manera práctica el procedimiento de traslado de la pinza de talle hacia diferentes zonas del patrón base superior, consulte el siguiente recurso audiovisual.
              h4.d-inline.mb-0.me-1 Video:
              span.par Traslados de pinza correctiva de talles
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=sg_UbHStwtk" target="_blank")
                span Abrir video
                i.fas.fa-file-video


    separador
    #t_1_3.titulo-segundo.mb-5
      h2 1.3 Análisis y trazo de sistema de ajuste (pinzas y cortes)

    p.mb-4(data-aos="fade-right") En el desarrollo técnico del patronaje, las pinzas constituyen un recurso estructural esencial que permite adaptar la superficie plana del patrón a la configuración tridimensional del cuerpo. Su aplicación cumple una doble función: por una parte, facilita el ajuste de la prenda y, por otra, permite controlar y distribuir los volúmenes de manera precisa, garantizando coherencia entre la estructura corporal y la forma final del molde.

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/36.png')  
      .col-lg-7
        p.mb-3 En el patronaje femenino, el estudio de las pinzas se fundamenta en el análisis de los contornos corporales principales, especialmente busto, cintura y cadera. Estas zonas concentran las variaciones anatómicas más significativas y establecen puntos de referencia indispensables para la construcción de patrones base. A partir de estos contornos, se define la organización estructural del molde y se determina la distribución del volumen necesario para lograr un adecuado nivel de ajuste.
        p.mb-0 Desde una perspectiva técnica, la pinza responde a un principio matemático derivado de la diferencia entre medidas corporales en distintas zonas, lo que genera un excedente que debe redistribuirse mediante su incorporación al patrón. Este procedimiento permite que el molde conserve estabilidad dimensional y correspondencia con la morfología corporal.
    
    p.mb-5(data-aos="fade-right") Independientemente de la tipología de prenda, el nivel de desahogo o la interpretación del diseño, la aplicación de pinzas se relaciona directamente con los contornos estructurales del cuerpo, ya que estos constituyen la base sobre la cual se construye el patrón. Su correcta ubicación y trazado permiten lograr un ajuste funcional, facilitando el desarrollo posterior de cortes, líneas de diseño y transformaciones propias del proceso de patronaje industrial femenino. 

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-left")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/vid.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para profundizar en el análisis y trazado de los sistemas de ajuste mediante pinzas y cortes, consulte el siguiente recurso audiovisual.
              h4.d-inline.mb-0.me-1 Video:
              span.par Análisis y trazo de sistema de ajuste pinzas y cortes
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=rLYn-8vPNlU" target="_blank")
                span Abrir video
                i.fas.fa-file-video


    separador
    #t_1_4.titulo-segundo.mb-5
      h2 1.4 Trazado del básico inferior (femenino)

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-7
        p.mb-4 El patronaje de pantalón y falda femenina corresponde al proceso técnico mediante el cual se construyen los moldes base que representan la estructura corporal desde la cintura hasta la región inferior del cuerpo. Este procedimiento se fundamenta en el análisis de medidas antropométricas como cintura, cadera, tiro y largo, las cuales permiten establecer proporciones precisas y garantizar una adecuada adaptación de la prenda. 
        p.mb-0 En el caso del pantalón, el patrón integra elementos estructurales como líneas de tiro, entrepierna, rodilla y bota, que facilitan la movilidad y el ajuste funcional. Por su parte, el patrón de falda se organiza a partir de la relación entre cintura y cadera, incorporando pinzas como recurso técnico para distribuir el volumen y lograr correspondencia con la configuración corporal. A continuación, se relaciona el trazo de la base de pantalón con sus respectivos pasos.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/37.png')  

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 3. 
          | Paso 1 del trazo del pantalón femenino
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/38.svg', alt='Esquema del paso 1 con rectángulo base, línea de cadera, línea de quiebre y medidas iniciales del pantalón.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 4. 
          | Paso 2 del trazo del pantalón femenino
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/39.svg', alt='Esquema del paso 2 con líneas de cadera, tiro y rodilla, y curvas estructurales del patrón de pantalón.')

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Figura 5. 
          | Paso 3 del trazo del pantalón femenino
        .bg2.p-4.p-lg-5
          img.img-t.img-a(src='@/assets/curso/tema1/40.svg', alt='Esquema del paso 3 con medidas de cintura, cadera, tiro, rodilla, bota, pinzas y ajustes laterales.')

    p.mb-5(data-aos="fade-right") A continuación, podrá encontrar los pasos de cada una de las figuras para el trazo del pantalón.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Pasos para el trazo del pantalón femenino

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        AcordionA.activ(tipo="a" clase-tarjeta="tarjeta tarjeta--azull").mb-0
          .row.justify-content-center.align-items-center(titulo="Paso 1")
            .col-lg-11
              h4.mb-0.mx-lg-2 1. Construir el rectángulo base
              p.mb-0.mx-lg-2 Trazar un rectángulo cuya base corresponde al valor de cadera dividido en cuatro, adicionando el valor de costura (1 cm). La altura corresponde al largo total del pantalón.
              p.mb-4.mx-lg-2 #[b Referencia:] cadera ÷ 4 + 1 cm.
              h4.mb-0.mx-lg-2 2. Trazar la línea de cadera
              p.mb-0.mx-lg-2 Desde el borde superior del rectángulo, medir hacia abajo la altura de cadera y trazar una línea horizontal de referencia.
              p.mb-4.mx-lg-2 #[b Referencia:] altura de cadera.
              h4.mb-0.mx-lg-2 3. Definir la línea de quiebre
              p.mb-0.mx-lg-2 Ubicar el punto medio en la base inferior del rectángulo y proyectar una línea vertical hasta el borde superior. Esta línea corresponde al eje estructural de la pierna.
              p.mb-4.mx-lg-2 #[b Referencia:] punto medio inferior.
              h4.mb-0.mx-lg-2 4. Verificar proporciones
              p.mb-0.mx-lg-2 Comprobar que el rectángulo y las líneas trazadas correspondan a las medidas establecidas, garantizando precisión para el desarrollo del patrón.
              p.mb-0.mx-lg-2 #[b Referencia:] medidas base del patrón.
          .row.justify-content-center.align-items-center(titulo="Paso 2")
            .col-lg-11
              h4.mb-0.mx-lg-2 1. Reducir ancho superior
              p.mb-0.mx-lg-2 Desplazar 1 cm hacia el interior desde cada extremo superior del rectángulo base para ajustar el ancho de cintura.
              p.mb-4.mx-lg-2 #[b Referencia:] 1 cm en cada lado.
              h4.mb-0.mx-lg-2 2. Trazar línea de profundidad de cadera
              p.mb-0.mx-lg-2 Medir desde la línea superior hacia abajo el valor de profundidad de cadera y trazar una línea horizontal de referencia.
              p.mb-4.mx-lg-2 #[b Referencia:] medida de profundidad de cadera.
              h4.mb-0.mx-lg-2 3. Trazar línea de profundidad de tiro
              p.mb-0.mx-lg-2 Medir desde la línea de profundidad de cadera hacia abajo el valor correspondiente al tiro y trazar la línea horizontal.
              p.mb-4.mx-lg-2 #[b Referencia:] medida de profundidad de tiro.
              h4.mb-0.mx-lg-2 4. Trazar línea de rodilla
              p.mb-0.mx-lg-2 Medir desde la línea de tiro hacia abajo la altura de rodilla y trazar una línea horizontal estructural.
              p.mb-4.mx-lg-2 #[b Referencia:] medida de altura de rodilla.
              h4.mb-0.mx-lg-2 5. Definir línea lateral
              p.mb-0.mx-lg-2 Unir el punto superior reducido con el ancho correspondiente en la línea de rodilla mediante una línea continua.
              p.mb-4.mx-lg-2 #[b Referencia:] unión cintura–rodilla.
              h4.mb-0.mx-lg-2 6. Construir curva de tiro
              p.mb-0.mx-lg-2 Desarrollar la curva interna desde la línea de tiro hasta la línea de rodilla, manteniendo continuidad estructural.
              p.mb-4.mx-lg-2 #[b Referencia:] curva interna del tiro.
              h4.mb-0.mx-lg-2 7. Verificar alineación
              p.mb-0.mx-lg-2 Confirmar que las líneas horizontales y curvas se mantengan alineadas respecto a la línea de quiebre.
              p.mb-0.mx-lg-2 #[b Referencia:] línea de quiebre como eje.
          .row.justify-content-center.align-items-center(titulo="Paso 3")
            .col-lg-11
              h4.mb-0.mx-lg-2 1. Definir ancho de bota
              p.mb-0.mx-lg-2 Desde la línea de quiebre, medir hacia cada lado el valor correspondiente al ancho de bota dividido en dos y trazar los puntos de referencia.
              p.mb-4.mx-lg-2 #[b Referencia:] ancho de bota ÷ 2.
              h4.mb-0.mx-lg-2 2. Trazar línea de bota
              p.mb-0.mx-lg-2 Unir los puntos definidos del ancho de bota mediante una línea horizontal que establezca el límite inferior del patrón.
              p.mb-4.mx-lg-2 #[b Referencia:] línea inferior del pantalón.
              h4.mb-0.mx-lg-2 3. Definir ancho de rodilla
              p.mb-0.mx-lg-2 Desde la línea de quiebre, medir hacia cada lado el valor correspondiente al ancho de rodilla dividido en dos y marcar los puntos.
              p.mb-4.mx-lg-2 #[b Referencia:] ancho de rodilla ÷ 2.
              h4.mb-0.mx-lg-2 4. Trazar líneas laterales externas
              p.mb-0.mx-lg-2 Unir el ancho de cadera con el ancho de rodilla y posteriormente con el ancho de bota mediante líneas continuas, definiendo el contorno lateral.
              p.mb-4.mx-lg-2 #[b Referencia:] unión cadera–rodilla–bota.
              h4.mb-0.mx-lg-2 5. Trazar líneas internas de entrepierna
              p.mb-0.mx-lg-2 Unir el punto de tiro con el ancho de rodilla y posteriormente con el ancho de bota mediante una línea continua.
              p.mb-4.mx-lg-2 #[b Referencia:] unión tiro–rodilla–bota.
              h4.mb-0.mx-lg-2 6. Extender el tiro delantero
              p.mb-0.mx-lg-2 Desde la línea central de quiebre, medir hacia el exterior el valor correspondiente a cadera ÷ 4 más costura, y proyectar el punto de extensión del tiro.
              p.mb-4.mx-lg-2 #[b Referencia:] cadera ÷ 4 + costura.
              h4.mb-0.mx-lg-2 7. Construir curva del tiro delantero
              p.mb-0.mx-lg-2 Trazar la curva del tiro delantero uniendo el punto de extensión con la línea de profundidad de tiro, manteniendo continuidad estructural.
              p.mb-4.mx-lg-2 #[b Referencia:] curva del tiro delantero.
              h4.mb-0.mx-lg-2 8. Verificar continuidad estructural
              p.mb-0.mx-lg-2 Confirmar que las líneas laterales e internas mantengan coherencia con la línea de quiebre y las medidas establecidas.
              p.mb-0.mx-lg-2 #[b Referencia:] línea de quiebre como eje.

    .tarjeta.color-primario.des.p-4.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-12.col-sm-2.col-lg-1.mb-3.mb-md-0.mb-lg-0.text-center.text-sm-start
          img.img-a.img-t.mx-lg-4(src="@/assets/curso/tema1/vid.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-md-0.mb-lg-0.mx-lg-4
              p.mb-3 Para complementar el procedimiento y reconocer la aplicación del básico en el trazado e interpretación de pantalones, consulte el siguiente recurso audiovisual.
              h4.d-inline.mb-0.me-1 Video:
              span.par Trazo de prendas inferiores – pantalón
            .col-sm-auto.pe-lg-4
              a.boton.color-acento-botones(href="https://www.youtube.com/watch?v=oBsuCQmODcc&t=1361s" target="_blank")
                span Abrir video
                i.fas.fa-file-video


    separador
    #t_1_5.titulo-segundo.mb-5
      h2 1.5 Ajuste de las bases para prendas interiores (tejido de punto)

    p.mb-5(data-aos="fade-left") El patronaje de prendas interiores femeninas se desarrolla a partir de bases corporales previamente construidas, debido a que estas contienen las proporciones, contornos y puntos de referencia necesarios para establecer las posteriores transformaciones. La base superior permite trabajar la región comprendida entre cuello, busto y cintura, mientras que las estructuras inferiores proporcionan las referencias de cintura, cadera, tiro y entrepierna. Como se indicó anteriormente, la base superior es el fundamento para posteriores transformaciones y es necesario considerar la elongación del textil antes de abordar el patronaje de ropa interior. 

    .row.mb-5(data-aos="fade-right")
      .col-lg-12
        img(src='@/assets/curso/tema1/41.png')  
    
    p.mb-5(data-aos="fade-left") Sin embargo, una base construida inicialmente a partir de las medidas corporales no debe trasladarse de manera directa al patronaje de una prenda interior en tejido de punto. Antes de realizar la transformación es necesario determinar cuánto puede extenderse el material y qué capacidad tiene para regresar a su dimensión inicial. La extensibilidad permite que el tejido participe activamente en el ajuste de la prenda y hace posible trabajar con dimensiones inferiores a determinados contornos corporales. La norma ASTM D2594/D2594M-21 (ASTM International, 2021) señala que la extensión y el crecimiento del tejido son propiedades relevantes en prendas ajustadas al cuerpo y que deben evaluarse conjuntamente con su recuperación. 

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Del básico inicial a la base para tejido de punto

    p.mb-5(data-aos="fade-left") La transición puede comprenderse mediante las siguientes decisiones técnicas:

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Elementos de las bases para trazado de prendas en tejido de punto

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderB.slib(:datos="datosSlyder").bg10.p-lg-5.p-4

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Análisis del tejido de punto

    p.mb-4(data-aos="fade-left") Antes de reducir la base, debe establecerse el comportamiento del material que será empleado. En ropa interior este análisis resulta especialmente importante porque textiles aparentemente semejantes pueden presentar respuestas diferentes ante la tensión.
    
    p.mb-5(data-aos="fade-right") Como mínimo, deben comprobarse:

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/43.svg')
            h4.text-center.mb-4 Elongación horizontal
            p.mb-0.text-center Capacidad del tejido para extenderse en el ancho. 
            p.mb-0.text-center #[b Incidencia en el patrón:] 
            p.mb-0.text-center orienta principalmente la reducción de busto, cintura y cadera.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/44.svg')
            h4.text-center.mb-4 Elongación longitudinal
            p.mb-0.text-center Capacidad de extensión en el largo.
            p.mb-0.text-center #[b Incidencia en el patrón:] 
            p.mb-0.text-center permite determinar si deben realizarse correcciones verticales.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/45.svg')
            h4.text-center.mb-4 Recuperación
            p.mb-0.text-center Capacidad de regresar a una dimensión próxima a la inicial después de retirar la tensión.
            p.mb-0.text-center #[b Incidencia en el patrón:] 
            p.mb-0.text-center un material que se extiende pero recupera deficientemente puede perder estabilidad durante el uso.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/46.svg')
            h4.text-center.mb-4 Estabilidad
            p.mb-0.text-center Comportamiento del tejido después de permanecer sometido a tensión.
            p.mb-0.text-center #[b Incidencia en el patrón:] 
            p.mb-0.text-center influye en el mantenimiento del ajuste de la prenda.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/47.svg')
            h4.text-center.mb-4 Comportamiento en premuestra
            p.mb-0.text-center Respuesta del material una vez cortado, confeccionado y puesto en uso.
            p.mb-0.text-center #[b Incidencia en el patrón:] 
            p.mb-0.text-center permite confirmar o modificar la reducción planteada inicialmente.

    p.mb-5(data-aos="fade-right") La norma ISO 20932-1:2018 (International Organization for Standardization, 2018) establece métodos mediante probetas para determinar elasticidad y propiedades relacionadas de los tejidos, mientras que la norma ASTM D2594/D2594M-21 (ASTM International, 2021) contempla específicamente la extensión y el crecimiento de tejidos de punto utilizados, entre otros casos, en prendas ajustadas. 

    h2.mb-5(data-aos="fade-left") A. Comprobación práctica de la elongación

    .row.justify-content-center.align-items.mb-lg-5.mb-4(data-aos="fade-right")
      .col-lg-7
        p.mb-3 Para ejercicios formativos puede efectuarse una comprobación sencilla antes de iniciar el patrón. Se marca sobre el material una longitud inicial conocida y se extiende de manera controlada, sin llevar el tejido hasta una deformación excesiva.
        p.mb-3 El porcentaje puede calcularse mediante:
        p.mb-3 Porcentaje de elongación = [(medida extendida − medida inicial) ÷ medida inicial] × 100
        p.mb-3 #[b Ejemplo]
        p.mb-3 Si un segmento inicialmente mide 10 cm y durante la comprobación alcanza 12,5 cm:
        p.mb-3 [(12,5 − 10) ÷ 10] × 100 = 25 %
        p.mb-3 El tejido presenta, bajo las condiciones de esa comprobación, una elongación del 25 %.
        p.mb-3 Esta prueba rápida tiene carácter pedagógico y orientativo; cuando se requiera caracterización técnica normalizada del material deben emplearse procedimientos de ensayo establecidos, como los contemplados por ISO 20932-1 o ASTM D2594/D2594M. 
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/52.png')  

    h2.mb-5(data-aos="fade-left") B. Aplicación de una reducción inicial del 20 %
    
    p.mb-4(data-aos="fade-right") Para el desarrollo didáctico del básico destinado a prendas interiores puede adoptarse un 20 % de reducción en los anchos como punto inicial de trabajo, siempre que la comprobación del tejido indique que el material puede asumir esta disminución y recuperar adecuadamente su dimensión.
    p.mb-5(data-aos="fade-left") El 20 % no debe entenderse como una regla fija para cualquier tejido de punto. Se utiliza como referencia inicial y posteriormente se valida mediante premuestras. La reducción definitiva puede necesitar aumentar o disminuir según el comportamiento del material.

    .row.justify-content-center.align-items.mb-5(data-aos="fade-right")
      .col-lg-7.d-none.d-lg-block
        img(src='@/assets/curso/tema1/53.png')  
      .col-lg-5
        p.mb-4 El cálculo es:
        p.mb-4 Reducción = ancho de la base × 20 %
        p.mb-4 Nuevo ancho = ancho de la base − reducción
        p.mb-4 También puede resolverse directamente:
        p.mb-4 Nuevo ancho = ancho de la base × 0,80
        p.mb-4 #[b Ejemplo 1. Reducción de un ancho]
        p.mb-4 Si la base presenta un ancho de 25 cm:
        p.mb-0 • 25 × 20 % = 5 cm de reducción 
        p.mb-4 • 25 − 5 = 20 cm
        p.mb-3 Por tanto:
        p.mb-0 25 cm → 20 cm

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-12
        .titulo-sexto.mb-4
          h5 Tabla 2.
          | Ejemplos de aplicación
        .tabla-a.tab2
          table
            thead
              tr
                th Ancho inicial del patrón
                th Reducción del 20 %
                th Ancho resultante
            tbody
              tr
                td 18 cm
                td 3,6 cm
                td 14,4 cm
              tr
                td 20 cm
                td 4 cm
                td 16 cm
              tr
                td 22 cm
                td 4,4 cm
                td 17,6 cm
              tr
                td 24 cm
                td 4,8 cm
                td 19,2 cm
              tr
                td 25 cm
                td 5 cm
                td 20 cm
              tr
                td 26 cm
                td 5,2 cm
                td 20,8 cm

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ejemplo aplicado sobre un contorno corporal

    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-4 Supóngase un contorno de cadera de 96 cm. Si el sistema de patronaje trabaja con la cuarta parte del contorno:
        p.mb-4 96 ÷ 4 = 24 cm
        p.mb-4 La base inicial tendría como referencia 24 cm.
        p.mb-4 Si la premuestra y las características del tejido permiten trabajar inicialmente con una reducción del 20 %:
        p.mb-4 24 × 0,20 = 4,8 cm
        p.mb-4 24 − 4,8 = 19,2 cm
        p.mb-4 El ancho de trabajo resultante sería:
        p.mb-0 19,2 cm
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/54.png')  

    p.mb-4(data-aos="fade-right") Este resultado corresponde solamente al cálculo de reducción horizontal. Posteriormente deberán incorporarse las transformaciones propias de la pieza delantera y posterior, entrepierna, aberturas de pierna, altura de cintura y demás elementos que determine la tipología.

    p.mb-5(data-aos="fade-left") Importante: reducir el ancho un 20 % no significa disminuir todas las dimensiones del patrón un 20 %. Los largos, profundidades, recorridos de entrepierna, copas y otros componentes deben analizarse de manera independiente.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 ¿Qué ocurre con las pinzas?

    .row.mb-5(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/55.png')  
    
    p.mb-4(data-aos="fade-right") Las bases femeninas convencionales incorporan pinzas para distribuir diferencias entre contornos y permitir la adaptación de una superficie plana a los volúmenes corporales. En la base superior, por ejemplo, la pinza de busto organiza parte del volumen requerido para la región mamaria y puede trasladarse hacia diferentes zonas del patrón. 

    p.mb-5(data-aos="fade-left") Cuando se trabaja con tejido de punto, la elasticidad puede asumir parte de este ajuste. Por esta razón, durante la preparación del básico deben analizarse las pinzas antes de efectuar la transformación.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Situaciones sobre el tejido de punto en patronaje

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-left")
      .col-lg-3.d-none.d-lg-block
        img(src='@/assets/curso/tema1/56.png')
      .col-lg-9
        TabsA.color-acento-botones.mb-0
          .tarjeta.color-a.p-4(titulo="Buena elasticidad y ajuste directo")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Situación:] tejido con buena elasticidad y prenda de ajuste directo.
                p.mb-0 #[b Decisión posible:] reducir o eliminar determinadas pinzas, previa comprobación.
          .tarjeta.color-a.p-4(titulo="Elasticidad moderada")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Situación:] tejido con elasticidad moderada.
                p.mb-0 #[b Decisión posible:] conservar parcialmente el ajuste proporcionado por las pinzas.
          .tarjeta.color-a.p-4(titulo="Conformación del busto")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Situación:] prenda que requiere conformación del busto.
                p.mb-0 #[b Decisión posible:] trasladar el volumen hacia cortes o piezas de copa.
          .tarjeta.color-a.p-4(titulo="Brasier estructurado")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Situación:] brasier estructurado.
                p.mb-0 #[b Decisión posible:] no asumir que la elasticidad sustituye la construcción volumétrica de la copa.
          .tarjeta.color-a.p-4(titulo="<em>Bralette</em> flexible")
            .row.justify-content-center.align-items-center
              .col-lg-12 
                p.mb-4 #[b Situación:] #[em bralette] flexible.
                p.mb-0 #[b Decisión posible:] parte del ajuste puede resolverse mediante el comportamiento elástico del material.

    p.mb-5(data-aos="fade-right") Como se amplía en el apartado 2.2, en prendas como el #[em bralette,] una parte importante del ajuste puede obtenerse mediante la reducción dimensional del patrón en relación con la elongación del tejido. 

    .tit.mb-5(data-aos="fade-left")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Secuencia para preparar el básico

    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 1
              p.mb-4.text-center.mx-3 #[b Seleccionar el básico]
              p.mb-0.text-center.mx-3 Seleccionar el básico femenino correspondiente a la zona corporal que se va a intervenir.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 base superior, inferior o combinación de ambas según la prenda.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 2
              p.mb-4.text-center.mx-3 #[b Comprobar las medidas]
              p.mb-0.text-center.mx-3 Comprobar busto, cintura, cadera, largos y líneas estructurales.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 patrón base técnicamente controlado.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 3
              p.mb-4.text-center.mx-3 #[b Analizar el tejido]
              p.mb-0.text-center.mx-3 Analizar el tejido seleccionado.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 información sobre elongación y recuperación.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 4
              p.mb-4.text-center.mx-3 #[b Determinar la dirección de elasticidad]
              p.mb-0.text-center.mx-3 Determinar la dirección de mayor elasticidad.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 criterio para orientar las piezas y realizar reducciones.

    .row.justify-content-center.align-items-center.mb-0.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 5
              p.mb-4.text-center.mx-3 #[b Definir la reducción inicial]
              p.mb-0.text-center.mx-3 Definir el porcentaje inicial de reducción.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 para el ejercicio puede adoptarse 20 % en los anchos, cuando el tejido lo permita.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 6
              p.mb-4.text-center.mx-3 #[b Aplicar la reducción]
              p.mb-0.text-center.mx-3 Aplicar la reducción a busto, cintura, cadera u otros anchos pertinentes.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 base ajustada al comportamiento esperado del tejido.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 7
              p.mb-4.text-center.mx-3 #[b Analizar el tejido]
              p.mb-0.text-center.mx-3 Analizar las pinzas.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 definición de cuáles se conservan, reducen, trasladan o integran.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 8
              p.mb-4.text-center.mx-3 #[b Rectificar costados y curvas]
              p.mb-0.text-center.mx-3 Rectificar costados y curvas después de la reducción.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 continuidad entre los nuevos puntos del patrón.

    .row.justify-content-center.align-items-center.mb-4.mb-lg-5
      .col-lg-12
        .row.justify-content-center.align-items-stretch(data-aos="fade-right")
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-primario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 9
              p.mb-4.text-center.mx-3 #[b Realizar la transformación]
              p.mb-0.text-center.mx-3 Realizar la transformación correspondiente al modelo.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 #[em panty], tanga, #[em boyshort, bralette,] brasier, #[em body] u otra tipología.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-secundario.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 10
              p.mb-4.text-center.mx-3 #[b Elaborar una premuestra]
              p.mb-0.text-center.mx-3 Elaborar una premuestra con el material previsto.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 primera comprobación real del ajuste.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-contenido.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 11
              p.mb-4.text-center.mx-3 #[b Evaluar la premuestra]
              p.mb-0.text-center.mx-3 Evaluar tensión, cobertura, recuperación y estabilidad.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 identificación de correcciones necesarias.
          .col-md-6.col-xl.mb-4.mb-xl-0
            .tarjeta-numerada.color-acento-botones.p-4.h-100.mb-0
              .tarjeta-numerada__numero
                .h2 12
              p.mb-4.text-center.mx-3 #[b Ajustar el patrón]
              p.mb-0.text-center.mx-3 Ajustar el patrón y elaborar una nueva premuestra cuando sea necesario.
              p.mb-0.text-center.mx-3 #[b Resultado esperado:]
              p.mb-0.text-center.mx-3 patrón validado antes de su definición final.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Del básico a una prenda interior

    p.mb-5(data-aos="fade-left") Una vez preparada la base para tejido de punto, comienza propiamente la interpretación del modelo. El porcentaje de reducción no crea por sí solo el patrón de ropa interior; únicamente acondiciona la base para responder al comportamiento del material.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ejemplo: del básico inferior al #[em panty]
    
    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-2 En un #[em panty], después de reducir los anchos correspondientes, se intervienen principalmente:
        p.mb-2 - Altura de cintura.
        p.mb-2 - Recorrido del costado.
        p.mb-2 - Cobertura del delantero.
        p.mb-2 - Cobertura posterior.
        p.mb-2 - Abertura de pierna.
        p.mb-2 - Ancho y longitud de entrepierna.
        p.mb-4 - Recorrido de los bordes destinados a la aplicación de elástico. 
        p.mb-0 Estas variables permiten transformar una misma estructura inicial en #[em brief,] bikini, #[em hipster], tanga, #[em boyshort] u otras tipologías. Como se amplía en el apartado 2.1, la altura de cintura, el costado, la abertura de pierna, la cobertura posterior y la entrepierna constituyen variables fundamentales para diferenciar las prendas inferiores
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/57.png')  

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Ejemplo: del básico superior al #[em bralette]

    .row.justify-content-center.align-items.mb-5(data-aos="fade-left")
      .col-lg-7
        p.mb-1 Para desarrollar un #[em bralette] se parte de las referencias estructurales de la base superior y posteriormente se determinan:
        p.mb-1 • Línea de bajo busto.
        p.mb-1 • Cobertura del busto.
        p.mb-1 • Configuración del escote.
        p.mb-1 • Forma y división de las copas.
        p.mb-1 • Ancho de banda.
        p.mb-1 • Costados.
        p.mb-1 • Ubicación de tirantes.
        p.mb-3 • Nivel de soporte requerido. 
        p.mb-0 En este caso, la reducción del ancho debe relacionarse directamente con el comportamiento del tejido. Un material con buena elasticidad y recuperación puede permitir una base más ajustada, mientras que otro con menor capacidad de recuperación puede requerir modificaciones en la reducción o sistemas complementarios de estabilización.
      .col-lg-5.d-none.d-lg-block
        img(src='@/assets/curso/tema1/58.png')  

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 La premuestra determina la reducción definitiva

    p.mb-5(data-aos="fade-left") El 20 % funciona como un punto de partida, no como el cierre del proceso. Después de confeccionar la primera premuestra se analiza cómo responde la prenda en relación con el cuerpo y con las exigencias del modelo.

    .tit.mb-5(data-aos="fade-right")
      img(:src="require_src('@/assets/curso/tema1/sub.svg')")
      h3.mb-0 Análisis de premuestras

    .row.justify-content-center.align-items-center.mb-5(data-aos="fade-right")
      .col-lg-12
        SlyderF(columnas="col-md-6 col-xl-4")
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/59.svg')
            h4.text-center.mb-4 Prenda demasiado ajustada
            p.mb-0.text-center Posible decisión sobre el patrón: disminuir el porcentaje de reducción o ampliar zonas específicas.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/60.svg')
            h4.text-center.mb-4 Prenda con poca estabilidad
            p.mb-0.text-center Posible decisión sobre el patrón: revisar recuperación del tejido y reducción aplicada.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/61.svg')
            h4.text-center.mb-4 Exceso de material
            p.mb-0.text-center Posible decisión sobre el patrón: incrementar controladamente la reducción en la zona correspondiente.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/62.svg')
            h4.text-center.mb-4 Tensión concentrada en una zona
            p.mb-0.text-center Posible decisión sobre el patrón: redistribuir la reducción, no aumentar de manera general.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/63.svg')
            h4.text-center.mb-4 Cobertura insuficiente
            p.mb-0.text-center Posible decisión sobre el patrón: modificar el patrón de la zona afectada.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/64.svg')
            h4.text-center.mb-4 Entrepierna incómoda
            p.mb-0.text-center Posible decisión sobre el patrón: revisar ancho y longitud, independientemente de la reducción general.
          .tarjeta.tarjeta--slyder.b1.p-4
            .row.justify-content-center.align-items-center.mb-4.mt-3
              .col-12
                img.img-a.img-t(src='@/assets/curso/tema1/65.svg')
            h4.text-center.mb-4 Ajuste adecuado y buena recuperación
            p.mb-0.text-center Posible decisión sobre el patrón: mantener la reducción y validar el patrón.
    
    p.mb-5(data-aos="fade-right") Así, la fórmula puede comenzar en el papel, pero la validación ocurre en la premuestra. El patrón definitivo surge de la relación entre base corporal, porcentaje de reducción, propiedades del tejido, construcción de la prenda y comprobaciones realizadas durante el prototipado. En consecuencia, dos tejidos destinados al mismo modelo pueden requerir ajustes diferentes, incluso cuando parten exactamente del mismo básico femenino.

    .row.justify-content-center.align-items-center.mb-0(data-aos="fade-left")
      .col-lg-12
        img(src='@/assets/curso/tema1/66.svg')
        .row.justify-content-center.g-0
          .col-lg-12
            .tarjeta.color-acento-contenido.p-4.rounded-0.h-100
              .tarjeta.bg-white.p-4.p-lg-5.h-100
                TarjetaAudio.color-acento-botones.mb-0(
                texto="Pódcast: El tejido también decide el patrón"
                :audio="require_src('@/assets/actividad/audio/end-game-success.mp3')"
              ).mb-4
                p.mb-0 Para comprender cómo el comportamiento del tejido influye en las decisiones de ajuste y reducción del patrón, escuche el siguiente pódcast.


</template>

<script>
export default {
  name: 'Tema1',
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Contorno de busto',
        texto:
          'Acción para la base en tejido de punto: <br>reducir el ancho cuando el material tenga suficiente elongación y recuperación. <br><br><b>Consideración técnica:</b> la reducción depende del tejido y del nivel de ajuste requerido.',
        imagen: '@/assets/curso/tema1/42.png',
      },
      {
        titulo: 'Contorno de cintura',
        texto:
          'Acción para la base en tejido de punto: <br>ajustar horizontalmente para aproximar la base al cuerpo. <br><br><b>Consideración técnica:</b> debe evitarse una tensión excesiva en el contorno.',
        imagen: '@/assets/curso/tema1/43.png',
      },
      {
        titulo: 'Contorno de cadera',
        texto:
          'Acción para la base en tejido de punto: <br>reducir proporcionalmente el ancho cuando el tejido lo permita. <br><br><b>Consideración técnica:</b> es una referencia fundamental para panties, bodis y prendas inferiores.',
        imagen: '@/assets/curso/tema1/44.png',
      },
      {
        titulo: 'Pinzas',
        texto:
          'Acción para la base en tejido de punto: <br>analizar su permanencia, reducción, traslado o integración en cortes. <br><br><b>Consideración técnica:</b> no todas las pinzas se eliminan automáticamente por emplear tejido de punto.',
        imagen: '@/assets/curso/tema1/45.png',
      },
      {
        titulo: 'Largo de talle',
        texto:
          'Acción para la base en tejido de punto: <br>conservar inicialmente. <br><br><b>Consideración técnica:</b> no debe aplicarse la reducción horizontal del 20 % de manera automática a los largos.',
        imagen: '@/assets/curso/tema1/46.png',
      },
      {
        titulo: 'Línea de busto',
        texto:
          'Acción para la base en tejido de punto: <br>mantener como referencia estructural.<br><br><b>Consideración técnica:</b> permite desarrollar copas, cortes, escotes y bandas.',
        imagen: '@/assets/curso/tema1/47.png',
      },
      {
        titulo: 'Línea de cintura',
        texto:
          'Acción para la base en tejido de punto: <br>mantener como punto de control.<br><br><b>Consideración técnica:</b> facilita las transformaciones de prendas superiores e inferiores.',
        imagen: '@/assets/curso/tema1/48.png',
      },
      {
        titulo: 'Línea de cadera',
        texto:
          'Acción para la base en tejido de punto: <br>mantener y verificar. <br><br><b>Consideración técnica:</b> sirve como referencia para cobertura, altura y transformación de panties.',
        imagen: '@/assets/curso/tema1/49.png',
      },
      {
        titulo: 'Entrepierna',
        texto:
          'Acción para la base en tejido de punto: <br>ajustar según la tipología desarrollada. <br><br><b>Consideración técnica:</b> requiere comprobar longitud, ancho y correspondencia entre delantero y posterior.',
        imagen: '@/assets/curso/tema1/50.png',
      },
      {
        titulo: 'Costados',
        texto:
          'Acción para la base en tejido de punto: <br>redefinir después de aplicar la reducción. <br><br><b>Consideración técnica:</b> deben conservar continuidad y correspondencia entre las piezas.',
        imagen: '@/assets/curso/tema1/51.png',
      },
    ],
  }),
}
</script>

<style lang="sass"></style>
