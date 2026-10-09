/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 8 Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat.
   Standard Kandungan 8.2, Standard Pembelajaran 8.2.1 hingga 8.2.4 serta K8.2.5 hingga K8.2.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Istana Bukit Serene", sk:"8.2.1 Reaksi pemerintah Negeri-negeri Melayu Utara dan Johor", lampiran:null,
 kadNama:"Sultan Abu Bakar", kadEm:"\u{1F451}", kadFakta:"Sultan Abu Bakar memodenkan Johor dan menjalin hubungan sama taraf dengan British. Baginda dikenali sebagai bapa kemodenan Johor.",
 bosKadNama:"Bunga Emas", bosKadEm:"\u{1F33C}", bosKadFakta:"Negeri Melayu utara menghantar bunga emas ke Siam sebagai tanda persahabatan untuk mengelak peperangan.",
 soalan:[
 {j:"pilih",t:"Pemerintah Johor yang memodenkan negeri pada abad ke-19 ialah:",p:["Sultan Abu Bakar","Sultan Abdul Samad","Sultan Idris","Sultan Ahmad"],b:0,u:"Sultan Abu Bakar memodenkan pentadbiran dan ekonomi Johor."},
 {j:"pilih",t:"Sultan Abu Bakar digelar sebagai Sultan Johor pada tahun:",p:["1885","1819","1895","1914"],b:0,u:"Baginda diiktiraf sebagai Sultan oleh British pada 1885."},
 {j:"pilih",t:"Perlembagaan Johor diwujudkan pada tahun:",p:["1895","1874","1909","1948"],b:0,u:"Undang-Undang Tubuh Negeri Johor diwujudkan pada 1895."},
 {j:"pilih",t:"Terengganu mempunyai perlembagaan bertulis pada tahun:",p:["1911","1895","1874","1957"],b:0,u:"Undang-Undang Tubuh Kerajaan Terengganu diwujudkan pada 1911."},
 {j:"banyak",t:"Pilih DUA negeri Melayu yang mempunyai perlembagaan bertulis sebelum pemerintahan Residen.",p:["Johor","Terengganu","Perak","Selangor"],b:[0,1],u:"Johor (1895) dan Terengganu (1911) mempunyai perlembagaan bertulis. Perak dan Selangor menerima Residen."},
 {j:"pilih",t:"Kedah dan Kelantan menghantar bunga emas ke:",p:["Siam","China","Belanda","Portugis"],b:0,u:"Bunga emas dihantar ke Siam sebagai tanda persahabatan."},
 {j:"pilih",t:"Raja Melayu di utara berunding dengan Siam dan British. Tujuannya ialah:",p:["Menjaga kedaulatan negeri","Menyerahkan negeri kepada Siam","Memulakan perang besar","Membuka lombong baharu"],b:0,u:"Diplomasi membantu mengelak peperangan dan menjaga kedaulatan."},
 {j:"pilih",t:"Johor memilih hubungan baik dengan British kerana:",p:["Melindungi kepentingan","Menyerah kalah sepenuhnya","Diperintah oleh seorang Gabenor","Takut kepada raja Siam"],b:0,u:"Hubungan baik melindungi kepentingan dan kedaulatan Johor."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan pemerintah dan tindakannya yang betul.",p:["Sultan Abu Bakar: memodenkan Johor","Johor: perlembagaan 1895","Terengganu: perlembagaan 1911","Johor: menerima Residen 1874","Kelantan: perlembagaan 1895"],b:[0,1,2],u:"Sultan Abu Bakar memodenkan Johor; Johor 1895, Terengganu 1911 mempunyai perlembagaan."}},

{n:2, tempat:"Bilik Perlembagaan", sk:"8.2.2 Tindakan raja Melayu menangani cabaran Barat", lampiran:"gm1",
 kadNama:"Undang-Undang Tubuh", kadEm:"\u{1F4DC}", kadFakta:"Perlembagaan bertulis Johor dan Terengganu menetapkan bahawa raja mesti diterima oleh rakyat dan negeri tidak boleh diserahkan kepada pihak asing.",
 bosKadNama:"Sultan Zainal Abidin III", bosKadEm:"\u{1F451}", bosKadFakta:"Sultan Zainal Abidin III Terengganu memperkenalkan perlembagaan bertulis pada 1911 untuk melindungi kedaulatan negeri.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Johor diiktiraf sebagai Sultan","Perlembagaan Johor diwujudkan","Perjanjian Bangkok ditandatangani","Perlembagaan Terengganu diwujudkan"],b:0,u:"Pengiktirafan Sultan Johor pada 1885 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Perlembagaan Johor diwujudkan?",p:["1895","1885","1909","1911"],b:0,u:"Rajah 1 menunjukkan Perlembagaan Johor pada 1895."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Johor diiktiraf sebagai Sultan","Perlembagaan Johor","Perjanjian Bangkok","Perlembagaan Terengganu"],b:[0,1,2,3],u:"1885, 1895, 1909 dan 1911."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Perlembagaan Johor dan Perlembagaan Terengganu?",p:["16 tahun","14 tahun","26 tahun","2 tahun"],b:0,u:"1911 tolak 1895 ialah 16 tahun."},
 {j:"pilih",t:"Tujuan utama perlembagaan bertulis Johor dan Terengganu ialah:",p:["Melindungi kedaulatan negeri","Menambah cukai","Membuka lombong","Menjadikan British pemerintah"],b:0,u:"Perlembagaan menetapkan negeri tidak boleh diserahkan kepada pihak asing."},
 {j:"pilih",t:"Sultan Abu Bakar menerima kunjungan Ratu Victoria di England. Ini menunjukkan:",p:["Hubungan sama taraf British","Johor sudah dijajah British","Johor tunduk kepada kuasa Siam","Johor menutup hubungan luar negeri"],b:0,u:"Pertemuan itu menunjukkan Johor dihormati sebagai sebuah negeri yang berdaulat."},
 {j:"pilih",t:"Pemodenan Johor termasuk pembinaan:",p:["Istana, jalan dan pentadbiran","Kuil Hindu di pulau","Kubu pertahanan di pantai","Pelabuhan Singapura yang baharu"],b:0,u:"Baginda membina istana, jalan raya dan membentuk pentadbiran moden."},
 {j:"banyak",t:"Pilih DUA tindakan raja Melayu menangani cabaran Barat.",p:["Menggubal perlembagaan bertulis","Memodenkan pentadbiran","Menyerahkan negeri kepada British","Menolak semua ilmu baharu"],b:[0,1],u:"Perlembagaan dan pemodenan melindungi kedaulatan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pengiktirafan Sultan Johor dan Perlembagaan Johor?",p:["10 tahun","14 tahun","24 tahun","26 tahun"],b:0,u:"1895 tolak 1885 ialah 10 tahun."}},

