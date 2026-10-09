/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 4 Agama, Kepercayaan dan Keunikan
   Warisan Masyarakat Kerajaan Alam Melayu. Standard Kandungan 5.2 Warisan Kerajaan Alam
   Melayu, Standard Pembelajaran 5.2.4 dan 5.2.5 serta K5.2.6 hingga K5.2.9
   (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Rumah Semangat", sk:"5.2.4 Agama dan kepercayaan", lampiran:null,
 kadNama:"Animisme", kadEm:"\u{1F333}", kadFakta:"Sebelum kedatangan agama Hindu dan Buddha, masyarakat Alam Melayu percaya bahawa benda seperti pokok, batu dan sungai mempunyai semangat.",
 bosKadNama:"Batu Bersurat Terengganu", bosKadEm:"\u{1FAA8}", bosKadFakta:"Batu Bersurat Terengganu bertarikh 1303 Masihi ditulis dalam tulisan Jawi. Ia bukti Islam sudah sampai ke Alam Melayu sebelum abad ke-15.",
 soalan:[
 {j:"pilih",t:"Kepercayaan bahawa benda seperti pokok dan batu mempunyai semangat dikenali sebagai:",p:["Animisme","Feudalisme","Humanisme","Kapitalisme"],b:0,u:"Animisme ialah kepercayaan awal bahawa benda di alam mempunyai semangat."},
 {j:"pilih",t:"Agama Hindu dan Buddha dibawa ke Alam Melayu oleh pedagang dan pendeta dari:",p:["India","Rom","Mesir","Jepun"],b:0,u:"Pedagang dan pendeta dari India membawa agama Hindu dan Buddha."},
 {j:"pilih",t:"Srivijaya terkenal sebagai pusat pengajian agama:",p:["Buddha","Kristian","Zoroaster","Yahudi"],b:0,u:"Srivijaya menjadi pusat pengajian Buddha. I-Tsing singgah di sana untuk belajar."},
 {j:"pilih",t:"Angkor Wat pada asalnya dibina untuk memuja dewa:",p:["Vishnu","Zeus","Ra","Thor"],b:0,u:"Angkor Wat dibina oleh Suryavarman II untuk memuja dewa Vishnu."},
 {j:"banyak",t:"Pilih DUA agama yang berkembang di Alam Melayu sebelum abad ke-15.",p:["Hindu","Buddha","Shinto","Konfusianisme sebagai agama rasmi"],b:[0,1],u:"Hindu dan Buddha berkembang dalam kerajaan Alam Melayu awal. Islam juga mula tersebar."},
 {j:"pilih",t:"Batu Bersurat Terengganu bertarikh:",p:["1303","683","1511","1957"],b:0,u:"Batu Bersurat Terengganu bertarikh 1303 Masihi (702 Hijrah)."},
 {j:"pilih",t:"Batu Bersurat Terengganu ditulis dalam tulisan:",p:["Jawi","Pallava","Kawi","Rumi"],b:0,u:"Batu Bersurat Terengganu ditulis dalam tulisan Jawi."},
 {j:"pilih",t:"Gelaran raja yang dianggap jelmaan dewa ialah:",p:["Dewaraja","Sultan","Khalifah","Presiden"],b:0,u:"Dewaraja ialah konsep raja sebagai jelmaan atau wakil dewa."}],
 bos:{j:"susun",t:"Susun kemunculan kepercayaan dan agama di Alam Melayu mengikut urutan.",p:["Animisme","Hindu dan Buddha","Islam"],b:[0,1,2],u:"Animisme ialah kepercayaan awal, diikuti Hindu dan Buddha, kemudian Islam."}},

