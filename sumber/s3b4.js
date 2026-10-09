/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 4 Pentadbiran Negeri-negeri Melayu Tidak Bersekutu.
   Standard Kandungan 7.4, Standard Pembelajaran 7.4.1 hingga 7.4.4 serta K7.4.5 hingga K7.4.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Utara", sk:"7.4.1 Kesultanan Perlis, Kedah, Kelantan, Terengganu dan Johor", lampiran:null,
 kadNama:"Lima Negeri", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Negeri-negeri Melayu Tidak Bersekutu terdiri daripada Perlis, Kedah, Kelantan, Terengganu dan Johor. Setiap negeri ditadbir secara berasingan.",
 bosKadNama:"Perjanjian Bangkok", bosKadEm:"\u{1F4DC}", bosKadFakta:"Pada tahun 1909, Siam menyerahkan hak ke atas Kedah, Kelantan, Terengganu dan Perlis kepada British melalui Perjanjian Bangkok.",
 soalan:[
 {j:"pilih",t:"Negeri-negeri Melayu Tidak Bersekutu terdiri daripada Perlis, Kedah, Kelantan, Terengganu dan:",p:["Johor","Perak","Selangor","Pahang"],b:0,u:"Johor ialah negeri kelima dalam kumpulan ini."},
 {j:"pilih",t:"Perjanjian yang menyerahkan Kedah, Kelantan, Terengganu dan Perlis daripada Siam kepada British ialah:",p:["Perjanjian Bangkok 1909","Perjanjian Pangkor 1874","Perjanjian London 1824","Perjanjian Persekutuan 1895"],b:0,u:"Perjanjian Bangkok 1909 memindahkan hak Siam kepada British."},
 {j:"pilih",t:"Negeri-negeri Melayu Tidak Bersekutu tidak mempunyai:",p:["Residen Jeneral","Sultan","Pentadbiran negeri","Pegawai British"],b:0,u:"Negeri-negeri itu tidak digabungkan di bawah seorang Residen Jeneral."},
 {j:"pilih",t:"Pegawai British yang menasihati sultan di Negeri-negeri Melayu Tidak Bersekutu bergelar:",p:["Penasihat British","Gabenor Singapura","Residen Jeneral","Laksamana Johor"],b:0,u:"Penasihat British ditempatkan di setiap negeri, bukan Residen."},
 {j:"banyak",t:"Pilih DUA negeri yang menerima Penasihat British selepas Perjanjian Bangkok 1909.",p:["Kelantan","Kedah","Perak","Negeri Sembilan"],b:[0,1],u:"Kelantan dan Kedah menerima Penasihat British. Perak dan Negeri Sembilan ialah Negeri-negeri Melayu Bersekutu."},
 {j:"pilih",t:"Negeri yang menerima Penasihat Am British pada tahun 1914 ialah:",p:["Johor","Terengganu","Perlis","Pahang"],b:0,u:"Sultan Ibrahim menerima Penasihat Am pada 1914."},
 {j:"pilih",t:"Terengganu menerima Penasihat British pada tahun:",p:["1919","1874","1896","1948"],b:0,u:"Terengganu menerima Penasihat British pada tahun 1919."},
 {j:"pilih",t:"Sebelum 1909, Kedah, Kelantan, Terengganu dan Perlis berada di bawah pengaruh:",p:["Siam","Belanda","Portugis","Jepun"],b:0,u:"Negeri-negeri itu berada di bawah pengaruh Siam."}],
 bos:{j:"banyak",t:"Pilih SEMUA negeri yang termasuk dalam Negeri-negeri Melayu Tidak Bersekutu.",p:["Perlis","Kedah","Johor","Perak","Selangor"],b:[0,1,2],u:"Perlis, Kedah dan Johor ialah Negeri-negeri Melayu Tidak Bersekutu. Perak dan Selangor ialah Negeri-negeri Melayu Bersekutu."}},

