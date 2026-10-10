/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 7 Membina Kesejahteraan Negara.
   Standard Kandungan 14.1, Standard Pembelajaran 14.1.1 hingga 14.1.6 serta K14.1.7 hingga K14.1.10
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Perpaduan", sk:"14.1.1 Perpaduan dan integrasi nasional · 14.1.2 Dasar Pendidikan Kebangsaan", lampiran:null,
 kadNama:"Integrasi Nasional", kadEm:"\u{1F91D}", kadFakta:"Integrasi nasional ialah usaha menyatukan rakyat berbilang kaum dan wilayah supaya wujud identiti dan semangat bersama.",
 bosKadNama:"Penyata Razak", bosKadEm:"\u{1F4DA}", bosKadFakta:"Penyata Razak 1956 menjadi asas Dasar Pendidikan Kebangsaan, dengan kurikulum sama dan bahasa Melayu sebagai bahasa pengantar utama.",
 soalan:[
 {j:"pilih",t:"Usaha menyatukan rakyat berbilang kaum dikenali sebagai:",p:["Integrasi nasional","Penjajahan ekonomi berasingan","Pemisahan kaum mengikut pekerjaan","Pengasingan wilayah mengikut kaum"],b:0,u:"Integrasi nasional menyatukan rakyat."},
 {j:"pilih",t:"Penyata yang menjadi asas Dasar Pendidikan Kebangsaan ialah:",p:["Penyata Razak","Penyata Barnes","Penyata Reid","Penyata Briggs"],b:0,u:"Penyata Razak 1956."},
 {j:"pilih",t:"Akta yang melaksanakan Dasar Pendidikan Kebangsaan pada 1961 ialah:",p:["Akta Pelajaran","Akta Bahasa","Akta Tanah","Akta Polis"],b:0,u:"Akta Pelajaran 1961."},
 {j:"pilih",t:"Falsafah Pendidikan Kebangsaan dirumuskan pada tahun:",p:["1988","1956","1963","1957"],b:0,u:"Falsafah Pendidikan Kebangsaan 1988."},
 {j:"banyak",t:"Pilih DUA usaha membina kesejahteraan negara.",p:["Dasar Pendidikan Kebangsaan","Rukun Negara","Malayan Union","Darurat 1948"],b:[0,1],u:"Pendidikan kebangsaan dan Rukun Negara."},
 {j:"pilih",t:"Bahasa pengantar utama dalam sistem pendidikan kebangsaan ialah:",p:["Melayu","Inggeris","Cina","Tamil"],b:0,u:"Bahasa Melayu."},
 {j:"pilih",t:"Rukun Negara diisytiharkan pada:",p:["31 Ogos 1970","31 Ogos 1957","16 September 1963","13 Mei 1969"],b:0,u:"31 Ogos 1970."},
 {j:"pilih",t:"Perpaduan dan integrasi nasional penting untuk:",p:["Keamanan dan kemajuan negara","Pemisahan kaum dalam masyarakat","Pengukuhan prasangka antara kaum","Pertambahan konflik antara negeri"],b:0,u:"Perpaduan menjamin keamanan dan kemajuan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan dasar dan tahunnya yang betul.",p:["Penyata Razak: 1956","Akta Pelajaran: 1961","Rukun Negara: 1970","Rukun Negara: 1957","Akta Pelajaran: 1948"],b:[0,1,2],u:"Penyata Razak 1956, Akta Pelajaran 1961 dan Rukun Negara 1970."}},

