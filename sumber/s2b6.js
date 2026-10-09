/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 6 Kesultanan Johor Riau.
   Standard Kandungan 6.2 Kesultanan Johor Riau dan Kerajaan-kerajaan Melayu, Standard
   Pembelajaran 6.2.1 dan 6.2.2 serta K6.2.5 hingga K6.2.8 (DSKP KSSM Sejarah Tingkatan 2,
   dskp/sejarah-t2.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Kota Kara", sk:"6.2.1 Pengasasan Kesultanan Johor Riau", lampiran:null,
 kadNama:"Waris Melaka", kadEm:"\u{1F451}", kadFakta:"Kesultanan Johor diasaskan oleh Sultan Alauddin Riayat Syah II, putera Sultan Mahmud Syah, sultan Melaka yang terakhir.",
 bosKadNama:"Kota Batu", bosKadEm:"\u{1F3EF}", bosKadFakta:"Johor Lama, juga dikenali sebagai Kota Batu, terletak di tebing Sungai Johor dan pernah menjadi pusat pemerintahan Johor.",
 soalan:[
 {j:"pilih",t:"Pengasas Kesultanan Johor ialah:",p:["Sultan Alauddin Riayat Syah II","Parameswara dari Palembang","Sultan Muzaffar Syah dari Melaka","Raja Haji Fisabilillah"],b:0,u:"Sultan Alauddin Riayat Syah II, putera Sultan Mahmud Syah, mengasaskan Johor."},
 {j:"pilih",t:"Sultan Alauddin Riayat Syah II ialah putera kepada:",p:["Sultan Mahmud Syah","Sultan Mansur Syah","Tun Perak","Raden Wijaya"],b:0,u:"Baginda ialah putera Sultan Mahmud Syah, sultan Melaka yang terakhir."},
 {j:"pilih",t:"Kesultanan Johor diasaskan kira-kira tahun:",p:["1528","1400","1303","1957"],b:0,u:"Johor diasaskan kira-kira tahun 1528."},
 {j:"pilih",t:"Pusat pemerintahan Johor yang juga dikenali sebagai Kota Batu ialah:",p:["Johor Lama","Pekan Tua","Sayong Pinang","Bentan"],b:0,u:"Johor Lama juga dikenali sebagai Kota Batu."},
 {j:"banyak",t:"Pilih DUA pusat pemerintahan awal Kesultanan Johor.",p:["Pekan Tua","Sayong Pinang","Palembang","Angkor"],b:[0,1],u:"Pekan Tua (Kota Kara) dan Sayong Pinang ialah antara pusat pemerintahan Johor."},
 {j:"pilih",t:"Pusat pemerintahan Johor kebanyakannya dibina di tebing sungai:",p:["Johor","Mekong","Musi","Nil"],b:0,u:"Pekan Tua, Sayong Pinang dan Johor Lama terletak di sepanjang Sungai Johor."},
 {j:"pilih",t:"Kuasa Eropah yang menawan Melaka dan menjadi ancaman kepada Johor ialah:",p:["Portugis","British","Perancis","Sepanyol"],b:0,u:"Portugis menawan Melaka pada 1511 dan terus mengancam Johor."},
 {j:"pilih",t:"Kerajaan di Sumatera yang turut bersaing dengan Johor ialah:",p:["Aceh","Champa","Funan","Angkor"],b:0,u:"Aceh bersaing dengan Johor dan Portugis untuk menguasai perdagangan Selat Melaka."}],
 bos:{j:"banyak",t:"Pilih SEMUA kuasa yang terlibat dalam persaingan di Selat Melaka pada abad ke-16.",p:["Johor","Aceh","Portugis","Funan","Angkor"],b:[0,1,2],u:"Johor, Aceh dan Portugis bersaing menguasai Selat Melaka. Funan dan Angkor wujud lebih awal."}},