{n:2, tempat:"Bilik Penasihat", sk:"7.4.2 Peluasan kuasa British di Perlis, Kedah, Kelantan dan Terengganu", lampiran:"gm1",
 kadNama:"Penasihat British", kadEm:"\u{1F4CB}", kadFakta:"Penasihat British menasihati sultan, tetapi bidang kuasanya lebih longgar daripada Residen kerana sultan masih mempunyai pengaruh yang lebih besar.",
 bosKadNama:"Kedah", bosKadEm:"\u{1F33E}", bosKadFakta:"Kedah menerima Penasihat British pada tahun 1923 dan terkenal sebagai Jelapang Padi.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Perjanjian Bangkok","Penasihat Am Johor","Penasihat Terengganu","Penasihat Kedah"],b:0,u:"Perjanjian Bangkok 1909 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Johor menerima Penasihat Am?",p:["1914","1909","1919","1923"],b:0,u:"Rajah 1 menunjukkan Penasihat Am diterima Johor pada 1914."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Perjanjian Bangkok","Penasihat Am Johor","Penasihat Terengganu","Penasihat Perlis"],b:[0,1,2,3],u:"1909, 1914, 1919 dan 1930."},
 {j:"pilih",t:"Berdasarkan Rajah 1, negeri manakah menerima Penasihat British paling akhir?",p:["Perlis","Kedah","Terengganu","Johor"],b:0,u:"Perlis menerima Penasihat British pada 1930, paling akhir dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Perjanjian Bangkok dan Penasihat Perlis?",p:["21 tahun","16 tahun","14 tahun","11 tahun"],b:0,u:"1930 tolak 1909 ialah 21 tahun."},
 {j:"pilih",t:"Penasihat British di Negeri-negeri Melayu Tidak Bersekutu menasihati sultan dalam hal:",p:["Hal pentadbiran biasa negeri","Agama Islam dan hal ehwalnya","Adat istiadat diraja dan Melayu","Hal ehwal luar negeri dan perang"],b:0,u:"Penasihat menasihati dalam pentadbiran kecuali agama dan adat."},
 {j:"pilih",t:"Kuasa sultan di Negeri-negeri Melayu Tidak Bersekutu berbanding Negeri-negeri Melayu Bersekutu ialah:",p:["Lebih besar","Lebih kecil","Sama sahaja","Tiada langsung"],b:0,u:"Sultan di negeri tidak bersekutu mengekalkan pengaruh lebih besar."},
 {j:"banyak",t:"Pilih DUA perbezaan Negeri-negeri Melayu Tidak Bersekutu dengan Negeri-negeri Melayu Bersekutu.",p:["Tiada Residen Jeneral","Pentadbiran berasingan setiap negeri","Digabungkan di bawah Kuala Lumpur","Menerima sistem Residen"],b:[0,1],u:"Negeri-negeri Melayu Tidak Bersekutu ditadbir secara berasingan tanpa Residen Jeneral."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Penasihat Terengganu dan Penasihat Kedah?",p:["4 tahun","14 tahun","9 tahun","10 tahun"],b:0,u:"1923 tolak 1919 ialah 4 tahun."}},

{n:3, tempat:"Pejabat Penasihat", sk:"7.4.2 · 7.4.3 · 7.4.4 Aplikasi pentadbiran Negeri-negeri Melayu Tidak Bersekutu", lampiran:null,
 kadNama:"Perlembagaan Johor", kadEm:"\u{1F4DC}", kadFakta:"Johor mempunyai Perlembagaan bertulis pada tahun 1895, antara yang terawal di negeri Melayu, yang melindungi kedaulatan Johor.",
 bosKadNama:"Kestabilan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Penasihat British membantu kestabilan politik, tetapi kuasa sultan perlahan-lahan berkurang.",
 soalan:[
 {j:"pilih",t:"Sultan Kelantan menerima Penasihat British. Perkara yang sultan masih berkuasa ialah:",p:["Agama Islam dan adat","Kutipan cukai","Hubungan luar negeri","Polis dan tentera"],b:0,u:"Penasihat tidak boleh campur tangan dalam agama dan adat."},
 {j:"pilih",t:"Johor berjaya mengekalkan kedaulatan lebih lama kerana:",p:["Perlembagaan bertulis sendiri","Tiada pembesar dalam negeri","Mempunyai tentera Siam sendiri","Tiada hubungan dengan British"],b:0,u:"Perlembagaan Johor 1895 melindungi kedaulatan negeri."},
 {j:"pilih",t:"Pegawai British yang ditempatkan di Kedah dan Kelantan bertugas:",p:["Menasihati sultan","Menggantikan sultan","Memerintah tentera Siam","Mengutip zakat"],b:0,u:"Penasihat British menasihati sultan dan mengawasi pentadbiran negeri."},
 {j:"banyak",t:"Seorang pegawai British mahu memperkenalkan sistem tanah yang teratur. Pilih DUA kesannya.",p:["Pemilikan tanah dikawal selia","Hasil cukai tanah bertambah","Sultan hilang gelaran","Rakyat dilarang bertani"],b:[0,1],u:"Sistem tanah yang teratur mengawal pemilikan dan menambah hasil negeri."},
 {j:"pilih",t:"Hubungan sultan Johor dengan British sebelum 1914 berbeza dengan negeri lain kerana:",p:["Berdasarkan perjanjian sama taraf","Berdasarkan penaklukan tentera British","Berdasarkan arahan raja Siam","Berdasarkan perkahwinan diraja"],b:0,u:"Sultan Abu Bakar menjalin hubungan sama taraf dengan British melalui perjanjian."},
 {j:"pilih",t:"Pegawai British mahu membuka ladang getah di Johor. Siapakah yang memberi kebenaran awal?",p:["Sultan","Gabenor Singapura","Raja Siam","Residen Jeneral"],b:0,u:"Sultan Johor mempunyai kuasa memberi tanah kepada pelabur."},
 {j:"pilih",t:"Pembangunan kereta api dan jalan raya di Kedah dan Johor bertujuan:",p:["Mengangkut hasil bumi ke pelabuhan","Menyekat perdagangan di negeri","Menutup pelabuhan utama negeri","Menghalang pelancong dari luar"],b:0,u:"Prasarana memudahkan pengangkutan hasil bumi seperti getah dan padi."},
 {j:"pilih",t:"Negeri-negeri Melayu Tidak Bersekutu menikmati kestabilan politik kerana:",p:["Sultan dihormati oleh rakyat","Tiada penasihat British di negeri","Tiada perjanjian dengan sesiapa","Tiada hasil bumi di negeri itu"],b:0,u:"Kedudukan sultan yang dihormati membantu kestabilan politik."}],
 bos:{j:"pilih",t:"Seorang penasihat British mencadangkan polisi baharu. Cara sultan menanganinya yang paling bijak ialah:",p:["Menimbang kesan dahulu","Menolak cadangan itu serta-merta","Menerima tanpa banyak bertanya","Menyerahkan kuasa kepada Siam"],b:0,u:"Menimbang kesan melindungi kedaulatan dan kepentingan rakyat."}},

{n:4, tempat:"Arkib Johor", sk:"7.4.3 · 7.4.4 Mencerakinkan maklumat", lampiran:"p1",
 kadNama:"Sultan Abu Bakar", kadEm:"\u{1F451}", kadFakta:"Sultan Abu Bakar memodenkan Johor dan menjalin hubungan sama taraf dengan Britain. Baginda diiktiraf sebagai Sultan Johor pada tahun 1885.",
 bosKadNama:"Penasihat Am", bosKadEm:"\u{1F4CB}", bosKadFakta:"Pada 1914, Sultan Ibrahim menerima Penasihat Am dan Johor menjadi sebahagian Negeri-negeri Melayu Tidak Bersekutu.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Johor dianggap berbeza daripada negeri lain?",p:["Mempunyai perlembagaan sendiri","Ditadbir oleh seorang Residen","Digabungkan dengan negeri Perak","Tiada sultan yang memerintah"],b:0,u:"Petikan menyatakan Johor mempunyai perlembagaan bertulis pada tahun 1895."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah usaha Sultan Abu Bakar untuk memajukan Johor?",p:["Memodenkan pentadbiran negeri","Menutup pelabuhan negeri itu","Menyerahkan negeri kepada Siam","Menolak sebarang perubahan baharu"],b:0,u:"Baginda memodenkan pentadbiran dan menggalakkan penanaman gambir dan lada."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bilakah Johor menerima Penasihat Am?",p:["1914","1885","1895","1909"],b:0,u:"Johor menerima Penasihat Am pada tahun 1914."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri pentadbiran Johor sebelum 1914.",p:["Perlembagaan bertulis","Hubungan sama taraf dengan Britain","Pentadbiran Residen Jeneral","Gabungan dengan Perak"],b:[0,1],u:"Johor mempunyai perlembagaan bertulis dan hubungan sama taraf dengan Britain."},
 {j:"pilih",t:"Bandingkan Johor dengan Perak. Pernyataan manakah BETUL?",p:["Perak menerima Residen sebelum Johor","Johor menerima Residen sebelum Perak","Kedua-duanya menerima Residen pada 1874","Kedua-duanya menerima Penasihat pada 1914"],b:0,u:"Perak menerima Residen pada 1874, manakala Johor menerima Penasihat Am pada 1914."},
 {j:"pilih",t:"Mengapakah British menghormati kedaulatan Johor sebelum 1914?",p:["Perjanjian dan perlembagaan kukuh","Johor mempunyai senjata nuklear","Johor tidak mempunyai hasil bumi","Johor jauh dari laut dan sungai"],b:0,u:"Perjanjian 1885 dan Perlembagaan 1895 melindungi kedudukan Johor."},
 {j:"pilih",t:"Apakah kesan penerimaan Penasihat Am pada 1914?",p:["Kuasa sultan berkurang","Kuasa sultan bertambah","Johor merdeka","Johor dikuasai Siam"],b:0,u:"Penasihat Am mengurangkan kuasa pentadbiran sultan."},
 {j:"pilih",t:"Mengapakah penerimaan Penasihat Am pada 1914 dianggap mengurangkan kedaulatan Johor?",p:["Sultan menerima nasihat British","Sultan memperoleh lebih banyak kuasa","Johor menjadi sebahagian daripada Siam","Johor bebas sepenuhnya daripada British"],b:0,u:"Sultan perlu menerima nasihat British dalam hal pentadbiran, jadi kedaulatan Johor berkurang."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Johor bertahan lama sebelum Penasihat","Johor ditadbir Residen sejak awal sekali","Johor tidak pernah mengadakan sebarang perjanjian","Johor dikuasai Siam pada keseluruhannya"],b:0,u:"Perlembagaan dan perjanjian membantu Johor bertahan lebih lama."}},

{n:5, tempat:"Dewan Penilai Kestabilan", sk:"7.4.4 · K7.4.5 · K7.4.6 · K7.4.8 Membuat justifikasi", lampiran:null,
 kadNama:"Kewibawaan", kadEm:"\u{1F451}", kadFakta:"Pemimpin yang berwibawa mempertahankan maruah bangsa melalui rundingan yang bijak, bukan melalui peperangan semata-mata.",
 bosKadNama:"Jujur", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Kejujuran dalam melaksanakan tanggungjawab melahirkan kepercayaan rakyat dan kestabilan negara.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah negeri Melayu Tidak Bersekutu lebih stabil?",p:["Sultan masih mempunyai pengaruh","Tiada penasihat British di negeri","Tiada hasil bumi di negeri itu","Tiada perjanjian dengan British"],b:0,u:"Pengaruh sultan yang berterusan menjaga kestabilan politik."},
 {j:"pilih",t:"Seorang murid berkata, \"Penasihat British tidak memberi kesan kepada kuasa sultan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, kuasa pentadbiran berkurang","Tepat, tiada sebarang perubahan","Tepat, sultan menjadi lebih berkuasa","Kurang tepat, penasihat tidak pernah wujud"],b:0,u:"Penasihat tetap mengurangkan kuasa pentadbiran sultan."},
 {j:"pilih",t:"Antara berikut, sikap jujur dalam melaksanakan tanggungjawab ditunjukkan oleh:",p:["Pegawai yang menjaga amanah rakyat","Pegawai yang menerima rasuah","Pegawai yang menyembunyikan fakta","Pegawai yang mementingkan diri"],b:0,u:"Kejujuran bermakna menjaga amanah dan tanggungjawab."},
 {j:"banyak",t:"Pilih DUA alasan kestabilan politik penting untuk keamanan negara.",p:["Pembangunan berjalan lancar","Rakyat hidup aman","Pemimpin sentiasa berbalah","Negeri mudah dipecahkan"],b:[0,1],u:"Kestabilan membolehkan pembangunan dan menjamin keamanan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang penubuhan Negeri-negeri Melayu Tidak Bersekutu?",p:["Stabil, kuasa tempatan terhad","Merugikan negeri sepenuhnya","Menguntungkan sultan sepenuhnya","Tidak memberi apa-apa kesan"],b:0,u:"Kestabilan terjaga, tetapi kuasa tempatan masih terhad."},
 {j:"pilih",t:"Mengapakah pemimpin berwibawa penting untuk mempertahankan maruah bangsa?",p:["Dihormati rakyat dan pihak luar","Disenangi pihak asing sahaja","Tidak perlu berunding langsung","Mengelak tanggungjawab pemimpin"],b:0,u:"Pemimpin berwibawa dihormati dan dapat membela kepentingan bangsa."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada pentadbiran Johor?",p:["Perundangan bertulis melindungi negeri","Perlembagaan tidak berguna langsung","Sultan tidak perlu berunding lagi","Perjanjian boleh diabaikan sahaja"],b:0,u:"Perlembagaan bertulis menjadi benteng kedaulatan."},
 {j:"pilih",t:"Mengapakah pentadbiran sistematik wajar diamalkan walaupun dalam sistem tradisional?",p:["Perkhidmatan menjadi cekap dan adil","Rakyat dibebani cukai tinggi","Pegawai diberi kuasa tanpa had","Undang-undang dikurangkan terus"],b:0,u:"Pentadbiran yang sistematik menjamin kecekapan dan keadilan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Negeri-negeri Melayu Tidak Bersekutu?",p:["Berautonomi tetapi di bawah pengaruh British","Bebas daripada pengaruh British","Dikuasai Siam pada keseluruhannya","Serupa dengan Negeri-negeri Melayu Bersekutu"],b:0,u:"Negeri-negeri itu lebih berautonomi tetapi tetap di bawah pengaruh British."}},

{n:6, tempat:"Studio Pentadbiran Berkesan", sk:"K7.4.5 hingga K7.4.8 Pentadbiran berkesan dan kewibawaan pemimpin", lampiran:null,
 kadNama:"Kewibawaan Pemimpin", kadEm:"\u{1F31F}", kadFakta:"Pemimpin berwibawa jujur, bijak berunding dan berani mempertahankan kepentingan rakyat.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil iktibar daripada pengalaman negeri yang berjaya mengekalkan kedaulatannya.",
 soalan:[
 {j:"pilih",t:"Pengawas sekolah anda dituduh tidak adil. Sikap jujur yang wajar ditunjukkan ialah:",p:["Mengakui kesalahan dan berubah","Menyalahkan rakan sekelas","Menyembunyikan bukti kesalahan","Mengelak daripada bertemu guru"],b:0,u:"Kejujuran ialah mengakui kesilapan dan memperbaikinya."},
 {j:"pilih",t:"Kelab anda perlu berunding dengan pihak sekolah. Iktibar daripada Sultan Abu Bakar ialah:",p:["Berunding dengan hormat bijak","Menuntut dengan cara kasar","Menyerahkan kuasa kepada orang","Mengelak daripada rundingan"],b:0,u:"Rundingan bijak melindungi kepentingan tanpa konflik."},
 {j:"banyak",t:"Pilih DUA ciri pemimpin berwibawa.",p:["Jujur dalam tanggungjawab","Berani mempertahankan maruah","Mementingkan diri","Mudah dipengaruhi pihak asing"],b:[0,1],u:"Jujur dan berani mempertahankan maruah ialah ciri pemimpin berwibawa."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memastikan pentadbiran negeri berkesan?",p:["Latihan kakitangan secara berkala","Mengurangkan latihan kakitangan","Menghapuskan semua peraturan","Mengabaikan aduan daripada rakyat"],b:0,u:"Kakitangan terlatih menjadikan pentadbiran lebih cekap."},
 {j:"pilih",t:"Seorang rakan berkata, \"Kestabilan politik tidak penting.\" Respons manakah paling rasional?",p:["Tanpa kestabilan, pembangunan terganggu","Betul, ia tidak berkaitan","Betul, rakyat tidak peduli","Pembangunan tidak memerlukan kestabilan"],b:0,u:"Kestabilan politik penting untuk pembangunan dan keamanan."},
 {j:"pilih",t:"Bagaimanakah murid menyumbang kepada kestabilan negara?",p:["Menjaga perpaduan dan peraturan","Menyebarkan fitnah dan khabar angin","Bergaduh antara kaum di sekolah","Mengabaikan undang-undang negara"],b:0,u:"Perpaduan dan sikap hormat peraturan menyumbang kepada kestabilan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menerapkan nilai amanah dalam kalangan pelajar?",p:["Kantin kejujuran","Menyalin jawapan rakan","Menyembunyikan wang kutipan","Berbohong kepada guru"],b:0,u:"Kantin kejujuran melatih murid menjaga amanah."},
 {j:"pilih",t:"Mengapakah perlembagaan yang jelas melindungi negara?",p:["Menetapkan hak dan kuasa rakyat","Memberi kuasa mutlak kepada seorang","Menghapuskan undang-undang","Memutuskan hubungan antarabangsa"],b:0,u:"Perlembagaan yang jelas menetapkan hak dan kuasa supaya tiada penyalahgunaan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mewujudkan pentadbiran yang berkesan bagi memajukan negara.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada Negeri-negeri Melayu Tidak Bersekutu (contoh: Perlembagaan Johor 1895, Penasihat British, kewibawaan pemimpin, kestabilan politik). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat (contohnya Perjanjian Bangkok 1909, Perlembagaan Johor 1895), mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kejujuran, kewibawaan dan kestabilan."}}
];

module.exports = {
  id:"s3b4", tingkatan:3, kod:"4.0 Pentadbiran Negeri-negeri Melayu Tidak Bersekutu",
  tajuk:"Lima Negeri Penasihat",
  subtajuk:"Sejarah Ting. 3 · Bab 4 Pentadbiran Negeri-negeri Melayu Tidak Bersekutu",
  spi:SPI["7.4"],
  ulasan:{
   1:"{n} dapat memerihalkan pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu secara ringkas. Langkah seterusnya ialah memahami peluasan kuasa British di negeri-negeri itu.",
   2:"{n} memahami pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu. Perlu lebih latihan mengelaskan maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh mengelaskan maklumat tentang Negeri-negeri Melayu Tidak Bersekutu. Galakkan mencerakinkan peluasan pentadbiran British.",
   4:"{n} mampu mencerakinkan peluasan pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu. Seterusnya latih membuat justifikasi tentang kestabilan negara.",
   5:"{n} dapat membuat justifikasi tentang pembentukan Negeri-negeri Melayu Tidak Bersekutu dalam menjamin kestabilan. Sudah bersedia menjana idea pentadbiran yang berkesan.",
   6:"{n} berjaya menjana idea pentadbiran yang berkesan dalam memajukan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Negeri-negeri Melayu Tidak Bersekutu. Cadangan: ulang hentian pertama sambil melabel lima negeri pada peta dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1909", label:"Perjanjian Bangkok"},
     {masa:"1914", label:"Penasihat Am Johor"},
     {masa:"1919", label:"Penasihat British Terengganu"},
     {masa:"1923", label:"Penasihat British Kedah"},
     {masa:"1930", label:"Penasihat British Perlis"}],
     kapsyen:"Rajah 1 · Penasihat British di Negeri-negeri Melayu Tidak Bersekutu",
     alt:"Garis masa menegak: 1909 Perjanjian Bangkok; 1914 Penasihat Am Johor; 1919 Penasihat British Terengganu; 1923 Penasihat British Kedah; 1930 Penasihat British Perlis"},
   p1:petikan(1, "Johor sebelum 1914",
     ["Sultan Abu Bakar memodenkan Johor dan menjalin hubungan sama taraf dengan Britain. Baginda diiktiraf sebagai Sultan pada tahun 1885, dan Johor mempunyai perlembagaan bertulis pada tahun 1895.",
      "Selepas Sultan Abu Bakar mangkat, Johor akhirnya menerima Penasihat Am British pada tahun 1914. Kuasa pentadbiran sultan berkurang, tetapi agama dan adat kekal di bawah sultan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