{n:2, tempat:"Laluan Pendeta", sk:"5.2.4 · 5.2.5 Keunikan warisan", lampiran:"gm1",
 kadNama:"Penyebaran Islam", kadEm:"\u{1F54C}", kadFakta:"Islam tersebar di Alam Melayu melalui pedagang, pendakwah dan perkahwinan, secara damai.",
 bosKadNama:"Keunikan Warisan", bosKadEm:"\u{2728}", bosKadFakta:"Warisan kerajaan Alam Melayu unik kerana menggabungkan unsur tempatan dengan pengaruh luar yang disesuaikan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["I-Tsing di Srivijaya","Angkor Wat dibina","Batu Bersurat Terengganu","Nagarakertagama dikarang"],b:0,u:"I-Tsing singgah di Srivijaya pada abad ke-7, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Batu Bersurat Terengganu dipahat?",p:["1303","1365","Abad ke-12","Abad ke-7"],b:0,u:"Rajah 1 menunjukkan Batu Bersurat Terengganu bertarikh 1303."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["I-Tsing di Srivijaya","Angkor Wat dibina","Batu Bersurat Terengganu","Nagarakertagama dikarang"],b:[0,1,2,3],u:"Abad ke-7, abad ke-12, 1303 dan 1365."},
 {j:"pilih",t:"Islam tersebar di Alam Melayu terutamanya melalui:",p:["Dakwah dan perdagangan","Peperangan besar-besaran","Penjajahan kuasa Eropah","Arahan maharaja Rom"],b:0,u:"Pedagang dan pendakwah menyebarkan Islam secara damai."},
 {j:"pilih",t:"Pemilihan raja dalam kerajaan Alam Melayu biasanya berdasarkan:",p:["Keturunan diraja","Undian rakyat","Kekayaan pedagang","Kekuatan fizikal"],b:0,u:"Raja dipilih daripada keturunan diraja."},
 {j:"banyak",t:"Pilih DUA contoh kebijaksanaan pemerintah kerajaan Alam Melayu.",p:["Membangunkan pusat pemerintahan","Menjalin hubungan diplomatik","Menutup pelabuhan kepada pedagang","Mengabaikan pertanian rakyat"],b:[0,1],u:"Membangunkan pusat pemerintahan dan menjalin hubungan diplomatik ialah tanda kebijaksanaan."},
 {j:"pilih",t:"Sistem pengairan baray di Angkor ialah contoh keunikan warisan dalam aspek:",p:["Ekonomi","Persuratan","Agama","Tarian"],b:0,u:"Baray membantu pertanian, iaitu aspek kegiatan ekonomi."},
 {j:"pilih",t:"Kedudukan raja dalam kerajaan Alam Melayu ialah:",p:["Ketua negara","Setaraf dengan hamba","Di bawah golongan pedagang","Tidak penting kepada rakyat"],b:0,u:"Raja ialah ketua negara yang dihormati dan ditaati rakyat."}],
 bos:{j:"banyak",t:"Pilih SEMUA keunikan warisan kerajaan Alam Melayu.",p:["Sistem pemerintahan beraja","Sistem pengairan dan pelabuhan","Tulisan dan persuratan","Sistem parlimen moden","Kereta api wap dan stesen"],b:[0,1,2],u:"Sistem beraja, pengairan, pelabuhan, tulisan dan persuratan ialah keunikan warisan. Parlimen dan kereta api muncul jauh kemudian."}},

