// Catalog data from the client's catalog "Katalog Gita Parfum, Oktober 2026" (PDF).
// Photos: public/images/products/<slug>.jpg (cut from the same PDF).
// In Phase 2 this moves to a CMS / database (dynamic catalog).
export type Shape =
  | "round"
  | "square"
  | "tall"
  | "flask"
  | "rollon"
  | "diffuser"
  | "atomizer"
  | "cap"
  | "box";

export type Category = {
  slug: string;
  name: string;
  blurb: string;
  /** Page heading and search title: the words buyers type into Google, e.g. "Botol Spray Parfum Drat". */
  title: string;
  shape: Shape;
};

/** Category copy as written in the catalog data: English plus Indonesian. */
type CategoryRow = Category & { nameId: string; blurbId: string; titleId: string };

/** Closure as written in the catalog: drat/ulir/putar = screw, easy pump/semi press, crimp/press, roll on. */
export type Closure = "screw" | "easy-pump" | "crimp" | "roll-on" | "screw-or-semi-press" | "ask";

export type Product = {
  slug: string;
  name: string;
  /** The model name exactly as printed in the client's catalog, so buyers can quote it on WhatsApp. */
  code: string;
  category: string;
  closure: Closure;
  badge?: "New" | "Pre-order";
  shape: Shape;
  glass: string; // tint used by the placeholder illustration (only shown if a photo is missing)
  cap: string;
  sizes: string[];
  material: string;
  neck: string;
  moq: string;
  finishes: string[];
  summary: string;
  featured?: boolean;
};

const categoryRows: CategoryRow[] = [
  { slug: "screw-spray-bottles", name: "Screw-neck Spray Bottles", blurb: "Glass perfume spray bottles with a screw-on (drat/ulir) pump, 18 ml to 150 ml.", shape: "square",
    title: "Screw-neck Perfume Spray Bottles, 18–150 ml",
    nameId: "Botol Spray Drat", titleId: "Botol Spray Parfum Drat (Ulir) 18–150 ml",
    blurbId: "Botol spray parfum kaca dengan spray drat (ulir), ukuran 18 ml sampai 150 ml." },
  { slug: "easy-pump-spray-bottles", name: "Easy-pump Spray Bottles", blurb: "Glass perfume bottles with easy-pump / semi-press sprayers that fit without a crimping tool.", shape: "round",
    title: "Easy-pump Perfume Spray Bottles",
    nameId: "Botol Spray Easy Pump", titleId: "Botol Spray Parfum Easy Pump",
    blurbId: "Botol spray parfum kaca dengan spray easy pump / semi press, dipasang tanpa alat crimping." },
  { slug: "crimp-spray-bottles", name: "Crimp Spray Bottles", blurb: "Crimp (press) neck perfume bottles for a sealed, factory finish.", shape: "tall",
    title: "Crimp-neck Perfume Spray Bottles",
    nameId: "Botol Spray Crimp (Press)", titleId: "Botol Spray Parfum Crimp (Press)",
    blurbId: "Botol spray parfum kaca dengan leher crimp (press), dipasang dengan alat crimping." },
  { slug: "mini-travel-sprays", name: "Mini & Travel Sprays", blurb: "FX 13–15 ml and pen sprays, 3 ml to 15 ml, for decants and testers.", shape: "atomizer",
    title: "Mini & Travel Perfume Sprays, 3–15 ml",
    nameId: "Spray Mini & Travel", titleId: "Botol Parfum Mini & Travel Spray 3–15 ml",
    blurbId: "Botol parfum mini FX 13–15 ml dan pen spray 3–15 ml, untuk decant dan tester." },
  { slug: "roll-on-bottles", name: "Roll-on Bottles", blurb: "Glass roll-on bottles from 3 ml to 15 ml for oil perfumes and attars.", shape: "rollon",
    title: "Roll-on Perfume Bottles, 3–15 ml",
    nameId: "Botol Roll-on", titleId: "Botol Roll-on Parfum 3–15 ml",
    blurbId: "Botol roll-on kaca 3–15 ml untuk parfum minyak dan attar." },
  { slug: "frosted-gradient-bottles", name: "Frosted & Gradient Bottles", blurb: "Bestselling perfume bottle shapes in frosted and gradient colours.", shape: "flask",
    title: "Frosted & Gradient Perfume Bottles",
    nameId: "Botol Frosted & Gradasi", titleId: "Botol Parfum Frosted & Gradasi",
    blurbId: "Botol parfum kaca warna frosted dan gradasi." },
  { slug: "pre-order-bottles", name: "Pre-order Bottles", blurb: "The GP series and other new perfume bottle designs, available on pre-order (PO). Minimum order 10,000 pcs.", shape: "square",
    title: "Pre-order Perfume Bottles (GP Series)",
    nameId: "Botol Pre-order", titleId: "Botol Parfum Pre-order Seri GP",
    blurbId: "Botol parfum seri GP dan model-model baru, sistem pre-order (PO). Minimal order 10.000 pcs." },
];

