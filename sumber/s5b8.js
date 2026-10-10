/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 8 Membina Kemakmuran Negara.
   Standard Kandungan 14.2, Standard Pembelajaran 14.2.1 hingga 14.2.5 serta K14.2.6 hingga K14.2.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pejabat Perancang Ekonomi", sk:"14.2.1 Pembentukan Dasar Ekonomi Baru · 14.2.2 Pelaksanaan DEB", lampiran:null,
 kadNama:"Dua Matlamat DEB", kadEm:"\u{1F3AF}", kadFakta:"Dasar Ekonomi Baru (1971 hingga 1990) mempunyai dua matlamat: membasmi kemiskinan tanpa mengira kaum dan menyusun semula masyarakat.",
 bosKadNama:"Sasaran 30 Peratus", bosKadEm:"\u{1F4C8}", bosKadFakta:"DEB menyasarkan pemilikan ekuiti bumiputera sebanyak 30 peratus menjelang 1990.",
 soalan:[
 {j:"pilih",t:"Dasar Ekonomi Baru dilancarkan pada tahun:",p:["1971","1957","1963","1991"],b:0,u:"DEB dilancarkan pada 1971."},
 {j:"pilih",t:"Dasar Ekonomi Baru dilancarkan selepas peristiwa:",p:["13 Mei 1969","Merdeka 1957","Konfrontasi 1963","Darurat 1948"],b:0,u:"DEB dibentuk selepas 13 Mei 1969."},
 {j:"pilih",t:"Salah satu matlamat DEB ialah:",p:["Membasmi kemiskinan","Menambah kemiskinan di luar bandar","Mengasingkan kaum mengikut kerja","Menutup ekonomi kepada pelabur"],b:0,u:"Membasmi kemiskinan."},
 {j:"pilih",t:"Matlamat kedua DEB ialah:",p:["Menyusun semula masyarakat","Menyatukan negeri-negeri Tanah Melayu","Menamatkan Darurat komunis","Membentuk Persekutuan Malaysia"],b:0,u:"Menyusun semula masyarakat."},
 {j:"banyak",t:"Pilih DUA badan yang membantu melaksanakan DEB.",p:["FELDA","MARA","MPAJA","Kempeitai"],b:[0,1],u:"FELDA dan MARA."},
 {j:"pilih",t:"DEB dirancang dalam tempoh:",p:["Dua puluh tahun","Lima tahun","Seratus tahun","Satu tahun"],b:0,u:"1971 hingga 1990, dua puluh tahun."},
 {j:"pilih",t:"Sasaran ekuiti bumiputera dalam DEB ialah:",p:["30 peratus","10 peratus","60 peratus","90 peratus"],b:0,u:"30 peratus."},
 {j:"pilih",t:"Rancangan lima tahun yang mengandungi DEB ialah:",p:["Rancangan Malaysia Kedua","Rancangan Briggs","Rancangan Marshall","Rancangan Templer"],b:0,u:"Rancangan Malaysia Kedua."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan dasar dan tujuannya yang betul.",p:["DEB: membasmi kemiskinan","DEB: menyusun semula masyarakat","FELDA: membangunkan tanah","DEB: menyekat pendidikan rakyat","FELDA: memberi ufti kepada kuasa asing"],b:[0,1,2],u:"DEB membasmi kemiskinan dan menyusun semula masyarakat; FELDA membangunkan tanah."}},

{n:2, tempat:"Bilik Kronologi Ekonomi", sk:"14.2.3 · 14.2.4 Dasar Pembangunan Nasional dan pelaksanaannya", lampiran:"gm1",
 kadNama:"Wawasan 2020", kadEm:"\u{1F52D}", kadFakta:"Wawasan 2020 diperkenalkan pada 1991 bagi menjadikan Malaysia negara maju sepenuhnya menjelang 2020.",
 bosKadNama:"Dasar Wawasan Negara", bosKadEm:"\u{1F4DC}", bosKadFakta:"Dasar Wawasan Negara (2001 hingga 2010) menyambung DPN dengan tumpuan kepada ekonomi berasaskan pengetahuan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["FELDA ditubuhkan","DEB dilancarkan secara rasmi","Dasar Pembangunan Nasional dilancarkan","Dasar Wawasan Negara dilancarkan"],b:0,u:"FELDA 1956 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Dasar Pembangunan Nasional dilancarkan?",p:["1991","1971","2001","1956"],b:0,u:"Rajah 1 menunjukkan DPN pada 1991."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["FELDA ditubuhkan","DEB dilancarkan","Dasar Pembangunan Nasional","Dasar Wawasan Negara"],b:[0,1,2,3],u:"1956, 1971, 1991 dan 2001."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara DEB dan Dasar Pembangunan Nasional?",p:["20 tahun","15 tahun","35 tahun","10 tahun"],b:0,u:"1991 tolak 1971 ialah 20 tahun."},
 {j:"pilih",t:"Dasar Pembangunan Nasional berlangsung dari 1991 hingga:",p:["2000","1990","2010","2020"],b:0,u:"DPN berlangsung 1991 hingga 2000."},
 {j:"pilih",t:"Penggagas Wawasan 2020 ialah:",p:["Tun Dr Mahathir","Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn"],b:0,u:"Tun Dr Mahathir mengemukakan Wawasan 2020."},
 {j:"pilih",t:"DPN menekankan pembangunan yang:",p:["Seimbang","Berat sebelah","Terhenti","Bergantung kepada asing"],b:0,u:"DPN menekankan pembangunan seimbang."},
 {j:"banyak",t:"Pilih DUA ciri DPN.",p:["Meneruskan matlamat DEB","Menekankan sumber manusia","Menghapuskan semua dasar pembangunan negara","Menutup ekonomi kepada dunia luar"],b:[0,1],u:"DPN meneruskan matlamat DEB dan menekankan sumber manusia."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara DPN dan Dasar Wawasan Negara?",p:["10 tahun","20 tahun","15 tahun","35 tahun"],b:0,u:"2001 tolak 1991 ialah 10 tahun."}},

{n:3, tempat:"Kampung FELDA", sk:"14.2.4 · 14.2.5 Membuat kronologi strategi kemakmuran", lampiran:null,
 kadNama:"FELDA", kadEm:"\u{1F334}", kadFakta:"Lembaga Kemajuan Tanah Persekutuan (FELDA) ditubuhkan pada 1956 untuk membuka tanah baharu bagi petani miskin.",
 bosKadNama:"MARA", bosKadEm:"\u{1F393}", bosKadFakta:"Majlis Amanah Rakyat (MARA) ditubuhkan untuk membantu bumiputera dalam pendidikan dan perniagaan.",
 soalan:[
 {j:"pilih",t:"Agensi yang membuka tanah baharu untuk petani miskin ialah:",p:["FELDA","MARA","PERNAS","Petronas"],b:0,u:"FELDA."},
 {j:"pilih",t:"Agensi yang membantu pendidikan dan perniagaan bumiputera ialah:",p:["MARA","FELDA","RISDA","FELCRA"],b:0,u:"MARA."},
 {j:"pilih",t:"Agensi yang membantu pekebun kecil getah ialah:",p:["RISDA","MARA","FELDA","Bank Negara"],b:0,u:"RISDA."},
 {j:"banyak",t:"Pilih DUA usaha DEB membasmi kemiskinan.",p:["Pembukaan tanah FELDA","Latihan kemahiran","Penutupan sekolah luar bandar","Penghapusan kilang tempatan"],b:[0,1],u:"Tanah baharu dan latihan kemahiran."},
 {j:"pilih",t:"Pelaksanaan DEB bermula pada tahun:",p:["1971","1991","1957","1948"],b:0,u:"1971."},
 {j:"pilih",t:"Wawasan 2020 menyasarkan Malaysia menjadi negara maju menjelang:",p:["2020","1990","2000","2050"],b:0,u:"2020."},
 {j:"pilih",t:"Dasar Wawasan Negara berlangsung dari 2001 hingga:",p:["2010","2000","2020","2030"],b:0,u:"2010."},
 {j:"pilih",t:"Antara berikut, urutan dasar yang betul ialah:",p:["DEB, DPN, Dasar Wawasan Negara","DPN, DEB, Dasar Wawasan Negara","Dasar Wawasan Negara, DEB, DPN","DEB, Dasar Wawasan Negara, DPN"],b:0,u:"1971, 1991, 2001."}],
 bos:{j:"susun",t:"Susun dasar pembangunan negara mengikut kronologi.",p:["Dasar Ekonomi Baru","Dasar Pembangunan Nasional","Dasar Wawasan Negara","Wawasan 2020 menjelang 2020"],b:[0,1,2,3],u:"DEB 1971, DPN 1991, DWN 2001, dan sasaran Wawasan 2020."}},

{n:4, tempat:"Arkib Kemakmuran", sk:"14.2.5 Menganalisis strategi membina kemakmuran negara", lampiran:"p1",
 kadNama:"Pencapaian DEB", kadEm:"\u{1F4CA}", kadFakta:"Kadar kemiskinan menurun dengan ketara dan golongan kelas menengah bumiputera berkembang, walaupun sasaran ekuiti tidak dicapai sepenuhnya.",
 bosKadNama:"Kelestarian", bosKadEm:"\u{1F33F}", bosKadFakta:"Pembangunan perlu mengambil kira kelestarian alam sekitar supaya kemakmuran kekal untuk generasi akan datang.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kejayaan DEB?",p:["Kemiskinan berkurang dengan ketara","Kemiskinan bertambah di luar bandar","Pengangguran bertambah dengan ketara","Perpaduan antara kaum semakin hilang"],b:0,u:"Petikan menyatakan kemiskinan berkurang."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelemahan DEB?",p:["Sasaran ekuiti tidak dicapai sepenuhnya","Semua sasaran dicapai sepenuhnya tanpa cacat","Rakyat dipinggirkan daripada pembangunan negara","Dasar dimansuhkan sebelum dilaksanakan"],b:0,u:"Sasaran ekuiti tidak dicapai sepenuhnya."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah DPN dilaksanakan selepas DEB?",p:["Melanjutkan pembangunan dengan pendekatan baharu","Menamatkan semua usaha pembangunan negara","Menghapuskan rakyat yang miskin sepenuhnya","Menutup ekonomi daripada pelabur asing"],b:0,u:"DPN melanjutkan pembangunan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA pencapaian dasar ekonomi.",p:["Kemiskinan berkurang","Kelas menengah berkembang","Ekonomi negara runtuh","Pelabur lari ke luar negara"],b:[0,1],u:"Kemiskinan berkurang dan kelas menengah berkembang."},
 {j:"pilih",t:"Bandingkan DEB dengan DPN. Apakah perbezaannya?",p:["DPN menekankan pertumbuhan seimbang dan sumber manusia","DEB langsung tidak mempunyai sebarang matlamat","Kedua-duanya sama dalam semua perkara","DPN menghapuskan DEB sepenuhnya dan serta-merta"],b:0,u:"DPN menekankan pertumbuhan seimbang dan sumber manusia."},
 {j:"pilih",t:"Mengapakah pelibatan rakyat penting dalam pembangunan?",p:["Pembangunan lebih berkesan dan adil","Pembangunan menjadi jauh lebih lambat","Rakyat dipinggirkan daripada keputusan","Pemimpin bekerja sendirian tanpa nasihat"],b:0,u:"Pelibatan rakyat menjadikan pembangunan berkesan."},
 {j:"pilih",t:"Apakah kesan penjagaan alam sekitar terhadap kemakmuran?",p:["Kemakmuran kekal untuk generasi akan datang","Kemakmuran musnah dalam masa singkat","Kemiskinan bertambah di seluruh negara","Pembangunan terhenti sepenuhnya"],b:0,u:"Kelestarian menjamin kemakmuran jangka panjang."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada pencapaian dasar yang tidak sempurna?",p:["Dasar perlu dikaji dan diperbaiki","Dasar tidak berguna sama sekali","Dasar patut dihapuskan serta-merta","Dasar tidak boleh diubah selama-lamanya"],b:0,u:"Dasar perlu dikaji dan diperbaiki."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Dasar ekonomi membawa kemakmuran walaupun belum sempurna","Dasar ekonomi gagal sepenuhnya dan tidak berguna","Dasar ekonomi sempurna tanpa sebarang kelemahan","Dasar ekonomi tidak mempunyai sebarang kesan"],b:0,u:"Dasar ekonomi membawa kemakmuran walaupun belum sempurna."}},

{n:5, tempat:"Dewan Penilai Kemakmuran", sk:"14.2.5 · K14.2.6 · K14.2.7 · K14.2.8 · K14.2.9 Menilai kemakmuran untuk kesejahteraan rakyat", lampiran:null,
 kadNama:"Harta Awam", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Harta awam seperti jalan, taman dan sekolah dibina menggunakan wang rakyat dan perlu dijaga bersama.",
 bosKadNama:"Alam Sekitar", bosKadEm:"\u{1F333}", bosKadFakta:"Menjaga kelestarian alam sekitar penting supaya pembangunan tidak merosakkan sumber untuk masa depan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah DEB wajar dilaksanakan selepas 1969?",p:["Mengurangkan jurang dan memulihkan perpaduan","Memecahkan masyarakat kepada kumpulan kecil","Menambah jurang antara kaum dan wilayah","Melemahkan negara daripada dalam"],b:0,u:"DEB mengurangkan jurang dan memulihkan perpaduan."},
 {j:"pilih",t:"Seorang murid berkata, \"Dasar kerajaan tiada kaitan dengan saya.\" Penilaian manakah paling tepat?",p:["Kurang tepat, dasar mempengaruhi kehidupan","Tepat, kerana dasar hanya untuk menteri","Tepat, kerana dasar tidak memberi kesan","Kurang tepat, kerana dasar tidak wujud"],b:0,u:"Dasar mempengaruhi kehidupan rakyat."},
 {j:"pilih",t:"Antara berikut, sikap menghargai harta awam ialah:",p:["Menjaga kemudahan awam","Merosakkan taman permainan","Menconteng dinding bangunan","Membuang sampah merata-rata"],b:0,u:"Menjaga kemudahan awam."},
 {j:"banyak",t:"Pilih DUA cara menjaga kelestarian alam sekitar.",p:["Mengitar semula sisa","Menanam pokok","Membuang sampah ke sungai","Membakar hutan secara terbuka"],b:[0,1],u:"Kitar semula dan menanam pokok."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang DEB?",p:["Banyak berjaya tetapi ada kelemahan","Gagal sepenuhnya tanpa kejayaan langsung","Sempurna dan langsung tiada kelemahan","Tiada kesan terhadap kehidupan rakyat"],b:0,u:"Banyak berjaya tetapi ada kelemahan."},
 {j:"pilih",t:"Mengapakah memahami dasar kerajaan penting kepada rakyat?",p:["Dapat menyertai pembangunan dengan bijak","Dapat menolak pembangunan negara","Dapat mengelak tanggungjawab sebagai rakyat","Dapat menyalahkan orang lain sahaja"],b:0,u:"Pemahaman membolehkan penyertaan bijak."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting?",p:["Pembangunan perlu adil dan lestari","Pembangunan boleh merosakkan alam sekitar","Pembangunan hanya diperlukan di bandar","Pembangunan tidak perlu dirancang rapi"],b:0,u:"Pembangunan perlu adil dan lestari."},
 {j:"pilih",t:"Mengapakah kemakmuran perlu dinikmati semua kaum?",p:["Perpaduan dan keamanan terjamin","Perpecahan antara kaum bertambah","Prasangka dalam masyarakat bertambah","Kemiskinan dalam negara bertambah"],b:0,u:"Perpaduan dan keamanan terjamin."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang strategi membina kemakmuran negara?",p:["Adil, lestari dan melibatkan rakyat","Cukup dengan dasar kerajaan sahaja","Tidak memerlukan penyertaan rakyat","Tidak perlu dikaji semula sama sekali"],b:0,u:"Strategi perlu adil, lestari dan melibatkan rakyat."}},

{n:6, tempat:"Studio Wawasan", sk:"K14.2.6 hingga K14.2.9 Memahami dasar, pelibatan rakyat, harta awam dan alam sekitar", lampiran:null,
 kadNama:"Ekonomi Hijau", kadEm:"\u{1F33F}", kadFakta:"Hari ini Malaysia menggalakkan ekonomi hijau dan tenaga boleh baharu supaya pembangunan tidak merosakkan alam sekitar.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil pengajaran dasar ekonomi lalu untuk menjamin keamanan dan keutuhan bangsa.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu menjaga harta awam. Idea manakah paling berasas?",p:["Kempen menjaga kemudahan sekolah","Membenarkan conteng dinding sekolah","Mengabaikan kerosakan kemudahan awam","Membuang sampah merata-rata di sekolah"],b:0,u:"Kempen memupuk penghargaan harta awam."},
 {j:"pilih",t:"Kelas anda mahu mengurangkan sisa. Iktibar kelestarian yang sesuai ialah:",p:["Kitar semula dan kurangkan guna plastik","Membuang sampah merata di sekitar sekolah","Membakar sampah secara terbuka di padang","Menimbus sampah di tebing sungai"],b:0,u:"Kitar semula dan kurangkan plastik."},
 {j:"banyak",t:"Pilih DUA cara rakyat melibatkan diri dalam pembangunan.",p:["Menyertai gotong-royong","Memberi cadangan membina","Merosakkan projek awam komuniti","Menolak semua perubahan tanpa sebab"],b:[0,1],u:"Gotong-royong dan memberi cadangan membina."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengurangkan jurang ekonomi?",p:["Latihan kemahiran dan peluang kerja","Menutup peluang pekerjaan kepada rakyat","Menghentikan pendidikan di luar bandar","Membiarkan jurang terus melebar"],b:0,u:"Latihan kemahiran dan peluang kerja."},
 {j:"pilih",t:"Seorang rakan berkata, \"Harta awam bukan urusan saya.\" Respons manakah paling rasional?",p:["Ia dibiayai dan dinikmati bersama","Betul, kerana ia urusan kerajaan sahaja","Betul, kerana ia tidak penting","Hanya pekerja kerajaan perlu menjaganya"],b:0,u:"Ia dibiayai dan dinikmati bersama."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan penghargaan terhadap alam sekitar?",p:["Menanam pokok dan menjaga kebersihan","Menebang pokok tanpa kebenaran","Mencemarkan sungai dengan sampah","Membuang sampah merata-rata"],b:0,u:"Menanam pokok dan menjaga kebersihan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menggalakkan penyertaan dalam pembangunan komuniti?",p:["Mesyuarat penduduk dan kerja bersama","Merahsiakan rancangan daripada penduduk","Menghalang penduduk daripada bersuara","Mengabaikan semua cadangan penduduk"],b:0,u:"Mesyuarat dan kerja bersama."},
 {j:"pilih",t:"Mengapakah kemakmuran perlu menjamin keamanan dan keutuhan bangsa?",p:["Rakyat sejahtera cenderung bersatu","Rakyat sejahtera semakin berpecah","Kemakmuran melemahkan keutuhan bangsa","Keamanan tidak berkaitan kemakmuran"],b:0,u:"Rakyat sejahtera cenderung bersatu."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang strategi membina kemakmuran negara dalam menjamin keamanan dan keutuhan bangsa.",
  arahan:"Pilih sekurang-kurangnya DUA fakta (contoh: Dasar Ekonomi Baru, dua matlamat DEB, Dasar Pembangunan Nasional, Wawasan 2020, FELDA dan MARA). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang dasar ekonomi, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti memahami dasar, menghargai harta awam dan menjaga alam sekitar."}}
];

module.exports = {
  id:"s5b8", tingkatan:5, kod:"8.0 Membina Kemakmuran Negara",
  tajuk:"Wawasan 2020",
  subtajuk:"Sejarah Ting. 5 · Bab 8 Membina Kemakmuran Negara",
  spi:SPI["14.2"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang strategi membina kemakmuran negara. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan strategi membina kemakmuran negara berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi maklumat tentang strategi membina kemakmuran negara. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang strategi membina kemakmuran negara. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan strategi membina kemakmuran negara untuk kesejahteraan rakyat. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang strategi membina kemakmuran negara dalam menjamin keamanan dan keutuhan bangsa. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Membina Kemakmuran Negara. Cadangan: ulang hentian pertama sambil membina garis masa dasar ekonomi dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1956", label:"FELDA ditubuhkan"},
     {masa:"1971", label:"Dasar Ekonomi Baru dilancarkan"},
     {masa:"1991", label:"Dasar Pembangunan Nasional"},
     {masa:"2001", label:"Dasar Wawasan Negara"}],
     kapsyen:"Rajah 1 · Dasar membina kemakmuran negara",
     alt:"Garis masa menegak: 1956 FELDA ditubuhkan; 1971 Dasar Ekonomi Baru dilancarkan; 1991 Dasar Pembangunan Nasional; 2001 Dasar Wawasan Negara"},
   p1:petikan(1, "Dasar ekonomi dan hasilnya",
     ["Dasar Ekonomi Baru mengurangkan kemiskinan dengan ketara dan melahirkan kelas menengah bumiputera, walaupun sasaran ekuiti 30 peratus tidak dicapai sepenuhnya. Dasar Pembangunan Nasional kemudian melanjutkan pembangunan dengan tumpuan kepada pertumbuhan seimbang dan sumber manusia.",
      "Pembangunan yang berjaya melibatkan rakyat, menghargai harta awam dan menjaga alam sekitar supaya kemakmuran dapat dinikmati dalam jangka panjang."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
