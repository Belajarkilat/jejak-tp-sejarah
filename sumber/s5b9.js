/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 9 Asas Pembinaan Dasar Luar Malaysia.
   Standard Kandungan 15.1, Standard Pembelajaran 15.1.1 hingga 15.1.4 serta K15.1.5 hingga K15.1.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Wisma Putra", sk:"15.1.1 Latar belakang dasar luar · 15.1.2 Asas penggubalan · 15.1.3 PBB · 15.1.4 Komanwel", lampiran:null,
 kadNama:"Dasar Luar", kadEm:"\u{1F310}", kadFakta:"Dasar luar ialah garis panduan yang mengatur hubungan sesebuah negara dengan negara lain bagi melindungi kedaulatan dan kepentingannya.",
 bosKadNama:"Anggota ke-82 PBB", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Tanah Melayu menjadi anggota ke-82 Pertubuhan Bangsa-Bangsa Bersatu pada 17 September 1957, tidak lama selepas merdeka.",
 soalan:[
 {j:"pilih",t:"Dasar luar sesebuah negara ialah:",p:["Garis panduan hubungan dengan negara lain","Peraturan jual beli barangan dalam negeri sendiri","Undang-undang bagi pilihan raya peringkat negeri","Pelan pembangunan kawasan luar bandar di negara"],b:0,u:"Dasar luar mengatur hubungan sesebuah negara dengan negara lain."},
 {j:"pilih",t:"Tanah Melayu menjadi anggota Pertubuhan Bangsa-Bangsa Bersatu (PBB) pada tahun:",p:["1957","1948","1963","1971"],b:0,u:"Tanah Melayu menyertai PBB pada 17 September 1957."},
 {j:"pilih",t:"Menteri Luar Negeri pertama Tanah Melayu merdeka ialah:",p:["Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn","Tun Dr Ismail"],b:0,u:"Tunku Abdul Rahman memegang jawatan Perdana Menteri dan Menteri Luar Negeri yang pertama."},
 {j:"pilih",t:"Pertubuhan Bangsa-Bangsa Bersatu ditubuhkan untuk:",p:["Menjaga keamanan dan keselamatan dunia","Mengawal perdagangan lada hitam di seluruh dunia","Menyatukan negara-negara di bawah pemerintahan seorang raja","Menyebarkan satu bahasa rasmi kepada negara-negara"],b:0,u:"PBB ditubuhkan untuk menjaga keamanan dan keselamatan dunia."},
 {j:"banyak",t:"Pilih DUA asas penggubalan dasar luar Malaysia.",p:["Menjaga kedaulatan negara","Mengutamakan kepentingan negara","Menyokong penjajahan ke atas negara lain","Mengikut arahan daripada kuasa asing"],b:[0,1],u:"Dasar luar digubal berasaskan kedaulatan dan kepentingan negara."},
 {j:"pilih",t:"Komanwel dianggotai kebanyakannya oleh bekas jajahan:",p:["British","Belanda","Portugis","Jepun"],b:0,u:"Kebanyakan anggota Komanwel ialah bekas jajahan British."},
 {j:"pilih",t:"Pada awal kemerdekaan, dasar luar di bawah Tunku cenderung kepada negara:",p:["Barat dan Komanwel","Blok komunis di Eropah Timur","Negara-negara di benua Afrika","Negara-negara di Amerika Selatan"],b:0,u:"Tunku mengutamakan hubungan dengan Barat dan Komanwel kerana ancaman komunis."},
 {j:"pilih",t:"Kementerian yang melaksanakan dasar luar negara berpusat di:",p:["Wisma Putra","Dewan Rakyat","Istana Negara","Bank Negara"],b:0,u:"Wisma Putra ialah pusat Kementerian Luar Negeri."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan negara dan pertubuhan yang betul.",p:["Tanah Melayu: PBB 1957","Tanah Melayu: Komanwel 1957","Malaysia: PBB selepas 1963","Tanah Melayu: NATO 1957","Tanah Melayu: Kesatuan Eropah 1957"],b:[0,1,2],u:"Tanah Melayu menyertai PBB dan Komanwel pada 1957, dan Malaysia terus menjadi anggota PBB selepas 1963."}},

{n:2, tempat:"Bilik Kronologi Hubungan Luar", sk:"15.1.2 · 15.1.3 · 15.1.4 Membuat kronologi asas dasar luar", lampiran:"gm1",
 kadNama:"ZOPFAN", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Deklarasi Kuala Lumpur 1971 menggariskan Zon Aman, Bebas dan Berkecuali (ZOPFAN) bagi Asia Tenggara.",
 bosKadNama:"Hubungan dengan China", bosKadEm:"\u{1F91D}", bosKadFakta:"Tun Abdul Razak melawat Beijing dan hubungan diplomatik Malaysia dengan China dimeterai pada 1974.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Tanah Melayu menjadi anggota PBB","Deklarasi ZOPFAN dikeluarkan","Hubungan diplomatik dengan China","Persidangan Komanwel di Langkawi"],b:0,u:"Penyertaan PBB pada 1957 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah hubungan diplomatik Malaysia dengan China dijalinkan?",p:["1974","1971","1957","1989"],b:0,u:"Rajah 1 menunjukkan hubungan diplomatik dengan China pada 1974."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Tanah Melayu menjadi anggota PBB","Deklarasi ZOPFAN dikeluarkan","Hubungan diplomatik dengan China","Persidangan Komanwel di Langkawi"],b:[0,1,2,3],u:"1957, 1971, 1974 dan 1989."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Deklarasi ZOPFAN dengan Persidangan Komanwel di Langkawi?",p:["18 tahun","15 tahun","22 tahun","3 tahun"],b:0,u:"1989 tolak 1971 ialah 18 tahun."},
 {j:"pilih",t:"ZOPFAN ialah singkatan bagi:",p:["Zon Aman, Bebas dan Berkecuali","Zon Ekonomi Bebas dan Bersatu","Zon Pertahanan Bersama Asia","Zon Perdagangan Bebas Antarabangsa"],b:0,u:"ZOPFAN bermaksud Zon Aman, Bebas dan Berkecuali."},
 {j:"pilih",t:"Perdana Menteri Malaysia ketika hubungan diplomatik dengan China dijalinkan pada 1974 ialah:",p:["Tun Abdul Razak","Tunku Abdul Rahman","Tun Hussein Onn","Tun Dr Mahathir"],b:0,u:"Tun Abdul Razak menjadi Perdana Menteri pada 1970 hingga 1976."},
 {j:"pilih",t:"Persidangan Ketua-Ketua Kerajaan Komanwel 1989 diadakan di:",p:["Langkawi","Pulau Pinang","Kota Kinabalu","Melaka"],b:0,u:"Persidangan Komanwel 1989 diadakan di Langkawi."},
 {j:"banyak",t:"Berdasarkan Rajah 1, pilih DUA peristiwa yang berlaku sebelum tahun 1980.",p:["Deklarasi ZOPFAN dikeluarkan","Hubungan diplomatik dengan China","Persidangan Komanwel di Langkawi","Pelancaran Wawasan 2020"],b:[0,1],u:"ZOPFAN 1971 dan hubungan dengan China 1974 berlaku sebelum 1980."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penyertaan PBB dengan hubungan diplomatik dengan China?",p:["17 tahun","14 tahun","32 tahun","7 tahun"],b:0,u:"1974 tolak 1957 ialah 17 tahun."}},

{n:3, tempat:"Gelanggang Diplomasi", sk:"15.1.2 · 15.1.3 · 15.1.4 Mengaplikasi asas dasar luar dan penyertaan antarabangsa", lampiran:null,
 kadNama:"Prinsip Dasar Luar", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Malaysia menghormati kedaulatan negara lain, tidak campur tangan dalam urusan dalamannya dan menyelesaikan pertikaian secara aman.",
 bosKadNama:"Sukan Komanwel 1998", bosKadEm:"\u{1F3C5}", bosKadFakta:"Kuala Lumpur menjadi tuan rumah Sukan Komanwel pada 1998, bukti penglibatan aktif Malaysia dalam Komanwel.",
 soalan:[
 {j:"pilih",t:"Malaysia tidak memilih pemimpin negara jiran. Prinsip dasar luar yang diamalkan ialah:",p:["Tidak campur tangan dalam urusan dalaman negara lain","Mencampuri urusan dalaman negara jiran dengan bebas","Memihak kepada satu pihak dalam setiap pertikaian","Mengawal pentadbiran negara kecil di sekitarnya"],b:0,u:"Malaysia tidak campur tangan dalam urusan dalaman negara lain."},
 {j:"pilih",t:"Malaysia berunding untuk menyelesaikan pertikaian sempadan dengan negara jiran. Prinsip yang diamalkan ialah:",p:["Penyelesaian pertikaian secara aman","Penyelesaian pertikaian dengan kekerasan senjata","Penolakan semua rundingan peringkat antarabangsa","Pengabaian pertikaian sehingga reda dengan sendirinya"],b:0,u:"Malaysia mengutamakan penyelesaian secara aman."},
 {j:"pilih",t:"Pasukan Tanah Melayu dihantar ke Kongo pada 1960 di bawah PBB. Tindakan ini bertujuan:",p:["Membantu menjaga keamanan dunia","Menjajah wilayah-wilayah di benua Afrika","Menguasai lombong bijih yang terdapat di Kongo","Menyebarkan fahaman komunis ke benua Afrika"],b:0,u:"Pasukan dihantar membantu misi pengaman PBB."},
 {j:"pilih",t:"Kuala Lumpur menjadi tuan rumah Sukan Komanwel 1998. Peristiwa ini menunjukkan:",p:["Penglibatan aktif Malaysia dalam Komanwel","Penarikan diri Malaysia daripada Komanwel","Penentangan Malaysia terhadap Komanwel","Pengabaian Malaysia terhadap hubungan antarabangsa"],b:0,u:"Menjadi tuan rumah ialah bukti penglibatan aktif dalam Komanwel."},
 {j:"banyak",t:"Pilih DUA contoh Malaysia mengamalkan dasar luar yang menghormati kedaulatan negara lain.",p:["Tidak mencampuri hal ehwal dalaman negara jiran","Berunding apabila timbul pertikaian","Menghantar tentera menawan negara jiran","Mengancam negara kecil dengan sekatan"],b:[0,1],u:"Tidak campur tangan dan berunding menghormati kedaulatan negara lain."},
 {j:"pilih",t:"Tun Abdul Razak menjalin hubungan dengan China pada 1974. Pendekatan ini menunjukkan dasar luar yang:",p:["Terbuka kepada negara berlainan fahaman","Mesra dengan negara Barat dan mengelak negara lain","Menolak hubungan dengan negara-negara di Asia","Menyokong usaha penjajahan semula di Asia"],b:0,u:"Malaysia menjalin hubungan tanpa mengira ideologi demi kepentingan negara."},
 {j:"pilih",t:"Wakil Malaysia menyuarakan pendirian negara tentang isu dunia dalam Perhimpunan Agung PBB. Tindakan ini ialah:",p:["Penyertaan aktif dalam PBB","Penarikan diri daripada PBB","Pengabaian persidangan antarabangsa","Penyerahan kuasa kepada negara lain"],b:0,u:"Menyuarakan pendirian di Perhimpunan Agung PBB ialah penyertaan aktif."},
 {j:"pilih",t:"Antara tugas Wisma Putra ialah:",p:["Melaksanakan dasar luar dan menjaga hubungan diplomatik","Menggubal undang-undang jenayah untuk negara ini","Mengendalikan pilihan raya umum di seluruh negara","Mengurus cukai pendapatan yang dibayar oleh rakyat"],b:0,u:"Wisma Putra melaksanakan dasar luar dan menjaga hubungan diplomatik."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah contoh penyertaan Malaysia dalam Komanwel?",p:["Menjadi tuan rumah Sukan Komanwel 1998","Menubuhkan pertubuhan serantau pada tahun 1967","Menyertai misi pengaman antarabangsa di Kongo","Menandatangani deklarasi zon aman pada 1971"],b:0,u:"Sukan Komanwel 1998 diadakan di Kuala Lumpur."}},

{n:4, tempat:"Arkib Dasar Luar", sk:"15.1.2 · 15.1.3 · 15.1.4 Menganalisis asas pembinaan dasar luar", lampiran:"p1",
 kadNama:"Berkecuali", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Dasar berkecuali bermaksud tidak memihak kepada mana-mana blok kuasa besar sambil terus berhubung dengan pelbagai negara.",
 bosKadNama:"Kepentingan Negara", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Setiap dasar luar digubal untuk melindungi kedaulatan dan kepentingan negara dalam keadaan dunia yang berubah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Tunku mengutamakan hubungan dengan negara Barat dan Komanwel?",p:["Kerana ancaman komunis pada masa itu","Kerana Barat meminta Tanah Melayu terus dijajah","Kerana Komanwel melarang hubungan dengan negara lain","Kerana Tunku tidak mahu negara mencapai kemerdekaan"],b:0,u:"Petikan menyatakan ancaman komunis."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah pendekatan Tun Abdul Razak pada tahun 1970-an?",p:["Berkecuali dan berhubung dengan pelbagai negara","Memutuskan hubungan dengan negara-negara lain","Menyekat hubungan dengan negara-negara Asia","Memihak kepada satu blok kuasa besar dunia"],b:0,u:"Tun Abdul Razak mengamalkan pendekatan berkecuali."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan dasar luar Malaysia digubal?",p:["Melindungi kedaulatan dan kepentingan negara","Menyerahkan kedaulatan negara kepada pertubuhan dunia","Mengasingkan negara daripada hubungan dunia luar","Menyebarkan fahaman politik daripada satu negara"],b:0,u:"Dasar luar digubal untuk melindungi kedaulatan dan kepentingan negara."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA manfaat penyertaan dalam PBB dan Komanwel.",p:["Suara di peringkat antarabangsa","Kerjasama dalam bidang keselamatan dan ekonomi","Kebergantungan penuh kepada negara asing","Pengasingan daripada negara jiran"],b:[0,1],u:"Petikan menyebut suara antarabangsa dan kerjasama pelbagai bidang."},
 {j:"pilih",t:"Bandingkan pendekatan Tunku dengan Tun Abdul Razak. Apakah perbezaannya?",p:["Tunku cenderung kepada Barat, Tun Abdul Razak lebih berkecuali","Tunku mengamalkan sikap berkecuali, Tun Abdul Razak cenderung kepada Barat","Kedua-duanya memutuskan hubungan dengan negara-negara dunia","Kedua-duanya tidak mempunyai sebarang dasar luar langsung"],b:0,u:"Pendekatan berubah daripada cenderung kepada Barat kepada berkecuali."},
 {j:"pilih",t:"Mengapakah dasar luar sesebuah negara boleh berubah mengikut keadaan dunia?",p:["Kepentingan negara perlu dilindungi apabila keadaan berubah","Pemimpin negara tidak mempunyai matlamat yang tertentu","Negara-negara lain menentukan setiap dasar luar kita","Dasar luar tidak mempunyai sebarang asas penggubalan"],b:0,u:"Dasar luar disesuaikan untuk melindungi kepentingan negara."},
 {j:"pilih",t:"Apakah kesan penyertaan Malaysia dalam PBB terhadap kedudukan negara?",p:["Malaysia diiktiraf dan mempunyai suara dalam isu dunia","Malaysia kehilangan kedaulatan negara secara keseluruhan","Malaysia terpisah daripada negara-negara di rantau ini","Malaysia menjadi pemerhati yang senyap dalam setiap sidang"],b:0,u:"Penyertaan PBB memberi pengiktirafan dan suara antarabangsa."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada perubahan pendekatan dasar luar sejak 1957?",p:["Dasar luar dilaras mengikut keadaan dan kepentingan negara","Dasar luar kekal tetap walaupun keadaan sudah berubah","Dasar luar ditentukan oleh bekas penjajah negara","Dasar luar tidak berkait dengan keselamatan negara"],b:0,u:"Dasar luar dilaras mengikut keadaan dan kepentingan negara."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Dasar luar berasaskan kepentingan negara dan boleh disesuaikan","Dasar luar ditetapkan oleh kuasa besar di dunia","Dasar luar tidak berubah daripada tahun kemerdekaan","Dasar luar tidak berkait langsung dengan kedaulatan"],b:0,u:"Dasar luar berasaskan kepentingan negara dan disesuaikan mengikut keadaan."}},

{n:5, tempat:"Dewan Penilai Diplomasi", sk:"15.1.4 · K15.1.5 · K15.1.6 · K15.1.7 · K15.1.8 Menilai kepentingan dasar luar", lampiran:null,
 kadNama:"Hubungan Harmoni", kadEm:"\u{1F91D}", kadFakta:"Hubungan harmoni dengan negara luar menjamin keamanan, perdagangan dan kerjasama yang saling menguntungkan.",
 bosKadNama:"Menghormati Dasar Negara Lain", bosKadEm:"\u{1F30D}", bosKadFakta:"Menghormati dasar luar negara lain mengelakkan salah faham dan menjaga keamanan sejagat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah memahami dasar luar negara penting kepada rakyat?",p:["Rakyat dapat menyokong dan menghargai kedudukan negara","Rakyat tidak perlu mengambil tahu perkara itu langsung","Rakyat dapat menolak setiap dasar yang dibuat kerajaan","Rakyat boleh bertindak mengikut kehendak diri sendiri"],b:0,u:"Pemahaman membolehkan rakyat menyokong dan menghargai kedudukan negara."},
 {j:"pilih",t:"Seorang murid berkata, \"Dasar luar hanya urusan menteri.\" Penilaian manakah paling tepat?",p:["Kurang tepat, kesannya dirasai oleh rakyat","Tepat, rakyat tidak terkesan dengan dasar itu","Tepat, rakyat tidak dibenarkan bertanya soalan","Kurang tepat, negara tidak mempunyai dasar luar"],b:0,u:"Dasar luar mempengaruhi keselamatan dan ekonomi seluruh rakyat."},
 {j:"pilih",t:"Mengapakah kebijaksanaan penting dalam menguruskan dasar luar?",p:["Menjaga kepentingan negara tanpa menimbulkan konflik","Mengelakkan setiap perundingan dengan negara lain","Memaksa negara jiran menerima pendirian kita","Menyembunyikan dasar luar daripada rakyat sendiri"],b:0,u:"Kebijaksanaan menjaga kepentingan negara tanpa konflik."},
 {j:"banyak",t:"Pilih DUA kepentingan hubungan harmoni dengan negara luar.",p:["Keamanan lebih terjamin","Perdagangan dan kerjasama berkembang","Pertikaian mudah menjadi peperangan","Negara terpinggir daripada dunia"],b:[0,1],u:"Hubungan harmoni menjamin keamanan dan menggalakkan perdagangan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang penyertaan Malaysia dalam PBB dan Komanwel?",p:["Memberi manfaat tetapi perlu disertai kebijaksanaan","Tidak memberi sebarang manfaat kepada negara ini","Menyelesaikan setiap masalah negara dengan segera","Menyebabkan Malaysia kehilangan kedaulatan negara"],b:0,u:"Penyertaan memberi manfaat tetapi memerlukan kebijaksanaan."},
 {j:"pilih",t:"Mengapakah menghormati dasar luar sesebuah negara penting?",p:["Mengelakkan salah faham dan menjaga keamanan","Membolehkan kita mengubah dasar negara itu pada bila-bila masa","Menjadikan negara-negara lain mengikut dasar kita","Menghalang rundingan yang diadakan antara negara"],b:0,u:"Menghormati dasar negara lain mengelakkan salah faham dan menjaga keamanan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada sejarah dasar luar Malaysia?",p:["Dasar luar perlu bijak dan berpandukan kepentingan negara","Dasar luar tidak perlu dirancang dengan rapi","Dasar luar sepatutnya meniru dasar negara lain","Dasar luar berguna ketika berlaku peperangan sahaja"],b:0,u:"Dasar luar perlu bijak dan berpandukan kepentingan negara."},
 {j:"pilih",t:"Mengapakah hubungan baik dengan negara luar menyumbang kepada kedaulatan negara?",p:["Negara mendapat sokongan dan pengiktirafan antarabangsa","Negara terpaksa tunduk kepada kehendak kuasa besar","Negara tidak lagi mempunyai kerajaan yang tersendiri","Negara terputus hubungan daripada rakan serantau"],b:0,u:"Hubungan baik memberi sokongan dan pengiktirafan antarabangsa."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang dasar luar Malaysia?",p:["Perlu menjaga kedaulatan dan hubungan baik antara negara","Tidak lagi diperlukan apabila negara sudah merdeka","Sudah lengkap dan tidak perlu disemak semula lagi","Penting ketika negara sedang berdepan dengan peperangan"],b:0,u:"Dasar luar perlu menjaga kedaulatan dan hubungan baik antara negara."}},

{n:6, tempat:"Studio Diplomasi", sk:"K15.1.5 hingga K15.1.8 Idea dasar luar dalam menjaga kedaulatan negara", lampiran:null,
 kadNama:"Duta Muda", kadEm:"\u{1F393}", kadFakta:"Murid boleh menjadi duta kecil negara dengan menghormati budaya lain, bersopan santun dan mengenali sejarah dasar luar.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta dasar luar yang tepat untuk menjaga kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Sekolah anda menerima pelajar pertukaran dari luar negara. Idea manakah paling berasas untuk menyambut mereka?",p:["Mengadakan sambutan mesra dan memperkenalkan budaya tempatan","Menjauhkan mereka daripada murid-murid tempatan di sekolah","Melarang mereka bertanya tentang negara dan budaya kita","Mengejek cara hidup dan bahasa yang mereka gunakan"],b:0,u:"Sambutan mesra mencerminkan sikap menghormati negara lain."},
 {j:"pilih",t:"Dua negara jiran berselisih tentang sempadan. Iktibar dasar luar Malaysia yang sesuai ialah:",p:["Berunding dan menyelesaikan pertikaian secara aman","Menghantar tentera untuk menduduki kawasan itu","Memutuskan hubungan dengan kedua-dua negara jiran","Mengabaikan pertikaian sehingga menjadi lebih besar"],b:0,u:"Malaysia mengutamakan penyelesaian secara aman."},
 {j:"banyak",t:"Pilih DUA cara murid menjadi duta kecil negara.",p:["Menghormati budaya dan agama orang lain","Bersopan santun terhadap pelawat asing","Mengejek pelawat yang berlainan bahasa","Menyebarkan berita palsu tentang negara lain"],b:[0,1],u:"Menghormati budaya dan bersopan santun membawa nama baik negara."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memperkenalkan dasar luar Malaysia kepada rakan sebaya?",p:["Pameran kronologi dan kuiz PBB dan Komanwel","Menyalin teks buku tanpa memahami isi kandungannya","Mengelak topik dasar luar daripada perbincangan kelas","Menghafal tarikh peristiwa dan mengabaikan sebabnya"],b:0,u:"Pameran dan kuiz memudahkan pemahaman."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kita tidak perlu tahu dasar luar kerana kita bukan diplomat.\" Respons manakah paling rasional?",p:["Kita perlu memahaminya kerana kesannya dirasai bersama","Betul, diplomat sahaja yang perlu mengetahuinya","Betul, kerana sejarah dasar luar kurang penting","Pemimpin negara yang dibenarkan mempelajarinya"],b:0,u:"Dasar luar memberi kesan kepada seluruh rakyat."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan penghargaan terhadap hubungan baik dengan negara lain?",p:["Bersahabat dengan murid asing dan belajar budaya mereka","Memulaukan budaya yang berbeza daripada budaya kita","Menyindir pelawat yang datang dari negara lain","Menolak ilmu yang datang dari luar negara kita"],b:0,u:"Bersahabat dan mempelajari budaya lain menghargai hubungan baik."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memupuk kefahaman antarabangsa di sekolah?",p:["Persidangan Mini PBB dengan murid sebagai wakil negara","Larangan membincangkan isu-isu yang berlaku di dunia","Pengasingan murid mengikut negeri asal masing-masing","Pertandingan yang menyingkirkan murid-murid daripada negara asing"],b:0,u:"Persidangan Mini PBB melatih kefahaman antarabangsa."},
 {j:"pilih",t:"Mengapakah menjaga hubungan baik dengan negara luar menjadi tanggungjawab bersama?",p:["Imej negara dibawa oleh semua rakyat","Anggota tentera yang membawa imej negara kita","Para duta yang membawa imej negara kita","Tiada seorang pun membawa imej negara kita"],b:0,u:"Setiap rakyat membawa imej negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang dasar luar Malaysia dalam menjaga kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA asas atau prinsip dasar luar (contoh: menghormati kedaulatan negara lain, tidak campur tangan, penyelesaian secara aman, penyertaan dalam PBB dan Komanwel). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang asas dasar luar, PBB dan Komanwel, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kebijaksanaan, menghormati negara lain dan menjaga kedaulatan."}}
];

module.exports = {
  id:"s5b9", tingkatan:5, kod:"9.0 Asas Pembinaan Dasar Luar Malaysia",
  tajuk:"Pintu Dunia",
  subtajuk:"Sejarah Ting. 5 · Bab 9 Asas Pembinaan Dasar Luar Malaysia",
  spi:SPI["15.1"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang asas pembinaan dasar luar Malaysia. Langkah seterusnya ialah menjelaskannya dengan contoh.",
   2:"{n} dapat menjelaskan asas pembinaan dasar luar Malaysia dengan contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi maklumat tentang asas pembinaan dasar luar negara. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang asas pembinaan dasar luar Malaysia. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan dasar luar Malaysia dalam membina hubungan baik antara negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang dasar luar Malaysia dalam menjaga kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Asas Pembinaan Dasar Luar Malaysia. Cadangan: ulang hentian pertama sambil menyenaraikan asas dasar luar dan penyertaan Malaysia dalam PBB dan Komanwel dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1957", label:"Tanah Melayu menjadi anggota PBB"},
     {masa:"1971", label:"Deklarasi ZOPFAN dikeluarkan"},
     {masa:"1974", label:"Hubungan diplomatik dengan China"},
     {masa:"1989", label:"Persidangan Komanwel di Langkawi"}],
     kapsyen:"Rajah 1 · Asas pembinaan dasar luar Malaysia",
     alt:"Garis masa menegak: 1957 Tanah Melayu menjadi anggota PBB; 1971 Deklarasi ZOPFAN dikeluarkan; 1974 Hubungan diplomatik dengan China; 1989 Persidangan Komanwel di Langkawi"},
   p1:petikan(1, "Asas dasar luar Malaysia",
     ["Dasar luar Malaysia digubal untuk melindungi kedaulatan dan kepentingan negara. Pada awal kemerdekaan, Tunku mengutamakan hubungan dengan negara Barat dan Komanwel kerana ancaman komunis. Pada tahun 1970-an, Tun Abdul Razak mengamalkan pendekatan berkecuali dengan menjalin hubungan dengan pelbagai negara, termasuk China.",
      "Penyertaan dalam PBB dan Komanwel memberi Malaysia suara di peringkat antarabangsa serta peluang bekerjasama dalam bidang keselamatan, ekonomi dan pendidikan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