type Row = Pick<Product, "slug" | "name" | "code" | "category" | "closure" | "badge" | "featured"> & { sizes: string };

const rows: Row[] = [
  { slug: "adg-doff", name: "ADG Doff", code: "ADG DOFF", category: "screw-spray-bottles", closure: "screw", sizes: "30/50/100", featured: true },
  { slug: "byredo-black", name: "Byredo Black", code: "BYREDO BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "byredo-warna", name: "Byredo Warna", code: "BYREDO WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "blooming-black", name: "Blooming Black", code: "BLOOMING BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "blooming-gold", name: "Blooming Gold", code: "BLOOMING GOLD", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "cblu", name: "CBLU", code: "CBLU", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "casa-warna", name: "Casa Warna", code: "CASA WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "18/30", featured: true },
  { slug: "casa-g002", name: "Casa G002", code: "CASA G002", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "casa-g004", name: "Casa G004", code: "CASA G004", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "casa-g006", name: "Casa G006", code: "CASA G006", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "casa-black", name: "Casa Black", code: "CASA BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "20/30/50" },
  { slug: "casa-selang-warna", name: "Casa Selang Warna", code: "CASA SELANG WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "casa-kabel", name: "Casa Kabel", code: "CASA KABEL", category: "screw-spray-bottles", closure: "screw", sizes: "20/30/50" },
  { slug: "casa-doff-silver", name: "Casa Doff Silver", code: "CASA DOFF SILVER", category: "screw-spray-bottles", closure: "screw", sizes: "20/30" },
  { slug: "casa-marble", name: "Casa Marble", code: "CASA MARBLE", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "coco-tinggi-black", name: "Coco Tinggi Black", code: "COCO TINGGI BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "coco-tinggi-doff", name: "Coco Tinggi Doff", code: "COCO TINGGI DOFF", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "coco-tinggi-bening", name: "Coco Tinggi Bening", code: "COCO TINGGI BENING", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "coco-chanel", name: "Coco Chanel", code: "COCO CHANEL", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "chloe-sangkar-black-white", name: "Chloe Sangkar Black/White", code: "CHLOE SANGKAR BLACK/WHITE", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "chloe-sangkar-warna", name: "Chloe Sangkar Warna", code: "CHLOE SANGKAR WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "chloe-sangkar-black", name: "Chloe Sangkar Black", code: "CHLOE SANGKAR BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "chloe-sangkar-white", name: "Chloe Sangkar White", code: "CHLOE SANGKAR WHITE", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "chloe-sangkar-white-50-ml", name: "Chloe Sangkar White 50 ml", code: "CHLOE SANGKAR WHITE", category: "screw-spray-bottles", closure: "screw", sizes: "50" },
  { slug: "claire", name: "Claire", code: "CLAIRE", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "dior-black", name: "Dior Black", code: "DIOR BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "20/30/50" },
  { slug: "durian", name: "Durian", code: "DURIAN", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "delina", name: "Delina", code: "DELINA", category: "screw-spray-bottles", closure: "screw", sizes: "25" },
  { slug: "dpt-black", name: "DPT Black", code: "DPT BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "dpt-silver", name: "DPT Silver", code: "DPT SILVER", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "eve-screw", name: "Eve (Screw)", code: "EVE", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "eve-crimp", name: "Eve (Crimp)", code: "EVE", category: "crimp-spray-bottles", closure: "crimp", sizes: "30" },
  { slug: "femme", name: "Femme", code: "FEMME", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "fx-new-black", name: "FX New Black", code: "FX NEW BLACK", category: "mini-travel-sprays", closure: "screw", sizes: "13/15" },
  { slug: "fx-new-silver", name: "FX New Silver", code: "FX NEW SILVER", category: "mini-travel-sprays", closure: "screw", sizes: "13/15" },
  { slug: "fx-4-black", name: "FX 4 Black", code: "FX 4 BLACK", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx-shiny-warna", name: "FX Shiny Warna", code: "FX SHINY WARNA", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx-alu-warna", name: "FX Alu Warna", code: "FX ALU WARNA", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "hermes-silver-screw", name: "Hermes Silver (Screw)", code: "HERMES SILVER", category: "screw-spray-bottles", closure: "screw", sizes: "15/30/50/100", featured: true },
  { slug: "hermes-black-screw", name: "Hermes Black (Screw)", code: "HERMES BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30/50/100" },
  { slug: "hermes-black-crimp", name: "Hermes Black (Crimp)", code: "HERMES BLACK", category: "crimp-spray-bottles", closure: "crimp", sizes: "50" },
  { slug: "hermes-silver-crimp", name: "Hermes Silver (Crimp)", code: "HERMES SILVER", category: "crimp-spray-bottles", closure: "crimp", sizes: "30/50/100" },
  { slug: "hermes-twilly-scarf", name: "Hermes Twilly Scarf", code: "HERMES TWILLY SCARF", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "hermes-twilly", name: "Hermes Twilly", code: "HERMES TWILLY", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "jo-roll-on", name: "Jo Roll-on", code: "JO", category: "roll-on-bottles", closure: "roll-on", sizes: "15" },
  { slug: "jo-malone-silver", name: "Jo Malone Silver", code: "JO MALONE SILVER", category: "screw-spray-bottles", closure: "screw", sizes: "30/50", featured: true },
  { slug: "jo-malone-black", name: "Jo Malone Black", code: "JO MALONE BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "jo-malone-gold", name: "Jo Malone Gold", code: "JO MALONE GOLD", category: "crimp-spray-bottles", closure: "crimp", sizes: "30" },
  { slug: "jardin-black", name: "Jardin Black", code: "JARDIN BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "50" },
  { slug: "joi", name: "Joi", code: "JOI", category: "screw-spray-bottles", closure: "screw", sizes: "20/30/50/90" },
  { slug: "kotak-bintik", name: "Kotak Bintik", code: "KOTAK BINTIK", category: "screw-spray-bottles", closure: "screw", sizes: "30/50/100" },
  { slug: "lacoste-screw", name: "Lacoste (Screw)", code: "LACOSTE", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "lacoste-full-black", name: "Lacoste Full Black", code: "LACOSTE FULL BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "50" },
  { slug: "lacoste-easy-pump", name: "Lacoste (Easy Pump)", code: "LACOSTE", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "lelabo-screw", name: "Lelabo (Screw)", code: "LELABO", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "lelabo-easy-pump", name: "Lelabo (Easy Pump)", code: "LELABO", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "lilin-doff-oval-black-screw", name: "Lilin Doff Oval Black (Screw)", code: "LILIN DOFF OVAL BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "lilin-doff-oval-black-easy-pump", name: "Lilin Doff Oval Black (Easy Pump)", code: "LILIN DOFF OVAL BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "pot-silver", name: "Pot Silver", code: "POT SILVER", category: "screw-spray-bottles", closure: "screw", sizes: "50" },
  { slug: "pentol-screw", name: "Pentol (Screw)", code: "PENTOL", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "pentol-easy-pump", name: "Pentol (Easy Pump)", code: "PENTOL", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30/50" },
  { slug: "pen-kaca", name: "Pen Kaca", code: "PEN KACA", category: "mini-travel-sprays", closure: "screw", sizes: "3/5/10" },
  { slug: "pen-kaca-kotak", name: "Pen Kaca Kotak", code: "PEN KACA KOTAK", category: "mini-travel-sprays", closure: "screw", sizes: "10" },
  { slug: "pw1-kotak-black-screw", name: "PW1 Kotak Black (Screw)", code: "PW 1 KOTAK BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "pw-kotak-warna", name: "PW Kotak Warna", code: "PW KOTAK WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "pw1-kotak-black-easy-pump", name: "PW1 Kotak Black (Easy Pump)", code: "PW1 KOTAK BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30/50" },
  { slug: "pw2-crimping", name: "PW2 Crimping", code: "PW2 CRIMPING", category: "crimp-spray-bottles", closure: "crimp", sizes: "30" },
  { slug: "pw2-miso-crimping", name: "PW2 Miso Crimping", code: "PW2 MISO CRIMPING", category: "crimp-spray-bottles", closure: "crimp", sizes: "50" },
  { slug: "ring-warna", name: "Ring Warna", code: "RING WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "20" },
  { slug: "roja", name: "Roja", code: "ROJA", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "50" },
  { slug: "tola-diamond-roll-on", name: "Tola Diamond Roll-on", code: "TOLA DIAMOND", category: "roll-on-bottles", closure: "roll-on", sizes: "3/6/12" },
  { slug: "wajik-roll-on", name: "Wajik Roll-on", code: "WAJIK", category: "roll-on-bottles", closure: "roll-on", sizes: "7" },
  { slug: "malaysia-roll-on", name: "Malaysia Roll-on", code: "MALAYSIA", category: "roll-on-bottles", closure: "roll-on", sizes: "8" },
  { slug: "ulir-roll-on", name: "Ulir Roll-on", code: "ULIR", category: "roll-on-bottles", closure: "roll-on", sizes: "10" },
  { slug: "kubah-uv-roll-on", name: "Kubah UV Roll-on", code: "KUBAH UV", category: "roll-on-bottles", closure: "roll-on", sizes: "3/6/12", featured: true },
  { slug: "doff-roll-on", name: "Doff Roll-on", code: "DOFF", category: "roll-on-bottles", closure: "roll-on", sizes: "8" },
  { slug: "salur-roll-on", name: "Salur Roll-on", code: "SALUR", category: "roll-on-bottles", closure: "roll-on", sizes: "4" },
  { slug: "segitiga-bintik", name: "Segitiga Bintik", code: "SEGITIGA BINTIK", category: "screw-spray-bottles", closure: "screw", sizes: "50" },
  { slug: "wk-black", name: "WK Black", code: "WK BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "zaza-screw", name: "Zaza (Screw)", code: "ZAZA", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "zaza-crimp", name: "Zaza (Crimp)", code: "ZAZA", category: "crimp-spray-bottles", closure: "crimp", sizes: "30" },
  { slug: "zara", name: "Zara", code: "ZARA", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "1969-black", name: "1969 Black", code: "1969 BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "1294-black-screw", name: "1294 Black (Screw)", code: "1294 BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30/50" },
  { slug: "1294-black-easy-pump", name: "1294 Black (Easy Pump)", code: "1294 BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30/50" },
  { slug: "1294-full-black", name: "1294 Full Black", code: "1294 FULL BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30/50" },
  { slug: "1294-warna", name: "1294 Warna", code: "1294 WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "50" },
  { slug: "lacoste-full-black-30-ml", name: "Lacoste Full Black 30 ml", code: "LACOSTE FULL BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "jo-malone-black-round-cap", name: "Jo Malone Black Round Cap", code: "JO MALONE BLACK CAP BULAT", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "givan-screw", name: "Givan (Screw)", code: "GIVAN", category: "screw-spray-bottles", closure: "screw", sizes: "50", badge: "New" },
  { slug: "givan-easy-pump", name: "Givan (Easy Pump)", code: "GIVAN", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "50", badge: "New" },
  { slug: "pw2-black-easy-pump", name: "PW2 Black (Easy Pump)", code: "PW2 BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30/50", badge: "New" },
  { slug: "pw2-black-crimp", name: "PW2 Black (Crimp)", code: "PW2 BLACK", category: "crimp-spray-bottles", closure: "crimp", sizes: "50", badge: "New" },
  { slug: "blooming-black-round-cap", name: "Blooming Black Round Cap", code: "BLOOMING BLACK CAP BULAT", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New" },
  { slug: "inocu-pentol-mix-warna", name: "Inocu Pentol Mix Warna", code: "INOCU PENTOL MIX WARNA", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New" },
  { slug: "savin-black", name: "Savin Black", code: "SAVIN BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New" },
  { slug: "cblue-trans-black", name: "CBlue Trans Black", code: "CBLUE TRANS BLACK", category: "screw-spray-bottles", closure: "screw", sizes: "30" },
  { slug: "femme-trans-black", name: "Femme Trans Black", code: "FEMME TRANS BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "100" },
  { slug: "jo-gold-kotak", name: "Jo Gold Kotak", code: "JO GOLD KOTAK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "bacarat-gold", name: "Bacarat Gold", code: "BACARAT GOLD", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "fx-13-shiny-mix-color", name: "FX 13 Shiny Mix Color", code: "FX 13 SHINY MIX COLOR", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx-15-new-silver", name: "FX 15 New Silver", code: "FX 15 NEW SILVER", category: "mini-travel-sprays", closure: "screw", sizes: "15" },
  { slug: "fx-13-new-silver", name: "FX 13 New Silver", code: "FX 13 NEW SILVER", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx-13-new-shiny-silver", name: "FX 13 New Shiny Silver", code: "FX 13 NEW SHINY SILVER", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx-15-new-black", name: "FX 15 New Black", code: "FX 15 NEW BLACK", category: "mini-travel-sprays", closure: "screw", sizes: "15" },
  { slug: "fx-13-new-black", name: "FX 13 New Black", code: "FX 13 NEW BLACK", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "fx4-new-black", name: "FX4 New Black", code: "FX4 13ML NEW BLACK", category: "mini-travel-sprays", closure: "screw", sizes: "13" },
  { slug: "bodishop", name: "Bodishop", code: "BODISHOP", category: "crimp-spray-bottles", closure: "crimp", sizes: "100" },
  { slug: "hermes-stone", name: "Hermes Stone", code: "HERMES STONE", category: "pre-order-bottles", closure: "easy-pump", sizes: "30", badge: "Pre-order" },
  { slug: "hermes-stone-1", name: "Hermes Stone 1", code: "HERMES STONE 1", category: "pre-order-bottles", closure: "crimp", sizes: "30", badge: "Pre-order" },
  { slug: "jinni-gradasi", name: "Jinni Gradasi", code: "JINNI GRADASI", category: "pre-order-bottles", closure: "easy-pump", sizes: "30/50", badge: "Pre-order" },
  { slug: "cedar-black", name: "Cedar Black", code: "CEDAR BLACK", category: "pre-order-bottles", closure: "easy-pump", sizes: "30", badge: "Pre-order" },
  { slug: "saka", name: "Saka", code: "SAKA", category: "pre-order-bottles", closure: "easy-pump", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "bbs", name: "BBS", code: "BBS", category: "pre-order-bottles", closure: "screw-or-semi-press", sizes: "30", badge: "Pre-order" },
  { slug: "scarlit", name: "Scarlit", code: "SCARLIT", category: "pre-order-bottles", closure: "screw-or-semi-press", sizes: "30", badge: "Pre-order" },
  { slug: "jinni-full-black", name: "Jinni Full Black", code: "JINNI FULL BLACK", category: "pre-order-bottles", closure: "easy-pump", sizes: "15/30/50", badge: "Pre-order" },
  { slug: "gissah-screw-mix-color-50-ml", name: "Gissah Screw Mix Color 50 ml", code: "GISSAH SCREW 50ML MIX COLOR", category: "screw-spray-bottles", closure: "screw", sizes: "50", badge: "New" },
  { slug: "gissah-screw-mix-color-30-ml", name: "Gissah Screw Mix Color 30 ml", code: "GISSAH SCREW 30ML MIX COLOR", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New" },
  { slug: "gissah-screw-6-mix-color", name: "Gissah Screw 6 Mix Color", code: "GISSAH SCREW 30ML 6 MIX COLOR", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New", featured: true },
  { slug: "clear-jinn", name: "Clear Jinn", code: "CLEAR JINN 150ML", category: "screw-spray-bottles", closure: "ask", sizes: "150", badge: "New" },
  { slug: "prem-easy-trans", name: "Prem Easy Trans", code: "PREM EASY TRANS 100ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "100", badge: "New" },
  { slug: "blooming-tinggi-easy-black", name: "Blooming Tinggi Easy Black", code: "BLOOMING TINGGI EASY BLACK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "inocu-trans-black", name: "Inocu Trans Black", code: "INOCU TRANS BLACK 50ML", category: "screw-spray-bottles", closure: "screw", sizes: "50", badge: "New" },
  { slug: "tomford-gold", name: "Tomford Gold", code: "TOMFORD 30ML GOLD", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "hermes-frosted", name: "Hermes Frosted", code: "HERMES 100ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "100" },
  { slug: "sauvage-frosted", name: "Sauvage Frosted", code: "SAUVAGE 30ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "30", featured: true },
  { slug: "1294-frosted", name: "1294 Frosted", code: "1294 30ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "twilli-frosted", name: "Twilli Frosted", code: "TWILLI 30ML", category: "frosted-gradient-bottles", closure: "screw", sizes: "30" },
  { slug: "jo-malone-frosted", name: "Jo Malone Frosted", code: "JOMALONE 30ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "eve-frosted", name: "Eve Frosted", code: "EVE 30ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "segitiga-bintik-frosted", name: "Segitiga Bintik Frosted", code: "SEGITIGA BINTIK 50ML", category: "frosted-gradient-bottles", closure: "screw", sizes: "50" },
  { slug: "lilin-doff-frosted", name: "Lilin Doff Frosted", code: "LILIN DOFF 30ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "30" },
  { slug: "givan-gradient", name: "Givan Gradient", code: "GIVAN 50ML", category: "frosted-gradient-bottles", closure: "screw", sizes: "50" },
  { slug: "preem-gradient", name: "Preem Gradient", code: "PREEM 100ML", category: "frosted-gradient-bottles", closure: "easy-pump", sizes: "100" },
  { slug: "inocu-pentol-gradient", name: "Inocu Pentol Gradient", code: "INOCU PENTOL 30ML", category: "frosted-gradient-bottles", closure: "screw", sizes: "30" },
  { slug: "dw-1012-black", name: "DW 1012 Black", code: "DW 1012 BLACK 50ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "50", badge: "New" },
  { slug: "dw-1030-black", name: "DW 1030 Black", code: "DW 1030 BLACK 50ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "50", badge: "New" },
  { slug: "dw-1029-black", name: "DW 1029 Black", code: "DW 1029 BLACK 30ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "dw-564-silver", name: "DW 564 Silver", code: "DW 564 SILVER 30ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "dw-909-silver-no-cap", name: "DW 909 Silver (no cap)", code: "DW 909 SILVER 30ML NO CAP", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "dw-909-silver-with-cap", name: "DW 909 Silver with Cap", code: "DW 909 SILVER 30ML WITH CAP", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "aicem-silver-60-ml", name: "Aicem Silver 60 ml", code: "AICEM 60ML SILVER", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "60", badge: "New" },
  { slug: "aicem-silver-30-ml", name: "Aicem Silver 30 ml", code: "AICEM 30ML SILVER", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "savin-screw", name: "Savin Screw", code: "SAVIN SCREW 30ML", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
  { slug: "delina-scarf", name: "Delina Scarf", code: "DELINA SCRAF 30ML", category: "screw-spray-bottles", closure: "screw", sizes: "30", badge: "New" },
  { slug: "gp1", name: "GP1", code: "GP1", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp2", name: "GP2", code: "GP2", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp3", name: "GP3", code: "GP3", category: "pre-order-bottles", closure: "ask", sizes: "20", badge: "Pre-order" },
  { slug: "gp4", name: "GP4", code: "GP4", category: "pre-order-bottles", closure: "ask", sizes: "20", badge: "Pre-order" },
  { slug: "gp5", name: "GP5", code: "GP5", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp6", name: "GP6", code: "GP6", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp7", name: "GP7", code: "GP7", category: "pre-order-bottles", closure: "ask", sizes: "20", badge: "Pre-order" },
  { slug: "gp8", name: "GP8", code: "GP8", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp9", name: "GP9", code: "GP9", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp10", name: "GP10", code: "GP10", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp11", name: "GP11", code: "GP11", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp12", name: "GP12", code: "GP12", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp13", name: "GP13", code: "GP13", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp14", name: "GP14", code: "GP14", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp15", name: "GP15", code: "GP15", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp16", name: "GP16", code: "GP16", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp17", name: "GP17", code: "GP17", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp18", name: "GP18", code: "GP18", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp19", name: "GP19", code: "GP19", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp20", name: "GP20", code: "GP20", category: "pre-order-bottles", closure: "ask", sizes: "50", badge: "Pre-order", featured: true },
  { slug: "gp21", name: "GP21", code: "GP21", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp22", name: "GP22", code: "GP22", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp23", name: "GP23", code: "GP23", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp24", name: "GP24", code: "GP24", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp25", name: "GP25", code: "GP25", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp26", name: "GP26", code: "GP26", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp27", name: "GP27", code: "GP27", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp28", name: "GP28", code: "GP28", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp29", name: "GP29", code: "GP29", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp30", name: "GP30", code: "GP30", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp31", name: "GP31", code: "GP31", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp32", name: "GP32", code: "GP32", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp33", name: "GP33", code: "GP33", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp34", name: "GP34", code: "GP34", category: "pre-order-bottles", closure: "ask", sizes: "50", badge: "Pre-order" },
  { slug: "gp35", name: "GP35", code: "GP35", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp36-gp37-gp38", name: "GP36 / GP37 / GP38", code: "GP36 - GP37 - GP38", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp39", name: "GP39", code: "GP39", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp40-gp41-gp42", name: "GP40 / GP41 / GP42", code: "GP40 - GP41 - GP42", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp43-gp44", name: "GP43 / GP44", code: "GP43 - GP44", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp45", name: "GP45", code: "GP45", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp46", name: "GP46", code: "GP46", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp47", name: "GP47", code: "GP47", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp48", name: "GP48", code: "GP48", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp49", name: "GP49", code: "GP49", category: "pre-order-bottles", closure: "ask", sizes: "30/100", badge: "Pre-order" },
  { slug: "gp50-gp51-gp52", name: "GP50 / GP51 / GP52", code: "GP50 - GP51 - GP52", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp53-gp54", name: "GP53 / GP54", code: "GP53 - GP54", category: "pre-order-bottles", closure: "ask", sizes: "20/30", badge: "Pre-order" },
  { slug: "gp55", name: "GP55", code: "GP55", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp56", name: "GP56", code: "GP56", category: "pre-order-bottles", closure: "ask", sizes: "100", badge: "Pre-order" },
  { slug: "gp57", name: "GP57", code: "GP57", category: "pre-order-bottles", closure: "ask", sizes: "20/30", badge: "Pre-order" },
  { slug: "gp58", name: "GP58", code: "GP58", category: "pre-order-bottles", closure: "ask", sizes: "100", badge: "Pre-order" },
  { slug: "gp59-gp60", name: "GP59 / GP60", code: "GP59 - GP60", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp61", name: "GP61", code: "GP61", category: "pre-order-bottles", closure: "ask", sizes: "50/100", badge: "Pre-order" },
  { slug: "gp62", name: "GP62", code: "GP62", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp63", name: "GP63", code: "GP63", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp64", name: "GP64", code: "GP64", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "gp65", name: "GP65", code: "GP65", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp66", name: "GP66", code: "GP66", category: "pre-order-bottles", closure: "ask", sizes: "30/50/100", badge: "Pre-order" },
  { slug: "gp67", name: "GP67", code: "GP67", category: "pre-order-bottles", closure: "ask", sizes: "30", badge: "Pre-order" },
  { slug: "gp68", name: "GP68", code: "GP68", category: "pre-order-bottles", closure: "ask", sizes: "10", badge: "Pre-order" },
  { slug: "gp69-gp70-gp71", name: "GP69 / GP70 / GP71", code: "GP69 - GP70 - GP71", category: "pre-order-bottles", closure: "ask", sizes: "30/50", badge: "Pre-order" },
  { slug: "al-rhb-guitar-silver-press", name: "Al Rhb Guitar Silver Press", code: "AL RHB GUITAR SILVER PRESS", category: "crimp-spray-bottles", closure: "crimp", sizes: "30", badge: "New" },
  { slug: "pw2-trans-easy", name: "PW2 Trans Easy", code: "PW2 TRANS EASY CAP PLASTIK", category: "easy-pump-spray-bottles", closure: "easy-pump", sizes: "30", badge: "New" },
];

const NECK: Record<Closure, string> = {
  screw: "Screw neck spray (drat / ulir / putar)",
  "easy-pump": "Easy-pump / semi-press spray",
  crimp: "Crimp neck spray (press)",
  "roll-on": "Roll-on ball with screw cap",
  "screw-or-semi-press": "Screw neck or semi-press spray",
  ask: "Ask us for closure options",
};

const NECK_ID: Record<Closure, string> = {
  screw: "Spray drat (ulir / putar)",
  "easy-pump": "Spray easy pump / semi press",
  crimp: "Spray crimp (press)",
  "roll-on": "Bola roll-on dengan tutup drat",
  "screw-or-semi-press": "Spray drat atau semi press",
  ask: "Tanyakan pilihan tutup",
};

const FINISH_ID: Record<string, string> = {
  "Gradient colour": "Warna gradasi",
  "Frosted colour": "Warna frosted",
  Gradient: "Gradasi",
  "Mixed colours": "Aneka warna",
  Matte: "Doff",
  Marble: "Marmer",
  "Full black": "Full hitam",
  "Black cap": "Tutup hitam",
  "White cap": "Tutup putih",
  Silver: "Silver",
  Gold: "Gold",
  "Clear glass": "Kaca bening",
  Shiny: "Mengkilap",
  Aluminium: "Aluminium",
};

const SHAPE: Record<string, Shape> = Object.fromEntries(categoryRows.map((c) => [c.slug, c.shape]));

function finishesOf(r: Row): string[] {
  const s = `${r.name} ${r.code}`.toLowerCase();
  const f: string[] = [];
  if (r.category === "frosted-gradient-bottles") f.push(/gradient|gradasi/.test(s) ? "Gradient colour" : "Frosted colour");
  if (/gradasi/.test(s) && r.category !== "frosted-gradient-bottles") f.push("Gradient");
  if (/warna|mix colou?r/.test(s)) f.push("Mixed colours");
  if (/doff/.test(s)) f.push("Matte");
  if (/marble/.test(s)) f.push("Marble");
  if (/full black/.test(s)) f.push("Full black");
  else if (/black/.test(s)) f.push("Black cap");
  if (/white/.test(s)) f.push("White cap");
  if (/silver/.test(s)) f.push("Silver");
  if (/gold/.test(s)) f.push("Gold");
  if (/trans|bening|clear/.test(s)) f.push("Clear glass");
  if (/shiny/.test(s)) f.push("Shiny");
  if (/alu/.test(s)) f.push("Aluminium");
  return f.length ? f : ["Clear glass"];
}

function capOf(r: Row) {
  const s = r.name.toLowerCase();
  return /black/.test(s) ? "#1f1b16" : /gold/.test(s) ? "#b08a4a" : /silver/.test(s) ? "#bdbdbd" : "#8a6a3a";
}

function summaryOf(r: Row, sizes: string[]) {
  const range = sizes.length > 1 ? `${sizes[0]} to ${sizes[sizes.length - 1]}` : sizes[0];
  const kind =
    r.closure === "roll-on" ? "roll-on bottle"
    : r.closure === "ask" ? "glass perfume bottle"
    : `glass perfume bottle with ${NECK[r.closure].replace(/ \(.*\)/, "").toLowerCase()}`;
  const lead = `${r.name}: ${kind}, ${range}.`;
  const tail =
    r.badge === "Pre-order" ? " Pre-order (PO), minimum order 10,000 pcs. Ask us for the lead time and colour options."
    : r.badge === "New" ? " New in our catalog."
    : " Ready stock, no minimum order.";
  return lead + tail + " Logo printing available on request.";
}

function summaryIdOf(r: Row, sizes: string[]) {
  const range = sizes.length > 1 ? `${sizes[0]}–${sizes[sizes.length - 1]}` : sizes[0];
  const kind =
    r.closure === "roll-on" ? "botol roll-on"
    : r.closure === "ask" ? "botol parfum kaca"
    : `botol parfum kaca dengan ${NECK_ID[r.closure].replace(/ \(.*\)/, "").toLowerCase()}`;
  const lead = `${r.name}: ${kind}, ${range}.`;
  const tail =
    r.badge === "Pre-order" ? " Sistem pre-order (PO), minimal order 10.000 pcs. Tanyakan estimasi waktu dan pilihan warna."
    : r.badge === "New" ? " Model baru."
    : " Ready stock, tanpa minimal order.";
  return lead + tail + " Bisa cetak logo.";
}

/** Minimum order for pre-order (PO) bottles. Ready stock has no minimum (1 pc). */
export const PO_MOQ = { id: "10.000 pcs", en: "10,000 pcs" } as const;

const productsEn: Product[] = rows.map((r) => {
  const sizes = r.sizes.split("/").map((s) => `${s} ml`);
  return {
    ...r,
    sizes,
    shape: SHAPE[r.category] ?? "square",
    glass: r.category === "frosted-gradient-bottles" ? "#e9c9b0" : "#e9dfd0",
    cap: capOf(r),
    material: "Glass",
    neck: NECK[r.closure],
    moq: r.badge === "Pre-order" ? PO_MOQ.en : "1 pc",
    finishes: finishesOf(r),
    summary: summaryOf(r, sizes),
  };
});

const productsId: Product[] = rows.map((r, i) => {
  const en = productsEn[i];
  return {
    ...en,
    material: "Kaca",
    neck: NECK_ID[r.closure],
    moq: r.badge === "Pre-order" ? PO_MOQ.id : "1 pcs",
    finishes: en.finishes.map((f) => FINISH_ID[f] ?? f),
    summary: summaryIdOf(r, en.sizes),
  };
});

const categoriesEn: Category[] = categoryRows.map(({ slug, name, blurb, title, shape }) => ({ slug, name, blurb, title, shape }));
const categoriesId: Category[] = categoryRows.map(({ slug, nameId, blurbId, titleId, shape }) => ({ slug, name: nameId, blurb: blurbId, title: titleId, shape }));

type Lang = "id" | "en";

/** Category list in the given language. Slugs are the same in both languages. */
export const getCategories = (lang: Lang) => (lang === "id" ? categoriesId : categoriesEn);
/** All products in the given language (names and catalog codes stay as printed in the catalog). */
export const getProducts = (lang: Lang) => (lang === "id" ? productsId : productsEn);
export const getCategory = (slug: string, lang: Lang) => getCategories(lang).find((c) => c.slug === slug);
export const getProduct = (slug: string, lang: Lang) => getProducts(lang).find((p) => p.slug === slug);
export const productsIn = (cat: string, lang: Lang) => getProducts(lang).filter((p) => p.category === cat);

/** Language-neutral lists (slugs only), for static params and the sitemap. */
export const categories = categoriesEn;
export const products = productsEn;

/**
 * What kind of bottle a product is, in the words people search for
 * ("Botol Spray Parfum", "Botol Roll-on Parfum" / "Perfume Spray Bottle").
 */
export function kindOf(p: Product, lang: Lang) {
  if (p.closure === "roll-on") return lang === "id" ? "Botol Roll-on Parfum" : "Roll-on Perfume Bottle";
  if (p.closure === "ask") return lang === "id" ? "Botol Parfum Kaca" : "Glass Perfume Bottle";
  return lang === "id" ? "Botol Spray Parfum" : "Perfume Spray Bottle";
}

/** Sizes written the way people search them: "30ml, 50ml, 100ml". */
export const sizesShort = (p: Product) => p.sizes.map((s) => s.replace(" ", "")).join(", ");

/** Search title for a product page, e.g. "ADG Doff, Botol Spray Parfum 30ml, 50ml, 100ml". */
export const productTitle = (p: Product, lang: Lang) => `${p.name}, ${kindOf(p, lang)} ${sizesShort(p)}`;

/** Photo alt text, e.g. "ADG Doff, botol spray parfum kaca 30ml, 50ml, 100ml". */
export function productAlt(p: Product, lang: Lang) {
  const kind = kindOf(p, lang).toLowerCase();
  const withGlass = lang === "id" ? (kind.includes("kaca") ? kind : `${kind} kaca`) : kind.startsWith("glass") ? kind : `glass ${kind}`;
  return `${p.name}, ${withGlass} ${sizesShort(p)}`;
}

/**
 * Size pages (/catalog/30ml ...): the sizes people search for most ("botol parfum 30ml").
 * They share the /catalog/<slug> route with the categories.
 */
export const sizePages = ["30", "50", "100"].map((n) => ({ slug: `${n}ml`, size: `${n} ml`, n }));
export const getSizePage = (slug: string) => sizePages.find((s) => s.slug === slug);
export const productsWithSize = (size: string, lang: Lang) => getProducts(lang).filter((p) => p.sizes.includes(size));
