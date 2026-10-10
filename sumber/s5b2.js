/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 2 Perlembagaan Persekutuan.
   Standard Kandungan 12.2, Standard Pembelajaran 12.2.1 hingga 12.2.4 serta K12.2.5 hingga K12.2.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Perlembagaan", sk:"12.2.1 Latar belakang sejarah perlembagaan · 12.2.2 Penggubalan", lampiran:null,
 kadNama:"Undang-undang Tertinggi", kadEm:"\u{1F4DC}", kadFakta:"Perlembagaan Persekutuan ialah undang-undang tertinggi negara. Undang-undang lain yang bercanggah dengannya tidak sah.",
 bosKadNama:"Suruhanjaya Cobbold", bosKadEm:"\u{1F4D1}", bosKadFakta:"Suruhanjaya Cobbold meninjau pendapat penduduk Sabah dan Sarawak pada 1962 tentang cadangan Pembentukan Malaysia.",
 soalan:[
 {j:"pilih",t:"Undang-undang tertinggi negara ialah:",p:["Perlembagaan Persekutuan","Kanun Keseksaan","Akta Pelajaran","Undang-undang Laut"],b:0,u:"Perlembagaan Persekutuan ialah undang-undang tertinggi."},
 {j:"pilih",t:"Suruhanjaya yang merangka Perlembagaan 1957 ialah:",p:["Suruhanjaya Reid","Suruhanjaya Cobbold","Suruhanjaya Barnes","Suruhanjaya Briggs"],b:0,u:"Suruhanjaya Reid merangka Perlembagaan 1957."},
 {j:"pilih",t:"Suruhanjaya yang meninjau pendapat Sabah dan Sarawak pada 1962 ialah:",p:["Suruhanjaya Cobbold","Suruhanjaya Reid","Suruhanjaya Razak","Suruhanjaya Templer"],b:0,u:"Suruhanjaya Cobbold meninjau pendapat di Borneo."},
 {j:"pilih",t:"Perlembagaan Persekutuan Tanah Melayu berkuat kuasa pada tahun:",p:["1957","1948","1963","1946"],b:0,u:"Perlembagaan berkuat kuasa pada 1957."},
 {j:"banyak",t:"Pilih DUA suruhanjaya yang terlibat dalam sejarah perlembagaan negara.",p:["Suruhanjaya Reid","Suruhanjaya Cobbold","Suruhanjaya Gurney","Suruhanjaya Templer"],b:[0,1],u:"Reid dan Cobbold terlibat dalam penggubalan dan pindaan."},
 {j:"pilih",t:"Jawatankuasa yang menggubal butiran Pembentukan Malaysia ialah:",p:["Jawatankuasa Antara Kerajaan","Jawatankuasa Hubungan Antara Kaum","Jawatankuasa Kerja","Jawatankuasa Pilihan Raya"],b:0,u:"Jawatankuasa Antara Kerajaan (IGC) menggubal butiran."},
 {j:"pilih",t:"Perlembagaan Persekutuan ditulis dalam bahasa:",p:["Melayu dan Inggeris","Jepun","Siam","Belanda"],b:0,u:"Teks Perlembagaan wujud dalam bahasa Melayu dan Inggeris."},
 {j:"pilih",t:"Perlembagaan 1957 digubal bagi sebuah negara yang:",p:["Baharu merdeka","Dijajah Jepun","Dikuasai komunis","Dikuasai Siam"],b:0,u:"Perlembagaan digubal untuk Persekutuan yang merdeka."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan suruhanjaya dan tugasnya yang betul.",p:["Suruhanjaya Reid: merangka perlembagaan 1957","Suruhanjaya Cobbold: meninjau pendapat Borneo","Jawatankuasa Antara Kerajaan: butiran Malaysia","Suruhanjaya Reid: menamatkan Darurat","Suruhanjaya Cobbold: merangka Rukun Negara"],b:[0,1,2],u:"Reid merangka perlembagaan 1957, Cobbold meninjau pendapat Borneo, dan IGC menggubal butiran Malaysia."}},

{n:2, tempat:"Bilik Kronologi Perlembagaan", sk:"12.2.2 · 12.2.3 · 12.2.4 Penggubalan, ciri dan pindaan", lampiran:"gm1",
 kadNama:"Pindaan 1963", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Perlembagaan dipinda pada 1963 untuk mengambil kira Sabah, Sarawak dan Singapura dalam Persekutuan Malaysia.",
 bosKadNama:"Pindaan 1965", bosKadEm:"\u{1F5C3}\u{FE0F}", bosKadFakta:"Pindaan 1965 dibuat selepas Singapura keluar dari Malaysia pada 9 Ogos 1965.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Rundingan London","Perlembagaan berkuat kuasa","Pindaan Perlembagaan 1963","Pindaan Perlembagaan 1965"],b:0,u:"Rundingan London 1956 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Perlembagaan dipinda berikutan Singapura keluar?",p:["1965","1963","1957","1956"],b:0,u:"Rajah 1 menunjukkan pindaan 1965."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Rundingan London","Perlembagaan berkuat kuasa","Pindaan Perlembagaan 1963","Pindaan Perlembagaan 1965"],b:[0,1,2,3],u:"1956, 1957, 1963 dan 1965."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Perlembagaan berkuat kuasa dan pindaan 1965?",p:["8 tahun","6 tahun","9 tahun","2 tahun"],b:0,u:"1965 tolak 1957 ialah 8 tahun."},
 {j:"pilih",t:"Agama Persekutuan menurut Perkara 3 ialah:",p:["Islam","Buddha","Hindu","Kristian"],b:0,u:"Perkara 3 menyatakan Islam agama Persekutuan."},
 {j:"pilih",t:"Bahasa kebangsaan menurut Perkara 152 ialah bahasa:",p:["Melayu","Inggeris","Cina","Tamil"],b:0,u:"Perkara 152 menyatakan bahasa Melayu bahasa kebangsaan."},
 {j:"pilih",t:"Perkara yang melindungi kedudukan istimewa orang Melayu dan bumiputera ialah:",p:["Perkara 153","Perkara 3","Perkara 152","Perkara 32"],b:0,u:"Perkara 153 melindungi kedudukan istimewa."},
 {j:"banyak",t:"Pilih DUA ciri utama Perlembagaan Persekutuan.",p:["Undang-undang tertinggi negara","Menjamin hak asasi rakyat","Menghapuskan raja","Memberi kuasa penuh kepada Gabenor"],b:[0,1],u:"Ia undang-undang tertinggi dan menjamin hak asasi."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Rundingan London dan pindaan 1963?",p:["7 tahun","1 tahun","9 tahun","6 tahun"],b:0,u:"1963 tolak 1956 ialah 7 tahun."}},

{n:3, tempat:"Balai Perkara", sk:"12.2.3 · 12.2.4 Membuat kronologi maklumat berkaitan perlembagaan", lampiran:null,
 kadNama:"Hak Asasi", kadEm:"\u{1F5FD}", kadFakta:"Bahagian II Perlembagaan menjamin hak asasi seperti kebebasan diri, kebebasan bersuara dan kebebasan beragama.",
 bosKadNama:"Kontrak Sosial", bosKadEm:"\u{1F91D}", bosKadFakta:"Kontrak sosial ialah persetujuan antara kaum semasa merangka perlembagaan tentang kerakyatan, kedudukan Melayu dan hak kaum lain.",
 soalan:[
 {j:"pilih",t:"Seorang rakyat bebas menganut agama pilihannya. Ini hak yang dijamin oleh:",p:["Perlembagaan Persekutuan","Peraturan sekolah","Arahan penjajah","Adat setempat"],b:0,u:"Kebebasan beragama dijamin oleh Perlembagaan."},
 {j:"pilih",t:"Sabah dan Sarawak menjadi sebahagian Malaysia. Perlembagaan perlu:",p:["Dipinda","Dimansuhkan","Diabaikan","Diserahkan kepada asing"],b:0,u:"Perlembagaan dipinda pada 1963."},
 {j:"pilih",t:"Singapura keluar daripada Malaysia. Perlembagaan sekali lagi:",p:["Dipinda pada 1965","Dimansuhkan pada 1965","Diabaikan pada 1965","Digantikan pada 1965"],b:0,u:"Pindaan dibuat pada 1965."},
 {j:"banyak",t:"Pilih DUA contoh hak asasi yang dijamin.",p:["Kebebasan bersuara","Kebebasan beragama","Hak menindas kaum lain","Hak merosakkan harta awam"],b:[0,1],u:"Kebebasan bersuara dan beragama dijamin."},
 {j:"pilih",t:"Kerakyatan yang diperluas kepada bukan Melayu dikaitkan dengan:",p:["Kontrak sosial","Malayan Union","Rancangan Briggs","Dasar Nipponisasi"],b:0,u:"Kontrak sosial memperluas kerakyatan."},
 {j:"pilih",t:"Murid menghormati Perkara 152. Ini bermaksud menghormati:",p:["Bahasa kebangsaan","Lagu kebangsaan negara","Hari Kebangsaan tahunan","Bendera dan lambang negara"],b:0,u:"Perkara 152 ialah bahasa kebangsaan."},
 {j:"pilih",t:"Pindaan perlembagaan memerlukan sokongan:",p:["Dua pertiga Ahli Parlimen","Satu orang menteri","Majlis perbandaran","Pejabat tanah"],b:0,u:"Pindaan biasanya memerlukan dua pertiga Ahli Parlimen."},
 {j:"pilih",t:"Perlembagaan menetapkan Malaysia sebagai negara:",p:["Persekutuan","Republik","Kesatuan unitari","Jajahan"],b:0,u:"Malaysia ialah sebuah persekutuan."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menunjukkan perkembangan perlembagaan dengan betul?",p:["Perlembagaan 1957, pindaan 1963, pindaan 1965","Pindaan 1965, pindaan 1963, Perlembagaan 1957","Pindaan 1963, Perlembagaan 1957, pindaan 1965","Perlembagaan 1957, pindaan 1965, pindaan 1963"],b:0,u:"1957, kemudian pindaan 1963, kemudian pindaan 1965."}},

{n:4, tempat:"Arkib Perlembagaan", sk:"12.2.4 Mencerakinkan maklumat berkaitan Perlembagaan Persekutuan", lampiran:"p1",
 kadNama:"Simbol Kedaulatan", kadEm:"\u{1F451}", kadFakta:"Perlembagaan melambangkan kedaulatan kerana ia dibuat oleh rakyat dan pemimpin negara, bukan dikenakan oleh kuasa luar.",
 bosKadNama:"Keluhuran", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Prinsip keluhuran perlembagaan bermaksud perlembagaan ialah undang-undang tertinggi yang dipatuhi semua.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah perlembagaan menjadi simbol kedaulatan?",p:["Dibuat oleh pemimpin","Dikenakan oleh British","Disalin dari negara jiran","Ditulis oleh penjajah"],b:0,u:"Petikan menyatakan perlembagaan digubal oleh rakyat dan pemimpin negara."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah fungsi perlembagaan?",p:["Menetapkan kuasa","Menetapkan harga barang","Menetapkan cuaca","Menetapkan makanan"],b:0,u:"Perlembagaan menetapkan kuasa kerajaan dan hak rakyat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan pindaan perlembagaan 1963?",p:["Sabah, Sarawak menyertai","Singapura keluar Malaysia","Darurat tamat","Rukun Negara diisytiharkan"],b:0,u:"Pindaan 1963 membolehkan penyertaan Sabah dan Sarawak."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA sebab perlembagaan perlu dihormati.",p:["Menjamin keadilan","Memelihara perpaduan","Melemahkan rakyat","Menghalang pembangunan"],b:[0,1],u:"Perlembagaan menjamin keadilan dan perpaduan."},
 {j:"pilih",t:"Bandingkan Perlembagaan 1957 dengan pindaan 1963. Apakah perbezaannya?",p:["1963 melibatkan wilayah baharu","1963 menghapuskan raja","1963 menamatkan perlembagaan","Kedua-duanya sama"],b:0,u:"Pindaan 1963 mengambil kira wilayah baharu."},
 {j:"pilih",t:"Mengapakah mematuhi undang-undang penting dalam kehidupan?",p:["Keamanan dan keadilan","Hak terabai","Kuasa disalahgunakan","Masyarakat berpecah"],b:0,u:"Mematuhi undang-undang menjamin keamanan dan keadilan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada pindaan-pindaan perlembagaan?",p:["Ia boleh disesuaikan","Ia tidak boleh diubah","Ia sudah dimansuhkan","Ia dibuat oleh asing"],b:0,u:"Perlembagaan boleh dipinda mengikut keperluan dengan prosedur."},
 {j:"pilih",t:"Apakah kesan penghormatan terhadap perlembagaan kepada kestabilan?",p:["Negara lebih stabil","Negara kurang stabil","Rakyat berpecah","Undang-undang diabaikan"],b:0,u:"Penghormatan terhadap perlembagaan menjamin kestabilan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Simbol kedaulatan yang dihormati","Perlembagaan ialah dokumen penjajah","Perlembagaan tidak boleh dipinda","Perlembagaan tidak penting"],b:0,u:"Perlembagaan ialah simbol kedaulatan yang perlu dihormati."}},

{n:5, tempat:"Dewan Penilai Perlembagaan", sk:"12.2.4 · K12.2.5 · K12.2.6 · K12.2.7 · K12.2.8 Menjustifikasikan Perlembagaan sebagai simbol kedaulatan", lampiran:null,
 kadNama:"Semangat Perlembagaan", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Menjiwai semangat perlembagaan bermaksud menghayati nilai keadilan, perpaduan dan hormat-menghormati yang terkandung di dalamnya.",
 bosKadNama:"Tanggungjawab Rakyat", bosKadEm:"\u{1F4CC}", bosKadFakta:"Rakyat bertanggungjawab mematuhi, mempertahankan dan memahami perlembagaan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah perlembagaan wajar didaulatkan?",p:["Menjamin keadilan","Menambah kuasa asing","Mengasingkan kaum","Menyekat kemajuan"],b:0,u:"Perlembagaan menjamin keadilan dan kestabilan."},
 {j:"pilih",t:"Seorang murid berkata, \"Perlembagaan hanya untuk peguam.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia melindungi","Tepat, ia hanya untuk peguam","Tepat, rakyat tidak terlibat","Kurang tepat, ia tidak wujud"],b:0,u:"Perlembagaan melindungi semua rakyat."},
 {j:"pilih",t:"Antara berikut, sikap menjunjung perlembagaan ialah:",p:["Mematuhi undang-undang","Melanggar peraturan","Mengejek perlembagaan","Menyebarkan fitnah"],b:0,u:"Patuh undang-undang menjunjung perlembagaan."},
 {j:"banyak",t:"Pilih DUA tanggungjawab rakyat terhadap perlembagaan.",p:["Memahami isi perlembagaan","Mempertahankan perlembagaan","Mengubahnya sesuka hati","Menolak tanggungjawab"],b:[0,1],u:"Memahami dan mempertahankan perlembagaan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kontrak sosial dalam perlembagaan?",p:["Kompromi yang menjaga kaum","Merugikan semua kaum","Menguntungkan satu kaum","Tidak bernilai"],b:0,u:"Kontrak sosial ialah kompromi yang perlu dihayati."},
 {j:"pilih",t:"Mengapakah memahami perlembagaan penting kepada perpaduan?",p:["Hak difahami bersama","Hak dilupakan","Tanggungjawab dielakkan","Kaum disisihkan"],b:0,u:"Pemahaman bersama memupuk perpaduan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada sejarah perlembagaan?",p:["Rundingan menghasilkan persetujuan kekal","Paksaan menghasilkan persetujuan kekal","Perpecahan menghasilkan persetujuan","Keputusan sepihak lebih baik"],b:0,u:"Rundingan menghasilkan persetujuan yang kekal."},
 {j:"pilih",t:"Mengapakah semangat perlembagaan perlu dijiwai, bukan sekadar dihafal?",p:["Nilai diamalkan","Hafalan menjamin kestabilan","Amalan tidak diperlukan","Nilai boleh diabaikan"],b:0,u:"Semangat perlembagaan perlu diamalkan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Perlembagaan Persekutuan?",p:["Simbol kedaulatan","Dokumen sejarah tanpa kesan","Alat satu kaum","Dokumen penjajah"],b:0,u:"Perlembagaan ialah simbol kedaulatan yang melindungi semua rakyat."}},

{n:6, tempat:"Studio Semangat Perlembagaan", sk:"K12.2.5 hingga K12.2.8 Mendaulatkan perlembagaan, mematuhi undang-undang dan menjiwai semangat", lampiran:null,
 kadNama:"Rukun Negara", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Keluhuran Perlembagaan ialah prinsip ketiga Rukun Negara, yang dibaca dalam perhimpunan sekolah.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan sejarah perlembagaan untuk memupuk kesedaran undang-undang.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu murid menghayati perlembagaan. Idea manakah paling berasas?",p:["Pameran dan kuiz tentang perlembagaan","Menghapuskan mata pelajaran sivik","Melarang soalan tentang undang-undang","Mengejek perlembagaan"],b:0,u:"Pameran dan kuiz memperkenalkan perlembagaan."},
 {j:"pilih",t:"Dua murid berselisih kerana hak bersuara. Iktibar perlembagaan yang sesuai ialah:",p:["Hak bersuara disertai tanggungjawab","Hak bersuara tidak bersempadan","Hak bersuara dihapuskan","Hak bersuara hanya untuk satu pihak"],b:0,u:"Hak disertai tanggungjawab."},
 {j:"banyak",t:"Pilih DUA cara menghayati semangat perlembagaan.",p:["Menghormati hak orang lain","Mematuhi peraturan negara","Mengabaikan undang-undang","Menghina simbol negara"],b:[0,1],u:"Hormat hak orang lain dan patuh peraturan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengajar perlembagaan kepada rakan sebaya?",p:["Permainan peranan Suruhanjaya Reid","Menghafal tanpa faham","Menyalin nota semata-mata","Mengabaikan perlembagaan"],b:0,u:"Permainan peranan menjelaskan proses penggubalan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pindaan perlembagaan tidak perlu diketahui.\" Respons manakah paling rasional?",p:["Ia menunjukkan perkembangan","Betul, ia tidak penting","Betul, ia membosankan","Hanya menteri perlu tahu"],b:0,u:"Pindaan menunjukkan perlembagaan menyesuaikan diri."},
 {j:"pilih",t:"Bagaimanakah murid mendaulatkan perlembagaan dalam kehidupan harian?",p:["Menghormati undang-undang","Melanggar peraturan sekolah","Menyebar fitnah","Merosakkan harta awam"],b:0,u:"Menghormati undang-undang dan Rukun Negara."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memelihara salinan bersejarah perlembagaan?",p:["Mendigitalkan dan memamerkannya","Menyimpannya tanpa dijaga","Membuang salinan lama","Mengubah isinya"],b:0,u:"Pendigitalan memelihara dan memudahkan akses."},
 {j:"pilih",t:"Mengapakah hak yang dijamin perlembagaan perlu disertai tanggungjawab?",p:["Supaya hak orang lain turut dihormati","Supaya hak dihadkan kepada pemimpin","Supaya tanggungjawab dilupakan","Supaya hak orang lain diabaikan"],b:0,u:"Hak disertai tanggungjawab supaya hak orang lain turut dihormati."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menghayati semangat Perlembagaan Persekutuan dalam kalangan remaja.",
  arahan:"Pilih sekurang-kurangnya DUA fakta tentang perlembagaan (contoh: Suruhanjaya Reid, pindaan 1963 dan 1965, hak asasi, kontrak sosial, keluhuran perlembagaan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang perlembagaan, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti mendaulatkan perlembagaan, mematuhi undang-undang dan menjiwai semangatnya."}}
];

module.exports = {
  id:"s5b2", tingkatan:5, kod:"2.0 Perlembagaan Persekutuan",
  tajuk:"Dokumen Tertinggi",
  subtajuk:"Sejarah Ting. 5 · Bab 2 Perlembagaan Persekutuan",
  spi:SPI["12.2"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang Perlembagaan Persekutuan. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan Perlembagaan Persekutuan berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi maklumat tentang Perlembagaan Persekutuan. Galakkan mencerakinkan maklumat.",
   4:"{n} mampu mencerakinkan maklumat tentang Perlembagaan Persekutuan. Seterusnya latih menjustifikasikan kepentingannya.",
   5:"{n} dapat menjustifikasikan kepentingan Perlembagaan Persekutuan sebagai simbol kedaulatan negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea untuk menghayati semangat Perlembagaan Persekutuan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Perlembagaan Persekutuan. Cadangan: ulang hentian pertama sambil membina garis masa perlembagaan dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1956", label:"Rundingan London"},
     {masa:"1957", label:"Perlembagaan berkuat kuasa"},
     {masa:"1963", label:"Pindaan Perlembagaan 1963"},
     {masa:"1965", label:"Pindaan Perlembagaan 1965"}],
     kapsyen:"Rajah 1 · Sejarah Perlembagaan Persekutuan",
     alt:"Garis masa menegak: 1956 Rundingan London; 1957 Perlembagaan berkuat kuasa; 1963 Pindaan Perlembagaan 1963; 1965 Pindaan Perlembagaan 1965"},
   p1:petikan(1, "Perlembagaan sebagai simbol kedaulatan",
     ["Perlembagaan Persekutuan menetapkan kuasa kerajaan dan hak rakyat. Ia digubal oleh pemimpin dan rakyat negara sendiri, bukan dikenakan oleh kuasa luar, lalu menjadi simbol kedaulatan.",
      "Perlembagaan dipinda pada 1963 apabila Sabah dan Sarawak menyertai Malaysia, dan pada 1965 selepas Singapura keluar. Mematuhi perlembagaan menjamin keadilan dan kestabilan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
