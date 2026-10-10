/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 6 Cabaran Selepas Pembentukan Malaysia.
   Standard Kandungan 13.2, Standard Pembelajaran 13.2.1 hingga 13.2.5 serta K13.2.6 hingga K13.2.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pelabuhan Cabaran", sk:"13.2.1 Cabaran selepas Pembentukan Malaysia · 13.2.2 Pemisahan Singapura", lampiran:null,
 kadNama:"Konfrontasi", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Indonesia di bawah Sukarno melancarkan Konfrontasi terhadap Malaysia dengan dasar \"Ganyang Malaysia\" mulai 1963.",
 bosKadNama:"Singapura Keluar", bosKadEm:"\u{1F6AA}", bosKadFakta:"Singapura dipisahkan daripada Malaysia pada 9 Ogos 1965 selepas perselisihan politik yang berpanjangan.",
 soalan:[
 {j:"pilih",t:"Negara yang melancarkan Konfrontasi terhadap Malaysia ialah:",p:["Indonesia","Filipina","Thailand","Vietnam"],b:0,u:"Indonesia melancarkan Konfrontasi."},
 {j:"pilih",t:"Pemimpin Indonesia ketika Konfrontasi ialah:",p:["Sukarno","Suharto","Ho Chi Minh","Marcos"],b:0,u:"Sukarno memimpin Indonesia."},
 {j:"pilih",t:"Singapura keluar daripada Malaysia pada tahun:",p:["1965","1963","1957","1969"],b:0,u:"Singapura keluar pada 9 Ogos 1965."},
 {j:"pilih",t:"Pemimpin Singapura yang terlibat dalam perpisahan 1965 ialah:",p:["Lee Kuan Yew","Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Razak"],b:0,u:"Lee Kuan Yew memimpin Singapura."},
 {j:"banyak",t:"Pilih DUA cabaran selepas Pembentukan Malaysia.",p:["Konfrontasi Indonesia","Pemisahan Singapura","Kemerdekaan Tanah Melayu","Pengisytiharan Darurat 1948"],b:[0,1],u:"Konfrontasi dan pemisahan Singapura."},
 {j:"pilih",t:"Filipina menuntut hak ke atas wilayah:",p:["Sabah","Sarawak","Johor","Kedah"],b:0,u:"Filipina menuntut Sabah."},
 {j:"pilih",t:"Cabaran pembangunan dan ekonomi melibatkan jurang antara:",p:["Bandar dan luar bandar","Langit dan bumi","Sungai dan laut","Siang dan malam"],b:0,u:"Jurang bandar dan luar bandar."},
 {j:"pilih",t:"Tragedi hubungan antara kaum pada 1969 dikenali sebagai:",p:["Peristiwa 13 Mei","Peristiwa Pangkor","Peristiwa Pasir Salak","Peristiwa Bukit Kepong"],b:0,u:"Peristiwa 13 Mei 1969."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan cabaran dan contohnya yang betul.",p:["Ancaman luar: Konfrontasi Indonesia","Politik: Singapura keluar","Hubungan kaum: Peristiwa 13 Mei","Ancaman luar: Kemerdekaan Tanah Melayu","Politik: Perjanjian Pangkor"],b:[0,1,2],u:"Konfrontasi, perpisahan Singapura dan 13 Mei ialah cabaran selepas pembentukan Malaysia."}},

{n:2, tempat:"Bilik Kronologi Cabaran", sk:"13.2.2 · 13.2.3 · 13.2.4 Konfrontasi, Singapura dan ancaman komunis", lampiran:"gm1",
 kadNama:"Perjanjian Bangkok", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Perjanjian Bangkok yang ditandatangani pada Ogos 1966 menamatkan Konfrontasi antara Malaysia dengan Indonesia.",
 bosKadNama:"Hatyai", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Parti Komunis Malaya menandatangani Perjanjian Hatyai pada Disember 1989 dan menamatkan perjuangan bersenjata.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Pembentukan Malaysia","Singapura keluar","Perjanjian Bangkok","Peristiwa 13 Mei"],b:0,u:"Pembentukan Malaysia pada 1963 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Konfrontasi ditamatkan?",p:["1966","1965","1969","1963"],b:0,u:"Rajah 1 menunjukkan Perjanjian Bangkok pada 1966."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Pembentukan Malaysia","Singapura keluar","Perjanjian Bangkok","Peristiwa 13 Mei"],b:[0,1,2,3],u:"1963, 1965, 1966 dan 1969."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Pembentukan Malaysia dan Peristiwa 13 Mei?",p:["6 tahun","3 tahun","4 tahun","2 tahun"],b:0,u:"1969 tolak 1963 ialah 6 tahun."},
 {j:"pilih",t:"Parti yang melancarkan perjuangan bersenjata di Semenanjung dan Sarawak ialah:",p:["Parti Komunis","Parti Perikatan","UMNO","MCA"],b:0,u:"Komunis menimbulkan ancaman selepas pembentukan Malaysia."},
 {j:"pilih",t:"Perjanjian yang menamatkan ancaman bersenjata PKM pada 1989 ialah:",p:["Perjanjian Hatyai","Perjanjian Bangkok","Perjanjian Pangkor","Perjanjian London"],b:0,u:"Perjanjian Hatyai 1989."},
 {j:"pilih",t:"Pasukan gerila komunis di Sarawak dikenali sebagai:",p:["PGRS","MPAJA","Wataniah","Home Guard"],b:0,u:"Pasukan Gerila Rakyat Sarawak (PGRS)."},
 {j:"banyak",t:"Pilih DUA usaha menangani ancaman komunis.",p:["Operasi keselamatan","Rundingan damai","Penghapusan perlembagaan","Penutupan sekolah"],b:[0,1],u:"Operasi keselamatan dan rundingan damai."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Singapura keluar dan Perjanjian Bangkok?",p:["1 tahun","3 tahun","4 tahun","2 tahun"],b:0,u:"1966 tolak 1965 ialah 1 tahun."}},

{n:3, tempat:"Balai 13 Mei", sk:"13.2.3 · 13.2.4 · 13.2.5 Membuat kronologi cabaran", lampiran:null,
 kadNama:"MAGERAN", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Selepas 13 Mei 1969, Majlis Gerakan Negara (MAGERAN) ditubuhkan di bawah Tun Abdul Razak untuk memulihkan keamanan.",
 bosKadNama:"Rukun Negara", bosKadEm:"\u{1F4DC}", bosKadFakta:"Rukun Negara diisytiharkan pada 31 Ogos 1970 sebagai panduan memupuk perpaduan.",
 soalan:[
 {j:"pilih",t:"Selepas 13 Mei 1969, pemerintahan dipulihkan oleh:",p:["MAGERAN","Perikatan","MPAJA","Komanwel"],b:0,u:"MAGERAN dipimpin Tun Razak."},
 {j:"pilih",t:"Pengerusi MAGERAN ialah:",p:["Tun Abdul Razak","Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Dr Ismail"],b:0,u:"Tun Razak mengetuai MAGERAN."},
 {j:"pilih",t:"Dasar yang dirangka selepas 1969 untuk memulihkan perpaduan ialah:",p:["Dasar Ekonomi Baru","Malayan Union","Rancangan Briggs","Dasar Nipponisasi"],b:0,u:"Dasar Ekonomi Baru."},
 {j:"banyak",t:"Pilih DUA langkah selepas 13 Mei 1969.",p:["MAGERAN ditubuhkan","Rukun Negara diisytiharkan","Singapura keluar Malaysia","Darurat 1948 diisytiharkan"],b:[0,1],u:"MAGERAN dan Rukun Negara."},
 {j:"pilih",t:"Rukun Negara diisytiharkan pada tahun:",p:["1970","1969","1965","1963"],b:0,u:"31 Ogos 1970."},
 {j:"pilih",t:"Parlimen digantung selepas 13 Mei 1969 sehingga:",p:["1971","1963","1957","1966"],b:0,u:"Parlimen digantung hingga 1971."},
 {j:"pilih",t:"Selepas Konfrontasi, hubungan Malaysia dengan Indonesia:",p:["Dipulihkan","Terus putus","Menjadi perang","Dibekukan"],b:0,u:"Hubungan dipulihkan selepas 1966."},
 {j:"pilih",t:"Dasar yang bertujuan membasmi kemiskinan dan menyusun semula masyarakat ialah:",p:["Dasar Ekonomi Baru","Penyata Razak","Perjanjian Bangkok","Sistem Ahli"],b:0,u:"DEB bertujuan membasmi kemiskinan dan menyusun semula masyarakat."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan cabaran dengan betul?",p:["Singapura keluar, Perjanjian Bangkok, 13 Mei","13 Mei, Singapura keluar, Perjanjian Bangkok","Perjanjian Bangkok, 13 Mei, Singapura keluar","13 Mei, Perjanjian Bangkok, Singapura keluar"],b:0,u:"1965, 1966, 1969."}},

{n:4, tempat:"Arkib Ketahanan", sk:"13.2.4 · 13.2.5 Menganalisis maklumat tentang cabaran", lampiran:"p1",
 kadNama:"Punca 13 Mei", kadEm:"\u{1F50D}", kadFakta:"Peristiwa 13 Mei berpunca daripada jurang ekonomi antara kaum, ketegangan politik dan prasangka yang tidak diatasi.",
 bosKadNama:"Rundingan", bosKadEm:"\u{1F5E3}\u{FE0F}", bosKadFakta:"Konflik diselesaikan lebih baik melalui rundingan daripada kekerasan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah punca utama Peristiwa 13 Mei?",p:["Jurang ekonomi","Kekurangan padi","Banjir besar","Kemarau panjang"],b:0,u:"Petikan menyatakan jurang ekonomi dan ketegangan kaum."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah Konfrontasi diselesaikan?",p:["Melalui rundingan","Melalui peperangan besar","Melalui penjajahan","Melalui pemisahan Sabah"],b:0,u:"Konfrontasi diselesaikan melalui rundingan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan Dasar Ekonomi Baru?",p:["Mengurangkan jurang","Menambah jurang","Memecahkan masyarakat","Menutup ekonomi"],b:0,u:"DEB mengurangkan jurang antara kaum."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA cabaran yang diatasi melalui rundingan.",p:["Konfrontasi Indonesia","Pemisahan Singapura","Ancaman komunis bersenjata","Peristiwa 13 Mei"],b:[0,1],u:"Konfrontasi dan pemisahan Singapura diselesaikan melalui rundingan."},
 {j:"pilih",t:"Bandingkan Konfrontasi dengan Peristiwa 13 Mei. Apakah perbezaannya?",p:["Luar lawan dalam negeri","Kedua-duanya ancaman luar","Kedua-duanya konflik dalaman","Kedua-duanya tiada kesan"],b:0,u:"Konfrontasi datang dari luar, 13 Mei berpunca dalam negara."},
 {j:"pilih",t:"Mengapakah kestabilan politik penting untuk keamanan?",p:["Pembangunan lancar","Pembangunan terhenti","Rakyat berpecah","Pelabur lari"],b:0,u:"Kestabilan menjamin pembangunan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kejayaan memulihkan keamanan 1969?",p:["Kepimpinan berwibawa penting","Kepimpinan tidak penting","Kekerasan sahaja berkesan","Rakyat tidak terlibat"],b:0,u:"Kepimpinan berwibawa penting memulihkan keamanan."},
 {j:"pilih",t:"Apakah kesan cabaran-cabaran itu terhadap rakyat?",p:["Ajar perpaduan","Menambah prasangka","Menghapuskan negara","Memecahkan wilayah"],b:0,u:"Cabaran mengajar pentingnya perpaduan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Rundingan dan kepimpinan","Cabaran diatasi melalui paksaan","Cabaran tidak dapat diatasi","Cabaran diatasi oleh asing"],b:0,u:"Rundingan dan kepimpinan mengatasi cabaran."}},

{n:5, tempat:"Dewan Penilai Ketahanan", sk:"13.2.5 · K13.2.6 · K13.2.7 · K13.2.8 · K13.2.9 Menilai cabaran dalam membina ketahanan diri", lampiran:null,
 kadNama:"Ketahanan", kadEm:"\u{1F4AA}", kadFakta:"Cabaran besar melahirkan ketahanan negara dan bangsa apabila ditangani dengan rundingan, perpaduan dan kepimpinan berwibawa.",
 bosKadNama:"Keharmonian", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Keharmonian kaum perlu dijaga oleh semua rakyat setiap hari.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah rundingan lebih baik daripada kekerasan?",p:["Mengurangkan kerugian","Menambah kerugian","Menghentikan semua perbincangan","Menjatuhkan lawan"],b:0,u:"Rundingan mengurangkan kerugian."},
 {j:"pilih",t:"Seorang murid berkata, \"Cabaran lalu tiada kaitan dengan masa kini.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia mengajar","Tepat, ia sudah lapuk","Tepat, ia tiada pengajaran","Kurang tepat, ia tidak berlaku"],b:0,u:"Cabaran lalu mengajar ketahanan."},
 {j:"pilih",t:"Antara berikut, kewibawaan pemimpin ditunjukkan oleh:",p:["Berani bela maruah","Mementingkan diri","Mengelak tanggungjawab","Menyalahkan orang lain"],b:0,u:"Berani memperjuangkan maruah bangsa."},
 {j:"banyak",t:"Pilih DUA kepentingan menjaga keharmonian kaum.",p:["Keamanan terpelihara","Pembangunan berjalan lancar","Prasangka bertambah","Perpaduan dilemahkan"],b:[0,1],u:"Keamanan dan pembangunan terjamin."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kesan cabaran selepas 1963?",p:["Memperkukuh ketahanan","Memusnahkan negara sepenuhnya","Tiada kesan langsung","Menguntungkan musuh negara"],b:0,u:"Cabaran menyulitkan tetapi memperkukuh ketahanan."},
 {j:"pilih",t:"Mengapakah kestabilan politik penting?",p:["Keamanan negara terjamin","Keamanan negara terancam","Ekonomi terjejas","Rakyat berpecah"],b:0,u:"Kestabilan menjamin keamanan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada Peristiwa 13 Mei?",p:["Keharmonian perlu dijaga","Kaum perlu diasingkan","Prasangka perlu dibiarkan","Ekonomi tidak penting"],b:0,u:"Keharmonian kaum perlu dijaga."},
 {j:"pilih",t:"Mengapakah rundingan sebagai penyelesaian konflik wajar diamalkan?",p:["Keputusan diterima","Satu pihak dipinggirkan","Konflik dibesarkan","Keputusan dipaksa"],b:0,u:"Rundingan menghasilkan keputusan yang diterima."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang cabaran selepas Pembentukan Malaysia?",p:["Ujian yang membina ketahanan negara","Bencana yang menghapuskan negara","Peristiwa tanpa pengajaran","Rancangan musuh"],b:0,u:"Cabaran menjadi ujian yang membina ketahanan negara."}},

{n:6, tempat:"Studio Keharmonian", sk:"K13.2.6 hingga K13.2.9 Rundingan, kewibawaan, kestabilan dan keharmonian kaum", lampiran:null,
 kadNama:"Perpaduan Hari Ini", kadEm:"\u{1F91D}", kadFakta:"Hari ini perpaduan dipupuk melalui rumah terbuka, sekolah kebangsaan, Rukun Tetangga dan sukan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil iktibar cabaran lalu untuk mengekalkan kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Dua kumpulan murid berselisih tentang penggunaan padang. Iktibar sejarah yang sesuai ialah:",p:["Berunding hingga setuju","Bergaduh untuk menang","Memulaukan satu sama lain","Mengadu kepada orang luar"],b:0,u:"Rundingan menyelesaikan konflik."},
 {j:"pilih",t:"Idea manakah paling berasas untuk menjaga keharmonian kaum di sekolah?",p:["Program rumah terbuka","Memisahkan kelas mengikut kaum","Melarang pergaulan","Mengejek budaya orang lain"],b:0,u:"Rumah terbuka memupuk keharmonian."},
 {j:"banyak",t:"Pilih DUA cara menangani prasangka.",p:["Bersembang dengan rakan pelbagai kaum","Mempelajari budaya orang lain","Menyebar khabar angin palsu","Memulaukan rakan sekelas"],b:[0,1],u:"Berkawan dan belajar budaya orang lain."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengurangkan jurang ekonomi?",p:["Latihan kemahiran","Menutup peluang","Menghalang pendidikan","Membiarkan jurang"],b:0,u:"Latihan kemahiran mengurangkan jurang."},
 {j:"pilih",t:"Seorang rakan berkata, \"Peristiwa 13 Mei tidak perlu dipelajari.\" Respons manakah paling rasional?",p:["Ia mengajar keharmonian","Betul, ia memalukan","Betul, ia sudah lapuk","Hanya orang tua perlu tahu"],b:0,u:"Ia mengajar menjaga keharmonian."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan kewibawaan sebagai ketua kelas?",p:["Adil dan berunding","Memaksa kehendak sendiri","Mengelak tanggungjawab","Menyalahkan rakan"],b:0,u:"Adil dan berunding."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memupuk kestabilan dalam komuniti?",p:["Gotong-royong bersama","Memisahkan jiran","Menyebar fitnah","Mengabaikan kebersihan"],b:0,u:"Gotong-royong memupuk kestabilan."},
 {j:"pilih",t:"Mengapakah ketahanan diri penting dalam menghadapi cabaran hidup?",p:["Membolehkan kita bangkit","Membuat kita mudah putus asa","Menjauhkan rakan","Menambah pergaduhan"],b:0,u:"Ketahanan membolehkan kita bangkit."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang cabaran selepas Pembentukan Malaysia dalam mengekalkan kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA cabaran (contoh: Konfrontasi, Singapura keluar, ancaman komunis, jurang pembangunan, Peristiwa 13 Mei). Terangkan iktibar, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang cabaran selepas 1963, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti rundingan, kewibawaan dan menjaga keharmonian kaum."}}
];

module.exports = {
  id:"s5b6", tingkatan:5, kod:"6.0 Cabaran Selepas Pembentukan Malaysia",
  tajuk:"Ujian Awal Malaysia",
  subtajuk:"Sejarah Ting. 5 · Bab 6 Cabaran Selepas Pembentukan Malaysia",
  spi:SPI["13.2"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang cabaran selepas Pembentukan Malaysia. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan cabaran selepas Pembentukan Malaysia berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi peristiwa cabaran selepas Pembentukan Malaysia. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang cabaran selepas Pembentukan Malaysia. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan cabaran selepas Pembentukan Malaysia dalam membina ketahanan diri. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang cabaran selepas Pembentukan Malaysia dalam mengekalkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Cabaran Selepas Pembentukan Malaysia. Cadangan: ulang hentian pertama sambil membina jadual cabaran dan penyelesaiannya dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1963", label:"Pembentukan Malaysia"},
     {masa:"1965", label:"Singapura keluar"},
     {masa:"1966", label:"Perjanjian Bangkok"},
     {masa:"1969", label:"Peristiwa 13 Mei"}],
     kapsyen:"Rajah 1 · Cabaran awal selepas Pembentukan Malaysia",
     alt:"Garis masa menegak: 1963 Pembentukan Malaysia; 1965 Singapura keluar; 1966 Perjanjian Bangkok; 1969 Peristiwa 13 Mei"},
   p1:petikan(1, "Cabaran dan penyelesaiannya",
     ["Konfrontasi dengan Indonesia diselesaikan melalui rundingan dan Perjanjian Bangkok 1966. Singapura keluar pada 1965 selepas perselisihan politik yang tidak dapat didamaikan.",
      "Peristiwa 13 Mei 1969 berpunca daripada jurang ekonomi dan ketegangan kaum. Selepas itu, Dasar Ekonomi Baru dan Rukun Negara dilaksanakan untuk mengurangkan jurang dan memupuk perpaduan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
