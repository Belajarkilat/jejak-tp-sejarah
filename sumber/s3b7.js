/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 7 Penentangan Masyarakat Tempatan.
   Standard Kandungan 8.1, Standard Pembelajaran 8.1.1 hingga 8.1.4 serta K8.1.5 hingga K8.1.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pasir Salak", sk:"8.1.1 Matlamat dan bentuk penentangan", lampiran:null,
 kadNama:"Maharaja Lela", kadEm:"\u{2694}\u{FE0F}", kadFakta:"Dato' Maharaja Lela memimpin penentangan di Pasir Salak, Perak, dan membunuh residen J.W.W. Birch pada tahun 1875.",
 bosKadNama:"Tujuan Penentangan", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Penentangan dilakukan untuk mempertahankan kuasa pemerintah, hak ke atas tanah dan maruah bangsa daripada campur tangan British.",
 soalan:[
 {j:"pilih",t:"Tokoh yang menentang British di Pasir Salak, Perak, ialah:",p:["Dato' Maharaja Lela","Dato' Bahaman dari Pahang","Mat Salleh dari Sabah","Rentap dari Sarawak"],b:0,u:"Dato' Maharaja Lela memimpin penentangan di Pasir Salak."},
 {j:"pilih",t:"Residen British yang dibunuh di Pasir Salak ialah:",p:["J.W.W. Birch","Frank Swettenham","Hugh Clifford","Francis Light"],b:0,u:"J.W.W. Birch dibunuh pada tahun 1875."},
 {j:"pilih",t:"Dato' Bahaman memimpin penentangan di negeri:",p:["Pahang","Perak","Kelantan","Terengganu"],b:0,u:"Dato' Bahaman menentang British di Pahang."},
 {j:"pilih",t:"Mat Salleh memimpin penentangan di:",p:["Sabah","Sarawak","Selangor","Johor"],b:0,u:"Mat Salleh menentang Syarikat Borneo Utara British di Sabah."},
 {j:"banyak",t:"Pilih DUA tokoh penentang British di Semenanjung Tanah Melayu.",p:["Dato' Maharaja Lela","Dato' Bahaman","Mat Salleh","Rentap"],b:[0,1],u:"Maharaja Lela di Perak dan Bahaman di Pahang. Mat Salleh dan Rentap di Borneo."},
 {j:"pilih",t:"Rentap memimpin penentangan masyarakat Iban di:",p:["Sarawak","Sabah di utara","Perak di barat","Kedah di utara"],b:0,u:"Rentap menentang rejim Brooke di Sarawak."},
 {j:"pilih",t:"Antara matlamat utama penentangan masyarakat tempatan ialah:",p:["Mempertahankan maruah bangsa","Mendapatkan cukai lebih tinggi","Membina ladang getah","Memperluas lombong"],b:0,u:"Penentangan bertujuan mempertahankan hak dan maruah bangsa."},
 {j:"pilih",t:"Bentuk penentangan masyarakat tempatan termasuk:",p:["Penentangan bersenjata","Perjanjian dagang antara kerajaan","Perkahwinan diraja dua negeri","Pertandingan sukan antara negeri"],b:0,u:"Penentangan banyak berbentuk perang dan serangan bersenjata."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh dan tempat yang betul.",p:["Maharaja Lela: Perak","Dato' Bahaman: Pahang","Mat Salleh: Sabah","Rentap: Sabah","Tok Janggut: Perak"],b:[0,1,2],u:"Rentap di Sarawak dan Tok Janggut di Kelantan."}},

{n:2, tempat:"Bilik Kronologi Perjuangan", sk:"8.1.2 · 8.1.3 Kesan pentadbiran Barat dan urutan peristiwa", lampiran:"gm1",
 kadNama:"Mat Kilau", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Mat Kilau, anak Tok Gajah, turut berjuang bersama Dato' Bahaman menentang British di Pahang.",
 bosKadNama:"Tok Janggut", bosKadEm:"\u{2694}\u{FE0F}", bosKadFakta:"Tok Janggut memimpin penentangan rakyat Pasir Puteh, Kelantan, pada tahun 1915 kerana cukai tanah yang membebankan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Rentap menentang Brooke","Pasir Salak 1875","Bahaman bangkit di Pahang","Tok Janggut di Kelantan"],b:0,u:"Rentap menentang Brooke sekitar 1853, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Pasir Salak berlaku?",p:["1875","1853","1891","1915"],b:0,u:"Rajah 1 menunjukkan Pasir Salak pada 1875."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Rentap menentang rejim Brooke","Pasir Salak","Bahaman bangkit di Pahang","Tok Janggut di Kelantan"],b:[0,1,2,3],u:"1853, 1875, 1891 dan 1915."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Pasir Salak dan Tok Janggut?",p:["40 tahun","16 tahun","62 tahun","24 tahun"],b:0,u:"1915 tolak 1875 ialah 40 tahun."},
 {j:"pilih",t:"Penentangan Tok Janggut dicetuskan oleh:",p:["Cukai tanah yang sangat membebankan","Larangan menanam padi di kampung","Peraturan sekolah baharu di Pasir Puteh","Larangan menangkap ikan di laut"],b:0,u:"Cukai tanah yang tinggi mencetuskan penentangan di Kelantan."},
 {j:"pilih",t:"Dato' Bahaman marah kepada British kerana:",p:["Kuasa cukai diambil alih","Gaji pegawai Melayu dinaikkan","Sekolah dibina di Pahang","Lombong baharu ditutup"],b:0,u:"Kuasa tradisional pembesar mengutip cukai diambil alih oleh British."},
 {j:"pilih",t:"Mat Salleh menentang Syarikat Borneo Utara British kerana:",p:["Cukai dan peraturan membebankan","Syarikat membina banyak sekolah","Syarikat membuka hospital percuma","Syarikat menghapuskan semua cukai"],b:0,u:"Cukai dan peraturan yang membebankan menyebabkan Mat Salleh bangkit."},
 {j:"banyak",t:"Pilih DUA sebab penentangan masyarakat tempatan.",p:["Kuasa pemerintah dan pembesar terjejas","Cukai dan peraturan membebankan","Kemakmuran rakyat semakin bertambah","Sekolah dibuka percuma di setiap kampung"],b:[0,1],u:"Kuasa tradisional terjejas dan cukai membebankan menjadi punca penentangan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Rentap dan Bahaman?",p:["38 tahun","22 tahun","62 tahun","16 tahun"],b:0,u:"1891 tolak 1853 ialah 38 tahun."}},

