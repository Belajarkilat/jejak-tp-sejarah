/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 5 Kesultanan Melayu Melaka.
   Standard Kandungan 6.1 Kesultanan Melayu Melaka, Standard Pembelajaran 6.1.1 hingga 6.1.3
   serta K6.1.4 hingga K6.1.7 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf).
   Standard Prestasi disalin kata demi kata. Tahun pengasasan ditulis "kira-kira 1400"
   kerana buku rujukan memberi anggaran yang sedikit berbeza. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pokok Melaka", sk:"6.1.1 Pengasasan Kesultanan Melayu Melaka", lampiran:null,
 kadNama:"Pelanduk Putih", kadEm:"\u{1F98C}", kadFakta:"Menurut Sejarah Melayu, Parameswara melihat seekor pelanduk putih menendang anjing pemburunya di bawah pokok Melaka, lalu memilih tempat itu sebagai negerinya.",
 bosKadNama:"Laluan Parameswara", bosKadEm:"\u{1F6A3}", bosKadFakta:"Parameswara berasal dari Palembang. Baginda ke Temasik, kemudian berpindah ke Muar dan Bertam sebelum membuka Melaka.",
 soalan:[
 {j:"pilih",t:"Pengasas Kesultanan Melayu Melaka ialah:",p:["Parameswara","Sultan Mansur Syah","Tun Perak","Hang Tuah"],b:0,u:"Parameswara mengasaskan Melaka kira-kira tahun 1400."},
 {j:"pilih",t:"Parameswara berasal dari:",p:["Palembang","Pahang","Pasai","Patani"],b:0,u:"Parameswara ialah putera raja dari Palembang."},
 {j:"pilih",t:"Nama Melaka dikatakan berasal daripada nama:",p:["Pokok","Sungai di Jawa","Gunung","Seorang pedagang"],b:0,u:"Menurut Sejarah Melayu, nama Melaka diambil daripada pokok Melaka tempat Parameswara berehat."},
 {j:"pilih",t:"Kesultanan Melayu Melaka diasaskan pada kira-kira tahun:",p:["1400","1511","1303","683"],b:0,u:"Melaka diasaskan kira-kira tahun 1400."},
 {j:"banyak",t:"Pilih DUA tempat yang disinggahi Parameswara sebelum membuka Melaka.",p:["Temasik","Muar","Angkor","Champa"],b:[0,1],u:"Parameswara ke Temasik, kemudian ke Muar sebelum tiba di Melaka."},
 {j:"pilih",t:"Melaka terletak di tepi selat:",p:["Melaka","Sunda","Gibraltar","Bosporus"],b:0,u:"Melaka terletak di pantai barat Semenanjung, di tepi Selat Melaka."},
 {j:"pilih",t:"Melaka terletak di muara sungai. Kelebihannya ialah:",p:["Mudah didatangi kapal","Jauh dari laut terbuka","Sukar dimasuki pedagang","Dilitupi salji"],b:0,u:"Muara sungai memudahkan kapal berlabuh dan menghubungkan pedalaman dengan laut."},
 {j:"pilih",t:"Bukit di Melaka sesuai dijadikan:",p:["Kubu","Sawah padi bertingkat","Pelabuhan kapal besar","Lombong emas"],b:0,u:"Dari bukit, kapal yang datang dapat dilihat dari jauh dan musuh mudah diawasi."}],
 bos:{j:"banyak",t:"Pilih SEMUA ciri kedudukan strategik Melaka.",p:["Di tengah laluan perdagangan","Terlindung daripada tiupan monsun","Ada bukit untuk pertahanan","Terletak jauh di pedalaman","Dikelilingi gurun pasir"],b:[0,1,2],u:"Melaka di laluan dagang, terlindung oleh Pulau Sumatera dan mempunyai bukit. Ia tidak di pedalaman dan tiada gurun."}},

