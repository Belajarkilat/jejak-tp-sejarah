/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 12 Pemasyhuran Kemerdekaan Tanah Melayu.
   Standard Kandungan 11.4, Standard Pembelajaran 11.4.1 hingga 11.4.5 serta K11.4.6 hingga K11.4.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Padang Kota Melaka", sk:"11.4.1 Pengertian kemerdekaan · 11.4.2 Persediaan menyambut kemerdekaan", lampiran:null,
 kadNama:"Padang Pahlawan", kadEm:"\u{1F3DF}\u{FE0F}", kadFakta:"Pada 20 Februari 1956, Tunku Abdul Rahman mengumumkan di Padang Pahlawan, Bandar Hilir, Melaka bahawa kemerdekaan akan dicapai pada 31 Ogos 1957.",
 bosKadNama:"Stadium Merdeka", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Stadium Merdeka dibina khas untuk upacara Pemasyhuran Kemerdekaan dan siap sebelum 31 Ogos 1957.",
 soalan:[
 {j:"pilih",t:"Kemerdekaan bermaksud sesebuah negara:",p:["Bebas memerintah diri sendiri","Dikawal kuasa asing","Dijajah oleh negara lain","Bergantung sepenuhnya kepada asing"],b:0,u:"Kemerdekaan bermaksud bebas daripada penjajahan dan memerintah diri sendiri."},
 {j:"pilih",t:"Pemasyhuran Kemerdekaan Tanah Melayu dilakukan pada:",p:["31 Ogos 1957","16 September 1963","1 Februari 1948","1 April 1946"],b:0,u:"Kemerdekaan diisytiharkan pada 31 Ogos 1957."},
 {j:"pilih",t:"Tempat Tunku mengumumkan tarikh kemerdekaan pada 1956 ialah:",p:["Padang Pahlawan, Melaka","Stadium Merdeka, KL","Istana Negara, KL","Dataran Merdeka, KL"],b:0,u:"Pengumuman dibuat di Padang Pahlawan, Bandar Hilir."},
 {j:"pilih",t:"Stadium yang dibina untuk upacara pemasyhuran ialah:",p:["Stadium Merdeka","Stadium Bukit Jalil","Stadium Shah Alam","Stadium Hang Jebat"],b:0,u:"Stadium Merdeka dibina untuk upacara."},
 {j:"banyak",t:"Pilih DUA persediaan menyambut kemerdekaan.",p:["Pembinaan Stadium Merdeka","Penciptaan bendera dan lagu","Pengisytiharan Darurat","Penubuhan Malayan Union"],b:[0,1],u:"Stadium, bendera dan lagu disiapkan."},
 {j:"pilih",t:"Tunku Abdul Rahman digelar sebagai:",p:["Bapa Kemerdekaan","Bapa Pembangunan","Bapa Pendidikan","Bapa Perpaduan"],b:0,u:"Tunku Abdul Rahman digelar Bapa Kemerdekaan."},
 {j:"pilih",t:"Lagu kebangsaan yang dimainkan semasa pemasyhuran ialah:",p:["Negaraku","Rasa Sayang","Terang Bulan","Selamat Tinggal"],b:0,u:"Negaraku dimainkan semasa upacara."},
 {j:"pilih",t:"Wakil Ratu England yang hadir pada upacara kemerdekaan ialah:",p:["Duke of Gloucester","Sir Henry Gurney","Sir Gerald Templer","Lord Reid"],b:0,u:"Duke of Gloucester mewakili Ratu."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan peristiwa dan maklumatnya yang betul.",p:["Pemasyhuran: 31 Ogos 1957","Pengumuman tarikh: Padang Pahlawan Melaka","Upacara: Stadium Merdeka","Pemasyhuran: 16 September 1963","Upacara: Dataran Merdeka Singapura"],b:[0,1,2],u:"Pemasyhuran 31 Ogos 1957, pengumuman di Melaka dan upacara di Stadium Merdeka."}},

{n:2, tempat:"Bilik Kronologi Merdeka", sk:"11.4.3 · 11.4.4 Detik pemasyhuran dan kesan kemerdekaan", lampiran:"gm1",
 kadNama:"Tujuh Kali Merdeka", kadEm:"\u{1F4E3}", kadFakta:"Tunku Abdul Rahman melaungkan \"Merdeka\" sebanyak tujuh kali di Stadium Merdeka pada 31 Ogos 1957, disambut oleh ribuan hadirin.",
 bosKadNama:"Bendera Baharu", bosKadEm:"\u{1F6A9}", bosKadFakta:"Tepat tengah malam, bendera Union Jack diturunkan dan bendera Persekutuan Tanah Melayu dinaikkan buat pertama kali.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Pilihan Raya Umum Pertama","Rundingan London","Laporan Reid","Pemasyhuran Kemerdekaan"],b:0,u:"Pilihan Raya Umum Pertama pada Julai 1955 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Pemasyhuran Kemerdekaan berlaku?",p:["Ogos 1957","Februari 1957","Februari 1956","Julai 1955"],b:0,u:"Rajah 1 menunjukkan pemasyhuran pada Ogos 1957."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Pilihan Raya Umum Pertama","Rundingan London","Laporan Reid","Pemasyhuran Kemerdekaan"],b:[0,1,2,3],u:"Julai 1955, Januari 1956, Februari 1957 dan Ogos 1957."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Laporan Reid dan Pemasyhuran Kemerdekaan?",p:["6 bulan","11 bulan","13 bulan","2 bulan"],b:0,u:"Februari ke Ogos 1957 ialah 6 bulan."},
 {j:"pilih",t:"Tunku melaungkan \"Merdeka\" sebanyak:",p:["Tujuh kali","Tiga kali","Lima kali","Sepuluh kali"],b:0,u:"Laungan merdeka dibuat tujuh kali."},
 {j:"pilih",t:"Yang di-Pertuan Agong yang pertama ialah:",p:["Tuanku Abdul Rahman","Sultan Ibrahim","Sultan Abu Bakar","Tuanku Syed Sirajuddin"],b:0,u:"Tuanku Abdul Rahman dari Negeri Sembilan ialah Yang di-Pertuan Agong pertama."},
 {j:"pilih",t:"Pada tengah malam 31 Ogos 1957, bendera yang diturunkan ialah:",p:["Union Jack","Bendera Persekutuan","Bendera Jepun","Bendera Siam"],b:0,u:"Union Jack diturunkan."},
 {j:"banyak",t:"Pilih DUA kesan kemerdekaan.",p:["Negara berdaulat","Pentadbiran dipimpin rakyat tempatan","Kembali kepada pentadbiran British","Pentadbiran dipegang Jepun"],b:[0,1],u:"Negara berdaulat dan rakyat tempatan memimpin."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Rundingan London dan Laporan Reid?",p:["13 bulan","6 bulan","19 bulan","2 bulan"],b:0,u:"Januari 1956 ke Februari 1957 ialah 13 bulan."}},

{n:3, tempat:"Stadium Merdeka", sk:"11.4.3 · 11.4.4 · 11.4.5 Membina urutan peristiwa pemasyhuran", lampiran:null,
 kadNama:"Urutan Upacara", kadEm:"\u{1F4CB}", kadFakta:"Upacara bermula dengan ketibaan tetamu, pembacaan Perisytiharan Kemerdekaan, laungan Merdeka, dan penaikan bendera diiringi Negaraku.",
 bosKadNama:"Anggota PBB", bosKadEm:"\u{1F310}", bosKadFakta:"Persekutuan Tanah Melayu menjadi anggota Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada September 1957.",
 soalan:[
 {j:"pilih",t:"Dalam upacara pemasyhuran, perkara pertama selepas Perisytiharan ialah:",p:["Laungan Merdeka","Pengisytiharan Darurat","Perlantikan Gabenor","Penurunan bendera Jalur Gemilang"],b:0,u:"Selepas Perisytiharan, Tunku melaungkan Merdeka."},
 {j:"pilih",t:"Bendera Persekutuan Tanah Melayu dinaikkan diiringi lagu:",p:["Negaraku","Terang Bulan","Rasa Sayang","God Save the Queen"],b:0,u:"Negaraku mengiringi penaikan bendera."},
 {j:"pilih",t:"Dokumen yang dibaca Tunku semasa upacara ialah:",p:["Perisytiharan Kemerdekaan","Perjanjian Pangkor","Perjanjian Bangkok","Persetiaan Malayan Union"],b:0,u:"Tunku membaca Perisytiharan Kemerdekaan."},
 {j:"banyak",t:"Pilih DUA perkara yang berlaku pada hari kemerdekaan.",p:["Laungan Merdeka","Penaikan bendera Persekutuan","Pengisytiharan Darurat","Perlantikan Gabenor British"],b:[0,1],u:"Laungan Merdeka dan penaikan bendera berlaku."},
 {j:"pilih",t:"Persekutuan Tanah Melayu menjadi anggota PBB pada tahun:",p:["1957","1948","1963","1946"],b:0,u:"Persekutuan menyertai PBB pada September 1957."},
 {j:"pilih",t:"Wakil Ratu England dalam upacara penyerahan kuasa ialah:",p:["Duke of Gloucester","Lord Reid","Dato' Onn Jaafar","Chin Peng"],b:0,u:"Duke of Gloucester mewakili Ratu England."},
 {j:"pilih",t:"Pesuruhjaya Tinggi British terakhir ialah:",p:["Sir Donald MacGillivray","Sir Henry Gurney","Sir Edward Gent","Sir Harold MacMichael"],b:0,u:"Sir Donald MacGillivray ialah Pesuruhjaya Tinggi terakhir."},
 {j:"pilih",t:"Perdana Menteri pertama Persekutuan Tanah Melayu ialah:",p:["Tunku Abdul Rahman","Tun Razak","Dato' Onn Jaafar","Tun Dr Ismail"],b:0,u:"Tunku Abdul Rahman ialah Perdana Menteri pertama."}],
 bos:{j:"susun",t:"Susun urutan upacara kemerdekaan dengan betul.",p:["Perisytiharan Kemerdekaan dibaca","Tunku melaungkan Merdeka","Bendera Persekutuan dinaikkan","Lagu Negaraku dimainkan"],b:[0,1,2,3],u:"Perisytiharan dibaca, Merdeka dilaungkan, bendera dinaikkan, Negaraku dimainkan."}},

{n:4, tempat:"Arkib Merdeka", sk:"11.4.4 · 11.4.5 Menganalisis maklumat tentang pemasyhuran", lampiran:"p1",
 kadNama:"Kedaulatan Persekutuan", kadEm:"\u{1F451}", kadFakta:"Prinsip kedaulatan Persekutuan Tanah Melayu bermaksud negara berdaulat penuh, mempunyai kerajaan dan undang-undang sendiri, dan bebas daripada kuasa asing.",
 bosKadNama:"Bersyukur", bosKadEm:"\u{1F64F}", bosKadFakta:"Kemerdekaan ialah nikmat yang wajar disyukuri dan dipelihara oleh semua rakyat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah erti kemerdekaan bagi rakyat?",p:["Bebas menentukan nasib","Terus dikawal British","Bergantung pada Jepun","Dikuasai komunis"],b:0,u:"Petikan menyatakan rakyat bebas menentukan nasib sendiri."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang berlaku kepada bendera pada tengah malam?",p:["Union Jack diturunkan","Kedua-duanya dinaikkan","Kedua-duanya diturunkan","Tiada perubahan"],b:0,u:"Union Jack diturunkan dan bendera Persekutuan dinaikkan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan kemerdekaan terhadap pentadbiran?",p:["Pemimpin tempatan","British kekal memerintah","Jepun kembali memerintah","Komunis memerintah"],b:0,u:"Pemimpin tempatan memegang pentadbiran."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri negara berdaulat.",p:["Mempunyai kerajaan sendiri","Mempunyai undang-undang sendiri","Dikawal oleh kuasa asing sepenuhnya","Tiada pemimpin dan kerajaan"],b:[0,1],u:"Negara berdaulat mempunyai kerajaan dan undang-undang sendiri."},
 {j:"pilih",t:"Bandingkan kemerdekaan 1957 dengan penjajahan sebelumnya. Apakah perbezaannya?",p:["Rakyat memerintah diri sendiri","Rakyat dikawal pegawai British","Rakyat dikuasai Jepun","Rakyat tidak mengundi"],b:0,u:"Kemerdekaan membolehkan rakyat memerintah diri sendiri."},
 {j:"pilih",t:"Mengapakah jati diri penting dalam mengisi kemerdekaan?",p:["Memelihara identiti","Menghapuskan budaya","Menarik penjajah kembali","Memecahkan kaum"],b:0,u:"Jati diri memelihara identiti dan kedaulatan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penyertaan ramai rakyat di Stadium Merdeka?",p:["Rakyat menyokong kemerdekaan","Rakyat membantah kemerdekaan","Rakyat takut kepada British","Rakyat tidak peduli"],b:0,u:"Ramai hadir kerana menyokong kemerdekaan."},
 {j:"pilih",t:"Apakah kesan kemerdekaan terhadap hubungan luar?",p:["Negara berhubung","Hubungan luar ditutup","British menguruskannya","Jepun menguruskannya"],b:0,u:"Negara menjalin hubungan luar sendiri dan menyertai PBB."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Kemerdekaan ialah kedaulatan penuh","Kemerdekaan ialah sekadar upacara","Kemerdekaan tidak mengubah apa-apa","Kemerdekaan ialah milik British"],b:0,u:"Kemerdekaan ialah kedaulatan penuh yang perlu dipelihara."}},

{n:5, tempat:"Dewan Penilai Jati Diri", sk:"11.4.5 · K11.4.6 · K11.4.7 · K11.4.8 · K11.4.9 Menilai peristiwa pemasyhuran dalam membina jati diri", lampiran:null,
 kadNama:"Bangga Merdeka", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Kemerdekaan negara kita unik kerana dicapai melalui rundingan dan permuafakatan, bukan peperangan.",
 bosKadNama:"Bersyukur", bosKadEm:"\u{1F64F}", bosKadFakta:"Bersyukur dengan nikmat kemerdekaan bermaksud menjaga keamanan, perpaduan dan kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah kemerdekaan melalui rundingan wajar dibanggakan?",p:["Dicapai dengan aman","Dicapai dengan peperangan besar","Dicapai oleh penjajah","Dicapai secara kebetulan"],b:0,u:"Rundingan mencapai kemerdekaan dengan aman."},
 {j:"pilih",t:"Seorang murid berkata, \"Kemerdekaan tidak perlu dipelihara.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia perlu dijaga","Tepat, ia kekal sendiri","Tepat, ia tidak penting","Kurang tepat, ia tidak wujud"],b:0,u:"Kemerdekaan perlu dijaga oleh semua rakyat."},
 {j:"pilih",t:"Antara berikut, bersyukur dengan nikmat kemerdekaan ditunjukkan oleh:",p:["Menjaga keamanan","Merosakkan harta awam","Menyebarkan fitnah","Mengabaikan sejarah"],b:0,u:"Menjaga keamanan dan perpaduan tanda bersyukur."},
 {j:"banyak",t:"Pilih DUA cara mengekalkan kedaulatan negara.",p:["Menjaga perpaduan rakyat","Menguasai ilmu dan teknologi","Menyerahkan sumber kepada asing","Mengabaikan pertahanan"],b:[0,1],u:"Perpaduan dan ilmu mengekalkan kedaulatan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kemerdekaan 1957?",p:["Pencapaian besar","Pencapaian tanpa tanggungjawab","Kegagalan sepenuhnya","Tiada makna"],b:0,u:"Kemerdekaan pencapaian besar tetapi tanggungjawab baharu bermula."},
 {j:"pilih",t:"Mengapakah jati diri penting dalam pengisian kemerdekaan?",p:["Kemerdekaan bermakna","Menghapuskan identiti","Menambah pergantungan","Memecahkan rakyat"],b:0,u:"Jati diri menjadikan kemerdekaan bermakna."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada peristiwa pemasyhuran?",p:["Perpaduan melahirkan kemerdekaan","Perpecahan melahirkan kemerdekaan","Kemerdekaan datang tanpa usaha","Penjajah mengurniakan semata-mata"],b:0,u:"Perpaduan melahirkan kemerdekaan."},
 {j:"pilih",t:"Mengapakah rasa bangga akan keunikan kemerdekaan negara perlu dipupuk?",p:["Menguatkan patriotisme","Melemahkan semangat","Memecahkan masyarakat","Menolak sejarah"],b:0,u:"Rasa bangga menguatkan semangat patriotisme."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Pemasyhuran Kemerdekaan Tanah Melayu?",p:["Puncak perjuangan","Peristiwa yang tiada kesan","Hadiah daripada penjajah","Peristiwa yang dilupakan"],b:0,u:"Pemasyhuran ialah puncak perjuangan dan membina jati diri."}},

{n:6, tempat:"Studio Patriotisme", sk:"K11.4.6 hingga K11.4.9 Jati diri, bangga, kedaulatan dan bersyukur", lampiran:null,
 kadNama:"Hari Kebangsaan", kadEm:"\u{1F389}", kadFakta:"Hari Kebangsaan disambut setiap 31 Ogos sebagai mengingati Pemasyhuran Kemerdekaan dan memupuk semangat patriotisme.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan semangat pemasyhuran untuk memupuk cinta akan negara dalam kalangan remaja.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu menyambut Hari Kebangsaan secara bermakna. Idea manakah paling berasas?",p:["Pameran dan sajak patriotik","Menghapuskan sambutan","Mengejek lagu negara","Melarang pemakaian bendera"],b:0,u:"Pameran dan sajak memupuk patriotisme."},
 {j:"pilih",t:"Kelas anda mahu menunjukkan bersyukur atas kemerdekaan. Iktibar yang sesuai ialah:",p:["Menjaga kebersihan","Merosakkan kemudahan","Bergaduh antara kaum","Mengabaikan peraturan"],b:0,u:"Menjaga kebersihan dan perpaduan tanda bersyukur."},
 {j:"banyak",t:"Pilih DUA cara membina jati diri sebagai warganegara.",p:["Mempelajari sejarah negara","Menghormati lambang negara","Menyebarkan fitnah","Mengabaikan undang-undang"],b:[0,1],u:"Belajar sejarah dan menghormati lambang negara."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memelihara Stadium Merdeka sebagai warisan?",p:["Menjadikannya tapak warisan","Merobohkannya","Membiarkannya terbiar","Menjualnya"],b:0,u:"Pemuliharaan memelihara warisan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Hari Kebangsaan sekadar cuti.\" Respons manakah paling rasional?",p:["Ia mengingatkan perjuangan","Betul, ia hanya cuti","Betul, ia tiada makna","Ia untuk pelancong sahaja"],b:0,u:"Hari Kebangsaan mengingatkan perjuangan kemerdekaan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan semangat patriotisme dalam kehidupan harian?",p:["Menyanyikan Negaraku","Menyanyikan lagu ejekan","Mengabaikan perhimpunan","Merosakkan bendera"],b:0,u:"Menyanyi Negaraku dengan hormat menunjukkan patriotisme."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mengabadikan detik pemasyhuran?",p:["Dokumentari dan pameran","Membuang rakaman lama dengan sengaja","Menyembunyikan dokumen penting","Mengubah fakta sejarah"],b:0,u:"Dokumentari dan pameran dalam talian mengabadikan detik itu."},
 {j:"pilih",t:"Mengapakah rakyat perlu bersama-sama mengekalkan kedaulatan negara?",p:["Kemerdekaan ialah milik bersama","Hanya pemimpin bertanggungjawab","Kedaulatan tidak penting","Rakyat tidak boleh membantu"],b:0,u:"Kemerdekaan ialah milik bersama."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang semangat patriotisme dalam peristiwa Pemasyhuran Kemerdekaan Tanah Melayu.",
  arahan:"Pilih sekurang-kurangnya DUA fakta tentang pemasyhuran (contoh: 31 Ogos 1957, Stadium Merdeka, laungan Merdeka tujuh kali, penaikan bendera, Tunku Abdul Rahman). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang pemasyhuran, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti jati diri, bangga akan kemerdekaan, kedaulatan dan bersyukur."}}
];

module.exports = {
  id:"s4b12", tingkatan:4, kod:"12.0 Pemasyhuran Kemerdekaan Tanah Melayu",
  tajuk:"Laungan Merdeka",
  subtajuk:"Sejarah Ting. 4 · Bab 12 Pemasyhuran Kemerdekaan Tanah Melayu",
  spi:SPI["11.4"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang Pemasyhuran Kemerdekaan Tanah Melayu. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan Pemasyhuran Kemerdekaan berserta contoh. Perlu lebih latihan membina urutan peristiwa sebelum bergerak ke TP3.",
   3:"{n} boleh membina urutan peristiwa Pemasyhuran Kemerdekaan. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang Pemasyhuran Kemerdekaan. Seterusnya latih membuat penilaian.",
   5:"{n} dapat membuat penilaian tentang peristiwa Pemasyhuran Kemerdekaan dalam membina jati diri. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang semangat patriotisme dalam peristiwa Pemasyhuran Kemerdekaan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pemasyhuran Kemerdekaan Tanah Melayu. Cadangan: ulang hentian pertama sambil membina urutan upacara 31 Ogos 1957 dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Julai 1955", label:"Pilihan Raya Umum Pertama"},
     {masa:"Januari 1956", label:"Rundingan London"},
     {masa:"Februari 1957", label:"Laporan Reid disiapkan"},
     {masa:"Ogos 1957", label:"Pemasyhuran Kemerdekaan"}],
     kapsyen:"Rajah 1 · Jalan menuju kemerdekaan",
     alt:"Garis masa menegak: Julai 1955 Pilihan Raya Umum Pertama; Januari 1956 Rundingan London; Februari 1957 Laporan Reid disiapkan; Ogos 1957 Pemasyhuran Kemerdekaan"},
   p1:petikan(1, "Detik kemerdekaan",
     ["Pada tengah malam 31 Ogos 1957, bendera Union Jack diturunkan dan bendera Persekutuan Tanah Melayu dinaikkan di Stadium Merdeka. Tunku Abdul Rahman melaungkan \"Merdeka\" sebanyak tujuh kali, disambut oleh ribuan hadirin.",
      "Kemerdekaan bermaksud rakyat bebas menentukan nasib sendiri. Negara berdaulat mempunyai kerajaan dan undang-undang sendiri, dan menyertai Pertubuhan Bangsa-Bangsa Bersatu."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
