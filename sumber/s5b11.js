/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 11 Kecemerlangan Malaysia di Persada Dunia.
   Standard Kandungan 15.3, Standard Pembelajaran 15.3.1 hingga 15.3.5 serta K15.3.6 hingga K15.3.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Kecemerlangan", sk:"15.3.1 Isu global · 15.3.2 Ekonomi antarabangsa · 15.3.3 Kemanusiaan dan keamanan · 15.3.4 Kelestarian · 15.3.5 Wawasan", lampiran:null,
 kadNama:"Pengaman Malaysia", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Malaysia menyumbang anggota tentera dan polis kepada misi pengaman PBB di pelbagai negara, bermula di Kongo pada 1960.",
 bosKadNama:"MERCY Malaysia", bosKadEm:"\u{2695}\u{FE0F}", bosKadFakta:"MERCY Malaysia ditubuhkan pada 1999 sebagai badan sukarelawan perubatan yang membantu mangsa bencana dan konflik di dalam dan luar negara.",
 soalan:[
 {j:"pilih",t:"Misi pengaman PBB yang pertama disertai Tanah Melayu bermula pada 1960 di:",p:["Kongo","Somalia","Bosnia","Kemboja"],b:0,u:"Pasukan Tanah Melayu dihantar ke Kongo pada 1960."},
 {j:"pilih",t:"MERCY Malaysia ialah badan sukarelawan dalam bidang:",p:["Perubatan dan bantuan kemanusiaan","Perdagangan dan perniagaan besar","Pertahanan dan peperangan","Pelancongan dan hiburan"],b:0,u:"MERCY Malaysia memberi bantuan perubatan dan kemanusiaan."},
 {j:"pilih",t:"Pada Persidangan Bumi di Rio de Janeiro 1992, Malaysia berikrar mengekalkan sekurang-kurangnya:",p:["50 peratus kawasan hutan","10 peratus kawasan hutan","75 peratus kawasan hutan","95 peratus kawasan hutan"],b:0,u:"Malaysia berikrar mengekalkan sekurang-kurangnya 50 peratus kawasan hutan."},
 {j:"pilih",t:"Menara Berkembar Petronas di Kuala Lumpur siap dibina pada tahun:",p:["1998","1957","1971","2020"],b:0,u:"Menara Berkembar Petronas siap pada 1998."},
 {j:"banyak",t:"Pilih DUA negara yang menerima pasukan pengaman Malaysia di bawah PBB.",p:["Somalia","Bosnia","Jepun","Brazil"],b:[0,1],u:"Malaysia menghantar pasukan pengaman ke Somalia dan Bosnia."},
 {j:"pilih",t:"Antara berikut, yang manakah hasil eksport utama Malaysia di pasaran dunia?",p:["Minyak sawit","Teh Ceylon","Kopi Brazil","Gandum Kanada"],b:0,u:"Malaysia ialah antara pengeluar minyak sawit terbesar dunia."},
 {j:"pilih",t:"Wawasan Kemakmuran Bersama 2030 dilancarkan pada tahun:",p:["2019","1991","1971","1957"],b:0,u:"Wawasan Kemakmuran Bersama 2030 dilancarkan pada 2019."},
 {j:"pilih",t:"Malaysia dipilih sebagai ahli tidak tetap Majlis Keselamatan PBB sebanyak:",p:["Empat kali","Sekali","Sepuluh kali","Tidak pernah"],b:0,u:"Malaysia berkhidmat pada 1965, 1989–1990, 1999–2000 dan 2015–2016."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan penyertaan dan bidangnya yang betul.",p:["Pasukan pengaman PBB: keamanan dunia","MERCY Malaysia: kemanusiaan","Ikrar hutan 1992: kelestarian","Pasukan pengaman PBB: penjajahan","MERCY Malaysia: hiburan"],b:[0,1,2],u:"Pasukan pengaman untuk keamanan, MERCY untuk kemanusiaan dan ikrar hutan untuk kelestarian."}},

{n:2, tempat:"Bilik Kronologi Kecemerlangan", sk:"15.3.1 · 15.3.3 · 15.3.4 · 15.3.5 Menyusun maklumat kecemerlangan Malaysia", lampiran:"gm1",
 kadNama:"Persidangan Bumi", kadEm:"\u{1F333}", kadFakta:"Pada Persidangan Bumi 1992, Malaysia berikrar mengekalkan sekurang-kurangnya separuh daripada kawasan negara sebagai hutan.",
 bosKadNama:"Wawasan 2030", bosKadEm:"\u{1F52D}", bosKadFakta:"Wawasan Kemakmuran Bersama 2030 menyasarkan pembangunan yang saksama dan mampan menjelang 2030.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Ikrar hutan di Persidangan Bumi","Pasukan pengaman ke Somalia","MERCY Malaysia ditubuhkan","Wawasan Kemakmuran Bersama 2030"],b:0,u:"Ikrar hutan pada 1992 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah MERCY Malaysia ditubuhkan?",p:["1999","1992","1993","2019"],b:0,u:"Rajah 1 menunjukkan MERCY Malaysia ditubuhkan pada 1999."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Ikrar hutan di Persidangan Bumi","Pasukan pengaman ke Somalia","MERCY Malaysia ditubuhkan","Wawasan Kemakmuran Bersama 2030"],b:[0,1,2,3],u:"1992, 1993, 1999 dan 2019."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara ikrar hutan dengan penubuhan MERCY Malaysia?",p:["7 tahun","1 tahun","20 tahun","27 tahun"],b:0,u:"1999 tolak 1992 ialah 7 tahun."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan MERCY Malaysia dengan pelancaran Wawasan Kemakmuran Bersama 2030?",p:["20 tahun","7 tahun","27 tahun","26 tahun"],b:0,u:"2019 tolak 1999 ialah 20 tahun."},
 {j:"pilih",t:"Pemimpin Malaysia yang membawa ikrar hutan ke Persidangan Bumi 1992 ialah:",p:["Tun Dr Mahathir Mohamad","Tunku Abdul Rahman","Tun Abdul Razak","Tun Hussein Onn"],b:0,u:"Tun Dr Mahathir mengemukakan ikrar itu di Rio de Janeiro."},
 {j:"pilih",t:"Pasukan pengaman Malaysia di Somalia pada 1993 bertugas di bawah:",p:["Pertubuhan Bangsa-Bangsa Bersatu","Pertubuhan Perjanjian Atlantik Utara","Kesatuan Eropah","Persatuan Negara-negara Asia Tenggara"],b:0,u:"Misi di Somalia ialah misi PBB."},
 {j:"banyak",t:"Berdasarkan Rajah 1, pilih DUA peristiwa yang berlaku sebelum tahun 2000.",p:["Pasukan pengaman ke Somalia","MERCY Malaysia ditubuhkan","Wawasan Kemakmuran Bersama 2030","Wawasan 2020 mencapai tarikh sasaran"],b:[0,1],u:"Somalia 1993 dan MERCY 1999 berlaku sebelum tahun 2000."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara ikrar hutan dengan pelancaran Wawasan Kemakmuran Bersama 2030?",p:["27 tahun","20 tahun","7 tahun","26 tahun"],b:0,u:"2019 tolak 1992 ialah 27 tahun."}},

{n:3, tempat:"Gelanggang Dunia", sk:"15.3.2 · 15.3.3 · 15.3.4 Mengaplikasi peranan Malaysia dalam ekonomi, kemanusiaan dan kelestarian", lampiran:null,
 kadNama:"Ekonomi Antarabangsa", kadEm:"\u{1F4C8}", kadFakta:"Malaysia berdagang dengan pelbagai negara dan mengeksport barangan seperti elektronik, minyak sawit dan getah.",
 bosKadNama:"Bantuan Kemanusiaan", bosKadEm:"\u{1F91D}", bosKadFakta:"Rakyat Malaysia menghulurkan bantuan kepada mangsa bencana dan konflik di luar negara melalui sukarelawan dan badan kemanusiaan.",
 soalan:[
 {j:"pilih",t:"Malaysia menjual cip elektronik kepada pelanggan di pelbagai negara. Aktiviti ini menunjukkan peranan Malaysia dalam:",p:["Hubungan ekonomi antarabangsa","Hubungan ketenteraan antarabangsa","Pertikaian wilayah antarabangsa","Pemisahan perdagangan antarabangsa"],b:0,u:"Eksport elektronik ialah hubungan ekonomi antarabangsa."},
 {j:"pilih",t:"Pasukan penyelamat dan sukarelawan Malaysia membantu mangsa gempa bumi di negara lain. Tindakan ini menunjukkan semangat:",p:["Kesukarelawanan dan kemanusiaan","Penjajahan dan penaklukan","Permusuhan dan dendam","Pemulauan dan pengasingan"],b:0,u:"Membantu mangsa bencana ialah semangat kesukarelawanan."},
 {j:"pilih",t:"Malaysia mengekalkan hutan hujan tropika dan mengawal pembalakan. Tindakan ini menunjukkan komitmen terhadap:",p:["Kelestarian global","Pemusnahan alam sekitar","Pembukaan hutan secara berlebihan","Pengabaian khazanah alam"],b:0,u:"Menjaga hutan ialah komitmen terhadap kelestarian global."},
 {j:"pilih",t:"Anggota Pasukan Pengaman Malaysia di Bosnia bertugas:",p:["Melindungi orang awam dan membantu menjaga keamanan","Menakluki wilayah dan menguasai sumber negara itu","Menyokong salah satu pihak yang sedang bertempur","Menyebarkan fahaman politik Malaysia ke Bosnia"],b:0,u:"Pasukan pengaman melindungi orang awam dan membantu menjaga keamanan."},
 {j:"banyak",t:"Pilih DUA contoh penyertaan rakyat dalam isu kemanusiaan.",p:["Menderma kepada mangsa bencana luar negara","Menyertai misi perubatan sukarelawan","Mengejek mangsa konflik di negara lain","Menyebarkan berita palsu tentang bencana"],b:[0,1],u:"Menderma dan menyertai misi perubatan ialah penyertaan kemanusiaan."},
 {j:"pilih",t:"Malaysia dipilih sebagai pengerusi OIC dan NAM pada awal 2000-an. Pemilihan ini menunjukkan:",p:["Kepercayaan dunia terhadap kepimpinan Malaysia","Kekalahan Malaysia dalam diplomasi peringkat dunia","Penolakan dunia terhadap dasar luar yang diamalkan","Pemisahan Malaysia daripada negara-negara membangun"],b:0,u:"Menjadi pengerusi menunjukkan kepercayaan dunia terhadap kepimpinan Malaysia."},
 {j:"pilih",t:"Malaysia berdagang dengan negara Asia, Eropah dan Amerika. Kelebihan hubungan perdagangan yang luas ialah:",p:["Ekonomi tidak bergantung kepada satu pasaran","Ekonomi bergantung kepada keputusan satu negara","Ekonomi terputus daripada pasaran di seluruh dunia","Ekonomi hilang kawalan kepada pihak luar negara"],b:0,u:"Pasaran yang luas mengurangkan kebergantungan kepada satu negara."},
 {j:"pilih",t:"Antara berikut, yang manakah contoh Malaysia menjaga kelestarian global?",p:["Mengekalkan hutan dan memelihara biodiversiti","Membakar hutan untuk membuka ladang yang luas","Mencemarkan sungai dengan sisa daripada kilang besar","Membuang sisa toksik ke dalam laut yang dalam"],b:0,u:"Mengekalkan hutan dan memelihara biodiversiti menjaga kelestarian."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah BUKAN contoh kecemerlangan Malaysia di persada dunia?",p:["Menjajah negara jiran yang lebih lemah","Menyumbang pasukan pengaman PBB","Membantu mangsa bencana melalui MERCY Malaysia","Berikrar memelihara hutan di Persidangan Bumi"],b:0,u:"Menjajah negara lain bukan kecemerlangan dan bertentangan dengan dasar luar Malaysia."}},

{n:4, tempat:"Arkib Persada Dunia", sk:"15.3.1 · 15.3.2 · 15.3.3 · 15.3.4 · 15.3.5 Menganalisis kecemerlangan Malaysia di persada dunia", lampiran:"p1",
 kadNama:"Wawasan Masa Hadapan", kadEm:"\u{1F52D}", kadFakta:"Wawasan masa hadapan Malaysia menumpukan pembangunan yang saksama, mampan dan berdaya saing dengan penyertaan seluruh rakyat.",
 bosKadNama:"Satu Dunia", bosKadEm:"\u{1F30D}", bosKadFakta:"Isu global seperti perubahan iklim, kemiskinan dan konflik memerlukan kerjasama semua negara.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah sumbangan Malaysia dalam menjaga keamanan dunia?",p:["Menghantar pasukan pengaman di bawah PBB","Menghantar tentera untuk menakluki negara kecil","Membekalkan senjata kepada pihak yang bertempur","Menolak setiap bentuk kerjasama dengan PBB"],b:0,u:"Petikan menyebut pasukan pengaman di bawah PBB."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah bentuk sumbangan MERCY Malaysia?",p:["Bantuan perubatan dan kemanusiaan","Bantuan peralatan perang","Bantuan menaikkan cukai","Bantuan membina kilang senjata"],b:0,u:"MERCY Malaysia menyumbang bantuan perubatan dan kemanusiaan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah Malaysia menunjukkan komitmen terhadap kelestarian global?",p:["Berikrar mengekalkan sekurang-kurangnya separuh kawasan hutan","Berikrar menebang hutan untuk pembangunan yang pesat","Berikrar menghentikan segala usaha menjaga alam sekitar","Berikrar menjual kawasan hutan kepada pihak luar negara"],b:0,u:"Malaysia berikrar mengekalkan sekurang-kurangnya 50 peratus hutan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri kecemerlangan Malaysia.",p:["Berdagang dengan banyak negara","Menyumbang kepada keamanan dan kemanusiaan","Memencilkan diri daripada dunia","Menolak kerjasama antarabangsa"],b:[0,1],u:"Berdagang luas dan menyumbang kepada keamanan serta kemanusiaan."},
 {j:"pilih",t:"Bandingkan sumbangan pasukan pengaman dengan MERCY Malaysia. Apakah persamaannya?",p:["Kedua-duanya membantu mangsa konflik dan bencana","Kedua-duanya bertujuan menjajah negara lain","Kedua-duanya bergantung kepada keuntungan perniagaan","Kedua-duanya hanya bertugas di dalam negara sendiri"],b:0,u:"Kedua-duanya membantu mangsa konflik atau bencana."},
 {j:"pilih",t:"Mengapakah penyertaan dalam misi pengaman PBB meningkatkan nama baik Malaysia?",p:["Malaysia dilihat menyumbang kepada keamanan dunia","Malaysia dilihat sebagai negara yang menakluki wilayah lain","Malaysia dilihat sebagai negara yang mengelak tanggungjawab","Malaysia dilihat sebagai negara yang menyokong peperangan"],b:0,u:"Penyertaan menunjukkan Malaysia menyumbang kepada keamanan dunia."},
 {j:"pilih",t:"Apakah kesan kerjasama ekonomi antarabangsa terhadap Malaysia?",p:["Pasaran lebih luas dan ekonomi berkembang","Pasaran menjadi lebih sempit dan ekonomi mengecil","Negara kehilangan kedaulatan ekonominya","Negara terputus hubungan dengan dunia luar"],b:0,u:"Kerjasama ekonomi memperluas pasaran dan mengembangkan ekonomi."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada pelbagai sumbangan Malaysia di persada dunia?",p:["Malaysia berperanan dalam bidang keamanan, ekonomi dan kemanusiaan","Malaysia berperanan dalam bidang peperangan dan pertahanan","Malaysia tidak memberi sebarang sumbangan kepada dunia","Malaysia bergantung kepada negara lain untuk setiap perkara"],b:0,u:"Malaysia berperanan dalam pelbagai bidang termasuk keamanan, ekonomi dan kemanusiaan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Kecemerlangan Malaysia lahir daripada sumbangan dalam pelbagai bidang","Kecemerlangan Malaysia lahir daripada peperangan dengan jiran","Kecemerlangan Malaysia lahir daripada bantuan satu negara asing","Kecemerlangan Malaysia tidak memerlukan kerjasama antarabangsa"],b:0,u:"Kecemerlangan lahir daripada sumbangan dalam pelbagai bidang."}},

{n:5, tempat:"Dewan Penilai Persada Dunia", sk:"15.3.5 · K15.3.6 · K15.3.7 · K15.3.8 · K15.3.9 Menilai kecemerlangan Malaysia", lampiran:null,
 kadNama:"Sukarelawan", kadEm:"\u{1F64B}", kadFakta:"Semangat kesukarelawanan menggerakkan rakyat membantu mangsa bencana dan konflik tanpa mengharapkan balasan.",
 bosKadNama:"Kerjasama Dunia", bosKadEm:"\u{1F30D}", bosKadFakta:"Keamanan dunia hanya dapat dijaga apabila negara-negara bekerjasama dan saling menghormati.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah kebijaksanaan penting dalam menguruskan isu global?",p:["Keputusan yang bijak melindungi kepentingan negara dan dunia","Keputusan melulu dapat menyelesaikan isu dengan cepat dan mudah","Keputusan negara yang kuat sentiasa lebih tepat daripada lain","Keputusan boleh dibuat dengan mengabaikan fakta yang ada"],b:0,u:"Kebijaksanaan melindungi kepentingan negara dan dunia."},
 {j:"pilih",t:"Seorang murid berkata, \"Isu global tiada kaitan dengan Malaysia.\" Penilaian manakah paling tepat?",p:["Kurang tepat, isu global memberi kesan kepada ekonomi kita","Tepat, kerana isu global tidak memberi apa-apa kesan kepada kita","Tepat, kerana Malaysia terpisah daripada negara-negara di dunia","Kurang tepat, kerana isu global tidak pernah wujud di dunia"],b:0,u:"Isu global memberi kesan kepada ekonomi dan alam sekitar negara."},
 {j:"pilih",t:"Mengapakah sikap prihatin dan peka terhadap isu serantau penting?",p:["Negara dapat bertindak segera apabila timbul masalah","Negara dapat mengabaikan masalah yang dihadapi oleh jiran","Negara dapat memutuskan hubungan dengan negara-negara jiran","Negara dapat memihak kepada salah satu pihak yang bertikai"],b:0,u:"Sikap prihatin membolehkan negara bertindak segera apabila masalah timbul."},
 {j:"banyak",t:"Pilih DUA kepentingan semangat kesukarelawanan dalam isu global.",p:["Bantuan sampai lebih cepat kepada mangsa","Hubungan baik antara rakyat negara berbeza terjalin","Mangsa dipinggirkan daripada bantuan yang disediakan","Permusuhan antara negara-negara bertambah teruk"],b:[0,1],u:"Bantuan cepat dan hubungan baik antara rakyat negara berbeza."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang kecemerlangan Malaysia di persada dunia?",p:["Banyak sumbangan tetapi cabaran global perlu dihadapi","Tidak mempunyai sebarang sumbangan di peringkat dunia","Mengatasi setiap cabaran global dengan sempurna dan segera","Cabaran global tidak perlu dihadapi lagi pada masa depan"],b:0,u:"Banyak sumbangan tetapi cabaran perlu terus dihadapi."},
 {j:"pilih",t:"Mengapakah komitmen Malaysia terhadap kelestarian global wajar dipuji?",p:["Memelihara alam sekitar untuk kegunaan generasi akan datang","Menghabiskan sumber alam secepat mungkin untuk keuntungan","Mengabaikan akibat pencemaran terhadap negara-negara dunia","Memindahkan pencemaran kepada negara jiran yang lebih kecil"],b:0,u:"Memelihara alam sekitar untuk generasi akan datang."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada kecemerlangan Malaysia di persada dunia?",p:["Kerjasama antarabangsa memberi manfaat kepada dunia","Negara kecil tidak mampu menyumbang kepada dunia ini","Kecemerlangan akan datang dengan sendirinya tanpa usaha","Kerjasama antarabangsa merugikan negara yang menyertainya"],b:0,u:"Kerjasama antarabangsa membawa manfaat kepada negara dan dunia."},
 {j:"pilih",t:"Mengapakah penglibatan dalam isu kemanusiaan menyumbang kepada kemakmuran negara?",p:["Imej baik menarik kerjasama dan pelaburan","Imej buruk negara menarik pelabur asing yang ramai","Negara menjadi kebal daripada pelbagai jenis cabaran","Negara dapat mengasingkan diri daripada dunia luar"],b:0,u:"Imej baik negara menarik kerjasama dan pelaburan."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kecemerlangan Malaysia di persada dunia?",p:["Perlu dikekalkan melalui sumbangan dan kerjasama berterusan","Sudah mencapai kemuncak dan tidak perlu diteruskan lagi","Bergantung kepada usaha pemimpin dan bukan usaha rakyat","Tidak berkait dengan kemakmuran dan kemajuan negara"],b:0,u:"Kecemerlangan dikekalkan melalui sumbangan dan kerjasama berterusan."}},

{n:6, tempat:"Studio Wawasan Dunia", sk:"K15.3.6 hingga K15.3.9 Idea kecemerlangan Malaysia demi keamanan dunia", lampiran:null,
 kadNama:"Duta Sukarelawan", kadEm:"\u{1F30F}", kadFakta:"Murid boleh menyumbang kepada keamanan dunia melalui kempen kitar semula, derma kemanusiaan dan sikap menghormati perbezaan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta tentang sumbangan Malaysia untuk menjaga keamanan dunia.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu membantu mangsa banjir di negara jiran. Idea manakah paling berasas?",p:["Mengadakan kutipan derma melalui badan yang sah","Menyimpan derma yang terkumpul untuk kegunaan peribadi","Melarang murid membantu orang lain yang memerlukan","Menyebarkan gambar mangsa untuk dijadikan bahan gurauan"],b:0,u:"Derma melalui badan yang sah membantu mangsa dengan berkesan."},
 {j:"pilih",t:"Kelas anda mahu menyumbang kepada kelestarian global. Iktibar daripada ikrar hutan 1992 yang sesuai ialah:",p:["Menanam pokok dan menjaga kawasan hijau sekolah","Menebang pokok untuk membuat tempat letak kereta","Membakar sampah di tepi kawasan hijau","Membuang plastik ke dalam longkang sekolah"],b:0,u:"Menanam pokok dan menjaga kawasan hijau selaras dengan ikrar hutan."},
 {j:"banyak",t:"Pilih DUA cara murid menyumbang kepada keamanan dunia.",p:["Menghormati perbezaan budaya dan agama rakan","Menyelesaikan pertengkaran secara aman","Menghasut rakan menyerang murid lain","Menyebarkan kebencian tentang bangsa lain"],b:[0,1],u:"Menghormati perbezaan dan menyelesaikan pertengkaran secara aman."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memperkenalkan sumbangan pasukan pengaman Malaysia kepada rakan sebaya?",p:["Pameran dan pembentangan tentang misi PBB","Menyalin teks buku daripada halaman ke halaman","Mengelak topik itu daripada perbincangan kelas","Menghafal tarikh peristiwa dan mengabaikan maksudnya"],b:0,u:"Pameran dan pembentangan memudahkan pemahaman."},
 {j:"pilih",t:"Seorang rakan berkata, \"Murid sekolah tidak mampu membantu menyelesaikan isu dunia.\" Respons manakah paling rasional?",p:["Murid boleh menyumbang melalui kempen, derma dan sikap hormat-menghormati","Betul, murid patut menunggu sehingga mereka dewasa","Betul, isu dunia terlalu besar untuk diselesaikan","Isu dunia diselesaikan oleh menteri dan pegawai kerajaan"],b:0,u:"Murid boleh menyumbang melalui kempen, derma dan sikap hormat-menghormati."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan semangat kesukarelawanan?",p:["Menyertai gotong-royong dan kempen kebajikan","Mengelak daripada sebarang kegiatan kebajikan","Mengutip bayaran daripada orang yang dibantu","Mengejek rakan yang menjadi sukarelawan"],b:0,u:"Menyertai gotong-royong dan kempen kebajikan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menggalakkan kerjasama antara murid dari pelbagai latar belakang?",p:["Projek kelas bersama bagi membantu komuniti","Kumpulan yang hanya menerima satu kaum","Larangan murid berbual dengan rakan berlainan agama","Pertandingan yang menyingkirkan murid yang lemah"],b:0,u:"Projek kelas bersama memupuk kerjasama pelbagai latar belakang."},
 {j:"pilih",t:"Mengapakah kecemerlangan Malaysia di persada dunia menjadi tanggungjawab bersama?",p:["Setiap rakyat membawa nama baik negara","Pemimpin negara yang membawa nama baik negara","Atlet negara yang membawa nama baik negara","Tiada seorang pun membawa nama baik negara"],b:0,u:"Setiap rakyat membawa nama baik negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang kecemerlangan Malaysia di persada dunia demi keamanan dunia.",
  arahan:"Pilih sekurang-kurangnya DUA bidang (contoh: pasukan pengaman PBB, bantuan kemanusiaan seperti MERCY Malaysia, kelestarian global, hubungan ekonomi antarabangsa, wawasan masa hadapan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang sumbangan Malaysia di persada dunia, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kebijaksanaan, sikap prihatin, kesukarelawanan dan kerjasama."}}
];

module.exports = {
  id:"s5b11", tingkatan:5, kod:"11.0 Kecemerlangan Malaysia di Persada Dunia",
  tajuk:"Suara Malaysia",
  subtajuk:"Sejarah Ting. 5 · Bab 11 Kecemerlangan Malaysia di Persada Dunia",
  spi:SPI["15.3"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang kecemerlangan Malaysia di persada dunia. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan kecemerlangan Malaysia di persada dunia berserta contoh. Perlu lebih latihan menyusun maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh menyusun maklumat berkaitan dengan kecemerlangan Malaysia di persada dunia. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat berkaitan dengan kecemerlangan Malaysia di persada dunia. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan kecemerlangan Malaysia di persada dunia dalam membina kemakmuran negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang kecemerlangan Malaysia di persada dunia demi keamanan dunia. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Kecemerlangan Malaysia di Persada Dunia. Cadangan: ulang hentian pertama sambil menyenaraikan sumbangan Malaysia dalam keamanan, kemanusiaan dan kelestarian dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1992", label:"Ikrar hutan di Persidangan Bumi"},
     {masa:"1993", label:"Pasukan pengaman ke Somalia"},
     {masa:"1999", label:"MERCY Malaysia ditubuhkan"},
     {masa:"2019", label:"Wawasan Kemakmuran Bersama 2030"}],
     kapsyen:"Rajah 1 · Kecemerlangan Malaysia di persada dunia",
     alt:"Garis masa menegak: 1992 Ikrar hutan di Persidangan Bumi; 1993 Pasukan pengaman ke Somalia; 1999 MERCY Malaysia ditubuhkan; 2019 Wawasan Kemakmuran Bersama 2030"},
   p1:petikan(1, "Malaysia di persada dunia",
     ["Malaysia menyumbang kepada keamanan dunia dengan menghantar pasukan pengaman di bawah PBB. MERCY Malaysia pula memberikan bantuan perubatan dan kemanusiaan kepada mangsa bencana dan konflik.",
      "Pada Persidangan Bumi 1992, Malaysia berikrar mengekalkan sekurang-kurangnya separuh kawasan hutan, manakala perdagangan dengan banyak negara mengembangkan ekonomi dan memperluas pasaran."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