{n:3, tempat:"Balai Amalan", sk:"5.2.4 · 5.2.5 Mengaplikasikan pengetahuan", lampiran:null,
 kadNama:"Candi dan Wihara", kadEm:"\u{1F6D5}", kadFakta:"Candi ialah tempat ibadat Hindu dan Buddha. Wihara pula tempat tinggal dan belajar para sami Buddha.",
 bosKadNama:"Amalan Beragama", bosKadEm:"\u{1F64F}", bosKadFakta:"Amalan beragama membentuk nilai, undang-undang dan seni bina kerajaan Alam Melayu.",
 soalan:[
 {j:"pilih",t:"Seorang sami dari China mahu mempelajari ajaran Buddha sebelum ke India. Ke manakah dia patut singgah?",p:["Srivijaya","Majapahit pada 1500","Melaka","Rom"],b:0,u:"Srivijaya ialah pusat pengajian Buddha. I-Tsing melakukan perkara yang sama."},
 {j:"pilih",t:"Seorang petani menyembah semangat pokok besar sebelum membuka tanah. Ini contoh kepercayaan:",p:["Animisme","Islam","Buddha","Kristian"],b:0,u:"Memuja semangat pokok ialah amalan animisme."},
 {j:"pilih",t:"Ahli arkeologi menemui batu nisan bertulisan Jawi. Apakah kesimpulan awalnya?",p:["Ada masyarakat Islam","Kawasan itu milik Rom","Ia candi Hindu","Ia kubur dinosaur"],b:0,u:"Batu nisan bertulisan Jawi menunjukkan kehadiran masyarakat Islam."},
 {j:"banyak",t:"Seorang pedagang Islam berdagang di pelabuhan Alam Melayu. Pilih DUA kesan yang mungkin berlaku.",p:["Penduduk mengenali Islam","Perdagangan berkembang","Candi dibina di Mekah","Bahasa Melayu dilarang"],b:[0,1],u:"Pedagang Islam memperkenalkan agama Islam sambil mengembangkan perdagangan."},
 {j:"pilih",t:"Raja Angkor membina candi besar. Apakah tujuan utamanya?",p:["Memuja dewa","Menyimpan padi","Membina pelabuhan","Melatih tentera laut"],b:0,u:"Candi dibina untuk ibadat dan memuja dewa, sekali gus menonjolkan kedudukan raja."},
 {j:"pilih",t:"Sebuah kerajaan mahu menarik pedagang asing. Kebijaksanaan manakah paling sesuai?",p:["Menjalin hubungan diplomatik","Menyerang kapal dagang asing","Menghalau pendakwah dan pedagang","Menutup sungai kepada kapal"],b:0,u:"Hubungan diplomatik memberi keyakinan kepada pedagang asing."},
 {j:"pilih",t:"Seorang putera raja akan menaiki takhta. Mengapa?",p:["Berketurunan diraja","Dia paling kaya di negeri itu","Dia dipilih oleh pedagang","Dia menang perlumbaan kuda"],b:0,u:"Takhta diwarisi oleh keturunan diraja."},
 {j:"pilih",t:"Mengapakah ajaran Islam mudah diterima oleh masyarakat Alam Melayu?",p:["Disebarkan secara damai","Dipaksa oleh tentera asing","Disebarkan oleh empayar Rom","Diwajibkan oleh raja Angkor"],b:0,u:"Islam disebarkan secara damai melalui perdagangan, dakwah dan perkahwinan."}],
 bos:{j:"pilih",t:"Seorang pengkaji melihat ukiran dewa Hindu dan arca Buddha di tapak yang sama. Apakah kesimpulan yang paling sesuai?",p:["Dua agama pernah diamalkan","Tapak itu dibina oleh orang Rom","Ukiran itu dicipta pada abad ini","Masyarakat di situ tidak beragama"],b:0,u:"Ukiran dan arca daripada dua agama menunjukkan kedua-duanya pernah berkembang di situ."}},

