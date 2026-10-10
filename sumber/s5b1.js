/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 1 Konsep Kedaulatan Negara.
   Standard Kandungan 12.1, Standard Pembelajaran 12.1.1 hingga 12.1.4 serta K12.1.5 hingga K12.1.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Menara Kedaulatan", sk:"12.1.1 Konsep kedaulatan · 12.1.2 Ciri negara berdaulat", lampiran:null,
 kadNama:"Maksud Kedaulatan", kadEm:"\u{1F451}", kadFakta:"Kedaulatan ialah kuasa tertinggi sesebuah negara untuk memerintah dirinya tanpa campur tangan kuasa luar.",
 bosKadNama:"Empat Ciri", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Negara berdaulat mempunyai wilayah yang jelas, penduduk, kerajaan yang memerintah, dan pengiktirafan negara lain.",
 soalan:[
 {j:"pilih",t:"Kedaulatan negara bermaksud:",p:["Kuasa tertinggi memerintah negara sendiri","Kuasa kerajaan asing ke atas negara","Kuasa tentera sahaja","Kuasa pedagang antarabangsa"],b:0,u:"Kedaulatan ialah kuasa tertinggi sesebuah negara memerintah dirinya."},
 {j:"pilih",t:"Antara berikut, yang manakah ciri negara berdaulat?",p:["Mempunyai wilayah","Dikuasai oleh kuasa asing","Tidak mempunyai kerajaan","Tidak diiktiraf negara lain"],b:0,u:"Negara berdaulat mempunyai wilayah yang jelas."},
 {j:"pilih",t:"Pemerintah tertinggi negara berdaulat mesti:",p:["Dipatuhi rakyat dan diiktiraf","Dipilih oleh negara jiran","Dilantik oleh penjajah","Bergantung kepada bantuan asing"],b:0,u:"Kerajaan perlu dipatuhi dan diiktiraf."},
 {j:"pilih",t:"Tarikh Persekutuan Tanah Melayu mencapai kedaulatan ialah:",p:["31 Ogos 1957","16 September 1963","31 Ogos 1963","1 Februari 1948"],b:0,u:"Kedaulatan dicapai pada 31 Ogos 1957."},
 {j:"banyak",t:"Pilih DUA ciri negara berdaulat.",p:["Mempunyai kerajaan sendiri","Mempunyai penduduk tetap","Dikawal sepenuhnya oleh kuasa asing","Tidak mempunyai sempadan"],b:[0,1],u:"Kerajaan sendiri dan penduduk ialah ciri negara berdaulat."},
 {j:"pilih",t:"Lambang kedaulatan negara kita termasuk:",p:["Jalur Gemilang","Union Jack","Bendera Hinomaru","Panji Siam"],b:0,u:"Jalur Gemilang ialah lambang kedaulatan."},
 {j:"pilih",t:"Lagu yang melambangkan kedaulatan negara ialah:",p:["Negaraku","Rasa Sayang","Terang Bulan Lama","God Save the Queen"],b:0,u:"Negaraku ialah lagu kebangsaan."},
 {j:"pilih",t:"Pemerintah yang berdaulat membuat undang-undang melalui:",p:["Parlimen","Mahkamah asing","Pejabat penjajah","Persatuan perniagaan"],b:0,u:"Parlimen menggubal undang-undang."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan ciri negara berdaulat dan contohnya yang betul.",p:["Wilayah: sempadan negara yang jelas","Penduduk: rakyat Malaysia","Kerajaan: Kerajaan Persekutuan","Kerajaan: Gabenor British","Wilayah: tanpa sempadan tetap"],b:[0,1,2],u:"Sempadan jelas, rakyat Malaysia dan Kerajaan Persekutuan ialah ciri negara berdaulat."}},

{n:2, tempat:"Bilik Kronologi Kedaulatan", sk:"12.1.2 · 12.1.3 Pentingnya negara berdaulat", lampiran:"gm1",
 kadNama:"Zon Aman", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"ZOPFAN ialah Zon Aman, Bebas dan Berkecuali yang dicadangkan di Kuala Lumpur pada 1971 untuk menjamin keamanan Asia Tenggara.",
 bosKadNama:"Rukun Negara", bosKadEm:"\u{1F4DC}", bosKadFakta:"Rukun Negara diisytiharkan pada 31 Ogos 1970 untuk memupuk perpaduan dan menjamin kedaulatan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Tanah Melayu merdeka","Pembentukan Malaysia","Rukun Negara diisytiharkan","ZOPFAN dicadangkan"],b:0,u:"Kemerdekaan 1957 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Rukun Negara diisytiharkan?",p:["1970","1963","1971","1957"],b:0,u:"Rajah 1 menunjukkan Rukun Negara pada 1970."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Persekutuan Tanah Melayu merdeka","Pembentukan Malaysia","Rukun Negara diisytiharkan","ZOPFAN dicadangkan"],b:[0,1,2,3],u:"1957, 1963, 1970 dan 1971."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara kemerdekaan dan Pembentukan Malaysia?",p:["6 tahun","13 tahun","14 tahun","1 tahun"],b:0,u:"1963 tolak 1957 ialah 6 tahun."},
 {j:"pilih",t:"Negara berdaulat penting kerana ia dapat:",p:["Menentukan hala tuju sendiri","Dikawal oleh negara jiran","Bergantung sepenuhnya pada asing","Menolak semua perdagangan"],b:0,u:"Negara berdaulat menentukan hala tuju sendiri."},
 {j:"pilih",t:"ZOPFAN dicadangkan bagi menjamin:",p:["Keamanan Asia Tenggara","Kemenangan satu kuasa besar","Penubuhan pangkalan asing","Perang saudara"],b:0,u:"ZOPFAN ialah zon aman, bebas dan berkecuali."},
 {j:"pilih",t:"Prinsip pertama Rukun Negara ialah:",p:["Kepercayaan kepada Tuhan","Kesetiaan kepada Raja dan Negara","Keluhuran Perlembagaan","Kedaulatan Undang-undang"],b:0,u:"Prinsip pertama ialah Kepercayaan kepada Tuhan."},
 {j:"banyak",t:"Pilih DUA langkah memelihara kedaulatan negara.",p:["Memperkukuh pertahanan negara","Memupuk perpaduan rakyat","Menyerahkan sempadan kepada jiran","Menghapuskan undang-undang"],b:[0,1],u:"Pertahanan dan perpaduan memelihara kedaulatan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Rukun Negara dan ZOPFAN?",p:["1 tahun","7 tahun","13 tahun","6 tahun"],b:0,u:"1971 tolak 1970 ialah 1 tahun."}},

