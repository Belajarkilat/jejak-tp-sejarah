/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 1 Warisan Negara Bangsa.
   Standard Kandungan 9.1, Standard Pembelajaran 9.1.1 hingga 9.1.4 serta K9.1.5 hingga K9.1.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata.
   Tarikh Melaka ditulis "kira-kira" kerana anggaran sarjana berbeza. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Melaka", sk:"9.1.1 Latar belakang negara bangsa · 9.1.2 Ciri negara bangsa", lampiran:null,
 kadNama:"Negara Bangsa", kadEm:"\u{1F3F0}", kadFakta:"Negara bangsa ialah negara yang mempunyai wilayah, rakyat, pemerintah berdaulat dan identiti bersama. Kesultanan Melayu Melaka ialah contoh negara bangsa sebelum kedatangan Barat.",
 bosKadNama:"Waad", bosKadEm:"\u{1F4DC}", bosKadFakta:"Waad ialah perjanjian antara Sri Teri Buana dengan Demang Lebar Daun. Rakyat berjanji taat setia, dan raja berjanji memerintah dengan adil.",
 soalan:[
 {j:"pilih",t:"Negara bangsa Melayu yang paling masyhur sebelum kedatangan Barat ialah:",p:["Kesultanan Melayu Melaka","Kerajaan Majapahit di Jawa","Kerajaan Angkor di Kemboja","Kerajaan Funan di Mekong"],b:0,u:"Kesultanan Melayu Melaka ialah contoh negara bangsa dengan wilayah, pemerintah dan identiti yang jelas."},
 {j:"pilih",t:"Pemerintah tertinggi dalam negara bangsa Melayu ialah:",p:["Sultan","Bendahara","Temenggung","Laksamana"],b:0,u:"Sultan ialah pemerintah tertinggi yang berdaulat."},
 {j:"pilih",t:"Perjanjian antara Sri Teri Buana dengan Demang Lebar Daun dikenali sebagai:",p:["Waad","Perjanjian Pangkor","Perjanjian Bangkok","Persetiaan Persekutuan"],b:0,u:"Waad menetapkan taat setia rakyat dan keadilan raja."},
 {j:"pilih",t:"Pembesar yang menjadi ketua pentadbir dan penasihat sultan Melaka ialah:",p:["Bendahara","Laksamana","Syahbandar","Penghulu Bendahari"],b:0,u:"Bendahara ialah pembesar tertinggi dan ketua pentadbir."},
 {j:"banyak",t:"Pilih DUA ciri sebuah negara bangsa.",p:["Wilayah yang jelas","Pemerintah yang berdaulat","Sistem tanpa raja atau ketua","Rakyat tidak mempunyai identiti"],b:[0,1],u:"Negara bangsa mempunyai wilayah yang jelas dan pemerintah yang berdaulat."},
 {j:"pilih",t:"Undang-undang yang mengatur pelayaran dan perdagangan di laut Melaka ialah:",p:["Undang-undang Laut Melaka","Hukum Kanun Pahang di Pekan","Undang-undang 99 Perak lama","Perlembagaan Johor tahun 1895"],b:0,u:"Undang-undang Laut Melaka mengawal kapal, anak kapal dan perdagangan."},
 {j:"pilih",t:"Bahasa perhubungan dan identiti rakyat Melaka ialah bahasa:",p:["Melayu","Latin","Portugis","Sanskrit"],b:0,u:"Bahasa Melayu menjadi bahasa pentadbiran, perdagangan dan identiti."},
 {j:"pilih",t:"Agama rasmi Kesultanan Melayu Melaka ialah:",p:["Islam","Hindu","Buddha","Kristian"],b:0,u:"Islam menjadi agama rasmi dan teras identiti Melaka."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan unsur negara bangsa dan contohnya di Melaka yang betul.",p:["Pemerintah: Sultan","Pentadbir utama: Bendahara","Undang-undang: Hukum Kanun Melaka","Agama rasmi: Hindu","Bahasa rasmi: Portugis"],b:[0,1,2],u:"Sultan, Bendahara dan Hukum Kanun Melaka sepadan. Agama rasmi Islam dan bahasa Melayu."}},

{n:2, tempat:"Bilik Kronologi Melaka", sk:"9.1.2 · 9.1.3 Sistem pentadbiran dan undang-undang", lampiran:"gm1",
 kadNama:"Pembesar Empat Lipatan", kadEm:"\u{1F465}", kadFakta:"Pentadbiran Melaka dibantu empat pembesar utama: Bendahara, Penghulu Bendahari, Temenggung dan Laksamana.",
 bosKadNama:"Hukum Kanun Melaka", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Hukum Kanun Melaka mengandungi peraturan tentang pemerintahan, jenayah, keluarga dan perniagaan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Melaka diasaskan","Sultan Mansur Syah memerintah","Sultan Alauddin Riayat Syah memerintah","Melaka jatuh ke tangan Portugis"],b:0,u:"Melaka diasaskan kira-kira 1400, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Melaka jatuh ke tangan Portugis?",p:["1511","1459","1477","1400"],b:0,u:"Rajah 1 menunjukkan Melaka jatuh pada 1511."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Melaka diasaskan","Sultan Mansur Syah memerintah","Sultan Alauddin Riayat Syah memerintah","Melaka jatuh ke tangan Portugis"],b:[0,1,2,3],u:"Kira-kira 1400, 1459, 1477 dan 1511."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pemerintahan Sultan Mansur Syah dan kejatuhan Melaka?",p:["52 tahun","34 tahun","111 tahun","18 tahun"],b:0,u:"1511 tolak 1459 ialah 52 tahun."},
 {j:"pilih",t:"Pembesar yang mengetuai angkatan laut Melaka ialah:",p:["Laksamana","Temenggung","Bendahara","Syahbandar"],b:0,u:"Laksamana mengetuai angkatan laut dan mengawal perairan."},
 {j:"pilih",t:"Pembesar yang menjaga keamanan dalam negeri dan bandar Melaka ialah:",p:["Temenggung","Laksamana","Bendahara","Penghulu Bendahari"],b:0,u:"Temenggung menjaga keamanan dalam negeri."},
 {j:"pilih",t:"Pembesar yang mengurus pelabuhan dan pedagang asing ialah:",p:["Syahbandar","Bendahara","Temenggung","Laksamana"],b:0,u:"Syahbandar mengurus kapal, pedagang dan cukai di pelabuhan."},
 {j:"banyak",t:"Pilih DUA keunggulan sistem undang-undang Melaka.",p:["Undang-undang bertulis","Mengawal perdagangan di laut","Dibuat oleh pedagang asing","Hanya berkuat kuasa di istana"],b:[0,1],u:"Hukum Kanun dan Undang-undang Laut bertulis serta mengawal perdagangan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pengasasan Melaka dan kejatuhannya?",p:["Kira-kira 111 tahun","Kira-kira 52 tahun","Kira-kira 34 tahun","Kira-kira 200 tahun"],b:0,u:"1511 tolak 1400 ialah kira-kira 111 tahun."}},

{n:3, tempat:"Balai Rakyat", sk:"9.1.3 · 9.1.4 Mengklasifikasi pengetahuan tentang warisan negara bangsa", lampiran:null,
 kadNama:"Rakyat dan Raja", kadEm:"\u{1F91D}", kadFakta:"Rakyat menumpukan taat setia kepada raja, manakala raja wajib berlaku adil. Hubungan ini ialah asas kestabilan negara bangsa.",
 bosKadNama:"Derhaka", bosKadEm:"\u{26A0}\u{FE0F}", bosKadFakta:"Derhaka bermaksud mengkhianati raja dan negara, dan dianggap kesalahan yang amat berat dalam masyarakat Melayu lama.",
 soalan:[
 {j:"pilih",t:"Hukum Kanun Melaka dikelaskan sebagai warisan dalam aspek:",p:["Undang-undang","Persuratan Melayu","Kesenian rakyat","Pertanian padi"],b:0,u:"Hukum Kanun Melaka ialah warisan undang-undang."},
 {j:"pilih",t:"Pembesar Empat Lipatan dikelaskan sebagai warisan dalam aspek:",p:["Pentadbiran","Kesenian rakyat","Pertanian padi","Perubatan tradisi"],b:0,u:"Pembesar Empat Lipatan ialah sistem pentadbiran."},
 {j:"pilih",t:"Sejarah Melayu dan Hikayat Hang Tuah dikelaskan sebagai warisan dalam aspek:",p:["Persuratan","Undang-undang","Ketenteraan","Ekonomi"],b:0,u:"Kedua-duanya ialah karya persuratan Melayu."},
 {j:"banyak",t:"Pilih DUA peranan rakyat dalam negara bangsa Melayu lama.",p:["Taat setia kepada raja","Bekerja menyumbang hasil negara","Memerintah menggantikan raja","Menghapuskan semua pembesar"],b:[0,1],u:"Rakyat taat setia dan menyumbang hasil negara."},
 {j:"pilih",t:"Raja menjatuhkan hukuman tanpa membicarakan seseorang. Perbuatan ini bercanggah dengan:",p:["Janji raja berlaku adil","Janji rakyat berdagang","Janji pembesar berperang","Janji nelayan menangkap ikan"],b:0,u:"Dalam Waad, raja berjanji berlaku adil kepada rakyat."},
 {j:"pilih",t:"Seorang pembesar mengutip cukai pelabuhan dengan jujur. Perbuatan ini menunjukkan:",p:["Integriti pentadbiran","Pentadbiran yang lemah sekali","Penyelewengan kuasa pembesar","Kekejaman pemerintah kepada rakyat"],b:0,u:"Kutipan cukai yang jujur menjamin hasil negara."},
 {j:"pilih",t:"Rakyat menyebut, \"Raja adil raja disembah, raja zalim raja disanggah.\" Maksudnya:",p:["Rakyat taat jika raja adil","Raja tidak boleh ditegur oleh rakyat","Rakyat mengatasi kuasa raja","Raja tidak perlu berlaku adil"],b:0,u:"Rakyat taat kepada raja yang adil."},
 {j:"pilih",t:"Kapal asing dikenakan peraturan Undang-undang Laut Melaka. Ini menunjukkan Melaka:",p:["Berdaulat di perairannya","Dikuasai pedagang asing","Tidak mempunyai undang-undang","Tunduk kepada Portugis"],b:0,u:"Melaka berkuasa menguatkuasakan undang-undang di perairannya."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah hubungan rakyat dan pemerintah yang SEPATUTNYA dalam Waad?",p:["Rakyat taat, raja adil","Rakyat memerintah, raja taat","Rakyat dan raja bersaing","Raja taat, pembesar adil"],b:0,u:"Rakyat berjanji taat setia, dan raja berjanji berlaku adil."}},

{n:4, tempat:"Arkib Negara Bangsa", sk:"9.1.4 Mencerakinkan maklumat tentang warisan negara bangsa", lampiran:"p1",
 kadNama:"Keunggulan Melaka", kadEm:"\u{1F31F}", kadFakta:"Keunggulan sistem pentadbiran dan undang-undang Melaka menarik pedagang dari seluruh dunia dan menjadikan Melaka makmur.",
 bosKadNama:"Kesinambungan", bosKadEm:"\u{1F517}", bosKadFakta:"Banyak unsur negara bangsa Melaka, seperti sistem beraja dan adat, diteruskan oleh negeri Melayu lain dan masih wujud hari ini.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah tujuan Hukum Kanun Melaka?",p:["Mengatur pemerintahan dan hidup","Menjual hasil laut dan hutan","Menghalang pelayaran kapal","Membina candi di pantai"],b:0,u:"Petikan menyatakan Hukum Kanun mengatur pemerintahan dan kehidupan masyarakat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pedagang yakin berniaga di Melaka?",p:["Undang-undang yang adil","Cukai tidak dikenakan langsung","Pelabuhan tidak berpengawal","Raja menjadi pedagang di pasar"],b:0,u:"Undang-undang yang adil dan teratur memberi keyakinan kepada pedagang."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah peranan Syahbandar?",p:["Mengurus pelabuhan dagang","Mengetuai angkatan laut","Menjaga istana sultan","Menulis hikayat diraja"],b:0,u:"Syahbandar mengurus pedagang mengikut asal mereka."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA faktor kegemilangan negara bangsa Melaka.",p:["Pentadbiran yang teratur","Undang-undang yang adil","Pemisahan pedagang daripada rakyat","Larangan perdagangan asing"],b:[0,1],u:"Pentadbiran teratur dan undang-undang yang adil memajukan Melaka."},
 {j:"pilih",t:"Bandingkan peranan Bendahara dan Laksamana. Pernyataan manakah BETUL?",p:["Bendahara mentadbir, Laksamana menjaga laut","Bendahara menjaga laut, Laksamana mentadbir","Kedua-duanya menjaga laut","Kedua-duanya mengurus pelabuhan"],b:0,u:"Bendahara ialah ketua pentadbir, manakala Laksamana mengetuai angkatan laut."},
 {j:"pilih",t:"Mengapakah pembahagian tugas pembesar Melaka menjadikan pentadbiran cekap?",p:["Setiap pembesar ada tugas","Pembesar berebut kuasa sesama sendiri","Raja tidak diperlukan lagi","Rakyat mentadbir sendiri"],b:0,u:"Pembahagian tugas yang jelas memudahkan pengurusan negara."},
 {j:"pilih",t:"Apakah kesan Waad kepada kestabilan negara bangsa?",p:["Keharmonian raja dan rakyat","Menimbulkan perang saudara","Menghapuskan kuasa raja","Menamatkan perdagangan Melaka"],b:0,u:"Waad mengekalkan keharmonian dengan janji timbal balik."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kegemilangan Melaka sebagai negara bangsa?",p:["Kepimpinan menyatukan rakyat","Perdagangan menjadikan rakyat berpecah","Kekayaan menghapuskan kuasa raja","Melaka bergantung kepada asing"],b:0,u:"Kepimpinan yang adil dan undang-undang yang jelas menyatukan rakyat."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Pentadbiran dan undang-undang Melaka unggul","Melaka maju kerana nasib baik","Undang-undang tidak penting kepada Melaka","Melaka tidak mempunyai pentadbiran"],b:0,u:"Pentadbiran yang teratur dan undang-undang yang adil menjadikan Melaka unggul."}},

{n:5, tempat:"Dewan Penilai Warisan", sk:"9.1.4 · K9.1.5 · K9.1.6 · K9.1.7 Menilai kewajaran memelihara warisan", lampiran:null,
 kadNama:"Setia kepada Raja dan Negara", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Prinsip Kesetiaan kepada Raja dan Negara dalam Rukun Negara berakar daripada tradisi taat setia rakyat Melayu sejak zaman negara bangsa awal.",
 bosKadNama:"Kepimpinan", bosKadEm:"\u{1F451}", bosKadFakta:"Pemimpin yang adil dan berwibawa menjadi asas kemakmuran. Melaka makmur ketika dipimpin sultan dan pembesar yang bijak.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah warisan negara bangsa wajar dipelihara?",p:["Ia membentuk jati diri kita","Ia tidak berguna lagi sekarang","Ia menyusahkan masyarakat kita","Ia cuma cerita dongeng lama"],b:0,u:"Warisan membentuk jati diri dan rasa bangga terhadap negara."},
 {j:"pilih",t:"Seorang murid berkata, \"Sistem beraja zaman lama tiada kaitan dengan kita.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia asas institusi raja","Tepat, institusi raja sudah lama hilang","Tepat, ia tidak pernah diwarisi","Kurang tepat, ia dicipta oleh Eropah"],b:0,u:"Institusi raja dan adat diwarisi hingga hari ini."},
 {j:"pilih",t:"Antara tindakan berikut, yang manakah menunjukkan kesetiaan kepada raja dan negara?",p:["Menghormati lambang negara","Menghina institusi raja negara","Mengabaikan undang-undang negara","Menyebarkan fitnah tentang raja"],b:0,u:"Menghormati lambang negara menunjukkan kesetiaan."},
 {j:"banyak",t:"Pilih DUA sebab kepimpinan berwibawa penting untuk kemakmuran negara.",p:["Pentadbiran lebih teratur","Rakyat lebih bersatu","Pembesar bersaing sesama sendiri","Undang-undang dipinggirkan"],b:[0,1],u:"Pemimpin berwibawa mengatur pentadbiran dan menyatukan rakyat."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang sistem beraja Melayu lama?",p:["Bersatu, tetapi bergantung pada raja","Merugikan rakyat dalam setiap keadaan","Tidak memberi kesan kepada negara","Sudah sempurna dari segala segi"],b:0,u:"Sistem itu menyatukan rakyat, tetapi bergantung pada keadilan raja."},
 {j:"pilih",t:"Mengapakah mematuhi undang-undang penting untuk kesejahteraan negara?",p:["Keamanan dan keadilan terjamin","Kuasa raja menjadi tidak terbatas","Hasil negara berkurang dengan banyak","Rakyat dibebani cukai yang tinggi"],b:0,u:"Undang-undang yang dipatuhi menjamin keamanan dan keadilan."},
 {j:"pilih",t:"Antara berikut, iktibar manakah paling penting daripada kejatuhan Melaka?",p:["Perpaduan dan kepimpinan dijaga","Senjata tidak perlu dikuatkan","Perdagangan tidak berguna langsung","Pembesar tidak perlu berbincang"],b:0,u:"Perpecahan dalaman melemahkan Melaka sebelum diserang."},
 {j:"pilih",t:"Mengapakah kita wajar berbangga dengan warisan Melaka?",p:["Ia bukti kemajuan nenek moyang","Ia menunjukkan kita lemah dahulu","Ia sama dengan negara Barat","Ia sudah dilupakan oleh dunia"],b:0,u:"Melaka membuktikan keupayaan nenek moyang membina negara maju."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang warisan negara bangsa?",p:["Wajar dipelihara demi jati diri","Tidak relevan untuk generasi baharu","Menghalang kemajuan negara","Hanya bernilai kepada pelancong"],b:0,u:"Warisan negara bangsa membentuk jati diri dan kesetiaan kepada negara."}},

{n:6, tempat:"Studio Warisan", sk:"K9.1.5 hingga K9.1.8 Kesetiaan, bangga, kepimpinan dan mematuhi undang-undang", lampiran:null,
 kadNama:"Rukun Negara", kadEm:"\u{1F4DC}", kadFakta:"Lima prinsip Rukun Negara ialah Kepercayaan kepada Tuhan, Kesetiaan kepada Raja dan Negara, Keluhuran Perlembagaan, Kedaulatan Undang-undang dan Kesopanan dan Kesusilaan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan fakta warisan negara bangsa untuk membina jati diri remaja.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk bangga terhadap warisan negara bangsa. Idea manakah paling berasas?",p:["Pameran sejarah Melaka","Menghapuskan mata pelajaran sejarah","Mengejek tokoh lama","Melarang lawatan ke muzium"],b:0,u:"Pameran berasaskan fakta memupuk bangga terhadap warisan."},
 {j:"pilih",t:"Kelas anda mahu mematuhi peraturan dengan sukarela. Iktibar daripada Hukum Kanun Melaka ialah:",p:["Peraturan jelas jamin keharmonian","Peraturan dihapuskan terus","Hukuman dibuat sesuka hati","Peraturan dirahsiakan daripada rakyat"],b:0,u:"Peraturan yang jelas dan adil menjamin keharmonian."},
 {j:"banyak",t:"Pilih DUA cara menunjukkan kesetiaan kepada raja dan negara.",p:["Menghormati lagu Negaraku","Mematuhi undang-undang negara","Menyebarkan fitnah tentang pemimpin","Merosakkan harta awam"],b:[0,1],u:"Menghormati lagu kebangsaan dan mematuhi undang-undang ialah tanda setia."},
 {j:"pilih",t:"Idea manakah paling rasional untuk melatih kepimpinan berwibawa dalam kalangan murid?",p:["Program kepimpinan berasaskan nilai","Memilih ketua berdasarkan keturunan","Membenarkan ketua bertindak sewenang-wenangnya","Menghapuskan semua jawatan pelajar"],b:0,u:"Kepimpinan berwibawa dibina dengan nilai adil dan amanah."},
 {j:"pilih",t:"Seorang rakan berkata, \"Undang-undang menyekat kebebasan kita.\" Respons manakah paling rasional?",p:["Undang-undang jamin kesejahteraan","Betul, undang-undang tidak perlu","Betul, ia hanya untuk hukuman","Kebebasan bermakna tiada peraturan"],b:0,u:"Undang-undang melindungi hak dan keamanan masyarakat."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memelihara Sejarah Melayu sebagai warisan?",p:["Mendigitalkan teksnya","Menyimpan di gudang tertutup","Membuang naskhah lama","Mengubah isinya sesuka hati"],b:0,u:"Pendigitalan menjadikan warisan mudah dibaca generasi muda."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan integriti dan hormat kepada warisan negara?",p:["Belajar sejarah dengan jujur","Menyalin kerja rakan sekelas","Mengabaikan perhimpunan sekolah","Memadam sejarah negara kita"],b:0,u:"Belajar dengan jujur menunjukkan hormat kepada warisan."},
 {j:"pilih",t:"Mengapakah kepimpinan perlu diwarisi dengan nilai, bukan sekadar jawatan?",p:["Nilai menentukan keadilan","Jawatan mengatasi nilai moral","Nilai menghalang kemajuan negara","Pemimpin tidak perlu adil"],b:0,u:"Pemimpin yang berpegang kepada nilai menjamin kemakmuran dan keadilan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk mengekalkan dan mempertahankan warisan negara bangsa dalam kalangan remaja Malaysia.",
  arahan:"Pilih sekurang-kurangnya DUA warisan negara bangsa (contoh: Waad, Hukum Kanun Melaka, Pembesar Empat Lipatan, Sejarah Melayu, sistem beraja). Terangkan fakta penting, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang negara bangsa Melaka, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kesetiaan, bangga akan warisan, integriti dan mematuhi undang-undang."}}
];

module.exports = {
  id:"s4b1", tingkatan:4, kod:"1.0 Warisan Negara Bangsa",
  tajuk:"Takhta dan Waad",
  subtajuk:"Sejarah Ting. 4 · Bab 1 Warisan Negara Bangsa",
  spi:SPI["9.1"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan berkaitan warisan negara bangsa. Langkah seterusnya ialah menjelaskan ciri dan contohnya.",
   2:"{n} dapat menjelaskan warisan negara bangsa berserta contoh. Perlu lebih latihan mengklasifikasi pengetahuan sebelum bergerak ke TP3.",
   3:"{n} boleh mengklasifikasi pengetahuan tentang warisan negara bangsa. Galakkan mencerakinkan hubungan rakyat dan pemerintah.",
   4:"{n} mampu mencerakinkan maklumat tentang warisan negara bangsa. Seterusnya latih menilai kewajaran memeliharanya.",
   5:"{n} dapat membuat penilaian tentang kewajaran memelihara warisan negara bangsa. Sudah bersedia menjana idea untuk mengekal dan mempertahankannya.",
   6:"{n} berjaya menjana idea untuk mengekal dan mempertahankan warisan negara bangsa. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Warisan Negara Bangsa. Cadangan: ulang hentian pertama sambil membina carta pembesar Melaka dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Kira-kira 1400", label:"Melaka diasaskan"},
     {masa:"1459", label:"Sultan Mansur Syah memerintah"},
     {masa:"1477", label:"Sultan Alauddin Riayat Syah memerintah"},
     {masa:"1511", label:"Melaka jatuh ke tangan Portugis"}],
     kapsyen:"Rajah 1 · Kesultanan Melayu Melaka sebagai negara bangsa",
     alt:"Garis masa menegak: kira-kira 1400 Melaka diasaskan; 1459 Sultan Mansur Syah memerintah; 1477 Sultan Alauddin Riayat Syah memerintah; 1511 Melaka jatuh ke tangan Portugis"},
   p1:petikan(1, "Pentadbiran dan undang-undang Melaka",
     ["Pentadbiran Melaka teratur kerana setiap pembesar mempunyai tugas tertentu. Bendahara mentadbir negeri, Temenggung menjaga keamanan, Laksamana mengetuai angkatan laut dan Syahbandar mengurus pedagang di pelabuhan.",
      "Hukum Kanun Melaka dan Undang-undang Laut Melaka mengatur pemerintahan, masyarakat dan perdagangan. Undang-undang yang adil dan dikuatkuasakan membuat pedagang yakin untuk berniaga di Melaka."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