{n:4, tempat:"Makmal Keunikan", sk:"5.2.4 · 5.2.5 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Adaptasi", kadEm:"\u{1F504}", kadFakta:"Konsep dewaraja dari India disesuaikan oleh kerajaan Alam Melayu untuk menguatkan kedudukan raja tempatan.",
 bosKadNama:"Kesinambungan", bosKadEm:"\u{1F517}", bosKadFakta:"Selepas menerima Islam, raja Melayu memakai gelaran Sultan, tetapi institusi beraja diteruskan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah perubahan gelaran raja selepas menerima Islam?",p:["Sultan","Maharaja","Presiden","Patih"],b:0,u:"Petikan menyatakan raja yang memeluk Islam memakai gelaran Sultan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang kekal walaupun agama berubah?",p:["Institusi beraja","Pemujaan dewa","Tulisan Pallava","Konsep dewaraja"],b:0,u:"Institusi beraja diteruskan, cuma asasnya bertukar kepada Islam."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah konsep dewaraja menguatkan raja?",p:["Raja dianggap suci","Raja menjadi pedagang kaya","Pembesar memilih raja baharu","Raja tinggal di dalam candi"],b:0,u:"Rakyat menghormati raja yang dianggap jelmaan dewa, jadi kedudukannya kukuh."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA perubahan selepas Islam diterima.",p:["Gelaran Sultan digunakan","Tulisan Jawi berkembang","Institusi raja dihapuskan","Bahasa Melayu dilarang"],b:[0,1],u:"Gelaran Sultan dan tulisan Jawi berkembang. Institusi raja dan bahasa Melayu kekal."},
 {j:"pilih",t:"Bandingkan raja zaman Hindu-Buddha dengan Sultan. Apakah persamaannya?",p:["Ketua negara","Dianggap dewa","Tinggal di candi","Dipilih rakyat"],b:0,u:"Kedua-duanya ialah ketua negara. Konsep dewaraja tidak digunakan dalam Islam."},
 {j:"pilih",t:"Mengapakah agama mempengaruhi seni bina kerajaan Alam Melayu?",p:["Rumah ibadat dibina megah","Rakyat tiada tempat tinggal","Pedagang membina istana","Candi dijadikan pelabuhan"],b:0,u:"Kepercayaan agama mendorong pembinaan candi dan kemudiannya masjid."},
 {j:"pilih",t:"Kerajaan Alam Melayu menerima pengaruh India tetapi mengekalkan bahasa Melayu. Apakah yang dapat dianalisis?",p:["Identiti tempatan terpelihara","Pengaruh India ditolak mentah-mentah","Bahasa India diwajibkan oleh raja","Budaya tempatan hilang sama sekali"],b:0,u:"Pengaruh luar diterima tetapi identiti tempatan seperti bahasa Melayu terpelihara."},
 {j:"pilih",t:"Apakah kaitan antara perdagangan dan penyebaran agama?",p:["Pedagang turut membawa agama","Perdagangan menghalang agama","Agama menghentikan perdagangan","Tiada kaitan langsung"],b:0,u:"Pedagang dari India dan Arab membawa agama bersama barang dagangan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Institusi beraja kekal","Raja Melayu lenyap selepas Islam","Agama tidak mempengaruhi raja","Dewaraja masih diamalkan hari ini"],b:0,u:"Institusi beraja menyesuaikan diri dengan perubahan agama dan kekal hingga kini."}},