{n:3, tempat:"Dewan Pembesar", sk:"8.2.2 · 8.2.3 Mengkategorikan tindakan pemerintah", lampiran:null,
 kadNama:"Tiga Kategori", kadEm:"\u{1F5C2}\u{FE0F}", kadFakta:"Tindakan pemerintah boleh dikategorikan kepada diplomasi, pemodenan dan penentangan. Setiap negeri memilih mengikut keadaannya.",
 bosKadNama:"Pembesar Berwawasan", bosKadEm:"\u{1F3D7}\u{FE0F}", bosKadFakta:"Pembesar seperti Menteri Besar Johor membantu raja memodenkan negeri dengan membuka ladang dan membina bandar.",
 soalan:[
 {j:"pilih",t:"Menghantar bunga emas ke Siam termasuk dalam kategori tindakan:",p:["Diplomasi","Pemodenan","Penentangan bersenjata","Penjajahan"],b:0,u:"Bunga emas ialah tindakan diplomasi untuk menjaga keamanan."},
 {j:"pilih",t:"Membina jalan raya dan sistem pentadbiran moden termasuk dalam kategori:",p:["Pemodenan","Diplomasi","Penentangan bersenjata","Penaklukan"],b:0,u:"Jalan raya dan pentadbiran moden ialah tindakan pemodenan."},
 {j:"pilih",t:"Mengangkat senjata menentang British di Pahang termasuk dalam kategori:",p:["Perang bersenjata","Diplomasi dengan Siam","Pemodenan negeri","Perdagangan rempah"],b:0,u:"Mengangkat senjata ialah penentangan bersenjata."},
 {j:"banyak",t:"Pilih DUA tindakan diplomasi pemerintah tempatan.",p:["Menghantar bunga emas","Mengadakan rundingan dengan British","Menyerang kubu British","Membina ladang sendiri"],b:[0,1],u:"Menghantar bunga emas dan berunding ialah diplomasi."},
 {j:"pilih",t:"Sultan Terengganu menggubal Undang-Undang Tubuh untuk menjaga negeri. Ini termasuk kategori:",p:["Pemodenan perundangan","Penentangan bersenjata","Penaklukan wilayah musuh","Pelarian ke luar negeri"],b:0,u:"Menggubal perlembagaan ialah langkah moden dan undang-undang."},
 {j:"pilih",t:"Pembesar Melayu yang membantu raja membuka ladang tanaman dagangan menunjukkan sikap:",p:["Berwawasan dan maju","Menolak perubahan baharu","Takut kepada pihak British","Mengelak tanggungjawab besar"],b:0,u:"Membuka ladang dagangan memajukan ekonomi negeri."},
 {j:"pilih",t:"Pemerintah yang berunding dan bukan berperang mengutamakan:",p:["Keselamatan rakyat","Kemusnahan musuh","Kehilangan wilayah","Kemakmuran asing"],b:0,u:"Diplomasi dapat mengelak korban rakyat."},
 {j:"pilih",t:"Penubuhan sekolah dan pegawai terlatih oleh Johor dikategorikan sebagai:",p:["Pemodenan pentadbiran","Penentangan bersenjata","Diplomasi dengan Siam","Penjajahan"],b:0,u:"Sekolah dan pegawai terlatih ialah pemodenan pentadbiran."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah tindakan pemodenan dan BUKAN diplomasi?",p:["Membina sekolah dan jalan raya","Menghantar bunga emas ke Siam","Berunding dengan pegawai British","Menghantar utusan ke Bangkok"],b:0,u:"Membina sekolah dan jalan raya ialah pemodenan. Bunga emas, rundingan dan utusan ialah diplomasi."}},

{n:4, tempat:"Arkib Kebijaksanaan", sk:"8.2.3 · 8.2.4 Menganalisis tindakan raja dan pembesar Melayu", lampiran:"p1",
 kadNama:"Akibat Tindakan", kadEm:"\u{1F50D}", kadFakta:"Setiap tindakan pemerintah memberi akibat berbeza. Menganalisisnya membantu kita menilai sama ada tindakan itu berkesan.",
 bosKadNama:"Kedaulatan Terpelihara", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Johor dan Terengganu berjaya mengekalkan kedaulatan lebih lama berbanding negeri yang menerima Residen.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah usaha Sultan Abu Bakar memajukan Johor?",p:["Memodenkan pentadbiran negeri","Menutup semua pelabuhan negeri","Menolak perubahan baharu","Menyerahkan negeri kepada Siam"],b:0,u:"Petikan menyebut baginda memodenkan pentadbiran dan menggalakkan tanaman dagangan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan perlembagaan bertulis?",p:["Melindungi kedaulatan negeri","Menambah cukai kepada rakyat","Mengurangkan kuasa rakyat jelata","Mengubah agama rasmi negeri"],b:0,u:"Perlembagaan menetapkan negeri tidak boleh diserahkan kepada pihak luar."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Johor dapat bertahan lama?",p:["Pemodenan dan hubungan baik","Johor dijajah lebih awal","Johor mempunyai tentera Eropah","Johor tiada hasil bumi"],b:0,u:"Pemodenan dan diplomasi menjaga kedaulatan Johor."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri kebijaksanaan Sultan Abu Bakar.",p:["Berunding dengan British","Memodenkan pentadbiran","Menentang British secara bersenjata","Menolak ilmu moden"],b:[0,1],u:"Baginda bijak berunding dan memodenkan negeri."},
 {j:"pilih",t:"Bandingkan Johor dengan Pahang. Pernyataan manakah BETUL?",p:["Johor berunding, Pahang berperang","Kedua-duanya berunding dengan British","Kedua-duanya menentang bersenjata","Johor berperang, Pahang berunding"],b:0,u:"Johor memilih diplomasi dan pemodenan, manakala Bahaman di Pahang memilih penentangan bersenjata."},
 {j:"pilih",t:"Apakah kelemahan strategi diplomasi?",p:["Kedaulatan boleh terhakis","Peperangan tidak dapat dielak","Rakyat dibunuh dengan kejam","Negeri menjadi sangat miskin"],b:0,u:"Diplomasi menjaga keamanan, tetapi kuasa luar masih berpotensi mengikis kedaulatan."},
 {j:"pilih",t:"Apakah kesan pemodenan kepada rakyat Johor?",p:["Kemudahan dan peluang baharu","Rakyat dipinggirkan oleh raja","Rakyat kehilangan tanah mereka","Sekolah ditutup sepenuhnya"],b:0,u:"Pemodenan membawa kemudahan pendidikan dan ekonomi."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada perlembagaan Terengganu 1911?",p:["Raja menjaga masa depan negeri","Terengganu sudah dijajah British","Terengganu dikuasai oleh Siam","Terengganu tiada sultan yang memerintah"],b:0,u:"Perlembagaan menunjukkan raja berusaha menjaga kedaulatan secara sah."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Pemodenan dan diplomasi berjaya","Pemodenan melemahkan negeri Melayu","Diplomasi tidak berguna kepada negeri","Perlembagaan dicipta oleh British"],b:0,u:"Pemodenan dan diplomasi membantu menjaga kedaulatan."}},

{n:5, tempat:"Dewan Penilai Pemimpin", sk:"8.2.4 · K8.2.5 · K8.2.6 · K8.2.7 Menilai usaha pemimpin", lampiran:null,
 kadNama:"Taat Setia", kadEm:"\u{1F91D}", kadFakta:"Rakyat yang taat setia kepada pemerintah menjadikan negeri kukuh. Pemerintah pula wajar bijaksana dan adil.",
 bosKadNama:"Muafakat", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Muafakat antara raja, pembesar dan rakyat membolehkan negeri membuat keputusan yang tepat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, apakah kejayaan utama Sultan Abu Bakar?",p:["Menjaga kedaulatan Johor","Menyerahkan Johor kepada Siam","Menutup ekonomi negeri","Menolak hubungan British"],b:0,u:"Baginda berjaya mengekalkan kedaulatan Johor melalui pemodenan dan diplomasi."},
 {j:"pilih",t:"Seorang murid berkata, \"Diplomasi lemah berbanding peperangan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia melindungi rakyat","Tepat, diplomasi tiada guna","Tepat, kerana perang lebih baik","Kurang tepat, diplomasi tidak wujud"],b:0,u:"Diplomasi mengelak korban dan dapat menjaga kedaulatan."},
 {j:"pilih",t:"Antara berikut, sikap taat setia kepada pemerintah ditunjukkan oleh:",p:["Mematuhi pemerintah adil","Menentang setiap arahan pemerintah","Menyebarkan fitnah tentang raja","Bergaduh sesama sendiri"],b:0,u:"Rakyat patuh kepada pemerintah yang adil dan berwibawa."},
 {j:"banyak",t:"Pilih DUA kepentingan menghargai sumbangan pemimpin terdahulu.",p:["Mengekalkan semangat patriotisme","Mewarisi iktibar kepimpinan","Melupakan sejarah negara kita","Menjatuhkan pemimpin yang adil"],b:[0,1],u:"Menghargai pemimpin memupuk patriotisme dan mewariskan iktibar."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kebijaksanaan raja Melayu?",p:["Berjaya, tetapi tidak sepenuhnya","Gagal sepenuhnya dalam setiap perkara","Berjaya sepenuhnya dalam setiap keadaan","Tiada sebarang usaha dilakukan"],b:0,u:"Ada negeri bertahan lebih lama, tetapi akhirnya kuasa British tetap meluas."},
 {j:"pilih",t:"Mengapakah sikap bijaksana penting dalam mempertahankan kedaulatan?",p:["Memilih langkah yang tepat","Memilih langkah paling mudah","Mengikut kehendak musuh","Mengelak membuat keputusan"],b:0,u:"Sikap bijaksana membantu memilih langkah yang paling sesuai."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada sejarah kebijaksanaan pemimpin?",p:["Pemodenan dan perpaduan","Perubahan tidak diperlukan sama sekali","Kerjasama membawa kejatuhan negeri","Pemimpin tidak perlu berilmu"],b:0,u:"Pemodenan dan perpaduan menjadi benteng kedaulatan."},
 {j:"pilih",t:"Mengapakah kita wajar bermuafakat untuk kemajuan negara?",p:["Keputusan diterima bersama","Perbezaan pendapat dihapuskan terus","Pemimpin tidak diperlukan lagi","Perbincangan sengaja dielakkan"],b:0,u:"Muafakat menghasilkan keputusan yang tepat dan diterima bersama."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang usaha raja dan pembesar Melayu menangani cabaran Barat?",p:["Pelbagai cara dengan hasil berbeza","Setiap pemerintah berjaya sepenuhnya","Tiada pemerintah yang berusaha","Setiap pemerintah gagal serta-merta"],b:0,u:"Pemerintah memilih diplomasi, pemodenan atau penentangan, dengan hasil yang berbeza."}},

{n:6, tempat:"Studio Kedaulatan Pemimpin", sk:"K8.2.5 hingga K8.2.8 Kebijaksanaan dan menghargai pemimpin terdahulu", lampiran:null,
 kadNama:"Raja Berperlembagaan", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Hari ini raja-raja Melayu menjadi lambang kedaulatan dalam sistem Raja Berperlembagaan, yang diwarisi daripada tradisi kebijaksanaan terdahulu.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar kepimpinan terdahulu untuk menyelesaikan cabaran masa kini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk rasa hormat terhadap pemimpin terdahulu. Idea manakah paling berasas?",p:["Pameran tentang pemimpin negeri","Mengabaikan sejarah negeri sendiri","Mengejek jasa pemimpin lama","Melarang kajian sejarah tempatan"],b:0,u:"Ceramah dan pameran memperkenalkan sumbangan pemimpin."},
 {j:"pilih",t:"Kelas anda berdepan masalah pembahagian tugas. Iktibar bermuafakat daripada sejarah ialah:",p:["Berbincang hingga sepakat","Ketua memutuskan sendiri","Tiada perbincangan","Tugas diagihkan secara paksa"],b:0,u:"Muafakat bermaksud berbincang hingga mencapai persetujuan bersama."},
 {j:"banyak",t:"Pilih DUA cara menangani cabaran mempertahankan kedaulatan negara hari ini.",p:["Memajukan ilmu dan teknologi","Memupuk perpaduan rakyat","Bergantung sepenuhnya pada asing","Mengabaikan hubungan luar"],b:[0,1],u:"Ilmu dan perpaduan menguatkan kedaulatan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghargai warisan perlembagaan negeri?",p:["Mempelajari isi perlembagaan","Mengabaikan perlembagaan negeri","Menghapuskan sejarah negeri","Mengubahnya sesuka hati kita"],b:0,u:"Memahami perlembagaan ialah langkah menghargai warisan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pemimpin terdahulu tidak berjasa.\" Respons manakah paling rasional?",p:["Mereka berjasa memodenkan negeri","Betul, mereka tiada sebarang jasa","Betul, mereka lemah dan gagal","Pemimpin sekarang sahaja berjasa"],b:0,u:"Pemimpin terdahulu menyumbang melalui pemodenan dan diplomasi."},
 {j:"pilih",t:"Bagaimanakah murid mengamalkan sikap taat setia kepada negara?",p:["Mematuhi undang-undang","Mengabaikan peraturan sekolah","Menghina pemimpin negara","Merosakkan harta awam"],b:0,u:"Mematuhi undang-undang dan menghormati lambang negara ialah taat setia."},
 {j:"pilih",t:"Idea manakah paling berasas untuk menghadapi ancaman luar terhadap kedaulatan negara?",p:["Menguatkan perpaduan negara","Memutuskan hubungan luar negeri","Mengabaikan pertahanan negara","Menyerahkan sumber kepada asing"],b:0,u:"Perpaduan dan pertahanan yang kukuh melindungi kedaulatan."},
 {j:"pilih",t:"Mengapakah sikap bijaksana pemimpin masih relevan hari ini?",p:["Cabaran baharu perlukan ketepatan","Pemimpin tidak diperlukan lagi","Cabaran sudah tiada pada hari ini","Keputusan dibuat sewenang-wenangnya"],b:0,u:"Kepimpinan bijaksana tetap diperlukan untuk menghadapi cabaran semasa."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menangani cabaran bagi mempertahankan kedaulatan negara, berdasarkan kebijaksanaan raja dan pembesar Melayu.",
  arahan:"Pilih sekurang-kurangnya DUA tindakan raja atau pembesar (contoh: pemodenan Johor oleh Sultan Abu Bakar, perlembagaan bertulis Johor 1895 dan Terengganu 1911, bunga emas, muafakat pembesar). Terangkan iktibarnya, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti bijaksana, taat setia, bermuafakat dan menghargai pemimpin terdahulu."}}
];

module.exports = {
  id:"s3b8", tingkatan:3, kod:"8.0 Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat",
  tajuk:"Perlembagaan dan Bunga Emas",
  subtajuk:"Sejarah Ting. 3 · Bab 8 Kebijaksanaan Raja dan Pembesar Melayu Menangani Cabaran Barat",
  spi:SPI["8.2"],
  ulasan:{
   1:"{n} dapat menyatakan tindakan raja dan pembesar Melayu menangani cabaran Barat. Langkah seterusnya ialah memahami contoh tindakan itu.",
   2:"{n} dapat mengemukakan contoh tindakan raja dan pembesar Melayu. Perlu lebih latihan mengkategorikan tindakan itu sebelum bergerak ke TP3.",
   3:"{n} boleh mengkategorikan tindakan pemerintah menangani cabaran Barat. Galakkan menganalisis tindakan itu.",
   4:"{n} mampu menganalisis tindakan raja dan pembesar Melayu menangani cabaran Barat. Seterusnya latih menilai usaha itu.",
   5:"{n} dapat menilai usaha raja dan pembesar Melayu menangani cabaran Barat untuk pembangunan negara. Sudah bersedia menjana idea mempertahankan kedaulatan.",
   6:"{n} berjaya menjana idea menangani cabaran untuk mempertahankan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kebijaksanaan Raja dan Pembesar Melayu. Cadangan: ulang hentian pertama sambil membina jadual tindakan pemerintah dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1885", label:"Johor diiktiraf sebagai Sultan"},
     {masa:"1895", label:"Perlembagaan Johor"},
     {masa:"1909", label:"Perjanjian Bangkok"},
     {masa:"1911", label:"Perlembagaan Terengganu"}],
     kapsyen:"Rajah 1 · Beberapa langkah raja Melayu menjaga kedaulatan",
     alt:"Garis masa menegak: 1885 Johor diiktiraf sebagai Sultan; 1895 Perlembagaan Johor; 1909 Perjanjian Bangkok; 1911 Perlembagaan Terengganu"},
   p1:petikan(1, "Pemodenan dan perlembagaan",
     ["Sultan Abu Bakar memodenkan pentadbiran dan ekonomi Johor, serta berunding dengan British sebagai sebuah negeri yang berdaulat. Perlembagaan bertulis Johor pada tahun 1895 menetapkan bahawa negeri itu tidak boleh diserahkan kepada pihak luar.",
      "Terengganu juga menggubal Undang-Undang Tubuh pada tahun 1911. Langkah ini membantu kedua-dua negeri mengekalkan kedaulatan lebih lama."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