{n:3, tempat:"Kubu Pahang", sk:"8.1.2 · 8.1.3 Aplikasi pengetahuan penentangan", lampiran:null,
 kadNama:"Gerila", kadEm:"\u{1F333}", kadFakta:"Pejuang tempatan menggunakan taktik gerila: menyerang secara mengejut dan berundur ke hutan, kerana senjata mereka kalah daripada British.",
 bosKadNama:"Kubu Bukit Sadok", bosKadEm:"\u{26F0}\u{FE0F}", bosKadFakta:"Rentap mempertahankan kubu di Bukit Sadok selama beberapa tahun sebelum akhirnya terpaksa berundur.",
 soalan:[
 {j:"pilih",t:"Seorang pembesar Pahang mendapati British mengambil alih kuasa memungut cukai. Tindakan yang menunjukkan penentangan ialah:",p:["Mengangkat senjata","Membayar cukai kepada British","Berpindah ke Singapura","Menerima gaji British"],b:0,u:"Dato' Bahaman mengangkat senjata kerana kuasa pembesar terjejas."},
 {j:"pilih",t:"Pejuang tempatan lebih lemah dari segi senjata. Taktik yang mereka gunakan ialah:",p:["Serangan mengejut dari dalam hutan","Serangan terbuka di padang luas","Pertempuran besar di tengah laut","Perjanjian damai dengan British"],b:0,u:"Taktik gerila sesuai untuk pejuang dengan senjata terhad."},
 {j:"pilih",t:"Rentap membina kubu di Bukit Sadok. Tujuannya ialah:",p:["Mempertahankan diri dari serangan","Membuka lombong bijih timah baharu","Menanam padi di kawasan bukit","Berdagang dengan pedagang asing"],b:0,u:"Kubu di bukit memudahkan pertahanan daripada serangan."},
 {j:"banyak",t:"Pilih DUA tindakan British menumpaskan penentangan.",p:["Menghantar pasukan tentera","Menggunakan senjata api moden","Berunding menyerahkan pentadbiran","Menaikkan gaji pejuang"],b:[0,1],u:"British menghantar tentera bersenjata api moden untuk menumpaskan penentangan."},
 {j:"pilih",t:"Seorang pemimpin penentang ingin kekal selamat selepas serangan. Beliau biasanya:",p:["Berundur ke kawasan hutan","Menyerah diri serta-merta","Berpindah ke Eropah","Meminta bantuan Belanda"],b:0,u:"Hutan memberi perlindungan kepada pejuang tempatan."},
 {j:"pilih",t:"Pasir Salak menjadi tempat penentangan kerana:",p:["Pusat kuasa Dato' Maharaja Lela","Terletak di pulau Singapura","Ibu negeri Pahang sekarang","Lombong terbesar di Selangor"],b:0,u:"Pasir Salak ialah kawasan kuasa Dato' Maharaja Lela."},
 {j:"pilih",t:"Rakyat Pasir Puteh bangkit bersama Tok Janggut kerana:",p:["Beban cukai tanah","Kekurangan sekolah","Banjir besar","Kemarau panjang"],b:0,u:"Cukai tanah menyebabkan rakyat menderita."},
 {j:"pilih",t:"Pengasingan atau buangan negeri dikenakan kepada pemimpin penentang untuk:",p:["Melemahkan gerakan penentangan","Menghargai jasa pemimpin itu","Memberi kuasa pentadbiran kepada beliau","Memajukan perdagangan beliau"],b:0,u:"Pemimpin yang dibuang negeri tidak lagi dapat menggerakkan pengikut."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah paling menunjukkan strategi bijak pejuang tempatan?",p:["Menggunakan hutan dan serangan","Menyerang kubu British secara terbuka","Menyerah diri kepada British","Mengelak pergaduhan sepenuhnya"],b:0,u:"Menggunakan hutan dan serangan mengejut mengimbangi kelemahan senjata."}},

{n:4, tempat:"Arkib Perjuangan", sk:"8.1.3 · 8.1.4 Mencerakinkan maklumat penentangan", lampiran:"p1",
 kadNama:"Punca dan Akibat", kadEm:"\u{1F50D}", kadFakta:"Setiap penentangan mempunyai punca dan akibat sendiri. Menganalisisnya membantu kita memahami sebab pejuang tempatan bangkit.",
 bosKadNama:"Pengorbanan", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Walaupun banyak penentangan ditumpaskan, pengorbanan tokoh tempatan menyemai semangat cinta akan tanah air.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah punca utama penentangan di Pahang?",p:["Kuasa pembesar tempatan terjejas","Cuaca yang tidak baik di Pahang","Kekurangan padi di kampung-kampung","Wabak penyakit yang merebak"],b:0,u:"Petikan menyatakan British menghapuskan kuasa pembesar mengutip cukai."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah akhirnya penentangan Bahaman?",p:["Ditumpaskan dan pemimpin berundur","Bahaman dilantik menjadi Residen","Bahaman memerintah negeri Pahang","Bahaman berpindah ke negara China"],b:0,u:"Penentangan akhirnya ditumpaskan dan Bahaman berundur ke Terengganu dan Siam."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan penentangan terhadap rakyat?",p:["Ramai kehilangan nyawa dan harta","Rakyat menjadi lebih kaya raya","Sekolah dibina di setiap kampung","Lombong dibuka di kawasan itu"],b:0,u:"Penentangan membawa kemusnahan dan kehilangan nyawa."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan penentangan tempatan.",p:["Semangat patriotisme tumbuh","British lebih berhati-hati terhadap adat","Kuasa British dihapuskan serta-merta","Negara merdeka serta-merta"],b:[0,1],u:"Penentangan menyemai semangat patriotisme dan menjadikan British lebih berhati-hati."},
 {j:"pilih",t:"Bandingkan penentangan di Perak dan Pahang. Apakah persamaannya?",p:["Menentang campur tangan British","Dipimpin oleh orang Eropah","Berlaku pada tahun yang sama","Bermula dari laut dan pantai"],b:0,u:"Kedua-duanya menentang campur tangan British dan kehilangan kuasa pembesar."},
 {j:"pilih",t:"Mengapakah penentangan tempatan sukar menang?",p:["Senjata British lebih baik","Pejuang tidak berani berperang","Rakyat menyokong tindakan British","Tiada kubu di Pahang"],b:0,u:"British mempunyai senjata api moden dan pasukan tersusun."},
 {j:"pilih",t:"Apakah kesan penentangan terhadap polisi British?",p:["Lebih berhati-hati dengan adat Melayu","Menghapuskan adat dan agama Melayu","Menamatkan pemerintahan British","Menyerahkan negeri kepada sultan"],b:0,u:"British menjaga hal agama dan adat kerana takut penentangan berulang."},
 {j:"pilih",t:"Apakah yang dapat dianalisis tentang cetusan penentangan?",p:["Hak tempatan terjejas","Rakyat suka berperang","Pejuang mahu menjadi kaya","Penentangan tiada sebab"],b:0,u:"Penentangan lahir apabila hak dan kuasa tempatan terjejas."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Hak yang terjejas mencetuskan penentangan","Kemewahan rakyat mencetuskan penentangan","Penentangan tiada kesan langsung kepada British","Penentangan dibantu sepenuhnya oleh British"],b:0,u:"Kuasa dan hak tempatan yang terjejas mencetuskan penentangan."}},

{n:5, tempat:"Dewan Penilai Wira", sk:"8.1.4 · K8.1.5 · K8.1.6 · K8.1.8 Menjustifikasikan penentangan", lampiran:null,
 kadNama:"Wira Tempatan", kadEm:"\u{1F31F}", kadFakta:"Tokoh seperti Maharaja Lela, Dato' Bahaman, Mat Salleh dan Rentap dihormati sebagai wira kerana berani mempertahankan tanah air.",
 bosKadNama:"Bijak Strategi", bosKadEm:"\u{265F}\u{FE0F}", bosKadFakta:"Strategi yang bijak, seperti menggunakan hutan, dapat mengatasi kekurangan senjata.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah penentangan itu wajar dihormati?",p:["Membela hak dan maruah","Mengganggu keamanan negeri","Mencari kemasyhuran peribadi","Mahu menjadi kaya raya"],b:0,u:"Pejuang mempertahankan hak, tanah air dan maruah bangsa."},
 {j:"pilih",t:"Seorang murid berkata, \"Penentangan tempatan sia-sia kerana tidak menang.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia menyemai patriotisme","Tepat, kerana tiada kesan langsung","Tepat, kerana British yang menang","Kurang tepat, kerana mereka menang"],b:0,u:"Walaupun ditumpaskan, penentangan memberi inspirasi kepada generasi kemudian."},
 {j:"pilih",t:"Antara berikut, yang manakah menunjukkan sifat bijak mengatur strategi?",p:["Hutan dijadikan kubu","Menyerang tanpa perancangan","Mengelak daripada pertempuran","Menyerah diri awal"],b:0,u:"Menggunakan geografi dengan bijak menunjukkan strategi yang baik."},
 {j:"banyak",t:"Pilih DUA kepentingan bermuafakat dalam perjuangan.",p:["Kekuatan bertambah","Pejuang bersatu","Perpecahan berlaku","Musuh lebih mudah menang"],b:[0,1],u:"Muafakat menguatkan perjuangan dan menyatukan pejuang."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kesan penentangan?",p:["Korban besar, patriotisme tumbuh","Kerugian bagi rakyat semata-mata","Kejayaan bagi pejuang semata-mata","Tiada sebarang kesan kepada negara"],b:0,u:"Penentangan menelan korban, tetapi menyemai patriotisme."},
 {j:"pilih",t:"Mengapakah kita wajar menghargai tokoh tempatan sebagai wira?",p:["Mereka berkorban untuk tanah air","Mereka hidup kaya raya di bandar","Mereka tidak pernah mengalami kegagalan","Mereka tinggal di istana raja"],b:0,u:"Wira berkorban untuk mempertahankan tanah air."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada penentangan tempatan?",p:["Kedaulatan negara perlu dipertahankan","Kedaulatan tidak penting langsung","Perang menyelesaikan setiap masalah","Penentangan tiada nilai sejarah"],b:0,u:"Kedaulatan negara ialah hak yang perlu dipertahankan."},
 {j:"pilih",t:"Mengapakah strategi yang bijak penting dalam perjuangan?",p:["Mengatasi kekurangan senjata","Menambah jumlah musuh baharu","Menghentikan perjuangan lebih awal","Menjauhkan sokongan rakyat"],b:0,u:"Strategi yang bijak dapat menebus kelemahan dari segi senjata."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang penentangan masyarakat tempatan?",p:["Sah kerana mempertahankan hak bangsa","Salah kerana mengganggu keamanan","Tidak relevan kepada kehidupan hari ini","Cerita rekaan yang tidak benar"],b:0,u:"Penentangan sah dari sudut mempertahankan hak, tanah air dan maruah bangsa."}},

{n:6, tempat:"Studio Kepimpinan Berwibawa", sk:"K8.1.5 hingga K8.1.8 Kepimpinan berwibawa dan kedaulatan", lampiran:null,
 kadNama:"Hari Pahlawan", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Tugu Negara di Kuala Lumpur menghormati pahlawan yang berkorban untuk negara. Generasi muda wajar mengenang jasa mereka.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil semangat wira tempatan untuk memupuk cinta akan negara.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu mengenang jasa wira tempatan. Idea manakah paling berasas?",p:["Pameran tentang wira negeri","Membuang buku sejarah dari sekolah","Mengabaikan sambutan hari kebangsaan","Mengejek jasa para pahlawan"],b:0,u:"Pameran dan drama memperkenalkan jasa wira kepada murid."},
 {j:"pilih",t:"Kelas anda perlu memilih ketua yang berwibawa. Ciri yang wajar dicontohi daripada pejuang ialah:",p:["Berani dan bijak","Mementingkan diri sendiri","Cepat menyerah kalah","Mengikut kata orang lain"],b:0,u:"Pemimpin berwibawa berani dan bijak mengatur strategi."},
 {j:"banyak",t:"Pilih DUA cara mempertahankan kedaulatan negara hari ini.",p:["Mematuhi undang-undang","Menyokong perpaduan","Menyebarkan fitnah","Merosakkan harta awam"],b:[0,1],u:"Mematuhi undang-undang dan menyokong perpaduan menguatkan negara."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memupuk semangat patriotisme?",p:["Mengibarkan Jalur Gemilang","Mengabaikan lagu kebangsaan","Memadam sejarah negara","Meninggalkan negara ini"],b:0,u:"Mengibarkan bendera ialah lambang cinta akan negara."},
 {j:"pilih",t:"Seorang rakan berkata, \"Wira lama tiada kaitan dengan kita.\" Respons manakah paling rasional?",p:["Mereka berjasa kepada kita","Betul, mereka sudah lama mati","Betul, kita tiada hutang budi","Wira hanya untuk orang tua"],b:0,u:"Kedaulatan yang kita nikmati lahir daripada pengorbanan terdahulu."},
 {j:"pilih",t:"Bagaimanakah murid menghargai pengorbanan tokoh tempatan?",p:["Belajar sejarah bersungguh","Mengejek sejarah negara","Menyalin kerja rakan sekelas","Mengelak kelas sejarah"],b:0,u:"Belajar sejarah ialah cara menghargai jasa wira."},
 {j:"pilih",t:"Pemimpin pelajar menghadapi cabaran. Sikap bijak mengatur strategi ialah:",p:["Merancang dan berbincang","Bertindak mengikut emosi","Mengelak tanggungjawab","Menyalahkan rakan sekelas"],b:0,u:"Merancang dan berbincang ialah asas strategi yang bijak."},
 {j:"pilih",t:"Mengapakah kedaulatan negara perlu dipertahankan oleh semua rakyat?",p:["Kemerdekaan dinikmati bersama","Hanya tentera perlu bertanggungjawab","Kedaulatan tidak penting","Pemimpin sahaja yang peduli"],b:0,u:"Kemerdekaan ialah milik bersama, jadi semua rakyat bertanggungjawab."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang kepimpinan berwibawa untuk memperjuangkan kedaulatan negara pada masa kini.",
  arahan:"Pilih sekurang-kurangnya DUA tokoh atau peristiwa penentangan (contoh: Dato' Maharaja Lela di Pasir Salak 1875, Dato' Bahaman, Mat Salleh, Rentap, Tok Janggut). Terangkan sifat kepimpinan yang wajar dicontohi, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang tokoh penentang, mencadangkan idea kepimpinan yang boleh dilaksanakan, dan menonjolkan nilai seperti keberanian, bermuafakat dan mempertahankan kedaulatan."}}
];

module.exports = {
  id:"s3b7", tingkatan:3, kod:"7.0 Penentangan Masyarakat Tempatan",
  tajuk:"Sumpah Pahlawan",
  subtajuk:"Sejarah Ting. 3 · Bab 7 Penentangan Masyarakat Tempatan",
  spi:SPI["8.1"],
  ulasan:{
   1:"{n} dapat menyatakan penentangan masyarakat tempatan. Langkah seterusnya ialah memahami punca dan urutan peristiwanya.",
   2:"{n} memahami penentangan masyarakat tempatan dengan contoh. Perlu lebih latihan membina urutan peristiwa sebelum bergerak ke TP3.",
   3:"{n} boleh membina urutan peristiwa penentangan masyarakat tempatan. Galakkan mencerakinkan punca dan kesannya.",
   4:"{n} mampu mencerakinkan maklumat tentang penentangan masyarakat tempatan. Seterusnya latih menjustifikasikan penentangan itu.",
   5:"{n} dapat menjustifikasikan penentangan masyarakat tempatan dalam mempertahankan hak dan maruah bangsa. Sudah bersedia menjana idea kepimpinan berwibawa.",
   6:"{n} berjaya menjana idea kepimpinan berwibawa dalam memperjuangkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Penentangan Masyarakat Tempatan. Cadangan: ulang hentian pertama sambil membina jadual tokoh dan tempat penentangan dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira 1853", label:"Rentap menentang rejim Brooke"},
     {masa:"1875", label:"Pasir Salak"},
     {masa:"1891", label:"Dato' Bahaman bangkit di Pahang"},
     {masa:"1915", label:"Tok Janggut di Kelantan"}],
     kapsyen:"Rajah 1 · Beberapa penentangan masyarakat tempatan",
     alt:"Garis masa menegak: kira-kira 1853 Rentap menentang rejim Brooke; 1875 Pasir Salak; 1891 Dato' Bahaman bangkit di Pahang; 1915 Tok Janggut di Kelantan"},
   p1:petikan(1, "Penentangan di Pahang",
     ["Di Pahang, British menghapuskan hak pembesar tempatan memungut cukai. Dato' Bahaman dan pengikutnya, termasuk Mat Kilau dan Tok Gajah, bangkit menentang pada tahun 1891.",
      "Penentangan ini akhirnya ditumpaskan oleh pasukan British yang bersenjata api moden. Ramai yang kehilangan nyawa dan harta, tetapi pengorbanan mereka menyemai semangat patriotisme."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
