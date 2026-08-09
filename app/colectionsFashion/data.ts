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
  { label: "Women's clothes", bg: '/fashionCat/cat_Woman-Fashion.jpg'},
  { label: 'Guayaberas', bg: '/fashionCat/cat_Guayaberas.jpg'},
  { label: 'Purse', bg: '/fashionCat/cat_Purse.jpg'},
];

export const collections: Collection[] = [
  {
    label: "Women's clothes",
    heroBg: '/images/watches/novelius.jpg',
    backBanner: '/cat-background/slice-Summer.jpg',
    watches: [
      {
        name: 'Gran Premio de Cuba 1957',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.  Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/watches/novedades/gran-cuba-1957/3141.1GP57_Soldier-1-600x600.png',
          '/watches/novedades/gran-cuba-1957/3141.1GP57-Perspective-3-600x600.png',
          '/watches/novedades/gran-cuba-1957/3141.1GP57-Perspective-2-600x6003.png',
          '/watches/novedades/gran-cuba-1957/3141-600x600.png',
          '/watches/novedades/gran-cuba-1957/3141.1GP57_Wristshot-600x600.jpg',
          '/watches/novedades/gran-cuba-1957/1957-600x874.jpg',
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
        name: 'Gran Premio de Cuba 1958',
        price: '6.990,00',
        description: " Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza. Una expresión contemporánea de velocidad, elegancia y el espíritu perdurable de La Habana.",
        images: [
          '/watches/novedades/gran-cuba-1958/3141.1GP58_Soldier-600x600-1.png',
          '/watches/novedades/gran-cuba-1958/3141.1GP58_Perspective-600x6002.png',
          '/watches/novedades/gran-cuba-1958/3141.1GP58_Perspective-2-600x6003.png',
          '/watches/novedades/gran-cuba-1958/3141-1-600x6004.png',
          '/watches/novedades/gran-cuba-1958/3141.1GP58_Wristshot-600x6005.jpg',
          '/watches/novedades/gran-cuba-1958/GP58-600x9016.jpg',
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
        name: 'Gran Premio de Cuba 1960',
        price: '6.990,00',
        description: "Inspirada en las legendarias carreras callejeras de La Habana a finales de los años 50, la Trilogía Gran Premio de Cuba rinde homenaje a un capítulo único en la historia del automovilismo. Cada cronógrafo de edición limitada celebra una de las únicas tres carreras celebradas — 1957, 1958 y 1960 — mediante colores distintivos, detalles vintage de competición y artesanía mecánica suiza.",
        images: [
          '/watches/novedades/gran-cuba-1960/3141.1GP60_Soldier-600x6001.png',
          '/watches/novedades/gran-cuba-1960/3141.1GP60_Perspective-1-600x6002.png',
          '/watches/novedades/gran-cuba-1960/3141-1GP60_Perspective-2-600x6003.png',
          '/watches/novedades/gran-cuba-1960/3141-1GP60_Perspective-3-2-600x6004.png',
          '/watches/novedades/gran-cuba-1960/3141.1GP60_Wristshot-600x6005.jpg',
          '/watches/novedades/gran-cuba-1960/19606.jpg',
          
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
      },{
        name: 'Sir Winston',
        price: '6.410,00',
        description: "El Churchill ‘Sir Winston’ rinde homenaje al ex primer ministro británico, Sir Winston Churchill. Edición limitada de 282 piezas, numeradas individualmente.",
        images: [
          '/watches/novedades/sir-winston-01/2810.1SWS-Soldier-Web-1-600x6001.png',
          '/watches/novedades/sir-winston-01/2810.1SWS-Soldier-Web_additional-bracelet-1-600x6002.png',
          '/watches/novedades/sir-winston-01/2810B-1SWB-Perspective-2-Web-min-2-600x6003.png',
          '/watches/novedades/sir-winston-01/2810B-1SWB-Perspective-1-Web-min-2-600x6004.png',
          '/watches/novedades/sir-winston-01/2810B-1SWB-Perspective-3-Web-min-5-600x6005.png',
          '/watches/novedades/sir-winston-01/2810B-1SWB-Perspective-5-Web-min-5-600x6006.png',
          '/watches/novedades/sir-winston-01/2810B-1SWB-Perspective-3bis-Web-min-1-600x6007.png',
          '/watches/novedades/sir-winston-01/historiador-tradicion-san-rafael-3-1-600x6008.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos centrales, fecha y día' },
          { label: 'Movimientos', value: 'Sellita SW240-1, 11 1/2», automática, diámetro: 29,00 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubias, 28800 A/h, peso oscilante terminado con grabado. Execution Premium (Arriba)' },
          { label: 'Caso', value: 'Laterales de acero inoxidable y titanio, diámetro 43 mm, altura 12,45 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, fondo de carcasa transparente atornillado con cristal zafiro. Placa con el nombre en el lateral y número de edición limitada' },
          { label: 'Dial', value: 'Esfera guilloché plateada ‘Clou de Paris’, índices aplicados en dorado, emblema CyS aplicado con detalles rojos' },
          { label: 'Manos', value: 'Manecillas doradas de horas, minutos y segundos, segunda con punta roja' },
          { label: 'Correa', value: 'Pulsera dorada de alto brillo de caimán de Luisiana y acero inoxidable y titanio' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edición', value: 'Limitada282 piezas, numeradas individualmente' },
          { label: 'Embalaje', value: 'Caja de humidor estándar con correa adicional – PE110' },
        ],
        curiosity: "El Churchill Sir Winston rinde homenaje al icónico primer ministro británico conocido por su liderazgo y resiliencia. Este distinguido reloj, limitado a 282 piezas, cuenta con dos opciones de correa: un caimán de Luisiana azul oscuro de alto brillo y una pulsera de acero inoxidable y titanio, combinando elegancia con versatilidad. Su diseño clásico refleja el legado atemporal y el espíritu duradero de Churchill.",
      },{
        name: 'Sir Winston ',
        price: '6.410,00',
        description: " 3 El Churchill ‘Sir Winston’ rinde homenaje al ex primer ministro británico, Sir Winston Churchill. Edición limitada de 282 piezas, numeradas individualmente.",
        images: [
          '/watches/novedades/sir-winston-02/2810.1SWBL-Soldier-Web-1-600x6001.png',
          '/watches/novedades/sir-winston-02/2810.1SWBL-Soldier-Web_additional-bracelet-1-600x6002.png',
          '/watches/novedades/sir-winston-02/2810B-1SWB-Perspective-2-Web-min-600x6003.png',
          '/watches/novedades/sir-winston-02/2810B-1SWB-Perspective-1-Web-min-600x6004.png',
          '/watches/novedades/sir-winston-02/2810B-1SWB-Perspective-3-Web-min-3-600x6005.png',
          '/watches/novedades/sir-winston-02/2810B-1SWB-Perspective-5-Web-min-3-600x6006.png',
          '/watches/novedades/sir-winston-02/2810B-1SWB-Perspective-3bis-Web-min-600x6007.png',
          '/watches/novedades/sir-winston-02/historiador-tradicion-san-rafael-3-1-600x6007.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos centrales, fecha y día' },
          { label: 'Movimientos', value: 'Sellita SW240-1, 11 1/2», automática, diámetro: 29,00 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubias, 28800 A/h, peso oscilante terminado con grabado. Execution Premium (Arriba)' },
          { label: 'Caso', value: 'Laterales de acero inoxidable y titanio, diámetro 43 mm, altura 12,45 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, fondo de carcasa transparente atornillado con cristal zafiro. Placa con el nombre en el lateral y número de edición limitada' },
          { label: 'Dial', value: 'Esfera guilloché negra ‘Clou de Paris’, índices aplicados en dorado, emblema CyS aplicado con detalles rojos' },
          { label: 'Manos', value: 'Manecillas doradas de horas, minutos y segundos, segunda con punta roja' },
          { label: 'Correa', value: 'Pulsera de cocodrilo de Luisiana negra mate y de acero inoxidable y titanio' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edición', value: 'Limitada282 piezas, numeradas individualmente' },
          { label: 'Embalaje', value: 'Caja de humidor estándar con correa adicional – PE110' },
        ],
        curiosity: "El Churchill Sir Winston rinde homenaje al icónico primer ministro británico conocido por su liderazgo y resiliencia. Este distinguido reloj, limitado a 282 piezas, cuenta con dos opciones de correa: un caimán de Luisiana azul oscuro de alto brillo y una pulsera de acero inoxidable y titanio, combinando elegancia con versatilidad. Su diseño clásico refleja el legado atemporal y el espíritu duradero de Churchill.",
      },{
        name: 'Sir Winston  ',
        price: '6.410,00',
        description: "El Churchill ‘Sir Winston’ rinde homenaje al ex primer ministro británico, Sir Winston Churchill. Edición limitada de 282 piezas, numeradas individualmente.",
        images: [
          '/watches/novedades/sir-winston-03/2810.1SWBY-Soldier-Web-1-600x6001.png',
          '/watches/novedades/sir-winston-03/2810.1SWBY-Soldier-Web_additional-bracelet-1-600x6002.png',
          '/watches/novedades/sir-winston-03/2810B-1SWB-Perspective-2-Web-min-1-600x6003.png',
          '/watches/novedades/sir-winston-03/2810B-1SWB-Perspective-1-Web-min-1-600x6004.png',
          '/watches/novedades/sir-winston-03/2810B-1SWB-Perspective-3-Web-min-4-600x6005.png',
          '/watches/novedades/sir-winston-03/2810B-1SWB-Perspective-5-Web-min-4-600x6006.png',
          '/watches/novedades/sir-winston-03/2810B-1SWBY-Perspective-5-Web-min-600x6007.png',
          '/watches/novedades/sir-winston-03/2810B-1SWBY-Perspective-3bis-Web-min-600x6008.png',
          '/watches/novedades/sir-winston-03/historiador-tradicion-san-rafael-3-1-600x6009.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos centrales, fecha y día' },
          { label: 'Movimientos', value: 'Sellita SW240-1, 11 1/2», automática, diámetro: 29,00 mm, altura: 5,05 mm, Reserva de marcha: 38 horas, 26 rubias, 28800 A/h, peso oscilante terminado con grabado. Execution Premium (Arriba)' },
          { label: 'Caso', value: 'Laterales de acero inoxidable y titanio, diámetro 43 mm, altura 12,45 mm, cristal de zafiro doble curvado con recubrimiento antirreflectante, resistente al agua hasta 10 ATM, fondo de carcasa transparente atornillado con cristal zafiro. Placa con el nombre en el lateral y número de edición limitada' },
          { label: 'Dial', value: 'Carátula guilloché burdeos ‘Clou de Paris’, índices aplicados en dorado, emblema CyS aplicado con detalles rojos' },
          { label: 'Manos', value: 'Manecillas doradas de horas, minutos y segundos, segunda con punta roja' },
          { label: 'Correa', value: 'Pulsera de cocodrilo de Luisiana mate miel y acero inoxidable y titanio' },
          { label: 'Hebilla', value: 'Hebilla plegable de acero inoxidable grabada con el emblema CyS' },
          { label: 'Edicion', value: 'Limitada282 piezas, numeradas individualmente' },
          { label: 'Embalaje', value: 'Caja de humidor estándar con correa adicional – PE110' },
        ],
        curiosity: "El Churchill Sir Winston rinde homenaje al icónico primer ministro británico conocido por su liderazgo y resiliencia. Este distinguido reloj, limitado a 282 piezas, cuenta con dos opciones de correa: un caimán de Luisiana azul oscuro de alto brillo y una pulsera de acero inoxidable y titanio, combinando elegancia con versatilidad. Su diseño clásico refleja el legado atemporal y el espíritu duradero de Churchill.",
      },
    ],
  },
  {
    label: 'Guayaberas',
    heroBg: '/images/watches/historiador.jpg',
    backBanner: '/cat-background/slice-Summer.jpg',
    watches: [
      {
        name: 'Bracelet 01',
        price: '3.810,00',
        description: "Cuervo y Sobrinos presenta con orgullo su última creación, la colección Historiador Gran Reserva, una vibrante celebración de la doble herencia de la marca, que combina la maestría en la relojería suiza con un inconfundible carácter latino. Reserva de energía 68 horas.",
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
      },
    ],
  },
  {
    label: 'Purse',
    heroBg: '/images/watches/hemingway.jpg',
    backBanner: '/cat-background/slice-Summer.jpg',
    watches: [
      {
        name: 'Hemingway Icónico',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/watches/hemingway/hemingway-iconico/3190.1ICC-Soldier-Web-600x6001.png',
          '/watches/hemingway/hemingway-iconico/3190.1ICC-Perspective-4-Web-600x6002.png',
          '/watches/hemingway/hemingway-iconico/3190.1ICC-Perspective-3-Web-600x6004.png',
          '/watches/hemingway/hemingway-iconico/3190.1ICC-Perspective-4-Web-600x6002.png',
          '/watches/hemingway/hemingway-iconico/3190.1ICC-Buckle-Web-600x6005.png',
          '/watches/hemingway/hemingway-iconico/hemingway-5-600x6006.png',
          '/watches/hemingway/hemingway-iconico/hemingway-6-600x6007.png',
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
        name: 'Hemingway Icónico ',
        price: '4.080,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/watches/hemingway/hemingway-iconico-02/3190.1ICB-600x6001.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-3-600x6002.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-1-600x6003.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-2-600x6004.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-4-600x6005.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-5-600x6006.png',
          '/watches/hemingway/hemingway-iconico-02/hemingway-6-600x6007.png',
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
      },{
        name: 'Hemingway Icónico ‘The Fisherman’',
        price: '5.100,00',
        description: "Cuervo y Sobrinos rinde homenaje a su cliente de toda la vida y fiel Ernest Hemingway, célebre escritor y auténtica leyenda del siglo XX, con el lanzamiento de una nueva colección dedicada íntegramente al escritor.",
        images: [
          '/watches/hemingway/hemingway-fisherman/3192B.1B_soldier-600x6001.png',
          '/watches/hemingway/hemingway-fisherman/3192B.1B-Perspective-4-Web-600x6002.png',
          '/watches/hemingway/hemingway-fisherman/3192.1B-Soldier_Cordura-starp-600x6003.png',
          '/watches/hemingway/hemingway-fisherman/3192B.1B-Perspective-2-Web-600x6004.png',
          '/watches/hemingway/hemingway-fisherman/3192B.1B-Buckle-Web-600x6005.png',
          '/watches/hemingway/hemingway-fisherman/3192B.1B-Perspective-3-Web-600x6006.png',
          '/watches/hemingway/hemingway-fisherman/3192.1B-wristshot-600x4507.jpg',
          '/watches/hemingway/hemingway-fisherman/Hemingway-book-box-closed-600x6008.png',
        ],
        features: [
          { label: 'Funciones', value: 'Horas, minutos, segundos centrales, fecha y GMT' },
          { label: 'Movimientos', value: 'Soprod C125, automático, diámetro: 26,2 mm, altura: 4,1 mm, Reserva de marcha: 42 horas, 26 piedras, 28800 A/h, peso oscilante terminado con grabado' },
          { label: 'Caso', value: 'Acero inoxidable, diámetro 40 mm, altura 12,15 mm, cristal de zafiro doble curvado con recubrimiento antirreflejante, resistente al agua hasta 10 ATM, corona atornillada. Parte trasera de la caja abierta con el logo de Hemingway Hemingway en el peso oscilante, y la placa de edición limitada en la caja lateral' },
          { label: 'Dial', value: 'Caráter azul océano, índices Super-LumiNova® recubiertos, emblema CyS aplicado' },
          { label: 'Manos', value: 'Manecillas plateadas de horas y minutos con Super-Luminova®, manecilla blanca de los segundos y aguja azul GMT' },
          { label: 'Correa', value: 'Hebilla plegable cuadrada de acero inoxidable grabada con el emblema CyS' },
          { label: 'Hebilla', value: 'Pulsera de acero inoxidable y correa textil azul gris de cordura' },
          { label: 'Edicion', value: 'Limitada288 piezas' },
          { label: 'Embalaje', value: 'PE107 – Caja de relojes Hemingway' },
        ],
        curiosity: "¿Sabías que ‘El pescador’ de Hemingway es una edición limitada de solo 288 piezas? Cuenta con el mecanismo automático Soprod C125 con una reserva de marcha de 42 horas. La esfera azul océano rinde homenaje a la novela corta de Hemingway El viejo y el mar, escrita en Cayo Blanco. Los elementos de diseño incluyen una escala GMT de 24 horas en el bisel, una ventana de fechas y una cita dentro de la corona. El reloj se presenta en un embalaje especial que recuerda a un libro clásico, añadiendo una capa extra de sofisticación y encanto literario a la colección.",
      },
    ],
  },
];

