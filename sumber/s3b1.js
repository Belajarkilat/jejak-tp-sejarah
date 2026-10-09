/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 1 Kedatangan Kuasa Barat.
   Standard Kandungan 7.1, Standard Pembelajaran 7.1.1 hingga 7.1.4 serta K7.1.5 hingga K7.1.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dermaga Kuasa Barat", sk:"7.1.1 Kestabilan negara · 7.1.2 Faktor kedatangan", lampiran:null,
 kadNama:"Tiga G", kadEm:"\u{1F9ED}", kadFakta:"Gold, Glory dan Gospel ialah tiga tujuan kuasa Barat belayar ke Timur: mencari kekayaan, kemasyhuran dan menyebarkan agama.",
 bosKadNama:"Tahun 1511", bosKadEm:"\u{1F3F0}", bosKadFakta:"Melaka jatuh ke tangan Portugis pada tahun 1511. Inilah permulaan penguasaan kuasa Barat di negara kita.",
 soalan:[
 {j:"pilih",t:"Kuasa Barat yang pertama menawan Melaka ialah:",p:["Portugis","Belanda","British","Sepanyol"],b:0,u:"Portugis menawan Melaka pada tahun 1511."},
 {j:"pilih",t:"Melaka ditawan oleh Portugis di bawah pimpinan:",p:["Alfonso de Albuquerque","Francis Light dari Pulau Pinang","Stamford Raffles dari Singapura","Vasco da Gama dari Lisbon"],b:0,u:"Alfonso de Albuquerque mengetuai serangan Portugis pada 1511."},
 {j:"pilih",t:"Dalam konsep Tiga G, 'Gospel' bermaksud:",p:["Menyebarkan agama Kristian","Mencari kekayaan di Timur","Mencari kemasyhuran negara","Membina kota di Eropah"],b:0,u:"Gospel ialah penyebaran agama Kristian. Gold ialah kekayaan, Glory ialah kemasyhuran."},
 {j:"pilih",t:"Revolusi Perindustrian di Eropah mendorong kuasa Barat mencari:",p:["Bahan mentah serta pasaran","Tanah untuk membina candi lama","Pedagang dari benua Timur","Hamba untuk bekerja di istana"],b:0,u:"Kilang di Eropah memerlukan bahan mentah dan pasaran untuk barang yang dikeluarkan."},
 {j:"banyak",t:"Pilih DUA kuasa Barat yang pernah menguasai Melaka.",p:["Portugis","Belanda","Perancis","Jerman"],b:[0,1],u:"Portugis menguasai Melaka pada 1511 dan Belanda pada 1641. Perancis dan Jerman tidak menguasai Melaka."},
 {j:"pilih",t:"Belanda menawan Melaka daripada Portugis pada tahun 1641 dengan bantuan:",p:["Kesultanan Johor","Kesultanan Aceh dan Siam","Kerajaan Siam di utara","Kerajaan Majapahit di Jawa"],b:0,u:"Johor bekerjasama dengan Belanda menewaskan Portugis di Melaka."},
 {j:"pilih",t:"Sebelum kedatangan kuasa Barat, Melaka terkenal sebagai:",p:["Pusat perdagangan yang makmur","Kawasan terpencil di pedalaman","Pusat perlombongan emas utama","Negeri tanpa sebarang pemerintah"],b:0,u:"Kesultanan Melayu Melaka ialah pusat perdagangan antarabangsa yang makmur."},
 {j:"pilih",t:"Kejatuhan Constantinople pada 1453 menyebabkan pedagang Eropah:",p:["Mencari laluan baharu ke Timur","Menghentikan pelayaran ke Timur","Berpindah ke pelabuhan Melaka","Berdagang di Afrika Selatan sahaja"],b:0,u:"Laluan dagang darat ke Timur disekat, jadi pedagang Eropah mencari laluan laut."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan Tiga G dan maksudnya yang betul.",p:["Gold: mencari kekayaan","Glory: mencari kemasyhuran","Gospel: menyebarkan agama","Gold: menyebarkan agama","Glory: membina kilang"],b:[0,1,2],u:"Gold ialah kekayaan, Glory ialah kemasyhuran dan Gospel ialah penyebaran agama."}},

{n:2, tempat:"Bilik Kronologi Barat", sk:"7.1.2 Faktor · 7.1.3 Persaingan kuasa Barat", lampiran:"gm1",
 kadNama:"Pulau Pinang", kadEm:"\u{1F3DD}\u{FE0F}", kadFakta:"Francis Light menduduki Pulau Pinang pada tahun 1786 daripada Sultan Kedah, dengan harapan British akan membantu Kedah menentang Siam.",
 bosKadNama:"Singapura", bosKadEm:"\u{1F306}", bosKadFakta:"Stamford Raffles menubuhkan pusat perdagangan British di Singapura pada tahun 1819. Pelabuhannya kemudian menjadi sangat maju.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Portugis menawan Melaka","Belanda menawan Melaka","British menduduki Pulau Pinang","British membuka Singapura"],b:0,u:"Portugis menawan Melaka pada 1511, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa yang berlaku pada tahun 1819?",p:["British membuka Singapura","Belanda menawan Melaka","Perjanjian London ditandatangani","British menduduki Pulau Pinang"],b:0,u:"Rajah 1 menunjukkan British membuka Singapura pada 1819."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Portugis menawan Melaka","Belanda menawan Melaka","British menduduki Pulau Pinang","British membuka Singapura"],b:[0,1,2,3],u:"1511, 1641, 1786 dan 1819."},
 {j:"pilih",t:"Berdasarkan Rajah 1, apakah peristiwa terakhir yang direkodkan?",p:["Perjanjian London 1824","Belanda menawan Melaka","Portugis menawan Melaka","British menduduki Pulau Pinang"],b:0,u:"Perjanjian London 1824 ialah peristiwa terakhir dalam rajah."},
 {j:"pilih",t:"Persaingan British dan Belanda di Alam Melayu diselesaikan melalui:",p:["Perjanjian London 1824","Perjanjian Pangkor 1874","Perjanjian Bangkok 1909","Perjanjian Persekutuan 1948"],b:0,u:"Perjanjian London 1824 membahagikan pengaruh British dan Belanda di Alam Melayu."},
 {j:"pilih",t:"Francis Light menduduki Pulau Pinang kerana mahu:",p:["Mendapatkan pangkalan dagang","Mencari tanah untuk ladang getah","Menyerang kerajaan Siam di utara","Membina masjid di pulau itu"],b:0,u:"British memerlukan pangkalan untuk kapal dagangnya di Selat Melaka."},
 {j:"pilih",t:"Pulau Pinang diperoleh British daripada Sultan:",p:["Kedah","Johor","Perak","Selangor"],b:0,u:"Sultan Kedah menyerahkan Pulau Pinang kepada Francis Light pada 1786."},
 {j:"banyak",t:"Pilih DUA kuasa Barat yang bersaing di Selat Melaka pada awal abad ke-19.",p:["British","Belanda","Portugis","Jepun"],b:[0,1],u:"British dan Belanda bersaing menguasai perdagangan di Selat Melaka. Portugis sudah lemah."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah selepas Portugis menawan Melaka barulah Belanda menawannya?",p:["130 tahun","275 tahun","33 tahun","308 tahun"],b:0,u:"1641 tolak 1511 ialah 130 tahun."}},

{n:3, tempat:"Pelabuhan Strategi", sk:"7.1.3 · 7.1.4 Strategi kuasa Barat", lampiran:null,
 kadNama:"Strategi Berbeza", kadEm:"\u{265F}\u{FE0F}", kadFakta:"Portugis menggunakan kekuatan tentera, Belanda menggunakan monopoli perdagangan, manakala British menggunakan perjanjian dan campur tangan.",
 bosKadNama:"Monopoli", bosKadEm:"\u{1F4B0}", bosKadFakta:"Belanda berusaha menguasai perdagangan bijih timah dan rempah dengan membuat perjanjian bersama pemerintah tempatan.",
 soalan:[
 {j:"pilih",t:"Portugis menguasai Melaka terutamanya melalui:",p:["Kekuatan tentera","Perjanjian dagang","Perkahwinan diraja","Pembelian tanah"],b:0,u:"Portugis menawan Melaka dengan serangan tentera pada 1511."},
 {j:"pilih",t:"Strategi Belanda untuk menguasai perdagangan di Alam Melayu ialah:",p:["Monopoli perdagangan","Menawan semua pelabuhan serentak","Menutup Selat Melaka","Menukar agama pemerintah"],b:0,u:"Belanda membuat perjanjian monopoli bijih timah dengan pemerintah tempatan."},
 {j:"pilih",t:"Seorang pegawai British memujuk sultan menandatangani perjanjian supaya British boleh campur tangan. Strategi ini ialah:",p:["Campur tangan melalui perjanjian","Serangan tentera besar-besaran","Perkahwinan diraja dengan sultan","Pembelian kapal dagang baharu"],b:0,u:"British banyak menggunakan perjanjian untuk campur tangan dalam pentadbiran negeri Melayu."},
 {j:"banyak",t:"Pilih DUA strategi British menguasai negara kita.",p:["Perjanjian dengan pemerintah","Sistem penasihat dan residen","Menawan Melaka pada 1511","Menghantar sami Buddha"],b:[0,1],u:"British menggunakan perjanjian dan sistem residen atau penasihat."},
 {j:"pilih",t:"Pemerintah tempatan menyerahkan hak mentadbir kepada British dalam perjanjian. Kesannya, kuasa pemerintah:",p:["Berkurang","Bertambah","Tidak berubah","Diwarisi pedagang"],b:0,u:"Kuasa sebenar berpindah kepada residen British, manakala sultan hanya menjaga agama dan adat."},
 {j:"pilih",t:"Syarikat Hindia Timur Inggeris ditubuhkan untuk tujuan:",p:["Berdagang","Mengajar agama","Membina kota di Eropah","Melatih tentera Melayu"],b:0,u:"Syarikat Hindia Timur Inggeris ialah syarikat dagang yang kemudian mengambil alih pentadbiran jajahan."},
 {j:"pilih",t:"Pedagang Belanda mahu memastikan bijih timah Perak hanya dijual kepada mereka. Mereka menggunakan:",p:["Perjanjian monopoli dagang","Pasaran bebas terbuka","Penerokaan hutan belantara","Penyebaran agama Kristian"],b:0,u:"Monopoli membolehkan Belanda membeli bijih timah pada harga yang rendah."},
 {j:"pilih",t:"Sebuah negeri Melayu yang tidak bersatu paling mudah dikuasai kerana:",p:["Tidak bersatu menentang asing","Mempunyai tentera yang ramai","Terletak jauh daripada laut","Tidak mempunyai pemerintah"],b:0,u:"Perpecahan dalaman memudahkan kuasa luar campur tangan."}],
 bos:{j:"pilih",t:"Antara berikut, strategi manakah paling sesuai dikaitkan dengan Belanda?",p:["Monopoli perdagangan","Serangan terus ke atas Melaka pada 1511","Pembukaan Singapura pada 1819","Penubuhan Syarikat Borneo Utara"],b:0,u:"Belanda terkenal dengan perjanjian monopoli perdagangan."}},

{n:4, tempat:"Makmal Faktor", sk:"7.1.2 hingga 7.1.4 Mencerakinkan maklumat", lampiran:"p1",
 kadNama:"Faktor Dalaman", kadEm:"\u{1F50D}", kadFakta:"Selain keinginan kuasa Barat, perpecahan dan kelemahan pemerintah tempatan turut memudahkan campur tangan luar.",
 bosKadNama:"Kestabilan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Negeri yang stabil dan bersatu lebih sukar dicampuri oleh kuasa luar.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah faktor utama yang mendorong kuasa Barat ke Timur?",p:["Keperluan bahan mentah dan pasaran","Keinginan menyaksikan budaya Timur","Hubungan keluarga diraja Eropah","Pertandingan sukan antarabangsa"],b:0,u:"Petikan menyebut Revolusi Perindustrian meningkatkan keperluan bahan mentah dan pasaran."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah maksud 'Glory' bagi kuasa Barat?",p:["Mencari kemasyhuran dunia","Menyebarkan agama Kristian","Mencari kekayaan bumi","Memperbaiki kapal dagang"],b:0,u:"Petikan menyatakan Glory ialah usaha mendapatkan kemasyhuran dan kuasa."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Selat Melaka menjadi sasaran kuasa Barat?",p:["Ia laluan dagang yang penting","Ia mengandungi banyak emas murni","Ia tiada kapal yang melaluinya","Ia sudah dikuasai oleh Eropah"],b:0,u:"Selat Melaka menghubungkan India dan China, jadi sesiapa menguasainya mendapat keuntungan besar."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA faktor kedatangan kuasa Barat.",p:["Revolusi Perindustrian","Tiga G","Kekurangan kapal di Eropah","Larangan berlayar oleh gereja"],b:[0,1],u:"Revolusi Perindustrian dan Tiga G ialah faktor utama."},
 {j:"pilih",t:"Bandingkan Portugis dan British. Pernyataan manakah BETUL?",p:["Portugis lebih bergantung pada tentera","British tidak menggunakan perjanjian","Portugis menggunakan sistem residen","Kedua-duanya menggunakan monopoli sahaja"],b:0,u:"Portugis menawan Melaka dengan kekuatan tentera, manakala British banyak menggunakan perjanjian."},
 {j:"pilih",t:"Mengapakah perpecahan dalam kalangan pembesar memudahkan campur tangan luar?",p:["Pertahanan negeri menjadi lemah","Kekuatan pembesar bertambah","Pedagang semakin ramai berdagang","Hasil negeri bertambah banyak"],b:0,u:"Pembesar yang berpecah tidak dapat menentang kuasa luar secara bersatu."},
 {j:"pilih",t:"Apakah kesan penguasaan Melaka oleh Portugis kepada perdagangan Islam?",p:["Pedagang Islam beralih ke Aceh","Pedagang Islam bertambah di Melaka","Perdagangan terhenti di seluruh Asia","Pelabuhan Melaka tidak berubah"],b:0,u:"Pedagang Islam menjauhi Melaka dan berdagang di Aceh, Johor dan Brunei."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada persaingan British dan Belanda?",p:["Setiap kuasa mahu perdagangan","Mereka sentiasa bekerjasama erat","Mereka tidak berminat di Timur","Mereka menjajah negara Eropah"],b:0,u:"Kedua-duanya bersaing menguasai laluan dan hasil perdagangan di rantau ini."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Faktor ekonomi dan agama bergabung","Agama tiada kaitan dengan penjajahan","Kekayaan bukan tujuan kuasa Barat","Kuasa Barat tidak berminat di Timur"],b:0,u:"Kekayaan, kemasyhuran dan agama bergabung mendorong kedatangan kuasa Barat."}},

{n:5, tempat:"Dewan Penilai Kedaulatan", sk:"7.1.4 · K7.1.5 · K7.1.7 Menilai kedatangan kuasa Barat", lampiran:null,
 kadNama:"Berwaspada", kadEm:"\u{1F6A8}", kadFakta:"Kisah kedatangan kuasa Barat mengingatkan kita supaya berwaspada terhadap unsur luar yang boleh menggugat kedaulatan negara.",
 bosKadNama:"Sumber Kekayaan", bosKadEm:"\u{1F48E}", bosKadFakta:"Bijih timah, rempah dan hasil hutan negara kita menjadi sasaran kuasa Barat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah kekayaan negara menarik minat kuasa Barat?",p:["Bahan mentah untuk industri","Ia tidak berharga langsung","Ia mudah ditiru di Eropah","Ia terletak di benua Eropah"],b:0,u:"Bijih timah, rempah dan hasil bumi diperlukan untuk industri dan perdagangan Barat."},
 {j:"pilih",t:"Seorang murid berkata, \"Kuasa Barat datang kerana mereka mahu membantu kita.\" Penilaian manakah paling tepat?",p:["Kurang tepat, mereka mahu kuasa","Tepat, mereka tidak mahu apa-apa","Tepat, mereka bersikap dermawan","Kurang tepat, mereka tidak datang"],b:0,u:"Tujuan utama mereka ialah kekayaan dan kuasa, bukan semata-mata bantuan."},
 {j:"pilih",t:"Antara berikut, tindakan manakah menunjukkan sikap berwaspada terhadap unsur luar?",p:["Menyemak perjanjian dengan teliti","Menandatangani perjanjian tanpa membaca","Menerima setiap tawaran","Mengabaikan nasihat pembesar"],b:0,u:"Perjanjian yang tidak diteliti boleh menggugat kedaulatan negara."},
 {j:"banyak",t:"Pilih DUA kepentingan bekerjasama dalam menjamin kemakmuran negara.",p:["Kekuatan menghadapi cabaran luar","Sumber negara dimanfaatkan bersama","Perpecahan menjadi lebih kuat","Pemerintah berhenti mentadbir"],b:[0,1],u:"Kerjasama menguatkan negara dan membolehkan sumber dimanfaatkan secara adil."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kedatangan British?",p:["Maju, tetapi kuasa tempatan hilang","Membawa keburukan semata-mata","Tidak memberi kesan kepada negeri","Membantu pemerintah sepenuhnya"],b:0,u:"Kemajuan ekonomi dan prasarana wujud, tetapi kuasa pemerintah tempatan berkurang."},
 {j:"pilih",t:"Mengapakah berfikiran strategik penting bagi pemimpin negara?",p:["Dapat meramal ancaman negara","Dapat mengelak tanggungjawab lama","Dapat menambah cukai rakyat","Dapat memutuskan hubungan dagang"],b:0,u:"Pemikiran strategik membantu pemimpin merancang untuk melindungi kepentingan negara."},
 {j:"pilih",t:"Antara berikut, iktibar manakah paling penting daripada kejatuhan Melaka?",p:["Perpaduan perlu dijaga","Senjata tidak perlu dikuatkan","Perdagangan tidak penting","Pemimpin tidak perlu berbincang"],b:0,u:"Perpecahan dalaman membuka ruang kepada kuasa asing."},
 {j:"pilih",t:"Mengapakah sumber kekayaan negara perlu dimanfaatkan dengan bijak?",p:["Kemakmuran dinikmati oleh rakyat","Supaya dijual dengan harga murah","Supaya diserahkan kepada asing","Supaya dilupakan oleh rakyat"],b:0,u:"Pengurusan sumber yang bijak memberi manfaat kepada rakyat dan negara."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kedatangan kuasa Barat?",p:["Berpunca daripada kepentingan ekonomi","Berpunca daripada hubungan persahabatan","Berpunca daripada kemarau panjang","Berpunca daripada permintaan rakyat"],b:0,u:"Kepentingan ekonomi dan kuasa ialah pendorong utama kedatangan kuasa Barat."}},

{n:6, tempat:"Studio Kedaulatan", sk:"K7.1.5 hingga K7.1.8 Memanfaatkan kekayaan, berwaspada dan berfikiran strategik", lampiran:null,
 kadNama:"Penjajahan Moden", kadEm:"\u{1F310}", kadFakta:"Ancaman kedaulatan hari ini boleh datang melalui ekonomi, teknologi dan maklumat palsu, bukan sahaja melalui peperangan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan pengajaran sejarah untuk menyelesaikan cabaran hari ini.",
 soalan:[
 {j:"pilih",t:"Sebuah syarikat asing mahu memiliki sumber negara. Pengajaran sejarah manakah paling sesuai?",p:["Teliti terma perjanjian itu","Terima tawaran dengan segera","Jual sumber negara kepada asing","Serahkan kepada pihak asing"],b:0,u:"Perjanjian yang diteliti melindungi kepentingan dan kedaulatan negara."},
 {j:"pilih",t:"Berita palsu tersebar tentang negara anda. Sikap berwaspada yang paling tepat ialah:",p:["Menyemak sumber dahulu","Menyebarkannya dengan segera","Mempercayai setiap berita","Mengabaikan maklumat terbuka"],b:0,u:"Menyemak sumber mengelakkan perpecahan akibat maklumat palsu."},
 {j:"banyak",t:"Pilih DUA cara mempertahankan kedaulatan negara hari ini.",p:["Menguatkan perpaduan rakyat","Menguasai ilmu dan teknologi","Menyerahkan sumber kepada pihak asing","Memutuskan semua hubungan luar"],b:[0,1],u:"Perpaduan dan penguasaan ilmu menguatkan negara."},
 {j:"pilih",t:"Kelas anda mahu mengurus dana projek dengan bijak. Iktibar sejarah manakah paling sesuai?",p:["Rancang dan urus sumber adil","Habiskan wang dengan cepat","Serahkan kepada kawan rapat","Abaikan perancangan projek"],b:0,u:"Pengurusan sumber yang bijak memberi manfaat kepada semua ahli."},
 {j:"pilih",t:"Idea manakah paling berasas untuk menggalakkan penggunaan produk tempatan?",p:["Kempen cintai produk tempatan","Melarang semua barang asing","Menjual produk tempatan terlalu mahal","Menghentikan pengeluaran tempatan"],b:0,u:"Menyokong produk tempatan memanfaatkan kekayaan negara dan menguatkan ekonomi."},
 {j:"pilih",t:"Seorang rakan berkata, \"Sejarah penjajahan sudah lama, tidak perlu dipelajari.\" Respons manakah paling rasional?",p:["Ia memberi iktibar kedaulatan","Betul, ia sudah tidak relevan","Betul, ia sangat membosankan","Sejarah luar negara lebih penting"],b:0,u:"Sejarah mengajar kita bagaimana kedaulatan boleh tergugat dan cara mempertahankannya."},
 {j:"pilih",t:"Bagaimanakah murid boleh berfikiran strategik dalam merancang masa depan?",p:["Menetapkan matlamat jelas","Menunggu nasib menentukan","Meniru rakan sepenuhnya","Mengelak membuat rancangan"],b:0,u:"Pemikiran strategik bermula dengan matlamat yang jelas dan langkah yang teratur."},
 {j:"pilih",t:"Mengapakah perpaduan penting untuk mengekalkan kedaulatan?",p:["Negara sukar dipecahbelahkan","Rakyat berpisah mengikut kaum","Pemimpin tidak diperlukan lagi","Hubungan luar terputus terus"],b:0,u:"Rakyat yang bersatu sukar dipengaruhi atau dipecahbelahkan oleh pihak luar."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mengekalkan kedaulatan negara daripada ancaman luar pada masa kini.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada kedatangan kuasa Barat (contoh: perpecahan memudahkan campur tangan, perjanjian perlu diteliti, kekayaan negara perlu dimanfaatkan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta sejarah yang tepat (contohnya Portugis menawan Melaka 1511, British menggunakan perjanjian), mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti perpaduan, berwaspada dan berfikiran strategik."}}
];

module.exports = {
  id:"s3b1", tingkatan:3, kod:"1.0 Kedatangan Kuasa Barat",
  tajuk:"Layar Penakluk",
  subtajuk:"Sejarah Ting. 3 · Bab 1 Kedatangan Kuasa Barat",
  spi:SPI["7.1"],
  ulasan:{
   1:"{n} dapat menyatakan secara ringkas kedatangan kuasa Barat ke negara kita. Langkah seterusnya ialah memahami faktor kedatangannya.",
   2:"{n} memahami kedatangan kuasa Barat dan dapat menyusun kronologinya. Perlu lebih latihan menggunakan pengetahuan ini dalam situasi baharu sebelum bergerak ke TP3.",
   3:"{n} boleh membina kronologi dan menerangkan strategi kuasa Barat dalam pelbagai situasi. Galakkan mencerakinkan faktor kedatangan secara sistematik.",
   4:"{n} mampu mencerakinkan maklumat tentang kedatangan kuasa Barat secara sistematik. Seterusnya latih menilai kesannya terhadap kedaulatan negara.",
   5:"{n} dapat membuat penilaian yang berasas tentang kedatangan kuasa Barat. Sudah bersedia menjana idea untuk mengekalkan kedaulatan negara.",
   6:"{n} berjaya menjana idea yang berasas untuk mengekalkan kedaulatan negara daripada ancaman luar. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kedatangan Kuasa Barat. Cadangan: ulang hentian pertama sambil membina garis masa kedatangan kuasa Barat dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1511", label:"Portugis menawan Melaka"},
     {masa:"1641", label:"Belanda menawan Melaka"},
     {masa:"1786", label:"British menduduki Pulau Pinang"},
     {masa:"1819", label:"British membuka Singapura"},
     {masa:"1824", label:"Perjanjian London"}],
     kapsyen:"Rajah 1 · Kedatangan kuasa Barat ke negara kita",
     alt:"Garis masa menegak: 1511 Portugis menawan Melaka; 1641 Belanda menawan Melaka; 1786 British menduduki Pulau Pinang; 1819 British membuka Singapura; 1824 Perjanjian London"},
   p1:petikan(1, "Mengapa kuasa Barat datang ke Timur",
     ["Revolusi Perindustrian di Eropah meningkatkan keperluan bahan mentah dan pasaran baharu. Kuasa Barat mencari kawasan yang kaya dengan hasil bumi, dan Selat Melaka menjadi sasaran kerana ia laluan dagang antara India dan China.",
      "Kedatangan mereka juga didorong oleh Tiga G: Gold atau kekayaan, Glory atau kemasyhuran, dan Gospel atau penyebaran agama Kristian."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
