/* Sumber kandungan — Sejarah KSSM Tingkatan 1, Bab 5 Tamadun Awal Dunia.
   Standard Kandungan 4.1 Tamadun Awal dan Sumbangannya, Standard Pembelajaran 4.1.4 dan 4.1.5
   serta K4.1.7 hingga K4.1.9 (DSKP KSSM Sejarah Tingkatan 1, dskp/sejarah-t1.pdf).
   Berkongsi Standard Kandungan 4.1 dengan Bab 4; Standard Prestasi disalin kata demi kata.
   Tarikh tamadun ditulis "kira-kira" kerana anggaran sejarawan berbeza. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pelabuhan Empat Sungai", sk:"4.1.4 Empat lokasi tamadun awal dunia", lampiran:null,
 kadNama:"Tanah Antara Dua Sungai", kadEm:"\u{1F30A}", kadFakta:"Mesopotamia bermaksud tanah antara dua sungai, iaitu Sungai Tigris dan Sungai Euphrates. Kawasan ini kini terletak di Iraq.",
 bosKadNama:"Hadiah Sungai Nil", bosKadEm:"\u{1F3DC}\u{FE0F}", bosKadFakta:"Herodotus menyifatkan Mesir sebagai hadiah Sungai Nil. Banjir tahunan Nil meninggalkan lumpur subur di kiri kanan sungai yang dikelilingi gurun.",
 soalan:[
 {j:"pilih",t:"Tamadun Mesopotamia muncul di antara sungai:",p:["Tigris dan Euphrates","Nil dan Indus","Huang He dan Yangtze","Ganges dan Indus"],b:0,u:"Mesopotamia bermaksud tanah antara dua sungai, iaitu Tigris dan Euphrates."},
 {j:"pilih",t:"Tamadun Mesir Purba berkembang di sepanjang Sungai:",p:["Nil","Tigris","Indus","Huang He"],b:0,u:"Mesir Purba berkembang di lembah Sungai Nil yang subur di tengah-tengah gurun."},
 {j:"pilih",t:"Harappa dan Mohenjo-daro ialah bandar dalam tamadun:",p:["Indus","Mesir Purba","Mesopotamia","Huang He"],b:0,u:"Harappa dan Mohenjo-daro ialah bandar utama tamadun Indus, di kawasan Pakistan hari ini."},
 {j:"pilih",t:"Sungai Huang He juga dikenali sebagai:",p:["Sungai Kuning","Sungai Biru","Sungai Merah","Sungai Hitam"],b:0,u:"Huang He bermaksud Sungai Kuning kerana airnya membawa lumpur loes berwarna kekuningan."},
 {j:"banyak",t:"Pilih DUA tamadun awal yang terletak di benua Asia.",p:["Indus","Huang He","Mesir Purba","Yunani"],b:[0,1],u:"Indus (Pakistan) dan Huang He (China) terletak di Asia. Mesir Purba di Afrika, manakala Yunani bukan tamadun awal sungai."},
 {j:"pilih",t:"Tamadun Mesopotamia terletak di kawasan negara:",p:["Iraq","Mesir","Pakistan","China"],b:0,u:"Lembah Tigris dan Euphrates kini sebahagian besarnya terletak di Iraq."},
 {j:"pilih",t:"Antara berikut, yang manakah tamadun awal yang PALING awal muncul?",p:["Mesopotamia","Indus","Huang He","Yunani"],b:0,u:"Tamadun Mesopotamia muncul kira-kira 3500 SM, lebih awal daripada Indus (kira-kira 2500 SM) dan Huang He."},
 {j:"pilih",t:"Persamaan lokasi keempat-empat tamadun awal dunia ialah semuanya terletak di:",p:["Lembah sungai","Puncak gunung","Pulau terpencil","Kawasan kutub"],b:0,u:"Keempat-empat tamadun awal muncul di lembah sungai yang subur."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tamadun dan sungainya yang betul.",p:["Mesopotamia: Tigris dan Euphrates","Mesir Purba: Nil","Indus: Indus","Huang He: Nil","Mesir Purba: Euphrates"],b:[0,1,2],u:"Mesopotamia di Tigris dan Euphrates, Mesir Purba di Nil dan tamadun Indus di Sungai Indus. Huang He ialah Sungai Kuning di China."}},

{n:2, tempat:"Bilik Tulisan Purba", sk:"4.1.4 Perkembangan empat tamadun awal", lampiran:"gm1",
 kadNama:"Tulisan Paku", kadEm:"\u{270D}\u{FE0F}", kadFakta:"Tulisan cuneiform Mesopotamia ditekan pada tablet tanah liat dengan batang buluh. Bentuk tanda yang menyerupai paku memberinya nama tulisan paku.",
 bosKadNama:"Tulang Ramalan", bosKadEm:"\u{1F9B4}", bosKadFakta:"Tulisan terawal China dijumpai pada tulang ramalan Dinasti Shang. Soalan kepada roh nenek moyang diukir, tulang dipanaskan dan retakannya ditafsir.",
 soalan:[
 {j:"pilih",t:"Sistem tulisan tamadun Mesopotamia dinamakan:",p:["Cuneiform","Hieroglif","Piktograf Indus","Tulisan tulang ramalan"],b:0,u:"Mesopotamia menggunakan cuneiform, iaitu tulisan berbentuk paku pada tablet tanah liat."},
 {j:"pilih",t:"Masyarakat Mesir Purba menulis hieroglif di atas:",p:["Papirus","Tablet tanah liat","Tulang ramalan","Kepingan gangsa"],b:0,u:"Hieroglif ditulis di atas papirus, iaitu sejenis kertas daripada tumbuhan di tepi Sungai Nil, serta diukir pada dinding."},
 {j:"pilih",t:"Berdasarkan Rajah 1, tamadun manakah muncul kira-kira 2500 SM?",p:["Indus","Mesopotamia","Mesir Purba","Huang He"],b:0,u:"Rajah 1 menunjukkan tamadun Indus muncul kira-kira 2500 SM, selepas Mesopotamia dan Mesir Purba."},
 {j:"pilih",t:"Pemerintah Mesir Purba bergelar:",p:["Firaun","Maharaja","Khalifah","Sultan"],b:0,u:"Firaun ialah pemerintah Mesir Purba yang dianggap sebagai dewa-raja."},
 {j:"pilih",t:"Kanun Hammurabi berasal daripada tamadun:",p:["Mesopotamia","Mesir Purba","Indus","Huang He"],b:0,u:"Kanun Hammurabi disusun oleh Raja Hammurabi dari Babylon di Mesopotamia."},
 {j:"pilih",t:"Tulisan tamadun Indus istimewa kerana:",p:["Ia belum dapat ditafsir","Ia ditulis di atas kepingan papirus","Ia berbentuk seperti paku","Ia tulisan Jawi yang terawal"],b:0,u:"Tulisan piktograf Indus pada cop mohor masih belum dapat ditafsir sepenuhnya oleh sarjana."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun tamadun berikut mengikut kronologi kemunculannya.",p:["Mesopotamia","Mesir Purba","Indus","Huang He"],b:[0,1,2,3],u:"Mengikut Rajah 1: Mesopotamia (kira-kira 3500 SM), Mesir Purba (kira-kira 3100 SM), Indus (kira-kira 2500 SM) dan Huang He (kira-kira 1600 SM, Dinasti Shang)."},
 {j:"pilih",t:"Dinasti awal di lembah Huang He yang meninggalkan tulisan pada tulang ramalan ialah Dinasti:",p:["Shang","Han","Ming","Tang"],b:0,u:"Dinasti Shang meninggalkan tulisan pada tulang ramalan, bukti tulisan China yang terawal."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, pernyataan manakah BETUL?",p:["Mesir Purba muncul lebih awal daripada Indus","Huang He muncul paling awal","Indus muncul lebih awal daripada Mesopotamia","Mesopotamia muncul paling lewat"],b:0,u:"Mesir Purba (kira-kira 3100 SM) muncul lebih awal daripada Indus (kira-kira 2500 SM)."}},

{n:3, tempat:"Tapak Binaan Agung", sk:"4.1.5 Sumbangan tamadun awal dunia", lampiran:null,
 kadNama:"Ziggurat", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Ziggurat ialah kuil bertingkat di Mesopotamia. Ia dibina daripada bata tanah liat dan menjadi pusat keagamaan serta pentadbiran kota.",
 bosKadNama:"Kolam Mandi Besar", bosKadEm:"\u{1F6C1}", bosKadFakta:"Kolam Mandi Besar di Mohenjo-daro dibina dengan bata dan lapisan kedap air. Sistem salirannya menunjukkan kepakaran kejuruteraan tamadun Indus.",
 soalan:[
 {j:"pilih",t:"Kuil bertingkat yang dibina di Mesopotamia dinamakan:",p:["Ziggurat","Piramid","Stupa","Pagoda"],b:0,u:"Ziggurat ialah kuil bertingkat di Mesopotamia. Piramid pula makam firaun di Mesir."},
 {j:"pilih",t:"Piramid di Mesir Purba dibina terutamanya sebagai:",p:["Makam firaun","Pasar rakyat","Kubu tentera","Sekolah jurutulis"],b:0,u:"Piramid ialah makam firaun. Ia mencerminkan kepercayaan kepada kehidupan selepas mati."},
 {j:"pilih",t:"Bandar Mohenjo-daro terkenal dengan:",p:["Sistem salirannya","Piramid batu yang sangat tinggi","Tembok Besar yang panjang","Ziggurat bertingkat tujuh"],b:0,u:"Mohenjo-daro mempunyai perancangan bandar berbentuk grid dan sistem saliran tertutup yang maju."},
 {j:"pilih",t:"Sumbangan Mesopotamia yang masih digunakan dalam pengiraan masa hari ini ialah:",p:["Sistem nombor asas 60","Sistem nombor perpuluhan","Kalendar Hijrah","Jam digital"],b:0,u:"Mesopotamia menggunakan sistem asas 60. Kita masih membahagikan satu jam kepada 60 minit dan satu minit kepada 60 saat."},
 {j:"pilih",t:"Masyarakat Mesir Purba mencipta kalendar 365 hari berdasarkan pemerhatian terhadap:",p:["Banjir Sungai Nil dan bintang","Pergerakan kapal dagang","Musim menuai gandum di Eropah","Bilangan firaun yang memerintah"],b:0,u:"Mereka memerhati banjir tahunan Nil dan kemunculan bintang tertentu untuk menentukan kitaran tahun."},
 {j:"banyak",t:"Pilih DUA sumbangan tamadun Huang He.",p:["Tulisan pada tulang ramalan","Kraf gangsa","Kanun Hammurabi","Piramid Giza"],b:[0,1],u:"Tamadun Huang He terkenal dengan tulisan tulang ramalan dan kraf gangsa Dinasti Shang. Kanun Hammurabi dari Mesopotamia, Piramid Giza dari Mesir."},
 {j:"pilih",t:"Pengawetan mayat yang dikenali sebagai mumia menunjukkan bahawa masyarakat Mesir Purba:",p:["Percaya kepada alam selepas mati","Tidak mempunyai sistem tulisan","Tinggal di kawasan bersalji","Hidup berpindah-randah"],b:0,u:"Mayat diawet supaya roh dapat kembali ke jasadnya dalam kehidupan selepas mati, menurut kepercayaan mereka."},
 {j:"pilih",t:"Epik Gilgamesh ialah contoh sumbangan tamadun Mesopotamia dalam bidang:",p:["Kesusasteraan","Seni bina","Perubatan","Pertanian"],b:0,u:"Epik Gilgamesh ialah karya sastera tertua yang diketahui, ditulis dalam cuneiform."}],
 bos:{j:"pilih",t:"Antara padanan berikut, yang manakah BETUL?",p:["Indus: Kolam Mandi Besar","Mesir Purba: ziggurat","Mesopotamia: tulang ramalan","Huang He: piramid"],b:0,u:"Kolam Mandi Besar terdapat di Mohenjo-daro, tamadun Indus. Ziggurat dari Mesopotamia, tulang ramalan dari Huang He dan piramid dari Mesir."}},

{n:4, tempat:"Makmal Perbandingan", sk:"4.1.5 Membandingkan sumbangan tamadun awal", lampiran:"p1",
 kadNama:"Membanding", kadEm:"\u{1F4CA}", kadFakta:"Membandingkan bermaksud mencari persamaan DAN perbezaan. Contohnya, Mesopotamia dan Mesir sama-sama ada tulisan, tetapi bahan dan bentuk tulisannya berbeza.",
 bosKadNama:"Rangkaian Dagang", bosKadEm:"\u{1F6A2}", bosKadFakta:"Cop mohor Indus ditemui di Mesopotamia. Ini bukti dua tamadun itu berdagang walaupun dipisahkan ribuan kilometer.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah PERSAMAAN pemerintahan Mesir Purba dan Mesopotamia?",p:["Kedua-duanya diperintah oleh raja","Kedua-duanya diperintah oleh rakyat","Kedua-duanya tiada pemerintah","Kedua-duanya diperintah oleh pedagang"],b:0,u:"Kedua-dua tamadun diperintah oleh raja. Bezanya, firaun Mesir dianggap dewa, manakala raja Mesopotamia dianggap wakil dewa."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah PERBEZAAN kedudukan pemerintah Mesir dan Mesopotamia?",p:["Firaun dianggap dewa, raja Mesopotamia wakil dewa","Firaun dipilih rakyat, raja Mesopotamia diwarisi","Firaun tiada kuasa, raja Mesopotamia berkuasa penuh","Kedua-duanya sama sekali tidak berbeza"],b:0,u:"Petikan 1 menyatakan firaun dianggap dewa yang hidup, manakala raja Mesopotamia dianggap wakil dewa."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah bandar-bandar Mesopotamia sering berperang?",p:["Negara kota bersaing","Mereka tidak mempunyai tentera langsung","Mereka disatukan oleh seorang firaun","Mereka dilindungi oleh gurun yang luas"],b:0,u:"Mesopotamia terdiri daripada negara kota yang bebas dan bersaing untuk tanah dan air. Mesir pula lebih bersatu di bawah firaun."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Mesir Purba lebih jarang diserang musuh berbanding Mesopotamia?",p:["Gurun menjadi benteng semula jadi","Mesir tidak mempunyai sungai yang besar","Penduduknya terlalu sedikit untuk diserang","Mesir terletak jauh di kawasan kutub"],b:0,u:"Gurun yang luas menyukarkan musuh menyerang Mesir. Mesopotamia pula berada di kawasan terbuka."},
 {j:"banyak",t:"Pilih DUA PERSAMAAN antara keempat-empat tamadun awal dunia.",p:["Bergantung pada pertanian di lembah sungai","Mempunyai sistem tulisan","Menggunakan tulisan yang sama","Membina piramid sebagai makam"],b:[0,1],u:"Keempat-empatnya bertani di lembah sungai dan mempunyai tulisan. Jenis tulisannya berbeza dan hanya Mesir membina piramid."},
 {j:"pilih",t:"Cop mohor Indus ditemui di Mesopotamia. Apakah kesimpulan yang paling munasabah?",p:["Indus dan Mesopotamia berdagang","Tamadun Indus menakluk Mesopotamia","Cop mohor dicipta di Mesopotamia","Kedua-duanya tamadun yang sama"],b:0,u:"Barang dari satu tamadun yang ditemui di tamadun lain lazimnya bukti hubungan perdagangan."},
 {j:"pilih",t:"Bandingkan binaan utama Mesir Purba dan Indus. Pernyataan manakah BETUL?",p:["Mesir: makam diraja, Indus: kemudahan awam","Kedua-duanya menonjolkan makam diraja","Indus membina piramid yang lebih tinggi","Mesir terkenal dengan sistem saliran bandar"],b:0,u:"Piramid Mesir ialah makam diraja, manakala Indus terkenal dengan saliran dan Kolam Mandi Besar untuk kegunaan awam."},
 {j:"pilih",t:"Berdasarkan Petikan 1, sistem pengairan seperti shaduf penting kepada Mesir kerana:",p:["Air dapat disalurkan ke ladang","Ia digunakan untuk menulis","Ia menjadi senjata perang","Ia menghalang banjir Nil sepenuhnya"],b:0,u:"Shaduf mengangkat air dari sungai ke ladang supaya tanaman dapat diairi pada musim kering."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat tentang Mesir Purba dan Mesopotamia?",p:["Geografi mempengaruhi pemerintahan","Kedua-duanya mempunyai sejarah yang sama","Geografi tidak mempengaruhi tamadun","Mesopotamia lebih bersatu daripada Mesir"],b:0,u:"Mesir dilindungi gurun dan bersatu di bawah firaun, manakala Mesopotamia terbuka dan berpecah kepada negara kota. Geografi mempengaruhi kedua-duanya."}},

{n:5, tempat:"Balai Juri Tamadun", sk:"4.1.5 Menilai sumbangan tamadun awal", lampiran:null,
 kadNama:"Undang-undang Bertulis", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Kanun Hammurabi diukir pada tiang batu supaya rakyat dapat melihatnya. Undang-undang bertulis menjadikan hukuman lebih jelas dan seragam.",
 bosKadNama:"Kalendar", bosKadEm:"\u{1F4C5}", bosKadFakta:"Kalendar membantu petani mengetahui masa menanam dan menuai. Kalendar 365 hari Mesir Purba menjadi asas kepada kalendar yang kita guna hari ini.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, sumbangan tamadun awal manakah paling besar kesannya kepada dunia moden?",p:["Sistem tulisan","Bentuk piramid","Amalan mumia","Ukiran cop mohor"],b:0,u:"Tulisan membolehkan ilmu direkod dan diwariskan. Tanpa tulisan, sejarah, undang-undang dan sains sukar berkembang."},
 {j:"pilih",t:"Mengapakah Kanun Hammurabi dianggap satu kemajuan penting?",p:["Undang-undang diketahui umum","Hukumannya paling ringan di dunia","Ia menghapuskan semua jenayah","Ia ditulis dalam bahasa Melayu"],b:0,u:"Undang-undang yang ditulis dan dipamerkan memastikan rakyat tahu peraturan dan hukuman, jadi pemerintahan lebih teratur."},
 {j:"pilih",t:"Kanun Hammurabi mengenakan hukuman berbeza mengikut golongan sosial. Penilaian manakah paling adil?",p:["Maju pada zamannya, tetapi kurang adil","Ia sempurna dan patut digunakan hari ini","Ia tidak memberi apa-apa sumbangan","Ia lebih adil daripada undang-undang moden"],b:0,u:"Penilaian yang adil mengiktiraf kemajuan Kanun Hammurabi pada zamannya, sambil mengakui kelemahannya berbanding nilai keadilan hari ini."},
 {j:"pilih",t:"Pembinaan piramid memerlukan ribuan pekerja selama bertahun-tahun. Apakah yang boleh dinilai daripada fakta ini?",p:["Pentadbiran Mesir sangat tersusun","Piramid dibina dengan mesin moden","Rakyat Mesir tidak mempunyai pekerjaan lain","Piramid dibina dalam masa sehari"],b:0,u:"Pemerintah Mesir mampu mengurus tenaga kerja secara besar-besaran. Projek sebesar piramid menunjukkan keupayaan pentadbiran, perancangan dan organisasi tenaga kerja yang tinggi."},
 {j:"banyak",t:"Pilih DUA sumbangan tamadun awal yang masih digunakan hari ini.",p:["Pembahagian jam kepada 60 minit","Kalendar 365 hari","Pengawetan mumia","Tulisan tulang ramalan"],b:[0,1],u:"Asas 60 dari Mesopotamia dan kalendar 365 hari dari Mesir masih digunakan. Mumia dan tulang ramalan tidak lagi diamalkan."},
 {j:"pilih",t:"Sistem saliran Mohenjo-daro sering dipuji. Pada pendapat anda, mengapa?",p:["Ia menjaga kesihatan penduduk","Ia menjadikan bandar lebih cantik","Ia menyimpan emas diraja","Ia digunakan untuk upacara perang"],b:0,u:"Saliran yang baik mengelakkan air bertakung dan penyakit. Ia menunjukkan keprihatinan terhadap kesejahteraan awam."},
 {j:"pilih",t:"Banjir Sungai Huang He sering memusnahkan kampung sehingga digelar \"kesedihan China\". Bagaimanakah fakta ini dinilai?",p:["Sungai membawa kesuburan dan juga bencana","Sungai hanya membawa keburukan","Sungai tidak penting kepada tamadun China","Banjir menjadikan tanah tidak subur"],b:0,u:"Penilaian seimbang melihat kedua-dua sisi: lumpur yang subur untuk pertanian dan banjir yang memusnahkan."},
 {j:"pilih",t:"Tamadun manakah paling menekankan perancangan bandar yang sistematik?",p:["Indus","Mesir Purba","Huang He","Mesopotamia"],b:0,u:"Bandar Indus seperti Mohenjo-daro mempunyai jalan berbentuk grid, rumah bata seragam dan saliran tertutup."}],
 bos:{j:"pilih",t:"Antara penilaian berikut, yang manakah PALING berasas?",p:["Tamadun awal meletakkan asas dunia moden","Tamadun awal tidak berkaitan dengan dunia moden","Hanya satu tamadun awal yang memberi sumbangan","Sumbangan tamadun awal kini tidak digunakan lagi"],b:0,u:"Tulisan, undang-undang bertulis, kalendar, asas 60 dan perancangan bandar ialah asas yang terus dimajukan hingga kini."}},

{n:6, tempat:"Bengkel Inovasi", sk:"K4.1.7 hingga K4.1.9 Nilai dan pencetus inovasi", lampiran:null,
 kadNama:"Belajar daripada Nil", kadEm:"\u{1F4A7}", kadFakta:"Masyarakat Mesir Purba merancang pertanian mengikut kitaran banjir Nil. Merancang mengikut keadaan alam ialah idea yang masih relevan untuk petani hari ini.",
 bosKadNama:"Pencetus Inovasi", bosKadEm:"\u{1F4A1}", bosKadFakta:"Inovasi sering bermula dengan menambah baik idea lama. Roda Mesopotamia menjadi asas kepada kereta, basikal dan kincir.",
 soalan:[
 {j:"pilih",t:"Kawasan perumahan anda sering dilanda banjir kilat. Berdasarkan sumbangan tamadun Indus, idea manakah paling berasas?",p:["Menaik taraf sistem saliran","Membina piramid di tengah taman","Membuat lebih banyak cop mohor","Menulis kanun baharu pada batu"],b:0,u:"Tamadun Indus terkenal dengan sistem saliran yang teratur. Prinsip yang sama boleh diaplikasikan untuk mengatasi banjir kilat."},
 {j:"pilih",t:"Bagaimanakah idea undang-undang bertulis Hammurabi boleh diaplikasikan dalam kelas?",p:["Peraturan ditulis dan dipamerkan","Peraturan diubah mengikut mood ketua","Peraturan disimpan secara rahsia","Peraturan berbeza bagi setiap murid"],b:0,u:"Peraturan bertulis yang dipamerkan memastikan semua murid tahu dan mematuhinya secara adil."},
 {j:"banyak",t:"Pilih DUA nilai yang boleh dipelajari daripada pembinaan piramid dan ziggurat.",p:["Kerjasama","Perancangan yang teliti","Bekerja secara bersendirian","Mengabaikan pemimpin"],b:[0,1],u:"Binaan besar memerlukan kerjasama ribuan orang dan perancangan teliti."},
 {j:"pilih",t:"Petani di kampung anda mahu merancang musim tanam dengan lebih baik. Idea manakah diilhamkan oleh tamadun Mesir?",p:["Membina kalendar tanaman","Menanam tanpa melihat musim","Menunggu banjir besar setiap minggu","Menanam di kawasan gurun yang kering"],b:0,u:"Mesir Purba merancang pertanian berdasarkan kitaran banjir Nil. Kalendar tanaman berdasarkan musim hujan ialah aplikasi moden idea ini."},
 {j:"pilih",t:"Sekolah anda mahu memperkenalkan sumbangan tamadun awal secara kreatif. Idea manakah paling berasas?",p:["Bengkel menulis nama dalam cuneiform","Menonton kartun fantasi tanpa perbincangan","Menghafal tarikh kemunculan setiap tamadun","Melukis gambar bebas mengikut minat"],b:0,u:"Bengkel tulisan purba membolehkan murid mengalami sendiri sumbangan tamadun awal dan memahaminya."},
 {j:"pilih",t:"Mengapakah kita perlu menghargai sumbangan tamadun awal sebagai pencetus inovasi?",p:["Inovasi moden dibina atas idea mereka","Tamadun awal lebih maju daripada kita","Kita tidak perlu mencipta lagi","Semua idea moden datang dari Mesir"],b:0,u:"Roda, tulisan dan kalendar ialah asas yang dimajukan oleh generasi kemudian sehingga menjadi teknologi hari ini."},
 {j:"pilih",t:"Bandar anda mahu menjadi bandar pintar. Prinsip perancangan bandar Indus manakah paling relevan?",p:["Jalan dan kemudahan awam teratur","Membina makam diraja yang besar","Menulis rekod pada tulang ramalan","Membina kuil bertingkat di tengah bandar"],b:0,u:"Perancangan grid dan kemudahan awam seperti saliran ialah prinsip yang masih penting dalam perancangan bandar."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kita tak boleh belajar apa-apa daripada tamadun yang sudah runtuh.\" Respons manakah paling rasional?",p:["Kejayaan dan kelemahan mereka memberi iktibar","Betul, kerana tamadun itu sudah lama berlalu","Betul, kerana kita tidak tinggal di tepi sungai","Kita patut meniru tamadun itu bulat-bulat"],b:0,u:"Kejayaan tamadun awal memberi idea, manakala kelemahannya memberi iktibar."}],
 bos:{j:"buka",
  t:"Pilih SATU sumbangan tamadun awal dunia dan cadangkan bagaimana ia boleh diinovasikan untuk menyelesaikan satu masalah di Malaysia hari ini.",
  arahan:"Namakan tamadun dan sumbangannya (contoh: sistem saliran Indus, kalendar Mesir, undang-undang bertulis Mesopotamia, tulisan Huang He). Terangkan masalah semasa yang dipilih, idea inovasi awak, dan nilai yang dipelajari daripada tamadun itu.",
  u:"Jawapan TP6 yang kukuh menyatakan sumbangan dengan tepat, mengaitkannya dengan masalah sebenar (contohnya banjir kilat, pengurusan air, peraturan komuniti), mencadangkan inovasi yang munasabah dan boleh dilaksanakan, serta menghuraikan nilai seperti kerjasama dan perancangan."}}
];

module.exports = {
  id:"s1b5", tingkatan:1, kod:"5.0 Tamadun Awal Dunia",
  tajuk:"Empat Sungai Tamadun",
  subtajuk:"Sejarah Ting. 1 · Bab 5 Tamadun Awal Dunia",
  spi:SPI["4.1"],
  ulasan:{
   1:"{n} dapat mengenal pasti empat lokasi tamadun awal dunia dan sungai yang berkaitan. Langkah seterusnya ialah memahami perkembangan setiap tamadun, termasuk sistem tulisan dan pemerintahannya.",
   2:"{n} memahami perkembangan tamadun Mesopotamia, Mesir Purba, Indus dan Huang He. Perlu lebih latihan menerangkan sumbangan setiap tamadun dengan contoh sebelum bergerak ke TP3.",
   3:"{n} boleh menerangkan sumbangan tamadun awal dunia dengan contoh yang sesuai, seperti ziggurat, piramid dan sistem saliran Mohenjo-daro. Galakkan membandingkan persamaan dan perbezaan antara tamadun.",
   4:"{n} mampu menganalisis dan membandingkan sumbangan tamadun awal dunia, termasuk kesan geografi terhadap pemerintahan. Seterusnya latih menilai sumbangan itu dengan alasan.",
   5:"{n} dapat membuat penilaian yang seimbang tentang sumbangan tamadun awal dunia dengan alasan yang berasas. Sudah bersedia melahirkan idea inovasi berdasarkan sumbangan itu.",
   6:"{n} berjaya melahirkan idea yang berasas untuk menginovasikan sumbangan tamadun awal bagi menyelesaikan masalah semasa. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Tamadun Awal Dunia. Cadangan: ulang hentian pertama sambil melabel peta empat tamadun awal dan sungainya dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira 3500 SM", label:"Tamadun Mesopotamia"},
     {masa:"Kira-kira 3100 SM", label:"Tamadun Mesir Purba"},
     {masa:"Kira-kira 2500 SM", label:"Tamadun Indus"},
     {masa:"Kira-kira 1600 SM", label:"Tamadun Huang He (Dinasti Shang)"}],
     kapsyen:"Rajah 1 · Anggaran kemunculan tamadun awal dunia",
     alt:"Garis masa menegak: kira-kira 3500 SM tamadun Mesopotamia; kira-kira 3100 SM tamadun Mesir Purba; kira-kira 2500 SM tamadun Indus; kira-kira 1600 SM tamadun Huang He, Dinasti Shang"},
   p1:petikan(1, "Mesir Purba dan Mesopotamia",
     ["Mesir Purba dikelilingi gurun yang luas. Gurun ini menjadi benteng semula jadi yang menyukarkan musuh menyerang. Mesir disatukan di bawah firaun, yang dianggap dewa yang hidup. Petani menggunakan shaduf untuk mengangkat air dari Sungai Nil ke ladang.",
      "Mesopotamia pula terletak di kawasan terbuka antara Sungai Tigris dan Euphrates. Ia terdiri daripada beberapa negara kota seperti Ur dan Uruk, masing-masing diperintah oleh raja yang dianggap wakil dewa. Negara kota ini sering berperang kerana bersaing mendapatkan tanah dan air."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
