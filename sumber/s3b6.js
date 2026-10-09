/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 6 Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial.
   Standard Kandungan 7.6, Standard Pembelajaran 7.6.1 hingga 7.6.4 serta K7.6.5 hingga K7.6.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Ladang Getah", sk:"7.6.1 Pengenalan ekonomi moden · 7.6.2 Pentadbiran dan ekonomi", lampiran:null,
 kadNama:"Getah Pertama", kadEm:"\u{1F333}", kadFakta:"Benih getah dibawa ke Tanah Melayu pada tahun 1877. Penanaman getah kemudian berkembang menjadi tanaman komersial yang utama.",
 bosKadNama:"Kereta Api Pertama", bosKadEm:"\u{1F686}", bosKadFakta:"Landasan kereta api pertama di Tanah Melayu menghubungkan Taiping dengan Port Weld dan dibuka pada tahun 1885.",
 soalan:[
 {j:"pilih",t:"Tanaman komersial yang paling penting di Tanah Melayu pada awal abad ke-20 ialah:",p:["Getah","Gandum","Kapas","Teh"],b:0,u:"Getah menjadi tanaman komersial utama di Tanah Melayu."},
 {j:"pilih",t:"Benih getah pertama dibawa ke Tanah Melayu pada tahun:",p:["1877","1786","1896","1957"],b:0,u:"Benih getah dibawa ke Tanah Melayu pada 1877."},
 {j:"pilih",t:"Landasan kereta api pertama di Tanah Melayu menghubungkan Taiping dengan:",p:["Port Weld","Kuala Lumpur","Pulau Pinang","Johor Bahru"],b:0,u:"Landasan Taiping ke Port Weld dibuka pada 1885."},
 {j:"pilih",t:"Pekerja yang dibawa ke lombong bijih timah kebanyakannya berbangsa:",p:["Cina","Arab","Eropah","Jepun"],b:0,u:"Pekerja Cina dibawa untuk bekerja di lombong bijih timah."},
 {j:"banyak",t:"Pilih DUA bentuk ekonomi moden yang diperkenalkan British.",p:["Ladang getah","Perlombongan bijih timah","Perburuan harimau","Pertanian pindah"],b:[0,1],u:"Ladang getah dan perlombongan bijih timah ialah ekonomi moden berskala besar."},
 {j:"pilih",t:"Pekerja yang dibawa ke ladang getah kebanyakannya berbangsa:",p:["India","Cina","Arab","Eropah"],b:0,u:"Pekerja India dibawa untuk bekerja di ladang getah."},
 {j:"pilih",t:"Tujuan utama British membina jalan raya dan kereta api ialah:",p:["Mengangkut hasil bumi","Menghalang perdagangan","Memudahkan perarakan sultan","Menghantar jemaah haji"],b:0,u:"Prasarana dibina terutamanya untuk mengangkut bijih timah dan getah ke pelabuhan."},
 {j:"pilih",t:"Pelabuhan utama yang mengeksport bijih timah dan getah ialah:",p:["Pulau Pinang, Singapura","Kuantan dan Kota Bharu","Kuching dan Miri di Sarawak","Muar dan Batu Pahat di Johor"],b:0,u:"Pulau Pinang dan Singapura ialah pelabuhan eksport utama."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan kaum pekerja dan sektor ekonominya yang betul.",p:["Cina: lombong bijih timah","India: ladang getah","Melayu: penanaman padi dan kampung","Cina: ladang getah sahaja","India: lombong emas"],b:[0,1,2],u:"Cina banyak di lombong, India di ladang getah, dan orang Melayu kekal di kampung dan sawah."}},

{n:2, tempat:"Bilik Kronologi Ekonomi", sk:"7.6.2 · 7.6.3 Pentadbiran Barat dan ekonomi", lampiran:"gm1",
 kadNama:"Ledakan Ekonomi", kadEm:"\u{1F4C8}", kadFakta:"Perlombongan bijih timah dan penanaman getah menyebabkan ekonomi Tanah Melayu berkembang pesat pada akhir abad ke-19 dan awal abad ke-20.",
 bosKadNama:"Ekonomi Dualisme", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Ekonomi moden di bandar dan ladang berjalan bersama ekonomi tradisional di kampung. Hal ini dipanggil ekonomi dualisme.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Perjanjian Pangkor","Benih getah dibawa","Kereta api pertama","Negeri-negeri Melayu Bersekutu"],b:0,u:"Perjanjian Pangkor pada 1874 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa pada tahun 1885?",p:["Kereta api pertama dibuka","Benih getah dibawa","Perjanjian Pangkor","Negeri-negeri Melayu Bersekutu dibentuk"],b:0,u:"Landasan kereta api pertama dibuka pada 1885."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Perjanjian Pangkor","Benih getah dibawa","Kereta api pertama","Negeri-negeri Melayu Bersekutu"],b:[0,1,2,3],u:"1874, 1877, 1885 dan 1896."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara kereta api pertama dan pembentukan Negeri-negeri Melayu Bersekutu?",p:["11 tahun","8 tahun","22 tahun","3 tahun"],b:0,u:"1896 tolak 1885 ialah 11 tahun."},
 {j:"pilih",t:"Ekonomi dualisme bermaksud:",p:["Moden dan tradisional wujud bersama","Ekonomi dikuasai oleh satu kaum","Ekonomi tanpa sebarang perdagangan luar","Ekonomi bergantung pada padi huma"],b:0,u:"Sektor moden dan sektor tradisional wujud bersama."},
 {j:"pilih",t:"Orang Melayu kebanyakannya kekal dalam sektor:",p:["Pertanian tradisional","Perlombongan bijih timah","Ladang getah British","Perdagangan eksport"],b:0,u:"Orang Melayu kekal bertani padi dan menangkap ikan di kampung."},
 {j:"pilih",t:"Kemakmuran ekonomi Tanah Melayu banyak mengalir ke:",p:["Negara penjajah","Kampung Melayu","Sekolah tempatan","Hutan simpan"],b:0,u:"Keuntungan terutamanya dibawa ke luar negara oleh syarikat British."},
 {j:"pilih",t:"Bandar yang berkembang pesat kerana bijih timah ialah:",p:["Kuala Lumpur dan Ipoh","Kota Bharu dan Kuantan","Kuching dan Sandakan","Muar dan Batu Pahat"],b:0,u:"Kuala Lumpur dan Ipoh berkembang daripada perlombongan bijih timah."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Perjanjian Pangkor dan kedatangan benih getah?",p:["3 tahun","11 tahun","22 tahun","1 tahun"],b:0,u:"1877 tolak 1874 ialah 3 tahun."}},

{n:3, tempat:"Bandar Baharu", sk:"7.6.3 · 7.6.4 Mengklasifikasikan kesan ekonomi dan sosial", lampiran:null,
 kadNama:"Dasar Pecah dan Perintah", kadEm:"\u{1F500}", kadFakta:"Kaum yang berbeza tinggal dan bekerja di kawasan berasingan: Melayu di kampung, Cina di bandar dan lombong, India di ladang. Keadaan ini menjarakkan hubungan antara kaum.",
 bosKadNama:"Pendidikan", bosKadEm:"\u{1F3EB}", bosKadFakta:"Sekolah Melayu, Cina, Tamil dan Inggeris wujud secara berasingan. Pelajar jarang bergaul antara aliran.",
 soalan:[
 {j:"pilih",t:"Pembukaan lombong menyebabkan kemunculan bandar. Ini ialah kesan:",p:["Sosial","Politik semata-mata","Agama","Ketenteraan"],b:0,u:"Pertambahan penduduk dan kemunculan bandar ialah kesan sosial."},
 {j:"pilih",t:"Pengenalan pelaburan modal asing ialah kesan:",p:["Ekonomi","Sosial","Agama","Kebudayaan"],b:0,u:"Pelaburan modal asing ialah kesan ekonomi."},
 {j:"pilih",t:"Pembinaan hospital dan klinik oleh British ialah kesan:",p:["Sosial","Ekonomi semata-mata","Politik","Ketenteraan"],b:0,u:"Perkhidmatan kesihatan ialah kesan sosial yang positif."},
 {j:"banyak",t:"Pilih DUA kesan ekonomi pentadbiran British.",p:["Ekonomi eksport berkembang","Prasarana bertambah","Sekolah vernakular dibuka","Bandar dipenuhi pelbagai kaum"],b:[0,1],u:"Ekonomi eksport dan prasarana ialah kesan ekonomi. Sekolah dan bandar berbilang kaum ialah kesan sosial."},
 {j:"pilih",t:"Pemisahan petempatan mengikut kaum merupakan kesan:",p:["Pecah dan perintah","Dasar pintu terbuka luas","Dasar satu bangsa","Dasar penyatuan bangsa"],b:0,u:"British mengekalkan pemisahan kaum untuk mengawal masyarakat."},
 {j:"pilih",t:"Pengenalan mata wang dan sistem perbankan British ialah:",p:["Kesan ekonomi","Kesan sosial semata","Kesan agama Islam","Kesan adat Melayu"],b:0,u:"Mata wang dan perbankan ialah kemajuan ekonomi."},
 {j:"pilih",t:"Kemunculan masyarakat berbilang kaum ialah kesan:",p:["Kemasukan pekerja imigran","Penghijrahan orang Melayu ke Eropah","Perpindahan orang asli","Kejatuhan Melaka"],b:0,u:"Pekerja Cina dan India dibawa untuk bekerja di lombong dan ladang."},
 {j:"pilih",t:"Sekolah vernakular dibuka mengikut:",p:["Kaum","Agama","Kelas","Umur"],b:0,u:"Sekolah Melayu, Cina dan Tamil dibuka mengikut kaum."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah ialah kesan sosial dan BUKAN kesan ekonomi?",p:["Kaum terpisah ikut kegiatan","Pembinaan jalan kereta api","Pengeluaran getah","Kenaikan eksport bijih timah"],b:0,u:"Pemisahan kaum ialah kesan sosial. Yang lain berkaitan ekonomi."}},

{n:4, tempat:"Arkib Ekonomi", sk:"7.6.4 Membanding beza kesan ekonomi dan sosial", lampiran:"p1",
 kadNama:"Kebaikan dan Keburukan", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Pentadbiran British membawa kemajuan seperti kereta api dan hospital, tetapi keuntungan dan kuasa lebih banyak dimiliki penjajah.",
 bosKadNama:"Kemakmuran Tidak Sekata", bosKadEm:"\u{1F4CA}", bosKadFakta:"Bandar dan lombong maju, manakala kampung di pedalaman kurang menerima pembangunan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan positif pembangunan prasarana?",p:["Perhubungan lebih mudah","Perdagangan menjadi terhenti","Kampung menjadi terasing","Hasil bumi menjadi berkurang"],b:0,u:"Petikan menyatakan jalan dan kereta api memudahkan perhubungan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, siapakah yang lebih banyak menerima keuntungan ekonomi?",p:["Syarikat British","Petani Melayu","Pembesar kampung","Nelayan pantai"],b:0,u:"Keuntungan terutamanya diterima oleh syarikat dan pemodal British."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan sosial utama kemasukan pekerja imigran?",p:["Masyarakat berbilang kaum","Masyarakat satu kaum","Penduduk semakin berkurang","Bandar ditinggalkan kosong"],b:0,u:"Kemasukan imigran melahirkan masyarakat berbilang kaum."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kebaikan pentadbiran British.",p:["Kemudahan kesihatan","Perhubungan yang baik","Pemisahan kaum","Keuntungan ke luar negara"],b:[0,1],u:"Kemudahan kesihatan dan perhubungan ialah kebaikan. Pemisahan kaum dan keuntungan ke luar ialah kelemahan."},
 {j:"pilih",t:"Bandingkan keadaan bandar dan kampung. Pernyataan manakah BETUL?",p:["Bandar lebih maju daripada kampung","Kampung lebih maju daripada bandar","Kedua-duanya sama maju","Kedua-duanya tidak maju"],b:0,u:"Pembangunan tertumpu di bandar dan lombong."},
 {j:"pilih",t:"Bandingkan kesan ekonomi dan sosial pentadbiran British. Apakah kesimpulan yang betul?",p:["Ekonomi maju, jurang sosial wujud","Maju dari segi sosial, mundur ekonomi","Mundur dari segi ekonomi dan sosial","Tiada sebarang kesan berlaku"],b:0,u:"Ekonomi berkembang, tetapi pemisahan kaum menimbulkan jurang sosial."},
 {j:"pilih",t:"Mengapakah pemisahan kaum menimbulkan masalah jangka panjang?",p:["Hubungan kaum kurang erat","Penduduk bertambah dengan banyak","Bandar menjadi terlalu kecil","Hasil bijih timah berkurang"],b:0,u:"Pemisahan menjarakkan hubungan dan menyukarkan perpaduan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada pembangunan kereta api yang berpusat di kawasan lombong?",p:["Ia melayani penjajah","Ia melayani kampung nelayan","Ia melayani sawah padi Melayu","Ia melayani sekolah rendah"],b:0,u:"Landasan menghubungkan lombong dengan pelabuhan untuk faedah penjajah."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Maju, tetapi manfaat tidak sekata","Setiap pihak mendapat manfaat sama","Tiada sebarang kemajuan berlaku","Orang Melayu sahaja mendapat manfaat"],b:0,u:"Kemajuan wujud, tetapi manfaat tidak diagihkan sama rata."}},

{n:5, tempat:"Dewan Penilai Ekonomi", sk:"7.6.4 · K7.6.5 · K7.6.6 · K7.6.7 Menilai kesan pada kehidupan hari ini", lampiran:null,
 kadNama:"Warisan Hari Ini", kadEm:"\u{1F3D9}\u{FE0F}", kadFakta:"Prasarana seperti kereta api, pelabuhan dan bandar yang dibina pada zaman British masih digunakan hari ini.",
 bosKadNama:"Gigih", bosKadEm:"\u{1F4AA}", bosKadFakta:"Sikap gigih membolehkan seseorang memajukan diri walaupun menghadapi kesukaran dan kekurangan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, kesan manakah paling kekal hingga hari ini?",p:["Masyarakat berbilang kaum","Lombong yang dibuka dahulu","Landasan lama sahaja","Penanaman getah awal"],b:0,u:"Masyarakat berbilang kaum masih menjadi ciri utama negara kita."},
 {j:"pilih",t:"Seorang murid berkata, \"Pentadbiran British tidak membawa sebarang kebaikan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ada prasarana baharu","Tepat, tiada kemajuan langsung","Tepat, rakyat tidak bekerja","Kurang tepat, British tidak datang"],b:0,u:"Prasarana, kemudahan kesihatan dan bandar diperoleh daripada pentadbiran British."},
 {j:"pilih",t:"Antara berikut, sikap gigih ditunjukkan oleh:",p:["Pekerja yang terus berusaha","Pekerja yang menyerah kalah awal","Pekerja yang menyalahkan nasib","Pekerja yang menunggu bantuan"],b:0,u:"Gigih ialah terus berusaha memajukan diri."},
 {j:"banyak",t:"Pilih DUA kepentingan perpaduan dalam masyarakat berbilang kaum.",p:["Mengekalkan keharmonian","Menjamin kemajuan bersama","Menjarakkan kaum","Menimbulkan prasangka"],b:[0,1],u:"Perpaduan menjamin keharmonian dan kemajuan bersama."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang ekonomi zaman British?",p:["Maju tetapi manfaat tidak sekata","Merugikan negeri semata-mata","Menguntungkan semua orang","Tidak membawa sebarang perubahan"],b:0,u:"Ekonomi berkembang, tetapi manfaat tidak diagihkan secara sama rata."},
 {j:"pilih",t:"Mengapakah bermuafakat penting dalam memajukan negara?",p:["Keputusan diterima bersama","Keputusan dibuat sendirian","Perbezaan dibiarkan","Perbincangan dielakkan"],b:0,u:"Muafakat membolehkan keputusan diterima bersama dan dilaksanakan dengan jayanya."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada kesan pentadbiran British?",p:["Sumber negara perlu dimanfaatkan sendiri","Sumber negara tidak penting","Keuntungan wajar diserahkan kepada asing","Pembangunan tidak perlu dirancang"],b:0,u:"Rakyat sendiri perlu menikmati hasil sumber negara."},
 {j:"pilih",t:"Mengapakah pemisahan kaum zaman British wajar dijadikan pengajaran?",p:["Perpaduan perlu dibina sengaja","Perpaduan datang dengan sendirinya","Kaum perlu terus berasingan","Perpaduan tidak diperlukan"],b:0,u:"Perpaduan perlu dibina melalui sekolah, kejiranan dan dasar negara."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kesan pentadbiran Barat terhadap kehidupan hari ini?",p:["Prasarana dan kaum pelbagai","Tiada sebarang kesan yang kekal","Kesan buruk yang kekal lama","Kesan baik yang kekal lama"],b:0,u:"Prasarana dan masyarakat berbilang kaum masih mempengaruhi kehidupan kita."}},

{n:6, tempat:"Studio Pembangunan Harmoni", sk:"K7.6.5 hingga K7.6.8 Gigih, perpaduan, muafakat dan memanfaatkan kekayaan", lampiran:null,
 kadNama:"Rancangan Malaysia", kadEm:"\u{1F4C8}", kadFakta:"Rancangan pembangunan negara kini bertujuan mengagihkan hasil ekonomi dengan lebih adil kepada semua kaum dan kawasan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggabungkan iktibar sejarah dengan keperluan semasa.",
 soalan:[
 {j:"pilih",t:"Sebuah kampung di pedalaman kurang menerima pembangunan. Idea manakah paling berasas?",p:["Bina jalan dan kemudahan asas","Memindahkan penduduk ke bandar","Menutup kampung itu terus","Mengabaikan kampung itu terus"],b:0,u:"Pembangunan perlu diagihkan secara adil supaya kampung tidak ketinggalan."},
 {j:"pilih",t:"Sekolah anda mahu memupuk perpaduan. Aktiviti manakah paling sesuai?",p:["Program kejiranan antara kaum","Memisahkan kelas mengikut kaum","Melarang pergaulan","Menganjurkan pertandingan antara kaum sahaja"],b:0,u:"Aktiviti bersama memupuk persefahaman antara kaum."},
 {j:"banyak",t:"Pilih DUA cara memanfaatkan kekayaan negara dengan bijak.",p:["Mengolah hasil bumi di dalam negara","Melatih rakyat dalam teknologi","Menjual bahan mentah dengan murah","Menyerahkan sumber kepada asing"],b:[0,1],u:"Pemprosesan tempatan dan latihan kemahiran menambah nilai kepada sumber negara."},
 {j:"pilih",t:"Kelas anda perlu menyiapkan projek bersama. Sikap bermuafakat yang betul ialah:",p:["Berbincang dan membahagikan tugas","Seorang bekerja, yang lain berehat","Setiap orang bekerja secara terasing","Menyalahkan ketua"],b:0,u:"Muafakat bermaksud berbincang dan bekerjasama."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menggalakkan sikap gigih dalam kalangan murid?",p:["Program mentor dan latihan kemahiran","Memberi markah tanpa usaha langsung","Menghapuskan ujian di sekolah","Mengelak cabaran sepanjang masa"],b:0,u:"Mentor dan latihan membantu murid terus berusaha."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perpaduan tidak perlu dibina, ia datang sendiri.\" Respons manakah paling rasional?",p:["Perlu dipupuk secara sengaja","Betul, ia datang sendiri tanpa usaha","Betul, ia tidak penting kepada kita","Perpaduan khusus untuk orang dewasa"],b:0,u:"Sejarah menunjukkan pemisahan kaum menjarakkan hubungan, jadi perpaduan perlu dipupuk."},
 {j:"pilih",t:"Bagaimanakah murid menyumbang kepada keharmonian di sekolah?",p:["Menghormati rakan pelbagai kaum","Mengasingkan rakan mengikut kaum","Mengejek budaya orang lain","Mengelak berbual"],b:0,u:"Sikap hormat menjamin keharmonian."},
 {j:"pilih",t:"Mengapakah pembangunan perlu mengambil kira keharmonian rakyat?",p:["Kemajuan mantap apabila bersatu","Pembangunan tidak memerlukan rakyat","Keharmonian tidak penting langsung","Pembangunan hanya untuk bandar sahaja"],b:0,u:"Kemajuan yang dikongsi bersama lebih mantap dan berkekalan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea pembangunan negara yang dapat menjamin keharmonian rakyat berbilang kaum.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada kesan pentadbiran British (contoh: pemisahan kaum, pembangunan tidak sekata, keuntungan ke luar negara, prasarana yang diwarisi). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat (contohnya dasar pecah dan perintah, ekonomi dualisme), mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti perpaduan, muafakat, gigih dan memanfaatkan kekayaan negara."}}
];

module.exports = {
  id:"s3b6", tingkatan:3, kod:"6.0 Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial",
  tajuk:"Landasan dan Ladang",
  subtajuk:"Sejarah Ting. 3 · Bab 6 Kesan Pentadbiran Barat terhadap Ekonomi dan Sosial",
  spi:SPI["7.6"],
  ulasan:{
   1:"{n} mengetahui kesan pentadbiran Barat terhadap ekonomi dan sosial. Langkah seterusnya ialah memahami cara pentadbiran Barat mempengaruhi ekonomi.",
   2:"{n} dapat menjelaskan kesan pentadbiran Barat dengan contoh. Perlu lebih latihan mengklasifikasikan kesan sebelum bergerak ke TP3.",
   3:"{n} boleh mengklasifikasikan kesan pentadbiran Barat terhadap ekonomi dan sosial. Galakkan membanding beza kedua-duanya.",
   4:"{n} mampu membanding beza kesan pentadbiran Barat terhadap ekonomi dan sosial. Seterusnya latih membuat penilaian tentang kesannya pada kehidupan hari ini.",
   5:"{n} dapat membuat penilaian kesan pentadbiran Barat yang mempengaruhi kehidupan hari ini. Sudah bersedia melahirkan idea pembangunan negara.",
   6:"{n} berjaya melahirkan idea pembangunan negara demi keharmonian rakyat. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kesan Pentadbiran Barat. Cadangan: ulang hentian pertama sambil membina jadual kesan ekonomi dan sosial dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1874", label:"Perjanjian Pangkor"},
     {masa:"1877", label:"Benih getah dibawa"},
     {masa:"1885", label:"Kereta api pertama dibuka"},
     {masa:"1896", label:"Negeri-negeri Melayu Bersekutu dibentuk"}],
     kapsyen:"Rajah 1 · Perkembangan ekonomi moden",
     alt:"Garis masa menegak: 1874 Perjanjian Pangkor; 1877 benih getah dibawa; 1885 kereta api pertama dibuka; 1896 Negeri-negeri Melayu Bersekutu dibentuk"},
   p1:petikan(1, "Kemajuan yang tidak sekata",
     ["Pentadbiran British membina jalan raya, kereta api, hospital dan bandar. Perhubungan menjadi lebih mudah, dan kemudahan kesihatan bertambah.",
      "Namun, keuntungan lombong dan ladang banyak dibawa ke luar negara oleh syarikat British. Pekerja imigran memenuhi bandar dan ladang, lalu masyarakat menjadi berbilang kaum, tetapi mereka tinggal dan bekerja secara berasingan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