{n:2, tempat:"Bilik Kronologi Kesejahteraan", sk:"14.1.3 · 14.1.4 · 14.1.5 Bahasa Melayu, kebudayaan dan sukan", lampiran:"gm1",
 kadNama:"Dewan Bahasa dan Pustaka", kadEm:"\u{1F4D6}", kadFakta:"Dewan Bahasa dan Pustaka ditubuhkan pada 1956 untuk memartabatkan bahasa Melayu sebagai bahasa ilmu dan bahasa perpaduan.",
 bosKadNama:"Piala Thomas", bosKadEm:"\u{1F3F8}", bosKadFakta:"Malaysia menjuarai Piala Thomas pada 1967. Kejayaan sukan menyatukan rakyat berbilang kaum.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Dewan Bahasa dan Pustaka ditubuhkan","Akta Pelajaran 1961 dikuatkuasakan","Rukun Negara diisytiharkan dengan rasmi","Dasar Kebudayaan Kebangsaan dirumuskan"],b:0,u:"DBP 1956 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Dasar Kebudayaan Kebangsaan dirumuskan?",p:["1971","1970","1961","1956"],b:0,u:"Rajah 1 menunjukkan 1971."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Dewan Bahasa dan Pustaka ditubuhkan","Akta Pelajaran 1961","Rukun Negara diisytiharkan","Dasar Kebudayaan Kebangsaan"],b:[0,1,2,3],u:"1956, 1961, 1970 dan 1971."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara DBP dan Dasar Kebudayaan Kebangsaan?",p:["15 tahun","14 tahun","10 tahun","5 tahun"],b:0,u:"1971 tolak 1956 ialah 15 tahun."},
 {j:"pilih",t:"Bahasa Melayu berperanan sebagai bahasa ilmu dan:",p:["Bahasa perpaduan","Bahasa perang saudara","Bahasa dagang antarabangsa","Bahasa istana di Melaka"],b:0,u:"Bahasa Melayu ialah bahasa ilmu dan perpaduan."},
 {j:"pilih",t:"Dasar Kebudayaan Kebangsaan berteraskan kebudayaan:",p:["Rakyat asal rantau ini","Eropah","Amerika","Jepun"],b:0,u:"Berteraskan kebudayaan rakyat asal rantau ini."},
 {j:"pilih",t:"Kejuaraan Piala Thomas 1967 menunjukkan sukan sebagai alat:",p:["Perpaduan","Perpecahan","Penjajahan","Pemisahan"],b:0,u:"Sukan menyatukan rakyat."},
 {j:"banyak",t:"Pilih DUA peranan sukan dalam perpaduan.",p:["Rakyat bersorak bersama","Atlet pelbagai kaum mewakili negara","Penonton diasingkan mengikut kaum","Persaingan tidak sihat antara kaum"],b:[0,1],u:"Sorakan bersama dan atlet pelbagai kaum menyatukan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Akta Pelajaran dan Rukun Negara?",p:["9 tahun","10 tahun","14 tahun","1 tahun"],b:0,u:"1970 tolak 1961 ialah 9 tahun."}},

