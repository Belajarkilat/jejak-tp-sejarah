/* Sumber kandungan — Sejarah KSSM Tingkatan 1, Bab 8 Tamadun Islam dan Sumbangannya.
   Standard Kandungan 4.3 Tamadun Islam dan Sumbangannya, Standard Pembelajaran 4.3.1 hingga 4.3.5
   serta K4.3.6 hingga K4.3.9 (DSKP KSSM Sejarah Tingkatan 1, dskp/sejarah-t1.pdf).
   Standard Prestasi disalin kata demi kata. Ejaan "Nabi Muhammad s.a.w." mengikut DSKP. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Kota Makkah", sk:"4.3.1 Masyarakat Arab sebelum Islam · 4.3.2 Kemunculan tamadun Islam", lampiran:null,
 kadNama:"Zaman Jahiliah", kadEm:"\u{1F3DC}\u{FE0F}", kadFakta:"Jahiliah merujuk kejahilan tentang ajaran tauhid dan nilai moral, bukan kejahilan dalam semua bidang. Masyarakat Arab ketika itu mahir bersyair dan berdagang.",
 bosKadNama:"Hijrah", bosKadEm:"\u{1F319}", bosKadFakta:"Hijrah Nabi Muhammad s.a.w. dari Makkah ke Madinah pada tahun 622 M dijadikan permulaan kalendar Hijrah oleh Khalifah Umar al-Khattab.",
 soalan:[
 {j:"pilih",t:"Zaman sebelum kedatangan Islam dalam masyarakat Arab dikenali sebagai Zaman:",p:["Jahiliah","Abbasiyah","Umayyah","Khulafa al-Rasyidin"],b:0,u:"Zaman Jahiliah merujuk keadaan masyarakat Arab sebelum Islam, iaitu jahil tentang ajaran tauhid dan nilai moral."},
 {j:"pilih",t:"Nabi Muhammad s.a.w. dilahirkan di:",p:["Makkah","Madinah","Damsyik","Baghdad"],b:0,u:"Nabi Muhammad s.a.w. dilahirkan di Makkah pada tahun 570 M, iaitu Tahun Gajah."},
 {j:"pilih",t:"Wahyu pertama diturunkan kepada Nabi Muhammad s.a.w. di:",p:["Gua Hira'","Gua Thur","Masjid Quba","Bukit Uhud"],b:0,u:"Wahyu pertama, iaitu ayat 1 hingga 5 Surah al-'Alaq, diturunkan di Gua Hira' pada tahun 610 M."},
 {j:"pilih",t:"Hijrah Nabi Muhammad s.a.w. ke Madinah berlaku pada tahun:",p:["622 M","570 M","610 M","632 M"],b:0,u:"Hijrah berlaku pada tahun 622 M dan menjadi permulaan kalendar Hijrah."},
 {j:"banyak",t:"Pilih DUA amalan masyarakat Arab Jahiliah.",p:["Menyembah berhala","Taksub kepada kabilah sendiri","Mengamalkan sistem syura","Membayar zakat"],b:[0,1],u:"Masyarakat Jahiliah menyembah berhala dan taksub kepada kabilah. Syura dan zakat ialah ajaran Islam."},
 {j:"pilih",t:"Empat khalifah selepas kewafatan Nabi Muhammad s.a.w. dikenali sebagai:",p:["Khulafa al-Rasyidin","Bani Umayyah","Bani Abbasiyah","Kerajaan Uthmaniyah"],b:0,u:"Khulafa al-Rasyidin ialah Abu Bakar al-Siddiq, Umar al-Khattab, Uthman bin Affan dan Ali bin Abi Talib."},
 {j:"pilih",t:"Khalifah pertama Khulafa al-Rasyidin ialah:",p:["Abu Bakar al-Siddiq","Umar al-Khattab","Uthman bin Affan","Saidina Ali bin Abi Talib"],b:0,u:"Abu Bakar al-Siddiq dilantik sebagai khalifah pertama selepas kewafatan Nabi Muhammad s.a.w. pada tahun 632 M."},
 {j:"pilih",t:"Pasar Ukaz di Makkah sebelum Islam terkenal sebagai tempat:",p:["Berdagang dan bersyair","Membina kapal","Menyimpan dokumen kerajaan","Belajar ilmu perubatan"],b:0,u:"Pasar Ukaz menjadi pusat perdagangan dan pertandingan syair dalam masyarakat Arab."}],
 bos:{j:"susun",t:"Susun peristiwa berikut mengikut kronologi.",p:["Kelahiran Nabi Muhammad s.a.w.","Wahyu pertama di Gua Hira'","Hijrah ke Madinah","Pembukaan Kota Makkah"],b:[0,1,2,3],u:"Kelahiran (570 M), wahyu pertama (610 M), Hijrah (622 M) dan Pembukaan Kota Makkah (630 M)."}},

{n:2, tempat:"Madinah al-Munawwarah", sk:"4.3.2 Perkembangan tamadun Islam · 4.3.3 Ketokohan Nabi Muhammad s.a.w.", lampiran:"gm1",
 kadNama:"Piagam Madinah", kadEm:"\u{1F4DC}", kadFakta:"Piagam Madinah ialah perlembagaan bertulis yang menyatukan pelbagai kaum di Madinah, termasuk orang Islam dan bukan Islam, dengan hak dan tanggungjawab yang jelas.",
 bosKadNama:"Muhajirin dan Ansar", bosKadEm:"\u{1F91D}", bosKadFakta:"Nabi Muhammad s.a.w. mempersaudarakan golongan Muhajirin dari Makkah dengan golongan Ansar di Madinah. Ansar berkongsi rumah dan harta dengan saudara baharu mereka.",
 soalan:[
 {j:"pilih",t:"Perlembagaan bertulis yang diperkenalkan oleh Nabi Muhammad s.a.w. di Madinah dinamakan:",p:["Piagam Madinah","Kanun Hammurabi","Edik Asoka","Arthasastra"],b:0,u:"Piagam Madinah menyatukan penduduk Madinah yang berbilang kaum dan agama di bawah satu pemerintahan."},
 {j:"pilih",t:"Golongan yang berhijrah dari Makkah ke Madinah dikenali sebagai:",p:["Muhajirin","Ansar","Quraisy","Badwi"],b:0,u:"Muhajirin ialah orang Islam yang berhijrah dari Makkah. Ansar ialah penduduk Madinah yang menerima mereka."},
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah berlaku pada tahun 630 M?",p:["Pembukaan Kota Makkah","Hijrah ke Madinah","Perang Badar","Wahyu pertama di Gua Hira'"],b:0,u:"Rajah 1 menunjukkan Pembukaan Kota Makkah pada tahun 630 M."},
 {j:"pilih",t:"Sebagai pemimpin tentera, Nabi Muhammad s.a.w. menerima cadangan menggali parit dalam peperangan:",p:["Khandaq","Badar","Uhud","Hunain"],b:0,u:"Dalam Perang Khandaq, cadangan Salman al-Farisi untuk menggali parit diterima. Ini menunjukkan Baginda menghargai pendapat orang lain."},
 {j:"banyak",t:"Pilih DUA bukti ketokohan Nabi Muhammad s.a.w. sebagai pemimpin masyarakat.",p:["Mempersaudarakan Muhajirin dan Ansar","Menyatukan penduduk melalui Piagam Madinah","Menggalakkan taksub kepada kabilah","Membezakan layanan mengikut kekayaan"],b:[0,1],u:"Baginda menyatukan masyarakat melalui persaudaraan dan Piagam Madinah, bukan melalui perpecahan atau perbezaan darjat."},
 {j:"pilih",t:"Sebagai pembangun ekonomi, Nabi Muhammad s.a.w. membina pasar di Madinah yang:",p:["Bebas daripada riba","Dikuasai oleh satu kabilah","Mengenakan cukai yang tinggi","Hanya dibuka kepada orang kaya"],b:0,u:"Pasar Madinah diurus berdasarkan prinsip jujur, adil dan bebas riba."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahun selepas Hijrah berlakunya Perang Badar?",p:["2 tahun","8 tahun","10 tahun","1 tahun"],b:0,u:"Hijrah berlaku pada 622 M dan Perang Badar pada 624 M. Bezanya 2 tahun."},
 {j:"pilih",t:"Antara berikut, yang manakah sumbangan Khalifah Uthman bin Affan?",p:["Menyeragamkan mushaf al-Quran","Mengasaskan Baitulhikmah di Baghdad","Membina Masjid Biru di Istanbul","Menulis kitab Muqaddimah"],b:0,u:"Khalifah Uthman menyeragamkan penulisan al-Quran yang dikenali sebagai Mushaf Uthmani."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, pernyataan manakah BETUL?",p:["Piagam Madinah digubal selepas Hijrah","Perang Badar berlaku sebelum Hijrah","Pembukaan Kota Makkah berlaku sebelum Perang Badar","Hijrah berlaku selepas Pembukaan Kota Makkah"],b:0,u:"Piagam Madinah digubal selepas Baginda tiba di Madinah pada 622 M. Perang Badar (624 M) dan Pembukaan Kota Makkah (630 M) berlaku kemudian."}},

{n:3, tempat:"Baitulhikmah", sk:"4.3.4 Sumbangan politik, ekonomi dan sosial · 4.3.5 Seni bina dan pendidikan", lampiran:null,
 kadNama:"Rumah Ilmu", kadEm:"\u{1F4DA}", kadFakta:"Baitulhikmah di Baghdad pada zaman Abbasiyah menjadi pusat terjemahan dan penyelidikan. Karya Yunani, Parsi dan India diterjemah ke dalam bahasa Arab.",
 bosKadNama:"Al-Qarawiyyin", bosKadEm:"\u{1F3EB}", bosKadFakta:"Universiti al-Qarawiyyin di Fez, Maghribi diasaskan oleh Fatimah al-Fihri pada tahun 859 M. Ia antara universiti tertua di dunia yang masih beroperasi.",
 soalan:[
 {j:"pilih",t:"Pusat terjemahan dan penyelidikan di Baghdad pada zaman Abbasiyah dinamakan:",p:["Baitulhikmah","Baitulmal","Universiti al-Azhar","Masjid Cordoba"],b:0,u:"Baitulhikmah bermaksud Rumah Kebijaksanaan. Ia pusat terjemahan dan penyelidikan ilmu."},
 {j:"pilih",t:"Institusi yang menguruskan harta dan kewangan negara Islam dinamakan:",p:["Baitulmal","Baitulhikmah","Syura","Diwan al-Jund"],b:0,u:"Baitulmal ialah perbendaharaan negara yang menguruskan zakat, cukai dan perbelanjaan negara."},
 {j:"pilih",t:"Ilmuwan Islam yang menulis al-Qanun fi al-Tibb dalam bidang perubatan ialah:",p:["Ibn Sina","Al-Khawarizmi","Ibn Rusyd","Al-Idrisi"],b:0,u:"Ibn Sina menulis al-Qanun fi al-Tibb yang menjadi rujukan perubatan di Eropah selama berabad-abad."},
 {j:"pilih",t:"Al-Khawarizmi terkenal dalam bidang:",p:["Matematik","Perubatan","Geografi","Seni bina"],b:0,u:"Al-Khawarizmi memperkenalkan ilmu algebra. Perkataan algebra berasal daripada judul bukunya, al-Jabr."},
 {j:"banyak",t:"Pilih DUA ciri seni bina Islam.",p:["Kubah dan menara","Kaligrafi dan motif geometri","Patung makhluk bernyawa","Ziggurat bertingkat"],b:[0,1],u:"Seni bina Islam menggunakan kubah, menara, kaligrafi dan motif geometri. Patung makhluk bernyawa dielakkan."},
 {j:"pilih",t:"Prinsip pemerintahan Islam yang mengutamakan perbincangan dan permesyuaratan ialah:",p:["Syura","Riba","Jahiliah","Ostrakisme"],b:0,u:"Syura ialah amalan bermesyuarat sebelum membuat keputusan, berdasarkan ajaran al-Quran."},
 {j:"pilih",t:"Istana Alhambra yang terkenal dengan seni bina Islam terletak di:",p:["Granada, Sepanyol","Baghdad, Iraq","Delhi, India","Kaherah, Mesir Hilir"],b:0,u:"Alhambra di Granada dibina pada zaman pemerintahan Islam di Andalusia."},
 {j:"pilih",t:"Dalam bidang sosial, Islam menekankan:",p:["Persamaan taraf semua manusia","Perbezaan darjat mengikut keturunan","Penindasan terhadap wanita","Ketaksuban kepada kabilah"],b:0,u:"Islam mengajar bahawa manusia sama taraf di sisi Allah. Yang membezakan ialah ketakwaan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan ilmuwan Islam dan bidangnya yang betul.",p:["Ibn Sina: perubatan","Al-Khawarizmi: matematik","Al-Idrisi: geografi","Ibn Sina: seni bina","Al-Khawarizmi: geografi"],b:[0,1,2],u:"Ibn Sina dalam perubatan, al-Khawarizmi dalam matematik dan al-Idrisi dalam geografi (pembuat peta dunia)."}},

{n:4, tempat:"Makmal Analisis Tamadun Islam", sk:"4.3.4 · 4.3.5 Menganalisis sumbangan tamadun Islam", lampiran:"p1",
 kadNama:"Jambatan Ilmu", kadEm:"\u{1F309}", kadFakta:"Ilmuwan Islam memelihara, menterjemah dan menambah baik ilmu Yunani, Parsi dan India. Karya mereka kemudian diterjemah ke bahasa Latin dan membantu kebangkitan ilmu di Eropah.",
 bosKadNama:"Masjid Pusat Ilmu", bosKadEm:"\u{1F54C}", bosKadFakta:"Pada zaman awal Islam, masjid bukan sahaja tempat beribadat tetapi juga tempat belajar, bermesyuarat dan menyelesaikan urusan masyarakat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Baitulhikmah penting kepada perkembangan ilmu dunia?",p:["Ia memelihara dan mengembangkan ilmu","Ia menyimpan senjata tentera","Ia digunakan sebagai istana khalifah","Ia menolak ilmu daripada luar"],b:0,u:"Baitulhikmah menterjemah dan mengembangkan ilmu Yunani, Parsi dan India, lalu ilmu itu tidak hilang."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah ilmu daripada dunia Islam sampai ke Eropah?",p:["Melalui terjemahan ke bahasa Latin","Melalui peperangan semata-mata","Melalui larangan membaca","Melalui pembakaran buku"],b:0,u:"Karya ilmuwan Islam diterjemah ke bahasa Latin, terutamanya di Andalusia, lalu tersebar ke Eropah."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah hubungan antara galakan khalifah dengan perkembangan ilmu?",p:["Sokongan pemerintah mempercepatnya","Khalifah melarang penyelidikan","Ilmu berkembang tanpa sebarang sokongan","Sokongan pemerintah melambatkan ilmu"],b:0,u:"Khalifah seperti al-Makmun membiayai penterjemah dan penyelidik. Sokongan ini mempercepat perkembangan ilmu."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA bidang ilmu yang berkembang dalam tamadun Islam.",p:["Perubatan","Astronomi","Pembinaan piramid","Penulisan cuneiform"],b:[0,1],u:"Petikan menyebut perubatan dan astronomi. Piramid dan cuneiform berkaitan tamadun Mesir dan Mesopotamia."},
 {j:"pilih",t:"Bandingkan peranan masjid dengan Baitulhikmah. Pernyataan manakah BETUL?",p:["Kedua-duanya menjadi tempat menuntut ilmu","Masjid untuk perang, Baitulhikmah untuk dagang","Kedua-duanya istana khalifah","Baitulhikmah menggantikan masjid"],b:0,u:"Masjid menjadi pusat ilmu sejak awal Islam, dan Baitulhikmah menjadi pusat penyelidikan. Kedua-duanya tempat menuntut ilmu."},
 {j:"pilih",t:"Mengapakah seni bina Islam banyak menggunakan kaligrafi dan motif geometri?",p:["Islam mengelak imej makhluk bernyawa","Bahan binaan tidak membenarkan lukisan","Tukang tidak tahu melukis","Ia dipaksa oleh pemerintah Rom"],b:0,u:"Kerana mengelak imej makhluk bernyawa dalam hiasan, seniman Muslim mengembangkan kaligrafi, geometri dan motif tumbuhan."},
 {j:"pilih",t:"Sistem zakat memberi kesan sosial kerana:",p:["Jurang kaya dan miskin berkurang","Orang miskin semakin miskin","Golongan kaya dikecualikan","Negara tidak memerlukan hasil"],b:0,u:"Zakat mengagihkan sebahagian harta golongan berada kepada golongan yang memerlukan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah tepat tentang sikap tamadun Islam terhadap ilmu daripada tamadun lain?",p:["Terbuka dan menambah baik ilmu itu","Menolak ilmu yang datang dari luar","Menyalin bulat-bulat tanpa kajian","Menyembunyikannya daripada rakyat"],b:0,u:"Ilmuwan Islam terbuka kepada ilmu tamadun lain, menterjemahnya dan menambah baik dengan kajian sendiri."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, rumusan manakah PALING tepat tentang sumbangan tamadun Islam?",p:["Ia jambatan ilmu ke Eropah","Ia tidak memberi kesan kepada dunia","Ia hanya penting kepada masyarakat Arab","Ia menolak ilmu matematik dan sains"],b:0,u:"Tamadun Islam memelihara ilmu Yunani, Parsi dan India, menambah baiknya, lalu ilmu itu sampai ke Eropah melalui terjemahan."}},

{n:5, tempat:"Balai Penilaian Ummah", sk:"4.3.3 hingga 4.3.5 · K4.3.6 Menilai tamadun Islam", lampiran:null,
 kadNama:"Pemimpin Unggul", kadEm:"\u{1F31F}", kadFakta:"Nabi Muhammad s.a.w. memimpin sebagai ketua negara, ketua masyarakat, pembangun ekonomi dan pemimpin tentera, dan Baginda terkenal dengan sifat amanah, adil serta bermesyuarat.",
 bosKadNama:"Toleransi", bosKadEm:"\u{1F91D}", bosKadFakta:"Piagam Madinah menjamin hak penduduk bukan Islam untuk mengamalkan agama mereka. Ia contoh awal pemerintahan majmuk yang adil.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Piagam Madinah dianggap pencapaian besar?",p:["Ia menyatukan masyarakat majmuk","Ia menghapuskan semua kaum bukan Arab","Ia menamatkan perdagangan","Ia memberi kuasa kepada satu kabilah"],b:0,u:"Piagam Madinah menyatukan kaum yang berbeza agama dan kabilah dengan hak dan tanggungjawab yang jelas."},
 {j:"pilih",t:"Sifat kepimpinan Nabi Muhammad s.a.w. manakah paling ditonjolkan dalam peristiwa Perang Khandaq?",p:["Menghargai pendapat orang lain","Membuat keputusan seorang diri","Mengelak daripada berbincang","Mengutamakan kabilah sendiri"],b:0,u:"Baginda menerima cadangan Salman al-Farisi untuk menggali parit, menunjukkan sikap bermesyuarat dan menghargai pendapat."},
 {j:"pilih",t:"Seorang murid berkata, \"Zaman Jahiliah bermakna masyarakat Arab jahil dalam semua bidang.\" Penilaian manakah paling tepat?",p:["Kurang tepat, mereka mahir bersyair","Tepat, kerana mereka tidak tahu apa-apa","Tepat, kerana mereka tiada bahasa","Kurang tepat, kerana mereka mempunyai universiti"],b:0,u:"Jahiliah merujuk kejahilan tentang tauhid dan moral. Masyarakat Arab ketika itu mahir bersyair dan berdagang."},
 {j:"banyak",t:"Pilih DUA alasan yang menyokong pendapat bahawa tamadun Islam menyumbang kepada ilmu dunia.",p:["Ibn Sina menjadi rujukan di Eropah","Algebra daripada al-Khawarizmi","Tamadun Islam menolak ilmu dari luar","Tamadun Islam tidak mempunyai universiti"],b:[0,1],u:"Rujukan perubatan Ibn Sina dan algebra al-Khawarizmi ialah bukti sumbangan kepada ilmu dunia."},
 {j:"pilih",t:"Antara faktor berikut, yang manakah paling membantu penyebaran Islam ke kawasan yang jauh seperti Alam Melayu?",p:["Perdagangan dan dakwah","Pembinaan piramid","Sistem kasta","Penyembahan berhala"],b:0,u:"Pedagang dan pendakwah membawa Islam melalui laluan perdagangan, termasuk ke Alam Melayu."},
 {j:"pilih",t:"Mengapakah ajaran persamaan taraf dalam Islam mudah diterima oleh masyarakat?",p:["Ia memberi maruah kepada orang tertindas","Ia memberi kelebihan kepada golongan kaya","Ia mengekalkan perhambaan","Ia menolak keadilan"],b:0,u:"Persamaan taraf memberi harapan dan maruah kepada hamba, wanita dan golongan miskin yang ditindas pada Zaman Jahiliah."},
 {j:"pilih",t:"Antara penilaian berikut, yang manakah paling seimbang tentang Baitulhikmah?",p:["Pusat ilmu hebat yang disokong pemerintah","Ia tidak penting kerana sekadar menterjemah","Ia lebih penting daripada setiap masjid","Ia tidak meninggalkan apa-apa kesan"],b:0,u:"Baitulhikmah berjaya kerana sokongan khalifah. Penilaian seimbang mengiktiraf kejayaannya dan faktor yang menyokongnya."},
 {j:"pilih",t:"Mengapakah kita perlu menghargai sumbangan tamadun Islam?",p:["Banyak ilmu hari ini berakar daripadanya","Ia satu-satunya tamadun di dunia","Ia tidak berkaitan dengan Malaysia","Ia tidak meninggalkan warisan"],b:0,u:"Algebra, perubatan, universiti dan nilai seperti keadilan dan syura ialah warisan tamadun Islam, termasuk kepada Alam Melayu."}],
 bos:{j:"pilih",t:"Antara penilaian berikut, yang manakah PALING berasas tentang ketokohan Nabi Muhammad s.a.w.?",p:["Baginda pemimpin unggul dalam pelbagai bidang","Baginda pemimpin agama yang tiada peranan lain","Baginda memimpin dengan tidak bermesyuarat","Baginda tidak mempunyai pengikut"],b:0,u:"Baginda memimpin negara (Piagam Madinah), masyarakat (persaudaraan Muhajirin-Ansar), ekonomi (pasar bebas riba) dan tentera."}},

{n:6, tempat:"Studio Nilai Sejagat", sk:"K4.3.6 hingga K4.3.9 Nilai, kepimpinan dan seni bina Islam", lampiran:null,
 kadNama:"Nilai Sejagat", kadEm:"\u{1F30F}", kadFakta:"Nilai seperti adil, amanah, jujur dan menghormati orang lain diterima oleh semua masyarakat. Nilai inilah yang memantapkan jati diri bangsa dan negara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil teladan daripada fakta sejarah. Contohnya, amalan syura boleh diaplikasikan dalam mesyuarat kelas.",
 soalan:[
 {j:"pilih",t:"Kelas anda perlu membuat keputusan tentang projek amal. Berdasarkan amalan syura, idea manakah paling berasas?",p:["Bermesyuarat dan mendengar pendapat","Ketua membuat keputusan seorang diri","Mengikut pendapat murid paling kaya","Menangguhkan keputusan selama-lamanya"],b:0,u:"Syura menuntut perbincangan dan mendengar pendapat sebelum membuat keputusan."},
 {j:"pilih",t:"Sekolah anda mempunyai murid pelbagai kaum dan agama. Pengajaran daripada Piagam Madinah manakah paling sesuai?",p:["Menghormati hak setiap kumpulan","Mengutamakan satu kumpulan sahaja","Mengasingkan murid mengikut kaum","Melarang perbincangan tentang budaya"],b:0,u:"Piagam Madinah menghormati hak setiap kumpulan. Nilai ini memupuk perpaduan dalam masyarakat majmuk."},
 {j:"banyak",t:"Pilih DUA ciri kepimpinan Nabi Muhammad s.a.w. yang boleh diteladani oleh ketua kelas.",p:["Amanah","Bermesyuarat","Mementingkan diri","Pilih kasih"],b:[0,1],u:"Amanah dan bermesyuarat ialah ciri kepimpinan yang menjadikan pemimpin dipercayai dan adil."},
 {j:"pilih",t:"Majlis daerah mahu membina dewan komuniti dengan identiti tempatan. Ciri seni bina Islam manakah sesuai digabungkan?",p:["Motif geometri dan kaligrafi","Ziggurat bertingkat tujuh","Patung gergasi di pintu masuk","Piramid batu di halaman"],b:0,u:"Motif geometri dan kaligrafi ialah ciri unik seni bina Islam yang boleh menyerlahkan identiti tempatan."},
 {j:"pilih",t:"Bagaimanakah semangat Baitulhikmah boleh dihidupkan di sekolah?",p:["Kelab penyelidikan murid","Melarang murid membaca buku asing","Menutup perpustakaan","Menghafal tanpa memahami"],b:0,u:"Kelab terjemahan dan penyelidikan meniru semangat Baitulhikmah yang terbuka kepada ilmu dan menghasilkan pengetahuan baharu."},
 {j:"pilih",t:"Rakan anda mencadangkan tabung bantuan untuk murid yang memerlukan. Prinsip tamadun Islam manakah paling berkaitan?",p:["Zakat dan sedekah","Pinjaman berasaskan riba","Taksub kepada kabilah","Ostrakisme Athens"],b:0,u:"Zakat dan sedekah menggalakkan perkongsian harta untuk membantu golongan yang memerlukan."},
 {j:"pilih",t:"Mengapakah nilai murni sejagat dalam Islam penting untuk memantapkan jati diri negara?",p:["Ia membentuk rakyat berakhlak","Ia memecahbelahkan rakyat","Ia hanya untuk satu kaum","Ia tidak berkaitan dengan negara"],b:0,u:"Nilai seperti adil, amanah dan hormat-menghormati membentuk rakyat yang berakhlak dan memperkukuh perpaduan."},
 {j:"pilih",t:"Seorang rakan bertanya mengapa ciri unik seni bina Islam perlu dipelihara. Respons manakah paling rasional?",p:["Ia warisan ilmu dan identiti","Ia tidak penting kerana bangunan lama","Ia patut diganti dengan bangunan kaca","Ia hanya penting kepada pelancong"],b:0,u:"Seni bina Islam mencerminkan ilmu matematik, seni dan identiti. Memeliharanya bermakna menghargai warisan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU program di sekolah awak yang mengaplikasikan nilai kepimpinan dan sumbangan tamadun Islam untuk memupuk perpaduan dan semangat ilmu.",
  arahan:"Namakan program itu. Kaitkan dengan sekurang-kurangnya DUA fakta tamadun Islam (contoh: Piagam Madinah, syura, Baitulhikmah, zakat, persaudaraan Muhajirin dan Ansar). Terangkan aktiviti, cara melibatkan murid pelbagai latar belakang, dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh mengaitkan program dengan fakta tamadun Islam yang tepat, mencadangkan aktiviti yang boleh dilaksanakan, memastikan penglibatan murid pelbagai kaum dan agama secara hormat, dan menghuraikan nilai seperti adil, amanah, syura dan cinta ilmu."}}
];

module.exports = {
  id:"s1b8", tingkatan:1, kod:"8.0 Tamadun Islam dan Sumbangannya",
  tajuk:"Cahaya Madinah",
  subtajuk:"Sejarah Ting. 1 · Bab 8 Tamadun Islam dan Sumbangannya",
  spi:SPI["4.3"],
  ulasan:{
   1:"{n} dapat menyatakan latar belakang masyarakat Arab sebelum Islam dan peristiwa penting kemunculan Islam. Langkah seterusnya ialah memahami ketokohan Nabi Muhammad s.a.w. dan perkembangan tamadun Islam.",
   2:"{n} memahami kemunculan tamadun Islam dan ketokohan Nabi Muhammad s.a.w. sebagai pemimpin. Perlu lebih latihan menerangkan sumbangan tamadun Islam dengan contoh sebelum bergerak ke TP3.",
   3:"{n} boleh menerangkan sumbangan tamadun Islam dengan contoh yang sesuai, seperti Baitulhikmah, Baitulmal dan ilmuwan Islam. Galakkan menganalisis peranan tamadun Islam dalam perkembangan ilmu dunia.",
   4:"{n} mampu menganalisis maklumat tentang tamadun Islam, termasuk hubungan antara sokongan pemerintah dengan perkembangan ilmu. Seterusnya latih menilai ketokohan dan sumbangan tamadun Islam.",
   5:"{n} dapat membuat penilaian yang berasas tentang ketokohan Nabi Muhammad s.a.w. dan sumbangan tamadun Islam. Sudah bersedia melahirkan idea mengaplikasikan nilai sejagat dalam kehidupan.",
   6:"{n} berjaya melahirkan idea yang berasas untuk mengaplikasikan nilai kepimpinan dan sumbangan tamadun Islam bagi memupuk perpaduan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Tamadun Islam dan Sumbangannya. Cadangan: ulang hentian pertama sambil membina garis masa kemunculan Islam dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"622 M", label:"Hijrah ke Madinah, Piagam Madinah digubal"},
     {masa:"624 M", label:"Perang Badar"},
     {masa:"630 M", label:"Pembukaan Kota Makkah"},
     {masa:"632 M", label:"Kewafatan Nabi Muhammad s.a.w."}],
     kapsyen:"Rajah 1 · Peristiwa penting selepas Hijrah",
     alt:"Garis masa menegak: 622 M Hijrah ke Madinah dan Piagam Madinah digubal; 624 M Perang Badar; 630 M Pembukaan Kota Makkah; 632 M kewafatan Nabi Muhammad s.a.w."},
   p1:petikan(1, "Baitulhikmah dan perkembangan ilmu",
     ["Pada zaman Kerajaan Abbasiyah, Baitulhikmah di Baghdad menjadi pusat terjemahan dan penyelidikan. Khalifah al-Makmun membiayai sarjana untuk menterjemah karya Yunani, Parsi dan India ke dalam bahasa Arab.",
      "Ilmuwan Islam bukan sekadar menterjemah. Mereka menambah baik ilmu itu melalui kajian dalam perubatan, matematik dan astronomi.",
      "Beberapa abad kemudian, karya-karya ini diterjemah pula ke dalam bahasa Latin, terutamanya di Andalusia, lalu membantu kebangkitan ilmu di Eropah."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
