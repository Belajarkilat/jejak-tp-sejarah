/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 10 Sarawak dan Sabah.
   Standard Kandungan 6.4 Sarawak dan Sabah, Standard Pembelajaran 6.4.1 hingga 6.4.4 serta
   K6.4.5 hingga K6.4.8 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf; dalam DSKP
   tercetak sebagai 6.2.1 hingga 6.2.4). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Muara Santubong", sk:"6.4.1 Sarawak dan Sabah dalam Alam Melayu", lampiran:null,
 kadNama:"Santubong", kadEm:"\u{1F3FA}", kadFakta:"Di Santubong, Sarawak, ahli arkeologi menemui tembikar China dan manik yang menunjukkan kawasan itu pusat perdagangan pada abad ke-10 hingga ke-13.",
 bosKadNama:"Sultan Tengah", bosKadEm:"\u{1F451}", bosKadFakta:"Sultan Tengah, kerabat diraja Brunei, menjadi Sultan Sarawak pada abad ke-17.",
 soalan:[
 {j:"pilih",t:"Pada abad ke-15 hingga ke-19, sebahagian besar Sarawak dan Sabah berada di bawah pengaruh Kesultanan:",p:["Brunei","Melaka","Johor","Aceh"],b:0,u:"Sarawak dan Sabah berada di bawah pengaruh Kesultanan Brunei."},
 {j:"pilih",t:"Pantai timur Sabah pernah berada di bawah pengaruh Kesultanan:",p:["Sulu","Kedah","Pahang","Melaka"],b:0,u:"Pantai timur Sabah berada di bawah pengaruh Kesultanan Sulu."},
 {j:"pilih",t:"Tapak perdagangan purba di Sarawak yang menemui tembikar China ialah:",p:["Santubong","Lembah Bujang","Oc Eo","Sungai Batu"],b:0,u:"Santubong ialah tapak perdagangan purba di Sarawak."},
 {j:"pilih",t:"Gua di Sarawak yang terkenal dengan tinggalan manusia prasejarah ialah:",p:["Gua Niah","Gua Cha","Gua Kajang","Gua Tempurung"],b:0,u:"Gua Niah di Sarawak terkenal dengan tinggalan manusia prasejarah."},
 {j:"pilih",t:"Sultan Sarawak pada abad ke-17 ialah:",p:["Sultan Tengah","Sultan Salehuddin","Sultan Muzaffar Syah","Raja Melewar"],b:0,u:"Sultan Tengah menjadi Sultan Sarawak pada abad ke-17."},
 {j:"banyak",t:"Pilih DUA kesultanan yang mempengaruhi Sabah.",p:["Brunei","Sulu","Melaka","Kedah"],b:[0,1],u:"Brunei dan Sulu mempengaruhi Sabah."},
 {j:"pilih",t:"Sungai terpanjang di Malaysia, yang terletak di Sarawak, ialah Sungai:",p:["Rajang","Pahang","Perak","Kinabatangan"],b:0,u:"Sungai Rajang ialah sungai terpanjang di Malaysia."},
 {j:"pilih",t:"Sungai terpanjang di Sabah ialah Sungai:",p:["Kinabatangan","Rajang","Baram","Muar"],b:0,u:"Sungai Kinabatangan ialah sungai terpanjang di Sabah."}],
 bos:{j:"banyak",t:"Pilih SEMUA bukti Sarawak dan Sabah sebahagian daripada Alam Melayu.",p:["Di bawah pengaruh Brunei","Tapak perdagangan Santubong","Penggunaan bahasa Melayu","Di bawah pengaruh Rom","Bahasa Latin sebagai bahasa perhubungan"],b:[0,1,2],u:"Pengaruh Brunei, perdagangan Santubong dan bahasa Melayu menghubungkan Sarawak dan Sabah dengan Alam Melayu."}},

