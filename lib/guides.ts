// Guide articles ("Panduan") that answer what buyers search for, e.g. "cara memilih botol parfum".
// Pages: /id/panduan, /en/panduan (index) and /<lang>/panduan/<slug> (article).
//
// To add a guide: add one entry to `guides` below with Indonesian and English text, then redeploy.
// The sitemap, the guide index, the home page teaser and "related guides" pick it up automatically.
//
// Text markup inside paragraphs, list items and FAQ answers:
//   **bold**             -> bold text
//   [link text](/path)   -> link to a page of the site, written without the language
//                           ("/catalog/30ml", "/panduan/ukuran-botol-parfum"); /id or /en is added for you.
import type { Lang } from "./i18n";

export type GuideSection = {
  /** Heading of the section (H2). */
  h: string;
  p?: string[];
  list?: string[];
  /** Numbered steps instead of bullets. */
  ordered?: boolean;
  /** Simple table: first row is the header. */
  table?: string[][];
  /** Paragraphs shown after the list or table. */
  after?: string[];
};

export type GuideText = {
  /** Page heading (H1). */
  title: string;
  /** Title in Google results and browser tab (the site name is added after it). */
  seoTitle: string;
  /** Meta description and the summary on guide cards. ~150 characters. */
  description: string;
  intro: string;
  sections: GuideSection[];
  faq: { q: string; a: string }[];
  coverAlt: string;
  /** Optional caption under the cover photo. */
  coverCaption?: string;
};

export type Guide = {
  slug: string;
  published: string; // YYYY-MM-DD
  updated: string; // YYYY-MM-DD
  cover: string;
  /** CSS object-position for the cover crop. */
  coverPos?: string;
  /** Catalog pages shown as "products in this guide" links. */
  catalog: string[];
  id: GuideText;
  en: GuideText;
};

