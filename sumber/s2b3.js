/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 3 Sosiobudaya Masyarakat Kerajaan
   Alam Melayu. Standard Kandungan 5.2 Warisan Kerajaan Alam Melayu, Standard Pembelajaran
   5.2.3 serta K5.2.6 hingga K5.2.9 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf).
   Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Bilik Prasasti", sk:"5.2.3 Bahasa, tulisan dan persuratan", lampiran:null,
 kadNama:"Huruf Pallava", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Tulisan Pallava berasal dari India Selatan. Masyarakat Alam Melayu menggunakannya untuk menulis bahasa Melayu Kuno pada batu bersurat.",
 bosKadNama:"Nagarakertagama", bosKadEm:"\u{1F4DC}", bosKadFakta:"Nagarakertagama dikarang oleh Mpu Prapanca pada tahun 1365. Ia menceritakan kegemilangan Majapahit pada zaman Hayam Wuruk.",
 soalan:[
 {j:"pilih",t:"Bahasa yang digunakan pada Batu Bersurat Kedukan Bukit ialah:",p:["Melayu Kuno","Arab","Cina","Latin"],b:0,u:"Batu Bersurat Kedukan Bukit (683 M) ditulis dalam bahasa Melayu Kuno."},
 {j:"pilih",t:"Tulisan yang digunakan pada batu bersurat Srivijaya ialah:",p:["Pallava","Jawi","Rumi","Kanji"],b:0,u:"Batu bersurat Srivijaya ditulis dalam huruf Pallava dari India Selatan."},
 {j:"pilih",t:"Bahasa yang digunakan dalam upacara agama Hindu dan Buddha ialah:",p:["Sanskrit","Melayu Kuno","Parsi","Tamil moden"],b:0,u:"Sanskrit ialah bahasa kitab dan upacara agama Hindu-Buddha."},
 {j:"pilih",t:"Kitab Nagarakertagama dikarang oleh:",p:["Mpu Prapanca","Tun Sri Lanang","Gajah Mada","Hayam Wuruk"],b:0,u:"Mpu Prapanca mengarang Nagarakertagama pada tahun 1365."},
 {j:"banyak",t:"Pilih DUA batu bersurat dari zaman Srivijaya.",p:["Kedukan Bukit","Talang Tuo","Batu Bersurat Terengganu","Batu Bersurat Pagoh"],b:[0,1],u:"Kedukan Bukit (683 M) dan Talang Tuo (684 M) ialah batu bersurat Srivijaya."},
 {j:"pilih",t:"Tulisan Kawi banyak digunakan dalam kerajaan:",p:["Majapahit","Funan","Champa","Gangga Negara"],b:0,u:"Tulisan Kawi berkembang di Jawa dan digunakan dalam kerajaan Majapahit."},
 {j:"pilih",t:"Bahasa yang menjadi lingua franca di pelabuhan Alam Melayu ialah bahasa:",p:["Melayu","Latin","Yunani","Sepanyol"],b:0,u:"Bahasa Melayu menjadi bahasa perhubungan antara pedagang di pelabuhan Alam Melayu."},
 {j:"pilih",t:"Batu bersurat ialah sumber sejarah yang berbentuk:",p:["Tulisan pada batu","Lukisan pada kain","Cerita lisan","Rakaman suara"],b:0,u:"Batu bersurat ialah batu yang dipahat dengan tulisan, iaitu sumber bertulis."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan yang betul.",p:["Kedukan Bukit: Melayu Kuno","Nagarakertagama: Majapahit","Pallava: India Selatan","Kawi: Rom","Sanskrit: China"],b:[0,1,2],u:"Kedukan Bukit berbahasa Melayu Kuno, Nagarakertagama tentang Majapahit, Pallava dari India Selatan. Kawi dari Jawa, Sanskrit dari India."}},

{n:2, tempat:"Taman Candi", sk:"5.2.3 Seni bina dan struktur sosial", lampiran:null,
 kadNama:"Candi Bata", kadEm:"\u{1F9F1}", kadFakta:"Candi di My Son, Champa, dibina daripada bata merah yang disusun rapat. Ia menunjukkan kemahiran tukang Champa.",
 bosKadNama:"Golongan Diperintah", bosKadEm:"\u{1F465}", bosKadFakta:"Rakyat biasa seperti petani, nelayan, tukang dan pedagang tempatan menjadi tulang belakang ekonomi kerajaan.",
 soalan:[
 {j:"pilih",t:"Angkor Wat terletak di negara:",p:["Kemboja","Indonesia","Malaysia","Vietnam"],b:0,u:"Angkor Wat terletak di Siem Reap, Kemboja."},
 {j:"pilih",t:"Candi Bukit Batu Pahat terletak di:",p:["Lembah Bujang","Palembang","Trowulan","Oc Eo"],b:0,u:"Candi Bukit Batu Pahat ialah candi Kedah Tua di Lembah Bujang."},
 {j:"pilih",t:"Tapak candi My Son dikaitkan dengan kerajaan:",p:["Champa","Majapahit","Srivijaya","Kedah Tua"],b:0,u:"My Son ialah kompleks candi kerajaan Champa di Vietnam."},
 {j:"pilih",t:"Bahan utama candi di Champa ialah:",p:["Bata","Kaca","Besi","Buluh"],b:0,u:"Candi Champa terkenal dengan binaan bata merah."},
 {j:"banyak",t:"Pilih DUA golongan yang termasuk golongan diperintah.",p:["Rakyat biasa","Hamba","Raja","Pembesar"],b:[0,1],u:"Rakyat biasa dan hamba ialah golongan diperintah."},
 {j:"pilih",t:"Golongan yang berada di lapisan paling bawah dalam masyarakat ialah:",p:["Hamba","Pedagang","Petani","Tukang"],b:0,u:"Hamba berada di lapisan paling bawah dalam struktur sosial."},
 {j:"pilih",t:"Fungsi utama candi pada zaman kerajaan Alam Melayu ialah:",p:["Tempat ibadat","Gudang barang dagangan","Pasar","Pelabuhan"],b:0,u:"Candi dibina sebagai tempat ibadat dan upacara keagamaan."},
 {j:"pilih",t:"Golongan yang mengetuai upacara keagamaan di candi ialah:",p:["Pendeta","Nelayan","Hamba","Saudagar"],b:0,u:"Pendeta seperti brahmin dan sami mengetuai upacara keagamaan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan candi dan kerajaannya yang betul.",p:["Angkor Wat: Angkor","My Son: Champa","Bukit Batu Pahat: Kedah Tua","Angkor Wat: Srivijaya","My Son: Gangga Negara"],b:[0,1,2],u:"Angkor Wat milik Angkor, My Son milik Champa dan Bukit Batu Pahat milik Kedah Tua."}},

{n:3, tempat:"Bengkel Tukang", sk:"5.2.3 Mengaplikasikan pengetahuan sosiobudaya", lampiran:null,
 kadNama:"Bahasa Perhubungan", kadEm:"\u{1F5E3}\u{FE0F}", kadFakta:"Pedagang dari pelbagai bangsa berhubung dalam bahasa Melayu di pelabuhan. Inilah sebabnya bahasa Melayu tersebar luas di Asia Tenggara.",
 bosKadNama:"Pengaruh Diadaptasi", bosKadEm:"\u{1F504}", bosKadFakta:"Masyarakat Alam Melayu meminjam huruf Pallava tetapi menggunakannya untuk menulis bahasa mereka sendiri.",
 soalan:[
 {j:"pilih",t:"Seorang pedagang Arab dan pedagang China bertemu di Srivijaya. Bahasa manakah paling mungkin mereka gunakan?",p:["Melayu","Latin","Inggeris","Jepun"],b:0,u:"Bahasa Melayu ialah lingua franca di pelabuhan Alam Melayu."},
 {j:"pilih",t:"Seorang ahli arkeologi menemui batu bertulis huruf Pallava. Apakah kesimpulan awalnya?",p:["Ada pengaruh India","Ia batu dari Eropah","Ia dibina pada abad ke-20","Ia tiada nilai sejarah"],b:0,u:"Huruf Pallava berasal dari India Selatan, jadi ia petanda pengaruh India."},
 {j:"pilih",t:"Murid diminta mencari bukti seni bina Kedah Tua. Ke manakah mereka patut pergi?",p:["Lembah Bujang","Siem Reap","Palembang","Trowulan"],b:0,u:"Tinggalan candi Kedah Tua terdapat di Lembah Bujang."},
 {j:"banyak",t:"Pilih DUA sumber untuk mengkaji persuratan Majapahit.",p:["Nagarakertagama","Batu bersurat berhuruf Kawi","Hikayat Hang Tuah karya Melaka","Sejarah Melayu karya Johor"],b:[0,1],u:"Nagarakertagama dan batu bersurat berhuruf Kawi berkaitan Majapahit. Dua lagi karya zaman kesultanan Melayu."},
 {j:"pilih",t:"Seorang tukang Champa mahu membina candi. Bahan manakah paling mungkin digunakannya?",p:["Bata merah","Konkrit","Keluli","Plastik"],b:0,u:"Tukang Champa terkenal membina candi daripada bata merah."},
 {j:"pilih",t:"Seorang petani di Angkor tergolong dalam golongan:",p:["Rakyat biasa","Pembesar","Kerabat diraja","Pendeta"],b:0,u:"Petani ialah rakyat biasa dalam golongan diperintah."},
 {j:"pilih",t:"Gambar ukiran pada dinding Angkor Wat boleh digunakan untuk mengkaji:",p:["Kehidupan masyarakat","Harga barang hari ini","Cuaca esok","Peta jalan raya"],b:0,u:"Ukiran relief menggambarkan peperangan, upacara dan kehidupan harian masyarakat Angkor."},
 {j:"pilih",t:"Mengapakah bahasa Melayu mudah tersebar ke seluruh Alam Melayu?",p:["Digunakan dalam perdagangan","Dipaksa oleh tentera Rom","Diajar di universiti Eropah","Bahasa lain tidak wujud"],b:0,u:"Pedagang menggunakan bahasa Melayu di pelabuhan, lalu ia tersebar bersama perdagangan."}],
 bos:{j:"pilih",t:"Bahasa Melayu Kuno ditulis dengan huruf Pallava. Ini contoh:",p:["Penyesuaian pengaruh luar","Penolakan pengaruh luar","Penjajahan budaya oleh Eropah","Ketiadaan bahasa tempatan"],b:0,u:"Masyarakat Alam Melayu meminjam huruf India untuk menulis bahasa sendiri, iaitu penyesuaian."}},

{n:4, tempat:"Makmal Sumber", sk:"5.2.3 Menganalisis sosiobudaya", lampiran:"p1",
 kadNama:"Bukti Bertulis", kadEm:"\u{1F50D}", kadFakta:"Batu bersurat membantu sejarawan mengetahui nama pemerintah, peristiwa dan bahasa yang digunakan pada sesuatu zaman.",
 bosKadNama:"Bahasa Melayu Bertahan", bosKadEm:"\u{1F4D6}", bosKadFakta:"Bahasa Melayu digunakan sejak sekurang-kurangnya abad ke-7. Hari ini ia bahasa kebangsaan Malaysia.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah isi Batu Bersurat Talang Tuo?",p:["Pembinaan taman","Pengisytiharan perang","Senarai cukai","Undang-undang laut"],b:0,u:"Petikan menyatakan Talang Tuo merekodkan pembinaan taman Sriksetra untuk kesejahteraan rakyat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah buktinya bahasa Melayu sudah berkembang pada abad ke-7?",p:["Bahasa Melayu Kuno pada batu bersurat","Pedagang China menulis kitab","Candi dibina dengan bata","Raja Angkor berbahasa Khmer"],b:0,u:"Batu bersurat abad ke-7 ditulis dalam bahasa Melayu Kuno."},
 {j:"pilih",t:"Berdasarkan Petikan 1, perkataan Sanskrit dalam batu bersurat menunjukkan:",p:["Pengaruh India","Pengaruh Eropah","Pengaruh Jepun","Tiada pengaruh luar"],b:0,u:"Sanskrit berasal dari India, jadi ia menunjukkan pengaruh India."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA maklumat yang boleh diperoleh daripada batu bersurat.",p:["Nama pemerintah","Bahasa yang digunakan","Harga minyak hari ini","Cuaca pada tahun 2026"],b:[0,1],u:"Batu bersurat merekodkan nama pemerintah dan memperlihatkan bahasa zaman itu."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pemerintah membina taman Sriksetra?",p:["Kesejahteraan rakyat","Memamerkan kekayaan kepada musuh","Menyimpan barang dagangan","Tempat latihan tentera"],b:0,u:"Petikan menyatakan taman itu dibina untuk kesejahteraan semua makhluk."},
 {j:"pilih",t:"Bandingkan seni bina Champa dan Angkor. Pernyataan manakah BETUL?",p:["Kedua-duanya membina candi","Kedua-duanya membina masjid","Champa membina piramid","Angkor tidak membina apa-apa"],b:0,u:"Champa dan Angkor sama-sama membina candi sebagai tempat ibadat."},
 {j:"pilih",t:"Mengapakah raja dan pembesar berada di lapisan atas masyarakat?",p:["Memegang kuasa pemerintahan","Paling ramai bilangannya","Paling banyak bekerja di sawah","Dipilih oleh pedagang asing"],b:0,u:"Raja dan pembesar memegang kuasa untuk memerintah dan mentadbir."},
 {j:"pilih",t:"Apakah kesan perdagangan kepada bahasa masyarakat Alam Melayu?",p:["Kata pinjaman bertambah","Bahasa Melayu lenyap","Semua orang berbahasa Latin","Tulisan dihapuskan"],b:0,u:"Hubungan dengan pedagang asing menambah kata pinjaman seperti dari Sanskrit."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Batu bersurat ialah bukti penting","Batu bersurat tidak berguna","Srivijaya tidak tahu menulis","Bahasa Melayu bermula abad ke-20"],b:0,u:"Batu bersurat membuktikan penggunaan bahasa Melayu, nama pemerintah dan pengaruh India."}},

{n:5, tempat:"Dewan Penilai Budaya", sk:"5.2.3 · K5.2.7 · K5.2.8 Menilai sosiobudaya", lampiran:null,
 kadNama:"Warisan Hidup", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Angkor Wat dan My Son kini disenaraikan sebagai Tapak Warisan Dunia UNESCO.",
 bosKadNama:"Menghargai Warisan", bosKadEm:"\u{2764}\u{FE0F}", bosKadFakta:"Menghargai warisan bermaksud mengetahui, memelihara dan berbangga dengannya, bukan sekadar mengingat namanya.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah batu bersurat Srivijaya amat berharga?",p:["Bukti awal bahasa Melayu","Batunya diperbuat daripada emas tulen","Ia dibina oleh Rom","Ia menceritakan dongeng"],b:0,u:"Batu bersurat ialah bukti bertulis awal penggunaan bahasa Melayu."},
 {j:"pilih",t:"Seorang murid berkata, \"Candi hanyalah timbunan batu lama.\" Penilaian manakah paling tepat?",p:["Kurang tepat, candi bukti kemahiran","Tepat, candi tiada nilai","Tepat, candi patut diruntuhkan","Kurang tepat, candi dibina pada abad ini"],b:0,u:"Candi membuktikan kemahiran seni bina, kepercayaan dan kemajuan masyarakat zaman itu."},
 {j:"pilih",t:"Antara berikut, sumbangan sosiobudaya manakah paling kekal hingga hari ini?",p:["Bahasa Melayu","Konsep dewaraja","Tulisan Pallava","Upacara di candi"],b:0,u:"Bahasa Melayu masih digunakan sebagai bahasa kebangsaan dan bahasa perhubungan."},
 {j:"banyak",t:"Pilih DUA alasan kita wajar memelihara candi Lembah Bujang.",p:["Bukti tamadun awal","Sumber kajian sejarah","Batunya boleh dijual","Kawasannya boleh dijadikan kilang"],b:[0,1],u:"Candi ialah bukti tamadun dan sumber kajian. Menjualnya atau membina kilang memusnahkan warisan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang pengaruh India dalam budaya Alam Melayu?",p:["Ia diterima dan disesuaikan","Ia menggantikan budaya tempatan sepenuhnya","Ia tidak memberi kesan","Ia ditolak sepenuhnya"],b:0,u:"Masyarakat Alam Melayu menerima pengaruh India dan menyesuaikannya dengan budaya sendiri."},
 {j:"pilih",t:"Mengapakah struktur sosial yang jelas penting kepada kerajaan pada zaman itu?",p:["Setiap golongan tahu peranannya","Ia menghapuskan tugas pembesar","Ia menjadikan rakyat biasa raja","Ia menghalang rakyat bekerja"],b:0,u:"Struktur sosial yang jelas memastikan setiap golongan menjalankan peranan masing-masing."},
 {j:"pilih",t:"Antara karya berikut, yang manakah paling membantu sejarawan memahami Majapahit?",p:["Nagarakertagama","Hikayat Merong Mahawangsa","Tuhfat al-Nafis","Misa Melayu"],b:0,u:"Nagarakertagama dikarang pada zaman Majapahit dan menceritakan kerajaan itu."},
 {j:"pilih",t:"Mengapakah Angkor Wat diiktiraf sebagai Tapak Warisan Dunia?",p:["Nilai seni bina dan sejarahnya tinggi","Ia bangunan paling baharu","Ia jarang dilawati pelancong","Ia dibina di Eropah"],b:0,u:"Angkor Wat mempunyai nilai seni bina dan sejarah yang luar biasa kepada dunia."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang sosiobudaya kerajaan Alam Melayu?",p:["Ia maju dan menjadi warisan kita","Ia tiada sumbangan kepada dunia","Ia sepenuhnya ditiru dari luar","Ia hanya cerita dongeng"],b:0,u:"Bahasa, tulisan, persuratan dan seni bina Alam Melayu membuktikan kemajuan yang diwarisi hingga kini."}},

{n:6, tempat:"Studio Warisan Budaya", sk:"K5.2.7 hingga K5.2.9 Menghargai warisan dan iktibar", lampiran:null,
 kadNama:"Bahasa Kebangsaan", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Perkara 152 Perlembagaan Persekutuan menetapkan bahasa Melayu sebagai bahasa kebangsaan Malaysia.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang baik menggabungkan fakta sejarah dengan cara moden yang menarik minat remaja.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memartabatkan bahasa Melayu. Idea manakah paling berasas?",p:["Pameran sejarah bahasa Melayu","Melarang semua bahasa lain","Menghafal kamus","Menghapuskan kelas bahasa"],b:0,u:"Pameran sejarah bahasa Melayu sejak batu bersurat memupuk rasa bangga terhadap bahasa kebangsaan."},
 {j:"pilih",t:"Kelab Sejarah mahu memperkenalkan tulisan purba. Aktiviti manakah paling sesuai?",p:["Bengkel menulis huruf Pallava","Menconteng dinding sekolah","Menyalin buku teks","Bermain bola sepak"],b:0,u:"Bengkel menulis huruf Pallava memberi pengalaman langsung tentang tulisan purba."},
 {j:"banyak",t:"Pilih DUA cara menghargai warisan seni bina Alam Melayu.",p:["Melawat muzium arkeologi","Menyertai program pemuliharaan","Mengukir nama pada dinding candi","Mengambil bata sebagai cenderamata"],b:[0,1],u:"Lawatan muzium dan program pemuliharaan menghargai warisan. Mengukir dan mengambil bata merosakkannya."},
 {j:"pilih",t:"Bagaimanakah struktur sosial kerajaan Alam Melayu boleh menjadi iktibar dalam organisasi sekolah?",p:["Peranan setiap orang perlu jelas","Ketua seorang diri bekerja","Peraturan tidak diperlukan","Setiap ahli menjadi ketua"],b:0,u:"Peranan yang jelas menjadikan organisasi teratur, seperti struktur sosial kerajaan dahulu."},
 {j:"pilih",t:"Sebuah syarikat mahu menghasilkan permainan video tentang Angkor Wat. Idea manakah paling rasional?",p:["Gunakan fakta yang disemak ahli sejarah","Ubah sejarah supaya lebih seram","Letakkan Angkor Wat di Eropah","Abaikan fakta sejarah"],b:0,u:"Fakta yang tepat menjadikan permainan itu mendidik dan menghormati warisan."},
 {j:"pilih",t:"Mengapakah kita wajar berbangga dengan persuratan Alam Melayu?",p:["Ia bukti masyarakat celik huruf","Ia ditulis dalam bahasa Eropah","Ia tiada kaitan dengan kita","Ia ditulis pada abad ini"],b:0,u:"Persuratan membuktikan masyarakat Alam Melayu celik huruf dan berilmu sejak dahulu."},
 {j:"pilih",t:"Seorang rakan berkata, \"Bahasa Melayu bahasa baharu.\" Respons manakah paling rasional?",p:["Ia digunakan sejak abad ke-7","Betul, ia dicipta pada 1957","Betul, ia tiada sejarah","Bahasa Melayu berasal dari Eropah"],b:0,u:"Batu bersurat abad ke-7 membuktikan bahasa Melayu sudah lama digunakan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mendokumentasikan warisan budaya di kampung anda?",p:["Rakam temu bual warga emas","Buang barang lama","Lupakan cerita orang tua","Robohkan rumah lama segera"],b:0,u:"Temu bual warga emas merakam sejarah lisan sebelum ia hilang."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk memperkenalkan warisan bahasa, tulisan, persuratan atau seni bina kerajaan Alam Melayu kepada remaja Malaysia.",
  arahan:"Pilih sekurang-kurangnya DUA contoh warisan (contoh: Batu Bersurat Kedukan Bukit, huruf Pallava, Nagarakertagama, Angkor Wat, candi Lembah Bujang). Nyatakan fakta penting, bentuk idea awak (contoh: pameran, video pendek, aplikasi, permainan), cara melaksanakannya dan nilai yang ingin dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang menarik dan boleh dilaksanakan, serta mengaitkannya dengan rasa bangga terhadap warisan dan jati diri."}}
];

module.exports = {
  id:"s2b3", tingkatan:2, kod:"3.0 Sosiobudaya Masyarakat Kerajaan Alam Melayu",
  tajuk:"Prasasti dan Candi",
  subtajuk:"Sejarah Ting. 2 · Bab 3 Sosiobudaya Masyarakat Kerajaan Alam Melayu",
  spi:SPI["5.2"],
  ulasan:{
   1:"{n} dapat menyatakan bahasa, tulisan, persuratan dan seni bina kerajaan Alam Melayu. Langkah seterusnya ialah memahami struktur sosial masyarakatnya.",
   2:"{n} memahami sosiobudaya masyarakat kerajaan Alam Melayu. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang sosiobudaya kerajaan Alam Melayu dalam pelbagai situasi. Galakkan menganalisis sumber seperti batu bersurat.",
   4:"{n} mampu menganalisis maklumat daripada sumber sejarah tentang sosiobudaya Alam Melayu. Seterusnya latih menilai nilai warisan itu.",
   5:"{n} dapat membuat penilaian yang berasas tentang warisan sosiobudaya kerajaan Alam Melayu. Sudah bersedia melahirkan idea untuk memeliharanya.",
   6:"{n} berjaya melahirkan idea yang rasional untuk memperkenalkan warisan sosiobudaya kerajaan Alam Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sosiobudaya Masyarakat Kerajaan Alam Melayu. Cadangan: ulang hentian pertama sambil membina jadual bahasa, tulisan dan candi dengan bimbingan rakan sebaya."
  },
  lampiran:{
   p1:petikan(1, "Batu bersurat Srivijaya",
     ["Batu Bersurat Kedukan Bukit (683 M) dan Talang Tuo (684 M) ditemui di Palembang. Kedua-duanya ditulis dalam bahasa Melayu Kuno dengan huruf Pallava, dan mengandungi banyak perkataan Sanskrit.",
      "Kedukan Bukit menceritakan perjalanan Dapunta Hyang bersama angkatan yang besar. Talang Tuo pula merekodkan pembinaan taman Sriksetra oleh pemerintah untuk kesejahteraan semua makhluk."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
