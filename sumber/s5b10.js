/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 10 Pemantapan Dasar Luar Malaysia.
   Standard Kandungan 15.2, Standard Pembelajaran 15.2.1 hingga 15.2.4 serta K15.2.5 hingga K15.2.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Cabaran Dasar Luar", sk:"15.2.1 Cabaran mengukuhkan dasar luar · 15.2.2 ASEAN · 15.2.3 NAM · 15.2.4 OIC", lampiran:null,
 kadNama:"ASEAN", kadEm:"\u{1F91D}", kadFakta:"Persatuan Negara-negara Asia Tenggara (ASEAN) ditubuhkan di Bangkok pada 8 Ogos 1967 oleh lima negara pengasas, termasuk Malaysia.",
 bosKadNama:"Tunku dan OIC", bosKadEm:"\u{1F54C}", bosKadFakta:"Tunku Abdul Rahman dilantik sebagai Setiausaha Agung pertama Pertubuhan Persidangan Islam (OIC) pada awal tahun 1970-an.",
 soalan:[
 {j:"pilih",t:"Persatuan Negara-negara Asia Tenggara (ASEAN) ditubuhkan pada tahun:",p:["1967","1957","1971","1989"],b:0,u:"ASEAN ditubuhkan pada 8 Ogos 1967."},
 {j:"pilih",t:"ASEAN ditubuhkan melalui Deklarasi yang ditandatangani di:",p:["Bangkok","Kuala Lumpur","Jakarta","Manila"],b:0,u:"Deklarasi Bangkok 1967."},
 {j:"pilih",t:"Antara berikut, yang manakah salah satu negara pengasas ASEAN bersama Malaysia?",p:["Indonesia","Jepun","China","India"],b:0,u:"Negara pengasas ialah Malaysia, Indonesia, Singapura, Filipina dan Thailand."},
 {j:"pilih",t:"Pergerakan Negara-Negara Tanpa Pihak (NAM) bertujuan:",p:["Tidak memihak kepada blok kuasa besar","Menyertai pakatan ketenteraan Barat","Menyokong blok komunis dalam Perang Dingin","Menguasai perdagangan negara-negara kecil"],b:0,u:"NAM tidak memihak kepada blok kuasa besar."},
 {j:"pilih",t:"Singkatan OIC merujuk kepada:",p:["Pertubuhan Persidangan Islam","Pertubuhan Perdagangan Antarabangsa","Pertubuhan Pertahanan Asia Tenggara","Pertubuhan Pertanian Sedunia"],b:0,u:"OIC ialah Pertubuhan Persidangan Islam."},
 {j:"banyak",t:"Pilih DUA cabaran yang dihadapi Malaysia dalam mengukuhkan dasar luarnya.",p:["Konfrontasi Indonesia","Tuntutan Filipina ke atas Sabah","Kemerdekaan Tanah Melayu","Pembentukan Majlis Raja-Raja"],b:[0,1],u:"Konfrontasi dan tuntutan Filipina ke atas Sabah ialah cabaran awal."},
 {j:"pilih",t:"Setiausaha Agung pertama OIC ialah:",p:["Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn","Tun Dr Mahathir"],b:0,u:"Tunku Abdul Rahman."},
 {j:"pilih",t:"Pulau Sipadan dan Pulau Ligitan telah diputuskan sebagai milik Malaysia oleh:",p:["Mahkamah Keadilan Antarabangsa","Mahkamah Rayuan Persekutuan","Majlis Raja-Raja Melayu","Dewan Negara Malaysia"],b:0,u:"Mahkamah Keadilan Antarabangsa (ICJ) memutuskan pada 2002."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan pertubuhan dan peranan Malaysia yang betul.",p:["ASEAN: negara pengasas 1967","NAM: Malaysia menjadi anggota","OIC: Tunku menjadi Setiausaha Agung pertama","ASEAN: ditubuhkan pada 1948","NAM: ditubuhkan oleh kuasa penjajah"],b:[0,1,2],u:"Malaysia ialah pengasas ASEAN, anggota NAM dan Tunku ialah Setiausaha Agung pertama OIC."}},

{n:2, tempat:"Bilik Kronologi Persidangan", sk:"15.2.2 · 15.2.3 · 15.2.4 Menyusun maklumat pemantapan dasar luar", lampiran:"gm1",
 kadNama:"NAM", kadEm:"\u{1F30D}", kadFakta:"Malaysia menyertai Pergerakan Negara-Negara Tanpa Pihak pada 1970 dan menjadi pengerusinya dari 2003 hingga 2006.",
 bosKadNama:"Pengerusi NAM", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Persidangan Kemuncak NAM diadakan di Kuala Lumpur pada 2003 dan Malaysia mengetuai pergerakan itu sehingga 2006.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["ASEAN ditubuhkan","OIC ditubuhkan","Malaysia menyertai NAM","Malaysia menjadi pengerusi NAM"],b:0,u:"ASEAN 1967 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Malaysia menyertai NAM?",p:["1970","1967","1969","2003"],b:0,u:"Rajah 1 menunjukkan Malaysia menyertai NAM pada 1970."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["ASEAN ditubuhkan","OIC ditubuhkan","Malaysia menyertai NAM","Malaysia menjadi pengerusi NAM"],b:[0,1,2,3],u:"1967, 1969, 1970 dan 2003."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan ASEAN dengan penubuhan OIC?",p:["2 tahun","3 tahun","12 tahun","36 tahun"],b:0,u:"1969 tolak 1967 ialah 2 tahun."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Malaysia menyertai NAM dengan menjadi pengerusi NAM?",p:["33 tahun","36 tahun","3 tahun","23 tahun"],b:0,u:"2003 tolak 1970 ialah 33 tahun."},
 {j:"pilih",t:"Persidangan Kemuncak NAM 2003 yang membawa Malaysia menjadi pengerusi diadakan di:",p:["Kuala Lumpur","Bangkok","Belgrade","Lusaka"],b:0,u:"Persidangan Kemuncak NAM 2003 diadakan di Kuala Lumpur."},
 {j:"pilih",t:"Pemimpin Malaysia yang mengetuai NAM pada permulaan tempoh pengerusiannya pada 2003 ialah:",p:["Tun Dr Mahathir Mohamad","Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn"],b:0,u:"Tun Dr Mahathir mempengerusikan persidangan NAM 2003."},
 {j:"banyak",t:"Berdasarkan Rajah 1, pilih DUA peristiwa yang berlaku sebelum tahun 1971.",p:["ASEAN ditubuhkan","OIC ditubuhkan","Malaysia menjadi pengerusi NAM","Pembentukan Malaysia"],b:[0,1],u:"ASEAN 1967 dan OIC 1969 berlaku sebelum 1971."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan ASEAN dengan Malaysia menjadi pengerusi NAM?",p:["36 tahun","33 tahun","2 tahun","3 tahun"],b:0,u:"2003 tolak 1967 ialah 36 tahun."}},

{n:3, tempat:"Gelanggang Hubungan Serantau", sk:"15.2.2 · 15.2.3 · 15.2.4 Mengaplikasi pelibatan dalam ASEAN, NAM dan OIC", lampiran:null,
 kadNama:"Kerjasama ASEAN", kadEm:"\u{1F91D}", kadFakta:"ASEAN menggalakkan kerjasama dalam bidang ekonomi, sosial, budaya dan keselamatan serta menyelesaikan perselisihan secara aman.",
 bosKadNama:"Suara Dunia Islam", bosKadEm:"\u{1F54C}", bosKadFakta:"Malaysia menggunakan OIC untuk menyuarakan isu umat Islam sedunia dan memupuk perpaduan antara negara Islam.",
 soalan:[
 {j:"pilih",t:"Negara-negara ASEAN bekerjasama menggalakkan perdagangan antara anggota. Kerjasama ini dalam bidang:",p:["Ekonomi","Penjajahan","Peperangan","Pemisahan"],b:0,u:"Perdagangan ialah kerjasama ekonomi."},
 {j:"pilih",t:"Dua anggota ASEAN berselisih tentang sempadan lalu berunding. Tindakan ini selaras dengan matlamat ASEAN untuk:",p:["Menyelesaikan perselisihan secara aman","Menyelesaikan perselisihan dengan kekerasan","Menyerahkan perselisihan kepada kuasa penjajah","Mengabaikan perselisihan sehingga reda"],b:0,u:"ASEAN menggalakkan penyelesaian secara aman."},
 {j:"pilih",t:"Malaysia tidak memilih blok Barat atau blok Timur semasa Perang Dingin. Pendirian ini selaras dengan:",p:["Dasar Pergerakan Negara-Negara Tanpa Pihak","Pakatan Pertahanan Atlantik Utara dan sekutunya","Perjanjian Warsaw pimpinan Kesatuan Soviet","Dasar penjajahan semula di Asia Tenggara"],b:0,u:"Pendirian berkecuali selaras dengan NAM."},
 {j:"pilih",t:"Malaysia menyuarakan isu penderitaan umat Islam di Palestin dalam persidangan OIC. Tindakan ini menunjukkan:",p:["Sikap prihatin terhadap isu antarabangsa","Sikap acuh tak acuh terhadap isu dunia","Penolakan terhadap kerjasama negara Islam","Penyertaan dalam peperangan di Timur Tengah"],b:0,u:"Malaysia prihatin terhadap isu antarabangsa."},
 {j:"banyak",t:"Pilih DUA bentuk kerjasama dalam ASEAN.",p:["Pertukaran pelajar antara negara anggota","Kerjasama perdagangan serantau","Penjajahan negara anggota yang lemah","Penyebaran fahaman satu negara"],b:[0,1],u:"Pertukaran pelajar dan perdagangan serantau ialah kerjasama ASEAN."},
 {j:"pilih",t:"Rakyat Malaysia dan Indonesia menyertai pertukaran budaya di bawah ASEAN. Contoh ini ialah kerjasama:",p:["Sosial dan budaya","Ketenteraan dan peperangan","Penjajahan dan penaklukan","Penyingkiran dan pemulauan"],b:0,u:"Pertukaran budaya ialah kerjasama sosial dan budaya."},
 {j:"pilih",t:"Malaysia dan negara Islam lain bekerjasama dalam OIC. Tujuan utama kerjasama ini ialah:",p:["Memupuk perpaduan dan kerjasama negara Islam","Memecahkan perpaduan di kalangan negara Islam","Menghalang perdagangan antara negara-negara Islam","Menjajah negara Islam yang lebih lemah ekonominya"],b:0,u:"OIC memupuk perpaduan dan kerjasama negara Islam."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh Malaysia memantapkan dasar luar melalui ASEAN?",p:["Menjadi tuan rumah mesyuarat negara anggota","Menarik diri daripada kerjasama peringkat serantau","Melarang pelawat dari negara jiran memasuki negara","Memutuskan hubungan dengan negara-negara anggota"],b:0,u:"Menjadi tuan rumah mesyuarat memantapkan peranan dalam ASEAN."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah BUKAN pertubuhan antarabangsa yang disertai Malaysia dalam dasar luarnya?",p:["Pakatan Pertahanan Atlantik Utara","Persatuan Negara-negara Asia Tenggara","Pergerakan Negara-Negara Tanpa Pihak","Pertubuhan Persidangan Islam"],b:0,u:"Malaysia tidak menyertai pakatan ketenteraan Atlantik Utara."}},

{n:4, tempat:"Arkib Hubungan Antarabangsa", sk:"15.2.1 · 15.2.2 · 15.2.3 · 15.2.4 Menganalisis pemantapan dasar luar", lampiran:"p1",
 kadNama:"Konfrontasi", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Konfrontasi Indonesia (1963–1966) menjadi ujian awal bagi Malaysia dan mendorong pembentukan ASEAN bagi mengeratkan hubungan serantau.",
 bosKadNama:"Rundingan Aman", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Pertikaian Sipadan dan Ligitan diselesaikan melalui Mahkamah Keadilan Antarabangsa, bukan melalui kekerasan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah ASEAN ditubuhkan pada 1967?",p:["Untuk mengeratkan hubungan dan kerjasama serantau","Untuk menjajah semula negara Asia Tenggara","Untuk menggantikan Pertubuhan Bangsa-Bangsa Bersatu","Untuk mengasingkan negara anggota daripada dunia"],b:0,u:"ASEAN mengeratkan hubungan dan kerjasama serantau."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah Malaysia menyelesaikan pertikaian Pulau Sipadan dan Pulau Ligitan?",p:["Melalui Mahkamah Keadilan Antarabangsa","Melalui peperangan dengan negara jiran","Melalui sekatan ekonomi ke atas negara jiran","Melalui penjajahan semula kawasan itu"],b:0,u:"Pertikaian diselesaikan melalui ICJ."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelebihan NAM kepada Malaysia semasa Perang Dingin?",p:["Malaysia dapat berhubung dengan pelbagai blok","Malaysia terikat dengan satu blok kuasa besar","Malaysia terputus hubungan dengan semua blok","Malaysia kehilangan kedaulatan kepada kuasa besar"],b:0,u:"NAM membolehkan Malaysia berhubung dengan pelbagai blok."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA sebab Malaysia menyertai pertubuhan antarabangsa.",p:["Memperkukuh hubungan dengan negara lain","Menyuarakan pendirian di peringkat antarabangsa","Menyerahkan kedaulatan kepada pertubuhan","Mengasingkan diri daripada negara jiran"],b:[0,1],u:"Memperkukuh hubungan dan menyuarakan pendirian."},
 {j:"pilih",t:"Bandingkan peranan ASEAN dengan OIC bagi Malaysia. Apakah perbezaannya?",p:["ASEAN bersifat serantau, OIC melibatkan negara Islam sedunia","ASEAN melibatkan negara Islam sedunia, OIC bersifat serantau di Asia","Kedua-duanya dianggotai oleh negara-negara Asia Tenggara","Kedua-duanya tidak mempunyai peranan kepada Malaysia kini"],b:0,u:"ASEAN bersifat serantau, manakala OIC melibatkan negara Islam sedunia."},
 {j:"pilih",t:"Mengapakah penyelesaian secara aman penting dalam hubungan antara negara?",p:["Mengelakkan peperangan dan kemusnahan","Memberi kelebihan kepada negara yang kuat","Membolehkan negara menawan negara lemah","Menjadikan semua negara bermusuhan"],b:0,u:"Penyelesaian secara aman mengelakkan peperangan dan kemusnahan."},
 {j:"pilih",t:"Apakah kesan penubuhan ASEAN terhadap hubungan negara Asia Tenggara?",p:["Hubungan serantau menjadi lebih erat","Hubungan serantau menjadi lebih tegang","Negara anggota hilang kedaulatan","Negara anggota terpisah daripada dunia"],b:0,u:"ASEAN mengeratkan hubungan serantau."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penyertaan Malaysia dalam pelbagai pertubuhan antarabangsa?",p:["Dasar luar Malaysia bersifat terbuka dan bekerjasama","Dasar luar Malaysia bersifat tertutup dan memencil","Dasar luar Malaysia ditentukan oleh satu pertubuhan","Dasar luar Malaysia tidak mempunyai matlamat"],b:0,u:"Penyertaan pelbagai pertubuhan menunjukkan dasar luar yang terbuka dan bekerjasama."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Pelbagai pertubuhan memantapkan dasar luar Malaysia","Satu pertubuhan menentukan setiap dasar luar Malaysia dari luar","Pertubuhan antarabangsa melemahkan kedaulatan Malaysia di dunia","Dasar luar Malaysia tidak berkait dengan pertubuhan dunia"],b:0,u:"Penyertaan pelbagai pertubuhan memantapkan dasar luar dan kedaulatan."}},

{n:5, tempat:"Dewan Penilai Hubungan Luar", sk:"15.2.4 · K15.2.5 · K15.2.6 · K15.2.7 · K15.2.8 Menilai pemantapan dasar luar", lampiran:null,
 kadNama:"Prihatin dan Peka", kadEm:"\u{1F441}\u{FE0F}", kadFakta:"Sikap prihatin dan peka terhadap isu antarabangsa membantu negara bertindak bijak dan bekerjasama mengekalkan keamanan dunia.",
 bosKadNama:"Berhati-hati", bosKadEm:"\u{1F6E1}\u{FE0F}", bosKadFakta:"Sikap berhati-hati menghadapi cabaran melindungi kedaulatan dan mengelakkan tindakan terburu-buru.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah kebijaksanaan penting dalam menguruskan hubungan luar?",p:["Kepentingan negara terpelihara dan konflik dapat dielakkan","Negara boleh bertindak mengikut perasaan pemimpin pada masa itu","Negara dapat menekan negara jiran dengan lebih mudah lagi","Negara tidak perlu merancang hubungan luar dengan teliti"],b:0,u:"Kebijaksanaan memelihara kepentingan negara dan mengelakkan konflik."},
 {j:"pilih",t:"Seorang murid berkata, \"Isu antarabangsa tiada kaitan dengan rakyat Malaysia.\" Penilaian manakah paling tepat?",p:["Kurang tepat, isu dunia menjejaskan ekonomi dan keselamatan","Tepat, kerana isu dunia tidak memberi apa-apa kesan kepada kita","Tepat, kerana rakyat dilarang mengikuti isu dunia di negara ini","Kurang tepat, kerana isu dunia tidak berlaku di dunia ini"],b:0,u:"Isu antarabangsa memberi kesan kepada ekonomi dan keselamatan."},
 {j:"pilih",t:"Mengapakah sikap berhati-hati penting ketika menghadapi cabaran dalam hubungan antarabangsa?",p:["Mengelakkan tindakan terburu-buru yang merugikan negara","Membolehkan negara menyerang negara jiran terlebih dahulu dengan segera","Menjadikan negara terpisah daripada pertubuhan dunia selama-lamanya","Membolehkan pemimpin mengabaikan nasihat pakar dalam kerajaan"],b:0,u:"Berhati-hati mengelakkan tindakan terburu-buru yang merugikan negara."},
 {j:"banyak",t:"Pilih DUA kepentingan sikap kerjasama dalam mengekalkan keamanan dunia.",p:["Konflik dapat diselesaikan melalui rundingan","Negara-negara saling membantu ketika krisis","Kuasa besar bebas menekan negara kecil","Perselisihan dibiarkan menjadi peperangan"],b:[0,1],u:"Kerjasama membolehkan rundingan dan bantuan semasa krisis."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang penyertaan Malaysia dalam ASEAN, NAM dan OIC?",p:["Memberi manfaat tetapi perlu diurus dengan bijak","Tidak memberi sebarang manfaat kepada Malaysia pada masa ini","Menyelesaikan setiap masalah negara dengan segera dan sempurna","Menyebabkan Malaysia kehilangan kedaulatan negara secara beransur-ansur"],b:0,u:"Penyertaan memberi manfaat besar tetapi perlu dikendalikan dengan bijak."},
 {j:"pilih",t:"Mengapakah sikap prihatin terhadap isu antarabangsa penting kepada negara kecil seperti Malaysia?",p:["Negara dapat menyuarakan pendirian dan melindungi kepentingannya","Negara dapat mengelak daripada sebarang tanggungjawab antarabangsa","Negara dapat menutup sempadan daripada dunia luar sepenuhnya","Negara dapat menyalahkan negara lain pada setiap masa"],b:0,u:"Sikap prihatin membantu negara menyuarakan pendirian dan melindungi kepentingan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada penyertaan Malaysia dalam pertubuhan antarabangsa?",p:["Kerjasama dan rundingan lebih berkesan daripada kekerasan","Kekerasan lebih berkesan daripada rundingan dalam semua keadaan","Negara kecil tidak perlu menyertai pertubuhan di dunia","Pertubuhan antarabangsa tidak memberi apa-apa kesan kepada negara"],b:0,u:"Kerjasama dan rundingan lebih berkesan daripada kekerasan."},
 {j:"pilih",t:"Mengapakah pelibatan Malaysia dalam ASEAN menyumbang kepada kedaulatan negara?",p:["Hubungan baik serantau mengurangkan ancaman daripada jiran","Hubungan serantau menjadikan negara bergantung kepada jiran","Hubungan serantau mengurangkan kuasa Majlis Raja-Raja","Hubungan serantau menghalang perdagangan antara negara"],b:0,u:"Hubungan baik serantau mengurangkan ancaman dan menjaga kedaulatan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang pemantapan dasar luar Malaysia?",p:["Perlu diteruskan dengan kebijaksanaan dan kerjasama","Tidak diperlukan lagi selepas penubuhan ASEAN pada 1967","Sudah lengkap dan tidak perlu diperbaharui pada masa hadapan","Menjadi urusan satu kementerian dan bukan urusan rakyat"],b:0,u:"Pemantapan dasar luar perlu diteruskan dengan kebijaksanaan dan kerjasama."}},

{n:6, tempat:"Studio Hubungan Antarabangsa", sk:"K15.2.5 hingga K15.2.8 Idea pemantapan dasar luar dalam menjaga kedaulatan negara", lampiran:null,
 kadNama:"Duta Aman", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Murid boleh menjadi duta keamanan dengan menyelesaikan perselisihan secara aman dan menghormati perbezaan pendapat.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta tentang ASEAN, NAM dan OIC untuk menjaga kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu melatih murid menyelesaikan perselisihan secara aman. Idea manakah paling berasas?",p:["Latihan runding damai untuk murid","Menghukum murid yang berbeza pendapat dengan keras","Mengasingkan murid yang bergaduh untuk jangka masa panjang","Membiarkan pertengkaran sehingga reda dengan sendirinya"],b:0,u:"Latihan runding damai selaras dengan penyelesaian secara aman."},
 {j:"pilih",t:"Dua kumpulan murid berselisih tentang giliran menggunakan padang. Iktibar daripada ASEAN yang sesuai ialah:",p:["Berunding dan mencapai persetujuan bersama","Merampas padang menggunakan kekuatan kumpulan sendiri","Memulau kumpulan yang tidak sependapat dengan mereka","Mengadu kepada pihak luar pada setiap masa"],b:0,u:"ASEAN menggalakkan rundingan dan persetujuan bersama."},
 {j:"banyak",t:"Pilih DUA cara murid menyumbang kepada keamanan dunia.",p:["Menghormati perbezaan budaya dan agama","Menyelesaikan perselisihan secara aman","Menyebarkan kebencian terhadap negara lain","Mengejek bahasa dan pakaian bangsa lain"],b:[0,1],u:"Menghormati perbezaan dan menyelesaikan perselisihan secara aman."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memperkenalkan peranan ASEAN kepada murid sekolah?",p:["Hari ASEAN dengan pameran budaya negara anggota","Melarang murid membincangkan hubungan serantau di sekolah","Memadamkan topik ASEAN daripada mata pelajaran sejarah","Menyalin nota daripada buku dan menghafalnya untuk ujian"],b:0,u:"Hari ASEAN dengan pameran budaya memperkenalkan peranan ASEAN."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kita negara kecil, pendirian kita tidak penting.\" Respons manakah paling rasional?",p:["Negara kecil didengari apabila bekerjasama","Betul, negara kecil patut mendiamkan diri di dunia","Betul, negara besar yang layak bersuara di dunia","Pendirian negara kecil ditolak oleh dunia ini"],b:0,u:"Negara kecil boleh didengari melalui kerjasama dalam pertubuhan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan sikap prihatin terhadap isu antarabangsa?",p:["Mengikuti berita dunia dan menderma kepada mangsa","Mengabaikan berita dunia yang disiarkan di televisyen dan akhbar","Mengejek mangsa bencana yang berlaku di negara lain","Menyebarkan berita palsu tentang negara-negara lain"],b:0,u:"Mengikuti berita dan menyumbang menunjukkan sikap prihatin."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memupuk kerjasama antara sekolah dari negeri berbeza?",p:["Program pertukaran pelajar dan perkhemahan bersama","Pertandingan yang membenarkan peserta dari satu negeri","Larangan murid berhubung dengan sekolah di negeri lain","Pengasingan murid mengikut negeri asal masing-masing"],b:0,u:"Pertukaran pelajar dan perkhemahan bersama memupuk kerjasama."},
 {j:"pilih",t:"Mengapakah memantapkan hubungan dengan negara luar menjadi tanggungjawab bersama?",p:["Kesannya dirasai dalam ekonomi dan keselamatan negara","Kesannya dirasai oleh menteri luar negeri dan pegawainya","Kesannya dirasai oleh anggota tentera di seluruh negara","Kesannya tidak dirasai oleh sesiapa pun di negara ini"],b:0,u:"Kesan hubungan luar dirasai dalam ekonomi dan keselamatan seluruh negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang pemantapan dasar luar Malaysia dalam menjaga kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA daripada ASEAN, NAM dan OIC. Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk (contoh: kebijaksanaan, sikap prihatin, kerjasama, keamanan).",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang ASEAN, NAM dan OIC, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kebijaksanaan, sikap prihatin dan kerjasama untuk keamanan dunia."}}
];

module.exports = {
  id:"s5b10", tingkatan:5, kod:"10.0 Pemantapan Dasar Luar Malaysia",
  tajuk:"Rantau dan Dunia",
  subtajuk:"Sejarah Ting. 5 · Bab 10 Pemantapan Dasar Luar Malaysia",
  spi:SPI["15.2"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang pemantapan dasar luar Malaysia. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan pemantapan dasar luar Malaysia berserta contoh. Perlu lebih latihan menyusun maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh menyusun maklumat berkaitan dengan pemantapan dasar luar Malaysia. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang pemantapan dasar luar Malaysia. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan pemantapan dasar luar Malaysia dalam membina hubungan baik antara negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang pemantapan dasar luar Malaysia dalam menjaga kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pemantapan Dasar Luar Malaysia. Cadangan: ulang hentian pertama sambil menyenaraikan tahun penubuhan ASEAN, NAM dan OIC dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1967", label:"ASEAN ditubuhkan"},
     {masa:"1969", label:"OIC ditubuhkan"},
     {masa:"1970", label:"Malaysia menyertai NAM"},
     {masa:"2003", label:"Malaysia menjadi pengerusi NAM"}],
     kapsyen:"Rajah 1 · Pemantapan dasar luar Malaysia",
     alt:"Garis masa menegak: 1967 ASEAN ditubuhkan; 1969 OIC ditubuhkan; 1970 Malaysia menyertai NAM; 2003 Malaysia menjadi pengerusi NAM"},
   p1:petikan(1, "Pemantapan dasar luar Malaysia",
     ["Selepas mengalami Konfrontasi dan tuntutan ke atas Sabah, Malaysia memantapkan dasar luarnya melalui kerjasama serantau dan antarabangsa. ASEAN ditubuhkan pada 1967 untuk mengeratkan hubungan dan kerjasama serantau, manakala NAM membolehkan Malaysia berhubung dengan pelbagai blok semasa Perang Dingin.",
      "Penyertaan dalam OIC menyuarakan isu umat Islam, dan pertikaian seperti Pulau Sipadan dan Pulau Ligitan diselesaikan secara aman melalui Mahkamah Keadilan Antarabangsa."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
