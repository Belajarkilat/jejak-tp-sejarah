/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 1 Kerajaan Alam Melayu.
   Standard Kandungan 5.1 Kerajaan Alam Melayu, Standard Pembelajaran 5.1.1 hingga 5.1.4
   serta K5.1.5 hingga K5.1.8 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf).
   Standard Prestasi disalin kata demi kata. Tarikh kerajaan awal ditulis "kira-kira" atau
   mengikut abad kerana sumbernya terhad dan anggaran sarjana berbeza. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dermaga Alam Melayu", sk:"5.1.1 Konsep Alam Melayu · 5.1.2 Kewujudan kerajaan", lampiran:null,
 kadNama:"Rumpun Melayu", kadEm:"\u{1F30F}", kadFakta:"Alam Melayu merujuk kawasan yang didiami oleh masyarakat rumpun Melayu yang berkongsi bahasa, budaya dan cara hidup yang hampir serupa di Asia Tenggara.",
 bosKadNama:"Kerajaan Tertua", bosKadEm:"\u{1F6F6}", bosKadFakta:"Funan di lembangan Sungai Mekong ialah antara kerajaan terawal di Alam Melayu, wujud sejak kira-kira abad pertama Masihi.",
 soalan:[
 {j:"pilih",t:"Konsep Alam Melayu dibentuk berdasarkan tiga aspek, iaitu:",p:["Geografi, bahasa dan budaya","Agama, tentera dan mata wang","Gunung, sungai dan lautan","Raja, pembesar, rakyat dan hamba"],b:0,u:"Alam Melayu ditakrifkan melalui geografi (kawasan Asia Tenggara), bahasa (rumpun Melayu) dan budaya yang hampir serupa."},
 {j:"pilih",t:"Kerajaan Funan berpusat di lembangan Sungai:",p:["Mekong","Musi","Brantas","Bujang"],b:0,u:"Funan berpusat di lembangan Sungai Mekong, kini kawasan Kemboja dan selatan Vietnam."},
 {j:"pilih",t:"Kerajaan Srivijaya berpusat di:",p:["Palembang","Angkor","Beruas","Oc Eo"],b:0,u:"Srivijaya berpusat di Palembang, Sumatera, dan menguasai laluan Selat Melaka."},
 {j:"pilih",t:"Tapak arkeologi Lembah Bujang dikaitkan dengan kerajaan:",p:["Kedah Tua","Majapahit","Champa","Funan"],b:0,u:"Lembah Bujang di Kedah ialah tapak kerajaan Kedah Tua yang terkenal dengan tinggalan candi dan pelabuhan."},
 {j:"banyak",t:"Pilih DUA kerajaan Alam Melayu yang terletak di Semenanjung Tanah Melayu.",p:["Kedah Tua","Gangga Negara","Majapahit","Angkor"],b:[0,1],u:"Kedah Tua (Kedah) dan Gangga Negara (Perak) terletak di Semenanjung. Majapahit di Jawa dan Angkor di Kemboja."},
 {j:"pilih",t:"Kerajaan Majapahit berpusat di pulau:",p:["Jawa","Sumatera","Borneo","Sulawesi"],b:0,u:"Majapahit diasaskan oleh Raden Wijaya pada tahun 1293 di Jawa Timur."},
 {j:"pilih",t:"Kerajaan Champa terletak di kawasan negara:",p:["Vietnam","Thailand","Filipina","Myanmar"],b:0,u:"Champa terletak di kawasan tengah dan selatan Vietnam hari ini."},
 {j:"pilih",t:"Monumen terkenal yang dibina dalam kerajaan Angkor ialah:",p:["Angkor Wat","Candi Borobudur","Candi Bukit Batu Pahat","Kota Gelanggi"],b:0,u:"Angkor Wat dibina pada abad ke-12 dalam kerajaan Angkor di Kemboja."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan kerajaan dan lokasinya yang betul.",p:["Srivijaya: Sumatera","Majapahit: Jawa","Angkor: Kemboja","Funan: Perak","Gangga Negara: Vietnam"],b:[0,1,2],u:"Srivijaya di Sumatera, Majapahit di Jawa dan Angkor di Kemboja. Funan di lembangan Mekong, manakala Gangga Negara di Perak."}},

{n:2, tempat:"Bilik Kronologi", sk:"5.1.3 Kerajaan Alam Melayu yang masyhur", lampiran:"gm1",
 kadNama:"Sumpah Palapa", kadEm:"\u{1F4DC}", kadFakta:"Patih Gajah Mada dari Majapahit bersumpah tidak akan menikmati kesenangan selagi Nusantara belum disatukan. Sumpah ini dikenali sebagai Sumpah Palapa.",
 bosKadNama:"Pusat Ilmu Buddha", bosKadEm:"\u{1F4DA}", bosKadFakta:"Sami China, I-Tsing, singgah di Srivijaya pada abad ke-7 untuk mempelajari bahasa Sanskrit dan ajaran Buddha sebelum ke India.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, kerajaan manakah yang paling awal?",p:["Funan","Srivijaya","Angkor","Majapahit"],b:0,u:"Funan wujud sejak kira-kira abad pertama Masihi, lebih awal daripada kerajaan lain dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kerajaan manakah muncul pada abad ke-13?",p:["Majapahit","Funan","Srivijaya","Angkor"],b:0,u:"Majapahit diasaskan pada tahun 1293, iaitu pada akhir abad ke-13."},
 {j:"pilih",t:"Pengasas kerajaan Majapahit ialah:",p:["Raden Wijaya","Gajah Mada","Jayavarman II","Parameswara"],b:0,u:"Raden Wijaya mengasaskan Majapahit pada tahun 1293. Gajah Mada pula ialah Patih yang terkenal."},
 {j:"pilih",t:"Pemerintah yang mengasaskan kerajaan Angkor pada tahun 802 ialah:",p:["Jayavarman II","Raden Wijaya","Hayam Wuruk","Suryavarman II"],b:0,u:"Jayavarman II mengasaskan Angkor. Suryavarman II kemudian membina Angkor Wat."},
 {j:"pilih",t:"Srivijaya menjadi kuasa maritim yang masyhur kerana menguasai:",p:["Selat Melaka","Sungai Mekong","Laut Mediterranean","Teluk Benggala"],b:0,u:"Srivijaya menguasai Selat Melaka, laluan perdagangan utama antara China dan India."},
 {j:"banyak",t:"Pilih DUA tokoh yang berkaitan dengan kerajaan Majapahit.",p:["Gajah Mada","Hayam Wuruk","Jayavarman II","I-Tsing"],b:[0,1],u:"Gajah Mada ialah Patih dan Hayam Wuruk ialah raja Majapahit. Jayavarman II dari Angkor, I-Tsing sami China."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun kerajaan berikut mengikut kronologi kemunculannya.",p:["Funan","Srivijaya","Angkor","Majapahit"],b:[0,1,2,3],u:"Funan (abad pertama), Srivijaya (abad ke-7), Angkor (802) dan Majapahit (1293)."},
 {j:"pilih",t:"Kitab Nagarakertagama yang menceritakan kegemilangan Majapahit dikarang oleh:",p:["Mpu Prapanca","Tun Sri Lanang","Raja Ali Haji","I-Tsing"],b:0,u:"Mpu Prapanca mengarang Nagarakertagama pada zaman Hayam Wuruk."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, pernyataan manakah BETUL?",p:["Srivijaya lebih awal daripada Angkor","Majapahit muncul sebelum Funan","Angkor muncul paling awal","Funan muncul selepas Srivijaya"],b:0,u:"Srivijaya (abad ke-7) muncul sebelum Angkor (802)."}},

{n:3, tempat:"Pelabuhan Antarabangsa", sk:"5.1.4 Hubungan dengan kerajaan luar yang sezaman", lampiran:null,
 kadNama:"Ufti ke China", kadEm:"\u{1F381}", kadFakta:"Kerajaan Alam Melayu menghantar utusan dan ufti ke China untuk menjalin hubungan diplomatik serta mendapatkan pengiktirafan dan perlindungan dalam perdagangan.",
 bosKadNama:"Oc Eo", bosKadEm:"\u{1FA99}", bosKadFakta:"Di pelabuhan Oc Eo, Funan, ahli arkeologi menemui syiling Rom, barang dari India dan China. Ia bukti Funan berdagang dengan kerajaan yang jauh.",
 soalan:[
 {j:"pilih",t:"Pada abad pertama Masihi, Funan sezaman dengan kerajaan luar seperti:",p:["Dinasti Han dan Empayar Rom","Kerajaan Uthmaniyah di Turki","Dinasti Ming di China","Kerajaan Abbasiyah di Baghdad"],b:0,u:"Pada abad pertama, Dinasti Han di China dan Empayar Rom sedang berkuasa. Uthmaniyah, Ming dan Abbasiyah muncul kemudian."},
 {j:"pilih",t:"Agama Hindu dan Buddha sampai ke Alam Melayu terutamanya melalui hubungan dengan:",p:["India","Rom","Parsi","Jepun"],b:0,u:"Pedagang dan pendeta dari India membawa agama Hindu dan Buddha ke Alam Melayu."},
 {j:"pilih",t:"Majapahit pada abad ke-14 sezaman dengan kerajaan:",p:["Dinasti Ming","Empayar Rom","Dinasti Han","Empayar Maurya"],b:0,u:"Dinasti Ming bermula pada tahun 1368, sezaman dengan kegemilangan Majapahit."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh hubungan DIPLOMATIK kerajaan Alam Melayu?",p:["Menghantar utusan ke China","Menjual rempah di pelabuhan","Membina candi","Menanam padi"],b:0,u:"Menghantar utusan ialah hubungan diplomatik. Menjual rempah ialah hubungan perdagangan."},
 {j:"banyak",t:"Pilih DUA bentuk hubungan kerajaan Alam Melayu dengan kerajaan luar.",p:["Perdagangan","Keagamaan","Penjajahan oleh British","Penggunaan internet"],b:[0,1],u:"Hubungan perdagangan dan keagamaan berlaku sejak awal. Penjajahan British berlaku berabad-abad kemudian."},
 {j:"pilih",t:"Kedudukan Alam Melayu di antara China dan India menjadikannya:",p:["Tempat singgah pedagang","Kawasan yang terpencil","Laluan darat yang sukar","Kawasan bersalji"],b:0,u:"Pedagang dari China dan India singgah di pelabuhan Alam Melayu sambil menunggu angin monsun bertukar."},
 {j:"pilih",t:"Angin monsun penting kepada perdagangan Alam Melayu kerana:",p:["Kapal layar bergantung padanya","Ia membawa salji ke pelabuhan","Ia menghentikan semua pelayaran","Ia menghalang pedagang asing"],b:0,u:"Kapal layar bergerak mengikut tiupan angin monsun. Pedagang menunggu angin bertukar di pelabuhan Alam Melayu."},
 {j:"pilih",t:"Sami China I-Tsing singgah di Srivijaya. Ini contoh hubungan:",p:["Keagamaan","Ketenteraan","Penjajahan","Sukan"],b:0,u:"I-Tsing datang untuk mempelajari agama Buddha. Ini menunjukkan hubungan keagamaan."}],
 bos:{j:"pilih",t:"Syiling Rom ditemui di pelabuhan Oc Eo, Funan. Apakah kesimpulan yang paling tepat?",p:["Funan berdagang jarak jauh","Funan pernah dijajah oleh Rom","Syiling dicipta di Funan","Rom terletak di Asia Tenggara"],b:0,u:"Barang dari tempat jauh menunjukkan hubungan perdagangan, bukan penjajahan."}},

{n:4, tempat:"Makmal Batu Bersurat", sk:"5.1.3 · 5.1.4 Menganalisis kerajaan Alam Melayu", lampiran:"p1",
 kadNama:"Batu Bersurat Srivijaya", kadEm:"\u{1FAA8}", kadFakta:"Batu Bersurat Kedukan Bukit bertarikh 683 Masihi ditulis dalam bahasa Melayu Kuno dengan huruf Pallava. Ia antara bukti bertulis terawal tentang Srivijaya.",
 bosKadNama:"Kedudukan Strategik", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Kerajaan yang menguasai selat dan muara sungai boleh mengutip cukai daripada kapal yang lalu. Inilah rahsia kekayaan Srivijaya.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah sumber kekayaan utama Srivijaya?",p:["Cukai kapal dagang","Hasil lombong emas","Rampasan perang","Hasil tanaman gandum"],b:0,u:"Petikan menyatakan Srivijaya mengutip cukai daripada kapal yang melalui Selat Melaka."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pedagang sanggup singgah di pelabuhan Srivijaya?",p:["Pelabuhannya selamat dan menyediakan kemudahan","Mereka dipaksa oleh tentera Rom","Tiada pelabuhan lain di dunia","Pelabuhan itu tidak mengenakan apa-apa peraturan"],b:0,u:"Srivijaya menjaga keselamatan perairan dan menyediakan kemudahan, jadi pedagang yakin untuk singgah."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah bukti bahawa bahasa Melayu sudah digunakan oleh Srivijaya?",p:["Batu bersuratnya berbahasa Melayu Kuno","Pedagang China datang ke Palembang","Srivijaya menguasai Selat Melaka","Srivijaya menghantar ufti"],b:0,u:"Batu Bersurat Kedukan Bukit ditulis dalam bahasa Melayu Kuno. Ia bukti penggunaan bahasa Melayu sejak abad ke-7."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA faktor kemajuan Srivijaya.",p:["Kedudukan strategik","Angkatan laut yang kuat","Kekurangan pedagang asing","Lokasi jauh dari laut"],b:[0,1],u:"Kedudukan strategik dan kawalan perairan oleh angkatan laut menjadikan Srivijaya kuasa maritim."},
 {j:"pilih",t:"Bandingkan Srivijaya dengan Angkor. Pernyataan manakah BETUL?",p:["Srivijaya maritim, Angkor pertanian","Kedua-duanya bergantung pada lombong emas","Angkor menguasai Selat Melaka","Srivijaya terkenal dengan sistem baray"],b:0,u:"Srivijaya kaya melalui perdagangan laut, manakala Angkor kaya melalui pertanian padi dengan sistem pengairan baray."},
 {j:"pilih",t:"Mengapakah kerajaan Alam Melayu menghantar ufti ke China?",p:["Untuk pengiktirafan dan perdagangan","Kerana dijajah oleh China","Untuk membeli tanah di China","Untuk menghentikan perdagangan"],b:0,u:"Ufti membawa pengiktirafan, perlindungan dan peluang berdagang di pasaran China yang besar."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan jika angkatan laut Srivijaya menjadi lemah?",p:["Pedagang beralih ke pelabuhan lain","Pedagang semakin ramai datang","Cukai bertambah tinggi","Selat Melaka menjadi kering"],b:0,u:"Tanpa kawalan perairan, lanun mengganggu kapal dan pedagang mencari pelabuhan lain yang lebih selamat."},
 {j:"pilih",t:"Gangga Negara diserang oleh Raja Rajendra Chola dari India pada abad ke-11. Apakah yang dapat dianalisis?",p:["Alam Melayu terlibat dalam persaingan serantau","Kerajaan Alam Melayu tidak pernah berhubung dengan India","India dan Alam Melayu tiada hubungan","Gangga Negara terletak di India"],b:0,u:"Serangan Chola menunjukkan Alam Melayu berada dalam persaingan kuasa dan perdagangan serantau."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat tentang Srivijaya?",p:["Kekuatannya pada kawalan laluan dagang","Ia sebuah kerajaan pertanian di pedalaman","Ia tidak berhubung dengan dunia luar","Ia tidak mempunyai sistem tulisan"],b:0,u:"Srivijaya kuat kerana menguasai Selat Melaka, mengawal perairan dan mengutip cukai perdagangan."}},

{n:5, tempat:"Balai Penilai Nusantara", sk:"5.1.3 · 5.1.4 · K5.1.5 · K5.1.6 Menilai kerajaan Alam Melayu", lampiran:null,
 kadNama:"Pemimpin Bijaksana", kadEm:"\u{1F451}", kadFakta:"Pemimpin kerajaan Alam Melayu yang bijaksana memilih lokasi strategik, menjalin hubungan diplomatik dan menjaga keselamatan perdagangan.",
 bosKadNama:"Jati Diri", bosKadEm:"\u{1F1F2}\u{1F1FE}", bosKadFakta:"Kegemilangan kerajaan Alam Melayu membuktikan masyarakat rantau ini telah membina kerajaan yang maju lebih seribu tahun dahulu.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, faktor manakah paling penting dalam kemajuan kerajaan Alam Melayu?",p:["Kedudukan strategik","Iklim yang sejuk","Kekurangan sungai","Jauh dari laut"],b:0,u:"Kedudukan di laluan perdagangan antara China dan India membawa pedagang, cukai dan kemakmuran."},
 {j:"pilih",t:"Seorang murid berkata, \"Kerajaan Alam Melayu maju kerana meniru India sepenuhnya.\" Penilaian manakah paling tepat?",p:["Kurang tepat, pengaruh luar diadaptasi","Tepat, kerana mereka tiada budaya sendiri","Tepat, kerana setiap raja berasal dari India","Kurang tepat, kerana mereka tiada hubungan dengan India"],b:0,u:"Masyarakat Alam Melayu menerima pengaruh luar tetapi mengadaptasinya, contohnya bahasa Melayu Kuno ditulis dalam huruf Pallava."},
 {j:"pilih",t:"Mengapakah kebijaksanaan pemimpin penting kepada kemajuan sesebuah kerajaan?",p:["Pemimpin menentukan dasar negara","Pemimpin tidak perlu berbincang","Pemimpin bekerja sendirian","Pemimpin hanya hadir dalam upacara"],b:0,u:"Pemimpin yang bijaksana memilih lokasi, menjalin hubungan diplomatik dan mengurus perdagangan dengan baik."},
 {j:"banyak",t:"Pilih DUA alasan yang menyokong pendapat bahawa kerajaan Alam Melayu masyhur di peringkat antarabangsa.",p:["Pedagang dari China dan India singgah di pelabuhannya","Utusannya diterima oleh istana China","Kerajaannya terasing daripada dunia luar","Rakyatnya tidak tahu berdagang"],b:[0,1],u:"Kehadiran pedagang asing dan hubungan diplomatik dengan China membuktikan kemasyhuran kerajaan Alam Melayu."},
 {j:"pilih",t:"Antara penilaian berikut, yang manakah paling seimbang tentang Sumpah Palapa Gajah Mada?",p:["Tekad menyatukan, tetapi melibatkan perang","Ia sempurna tanpa sebarang kesan buruk","Ia tidak mempunyai apa-apa kesan","Ia menyebabkan Majapahit runtuh serta-merta"],b:0,u:"Penilaian seimbang mengiktiraf tekad Gajah Mada menyatukan Nusantara dan juga peperangan yang terlibat."},
 {j:"pilih",t:"Angkor membina sistem pengairan baray yang besar. Bagaimanakah usaha ini dinilai?",p:["Ia bijak kerana menjamin air sawah","Ia membazir kerana Angkor tidak bertani","Ia tidak memberi kesan kepada rakyat","Ia hanya untuk hiasan istana"],b:0,u:"Baray menyimpan air untuk pengairan sawah, menjamin hasil padi dan kemakmuran Angkor."},
 {j:"pilih",t:"Kenapakah kita wajar berbangga dengan kegemilangan kerajaan Alam Melayu?",p:["Ia membuktikan kebolehan nenek moyang kita","Ia menunjukkan kita tidak perlu belajar lagi","Ia membuktikan kerajaan lain lemah","Ia tidak berkaitan dengan kita"],b:0,u:"Kegemilangan itu bukti kebolehan masyarakat Alam Melayu membina kerajaan yang maju dan dihormati."},
 {j:"pilih",t:"Pada pendapat anda, pengajaran manakah paling relevan daripada kejatuhan Srivijaya?",p:["Kemakmuran perlu dipertahankan","Perdagangan tidak penting","Pelabuhan patut ditutup kepada pedagang asing","Angkatan laut tidak diperlukan"],b:0,u:"Srivijaya merosot apabila kawalan perairannya lemah dan diserang. Kekuatan dan perpaduan penting untuk mengekalkan kemakmuran."}],
 bos:{j:"pilih",t:"Antara penilaian berikut, yang manakah PALING berasas tentang kerajaan Alam Melayu?",p:["Kedudukan strategik dan pemimpin bijaksana","Ia maju kerana nasib baik semata-mata","Ia tidak pernah mencapai kemajuan","Ia maju kerana dijajah oleh kuasa luar"],b:0,u:"Kedudukan strategik dan kebijaksanaan pemimpin ialah faktor utama yang disokong bukti sejarah."}},

{n:6, tempat:"Studio Warisan Nusantara", sk:"K5.1.5 hingga K5.1.8 Kedudukan strategik, kepimpinan dan jati diri", lampiran:null,
 kadNama:"Malaysia Hari Ini", kadEm:"\u{1F6A2}", kadFakta:"Pelabuhan Klang dan Pelabuhan Tanjung Pelepas terletak di tepi Selat Melaka, laluan yang sama digunakan oleh pedagang Srivijaya lebih seribu tahun dahulu.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta sejarah untuk menyelesaikan masalah sebenar. Kejayaan Srivijaya mengurus pelabuhan boleh menjadi inspirasi pengurusan pelabuhan moden.",
 soalan:[
 {j:"pilih",t:"Malaysia mahu menarik lebih banyak kapal ke pelabuhannya. Pengajaran daripada Srivijaya manakah paling berasas?",p:["Menjaga keselamatan dan kecekapan","Menaikkan cukai setinggi mungkin","Menutup pelabuhan pada musim monsun","Melarang kapal asing"],b:0,u:"Srivijaya menarik pedagang dengan keselamatan dan kemudahan. Prinsip ini masih relevan untuk pelabuhan moden."},
 {j:"pilih",t:"Sekolah anda mahu memupuk rasa bangga terhadap kerajaan Alam Melayu. Idea manakah paling sesuai?",p:["Pameran replika artifak Lembah Bujang","Melupakan sejarah awal negara","Menonton filem fantasi tanpa fakta","Menghafal tarikh kerajaan sahaja"],b:0,u:"Pameran berasaskan bukti membantu murid melihat sendiri kemajuan kerajaan awal."},
 {j:"banyak",t:"Pilih DUA idea untuk memelihara warisan kerajaan Alam Melayu.",p:["Melawat Muzium Arkeologi Lembah Bujang","Menyokong kajian di tapak Sungai Batu","Mengambil batu candi sebagai cenderamata","Membina rumah di atas tapak candi"],b:[0,1],u:"Lawatan muzium dan kajian arkeologi membantu memelihara warisan. Mengambil batu atau membina di atas tapak merosakkannya."},
 {j:"pilih",t:"Kelas anda perlu memilih ketua projek. Ciri pemimpin kerajaan Alam Melayu manakah wajar dicontohi?",p:["Bijak merancang dan bekerjasama","Mementingkan diri","Enggan mendengar pendapat","Membuat keputusan secara tergesa-gesa"],b:0,u:"Pemimpin yang berjaya merancang dengan bijak dan menjalin hubungan baik, seperti hubungan diplomatik kerajaan Alam Melayu."},
 {j:"pilih",t:"Bagaimanakah pengetahuan tentang kerajaan Alam Melayu boleh memupuk perpaduan rakyat Malaysia?",p:["Ia menunjukkan warisan bersama","Ia memisahkan kaum mengikut asal-usul","Ia tidak berkaitan dengan perpaduan","Ia hanya penting kepada satu kaum"],b:0,u:"Kerajaan Alam Melayu menerima pelbagai pengaruh dan pedagang. Warisan bersama ini boleh menjadi asas perpaduan."},
 {j:"pilih",t:"Sebuah daerah mahu membangunkan pelancongan sejarah di Lembah Bujang. Idea manakah paling rasional?",p:["Pusat pelawat dengan laluan khas","Membina hotel di atas tapak candi","Membenarkan pelawat memanjat candi","Meruntuhkan candi untuk dibina semula"],b:0,u:"Pelancongan mesti seimbang dengan pemeliharaan. Pusat pelawat dengan laluan khas melindungi tapak sambil menarik pengunjung."},
 {j:"pilih",t:"Mengapakah idea pembangunan pelabuhan hari ini wajar mengambil kira sejarah Selat Melaka?",p:["Nilai strategiknya terbukti sejak dahulu","Sejarah tidak memberi apa-apa maklumat","Selat Melaka baru digunakan pada abad ini","Supaya pelabuhan ditutup"],b:0,u:"Selat Melaka telah menjadi laluan penting selama lebih seribu tahun. Pengetahuan ini membantu merancang pembangunan yang bijak."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kerajaan Alam Melayu sudah lama hilang, jadi tidak perlu dipelajari.\" Respons manakah paling rasional?",p:["Warisannya masih hidup dalam budaya kita","Betul, kerana kerajaan itu sudah tiada","Betul, kerana ia sekadar cerita dongeng","Sejarah Eropah lebih penting dipelajari"],b:0,u:"Bahasa Melayu, budaya dan kepentingan Selat Melaka ialah warisan yang berterusan hingga hari ini."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk memperkenalkan kegemilangan kerajaan Alam Melayu kepada remaja Malaysia hari ini.",
  arahan:"Pilih sekurang-kurangnya DUA kerajaan Alam Melayu (contoh: Srivijaya, Kedah Tua, Majapahit, Angkor, Funan). Nyatakan fakta penting tentang kerajaan itu, bentuk idea awak (contoh: aplikasi, pameran, video, permainan), cara melaksanakannya, dan nilai yang ingin dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat (contohnya Srivijaya menguasai Selat Melaka, Kedah Tua di Lembah Bujang), mencadangkan idea yang menarik dan boleh dilaksanakan, serta mengaitkannya dengan jati diri dan rasa bangga terhadap warisan."}}
];

module.exports = {
  id:"s2b1", tingkatan:2, kod:"1.0 Kerajaan Alam Melayu",
  tajuk:"Laluan Nusantara",
  subtajuk:"Sejarah Ting. 2 · Bab 1 Kerajaan Alam Melayu",
  spi:SPI["5.1"],
  ulasan:{
   1:"{n} dapat menyatakan konsep Alam Melayu dan menamakan kerajaan Alam Melayu yang masyhur beserta lokasinya. Langkah seterusnya ialah memahami perkembangan setiap kerajaan.",
   2:"{n} memahami perkembangan kerajaan Alam Melayu seperti Srivijaya, Majapahit dan Angkor. Perlu lebih latihan menghubungkaitkan kerajaan itu dengan kerajaan luar yang sezaman sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang hubungan kerajaan Alam Melayu dengan kerajaan luar dalam pelbagai situasi. Galakkan menganalisis faktor kemajuan kerajaan itu.",
   4:"{n} mampu menganalisis maklumat tentang kerajaan Alam Melayu, termasuk peranan kedudukan strategik dan kawalan perairan. Seterusnya latih menilai faktor kegemilangan dan kemerosotannya.",
   5:"{n} dapat membuat penilaian yang berasas tentang kerajaan Alam Melayu dan peranan kepimpinan. Sudah bersedia melahirkan idea memperkenalkan warisan kerajaan Alam Melayu.",
   6:"{n} berjaya melahirkan idea yang berasas untuk memperkenalkan dan menghargai kegemilangan kerajaan Alam Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kerajaan Alam Melayu. Cadangan: ulang hentian pertama sambil melabel peta kerajaan Alam Melayu dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira abad pertama", label:"Kerajaan Funan"},
     {masa:"Abad ke-7", label:"Kerajaan Srivijaya"},
     {masa:"802", label:"Kerajaan Angkor diasaskan oleh Jayavarman II"},
     {masa:"1293", label:"Kerajaan Majapahit diasaskan oleh Raden Wijaya"}],
     kapsyen:"Rajah 1 · Kemunculan beberapa kerajaan Alam Melayu",
     alt:"Garis masa menegak: kira-kira abad pertama kerajaan Funan; abad ke-7 kerajaan Srivijaya; 802 kerajaan Angkor diasaskan oleh Jayavarman II; 1293 kerajaan Majapahit diasaskan oleh Raden Wijaya"},
   p1:petikan(1, "Srivijaya, kuasa maritim Selat Melaka",
     ["Srivijaya berpusat di Palembang dan menguasai Selat Melaka, laluan utama kapal dagang antara China dan India. Angkatan lautnya mengawal perairan daripada lanun, lalu pedagang berasa selamat untuk singgah.",
      "Srivijaya mengutip cukai daripada kapal yang melalui perairannya dan menyediakan kemudahan seperti air bersih dan barang dagangan. Batu Bersurat Kedukan Bukit (683 M) ditulis dalam bahasa Melayu Kuno dengan huruf Pallava."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
