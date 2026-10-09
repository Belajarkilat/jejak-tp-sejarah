/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 5 Perjuangan Rakyat Semasa Pendudukan Jepun.
   Standard Kandungan 10.2, Standard Pembelajaran 10.2.1 hingga 10.2.5 serta K10.2.6 hingga K10.2.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Markas Kempeitai", sk:"10.2.1 Faktor kedatangan Jepun · 10.2.2 Dasar pendudukan Jepun", lampiran:null,
 kadNama:"Asia untuk Asia", kadEm:"\u{1F305}", kadFakta:"Jepun melaungkan \"Asia untuk Orang Asia\" dan Kawasan Kemakmuran Bersama Asia Timur Raya, tetapi sebenarnya mahukan sumber bahan mentah Asia Tenggara.",
 bosKadNama:"Wang Pisang", bosKadEm:"\u{1F34C}", bosKadFakta:"Jepun mengeluarkan wang kertas yang dicetak banyak, bergambar pokok pisang, sehingga nilainya jatuh dan harga barang melambung.",
 soalan:[
 {j:"pilih",t:"Jepun menduduki Tanah Melayu kerana mahukan:",p:["Getah dan bijih timah","Hasil laut semata-mata","Tanah untuk pelancongan","Pelajar untuk dihantar ke Jepun"],b:0,u:"Jepun memerlukan getah, bijih timah dan minyak untuk industri perang."},
 {j:"pilih",t:"Laungan Jepun yang menyatakan Asia dipimpin oleh orang Asia ialah:",p:["Asia untuk Orang Asia","Eropah untuk Orang Eropah","Dunia untuk Orang Dunia","Negara untuk Pemimpin Negara"],b:0,u:"Laungan itu menutup tujuan sebenar ekspansionisme."},
 {j:"pilih",t:"Pasukan polis tentera Jepun yang terkenal kejam ialah:",p:["Kempeitai","Askar Wataniah","Force 136","Home Guard"],b:0,u:"Kempeitai menyeksa dan memerangi golongan yang disyaki."},
 {j:"pilih",t:"Bahasa yang diwajibkan di sekolah semasa pendudukan Jepun ialah bahasa:",p:["Jepun","Inggeris","Belanda","Portugis"],b:0,u:"Bahasa Jepun diwajibkan melalui dasar Nipponisasi."},
 {j:"banyak",t:"Pilih DUA dasar pendudukan Jepun di Tanah Melayu.",p:["Nipponisasi","Pentadbiran tentera","Dasar pintu terbuka","Sistem Residen"],b:[0,1],u:"Jepun melaksanakan Nipponisasi dan pentadbiran tentera."},
 {j:"pilih",t:"Mata wang yang dikeluarkan Jepun dan nilainya jatuh dikenali sebagai:",p:["Wang pisang","Wang syiling emas","Wang kertas British","Wang perak Melaka"],b:0,u:"Wang pisang kehilangan nilai kerana dicetak berlebihan."},
 {j:"pilih",t:"Jalan kereta api yang dibina dengan buruh paksa Jepun ialah:",p:["Kereta Api Maut","Kereta Api Pantai Timur","Kereta Api Taiping","Kereta Api Singapura"],b:0,u:"Ramai buruh meninggal dunia membina Kereta Api Maut."},
 {j:"pilih",t:"Bendera yang wajib dikibarkan semasa pendudukan Jepun ialah:",p:["Hinomaru","Union Jack","Jalur Gemilang","Bendera Kuning"],b:0,u:"Bendera Hinomaru diwajibkan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan dasar dan contohnya yang betul.",p:["Nipponisasi: bahasa Jepun","Ekonomi perang: wang pisang","Keganasan: Kempeitai","Nipponisasi: bahasa Inggeris","Ekonomi perang: gaji tinggi"],b:[0,1,2],u:"Nipponisasi memaksa bahasa Jepun, wang pisang jatuh nilai, Kempeitai menyeksa."}},

