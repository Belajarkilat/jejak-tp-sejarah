/* Sumber kandungan — Sejarah KSSM Tingkatan 1, Bab 7 Peningkatan Tamadun India dan China.
   Standard Kandungan 4.2 Peningkatan Tamadun dan Sumbangannya, Standard Pembelajaran 4.2.4 dan 4.2.5
   serta K4.2.6 dan K4.2.9 (DSKP KSSM Sejarah Tingkatan 1, dskp/sejarah-t1.pdf).
   Berkongsi Standard Kandungan 4.2 dengan Bab 6; Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Istana Pataliputra", sk:"4.2.1 Lokasi · 4.2.4 Tamadun India", lampiran:null,
 kadNama:"Empayar Maurya", kadEm:"\u{1F418}", kadFakta:"Chandragupta Maurya mengasaskan Empayar Maurya kira-kira 321 SM dengan bantuan penasihatnya, Kautilya, yang menulis kitab pentadbiran Arthasastra.",
 bosKadNama:"Konfusius", bosKadEm:"\u{1F4DC}", bosKadFakta:"Konfusius ialah guru dan ahli falsafah China. Ajarannya menekankan hormat kepada ibu bapa, kesetiaan dan pemerintah yang adil.",
 soalan:[
 {j:"pilih",t:"Pengasas Empayar Maurya ialah:",p:["Chandragupta Maurya","Maharaja Asoka","Samudragupta","Maharaja Shi Huangdi"],b:0,u:"Chandragupta Maurya mengasaskan Empayar Maurya kira-kira 321 SM."},
 {j:"pilih",t:"Kitab Arthasastra tentang pentadbiran dan politik ditulis oleh:",p:["Kautilya","Konfusius","Asoka","Kalidasa"],b:0,u:"Kautilya, penasihat Chandragupta Maurya, menulis Arthasastra yang membincangkan pentadbiran negara."},
 {j:"pilih",t:"Maharaja Maurya yang memeluk agama Buddha selepas Perang Kalinga ialah:",p:["Asoka","Chandragupta I","Samudragupta","Han Wudi"],b:0,u:"Asoka menyesal atas kemusnahan Perang Kalinga lalu memeluk agama Buddha dan mengamalkan dasar dhamma."},
 {j:"pilih",t:"Pemerintah Empayar Gupta yang terkenal dengan perluasan kuasa melalui peperangan ialah:",p:["Samudragupta","Maharaja Asoka","Kautilya","Konfusius"],b:0,u:"Samudragupta meluaskan kuasa Gupta melalui banyak kempen ketenteraan di India utara dan selatan."},
 {j:"banyak",t:"Pilih DUA dinasti dalam peningkatan tamadun China.",p:["Qin","Han","Maurya","Gupta"],b:[0,1],u:"Dinasti Qin dan Han ialah dinasti China. Maurya dan Gupta ialah empayar India."},
 {j:"pilih",t:"Maharaja yang menyatukan China pada tahun 221 SM ialah:",p:["Shi Huangdi","Han Wudi","Konfusius","Asoka"],b:0,u:"Shi Huangdi dari Dinasti Qin menyatukan China dan menyeragamkan tulisan, ukuran dan mata wang."},
 {j:"pilih",t:"Kertas dicipta pada zaman Dinasti Han oleh:",p:["Cai Lun","Konfusius","Shi Huangdi","Kautilya"],b:0,u:"Cai Lun dikaitkan dengan penciptaan kertas kira-kira tahun 105 M pada zaman Dinasti Han."},
 {j:"pilih",t:"Edik Asoka yang diukir pada tiang batu bertujuan untuk:",p:["Menyebarkan ajaran maharaja","Menghias istana maharaja","Merekod harga barang di pasar","Menandakan sempadan sawah petani"],b:0,u:"Edik Asoka menyampaikan ajaran moral, dasar dhamma dan arahan maharaja kepada rakyat di seluruh empayar."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh dan tamadunnya yang betul.",p:["Asoka: India","Konfusius: China","Shi Huangdi: China","Kautilya: China","Samudragupta: China"],b:[0,1,2],u:"Asoka dari India, manakala Konfusius dan Shi Huangdi dari China. Kautilya dan Samudragupta ialah tokoh India."}},

{n:2, tempat:"Medan Kalinga", sk:"4.2.4 Perluasan kuasa dalam tamadun India", lampiran:"gm1",
 kadNama:"Perang Kalinga", kadEm:"\u{2694}\u{FE0F}", kadFakta:"Perang Kalinga kira-kira 261 SM mengorbankan ramai nyawa. Asoka begitu menyesal sehingga beralih daripada perluasan kuasa melalui perang kepada dasar dhamma.",
 bosKadNama:"Perkahwinan Politik", bosKadEm:"\u{1F48D}", bosKadFakta:"Chandragupta I dari Dinasti Gupta berkahwin dengan puteri keluarga Licchavi yang berpengaruh. Perkahwinan ini mengukuhkan kedudukannya.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah berlaku dahulu?",p:["Empayar Maurya diasaskan","Perang Kalinga","Empayar Gupta diasaskan","Samudragupta memerintah"],b:0,u:"Rajah 1 menunjukkan Empayar Maurya diasaskan kira-kira 321 SM, sebelum Perang Kalinga dan Empayar Gupta."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa yang berlaku antara pengasasan Maurya dan Gupta?",p:["Perang Kalinga","Penciptaan kertas","Penyatuan China","Pembinaan Colosseum"],b:0,u:"Perang Kalinga (kira-kira 261 SM) berlaku dalam zaman Maurya, sebelum Empayar Gupta diasaskan pada 320 M."},
 {j:"pilih",t:"Cara utama Samudragupta meluaskan kuasa Empayar Gupta ialah:",p:["Kempen ketenteraan","Perdagangan sutera","Pembinaan akueduk","Peperiksaan awam"],b:0,u:"Samudragupta menakluk banyak kerajaan melalui kempen ketenteraan."},
 {j:"banyak",t:"Pilih DUA cara perluasan kuasa dalam tamadun India.",p:["Peperangan dan penaklukan","Perkahwinan politik","Peperiksaan awam","Pembinaan Tembok Besar"],b:[0,1],u:"Empayar India meluaskan kuasa melalui peperangan dan perkahwinan politik. Peperiksaan awam dan Tembok Besar berkaitan China."},
 {j:"pilih",t:"Selepas Perang Kalinga, Asoka meluaskan pengaruhnya melalui:",p:["Dasar dhamma dan diplomasi","Peperangan yang lebih besar","Pembinaan piramid","Penghapusan semua agama"],b:0,u:"Asoka menggunakan dasar dhamma, menghantar mubaligh dan menjalin hubungan diplomatik untuk meluaskan pengaruh."},
 {j:"pilih",t:"Ibu kota Empayar Maurya ialah:",p:["Pataliputra","Athens","Rom","Chang'an"],b:0,u:"Pataliputra di lembah Sungai Ganges menjadi ibu kota Empayar Maurya."},
 {j:"pilih",t:"Zaman Gupta sering digelar zaman kegemilangan India kerana:",p:["Kemajuan ilmu, sastera dan seni","Tiadanya sebarang pemerintah","Penduduknya berpindah ke Eropah","Semua bandar dimusnahkan"],b:0,u:"Zaman Gupta menyaksikan kemajuan matematik (termasuk konsep sifar), sastera seperti karya Kalidasa, dan seni."},
 {j:"pilih",t:"Gajah digunakan dalam angkatan tentera India untuk:",p:["Menggempur barisan musuh","Membajak sawah istana","Mengangkut surat diraja","Menghiasi perarakan sahaja"],b:0,u:"Gajah perang yang besar dan kuat digunakan untuk menggempur barisan musuh."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, pernyataan manakah BETUL?",p:["Perang Kalinga berlaku sebelum Gupta","Empayar Gupta diasaskan sebelum Maurya","Samudragupta memerintah sebelum Asoka","Perang Kalinga berlaku selepas Samudragupta"],b:0,u:"Perang Kalinga (kira-kira 261 SM) berlaku lebih awal daripada pengasasan Empayar Gupta (320 M)."}},

{n:3, tempat:"Akademi Diraja Han", sk:"4.2.5 Pendidikan dalam tamadun China", lampiran:null,
 kadNama:"Peperiksaan Awam", kadEm:"\u{1F393}", kadFakta:"Sistem peperiksaan awam China memilih pegawai kerajaan berdasarkan kebolehan, bukan keturunan. Calon diuji tentang ajaran Konfusius dan kitab klasik.",
 bosKadNama:"Taixue", bosKadEm:"\u{1F3EB}", bosKadFakta:"Maharaja Han Wudi menubuhkan Akademi Diraja (Taixue) pada tahun 124 SM untuk melatih bakal pegawai kerajaan dalam ajaran Konfusius.",
 soalan:[
 {j:"pilih",t:"Ajaran yang menjadi asas pendidikan dalam tamadun China ialah ajaran:",p:["Konfusius","Asoka","Kautilya","Herodotus"],b:0,u:"Ajaran Konfusius menjadi teras pendidikan dan pentadbiran China, terutamanya sejak Dinasti Han."},
 {j:"pilih",t:"Tujuan utama sistem peperiksaan awam di China ialah:",p:["Memilih pegawai yang berkebolehan","Memilih maharaja baharu","Menentukan harga sutera","Memilih tentera yang paling kuat"],b:0,u:"Peperiksaan awam memilih pegawai berdasarkan merit dan pengetahuan, bukan keturunan."},
 {j:"pilih",t:"Maharaja yang menjadikan ajaran Konfusius ideologi rasmi negara ialah:",p:["Han Wudi","Shi Huangdi","Asoka","Samudragupta"],b:0,u:"Han Wudi menjadikan ajaran Konfusius asas pentadbiran dan menubuhkan Akademi Diraja."},
 {j:"banyak",t:"Pilih DUA nilai yang ditekankan dalam ajaran Konfusius.",p:["Hormat kepada ibu bapa","Kesetiaan","Mementingkan diri sendiri","Menolak ilmu"],b:[0,1],u:"Konfusius menekankan hormat kepada ibu bapa, kesetiaan dan pemerintah yang adil."},
 {j:"pilih",t:"Calon peperiksaan awam China perlu menguasai:",p:["Kitab klasik Konfusius","Teknik bertarung gladiator Rom","Seni bina lengkungan dan kubah","Tulisan cuneiform Mesopotamia"],b:0,u:"Calon diuji tentang kitab klasik dan ajaran Konfusius, serta kebolehan menulis esei."},
 {j:"pilih",t:"Penciptaan kertas pada zaman Han membantu pendidikan kerana:",p:["Buku lebih murah dihasilkan","Murid tidak perlu membaca lagi","Guru tidak diperlukan","Kitab klasik dihapuskan"],b:0,u:"Kertas lebih ringan dan murah daripada buluh atau sutera, jadi ilmu lebih mudah disebarkan."},
 {j:"susun",t:"Susun langkah seorang calon untuk menjadi pegawai kerajaan China melalui sistem peperiksaan awam.",p:["Mempelajari kitab klasik Konfusius","Menduduki peperiksaan peringkat daerah","Lulus peperiksaan peringkat lebih tinggi","Dilantik sebagai pegawai kerajaan"],b:[0,1,2,3],u:"Calon belajar dahulu, menduduki peperiksaan secara berperingkat, dan yang lulus dilantik sebagai pegawai."},
 {j:"pilih",t:"Peperiksaan awam dikatakan berasaskan merit. Merit bermaksud:",p:["Kebolehan sendiri","Keturunan bangsawan","Kekayaan keluarga","Hubungan dengan maharaja"],b:0,u:"Merit ialah kelayakan berdasarkan kebolehan dan usaha sendiri."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah ciri pendidikan dalam tamadun China yang BETUL?",p:["Pegawai dipilih melalui peperiksaan","Pendidikan menolak ajaran Konfusius","Jawatan kerajaan diwarisi sahaja","Tiada institusi pendidikan"],b:0,u:"Pegawai dipilih melalui peperiksaan berasaskan ajaran Konfusius, dan Akademi Diraja ditubuhkan untuk melatih mereka."}},

{n:4, tempat:"Makmal Dua Empayar", sk:"4.2.4 · 4.2.5 Menganalisis peningkatan tamadun India dan China", lampiran:"p1",
 kadNama:"Dua Jalan Kuasa", kadEm:"\u{1F4CA}", kadFakta:"Empayar boleh diperluas dengan pedang atau dengan pengaruh. Asoka bermula dengan peperangan, kemudian beralih kepada dasar dhamma dan diplomasi.",
 bosKadNama:"Merit", bosKadEm:"\u{1F393}", bosKadFakta:"Sistem peperiksaan awam China kekal dalam pelbagai bentuk selama lebih seribu tahun. Ia mempengaruhi sistem perkhidmatan awam di banyak negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang mendorong Asoka mengubah dasarnya?",p:["Kemusnahan Perang Kalinga","Kekalahan dalam perang","Arahan Konfusius","Tekanan dari Rom"],b:0,u:"Petikan menyatakan Asoka menyesal melihat kemusnahan Perang Kalinga, lalu mengubah dasarnya."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah perbezaan perluasan kuasa sebelum dan selepas Perang Kalinga?",p:["Daripada perang kepada dhamma","Sebelum: diplomasi, selepas: peperangan","Kedua-duanya melalui perdagangan","Tiada perbezaan"],b:0,u:"Sebelum Kalinga, Asoka meluaskan kuasa melalui perang. Selepasnya, dia menggunakan dhamma dan diplomasi."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah peperiksaan awam membuka peluang kepada rakyat biasa?",p:["Pemilihan berdasarkan kebolehan, bukan keturunan","Hanya keluarga diraja boleh menduduki peperiksaan","Peperiksaan itu tidak mempunyai soalan","Calon dipilih secara rawak"],b:0,u:"Kerana pegawai dipilih melalui peperiksaan, anak rakyat biasa yang rajin juga boleh menjadi pegawai."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan sistem peperiksaan awam kepada China.",p:["Pegawai berilmu mentadbir","Ajaran Konfusius tersebar","Maharaja kehilangan kuasanya","Pendidikan semakin diabaikan"],b:[0,1],u:"Peperiksaan menghasilkan pegawai berilmu dan menyebarkan ajaran Konfusius. Pendidikan semakin dipentingkan, bukan diabaikan."},
 {j:"pilih",t:"Bandingkan cara Samudragupta dan Asoka (selepas Kalinga) meluaskan pengaruh. Pernyataan manakah BETUL?",p:["Samudragupta berperang, Asoka berdiplomasi","Kedua-duanya hanya berperang","Asoka berperang, Samudragupta berdiplomasi","Kedua-duanya membina akueduk"],b:0,u:"Samudragupta menggunakan kempen ketenteraan, manakala Asoka selepas Kalinga menggunakan dhamma dan diplomasi."},
 {j:"pilih",t:"Mengapakah pegawai yang dipilih melalui peperiksaan lebih berkesan berbanding pegawai yang dilantik kerana keturunan?",p:["Ilmu mereka telah teruji","Mereka lebih kaya","Mereka bersaudara dengan maharaja","Mereka tidak perlu bekerja"],b:0,u:"Peperiksaan menapis calon. Pegawai yang lulus mempunyai ilmu dan kemahiran yang diperlukan untuk mentadbir."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah hubungan antara pendidikan dengan kestabilan pentadbiran China?",p:["Pegawai berilmu mentadbir dengan teratur","Pendidikan menyebabkan pemberontakan","Pendidikan tiada kaitan dengan pentadbiran","Pegawai berilmu menolak maharaja"],b:0,u:"Pegawai yang dididik dalam ajaran dan kemahiran pentadbiran membantu kerajaan berjalan dengan teratur."},
 {j:"pilih",t:"Shi Huangdi menyeragamkan tulisan di seluruh China. Apakah analisis paling tepat tentang kesannya?",p:["Pentadbiran antara wilayah lebih mudah","Rakyat tidak lagi dapat membaca","Setiap wilayah menggunakan tulisan berbeza","Perdagangan terhenti"],b:0,u:"Tulisan yang seragam memudahkan arahan, rekod dan surat difahami di semua wilayah."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["India: perluasan kuasa, China: pendidikan","India dan China tidak mempunyai pemerintah","China meluaskan kuasa melalui gajah perang","India memilih pegawai melalui peperiksaan"],b:0,u:"Petikan menunjukkan peningkatan India melalui perluasan kuasa dan peningkatan China melalui sistem pendidikan."}},

{n:5, tempat:"Balai Hakim Empayar", sk:"4.2.4 · 4.2.5 · K4.2.6 Menilai peningkatan tamadun", lampiran:null,
 kadNama:"Agen Perubahan", kadEm:"\u{1F4DA}", kadFakta:"Pendidikan mengubah nasib individu dan negara. Di China, anak petani yang lulus peperiksaan boleh menjadi pegawai tinggi kerajaan.",
 bosKadNama:"Pemimpin Berubah", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Asoka dikenang bukan kerana perang yang dimenanginya, tetapi kerana keberaniannya mengubah dasar demi kesejahteraan rakyat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, tindakan Asoka selepas Perang Kalinga menunjukkan ciri pemimpin yang:",p:["Berani mengakui kesilapan","Lemah dan tidak berpendirian","Mementingkan diri sendiri","Gemar berperang"],b:0,u:"Asoka menyedari kesilapan dan mengubah dasar demi rakyat. Ini ciri pemimpin yang berjiwa besar."},
 {j:"pilih",t:"Seorang murid berkata, \"Peperiksaan awam China sangat adil kepada semua.\" Penilaian manakah paling tepat?",p:["Lebih adil, tetapi keluarga kaya lebih berpeluang","Tepat sepenuhnya, setiap rakyat berpeluang sama","Tidak adil langsung, untuk keluarga diraja sahaja","Peperiksaan itu tidak wujud"],b:0,u:"Peperiksaan berasaskan merit lebih adil daripada keturunan, tetapi keluarga kaya lebih mampu membiayai pembelajaran yang panjang."},
 {j:"pilih",t:"Mengapakah pendidikan dianggap agen perubahan kepada kemajuan negara?",p:["Ia melahirkan rakyat berilmu","Ia menjadikan rakyat malas bekerja","Ia hanya untuk golongan bangsawan","Ia tidak mempengaruhi ekonomi"],b:0,u:"Rakyat berilmu dapat mentadbir, mencipta dan menyelesaikan masalah. Inilah asas kemajuan negara."},
 {j:"banyak",t:"Pilih DUA alasan yang menyokong pendapat bahawa Empayar Gupta mencapai zaman kegemilangan.",p:["Kemajuan matematik termasuk konsep sifar","Kemajuan sastera seperti karya Kalidasa","Empayar itu tidak mempunyai tentera","Rakyatnya tidak tahu membaca"],b:[0,1],u:"Konsep sifar dan karya sastera Kalidasa membuktikan kemajuan intelektual zaman Gupta."},
 {j:"pilih",t:"Antara berikut, yang manakah penilaian PALING seimbang tentang Shi Huangdi?",p:["Menyatukan China tetapi keras","Dia pemimpin sempurna tanpa kelemahan","Dia tidak memberi apa-apa sumbangan","Dia mengasaskan agama Buddha"],b:0,u:"Shi Huangdi menyatukan dan menyeragamkan China, tetapi juga dikenang kerana pemerintahan yang keras, termasuk membakar buku."},
 {j:"pilih",t:"Antara sumbangan berikut, yang manakah paling bermanfaat kepada penyebaran ilmu?",p:["Penciptaan kertas","Penggunaan gajah perang","Pembinaan istana","Perkahwinan politik"],b:0,u:"Kertas memudahkan ilmu ditulis, disalin dan disebarkan dengan murah."},
 {j:"pilih",t:"Pada pendapat anda, cara perluasan pengaruh manakah lebih kekal kesannya?",p:["Melalui budaya dan agama","Melalui penaklukan semata-mata","Melalui ancaman kepada jiran","Melalui pembinaan tembok"],b:0,u:"Pengaruh budaya dan agama, seperti penyebaran Buddha oleh Asoka, kekal ribuan tahun walaupun empayarnya runtuh."},
 {j:"pilih",t:"Sistem peperiksaan awam China mempengaruhi sistem perkhidmatan awam moden. Apakah kepentingan penilaian ini?",p:["Idea lama masih relevan","Ia membuktikan China menjajah dunia","Ia menunjukkan peperiksaan tidak berguna","Ia tidak berkaitan dengan dunia moden"],b:0,u:"Pengambilan pegawai melalui peperiksaan dan merit masih diamalkan, termasuk di Malaysia."}],
 bos:{j:"pilih",t:"Antara penilaian berikut, yang manakah PALING berasas tentang peningkatan tamadun India dan China?",p:["India meluaskan pengaruh, China memantapkan pentadbiran","Kedua-duanya tidak meninggalkan sebarang warisan","India dan China tidak pernah wujud serentak","China lebih terkenal dengan peperangan"],b:0,u:"India menonjol dalam perluasan kuasa dan pengaruh, manakala China memantapkan pentadbiran melalui pendidikan dan peperiksaan awam."}},

{n:6, tempat:"Studio Ilmu Untuk Negara", sk:"K4.2.6 · K4.2.9 Pendidikan dan kerjasama", lampiran:null,
 kadNama:"Ilmu Mengubah", kadEm:"\u{1F4A1}", kadFakta:"Pendidikan yang baik membuka peluang kepada semua. Biasiswa dan pinjaman pendidikan hari ini membantu murid daripada keluarga kurang berada.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea berasas mengambil iktibar daripada sejarah. Kelemahan peperiksaan awam China (keluarga kaya lebih berpeluang) boleh diatasi dengan sokongan kepada murid kurang berada.",
 soalan:[
 {j:"pilih",t:"Murid daripada keluarga kurang berada sukar mendapat buku rujukan. Idea manakah paling berasas?",p:["Program pinjaman buku","Menghentikan penggunaan buku","Hanya murid kaya dibenarkan belajar","Menaikkan harga buku"],b:0,u:"Perpustakaan mini memastikan semua murid mendapat akses kepada ilmu, menangani kelemahan yang dilihat dalam sistem China."},
 {j:"pilih",t:"Sekolah anda mahu memilih wakil pertandingan secara adil. Idea manakah mencerminkan prinsip merit?",p:["Ujian pemilihan terbuka","Memilih anak guru","Memilih murid paling popular","Memilih secara cabutan"],b:0,u:"Ujian terbuka memilih berdasarkan kebolehan, sama seperti prinsip merit dalam peperiksaan awam China."},
 {j:"banyak",t:"Pilih DUA idea untuk menjadikan pendidikan sebagai agen perubahan dalam komuniti anda.",p:["Program tuisyen percuma oleh murid senior","Kelas literasi digital untuk warga emas","Mengehadkan pendidikan kepada golongan tertentu","Menutup perpustakaan awam"],b:[0,1],u:"Tuisyen percuma dan kelas digital menyebarkan ilmu kepada lebih ramai orang."},
 {j:"pilih",t:"Dua kelas bersaing secara tidak sihat dalam projek sekolah. Pengajaran daripada Asoka manakah paling sesuai?",p:["Menggantikan persaingan dengan kerjasama","Meneruskan persaingan sehingga satu kelas kalah","Mengelak daripada bercakap","Melaporkan kelas lain"],b:0,u:"Asoka beralih daripada perang kepada keamanan. Kerjasama membawa hasil yang lebih baik daripada persaingan yang merosakkan."},
 {j:"pilih",t:"Mengapakah kerjasama penting dalam pembinaan sesebuah tamadun, seperti Empayar Maurya dan Han?",p:["Semua pihak perlu bekerja bersama","Pemerintah boleh membuat segalanya sendiri","Rakyat tidak perlu terlibat","Kerjasama melemahkan empayar"],b:0,u:"Empayar yang besar memerlukan kerjasama pemerintah, pegawai dan rakyat untuk mentadbir dan membangun."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memperkenalkan ajaran nilai seperti hormat kepada ibu bapa kepada murid?",p:["Projek keluarga dengan refleksi","Menghafal ajaran tanpa amalan","Mengabaikan nilai dalam pendidikan","Menghukum murid yang bertanya"],b:0,u:"Projek amali dengan refleksi membantu murid menghayati nilai, bukan sekadar menghafalnya."},
 {j:"pilih",t:"Mengapakah idea untuk menambah baik sistem pendidikan perlu berasaskan pengalaman sejarah?",p:["Supaya kesilapan tidak berulang","Supaya idea itu lebih mahal","Supaya hanya pakar sejarah terlibat","Supaya tidak perlu berubah"],b:0,u:"Sejarah menunjukkan apa yang berjaya dan apa yang gagal. Ini membantu kita merancang dengan lebih bijak."},
 {j:"pilih",t:"Seorang rakan berkata, \"Belajar sejarah India dan China tidak berguna untuk rakyat Malaysia.\" Respons manakah paling rasional?",p:["Kedua-duanya mempengaruhi Alam Melayu","Betul, kerana mereka jauh dari Malaysia","Betul, kerana tamadun itu sudah runtuh","Hanya sejarah Malaysia perlu dipelajari"],b:0,u:"Agama, perdagangan dan budaya India serta China mempengaruhi Alam Melayu, dan sejarah mereka memberi iktibar tentang kepimpinan serta pendidikan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU program di sekolah atau komuniti awak yang menjadikan pendidikan sebagai agen perubahan, berdasarkan pengajaran daripada tamadun China dan India.",
  arahan:"Namakan program itu. Terangkan masalah yang ingin diselesaikan, cara pelaksanaannya, bagaimana ia mengambil iktibar daripada sistem peperiksaan awam China atau dasar Asoka, dan cara memastikan semua murid berpeluang sama.",
  u:"Jawapan TP6 yang kukuh mengaitkan program dengan fakta sejarah yang tepat (prinsip merit dalam peperiksaan awam, Akademi Diraja Han, dasar dhamma Asoka), mengenal pasti masalah sebenar, mencadangkan pelaksanaan yang munasabah, dan menangani kelemahan sejarah seperti ketidaksamaan peluang."}}
];

module.exports = {
  id:"s1b7", tingkatan:1, kod:"7.0 Peningkatan Tamadun India dan China",
  tajuk:"Empayar dan Akademi",
  subtajuk:"Sejarah Ting. 1 · Bab 7 Peningkatan Tamadun India dan China",
  spi:SPI["4.2"],
  ulasan:{
   1:"{n} dapat mengenal pasti tokoh dan dinasti utama dalam tamadun India dan China. Langkah seterusnya ialah memahami cara perluasan kuasa India dan sistem pendidikan China.",
   2:"{n} memahami cara perluasan kuasa dalam tamadun India dan perkembangan pendidikan dalam tamadun China. Perlu lebih latihan menerangkan contoh sebelum bergerak ke TP3.",
   3:"{n} boleh menerangkan peningkatan tamadun India dan China dengan contoh yang sesuai, seperti Perang Kalinga dan peperiksaan awam. Galakkan membandingkan cara perluasan kuasa dan kesannya.",
   4:"{n} mampu menganalisis maklumat tentang perluasan kuasa India dan pendidikan China, termasuk hubungan antara pendidikan dengan pentadbiran. Seterusnya latih menilai tokoh dan dasar mereka.",
   5:"{n} dapat membuat penilaian yang seimbang tentang tokoh dan dasar tamadun India dan China dengan alasan yang berasas. Sudah bersedia melahirkan idea menjadikan pendidikan agen perubahan.",
   6:"{n} berjaya melahirkan idea yang berasas untuk menjadikan pendidikan sebagai agen perubahan dengan mengambil iktibar daripada sejarah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Peningkatan Tamadun India dan China. Cadangan: ulang hentian pertama sambil membina jadual tokoh dan sumbangan dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira 321 SM", label:"Empayar Maurya diasaskan oleh Chandragupta Maurya"},
     {masa:"Kira-kira 261 SM", label:"Perang Kalinga, Asoka beralih kepada dhamma"},
     {masa:"320 M", label:"Empayar Gupta diasaskan oleh Chandragupta I"},
     {masa:"Kira-kira 335 M", label:"Samudragupta memerintah dan meluaskan kuasa"}],
     kapsyen:"Rajah 1 · Peristiwa penting perluasan kuasa dalam tamadun India",
     alt:"Garis masa menegak: kira-kira 321 SM Empayar Maurya diasaskan oleh Chandragupta Maurya; kira-kira 261 SM Perang Kalinga dan Asoka beralih kepada dhamma; 320 M Empayar Gupta diasaskan oleh Chandragupta I; kira-kira 335 M Samudragupta memerintah dan meluaskan kuasa"},
   p1:petikan(1, "Asoka dan peperiksaan awam China",
     ["Maharaja Asoka meluaskan Empayar Maurya melalui peperangan. Selepas menyaksikan kemusnahan dan kematian dalam Perang Kalinga, beliau menyesal. Asoka kemudian memeluk agama Buddha, mengamalkan dasar dhamma dan menjalin hubungan diplomatik dengan kerajaan lain.",
      "Di China, Dinasti Han memilih pegawai kerajaan melalui peperiksaan yang menguji ajaran Konfusius. Pemilihan berdasarkan kebolehan, bukan keturunan, membuka peluang kepada anak rakyat biasa yang rajin belajar. Pegawai yang berilmu membantu pentadbiran berjalan dengan teratur."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
