/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 3 Pentadbiran Negeri-negeri Melayu Bersekutu.
   Standard Kandungan 7.3, Standard Pembelajaran 7.3.1 hingga 7.3.4 serta K7.3.5 hingga K7.3.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Lombong Larut", sk:"7.3.1 Kekayaan hasil bumi · 7.3.2 Peluasan kuasa British", lampiran:null,
 kadNama:"Bijih Timah", kadEm:"\u{26CF}\u{FE0F}", kadFakta:"Perak dan Selangor kaya dengan bijih timah. Kekayaan inilah yang menarik British campur tangan dalam pentadbiran negeri-negeri itu.",
 bosKadNama:"Empat Negeri", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Perak, Selangor, Negeri Sembilan dan Pahang digabungkan sebagai Negeri-negeri Melayu Bersekutu pada tahun 1896.",
 soalan:[
 {j:"pilih",t:"Negeri-negeri Melayu Bersekutu dibentuk pada tahun:",p:["1896","1874","1909","1948"],b:0,u:"Negeri-negeri Melayu Bersekutu dibentuk pada tahun 1896."},
 {j:"pilih",t:"Negeri-negeri Melayu Bersekutu terdiri daripada Perak, Selangor, Negeri Sembilan dan:",p:["Pahang","Johor","Kedah","Kelantan"],b:0,u:"Empat negeri itu ialah Perak, Selangor, Negeri Sembilan dan Pahang."},
 {j:"pilih",t:"Hasil bumi utama yang menarik British ke Perak dan Selangor ialah:",p:["Bijih timah","Rempah ratus","Kapur barus","Gaharu"],b:0,u:"Perak dan Selangor kaya dengan bijih timah."},
 {j:"pilih",t:"Perjanjian yang menyebabkan British menempatkan Residen di Perak ialah:",p:["Perjanjian Pangkor 1874","Perjanjian London 1824","Perjanjian Bangkok 1909","Perjanjian Persekutuan 1895"],b:0,u:"Perjanjian Pangkor 1874 membawa sistem Residen ke Perak."},
 {j:"banyak",t:"Pilih DUA negeri yang kaya dengan bijih timah.",p:["Perak","Selangor","Kelantan","Perlis"],b:[0,1],u:"Perak dan Selangor terkenal sebagai pengeluar bijih timah utama."},
 {j:"pilih",t:"Pahang terkenal dengan hasil bumi yang berharga iaitu:",p:["Emas","Gambir","Kopi Arab","Lada hitam"],b:0,u:"Pahang kaya dengan emas dan bijih timah."},
 {j:"pilih",t:"Residen pertama Perak yang dibunuh pada tahun 1875 ialah:",p:["J.W.W. Birch","Frank Swettenham","Hugh Clifford","Stamford Raffles"],b:0,u:"J.W.W. Birch dibunuh di Pasir Salak pada tahun 1875."},
 {j:"pilih",t:"Pusat pentadbiran Negeri-negeri Melayu Bersekutu ialah:",p:["Kuala Lumpur","Taiping di Perak","Kuantan di Pahang","Seremban di Negeri Sembilan"],b:0,u:"Kuala Lumpur menjadi pusat pentadbiran Negeri-negeri Melayu Bersekutu."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan negeri dan hasil buminya yang betul.",p:["Perak: bijih timah","Selangor: bijih timah","Pahang: emas","Perak: kapur barus","Selangor: sutera"],b:[0,1,2],u:"Perak dan Selangor kaya bijih timah, Pahang terkenal dengan emas."}},

{n:2, tempat:"Bilik Residen", sk:"7.3.2 · 7.3.3 Pembentukan Negeri-negeri Melayu Bersekutu", lampiran:"gm1",
 kadNama:"Sistem Residen", kadEm:"\u{1F4CB}", kadFakta:"Residen British menasihati sultan dalam semua perkara kecuali agama Islam dan adat Melayu. Nasihat itu wajib dipatuhi.",
 bosKadNama:"Durbar", bosKadEm:"\u{1F451}", bosKadFakta:"Durbar ialah persidangan raja-raja Melayu. Durbar pertama diadakan di Kuala Kangsar pada tahun 1897.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Perjanjian Pangkor","Birch dibunuh","Perjanjian Persekutuan","Durbar pertama"],b:0,u:"Perjanjian Pangkor pada 1874 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Negeri-negeri Melayu Bersekutu dibentuk?",p:["1896","1875","1895","1897"],b:0,u:"Rajah 1 menunjukkan Negeri-negeri Melayu Bersekutu dibentuk pada 1896."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Perjanjian Pangkor","Birch dibunuh","Perjanjian Persekutuan","Durbar pertama"],b:[0,1,2,3],u:"1874, 1875, 1895 dan 1897."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Perjanjian Pangkor dan pembentukan Negeri-negeri Melayu Bersekutu?",p:["22 tahun","21 tahun","23 tahun","1 tahun"],b:0,u:"1896 tolak 1874 ialah 22 tahun."},
 {j:"pilih",t:"Dalam sistem Residen, sultan masih berkuasa dalam hal:",p:["Agama Islam dan adat Melayu","Cukai dan perlombongan bijih","Tentera dan pasukan polis","Tanah dan perdagangan dagang"],b:0,u:"Sultan menjaga agama Islam dan adat Melayu, manakala hal lain dinasihati Residen."},
 {j:"pilih",t:"Ketua pentadbir Negeri-negeri Melayu Bersekutu bergelar:",p:["Residen Jeneral","Gabenor Jeneral Singapura","Penasihat Am British","Undang Yang Empat"],b:0,u:"Frank Swettenham menjadi Residen Jeneral yang pertama."},
 {j:"pilih",t:"Perjanjian Persekutuan 1895 menetapkan bahawa Negeri-negeri Melayu Bersekutu:",p:["Digabungkan di bawah Residen Jeneral","Diserahkan kepada kerajaan Siam","Dipimpin oleh seorang sultan sahaja","Dimerdekakan serta-merta daripada British"],b:0,u:"Empat negeri itu digabungkan di bawah seorang Residen Jeneral."},
 {j:"pilih",t:"Fungsi Durbar pertama pada tahun 1897 ialah:",p:["Raja-raja Melayu berunding","Memilih Gabenor Singapura","Membuka lombong baharu di Kinta","Menandatangani Perjanjian Pangkor"],b:0,u:"Durbar menjadi tempat raja-raja Melayu bertemu, tetapi tidak banyak kuasa membuat keputusan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pembunuhan Birch dan pembentukan Negeri-negeri Melayu Bersekutu?",p:["21 tahun","22 tahun","20 tahun","1 tahun"],b:0,u:"1896 tolak 1875 ialah 21 tahun."}},