{n:2, tempat:"Rumah Panjang", sk:"6.4.2 · 6.4.4 Pemerintahan tempatan dan keunikan masyarakat", lampiran:null,
 kadNama:"Datu Patinggi", kadEm:"\u{1F465}", kadFakta:"Di Sarawak, pembesar Melayu bergelar Datu Patinggi, Datu Bandar dan Datu Temenggung mentadbir bagi pihak Kesultanan Brunei.",
 bosKadNama:"Rumah Panjang", bosKadEm:"\u{1F3E0}", bosKadFakta:"Rumah panjang Iban boleh menempatkan puluhan keluarga di bawah satu bumbung. Setiap keluarga tinggal dalam bilik yang dipanggil bilik.",
 soalan:[
 {j:"pilih",t:"Pembesar Melayu di Sarawak yang mentadbir bagi pihak Brunei bergelar:",p:["Datu Patinggi","Laksamana","Undang","Yamtuan Muda"],b:0,u:"Datu Patinggi ialah antara pembesar Melayu di Sarawak."},
 {j:"pilih",t:"Kumpulan etnik terbesar di Sarawak ialah:",p:["Iban","Kadazandusun","Murut","Suluk"],b:0,u:"Iban ialah kumpulan etnik terbesar di Sarawak."},
 {j:"pilih",t:"Kumpulan etnik terbesar di Sabah ialah:",p:["Kadazandusun","Iban","Melanau","Bidayuh"],b:0,u:"Kadazandusun ialah kumpulan etnik terbesar di Sabah."},
 {j:"pilih",t:"Rumah tradisional yang didiami beberapa keluarga di bawah satu bumbung ialah:",p:["Rumah panjang","Rumah limas","Rumah kutai","Rumah Minangkabau"],b:0,u:"Rumah panjang didiami oleh beberapa keluarga dan menjadi warisan masyarakat Iban dan lain-lain."},
 {j:"banyak",t:"Pilih DUA masyarakat bumiputera Sarawak.",p:["Melanau","Bidayuh","Kadazandusun","Murut"],b:[0,1],u:"Melanau dan Bidayuh dari Sarawak. Kadazandusun dan Murut dari Sabah."},
 {j:"banyak",t:"Pilih DUA masyarakat bumiputera Sabah.",p:["Bajau","Murut","Iban","Melanau"],b:[0,1],u:"Bajau dan Murut dari Sabah. Iban dan Melanau dari Sarawak."},
 {j:"pilih",t:"Masyarakat Melanau terkenal dengan rumah tradisional yang dipanggil:",p:["Rumah tinggi","Rumah limas","Rumah bumbung panjang","Rumah Bugis"],b:0,u:"Masyarakat Melanau membina rumah tinggi untuk keselamatan."},
 {j:"pilih",t:"Masyarakat Bajau di Kota Belud terkenal sebagai:",p:["Penunggang kuda","Pelombong emas","Pembuat kapal besar","Penenun songket"],b:0,u:"Bajau Kota Belud terkenal sebagai penunggang kuda yang mahir."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan masyarakat dan negerinya yang betul.",p:["Iban: Sarawak","Kadazandusun: Sabah","Murut: Sabah","Melanau: Sabah","Bajau: Sarawak"],b:[0,1,2],u:"Iban dari Sarawak, Kadazandusun dan Murut dari Sabah. Melanau dari Sarawak, Bajau terutamanya di Sabah."}},

{n:3, tempat:"Tebing Rajang", sk:"6.4.3 · 6.4.4 Kegiatan ekonomi dan kepentingan sungai", lampiran:null,
 kadNama:"Sagu Melanau", kadEm:"\u{1F334}", kadFakta:"Masyarakat Melanau memproses batang rumbia untuk menghasilkan sagu, makanan ruji dan barang dagangan mereka.",
 bosKadNama:"Sungai sebagai Jalan", bosKadEm:"\u{1F6F6}", bosKadFakta:"Sebelum jalan raya dibina, sungai menjadi jalan utama untuk berpindah, berdagang dan berhubung antara kampung.",
 soalan:[
 {j:"pilih",t:"Seorang pedagang mahu membeli sagu di Sarawak. Masyarakat manakah paling terkenal menghasilkannya?",p:["Melanau","Murut","Kadazandusun","Bajau Kota Belud"],b:0,u:"Masyarakat Melanau terkenal menghasilkan sagu."},
 {j:"pilih",t:"Sebuah keluarga Iban mahu bertani di kawasan bukit. Tanaman manakah paling sesuai mereka usahakan?",p:["Padi huma","Gandum","Kapas","Teh"],b:0,u:"Masyarakat Iban mengusahakan padi huma di kawasan bukit."},
 {j:"pilih",t:"Petani Kadazandusun di dataran Tambunan paling sesuai mengusahakan:",p:["Padi sawah","Sagu","Bijih timah","Gambir"],b:0,u:"Kadazandusun terkenal mengusahakan padi sawah di dataran."},
 {j:"banyak",t:"Pilih DUA hasil hutan yang dikumpulkan oleh masyarakat Sarawak dan Sabah.",p:["Rotan","Damar","Bijih timah","Gandum"],b:[0,1],u:"Rotan dan damar ialah hasil hutan. Bijih timah hasil lombong, gandum bukan tanaman tempatan."},
 {j:"pilih",t:"Sebuah kampung di hulu Sungai Rajang mahu menghantar hasil hutan ke pekan. Pengangkutan manakah paling sesuai pada zaman dahulu?",p:["Perahu","Kereta api","Kapal terbang","Lori"],b:0,u:"Sungai menjadi jalan utama dan perahu digunakan untuk mengangkut barang."},
 {j:"pilih",t:"Masyarakat Bajau di pantai timur Sabah paling sesuai menjalankan kegiatan:",p:["Menangkap ikan","Menanam padi bukit","Menternak kuda di gunung","Memburu di hutan pedalaman"],b:0,u:"Bajau pantai timur terkenal sebagai nelayan dan pelaut."},
 {j:"pilih",t:"Sarang burung dari Gua Niah ialah contoh hasil:",p:["Gua","Laut","Lombong","Ladang"],b:0,u:"Sarang burung layang-layang dikutip dari gua seperti Gua Niah."},
 {j:"pilih",t:"Mengapakah penempatan masyarakat Sarawak dan Sabah banyak dibina di tebing sungai?",p:["Air dan pengangkutan","Sungai jauh dari sumber makanan","Tanah di tebing tidak subur","Sungai menghalang perjalanan"],b:0,u:"Sungai menyediakan air, ikan dan laluan pengangkutan."}],
 bos:{j:"pilih",t:"Sebuah keluarga Murut tinggal di pedalaman berbukit. Kegiatan manakah paling sesuai dengan kawasan mereka?",p:["Memburu dan bercucuk tanam","Menangkap ikan laut dalam","Membuat kapal layar besar","Mengusahakan pelabuhan"],b:0,u:"Masyarakat Murut di pedalaman memburu dan bercucuk tanam."}},

{n:4, tempat:"Arkib Borneo", sk:"6.4.1 hingga 6.4.4 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Sesuai dengan Alam", kadEm:"\u{1F33F}", kadFakta:"Kegiatan ekonomi setiap masyarakat bergantung pada alam sekitar: pantai, sungai, dataran atau bukit.",
 bosKadNama:"Kepelbagaian", bosKadEm:"\u{1F308}", bosKadFakta:"Sarawak dan Sabah mempunyai lebih 30 kumpulan etnik dengan bahasa, adat dan kesenian tersendiri.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang menentukan kegiatan ekonomi masyarakat?",p:["Alam sekitar","Arahan Portugis","Cuaca bersalji","Kekayaan raja"],b:0,u:"Petikan menunjukkan kegiatan ekonomi bergantung pada pantai, sungai, dataran atau bukit."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah masyarakat Bajau pantai timur menjadi nelayan?",p:["Mereka tinggal di pesisir","Mereka tinggal di gunung","Mereka tidak suka bertani","Laut dilarang kepada orang lain"],b:0,u:"Bajau pantai timur tinggal di pesisir, jadi mereka menangkap ikan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah persamaan masyarakat Iban dan Kadazandusun?",p:["Menanam padi","Menangkap ikan laut dalam","Menghasilkan sagu","Menunggang kuda"],b:0,u:"Iban menanam padi huma dan Kadazandusun menanam padi sawah."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA perbezaan antara Iban dan Kadazandusun.",p:["Iban padi huma, Kadazandusun padi sawah","Iban di Sarawak, Kadazandusun di Sabah","Iban nelayan laut, Kadazandusun pelombong","Iban di Sabah, Kadazandusun di Sarawak"],b:[0,1],u:"Iban mengusahakan padi huma di Sarawak, manakala Kadazandusun mengusahakan padi sawah di Sabah."},
 {j:"pilih",t:"Mengapakah sungai sangat penting kepada masyarakat Sarawak dan Sabah pada zaman dahulu?",p:["Ia jalan pengangkutan utama","Ia tempat bersukan","Ia sempadan negara","Ia kering sepanjang tahun"],b:0,u:"Sebelum jalan raya, sungai menjadi jalan utama untuk bergerak dan berdagang."},
 {j:"pilih",t:"Bandingkan Gawai Dayak dan Pesta Kaamatan. Apakah persamaannya?",p:["Meraikan musim menuai","Meraikan tahun baharu Cina","Meraikan kemerdekaan","Meraikan hari jadi raja"],b:0,u:"Kedua-duanya perayaan selepas musim menuai padi."},
 {j:"pilih",t:"Mengapakah rumah panjang sesuai dengan cara hidup masyarakat Iban dahulu?",p:["Keselamatan dan kerjasama","Menyimpan kapal","Mengelak salji","Menjadi kubu Portugis"],b:0,u:"Tinggal bersama di rumah panjang menjamin keselamatan dan memudahkan kerjasama."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada tinggalan perdagangan di Santubong?",p:["Ada hubungan dagang luar","Sarawak terasing daripada dunia","Sarawak dijajah oleh China","Santubong dibina pada abad ke-20"],b:0,u:"Tembikar China di Santubong membuktikan hubungan perdagangan dengan pedagang luar."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Masyarakat menyesuaikan diri dengan alam","Semua masyarakat menjalankan kegiatan sama","Alam tidak mempengaruhi kehidupan","Masyarakat tidak bekerja"],b:0,u:"Setiap masyarakat memilih kegiatan yang sesuai dengan alam sekitarnya."}},

{n:5, tempat:"Dewan Penilai Borneo", sk:"6.4.1 hingga 6.4.4 · K6.4.5 · K6.4.6 Menilai keunikan Sarawak dan Sabah", lampiran:null,
 kadNama:"Permuafakatan", kadEm:"\u{1F91D}", kadFakta:"Penghuni rumah panjang bergotong-royong menanam dan menuai padi, membina rumah dan mengadakan perayaan.",
 bosKadNama:"Bijak Memanfaatkan Alam", bosKadEm:"\u{1F333}", bosKadFakta:"Masyarakat Sarawak dan Sabah mengambil hasil hutan secukupnya supaya hutan terus memberi manfaat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, apakah nilai paling penting dalam kehidupan rumah panjang?",p:["Permuafakatan","Mementingkan diri","Persaingan","Pengasingan"],b:0,u:"Kehidupan rumah panjang bergantung pada permuafakatan dan gotong-royong."},
 {j:"pilih",t:"Seorang murid berkata, \"Sarawak dan Sabah tiada kaitan dengan sejarah Alam Melayu.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ada pengaruh Brunei","Tepat, ia terasing dari rantau ini","Tepat, ia pernah dijajah Rom","Kurang tepat, ia sebahagian Siam"],b:0,u:"Sarawak dan Sabah berada di bawah pengaruh Brunei, sebuah kerajaan Alam Melayu."},
 {j:"pilih",t:"Antara amalan berikut, yang manakah paling menunjukkan sikap bijaksana memanfaatkan alam?",p:["Mengambil hasil hutan secukupnya","Menebang semua pokok sekali gus","Membakar hutan setiap tahun","Mencemarkan sungai"],b:0,u:"Mengambil hasil secukupnya memastikan hutan terus memberi manfaat."},
 {j:"banyak",t:"Pilih DUA alasan keunikan masyarakat Sarawak dan Sabah wajar dipelihara.",p:["Ia memperkaya budaya Malaysia","Ia menarik pelancong","Ia menghalang kemajuan negeri","Ia tiada nilai kepada sesiapa"],b:[0,1],u:"Keunikan budaya memperkaya Malaysia dan menarik pelancong."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang pembinaan jalan raya ke kawasan pedalaman?",p:["Memudahkan hidup, tetapi alam perlu dijaga","Memusnahkan budaya masyarakat pedalaman","Tidak membawa faedah kepada penduduk","Menjadikan sungai tidak berguna lagi"],b:0,u:"Jalan raya memudahkan perhubungan, tetapi alam sekitar perlu dijaga."},
 {j:"pilih",t:"Mengapakah perayaan seperti Gawai Dayak dan Kaamatan penting kepada perpaduan?",p:["Semua kaum boleh meraikannya","Ia hanya untuk satu keluarga","Ia menghalang kunjungan","Ia memisahkan masyarakat"],b:0,u:"Rumah terbuka Gawai dan Kaamatan dikunjungi pelbagai kaum, lalu mengeratkan perpaduan."},
 {j:"pilih",t:"Antara berikut, sikap manakah paling membantu kelangsungan hidup masyarakat pedalaman dahulu?",p:["Menyesuaikan diri","Berbelanja boros","Bergantung pada orang luar","Mengabaikan perubahan cuaca"],b:0,u:"Masyarakat pedalaman bijak menyesuaikan diri dengan alam untuk terus hidup."},
 {j:"pilih",t:"Mengapakah semangat kekitaan penting dalam sebuah negara pelbagai etnik?",p:["Menyatukan rakyat","Memecahkan rakyat","Menghalang kerjasama","Mengasingkan negeri"],b:0,u:"Semangat kekitaan menyatukan rakyat pelbagai etnik sebagai satu bangsa Malaysia."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Sarawak dan Sabah?",p:["Kaya warisan Alam Melayu","Terasing dan tiada sejarah","Hanya mempunyai satu etnik","Tidak berhubung dengan dunia luar"],b:0,u:"Sarawak dan Sabah kaya dengan warisan pelbagai etnik dan berakar dalam sejarah Alam Melayu."}},

{n:6, tempat:"Studio Kekitaan", sk:"K6.4.5 hingga K6.4.8 Alam sekitar, permuafakatan dan kekitaan", lampiran:null,
 kadNama:"Malaysia Bersatu", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Sabah dan Sarawak bersama Tanah Melayu membentuk Malaysia pada 16 September 1963.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggabungkan fakta warisan dengan tindakan yang menyatukan rakyat.",
 soalan:[
 {j:"pilih",t:"Sekolah anda di Semenanjung mahu memperkenalkan budaya Sarawak dan Sabah. Idea manakah paling berasas?",p:["Hari Budaya Borneo","Mengabaikan budaya Borneo","Menyindir pakaian tradisional","Meniru tarian tanpa memahami maknanya"],b:0,u:"Hari Budaya bersama murid dari Sarawak dan Sabah memberi pengalaman yang tepat dan menghormati budaya."},
 {j:"pilih",t:"Kawasan sungai di kampung anda tercemar. Iktibar daripada masyarakat tebing sungai manakah paling sesuai?",p:["Sungai ialah sumber kehidupan","Sungai tidak penting","Sampah boleh dibuang ke sungai","Sungai hanya untuk kapal"],b:0,u:"Masyarakat tebing sungai bergantung pada sungai, jadi ia mesti dijaga."},
 {j:"banyak",t:"Pilih DUA cara mengamalkan semangat kekitaan di sekolah.",p:["Meraikan perayaan rakan pelbagai kaum","Bergotong-royong membersihkan kelas","Berkumpul mengikut kaum sendiri sahaja","Mengejek loghat rakan dari negeri lain"],b:[0,1],u:"Meraikan perayaan bersama dan bergotong-royong memupuk semangat kekitaan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memelihara seni muzik sape?",p:["Kelas sape untuk remaja","Melarang sape dimainkan","Membuang sape lama","Menggantikannya dengan muzik asing"],b:0,u:"Kelas sape mewariskan kemahiran kepada generasi muda."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kita tidak perlu tahu budaya Sabah dan Sarawak.\" Respons manakah paling rasional?",p:["Kita perlu saling mengenali","Betul, budaya itu tidak penting","Betul, ia terlalu jauh dari kita","Budaya asing lebih penting"],b:0,u:"Saling mengenali budaya mengukuhkan perpaduan rakyat Malaysia."},
 {j:"pilih",t:"Kelas anda menganjurkan program gotong-royong. Iktibar kehidupan rumah panjang manakah paling sesuai?",p:["Setiap ahli menyumbang tenaga","Seorang bekerja, yang lain menonton","Tugas diberi kepada guru","Program dibatalkan"],b:0,u:"Penghuni rumah panjang bergotong-royong, setiap orang menyumbang tenaga."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menjaga hutan dan sungai di Sarawak dan Sabah hari ini?",p:["Ekopelancongan yang dikawal","Pembalakan tanpa had","Membuang sisa ke sungai","Membakar hutan untuk ladang"],b:0,u:"Ekopelancongan yang dikawal memberi pendapatan sambil memelihara alam."},
 {j:"pilih",t:"Mengapakah tarian seperti Ngajat dan Sumazau wajar dipersembahkan pada majlis kebangsaan?",p:["Melambangkan kepelbagaian","Untuk mengisi masa lapang majlis","Kerana diwajibkan oleh pelancong","Kerana tiada tarian lain"],b:0,u:"Tarian dari Sarawak dan Sabah melambangkan kepelbagaian budaya Malaysia."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk memupuk semangat kekitaan dalam kalangan murid Malaysia melalui warisan Sarawak dan Sabah.",
  arahan:"Pilih sekurang-kurangnya DUA warisan (contoh: rumah panjang, Gawai Dayak, Pesta Kaamatan, sape, Ngajat, Sumazau, kepentingan sungai). Terangkan fakta warisan itu, idea awak, cara melaksanakannya dan bagaimana ia memupuk semangat kekitaan.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti permuafakatan, semangat kekitaan dan sikap bijaksana memanfaatkan alam."}}
];

module.exports = {
  id:"s2b10", tingkatan:2, kod:"10.0 Sarawak dan Sabah",
  tajuk:"Sungai Borneo",
  subtajuk:"Sejarah Ting. 2 · Bab 10 Sarawak dan Sabah",
  spi:SPI["6.4"],
  ulasan:{
   1:"{n} dapat menyatakan kedudukan Sarawak dan Sabah dalam Alam Melayu. Langkah seterusnya ialah memahami pemerintahan dan masyarakatnya.",
   2:"{n} memahami pemerintahan tempatan dan masyarakat Sarawak dan Sabah. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang kegiatan ekonomi dan kepentingan sungai dalam pelbagai situasi. Galakkan menganalisis kaitan alam sekitar dengan kehidupan.",
   4:"{n} mampu menganalisis kaitan alam sekitar dengan kegiatan masyarakat Sarawak dan Sabah. Seterusnya latih menilai keunikan masyarakatnya.",
   5:"{n} dapat membuat penilaian yang berasas tentang keunikan Sarawak dan Sabah. Sudah bersedia melahirkan idea untuk memupuk semangat kekitaan.",
   6:"{n} berjaya melahirkan idea yang rasional untuk memupuk semangat kekitaan melalui warisan Sarawak dan Sabah. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sarawak dan Sabah. Cadangan: ulang hentian pertama sambil melabel sungai dan masyarakat utama pada peta Borneo dengan bimbingan rakan sebaya."
  },
  lampiran:{
   p1:petikan(1, "Kehidupan masyarakat Sarawak dan Sabah",
     ["Masyarakat Iban di kawasan bukit Sarawak mengusahakan padi huma, manakala masyarakat Melanau di kawasan paya memproses rumbia menjadi sagu. Di Sabah, masyarakat Kadazandusun mengusahakan padi sawah di dataran, dan masyarakat Bajau pantai timur menangkap ikan.",
      "Sungai menjadi jalan utama untuk berdagang dan berhubung. Selepas musim menuai, masyarakat Dayak menyambut Gawai, manakala masyarakat Kadazandusun menyambut Pesta Kaamatan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