{n:2, tempat:"Kubu Sungai Johor", sk:"6.2.1 Cabaran dan strategi", lampiran:"gm1",
 kadNama:"Berpindah Pusat", kadEm:"\u{1F6A3}", kadFakta:"Johor beberapa kali memindahkan pusat pemerintahannya untuk mengelak serangan musuh dan mencari tempat yang lebih selamat.",
 bosKadNama:"Pakatan 1641", bosKadEm:"\u{1F91D}", bosKadFakta:"Johor bekerjasama dengan Belanda untuk menawan Melaka daripada Portugis pada tahun 1641.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Melaka jatuh","Johor diasaskan","Sejarah Melayu disusun","Belanda menawan Melaka"],b:0,u:"Melaka jatuh pada 1511, peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Johor dan Belanda menawan Melaka?",p:["1641","1528","1612","1511"],b:0,u:"Rajah 1 menunjukkan Melaka ditawan pada 1641."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Melaka jatuh","Johor diasaskan","Sejarah Melayu disusun","Belanda menawan Melaka"],b:[0,1,2,3],u:"1511, 1528, 1612 dan 1641."},
 {j:"pilih",t:"Mengapakah Johor sering memindahkan pusat pemerintahannya?",p:["Mengelak serangan musuh","Mencari kawasan bersalji","Mengikut arahan maharaja China","Kerana sungai menjadi kering"],b:0,u:"Pusat pemerintahan dipindahkan untuk mengelak serangan Portugis dan Aceh."},
 {j:"pilih",t:"Kuasa Eropah yang bekerjasama dengan Johor untuk menawan Melaka ialah:",p:["Belanda","Portugis","Sepanyol","Perancis"],b:0,u:"Johor bekerjasama dengan Belanda menawan Melaka pada 1641."},
 {j:"banyak",t:"Pilih DUA strategi Johor menghadapi cabaran.",p:["Memindahkan pusat pemerintahan","Menjalin pakatan dengan kuasa lain","Menutup semua pelabuhan","Menyerahkan negeri kepada Portugis"],b:[0,1],u:"Johor memindahkan pusat pemerintahan dan menjalin pakatan dengan kuasa lain."},
 {j:"pilih",t:"Antara berikut, yang manakah cabaran utama Johor pada abad ke-16?",p:["Serangan Portugis dan Aceh","Banjir salji di Sungai Johor","Kekurangan pedagang dari China","Serangan tentera dari Rom"],b:0,u:"Johor sering diserang oleh Portugis dan Aceh."},
 {j:"pilih",t:"Sejarah Melayu disusun semula di Johor oleh:",p:["Tun Sri Lanang","Raja Ali Haji","Mpu Prapanca","Hang Tuah"],b:0,u:"Tun Sri Lanang menyusun Sejarah Melayu pada tahun 1612."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah selepas Melaka jatuh baharulah Portugis diusir dari Melaka?",p:["130 tahun","17 tahun","101 tahun","29 tahun"],b:0,u:"1641 tolak 1511 ialah 130 tahun."}},

{n:3, tempat:"Pelabuhan Riau", sk:"6.2.2 Kegemilangan Kesultanan Johor Riau", lampiran:null,
 kadNama:"Pelabuhan Riau", kadEm:"\u{2693}", kadFakta:"Pada abad ke-18, pelabuhan Riau menjadi pusat perdagangan yang sibuk. Pedagang dari China, India, Bugis dan Eropah singgah di sana.",
 bosKadNama:"Gambir", bosKadEm:"\u{1F33F}", bosKadFakta:"Gambir ditanam secara besar-besaran di Riau dan menjadi antara barang dagangan penting.",
 soalan:[
 {j:"pilih",t:"Seorang pedagang Bugis mahu berdagang di wilayah Johor pada abad ke-18. Pelabuhan manakah paling sibuk?",p:["Riau","Oc Eo","Angkor","Palembang Kuno"],b:0,u:"Riau ialah pelabuhan utama Johor Riau pada abad ke-18."},
 {j:"pilih",t:"Sebuah kapal dagang tiba di Riau. Siapakah yang menguruskan urusan pelabuhan?",p:["Syahbandar","Bendahara","Pendeta","Bentara"],b:0,u:"Syahbandar mengurus kapal, pedagang dan cukai di pelabuhan."},
 {j:"pilih",t:"Pedagang memilih Riau berbanding pelabuhan lain. Apakah sebab yang paling mungkin?",p:["Cukai berpatutan dan selamat","Pelabuhannya sentiasa ditutup","Pedagang dihalau","Tiada barang dijual"],b:0,u:"Cukai yang berpatutan dan keselamatan menarik pedagang ke Riau."},
 {j:"banyak",t:"Pilih DUA langkah pengurusan pelabuhan Riau yang menarik pedagang.",p:["Menjaga keselamatan perairan","Menyediakan kemudahan pelabuhan","Menaikkan cukai setiap minggu","Melarang kapal asing"],b:[0,1],u:"Keselamatan dan kemudahan menarik pedagang. Cukai tinggi dan larangan menjauhkan mereka."},
 {j:"pilih",t:"Sebuah kumpulan pelajar ingin mengkaji persuratan Johor Riau. Ke manakah lawatan paling sesuai?",p:["Pulau Penyengat","Angkor Wat","Lembah Bujang","Gua Niah"],b:0,u:"Pulau Penyengat ialah pusat persuratan Johor Riau, tempat Raja Ali Haji berkarya."},
 {j:"pilih",t:"Tuhfat al-Nafis dikarang oleh:",p:["Raja Ali Haji","Tun Sri Lanang","Mpu Prapanca","Munsyi Abdullah"],b:0,u:"Raja Ali Haji mengarang Tuhfat al-Nafis."},
 {j:"pilih",t:"Gurindam Dua Belas ialah karya:",p:["Raja Ali Haji","Tun Sri Lanang","Hang Tuah","Tun Perak"],b:0,u:"Gurindam Dua Belas dikarang oleh Raja Ali Haji di Pulau Penyengat."},
 {j:"pilih",t:"Tanaman dagangan penting di Riau pada abad ke-18 ialah:",p:["Gambir","Gandum","Kapas","Teh"],b:0,u:"Gambir ditanam secara besar-besaran dan didagangkan dari Riau."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan karya dan pengarang yang betul.",p:["Sejarah Melayu: Tun Sri Lanang","Tuhfat al-Nafis: Raja Ali Haji","Gurindam Dua Belas: Raja Ali Haji","Nagarakertagama: Tun Sri Lanang","Sejarah Melayu: Mpu Prapanca"],b:[0,1,2],u:"Tun Sri Lanang menyusun Sejarah Melayu, Raja Ali Haji mengarang Tuhfat al-Nafis dan Gurindam Dua Belas."}},

{n:4, tempat:"Arkib Penyengat", sk:"6.2.1 · 6.2.2 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Kerjasama Melayu-Bugis", kadEm:"\u{1F91D}", kadFakta:"Pada abad ke-18, pembesar Bugis memegang jawatan Yamtuan Muda dan membantu Sultan Johor Riau mentadbir serta mempertahankan negeri.",
 bosKadNama:"Pusat Ilmu", bosKadEm:"\u{1F4DA}", bosKadFakta:"Persuratan yang berkembang menunjukkan masyarakat Johor Riau menghargai ilmu, bukan sekadar perdagangan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah faktor utama kemajuan pelabuhan Riau?",p:["Pengurusan cekap","Iklim sejuk sepanjang tahun","Ketiadaan pedagang asing","Pelabuhan ditutup pada musim monsun"],b:0,u:"Petikan menyebut pengurusan pelabuhan yang cekap dan selamat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah peranan Yamtuan Muda?",p:["Membantu sultan mentadbir","Mengarang gurindam","Memimpin Portugis","Menjadi syahbandar Aceh"],b:0,u:"Yamtuan Muda membantu sultan mentadbir dan mempertahankan negeri."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah bukti Johor Riau menghargai ilmu?",p:["Persuratan di Pulau Penyengat","Pelabuhan Riau ditutup kepada pedagang","Portugis menawan Riau pada 1511","Gambir tidak lagi ditanam di Riau"],b:0,u:"Pulau Penyengat menjadi pusat persuratan dan pengajian."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA aspek kegemilangan Johor Riau.",p:["Pusat perdagangan","Pusat persuratan","Pusat perindustrian kereta","Pusat perlombongan arang batu"],b:[0,1],u:"Johor Riau gemilang sebagai pusat perdagangan dan persuratan."},
 {j:"pilih",t:"Mengapakah kerjasama dengan Belanda pada 1641 menguntungkan Johor?",p:["Saingan utamanya disingkirkan","Johor menjadi jajahan Belanda","Johor kehilangan pelabuhan","Johor diserang Aceh"],b:0,u:"Portugis, saingan Johor, disingkirkan dari Melaka. Johor kemudian berkembang sebagai pusat perdagangan."},
 {j:"pilih",t:"Bandingkan Melaka dan Johor Riau. Apakah persamaannya?",p:["Pusat perdagangan","Sama-sama dijajah Belanda","Diasaskan pada tahun yang sama","Tiada pelabuhan"],b:0,u:"Kedua-duanya menjadi pusat perdagangan yang penting di Selat Melaka."},
 {j:"pilih",t:"Apakah kesan perpindahan pusat pemerintahan yang kerap kepada Johor?",p:["Pembangunan terganggu","Ekonomi terus stabil dan kukuh","Pedagang asing bertambah ramai","Pentadbiran menjadi lebih mudah"],b:0,u:"Pusat yang sering berpindah menyukarkan pembangunan dan pentadbiran yang berterusan."},
 {j:"pilih",t:"Mengapakah Sejarah Melayu penting kepada sejarawan?",p:["Merekodkan sejarah Melaka","Mengandungi peta Eropah","Ditulis oleh Portugis","Menceritakan Angkor"],b:0,u:"Sejarah Melayu merekodkan salasilah raja, adat dan peristiwa Kesultanan Melayu Melaka."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Kerjasama dan pengurusan yang baik","Johor Riau gemilang kerana nasib baik","Johor Riau tidak pernah mencapai kegemilangan","Johor Riau gemilang kerana dijajah"],b:0,u:"Kerjasama Melayu-Bugis dan pengurusan pelabuhan yang cekap membawa kegemilangan."}},

{n:5, tempat:"Dewan Penilai Johor", sk:"6.2.1 · 6.2.2 · K6.2.5 · K6.2.6 Menilai Kesultanan Johor Riau", lampiran:null,
 kadNama:"Kelangsungan", kadEm:"\u{1F517}", kadFakta:"Walaupun Melaka jatuh, warisan pemerintahannya diteruskan oleh Johor. Inilah kelangsungan warisan pentadbiran.",
 bosKadNama:"Pemimpin dan Rakyat", bosKadEm:"\u{1F465}", bosKadFakta:"Negara kukuh apabila pemimpin bertanggungjawab dan rakyat taat serta bersatu.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Johor dianggap penerus Kesultanan Melayu Melaka?",p:["Diasaskan waris Melaka","Diasaskan oleh pihak Portugis","Terletak di negara Kemboja","Tiada kaitan dengan Melaka"],b:0,u:"Johor diasaskan oleh putera sultan Melaka yang terakhir dan meneruskan sistemnya."},
 {j:"pilih",t:"Seorang murid berkata, \"Pakatan Johor-Belanda tiada risiko.\" Penilaian manakah paling tepat?",p:["Kurang tepat, Belanda ada kepentingan","Tepat, Belanda tidak mahu apa-apa","Tepat, Belanda tiada kapal","Kurang tepat, Belanda tidak wujud"],b:0,u:"Pakatan itu menyingkirkan Portugis, tetapi Belanda juga mahu menguasai perdagangan."},
 {j:"pilih",t:"Antara tindakan berikut, yang manakah paling bijak dalam menghadapi musuh yang lebih kuat?",p:["Menjalin pakatan","Menyerang sendirian","Berdiam diri","Menyerah serta-merta"],b:0,u:"Pakatan menambah kekuatan, seperti Johor bersama Belanda pada 1641."},
 {j:"banyak",t:"Pilih DUA bukti kelangsungan warisan Melaka di Johor.",p:["Sistem beraja diteruskan","Sejarah Melayu disusun di Johor","Konsep dewaraja dihidupkan","Bahasa Portugis dijadikan rasmi"],b:[0,1],u:"Sistem beraja dan penyusunan Sejarah Melayu membuktikan kelangsungan warisan Melaka."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang peranan Bugis di Johor Riau?",p:["Menguatkan Johor, tetapi wujud persaingan kuasa","Membawa keburukan kepada Johor semata-mata","Bugis tiada sebarang peranan di Johor","Menjadikan Johor tanah jajahan Bugis"],b:0,u:"Bugis menguatkan Johor Riau, tetapi kehadiran mereka turut menimbulkan persaingan kuasa."},
 {j:"pilih",t:"Mengapakah persuratan Johor Riau dinilai bernilai tinggi?",p:["Ia merekodkan sejarah dan nilai","Ia ditulis dalam bahasa Latin","Ia tiada kaitan dengan kita","Ia dicipta pada abad ini"],b:0,u:"Karya seperti Tuhfat al-Nafis merekodkan sejarah, manakala Gurindam Dua Belas mengandungi nasihat."},
 {j:"pilih",t:"Apakah tanggungjawab utama pemimpin menurut iktibar sejarah Johor?",p:["Melindungi rakyat","Mengutamakan kepentingan diri","Membiarkan musuh menyerang negeri","Mengabaikan perdagangan negeri"],b:0,u:"Pemimpin Johor berusaha melindungi negeri dan rakyat walaupun berdepan banyak serangan."},
 {j:"pilih",t:"Apakah tanggungjawab rakyat dalam sebuah negara menurut iktibar sejarah ini?",p:["Taat dan bersatu","Menentang pemimpin","Bergaduh sesama sendiri","Mengabaikan negara"],b:0,u:"Rakyat yang taat dan bersatu menguatkan negara menghadapi cabaran."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Kesultanan Johor Riau?",p:["Bertahan melalui strategi bijak","Lenyap sejurus selepas tahun 1511","Gemilang kerana dijajah oleh Belanda","Tiada sebarang sumbangan kepada sejarah"],b:0,u:"Johor bertahan melalui strategi bijak dan kemudian gemilang sebagai pusat perdagangan dan persuratan."}},

{n:6, tempat:"Studio Gurindam", sk:"K6.2.5 hingga K6.2.8 Warisan, tanggungjawab dan iktibar", lampiran:null,
 kadNama:"Gurindam Dua Belas", kadEm:"\u{1F4DD}", kadFakta:"Gurindam Dua Belas mengandungi nasihat tentang agama, budi pekerti dan tanggungjawab pemimpin serta rakyat.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang baik menggabungkan fakta sejarah dengan cara yang dekat dengan kehidupan remaja hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk minat membaca karya klasik. Idea manakah paling berasas?",p:["Deklamasi gurindam","Membuang buku lama dari perpustakaan","Melarang karya klasik di sekolah","Menghafal tanpa memahami maksudnya"],b:0,u:"Deklamasi gurindam memperkenalkan karya Raja Ali Haji dengan cara yang menarik."},
 {j:"pilih",t:"Kelas anda menghadapi masalah. Iktibar daripada strategi Johor manakah paling sesuai?",p:["Bekerjasama mencari jalan","Menyalahkan orang lain dalam kelas","Berputus asa lebih awal","Mengabaikan masalah itu sehingga reda"],b:0,u:"Johor mengatasi cabaran melalui kerjasama dan strategi yang bijak."},
 {j:"banyak",t:"Pilih DUA cara menghargai warisan Johor Riau.",p:["Melawat tapak Kota Johor Lama","Membaca Tuhfat al-Nafis","Merosakkan tapak kota lama","Mengabaikan sejarah negeri"],b:[0,1],u:"Lawatan ke tapak bersejarah dan membaca karya klasik menghargai warisan."},
 {j:"pilih",t:"Pelabuhan di negeri anda mahu menarik pelabur. Pengajaran Riau manakah paling berasas?",p:["Pengurusan yang cekap dan selamat","Cukai yang sangat tinggi","Larangan kapal asing","Pelabuhan yang kotor"],b:0,u:"Riau berjaya kerana pengurusan yang cekap dan selamat."},
 {j:"pilih",t:"Sebagai ketua pengawas, bagaimanakah anda mengamalkan tanggungjawab pemimpin seperti dalam sejarah Johor?",p:["Melindungi kebajikan rakan","Mengutamakan diri","Membiarkan masalah","Menghukum tanpa usul periksa"],b:0,u:"Pemimpin yang baik melindungi kebajikan orang yang dipimpinnya."},
 {j:"pilih",t:"Mengapakah warisan Kesultanan Melayu penting kepada Malaysia hari ini?",p:["Asas sistem beraja","Ia tidak lagi wujud hari ini","Ia berasal dari benua Eropah","Ia sekadar hiburan untuk pelancong"],b:0,u:"Sistem beraja, adat dan persuratan Kesultanan Melayu diwarisi hingga kini."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pakatan dengan pihak lain tanda kelemahan.\" Respons manakah paling rasional?",p:["Pakatan yang bijak menambah kekuatan","Betul, kita perlu bersendirian","Betul, pakatan sentiasa merugikan","Pakatan tiada kesan"],b:0,u:"Johor menambah kekuatan melalui pakatan dengan Belanda untuk menyingkirkan Portugis."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memperkenalkan Pulau Penyengat kepada remaja?",p:["Video tentang Raja Ali Haji","Mengabaikannya sahaja","Menyebarkan cerita palsu di media sosial","Melukis di dinding bangunan lama"],b:0,u:"Video pendek berasaskan fakta menarik minat remaja tanpa merosakkan warisan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menggunakan iktibar daripada sejarah Kesultanan Johor Riau dalam kehidupan murid hari ini.",
  arahan:"Pilih sekurang-kurangnya DUA fakta sejarah (contoh: perpindahan pusat pemerintahan, pakatan dengan Belanda 1641, pengurusan pelabuhan Riau, persuratan di Pulau Penyengat). Terangkan iktibarnya, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti ketabahan, kerjasama, tanggungjawab dan cinta akan ilmu."}}
];

module.exports = {
  id:"s2b6", tingkatan:2, kod:"6.0 Kesultanan Johor Riau",
  tajuk:"Sungai dan Gurindam",
  subtajuk:"Sejarah Ting. 2 · Bab 6 Kesultanan Johor Riau",
  spi:SPI["6.2"],
  ulasan:{
   1:"{n} dapat memerihalkan pengasasan Kesultanan Johor Riau. Langkah seterusnya ialah memahami cabaran dan strateginya.",
   2:"{n} memahami pengasasan, cabaran dan strategi Kesultanan Johor Riau. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang kegemilangan Johor Riau dalam pelbagai situasi. Galakkan menganalisis faktor kegemilangannya.",
   4:"{n} mampu menganalisis faktor kegemilangan Johor Riau, termasuk pengurusan pelabuhan dan kerjasama Melayu-Bugis. Seterusnya latih menilai strateginya.",
   5:"{n} dapat membuat penilaian yang berasas tentang Kesultanan Johor Riau. Sudah bersedia melahirkan idea berdasarkan iktibarnya.",
   6:"{n} berjaya melahirkan idea yang berasas berdasarkan iktibar Kesultanan Johor Riau. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kesultanan Johor Riau. Cadangan: ulang hentian pertama sambil melabel pusat pemerintahan Johor pada peta dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1511", label:"Melaka jatuh ke tangan Portugis"},
     {masa:"1528", label:"Kesultanan Johor diasaskan"},
     {masa:"1612", label:"Sejarah Melayu disusun oleh Tun Sri Lanang"},
     {masa:"1641", label:"Johor dan Belanda menawan Melaka"}],
     kapsyen:"Rajah 1 · Beberapa peristiwa penting Kesultanan Johor",
     alt:"Garis masa menegak: 1511 Melaka jatuh ke tangan Portugis; 1528 Kesultanan Johor diasaskan; 1612 Sejarah Melayu disusun oleh Tun Sri Lanang; 1641 Johor dan Belanda menawan Melaka"},
   p1:petikan(1, "Johor Riau pada abad ke-18",
     ["Pada abad ke-18, pelabuhan Riau menjadi pusat perdagangan yang sibuk. Pelabuhan diurus dengan cekap oleh Syahbandar, perairan dikawal, dan cukai yang dikenakan berpatutan. Pembesar Bugis yang bergelar Yamtuan Muda membantu sultan mentadbir dan mempertahankan negeri.",
      "Pada abad ke-19, Pulau Penyengat berkembang sebagai pusat persuratan. Raja Ali Haji mengarang Tuhfat al-Nafis dan Gurindam Dua Belas di sana."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
