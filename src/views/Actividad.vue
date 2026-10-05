<template lang="pug">
  .curso-main-container.pb-3
    BannerInterno(icono="far fa-question-circle" titulo="Actividad didáctica")
    .container.tarjeta.tarjeta--blanca.p-4.p-md-5
      // Para cuestionario usar: <ActividadController :cuestionario="cuestionario"/>
      // Para parrafo usar: <ActividadController :parrafo="parrafo"/>
      #Actividad                
      <ActividadController :cuestionario="cuestionario"/>
  
  </template>

<script>
import ActividadController from '@ecored-sena/boulder-kit/plugin/components/actividad/ActividadController.vue'

export default {
  name: 'ActividadDidactica',
  components: {
    ActividadController,
  },
  data: () => ({
    cuestionario: {
      tema: 'Patronaje de prendas interiores femeninas',
      titulo: 'Cuestionario',
      introduccion:
        '<b> Objetivo:</b> verificar la apropiación de procedimientos técnicos para elaborar patrones de prendas interiores femeninas según modelo, material, ajuste y despiece.',
      barajarPreguntas: true,
      titulo_aprobado: '¡BUEN TRABAJO!',
      titulo_reprobado: 'VUELVA A INTENTARLO',
      preguntas: [
        {
          id: 1,
          texto:
            '¿Qué función cumple el patronaje en el desarrollo de prendas interiores femeninas?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Decoración final del producto sin control técnico.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Traducción del cuerpo a patrones bidimensionales.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Selección comercial de etiquetas para exhibición.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Sustitución total de pruebas y premuestras.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 2,
          texto:
            '¿Qué diferencia principal presenta el patronaje industrial frente al patronaje sobre medidas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Trabaja con tablas estandarizadas para producción seriada.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Elimina toda necesidad de escalado y gradación.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Utiliza únicamente maniquíes para piezas únicas.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Depende siempre de cuatro pruebas personales.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 3,
          texto:
            '¿Qué información debe incluir cada pieza durante el despiece del patrón?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto:
                'Nombre, referencia, talla, cantidad a cortar, piquetes y aplome.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Precio, proveedor, vitrina, publicidad y descuento.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Color de temporada, marca comercial y empaque.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Inventario, venta, reclamo, factura y despacho.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 4,
          texto:
            '¿Qué representa la base superior femenina en el patronaje de prendas interiores?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Molde exclusivo para pantalones de línea exterior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Patrón desde cuello hasta línea de cintura.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Listado comercial de colores y acabados textiles.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ficha contable para costos de producción.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 5,
          texto:
            '¿Qué recurso permite redistribuir el volumen del busto dentro del patrón?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'El ancho de bota del básico inferior.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'La línea de empaque de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'El traslado técnico de pinzas correctivas.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'La referencia comercial del catálogo digital.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 6,
          texto:
            '¿Qué función cumplen las pinzas en el sistema de ajuste del patronaje femenino?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Controlar y distribuir volúmenes corporales.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Reemplazar completamente las líneas de corte.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Eliminar la necesidad de medidas corporales.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Definir únicamente el precio de venta.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 7,
          texto:
            '¿Qué medidas fundamentan el trazado del básico inferior femenino?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Busto, escote, manga, copa y tirante.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Cintura, cadera, tiro y largo total.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Precio, colección, empaque y referencia externa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Marca, tendencia, etiqueta y canal comercial.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 8,
          texto:
            '¿Por qué no debe trasladarse directamente una base corporal al tejido de punto?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Porque el tejido siempre anula toda medida.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Porque la prenda pierde su nombre comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Porque el material exige tintura previa obligatoria.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Porque deben analizarse elongación y recuperación.',
              esCorrecta: true,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 9,
          texto:
            '¿Qué propiedad orienta principalmente la reducción de busto, cintura y cadera?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Elongación horizontal del tejido seleccionado.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Altura decorativa del empaque comercial.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Cantidad de etiquetas incluidas por prenda.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Nombre del proveedor de maquinaria.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 10,
          texto:
            '¿Qué significa aplicar una reducción inicial del 20 % en anchos?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Disminuir todas las dimensiones del patrón igualmente.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Usar siempre la misma fórmula sin prueba.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Tomar una referencia inicial validable en premuestra.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cambiar el sistema de tallas por intuición.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 11,
          texto:
            '¿Qué decisión corresponde cuando la premuestra resulta demasiado ajustada?',
          imagen: '@/assets/actividad/imagen1.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Eliminar toda referencia de entrepierna.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Disminuir reducción o ampliar zonas específicas.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Aumentar la tensión general del elástico.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Ignorar el comportamiento real del tejido.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 12,
          texto:
            '¿Qué variables diferencian principalmente las tipologías inferiores íntimas?',
          imagen: '@/assets/actividad/imagen2.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Logo, empaque, etiqueta, fotografía y precio.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Publicidad, vitrina, promoción, canal y factura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto:
                'Altura, costado, abertura de pierna y cobertura posterior.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Inventario, despacho, factura, lote y descuento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 13,
          texto:
            '¿Qué caracteriza técnicamente al <em>brief</em> o <em>panty</em> clásico?',
          imagen: '@/assets/actividad/imagen3.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Cobertura amplia delantera y posterior.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Cobertura posterior mínima y franja estrecha.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Extensión marcada hacia el muslo superior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Centro delantero reducido de escote profundo.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 14,
          texto:
            '¿Qué transformación identifica de manera general a la tipología bikini?',
          imagen: '@/assets/actividad/imagen4.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Aumento del largo hasta cubrir el muslo.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Reducción de altura respecto al <em>brief</em>.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Eliminación completa de la zona delantera.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Construcción obligatoria con copa rígida.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 15,
          texto:
            '¿Qué consideración técnica requiere el <em>hipster</em> o <em>panty</em> de cadera?',
          imagen: '@/assets/actividad/imagen5.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Trasladar la cintura anatómica sin compensaciones.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Ubicar la copa sobre la línea de bajo busto.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Reorganizar el recorrido superior sobre la cadera.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Eliminar la relación entre delantero y posterior.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 16,
          texto:
            '¿Qué modificación distingue al <em>boyshort</em> dentro de las prendas inferiores?',
          imagen: '@/assets/actividad/imagen6.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Reduce toda cobertura posterior hasta una franja.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Extiende la prenda hacia el muslo superior.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Elimina la entrepierna del patrón base inferior.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Reemplaza costados por copas independientes.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 17,
          texto:
            '¿Qué componentes resultan centrales en el patronaje de brasieres estructurados?',
          imagen: '@/assets/actividad/imagen7.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Copa, banda, puente, costados y tirantes.',
              esCorrecta: true,
            },
            {
              id: 'b',
              texto: 'Entrepierna, tiro, bota, rodilla y costado.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Bolsillo, puño, charretera, cuello y solapa.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Etiqueta, empaque, vitrina, factura y descuento.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 18,
          texto:
            '¿Qué caracteriza al <em>bralette</em> frente a un brasier estructurado?',
          imagen: '@/assets/actividad/imagen8.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Mayor rigidez obligatoria en copa y aro.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Construcción flexible con tejidos elásticos.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Ausencia total de cobertura en busto.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Uso exclusivo de materiales no extensibles.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 19,
          texto:
            '¿Qué indica el símbolo de hilo de tela en la señalización del patrón?',
          imagen: '@/assets/actividad/imagen9.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Lugar exacto para ubicar botones decorativos.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Punto donde finaliza la línea de costura.',
              esCorrecta: false,
            },
            {
              id: 'c',
              texto: 'Orientación de la pieza respecto a la urdimbre.',
              esCorrecta: true,
            },
            {
              id: 'd',
              texto: 'Cantidad de piezas que deben venderse.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
        {
          id: 20,
          texto:
            '¿Qué función cumplen los piquetes dentro de la información técnica del patrón?',
          imagen: '@/assets/actividad/imagen10.png',
          barajarRespuestas: true,
          opciones: [
            {
              id: 'a',
              texto: 'Definir precio y descuento de la prenda.',
              esCorrecta: false,
            },
            {
              id: 'b',
              texto: 'Alinear costuras y puntos de unión.',
              esCorrecta: true,
            },
            {
              id: 'c',
              texto: 'Sustituir la ficha técnica del modelo.',
              esCorrecta: false,
            },
            {
              id: 'd',
              texto: 'Modificar automáticamente todas las tallas.',
              esCorrecta: false,
            },
          ],
          mensaje_correcto:
            'Se evidencia comprensión de los conceptos fundamentales abordados en el componente formativo.',
          mensaje_incorrecto:
            'Revise nuevamente el contenido del componente formativo.',
        },
      ],
      mensaje_final_aprobado: 'Ha superado la actividad.',
      mensaje_final_reprobado:
        'Le recomendamos volver a revisar el componente formativo e intentar nuevamente la actividad didáctica.',
    },
  }),
}
</script>
