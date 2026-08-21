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



export const collectionsFashion = [
  { label: "Women's clothes", bg: '/fashionCat/cat_Woman2-Fashion.jpg'},
  { label: 'Guayaberas', bg: '/fashionCat/cat_Men-Fashion.jpg'},
  { label: 'Purse', bg: '/fashionCat/cat_Purse.jpg'},
];

export const collections: Collection[] = [
  {
    label: "Women's clothes",
    heroBg: '/images/watches/novelius.jpg',
    backBanner: '/images/fashion/sliceUp-Fashion01.jpg',
    watches: [
      {
        name: 'Fashion 01',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.  Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/fashion/guaya/fashion01-600x600.jpg',
          '/fashion/guaya/fashion01b-600x600.jpg'
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
      {
        name: 'Fashion 02',
        price: '6.990,00',
        description: " Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza. Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/fashion/guaya/fashion02-600x600.jpg',
          '/fashion/guaya/fashion02b-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y cronógrafo central. Segundos pequeños a las 9 horas, contador de minutos a las 12 horas, contador de horas a las 6 horas. Visualización de fechas a las 6h' },
          { label: 'Movimientos', value: 'Valjoux 7750, automática, diámetro 30 mm, altura 7,9 mm. Reserva de marcha: 48 horas' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 41 mm, altura 15,25 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante. Resistente al agua hasta 5 ATM, empujadores rectangulares de arranque/parada y reinicio, tornillado y fondo traslúdico en cristal zafiro. Fondo de caja personalizado grabado con el año del Gran Premio y con forma de volante, con un emblema CyS 2N dorado aplicado con detalles en rojo' },
          { label: 'Dial', value: 'Dial amarillo de carreras con contadores verdes' },
          { label: 'Manos', value: 'Manecillas de hora, minuto y segundos pequeños en forma de hoja, aguja de segundos cronógrafo con punta roja, manecillas de minutos y horas en forma de flecha roja' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Correa', value: 'Correa negra de cuero mate de pantorrilla «driving style» con costuras a juego en verde y forro a juego' },
        ],
        curiosity: "¿Sabías que los colores están inspirados en el cartel original del Gran Prix?",
      },
      {
        name: 'Fashion 03',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.",
        images: [
          '/fashion/guaya/fashion03-600x600.jpg',
          '/fashion/guaya/fashion03b-600x600.jpg'
          
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos pequeños y cronógrafo central. Segundos pequeños a las 9 horas, contador de minutos a las 12 horas, contador de horas a las 6 horas. Visualización de fechas a las 6h' },
          { label: 'Movimientos', value: 'Valjoux 7750, automática, diámetro 30 mm, altura 7,9 mm. Reserva de marcha: 48 horas' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 41 mm, altura 15,25 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante. Resistente al agua hasta 5 ATM, empujadores rectangulares de arranque/parada y reinicio, tornillado y fondo traslúdico en cristal zafiro. Fondo de caja personalizado grabado con el año del Gran Premio y con forma de volante, con un emblema CyS 2N dorado aplicado con detalles en rojo' },
          { label: 'Dial', value: 'Caráter blanco con contadores rojos contrastantes' },
          { label: 'Manos', value: 'Manecillas de hora, minuto y segundos pequeños en forma de hoja, aguja de segundos cronógrafo con punta roja, manecillas de minutos y horas en forma de flecha roja' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Correa', value: 'Correa negra de cuero mate de pantorrilla «driving style» con costuras a juego en verde y forro a juego' },
          { label: 'Edición', value: 'LimitadaLimitado a 202 piezas. El número de piezas refleja la distancia en millas de cada carrera en circuito' },
          { label: 'Embalaje', value: 'Caja de humidor estándar PE100' },
        ],
        curiosity: "¿Sabías que los colores están inspirados en el cartel original del Gran Prix?",
      },
    ],
  },
  {
    label: 'Guayaberas',
    heroBg: '/images/watches/historiador.jpg',
    backBanner: '/images/home/slice-guaya.jpg',
    watches: [
      {
        name: 'Guayabera 01',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/fashion01-600x600.jpg',
          '/fashion/guaya/fashion01b-600x600.jpg'
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
      },
      {
        name: 'Guayabera 02',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/fashion02-600x600.jpg',
          '/fashion/guaya/fashion02b-600x600.jpg'
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
      },
      {
        name: 'Guayabera 03',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/fashion03-600x600.jpg',
          '/fashion/guaya/fashion03b-600x600.jpg'
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
        name: 'Guayabera 04',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/guayabera-Blue01.jpg'
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
        name: 'Guayabera 05',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/guayabera-Flowers01.jpg'
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
        name: 'Guayabera 06',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/guayabera-White-Black01.jpg'
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
        name: 'Guayabera 07',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
        images: [
          '/fashion/guaya/guayabera-white01.jpg'
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
      },
    ],
  },
  {
    label: 'Purse',
    heroBg: '/images/watches/hemingway.jpg',
    backBanner: '/images/fashion/sliceUp-Fashion01.jpg',
    watches: [
      {
        name: 'Purse 01',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/fashion/purses/purse01-600x600.jpg',
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
      {
        name: 'Purse 02',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/fashion/purses/purse02-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Caráter marrón, índices Super-LumiNova® recubiertos, emblema CyS aplicado' },
          { label: 'Dial', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero plateada y puntero rojo con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón oscuro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
      {
        name: 'Purse 03',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/fashion/purses/purse03-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Caráter marrón, índices Super-LumiNova® recubiertos, emblema CyS aplicado' },
          { label: 'Dial', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero plateada y puntero rojo con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón oscuro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
      {
        name: 'Purse 04',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/fashion/purses/purse04-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Caráter marrón, índices Super-LumiNova® recubiertos, emblema CyS aplicado' },
          { label: 'Dial', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero plateada y puntero rojo con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón oscuro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
      {
        name: 'Purse 05',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/fashion/purses/purse05-600x600.jpg'
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, fecha de puntero con corrector rápido' },
          { label: 'Movimientos', value: 'Sellita 221-1, 11 1/2», automática, diámetro: 26 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubios, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Caráter marrón, índices Super-LumiNova® recubiertos, emblema CyS aplicado' },
          { label: 'Dial', value: 'Acero inoxidable, diámetro 40 mm, altura 12,05 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, corona atornillada. Logotipo grabado de Hemingway en la parte trasera de la caja y placa de edición limitada en la caja lateral' },
          { label: 'Manos', value: 'Manecillas plateadas de las horas y los minutos con Super-Luminova®, manecilla de segundos de acero plateada y puntero rojo con forma de cola de pez' },
          { label: 'Correa', value: 'Correa de cuero marrón oscuro' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada882 piezas' },
          { label: 'Embalaje', value: 'PE 107 – Caja de libros Hemingway' },
        ],
        curiosity: "¿Sabías que el Hemingway Icónico es una edición limitada de solo 882 piezas? Impulsado por el motor automático Sellita SW221-1, ofrece una reserva de marcha de 38 horas. El modelo presenta una fecha con puntero con una punta azul o roja, y la manecilla de los segundos termina en una cola de pez de marlín, rindiendo homenaje al amor de Hemingway por la pesca. Dentro de la corona encontrarás la cita: «Para escribir sobre la vida, primero debes vivirla», grabada tanto en inglés como en español.",
      },
    ],
  },
];

