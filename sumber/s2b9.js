/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 9 Warisan Kerajaan Kedah, Kelantan,
   Negeri Sembilan dan Perlis. Standard Kandungan 6.3, Standard Pembelajaran 6.3.3 dan 6.3.4
   serta K6.3.5 hingga K6.3.8 (DSKP KSSM Sejarah Tingkatan 2, dskp/sejarah-t2.pdf).
   Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Balai Adat", sk:"6.3.3 Warisan kerajaan Kedah, Kelantan dan Perlis", lampiran:null,
 kadNama:"Hikayat Merong Mahawangsa", kadEm:"\u{1F4DC}", kadFakta:"Hikayat Merong Mahawangsa menceritakan asal-usul kerajaan Kedah. Ia antara karya persuratan Melayu yang terkenal.",
 bosKadNama:"Mak Yong", bosKadEm:"\u{1F3AD}", bosKadFakta:"Mak Yong, seni teater tradisional Kelantan, diiktiraf oleh UNESCO sebagai warisan budaya dunia pada tahun 2005.",
 soalan:[
 {j:"pilih",t:"Karya yang menceritakan asal-usul kerajaan Kedah ialah:",p:["Hikayat Merong Mahawangsa","Misa Melayu karya Raja Chulan","Tuhfat al-Nafis karya Raja Ali Haji","Nagarakertagama"],b:0,u:"Hikayat Merong Mahawangsa menceritakan asal-usul Kedah."},
 {j:"pilih",t:"Seni teater tradisional Kelantan yang diiktiraf UNESCO ialah:",p:["Mak Yong","Ngajat","Sumazau","Zapin Johor"],b:0,u:"Mak Yong diiktiraf UNESCO pada tahun 2005."},
 {j:"pilih",t:"Seni persembahan yang menggunakan patung kulit dan bayang ialah:",p:["Wayang kulit","Dikir barat","Kuda kepang","Silat"],b:0,u:"Wayang kulit memaparkan bayang patung kulit pada kain putih."},
 {j:"pilih",t:"Wau bulan terkenal sebagai warisan negeri:",p:["Kelantan","Negeri Sembilan","Perlis","Selangor"],b:0,u:"Wau bulan ialah lambang warisan Kelantan."},
 {j:"banyak",t:"Pilih DUA kesenian tradisional Kelantan.",p:["Dikir barat","Wayang kulit","Sape","Ngajat"],b:[0,1],u:"Dikir barat dan wayang kulit ialah kesenian Kelantan. Sape dan ngajat dari Sarawak."},
 {j:"pilih",t:"Sistem pemerintahan di Kedah, Kelantan dan Perlis ialah:",p:["Sistem beraja","Republik","Pemerintahan tentera","Demokrasi tanpa raja"],b:0,u:"Ketiga-tiga negeri mengamalkan sistem beraja."},
 {j:"pilih",t:"Undang-undang bertulis yang pernah digunakan di Kedah dikenali sebagai:",p:["Undang-undang Kedah","Undang-undang 99 Perak","Hukum Kanun Pahang","Adat Perpatih"],b:0,u:"Kedah mempunyai Undang-undang Kedah yang mengatur pelabuhan dan masyarakat."},
 {j:"pilih",t:"Al-Tarikh Salasilah Negeri Kedah ialah contoh warisan dalam aspek:",p:["Persuratan","Kesenian","Ekonomi","Pertanian padi sawah"],b:0,u:"Al-Tarikh Salasilah Negeri Kedah ialah karya persuratan tentang sejarah Kedah."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan warisan dan negerinya yang betul.",p:["Hikayat Merong Mahawangsa: Kedah","Mak Yong: Kelantan","Wau bulan: Kelantan","Adat Perpatih: Perlis","Wayang kulit: Negeri Sembilan"],b:[0,1,2],u:"Hikayat Merong Mahawangsa (Kedah), Mak Yong dan wau bulan (Kelantan). Adat Perpatih diamalkan di Negeri Sembilan."}},

{n:2, tempat:"Rumah Adat Perpatih", sk:"6.3.4 Keunikan adat dan pemerintahan Negeri Sembilan", lampiran:null,
 kadNama:"Nisab Ibu", kadEm:"\u{1F469}\u{200D}\u{1F467}", kadFakta:"Dalam Adat Perpatih, keturunan dikira mengikut nisab ibu. Anak menjadi ahli suku ibunya.",
 bosKadNama:"Undang Yang Empat", bosKadEm:"\u{1F465}", bosKadFakta:"Undang Luak Sungai Ujong, Jelebu, Johol dan Rembau memilih Yang Dipertuan Besar Negeri Sembilan.",
 soalan:[
 {j:"pilih",t:"Adat yang diamalkan di Negeri Sembilan ialah:",p:["Adat Perpatih","Adat Temenggung","Adat Bugis","Adat Siam"],b:0,u:"Negeri Sembilan mengamalkan Adat Perpatih yang dibawa dari Minangkabau."},
 {j:"pilih",t:"Dalam Adat Perpatih, keturunan dikira mengikut:",p:["Nisab ibu","Nisab bapa","Kekayaan keluarga","Tempat lahir"],b:0,u:"Adat Perpatih mengira keturunan mengikut nisab ibu."},
 {j:"pilih",t:"Yang Dipertuan Besar Negeri Sembilan dipilih oleh:",p:["Undang Yang Empat","Rakyat jelata","Sultan Johor","Pedagang"],b:0,u:"Undang Yang Empat memilih Yang Dipertuan Besar."},
 {j:"pilih",t:"Ketua bagi sesuatu suku dalam Adat Perpatih ialah:",p:["Lembaga","Undang","Buapak","Laksamana"],b:0,u:"Lembaga ialah ketua suku. Buapak mengetuai perut, Undang mengetuai luak."},
 {j:"banyak",t:"Pilih DUA luak yang Undangnya memilih Yang Dipertuan Besar.",p:["Sungai Ujong","Rembau","Kuala Kedah","Kota Bharu"],b:[0,1],u:"Undang Luak Sungai Ujong, Jelebu, Johol dan Rembau memilih Yang Dipertuan Besar."},
 {j:"susun",t:"Susun pemimpin dalam Adat Perpatih daripada unit paling kecil hingga paling besar.",p:["Buapak","Lembaga","Undang","Yang Dipertuan Besar"],b:[0,1,2,3],u:"Buapak (perut), Lembaga (suku), Undang (luak) dan Yang Dipertuan Besar (negeri)."},
 {j:"pilih",t:"Dalam Adat Perpatih, harta pusaka tanah adat diwarisi oleh:",p:["Anak perempuan","Anak lelaki sulung","Pembesar","Raja"],b:0,u:"Tanah adat diwarisi oleh anak perempuan dalam Adat Perpatih."},
 {j:"pilih",t:"Keputusan dalam Adat Perpatih dibuat secara:",p:["Muafakat","Paksaan","Undian rahsia oleh raja","Cabutan nasib"],b:0,u:"Adat Perpatih mementingkan muafakat dalam membuat keputusan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan pemimpin dan unitnya yang betul.",p:["Buapak: perut","Lembaga: suku","Undang: luak","Buapak: negeri","Undang: perut"],b:[0,1,2],u:"Buapak mengetuai perut, Lembaga mengetuai suku dan Undang mengetuai luak."}},

{n:3, tempat:"Gelanggang Warisan", sk:"6.3.3 · 6.3.4 Mengaplikasikan pengetahuan", lampiran:null,
 kadNama:"Bulat Air Kerana Pembetung", kadEm:"\u{1F4A7}", kadFakta:"Perbilangan Adat Perpatih \"bulat air kerana pembetung, bulat manusia kerana muafakat\" menekankan kepentingan muafakat.",
 bosKadNama:"Seni Hidup", bosKadEm:"\u{1F3B6}", bosKadFakta:"Dikir barat masih dipertandingkan di sekolah dan universiti, menjadikan warisan Kelantan terus hidup.",
 soalan:[
 {j:"pilih",t:"Sebuah keluarga di Negeri Sembilan yang mengamalkan Adat Perpatih mewarisi tanah adat. Siapakah yang akan mewarisinya?",p:["Anak perempuan","Anak lelaki bongsu","Menantu lelaki","Ketua kampung"],b:0,u:"Tanah adat diwarisi oleh anak perempuan dalam Adat Perpatih."},
 {j:"pilih",t:"Seorang anak lahir dalam keluarga Adat Perpatih. Suku manakah yang akan menjadi sukunya?",p:["Suku ibunya","Suku bapanya","Suku Yang Dipertuan Besar","Suku yang dipilihnya sendiri"],b:0,u:"Anak menjadi ahli suku ibunya kerana keturunan dikira mengikut nisab ibu."},
 {j:"pilih",t:"Dua keluarga dalam satu suku berselisih faham. Siapakah yang paling sesuai menyelesaikannya?",p:["Lembaga","Yang Dipertuan Besar","Syahbandar","Laksamana"],b:0,u:"Lembaga sebagai ketua suku menyelesaikan masalah dalam sukunya."},
 {j:"banyak",t:"Sekolah anda menganjurkan Hari Warisan Kelantan. Pilih DUA persembahan yang sesuai.",p:["Dikir barat","Wayang kulit","Tarian Sumazau","Ngajat"],b:[0,1],u:"Dikir barat dan wayang kulit ialah kesenian Kelantan. Sumazau dari Sabah dan Ngajat dari Sarawak."},
 {j:"pilih",t:"Seorang pengkaji mahu mengetahui salasilah raja Kedah. Sumber manakah paling sesuai?",p:["Al-Tarikh Salasilah Negeri Kedah","Gurindam Dua Belas dari Pulau Penyengat","Misa Melayu dari negeri Perak","Nagarakertagama dari kerajaan Majapahit"],b:0,u:"Al-Tarikh Salasilah Negeri Kedah merekodkan salasilah raja Kedah."},
 {j:"pilih",t:"Yang Dipertuan Besar Negeri Sembilan mangkat. Bagaimanakah pengganti dipilih?",p:["Oleh Undang Yang Empat","Oleh pedagang asing di pelabuhan","Melalui pertandingan silat","Dilantik oleh Sultan Kedah"],b:0,u:"Undang Yang Empat memilih Yang Dipertuan Besar yang baharu."},
 {j:"pilih",t:"Kelab Kebudayaan mahu menghasilkan hiasan warisan Kelantan. Hasil kraf manakah paling sesuai?",p:["Wau bulan","Pua kumbu","Sompoton","Rumah panjang"],b:0,u:"Wau bulan ialah kraf tradisional Kelantan."},
 {j:"pilih",t:"Raja Perlis ditabalkan dengan istiadat pertabalan. Ini contoh warisan dalam aspek:",p:["Adat istiadat","Pertanian","Perdagangan","Perlombongan"],b:0,u:"Istiadat pertabalan ialah warisan adat istiadat diraja."}],
 bos:{j:"pilih",t:"Kelas anda perlu memilih tema persembahan. Bagaimanakah anda mengamalkan perbilangan \"bulat manusia kerana muafakat\"?",p:["Bincang dan setuju bersama","Ketua memilih seorang diri","Undi secara rahsia tanpa perbincangan","Membiarkan guru memilih"],b:0,u:"Perbilangan itu menekankan muafakat, iaitu berbincang hingga mencapai persetujuan bersama."}},

{n:4, tempat:"Makmal Adat", sk:"6.3.3 · 6.3.4 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Perbezaan Adat", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Adat Temenggung diamalkan di kebanyakan negeri Melayu, manakala Adat Perpatih diamalkan di Negeri Sembilan dan sebahagian Naning, Melaka.",
 bosKadNama:"Warisan Unik", bosKadEm:"\u{2728}", bosKadFakta:"Negeri Sembilan unik kerana pemerintahnya dipilih, bukan diwarisi secara langsung daripada bapa.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah perbezaan utama Adat Perpatih dan Adat Temenggung?",p:["Cara mengira keturunan","Agama yang dianuti","Bahasa yang digunakan","Makanan harian"],b:0,u:"Adat Perpatih mengikut nisab ibu, Adat Temenggung mengikut nisab bapa."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Adat Perpatih dianggap demokratik?",p:["Pemimpin dipilih bermuafakat","Raja memerintah sesuka hati","Tiada pemimpin langsung","Rakyat tidak dibenarkan bersuara"],b:0,u:"Pemimpin dari Buapak hingga Yang Dipertuan Besar dipilih melalui muafakat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah tanah adat diwarisi oleh anak perempuan?",p:["Melindungi perempuan","Menghukum anak lelaki yang malas","Ditetapkan oleh pihak Portugis","Tanah adat tidak bernilai"],b:0,u:"Pewarisan kepada anak perempuan menjamin keselamatan kaum perempuan dan keluarga."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri Adat Perpatih.",p:["Nisab ibu","Pemimpin dipilih secara muafakat","Pemimpin diwarisi bapa ke anak sulung","Harta diwarisi oleh pedagang asing"],b:[0,1],u:"Adat Perpatih mengikut nisab ibu dan memilih pemimpin secara muafakat."},
 {j:"pilih",t:"Bandingkan pemilihan pemerintah Negeri Sembilan dan Kedah. Pernyataan manakah BETUL?",p:["Negeri Sembilan dipilih Undang, Kedah diwarisi","Kedua-duanya dipilih oleh rakyat","Kedua-duanya dipilih oleh Siam","Kedah dipilih Undang, Negeri Sembilan diwarisi"],b:0,u:"Yang Dipertuan Besar dipilih oleh Undang Yang Empat, manakala Sultan Kedah mewarisi takhta."},
 {j:"pilih",t:"Mengapakah kesenian seperti Mak Yong penting kepada identiti Kelantan?",p:["Mencerminkan budaya","Ia berasal dari benua Eropah","Ia tidak lagi dipersembahkan","Ia diharamkan sepenuhnya"],b:0,u:"Mak Yong mencerminkan budaya, bahasa dan kreativiti masyarakat Kelantan."},
 {j:"pilih",t:"Apakah kesan sistem suku kepada masyarakat Negeri Sembilan?",p:["Ikatan kekeluargaan kukuh","Masyarakat berpecah-belah","Tiada pemimpin dalam masyarakat","Harta adat tidak diurus"],b:0,u:"Sistem suku mengeratkan ikatan antara ahli keluarga yang berkongsi suku."},
 {j:"pilih",t:"Mengapakah persuratan seperti Hikayat Merong Mahawangsa penting kepada sejarawan?",p:["Merekodkan pandangan masyarakat","Ia peta pelayaran kapal Portugis","Ia ditulis pada abad ke-21","Ia tiada maklumat sejarah"],b:0,u:"Hikayat merekodkan asal-usul, adat dan pandangan masyarakat Kedah pada zaman dahulu."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Adat Perpatih unik dan menekankan muafakat","Adat Perpatih sama dengan Adat Temenggung","Adat Perpatih tiada pemimpin","Adat Perpatih berasal dari Siam"],b:0,u:"Adat Perpatih unik kerana mengikut nisab ibu dan memilih pemimpin melalui muafakat."}},

{n:5, tempat:"Dewan Penilai Adat", sk:"6.3.3 · 6.3.4 · K6.3.6 · K6.3.7 Menilai warisan", lampiran:null,
 kadNama:"Adat Bersendikan Syarak", kadEm:"\u{1F54C}", kadFakta:"Perbilangan \"adat bersendikan syarak, syarak bersendikan Kitabullah\" menunjukkan adat disesuaikan dengan ajaran Islam.",
 bosKadNama:"Warisan Kekal", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Sistem pemilihan Yang Dipertuan Besar oleh Undang masih diamalkan di Negeri Sembilan hingga hari ini.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Adat Perpatih masih kekal hingga hari ini?",p:["Ia dihormati dan diamalkan","Ia dipaksa oleh kerajaan luar","Ia tiada pengikut","Ia baru dicipta"],b:0,u:"Masyarakat Negeri Sembilan terus menghormati dan mengamalkan Adat Perpatih."},
 {j:"pilih",t:"Seorang murid berkata, \"Adat Perpatih tidak adil kepada lelaki.\" Penilaian manakah paling tepat?",p:["Kurang tepat, lelaki menjadi pemimpin","Tepat, lelaki tiada peranan","Tepat, lelaki dihalau dari kampung","Kurang tepat, lelaki mewarisi tanah adat"],b:0,u:"Lelaki memegang jawatan seperti Buapak, Lembaga dan Undang. Tanah adat pula untuk perempuan."},
 {j:"pilih",t:"Antara warisan berikut, yang manakah paling menonjolkan keunikan Negeri Sembilan?",p:["Pemerintah dipilih Undang","Nobat diraja dalam pertabalan","Wau bulan dari pantai timur","Dikir barat dalam majlis keraian"],b:0,u:"Pemilihan Yang Dipertuan Besar oleh Undang Yang Empat unik kepada Negeri Sembilan."},
 {j:"banyak",t:"Pilih DUA alasan warisan kesenian Kelantan wajar dipelihara.",p:["Mencerminkan identiti negeri","Menarik pelancong","Menghalang kemajuan","Tiada nilai budaya"],b:[0,1],u:"Kesenian Kelantan mencerminkan identiti dan menarik pelancong."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang usaha memodenkan persembahan Mak Yong?",p:["Boleh, asalkan unsur aslinya dikekalkan","Wajib diubah sepenuhnya","Tidak boleh dipersembahkan langsung","Patut digantikan dengan muzik Barat"],b:0,u:"Pemodenan boleh menarik penonton baharu jika unsur asli Mak Yong dikekalkan."},
 {j:"pilih",t:"Mengapakah perbilangan \"adat bersendikan syarak\" penting?",p:["Adat selaras dengan Islam","Adat menolak ajaran agama","Syarak dihapuskan daripada adat","Adat dicipta oleh raja Siam"],b:0,u:"Perbilangan itu memastikan adat diamalkan selaras dengan ajaran Islam."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada kelangsungan negeri Melayu?",p:["Warisan kekal jika dihargai","Warisan hilang dengan sendiri","Adat tidak perlu dipelajari","Sejarah tidak berguna"],b:0,u:"Warisan negeri Melayu kekal kerana masyarakatnya menghargai dan mengamalkannya."},
 {j:"pilih",t:"Mengapakah undang-undang bertulis Kedah dinilai sebagai warisan bernilai?",p:["Bukti pentadbiran tersusun","Ia ditulis oleh Belanda","Ia tidak pernah digunakan","Ia tiada kaitan dengan pelabuhan"],b:0,u:"Undang-undang Kedah membuktikan pentadbiran pelabuhan dan masyarakat yang tersusun."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang warisan Kedah, Kelantan, Negeri Sembilan dan Perlis?",p:["Pelbagai dan masih hidup","Serupa di setiap negeri Melayu","Sudah lenyap sepenuhnya","Dicipta oleh kuasa Eropah"],b:0,u:"Setiap negeri mempunyai warisan tersendiri yang masih diamalkan hingga hari ini."}},

{n:6, tempat:"Studio Warisan Negeri", sk:"K6.3.5 hingga K6.3.8 Menghargai warisan dan iktibar", lampiran:null,
 kadNama:"Warisan Hidup", kadEm:"\u{1F3B6}", kadFakta:"Warisan tidak cukup disimpan di muzium. Ia perlu diamalkan supaya terus hidup dalam kalangan generasi muda.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggabungkan fakta warisan dengan cara yang menarik minat remaja hari ini.",
 soalan:[
 {j:"pilih",t:"Minat remaja terhadap wayang kulit semakin berkurang. Idea manakah paling berasas?",p:["Persembahan dengan cerita semasa","Mengharamkan persembahan wayang kulit","Membuang patung kulit yang lama","Membiarkan ia lenyap ditelan zaman"],b:0,u:"Persembahan pendek dengan cerita semasa menarik remaja sambil mengekalkan seni wayang kulit."},
 {j:"pilih",t:"Sekolah anda di Negeri Sembilan mahu memperkenalkan Adat Perpatih. Aktiviti manakah paling sesuai?",p:["Temu bual bersama Lembaga suku","Mengejek amalan adat","Melupakan perbilangan adat","Menghafal tanpa memahami"],b:0,u:"Temu bual dengan Lembaga memberi maklumat sahih tentang Adat Perpatih."},
 {j:"banyak",t:"Pilih DUA cara memelihara kesenian tradisional negeri.",p:["Menyertai kelab kesenian","Merakam persembahan warisan","Mengabaikan seni lama","Menukar seni lama sepenuhnya"],b:[0,1],u:"Menyertai kelab dan merakam persembahan membantu memelihara kesenian."},
 {j:"pilih",t:"Kelas anda perlu membuat keputusan penting. Iktibar Adat Perpatih manakah paling sesuai?",p:["Bermuafakat","Ketua memutuskan sendirian","Undi tanpa perbincangan","Tangguh selama-lamanya"],b:0,u:"Muafakat ialah teras Adat Perpatih dalam membuat keputusan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Warisan negeri lain tidak penting kepada saya.\" Respons manakah paling rasional?",p:["Ia warisan Malaysia","Betul, negeri sendiri sahaja penting","Betul, warisan tidak berguna","Warisan sekadar untuk pelancong"],b:0,u:"Warisan setiap negeri membentuk kepelbagaian budaya Malaysia."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mempromosikan wau bulan kepada pelancong?",p:["Festival wau antarabangsa","Melarang pertandingan wau","Menjual wau plastik murah","Memusnahkan bengkel wau"],b:0,u:"Festival wau menarik pelancong dan menyokong pembuat wau tempatan."},
 {j:"pilih",t:"Mengapakah remaja perlu menghargai warisan negeri Melayu?",p:["Membentuk jati diri","Menghalang kemajuan","Untuk lulus ujian sahaja","Kerana diarahkan pelancong"],b:0,u:"Menghargai warisan membentuk jati diri dan rasa bangga sebagai rakyat Malaysia."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mendokumentasikan perbilangan Adat Perpatih?",p:["Buku digital berpenjelasan","Membiarkan ia dilupakan begitu sahaja","Mengubah maksudnya sesuka hati","Menyimpannya tanpa dikongsi"],b:0,u:"Buku digital dengan penjelasan memudahkan generasi muda memahami perbilangan adat."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk memperkenalkan warisan Kedah, Kelantan, Negeri Sembilan atau Perlis kepada remaja Malaysia.",
  arahan:"Pilih sekurang-kurangnya DUA warisan (contoh: Adat Perpatih, pemilihan Yang Dipertuan Besar oleh Undang, Mak Yong, wayang kulit, wau bulan, Hikayat Merong Mahawangsa). Terangkan fakta warisan itu, idea awak, cara melaksanakannya dan nilai yang ingin dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang menarik dan boleh dilaksanakan, serta menonjolkan nilai seperti muafakat, menghargai warisan dan jati diri."}}
];

module.exports = {
  id:"s2b9", tingkatan:2, kod:"9.0 Warisan Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis",
  tajuk:"Adat dan Seni",
  subtajuk:"Sejarah Ting. 2 · Bab 9 Warisan Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis",
  spi:SPI["6.3"],
  ulasan:{
   1:"{n} dapat menyatakan warisan kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis. Langkah seterusnya ialah memahami keunikan Adat Perpatih.",
   2:"{n} memahami warisan negeri-negeri ini dan keunikan Adat Perpatih. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang Adat Perpatih dan warisan negeri dalam pelbagai situasi. Galakkan membandingkan Adat Perpatih dengan Adat Temenggung.",
   4:"{n} mampu menganalisis keunikan adat dan pemerintahan Negeri Sembilan serta warisan negeri lain. Seterusnya latih menilai kepentingan warisan itu.",
   5:"{n} dapat membuat penilaian yang berasas tentang warisan negeri-negeri Melayu. Sudah bersedia melahirkan idea untuk memeliharanya.",
   6:"{n} berjaya melahirkan idea yang berasas untuk memperkenalkan warisan negeri-negeri Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Warisan Kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis. Cadangan: ulang hentian pertama sambil melukis carta Buapak, Lembaga, Undang dan Yang Dipertuan Besar dengan bimbingan rakan sebaya."
  },
  lampiran:{
   p1:petikan(1, "Adat Perpatih dan Adat Temenggung",
     ["Adat Perpatih dibawa oleh perantau Minangkabau ke Negeri Sembilan. Keturunan dikira mengikut nisab ibu, dan tanah adat diwarisi oleh anak perempuan untuk melindungi kaum perempuan dan keluarga.",
      "Pemimpin dipilih melalui muafakat: Buapak mengetuai perut, Lembaga mengetuai suku, Undang mengetuai luak, dan Undang Yang Empat memilih Yang Dipertuan Besar. Adat Temenggung pula, yang diamalkan di kebanyakan negeri Melayu lain, mengira keturunan mengikut nisab bapa."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