export const guides: Guide[] = [
  {
    slug: "cara-memilih-botol-parfum",
    published: "2026-11-23",
    updated: "2026-11-23",
    cover: "/images/hero.jpg",
    coverPos: "50% 60%",
    catalog: ["/catalog/30ml", "/catalog/screw-spray-bottles", "/catalog/easy-pump-spray-bottles", "/catalog/mini-travel-sprays"],
    id: {
      title: "Cara memilih botol parfum",
      seoTitle: "Cara Memilih Botol Parfum untuk Jualan dan Brand Sendiri",
      description:
        "Cara memilih botol parfum: tentukan ukuran, jenis spray (drat, easy pump, crimp), cek kualitas kaca, spray dan tutup, lalu coba sampel sebelum beli grosir.",
      intro:
        "Botol yang tepat membuat parfum tidak bocor saat dikirim, awet dipakai, dan terlihat rapi di etalase. Berikut hal yang perlu dicek sebelum membeli botol parfum, baik untuk toko refill, decant, maupun brand parfum sendiri.",
      coverAlt: "Botol parfum kaca bening, merah dan hitam dengan tutup emas di showroom Gita Perfume Bottle",
      sections: [
        {
          h: "Tentukan dulu kegunaannya",
          p: [
            "Botol untuk toko refill berbeda dengan botol untuk brand parfum. Toko refill biasanya butuh botol yang harganya terjangkau, mudah diisi ulang, dan stoknya selalu ada. Brand parfum lebih memperhatikan bentuk botol, tutup dan kesan saat dipegang, karena botol ikut menentukan harga jual.",
          ],
          list: [
            "**Toko refill dan isi ulang:** botol spray drat atau easy pump ukuran 30 ml dan 50 ml yang ready stock.",
            "**Decant dan tester:** [spray mini 3–15 ml](/catalog/mini-travel-sprays) atau pen spray.",
            "**Brand parfum sendiri:** botol dengan bentuk khas dan tutup yang berat, lalu [cetak logo](/panduan/cara-custom-logo-botol-parfum).",
            "**Parfum minyak (tanpa alkohol):** [botol roll-on](/catalog/roll-on-bottles).",
          ],
        },
        {
          h: "Pilih ukuran botol",
          p: [
            "Ukuran yang paling banyak dicari adalah 30 ml, 50 ml dan 100 ml. Ukuran 30 ml paling banyak pilihan modelnya dan harganya paling ringan untuk pembeli. Ukuran 50 ml dan 100 ml cocok untuk aroma yang sudah punya pelanggan tetap.",
            "Perbandingan lengkapnya ada di [panduan ukuran botol parfum](/panduan/ukuran-botol-parfum). Bisa juga langsung lihat [botol parfum 30ml](/catalog/30ml), [50ml](/catalog/50ml) dan [100ml](/catalog/100ml).",
          ],
        },
        {
          h: "Pilih jenis spray: drat, easy pump atau crimp",
          p: ["Jenis leher botol menentukan cara spray dipasang, dan apakah botol bisa diisi ulang."],
          list: [
            "**Drat (ulir / putar):** spray diputar seperti tutup biasa. Bisa dibuka lagi, jadi cocok untuk isi ulang.",
            "**Easy pump (semi press):** spray ditekan sampai terkunci, tanpa alat. Rapat, tapi tidak dibuat untuk sering dibuka.",
            "**Crimp (press):** spray dijepit dengan alat crimping. Paling rapat dan rapi seperti parfum pabrikan, tapi tidak bisa dibuka lagi.",
          ],
          after: ["Penjelasan lengkapnya ada di [perbedaan botol spray drat, easy pump dan crimp](/panduan/perbedaan-botol-spray-drat-easy-pump-crimp)."],
        },
        {
          h: "Cek kualitas kaca",
          list: [
            "Tebal kaca rata, tidak ada gelembung udara atau retak halus.",
            "Dasar botol rata, botol berdiri tegak dan tidak goyang.",
            "Bibir leher botol halus. Leher yang tidak rata membuat spray tidak rapat dan parfum bisa merembes.",
            "Warna dan finishing (frosted, gradasi, doff) rata di semua sisi.",
          ],
          after: ["Kaca yang lebih tebal terasa lebih berat dan lebih mewah, tapi ongkos kirimnya juga lebih besar."],
        },
        {
          h: "Cek spray dan tutup",
          list: [
            "Semprotan keluar halus dan merata, tidak menetes.",
            "Panjang selang pas sampai dasar botol, supaya parfum bisa terpakai sampai habis.",
            "Tutup (cap) masuk pas, tidak terlalu longgar dan tidak terlalu keras.",
            "Spray cocok dengan leher botol. Spray drat harus sama ukuran ulirnya dengan botol.",
          ],
        },
        {
          h: "Beli sampel dulu sebelum order banyak",
          p: [
            "Sebelum order dalam jumlah besar, beli beberapa botol dulu untuk dicoba. Isi dengan parfum yang akan dijual, semprotkan beberapa kali, lalu simpan botol dalam posisi tidur di atas tisu selama satu sampai dua hari. Kalau tisu tetap kering, botol dan spray sudah rapat.",
            "Di Gita Perfume Bottle tidak ada minimal order, jadi sampel bisa dibeli mulai 1 pcs. Kalau di Jakarta, botol juga bisa dilihat dan dipegang langsung di [showroom kami di Jakarta Pusat](/contact).",
          ],
        },
        {
          h: "Hitung biaya per botol",
          p: [
            "Harga botol bukan satu-satunya biaya. Hitung juga spray, tutup, box, cetak logo dan ongkos kirim. Pastikan harga yang ditawarkan sudah termasuk spray dan tutup atau belum. Botol kaca cukup berat, jadi ongkos kirim terasa untuk order besar.",
          ],
        },
      ],
      faq: [
        {
          q: "Botol parfum apa yang bagus untuk jualan?",
          a: "Untuk mulai jualan, botol spray kaca 30 ml dengan spray drat atau easy pump paling banyak dipakai. Modelnya banyak, harganya terjangkau, dan ukurannya pas untuk pembeli yang baru mencoba.",
        },
        {
          q: "Lebih bagus botol parfum kaca atau plastik?",
          a: "Untuk parfum, botol kaca lebih disarankan. Kaca tidak bereaksi dengan alkohol dan minyak parfum, jadi aroma tidak berubah, dan botol terlihat lebih bagus.",
        },
        {
          q: "Apakah bisa beli botol parfum satuan?",
          a: "Bisa. Gita Perfume Bottle tidak punya minimal order, jadi bisa beli mulai 1 pcs selama stok tersedia.",
        },
        {
          q: "Bagaimana cara cek botol parfum tidak bocor?",
          a: "Isi botol, pasang spray dengan benar, lalu simpan dalam posisi tidur di atas tisu selama satu sampai dua hari. Kalau tisu tetap kering, botol dan spray sudah rapat.",
        },
      ],
    },
    en: {
      title: "How to choose a perfume bottle",
      seoTitle: "How to Choose a Perfume Bottle for Your Perfume Business",
      description:
        "How to choose a perfume bottle: pick the size and spray type (screw, easy pump, crimp), check the glass, sprayer and cap, and test samples before buying wholesale.",
      intro:
        "The right bottle keeps perfume from leaking in transit, lasts in daily use and looks neat on the shelf. Here is what to check before you buy perfume bottles, whether for a refill shop, decants or your own perfume brand.",
      coverAlt: "Clear, red and black glass perfume bottles with gold caps in the Gita Perfume Bottle showroom",
      sections: [
        {
          h: "Start with what the bottle is for",
          p: [
            "A bottle for a refill shop is different from a bottle for a perfume brand. Refill shops usually need bottles that are affordable, easy to refill and always in stock. Brands care more about the shape, the cap and how the bottle feels in the hand, because the bottle helps set the selling price.",
          ],
          list: [
            "**Refill shops:** screw-neck or easy-pump spray bottles in 30 ml and 50 ml, from ready stock.",
            "**Decants and testers:** [mini sprays from 3 to 15 ml](/catalog/mini-travel-sprays) or pen sprays.",
            "**Your own brand:** a bottle with a distinctive shape and a heavy cap, then [print your logo](/panduan/cara-custom-logo-botol-parfum).",
            "**Oil perfumes (alcohol-free):** [roll-on bottles](/catalog/roll-on-bottles).",
          ],
        },
        {
          h: "Pick the size",
          p: [
            "The most searched sizes are 30 ml, 50 ml and 100 ml. 30 ml has the widest choice of models and the lowest price for the buyer. 50 ml and 100 ml suit scents that already have regular customers.",
            "See the full comparison in our [perfume bottle size guide](/panduan/ukuran-botol-parfum), or go straight to [30 ml](/catalog/30ml), [50 ml](/catalog/50ml) and [100 ml](/catalog/100ml) bottles.",
          ],
        },
        {
          h: "Pick the spray type: screw, easy pump or crimp",
          p: ["The bottle neck decides how the sprayer is fitted, and whether the bottle can be refilled."],
          list: [
            "**Screw neck:** the sprayer screws on like a normal cap. It can be opened again, so it suits refills.",
            "**Easy pump (semi-press):** the sprayer is pushed on until it locks, no tool needed. Tight, but not made to be opened often.",
            "**Crimp (press):** the sprayer is clamped on with a crimping tool. The tightest and neatest finish, like factory perfume, but it cannot be opened again.",
          ],
          after: ["Read more in [screw, easy-pump and crimp spray bottles compared](/panduan/perbedaan-botol-spray-drat-easy-pump-crimp)."],
        },
        {
          h: "Check the glass",
          list: [
            "Even glass thickness, with no air bubbles or hairline cracks.",
            "A flat base, so the bottle stands straight without wobbling.",
            "A smooth neck rim. An uneven neck stops the sprayer from sealing and perfume can seep out.",
            "Colour and finish (frosted, gradient, matte) even on every side.",
          ],
          after: ["Thicker glass feels heavier and more premium, but it also costs more to ship."],
        },
        {
          h: "Check the sprayer and cap",
          list: [
            "The spray comes out as a fine, even mist and does not drip.",
            "The dip tube reaches the bottom of the bottle, so the perfume can be used to the last drop.",
            "The cap fits well: not loose, not too tight.",
            "The sprayer matches the neck. A screw sprayer must have the same thread size as the bottle.",
          ],
        },
        {
          h: "Buy samples before a big order",
          p: [
            "Before ordering in bulk, buy a few bottles to test. Fill them with the perfume you will sell, spray a few times, then lay the bottles on their side on a tissue for one or two days. If the tissue stays dry, the bottle and sprayer seal well.",
            "Gita Perfume Bottle has no minimum order, so samples can be bought from 1 pc. In Jakarta you can also see and hold the bottles at [our showroom in Central Jakarta](/contact).",
          ],
        },
        {
          h: "Work out the cost per bottle",
          p: [
            "The bottle is not the only cost. Add the sprayer, cap, box, logo printing and shipping. Check whether the quoted price includes the sprayer and cap. Glass is heavy, so shipping adds up on large orders.",
          ],
        },
      ],
      faq: [
        {
          q: "Which perfume bottle is best for selling perfume?",
          a: "To start selling, a 30 ml glass spray bottle with a screw or easy-pump sprayer is the most common choice. There are many models, the price is affordable and the size suits buyers trying a scent for the first time.",
        },
        {
          q: "Are glass or plastic perfume bottles better?",
          a: "For perfume, glass is recommended. Glass does not react with alcohol or perfume oils, so the scent does not change, and the bottle looks better.",
        },
        {
          q: "Can I buy a single perfume bottle?",
          a: "Yes. Gita Perfume Bottle has no minimum order, so you can buy from 1 pc while stock lasts.",
        },
        {
          q: "How do I check that a perfume bottle does not leak?",
          a: "Fill the bottle, fit the sprayer properly, then lay it on its side on a tissue for one or two days. If the tissue stays dry, the bottle and sprayer seal well.",
        },
      ],
    },
  },
  {
    slug: "perbedaan-botol-spray-drat-easy-pump-crimp",
    published: "2026-11-23",
    updated: "2026-11-23",
    cover: "/images/guides/jenis-spray-drat-easy-pump-crimp.jpg",
    catalog: ["/catalog/screw-spray-bottles", "/catalog/easy-pump-spray-bottles", "/catalog/crimp-spray-bottles"],
    id: {
      title: "Perbedaan botol spray drat, easy pump dan crimp",
      seoTitle: "Perbedaan Botol Parfum Drat, Easy Pump dan Crimp (Press)",
      description:
        "Apa beda botol spray parfum drat (ulir), easy pump dan crimp (press)? Cara pasang, kelebihan, kekurangan, dan mana yang cocok untuk refill atau brand parfum.",
      intro:
        "Botol spray parfum dibedakan dari cara spray dipasang ke leher botol. Ada tiga jenis yang paling umum: drat, easy pump dan crimp. Ketiganya bisa dipakai untuk parfum alkohol, tapi cara pasang dan kegunaannya berbeda.",
      coverAlt: "Botol spray parfum drat warna-warni, botol easy pump hitam doff, dan botol crimp kotak bening dengan spray terlepas",
      coverCaption: "Dari kiri: botol spray drat, easy pump dan crimp.",
      sections: [
        {
          h: "Botol spray drat (ulir / putar)",
          p: ["Leher botol punya ulir, dan spray dipasang dengan cara diputar. Spray bisa dilepas dan dipasang lagi kapan saja."],
          list: [
            "**Kelebihan:** dipasang tanpa alat, bisa diisi ulang berkali-kali, dan spray bisa diganti kalau rusak.",
            "**Kekurangan:** sambungan ulir terlihat, jadi kurang rapi dibanding crimp. Spray harus dikencangkan dengan benar supaya tidak merembes.",
            "**Cocok untuk:** toko refill, botol isi ulang, dan penjual yang mengisi parfum sendiri dalam jumlah kecil.",
          ],
          after: ["Lihat model [botol spray drat](/catalog/screw-spray-bottles) di katalog."],
        },
        {
          h: "Botol spray easy pump (semi press)",
          p: ["Spray easy pump ditekan ke leher botol sampai terkunci. Tidak perlu alat crimping."],
          list: [
            "**Kelebihan:** cepat dipasang, rapat, dan terlihat lebih rapi dari drat.",
            "**Kekurangan:** setelah terpasang, spray tidak dibuat untuk dibuka lagi. Kalau dipaksa, spray bisa rusak.",
            "**Cocok untuk:** penjual yang ingin hasil rapi seperti parfum pabrikan tanpa membeli alat crimping.",
          ],
          after: ["Lihat model [botol spray easy pump](/catalog/easy-pump-spray-bottles) di katalog."],
        },
        {
          h: "Botol spray crimp (press)",
          p: ["Spray crimp dipasang dengan alat crimping (tang atau mesin press) yang menjepit ring logam di sekeliling leher botol. Hasilnya tertutup rapat dan permanen."],
          list: [
            "**Kelebihan:** paling rapat dan paling rapi. Cara ini dipakai kebanyakan parfum pabrikan.",
            "**Kekurangan:** butuh alat crimping, dan botol tidak bisa diisi ulang setelah spray dipasang.",
            "**Cocok untuk:** brand parfum yang menjual parfum dalam kemasan tertutup.",
          ],
          after: ["Lihat model [botol spray crimp](/catalog/crimp-spray-bottles) di katalog."],
        },
        {
          h: "Perbandingan singkat",
          table: [
            ["", "Drat", "Easy pump", "Crimp"],
            ["Cara pasang", "Diputar", "Ditekan sampai terkunci", "Dijepit dengan alat"],
            ["Perlu alat", "Tidak", "Tidak", "Ya, alat crimping"],
            ["Bisa dibuka lagi", "Ya", "Tidak disarankan", "Tidak"],
            ["Kerapatan", "Rapat jika dikencangkan", "Rapat", "Paling rapat"],
            ["Cocok untuk", "Refill, isi ulang", "Jualan tanpa alat", "Brand parfum"],
          ],
        },
        {
          h: "Spray harus cocok dengan botolnya",
          p: [
            "Spray drat, easy pump dan crimp tidak bisa saling ditukar. Ukuran spray juga harus sama dengan ukuran leher botol. Kalau membeli spray terpisah, sebutkan model botolnya supaya ukurannya pas.",
            "Di katalog kami, jenis spray tertulis di setiap produk. Kalau ragu, kirim nama model dari katalog lewat WhatsApp, nanti kami bantu cek.",
          ],
        },
      ],
      faq: [
        {
          q: "Apakah botol parfum drat bisa bocor?",
          a: "Bisa, kalau spray tidak dikencangkan dengan benar atau ulirnya tidak cocok. Putar spray sampai mentok, lalu cek dengan menyimpan botol dalam posisi tidur di atas tisu.",
        },
        {
          q: "Apakah spray crimp bisa dibuka?",
          a: "Tidak bisa dibuka tanpa merusak spray. Karena itu crimp dipakai untuk parfum yang dijual dalam kemasan tertutup, bukan untuk isi ulang.",
        },
        {
          q: "Botol spray mana yang cocok untuk toko refill?",
          a: "Botol spray drat, karena bisa dibuka dan diisi lagi oleh pelanggan.",
        },
        {
          q: "Apakah botol easy pump perlu alat?",
          a: "Tidak. Spray cukup ditekan lurus ke bawah sampai terkunci.",
        },
      ],
    },
    en: {
      title: "Screw-neck, easy-pump and crimp spray bottles compared",
      seoTitle: "Screw vs Easy Pump vs Crimp Perfume Spray Bottles",
      description:
        "What is the difference between screw-neck, easy-pump and crimp perfume spray bottles? How each is fitted, pros and cons, and which suits refills or a perfume brand.",
      intro:
        "Perfume spray bottles differ in how the sprayer is fitted to the neck. There are three common types: screw neck, easy pump and crimp. All three work for alcohol-based perfume, but they are fitted and used differently.",
      coverAlt: "Colourful screw-neck spray bottles, matte black easy-pump bottles and clear square crimp bottles with a loose sprayer",
      coverCaption: "From left: screw-neck, easy-pump and crimp spray bottles.",
      sections: [
        {
          h: "Screw-neck spray bottles",
          p: ["The neck has a thread and the sprayer is screwed on. It can be taken off and put back at any time."],
          list: [
            "**Pros:** no tool needed, can be refilled many times, and the sprayer can be replaced if it breaks.",
            "**Cons:** the thread is visible, so it looks less neat than crimp. The sprayer must be tightened properly or it can seep.",
            "**Best for:** refill shops, refillable bottles and sellers who fill small batches themselves.",
          ],
          after: ["See our [screw-neck spray bottles](/catalog/screw-spray-bottles)."],
        },
        {
          h: "Easy-pump (semi-press) spray bottles",
          p: ["The easy-pump sprayer is pushed onto the neck until it locks. No crimping tool is needed."],
          list: [
            "**Pros:** quick to fit, seals tightly and looks neater than a screw neck.",
            "**Cons:** once fitted, the sprayer is not meant to come off again. Forcing it can break it.",
            "**Best for:** sellers who want a factory-like finish without buying a crimping tool.",
          ],
          after: ["See our [easy-pump spray bottles](/catalog/easy-pump-spray-bottles)."],
        },
        {
          h: "Crimp (press) spray bottles",
          p: ["A crimp sprayer is fitted with a crimping tool (pliers or a press) that clamps a metal ring around the neck. The seal is tight and permanent."],
          list: [
            "**Pros:** the tightest and neatest finish. Most factory-made perfumes use it.",
            "**Cons:** needs a crimping tool, and the bottle cannot be refilled once the sprayer is on.",
            "**Best for:** perfume brands that sell sealed bottles.",
          ],
          after: ["See our [crimp spray bottles](/catalog/crimp-spray-bottles)."],
        },
        {
          h: "Quick comparison",
          table: [
            ["", "Screw", "Easy pump", "Crimp"],
            ["How it is fitted", "Screwed on", "Pushed on until it locks", "Clamped with a tool"],
            ["Tool needed", "No", "No", "Yes, a crimping tool"],
            ["Can be opened again", "Yes", "Not recommended", "No"],
            ["Seal", "Tight when tightened", "Tight", "Tightest"],
            ["Best for", "Refills", "Selling without a tool", "Perfume brands"],
          ],
        },
        {
          h: "The sprayer must match the bottle",
          p: [
            "Screw, easy-pump and crimp sprayers are not interchangeable, and the sprayer size must match the neck size. If you buy sprayers separately, tell the supplier the bottle model so the size fits.",
            "Our catalog lists the spray type on every product. If in doubt, send us the model name from the catalog on WhatsApp and we will check it for you.",
          ],
        },
      ],
      faq: [
        {
          q: "Can screw-neck perfume bottles leak?",
          a: "Yes, if the sprayer is not tightened properly or the thread does not match. Screw the sprayer on fully, then test by laying the bottle on its side on a tissue.",
        },
        {
          q: "Can a crimp sprayer be removed?",
          a: "Not without breaking the sprayer. That is why crimp is used for perfume sold in sealed bottles, not for refills.",
        },
        {
          q: "Which spray bottle suits a refill shop?",
          a: "A screw-neck spray bottle, because customers can open it and have it refilled.",
        },
        {
          q: "Do easy-pump bottles need a tool?",
          a: "No. Push the sprayer straight down by hand until it locks.",
        },
      ],
    },
  },
  {
    slug: "ukuran-botol-parfum",
    published: "2026-11-23",
    updated: "2026-11-23",
    cover: "/images/showroom/01-bottle-display-wall.jpg",
    coverPos: "50% 45%",
    catalog: ["/catalog/30ml", "/catalog/50ml", "/catalog/100ml", "/catalog/mini-travel-sprays"],
    id: {
      title: "Ukuran botol parfum: 30ml, 50ml atau 100ml?",
      seoTitle: "Ukuran Botol Parfum 30ml, 50ml, 100ml: Mana yang Dipilih?",
      description:
        "Perbandingan ukuran botol parfum 30ml, 50ml dan 100ml: kira-kira berapa kali semprot, kapan dipakai, dan ukuran yang paling banyak dipilih untuk jualan parfum.",
      intro:
        "Ukuran botol menentukan harga jual, lama pemakaian dan biaya kemasan. Berikut perbandingan ukuran botol parfum yang paling sering dipakai, supaya lebih mudah menentukan ukuran untuk produk Anda.",
      coverAlt: "Rak berisi ratusan botol parfum berbagai ukuran di showroom Gita Perfume Bottle, Jakarta Pusat",
      sections: [
        {
          h: "Kira-kira berapa kali semprot?",
          p: ["Satu kali semprot biasanya mengeluarkan sekitar 0,1 ml parfum, tergantung jenis spray. Jadi perkiraannya seperti ini:"],
          table: [
            ["Ukuran", "Perkiraan semprotan", "Biasa dipakai untuk"],
            ["3–15 ml", "30–150 kali", "Tester, decant, travel"],
            ["30 ml", "Sekitar 300 kali", "Ukuran jualan paling umum"],
            ["50 ml", "Sekitar 500 kali", "Pelanggan tetap, hadiah"],
            ["100 ml", "Sekitar 1.000 kali", "Ukuran penuh, lebih hemat per ml"],
          ],
          after: ["Angka di atas hanya perkiraan. Jumlah semprotan bisa berbeda tergantung spray dan cara pakai."],
        },
        {
          h: "Botol parfum 30ml",
          p: [
            "Ukuran 30 ml paling banyak dipakai untuk jualan parfum, terutama parfum refill dan brand lokal. Harganya ringan untuk pembeli, dan cukup untuk pemakaian sekitar satu sampai dua bulan. Pilihan modelnya juga paling banyak: di katalog kami ada lebih dari 140 model botol 30 ml.",
            "[Lihat semua botol parfum 30ml](/catalog/30ml).",
          ],
        },
        {
          h: "Botol parfum 50ml",
          p: [
            "Ukuran 50 ml cocok untuk pembeli yang sudah suka dengan aromanya dan ingin ukuran lebih besar. Botol 50 ml juga sering dipilih untuk hadiah dan paket bundling. Ada sekitar 80 model botol 50 ml di katalog kami.",
            "[Lihat semua botol parfum 50ml](/catalog/50ml).",
          ],
        },
        {
          h: "Botol parfum 100ml",
          p: [
            "Ukuran 100 ml biasanya untuk aroma yang sudah laris. Harga per ml lebih murah untuk pembeli, tapi harga per botolnya lebih tinggi, jadi jarang dipilih pembeli baru. Botol 100 ml juga lebih berat, sehingga ongkos kirimnya lebih besar.",
            "[Lihat semua botol parfum 100ml](/catalog/100ml).",
          ],
        },
        {
          h: "Ukuran kecil untuk tester dan decant",
          p: [
            "Untuk sampel, tester atau decant, pakai botol 3 ml sampai 15 ml. Pembeli bisa mencoba aromanya dulu sebelum membeli ukuran besar. Lihat [spray mini dan travel](/catalog/mini-travel-sprays) dan [botol roll-on](/catalog/roll-on-bottles).",
          ],
        },
        {
          h: "Tips memilih ukuran",
          list: [
            "Mulai dari satu ukuran utama, biasanya 30 ml, lalu tambah ukuran lain setelah tahu mana yang laku.",
            "Sediakan ukuran kecil untuk tester supaya pembeli mau mencoba.",
            "Pakai model botol yang sama untuk beberapa ukuran supaya tampilan produk seragam. Banyak model di katalog kami tersedia dalam 30, 50 dan 100 ml.",
            "Jangan isi botol sampai penuh. Sisakan sedikit ruang di bawah leher supaya spray bisa dipasang dengan rapat.",
          ],
        },
      ],
      faq: [
        {
          q: "Ukuran botol parfum yang paling laku berapa?",
          a: "Ukuran 30 ml paling banyak dicari untuk parfum refill dan brand lokal, karena harganya terjangkau dan cukup untuk pemakaian sehari-hari.",
        },
        {
          q: "Botol parfum 30ml berapa kali semprot?",
          a: "Sekitar 300 kali semprot, dengan perkiraan 0,1 ml per semprotan.",
        },
        {
          q: "Apakah ada botol parfum ukuran 20ml atau 25ml?",
          a: "Ada. Selain 30, 50 dan 100 ml, katalog kami juga punya ukuran lain seperti 3, 10, 13, 15, 20 dan 25 ml. Cek di [katalog](/catalog) atau tanya lewat WhatsApp.",
        },
      ],
    },
    en: {
      title: "Perfume bottle sizes: 30 ml, 50 ml or 100 ml?",
      seoTitle: "Perfume Bottle Sizes 30 ml, 50 ml, 100 ml: Which to Choose",
      description:
        "Perfume bottle sizes compared: roughly how many sprays in 30 ml, 50 ml and 100 ml, when each size is used, and the size most sellers start with.",
      intro:
        "Bottle size affects the selling price, how long the perfume lasts and the cost of packaging. Here is a comparison of the most common perfume bottle sizes, to help you choose for your product.",
      coverAlt: "Shelves with hundreds of perfume bottles in many sizes at the Gita Perfume Bottle showroom, Central Jakarta",
      sections: [
        {
          h: "Roughly how many sprays?",
          p: ["One spray usually releases about 0.1 ml of perfume, depending on the sprayer. So as a rough guide:"],
          table: [
            ["Size", "Approx. sprays", "Usually used for"],
            ["3–15 ml", "30–150", "Testers, decants, travel"],
            ["30 ml", "About 300", "The most common retail size"],
            ["50 ml", "About 500", "Regular customers, gifts"],
            ["100 ml", "About 1,000", "Full size, cheaper per ml"],
          ],
          after: ["These are estimates. The number of sprays varies with the sprayer and how it is used."],
        },
        {
          h: "30 ml perfume bottles",
          p: [
            "30 ml is the most popular size for selling perfume, especially refill perfume and local brands. It is affordable for buyers and lasts about one to two months of use. It also has the most models: our catalog has more than 140 bottles in 30 ml.",
            "[See all 30 ml perfume bottles](/catalog/30ml).",
          ],
        },
        {
          h: "50 ml perfume bottles",
          p: [
            "50 ml suits buyers who already like the scent and want more. 50 ml bottles are also popular for gifts and bundles. Our catalog has about 80 models in 50 ml.",
            "[See all 50 ml perfume bottles](/catalog/50ml).",
          ],
        },
        {
          h: "100 ml perfume bottles",
          p: [
            "100 ml is usually for scents that already sell well. The price per ml is lower for the buyer, but the price per bottle is higher, so new buyers rarely pick it. 100 ml bottles are also heavier and cost more to ship.",
            "[See all 100 ml perfume bottles](/catalog/100ml).",
          ],
        },
        {
          h: "Small sizes for testers and decants",
          p: [
            "For samples, testers or decants, use 3 ml to 15 ml bottles. Buyers can try the scent before buying a larger size. See [mini and travel sprays](/catalog/mini-travel-sprays) and [roll-on bottles](/catalog/roll-on-bottles).",
          ],
        },
        {
          h: "Tips for choosing a size",
          list: [
            "Start with one main size, usually 30 ml, and add others once you know what sells.",
            "Offer a small tester size so buyers are willing to try.",
            "Use the same bottle model across sizes so your range looks consistent. Many models in our catalog come in 30, 50 and 100 ml.",
            "Do not fill the bottle to the brim. Leave a little space below the neck so the sprayer seals properly.",
          ],
        },
      ],
      faq: [
        {
          q: "What is the best-selling perfume bottle size?",
          a: "30 ml is the most searched size for refill perfume and local brands, because it is affordable and enough for daily use.",
        },
        {
          q: "How many sprays are in a 30 ml perfume bottle?",
          a: "About 300 sprays, assuming roughly 0.1 ml per spray.",
        },
        {
          q: "Do you have 20 ml or 25 ml perfume bottles?",
          a: "Yes. Besides 30, 50 and 100 ml, our catalog has other sizes such as 3, 10, 13, 15, 20 and 25 ml. Browse the [catalog](/catalog) or ask us on WhatsApp.",
        },
      ],
    },
  },
  {
    slug: "cara-mengisi-botol-parfum",
    published: "2026-11-23",
    updated: "2026-11-23",
    cover: "/images/about-header.jpg",
    coverPos: "50% 40%",
    catalog: ["/catalog/screw-spray-bottles", "/catalog/easy-pump-spray-bottles", "/catalog/crimp-spray-bottles"],
    id: {
      title: "Cara mengisi parfum ke botol spray agar tidak bocor",
      seoTitle: "Cara Mengisi Botol Parfum Spray agar Tidak Bocor",
      description:
        "Langkah mengisi parfum ke botol spray drat, easy pump dan crimp: alat yang dibutuhkan, batas pengisian, cara memasang spray, dan cara cek bocor.",
      intro:
        "Mengisi parfum ke botol spray sebenarnya mudah, asal alatnya tepat dan botol tidak diisi terlalu penuh. Langkah di bawah ini berlaku untuk botol spray kaca ukuran 3 ml sampai 100 ml.",
      coverAlt: "Rak botol parfum kaca dan tutup warna-warni di showroom Gita Perfume Bottle",
      sections: [
        {
          h: "Siapkan alatnya",
          list: [
            "Botol dan spray yang ukurannya cocok.",
            "Corong kecil, pipet, atau suntikan (spuit) tanpa jarum untuk menakar.",
            "Tisu atau lap bersih.",
            "Alat crimping, khusus untuk botol crimp.",
          ],
        },
        {
          h: "Pastikan botol bersih dan kering",
          p: [
            "Botol baru biasanya sudah bersih, tapi tetap cek dari debu. Kalau perlu dibilas, bilas dengan sedikit alkohol lalu biarkan kering. Jangan mengisi botol yang masih basah air, karena air bisa membuat parfum keruh.",
          ],
        },
        {
          h: "Isi parfum, jangan sampai penuh",
          p: [
            "Tuang parfum pelan-pelan lewat corong atau pipet. Sisakan ruang kosong sekitar 0,5–1 cm di bawah leher botol. Ruang ini dibutuhkan untuk selang spray, dan supaya parfum tidak meluap saat spray dipasang.",
            "Pakai takaran yang sama untuk setiap botol supaya isi dan biaya per botol selalu sama.",
          ],
        },
        {
          h: "Pasang spray sesuai jenis botol",
          list: [
            "**Drat:** masukkan selang, lalu putar spray searah jarum jam sampai mentok. Jangan terlalu keras supaya ulir tidak rusak.",
            "**Easy pump:** masukkan selang, lalu tekan spray lurus ke bawah sampai terkunci.",
            "**Crimp:** masukkan selang, letakkan spray tegak lurus, lalu jepit dengan alat crimping sampai ring logam menempel rata di leher botol.",
          ],
          after: [
            "Kalau selang terlalu panjang dan melengkung di dasar botol, potong sedikit ujungnya supaya parfum tersedot lancar. Beda ketiga jenis spray ini dijelaskan di [perbedaan botol spray drat, easy pump dan crimp](/panduan/perbedaan-botol-spray-drat-easy-pump-crimp).",
          ],
        },
        {
          h: "Cek semprotan dan rembesan",
          ordered: true,
          list: [
            "Tekan spray beberapa kali sampai parfum keluar. Semprotan pertama biasanya butuh 3–5 kali tekan.",
            "Lap bagian luar botol sampai kering.",
            "Simpan botol dalam posisi tidur di atas tisu selama beberapa jam.",
            "Kalau tisu basah, cek lagi apakah spray sudah terpasang lurus dan rapat.",
          ],
        },
        {
          h: "Pasang tutup dan simpan",
          p: [
            "Pasang tutup, lalu tempel label atau stiker nama parfum. Simpan botol yang sudah diisi di tempat sejuk dan tidak terkena sinar matahari langsung, supaya aromanya lebih awet.",
          ],
        },
      ],
      faq: [
        {
          q: "Kenapa spray botol parfum tidak keluar?",
          a: "Biasanya karena spray belum terisi. Tekan 3–5 kali. Kalau tetap tidak keluar, cek apakah ujung selang sampai ke parfum dan tidak tertekuk.",
        },
        {
          q: "Kenapa botol parfum merembes di leher?",
          a: "Bisa karena spray kurang kencang, ukuran spray tidak cocok dengan leher botol, atau botol terlalu penuh. Kurangi sedikit isinya, lalu pasang ulang spray.",
        },
        {
          q: "Apakah botol crimp bisa diisi ulang?",
          a: "Tidak. Setelah dijepit, spray crimp tidak bisa dibuka tanpa merusaknya. Untuk isi ulang, pakai [botol spray drat](/catalog/screw-spray-bottles).",
        },
      ],
    },
    en: {
      title: "How to fill a perfume spray bottle without leaks",
      seoTitle: "How to Fill a Perfume Spray Bottle Without Leaks",
      description:
        "How to fill screw-neck, easy-pump and crimp perfume spray bottles: what you need, how full to fill, how to fit the sprayer and how to check for leaks.",
      intro:
        "Filling a perfume spray bottle is easy, as long as you use the right tools and do not overfill. These steps work for glass spray bottles from 3 ml to 100 ml.",
      coverAlt: "Shelves of glass perfume bottles and colourful caps at the Gita Perfume Bottle showroom",
      sections: [
        {
          h: "Get your tools ready",
          list: [
            "Bottles and sprayers in matching sizes.",
            "A small funnel, pipette, or needle-free syringe for measuring.",
            "Tissue or a clean cloth.",
            "A crimping tool, for crimp bottles only.",
          ],
        },
        {
          h: "Make sure the bottle is clean and dry",
          p: [
            "New bottles are usually clean, but check for dust. If you need to rinse them, use a little alcohol and let them dry. Do not fill a bottle that is still wet with water, as water can make perfume cloudy.",
          ],
        },
        {
          h: "Fill, but not to the top",
          p: [
            "Pour the perfume slowly through a funnel or pipette. Leave about 0.5–1 cm of space below the neck. The space is needed for the dip tube, and stops perfume overflowing when the sprayer goes in.",
            "Use the same measure for every bottle so the fill and the cost per bottle stay the same.",
          ],
        },
        {
          h: "Fit the sprayer for your bottle type",
          list: [
            "**Screw neck:** insert the tube, then screw the sprayer clockwise until it stops. Do not overtighten or the thread can be damaged.",
            "**Easy pump:** insert the tube, then press the sprayer straight down until it locks.",
            "**Crimp:** insert the tube, hold the sprayer upright, then clamp it with a crimping tool until the metal ring sits flat around the neck.",
          ],
          after: [
            "If the tube is too long and curls at the bottom, trim the end a little so the perfume draws up smoothly. The three spray types are explained in [screw, easy-pump and crimp spray bottles compared](/panduan/perbedaan-botol-spray-drat-easy-pump-crimp).",
          ],
        },
        {
          h: "Check the spray and look for leaks",
          ordered: true,
          list: [
            "Press the sprayer a few times until perfume comes out. The first spray usually takes 3–5 presses.",
            "Wipe the outside of the bottle dry.",
            "Lay the bottle on its side on a tissue for a few hours.",
            "If the tissue gets wet, check that the sprayer is straight and fully seated.",
          ],
        },
        {
          h: "Cap, label and store",
          p: [
            "Put the cap on and add a label or sticker with the perfume name. Store filled bottles somewhere cool and out of direct sunlight so the scent lasts longer.",
          ],
        },
      ],
      faq: [
        {
          q: "Why does my perfume sprayer not spray?",
          a: "Usually the sprayer has not primed yet. Press it 3–5 times. If nothing comes out, check that the tube reaches the perfume and is not bent.",
        },
        {
          q: "Why is perfume seeping from the neck?",
          a: "The sprayer may be loose, the wrong size for the neck, or the bottle too full. Pour out a little perfume and fit the sprayer again.",
        },
        {
          q: "Can crimp bottles be refilled?",
          a: "No. Once clamped, a crimp sprayer cannot be removed without breaking it. For refills, use [screw-neck spray bottles](/catalog/screw-spray-bottles).",
        },
      ],
    },
  },
  {
    slug: "cara-custom-logo-botol-parfum",
    published: "2026-11-23",
    updated: "2026-11-23",
    cover: "/images/about.jpg",
    coverPos: "50% 62%",
    catalog: ["/catalog/frosted-gradient-bottles", "/catalog/pre-order-bottles", "/catalog/30ml"],
    id: {
      title: "Cara membuat botol parfum custom dengan logo sendiri",
      seoTitle: "Botol Parfum Custom Logo: Pilihan Cetak dan Cara Order",
      description:
        "Pilihan cetak logo di botol parfum: sablon, hot stamping, grafir, frosting dan spray warna. Cara order botol parfum custom dari pilih model sampai pengiriman.",
      intro:
        "Logo di botol membuat parfum terlihat sebagai produk brand, bukan sekadar parfum isi ulang. Berikut pilihan cetak logo di botol parfum kaca dan langkah order botol parfum custom di Gita Perfume Bottle.",
      coverAlt: "Botol parfum kaca dengan tulisan Gita Parfume Bottle tercetak di badan botol",
      sections: [
        {
          h: "Pilihan cetak logo",
          list: [
            "**Sablon:** logo dicetak langsung ke kaca dengan tinta. Cocok untuk logo satu atau dua warna, dan paling sering dipakai.",
            "**Hot stamping:** logo dicetak dengan foil emas, perak atau warna lain. Hasilnya mengkilap.",
            "**Grafir:** logo diukir di permukaan. Hasilnya permanen dan tidak luntur.",
            "**Frosting:** kaca dibuat buram (doff) di seluruh botol atau sebagian. Bisa dipadukan dengan logo sablon.",
            "**Spray warna:** botol bening dicat dengan warna pilihan, termasuk gradasi.",
          ],
        },
        {
          h: "Siapkan file logo",
          list: [
            "Kirim logo dalam format vektor (AI, PDF atau SVG), atau gambar PNG beresolusi tinggi.",
            "Sebutkan warna logo. Kalau ada kode warna, sertakan juga.",
            "Tentukan posisi dan ukuran logo di botol, misalnya di depan bagian tengah.",
          ],
        },
        {
          h: "Langkah order botol custom",
          ordered: true,
          list: [
            "**Pilih botol.** Pilih model dari [katalog](/catalog), atau kirim foto contoh botol yang diinginkan.",
            "**Kirim logo dan jumlah.** Kirim file logo, jenis cetak dan jumlah botol lewat WhatsApp.",
            "**Cek desain.** Desain logo di botol dikirim dulu untuk dicek sebelum produksi.",
            "**Sampel.** Sampel fisik bisa dicek sebelum produksi.",
            "**Produksi dan kirim.** Order custom sekitar 2–4 minggu setelah sampel disetujui, lalu dikirim ke seluruh Indonesia atau diambil di toko kami di Jakarta Pusat.",
          ],
        },
        {
          h: "Minimal order untuk cetak logo",
          p: [
            "Botol polos bisa dibeli mulai 1 pcs. Untuk cetak logo, jumlah minimalnya berbeda untuk setiap jenis cetak dan model botol. Tanyakan lewat WhatsApp dengan menyebutkan model botol dan jenis cetak yang diinginkan.",
          ],
        },
        {
          h: "Tips supaya hasilnya bagus",
          list: [
            "Logo sederhana dengan garis yang tidak terlalu tipis hasilnya lebih tajam.",
            "Pilih warna logo yang kontras dengan botol: putih atau emas untuk botol gelap, hitam untuk botol bening.",
            "Sesuaikan ukuran logo dengan botol. Bidang cetak botol 30 ml lebih kecil dari botol 100 ml.",
            "Padukan dengan tutup dan box yang serasi supaya kemasan terlihat satu tema.",
          ],
        },
      ],
      faq: [
        {
          q: "Berapa lama pembuatan botol parfum custom?",
          a: "Sekitar 2–4 minggu setelah sampel disetujui. Botol polos ready stock dikirim dalam 1–3 hari kerja.",
        },
        {
          q: "Apakah semua botol bisa dicetak logo?",
          a: "Semua botol di katalog kami bisa dicetak logo. Jenis cetak yang cocok tergantung bentuk dan finishing botol.",
        },
        {
          q: "Berapa minimal order botol parfum custom logo?",
          a: "Tergantung model botol dan jenis cetak. Tanyakan lewat WhatsApp untuk jumlah minimal dan harganya.",
        },
      ],
    },
    en: {
      title: "How to make custom perfume bottles with your logo",
      seoTitle: "Custom Logo Perfume Bottles: Printing Options and How to Order",
      description:
        "Logo options for perfume bottles: screen printing, hot stamping, engraving, frosting and colour spray. How to order custom perfume bottles, from choosing a model to delivery.",
      intro:
        "A logo on the bottle makes your perfume look like a brand product, not just a refill. Here are the logo printing options for glass perfume bottles and how to order custom bottles from Gita Perfume Bottle.",
      coverAlt: "Glass perfume bottles with Gita Parfume Bottle printed on the glass",
      sections: [
        {
          h: "Logo printing options",
          list: [
            "**Screen printing:** the logo is printed straight onto the glass with ink. Suits one- or two-colour logos and is the most common choice.",
            "**Hot stamping:** the logo is applied in gold, silver or coloured foil, with a shiny finish.",
            "**Engraving:** the logo is cut into the surface. It is permanent and will not fade.",
            "**Frosting:** all or part of the glass is made matte. Can be combined with a printed logo.",
            "**Colour spray:** clear bottles are coated in a colour of your choice, including gradients.",
          ],
        },
        {
          h: "Prepare your logo file",
          list: [
            "Send the logo as a vector file (AI, PDF or SVG), or a high-resolution PNG.",
            "Tell us the logo colour, with colour codes if you have them.",
            "Decide where the logo goes and how big it is, for example centred on the front.",
          ],
        },
        {
          h: "How to order custom bottles",
          ordered: true,
          list: [
            "**Choose a bottle.** Pick a model from the [catalog](/catalog), or send a photo of the bottle you want.",
            "**Send your logo and quantity.** Send the logo file, printing type and number of bottles on WhatsApp.",
            "**Check the design.** We send a design of the logo on the bottle to approve before production.",
            "**Sample.** A physical sample can be checked before production.",
            "**Production and delivery.** Custom orders take about 2–4 weeks after the sample is approved, then ship anywhere in Indonesia or can be collected from our shop in Central Jakarta.",
          ],
        },
        {
          h: "Minimum order for logo printing",
          p: [
            "Plain bottles can be bought from 1 pc. For logo printing, the minimum depends on the printing type and the bottle model. Ask us on WhatsApp with the bottle model and the printing you want.",
          ],
        },
        {
          h: "Tips for a good result",
          list: [
            "Simple logos without very thin lines print sharper.",
            "Pick a logo colour that contrasts with the bottle: white or gold on dark glass, black on clear glass.",
            "Size the logo to the bottle. A 30 ml bottle has a smaller print area than a 100 ml bottle.",
            "Match the cap and box so the whole package looks like one design.",
          ],
        },
      ],
      faq: [
        {
          q: "How long do custom perfume bottles take?",
          a: "About 2–4 weeks after the sample is approved. Plain ready-stock bottles ship in 1–3 working days.",
        },
        {
          q: "Can every bottle be printed with a logo?",
          a: "Every bottle in our catalog can carry a logo. The best printing method depends on the bottle's shape and finish.",
        },
        {
          q: "What is the minimum order for custom logo bottles?",
          a: "It depends on the bottle model and printing type. Ask us on WhatsApp for the minimum and the price.",
        },
      ],
    },
  },
];

