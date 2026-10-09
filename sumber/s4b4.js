/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 4 Konflik Dunia.
   Standard Kandungan 10.1, Standard Pembelajaran 10.1.1 hingga 10.1.4 serta K10.1.5 hingga K10.1.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Medan Perang Dunia", sk:"10.1.1 Kesedaran nasionalisme · 10.1.2 Latar belakang Perang Dunia", lampiran:null,
 kadNama:"Dua Blok", kadEm:"\u{2694}\u{FE0F}", kadFakta:"Perang Dunia Kedua dipertarungkan antara pihak Berikat dan pihak Paksi. Jerman, Itali dan Jepun berada dalam pihak Paksi.",
 bosKadNama:"1 September 1939", bosKadEm:"\u{1F4C5}", bosKadFakta:"Perang Dunia Kedua tercetus apabila Jerman menyerang Poland pada 1 September 1939.",
 soalan:[
 {j:"pilih",t:"Perang Dunia Kedua tercetus apabila Jerman menyerang negara:",p:["Poland","Perancis","Britain","Rusia"],b:0,u:"Jerman menyerang Poland pada 1 September 1939."},
 {j:"pilih",t:"Pemimpin Nazi Jerman semasa Perang Dunia Kedua ialah:",p:["Adolf Hitler","Benito Mussolini","Winston Churchill","Franklin Roosevelt"],b:0,u:"Adolf Hitler memimpin Nazi Jerman."},
 {j:"pilih",t:"Tiga negara utama dalam pihak Paksi ialah Jerman, Itali dan:",p:["Jepun","Britain","Amerika Syarikat","Perancis"],b:0,u:"Jerman, Itali dan Jepun membentuk pihak Paksi."},
 {j:"pilih",t:"Kemelesetan ekonomi dunia yang menyumbang kepada perang bermula pada tahun:",p:["1929","1789","1957","1911"],b:0,u:"Kemelesetan Besar bermula pada 1929."},
 {j:"banyak",t:"Pilih DUA negara dalam pihak Berikat.",p:["Britain","Amerika Syarikat","Jerman","Itali"],b:[0,1],u:"Britain dan Amerika Syarikat berada dalam pihak Berikat."},
 {j:"pilih",t:"Perjanjian yang menghukum Jerman selepas Perang Dunia Pertama ialah:",p:["Versailles 1919","Perjanjian Pangkor","Perjanjian Bangkok","Perjanjian London"],b:0,u:"Perjanjian Versailles 1919 menghukum Jerman dan menimbulkan dendam."},
 {j:"pilih",t:"Fahaman yang diamalkan oleh Mussolini di Itali ialah:",p:["Fasisme","Demokrasi","Komunisme","Nasionalisme"],b:0,u:"Mussolini mengamalkan fasisme."},
 {j:"pilih",t:"Kesedaran nasionalisme di negara kita sebelum perang berkembang melalui:",p:["Akhbar dan persatuan","Tentera Jepun","Pentadbiran Tentera British","Ancaman komunis"],b:0,u:"Akhbar dan persatuan mengembangkan kesedaran nasionalisme."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan negara dan pihaknya yang betul.",p:["Jerman: Paksi","Jepun: Paksi","Britain: Berikat","Itali: Berikat","Amerika Syarikat: Paksi"],b:[0,1,2],u:"Jerman dan Jepun dalam Paksi, Britain dalam Berikat. Itali dalam Paksi dan Amerika Syarikat dalam Berikat."}},

{n:2, tempat:"Bilik Kronologi Perang", sk:"10.1.3 · 10.1.4 Perang Dunia Kedua di Asia Pasifik", lampiran:"gm1",
 kadNama:"Pearl Harbor", kadEm:"\u{1F6A2}", kadFakta:"Jepun menyerang pangkalan tentera laut Amerika di Pearl Harbor pada 7 Disember 1941. Perang meluas ke Asia Pasifik.",
 bosKadNama:"Kota Bharu", bosKadEm:"\u{1F3D6}\u{FE0F}", bosKadFakta:"Tentera Jepun mendarat di Kota Bharu, Kelantan, pada 8 Disember 1941. Itulah permulaan serangan ke atas Tanah Melayu.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Jerman menyerang Poland","Jepun menyerang Pearl Harbor","Singapura jatuh ke tangan Jepun","Jepun menyerah kalah"],b:0,u:"Jerman menyerang Poland pada 1939, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Singapura jatuh ke tangan Jepun?",p:["1942","1941","1939","1945"],b:0,u:"Rajah 1 menunjukkan Singapura jatuh pada 1942."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Jerman menyerang Poland","Jepun menyerang Pearl Harbor","Singapura jatuh ke tangan Jepun","Jepun menyerah kalah"],b:[0,1,2,3],u:"1939, 1941, 1942 dan 1945."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara serangan Poland dan penyerahan Jepun?",p:["6 tahun","4 tahun","3 tahun","2 tahun"],b:0,u:"1945 tolak 1939 ialah 6 tahun."},
 {j:"pilih",t:"Jepun mendarat di Tanah Melayu buat kali pertama di:",p:["Kota Bharu","Singapura","Pulau Pinang","Johor Bahru"],b:0,u:"Jepun mendarat di Kota Bharu pada 8 Disember 1941."},
 {j:"pilih",t:"Jepun menyerah kalah selepas bom atom dijatuhkan di Hiroshima dan:",p:["Nagasaki","Tokyo di Honshu","Osaka lama","Kyoto purba"],b:0,u:"Bom atom dijatuhkan di Hiroshima dan Nagasaki pada Ogos 1945."},
 {j:"pilih",t:"Pangkalan Amerika yang diserang Jepun pada 7 Disember 1941 ialah:",p:["Pearl Harbor","Manila di Filipina","Guam di Pasifik","Midway di Pasifik"],b:0,u:"Jepun menyerang Pearl Harbor di Hawaii."},
 {j:"banyak",t:"Pilih DUA tempat di Asia Tenggara yang dikuasai Jepun pada 1941 hingga 1942.",p:["Tanah Melayu","Singapura","Poland","Hawaii"],b:[0,1],u:"Tanah Melayu dan Singapura dikuasai Jepun. Poland di Eropah, Hawaii di Pasifik."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara serangan Pearl Harbor dan kejatuhan Singapura?",p:["1 tahun","3 tahun","4 tahun","Kurang daripada setahun"],b:0,u:"1942 tolak 1941 ialah 1 tahun."}},

{n:3, tempat:"Peta Asia Pasifik", sk:"10.1.3 · 10.1.4 Membuat kronologi tentang konflik dunia", lampiran:null,
 kadNama:"Singapura Jatuh", kadEm:"\u{1F3F0}", kadFakta:"Pulau Singapura, yang digelar kubu kuat British, jatuh ke tangan Jepun pada 15 Februari 1942 selepas pertahanan di Tanah Melayu runtuh.",
 bosKadNama:"15 Ogos 1945", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Jepun menyerah kalah pada 15 Ogos 1945. Perang Dunia Kedua tamat di Asia dengan penyerahan itu.",
 soalan:[
 {j:"pilih",t:"Seorang pelajar menyusun kronologi serangan Jepun. Peristiwa pertama di Asia Tenggara ialah:",p:["Pendaratan di Kota Bharu","Kejatuhan Singapura pada 1942","Penyerahan Jepun pada 1945","Bom atom di Hiroshima"],b:0,u:"Pendaratan di Kota Bharu pada 8 Disember 1941 ialah permulaan."},
 {j:"pilih",t:"Selepas Tanah Melayu dikuasai, Jepun menyerang pula:",p:["Singapura","Poland di Eropah","Hawaii di Pasifik","Perancis di Eropah"],b:0,u:"Singapura jatuh pada Februari 1942."},
 {j:"pilih",t:"Perang di Asia Pasifik berakhir dengan peristiwa:",p:["Penyerahan Jepun 1945","Serangan Pearl Harbor","Kejatuhan Singapura","Pendaratan di Kota Bharu"],b:0,u:"Jepun menyerah kalah pada Ogos 1945."},
 {j:"banyak",t:"Pilih DUA peristiwa yang berlaku pada tahun 1945.",p:["Bom atom Hiroshima","Jepun menyerah kalah","Serangan Pearl Harbor","Kejatuhan Singapura"],b:[0,1],u:"Bom atom dan penyerahan Jepun berlaku pada 1945."},
 {j:"pilih",t:"Pertahanan British gagal kerana tentera Jepun menggunakan:",p:["Basikal dan kelajuan","Kapal layar kayu lama","Gajah perang dan panah","Meriam lama dan kuda"],b:0,u:"Tentera Jepun bergerak pantas dengan basikal melalui hutan."},
 {j:"pilih",t:"Kejatuhan Singapura menunjukkan bahawa:",p:["Kuasa Barat boleh dikalahkan","Kuasa Barat tidak boleh dikalahkan","Penjajahan sudah tamat","Jepun bersikap lemah"],b:0,u:"Kejatuhan itu meruntuhkan keyakinan terhadap kekebalan Barat."},
 {j:"pilih",t:"Perang Dunia Kedua tamat di Eropah pada tahun:",p:["1945","1939","1941","1942"],b:0,u:"Perang di Eropah berakhir pada Mei 1945."},
 {j:"pilih",t:"Satu kesan perang kepada rakyat negara kita ialah:",p:["Kekurangan makanan","Kemewahan dan kelimpahan makanan","Penambahan sekolah baharu","Pengurangan cukai tanah"],b:0,u:"Perang membawa kesukaran hidup dan kekurangan makanan."}],
 bos:{j:"susun",t:"Susun peristiwa berikut mengikut kronologi.",p:["Jepun mendarat di Kota Bharu","Singapura jatuh ke tangan Jepun","Bom atom dijatuhkan di Hiroshima","Jepun menyerah kalah"],b:[0,1,2,3],u:"8 Disember 1941, 15 Februari 1942, 6 Ogos 1945 dan 15 Ogos 1945."}},

{n:4, tempat:"Arkib Perang", sk:"10.1.3 · 10.1.4 Mencerakinkan maklumat tentang konflik dunia secara sistematik", lampiran:"p1",
 kadNama:"Sebab Berantai", kadEm:"\u{1F517}", kadFakta:"Perang Dunia Kedua berpunca daripada banyak sebab yang berantai: dendam selepas Perjanjian Versailles, kemelesetan ekonomi, fasisme dan ekspansionisme.",
 bosKadNama:"Iktibar Perang", bosKadEm:"\u{1F4D6}", bosKadFakta:"Perang membawa kemusnahan, kematian dan kesempitan hidup. Keamanan dunia menjamin kemajuan negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah punca utama Jepun menyerang Asia Tenggara?",p:["Mencari bahan mentah","Mencari pelancong","Mencari sekutu baharu","Mencari tempat tinggal"],b:0,u:"Petikan menyatakan Jepun memerlukan getah, bijih timah dan minyak."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Tanah Melayu penting kepada Jepun?",p:["Kaya getah dan bijih timah","Kaya dengan tentera Barat","Kaya dengan salji","Kaya dengan emas semata-mata"],b:0,u:"Getah dan bijih timah diperlukan oleh industri perang Jepun."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan kejatuhan Singapura kepada penduduk tempatan?",p:["Keyakinan terhadap British runtuh","Keyakinan terhadap British bertambah","Penduduk menyokong British","Penduduk berpindah ke Eropah"],b:0,u:"Penduduk melihat British boleh dikalahkan, lalu keyakinan runtuh."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA punca Perang Dunia Kedua.",p:["Kemelesetan ekonomi","Perjanjian Versailles","Kemakmuran dunia","Perpaduan antara kuasa besar"],b:[0,1],u:"Kemelesetan ekonomi dan Perjanjian Versailles menyumbang kepada perang."},
 {j:"pilih",t:"Bandingkan perang di Eropah dengan perang di Asia Pasifik. Apakah persamaannya?",p:["Ada Paksi dan Berikat","Bermula di tahun yang sama","Berakhir di tempat yang sama","Melibatkan pasukan yang sama"],b:0,u:"Kedua-dua medan melibatkan pihak Paksi dan Berikat."},
 {j:"pilih",t:"Mengapakah keamanan dunia penting kepada negara kita?",p:["Perdagangan dan kemajuan terjamin","Perdagangan dan kemajuan terhenti","Penduduk berpindah","Sempadan ditutup"],b:0,u:"Keamanan menjamin perdagangan dan pembangunan."},
 {j:"pilih",t:"Apakah kesan perang terhadap ekonomi negara kita?",p:["Kekurangan makanan dan inflasi","Kelimpahan makanan dan harga murah","Hasil getah meningkat","Pelabuhan bertambah sibuk"],b:0,u:"Perang menyebabkan kekurangan makanan dan kenaikan harga."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kejayaan awal Jepun?",p:["Persiapan dan strategi","Nasib semata-mata","Penjajah tidak berminat","Rakyat menyambut baik Jepun"],b:0,u:"Jepun mempunyai persiapan dan strategi serangan pantas."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Banyak faktor berantai","Satu sebab sahaja","Perubahan cuaca dunia","Tiada kesan kepada kita"],b:0,u:"Banyak faktor berantai menyebabkan perang dan menjejaskan Asia Tenggara."}},

{n:5, tempat:"Dewan Penilai Keamanan", sk:"10.1.4 · K10.1.5 · K10.1.6 · K10.1.7 Menilai konflik dunia terhadap negara kita", lampiran:null,
 kadNama:"Keamanan Dunia", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Kemajuan negara bergantung pada keamanan dunia dan dalam negeri. Perang merosakkan ekonomi, kehidupan dan perpaduan.",
 bosKadNama:"Cinta Negara", bosKadEm:"\u{2764}\u{FE0F}", bosKadFakta:"Rakyat yang cinta akan negara akan menyumbang kepada kedaulatan, dalam masa aman dan masa perang.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, apakah akibat perang yang paling berat bagi rakyat biasa?",p:["Kehilangan nyawa","Kenaikan harga hiasan","Perubahan fesyen pakaian","Kemudahan perjalanan"],b:0,u:"Perang membawa kehilangan nyawa, harta dan keselamatan."},
 {j:"pilih",t:"Seorang murid berkata, \"Perang jauh di Eropah tidak menjejaskan kita.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia meluas ke Asia","Tepat, ia tidak menjejaskan sesiapa","Tepat, ia terhenti di Eropah","Kurang tepat, ia tidak berlaku"],b:0,u:"Perang meluas ke Asia Pasifik dan menjejaskan negara kita."},
 {j:"pilih",t:"Antara berikut, sikap cinta akan negara ketika perang ialah:",p:["Berkorban demi tanah air","Melarikan diri ke luar negara","Bekerjasama dengan musuh","Mementingkan diri sendiri"],b:0,u:"Pengorbanan demi tanah air menunjukkan cinta akan negara."},
 {j:"banyak",t:"Pilih DUA kepentingan keamanan dunia kepada negara kita.",p:["Perdagangan berjalan lancar","Rakyat hidup selamat","Ekonomi semakin lumpuh","Kemiskinan semakin meluas"],b:[0,1],u:"Keamanan memudahkan perdagangan dan menjamin keselamatan rakyat."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kesan Perang Dunia Kedua kepada negara kita?",p:["Penderitaan tetapi semangat merdeka","Penderitaan semata-mata tanpa hasil","Kebaikan semata-mata untuk rakyat","Tiada sebarang kesan kepada rakyat"],b:0,u:"Perang menyengsarakan rakyat tetapi membangkitkan semangat nasionalisme."},
 {j:"pilih",t:"Mengapakah iktibar peperangan penting untuk generasi muda?",p:["Supaya keamanan dijaga","Supaya perang diulang","Supaya sejarah dilupakan","Supaya musuh dicari"],b:0,u:"Iktibar peperangan menjadikan kita menghargai keamanan."},
 {j:"pilih",t:"Antara tindakan berikut, yang manakah menyokong keamanan negara?",p:["Berunding secara aman","Menyebarkan kebencian antara kaum","Memulaukan jiran sendiri","Menyimpan senjata di rumah"],b:0,u:"Penyelesaian aman mengelakkan konflik."},
 {j:"pilih",t:"Mengapakah rakyat berperanan mempertahankan kedaulatan negara?",p:["Kedaulatan milik bersama","Hanya tentera yang terlibat","Kedaulatan tidak penting","Pemimpin menanggung segalanya"],b:0,u:"Kedaulatan ialah tanggungjawab seluruh rakyat."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang konflik dunia dan negara kita?",p:["Konflik dunia menjejaskan kita","Konflik dunia tiada kesan kepada kita","Konflik dunia hanya memberi kebaikan","Konflik dunia tidak boleh dielakkan sepenuhnya"],b:0,u:"Perang Dunia Kedua menjejaskan negara kita secara langsung."}},

{n:6, tempat:"Studio Keamanan", sk:"K10.1.5 hingga K10.1.8 Keamanan, cinta negara, iktibar dan peranan rakyat", lampiran:null,
 kadNama:"Diplomasi", kadEm:"\u{1F91D}", kadFakta:"Negara kita mengutamakan diplomasi dan dasar berkecuali untuk mengelakkan penglibatan dalam konflik dunia.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar perang untuk memelihara keamanan hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk keamanan. Idea manakah paling berasas?",p:["Kempen keamanan antara murid","Menggalakkan pergaduhan kumpulan","Menghapuskan peraturan sekolah","Membenarkan buli"],b:0,u:"Kempen keamanan memupuk hormat dan perdamaian."},
 {j:"pilih",t:"Dua kelas berselisih faham. Iktibar perang yang sesuai ialah:",p:["Berunding menyelesaikannya","Bergaduh sehingga ada pemenang","Memulaukan satu sama lain","Mengadu kepada orang luar"],b:0,u:"Rundingan lebih baik daripada konflik."},
 {j:"banyak",t:"Pilih DUA cara negara mengelak daripada terlibat dalam konflik dunia.",p:["Menjalinkan diplomasi","Mengamalkan dasar berkecuali","Menjadi anggota pakatan ketenteraan","Menghantar tentera ke luar negara"],b:[0,1],u:"Diplomasi dan dasar berkecuali mengelakkan penglibatan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengenang pengorbanan mangsa perang?",p:["Upacara kenangan dan pameran","Memadam catatan sejarah perang","Menyalahkan satu kaum","Melupakan mangsa perang"],b:0,u:"Upacara dan pameran mengenang pengorbanan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perang tidak mungkin berulang.\" Respons manakah paling rasional?",p:["Keamanan perlu dijaga sentiasa","Betul, perang sudah lenyap","Betul, tiada sebab perang","Perang tidak penting dipelajari"],b:0,u:"Keamanan memerlukan usaha berterusan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan cinta akan negara dalam masa aman?",p:["Belajar dan patuh peraturan","Mengabaikan pelajaran di sekolah","Menyebar fitnah dan khabar angin","Merosakkan harta awam sekolah"],b:0,u:"Belajar dan patuh peraturan menyumbang kepada negara."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk melatih kesediaan rakyat menghadapi bencana?",p:["Latihan kecemasan di sekolah","Mengelak sebarang latihan","Merahsiakan kaedah keselamatan","Menolak bantuan pihak berkuasa"],b:0,u:"Latihan kecemasan menyiapkan rakyat menghadapi krisis."},
 {j:"pilih",t:"Mengapakah rakyat perlu bersatu ketika negara terancam?",p:["Bersatu sukar dikalahkan","Perpecahan membawa keselamatan","Setiap orang bergerak sendiri","Pemimpin tidak diperlukan"],b:0,u:"Perpaduan menguatkan pertahanan negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mengelakkan negara kita daripada terlibat dalam konflik dunia.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada Perang Dunia Kedua (contoh: punca perang, kejatuhan Singapura, kesukaran rakyat, nilai keamanan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Perang Dunia Kedua, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti keamanan, perpaduan dan cinta akan negara."}}
];

module.exports = {
  id:"s4b4", tingkatan:4, kod:"4.0 Konflik Dunia",
  tajuk:"Api di Asia Pasifik",
  subtajuk:"Sejarah Ting. 4 · Bab 4 Konflik Dunia",
  spi:SPI["10.1"],
  ulasan:{
   1:"{n} dapat menyatakan secara ringkas pengetahuan tentang konflik dunia. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan konflik dunia berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi tentang konflik dunia. Galakkan mencerakinkan punca dan kesannya.",
   4:"{n} mampu mencerakinkan maklumat tentang konflik dunia secara sistematik. Seterusnya latih menilai kesannya terhadap negara kita.",
   5:"{n} dapat menilai peristiwa konflik dunia terhadap negara kita. Sudah bersedia menjana idea untuk mengelak penglibatan.",
   6:"{n} berjaya menjana idea untuk mengelakkan negara daripada terlibat dalam konflik dunia. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Konflik Dunia. Cadangan: ulang hentian pertama sambil membina garis masa Perang Dunia Kedua dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1939", label:"Jerman menyerang Poland"},
     {masa:"1941", label:"Jepun menyerang Pearl Harbor"},
     {masa:"1942", label:"Singapura jatuh ke tangan Jepun"},
     {masa:"1945", label:"Jepun menyerah kalah"}],
     kapsyen:"Rajah 1 · Perang Dunia Kedua dan Asia Pasifik",
     alt:"Garis masa menegak: 1939 Jerman menyerang Poland; 1941 Jepun menyerang Pearl Harbor; 1942 Singapura jatuh ke tangan Jepun; 1945 Jepun menyerah kalah"},
   p1:petikan(1, "Perang meluas ke Asia Tenggara",
     ["Perang Dunia Kedua berpunca daripada banyak faktor yang berantai, seperti dendam selepas Perjanjian Versailles, kemelesetan ekonomi 1929 dan kebangkitan fasisme. Jepun pula memerlukan bahan mentah seperti getah, bijih timah dan minyak, lalu menyerang Asia Tenggara.",
      "Kejatuhan Singapura pada tahun 1942 meruntuhkan keyakinan penduduk tempatan terhadap kuasa British. Perang menyebabkan kekurangan makanan dan kesempitan hidup."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
