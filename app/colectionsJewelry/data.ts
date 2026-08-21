export type WatchFeature = {
  label: string;
  value: string;
};

export type Watch = {
  name: string;
  description: string;
  price?: string;
  images?: string[];
  features?: WatchFeature[];
  curiosity?: string;
};

export type Collection = {
  label: string;
  heroBg?: string;
  backBanner: string,
  watches: Watch[];
};

/* Images */
import noveltiousWatch from '../../public/categories/category_NOVELTIES.jpg'
import historiadotWatch from '../../public/categories/category_HISTORIADOR.jpg'
import hemiwayWatch from '../../public/categories/category_HEMINGWAY.jpg'
import primeraWatch from '../../public/categories/category_PrimeraDama.jpg'
import robustoWatch from '../../public/categories/category_Robusto.jpg'
import prominentWatch from '../../public/categories/category_RPominente.jpg'
import esplendWatch from '../../public/categories/category_Esplendidos.jpg'
import churchillWatch from '../../public/categories/category_Churchill.jpg'
import buceadorWatch from '../../public/categories/category_Buceador.jpg'
import conographWatch from '../../public/categories/category_Chrono.jpg'
import exclusiveSelectWatch from '../../public/categories/category_Exclusive.jpg'
import allWatches from '../../public/categories/category_allwatches.jpg'




export const collectionsJewelry = [
  { label: 'Necklaces & Pendants', bg: '/jewelryCats/cat_Necklaces.jpg'},
  { label: 'Bracelets', bg: '/jewelryCats/cat_Brazalets.jpg'},
  { label: 'Earrings', bg: '/jewelryCats/cat_Earrings.jpg'},
  { label: 'Rings', bg: '/jewelryCats/cat_Rings.jpg'},
  { label: 'Silver Jewelry', bg: '/jewelryCats/cat_Silver.jpg'},
  { label: "Men's Jewelry", bg: '/jewelryCats/cat_Men-Jewer.jpg'},
];