export const getGuide = (slug: string) => guides.find((g) => g.slug === slug);

/** Newest first. */
export const guidesByDate = () => [...guides].sort((a, b) => b.published.localeCompare(a.published));

/** Plain text (markup removed), for JSON-LD and reading time. */
export const plain = (s: string) => s.replace(/\*\*(.+?)\*\*/g, "$1").replace(/\[([^\]]+)\]\([^)]+\)/g, "$1");

/** Estimated reading time in minutes (200 words per minute). */
export function readingMinutes(t: GuideText) {
  const text = [t.intro, ...t.sections.flatMap((s) => [s.h, ...(s.p ?? []), ...(s.list ?? []), ...(s.after ?? []), ...(s.table ?? []).flat()]), ...t.faq.flatMap((f) => [f.q, f.a])].join(" ");
  return Math.max(2, Math.round(plain(text).split(/\s+/).length / 200));
}

/** "2026-11-23" -> "23 November 2026" / "November 23, 2026". */
export function formatDate(iso: string, lang: Lang) {
  return new Intl.DateTimeFormat(lang === "id" ? "id-ID" : "en-US", { dateStyle: "long", timeZone: "UTC" }).format(new Date(`${iso}T00:00:00Z`));
}

/** Anchor id for a section heading: "Pilih ukuran botol" -> "pilih-ukuran-botol". */
export const anchor = (h: string) =>
  h.toLowerCase().normalize("NFKD").replace(/[^\w\s-]/g, "").trim().replace(/\s+/g, "-").replace(/-+/g, "-");
