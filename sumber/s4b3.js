/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 3 Nasionalisme di Negara Kita.
   Standard Kandungan 9.3, Standard Pembelajaran 9.3.1 hingga 9.3.4 serta K9.3.5 hingga K9.3.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pejabat Akhbar", sk:"9.3.1 Latar belakang kesedaran · 9.3.2 Faktor kemunculan", lampiran:null,
 kadNama:"Al-Imam", kadEm:"\u{1F4F0}", kadFakta:"Akhbar Al-Imam diterbitkan di Singapura pada 1906 oleh Kaum Muda. Ia menyeru orang Melayu bangkit mengejar ilmu dan kemajuan.",
 bosKadNama:"Maktab Sultan Idris", bosKadEm:"\u{1F3EB}", bosKadFakta:"Maktab Perguruan Sultan Idris (SITC) ditubuhkan pada 1922 di Tanjung Malim dan melahirkan guru Melayu yang sedar akan bangsa.",
 soalan:[
 {j:"pilih",t:"Akhbar Kaum Muda yang diterbitkan pada tahun 1906 ialah:",p:["Al-Imam","Utusan Melayu","Warta Malaya","Majlis"],b:0,u:"Al-Imam diterbitkan pada 1906 untuk memajukan orang Melayu."},
 {j:"pilih",t:"Maktab Perguruan Sultan Idris (SITC) ditubuhkan pada tahun:",p:["1922","1906","1938","1957"],b:0,u:"SITC ditubuhkan pada 1922 di Tanjung Malim."},
 {j:"pilih",t:"Kesatuan Melayu Muda (KMM) ditubuhkan pada tahun:",p:["1938","1926","1906","1948"],b:0,u:"KMM ditubuhkan pada 1938 oleh Ibrahim Yaakob."},
 {j:"pilih",t:"Pemimpin Kesatuan Melayu Muda ialah:",p:["Ibrahim Yaakob","Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Razak"],b:0,u:"Ibrahim Yaakob memimpin KMM."},
 {j:"banyak",t:"Pilih DUA faktor kemunculan nasionalisme di negara kita.",p:["Perkembangan pendidikan","Penerbitan akhbar","Penurunan penduduk","Kemudahan pengangkutan awam"],b:[0,1],u:"Pendidikan dan akhbar menyedarkan masyarakat."},
 {j:"pilih",t:"Akhbar Melayu yang diterbitkan pada tahun 1939 dan menyuarakan kepentingan Melayu ialah:",p:["Utusan Melayu","Al-Imam","Jawi Peranakan","Chahaya Pulau Pinang"],b:0,u:"Utusan Melayu diasaskan pada 1939."},
 {j:"pilih",t:"Gerakan yang mahukan pembaharuan agama dan pendidikan dikenali sebagai:",p:["Kaum Muda","Kaum Tua","Kaum Tani","Kaum Pedagang"],b:0,u:"Kaum Muda memperjuangkan pembaharuan."},
 {j:"pilih",t:"Pertubuhan Melayu yang ditubuhkan di Singapura pada 1926 ialah:",p:["Kesatuan Melayu Singapura","Kesatuan Melayu Muda","Persatuan Melayu Pulau","Pertubuhan Pembela Tanah Air"],b:0,u:"Kesatuan Melayu Singapura ditubuhkan pada 1926."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan penerbitan atau pertubuhan dan tahun yang betul.",p:["Al-Imam: 1906","SITC: 1922","Kesatuan Melayu Singapura: 1926","KMM: 1938","Utusan Melayu: 1906"],b:[0,1,2,3],u:"Al-Imam 1906, SITC 1922, Kesatuan Melayu Singapura 1926 dan KMM 1938. Utusan Melayu 1939."}},

{n:2, tempat:"Bilik Kronologi Tanah Air", sk:"9.3.2 · 9.3.3 Perkembangan nasionalisme", lampiran:"gm1",
 kadNama:"Sahabat Pena", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Persatuan Sahabat Pena Malaya ditubuhkan pada 1934 untuk menggalakkan penulisan dan hubungan antara orang Melayu.",
 bosKadNama:"Zaaba", bosKadEm:"\u{1F4DA}", bosKadFakta:"Pendeta Za'ba ialah tokoh bahasa dan persuratan Melayu yang memajukan pemikiran masyarakat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Al-Imam diterbitkan","SITC ditubuhkan","Kesatuan Melayu Singapura ditubuhkan","KMM ditubuhkan"],b:0,u:"Al-Imam 1906 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah KMM ditubuhkan?",p:["1938","1926","1922","1906"],b:0,u:"Rajah 1 menunjukkan KMM ditubuhkan pada 1938."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Al-Imam diterbitkan","SITC ditubuhkan","Kesatuan Melayu Singapura ditubuhkan","KMM ditubuhkan"],b:[0,1,2,3],u:"1906, 1922, 1926 dan 1938."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara SITC dan KMM?",p:["16 tahun","12 tahun","32 tahun","4 tahun"],b:0,u:"1938 tolak 1922 ialah 16 tahun."},
 {j:"pilih",t:"Gerakan Kaum Muda dipimpin oleh tokoh seperti:",p:["Syed al-Hadi","Dato' Onn Jaafar","Tunku Abdul Rahman","Tun Dr Ismail"],b:0,u:"Syed Sheikh al-Hadi dan Sheikh Tahir Jalaluddin memimpin Kaum Muda."},
 {j:"pilih",t:"Perjuangan KMM berkaitan dengan cita-cita:",p:["Penyatuan Melayu dan Indonesia","Penyatuan Tanah Melayu dan China","Penyatuan Tanah Melayu dan Eropah","Penyatuan Tanah Melayu dan India"],b:0,u:"KMM mahukan penyatuan Melayu Raya bersama Indonesia."},
 {j:"pilih",t:"Pendeta yang memajukan bahasa dan persuratan Melayu ialah:",p:["Za'ba","Ibrahim Yaakob","Sukarno","Garibaldi"],b:0,u:"Pendeta Za'ba ialah tokoh bahasa Melayu."},
 {j:"banyak",t:"Pilih DUA kegiatan yang mengembangkan kesedaran nasionalisme.",p:["Penerbitan akhbar","Penubuhan persatuan","Pembinaan lombong baharu","Pembukaan ladang getah"],b:[0,1],u:"Akhbar dan persatuan mengembangkan kesedaran."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Al-Imam dan KMM?",p:["32 tahun","16 tahun","20 tahun","4 tahun"],b:0,u:"1938 tolak 1906 ialah 32 tahun."}},

{n:3, tempat:"Balai Persatuan", sk:"9.3.3 · 9.3.4 Membina urutan peristiwa nasionalisme", lampiran:null,
 kadNama:"Kesedaran Pelbagai Kaum", kadEm:"\u{1F465}", kadFakta:"Nasionalisme di negara kita juga muncul dalam kalangan Cina melalui Kuomintang dan dalam kalangan India melalui persatuan kebangsaan, selain nasionalisme Melayu.",
 bosKadNama:"Pengaruh Luar", bosKadEm:"\u{1F310}", bosKadFakta:"Revolusi Turki 1908 dan kemenangan Jepun 1905 menaikkan semangat orang Melayu yang membaca akhbar.",
 soalan:[
 {j:"pilih",t:"Seorang guru lulusan SITC mengajar murid cintakan bahasa Melayu. Ini kesan:",p:["Pendidikan terhadap kesedaran","Cukai terhadap petani kampung","Perdagangan terhadap pelabuhan besar","Pelombongan terhadap bandar lama"],b:0,u:"Pendidikan seperti SITC meningkatkan kesedaran bangsa."},
 {j:"pilih",t:"Seorang pembaca mendapat tahu tentang kemajuan Jepun melalui akhbar. Peranan akhbar ialah:",p:["Menyebarkan idea","Menjual rempah","Mengutip cukai","Menghalang pelajaran"],b:0,u:"Akhbar menyebarkan maklumat dan idea baharu."},
 {j:"pilih",t:"Sebuah persatuan Melayu menganjurkan ceramah tentang hak orang Melayu. Tujuan utamanya:",p:["Menyedarkan rakyat","Menambah cukai","Mengasingkan kaum","Menghalang perniagaan"],b:0,u:"Persatuan menyedarkan masyarakat tentang hak dan kemajuan."},
 {j:"banyak",t:"Pilih DUA kesan penubuhan persatuan Melayu.",p:["Kesedaran politik meningkat","Semangat berorganisasi berkembang","Penjajahan bertambah kuat dan kukuh","Pendidikan terhenti sepenuhnya"],b:[0,1],u:"Persatuan meningkatkan kesedaran politik dan semangat berorganisasi."},
 {j:"pilih",t:"Pelajar India dan Cina di Tanah Melayu mengikuti perkembangan tanah asal mereka. Hal ini menyebabkan:",p:["Nasionalisme asal berkembang","Nasionalisme terhenti serta-merta","Penjajahan dihapuskan terus","Persatuan dibubarkan paksa"],b:0,u:"Nasionalisme tanah asal turut berkembang dalam kalangan imigran."},
 {j:"pilih",t:"Revolusi Turki 1908 menyemarakkan semangat pembaharuan Islam. Kumpulan yang terpengaruh ialah:",p:["Kaum Muda","Kaum Tua","Kaum Pedagang","Kaum Nelayan"],b:0,u:"Kaum Muda terpengaruh oleh idea pembaharuan dari Timur Tengah."},
 {j:"pilih",t:"Pengasas Utusan Melayu 1939 mahu akhbar itu menjadi:",p:["Suara masyarakat Melayu","Alat penjajah","Pengumuman cukai","Pengumuman pasaran"],b:0,u:"Utusan Melayu menyuarakan kepentingan masyarakat Melayu."},
 {j:"pilih",t:"Pengajaran Sejarah Melayu dan sastera di sekolah menambah rasa:",p:["Bangga akan bangsa","Takut akan penjajah","Bosan akan sejarah","Curiga akan jiran"],b:0,u:"Sastera dan sejarah menambah rasa bangga akan bangsa."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan perkembangan kesedaran nasionalisme dengan betul?",p:["Pendidikan, persatuan, politik","Pertubuhan politik, akhbar, pendidikan","Persatuan, kemerdekaan, akhbar","Kemerdekaan, persatuan, pendidikan"],b:0,u:"Pendidikan dan akhbar mencetuskan kesedaran, diikuti persatuan dan pertubuhan politik."}},

{n:4, tempat:"Arkib Kebangkitan", sk:"9.3.4 Mencerakinkan maklumat tentang nasionalisme di negara kita", lampiran:"p1",
 kadNama:"Kesan Kesedaran", kadEm:"\u{1F50D}", kadFakta:"Kesedaran nasionalisme melahirkan persatuan dan pemimpin yang kemudian memperjuangkan kemerdekaan.",
 bosKadNama:"Media Massa", bosKadEm:"\u{1F4E2}", bosKadFakta:"Media massa menjadi alat penyebaran idea. Hari ini ia perlu digunakan dengan beretika demi kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah peranan akhbar dalam kebangkitan nasionalisme?",p:["Menyedarkan rakyat","Menyembunyikan maklumat","Mengurangkan pelajar","Memecahkan masyarakat"],b:0,u:"Petikan menyatakan akhbar menyebarkan idea dan menyedarkan rakyat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan penubuhan persatuan?",p:["Berorganisasi berkembang","Penjajah semakin disenangi","Pelajaran terbantut","Rakyat berasingan"],b:0,u:"Persatuan menumbuhkan semangat berorganisasi."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan Kaum Muda?",p:["Memajukan agama","Menjual hasil bumi","Menjajah negeri jiran","Menolak perubahan"],b:0,u:"Kaum Muda mahu memajukan agama dan pendidikan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan perkembangan nasionalisme.",p:["Kesedaran politik meningkat","Pemimpin tempatan muncul","Penjajah diterima sepenuhnya","Persatuan dibubarkan"],b:[0,1],u:"Kesedaran meningkat dan pemimpin tempatan muncul."},
 {j:"pilih",t:"Bandingkan peranan SITC dengan peranan akhbar. Apakah persamaannya?",p:["Menyebarkan ilmu","Mengutip cukai tanah","Membina lombong baharu","Melatih tentera upahan"],b:0,u:"Kedua-duanya menyebarkan ilmu dan menimbulkan kesedaran."},
 {j:"pilih",t:"Mengapakah kesedaran nasionalisme masih terhad sebelum Perang Dunia Kedua?",p:["Penjajah mengawal politik","Rakyat menolak pendidikan","Tiada persatuan","Tiada akhbar"],b:0,u:"Penjajah menyekat kegiatan politik, jadi gerakan masih kecil."},
 {j:"pilih",t:"Apakah kesan nasionalisme sebelum perang terhadap perjuangan kemudian?",p:["Menyediakan pemimpin dan idea","Menjadikan penjajah lemah serta-merta","Menamatkan perjuangan","Menghalang kemerdekaan"],b:0,u:"Gerakan awal menyediakan pemimpin dan idea untuk perjuangan kemudian."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penerbitan akhbar oleh pelbagai kaum?",p:["Banyak kaum mula sedar","Satu kaum sahaja sedar","Penjajah menyokong setiap akhbar","Akhbar tidak berpengaruh"],b:0,u:"Pelbagai kaum menyedari identiti dan hak masing-masing."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Akhbar dan pendidikan penggerak","Nasionalisme digerakkan oleh perdagangan","Nasionalisme tidak berkembang sebelum perang","Nasionalisme digerakkan oleh penjajah"],b:0,u:"Pendidikan, akhbar dan persatuan menggerakkan nasionalisme."}},

{n:5, tempat:"Dewan Penilai Keintelektualan", sk:"9.3.4 · K9.3.5 · K9.3.7 · K9.3.8 Menjustifikasikan nasionalisme", lampiran:null,
 kadNama:"Teras Ilmu", kadEm:"\u{1F4DA}", kadFakta:"Pemimpin nasionalis awal membina teras ilmu melalui persuratan dan pendidikan sebelum menuntut kemerdekaan.",
 bosKadNama:"Cinta Negara", bosKadEm:"\u{2764}\u{FE0F}", bosKadFakta:"Cinta akan negara ditunjukkan melalui amalan, bukan hanya kata-kata.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah gerakan nasionalisme awal wajar dihargai?",p:["Ia membuka jalan merdeka","Ia menggagalkan perpaduan","Ia merugikan negara","Ia hanya menghiburkan"],b:0,u:"Gerakan awal membuka jalan kepada kemerdekaan."},
 {j:"pilih",t:"Seorang murid berkata, \"Persatuan sebelum perang tidak penting.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia berfungsi","Tepat, ia tidak berfungsi","Tepat, ia dibubarkan serta-merta","Kurang tepat, ia tidak wujud"],b:0,u:"Persatuan menumbuhkan semangat berorganisasi."},
 {j:"pilih",t:"Antara berikut, sikap cinta akan negara ditunjukkan oleh:",p:["Mengutamakan negara","Menyebarkan berita palsu","Merosakkan harta awam","Mengabaikan sejarah"],b:0,u:"Mengutamakan negara menunjukkan cinta."},
 {j:"banyak",t:"Pilih DUA kepentingan keintelektualan dalam membina teras ilmu.",p:["Rakyat berfikir secara kritis","Perjuangan mempunyai asas idea","Rakyat berhenti belajar terus","Penjajah dihormati secara penuh"],b:[0,1],u:"Keintelektualan melahirkan rakyat kritis dan perjuangan yang beridea."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang peranan akhbar sebelum perang?",p:["Penting tetapi dikawal penjajah","Merugikan rakyat semata-mata","Tiada pengaruh langsung kepada rakyat","Menyebabkan penjajahan berlaku"],b:0,u:"Akhbar berperanan, tetapi penjajah mengawalnya."},
 {j:"pilih",t:"Mengapakah media massa perlu digunakan dengan bertanggungjawab?",p:["Menjaga perpaduan negara","Menyebarkan fitnah","Menimbulkan kekeliruan","Menyembunyikan kebenaran"],b:0,u:"Media yang bertanggungjawab melindungi perpaduan dan kedaulatan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada gerakan nasionalisme awal?",p:["Ilmu dan organisasi asas perjuangan","Perjuangan tidak memerlukan ilmu","Perjuangan bergantung kepada penjajah","Perjuangan dilakukan bersendirian"],b:0,u:"Ilmu dan organisasi ialah asas perjuangan."},
 {j:"pilih",t:"Mengapakah organisasi penting dalam membangunkan negara?",p:["Kerja berjalan teratur","Setiap orang bekerja sendiri","Pemimpin tidak diperlukan","Peraturan dihapuskan"],b:0,u:"Organisasi menyusun kerja dan kekuatan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang nasionalisme di negara kita sebelum perang?",p:["Berkembang melalui ilmu","Tidak wujud langsung","Digerakkan oleh penjajah","Terhenti pada awal abad ke-20"],b:0,u:"Ilmu, akhbar dan persatuan mengembangkan nasionalisme."}},

{n:6, tempat:"Studio Perjuangan", sk:"K9.3.5 hingga K9.3.8 Organisasi, cinta negara, keintelektualan dan media massa", lampiran:null,
 kadNama:"Media Beretika", kadEm:"\u{1F4F1}", kadFakta:"Hari ini media sosial menyebarkan maklumat dengan pantas. Pengguna perlu menyemak kesahihan dan beretika demi kedaulatan negara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil semangat perjuangan awal untuk menyelesaikan cabaran hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu menggalakkan cinta akan negara. Idea manakah paling berasas?",p:["Kelab kenegaraan","Melarang aktiviti berpasukan","Menghapuskan pelajaran sejarah","Mengejek pemimpin"],b:0,u:"Kelab dan projek komuniti memupuk cinta akan negara."},
 {j:"pilih",t:"Kelas anda mahu menubuhkan persatuan sejarah. Iktibar organisasi awal ialah:",p:["Bermatlamat jelas","Bergerak tanpa perancangan","Bersaing sesama ahli","Mengelak perbincangan"],b:0,u:"Organisasi yang berjaya mempunyai matlamat yang jelas."},
 {j:"banyak",t:"Pilih DUA cara menggunakan media sosial untuk kedaulatan negara.",p:["Menyemak sumber berita","Menyebarkan maklumat benar","Menyebarkan khabar angin","Menghina pemimpin"],b:[0,1],u:"Menyemak sumber dan menyebar maklumat benar melindungi negara."},
 {j:"pilih",t:"Idea manakah paling rasional untuk membina teras ilmu dalam kalangan murid?",p:["Kelab perbahasan","Menghentikan semua tugasan","Menyalin kerja rakan","Mengabaikan bacaan"],b:0,u:"Perbahasan dan penulisan menajamkan pemikiran."},
 {j:"pilih",t:"Seorang rakan berkata, \"Akhbar lama tiada nilai.\" Respons manakah paling rasional?",p:["Ia sumber sejarah","Betul, ia sudah lapuk","Betul, ia membosankan","Hanya akhbar baharu berguna"],b:0,u:"Akhbar lama ialah sumber sejarah yang bernilai."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan semangat cinta akan negara dalam kehidupan harian?",p:["Menjaga kebersihan sekolah","Membuang sampah merata-rata","Merosakkan kemudahan sekolah","Mempersendakan lagu negara"],b:0,u:"Menjaga kebersihan dan patuh peraturan ialah amalan cinta negara."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memelihara akhbar bersejarah seperti Al-Imam?",p:["Mendigitalkan dan memamerkannya","Membakar naskhah lama","Menyimpannya tanpa dijaga","Menjualnya kepada pengumpul asing"],b:0,u:"Pendigitalan memelihara dan memudahkan akses kepada sumber."},
 {j:"pilih",t:"Mengapakah kepimpinan yang berilmu penting untuk kedaulatan negara?",p:["Keputusan berasaskan fakta","Keputusan dibuat sesuka hati","Rakyat tidak diperlukan","Ilmu menghalang kemajuan"],b:0,u:"Pemimpin berilmu membuat keputusan berasaskan fakta."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang nasionalisme di negara kita untuk memperjuangkan kedaulatan negara pada masa kini.",
  arahan:"Pilih sekurang-kurangnya DUA contoh gerakan awal (contoh: Al-Imam 1906, SITC 1922, Kesatuan Melayu Singapura 1926, KMM 1938, Utusan Melayu 1939). Terangkan iktibarnya, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang gerakan nasionalisme awal, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti berorganisasi, cinta akan negara dan keintelektualan."}}
];

module.exports = {
  id:"s4b3", tingkatan:4, kod:"3.0 Nasionalisme di Negara Kita",
  tajuk:"Akhbar dan Persatuan",
  subtajuk:"Sejarah Ting. 4 · Bab 3 Nasionalisme di Negara Kita",
  spi:SPI["9.3"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang nasionalisme di negara kita. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan nasionalisme di negara kita berserta contoh. Perlu lebih latihan membina urutan peristiwa sebelum bergerak ke TP3.",
   3:"{n} boleh membina urutan peristiwa nasionalisme di negara kita. Galakkan mencerakinkan faktor dan kesannya.",
   4:"{n} mampu mencerakinkan maklumat tentang nasionalisme di negara kita. Seterusnya latih menjustifikasikan perkembangannya.",
   5:"{n} dapat menjustifikasikan perkembangan nasionalisme di negara kita dalam mempertahankan hak dan maruah bangsa. Sudah bersedia mencadangkan idea.",
   6:"{n} berjaya mencadangkan idea tentang nasionalisme di negara kita dalam memperjuangkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nasionalisme di Negara Kita. Cadangan: ulang hentian pertama sambil membina garis masa gerakan awal dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1906", label:"Al-Imam diterbitkan"},
     {masa:"1922", label:"SITC ditubuhkan"},
     {masa:"1926", label:"Kesatuan Melayu Singapura ditubuhkan"},
     {masa:"1938", label:"KMM ditubuhkan"}],
     kapsyen:"Rajah 1 · Gerakan nasionalisme awal di negara kita",
     alt:"Garis masa menegak: 1906 Al-Imam diterbitkan; 1922 SITC ditubuhkan; 1926 Kesatuan Melayu Singapura ditubuhkan; 1938 KMM ditubuhkan"},
   p1:petikan(1, "Kebangkitan kesedaran",
     ["Akhbar seperti Al-Imam dan Utusan Melayu menyebarkan idea dan menyedarkan rakyat tentang kemajuan dan hak mereka. Maktab seperti SITC melahirkan guru yang sedar akan bangsa.",
      "Persatuan dan pertubuhan seperti Kesatuan Melayu Singapura dan KMM menumbuhkan semangat berorganisasi dan melahirkan pemimpin tempatan yang kemudian memperjuangkan kemerdekaan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
