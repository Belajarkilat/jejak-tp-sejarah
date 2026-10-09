/* Sumber kandungan — Sejarah KSSM Tingkatan 2, Bab 7 Kesultanan Melayu Pahang, Perak,
   Terengganu dan Selangor. Standard Kandungan 6.2 Kesultanan Johor Riau dan Kerajaan-kerajaan
   Melayu, Standard Pembelajaran 6.2.3 dan 6.2.4 serta K6.2.5 hingga K6.2.8 (DSKP KSSM Sejarah
   Tingkatan 2, dskp/sejarah-t2.pdf). Standard Prestasi disalin kata demi kata. Tahun
   pengasasan ditulis "kira-kira" kerana buku rujukan memberi anggaran yang berbeza. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Balai Empat Negeri", sk:"6.2.3 Pengasasan Kesultanan Pahang, Perak, Terengganu dan Selangor", lampiran:null,
 kadNama:"Waris Melaka", kadEm:"\u{1F451}", kadFakta:"Sultan pertama Pahang dan Perak ialah putera sultan Melaka. Ini menunjukkan kelangsungan Kesultanan Melayu Melaka di negeri lain.",
 bosKadNama:"Raja Lumu", bosKadEm:"\u{26F5}", bosKadFakta:"Raja Lumu, keturunan Bugis, ditabalkan sebagai Sultan Salehuddin, sultan pertama Selangor, dengan restu Sultan Perak.",
 soalan:[
 {j:"pilih",t:"Sultan pertama Pahang ialah:",p:["Sultan Muhammad Syah","Sultan Salehuddin","Sultan Zainal Abidin I","Sultan Muzaffar Syah I"],b:0,u:"Sultan Muhammad Syah, putera Sultan Mansur Syah dari Melaka, menjadi sultan pertama Pahang."},
 {j:"pilih",t:"Sultan pertama Perak ialah:",p:["Sultan Muzaffar Syah I","Sultan Muhammad Syah","Sultan Salehuddin","Sultan Alauddin Riayat Syah II"],b:0,u:"Sultan Muzaffar Syah I, putera Sultan Mahmud Syah, menjadi sultan pertama Perak."},
 {j:"pilih",t:"Sultan pertama Terengganu ialah:",p:["Sultan Zainal Abidin I","Sultan Salehuddin","Sultan Muhammad Syah","Sultan Muzaffar Syah I"],b:0,u:"Sultan Zainal Abidin I, kerabat Johor, menjadi sultan pertama Terengganu."},
 {j:"pilih",t:"Sultan pertama Selangor ialah:",p:["Sultan Salehuddin","Sultan Zainal Abidin I","Sultan Muhammad Syah","Sultan Muzaffar Syah I"],b:0,u:"Raja Lumu ditabalkan sebagai Sultan Salehuddin, sultan pertama Selangor."},
 {j:"banyak",t:"Pilih DUA kesultanan yang sultan pertamanya putera sultan Melaka.",p:["Pahang","Perak","Selangor","Terengganu"],b:[0,1],u:"Sultan pertama Pahang dan Perak ialah putera sultan Melaka. Selangor berasal daripada keturunan Bugis dan Terengganu daripada kerabat Johor."},
 {j:"pilih",t:"Sultan pertama Selangor berasal daripada keturunan:",p:["Bugis","Siam","Portugis","Jawa dari Majapahit"],b:0,u:"Raja Lumu ialah putera Daeng Chelak, pembesar Bugis."},
 {j:"pilih",t:"Sultan Zainal Abidin I mempunyai hubungan kekeluargaan dengan kerajaan:",p:["Johor","Champa","Aceh","Siam"],b:0,u:"Sultan Zainal Abidin I ialah kerabat Bendahara Johor."},
 {j:"pilih",t:"Kesultanan Perak diasaskan kira-kira tahun:",p:["1528","1400","1766","1303"],b:0,u:"Kesultanan Perak diasaskan kira-kira tahun 1528, selepas Melaka jatuh."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan kesultanan dan sultan pertamanya yang betul.",p:["Pahang: Sultan Muhammad Syah","Perak: Sultan Muzaffar Syah I","Selangor: Sultan Salehuddin","Terengganu: Sultan Muhammad Syah","Selangor: Sultan Zainal Abidin I"],b:[0,1,2],u:"Pahang, Perak dan Selangor dipadankan dengan betul. Sultan pertama Terengganu ialah Sultan Zainal Abidin I."}},

{n:2, tempat:"Bilik Nobat", sk:"6.2.4 Warisan Kesultanan Melayu Melaka", lampiran:"gm1",
 kadNama:"Nobat", kadEm:"\u{1F941}", kadFakta:"Nobat ialah alat muzik diraja yang dimainkan dalam upacara pertabalan. Tradisi ini diwarisi daripada Kesultanan Melayu Melaka.",
 bosKadNama:"Undang-undang 99 Perak", bosKadEm:"\u{1F4DC}", bosKadFakta:"Undang-undang 99 Perak mengandungi 99 fasal tentang pemerintahan, jenayah dan kehidupan masyarakat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, kesultanan manakah paling awal diasaskan?",p:["Pahang","Perak","Terengganu","Selangor"],b:0,u:"Pahang diasaskan kira-kira 1470, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, kesultanan manakah paling akhir diasaskan?",p:["Selangor","Pahang","Perak","Terengganu"],b:0,u:"Selangor diasaskan kira-kira 1766, paling akhir dalam rajah."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun pengasasan kesultanan berikut mengikut kronologi.",p:["Pahang","Perak","Terengganu","Selangor"],b:[0,1,2,3],u:"Pahang (kira-kira 1470), Perak (1528), Terengganu (1708) dan Selangor (1766)."},
 {j:"pilih",t:"Agama rasmi Kesultanan Pahang, Perak, Terengganu dan Selangor ialah:",p:["Islam","Hindu","Buddha","Animisme"],b:0,u:"Islam ialah agama rasmi, diwarisi daripada Kesultanan Melayu Melaka."},
 {j:"pilih",t:"Undang-undang yang digunakan di Perak ialah:",p:["Undang-undang 99 Perak","Hukum Kanun Pahang","Adat Perpatih","Undang-undang Laut Rom"],b:0,u:"Perak menggunakan Undang-undang 99 Perak."},
 {j:"pilih",t:"Hukum Kanun Pahang banyak dipengaruhi oleh:",p:["Hukum Kanun Melaka","Undang-undang Rom","Kod Hammurabi","Undang-undang Majapahit"],b:0,u:"Hukum Kanun Pahang mengambil banyak fasal daripada Hukum Kanun Melaka."},
 {j:"banyak",t:"Pilih DUA warisan Kesultanan Melayu Melaka di negeri-negeri ini.",p:["Sistem beraja","Islam sebagai agama rasmi","Konsep dewaraja","Bahasa Portugis"],b:[0,1],u:"Sistem beraja dan Islam sebagai agama rasmi diwarisi daripada Melaka."},
 {j:"pilih",t:"Karya Misa Melayu menceritakan sejarah negeri:",p:["Perak","Pahang","Terengganu","Selangor"],b:0,u:"Misa Melayu karya Raja Chulan menceritakan sejarah Perak."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah jarak antara pengasasan Perak dan Selangor?",p:["238 tahun","180 tahun","58 tahun","296 tahun"],b:0,u:"1766 tolak 1528 ialah 238 tahun."}},

{n:3, tempat:"Lombong dan Limbungan", sk:"6.2.3 · 6.2.4 Mengaplikasikan pengetahuan", lampiran:null,
 kadNama:"Bijih Timah", kadEm:"\u{26CF}\u{FE0F}", kadFakta:"Perak dan Selangor kaya dengan bijih timah. Hasil ini menjadi sumber pendapatan penting kepada sultan dan pembesar.",
 bosKadNama:"Songket Terengganu", bosKadEm:"\u{1F9F5}", bosKadFakta:"Terengganu terkenal dengan tenunan songket yang ditenun dengan benang emas atau perak.",
 soalan:[
 {j:"pilih",t:"Seorang pedagang mahu membeli bijih timah pada abad ke-18. Negeri manakah paling sesuai dikunjungi?",p:["Perak","Terengganu","Kelantan","Perlis"],b:0,u:"Perak terkenal sebagai pengeluar bijih timah."},
 {j:"pilih",t:"Seorang pengkaji mahu mengetahui sejarah Perak daripada karya tempatan. Karya manakah paling sesuai?",p:["Misa Melayu","Nagarakertagama","Tuhfat al-Nafis tentang Riau","Hikayat Merong Mahawangsa"],b:0,u:"Misa Melayu ditulis oleh Raja Chulan tentang sejarah Perak."},
 {j:"pilih",t:"Seorang penduduk Pahang melakukan kesalahan. Undang-undang manakah digunakan?",p:["Hukum Kanun Pahang","Undang-undang 99 Perak","Adat Perpatih Negeri Sembilan","Undang-undang Kedah"],b:0,u:"Pahang menggunakan Hukum Kanun Pahang."},
 {j:"banyak",t:"Dalam upacara pertabalan sultan, pilih DUA perkara yang biasanya ada.",p:["Nobat dimainkan","Alat kebesaran dipamerkan","Pertandingan bola sepak","Ucapan dalam bahasa Portugis"],b:[0,1],u:"Nobat dan alat kebesaran ialah sebahagian adat istiadat pertabalan."},
 {j:"pilih",t:"Pelancong mahu membeli kain tenunan bersulam benang emas. Negeri manakah paling terkenal dengannya?",p:["Terengganu","Selangor","Perak","Melaka"],b:0,u:"Terengganu terkenal dengan tenunan songket."},
 {j:"pilih",t:"Sultan Selangor yang pertama ditabalkan dengan restu Sultan Perak. Ini menunjukkan hubungan:",p:["Persahabatan antara negeri Melayu","Permusuhan berpanjangan","Penjajahan Perak ke atas Selangor","Tiada hubungan"],b:0,u:"Restu Sultan Perak menunjukkan hubungan baik antara negeri Melayu."},
 {j:"pilih",t:"Seorang pembesar Perak bergelar Orang Besar Empat. Ini contoh warisan dalam aspek:",p:["Sistem pemerintahan","Kesenian","Ekonomi","Persuratan"],b:0,u:"Susunan Orang Besar ialah sebahagian sistem pemerintahan Perak."},
 {j:"pilih",t:"Pahang terkenal dengan hasil galian berharga iaitu:",p:["Emas","Gaharu Champa","Sutera","Rempah Maluku"],b:0,u:"Pahang terkenal dengan emas sejak dahulu."}],
 bos:{j:"pilih",t:"Seorang murid ingin membuktikan Islam ialah agama rasmi di Terengganu sejak awal. Bukti manakah paling kukuh?",p:["Batu Bersurat Terengganu","Candi di Lembah Bujang","Angkor Wat","Kota A Famosa"],b:0,u:"Batu Bersurat Terengganu (1303) membuktikan Islam dan undang-undangnya sudah dilaksanakan di Terengganu."}},

{n:4, tempat:"Arkib Kesultanan", sk:"6.2.3 · 6.2.4 Menganalisis maklumat", lampiran:"p1",
 kadNama:"Sistem Pembesar Perak", kadEm:"\u{1F465}", kadFakta:"Perak mempunyai Orang Besar Empat, Orang Besar Lapan, Orang Besar Enam Belas dan Orang Besar Tiga Puluh Dua.",
 bosKadNama:"Kelangsungan", bosKadEm:"\u{1F517}", bosKadFakta:"Warisan Melaka tidak hilang pada 1511. Ia diteruskan oleh kesultanan Melayu lain hingga hari ini.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang diwarisi Perak daripada Melaka?",p:["Sistem pembesar","Konsep dewaraja","Bahasa Portugis","Candi Hindu"],b:0,u:"Petikan menyatakan sistem pembesar Perak berasaskan sistem pembesar Melaka."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Hukum Kanun Pahang hampir sama dengan Hukum Kanun Melaka?",p:["Ia diwarisi dari Melaka","Ia dicipta oleh Portugis","Ia disalin dari Rom","Kedua-duanya ditulis serentak"],b:0,u:"Pahang mewarisi undang-undang Melaka kerana sultannya berketurunan Melaka."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah fungsi adat istiadat diraja?",p:["Menonjolkan kedaulatan sultan","Menghiburkan pedagang asing","Mengutip cukai bijih timah","Menggantikan undang-undang"],b:0,u:"Adat istiadat seperti pertabalan dan nobat menonjolkan kedaulatan sultan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA bukti kelangsungan warisan Melaka.",p:["Sistem pembesar","Undang-undang bertulis","Penggunaan tulisan Pallava","Pemujaan dewa di candi"],b:[0,1],u:"Sistem pembesar dan undang-undang bertulis diteruskan daripada Melaka."},
 {j:"pilih",t:"Bandingkan Perak dan Selangor. Apakah persamaan ekonomi kedua-duanya?",p:["Bijih timah","Songket","Emas","Gambir"],b:0,u:"Perak dan Selangor sama-sama kaya dengan bijih timah."},
 {j:"pilih",t:"Bandingkan asal-usul sultan pertama Perak dan Selangor. Pernyataan manakah BETUL?",p:["Perak waris Melaka, Selangor keturunan Bugis","Kedua-duanya keturunan Bugis","Kedua-duanya berasal dari Siam","Perak keturunan Bugis, Selangor waris Melaka"],b:0,u:"Sultan pertama Perak ialah putera Sultan Mahmud Syah, manakala Sultan Selangor pertama berketurunan Bugis."},
 {j:"pilih",t:"Mengapakah undang-undang bertulis penting kepada sesebuah kesultanan?",p:["Keadilan lebih terjamin","Sultan boleh memerintah sesuka hati","Rakyat tidak perlu taat","Pedagang dilarang masuk"],b:0,u:"Undang-undang bertulis menjadi panduan yang jelas, jadi keadilan lebih terjamin."},
 {j:"pilih",t:"Apakah kesan kekayaan bijih timah kepada Perak dan Selangor?",p:["Ekonomi berkembang","Ekonomi merosot teruk","Pedagang menjauhi negeri itu","Sultan kehilangan pendapatan"],b:0,u:"Bijih timah menarik pedagang dan menambah pendapatan negeri."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Warisan Melaka diteruskan","Warisan Melaka lenyap pada 1511","Negeri Melayu tiada undang-undang","Sistem pembesar dicipta oleh Portugis"],b:0,u:"Sistem pembesar, undang-undang dan adat Melaka diteruskan oleh kesultanan Melayu lain."}},

{n:5, tempat:"Dewan Penilai Warisan", sk:"6.2.3 · 6.2.4 · K6.2.5 · K6.2.7 Menilai warisan", lampiran:null,
 kadNama:"Raja Berperlembagaan", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Hari ini sultan setiap negeri bersama Yang di-Pertuan Agong menjadi lambang kedaulatan dalam sistem Raja Berperlembagaan.",
 bosKadNama:"Warisan Bersama", bosKadEm:"\u{1F91D}", bosKadFakta:"Walaupun asal-usul sultan berbeza, negeri-negeri Melayu berkongsi sistem beraja, Islam dan adat yang serupa.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah warisan Melaka mudah diteruskan di Pahang dan Perak?",p:["Sultannya berketurunan Melaka","Pahang dan Perak dijajah Portugis","Kedua-duanya terletak di Sumatera","Melaka tidak mempunyai warisan"],b:0,u:"Sultan pertama Pahang dan Perak ialah putera sultan Melaka, jadi sistemnya diteruskan."},
 {j:"pilih",t:"Seorang murid berkata, \"Selangor tidak mewarisi apa-apa daripada Melaka kerana sultannya berketurunan Bugis.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia mengamalkan adat Melayu","Tepat, Selangor menolak adat Melayu","Tepat, Selangor tiada sultan","Kurang tepat, Selangor waris Portugis"],b:0,u:"Selangor tetap mengamalkan sistem beraja, Islam dan adat istiadat Melayu."},
 {j:"pilih",t:"Antara warisan berikut, yang manakah paling penting kepada keadilan rakyat?",p:["Undang-undang bertulis","Alat kebesaran diraja","Nobat","Gelaran pembesar"],b:0,u:"Undang-undang bertulis menjadi panduan keadilan kepada rakyat."},
 {j:"banyak",t:"Pilih DUA alasan warisan Kesultanan Melayu wajar dipelihara.",p:["Ia membentuk identiti negara","Ia asas sistem Raja Berperlembagaan","Ia menghalang kemajuan","Ia tidak berkaitan dengan kita"],b:[0,1],u:"Warisan Kesultanan Melayu membentuk identiti dan menjadi asas sistem Raja Berperlembagaan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kekayaan bijih timah?",p:["Membawa kekayaan, tetapi menarik persaingan","Membawa keburukan kepada negeri","Tidak memberi apa-apa faedah","Menyebabkan negeri dilupakan"],b:0,u:"Bijih timah membawa kekayaan, tetapi turut menarik persaingan dan perebutan kuasa."},
 {j:"pilih",t:"Mengapakah adat istiadat diraja masih diamalkan hari ini?",p:["Melambangkan kedaulatan","Untuk hiburan pelancong asing","Kerana diwajibkan oleh Portugis","Kerana tiada budaya lain"],b:0,u:"Adat istiadat diraja melambangkan kedaulatan dan kesinambungan institusi beraja."},
 {j:"pilih",t:"Apakah tanggungjawab utama rakyat terhadap institusi raja hari ini?",p:["Menghormati institusi raja","Mempersendakan raja di media sosial","Mengabaikan Rukun Negara","Menolak Perlembagaan Persekutuan"],b:0,u:"Rakyat bertanggungjawab menghormati institusi raja seperti prinsip Kesetiaan kepada Raja dan Negara."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada sejarah kesultanan ini?",p:["Warisan kekal jika dipelihara","Sejarah tidak memberi pengajaran","Negeri Melayu saling bermusuhan","Undang-undang tidak diperlukan"],b:0,u:"Warisan Melaka kekal kerana dipelihara oleh kesultanan Melayu lain."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Kesultanan Pahang, Perak, Terengganu dan Selangor?",p:["Meneruskan warisan Kesultanan Melayu","Tidak berkaitan dengan Melaka","Diasaskan oleh kuasa Eropah","Lenyap tanpa sebarang kesan"],b:0,u:"Keempat-empat kesultanan meneruskan sistem beraja, Islam, undang-undang dan adat Kesultanan Melayu."}},

{n:6, tempat:"Studio Warisan Negeri", sk:"K6.2.5 hingga K6.2.8 Kelangsungan warisan dan tanggungjawab", lampiran:null,
 kadNama:"Muzium Negeri", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Muzium Diraja di setiap negeri menyimpan alat kebesaran, manuskrip dan sejarah kesultanan negeri itu.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas bermula daripada fakta sejarah negeri dan diakhiri dengan tindakan yang boleh dilakukan murid.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu murid mengenali sejarah kesultanan negeri sendiri. Idea manakah paling berasas?",p:["Lawatan ke muzium diraja negeri","Menonton filem fantasi tanpa fakta","Menghafal nama sultan sahaja","Mengabaikan sejarah negeri"],b:0,u:"Lawatan ke muzium diraja memberi pengalaman melihat bukti sejarah secara langsung."},
 {j:"pilih",t:"Kelab anda mahu memperkenalkan songket Terengganu. Idea manakah paling sesuai?",p:["Bengkel menenun bersama penenun","Membuang kain songket lama","Menjual songket tiruan","Melarang pemakaian songket"],b:0,u:"Bengkel bersama penenun memperkenalkan warisan songket secara langsung."},
 {j:"banyak",t:"Pilih DUA cara murid mengamalkan tanggungjawab sebagai rakyat.",p:["Menghormati lagu negeri","Mematuhi undang-undang","Mempersendakan institusi raja","Merosakkan harta awam"],b:[0,1],u:"Menghormati simbol negeri dan mematuhi undang-undang ialah tanggungjawab rakyat."},
 {j:"pilih",t:"Seorang rakan berkata, \"Undang-undang lama seperti Undang-undang 99 Perak tidak berguna.\" Respons manakah paling rasional?",p:["Ia menunjukkan tradisi perundangan kita","Betul, ia membuang masa","Betul, kita tiada undang-undang","Hanya undang-undang Eropah penting"],b:0,u:"Undang-undang lama membuktikan masyarakat Melayu mempunyai tradisi perundangan yang tersusun."},
 {j:"pilih",t:"Bagaimanakah warisan sistem pembesar boleh dijadikan iktibar dalam persatuan sekolah?",p:["Bahagikan tugas mengikut jawatan","Biarkan presiden bekerja seorang","Tiada jawatan dilantik","Tukar AJK setiap hari"],b:0,u:"Sistem pembesar menunjukkan kepentingan pembahagian tugas yang jelas."},
 {j:"pilih",t:"Sebuah daerah di Perak mahu memperkenalkan sejarah bijih timah. Idea manakah paling rasional?",p:["Galeri sejarah di bekas lombong","Menimbus bekas lombong dengan sampah","Membina kilang di atas tapak sejarah","Membiarkan tapak terbiar"],b:0,u:"Galeri di bekas lombong memelihara sejarah dan menarik pelancong."},
 {j:"pilih",t:"Mengapakah kita wajar menghargai sumbangan warisan Kesultanan Melayu?",p:["Ia membentuk jati diri","Ia menghalang kemajuan negara","Ia berasal dari Eropah","Ia tiada kaitan dengan kita"],b:0,u:"Warisan Kesultanan Melayu membentuk jati diri dan sistem pemerintahan negara."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mendokumentasikan adat istiadat di negeri anda?",p:["Rakaman video bersama pakar adat","Mengubah adat sesuka hati","Menyebarkan maklumat palsu","Melupakan adat lama"],b:0,u:"Rakaman bersama pakar adat merekodkan warisan dengan tepat."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk memperkenalkan warisan Kesultanan Melayu di Pahang, Perak, Terengganu atau Selangor kepada remaja hari ini.",
  arahan:"Pilih sekurang-kurangnya DUA warisan (contoh: Undang-undang 99 Perak, Hukum Kanun Pahang, nobat, songket Terengganu, sistem Orang Besar Perak, bijih timah). Terangkan fakta sejarahnya, idea awak, cara melaksanakannya dan nilai yang ingin dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mencadangkan idea yang menarik dan boleh dilaksanakan, serta menonjolkan nilai seperti menghargai warisan, tanggungjawab dan jati diri."}}
];

module.exports = {
  id:"s2b7", tingkatan:2, kod:"7.0 Kesultanan Melayu Pahang, Perak, Terengganu dan Selangor",
  tajuk:"Empat Takhta",
  subtajuk:"Sejarah Ting. 2 · Bab 7 Kesultanan Melayu Pahang, Perak, Terengganu dan Selangor",
  spi:SPI["6.2"],
  ulasan:{
   1:"{n} dapat menyatakan pengasasan Kesultanan Pahang, Perak, Terengganu dan Selangor. Langkah seterusnya ialah memahami warisan Melaka di negeri-negeri ini.",
   2:"{n} memahami pengasasan dan warisan kesultanan ini. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh menggunakan pengetahuan tentang warisan kesultanan Melayu dalam pelbagai situasi. Galakkan membandingkan warisan antara negeri.",
   4:"{n} mampu menganalisis kelangsungan warisan Kesultanan Melayu Melaka di negeri-negeri ini. Seterusnya latih menilai kepentingan warisan itu.",
   5:"{n} dapat membuat penilaian yang berasas tentang warisan kesultanan Melayu. Sudah bersedia melahirkan idea untuk memperkenalkannya.",
   6:"{n} berjaya melahirkan idea yang berasas untuk memperkenalkan warisan kesultanan Melayu. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kesultanan Melayu Pahang, Perak, Terengganu dan Selangor. Cadangan: ulang hentian pertama sambil membina jadual sultan pertama setiap negeri dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira 1470", label:"Kesultanan Pahang"},
     {masa:"1528", label:"Kesultanan Perak"},
     {masa:"1708", label:"Kesultanan Terengganu"},
     {masa:"1766", label:"Kesultanan Selangor"}],
     kapsyen:"Rajah 1 · Anggaran tahun pengasasan empat kesultanan",
     alt:"Garis masa menegak: kira-kira 1470 Kesultanan Pahang; 1528 Kesultanan Perak; 1708 Kesultanan Terengganu; 1766 Kesultanan Selangor"},
   p1:petikan(1, "Warisan Melaka di negeri-negeri Melayu",
     ["Sistem pembesar di Perak, seperti Orang Besar Empat dan Orang Besar Lapan, berasaskan sistem pembesar Kesultanan Melayu Melaka. Pahang pula mempunyai Hukum Kanun Pahang yang banyak fasalnya diambil daripada Hukum Kanun Melaka.",
      "Adat istiadat diraja seperti pertabalan, nobat dan alat kebesaran diteruskan untuk menonjolkan kedaulatan sultan. Islam kekal sebagai agama rasmi negeri."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
