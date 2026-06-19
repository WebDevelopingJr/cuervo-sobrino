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
export const collectionsWatches = [
  { label: 'Novelius', bg: noveltiousWatch},
  { label: 'Historiador', bg: historiadotWatch},
  { label: 'Hemingway', bg: hemiwayWatch},
  { label: 'Primera Dama', bg: primeraWatch},
  { label: 'Robusto', bg: robustoWatch},
  { label: 'Prominente', bg: prominentWatch},
  { label: 'Esplendidos', bg: esplendWatch},
  { label: 'Churchill', bg: churchillWatch},
  { label: 'Buceador', bg: buceadorWatch},
  { label: 'Chronógrafo', bg: conographWatch},
  { label: 'Exclusive Selected Pieces', bg: exclusiveSelectWatch},
  { label: 'View All Watches', bg: allWatches},
];

export const collections: Collection[] = [
  {
    label: 'Novelius',
    heroBg: '/images/watches/novelius.jpg',
    watches: [
      {
        name: 'Tradición',
        price: '5,100',
        description: "Cuervo y Sobrinos Unveils the New Historiador Tradición: a modern evolution of the Maison's most emblematic model. The watch now features an open sapphire back, revealing a movement of exceptional quality: the Soprod Newton calibre, COSC-certified and individually numbered. Limited Edition of 282 pieces, individually numbered.",
        images: [
          '/images/watches/novelius/tradicion-1.png',
          '/images/watches/novelius/tradicion-2.png',
          '/images/watches/novelius/tradicion-3.png',
          '/images/watches/novelius/tradicion-4.png',
        ],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds and date display' },
          { label: 'Movement', value: 'Soprod Newton P092, Automatic, Diameter: 26 mm, Height: 4.6 mm, Power Reserve: 44 hours, 23 jewels, 28800 A/h, COSC Certified' },
          { label: 'Case', value: 'Stainless steel, diameter 40 mm, height 12.33 mm, sapphire crystal glass box with anti-reflective coating (vintage inspired glass), water resistant to 10 ATM, see-through case back with fan decoration and applied CyS emblem' },
          { label: 'Dial', value: "Burgundy. A finely decorated dial with grid-shaped 'frappageé', inspired by the original dial motif employed on the former 1950s model. 'Cuervo y Sobrinos' and 'Tradición' vintage style 'cartouche', date indication. Gold colored applied trapezoidal and circular indices. Gold colored applied CyS emblem with red accents" },
          { label: 'Hands', value: "3N colored hour and minute hands 'dauphine' style, red arrow-shaped seconds hand" },
          { label: 'Strap', value: 'Honey matte Louisiana alligator' },
          { label: 'Buckle', value: 'Stainless Steel folding buckle engraved with CyS emblem' },
          { label: 'Limited Edition', value: '282 pieces, individually numbered' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Tradición dial revives a grid-shaped 'trappage' motif first used in the Maison's 1950s models, connecting each new piece to a lineage of Cuban-inspired watchmaking that began over a century ago.",
      },
      {
        name: 'Heritage',
        price: '4,800',
        description: "Rooted in decades of watchmaking mastery, Heritage pairs timeless design with robust movement and a refined sense of lasting elegance.",
        images: [
          '/images/watches/novelius/heritage-1.png',
          '/images/watches/novelius/heritage-2.png',
        ],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 42 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 39 mm, water resistant to 10 ATM' },
          { label: 'Dial', value: 'Silver sunburst with applied gold indices' },
          { label: 'Strap', value: 'Dark brown leather' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Heritage case proportions are unchanged from the original 1952 blueprint, making it one of the few modern watches to retain its ancestor's exact diameter.",
      },
      {
        name: 'Heritage Limited Edition',
        price: '6,200',
        description: "A strictly limited chapter of the Heritage lineage, individually numbered with unique dial variations and an engraved sapphire case back.",
        images: [
          '/images/watches/novelius/heritage-limited-1.png',
          '/images/watches/novelius/heritage-limited-2.png',
        ],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds and date display' },
          { label: 'Movement', value: 'Automatic, COSC Certified, Power Reserve: 44 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 40 mm, see-through sapphire case back' },
          { label: 'Dial', value: 'Limited edition engraved dial, individually numbered' },
          { label: 'Strap', value: 'Black alligator leather' },
          { label: 'Limited Edition', value: '150 pieces, individually numbered' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "Each case back is engraved by hand in Geneva, a process that takes a master engraver approximately three hours per piece.",
      },
    ],
  },
  {
    label: 'Historiador',
    heroBg: '/images/watches/historiador.jpg',
    watches: [
      {
        name: 'Cronista',
        price: '5,800',
        description: "The Cronista records every moment with precision, featuring a chronograph complication and a hand-stitched leather strap.",
        images: ['/images/watches/historiador/cronista-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, chronograph' },
          { label: 'Movement', value: 'Automatic, column-wheel chronograph, Power Reserve: 48 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 42 mm, water resistant to 5 ATM' },
          { label: 'Dial', value: 'Anthracite with contrasting sub-dials' },
          { label: 'Strap', value: 'Hand-stitched dark brown leather' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Cronista's column-wheel mechanism was originally developed for professional timekeeping at motor racing circuits across Europe in the 1960s.",
      },
      {
        name: 'Archivo',
        price: '4,500',
        description: "Named after the great archives of Havana, Archivo pairs a date complication with a guilloché dial that echoes the city's layered history.",
        images: ['/images/watches/historiador/archivo-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 42 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 40 mm, water resistant to 10 ATM' },
          { label: 'Dial', value: "Hand-guilloché silver dial with 'Archivo' engraving" },
          { label: 'Strap', value: 'Tan leather strap' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The guilloché pattern on the Archivo dial requires over 200 individual passes of a rose engine lathe, a technique unchanged since the 18th century.",
      },
    ],
  },
  {
    label: 'Hemingway',
    heroBg: '/images/watches/hemingway.jpg',
    watches: [
      {
        name: 'Daiquirí',
        price: '4,200',
        description: "Inspired by the writer's legendary cocktail hours, Daiquirí features a bold sunburst dial and a vintage-style crown at 3 o'clock.",
        images: ['/images/watches/hemingway/daiquiri-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 40 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 38 mm, water resistant to 5 ATM' },
          { label: 'Dial', value: 'Lime sunburst with vintage applied indices' },
          { label: 'Strap', value: 'Natural leather strap' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "Hemingway reportedly wore a round-cased watch during his years in Havana — the Daiquirí dial color is a nod to the cocktail he famously consumed at El Floridita.",
      },
      {
        name: 'El Floridita',
        price: '4,600',
        description: "A tribute to the legendary Havana bar, El Floridita combines a dual-register dial with a polished stainless steel bracelet.",
        images: ['/images/watches/hemingway/floridita-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, small seconds at 6, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 42 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 40 mm, water resistant to 10 ATM' },
          { label: 'Dial', value: 'Cream with dual registers and red accents' },
          { label: 'Bracelet', value: 'Polished stainless steel integrated bracelet' },
          { label: 'Clasp', value: 'Folding clasp with double safety push-buttons' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "El Floridita bar opened in 1817 and is considered one of the oldest bars in the Americas — the watch's dual-register layout mirrors the bar's two iconic service windows.",
      },
    ],
  },
  {
    label: 'Primera Dama',
    heroBg: '/images/watches/primera-dama.jpg',
    watches: [
      {
        name: 'Diamante Rosa',
        price: '9,800',
        description: "Set with a crown of rose-cut diamonds, Diamante Rosa is the definitive expression of feminine strength and Havana's timeless glamour.",
        images: ['/images/watches/primera-dama/diamante-rosa-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes' },
          { label: 'Movement', value: 'Quartz, Swiss Made' },
          { label: 'Case', value: 'Stainless steel with rose gold PVD coating, diameter 34 mm, set with 60 rose-cut diamonds' },
          { label: 'Dial', value: 'Mother-of-pearl with diamond hour markers' },
          { label: 'Strap', value: 'Pink satin strap' },
          { label: 'Buckle', value: 'Rose gold PVD pin buckle' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "Each diamond on the Diamante Rosa bezel is individually set by hand, a process requiring over six hours of work by a master setter in the Maison's Geneva atelier.",
      },
      {
        name: 'Esmeralda',
        price: '8,400',
        description: "A deep green dial framed by a diamond-set bezel evokes the lush gardens of Old Havana in a piece made for the discerning collector.",
        images: ['/images/watches/primera-dama/esmeralda-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes' },
          { label: 'Movement', value: 'Quartz, Swiss Made' },
          { label: 'Case', value: 'Stainless steel, diameter 34 mm, diamond-set bezel' },
          { label: 'Dial', value: 'Deep forest green lacquered dial' },
          { label: 'Strap', value: 'Green alligator leather' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "The Esmeralda dial is lacquered in three successive layers, each cured for 24 hours, to achieve the characteristic depth of its forest green color.",
      },
    ],
  },
  {
    label: 'Robarto',
    heroBg: '/images/watches/robarto.jpg',
    watches: [
      {
        name: 'Robusto',
        price: '5,400',
        description: "Built for the bold, Robusto features a 44mm case in brushed stainless steel with a skeletonized automatic movement.",
        images: ['/images/watches/robarto/robusto-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds — skeletonized display' },
          { label: 'Movement', value: 'Automatic skeleton, Power Reserve: 46 hours' },
          { label: 'Case', value: 'Brushed stainless steel, diameter 44 mm, water resistant to 10 ATM' },
          { label: 'Dial', value: 'Open skeleton with black bridges' },
          { label: 'Strap', value: 'Black rubber strap' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Robusto movement is skeletonized by hand using a micro-abrasive process that removes material to within 0.2mm of structural tolerances.",
      },
      {
        name: 'Fuerte',
        price: '4,900',
        description: "With 200m water resistance and a unidirectional rotating bezel, Fuerte transitions effortlessly from the ocean to the boardroom.",
        images: ['/images/watches/robarto/fuerte-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 44 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 42 mm, water resistant to 200m / 20 ATM' },
          { label: 'Bezel', value: 'Unidirectional rotating bezel with ceramic insert' },
          { label: 'Dial', value: 'Blue sunburst with luminous applied indices' },
          { label: 'Bracelet', value: 'Stainless steel oyster-style bracelet' },
          { label: 'Clasp', value: 'Wet-suit extension folding clasp' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Fuerte's ceramic bezel insert is sintered at over 1,400°C, making it virtually scratchproof and colorfast for the lifetime of the watch.",
      },
    ],
  },
  {
    label: 'Prominente',
    heroBg: '/images/watches/prominente.jpg',
    watches: [
      {
        name: 'Gran Reserva',
        price: '12,500',
        description: "A grand complication for the grand occasion, Gran Reserva features a perpetual calendar, moon phase, and 72-hour power reserve.",
        images: ['/images/watches/prominente/gran-reserva-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, perpetual calendar, moon phase, power reserve indicator' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 72 hours, 35 jewels' },
          { label: 'Case', value: '18K rose gold, diameter 42 mm, sapphire case back, water resistant to 3 ATM' },
          { label: 'Dial', value: 'Silver guilloché with blue moon phase aperture' },
          { label: 'Strap', value: 'Dark cognac alligator leather' },
          { label: 'Buckle', value: '18K rose gold pin buckle' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "The Gran Reserva perpetual calendar requires no manual correction until the year 2100, when a single adjustment for the secular leap year will be needed.",
      },
      {
        name: 'Senador',
        price: '7,200',
        description: "Senador's slim profile conceals an ultra-thin movement, making it the ideal dress watch for moments that demand understated authority.",
        images: ['/images/watches/prominente/senador-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes' },
          { label: 'Movement', value: 'Ultra-thin automatic, Height: 2.4 mm, Power Reserve: 38 hours' },
          { label: 'Case', value: '18K white gold, diameter 38 mm, height 6.9 mm, water resistant to 3 ATM' },
          { label: 'Dial', value: 'White lacquered with thin gold applied baton indices' },
          { label: 'Strap', value: 'Black alligator leather' },
          { label: 'Buckle', value: '18K white gold pin buckle' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "At 6.9mm total height, the Senador slides effortlessly under a formal shirt cuff — a constraint the movement engineers treated as a design challenge rather than a limitation.",
      },
    ],
  },
  {
    label: 'Esplendidos',
    heroBg: '/images/watches/esplendidos.jpg',
    watches: [
      {
        name: 'Magnífico',
        price: '5,600',
        description: "A celebration of Havana's golden era, Magnífico dresses a classic round case with a champagne dial and applied gold indices.",
        images: ['/images/watches/esplendidos/magnifico-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 42 hours' },
          { label: 'Case', value: 'Yellow gold PVD stainless steel, diameter 40 mm, water resistant to 5 ATM' },
          { label: 'Dial', value: 'Champagne sunburst with applied gold baton indices' },
          { label: 'Strap', value: 'Havana brown alligator leather' },
          { label: 'Buckle', value: 'Gold PVD folding buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The champagne dial of the Magnífico is lacquered using a formula originally developed for the restoration of Art Deco interiors in 1940s Havana.",
      },
      {
        name: 'Dorado',
        price: '18,000',
        description: "An 18K gold case and a hand-engraved dial make Dorado the crown jewel of the Esplendidos collection.",
        images: ['/images/watches/esplendidos/dorado-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 44 hours, COSC Certified' },
          { label: 'Case', value: '18K yellow gold, diameter 40 mm, sapphire case back, water resistant to 3 ATM' },
          { label: 'Dial', value: '18K gold hand-engraved dial, unique floral motif' },
          { label: 'Strap', value: 'Black alligator leather' },
          { label: 'Buckle', value: '18K gold folding buckle' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 200' },
        ],
        curiosity: "No two Dorado dials are identical — each engraving is executed freehand by a single artisan, making every piece a unique work of applied art.",
      },
    ],
  },
  {
    label: 'Churchill',
    heroBg: '/images/watches/churchill.jpg',
    watches: [
      {
        name: 'Maduro',
        price: '5,200',
        description: "As distinguished as its namesake, Maduro pairs a rich brown dial with a hand-stitched tobacco leather strap and a rose gold case.",
        images: ['/images/watches/churchill/maduro-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 42 hours' },
          { label: 'Case', value: 'Rose gold PVD stainless steel, diameter 41 mm, water resistant to 5 ATM' },
          { label: 'Dial', value: 'Rich brown with applied rose gold indices' },
          { label: 'Strap', value: 'Hand-stitched tobacco leather' },
          { label: 'Buckle', value: 'Rose gold PVD pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The tobacco leather for the Maduro strap is tanned using a traditional Cuban process that takes 14 weeks to complete.",
      },
      {
        name: 'Claro',
        price: '4,800',
        description: "A lighter take on the Churchill spirit, Claro features a pale cream dial and a polished silver case for moments of refined ease.",
        images: ['/images/watches/churchill/claro-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 40 hours' },
          { label: 'Case', value: 'Polished stainless steel, diameter 39 mm, water resistant to 5 ATM' },
          { label: 'Dial', value: 'Pale cream lacquered with slim silver indices' },
          { label: 'Strap', value: 'Light tan leather strap' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Claro's cream lacquer is applied in five successive coats, each polished between applications, to achieve its characteristic warm tone.",
      },
    ],
  },
  {
    label: 'Buceador',
    heroBg: '/images/watches/buceador.jpg',
    watches: [
      {
        name: 'Profundo',
        price: '6,100',
        description: "Rated to 300m, Profundo is the technical flagship of the Buceador line — a tool watch without compromise, refined for the surface world.",
        images: ['/images/watches/buceador/profundo-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 48 hours, anti-magnetic' },
          { label: 'Case', value: 'Stainless steel, diameter 43 mm, water resistant to 300m / 30 ATM, screw-down crown' },
          { label: 'Bezel', value: 'Unidirectional rotating bezel with ceramic insert, 60-minute graduation' },
          { label: 'Dial', value: 'Black with luminescent applied indices and hands' },
          { label: 'Bracelet', value: 'Stainless steel with wet-suit extension' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Profundo case is pressure-tested individually at 330m before leaving the factory, 10% beyond its rated depth to ensure a safety margin in real-world use.",
      },
      {
        name: 'Arrecife',
        price: '5,800',
        description: "Arrecife's vivid blue dial evokes the coral reefs of the Caribbean, wrapped in a lightweight titanium case built for deep exploration.",
        images: ['/images/watches/buceador/arrecife-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, date' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 48 hours' },
          { label: 'Case', value: 'Grade 5 titanium, diameter 42 mm, water resistant to 200m / 20 ATM' },
          { label: 'Bezel', value: 'Unidirectional rotating ceramic bezel' },
          { label: 'Dial', value: 'Vivid blue gradient with coral-red second hand' },
          { label: 'Strap', value: 'Blue rubber strap with titanium buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "Grade 5 titanium is 40% lighter than stainless steel yet equally strong, allowing the Arrecife to be worn for extended dives without fatigue.",
      },
    ],
  },
  {
    label: 'Chronógrafo',
    heroBg: '/images/watches/chronografo.jpg',
    watches: [
      {
        name: 'Veloce',
        price: '6,800',
        description: "A column-wheel flyback chronograph with a tachymeter bezel, Veloce was born on the racetrack and refined in the ateliers of Havana.",
        images: ['/images/watches/chronografo/veloce-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, small seconds, flyback chronograph, tachymeter' },
          { label: 'Movement', value: 'Automatic column-wheel flyback, Power Reserve: 48 hours' },
          { label: 'Case', value: 'Stainless steel, diameter 43 mm, water resistant to 10 ATM' },
          { label: 'Bezel', value: 'Fixed tachymeter bezel' },
          { label: 'Dial', value: 'Racing black with contrasting white registers' },
          { label: 'Strap', value: 'Racing perforated leather strap' },
          { label: 'Buckle', value: 'Stainless Steel pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "A flyback chronograph can be reset and restarted with a single push of the pusher, a function originally developed for timing successive laps at motor racing circuits.",
      },
      {
        name: 'Piloto',
        price: '6,200',
        description: "Oversized pushers, a dual-register dial, and a matte black case make Piloto the definitive aviator-inspired chronograph.",
        images: ['/images/watches/chronografo/piloto-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, small seconds at 9, 30-minute counter at 3, chronograph' },
          { label: 'Movement', value: 'Automatic, column-wheel, Power Reserve: 46 hours' },
          { label: 'Case', value: 'Matte black PVD stainless steel, diameter 44 mm, water resistant to 10 ATM' },
          { label: 'Dial', value: 'Matte black with high-contrast white registers and luminous hands' },
          { label: 'Strap', value: 'Black canvas pilot strap' },
          { label: 'Buckle', value: 'Black PVD pin buckle' },
          { label: 'Packaging', value: 'Standard Humidor Box – PE 100' },
        ],
        curiosity: "The Piloto's oversized crown and pushers are designed to be operated while wearing flight gloves — a specification borrowed directly from 1960s aviation-grade instrument watches.",
      },
    ],
  },
  {
    label: 'Exclusive Selected Pieces',
    heroBg: '/images/watches/exclusive.jpg',
    watches: [
      {
        name: 'Havana Exclusivo',
        price: '32,000',
        description: "A one-of-a-kind expression produced in a single numbered edition, featuring a meteorite dial and a hand-engraved platinum case.",
        images: ['/images/watches/exclusive/havana-exclusivo-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, central seconds, power reserve' },
          { label: 'Movement', value: 'Automatic, Power Reserve: 72 hours, COSC Certified, individually numbered' },
          { label: 'Case', value: 'Platinum 950, diameter 41 mm, sapphire case back, water resistant to 3 ATM' },
          { label: 'Dial', value: 'Gibeon meteorite, unique pattern, hand-engraved CyS emblem' },
          { label: 'Strap', value: 'Black crocodile leather' },
          { label: 'Buckle', value: 'Platinum 950 folding buckle' },
          { label: 'Limited Edition', value: '1 piece, uniquely numbered' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 500' },
        ],
        curiosity: "The Gibeon meteorite used for the dial fell to Earth approximately 4 billion years ago and was discovered in Namibia in 1836 — making the dial older than our solar system's planets.",
      },
      {
        name: 'Age For Glory',
        price: '14,500',
        description: "Designed to commemorate the pursuit of greatness, Age For Glory features an anniversary complication and an engraved sapphire case back.",
        images: ['/images/watches/exclusive/age-for-glory-1.png'],
        features: [
          { label: 'Functions', value: 'Hours, minutes, seconds, annual calendar, power reserve indicator' },
          { label: 'Movement', value: 'Automatic, annual calendar complication, Power Reserve: 60 hours' },
          { label: 'Case', value: '18K rose gold, diameter 42 mm, engraved sapphire case back, water resistant to 3 ATM' },
          { label: 'Dial', value: 'Deep blue with rose gold applied indices and anniversary engraving' },
          { label: 'Strap', value: 'Navy blue alligator leather' },
          { label: 'Buckle', value: '18K rose gold folding buckle' },
          { label: 'Limited Edition', value: '50 pieces, individually numbered' },
          { label: 'Packaging', value: 'Premium Humidor Box – PE 300' },
        ],
        curiosity: "An annual calendar requires only one manual correction per year — on March 1st, when it cannot distinguish the short month of February from longer months.",
      },
    ],
  },
  {
    label: 'View All Watches',
    heroBg: '/images/watches/all.jpg',
    watches: [],
  },
];