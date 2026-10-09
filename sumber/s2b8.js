/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 8 Kerajaan Kedah, Kelantan, Negeri
   Sembilan dan Perlis. Standard Kandungan 6.3, Standard Pembelajaran 6.3.1 dan 6.3.2 serta
   K6.3.5 hingga K6.3.8 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf). Standard
   Prestasi disalin kata demi kata. Tahun dari sumber tradisional (seperti 1136 bagi Kedah)
   ditulis "menurut" sumber itu kerana sarjana berbeza pendapat. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Utara", sk:"6.3.1 Pengasasan kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis", lampiran:null,
 kadNama:"Sultan Muzaffar Syah Kedah", kadEm:"\u{1F54C}", kadFakta:"Menurut Al-Tarikh Salasilah Negeri Kedah, Maharaja Derbar Raja II memeluk Islam pada tahun 1136 dan bergelar Sultan Muzaffar Syah.",
 bosKadNama:"Raja Melewar", bosKadEm:"\u{1F3DE}\u{FE0F}", bosKadFakta:"Raja Melewar dijemput dari Pagar Ruyung, Minangkabau, lalu ditabalkan sebagai Yang Dipertuan Besar Negeri Sembilan yang pertama pada tahun 1773.",
 soalan:[
 {j:"pilih",t:"Yang Dipertuan Besar Negeri Sembilan yang pertama ialah:",p:["Raja Melewar","Long Yunus","Syed Hussin Jamalullail","Sultan Muzaffar Syah"],b:0,u:"Raja Melewar dari Pagar Ruyung menjadi Yang Dipertuan Besar pertama pada 1773."},
 {j:"pilih",t:"Raja Melewar dijemput ke Negeri Sembilan dari:",p:["Pagar Ruyung","Palembang","Pattani","Pulau Bentan"],b:0,u:"Raja Melewar berasal dari Pagar Ruyung di Minangkabau, Sumatera."},
 {j:"pilih",t:"Raja pertama Perlis ialah:",p:["Syed Hussin Jamalullail","Raja Melewar","Long Yunus","Sultan Salehuddin"],b:0,u:"Syed Hussin Jamalullail menjadi Raja Perlis yang pertama."},
 {j:"pilih",t:"Sebelum menjadi negeri sendiri, Perlis ialah sebahagian daripada:",p:["Kedah","Kelantan","Perak","Pahang"],b:0,u:"Perlis dahulu sebahagian Kedah, kemudian menjadi negeri berasingan pada 1843."},
 {j:"pilih",t:"Tokoh yang menyatukan dan mengasaskan kerajaan Kelantan pada abad ke-18 ialah:",p:["Long Yunus","Raja Melewar","Raja Lumu","Tun Perak"],b:0,u:"Long Yunus menyatukan Kelantan pada abad ke-18."},
 {j:"banyak",t:"Pilih DUA kenyataan yang betul tentang Kedah.",p:["Antara kerajaan Melayu tertua","Rajanya memeluk Islam pada abad ke-12","Diasaskan oleh Raja Melewar","Pernah sebahagian Perlis"],b:[0,1],u:"Kedah antara kerajaan tertua dan rajanya memeluk Islam pada abad ke-12. Perlis yang dahulu sebahagian Kedah."},
 {j:"pilih",t:"Gelaran pemerintah Negeri Sembilan ialah:",p:["Yang Dipertuan Besar","Sultan","Raja Muda","Bendahara Paduka Raja"],b:0,u:"Pemerintah Negeri Sembilan bergelar Yang Dipertuan Besar."},
 {j:"pilih",t:"Gelaran pemerintah Perlis ialah:",p:["Raja","Sultan","Yang Dipertuan Besar","Maharaja"],b:0,u:"Pemerintah Perlis bergelar Raja, bukan Sultan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan negeri dan tokoh pengasasnya yang betul.",p:["Negeri Sembilan: Raja Melewar","Perlis: Syed Hussin Jamalullail","Kelantan: Long Yunus","Kedah: Raja Melewar dari Pagar Ruyung","Perlis: Long Yunus dari Kelantan"],b:[0,1,2],u:"Raja Melewar (Negeri Sembilan), Syed Hussin Jamalullail (Perlis) dan Long Yunus (Kelantan)."}},