export const collections: Collection[] = [
  {
    label: 'Necklaces & Pendants',
    heroBg: 'public/jewelry/sliceUp-Fashion.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Necklace 01',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.  Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/jewelry/jewels/necklace/necklace01.jpg',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y cronógrafo central. Segundos pequeños a las 9 horas, contador de minutos a las 12 horas, contador de horas a las 6 horas. Visualización de fechas a las 6h' },
          { label: 'Movimientos', value: 'Valjoux 7750, automática, diámetro 30 mm, altura 7,9 mm. Reserva de marcha: 48 horas' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 41 mm, altura 15,25 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante. Resistente al agua hasta 5 ATM, empujadores rectangulares de arranque/parada y reinicio, tornillado y fondo traslúdico en cristal zafiro. Fondo de caja personalizado grabado con el año del Gran Premio y con forma de volante, con un emblema CyS 2N dorado aplicado con detalles en rojo' },
          { label: 'Dial', value: "Carátula vintage marrón con encimeras color mostaza" },
          { label: 'Manos', value: "Manecillas de hora, minuto y segundos pequeños en forma de hoja, aguja de segundos cronógrafo con punta roja, manecillas de minutos y horas en forma de flecha roja" },
          { label: 'Correa', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Hebilla', value: 'Correa negra de cuero mate de ternera «driving style» con costuras a juego en senapé y forro a juego' },
          { label: 'Limited Edition', value: 'LimitadaLimitado a 162 piezas. El número de piezas refleja la distancia en millas de cada carrera en circuito' },
          { label: 'Embalage', value: 'Caja de humidor estándar PE100' },
        ],
        curiosity: "¿Sabías que los colores están inspirados en el cartel original del Gran Prix?",
      },{
        name: 'Necklace 02',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.  Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/jewelry/jewels/necklace/Necklace02-600x600.jpg',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y cronógrafo central. Segundos pequeños a las 9 horas, contador de minutos a las 12 horas, contador de horas a las 6 horas. Visualización de fechas a las 6h' },
          { label: 'Movimientos', value: 'Valjoux 7750, automática, diámetro 30 mm, altura 7,9 mm. Reserva de marcha: 48 horas' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 41 mm, altura 15,25 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante. Resistente al agua hasta 5 ATM, empujadores rectangulares de arranque/parada y reinicio, tornillado y fondo traslúdico en cristal zafiro. Fondo de caja personalizado grabado con el año del Gran Premio y con forma de volante, con un emblema CyS 2N dorado aplicado con detalles en rojo' },
          { label: 'Dial', value: "Carátula vintage marrón con encimeras color mostaza" },
          { label: 'Manos', value: "Manecillas de hora, minuto y segundos pequeños en forma de hoja, aguja de segundos cronógrafo con punta roja, manecillas de minutos y horas en forma de flecha roja" },
          { label: 'Correa', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Hebilla', value: 'Correa negra de cuero mate de ternera «driving style» con costuras a juego en senapé y forro a juego' },
          { label: 'Limited Edition', value: 'LimitadaLimitado a 162 piezas. El número de piezas refleja la distancia en millas de cada carrera en circuito' },
          { label: 'Embalage', value: 'Caja de humidor estándar PE100' },
        ],
        curiosity: "¿Sabías que los colores están inspirados en el cartel original del Gran Prix?",
      },{
        name: 'Necklace 03',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.  Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          ' /jewelry/jewels/necklace/Necklace03-600x600.jpg',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y cronógrafo central. Segundos pequeños a las 9 horas, contador de minutos a las 12 horas, contador de horas a las 6 horas. Visualización de fechas a las 6h' },
          { label: 'Movimientos', value: 'Valjoux 7750, automática, diámetro 30 mm, altura 7,9 mm. Reserva de marcha: 48 horas' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 41 mm, altura 15,25 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante. Resistente al agua hasta 5 ATM, empujadores rectangulares de arranque/parada y reinicio, tornillado y fondo traslúdico en cristal zafiro. Fondo de caja personalizado grabado con el año del Gran Premio y con forma de volante, con un emblema CyS 2N dorado aplicado con detalles en rojo' },
          { label: 'Dial', value: "Carátula vintage marrón con encimeras color mostaza" },
          { label: 'Manos', value: "Manecillas de hora, minuto y segundos pequeños en forma de hoja, aguja de segundos cronógrafo con punta roja, manecillas de minutos y horas en forma de flecha roja" },
          { label: 'Correa', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Hebilla', value: 'Correa negra de cuero mate de ternera «driving style» con costuras a juego en senapé y forro a juego' },
          { label: 'Limited Edition', value: 'LimitadaLimitado a 162 piezas. El número de piezas refleja la distancia en millas de cada carrera en circuito' },
          { label: 'Embalage', value: 'Caja de humidor estándar PE100' },
        ],
        curiosity: "¿Sabías que los colores están inspirados en el cartel original del Gran Prix?",
      },
    ],
  },
  {
    label: 'Bracelets',
    heroBg: '/images/watches/historiador.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Bracelet 01',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/jewelry/jewels/rings/brace01-600x600.jpg',
          '/jewelry/jewels/rings/brace02-600x600.jpg'
        ],
        features: [
          { label: 'Movimientos', value: 'La Joux-Perret G100, 11 1/2», automática, diámetro: 25,6 mm, altura: 4,45 mm, Reserva de marcha: 68 horas, 24 nabas, 28800 A/h, peso oscilante terminado con el emblema CyS aplicado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 10,85 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante, resistente al agua hasta 5 ATM, fondo de caja transparente atornillado con cristal zafiro' },
          { label: 'Dial', value: 'Guillochè antracita ahumada Sunray Dial laquerada. La fecha presenta números blancos en un disco negro. Un emblema CyS aplicado se posiciona a las 12 en punto' },
          { label: 'Manos', value: 'Manecillas de horas y minutos de losangé. Segunda mano central con punta roja' },
          { label: 'Correa', value: 'Pulsera de ternera antracita o acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Embalaje', value: 'Caja pequeña de humidor – PE211-2020' },
        ],
        curiosity: "¿Sabías que el nombre Gran Reserva refleja las excepcionales capacidades técnicas de este modelo—concretamente, su reserva de energía de 68 horas? Impulsado por el mecanismo automático La Joux-Perret G100, este reloj garantiza una autonomía impresionante, manteniendo una hora fiable incluso cuando no se lleva casi tres días sin usarlo. Con una esfera lacada guilloché y rayo sol en tonos ricos como rojo, azul, verde o antracita, combina hábilmente la precisión suiza con el espíritu latino.",
      },{
        name: 'Bracelet 02',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/jewelry/jewels/bracelets/brace03-600x600.jpg'
        ],
        features: [
          { label: 'Movimientos', value: 'La Joux-Perret G100, 11 1/2», automática, diámetro: 25,6 mm, altura: 4,45 mm, Reserva de marcha: 68 horas, 24 nabas, 28800 A/h, peso oscilante terminado con el emblema CyS aplicado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 10,85 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante, resistente al agua hasta 5 ATM, fondo de caja transparente atornillado con cristal zafiro' },
          { label: 'Dial', value: 'Guillochè antracita ahumada Sunray Dial laquerada. La fecha presenta números blancos en un disco negro. Un emblema CyS aplicado se posiciona a las 12 en punto' },
          { label: 'Manos', value: 'Manecillas de horas y minutos de losangé. Segunda mano central con punta roja' },
          { label: 'Correa', value: 'Pulsera de ternera antracita o acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Embalaje', value: 'Caja pequeña de humidor – PE211-2020' },
        ],
        curiosity: "¿Sabías que el nombre Gran Reserva refleja las excepcionales capacidades técnicas de este modelo—concretamente, su reserva de energía de 68 horas? Impulsado por el mecanismo automático La Joux-Perret G100, este reloj garantiza una autonomía impresionante, manteniendo una hora fiable incluso cuando no se lleva casi tres días sin usarlo. Con una esfera lacada guilloché y rayo sol en tonos ricos como rojo, azul, verde o antracita, combina hábilmente la precisión suiza con el espíritu latino.",
      }
    ],
  },
  {
    label: 'Earrings',
    heroBg: '/images/watches/hemingway.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Earring 01',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings01-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Necklace 02',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings02-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Necklace 03',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Necklace 04',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings04-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Necklace 05',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings05-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Necklace 06',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/earrings/Earrings06-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
    ],
  },
  {
    label: 'Rings',
    heroBg: '/images/watches/primera-dama.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Ring 01',
        price: '2.450,00',
        description: "El Cuervo y Sobrinos Historiador Primera Dama está inspirado en la Habana de los años 30, un mundo en el que el baile, la música y los placeres hedonistas eran la norma del día. Femenino y elegante, este reloj de mujer, que presenta numerosos detalles llamativos, es adecuado para cualquier ocasión.",
        images: [
          '/jewelry/jewels/rings/ring01-600x600.jpg',
          '/jewelry/jewels/rings/ring01b-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas y minutos' },
          { label: 'Movimientos', value: 'Ronda 772, 73/4»’, cuarzo, diámetro 17,2 mm, altura 2,5 mm, longevía 34 meses, 5 piedrasRonda 772, 73/4»’, cuarzo, diámetro 17,2 mm, altura 2,5 mm, larga vida útil 34 meses, 5 rubis' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 36 mm, altura 7,8 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante, resistente al agua hasta 5 ATM, atornillado con 4 tornillos' },
          { label: 'Dial', value: 'Caráter de piedras ojo de tigre con tres diamantes, vvs, 0.018 quilates, emblema CyS aplicado' },
          { label: 'Manos', value: 'Hora y minutos con tratamiento con rodio' },
          { label: 'Correa', value: 'Pulsera de caimán de Luisiana de alto brillo y metal de acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla de acero inoxidable grabada con el emblema CyS' },
          { label: 'Embalaje', value: 'Caja pequeña de humidor – PE211' },
        ],
        curiosity: "¿Sabías que la Primera Dama se inspira en la glamurosa Habana de los años 30, una época en la que la ciudad era un centro de lujo, música y baile? Este elegante reloj cuenta con una caja de acero inoxidable de 36 mm y una esfera de nácar adornada con diamantes, lo que añade un toque de sofisticación. El reloj está disponible con una correa de caimán de Luisiana brillante y una pulsera de acero inoxidable a juego.",
      },

      {
        name: 'Ring 02',
        price: '2.330,00',
        description: "El Cuervo y Sobrinos Historiador Primera Dama está inspirado en la Habana de los años 30, un mundo en el que el baile, la música y los placeres hedonistas eran la norma del día. Femenino y elegante, este reloj de mujer, que presenta numerosos detalles llamativos, es adecuado para cualquier ocasión.",
        images: [
          '/jewelry/jewels/rings/ring02-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas y minutos' },
          { label: 'Movimientos', value: 'Ronda 772, 73/4»’, cuarzo, diámetro 17,2 mm, altura 2,5 mm, larga vida útil 34 meses, 5 rubis' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 36 mm, altura 7,8 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 5 ATM, atornillado con 4 tornillos' },
          { label: 'Dial', value: 'Nácar blanca con tres diamantes, vvs, 0.018 quilates, emblema CyS aplicado' },
          { label: 'Manos', value: 'Hora y minutos con tratamiento con rodio' },
          { label: 'Correa', value: 'Pulsera de caimán de Luisiana de alto brillo y metal de acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla de acero inoxidable grabada con el emblema CyS' },
          { label: 'Embalaje', value: 'PE115 – Estuche perlado blanco con interior de terciopelo' },
        ],
        curiosity: "¿Sabías que la Primera Dama se inspira en la glamurosa Habana de los años 30, una época en la que la ciudad era un centro de lujo, música y baile? Este elegante reloj cuenta con una caja de acero inoxidable de 36 mm y una esfera de nácar adornada con diamantes, lo que añade un toque de sofisticación. . El reloj está disponible con una correa de caimán de Luisiana brillante y una pulsera de acero inoxidable a juego.",
      },{
        name: 'Ring 03',
        price: '2.330,00',
        description: "El Cuervo y Sobrinos Historiador Primera Dama está inspirado en la Habana de los años 30, un mundo en el que el baile, la música y los placeres hedonistas eran la norma del día. Femenino y elegante, este reloj de mujer, que presenta numerosos detalles llamativos, es adecuado para cualquier ocasión.",
        images: [
          '/jewelry/jewels/rings/ring03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas y minutos' },
          { label: 'Movimientos', value: 'Ronda 772, 73/4»’, cuarzo, diámetro 17,2 mm, altura 2,5 mm, larga vida útil 34 meses, 5 rubis' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 36 mm, altura 7,8 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 5 ATM, atornillado con 4 tornillos' },
          { label: 'Dial', value: 'Nácar blanca con tres diamantes, vvs, 0.018 quilates, emblema CyS aplicado' },
          { label: 'Manos', value: 'Hora y minutos con tratamiento con rodio' },
          { label: 'Correa', value: 'Pulsera de caimán de Luisiana de alto brillo y metal de acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla de acero inoxidable grabada con el emblema CyS' },
          { label: 'Embalaje', value: 'PE115 – Estuche perlado blanco con interior de terciopelo' },
        ],
        curiosity: "¿Sabías que la Primera Dama se inspira en la glamurosa Habana de los años 30, una época en la que la ciudad era un centro de lujo, música y baile? Este elegante reloj cuenta con una caja de acero inoxidable de 36 mm y una esfera de nácar adornada con diamantes, lo que añade un toque de sofisticación. . El reloj está disponible con una correa de caimán de Luisiana brillante y una pulsera de acero inoxidable a juego.",
      },
    ],
  },
  {
    label: 'Silver Jewelry',
    heroBg: '/images/watches/robarto.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Silver Jewelry',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/bracelets/brace03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Silver Jewelry ',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/bracelets/brace03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },{
        name: 'Silver Jewelry  ',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/jewelry/jewels/bracelets/brace03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Esfera crema, recubrimiento de índices Super-LumiNova® y emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero azul y puntero plateado con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón claro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
    ],
  },
  {
    label: "Men's Jewelry",
    heroBg: '/images/watches/prominente.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Men Jewelry',
        price: '6.550,00',
        description: "Dotado de dos pantallas, impulsadas por dos movimientos independientes, The Prominente Icónico Doble Tiempo puede proyectarse en dos momentos diferentes simultáneamente, independientemente de la diferencia horaria entre ambas ubicaciones.",
        images: [
          '/jewelry/jewels/mens-jewelry/Men-Jewel01-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas y minutos y segunda zona horaria con indicación de 24 horas' },
          { label: 'Movimientos', value: 'ETA 2671, 11 1/2», automática, diámetro: 17,20 mm, altura: 4,80 mm, 44 horas, 25 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, 30,5 x 52 mm, altura 9,5 mm, cristal de zafiro curvado con recubrimiento antirreflejante, resistente al agua hasta 3 ATM, doble caja trasera abierta' },
          { label: 'Dial', value: 'Esfera plateada «guilloché», índices árabes superiores en relieve y índices árabes inferiores impresos, emblema CyS aplicado' },
          { label: 'Manos', value: 'Breguet de color azul con horas y minutos con Super-LumiNova®' },
          { label: 'Correa', value: 'Pulsera azul de alto brillo de caimán de Luisiana o acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
            
          { label: 'Embalaje', value: 'Caja de humidor estándar – PE 100' },
        ],
        curiosity: "¿Sabías que el Prominente Icónico Doble Tiempo te permite seguir dos husos horarios a la vez, gracias a sus dos movimientos automáticos dentro de una audaz caja rectangular Art Decó? Con coronas separadas y esferas guilloché, números arábigos estampados y agujas al estilo Breguet con Super-LumiNova®, es un homenaje elegante a la época dorada de La Habana, perfecta para viajeros que viven entre mundos.",
      },{
        name: 'Men Jewelry 02',
        price: '6.550,00',
        description: "Dotado de dos pantallas, impulsadas por dos movimientos independientes, The Prominente Icónico Doble Tiempo puede proyectarse en dos momentos diferentes simultáneamente, independientemente de la diferencia horaria entre ambas ubicaciones.",
        images: [
          '/jewelry/jewels/mens-jewelry/Men-Jewel02-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas y minutos y segunda zona horaria con indicación de 24 horas' },
          { label: 'Movimientos', value: 'ETA 2671, 11 1/2», automática, diámetro: 17,20 mm, altura: 4,80 mm, 44 horas, 25 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, 30,5 x 52 mm, altura 9,5 mm, cristal de zafiro curvado con recubrimiento antirreflejante, resistente al agua hasta 3 ATM, doble caja trasera abierta' },
          { label: 'Dial', value: 'Esfera plateada «guilloché», índices árabes superiores en relieve y índices árabes inferiores impresos, emblema CyS aplicado' },
          { label: 'Manos', value: 'Breguet de color azul con horas y minutos con Super-LumiNova®' },
          { label: 'Correa', value: 'Pulsera azul de alto brillo de caimán de Luisiana o acero inoxidable' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
            
          { label: 'Embalaje', value: 'Caja de humidor estándar – PE 100' },
        ],
        curiosity: "¿Sabías que el Prominente Icónico Doble Tiempo te permite seguir dos husos horarios a la vez, gracias a sus dos movimientos automáticos dentro de una audaz caja rectangular Art Decó? Con coronas separadas y esferas guilloché, números arábigos estampados y agujas al estilo Breguet con Super-LumiNova®, es un homenaje elegante a la época dorada de La Habana, perfecta para viajeros que viven entre mundos.",
      },
    ],
  },
  {
    label: 'View All Jewelry',
    heroBg: '/images/watches/esplendidos.jpg',
    backBanner: '/jewelry/sliceUp-Fashion.jpg',
    watches: [
      {
        name: 'Heritage',
        price: '5.240,00',
        description: "El Espléndidos Heritage presenta la inconfundible caja rectangular curva que apareció por primera vez en los diseños de Cuervo y Sobrinos durante los años 30, la época de mayor éxito internacional de la marca. Esta silueta icónica, revivida en su espíritu original, abraza líneas suaves y proporciones sofisticadas que se enroscan cómodamente alrededor de la muñeca, irradiando encanto vintage y un alma latina inconfundible. Reserva de energía de 68 horas.",
        images: [
          '/watches/esplendidos/heritage/2452.1HB-Soldier-Web_Update-600x6001.png',
          '/watches/esplendidos/heritage/2452.1HB-Perspective-3-600x6002.png',
          '/watches/esplendidos/heritage/2452.1HB-Perspective-1-600x6003.png',
          '/watches/esplendidos/heritage/2452.1HB-Perspective-4-600x6004.png',
          '/watches/esplendidos/heritage/2452.1HB-Perspective-2-600x6005.png',
          '/watches/esplendidos/heritage/2452.1HB_Wristshot-600x6006.jpg',
          '/watches/esplendidos/heritage/historiador-tradicion-san-rafael-3-1-600x6007.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y fecha a las 6h' },
          { label: 'Movimientos', value: 'La Joux Perret G120, automática, diámetro: 25,6 mm, altura: 5,45 mm, reserva de marcha: 68 horas, 29 piedras, 28800 A/h, peso oscilante con decoración en abanico y emblema CyS aplicados. Execution Premium (Arriba)' },
          { label: 'Caso', value: 'Acero inoxidable, 36 x 47 mm, altura 13 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante, resistente al agua hasta 3 ATM, fondo de caja transparente atornillado con cristal de zafiro' },
          { label: 'Dial', value: 'Caráter negro y plateado, índices aplicados en negro, y el emblema CyS aplicado en plata y rojo. Caráter lacado de varios niveles, anillo aplicado atornillado, centro al estilo Clou de Paris' },
          { label: 'Manos', value: 'Horas, minutos y segundos pequeños color plata, aguja de segundos pequeños con punta roja' },
          { label: 'Correa', value: 'Caimán negro mate de Luisiana' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'No especificada' },
          { label: 'Embalaje', value: 'Caja de humidor estándar – PE 100' },
        ],
        curiosity: "El diseño de la caja rectangular curva apareció por primera vez en los modelos de la marca durante los años 30.",
      },{
        name: 'VITOLA',
        price: '5.100,00',
        description: 'La esfera de los Espléndidos Vitola presenta un motivo de hojas, que emula la apariencia de las hojas de tabaco. Además, los índices aplicados están diseñados para parecerse a los famosos puros cubanos.',
        images: [
          '/watches/esplendidos/vitola/2452.1VT-Render-Web-600x6001.png',
          '/watches/esplendidos/vitola/2452.1VT-Perspective-2-600x6002.png',
          '/watches/esplendidos/vitola/2452.1VT-Perspectve-1-Web-600x6003.png',
          '/watches/esplendidos/vitola/2452.1HLE-Perspective-2-1-600x6004.png',
          '/watches/esplendidos/vitola/2452.1VT-Wristshot-600x6005.png',
          '/watches/esplendidos/vitola/historiador-tradicion-san-rafael-3-1-600x6006.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y fecha a las 6h' },
          { label: 'Movimientos', value: 'La Joux Perret G120, automática, diámetro: 25,6 mm, altura: 5,45 mm, reserva de marcha: 68 horas, 29 rubias, 28800 A/h, peso oscilante con decoración en abanico y emblema CyS aplicado Premium de ejecución (Parte superior)' },
          { label: 'Caso', value: 'Acero inoxidable, 36 x 47 mm, altura 13 mm, cristal de zafiro con recubrimiento antirreflejante, resistente al agua hasta 3 ATM, cristal de zafiro doble curvado con recubrimiento antirreflejante, fondo de caja transparente atornillado con cristal de zafiro' },
          { label: 'Dial', value: 'Marrón con hojas de tabaco impresas, índices aplicados en oro rosa y emblema CyS aplicado con detalles rojos' },
          { label: 'Manos', value: 'Manecillas de horas, minutos y segundos pequeños color dorado rosado, pequeña manecilla de segundos con punta roja' },
          { label: 'Correa', value: 'Caimán dorado de alto brillo de Luisiana' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
            
          { label: 'Embalaje', value: 'Caja de humidor estándar – PE100' },
        ],
        curiosity: 'La esfera de los Espléndidos Vitola presenta un motivo de hojas, que emula la apariencia de las hojas de tabaco. Además, los índices aplicados están diseñados para parecerse a los famosos puros cubanos.',
      }
    ],
  },
];