{n:3, tempat:"Gelanggang Perpaduan", sk:"14.1.4 · 14.1.5 · 14.1.6 Membuat kronologi strategi kesejahteraan", lampiran:null,
 kadNama:"Lima Prinsip", kadEm:"\u{1F4DC}", kadFakta:"Rukun Negara mempunyai lima prinsip: Kepercayaan kepada Tuhan, Kesetiaan kepada Raja dan Negara, Keluhuran Perlembagaan, Kedaulatan Undang-undang, serta Kesopanan dan Kesusilaan.",
 bosKadNama:"SUKMA", bosKadEm:"\u{1F3C5}", bosKadFakta:"Sukan Malaysia (SUKMA) dianjurkan sejak 1986 untuk memupuk semangat kekitaan antara negeri.",
 soalan:[
 {j:"pilih",t:"Prinsip pertama Rukun Negara ialah:",p:["Kepercayaan kepada Tuhan","Kedaulatan Undang-undang","Keluhuran Perlembagaan","Kesopanan dan Kesusilaan"],b:0,u:"Kepercayaan kepada Tuhan."},
 {j:"pilih",t:"Prinsip kelima Rukun Negara ialah:",p:["Kesopanan dan Kesusilaan","Kepercayaan kepada Tuhan","Keluhuran Perlembagaan","Kesetiaan kepada Raja dan Negara"],b:0,u:"Kesopanan dan Kesusilaan."},
 {j:"pilih",t:"Rukun Negara dibaca dalam perhimpunan sekolah bagi:",p:["Menghayati nilai perpaduan","Menghukum murid yang lewat","Menghalang masa pelajaran","Menggantikan Perlembagaan negara"],b:0,u:"Pembacaan memupuk penghayatan."},
 {j:"banyak",t:"Pilih DUA prinsip Rukun Negara.",p:["Keluhuran Perlembagaan","Kedaulatan Undang-undang","Kuasa mutlak penjajah","Kebebasan tanpa sebarang had"],b:[0,1],u:"Keluhuran Perlembagaan dan Kedaulatan Undang-undang."},
 {j:"pilih",t:"Sukan Malaysia (SUKMA) pertama kali dianjurkan pada tahun:",p:["1986","1967","1957","1970"],b:0,u:"SUKMA bermula pada 1986."},
 {j:"pilih",t:"Pertandingan sukan antara negeri memupuk:",p:["Semangat kekitaan","Prasangka","Pengasingan","Permusuhan"],b:0,u:"Pertandingan sukan memupuk kekitaan."},
 {j:"pilih",t:"Pembinaan Sekolah Wawasan bertujuan:",p:["Menggalakkan interaksi antara kaum","Mengasingkan murid mengikut kaum","Mengurangkan bilangan sekolah rendah","Memisahkan pelajaran mengikut agama"],b:0,u:"Sekolah Wawasan menggalakkan interaksi."},
 {j:"pilih",t:"Antara berikut, yang manakah ialah urutan betul?",p:["DBP, Akta Pelajaran, Rukun Negara","Rukun Negara, DBP, Akta Pelajaran","Akta Pelajaran, Rukun Negara, DBP","Rukun Negara, Akta Pelajaran, DBP"],b:0,u:"1956, 1961, 1970."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah prinsip Rukun Negara dan BUKAN dasar ekonomi?",p:["Keluhuran Perlembagaan","Dasar Ekonomi Baru","Dasar Pembangunan Nasional","Wawasan 2020"],b:0,u:"Keluhuran Perlembagaan ialah prinsip Rukun Negara."}},

{n:4, tempat:"Arkib Kesejahteraan", sk:"14.1.5 · 14.1.6 Menganalisis usaha membina kesejahteraan dalam mewujudkan perpaduan", lampiran:"p1",
 kadNama:"Alat Perpaduan", kadEm:"\u{1F517}", kadFakta:"Pendidikan, bahasa, kebudayaan dan sukan ialah alat perpaduan yang saling melengkapi dalam membina kesejahteraan negara.",
 bosKadNama:"Pemimpin dan Rakyat", bosKadEm:"\u{1F465}", bosKadFakta:"Kemakmuran negara memerlukan peranan pemimpin yang adil dan rakyat yang bertanggungjawab.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pendidikan penting untuk perpaduan?",p:["Murid pelbagai kaum belajar bersama","Murid diasingkan mengikut kaum dalam kelas berasingan","Kaum dibezakan melalui kurikulum berbeza","Bahasa Melayu dilarang digunakan di sekolah"],b:0,u:"Petikan menyatakan murid pelbagai kaum belajar bersama."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah peranan bahasa Melayu?",p:["Bahasa ilmu dan perpaduan","Bahasa istana untuk golongan bangsawan","Bahasa asing untuk urusan dagang","Bahasa penjajah untuk pentadbiran"],b:0,u:"Bahasa Melayu ialah bahasa ilmu dan perpaduan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah sukan menyatukan rakyat?",p:["Rakyat menyokong pasukan negara bersama","Rakyat bertengkar tentang keputusan pertandingan","Kaum bersaing sesama sendiri dalam sukan","Pasukan dibezakan mengikut kaum atlet"],b:0,u:"Rakyat menyokong pasukan negara bersama."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA alat perpaduan.",p:["Pendidikan kebangsaan","Sukan","Pengasingan kaum","Prasangka"],b:[0,1],u:"Pendidikan kebangsaan dan sukan."},
 {j:"pilih",t:"Bandingkan peranan Rukun Negara dengan Dasar Pendidikan. Apakah persamaannya?",p:["Memupuk perpaduan","Memisahkan kaum dalam masyarakat","Memperluas konflik antara negeri","Menghapuskan bahasa kebangsaan"],b:0,u:"Kedua-duanya memupuk perpaduan."},
 {j:"pilih",t:"Mengapakah pendidikan penting untuk mengukuhkan perpaduan?",p:["Membentuk nilai dan pemikiran bersama","Membezakan murid mengikut latar belakang","Menyebarkan prasangka dalam kalangan murid","Mengasingkan kelas mengikut kaum"],b:0,u:"Pendidikan membentuk nilai bersama."},
 {j:"pilih",t:"Apakah kesan penghayatan Rukun Negara terhadap keharmonian?",p:["Keharmonian lebih terjaga","Keharmonian semakin terjejas teruk","Konflik antara kaum berleluasa","Prasangka dalam masyarakat bertambah"],b:0,u:"Keharmonian lebih terjaga."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada usaha membina kesejahteraan yang pelbagai?",p:["Perpaduan perlu pelbagai pendekatan","Satu dasar sahaja sudah mencukupi untuk semua","Perpaduan akan wujud dengan sendirinya","Dasar tidak diperlukan lagi oleh rakyat"],b:0,u:"Perpaduan memerlukan pelbagai pendekatan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Pelbagai alat perpaduan membina kesejahteraan","Kesejahteraan dibina melalui satu dasar sahaja","Kesejahteraan tidak boleh dibina oleh kerajaan","Kesejahteraan dibina oleh pihak asing semata"],b:0,u:"Pendidikan, bahasa, budaya dan sukan membina kesejahteraan."}},

{n:5, tempat:"Dewan Penilai Perpaduan", sk:"14.1.6 · K14.1.7 · K14.1.8 · K14.1.9 · K14.1.10 Menilai usaha membina kesejahteraan", lampiran:null,
 kadNama:"Menghayati Rukun Negara", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Menghayati Rukun Negara bermaksud mengamalkan lima prinsipnya dalam kehidupan, bukan sekadar menghafalnya.",
 bosKadNama:"Pendidikan dan Perpaduan", bosKadEm:"\u{1F4DA}", bosKadFakta:"Pendidikan yang adil dan bermutu membentuk rakyat yang bersatu dan berilmu.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah perpaduan dan keharmonian perlu dijaga?",p:["Menjamin kemajuan dan keamanan","Menjejaskan kemajuan dan pembangunan negara","Menambah prasangka antara pelbagai kaum","Melemahkan negara dari dalam"],b:0,u:"Perpaduan menjamin kemajuan dan keamanan."},
 {j:"pilih",t:"Seorang murid berkata, \"Rukun Negara hanya untuk dihafal.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia perlu diamalkan","Tepat, kerana ia perlu dihafal sahaja","Tepat, kerana ia tidak lagi penting","Kurang tepat, kerana ia tidak wujud"],b:0,u:"Rukun Negara perlu diamalkan."},
 {j:"pilih",t:"Antara berikut, peranan rakyat memastikan kemakmuran ialah:",p:["Bekerja dan mematuhi undang-undang","Merosakkan harta awam yang dikongsi bersama","Menyebar fitnah melalui media sosial","Mengabaikan tanggungjawab sebagai rakyat"],b:0,u:"Bekerja dan patuh undang-undang."},
 {j:"banyak",t:"Pilih DUA kepentingan pendidikan untuk perpaduan.",p:["Murid bergaul pelbagai kaum","Nilai murni dipupuk","Prasangka dipertahankan dalam kelas","Kaum diasingkan di sekolah"],b:[0,1],u:"Murid bergaul dan nilai murni dipupuk."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang usaha perpaduan negara?",p:["Berjaya banyak tetapi perlu diteruskan","Gagal sepenuhnya dan tiada kesan","Berjaya selama-lamanya tanpa cabaran","Tidak lagi diperlukan pada masa kini"],b:0,u:"Banyak berjaya tetapi perlu diteruskan."},
 {j:"pilih",t:"Mengapakah pemimpin berperanan memastikan kemakmuran?",p:["Dasar yang adil dilaksanakan","Dasar penting diabaikan oleh pemimpin","Rakyat dipinggirkan daripada pembangunan","Kuasa disalahgunakan untuk kepentingan sendiri"],b:0,u:"Pemimpin melaksanakan dasar yang adil."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting?",p:["Perpaduan perlu dipupuk berterusan","Perpaduan datang dengan sendirinya","Perpaduan tidak penting lagi hari ini","Perpaduan hanya urusan para menteri"],b:0,u:"Perpaduan perlu dipupuk berterusan."},
 {j:"pilih",t:"Mengapakah menghayati Rukun Negara membantu kesejahteraan?",p:["Nilai bersama menyatukan rakyat","Nilai bersama dilupakan oleh rakyat","Rakyat berpecah mengikut kepentingan","Peraturan diabaikan sepenuhnya"],b:0,u:"Nilai bersama menyatukan rakyat."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang usaha membina kesejahteraan negara?",p:["Perlu diteruskan untuk negara maju","Tidak lagi diperlukan pada masa kini","Sudah selesai sepenuhnya dan sempurna","Hanya menjadi urusan pihak kerajaan"],b:0,u:"Usaha perlu diteruskan untuk negara yang maju."}},

{n:6, tempat:"Studio Perpaduan", sk:"K14.1.7 hingga K14.1.10 Perpaduan, peranan pemimpin dan rakyat, pendidikan dan Rukun Negara", lampiran:null,
 kadNama:"Rumah Terbuka", kadEm:"\u{1F3E0}", kadFakta:"Rumah terbuka Malaysia, tempat pelbagai kaum menyambut perayaan bersama, ialah ciri unik perpaduan negara kita.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan strategi perpaduan lalu untuk mengekalkan kedaulatan.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk perpaduan. Idea manakah paling berasas?",p:["Sambutan perayaan semua kaum","Memisahkan kelas mengikut kaum murid","Melarang pergaulan antara kaum","Mengejek budaya kaum lain"],b:0,u:"Sambutan perayaan memupuk perpaduan."},
 {j:"pilih",t:"Dua kumpulan berselisih. Iktibar Rukun Negara yang sesuai ialah:",p:["Kesopanan dan kesusilaan","Berbalah dengan kasar sehingga bergaduh","Memulau kumpulan lain sepenuhnya","Menyebarkan fitnah tentang kumpulan lain"],b:0,u:"Kesopanan dan kesusilaan."},
 {j:"banyak",t:"Pilih DUA cara menghayati Rukun Negara.",p:["Mematuhi undang-undang","Menghormati agama lain","Merosakkan harta awam","Menghina pemimpin"],b:[0,1],u:"Patuh undang-undang dan hormat agama lain."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengajar Rukun Negara kepada rakan sebaya?",p:["Drama dan kuiz tentang lima prinsip","Menghafal lima prinsip tanpa memahaminya","Mengabaikan topik Rukun Negara","Menyalin nota daripada buku sahaja"],b:0,u:"Drama dan kuiz menjelaskan lima prinsip."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perpaduan hanya perlu semasa perayaan.\" Respons manakah paling rasional?",p:["Perpaduan perlu diamalkan setiap hari","Betul, ia perlu ketika musim perayaan","Betul, kerana ia tidak penting","Pemimpin negara yang perlu bersatu"],b:0,u:"Perpaduan diamalkan setiap hari."},
 {j:"pilih",t:"Bagaimanakah murid mengamalkan kesopanan dan kesusilaan?",p:["Menghormati guru dan rakan","Mengejek rakan yang berbeza kaum","Mengabaikan peraturan sekolah","Menyebar fitnah dalam kelas"],b:0,u:"Menghormati guru dan rakan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menggalakkan interaksi antara kaum di sekolah?",p:["Kelab dan sukan pelbagai kaum","Kelab yang menerima satu kaum sahaja","Pengasingan murid mengikut kaum","Persaingan sengit antara kaum"],b:0,u:"Kelab dan sukan pelbagai kaum."},
 {j:"pilih",t:"Mengapakah kesejahteraan negara menjadi tanggungjawab bersama?",p:["Dinikmati dan dijaga semua rakyat","Hanya tentera yang bertanggungjawab","Hanya pemimpin yang bertanggungjawab","Tiada sesiapa yang bertanggungjawab"],b:0,u:"Dinikmati dan dijaga semua rakyat."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang usaha membina kesejahteraan negara dalam mengekalkan kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA usaha (contoh: Dasar Pendidikan Kebangsaan, bahasa Melayu sebagai bahasa perpaduan, Dasar Kebudayaan Kebangsaan, sukan, Rukun Negara). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang usaha membina kesejahteraan, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti perpaduan, penghayatan Rukun Negara dan tanggungjawab bersama."}}
];

module.exports = {
  id:"s5b7", tingkatan:5, kod:"7.0 Membina Kesejahteraan Negara",
  tajuk:"Lima Prinsip Perpaduan",
  subtajuk:"Sejarah Ting. 5 · Bab 7 Membina Kesejahteraan Negara",
  spi:SPI["14.1"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang strategi membina kesejahteraan negara. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan strategi membina kesejahteraan negara berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi peristiwa strategi membina kesejahteraan negara. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang usaha membina kesejahteraan negara dalam mewujudkan perpaduan. Seterusnya latih menilainya.",
   5:"{n} dapat menilai kepentingan usaha membina kesejahteraan negara dalam membina negara yang maju. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang usaha membina kesejahteraan negara dalam mengekalkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Membina Kesejahteraan Negara. Cadangan: ulang hentian pertama sambil menyenaraikan lima prinsip Rukun Negara dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1956", label:"Dewan Bahasa dan Pustaka ditubuhkan"},
     {masa:"1961", label:"Akta Pelajaran 1961"},
     {masa:"1970", label:"Rukun Negara diisytiharkan"},
     {masa:"1971", label:"Dasar Kebudayaan Kebangsaan"}],
     kapsyen:"Rajah 1 · Usaha membina kesejahteraan negara",
     alt:"Garis masa menegak: 1956 Dewan Bahasa dan Pustaka ditubuhkan; 1961 Akta Pelajaran 1961; 1970 Rukun Negara diisytiharkan; 1971 Dasar Kebudayaan Kebangsaan"},
   p1:petikan(1, "Alat perpaduan negara",
     ["Dasar Pendidikan Kebangsaan membolehkan murid pelbagai kaum belajar bersama. Bahasa Melayu pula berperanan sebagai bahasa ilmu dan bahasa perpaduan, manakala Dasar Kebudayaan Kebangsaan memelihara identiti bersama.",
      "Sukan menyatukan rakyat yang menyokong pasukan negara bersama, dan Rukun Negara menjadi tonggak nilai. Semua alat ini saling melengkapi untuk membina kesejahteraan negara."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