{n:2, tempat:"Bilik Salasilah", sk:"6.3.1 · 6.3.2 Pengasasan dan asas hubungan", lampiran:"gm1",
 kadNama:"Bunga Emas", kadEm:"\u{1F33C}", kadFakta:"Kedah dan Kelantan pernah menghantar bunga emas dan bunga perak ke Siam sebagai tanda persahabatan dan hubungan diplomatik.",
 bosKadNama:"Asas Hubungan", bosKadEm:"\u{1F517}", bosKadFakta:"Negeri-negeri Melayu dihubungkan oleh kekeluargaan, agama Islam, bahasa dan kepentingan perdagangan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Raja Kedah memeluk Islam","Raja Melewar ditabalkan","Perlis menjadi negeri sendiri","Long Yunus memerintah Kelantan"],b:0,u:"Menurut Al-Tarikh Salasilah Negeri Kedah, raja Kedah memeluk Islam pada 1136, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Perlis menjadi negeri sendiri?",p:["1843","1773","1136","1762"],b:0,u:"Rajah 1 menunjukkan Perlis menjadi negeri sendiri pada 1843."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Raja Kedah memeluk Islam","Long Yunus memerintah Kelantan","Raja Melewar ditabalkan","Perlis menjadi negeri sendiri"],b:[0,1,2,3],u:"1136, kira-kira 1762, 1773 dan 1843."},
 {j:"pilih",t:"Bunga emas dan bunga perak dihantar oleh Kedah ke:",p:["Siam","China","Portugis","Belanda"],b:0,u:"Bunga emas dihantar ke Siam sebagai tanda persahabatan."},
 {j:"pilih",t:"Penghantaran bunga emas ialah contoh hubungan:",p:["Diplomatik","Ketenteraan","Sukan","Perindustrian"],b:0,u:"Bunga emas ialah tanda persahabatan dalam hubungan diplomatik."},
 {j:"banyak",t:"Pilih DUA asas hubungan antara negeri-negeri Melayu.",p:["Hubungan kekeluargaan","Agama Islam","Bahasa Portugis","Sistem kasta"],b:[0,1],u:"Hubungan kekeluargaan dan agama Islam menyatukan negeri-negeri Melayu."},
 {j:"pilih",t:"Pelabuhan utama Kedah pada zaman kesultanan ialah:",p:["Kuala Kedah","Oc Eo","Riau","Kota Bharu"],b:0,u:"Kuala Kedah ialah pelabuhan utama Kesultanan Kedah."},
 {j:"pilih",t:"Kedah terkenal sebagai negeri pengeluar:",p:["Padi","Bijih timah utama","Gambir","Emas"],b:0,u:"Dataran Kedah yang luas menjadikannya pengeluar padi utama, digelar Jelapang Padi."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah selepas Raja Melewar ditabalkan baharulah Perlis menjadi negeri sendiri?",p:["70 tahun","81 tahun","707 tahun","30 tahun"],b:0,u:"1843 tolak 1773 ialah 70 tahun."}},

{n:3, tempat:"Pelabuhan Kuala Kedah", sk:"6.3.2 Hubungan diplomatik dan perdagangan", lampiran:null,
 kadNama:"Jelapang Padi", kadEm:"\u{1F33E}", kadFakta:"Kedah menghasilkan beras yang banyak dan menjualnya kepada negeri jiran serta pedagang yang singgah di pelabuhannya.",
 bosKadNama:"Merantau", bosKadEm:"\u{1F6B6}", bosKadFakta:"Orang Minangkabau berhijrah ke Negeri Sembilan dan membawa bersama Adat Perpatih serta budaya mereka.",
 soalan:[
 {j:"pilih",t:"Sebuah negeri kekurangan beras pada abad ke-18. Negeri Melayu manakah paling sesuai menjadi pembekal?",p:["Kedah","Perlis yang belum wujud","Pahang yang terkenal dengan emas","Johor yang terkenal dengan gambir"],b:0,u:"Kedah ialah pengeluar padi utama dan menjual beras kepada negeri lain."},
 {j:"pilih",t:"Pembesar Negeri Sembilan ingin melantik pemerintah. Mengapakah mereka menjemput putera dari Pagar Ruyung?",p:["Kerana pertalian asal-usul","Kerana arahan Portugis","Kerana Pagar Ruyung di Siam","Kerana tiada penduduk"],b:0,u:"Ramai penduduk Negeri Sembilan berasal dari Minangkabau, jadi mereka menjemput putera dari Pagar Ruyung."},
 {j:"pilih",t:"Kedah menghantar bunga emas ke Siam. Apakah tujuan utamanya?",p:["Menjaga hubungan baik","Membeli tanah","Mengisytiharkan perang","Menjual beras"],b:0,u:"Bunga emas menjadi tanda persahabatan supaya hubungan dengan Siam kekal baik."},
 {j:"banyak",t:"Seorang putera Kelantan berkahwin dengan puteri negeri Melayu lain. Pilih DUA kesan yang mungkin.",p:["Hubungan kekeluargaan terjalin","Persahabatan negeri bertambah erat","Kedua-dua negeri mula bermusuhan","Perdagangan antara negeri dihentikan"],b:[0,1],u:"Perkahwinan diraja mengukuhkan hubungan kekeluargaan dan persahabatan negeri."},
 {j:"pilih",t:"Pedagang dari Patani datang berdagang di Kelantan. Ini contoh hubungan:",p:["Perdagangan","Ketenteraan","Penjajahan","Keagamaan"],b:0,u:"Kedatangan pedagang untuk berjual beli ialah hubungan perdagangan."},
 {j:"pilih",t:"Kedah dan Perlis berkongsi sejarah yang rapat. Apakah sebab utamanya?",p:["Perlis asalnya sebahagian Kedah","Kedua-duanya diasaskan Portugis","Perlis terletak di Sumatera","Kedah dijajah Perlis"],b:0,u:"Perlis dahulu sebahagian Kedah sebelum menjadi negeri sendiri pada 1843."},
 {j:"pilih",t:"Pengaruh manakah paling jelas dibawa oleh perantau Minangkabau ke Negeri Sembilan?",p:["Adat Perpatih","Tulisan Pallava","Konsep dewaraja","Undang-undang Rom"],b:0,u:"Perantau Minangkabau membawa Adat Perpatih ke Negeri Sembilan."},
 {j:"pilih",t:"Mengapakah agama Islam menjadi asas hubungan antara negeri Melayu?",p:["Berkongsi pegangan","Islam dibawa Portugis","Ia agama dari Siam","Ia memisahkan negeri"],b:0,u:"Negeri-negeri Melayu berkongsi agama Islam yang menyatukan pemerintah dan rakyat."}],
 bos:{j:"pilih",t:"Kedah berdepan kuasa jiran yang besar dan kuat. Strategi manakah paling bijak diamalkan Kedah?",p:["Diplomasi","Menyerang terus","Menutup pelabuhan","Mengabaikan jiran"],b:0,u:"Kedah menggunakan diplomasi, seperti menghantar bunga emas, untuk menjaga keselamatan negeri."}},

{n:4, tempat:"Arkib Hubungan", sk:"6.3.1 · 6.3.2 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Diplomasi Negeri Kecil", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Negeri yang kecil sering menggunakan diplomasi untuk menjaga keselamatan dan kedaulatannya.",
 bosKadNama:"Muafakat", bosKadEm:"\u{1F91D}", bosKadFakta:"Pemilihan Raja Melewar dibuat melalui muafakat pembesar Negeri Sembilan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Kedah menghantar bunga emas ke Siam?",p:["Menjaga keamanan negeri","Membeli senjata dari Siam","Meminta bekalan beras","Menjual gajah kepada Siam"],b:0,u:"Petikan menyatakan bunga emas dihantar untuk menjaga hubungan baik dan keamanan negeri."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah Raja Melewar dilantik?",p:["Melalui muafakat pembesar","Dipilih oleh pihak Portugis","Merampas takhta dengan kekerasan","Dilantik oleh raja Siam"],b:0,u:"Pembesar Negeri Sembilan bermuafakat menjemput Raja Melewar."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tafsiran yang berbeza tentang bunga emas?",p:["Ufti atau tanda persahabatan","Hadiah perkahwinan diraja","Bayaran cukai beras kepada Siam","Barang dagangan di pasar"],b:0,u:"Siam menganggapnya ufti, tetapi negeri Melayu menganggapnya tanda persahabatan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA bentuk hubungan negeri Melayu.",p:["Diplomatik","Perdagangan","Penjajahan Eropah","Hubungan dengan Rom"],b:[0,1],u:"Petikan menyebut hubungan diplomatik (bunga emas) dan perdagangan (beras Kedah)."},
 {j:"pilih",t:"Bandingkan cara pemerintah Negeri Sembilan dan Kedah dipilih. Pernyataan manakah BETUL?",p:["Negeri Sembilan dijemput, Kedah diwarisi","Kedua-duanya dipilih oleh Siam","Kedua-duanya merampas takhta","Kedah dijemput, Negeri Sembilan diwarisi"],b:0,u:"Pemerintah Negeri Sembilan yang pertama dijemput, manakala takhta Kedah diwarisi turun-temurun."},
 {j:"pilih",t:"Apakah kesan hubungan perdagangan beras kepada Kedah?",p:["Ekonomi kukuh","Ekonomi menjadi semakin lemah","Padi berhenti ditanam petani","Pelabuhan Kuala Kedah ditutup"],b:0,u:"Jualan beras menambah pendapatan Kedah dan menguatkan ekonominya."},
 {j:"pilih",t:"Mengapakah Perlis boleh menjadi negeri sendiri pada 1843?",p:["Perubahan politik","Perlis diasaskan oleh Portugis","Perlis berpindah ke wilayah Siam","Kedah lenyap daripada peta"],b:0,u:"Perubahan politik di negeri-negeri utara membawa kepada pembentukan Perlis sebagai negeri sendiri."},
 {j:"pilih",t:"Apakah yang dapat dianalisis tentang hubungan Negeri Sembilan dengan Minangkabau?",p:["Ia berasaskan asal-usul","Ia hubungan penjajahan","Ia hubungan dengan Eropah","Ia tiada hubungan"],b:0,u:"Hubungan itu berasaskan asal-usul penduduk Negeri Sembilan dari Minangkabau."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Diplomasi dan muafakat","Negeri Melayu tidak berhubung antara satu sama lain","Siam menjajah setiap negeri Melayu","Muafakat tidak penting dalam pemerintahan"],b:0,u:"Diplomasi Kedah dan muafakat Negeri Sembilan membantu menjaga kedaulatan negeri."}},

{n:5, tempat:"Dewan Penilai Utara", sk:"6.3.1 · 6.3.2 · K6.3.5 · K6.3.8 Menilai pengasasan dan hubungan", lampiran:null,
 kadNama:"Hubungan Baik", kadEm:"\u{1F310}", kadFakta:"Malaysia hari ini menjalin hubungan baik dengan negara jiran melalui ASEAN, meneruskan tradisi diplomasi negeri-negeri Melayu.",
 bosKadNama:"Menghargai Pengasasan", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Mengenali asal-usul negeri membantu rakyat menghargai kedaulatan dan identiti negeri sendiri.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah diplomasi Kedah dengan Siam bijak?",p:["Mengelak peperangan","Menghabiskan emas","Melemahkan Kedah","Memutuskan hubungan"],b:0,u:"Diplomasi menjaga keamanan dan mengelak peperangan dengan kuasa yang lebih besar."},
 {j:"pilih",t:"Seorang murid berkata, \"Menghantar bunga emas tanda kelemahan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia strategi diplomasi","Tepat, Kedah tiada maruah","Tepat, Kedah dijajah Siam","Kurang tepat, Kedah tidak menghantarnya"],b:0,u:"Bunga emas ialah strategi diplomasi untuk menjaga keamanan dan kedaulatan negeri."},
 {j:"pilih",t:"Antara berikut, yang manakah menunjukkan semangat muafakat?",p:["Pemilihan Raja Melewar","Serangan ke atas jiran","Perebutan takhta","Pemutusan hubungan"],b:0,u:"Pembesar Negeri Sembilan bermuafakat menjemput Raja Melewar."},
 {j:"banyak",t:"Pilih DUA alasan kita wajar menghargai pengasasan kerajaan-kerajaan Melayu.",p:["Ia asas negeri kita hari ini","Ia membentuk identiti negeri","Ia tidak berkaitan dengan kita","Ia dicipta oleh Eropah"],b:[0,1],u:"Pengasasan kerajaan Melayu menjadi asas negeri dan identitinya hari ini."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang hubungan Kedah dengan Siam?",p:["Aman, tetapi Kedah perlu berhati-hati","Merugikan Kedah dari segala segi","Tiada sebarang kesan kepada Kedah","Menjadikan Siam lemah dan takut"],b:0,u:"Hubungan itu menjaga keamanan, tetapi Kedah sentiasa perlu berhati-hati dengan kuasa besar."},
 {j:"pilih",t:"Mengapakah perdagangan beras penting dalam hubungan Kedah dengan negeri lain?",p:["Saling memerlukan","Beras dilarang","Kedah tiada padi","Negeri lain menjual beras ke Kedah"],b:0,u:"Negeri lain memerlukan beras dan Kedah memerlukan pembeli, jadi hubungan menjadi erat."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada kelangsungan negeri-negeri Melayu?",p:["Bijak menjaga kedaulatan","Kekuatan tentera sahaja","Bergantung pada nasib semata-mata","Mengasingkan diri daripada jiran"],b:0,u:"Negeri-negeri Melayu kekal kerana bijak menjaga kedaulatan melalui diplomasi dan muafakat."},
 {j:"pilih",t:"Mengapakah menjaga hubungan baik dengan negara lain penting kepada Malaysia hari ini?",p:["Menjamin keamanan","Menghalang pelancong asing datang","Mengurangkan eksport ke luar negara","Menimbulkan konflik dengan jiran"],b:0,u:"Hubungan baik menjamin keamanan, pelaburan dan perdagangan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis?",p:["Kekal melalui diplomasi","Kekal kerana dijajah kuasa luar","Tidak mempunyai hubungan dengan negeri lain","Diasaskan oleh Portugis dan Belanda"],b:0,u:"Diplomasi dan muafakat membantu kerajaan-kerajaan ini kekal dan berdaulat."}},

{n:6, tempat:"Studio Diplomasi", sk:"K6.3.5 hingga K6.3.8 Menghargai pengasasan dan hubungan baik", lampiran:null,
 kadNama:"ASEAN", kadEm:"\u{1F91D}", kadFakta:"ASEAN ditubuhkan pada tahun 1967 untuk memupuk kerjasama dan keamanan dalam kalangan negara Asia Tenggara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta sejarah untuk mencadangkan tindakan yang jelas dan boleh dilakukan.",
 soalan:[
 {j:"pilih",t:"Sekolah anda menerima pelawat dari negara jiran. Iktibar daripada sejarah diplomasi Kedah manakah paling sesuai?",p:["Layan dengan hormat","Abaikan pelawat itu","Sindir budaya mereka","Elakkan berbual"],b:0,u:"Hubungan baik bermula dengan layanan yang hormat."},
 {j:"pilih",t:"Dua kelab di sekolah anda berselisih faham. Iktibar daripada Negeri Sembilan manakah paling sesuai?",p:["Bermuafakat","Bergaduh sehingga menang","Membubarkan kedua-dua kelab","Membiarkan masalah"],b:0,u:"Muafakat seperti pemilihan Raja Melewar menyelesaikan perselisihan dengan aman."},
 {j:"banyak",t:"Pilih DUA cara menghargai pengasasan negeri anda.",p:["Mempelajari sejarah negeri","Menghormati lagu dan bendera negeri","Merosakkan tapak bersejarah","Mempersendakan sejarah negeri"],b:[0,1],u:"Mempelajari sejarah dan menghormati simbol negeri ialah cara menghargai pengasasan negeri."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengeratkan hubungan murid dengan sekolah di negeri lain?",p:["Program sekolah angkat","Menutup semua komunikasi","Mengejek sekolah lain","Bersaing secara tidak adil"],b:0,u:"Program sekolah angkat memupuk persahabatan, sama seperti hubungan baik antara negeri."},
 {j:"pilih",t:"Seorang rakan berkata, \"Negara kecil tidak perlu berbaik dengan jiran.\" Respons manakah paling rasional?",p:["Hubungan baik menjamin keamanan","Betul, kita boleh bersendirian","Betul, jiran tidak penting","Peperangan lebih baik"],b:0,u:"Sejarah Kedah menunjukkan hubungan baik dengan jiran menjamin keamanan negeri."},
 {j:"pilih",t:"Kedah dikenali sebagai Jelapang Padi. Idea manakah paling sesuai untuk menghargai warisan ini?",p:["Lawatan ke Muzium Padi","Menimbus sawah untuk kilang","Membazir nasi","Membuang beras lebihan"],b:0,u:"Muzium Padi di Kedah memperkenalkan sejarah dan kepentingan padi."},
 {j:"pilih",t:"Bagaimanakah semangat muafakat boleh diamalkan dalam mesyuarat kelas?",p:["Dengar pendapat semua ahli","Ketua membuat keputusan sendirian","Tiada perbincangan dibenarkan","Undi dibuat secara rahsia oleh guru"],b:0,u:"Muafakat bermaksud mendengar pendapat semua ahli sebelum membuat keputusan."},
 {j:"pilih",t:"Mengapakah iktibar daripada kelangsungan negeri Melayu masih relevan?",p:["Kedaulatan perlu dijaga","Sejarah tiada pengajaran","Negeri boleh dijual","Ia tiada kaitan"],b:0,u:"Kedaulatan negeri dan negara perlu dijaga melalui kebijaksanaan dan perpaduan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menggunakan iktibar daripada pengasasan dan hubungan kerajaan Kedah, Kelantan, Negeri Sembilan atau Perlis dalam kehidupan murid hari ini.",
  arahan:"Pilih sekurang-kurangnya DUA fakta sejarah (contoh: bunga emas Kedah, muafakat menjemput Raja Melewar, perdagangan beras Kedah, pembentukan Perlis). Terangkan iktibarnya, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti muafakat, diplomasi dan menghargai negeri."}}
];

module.exports = {
  id:"s2b8", tingkatan:2, kod:"8.0 Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis",
  tajuk:"Bunga Emas dan Muafakat",
  subtajuk:"Sejarah Ting. 2 · Bab 8 Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis",
  spi:SPI["6.3"],
  ulasan:{
   1:"{n} dapat menyatakan pengasasan kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis. Langkah seterusnya ialah memahami hubungan antara negeri-negeri ini.",
   2:"{n} memahami pengasasan dan asas hubungan negeri-negeri ini. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang hubungan diplomatik dan perdagangan dalam pelbagai situasi. Galakkan menganalisis tujuan setiap hubungan.",
   4:"{n} mampu menganalisis hubungan negeri-negeri Melayu, termasuk diplomasi Kedah dan muafakat Negeri Sembilan. Seterusnya latih menilai kebijaksanaannya.",
   5:"{n} dapat membuat penilaian yang berasas tentang pengasasan dan hubungan negeri-negeri ini. Sudah bersedia melahirkan idea berdasarkan iktibarnya.",
   6:"{n} berjaya melahirkan idea yang berasas berdasarkan iktibar pengasasan dan hubungan negeri-negeri Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis. Cadangan: ulang hentian pertama sambil membina jadual tokoh pengasas setiap negeri dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1136", label:"Raja Kedah memeluk Islam"},
     {masa:"Kira-kira 1762", label:"Long Yunus memerintah Kelantan"},
     {masa:"1773", label:"Raja Melewar ditabalkan"},
     {masa:"1843", label:"Perlis menjadi negeri sendiri"}],
     kapsyen:"Rajah 1 · Beberapa peristiwa pengasasan negeri",
     alt:"Garis masa menegak: 1136 raja Kedah memeluk Islam; kira-kira 1762 Long Yunus memerintah Kelantan; 1773 Raja Melewar ditabalkan; 1843 Perlis menjadi negeri sendiri"},
   p1:petikan(1, "Diplomasi dan muafakat",
     ["Kedah dan Kelantan menghantar bunga emas dan bunga perak ke Siam secara berkala. Siam menganggapnya sebagai ufti, tetapi pemerintah Melayu menganggapnya tanda persahabatan untuk menjaga hubungan baik dan keamanan negeri. Kedah juga menjual beras kepada negeri jiran dan pedagang yang singgah di Kuala Kedah.",
      "Di Negeri Sembilan, pembesar bermuafakat menjemput Raja Melewar dari Pagar Ruyung untuk menjadi pemerintah. Baginda ditabalkan sebagai Yang Dipertuan Besar pada tahun 1773."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