{n:2, tempat:"Balairung Seri", sk:"6.1.2 Kegemilangan Kesultanan Melayu Melaka", lampiran:"gm1",
 kadNama:"Pembesar Empat Lipatan", kadEm:"\u{1F465}", kadFakta:"Empat pembesar utama Melaka ialah Bendahara, Penghulu Bendahari, Temenggung dan Laksamana.",
 bosKadNama:"Hukum Kanun Melaka", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Hukum Kanun Melaka mengandungi undang-undang di darat. Undang-undang Laut Melaka pula mengatur pelayaran dan perdagangan di laut.",
 soalan:[
 {j:"pilih",t:"Pembesar yang mengetuai angkatan laut Melaka ialah:",p:["Laksamana","Bendahara","Temenggung","Penghulu Bendahari"],b:0,u:"Laksamana mengetuai angkatan laut dan mengawal perairan."},
 {j:"pilih",t:"Pembesar yang menjadi ketua pentadbir dan penasihat sultan ialah:",p:["Bendahara","Laksamana","Syahbandar","Temenggung"],b:0,u:"Bendahara ialah pembesar tertinggi, ketua pentadbir dan penasihat sultan."},
 {j:"pilih",t:"Pembesar yang menjaga keamanan dalam negeri ialah:",p:["Temenggung","Laksamana","Bendahara","Penghulu Bendahari"],b:0,u:"Temenggung menjaga keamanan dalam negeri dan bandar Melaka."},
 {j:"pilih",t:"Undang-undang yang mengatur pelayaran dan perdagangan di laut ialah:",p:["Undang-undang Laut Melaka","Hukum Kanun Melaka","Undang-undang 99 Perak","Adat Perpatih"],b:0,u:"Undang-undang Laut Melaka mengatur perkara berkaitan kapal dan pelayaran."},
 {j:"pilih",t:"Berdasarkan Rajah 1, sultan manakah memerintah paling awal?",p:["Sultan Muzaffar Syah","Sultan Mansur Syah","Sultan Alauddin Riayat Syah","Sultan Mahmud Syah"],b:0,u:"Rajah 1 menunjukkan Sultan Muzaffar Syah memerintah mulai 1445, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, pada zaman sultan manakah Melaka jatuh ke tangan Portugis?",p:["Sultan Mahmud Syah","Sultan Mansur Syah","Sultan Muzaffar Syah","Sultan Alauddin Riayat Syah"],b:0,u:"Melaka jatuh pada tahun 1511 ketika Sultan Mahmud Syah memerintah."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun sultan berikut mengikut urutan pemerintahan.",p:["Sultan Muzaffar Syah","Sultan Mansur Syah","Sultan Alauddin Riayat Syah","Sultan Mahmud Syah"],b:[0,1,2,3],u:"Muzaffar Syah (1445), Mansur Syah (1459), Alauddin Riayat Syah (1477) dan Mahmud Syah (1488)."},
 {j:"banyak",t:"Pilih DUA aspek kegemilangan Melaka.",p:["Empayar yang luas","Pusat penyebaran Islam","Pusat perindustrian kereta","Pusat perlombongan arang batu"],b:[0,1],u:"Melaka mempunyai empayar yang luas dan menjadi pusat penyebaran Islam."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan pembesar dan tugasnya yang betul.",p:["Bendahara: penasihat sultan","Laksamana: ketua angkatan laut","Temenggung: menjaga keamanan","Penghulu Bendahari: ketua tentera darat Siam","Laksamana: mengutip cukai sawah"],b:[0,1,2],u:"Bendahara menasihati sultan, Laksamana mengetuai angkatan laut dan Temenggung menjaga keamanan. Penghulu Bendahari mengurus perbendaharaan."}},

{n:3, tempat:"Pelabuhan Syahbandar", sk:"6.1.2 Pengurusan perdagangan dan hubungan luar", lampiran:null,
 kadNama:"Empat Syahbandar", kadEm:"\u{2693}", kadFakta:"Melaka melantik empat orang Syahbandar. Setiap seorang mengurus pedagang dari kawasan tertentu, seperti Gujerat, India, Jawa dan China.",
 bosKadNama:"Laksamana Cheng Ho", bosKadEm:"\u{26F5}", bosKadFakta:"Laksamana Cheng Ho dari Dinasti Ming beberapa kali singgah di Melaka. Hubungan baik dengan China membantu Melaka menghadapi ancaman Siam.",
 soalan:[
 {j:"pilih",t:"Sebuah kapal dari Gujerat tiba di Melaka. Siapakah yang akan menguruskannya?",p:["Syahbandar","Laksamana","Bendahara","Bentara"],b:0,u:"Syahbandar mengurus kapal dan pedagang asing di pelabuhan."},
 {j:"pilih",t:"Dua pedagang bertelagah tentang timbangan lada di pasar Melaka. Siapakah yang paling sesuai menyelesaikannya?",p:["Temenggung","Laksamana","Pendeta","Hulubalang"],b:0,u:"Temenggung mengawasi pasar, termasuk sukatan dan timbangan."},
 {j:"pilih",t:"Kapal dagang diganggu lanun di Selat Melaka. Siapakah yang ditugaskan menghadapinya?",p:["Laksamana","Penghulu Bendahari","Syahbandar","Bendahara"],b:0,u:"Laksamana mengetuai angkatan laut yang mengawal perairan Melaka."},
 {j:"banyak",t:"Pilih DUA kemudahan yang disediakan Melaka kepada pedagang.",p:["Gudang menyimpan barang","Sistem timbang dan sukat yang seragam","Larangan berdagang pada musim monsun","Cukai yang berubah setiap hari"],b:[0,1],u:"Gudang dan sukatan seragam memudahkan pedagang. Larangan dan cukai tidak menentu menjauhkan mereka."},
 {j:"pilih",t:"Melaka menghantar utusan ke China. Apakah tujuan utamanya?",p:["Mendapat perlindungan","Membeli tanah di China","Mengisytiharkan perang","Mengambil tentera upahan"],b:0,u:"Hubungan dengan China memberi Melaka perlindungan, terutamanya daripada ancaman Siam."},
 {j:"pilih",t:"Melaka merujuk masalah agama kepada ulama Pasai. Ini contoh hubungan:",p:["Keagamaan","Ketenteraan","Penjajahan","Sukan"],b:0,u:"Rujukan masalah agama kepada Pasai menunjukkan hubungan keagamaan."},
 {j:"pilih",t:"Pada zaman Sultan Mansur Syah, Melaka menguasai Pahang dan Kampar. Ini menunjukkan:",p:["Empayar yang luas","Melaka dijajah","Kejatuhan Melaka","Melaka tiada tentera"],b:0,u:"Penguasaan wilayah di Semenanjung dan Sumatera menunjukkan empayar Melaka yang luas."},
 {j:"pilih",t:"Mengapakah pedagang dari pelbagai negeri berasa selamat berdagang di Melaka?",p:["Undang-undang dikuatkuasakan","Tiada peraturan di pelabuhan","Melaka tiada angkatan laut","Lanun dibiarkan"],b:0,u:"Hukum Kanun dan Undang-undang Laut Melaka memberi keadilan dan keselamatan kepada pedagang."}],
 bos:{j:"pilih",t:"Seorang pedagang China tiba di Melaka dan perlu menyimpan sutera sementara menunggu angin monsun. Apakah yang Melaka sediakan?",p:["Gudang","Kilang","Lombong","Sawah"],b:0,u:"Melaka menyediakan gudang untuk pedagang menyimpan barang sementara menunggu angin monsun bertukar."}},

{n:4, tempat:"Kota A Famosa", sk:"6.1.3 Berakhirnya pemerintahan di Melaka", lampiran:"p1",
 kadNama:"1511", kadEm:"\u{1F3F0}", kadFakta:"Portugis di bawah Alfonso de Albuquerque menawan Melaka pada tahun 1511, lalu membina kota A Famosa.",
 bosKadNama:"Perjuangan Diteruskan", bosKadEm:"\u{2694}\u{FE0F}", bosKadFakta:"Selepas Melaka jatuh, Sultan Mahmud Syah berundur ke Pagoh, Pahang dan Bentan, lalu terus berusaha merampas semula Melaka.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, siapakah yang mengetuai serangan Portugis pada 1511?",p:["Alfonso de Albuquerque","Diego Lopez de Sequeira","Laksamana Cheng Ho","Raden Wijaya"],b:0,u:"Alfonso de Albuquerque mengetuai serangan Portugis ke atas Melaka pada 1511."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah faktor dalaman yang melemahkan Melaka?",p:["Perpecahan pembesar","Serangan dari China","Kemarau panjang","Gempa bumi"],b:0,u:"Petikan menyebut perpecahan dan fitnah dalam kalangan pembesar."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelebihan Portugis dalam peperangan?",p:["Meriam dan senjata api","Bilangan gajah","Bantuan Pasai","Sokongan rakyat Melaka"],b:0,u:"Portugis mempunyai meriam dan senjata api yang lebih moden."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA strategi Melaka menghadapi Portugis.",p:["Mempertahankan jambatan","Menggunakan meriam","Menyerah tanpa melawan","Menjemput Portugis berdagang"],b:[0,1],u:"Melaka mempertahankan jambatan Sungai Melaka dan menggunakan meriam."},
 {j:"pilih",t:"Mengapakah perpecahan pembesar melemahkan Melaka?",p:["Pertahanan terjejas","Pedagang asing semakin ramai","Empayar bertambah luas","Ekonomi menjadi lebih kukuh"],b:0,u:"Pembesar yang bertelagah tidak dapat bersatu mentadbir dan mempertahankan negeri."},
 {j:"pilih",t:"Apakah kesan kejatuhan Melaka kepada perdagangan di Selat Melaka?",p:["Pedagang beralih ke pelabuhan lain","Perdagangan terus berkembang di Melaka","Semua kapal berhenti belayar","Pedagang Islam lebih ramai ke Melaka"],b:0,u:"Ramai pedagang, terutamanya pedagang Islam, beralih ke pelabuhan lain seperti Aceh dan Johor."},
 {j:"pilih",t:"Bandingkan kekuatan Melaka dan Portugis. Pernyataan manakah BETUL?",p:["Senjata Portugis lebih moden","Senjata Melaka lebih moden daripada Portugis","Kedua-duanya tidak berperang","Portugis tiada kapal perang"],b:0,u:"Portugis mempunyai meriam dan senjata api yang lebih canggih."},
 {j:"pilih",t:"Sultan Mahmud Syah berundur ke Bentan selepas 1511. Apakah yang dapat dianalisis?",p:["Perjuangan diteruskan","Baginda menyerah kalah","Baginda berpindah ke China","Melaka terus aman damai"],b:0,u:"Sultan Mahmud Syah menjadikan Bentan pangkalan untuk menyerang balas Portugis."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat tentang kejatuhan Melaka?",p:["Faktor dalaman dan luaran bergabung","Portugis lemah tetapi bernasib baik","Melaka tidak mempunyai pembesar","Melaka jatuh tanpa peperangan"],b:0,u:"Perpecahan dalaman dan kekuatan senjata Portugis bergabung menyebabkan Melaka jatuh."}},

{n:5, tempat:"Dewan Penilai Kesultanan", sk:"6.1.1 hingga 6.1.3 · K6.1.4 · K6.1.6 Menilai sejarah Melaka", lampiran:null,
 kadNama:"Tun Perak", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Tun Perak, Bendahara Melaka, terkenal kerana kebijaksanaan memimpin rakyat menewaskan serangan Siam.",
 bosKadNama:"Perpaduan", bosKadEm:"\u{1F91D}", bosKadFakta:"Melaka gemilang ketika pemimpinnya bersatu, dan lemah ketika pembesar berpecah.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, apakah faktor paling penting dalam kegemilangan Melaka?",p:["Kepimpinan bijaksana","Iklim yang sejuk sepanjang tahun","Ketiadaan pedagang asing","Lokasi di tengah gurun"],b:0,u:"Pemimpin yang bijak memanfaatkan lokasi strategik dan mengurus perdagangan dengan baik."},
 {j:"pilih",t:"Seorang murid berkata, \"Melaka jatuh hanya kerana Portugis kuat.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ada faktor dalaman","Tepat, Melaka tiada sebarang kelemahan","Tepat, Melaka tiada tentera","Kurang tepat, Melaka tidak pernah jatuh"],b:0,u:"Perpecahan pembesar turut melemahkan Melaka sebelum serangan Portugis."},
 {j:"pilih",t:"Antara tindakan berikut, yang manakah menunjukkan kebijaksanaan Parameswara?",p:["Memilih lokasi strategik","Membiarkan lanun di selat","Menolak pedagang dari India","Menutup muara sungai"],b:0,u:"Parameswara memilih lokasi di laluan dagang yang terlindung dan mudah dipertahankan."},
 {j:"banyak",t:"Pilih DUA ciri pemimpin Melaka yang wajar dicontohi.",p:["Bijak berdiplomasi","Adil melaksanakan undang-undang","Mudah mendengar fitnah","Mementingkan diri sendiri"],b:[0,1],u:"Kebijaksanaan berdiplomasi dan keadilan menjadikan Melaka dihormati."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang hubungan Melaka dengan China?",p:["Melaka dilindungi tetapi perlu menghantar ufti","Ia merugikan Melaka dari setiap segi","Ia menjadikan Melaka tanah jajahan China","Ia tidak memberi kesan kepada Melaka"],b:0,u:"Hubungan itu memberi perlindungan, tetapi Melaka perlu menghantar ufti sebagai tanda persahabatan."},
 {j:"pilih",t:"Mengapakah sistem Syahbandar dinilai berkesan?",p:["Pedagang diurus mengikut asal","Pedagang dibiarkan tanpa urusan","Cukai pelabuhan dihapuskan","Kapal asing dilarang masuk"],b:0,u:"Syahbandar mengurus pedagang mengikut kawasan asal, jadi urusan menjadi cekap."},
 {j:"pilih",t:"Antara berikut, iktibar manakah paling penting daripada kejatuhan Melaka?",p:["Perpaduan mesti dijaga","Senjata tidak penting","Pemimpin tidak perlu bijak","Musuh tidak perlu diawasi"],b:0,u:"Perpecahan dalaman membuka ruang kepada musuh. Perpaduan mesti dijaga."},
 {j:"pilih",t:"Mengapakah Melaka wajar dianggap asas kerajaan Melayu masa kini?",p:["Sistemnya diwarisi negeri Melayu","Ia masih diperintah oleh sultan","Ia dibina oleh Portugis pada 1511","Ia tiada kaitan dengan kerajaan kini"],b:0,u:"Sistem beraja, pembesar dan adat Melaka diwarisi oleh kesultanan Melayu lain."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Kesultanan Melayu Melaka?",p:["Pemimpin dan lokasi","Gemilang kerana nasib semata-mata","Melaka tidak pernah gemilang","Gemilang kerana dijajah kuasa luar"],b:0,u:"Kepimpinan yang bijak dan lokasi yang strategik ialah asas kegemilangan Melaka."}},

{n:6, tempat:"Studio Warisan Melaka", sk:"K6.1.4 hingga K6.1.7 Kepimpinan, alam sekitar, perpaduan dan iktibar", lampiran:null,
 kadNama:"Bandar Warisan", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Bandar Melaka disenaraikan sebagai Tapak Warisan Dunia UNESCO pada tahun 2008 bersama George Town.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta sejarah Melaka untuk menyelesaikan masalah sebenar hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk perpaduan. Iktibar daripada Melaka manakah paling sesuai?",p:["Perpecahan membawa kejatuhan","Senjata menentukan segalanya","Pemimpin boleh bertindak sesuka hati","Fitnah perlu dipercayai"],b:0,u:"Melaka lemah apabila pembesar berpecah. Perpaduan menjamin kekuatan."},
 {j:"pilih",t:"Parameswara memilih lokasi yang ada sungai, bukit dan air tawar. Pengajaran alam sekitar manakah paling sesuai?",p:["Manfaatkan alam dengan bijak","Alam sekitar boleh dimusnahkan","Sungai tidak penting kepada bandar","Bukit perlu diratakan untuk bandar"],b:0,u:"Sumber alam seperti sungai dan bukit menyokong kehidupan dan perlu dimanfaatkan dengan bijak."},
 {j:"banyak",t:"Pilih DUA cara menghargai warisan Kesultanan Melayu Melaka.",p:["Melawat Muzium Istana Kesultanan Melaka","Memelihara bangunan bersejarah","Menconteng dinding bangunan lama","Merobohkan tapak bersejarah"],b:[0,1],u:"Lawatan muzium dan pemeliharaan bangunan menghargai warisan."},
 {j:"pilih",t:"Kelas anda memilih ketua. Ciri pemimpin Melaka manakah paling wajar dicontohi?",p:["Adil dan mendengar nasihat","Mudah percaya fitnah","Membuat keputusan sendirian","Mementingkan kawan rapat"],b:0,u:"Pemimpin yang adil dan mendengar nasihat seperti Tun Perak dihormati rakyat."},
 {j:"pilih",t:"Pelabuhan Malaysia mahu bersaing dengan pelabuhan lain. Pengajaran Melaka manakah paling berasas?",p:["Urusan cekap dan selamat","Menaikkan cukai sesuka hati","Menolak kapal asing","Menutup pelabuhan pada waktu malam"],b:0,u:"Melaka berjaya kerana urusan pelabuhan yang cekap dan selamat."},
 {j:"pilih",t:"Masyarakat Melaka terdiri daripada pelbagai bangsa pedagang. Apakah pengajarannya untuk Malaysia?",p:["Kepelbagaian membawa kemakmuran","Kepelbagaian membawa kejatuhan","Bangsa lain perlu dihalau keluar","Pedagang asing tidak penting"],b:0,u:"Masyarakat pelbagai bangsa yang hidup harmoni menjadikan Melaka makmur."},
 {j:"pilih",t:"Seorang rakan berkata, \"Sejarah Melaka tiada kaitan dengan saya.\" Respons manakah paling rasional?",p:["Sistem beraja kita berasal dari Melaka","Betul, Melaka sudah lama jatuh","Betul, Melaka sekadar cerita","Orang Melaka sahaja yang perlu tahu"],b:0,u:"Sistem beraja dan adat istiadat Melaka diwarisi oleh negeri Melayu hari ini."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memulihara Sungai Melaka?",p:["Kempen jaga kebersihan","Membina kilang di tebing sungai","Mengalirkan sisa kilang ke sungai","Menimbus muara sungai"],b:0,u:"Kempen menjaga kebersihan memulihara sungai yang menjadi nadi Melaka sejak dahulu."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menggunakan iktibar daripada sejarah Kesultanan Melayu Melaka bagi membina masyarakat Malaysia yang bersatu dan maju.",
  arahan:"Pilih sekurang-kurangnya DUA fakta sejarah (contoh: pemilihan lokasi oleh Parameswara, sistem Syahbandar, Pembesar Empat Lipatan, perpecahan pembesar sebelum 1511). Terangkan iktibarnya, idea awak, cara melaksanakannya dan nilai yang ingin dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, menghubungkan iktibar dengan masalah sebenar hari ini, mencadangkan langkah yang boleh dilaksanakan, dan menonjolkan nilai seperti perpaduan, kepimpinan dan menghargai alam sekitar."}}
];

module.exports = {
  id:"s2b5", tingkatan:2, kod:"5.0 Kesultanan Melayu Melaka",
  tajuk:"Bandar Pelabuhan Agung",
  subtajuk:"Sejarah Ting. 2 · Bab 5 Kesultanan Melayu Melaka",
  spi:SPI["6.1"],
  ulasan:{
   1:"{n} dapat menceritakan pengasasan Kesultanan Melayu Melaka. Langkah seterusnya ialah memahami faktor kegemilangannya.",
   2:"{n} memahami pengasasan dan kegemilangan Kesultanan Melayu Melaka. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang pentadbiran dan perdagangan Melaka dalam pelbagai situasi. Galakkan menganalisis sebab kejatuhan Melaka.",
   4:"{n} mampu menganalisis faktor dalaman dan luaran kejatuhan Melaka. Seterusnya latih menilai kepimpinan dan iktibarnya.",
   5:"{n} dapat membuat penilaian yang berasas tentang sejarah Kesultanan Melayu Melaka. Sudah bersedia melahirkan idea berdasarkan iktibarnya.",
   6:"{n} berjaya melahirkan idea yang berasas berdasarkan iktibar Kesultanan Melayu Melaka. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kesultanan Melayu Melaka. Cadangan: ulang hentian pertama sambil melukis peta lokasi Melaka dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1445", label:"Sultan Muzaffar Syah"},
     {masa:"1459", label:"Sultan Mansur Syah"},
     {masa:"1477", label:"Sultan Alauddin Riayat Syah"},
     {masa:"1488", label:"Sultan Mahmud Syah"},
     {masa:"1511", label:"Melaka jatuh ke tangan Portugis"}],
     kapsyen:"Rajah 1 · Beberapa sultan Melaka dan tahun mula memerintah",
     alt:"Garis masa menegak: 1445 Sultan Muzaffar Syah; 1459 Sultan Mansur Syah; 1477 Sultan Alauddin Riayat Syah; 1488 Sultan Mahmud Syah; 1511 Melaka jatuh ke tangan Portugis"},
   p1:petikan(1, "Melaka menjelang 1511",
     ["Menjelang tahun 1511, berlaku perpecahan dalam kalangan pembesar Melaka. Fitnah menyebabkan Bendahara Seri Maharaja dihukum bunuh pada tahun 1510, lalu pentadbiran menjadi lemah.",
      "Pada tahun 1511, angkatan Portugis di bawah Alfonso de Albuquerque menyerang dengan meriam dan senjata api. Pahlawan Melaka mempertahankan jambatan Sungai Melaka dan membalas dengan meriam, tetapi akhirnya Melaka jatuh. Sultan Mahmud Syah berundur dan meneruskan perjuangan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