{n:3, tempat:"Pejabat Residen Jeneral", sk:"7.3.3 · 7.3.4 Aplikasi pentadbiran Negeri-negeri Melayu Bersekutu", lampiran:null,
 kadNama:"Perkhidmatan Seragam", kadEm:"\u{1F4CA}", kadFakta:"Jabatan seperti kereta api, kesihatan dan kehakiman diseragamkan di seluruh Negeri-negeri Melayu Bersekutu supaya pentadbiran lebih cekap.",
 bosKadNama:"Kuala Lumpur", bosKadEm:"\u{1F3D9}\u{FE0F}", bosKadFakta:"Kuala Lumpur dipilih sebagai ibu negeri kerana ia pusat perlombongan bijih timah dan mudah dihubungkan melalui kereta api.",
 soalan:[
 {j:"pilih",t:"Seorang sultan mahu menukar agama rasmi negeri. Pihak yang berhak memutuskan ialah:",p:["Sultan sendiri","Residen British","Residen Jeneral","Gabenor Singapura"],b:0,u:"Hal agama Islam dan adat Melayu kekal di bawah sultan."},
 {j:"pilih",t:"Seorang Residen mencadangkan cukai baharu atas bijih timah. Sultan perlu:",p:["Mengikut nasihat Residen","Menolak sepenuhnya","Meminta kebenaran Siam","Menunggu keputusan pembesar"],b:0,u:"Sultan mesti menerima nasihat Residen dalam hal pentadbiran selain agama dan adat."},
 {j:"pilih",t:"British mahu mengangkut bijih timah dari lombong ke pelabuhan dengan cepat. Mereka membina:",p:["Jalan kereta api","Jalan kaki yang panjang","Terusan batu di pantai","Tembok kota yang tinggi"],b:0,u:"Kereta api Taiping ke Port Weld dibina pada 1885 untuk mengangkut bijih timah."},
 {j:"banyak",t:"Pilih DUA kesan pentadbiran seragam di Negeri-negeri Melayu Bersekutu.",p:["Pentadbiran lebih cekap","Perkhidmatan dikawal dari pusat","Kuasa sultan bertambah besar","Setiap negeri berdiri sendiri"],b:[0,1],u:"Pentadbiran seragam lebih cekap dan dikawal dari pusat, tetapi kuasa sultan berkurang."},
 {j:"pilih",t:"Pegawai British berhasrat menambah hasil negeri. Langkah yang diambil ialah:",p:["Membuka lombong bijih timah","Menutup pelabuhan utama negeri","Mengharamkan sebarang perdagangan","Menghentikan kutipan cukai tanah"],b:0,u:"Perlombongan bijih timah menjadi sumber hasil utama."},
 {j:"pilih",t:"Seorang pembesar Melayu kehilangan hak mengutip cukai. Hal ini berlaku kerana:",p:["Residen mengambil alih cukai","Sultan menukar agama negeri","Siam menuntut cukai negeri","Belanda memonopoli cukai bijih"],b:0,u:"Pentadbiran British mengambil alih kutipan hasil negeri daripada pembesar."},
 {j:"pilih",t:"Residen Jeneral berpusat di Kuala Lumpur. Kelebihannya ialah:",p:["Dekat lombong dan landasan","Jauh dari kawasan lombong","Terletak di sebuah pulau","Berhampiran sempadan Siam"],b:0,u:"Kuala Lumpur ialah pusat perlombongan dan perhubungan."},
 {j:"pilih",t:"Pegawai Melayu jarang dilantik ke jawatan tinggi. Pentadbiran itu dikuasai oleh:",p:["Pegawai British","Raja-raja Melayu","Pedagang Siam","Pegawai Belanda"],b:0,u:"Jawatan tinggi dalam Perkhidmatan Awam diisi oleh pegawai British."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah paling tepat tentang peranan sultan selepas sistem Residen?",p:["Menjadi ketua agama dan adat","Menjadi ketua pentadbir negeri","Mengetuai angkatan tentera negeri","Menentukan cukai negeri"],b:0,u:"Sultan kekal sebagai ketua agama Islam dan adat Melayu, tetapi kuasa pentadbiran dipegang Residen."}},

{n:4, tempat:"Arkib Persekutuan", sk:"7.3.3 · 7.3.4 Menganalisis keberkesanan pentadbiran", lampiran:"p1",
 kadNama:"Pentadbiran Berkesan", kadEm:"\u{2699}\u{FE0F}", kadFakta:"Pentadbiran British di Negeri-negeri Melayu Bersekutu teratur dan berkesan mengeluarkan bijih timah, tetapi keuntungan banyak mengalir ke luar negara.",
 bosKadNama:"Kuasa Berpindah", bosKadEm:"\u{1F500}", bosKadFakta:"Kuasa sebenar berpindah daripada sultan dan pembesar kepada Residen dan pegawai British.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelebihan pentadbiran bersatu?",p:["Perkhidmatan lebih seragam dan cekap","Setiap negeri berdasarkan adat sendiri","Pembesar menjadi lebih berkuasa","Perdagangan terhenti"],b:0,u:"Petikan menyatakan jabatan diseragamkan dan dikawal dari Kuala Lumpur."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan utama pembinaan jalan kereta api?",p:["Mengangkut bijih timah","Menghantar jemaah haji ke Mekah","Memudahkan perarakan sultan","Menghubungkan kampung nelayan"],b:0,u:"Landasan menghubungkan lombong dengan pelabuhan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, siapakah yang paling banyak mendapat keuntungan daripada bijih timah?",p:["Pemodal British","Petani Melayu di kampung","Pembesar Melayu di istana","Pendeta di surau kampung"],b:0,u:"Keuntungan terutamanya mengalir kepada pemodal dan syarikat British."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan pentadbiran British.",p:["Prasarana seperti jalan dan kereta api bertambah","Kuasa sultan dalam pentadbiran berkurang","Pembesar mengutip cukai seperti dahulu","Rakyat menolak semua pembangunan"],b:[0,1],u:"Prasarana bertambah, tetapi kuasa sultan dalam pentadbiran berkurang."},
 {j:"pilih",t:"Bandingkan pentadbiran sebelum dan selepas sistem Residen. Pernyataan manakah BETUL?",p:["Lebih teratur tetapi dikuasai British","Menjadi lebih lemah dan kucar-kacir","Pembesar bertambah berkuasa","Sultan memegang kuasa pentadbiran"],b:0,u:"Pentadbiran menjadi lebih teratur, tetapi kuasa sebenar di tangan British."},
 {j:"pilih",t:"Mengapakah pentadbiran sistematik membantu kemakmuran ekonomi?",p:["Sumber diuruskan tersusun","Rakyat diminta berhenti bekerja","Cukai dikutip secara rawak","Lombong ditutup untuk umum"],b:0,u:"Pentadbiran yang teratur memajukan perlombongan, pengangkutan dan perdagangan."},
 {j:"pilih",t:"Apakah kelemahan sistem Residen dari sudut kuasa tempatan?",p:["Kuasa sultan dan pembesar berkurang","Rakyat tidak mahu membayar cukai","Kereta api tidak dapat dibina di sini","Lombong tidak dapat dibuka lagi"],b:0,u:"Sultan dan pembesar tidak lagi menentukan hal pentadbiran."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penggabungan empat negeri?",p:["British mahu mengawal sumber","Empat negeri mahu bergabung dengan Siam","Sultan mahu menjadi Gabenor Singapura","British mahu meninggalkan negeri itu"],b:0,u:"Penggabungan memudahkan British mengawal sumber dan hasil secara terpusat."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Maju, tetapi kuasa tempatan berkurang","Berkesan dan memperkukuh kuasa sultan","Gagal dan tidak memajukan negeri itu","Gagal kerana ditentang oleh rakyat"],b:0,u:"Ekonomi berkembang, tetapi kuasa tempatan berkurang."}},

{n:5, tempat:"Dewan Penilai Persekutuan", sk:"7.3.4 · K7.3.5 · K7.3.6 · K7.3.7 Membuat justifikasi", lampiran:null,
 kadNama:"Ilmu Membangun Negara", kadEm:"\u{1F4DA}", kadFakta:"Pentadbir British berjaya kerana mereka berilmu dan teratur. Rakyat kita perlu menguasai ilmu untuk membangunkan negara sendiri.",
 bosKadNama:"Berwaspada", bosKadEm:"\u{1F6A8}", bosKadFakta:"Bantuan asing boleh bermanfaat, tetapi pemimpin perlu berwaspada supaya kedaulatan tidak tergadai.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah British dapat menguasai ekonomi Negeri-negeri Melayu Bersekutu?",p:["Pentadbiran teratur dan modal besar","Rakyat tidak mahu bekerja keras","Sultan tidak mempunyai sebarang tanah","Tiada bijih timah di negeri itu"],b:0,u:"Pentadbiran yang teratur dan modal yang besar memudahkan penguasaan ekonomi."},
 {j:"pilih",t:"Seorang murid berkata, \"Sistem Residen sepenuhnya merugikan negeri.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ada juga kemajuan","Tepat, tiada sebarang kemajuan sama sekali","Tepat, semua rakyat menderita kerugian","Kurang tepat, kerana tiada Residen di negeri"],b:0,u:"Prasarana dan ekonomi maju, tetapi kuasa pemerintah tempatan berkurang."},
 {j:"pilih",t:"Antara berikut, sikap manakah menunjukkan kesediaan menerima perubahan yang membawa kebaikan?",p:["Menerima kemajuan dengan waspada","Menolak setiap perubahan baharu","Menerima apa sahaja tanpa berfikir","Menolak ilmu baharu daripada luar"],b:0,u:"Kita menerima perubahan yang baik dengan sikap berwaspada."},
 {j:"banyak",t:"Pilih DUA alasan kepentingan berilmu dalam membangunkan negara.",p:["Dapat mentadbir dengan cekap","Dapat mengurus sumber sendiri","Dapat menyerahkan sumber kepada asing","Dapat mengelakkan perubahan"],b:[0,1],u:"Ilmu membolehkan negara mentadbir dan mengurus sumber sendiri."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang penggabungan negeri pada 1896?",p:["Cekap tetapi kuasa terhad","Merugikan negeri sepenuhnya","Menguntungkan rakyat sepenuhnya","Tidak membawa sebarang kesan"],b:0,u:"Kecekapan bertambah, tetapi kuasa tempatan berkurang."},
 {j:"pilih",t:"Mengapakah sikap berwaspada terhadap anasir luar penting?",p:["Elakkan kedaulatan tergugat","Elakkan semua pedagang datang","Elakkan pembangunan","Elakkan hubungan dengan negeri lain"],b:0,u:"Kewaspadaan melindungi kedaulatan negara."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada pentadbiran British?",p:["Pentadbiran teratur memajukan negara","Pentadbiran tidak penting langsung","Sultan tidak perlu wujud lagi","Hasil bumi tidak berguna kepada negara"],b:0,u:"Pentadbiran teratur ialah asas kemajuan, tetapi ia perlu dikawal oleh rakyat sendiri."},
 {j:"pilih",t:"Mengapakah pentadbiran yang sistematik wajar diteruskan hari ini?",p:["Menjamin kecekapan perkhidmatan awam","Mengurangkan hasil negara dengan banyak","Menyusahkan rakyat yang bekerja","Memperlahankan pembangunan negara"],b:0,u:"Pentadbiran yang sistematik menjamin perkhidmatan yang cekap kepada rakyat."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang pentadbiran British di Negeri-negeri Melayu Bersekutu?",p:["Maju ekonomi, kuasa tempatan terhad","Menjejaskan ekonomi negeri sepenuhnya","Memperkuat kuasa sultan dan pembesar","Menamatkan perdagangan bijih timah"],b:0,u:"Ekonomi dimajukan, tetapi kuasa tempatan terhad."}},

{n:6, tempat:"Studio Pentadbiran Kompetitif", sk:"K7.3.5 hingga K7.3.8 Pentadbiran kompetitif dan kemakmuran negara", lampiran:null,
 kadNama:"Perkhidmatan Awam", kadEm:"\u{1F3E2}", kadFakta:"Hari ini perkhidmatan awam Malaysia terus menambah baik kecekapan melalui digitalisasi dan latihan kakitangan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil iktibar daripada kelebihan dan kelemahan pentadbiran lalu.",
 soalan:[
 {j:"pilih",t:"Sebuah jabatan kerajaan mahu menjadi lebih cekap. Iktibar daripada pentadbiran Negeri-negeri Melayu Bersekutu ialah:",p:["Seragamkan proses kerja","Tambahkan borang rumit","Hentikan semua latihan","Kurangkan kakitangan terlatih"],b:0,u:"Perkhidmatan seragam menjadikan pentadbiran lebih cekap."},
 {j:"pilih",t:"Sekolah anda mahu mengurus dana kelab dengan teratur. Langkah paling berasas ialah:",p:["Merekod pendapatan dan perbelanjaan","Menyimpan wang tanpa membuat catatan","Meminjamkan wang kepada kawan","Menggunakan wang sesuka hati"],b:0,u:"Rekod yang teratur ialah asas pentadbiran sistematik."},
 {j:"banyak",t:"Pilih DUA cara pentadbiran negara menjadi kompetitif.",p:["Menggunakan teknologi digital","Melatih kakitangan dengan ilmu baharu","Mengelak sebarang perubahan baharu","Mengurangkan perkhidmatan kepada rakyat"],b:[0,1],u:"Teknologi dan latihan menjadikan pentadbiran lebih berdaya saing."},
 {j:"pilih",t:"Seorang pemimpin ingin memajukan sumber negara tanpa kehilangan kuasa. Langkah paling bijak ialah:",p:["Melatih rakyat mengurus sumber sendiri","Menyerahkan pengurusan kepada pihak asing","Menutup semua industri negara","Mengabaikan perancangan jangka panjang"],b:0,u:"Rakyat yang berilmu dapat mengurus sumber sendiri."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memastikan perkhidmatan awam bebas rasuah?",p:["Sistem dalam talian yang telus","Rahsiakan semua rekod","Biarkan pegawai membuat keputusan sendiri","Kurangkan pemantauan"],b:0,u:"Sistem yang telus mengurangkan peluang rasuah."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pentadbiran lama sudah tidak berguna.\" Respons manakah paling rasional?",p:["Kita boleh belajar daripadanya","Betul, ia tiada iktibar langsung","Betul, ia perlu dilupakan terus","Sejarah tidak ada kaitan dengan kita"],b:0,u:"Pentadbiran lama memberi iktibar tentang kecekapan dan keadilan."},
 {j:"pilih",t:"Bagaimanakah murid mengamalkan sikap berilmu dalam membangunkan negara?",p:["Belajar dengan tekun","Mengabaikan pelajaran di sekolah","Meniru kerja rakan sekelas","Menunggu arahan guru sahaja"],b:0,u:"Murid yang berilmu menyumbang kepada pembangunan negara."},
 {j:"pilih",t:"Mengapakah pentadbiran perlu adil kepada semua kaum?",p:["Keharmonian rakyat terjamin","Kaum tertentu dibelakangkan","Perpaduan terjejas","Persaingan tidak sihat berlaku"],b:0,u:"Pentadbiran yang adil memelihara keharmonian."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mewujudkan pentadbiran yang kompetitif bagi menjamin kemakmuran negara.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada pentadbiran Negeri-negeri Melayu Bersekutu (contoh: perkhidmatan seragam, kereta api untuk mengangkut hasil, kuasa tempatan berkurang). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat (contohnya Perjanjian Pangkor 1874, Negeri-negeri Melayu Bersekutu 1896), mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti berilmu, berwaspada dan kecekapan."}}
];

module.exports = {
  id:"s3b3", tingkatan:3, kod:"3.0 Pentadbiran Negeri-negeri Melayu Bersekutu",
  tajuk:"Residen dan Lombong",
  subtajuk:"Sejarah Ting. 3 · Bab 3 Pentadbiran Negeri-negeri Melayu Bersekutu",
  spi:SPI["7.3"],
  ulasan:{
   1:"{n} dapat menyatakan Negeri-negeri Melayu Bersekutu. Langkah seterusnya ialah memahami cara pentadbiran British dijalankan.",
   2:"{n} memahami pentadbiran British di Negeri-negeri Melayu Bersekutu. Perlu lebih latihan menyusun maklumat tentang pembentukannya sebelum bergerak ke TP3.",
   3:"{n} boleh menyusun maklumat tentang pembentukan dan pentadbiran Negeri-negeri Melayu Bersekutu. Galakkan menganalisis keberkesanannya.",
   4:"{n} mampu menganalisis keberkesanan pentadbiran Barat di Negeri-negeri Melayu Bersekutu. Seterusnya latih membuat justifikasi tentang kemakmuran ekonominya.",
   5:"{n} dapat membuat justifikasi tentang penguasaan British terhadap kemakmuran ekonomi. Sudah bersedia melahirkan idea pentadbiran yang kompetitif.",
   6:"{n} berjaya melahirkan idea pentadbiran yang kompetitif untuk menjamin kemakmuran negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Negeri-negeri Melayu Bersekutu. Cadangan: ulang hentian pertama sambil melabel empat negeri pada peta dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1874", label:"Perjanjian Pangkor"},
     {masa:"1875", label:"Birch dibunuh"},
     {masa:"1895", label:"Perjanjian Persekutuan"},
     {masa:"1896", label:"Negeri-negeri Melayu Bersekutu dibentuk"},
     {masa:"1897", label:"Durbar pertama"}],
     kapsyen:"Rajah 1 · Pembentukan Negeri-negeri Melayu Bersekutu",
     alt:"Garis masa menegak: 1874 Perjanjian Pangkor; 1875 Birch dibunuh; 1895 Perjanjian Persekutuan; 1896 Negeri-negeri Melayu Bersekutu dibentuk; 1897 Durbar pertama"},
   p1:petikan(1, "Pentadbiran bersatu dan bijih timah",
     ["Selepas 1896, jabatan seperti kereta api, kesihatan dan kehakiman diseragamkan dan dikawal dari Kuala Lumpur oleh Residen Jeneral. Pentadbiran menjadi lebih cekap dan teratur.",
      "Jalan kereta api dibina untuk mengangkut bijih timah dari lombong ke pelabuhan. Pelaburan dan keuntungan banyak dimiliki oleh syarikat British, manakala sultan dan pembesar kehilangan kuasa pentadbiran."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
