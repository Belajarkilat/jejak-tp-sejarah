/* Sumber kandungan — Sejarah KSSM Tingkatan 1, Bab 6 Peningkatan Tamadun Yunani dan Rom.
   Standard Kandungan 4.2 Peningkatan Tamadun dan Sumbangannya, Standard Pembelajaran 4.2.1 hingga 4.2.3
   serta K4.2.7 dan K4.2.8 (DSKP KSSM Sejarah Tingkatan 1, dskp/sejarah-t1.pdf).
   Bab 6 dan Bab 7 berkongsi Standard Kandungan 4.2; Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pelabuhan Aegean", sk:"4.2.1 Lokasi peningkatan tamadun · 4.2.2 Tamadun Yunani", lampiran:null,
 kadNama:"Polis", kadEm:"\u{1F3FA}", kadFakta:"Yunani purba terdiri daripada banyak negara kota yang dipanggil polis. Athens dan Sparta ialah dua polis yang paling terkenal.",
 bosKadNama:"Demos + Kratos", bosKadEm:"\u{1F5F3}\u{FE0F}", bosKadFakta:"Demokrasi berasal daripada perkataan Yunani demos (rakyat) dan kratos (pemerintahan). Maksudnya pemerintahan oleh rakyat.",
 soalan:[
 {j:"pilih",t:"Negara kota dalam tamadun Yunani dipanggil:",p:["Polis","Civitas","Forum","Basilika"],b:0,u:"Polis ialah negara kota Yunani yang mempunyai kerajaan sendiri, contohnya Athens dan Sparta."},
 {j:"pilih",t:"Sistem demokrasi berkembang di negara kota:",p:["Athens","Sparta","Rom","Babylon"],b:0,u:"Athens terkenal dengan perkembangan sistem demokrasi. Sparta pula terkenal dengan kekuatan tenteranya."},
 {j:"pilih",t:"Perkataan demokrasi berasal daripada demos dan kratos yang bermaksud:",p:["Pemerintahan oleh rakyat","Pemerintahan oleh raja","Pemerintahan oleh tentera","Pemerintahan oleh pendeta"],b:0,u:"Demos bermaksud rakyat dan kratos bermaksud pemerintahan. Demokrasi ialah pemerintahan oleh rakyat."},
 {j:"banyak",t:"Pilih DUA tamadun yang mengalami peningkatan tamadun selepas tamadun awal, seperti yang dipelajari dalam bab ini dan bab berikutnya.",p:["Yunani","Rom","Sumeria","Mesir Purba"],b:[0,1],u:"Empat lokasi peningkatan tamadun ialah Yunani, Rom, India dan China. Sumeria dan Mesir Purba ialah tamadun awal."},
 {j:"pilih",t:"Tokoh Athens yang digelar Bapa Demokrasi ialah:",p:["Cleisthenes","Julius Caesar","Hammurabi","Asoka"],b:0,u:"Cleisthenes memperkenalkan pembaharuan yang mengukuhkan demokrasi di Athens. Julius Caesar dari Rom, Hammurabi dari Babylon dan Asoka dari India."},
 {j:"pilih",t:"Tamadun Yunani terletak di sekitar laut:",p:["Aegean","Merah","China Selatan","Arab"],b:0,u:"Yunani purba berkembang di Semenanjung Balkan dan pulau-pulau di Laut Aegean."},
 {j:"pilih",t:"Kota Rom terletak di tepi Sungai:",p:["Tiber","Nil","Tigris","Indus"],b:0,u:"Rom terletak di tepi Sungai Tiber di Semenanjung Itali."},
 {j:"pilih",t:"Tokoh Athens yang memerintah semasa zaman kegemilangan dan membayar gaji kepada pegawai awam ialah:",p:["Pericles","Solon","Cleisthenes","Augustus"],b:0,u:"Pericles membayar gaji pegawai awam supaya rakyat biasa juga mampu berkhidmat dalam kerajaan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan yang betul.",p:["Athens: demokrasi","Sparta: kekuatan tentera","Rom: Sungai Tiber","Athens: Sungai Tiber","Sparta: Bapa Demokrasi"],b:[0,1,2],u:"Athens terkenal dengan demokrasi, Sparta dengan tentera, dan Rom terletak di tepi Sungai Tiber."}},

{n:2, tempat:"Dewan Perhimpunan Athens", sk:"4.2.2 Pemerintahan dan pentadbiran Athens", lampiran:null,
 kadNama:"Majlis 500", kadEm:"\u{1F5F3}\u{FE0F}", kadFakta:"Majlis 500 dianggotai 500 orang warganegara, 50 orang daripada setiap satu daripada 10 suku. Mereka menyediakan rang undang-undang untuk dibahaskan oleh Perhimpunan.",
 bosKadNama:"Ostrakisme", bosKadEm:"\u{1F3FA}", bosKadFakta:"Rakyat Athens boleh mengundi untuk membuang negeri seseorang yang dianggap mengancam demokrasi. Nama ditulis pada serpihan tembikar yang dipanggil ostrakon.",
 soalan:[
 {j:"pilih",t:"Badan dalam demokrasi Athens yang terbuka kepada semua warganegara untuk membahas dan meluluskan undang-undang ialah:",p:["Perhimpunan","Majlis 500","Mahkamah Rakyat","Majlis Sepuluh Jeneral"],b:0,u:"Perhimpunan dihadiri warganegara lelaki dewasa. Di sinilah undang-undang dibahas dan diluluskan."},
 {j:"pilih",t:"Fungsi utama Majlis 500 ialah:",p:["Menyediakan rang undang-undang","Mengetuai tentera di medan perang","Membina kuil dan teater","Mengutip cukai daripada negeri lain"],b:0,u:"Majlis 500 menyediakan rang undang-undang dan mengurus pentadbiran harian sebelum dibawa ke Perhimpunan."},
 {j:"pilih",t:"Siapakah yang mengetuai angkatan tentera Athens?",p:["Majlis Sepuluh Jeneral","Mahkamah Rakyat","Majlis 500","Perhimpunan"],b:0,u:"Sepuluh jeneral dipilih untuk mengetuai tentera dan angkatan laut Athens."},
 {j:"pilih",t:"Mahkamah Rakyat di Athens berfungsi untuk:",p:["Membicarakan kes","Melantik raja Athens","Membina kapal perang baharu","Menulis puisi epik tentang dewa"],b:0,u:"Mahkamah Rakyat membicarakan kes dan menjatuhkan hukuman. Juri yang besar dipilih daripada kalangan warganegara."},
 {j:"banyak",t:"Pilih DUA golongan yang TIDAK mempunyai hak mengundi dalam demokrasi Athens.",p:["Wanita","Hamba","Warganegara lelaki dewasa","Ahli Majlis 500"],b:[0,1],u:"Hak mengundi hanya untuk warganegara lelaki dewasa. Wanita, hamba dan orang asing tidak mempunyai hak itu."},
 {j:"pilih",t:"Demokrasi di Athens dikenali sebagai demokrasi langsung kerana:",p:["Warganegara mengundi secara terus","Rakyat memilih wakil untuk mewakili mereka","Raja membuat semua keputusan","Keputusan dibuat oleh negara lain"],b:0,u:"Warganegara Athens sendiri hadir dan mengundi dalam Perhimpunan. Hari ini kita mengamalkan demokrasi berparlimen melalui wakil rakyat."},
 {j:"susun",t:"Susun proses meluluskan undang-undang di Athens.",p:["Majlis 500 menyediakan rang undang-undang","Rang dibawa ke Perhimpunan","Warganegara membahaskannya","Perhimpunan mengundi untuk meluluskannya"],b:[0,1,2,3],u:"Majlis 500 menyediakan rang, Perhimpunan membahas, kemudian warganegara mengundi."},
 {j:"pilih",t:"Amalan membuang negeri seseorang melalui undian pada serpihan tembikar dinamakan:",p:["Ostrakisme","Demokrasi","Oligarki","Monarki"],b:0,u:"Ostrakisme melindungi demokrasi daripada individu yang dianggap terlalu berkuasa."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan badan pemerintahan Athens dan fungsinya yang betul.",p:["Perhimpunan: meluluskan undang-undang","Majlis 500: menyediakan rang undang-undang","Mahkamah Rakyat: membicarakan kes","Majlis Sepuluh Jeneral: membicarakan kes","Perhimpunan: mengetuai tentera"],b:[0,1,2],u:"Perhimpunan meluluskan undang-undang, Majlis 500 menyediakan rang dan Mahkamah Rakyat membicarakan kes. Sepuluh Jeneral mengetuai tentera."}},

{n:3, tempat:"Kota Gerbang Rom", sk:"4.2.3 Peningkatan seni bina tamadun Rom", lampiran:null,
 kadNama:"Lengkungan", kadEm:"\u{1F309}", kadFakta:"Lengkungan (gerbang) mengagihkan berat ke tiang di sisinya. Teknik ini membolehkan orang Rom membina jambatan, akueduk dan bangunan yang besar dan kukuh.",
 bosKadNama:"Konkrit Rom", bosKadEm:"\u{1F9F1}", bosKadFakta:"Orang Rom mencipta konkrit menggunakan abu gunung berapi. Kubah Pantheon yang dibina hampir 2 000 tahun dahulu masih berdiri hingga hari ini.",
 soalan:[
 {j:"pilih",t:"Amfiteater besar di Rom yang digunakan untuk pertunjukan gladiator ialah:",p:["Colosseum","Pantheon","Parthenon","Ziggurat"],b:0,u:"Colosseum ialah amfiteater Rom. Pantheon ialah kuil berkubah, manakala Parthenon kuil di Athens."},
 {j:"pilih",t:"Saluran air yang dibina orang Rom untuk membawa air ke bandar dinamakan:",p:["Akueduk","Ziggurat","Basilika","Forum"],b:0,u:"Akueduk menyalurkan air dari sumber yang jauh ke bandar menggunakan kecerunan yang dikira dengan teliti."},
 {j:"pilih",t:"Bangunan Rom yang terkenal dengan kubahnya yang besar ialah:",p:["Pantheon","Colosseum","Akueduk","Forum"],b:0,u:"Pantheon mempunyai kubah konkrit yang besar dengan lubang di tengahnya."},
 {j:"banyak",t:"Pilih DUA ciri seni bina Rom.",p:["Penggunaan lengkungan","Penggunaan konkrit","Bangunan daripada buluh","Bumbung daripada daun nipah"],b:[0,1],u:"Lengkungan dan konkrit ialah ciri utama seni bina Rom yang menjadikan bangunannya besar dan tahan lama."},
 {j:"pilih",t:"Pernyataan \"semua jalan menuju ke Rom\" menggambarkan:",p:["Rangkaian jalan raya yang luas","Banyaknya sungai di Semenanjung Itali","Kota Rom yang kecil dan terpencil","Kekurangan pengangkutan di wilayah"],b:0,u:"Orang Rom membina rangkaian jalan raya yang luas untuk menghubungkan wilayah empayar dengan ibu kota."},
 {j:"pilih",t:"Forum dalam kota Rom berfungsi sebagai:",p:["Pusat pentadbiran","Tempat pertunjukan gladiator","Saluran air bawah tanah","Makam maharaja"],b:0,u:"Forum ialah pusat pentadbiran dan perniagaan, iaitu dataran pusat kota tempat urusan pentadbiran, perniagaan dan perhimpunan awam."},
 {j:"pilih",t:"Teknik lengkungan membolehkan orang Rom membina jambatan yang kukuh kerana:",p:["Berat diagihkan ke tiang","Bahan binaannya sangat ringan","Jambatan itu tidak digunakan","Ia diperbuat daripada kain"],b:0,u:"Lengkungan memindahkan beban ke tiang di kiri dan kanan, jadi struktur dapat menanggung berat yang besar."},
 {j:"pilih",t:"Bahan binaan yang dicipta orang Rom menggunakan abu gunung berapi ialah:",p:["Konkrit","Kaca","Keluli","Plastik"],b:0,u:"Konkrit Rom dibuat daripada kapur, abu gunung berapi dan batu. Ia sangat tahan lama."}],
 bos:{j:"pilih",t:"Antara padanan berikut, yang manakah BETUL?",p:["Akueduk: membawa air ke bandar","Colosseum: kuil berkubah","Pantheon: pertunjukan gladiator","Forum: saluran air"],b:0,u:"Akueduk membawa air. Colosseum untuk pertunjukan, Pantheon kuil berkubah dan Forum pusat pentadbiran."}},

{n:4, tempat:"Makmal Analisis Athens", sk:"4.2.2 · 4.2.3 Menganalisis peningkatan tamadun Yunani dan Rom", lampiran:"p1",
 kadNama:"Siapa Warganegara?", kadEm:"\u{1F465}", kadFakta:"Pada zaman Pericles, hanya sebahagian kecil penduduk Athens layak mengundi. Demokrasi Athens maju pada zamannya, tetapi tidak merangkumi semua.",
 bosKadNama:"Warisan Bersama", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Bangunan Parlimen dan mahkamah di banyak negara masih menggunakan tiang dan kubah. Ini warisan seni bina Yunani dan Rom.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Pericles membayar gaji kepada pegawai awam?",p:["Supaya rakyat miskin juga mampu berkhidmat","Supaya pegawai tidak perlu bekerja","Supaya golongan kaya sahaja memegang jawatan","Supaya hamba boleh mengundi"],b:0,u:"Tanpa gaji, hanya orang kaya mampu meninggalkan kerja untuk berkhidmat. Gaji membolehkan rakyat biasa turut terlibat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelemahan demokrasi Athens?",p:["Wanita dan hamba tidak mengundi","Rakyat terlalu banyak mengundi","Tiada undang-undang bertulis","Tiada pemimpin yang dilantik"],b:0,u:"Hak mengundi terhad kepada warganegara lelaki dewasa, jadi sebahagian besar penduduk tidak terlibat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah anggota Majlis 500 dipilih melalui cabutan?",p:["Supaya setiap warganegara berpeluang","Supaya hanya orang kaya terpilih","Supaya majlis dikuasai satu keluarga","Supaya undian tidak diperlukan"],b:0,u:"Cabutan memberi peluang yang sama kepada semua warganegara dan mengurangkan penguasaan golongan tertentu."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri yang menunjukkan Athens mengamalkan demokrasi.",p:["Undang-undang diluluskan oleh Perhimpunan","Anggota majlis dipilih melalui cabutan","Seorang raja membuat semua keputusan","Wanita tidak dibenarkan mengundi"],b:[0,1],u:"Perhimpunan rakyat dan pemilihan melalui cabutan ialah ciri demokrasi. Wanita tidak mengundi ialah kelemahannya."},
 {j:"pilih",t:"Bandingkan demokrasi Athens dengan demokrasi Malaysia. Pernyataan manakah BETUL?",p:["Athens langsung, Malaysia melalui wakil rakyat","Kedua-duanya hanya membenarkan lelaki mengundi","Malaysia mengamalkan ostrakisme","Athens mempunyai Parlimen dan Dewan Negara"],b:0,u:"Rakyat Athens mengundi terus dalam Perhimpunan. Rakyat Malaysia memilih wakil ke Parlimen melalui pilihan raya."},
 {j:"pilih",t:"Orang Rom meminjam penggunaan tiang daripada Yunani, tetapi menambah lengkungan dan kubah. Apakah yang dapat disimpulkan?",p:["Tamadun berkembang melalui penambahbaikan","Rom tidak mempunyai idea sendiri","Yunani meniru seni bina Rom","Tiang dan lengkungan tidak berkaitan"],b:0,u:"Rom mengambil idea Yunani dan menambahnya dengan teknik baharu. Ini menunjukkan tamadun berkembang melalui penambahbaikan."},
 {j:"pilih",t:"Mengapakah akueduk penting kepada perkembangan bandar Rom?",p:["Bandar besar memerlukan air bersih","Akueduk menjadi tempat pertunjukan","Akueduk digunakan sebagai jalan raya","Akueduk menyimpan senjata"],b:0,u:"Bekalan air yang cukup membolehkan bandar besar menyokong ramai penduduk, tempat mandi awam dan kebersihan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah hubungan antara pembaharuan Cleisthenes dengan penyertaan rakyat?",p:["Lebih ramai rakyat dapat terlibat","Pembaharuan itu menamatkan penyertaan rakyat","Pembaharuan itu mengembalikan kuasa raja","Pembaharuan itu tidak berkaitan dengan rakyat"],b:0,u:"Cleisthenes menyusun semula rakyat kepada suku dan memperkenalkan Majlis 500, jadi lebih ramai rakyat dapat terlibat."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, rumusan manakah PALING tepat tentang demokrasi Athens?",p:["Ia maju tetapi penyertaannya terhad","Ia sempurna dan melibatkan semua penduduk","Ia sama dengan pemerintahan beraja","Ia tidak memberi apa-apa sumbangan"],b:0,u:"Demokrasi Athens membuka ruang penyertaan rakyat, tetapi wanita, hamba dan orang asing tidak termasuk."}},

{n:5, tempat:"Balai Penilaian Klasik", sk:"4.2.2 · 4.2.3 · K4.2.7 · K4.2.8 Menilai peningkatan tamadun", lampiran:null,
 kadNama:"Lambang Intelektual", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Seni bina yang besar dan kukuh memerlukan pengetahuan matematik, kejuruteraan dan perancangan. Itulah sebabnya seni bina dianggap lambang intelektual sesuatu tamadun.",
 bosKadNama:"Asas Demokrasi", bosKadEm:"\u{1F5F3}\u{FE0F}", bosKadFakta:"Asas demokrasi seperti hak bersuara, mengundi dan kedaulatan undang-undang bermula di Athens dan terus berkembang hingga kini.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, sumbangan Yunani manakah paling penting kepada sistem pemerintahan moden?",p:["Asas demokrasi","Amfiteater gladiator","Konkrit abu gunung berapi","Akueduk"],b:0,u:"Idea pemerintahan oleh rakyat yang bermula di Athens menjadi asas kepada sistem demokrasi di banyak negara hari ini."},
 {j:"pilih",t:"Seorang murid berkata, \"Demokrasi Athens sama adilnya dengan demokrasi hari ini.\" Penilaian manakah paling tepat?",p:["Kurang tepat, kerana penyertaannya terhad","Tepat, kerana semua penduduk mengundi","Tepat, kerana Athens mempunyai Parlimen","Kurang tepat, kerana Athens diperintah raja"],b:0,u:"Penyertaan demokrasi Athens terhad kerana wanita, hamba dan orang asing tidak boleh mengundi. Demokrasi moden lebih inklusif."},
 {j:"pilih",t:"Mengapakah seni bina Rom dianggap lambang intelektual?",p:["Ia memerlukan ilmu kejuruteraan","Ia dibina tanpa sebarang perancangan","Ia dibina oleh seorang tukang","Ia tidak tahan lama"],b:0,u:"Lengkungan, kubah dan akueduk memerlukan pengiraan dan kejuruteraan yang tinggi."},
 {j:"banyak",t:"Pilih DUA alasan yang menyokong pendapat bahawa seni bina Rom maju.",p:["Banyak binaannya masih berdiri hingga kini","Akueduk membawa air merentasi jarak jauh","Bangunannya dibina daripada daun","Bangunannya runtuh dalam masa setahun"],b:[0,1],u:"Ketahanan binaan dan kecanggihan akueduk membuktikan kemajuan seni bina Rom."},
 {j:"pilih",t:"Antara berikut, yang manakah penilaian PALING seimbang tentang Colosseum?",p:["Seni binanya hebat, pertunjukannya kejam","Ia sempurna dalam semua aspek","Ia tidak mempunyai nilai sejarah","Ia lebih kecil daripada rumah biasa"],b:0,u:"Colosseum menunjukkan kehebatan kejuruteraan, tetapi pertarungan gladiator yang berdarah wajar dinilai secara kritis."},
 {j:"pilih",t:"Mengapakah asas-asas demokrasi wajar dihargai oleh rakyat Malaysia?",p:["Rakyat berhak memilih pemimpin","Rakyat tidak perlu mematuhi undang-undang","Pemimpin boleh memerintah tanpa had","Pilihan raya tidak penting"],b:0,u:"Demokrasi memberi hak kepada rakyat memilih pemimpin dan menyuarakan pendapat secara teratur."},
 {j:"pilih",t:"Pada pendapat anda, kenapakah cabutan undi untuk Majlis 500 boleh dianggap adil?",p:["Peluang setiap warganegara sama","Hanya orang kaya boleh terpilih","Raja menentukan siapa yang terpilih","Ahli dipilih berdasarkan kekuatan fizikal"],b:0,u:"Cabutan tidak memihak kepada sesiapa. Setiap warganegara berpeluang sama untuk terpilih."},
 {j:"pilih",t:"Antara sumbangan Rom berikut, yang manakah paling bermanfaat kepada rakyat biasa ketika itu?",p:["Akueduk dan mandian awam","Patung gangsa maharaja","Gerbang kemenangan perang","Makam diraja yang megah"],b:0,u:"Akueduk dan mandian awam membekalkan air bersih dan kebersihan kepada rakyat biasa."}],
 bos:{j:"pilih",t:"Antara penilaian berikut, yang manakah PALING berasas tentang peningkatan tamadun Yunani dan Rom?",p:["Yunani: pemerintahan, Rom: kejuruteraan","Yunani dan Rom tidak memberi sumbangan","Yunani hanya terkenal dengan peperangan","Rom tidak mempunyai bangunan penting"],b:0,u:"Yunani terkenal dengan demokrasi dan falsafah, manakala Rom dengan kejuruteraan dan seni bina yang masih digunakan."}},

{n:6, tempat:"Studio Warga Muda", sk:"K4.2.6 hingga K4.2.9 Demokrasi, seni bina dan kerjasama", lampiran:null,
 kadNama:"Suara Murid", kadEm:"\u{1F4E2}", kadFakta:"Majlis Perwakilan Murid dan pemilihan pengawas ialah contoh amalan demokrasi di sekolah. Setiap undi membawa suara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggabungkan fakta sejarah dengan masalah sebenar. Contohnya, prinsip lengkungan Rom boleh menginspirasikan reka bentuk jambatan murid dalam pertandingan sains.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memilih ketua murid secara adil. Idea manakah paling mencerminkan asas demokrasi?",p:["Pilihan raya dengan undi rahsia oleh murid","Pengetua melantik tanpa berbincang","Ketua dipilih berdasarkan saiz badan","Ketua dipilih oleh seorang murid"],b:0,u:"Undi rahsia memberi setiap murid hak memilih tanpa tekanan, iaitu asas demokrasi."},
 {j:"pilih",t:"Kelas anda bertelagah tentang aktiviti hari kantin. Berdasarkan amalan Athens, idea manakah paling rasional?",p:["Membincangkan cadangan dan mengundi","Ketua kelas memutuskan seorang diri","Mengikut pilihan murid paling kuat bersuara","Membatalkan semua aktiviti"],b:0,u:"Perbincangan dan undian ialah amalan demokrasi yang memberi suara kepada semua."},
 {j:"banyak",t:"Pilih DUA idea yang menunjukkan penghargaan terhadap asas demokrasi.",p:["Menghormati keputusan majoriti","Mendengar pendapat minoriti","Memaksa orang lain mengikut kita","Enggan mengundi"],b:[0,1],u:"Demokrasi menghormati keputusan majoriti dan juga hak minoriti untuk bersuara."},
 {j:"pilih",t:"Pertandingan reka bentuk jambatan diadakan di sekolah. Prinsip Rom manakah paling berguna?",p:["Lengkungan","Amfiteater","Mandian awam","Forum"],b:0,u:"Lengkungan mengagihkan beban dan menjadikan jambatan lebih kukuh."},
 {j:"pilih",t:"Mengapakah kerjasama penting dalam pembinaan sesuatu tamadun, seperti yang ditunjukkan oleh binaan Rom?",p:["Projek besar memerlukan sumbangan ramai","Seorang jurutera boleh membina segalanya","Kerjasama melambatkan kerja","Binaan besar tidak memerlukan perancangan"],b:0,u:"Akueduk dan Colosseum memerlukan jurutera, tukang dan pekerja yang bekerjasama."},
 {j:"pilih",t:"Majlis Perwakilan Murid mahu memastikan semua kelas didengari. Idea manakah paling berasas?",p:["Setiap kelas menghantar seorang wakil","Kelas tingkatan tinggi lebih didengari","Keputusan dibuat oleh pengetua seorang","Wakil dipilih berdasarkan markah peperiksaan"],b:0,u:"Wakil setiap kelas memastikan semua suara diwakili, sama seperti setiap suku menghantar wakil ke Majlis 500."},
 {j:"pilih",t:"Bandar anda mahu membina dewan komuniti yang tahan lama. Pengajaran manakah daripada seni bina Rom paling relevan?",p:["Perancangan teliti dan bahan tahan lama","Membina secepat mungkin tanpa pelan","Menggunakan bahan yang paling murah","Mengabaikan nasihat jurutera"],b:0,u:"Binaan Rom bertahan lama kerana perancangan teliti dan bahan yang sesuai seperti konkrit."},
 {j:"pilih",t:"Seorang rakan berkata, \"Mengundi tidak penting kerana satu undi tidak mengubah apa-apa.\" Respons manakah paling rasional?",p:["Setiap undi membentuk keputusan","Betul, undi untuk orang dewasa sahaja","Betul, pemimpin akan dipilih juga","Mengundi lebih penting di Athens dahulu"],b:0,u:"Keputusan demokrasi terbentuk daripada gabungan undi individu. Setiap undi bermakna."}],
 bos:{j:"buka",
  t:"Rancang SATU sistem pemilihan dan mesyuarat untuk sebuah kelab di sekolah awak, berdasarkan asas demokrasi Athens yang telah ditambah baik.",
  arahan:"Terangkan siapa yang layak mengundi (dan mengapa lebih inklusif daripada Athens), cara pemilihan ahli jawatankuasa, cara cadangan dibincang dan diluluskan, serta satu cara melindungi hak ahli yang kalah undi.",
  u:"Jawapan TP6 yang kukuh mengaitkan amalan Athens (Perhimpunan, Majlis 500, cabutan atau undian) dengan cadangan yang realistik, memperbaiki kelemahan Athens (semua ahli layak mengundi tanpa mengira jantina atau latar belakang), dan menghuraikan nilai seperti kerjasama, hormat dan keadilan."}}
];

module.exports = {
  id:"s1b6", tingkatan:1, kod:"6.0 Peningkatan Tamadun Yunani dan Rom",
  tajuk:"Athens dan Rom",
  subtajuk:"Sejarah Ting. 1 · Bab 6 Peningkatan Tamadun Yunani dan Rom",
  spi:SPI["4.2"],
  ulasan:{
   1:"{n} dapat mengenal pasti lokasi peningkatan tamadun serta istilah asas seperti polis dan demokrasi. Langkah seterusnya ialah memahami badan pemerintahan Athens dan ciri seni bina Rom.",
   2:"{n} memahami fungsi badan pemerintahan Athens dan ciri seni bina Rom. Perlu lebih latihan menerangkan peningkatan tamadun dengan contoh sebelum bergerak ke TP3.",
   3:"{n} boleh menerangkan peningkatan tamadun Yunani dan Rom dengan contoh yang sesuai, seperti Majlis 500, Colosseum dan akueduk. Galakkan menganalisis kekuatan dan kelemahan demokrasi Athens.",
   4:"{n} mampu menganalisis maklumat tentang demokrasi Athens dan seni bina Rom, termasuk membandingkannya dengan amalan hari ini. Seterusnya latih menilai sumbangan kedua-dua tamadun.",
   5:"{n} dapat membuat penilaian yang seimbang tentang peningkatan tamadun Yunani dan Rom dengan alasan yang berasas. Sudah bersedia melahirkan idea berdasarkan asas demokrasi dan seni bina.",
   6:"{n} berjaya melahirkan idea yang berasas untuk mengaplikasikan asas demokrasi dan nilai kerjasama dalam kehidupan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Peningkatan Tamadun Yunani dan Rom. Cadangan: ulang hentian pertama sambil membina carta badan pemerintahan Athens dengan bimbingan rakan sebaya."
  },
  lampiran:{
   p1:petikan(1, "Demokrasi di Athens",
     ["Sekitar tahun 508 SM, Cleisthenes menyusun semula rakyat Athens kepada 10 suku dan menubuhkan Majlis 500. Setiap suku menghantar 50 orang yang dipilih melalui cabutan.",
      "Undang-undang dibahas dan diluluskan oleh Perhimpunan yang terbuka kepada warganegara lelaki dewasa. Wanita, hamba dan orang asing tidak boleh mengundi.",
      "Pada zaman Pericles, pegawai awam mula dibayar gaji. Dengan itu, rakyat yang kurang berada juga mampu berkhidmat dalam kerajaan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