{n:2, tempat:"Bilik Kronologi Jepun", sk:"10.2.3 · 10.2.4 Perjuangan rakyat menentang Jepun", lampiran:"gm1",
 kadNama:"MPAJA", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Malayan People's Anti-Japanese Army (MPAJA) ialah pasukan gerila yang dikuasai Parti Komunis Malaya dan bersenjata daripada pihak Berikat.",
 bosKadNama:"Force 136", bosKadEm:"\u{1F4E1}", bosKadFakta:"Force 136 ialah pasukan British yang melatih dan membekalkan senjata kepada pejuang gerila tempatan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Pendaratan di Kota Bharu","MPAJA ditubuhkan","Pemberontakan Double Tenth","Jepun menyerah kalah"],b:0,u:"Pendaratan di Kota Bharu pada 1941 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Jepun menyerah kalah?",p:["1945","1943","1942","1941"],b:0,u:"Rajah 1 menunjukkan Jepun menyerah kalah pada 1945."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Jepun mendarat di Kota Bharu","MPAJA ditubuhkan","Pemberontakan Double Tenth","Jepun menyerah kalah"],b:[0,1,2,3],u:"1941, 1942, 1943 dan 1945."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan MPAJA dan penyerahan Jepun?",p:["3 tahun","2 tahun","4 tahun","1 tahun"],b:0,u:"1945 tolak 1942 ialah 3 tahun."},
 {j:"pilih",t:"Pasukan gerila yang paling kuat menentang Jepun di Tanah Melayu ialah:",p:["MPAJA","Kempeitai","Tentera Laut Diraja","Angkatan Paksi"],b:0,u:"MPAJA ialah pasukan gerila terkuat."},
 {j:"pilih",t:"Pasukan Melayu yang menentang Jepun di Pahang ialah:",p:["Wataniah","MPAJA","Kempeitai","Force 136"],b:0,u:"Wataniah dipimpin oleh Yeop Mahidin di Pahang."},
 {j:"pilih",t:"Pemberontakan Double Tenth 1943 berlaku di:",p:["Jesselton, Sabah","Kuching, Sarawak","Kuala Lumpur","Pulau Pinang"],b:0,u:"Pemberontakan itu dipimpin oleh Albert Kwok di Jesselton."},
 {j:"banyak",t:"Pilih DUA pasukan yang menentang Jepun.",p:["MPAJA","Wataniah","Kempeitai","Hinomaru"],b:[0,1],u:"MPAJA dan Wataniah menentang Jepun. Kempeitai ialah polis tentera Jepun."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Jepun mendarat di Kota Bharu dan Pemberontakan Double Tenth?",p:["2 tahun","1 tahun","4 tahun","3 tahun"],b:0,u:"1943 tolak 1941 ialah 2 tahun."}},

{n:3, tempat:"Hutan Gerila", sk:"10.2.3 · 10.2.4 Membuat kronologi perjuangan rakyat", lampiran:null,
 kadNama:"Kekejaman Jepun", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Peristiwa Sook Ching di Singapura dan kekejaman Kempeitai menyebabkan puluhan ribu orang terkorban dan membangkitkan rasa benci terhadap Jepun.",
 bosKadNama:"Bintang Tiga", bosKadEm:"\u{2B50}", bosKadFakta:"Selepas Jepun menyerah kalah dan sebelum British kembali, MPAJA menguasai beberapa bandar dalam tempoh yang dipanggil zaman Bintang Tiga.",
 soalan:[
 {j:"pilih",t:"Seorang penduduk menolak menyerahkan beras kepada tentera Jepun dan dihukum. Ini contoh:",p:["Kekejaman pendudukan Jepun","Kebaikan pentadbiran British","Peraturan sekolah","Dasar bebas cukai"],b:0,u:"Penduduk dihukum kerana enggan menyerah hasil kepada Jepun."},
 {j:"pilih",t:"Pasukan gerila menyerang kem Jepun pada waktu malam dan berundur ke hutan. Taktik ini dipanggil:",p:["Gerila","Pengepungan kota","Pertempuran laut","Serangan terbuka"],b:0,u:"Taktik gerila ialah serangan mengejut dan berundur."},
 {j:"pilih",t:"Seorang pegawai British melatih pejuang tempatan dengan senjata dari Ceylon. Pasukan ini ialah:",p:["Force 136","Kempeitai","Hinomaru","Tentera Laut Jepun"],b:0,u:"Force 136 melatih dan membekalkan senjata kepada gerila."},
 {j:"banyak",t:"Pilih DUA bentuk penentangan rakyat terhadap Jepun.",p:["Gerila di hutan","Pemberontakan bersenjata","Menyokong Nipponisasi","Menyerahkan senjata"],b:[0,1],u:"Rakyat menentang secara gerila dan pemberontakan bersenjata."},
 {j:"pilih",t:"Selepas Jepun menyerah kalah, kekacauan berlaku kerana:",p:["Kekosongan pentadbiran","Jepun terus memerintah","Raja-raja berkuasa penuh","Semua rakyat bersenjata"],b:0,u:"Ada kekosongan kuasa sebelum British kembali."},
 {j:"pilih",t:"Pejuang MPAJA muncul dari hutan selepas penyerahan Jepun. Mereka menguasai bandar. Tempoh ini dikenali sebagai:",p:["Zaman Bintang Tiga","Zaman Pangkor Lama","Zaman Merdeka Baharu","Zaman Residen Awal"],b:0,u:"Bintang Tiga ialah tempoh singkat kekuasaan MPAJA selepas Jepun menyerah."},
 {j:"pilih",t:"Rakyat tempatan menyorok beras daripada tentera Jepun. Tindakan ini ialah penentangan:",p:["Pasif","Bersenjata","Diplomatik","Ketenteraan"],b:0,u:"Menyorok beras ialah penentangan pasif."},
 {j:"pilih",t:"Orang Cina menjadi sasaran Jepun kerana mereka menyokong China berperang. Peristiwa itu ialah:",p:["Sook Ching","Kereta Api Maut","Pemberontakan Mat Salleh","Perang Perak"],b:0,u:"Sook Ching ialah pembunuhan beramai-ramai orang Cina."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah penentangan BERSENJATA?",p:["Gerila MPAJA di hutan","Menyorok beras","Enggan belajar bahasa Jepun","Menyebar berita secara senyap"],b:0,u:"Gerila MPAJA menggunakan senjata menentang Jepun."}},

{n:4, tempat:"Arkib Pendudukan", sk:"10.2.4 · 10.2.5 Mencerakinkan perjuangan secara sistematik", lampiran:"p1",
 kadNama:"Penderitaan dan Semangat", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Pendudukan Jepun menyebabkan penderitaan, tetapi mematahkan keyakinan terhadap kekebalan penjajah dan menggalakkan semangat nasionalisme.",
 bosKadNama:"Kekuatan Mental", bosKadEm:"\u{1F4AA}", bosKadFakta:"Rakyat bertahan dengan ketahanan fizikal dan mental, misalnya menanam ubi kayu ketika kekurangan beras.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan pendudukan Jepun terhadap nasionalisme tempatan?",p:["Nasionalisme bertambah kuat","Semangat nasionalisme lenyap","Rakyat menyokong penjajah","Persatuan dibubarkan"],b:0,u:"Petikan menyatakan penderitaan dan kekalahan Barat menguatkan nasionalisme."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang dilakukan rakyat ketika kekurangan beras?",p:["Menanam ubi kayu dan keledek","Mengimport beras dari Eropah","Berpindah ke Jepun","Membeli beras murah"],b:0,u:"Rakyat menanam ubi kayu dan keledek sebagai makanan ganti."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah MPAJA mendapat sokongan sesetengah rakyat?",p:["Menentang Jepun","Menyokong Nipponisasi","Menjual beras murah","Membina sekolah"],b:0,u:"Rakyat menyokong MPAJA kerana mereka menentang Jepun."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan pendudukan Jepun.",p:["Kekurangan makanan","Nasionalisme berkembang","Kemakmuran bertambah","Penjajah semakin dihormati"],b:[0,1],u:"Kekurangan makanan dan nasionalisme yang berkembang ialah kesan utama."},
 {j:"pilih",t:"Bandingkan MPAJA dan Wataniah. Apakah persamaannya?",p:["Menentang pendudukan Jepun","Dikuasai oleh Jepun","Ditubuhkan oleh British sahaja","Bertempur di laut"],b:0,u:"Kedua-duanya menentang Jepun."},
 {j:"pilih",t:"Mengapakah sikap kreatif penting ketika perang?",p:["Menyesuaikan diri","Mengelak daripada bekerja","Menghabiskan simpanan","Bergantung kepada Jepun"],b:0,u:"Kreativiti membantu mencari makanan dan keperluan ganti."},
 {j:"pilih",t:"Apakah kesan penyerahan Jepun terhadap sistem pentadbiran?",p:["Berlaku kekosongan kuasa","Kerajaan Jepun kekal","Rakyat memerintah sendiri","Raja-raja menjadi Gabenor"],b:0,u:"Jepun pergi dan British belum kembali, jadi pentadbiran kosong."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kekalahan British di Tanah Melayu?",p:["Kuasa Barat boleh dikalahkan","Kuasa Barat tidak boleh dikalahkan","Jepun tidak berpengalaman","Penduduk menyokong British"],b:0,u:"Kekalahan itu meruntuhkan keyakinan kepada kekebalan Barat."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Penderitaan melahirkan ketabahan","Penderitaan melemahkan semangat selama-lamanya","Pendudukan membawa kemakmuran","Rakyat tidak melawan"],b:0,u:"Penderitaan melahirkan ketabahan dan menyuburkan nasionalisme."}},

{n:5, tempat:"Dewan Penilai Pengorbanan", sk:"10.2.5 · K10.2.6 · K10.2.7 · K10.2.8 Menilai perjuangan rakyat", lampiran:null,
 kadNama:"Sedia Berkorban", kadEm:"\u{1F31F}", kadFakta:"Pejuang gerila, Wataniah dan rakyat biasa berkorban nyawa dan harta demi mempertahankan tanah air.",
 bosKadNama:"Strategi", bosKadEm:"\u{265F}\u{FE0F}", bosKadFakta:"Perancangan strategi, seperti menggunakan hutan sebagai kubu, membolehkan pejuang bertahan walaupun kekurangan senjata.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah perjuangan rakyat melawan Jepun wajar dihargai?",p:["Berkorban demi tanah air","Mereka mahu menjadi kaya","Mereka suka berperang","Mereka mengejar nama"],b:0,u:"Mereka berkorban demi mempertahankan tanah air."},
 {j:"pilih",t:"Seorang murid berkata, \"Pendudukan Jepun hanya membawa kebaikan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, rakyat menderita","Tepat, ekonomi bertambah baik","Tepat, tiada kekejaman","Kurang tepat, Jepun tidak datang"],b:0,u:"Pendudukan Jepun membawa penderitaan dan kekejaman."},
 {j:"pilih",t:"Antara berikut, sikap kreatif dalam menghadapi cabaran ketika perang ialah:",p:["Menanam ubi kayu","Menunggu bantuan sepenuhnya","Menyerahkan semua hasil","Meninggalkan kampung"],b:0,u:"Menanam makanan ganti menunjukkan kreativiti."},
 {j:"banyak",t:"Pilih DUA sebab kebijaksanaan merancang strategi penting.",p:["Meminimumkan kerugian","Meningkatkan peluang menang","Menambah kebergantungan kepada musuh","Mengurangkan semangat juang"],b:[0,1],u:"Strategi yang bijak mengurangkan kerugian dan menambah peluang menang."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang peranan MPAJA?",p:["Berjasa tetapi ada agenda","Berjasa tanpa sebarang kelemahan","Tidak berjasa langsung","Berkhidmat untuk Jepun"],b:0,u:"MPAJA menentang Jepun, tetapi dikuasai Parti Komunis Malaya."},
 {j:"pilih",t:"Mengapakah ketahanan fizikal dan mental penting ketika menghadapi cabaran hidup?",p:["Membantu bertahan","Menjadikan seseorang tamak","Membuat orang menyerah","Menjauhkan rakan"],b:0,u:"Ketahanan membantu manusia bertahan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada pendudukan Jepun?",p:["Kedaulatan dipertahankan","Kuasa asing mesti dipercayai","Perang membawa kemakmuran","Rakyat tidak perlu bersatu"],b:0,u:"Kedaulatan negara ialah hak yang perlu dipertahankan."},
 {j:"pilih",t:"Mengapakah rela berkorban untuk tanah air dianggap mulia?",p:["Mengutamakan bersama","Mengutamakan diri sendiri","Mengelak tanggungjawab","Mencari kemasyhuran"],b:0,u:"Pengorbanan mengutamakan kepentingan bersama."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang perjuangan rakyat semasa pendudukan Jepun?",p:["Penuh pengorbanan","Tidak berkesan langsung","Dilakukan oleh tentera","Disokong oleh seluruh rakyat Jepun"],b:0,u:"Perjuangan penuh pengorbanan dan menyuburkan nasionalisme."}},

{n:6, tempat:"Studio Ketahanan", sk:"K10.2.6 hingga K10.2.9 Strategi, kreatif, berkorban dan ketahanan", lampiran:null,
 kadNama:"Ketahanan Makanan", kadEm:"\u{1F33E}", kadFakta:"Pengalaman kekurangan makanan zaman Jepun mengajar kita pentingnya ketahanan makanan, seperti menanam sendiri sayur dan ubi.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil teladan ketabahan rakyat untuk menghadapi cabaran hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu melatih ketahanan murid. Idea manakah paling berasas?",p:["Berkebun dan perkhemahan","Menghapuskan sukan","Memberi kerja rumah berlebihan","Melarang pergaulan"],b:0,u:"Berkebun dan perkhemahan melatih ketahanan dan kreativiti."},
 {j:"pilih",t:"Harga makanan naik mendadak. Iktibar daripada zaman Jepun ialah:",p:["Menanam makanan sendiri","Membeli secara berlebihan","Menyimpan hingga busuk","Menyalahkan peniaga"],b:0,u:"Menanam sendiri mengurangkan kebergantungan."},
 {j:"banyak",t:"Pilih DUA cara menunjukkan semangat sedia berkorban untuk negara.",p:["Menyertai sukarelawan komuniti","Menderma untuk mangsa bencana","Mengelak daripada gotong-royong","Mementingkan keuntungan sendiri"],b:[0,1],u:"Sukarelawan dan derma menunjukkan semangat berkorban."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghargai veteran perang?",p:["Temu bual veteran","Melupakan jasa mereka","Mengejek cerita mereka","Menjauhkan mereka"],b:0,u:"Temu bual dan penghargaan mengiktiraf jasa mereka."},
 {j:"pilih",t:"Seorang rakan berkata, \"Cerita perang tidak berguna.\" Respons manakah paling rasional?",p:["Ia mengajar keamanan","Betul, ia membosankan","Betul, ia sudah lapuk","Hanya orang tua perlu tahu"],b:0,u:"Cerita perang mengajar kita menghargai keamanan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan sikap kreatif dalam menyelesaikan masalah?",p:["Mencari cara baharu","Menunggu orang lain","Menyalin jawapan","Menyerah sahaja"],b:0,u:"Kreatif bermakna mencari cara baharu."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memelihara bukti sejarah zaman Jepun?",p:["Merakam kisah saksi","Membuang barang lama","Menyembunyikan peristiwa","Mengubah kisahnya"],b:0,u:"Merakam saksi dan menyimpan dokumen memelihara sejarah."},
 {j:"pilih",t:"Mengapakah ketabahan mental penting dalam menghadapi cabaran hidup?",p:["Membantu bangkit semula","Membuat kita cepat marah","Menjadikan kita pasif","Menjauhkan kita dari rakan"],b:0,u:"Ketabahan membantu kita bangkit semula."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea berdasarkan kesan perjuangan rakyat semasa pendudukan Jepun untuk mengekalkan kedaulatan negara daripada ancaman luar.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar (contoh: strategi gerila, ketahanan makanan, pengorbanan, kekejaman Jepun, kekosongan kuasa). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang pendudukan Jepun, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti ketahanan, kreativiti dan sedia berkorban."}}
];

module.exports = {
  id:"s4b5", tingkatan:4, kod:"5.0 Perjuangan Rakyat Semasa Pendudukan Jepun",
  tajuk:"Bayang Matahari Terbit",
  subtajuk:"Sejarah Ting. 4 · Bab 5 Perjuangan Rakyat Semasa Pendudukan Jepun",
  spi:SPI["10.2"],
  ulasan:{
   1:"{n} dapat menyatakan secara ringkas perjuangan rakyat semasa pendudukan Jepun. Langkah seterusnya ialah menjelaskan perjuangan itu berserta contoh.",
   2:"{n} dapat menjelaskan perjuangan rakyat semasa pendudukan Jepun berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi perjuangan rakyat semasa pendudukan Jepun. Galakkan mencerakinkan secara sistematik.",
   4:"{n} mampu mencerakinkan maklumat tentang perjuangan rakyat semasa pendudukan Jepun secara sistematik. Seterusnya latih menilai perjuangan itu.",
   5:"{n} dapat menilai perjuangan rakyat semasa pendudukan Jepun ke atas negara kita. Sudah bersedia menjana idea mengekalkan kedaulatan.",
   6:"{n} berjaya menjana idea tentang kesan perjuangan rakyat untuk mengekalkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Perjuangan Rakyat Semasa Pendudukan Jepun. Cadangan: ulang hentian pertama sambil membina jadual dasar dan kekejaman Jepun dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1941", label:"Jepun mendarat di Kota Bharu"},
     {masa:"1942", label:"MPAJA ditubuhkan"},
     {masa:"1943", label:"Pemberontakan Double Tenth"},
     {masa:"1945", label:"Jepun menyerah kalah"}],
     kapsyen:"Rajah 1 · Pendudukan Jepun dan penentangan rakyat",
     alt:"Garis masa menegak: 1941 Jepun mendarat di Kota Bharu; 1942 MPAJA ditubuhkan; 1943 Pemberontakan Double Tenth; 1945 Jepun menyerah kalah"},
   p1:petikan(1, "Penderitaan dan semangat",
     ["Semasa pendudukan Jepun, rakyat mengalami kekurangan makanan, kenaikan harga dan kekejaman. Mereka menanam ubi kayu dan keledek sebagai ganti beras.",
      "Kekalahan British meruntuhkan keyakinan terhadap kuasa Barat. Pasukan seperti MPAJA dan Wataniah menentang Jepun, dan semangat nasionalisme bertambah kuat."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
