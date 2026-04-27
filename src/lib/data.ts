export type Lineup = "Vertuo" | "Original";
export type CupSize =
  | "Ristretto (25ml)"
  | "Espresso (40ml)"
  | "Double Espresso (80ml)"
  | "Gran Lungo (150ml)"
  | "Coffee (230ml)"
  | "XL (355ml)"
  | "XL (535ml)";

export interface Pod {
  id: string;
  name: string;
  lineup: Lineup;
  category: string;
  cupSize: CupSize;
  caffeineMin: number;
  caffeineMax: number;
  caffeineLabel: string;
  intensity: number | null;
  notes: string;
  decaf: boolean;
  weight: string;
}

const pods: Pod[] = [
  // ── VERTUO ──────────────────────────────────────────────────────────────
  // Single Espresso 40ml
  { id: "v-il-caffe", name: "IL CAFFÈ", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 152, caffeineMax: 152, caffeineLabel: "152mg", intensity: 11, notes: "Woody, Cereal & Cocoa", decaf: false, weight: "7g" },
  { id: "v-diavolitto", name: "DIAVOLITTO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 144, caffeineMax: 144, caffeineLabel: "144mg", intensity: 11, notes: "Intense, Roasted, Oak Wood & Spicy", decaf: false, weight: "7g" },
  { id: "v-altissio", name: "ALTISSIO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 108, caffeineMax: 108, caffeineLabel: "108mg", intensity: 9, notes: "Intense, Cocoa, Roasted & Cereal", decaf: false, weight: "7g" },
  { id: "v-altissio-decaf", name: "ALTISSIO DECAFFEINATO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 4, caffeineMax: 4, caffeineLabel: "4mg", intensity: 9, notes: "Cocoa, Roasted & Cereal", decaf: true, weight: "7g" },
  { id: "v-orafio", name: "ORAFIO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 110, caffeineMax: 110, caffeineLabel: "110mg", intensity: 6, notes: "Caramel, Cereal & Spicy", decaf: false, weight: "6.2g" },
  { id: "v-toccanto", name: "TOCCANTO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 84, caffeineMax: 84, caffeineLabel: "84mg", intensity: 5, notes: "Fruity Winey", decaf: false, weight: "6.2g" },
  { id: "v-voltesso", name: "VOLTESSO", lineup: "Vertuo", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 64, caffeineMax: 64, caffeineLabel: "64mg", intensity: 4, notes: "Mild & Biscuity", decaf: false, weight: "5.2g" },

  // Double Espresso 80ml
  { id: "v-de-dolce", name: "DOUBLE ESPRESSO DOLCE", lineup: "Vertuo", category: "Core Range", cupSize: "Double Espresso (80ml)", caffeineMin: 133, caffeineMax: 133, caffeineLabel: "133mg", intensity: 5, notes: "Cereal", decaf: false, weight: "9.5g" },
  { id: "v-de-scuro", name: "DOUBLE ESPRESSO SCURO", lineup: "Vertuo", category: "Core Range", cupSize: "Double Espresso (80ml)", caffeineMin: 150, caffeineMax: 150, caffeineLabel: "150mg", intensity: 11, notes: "Cocoa & Smoky Notes", decaf: false, weight: "10g" },
  { id: "v-de-chiaro", name: "DOUBLE ESPRESSO CHIARO", lineup: "Vertuo", category: "Core Range", cupSize: "Double Espresso (80ml)", caffeineMin: 135, caffeineMax: 135, caffeineLabel: "135mg", intensity: 8, notes: "Woody & Earthy", decaf: false, weight: "10g" },

  // Gran Lungo 150ml
  { id: "v-inizio", name: "INIZIO", lineup: "Vertuo", category: "Core Range", cupSize: "Gran Lungo (150ml)", caffeineMin: 120, caffeineMax: 120, caffeineLabel: "120mg", intensity: 4, notes: "Flowery & Cereal", decaf: false, weight: "10g" },
  { id: "v-fortado", name: "FORTADO", lineup: "Vertuo", category: "Core Range", cupSize: "Gran Lungo (150ml)", caffeineMin: 195, caffeineMax: 195, caffeineLabel: "195mg", intensity: 8, notes: "Cocoa & Oak Wood", decaf: false, weight: "10g" },
  { id: "v-fortado-decaf", name: "FORTADO DECAFFEINATO", lineup: "Vertuo", category: "Core Range", cupSize: "Gran Lungo (150ml)", caffeineMin: 7, caffeineMax: 7, caffeineLabel: "7mg", intensity: 8, notes: "Woody, Cocoa & Oak Wood", decaf: true, weight: "10g" },
  { id: "v-arondio", name: "ARONDIO", lineup: "Vertuo", category: "Core Range", cupSize: "Gran Lungo (150ml)", caffeineMin: 150, caffeineMax: 150, caffeineLabel: "150mg", intensity: 6, notes: "Cereal", decaf: false, weight: "10g" },

  // Coffee 230ml
  { id: "v-intenso", name: "INTENSO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 195, caffeineMax: 195, caffeineLabel: "195mg", intensity: 9, notes: "Roasted & Chocolatey", decaf: false, weight: "12.5g" },
  { id: "v-stormio", name: "STORMIO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 170, caffeineMax: 170, caffeineLabel: "170mg", intensity: 8, notes: "Intense, Cereal, Woody & Spicy", decaf: false, weight: "12.5g" },
  { id: "v-odacio", name: "ODACIO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 170, caffeineMax: 170, caffeineLabel: "170mg", intensity: 7, notes: "Intense, Cereal & Fruity Winey", decaf: false, weight: "12.5g" },
  { id: "v-melozio", name: "MELOZIO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 170, caffeineMax: 170, caffeineLabel: "170mg", intensity: 6, notes: "Mild & Biscuity", decaf: false, weight: "12.5g" },
  { id: "v-melozio-decaf", name: "MELOZIO DECAFFEINATO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 11, caffeineMax: 11, caffeineLabel: "11mg", intensity: 6, notes: "Cereal & Biscuity", decaf: true, weight: "12.5g" },
  { id: "v-solelio", name: "SOLELIO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 133, caffeineMax: 133, caffeineLabel: "133mg", intensity: 2, notes: "Mild, Cereal, Fruity & Fruity Winey", decaf: false, weight: "12.5g" },
  { id: "v-half-caf", name: "HALF CAFFEINATO", lineup: "Vertuo", category: "Core Range", cupSize: "Coffee (230ml)", caffeineMin: 83, caffeineMax: 83, caffeineLabel: "83mg", intensity: 5, notes: "Mild & Biscuity", decaf: false, weight: "12.5g" },

  // XL
  { id: "v-cold-brew", name: "COLD BREW STYLE INTENSE", lineup: "Vertuo", category: "Core Range", cupSize: "XL (355ml)", caffeineMin: 114, caffeineMax: 114, caffeineLabel: "114mg/serving", intensity: null, notes: "Caramel", decaf: false, weight: "17.1g" },
  { id: "v-alto-ambrato", name: "ALTO AMBRATO", lineup: "Vertuo", category: "Core Range", cupSize: "XL (355ml)", caffeineMin: 170, caffeineMax: 170, caffeineLabel: "170mg", intensity: 4, notes: "Cereal & Caramel", decaf: false, weight: "17.1g" },
  { id: "v-alto-onice", name: "ALTO ONICE", lineup: "Vertuo", category: "Core Range", cupSize: "XL (355ml)", caffeineMin: 190, caffeineMax: 190, caffeineLabel: "190mg", intensity: 7, notes: "Roasted & Woody", decaf: false, weight: "17.1g" },
  { id: "v-pour-over-mild", name: "POUR-OVER STYLE MILD", lineup: "Vertuo", category: "Core Range", cupSize: "XL (535ml)", caffeineMin: 257, caffeineMax: 257, caffeineLabel: "257mg", intensity: null, notes: "Cereal & Malty", decaf: false, weight: "17.1g" },
  { id: "v-pour-over", name: "POUR-OVER STYLE", lineup: "Vertuo", category: "Core Range", cupSize: "XL (535ml)", caffeineMin: 230, caffeineMax: 230, caffeineLabel: "230mg", intensity: null, notes: "Roasted & Smoky Notes", decaf: false, weight: "17.1g" },

  // Coffee+
  { id: "v-vivida", name: "VIVIDA", lineup: "Vertuo", category: "Coffee+", cupSize: "Coffee (230ml)", caffeineMin: 50, caffeineMax: 170, caffeineLabel: "~50–170mg", intensity: null, notes: "Cereal & Biscuity • With B12", decaf: false, weight: "–" },
  { id: "v-melozio-boost", name: "MELOZIO BOOST", lineup: "Vertuo", category: "Coffee+", cupSize: "Coffee (230ml)", caffeineMin: 200, caffeineMax: 200, caffeineLabel: "200mg", intensity: 6, notes: "Nutty & Balanced • More Caffeine", decaf: false, weight: "–" },
  { id: "v-stormio-boost", name: "STORMIO BOOST", lineup: "Vertuo", category: "Coffee+", cupSize: "Coffee (230ml)", caffeineMin: 200, caffeineMax: 200, caffeineLabel: "200mg", intensity: 8, notes: "Woody & Earthy • More Caffeine", decaf: false, weight: "–" },

  // Master Crafted – Vertuo
  { id: "v-mc-elsalvador", name: "EL SALVADOR", lineup: "Vertuo", category: "Master Crafted", cupSize: "Coffee (230ml)", caffeineMin: 140, caffeineMax: 140, caffeineLabel: "140mg", intensity: 5, notes: "Biscuity", decaf: false, weight: "–" },
  { id: "v-mc-peru", name: "PERU ORGANIC", lineup: "Vertuo", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 6, notes: "Fruity", decaf: false, weight: "–" },
  { id: "v-mc-costarica", name: "COSTA RICA", lineup: "Vertuo", category: "Master Crafted", cupSize: "Gran Lungo (150ml)", caffeineMin: 140, caffeineMax: 140, caffeineLabel: "140mg", intensity: 7, notes: "Cereal", decaf: false, weight: "–" },
  { id: "v-mc-mexico", name: "MEXICO", lineup: "Vertuo", category: "Master Crafted", cupSize: "Coffee (230ml)", caffeineMin: 190, caffeineMax: 190, caffeineLabel: "190mg", intensity: 7, notes: "Roasted, Woody & Spicy", decaf: false, weight: "–" },
  { id: "v-mc-ethiopia", name: "ETHIOPIA", lineup: "Vertuo", category: "Master Crafted", cupSize: "Gran Lungo (150ml)", caffeineMin: 119, caffeineMax: 119, caffeineLabel: "119mg", intensity: 4, notes: "Flowery", decaf: false, weight: "–" },
  { id: "v-mc-colombia", name: "COLOMBIA", lineup: "Vertuo", category: "Master Crafted", cupSize: "Coffee (230ml)", caffeineMin: 165, caffeineMax: 165, caffeineLabel: "165mg", intensity: 5, notes: "Fruity Winey", decaf: false, weight: "–" },

  // Reviving Origins – Vertuo
  { id: "v-ro-congo", name: "KAHAWA YA CONGO", lineup: "Vertuo", category: "Reviving Origins", cupSize: "Coffee (230ml)", caffeineMin: 170, caffeineMax: 200, caffeineLabel: "~170–200mg", intensity: 6, notes: "Fruity", decaf: false, weight: "–" },

  // Barista Creations – Vertuo
  { id: "v-bc-watermelon", name: "JUICY WATERMELON OVER ICE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Double Espresso (80ml)", caffeineMin: 120, caffeineMax: 120, caffeineLabel: "120mg", intensity: null, notes: "Watermelon", decaf: false, weight: "10g" },
  { id: "v-bc-coconut", name: "TROPICAL COCONUT OVER ICE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 160, caffeineMax: 160, caffeineLabel: "160mg", intensity: null, notes: "Coconut & Hint of Vanilla", decaf: false, weight: "12.5g" },
  { id: "v-bc-hazelnut", name: "ROASTED HAZELNUT", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 170, caffeineMax: 170, caffeineLabel: "170mg", intensity: null, notes: "Hazelnut", decaf: false, weight: "12.5g" },
  { id: "v-bc-whiskey", name: "WHISKEY ESSENCE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Double Espresso (80ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: null, notes: "Nutty & Balanced", decaf: false, weight: "–" },
  { id: "v-bc-vanilla", name: "SWEET VANILLA", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 166, caffeineMax: 166, caffeineLabel: "166mg", intensity: null, notes: "Vanilla", decaf: false, weight: "12.5g" },
  { id: "v-bc-caramel", name: "GOLDEN CARAMEL", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 159, caffeineMax: 159, caffeineLabel: "159mg", intensity: null, notes: "Caramel", decaf: false, weight: "12.5g" },
  { id: "v-bc-chocolate", name: "RICH CHOCOLATE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 160, caffeineMax: 160, caffeineLabel: "160mg", intensity: null, notes: "Cocoa", decaf: false, weight: "12.5g" },
  { id: "v-bc-bianco-piccolo", name: "BIANCO PICCOLO", lineup: "Vertuo", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 75, caffeineMax: 75, caffeineLabel: "75mg", intensity: null, notes: "Caramel & Biscuity", decaf: false, weight: "6.2g" },
  { id: "v-bc-bianco-doppio", name: "BIANCO DOPPIO", lineup: "Vertuo", category: "Barista Creations", cupSize: "Double Espresso (80ml)", caffeineMin: 105, caffeineMax: 105, caffeineLabel: "105mg", intensity: null, notes: "Cereal, Caramel & Biscuity", decaf: false, weight: "10.2g" },
  { id: "v-bc-bianco-forte", name: "BIANCO FORTE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 160, caffeineMax: 160, caffeineLabel: "160mg", intensity: null, notes: "Balanced & Intense", decaf: false, weight: "12.5g" },
  { id: "v-bc-ice-forte", name: "ICE FORTE", lineup: "Vertuo", category: "Barista Creations", cupSize: "Coffee (230ml)", caffeineMin: 161, caffeineMax: 161, caffeineLabel: "161mg", intensity: null, notes: "Roasted & Woody", decaf: false, weight: "12.5g" },
  { id: "v-bc-ice-leggero", name: "ICE LEGGERO", lineup: "Vertuo", category: "Barista Creations", cupSize: "Double Espresso (80ml)", caffeineMin: 120, caffeineMax: 120, caffeineLabel: "120mg", intensity: null, notes: "Cereal", decaf: false, weight: "10g" },

  // ── ORIGINAL ─────────────────────────────────────────────────────────────
  // Barista Creations – Original
  { id: "o-bc-coconut-ice", name: "COCONUT FLAVOUR OVER ICE", lineup: "Original", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 63, caffeineMax: 63, caffeineLabel: "63mg", intensity: null, notes: "Caramel & Toasted Cereal", decaf: false, weight: "5.3g" },
  { id: "o-bc-filter-intense", name: "FILTER STYLE INTENSE", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 60, caffeineMax: 60, caffeineLabel: "60mg", intensity: null, notes: "Roasted & Smoky Notes", decaf: false, weight: "4.8g" },
  { id: "o-bc-filter-mild", name: "FILTER STYLE MILD", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 60, caffeineMax: 60, caffeineLabel: "60mg", intensity: null, notes: "Fruity & Malted Cereal", decaf: false, weight: "4.8g" },
  { id: "o-bc-vaniglia", name: "VANIGLIA", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: null, notes: "Flavored Vanilla", decaf: false, weight: "5.0g" },
  { id: "o-bc-caramello", name: "CARAMELLO", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: null, notes: "Flavored Caramel", decaf: false, weight: "5.0g" },
  { id: "o-bc-cioccolatino", name: "CIOCCOLATINO", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: null, notes: "Flavored Cocoa", decaf: false, weight: "5.0g" },
  { id: "o-bc-nocciola", name: "NOCCIOLA", lineup: "Original", category: "Barista Creations", cupSize: "Gran Lungo (150ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: null, notes: "Flavored, Biscuity & Hazelnut", decaf: false, weight: "5.0g" },
  { id: "o-bc-freddo-intenso", name: "FREDDO INTENSO", lineup: "Original", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 56, caffeineMax: 56, caffeineLabel: "56mg", intensity: null, notes: "Roasted & Chocolaty", decaf: false, weight: "4.8g" },
  { id: "o-bc-freddo-delicato", name: "FREDDO DELICATO", lineup: "Original", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 72, caffeineMax: 72, caffeineLabel: "72mg", intensity: null, notes: "Fruity", decaf: false, weight: "4.8g" },
  { id: "o-bc-corto", name: "CORTO", lineup: "Original", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 103, caffeineMax: 103, caffeineLabel: "103mg", intensity: null, notes: "Roasted, Intense & Spicy", decaf: false, weight: "5.8g" },
  { id: "o-bc-scuro", name: "SCURO", lineup: "Original", category: "Barista Creations", cupSize: "Espresso (40ml)", caffeineMin: 73, caffeineMax: 73, caffeineLabel: "73mg", intensity: null, notes: "Roasted & Balanced", decaf: false, weight: "5.5g" },
  { id: "o-bc-chiaro", name: "CHIARO", lineup: "Original", category: "Barista Creations", cupSize: "Ristretto (25ml)", caffeineMin: 49, caffeineMax: 49, caffeineLabel: "49mg", intensity: null, notes: "Balanced, Caramel & Biscuity", decaf: false, weight: "4.8g" },

  // Ispirazione Italiana
  { id: "o-ii-napoli", name: "NAPOLI", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 109, caffeineMax: 109, caffeineLabel: "109mg", intensity: 13, notes: "Intense & Roasted", decaf: false, weight: "5.7g" },
  { id: "o-ii-venezia", name: "VENEZIA", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 77, caffeineMax: 77, caffeineLabel: "77mg", intensity: 8, notes: "Nutty & Balanced", decaf: false, weight: "5.6g" },
  { id: "o-ii-palermo", name: "PALERMO KAZAAR", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 113, caffeineMax: 113, caffeineLabel: "113mg", intensity: 12, notes: "Woody", decaf: false, weight: "6g" },
  { id: "o-ii-ristretto", name: "RISTRETTO ITALIANO", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 75, caffeineMax: 75, caffeineLabel: "75mg", intensity: 10, notes: "Roasted & Fruity Winey", decaf: false, weight: "5.7g" },
  { id: "o-ii-ristretto-decaf", name: "RISTRETTO DECAFFEINATO", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 2, caffeineMax: 2, caffeineLabel: "2mg", intensity: 10, notes: "Roasted & Fruity Winey", decaf: true, weight: "5.7g" },
  { id: "o-ii-firenze", name: "FIRENZE ARPEGGIO", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 63, caffeineMax: 63, caffeineLabel: "63mg", intensity: 9, notes: "Intense, Cocoa & Roasted", decaf: false, weight: "5.3g" },
  { id: "o-ii-firenze-decaf", name: "FIRENZE ARPEGGIO DECAFFEINATO", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 2, caffeineMax: 2, caffeineLabel: "2mg", intensity: 9, notes: "Roasted & Cocoa", decaf: true, weight: "5.5g" },
  { id: "o-ii-roma", name: "ROMA", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Ristretto (25ml)", caffeineMin: 63, caffeineMax: 63, caffeineLabel: "63mg", intensity: 8, notes: "Woody & Cereal", decaf: false, weight: "4.8g" },
  { id: "o-ii-genova", name: "GENOVA LIVANTO", lineup: "Original", category: "Ispirazione Italiana", cupSize: "Espresso (40ml)", caffeineMin: 64, caffeineMax: 64, caffeineLabel: "64mg", intensity: 6, notes: "Caramel, Balanced & Cereal", decaf: false, weight: "5.3g" },

  // World Explorations
  { id: "o-we-rio", name: "RIO DE JANEIRO", lineup: "Original", category: "World Explorations", cupSize: "Espresso (40ml)", caffeineMin: 77, caffeineMax: 77, caffeineLabel: "77mg", intensity: 9, notes: "Spicy", decaf: false, weight: "5.5g" },
  { id: "o-we-istanbul", name: "ISTANBUL", lineup: "Original", category: "World Explorations", cupSize: "Espresso (40ml)", caffeineMin: 85, caffeineMax: 85, caffeineLabel: "85mg", intensity: 8, notes: "Fruity", decaf: false, weight: "5.6g" },
  { id: "o-we-paris", name: "PARIS", lineup: "Original", category: "World Explorations", cupSize: "Espresso (40ml)", caffeineMin: 75, caffeineMax: 75, caffeineLabel: "75mg", intensity: 6, notes: "Citrus, Cereal & Biscuity", decaf: false, weight: "5.6g" },
  { id: "o-we-miami", name: "MIAMI", lineup: "Original", category: "World Explorations", cupSize: "Espresso (40ml)", caffeineMin: 85, caffeineMax: 85, caffeineLabel: "85mg", intensity: 9, notes: "Nutty & Balanced", decaf: false, weight: "–" },
  { id: "o-we-capetown", name: "CAPE TOWN ENVIVO", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 110, caffeineMax: 110, caffeineLabel: "110mg", intensity: 10, notes: "Woody", decaf: false, weight: "5.5g" },
  { id: "o-we-stockholm", name: "STOCKHOLM", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 80, caffeineMax: 80, caffeineLabel: "80mg", intensity: 8, notes: "Malty", decaf: false, weight: "6g" },
  { id: "o-we-tokyo", name: "TOKYO VIVALTO", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 82, caffeineMax: 82, caffeineLabel: "82mg", intensity: 6, notes: "Flowery", decaf: false, weight: "5.8g" },
  { id: "o-we-vienna", name: "VIENNA", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 75, caffeineMax: 75, caffeineLabel: "75mg", intensity: 6, notes: "Malty & Cereal", decaf: false, weight: "5.5g" },
  { id: "o-we-shanghai", name: "SHANGHAI", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 82, caffeineMax: 82, caffeineLabel: "82mg", intensity: 5, notes: "Fruity Winey", decaf: false, weight: "5.6g" },
  { id: "o-we-buenosaires", name: "BUENOS AIRES", lineup: "Original", category: "World Explorations", cupSize: "Gran Lungo (150ml)", caffeineMin: 104, caffeineMax: 104, caffeineLabel: "104mg", intensity: 4, notes: "Cereal", decaf: false, weight: "5.6g" },

  // Core Espresso – Original
  { id: "o-capriccio", name: "CAPRICCIO", lineup: "Original", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 64, caffeineMax: 64, caffeineLabel: "64mg", intensity: 5, notes: "Balanced, Cereal", decaf: false, weight: "4.8g" },
  { id: "o-volluto", name: "VOLLUTO", lineup: "Original", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 64, caffeineMax: 64, caffeineLabel: "64mg", intensity: 4, notes: "Cereal & Fruity", decaf: false, weight: "4.9g" },
  { id: "o-volluto-decaf", name: "VOLLUTO DECAFFEINATO", lineup: "Original", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 2, caffeineMax: 2, caffeineLabel: "1.7mg", intensity: 4, notes: "Cereal, Fruity & Balanced", decaf: true, weight: "4.9g" },
  { id: "o-cosi", name: "COSI", lineup: "Original", category: "Core Range", cupSize: "Espresso (40ml)", caffeineMin: 60, caffeineMax: 60, caffeineLabel: "60mg", intensity: 4, notes: "Fruity & Cereal", decaf: false, weight: "4.8g" },

  // Reviving Origins – Original
  { id: "o-ro-congo", name: "KAHAWA YA CONGO", lineup: "Original", category: "Reviving Origins", cupSize: "Espresso (40ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 7, notes: "Cereal & Mild Fruitiness", decaf: false, weight: "–" },
  { id: "o-ro-zimbabwe", name: "TAMUKA MU ZIMBABWE", lineup: "Original", category: "Reviving Origins", cupSize: "Gran Lungo (150ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 5, notes: "Floral & Herbal", decaf: false, weight: "–" },
  { id: "o-ro-colombia", name: "ESPERANZA DE COLOMBIA", lineup: "Original", category: "Reviving Origins", cupSize: "Espresso (40ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 5, notes: "Balanced & Fruity", decaf: false, weight: "–" },

  // Master Crafted – Original
  { id: "o-mc-honduras", name: "HONDURAS", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 8, notes: "Cereal & Cocoa", decaf: false, weight: "–" },
  { id: "o-mc-peru", name: "PERU ORGANIC", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 50, caffeineMax: 100, caffeineLabel: "~50–100mg", intensity: 6, notes: "Fruity", decaf: false, weight: "–" },
  { id: "o-mc-india", name: "INDIA", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 105, caffeineMax: 105, caffeineLabel: "105mg", intensity: 11, notes: "Intense, Woody & Spicy", decaf: false, weight: "5.5g" },
  { id: "o-mc-indonesia", name: "INDONESIA", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 72, caffeineMax: 72, caffeineLabel: "72mg", intensity: 8, notes: "Intense, Cereal & Woody", decaf: false, weight: "5.7g" },
  { id: "o-mc-colombia", name: "COLOMBIA", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 64, caffeineMax: 64, caffeineLabel: "64mg", intensity: 6, notes: "Fruity Winey", decaf: false, weight: "5.7g" },
  { id: "o-mc-nicaragua", name: "NICARAGUA", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: 5, notes: "Cereal", decaf: false, weight: "5.7g" },
  { id: "o-mc-ethiopia", name: "ETHIOPIA", lineup: "Original", category: "Master Crafted", cupSize: "Espresso (40ml)", caffeineMin: 62, caffeineMax: 62, caffeineLabel: "62mg", intensity: 4, notes: "Flowery & Fruity", decaf: false, weight: "5.7g" },
];

export default pods;

export const ALL_LINEUPS: Lineup[] = ["Vertuo", "Original"];
export const ALL_CATEGORIES = [...new Set(pods.map((p) => p.category))].sort();
export const ALL_CUP_SIZES = [...new Set(pods.map((p) => p.cupSize))];
export const MAX_CAFFEINE = 257;

// Pods available at the Maldives Nespresso store (Original / Classic line only)
export const MALDIVES_IDS = new Set([
  // Ispirazione Italiana
  "o-ii-ristretto", "o-ii-firenze", "o-ii-roma", "o-ii-genova",
  "o-ii-palermo", "o-ii-napoli", "o-ii-venezia",
  "o-ii-ristretto-decaf", "o-ii-firenze-decaf",
  // Original Collection
  "o-capriccio", "o-cosi", "o-volluto", "o-volluto-decaf",
  // World Explorations - Lungo
  "o-we-stockholm", "o-we-vienna", "o-we-capetown",
  "o-we-tokyo", "o-we-shanghai", "o-we-buenosaires",
  // World Explorations - Espresso
  "o-we-rio", "o-we-paris", "o-we-istanbul",
  // Barista Creations
  "o-bc-chiaro", "o-bc-scuro", "o-bc-corto",
  "o-bc-vaniglia", "o-bc-caramello", "o-bc-cioccolatino", "o-bc-nocciola",
  // Master Origin
  "o-mc-nicaragua", "o-mc-colombia", "o-mc-indonesia", "o-mc-india",
]);
