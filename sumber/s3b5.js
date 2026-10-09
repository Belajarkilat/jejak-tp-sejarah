/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 5 Pentadbiran Barat di Sarawak dan Sabah.
   Standard Kandungan 7.5, Standard Pembelajaran 7.5.1 hingga 7.5.4 serta K7.5.5 hingga K7.5.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Sungai Sarawak", sk:"7.5.1 Latar belakang pemerintahan tempatan · 7.5.2 Rejim Brooke", lampiran:null,
 kadNama:"Raja Putih", kadEm:"\u{1F451}", kadFakta:"James Brooke dilantik sebagai Raja Sarawak pada tahun 1841 oleh Sultan Brunei kerana membantu menumpaskan pemberontakan.",
 bosKadNama:"Tiga Raja", bosKadEm:"\u{1F465}", bosKadFakta:"Rejim Brooke diperintah oleh tiga orang: James Brooke, Charles Brooke dan Charles Vyner Brooke.",
 soalan:[
 {j:"pilih",t:"Sarawak dan Sabah pada awalnya berada di bawah kuasa Kesultanan:",p:["Brunei","Johor","Aceh","Melaka"],b:0,u:"Sarawak dan Sabah berada di bawah kuasa Kesultanan Brunei."},
 {j:"pilih",t:"Raja Sarawak yang pertama ialah:",p:["James Brooke","Charles Brooke","Vyner Brooke","Baron von Overbeck"],b:0,u:"James Brooke dilantik sebagai Raja Sarawak pada 1841."},
 {j:"pilih",t:"James Brooke dilantik sebagai Raja Sarawak oleh:",p:["Sultan Brunei","Gabenor Singapura","Raja Siam","Sultan Johor"],b:0,u:"Sultan Brunei, Omar Ali Saifuddin II, melantik James Brooke."},
 {j:"pilih",t:"Rejim Brooke memerintah Sarawak sehingga tahun:",p:["1946","1881","1888","1957"],b:0,u:"Pemerintahan Brooke berakhir pada tahun 1946 apabila Sarawak diserahkan kepada British."},
 {j:"banyak",t:"Pilih DUA tokoh Brooke yang memerintah Sarawak.",p:["James Brooke","Charles Brooke","Baron von Overbeck","Alfred Dent"],b:[0,1],u:"James dan Charles Brooke memerintah Sarawak. Overbeck dan Dent berkaitan dengan Sabah."},
 {j:"pilih",t:"Syarikat yang mentadbir Sabah ialah:",p:["Syarikat Borneo Utara British","Syarikat Hindia Timur Inggeris","Syarikat Belanda Timur","Syarikat Sarawak Raya"],b:0,u:"Syarikat Borneo Utara British mentadbir Sabah mulai 1881."},
 {j:"pilih",t:"Syarikat Borneo Utara British ditubuhkan oleh Baron von Overbeck dan:",p:["Alfred Dent","James Brooke","Francis Light","Stamford Raffles"],b:0,u:"Overbeck dan Alfred Dent mengasaskan syarikat itu."},
 {j:"pilih",t:"Syarikat Borneo Utara British ditubuhkan pada tahun:",p:["1881","1841","1946","1963"],b:0,u:"Piagam Diraja menubuhkan Syarikat Borneo Utara British pada 1881."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh dan tempat yang betul.",p:["James Brooke: Sarawak","Charles Brooke: Sarawak","Baron von Overbeck: Sabah","James Brooke: Sabah","Alfred Dent: Sarawak"],b:[0,1,2],u:"Brooke memerintah Sarawak, Overbeck dan Dent berkaitan dengan Sabah."}},

{n:2, tempat:"Bilik Kronologi Borneo", sk:"7.5.2 · 7.5.3 Peluasan kuasa Brooke dan Syarikat Borneo Utara British", lampiran:"gm1",
 kadNama:"Piagam Diraja", kadEm:"\u{1F4DC}", kadFakta:"Piagam Diraja 1881 memberi Syarikat Borneo Utara British hak mentadbir Sabah dengan kuasa seperti kerajaan.",
 bosKadNama:"Koloni Mahkota", bosKadEm:"\u{1F3F0}", bosKadFakta:"Pada 1946, Sarawak dan Sabah menjadi Koloni Mahkota British setelah rejim Brooke dan syarikat tamat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["James Brooke menjadi Raja Sarawak","Piagam Diraja Syarikat Borneo Utara","Perlindungan British","Koloni Mahkota"],b:0,u:"James Brooke menjadi Raja Sarawak pada 1841, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Syarikat Borneo Utara British mendapat Piagam Diraja?",p:["1881","1841","1888","1946"],b:0,u:"Rajah 1 menunjukkan Piagam Diraja pada tahun 1881."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["James Brooke menjadi Raja Sarawak","Piagam Diraja Syarikat Borneo Utara","Perlindungan British","Koloni Mahkota"],b:[0,1,2,3],u:"1841, 1881, 1888 dan 1946."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pelantikan James Brooke dan Piagam Diraja?",p:["40 tahun","47 tahun","105 tahun","7 tahun"],b:0,u:"1881 tolak 1841 ialah 40 tahun."},
 {j:"pilih",t:"Pada 1888, Sarawak dan Borneo Utara menjadi:",p:["Negeri naungan British","Koloni Mahkota British","Negeri Melayu Bersekutu","Wilayah milik Siam"],b:0,u:"Pada 1888 Sarawak dan Borneo Utara menjadi negeri di bawah perlindungan British."},
 {j:"pilih",t:"Pada 1946, Sarawak dan Sabah menjadi:",p:["Koloni Mahkota British","Negeri yang bebas penuh","Wilayah milik Brunei","Negeri bersekutu Melayu"],b:0,u:"Kedua-duanya menjadi Koloni Mahkota British pada 1946."},
 {j:"pilih",t:"Sebelum rejim Brooke, Sultan Brunei melantik James Brooke kerana beliau:",p:["Menumpaskan pemberontakan","Membeli tanah dengan harga murah","Membina pelabuhan baharu","Menukar agama penduduk"],b:0,u:"Brooke membantu Sultan Brunei menumpaskan pemberontakan."},
 {j:"banyak",t:"Pilih DUA perkara yang berlaku selepas Perang Dunia Kedua di Sarawak dan Sabah.",p:["Rejim Brooke tamat","Syarikat Borneo Utara menyerahkan Sabah","Piagam Diraja dikeluarkan","Brooke dilantik raja"],b:[0,1],u:"Rejim Brooke dan Syarikat Borneo Utara tamat pada 1946."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Piagam Diraja dan Koloni Mahkota?",p:["65 tahun","58 tahun","105 tahun","7 tahun"],b:0,u:"1946 tolak 1881 ialah 65 tahun."}},

{n:3, tempat:"Kuching dan Sandakan", sk:"7.5.2 · 7.5.3 · 7.5.4 Aplikasi pentadbiran Barat", lampiran:null,
 kadNama:"Pentadbiran Brooke", kadEm:"\u{1F4CB}", kadFakta:"Rejim Brooke mengamalkan pentadbiran peribadi dan menggaji pegawai Melayu dan Iban dalam jawatan tertentu.",
 bosKadNama:"Kudat dan Sandakan", bosKadEm:"\u{2693}", bosKadFakta:"Pusat pentadbiran Syarikat Borneo Utara British berpindah dari Kudat ke Sandakan, kemudian pusat perdagangan hasil hutan.",
 soalan:[
 {j:"pilih",t:"Seorang pegawai Brooke menyelesaikan pertikaian antara suku Iban. Tujuan utamanya ialah:",p:["Menjaga keamanan","Menambah cukai","Menghapuskan adat","Mengusir penduduk"],b:0,u:"Rejim Brooke menumpukan pada keamanan dan pengurusan pedalaman."},
 {j:"pilih",t:"Pedagang di Sandakan menjual hasil hutan kepada syarikat. Syarikat itu ialah:",p:["Syarikat Borneo Utara British","Syarikat Hindia Timur Inggeris","Syarikat Brooke","Syarikat Belanda"],b:0,u:"Syarikat Borneo Utara British mengendalikan perdagangan di Sabah."},
 {j:"pilih",t:"Kerajaan Brooke memperkenalkan kawalan terhadap pelanunan. Kesannya ialah:",p:["Sungai lebih selamat","Perdagangan terhenti seketika","Lanun semakin bertambah","Sungai ditutup kepada kapal"],b:0,u:"Tindakan menentang lanun menjadikan sungai dan laut lebih selamat."},
 {j:"banyak",t:"Pilih DUA langkah pentadbiran Syarikat Borneo Utara British.",p:["Membina pelabuhan dan perkhidmatan","Menggalakkan ladang tembakau","Melantik Raja Putih","Menyerahkan Sabah kepada Brunei"],b:[0,1],u:"Syarikat membina prasarana dan menggalakkan ladang tembakau."},
 {j:"pilih",t:"Pegawai syarikat membawa pekerja dari Cina untuk ladang tembakau. Sebabnya ialah:",p:["Kekurangan tenaga kerja","Larangan kepada penduduk bekerja","Perintah daripada Sultan Brunei","Permintaan daripada Sultan Sulu"],b:0,u:"Tenaga kerja tempatan tidak mencukupi untuk ladang yang luas."},
 {j:"pilih",t:"Pemerintah Brooke memberi pegawai Melayu jawatan dalam pentadbiran. Hal ini bertujuan:",p:["Mengekalkan sokongan tempatan","Menghapuskan adat penduduk","Menggantikan kuasa British","Menghalang perdagangan sungai"],b:0,u:"Pelantikan pegawai tempatan membantu pemerintah mendapat sokongan."},
 {j:"pilih",t:"Sebuah kapal dagang tiba di Kuching. Kerajaan Brooke mengenakan:",p:["Cukai perdagangan","Larangan masuk","Denda untuk semua kapal","Cukai sawah padi"],b:0,u:"Cukai perdagangan menjadi sumber hasil kerajaan."},
 {j:"pilih",t:"Syarikat Borneo Utara British mengutamakan:",p:["Keuntungan perdagangan","Penyebaran agama Kristian","Pendidikan penduduk tempatan","Pembinaan istana raja"],b:0,u:"Syarikat berdagang dan mementingkan keuntungan."}],
 bos:{j:"pilih",t:"Antara berikut, perbezaan utama tadbir Brooke dan Syarikat Borneo Utara British ialah:",p:["Raja di Sarawak, syarikat di Sabah","Kedua-duanya diperintah oleh syarikat","Syarikat di Sarawak, raja di Sabah","Kedua-duanya diperintah Brunei"],b:0,u:"Sarawak diperintah oleh raja keluarga Brooke, Sabah ditadbir oleh syarikat berpiagam."}},

{n:4, tempat:"Arkib Borneo", sk:"7.5.3 · 7.5.4 Membanding beza peluasan pengaruh", lampiran:"p1",
 kadNama:"Dua Corak", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Sarawak diperintah oleh sebuah keluarga raja, manakala Sabah ditadbir oleh sebuah syarikat dagang.",
 bosKadNama:"Pembangunan Tidak Sekata", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Pembangunan tertumpu di bandar dan pantai, manakala pedalaman Sarawak dan Sabah kekal kurang maju.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah perbezaan utama pentadbiran Sarawak dan Sabah?",p:["Raja berbanding syarikat dagang","Kedua-duanya ditadbir syarikat","Kedua-duanya ditadbir oleh raja","Kedua-duanya ditadbir Brunei"],b:0,u:"Sarawak diperintah oleh Raja Brooke, Sabah oleh syarikat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah persamaan pentadbiran kedua-dua wilayah?",p:["Bergantung pada hasil dagang","Dipimpin oleh seorang sultan","Dikawal sepenuhnya oleh Siam","Mengamalkan Adat Perpatih"],b:0,u:"Kedua-duanya bergantung pada hasil perdagangan seperti hasil hutan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan pentadbiran syarikat di Sabah?",p:["Keuntungan diutamakan","Pendidikan diutamakan","Agama diutamakan","Tentera diutamakan"],b:0,u:"Syarikat berdagang, jadi keuntungan menjadi keutamaan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri pentadbiran Brooke.",p:["Pentadbiran oleh keluarga raja","Pegawai tempatan turut dilantik","Pentadbiran oleh syarikat","Diperintah Residen Jeneral"],b:[0,1],u:"Brooke mentadbir sebagai keluarga raja dan melantik pegawai tempatan."},
 {j:"pilih",t:"Bandingkan Sarawak dengan Negeri-negeri Melayu Bersekutu. Apakah perbezaannya?",p:["Raja Brooke, bukan Residen","Kedua-duanya mempunyai Residen Jeneral","Sarawak diperintah sultan Melayu","Sarawak diperintah oleh Siam"],b:0,u:"Sarawak diperintah oleh Raja Brooke, bukan sistem Residen."},
 {j:"pilih",t:"Mengapakah British membiarkan Brooke dan syarikat mentadbir?",p:["Menjimatkan kos pentadbiran","Mereka tidak berminat","Sarawak dan Sabah tidak ada hasil","Dilarang oleh Brunei"],b:0,u:"British mengawal secara tidak langsung dengan kos yang rendah."},
 {j:"pilih",t:"Apakah kesan pentadbiran Brooke terhadap pedalaman?",p:["Penduduk mengekalkan adat","Adat dihapuskan terus","Penduduk dipindahkan semua","Pedalaman dimajukan sepenuhnya"],b:0,u:"Rejim Brooke mengekalkan banyak adat tempatan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis tentang pengaruh Barat di Sarawak dan Sabah?",p:["Cara berbeza, tujuan serupa","Cara pentadbiran sama, tujuan berbeza","Tiada pengaruh Barat langsung","Pengaruh Barat hanya di Sarawak"],b:0,u:"Kedua-duanya berbeza dari segi pentadbiran tetapi bertujuan mendapatkan keuntungan dan kawalan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Corak berbeza, sumber dimanfaatkan","Kedua-duanya sama dari segi pemerintah","Kedua-duanya tidak berhubung dengan British","Kedua-duanya mundur dan terasing"],b:0,u:"Pentadbiran berbeza, tetapi kedua-duanya memanfaatkan sumber tempatan."}},

{n:5, tempat:"Dewan Penilai Borneo", sk:"7.5.4 · K7.5.5 · K7.5.6 · K7.5.7 Membuat justifikasi", lampiran:null,
 kadNama:"Kewibawaan Pemimpin", kadEm:"\u{1F451}", kadFakta:"Kejayaan James Brooke bergantung pada keupayaan beliau berunding dengan pembesar tempatan.",
 bosKadNama:"Kesediaan Berubah", bosKadEm:"\u{1F504}", bosKadFakta:"Perubahan yang membawa kebaikan, seperti keamanan dan perdagangan, boleh diterima dengan sikap berwaspada.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah rejim Brooke dapat bertahan lama?",p:["Menjalin hubungan dengan penduduk","Menggunakan tentera dari Siam","Tidak memungut sebarang cukai","Tiada pembesar tempatan di Sarawak"],b:0,u:"Hubungan baik dengan penduduk tempatan menguatkan pentadbiran Brooke."},
 {j:"pilih",t:"Seorang murid berkata, \"Pentadbiran Brooke sepenuhnya menguntungkan penduduk.\" Penilaian manakah paling tepat?",p:["Kurang tepat, kuasa tetap di asing","Tepat, tiada sebarang kerugian","Tepat, semua penduduk menjadi raja","Kurang tepat, tiada pentadbiran"],b:0,u:"Penduduk menikmati keamanan, tetapi kuasa tetap di tangan Brooke."},
 {j:"pilih",t:"Antara berikut, tindakan manakah menunjukkan sikap berwaspada terhadap anasir luar?",p:["Menilai kesan tawaran dahulu","Menerima setiap tawaran asing","Mengabaikan perjanjian yang ada","Menolak setiap perubahan baharu"],b:0,u:"Berwaspada bermaksud menilai dengan teliti sebelum menerima."},
 {j:"banyak",t:"Pilih DUA kelebihan pentadbiran sistematik di Sarawak dan Sabah.",p:["Keamanan lebih terjamin","Perdagangan berkembang","Kuasa tempatan bertambah","Cukai dihapuskan"],b:[0,1],u:"Pentadbiran teratur membawa keamanan dan perkembangan perdagangan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Syarikat Borneo Utara British?",p:["Ekonomi maju, utamakan keuntungan","Merugikan Sabah semata-mata","Menguntungkan penduduk sepenuhnya","Tidak memberi kesan kepada Sabah"],b:0,u:"Ekonomi berkembang, tetapi syarikat mengutamakan keuntungan."},
 {j:"pilih",t:"Mengapakah kewibawaan pemimpin penting dalam pembangunan negara?",p:["Dihormati dan diikuti rakyat","Hanya perlu ditakuti rakyat","Tidak perlu berunding dengan rakyat","Menolak setiap nasihat rakyat"],b:0,u:"Pemimpin berwibawa mendapat kepercayaan rakyat."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada pentadbiran Barat di Sarawak dan Sabah?",p:["Pentadbiran bijak membela rakyat","Syarikat sentiasa betul","Raja tidak perlu berunding dengan rakyat","Adat tidak penting kepada raja"],b:0,u:"Pentadbiran yang baik mesti memberi manfaat kepada rakyat."},
 {j:"pilih",t:"Mengapakah sistem pentadbiran yang sistematik perlu diteruskan hari ini?",p:["Menjamin perkhidmatan cekap","Menambah rasuah dalam pentadbiran","Melemahkan kerajaan negeri","Menutup ekonomi negara"],b:0,u:"Pentadbiran yang sistematik menjamin kecekapan dan keadilan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang pentadbiran Barat di Sarawak dan Sabah?",p:["Aman dan maju, kuasa dipegang asing","Memberi kuasa penuh kepada penduduk","Menghalang perdagangan sungai","Mengubah adat tempatan secara paksa"],b:0,u:"Keamanan dan ekonomi berkembang, tetapi kuasa tetap dipegang pihak asing."}},

{n:6, tempat:"Studio Borneo Berdaya Saing", sk:"K7.5.5 hingga K7.5.8 Pentadbiran berdaya saing dan kewibawaan pemimpin", lampiran:null,
 kadNama:"Borneo Hari Ini", kadEm:"\u{1F334}", kadFakta:"Sarawak dan Sabah kini berdaya saing melalui sektor tenaga, pelancongan, perladangan dan ekonomi digital.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar sejarah untuk menyelesaikan cabaran pembangunan hari ini.",
 soalan:[
 {j:"pilih",t:"Sebuah daerah di pedalaman Sarawak mahu maju. Iktibar daripada sejarah pentadbiran manakah paling sesuai?",p:["Bina prasarana, jaga adat","Abaikan pedalaman terus","Hapuskan adat penduduk","Bergantung pada pihak asing"],b:0,u:"Pembangunan perlu seimbang dengan penghormatan terhadap adat."},
 {j:"pilih",t:"Sabah mahu menarik pelancong. Idea manakah paling berasas?",p:["Promosi warisan dan hutan","Menutup sempadan negeri","Menebang hutan dengan bebas","Membuang adat penduduk"],b:0,u:"Warisan dan ekopelancongan memanfaatkan kekayaan tempatan."},
 {j:"banyak",t:"Pilih DUA cara menjadikan pentadbiran lebih berdaya saing.",p:["Menggunakan teknologi digital","Melatih kakitangan","Mengelak ilmu baharu","Mengurangkan perkhidmatan"],b:[0,1],u:"Teknologi dan latihan meningkatkan daya saing."},
 {j:"pilih",t:"Pemimpin kelas anda mahu mengurus kelab. Ciri pemimpin berwibawa yang wajar dicontohi ialah:",p:["Bijak berunding dan adil","Mementingkan diri sendiri","Menolak nasihat orang lain","Menyalahkan orang lain"],b:0,u:"Pemimpin berwibawa bijak berunding dan adil."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memastikan kekayaan hutan dimanfaatkan dengan bijak?",p:["Mengambil hasil terkawal","Menebang pokok sekali gus","Membakar hutan untuk ladang","Menjual hutan kepada asing"],b:0,u:"Pengambilan terkawal memastikan hutan terus memberi manfaat."},
 {j:"pilih",t:"Seorang rakan berkata, \"Sejarah pentadbiran lama tidak penting.\" Respons manakah paling rasional?",p:["Ia memberi iktibar masa depan","Betul, ia sudah usang","Betul, ia sangat membosankan","Hanya sejarah luar negara penting"],b:0,u:"Sejarah memberi iktibar tentang pentadbiran yang berkesan."},
 {j:"pilih",t:"Bagaimanakah murid menggalakkan perpaduan antara penduduk Semenanjung, Sarawak dan Sabah?",p:["Pertukaran budaya sekolah","Memisahkan kumpulan murid","Mengejek loghat rakan","Mengelak daripada berkawan"],b:0,u:"Pertukaran budaya memupuk kefahaman dan perpaduan."},
 {j:"pilih",t:"Mengapakah sistem pentadbiran yang berdaya saing penting untuk masa hadapan?",p:["Menghadapi persaingan global","Menghalang pembangunan negara","Menolak teknologi baharu","Menambah birokrasi pejabat"],b:0,u:"Pentadbiran berdaya saing membolehkan negara menghadapi persaingan global."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mewujudkan sistem pentadbiran yang berdaya saing di Sarawak atau Sabah pada masa hadapan.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada pentadbiran Brooke atau Syarikat Borneo Utara British (contoh: keamanan dan prasarana, penghormatan adat, keuntungan yang tidak adil). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat (contohnya rejim Brooke 1841, Piagam Diraja 1881), mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kewibawaan, kesediaan menerima perubahan dan berwaspada."}}
];

module.exports = {
  id:"s3b5", tingkatan:3, kod:"5.0 Pentadbiran Barat di Sarawak dan Sabah",
  tajuk:"Raja Putih dan Piagam",
  subtajuk:"Sejarah Ting. 3 · Bab 5 Pentadbiran Barat di Sarawak dan Sabah",
  spi:SPI["7.5"],
  ulasan:{
   1:"{n} dapat memerihalkan pentadbiran Barat di Sarawak dan Sabah. Langkah seterusnya ialah memahami peluasan kuasa Brooke dan Syarikat Borneo Utara British.",
   2:"{n} memahami pentadbiran Barat di Sarawak dan Sabah. Perlu lebih latihan membina kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membina kronologi pentadbiran rejim Brooke dan Syarikat Borneo Utara British. Galakkan membanding beza kedua-duanya.",
   4:"{n} mampu membanding beza peluasan pengaruh Barat di Sarawak dan Sabah. Seterusnya latih membuat justifikasi tentang pentadbiran yang sistematik.",
   5:"{n} dapat membuat justifikasi tentang perluasan pengaruh Barat dalam membentuk pentadbiran yang sistematik. Sudah bersedia menjana idea sistem pentadbiran berdaya saing.",
   6:"{n} berjaya menjana idea sistem pentadbiran yang berdaya saing di masa hadapan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pentadbiran Barat di Sarawak dan Sabah. Cadangan: ulang hentian pertama sambil membina jadual perbandingan Sarawak dan Sabah dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1841", label:"James Brooke menjadi Raja Sarawak"},
     {masa:"1881", label:"Piagam Diraja Syarikat Borneo Utara"},
     {masa:"1888", label:"Perlindungan British"},
     {masa:"1946", label:"Koloni Mahkota"}],
     kapsyen:"Rajah 1 · Pentadbiran Barat di Sarawak dan Sabah",
     alt:"Garis masa menegak: 1841 James Brooke menjadi Raja Sarawak; 1881 Piagam Diraja Syarikat Borneo Utara; 1888 Perlindungan British; 1946 Koloni Mahkota"},
   p1:petikan(1, "Dua corak pentadbiran",
     ["Sarawak diperintah oleh keluarga Brooke, iaitu James Brooke, Charles Brooke dan Charles Vyner Brooke. Mereka mentadbir sebagai raja, mengekalkan banyak adat penduduk dan melantik pegawai tempatan.",
      "Sabah pula ditadbir oleh Syarikat Borneo Utara British, sebuah syarikat dagang yang menerima Piagam Diraja pada 1881. Syarikat mengutamakan keuntungan melalui hasil hutan dan ladang tembakau."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