{n:5, tempat:"Dewan Penilai Warisan", sk:"5.2.5 · K5.2.6 · K5.2.8 Menilai keunikan warisan", lampiran:null,
 kadNama:"Toleransi", kadEm:"\u{1F91D}", kadFakta:"Kerajaan Alam Melayu menerima pedagang daripada pelbagai agama di pelabuhannya. Sikap terbuka ini membawa kemakmuran.",
 bosKadNama:"Iktibar Kegemilangan", bosKadEm:"\u{1F4D6}", bosKadFakta:"Kegemilangan kerajaan Alam Melayu lahir daripada pemimpin bijak, ekonomi yang diurus dan masyarakat yang berbudaya.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah institusi beraja kekal lama di Alam Melayu?",p:["Ia mampu menyesuaikan diri","Ia kekal sama sejak zaman purba","Ia ditentukan oleh kuasa Eropah","Ia tidak disokong oleh rakyat"],b:0,u:"Institusi beraja kekal kerana mampu menyesuaikan diri, contohnya selepas menerima Islam."},
 {j:"pilih",t:"Seorang murid berkata, \"Penyebaran Islam di Alam Melayu berlaku melalui peperangan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, Islam tersebar secara damai","Tepat, kerana tentera Arab menyerang","Tepat, kerana raja dipaksa memeluk Islam","Kurang tepat, Islam tidak sampai"],b:0,u:"Islam tersebar secara damai melalui perdagangan, dakwah dan perkahwinan."},
 {j:"pilih",t:"Antara keunikan warisan berikut, yang manakah paling bermanfaat kepada rakyat biasa?",p:["Sistem pengairan","Gelaran raja","Upacara pertabalan","Hiasan istana"],b:0,u:"Sistem pengairan menjamin bekalan air sawah dan makanan rakyat."},
 {j:"banyak",t:"Pilih DUA bukti kebijaksanaan pemerintah kerajaan Alam Melayu.",p:["Membina baray di Angkor","Menghantar utusan ke China","Membiarkan lanun di selat","Mengabaikan pelabuhan"],b:[0,1],u:"Baray dan utusan ke China menunjukkan perancangan ekonomi dan diplomasi yang bijak."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang konsep dewaraja?",p:["Menyatukan rakyat, tetapi raja sukar ditegur","Ia tidak memberi kesan kepada kerajaan","Ia memberi kuasa penuh kepada rakyat","Ia dicipta oleh pedagang dari Eropah"],b:0,u:"Dewaraja menyatukan rakyat di bawah raja, tetapi menjadikan raja sukar ditegur."},
 {j:"pilih",t:"Mengapakah sikap terbuka terhadap pedagang pelbagai agama membawa kebaikan?",p:["Pelabuhan makmur","Pelabuhan menjadi sunyi","Agama tempatan hilang","Pedagang asing dihalau keluar"],b:0,u:"Pelabuhan yang terbuka menarik ramai pedagang dan membawa kemakmuran."},
 {j:"pilih",t:"Antara berikut, iktibar manakah paling penting daripada kegemilangan kerajaan Alam Melayu?",p:["Kepimpinan bijak membawa kemakmuran","Kekayaan datang dengan sendirinya","Pemimpin tidak penting kepada negara","Rakyat tidak perlu bekerja keras"],b:0,u:"Kemakmuran lahir daripada kepimpinan bijak dan usaha bersama."},
 {j:"pilih",t:"Mengapakah kehidupan berorganisasi penting dalam kerajaan Alam Melayu?",p:["Tugas berjalan teratur","Raja tidak perlu memerintah","Setiap orang buat sesuka hati","Pembesar tidak diperlukan lagi"],b:0,u:"Kehidupan berorganisasi memastikan setiap tugas dijalankan dan negara makmur."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang warisan kerajaan Alam Melayu?",p:["Menggabungkan unsur tempatan dan luar","Ia ditiru sepenuhnya dari India","Ia tidak meninggalkan apa-apa warisan","Ia lenyap begitu sahaja dari sejarah"],b:0,u:"Warisan Alam Melayu unik kerana unsur tempatan digabungkan dengan pengaruh luar yang disesuaikan."}},

{n:6, tempat:"Studio Iktibar", sk:"K5.2.6 hingga K5.2.9 Iktibar dan kehidupan berorganisasi", lampiran:null,
 kadNama:"Rukun Negara", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Prinsip Kesetiaan kepada Raja dan Negara dalam Rukun Negara berakar daripada tradisi beraja yang panjang di Alam Melayu.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas bermula daripada fakta sejarah dan diakhiri dengan tindakan yang boleh dilakukan.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk sikap hormat-menghormati antara agama. Iktibar manakah paling sesuai?",p:["Keterbukaan pelabuhan","Peperangan antara kerajaan","Penutupan pelabuhan kepada asing","Penghapusan candi dan wihara"],b:0,u:"Pelabuhan Alam Melayu menerima pedagang pelbagai agama secara aman. Ini contoh toleransi."},
 {j:"pilih",t:"Bagaimanakah warisan institusi beraja boleh dihargai oleh murid hari ini?",p:["Mempelajari sejarahnya","Mengabaikan Rukun Negara","Mengejek institusi raja","Melupakan sejarah"],b:0,u:"Mempelajari sejarah institusi beraja membantu murid menghargai kedudukannya."},
 {j:"banyak",t:"Pilih DUA cara memelihara warisan agama dan kepercayaan Alam Melayu.",p:["Menyokong pemuliharaan tapak","Mendokumentasikan batu bersurat","Merosakkan arca purba di tapak","Menjual artifak ke luar negara"],b:[0,1],u:"Pemuliharaan dan dokumentasi memelihara warisan. Merosakkan atau menjual artifak memusnahkannya."},
 {j:"pilih",t:"Kelab anda mahu mengurus program dengan lancar. Iktibar kehidupan berorganisasi manakah paling sesuai?",p:["Bahagikan tugas yang jelas","Biarkan tiada ketua","Abaikan perancangan","Ubah peraturan setiap hari"],b:0,u:"Pembahagian tugas yang jelas, seperti raja dan pembesar, melancarkan program."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memperkenalkan Batu Bersurat Terengganu kepada murid?",p:["Lawatan maya ke muzium","Melukis di atas replika","Mengabaikannya","Menyalin tanpa memahami"],b:0,u:"Lawatan maya membolehkan murid melihat dan memahami batu bersurat itu."},
 {j:"pilih",t:"Mengapakah iktibar daripada kerajaan Alam Melayu masih relevan?",p:["Prinsip kepimpinannya kekal penting","Kerajaan itu masih memerintah hari ini","Ia tiada kaitan dengan masa kini","Ia hanya sesuai dipelajari oleh raja"],b:0,u:"Kepimpinan yang bijak dan perpaduan masih penting untuk kemakmuran negara."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kepercayaan lama tidak perlu dipelajari.\" Respons manakah paling rasional?",p:["Ia membantu kita memahami budaya","Betul, ia membuang masa belajar","Betul, ia sudah tiada pengikut lagi","Hanya agama baharu penting"],b:0,u:"Memahami kepercayaan lama membantu kita memahami asal-usul budaya masyarakat."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menghayati sikap bijaksana pemimpin Alam Melayu dalam kepimpinan pengawas?",p:["Merancang sebelum bertindak","Bertindak mengikut emosi","Mengabaikan nasihat","Membuat keputusan sendirian"],b:0,u:"Pemimpin Alam Melayu yang bijak merancang dengan teliti sebelum bertindak."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menggunakan iktibar daripada kegemilangan kerajaan Alam Melayu bagi membentuk masyarakat yang bersatu dan berorganisasi hari ini.",
  arahan:"Pilih sekurang-kurangnya DUA contoh daripada bab ini (contoh: keterbukaan pelabuhan kepada pelbagai agama, institusi beraja, sistem pengairan, kebijaksanaan pemerintah). Terangkan fakta sejarahnya, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang boleh dilaksanakan, dan mengaitkannya dengan nilai seperti toleransi, kebijaksanaan dan kehidupan berorganisasi."}}
];

module.exports = {
  id:"s2b4", tingkatan:2, kod:"4.0 Agama, Kepercayaan dan Keunikan Warisan",
  tajuk:"Jejak Kepercayaan",
  subtajuk:"Sejarah Ting. 2 · Bab 4 Agama, Kepercayaan dan Keunikan Warisan Masyarakat Kerajaan Alam Melayu",
  spi:SPI["5.2"],
  ulasan:{
   1:"{n} dapat menyatakan agama dan kepercayaan masyarakat kerajaan Alam Melayu. Langkah seterusnya ialah memahami keunikan warisannya.",
   2:"{n} memahami agama, kepercayaan dan keunikan warisan kerajaan Alam Melayu. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang agama dan warisan kerajaan Alam Melayu dalam pelbagai situasi. Galakkan menganalisis perubahan dan kesinambungan.",
   4:"{n} mampu menganalisis perubahan dan kesinambungan warisan kerajaan Alam Melayu. Seterusnya latih menilai keunikan warisan itu.",
   5:"{n} dapat membuat penilaian yang berasas tentang keunikan warisan kerajaan Alam Melayu. Sudah bersedia melahirkan idea berdasarkan iktibarnya.",
   6:"{n} berjaya melahirkan idea yang rasional berdasarkan iktibar kegemilangan kerajaan Alam Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Agama, Kepercayaan dan Keunikan Warisan. Cadangan: ulang hentian pertama sambil membina garis masa agama di Alam Melayu dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Abad ke-7", label:"I-Tsing belajar agama Buddha di Srivijaya"},
     {masa:"Abad ke-12", label:"Angkor Wat dibina untuk dewa Vishnu"},
     {masa:"1303", label:"Batu Bersurat Terengganu"},
     {masa:"1365", label:"Nagarakertagama dikarang"}],
     kapsyen:"Rajah 1 · Beberapa peristiwa agama dan persuratan di Alam Melayu",
     alt:"Garis masa menegak: abad ke-7 I-Tsing belajar agama Buddha di Srivijaya; abad ke-12 Angkor Wat dibina untuk dewa Vishnu; 1303 Batu Bersurat Terengganu; 1365 Nagarakertagama dikarang"},
   p1:petikan(1, "Raja dan agama di Alam Melayu",
     ["Pada zaman Hindu-Buddha, raja di kerajaan seperti Angkor dianggap dewaraja, iaitu jelmaan atau wakil dewa. Rakyat menghormati raja dan membina candi besar atas perintahnya.",
      "Apabila Islam tersebar, raja yang memeluk Islam memakai gelaran Sultan. Konsep dewaraja ditinggalkan, tetapi institusi beraja diteruskan. Tulisan Jawi pula berkembang untuk menulis bahasa Melayu."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