{n:3, tempat:"Dewan Pertahanan Negara", sk:"12.1.3 · 12.1.4 Langkah pemerintah dan rakyat mempertahankan kedaulatan", lampiran:null,
 kadNama:"Angkatan Tentera", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Angkatan Tentera Malaysia menjaga sempadan darat, laut dan udara. Rakyat turut berperanan melalui Rukun Tetangga dan sukarelawan.",
 bosKadNama:"Diplomasi", bosKadEm:"\u{1F91D}", bosKadFakta:"Rundingan dan diplomasi membolehkan Malaysia menyelesaikan pertikaian tanpa peperangan.",
 soalan:[
 {j:"pilih",t:"Pasukan yang menjaga keselamatan sempadan negara ialah:",p:["Angkatan Tentera Malaysia","Persatuan Peniaga","Majlis Perbandaran","Pasukan sukan negeri"],b:0,u:"Angkatan Tentera menjaga sempadan."},
 {j:"pilih",t:"Pemerintah menyelesaikan pertikaian sempadan melalui rundingan. Ini langkah:",p:["Diplomasi","Peperangan","Penjajahan","Pengasingan"],b:0,u:"Rundingan ialah diplomasi."},
 {j:"pilih",t:"Rakyat membantu keselamatan taman perumahan melalui:",p:["Rukun Tetangga","Dewan Negara","Mahkamah Tinggi","Majlis Raja-raja"],b:0,u:"Rukun Tetangga melibatkan rakyat menjaga keselamatan."},
 {j:"banyak",t:"Pilih DUA peranan rakyat mempertahankan kedaulatan.",p:["Mematuhi undang-undang","Menyokong perpaduan kaum","Menyebarkan fitnah","Merosakkan harta awam"],b:[0,1],u:"Patuh undang-undang dan menyokong perpaduan."},
 {j:"pilih",t:"Seorang belia menyertai pasukan sukarelawan tentera. Ini menunjukkan sikap:",p:["Cinta akan negara","Mementingkan diri","Mengabaikan tanggungjawab","Takut kepada jiran"],b:0,u:"Menyertai pasukan sukarela menunjukkan cinta akan negara."},
 {j:"pilih",t:"Pegawai kastam menahan penyeludup di sempadan. Tindakan ini melindungi:",p:["Ekonomi negara","Kepentingan penyeludup","Pasaran haram","Keuntungan asing"],b:0,u:"Menahan penyeludup melindungi ekonomi dan kedaulatan."},
 {j:"pilih",t:"Pemimpin menolak campur tangan negara luar dalam hal dalam negeri. Ini mempertahankan:",p:["Kedaulatan negara","Kepentingan asing","Kuasa penjajah","Kebergantungan penuh"],b:0,u:"Menolak campur tangan mempertahankan kedaulatan."},
 {j:"pilih",t:"Murid yang menghormati lambang negara menunjukkan:",p:["Rasa hormat kepada kedaulatan","Rasa benci kepada negara","Rasa takut kepada jiran","Rasa bosan kepada sejarah"],b:0,u:"Menghormati lambang negara menghormati kedaulatan."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan langkah mempertahankan kedaulatan dengan betul?",p:["Diplomasi dahulu, pertahanan sebagai langkah akhir","Peperangan dahulu, diplomasi kemudian","Menyerah dahulu, berunding kemudian","Mengabaikan ancaman"],b:0,u:"Diplomasi diutamakan, pertahanan sebagai langkah akhir."}},

{n:4, tempat:"Arkib Kedaulatan", sk:"12.1.4 Mencerakinkan maklumat berkaitan kedaulatan negara", lampiran:"p1",
 kadNama:"Cabaran Globalisasi", kadEm:"\u{1F310}", kadFakta:"Globalisasi membawa peluang, tetapi juga cabaran seperti jenayah siber, maklumat palsu dan pengaruh ekonomi asing.",
 bosKadNama:"Kebijaksanaan", bosKadEm:"\u{1F9E0}", bosKadFakta:"Pemimpin yang bijaksana menimbang peluang dan ancaman sebelum membuat keputusan yang melibatkan negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah cabaran kedaulatan pada era globalisasi?",p:["Jenayah siber","Peperangan darat yang besar","Penjajahan secara terus","Kekurangan sempadan"],b:0,u:"Petikan menyebut jenayah siber dan maklumat palsu."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah negara menangani cabaran itu?",p:["Memperkukuh undang-undang","Membuka semua data kepada asing","Menutup sempadan ekonomi","Menyerahkan keputusan kepada luar"],b:0,u:"Petikan menyatakan undang-undang dan perpaduan diperkukuh."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah perpaduan rakyat penting?",p:["Mengurangkan pecah-belah","Menambah kuasa asing","Menghapuskan undang-undang","Melemahkan kerajaan"],b:0,u:"Rakyat bersatu sukar dipecahbelahkan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA langkah menjaga kedaulatan.",p:["Menguatkan undang-undang siber","Menggalakkan celik maklumat","Menyebarkan berita tidak sahih","Menolak semua teknologi"],b:[0,1],u:"Undang-undang siber dan celik maklumat menjaga kedaulatan."},
 {j:"pilih",t:"Bandingkan ancaman zaman penjajahan dengan ancaman globalisasi. Apakah perbezaannya?",p:["Ancaman kini lebih halus","Ancaman kini sama sahaja","Ancaman kini tiada langsung","Ancaman kini hanya ketenteraan"],b:0,u:"Ancaman kini lebih halus, melalui maklumat dan ekonomi."},
 {j:"pilih",t:"Mengapakah menghormati kepelbagaian budaya dan agama memperkukuh kedaulatan?",p:["Perpaduan bangsa Malaysia terjamin","Perpaduan bangsa Malaysia terjejas","Satu budaya dipaksakan","Satu agama dihapuskan"],b:0,u:"Menghormati kepelbagaian menjamin perpaduan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kedaulatan yang dipertahankan secara diplomasi?",p:["Keamanan terpelihara","Kos perang sangat tinggi","Negara menjadi lemah","Kedaulatan hilang"],b:0,u:"Diplomasi menjaga keamanan dengan kos rendah."},
 {j:"pilih",t:"Apakah kesan jati diri yang kukuh terhadap kedaulatan?",p:["Tidak mudah dipengaruhi","Rakyat mudah dipengaruhi","Rakyat menolak sejarah","Rakyat berpecah"],b:0,u:"Jati diri yang kukuh melindungi daripada pengaruh luar."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Kedaulatan perlu dijaga dengan bijak","Kedaulatan terjamin dengan sendirinya","Kedaulatan tidak lagi diancam","Kedaulatan hanya urusan tentera"],b:0,u:"Kedaulatan perlu dijaga dengan bijak dan perpaduan rakyat."}},

{n:5, tempat:"Dewan Penilai Kedaulatan", sk:"12.1.4 · K12.1.5 · K12.1.6 · K12.1.7 · K12.1.8 Menjustifikasikan kedaulatan negara", lampiran:null,
 kadNama:"Menjiwai Identiti", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Menjiwai identiti negara bermaksud berbangga dengan bahasa, budaya, sejarah dan lambang negara sendiri.",
 bosKadNama:"Kepelbagaian", bosKadEm:"\u{1F308}", bosKadFakta:"Kepelbagaian budaya dan agama ialah kekuatan negara jika dihormati bersama.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah kedaulatan negara wajar dipertahankan?",p:["Melindungi hak","Menambah kuasa asing","Melemahkan rakyat","Menyempitkan perdagangan"],b:0,u:"Kedaulatan melindungi hak dan maruah bangsa."},
 {j:"pilih",t:"Seorang murid berkata, \"Kedaulatan sudah selamat, tiada ancaman.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ancaman baharu wujud","Tepat, ancaman sudah hilang","Tepat, tiada cabaran lagi","Kurang tepat, kedaulatan tidak wujud"],b:0,u:"Ancaman baharu seperti siber wujud."},
 {j:"pilih",t:"Antara berikut, sikap menjiwai identiti negara ialah:",p:["Berbangga menggunakan bahasa kebangsaan","Malu menggunakan bahasa sendiri","Meniru budaya asing sepenuhnya","Menghina lambang negara"],b:0,u:"Berbangga dengan bahasa kebangsaan menunjukkan identiti."},
 {j:"banyak",t:"Pilih DUA kepentingan menghormati kepelbagaian budaya dan agama.",p:["Perpaduan bertambah erat","Keharmonian terpelihara","Perpecahan digalakkan","Prasangka berkembang"],b:[0,1],u:"Perpaduan dan keharmonian terpelihara."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang globalisasi?",p:["Peluang dan cabaran","Membawa keburukan semata-mata","Membawa kebaikan semata-mata","Tidak memberi kesan"],b:0,u:"Globalisasi membawa peluang dan cabaran."},
 {j:"pilih",t:"Mengapakah kebijaksanaan penting dalam mengekalkan kedaulatan?",p:["Keputusan dibuat","Keputusan dibuat tergesa-gesa","Keputusan diserahkan kepada asing","Keputusan dirahsiakan"],b:0,u:"Kebijaksanaan menghasilkan keputusan yang dipertimbangkan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada sejarah kedaulatan?",p:["Perpaduan melindungi kemerdekaan","Perpecahan melindungi kemerdekaan","Kemerdekaan tidak perlu dijaga","Pemimpin bertindak sendirian"],b:0,u:"Perpaduan melindungi kemerdekaan."},
 {j:"pilih",t:"Mengapakah mengekalkan kedaulatan menjadi tanggungjawab bersama?",p:["Dinikmati rakyat","Tentera sahaja menikmatinya","Pemimpin menikmatinya secara khusus","Tiada siapa menikmatinya"],b:0,u:"Kemerdekaan dinikmati semua rakyat, jadi dijaga bersama."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kedaulatan negara?",p:["Perlu dijaga oleh pemimpin","Dijaga oleh tentera semata-mata","Sudah terjamin selama-lamanya","Tidak penting di era global"],b:0,u:"Kedaulatan perlu dijaga oleh pemimpin dan rakyat."}},

{n:6, tempat:"Studio Cabaran Global", sk:"K12.1.5 hingga K12.1.8 Kebijaksanaan, kepelbagaian dan identiti negara", lampiran:null,
 kadNama:"Bendera Hari Ini", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Setiap tahun Bulan Kebangsaan disambut dengan mengibarkan Jalur Gemilang sebagai tanda cinta dan kesetiaan kepada negara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggabungkan sejarah kedaulatan dengan cabaran semasa.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk identiti negara. Idea manakah paling berasas?",p:["Pertandingan pidato bahasa kebangsaan","Menghapuskan upacara bendera","Melarang aktiviti kebudayaan","Mengejek lambang negara"],b:0,u:"Pidato bahasa kebangsaan memupuk identiti."},
 {j:"pilih",t:"Berita palsu tentang negara tersebar di media sosial. Tindakan paling bijak ialah:",p:["Menyemak sumber","Berkongsi serta-merta","Mempercayainya","Menambah cerita"],b:0,u:"Menyemak sumber menangani maklumat palsu."},
 {j:"banyak",t:"Pilih DUA cara menghadapi cabaran globalisasi.",p:["Menguasai ilmu dan teknologi","Memupuk perpaduan rakyat","Menolak semua pengaruh luar","Menutup negara kepada dunia"],b:[0,1],u:"Ilmu dan perpaduan menguatkan negara."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghormati kepelbagaian agama di sekolah?",p:["Meraikan perayaan semua agama","Melarang perayaan lain","Menyisihkan murid berlainan agama","Mempersendakan upacara orang lain"],b:0,u:"Meraikan perayaan memupuk hormat."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kedaulatan tidak berkaitan dengan murid.\" Respons manakah paling rasional?",p:["Melalui perpaduan dan ilmu","Betul, ia urusan tentera","Betul, ia urusan menteri","Hanya orang dewasa terlibat"],b:0,u:"Murid menyumbang melalui perpaduan dan ilmu."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan cinta kepada negara dalam kehidupan harian?",p:["Menjaga kebersihan","Membuang sampah merata","Merosakkan kemudahan awam","Menyebar fitnah"],b:0,u:"Menjaga kebersihan dan patuh peraturan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menjaga kedaulatan maklumat negara?",p:["Pendidikan keselamatan siber","Berkongsi kata laluan","Membuka data peribadi","Menggunakan perisian tanpa semakan"],b:0,u:"Pendidikan siber melindungi maklumat negara."},
 {j:"pilih",t:"Mengapakah kebijaksanaan diperlukan menghadapi cabaran global?",p:["Peluang dan ancaman perlu ditimbang","Peluang diabaikan","Ancaman diabaikan","Keputusan diambil sewenang-wenangnya"],b:0,u:"Kebijaksanaan menimbang peluang dan ancaman."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang cara mempertahankan kedaulatan negara dalam menghadapi cabaran globalisasi.",
  arahan:"Pilih sekurang-kurangnya DUA cabaran atau langkah (contoh: jenayah siber, maklumat palsu, perpaduan rakyat, diplomasi, menghormati kepelbagaian). Terangkan fakta penting, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang kedaulatan, mencadangkan idea yang boleh dilaksanakan untuk menghadapi globalisasi, dan menonjolkan nilai seperti patriotisme, kebijaksanaan dan menghormati kepelbagaian."}}
];

module.exports = {
  id:"s5b1", tingkatan:5, kod:"1.0 Konsep Kedaulatan Negara",
  tajuk:"Menara Kedaulatan",
  subtajuk:"Sejarah Ting. 5 · Bab 1 Konsep Kedaulatan Negara",
  spi:SPI["12.1"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan yang berkaitan dengan kedaulatan negara. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan kedaulatan negara berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi maklumat berkaitan kedaulatan negara. Galakkan mencerakinkan maklumat.",
   4:"{n} mampu mencerakinkan maklumat yang berkaitan dengan kedaulatan negara. Seterusnya latih menjustifikasikannya.",
   5:"{n} dapat menjustifikasikan kedaulatan negara dalam mempertahankan hak dan maruah bangsa. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang cara mempertahankan kedaulatan negara dalam menghadapi cabaran globalisasi. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Konsep Kedaulatan Negara. Cadangan: ulang hentian pertama sambil membina carta ciri negara berdaulat dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1957", label:"Persekutuan Tanah Melayu merdeka"},
     {masa:"1963", label:"Pembentukan Malaysia"},
     {masa:"1970", label:"Rukun Negara diisytiharkan"},
     {masa:"1971", label:"ZOPFAN dicadangkan"}],
     kapsyen:"Rajah 1 · Beberapa tonggak kedaulatan negara",
     alt:"Garis masa menegak: 1957 Persekutuan Tanah Melayu merdeka; 1963 Pembentukan Malaysia; 1970 Rukun Negara diisytiharkan; 1971 ZOPFAN dicadangkan"},
   p1:petikan(1, "Kedaulatan pada era globalisasi",
     ["Pada era globalisasi, kedaulatan negara diancam bukan sahaja oleh tentera, tetapi juga oleh jenayah siber, maklumat palsu dan pengaruh ekonomi asing.",
      "Negara menangani cabaran ini dengan memperkukuh undang-undang, menggalakkan celik maklumat dan memupuk perpaduan rakyat berbilang kaum."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
