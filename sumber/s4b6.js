/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 6 Era Peralihan Kuasa British di Negara Kita.
   Standard Kandungan 10.3, Standard Pembelajaran 10.3.1 hingga 10.3.7 serta K10.3.8 hingga K10.3.11
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pejabat Tentera British", sk:"10.3.1 Pentadbiran Tentera British · 10.3.2 Malayan Union", lampiran:null,
 kadNama:"Malayan Union", kadEm:"\u{1F4DC}", kadFakta:"Malayan Union dibentuk pada 1 April 1946. Sultan hanya menjadi ketua agama dan adat, dan semua negeri Melayu diletakkan di bawah seorang Gabenor British.",
 bosKadNama:"Harold MacMichael", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"Sir Harold MacMichael diutus ke Tanah Melayu pada 1945 untuk mendapatkan tandatangan sultan bagi perjanjian Malayan Union.",
 soalan:[
 {j:"pilih",t:"Pentadbiran Tentera British (BMA) memerintah Tanah Melayu selepas:",p:["Jepun menyerah kalah","Perang Dunia Pertama","Kemerdekaan negara","Pengisytiharan Darurat"],b:0,u:"BMA memerintah selepas Jepun menyerah kalah pada 1945."},
 {j:"pilih",t:"Malayan Union dibentuk pada tahun:",p:["1946","1948","1957","1963"],b:0,u:"Malayan Union dibentuk pada 1 April 1946."},
 {j:"pilih",t:"Pegawai British yang mendapatkan tandatangan sultan untuk Malayan Union ialah:",p:["MacMichael","Sir Edward Gent","Sir Henry Gurney","Sir Gerald Templer"],b:0,u:"Sir Harold MacMichael berunding dengan sultan."},
 {j:"pilih",t:"Dalam Malayan Union, kuasa sultan terhad kepada:",p:["Agama dan adat","Pentadbiran dan cukai","Tentera dan polis","Hubungan luar negeri"],b:0,u:"Sultan hanya berkuasa dalam agama Islam dan adat Melayu."},
 {j:"banyak",t:"Pilih DUA ciri Malayan Union.",p:["Diketuai oleh Gabenor British","Kerakyatan terbuka kepada bukan Melayu","Sultan memegang semua kuasa","Singapura dimasukkan ke dalamnya"],b:[0,1],u:"Malayan Union diketuai Gabenor dan memberi kerakyatan terbuka. Singapura dikecualikan."},
 {j:"pilih",t:"Prinsip kerakyatan Malayan Union yang ditentang orang Melayu ialah:",p:["Jus soli","Jus sanguinis","Darurat","Berkecuali"],b:0,u:"Jus soli memberi kerakyatan mudah kepada bukan Melayu."},
 {j:"pilih",t:"Wilayah yang dikecualikan daripada Malayan Union ialah:",p:["Singapura","Perak","Selangor","Johor"],b:0,u:"Singapura menjadi koloni berasingan."},
 {j:"pilih",t:"Pentadbiran Tentera British dikenali dengan singkatan:",p:["BMA","MPAJA","UMNO","MCA"],b:0,u:"BMA bermaksud British Military Administration."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan istilah dan maksudnya yang betul.",p:["BMA: Pentadbiran Tentera British","Jus soli: kerakyatan mengikut kelahiran","Gabenor: ketua Malayan Union","Jus soli: kerakyatan mengikut keturunan sultan","BMA: Persatuan Melayu"],b:[0,1,2],u:"BMA ialah pentadbiran tentera, jus soli mengikut tempat lahir, dan Gabenor mengetuai Malayan Union."}},

{n:2, tempat:"Bilik Kronologi Peralihan", sk:"10.3.3 · 10.3.4 · 10.3.5 Reaksi terhadap Malayan Union dan penyerahan Sarawak", lampiran:"gm1",
 kadNama:"UMNO", kadEm:"\u{1F91D}", kadFakta:"Pertubuhan Kebangsaan Melayu Bersatu (UMNO) ditubuhkan pada 11 Mei 1946 di bawah pimpinan Dato' Onn Jaafar untuk menentang Malayan Union.",
 bosKadNama:"Rosli Dhobi", bosKadEm:"\u{1F5E1}\u{FE0F}", bosKadFakta:"Rosli Dhobi membunuh Gabenor Sarawak, Duncan Stewart, pada Disember 1949 sebagai bantahan terhadap penyerahan Sarawak kepada British.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Pentadbiran Tentera bermula","Kongres Melayu Se-Malaya","Malayan Union dibentuk","Sarawak diserahkan kepada British"],b:0,u:"BMA bermula pada September 1945, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Malayan Union dibentuk?",p:["April 1946","Mac 1946","Julai 1946","September 1945"],b:0,u:"Rajah 1 menunjukkan Malayan Union dibentuk pada April 1946."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Pentadbiran Tentera British bermula","Kongres Melayu Se-Malaya","Malayan Union dibentuk","Sarawak diserahkan kepada British"],b:[0,1,2,3],u:"September 1945, Mac 1946, April 1946 dan Julai 1946."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Kongres Melayu dan penyerahan Sarawak?",p:["4 bulan","3 bulan","7 bulan","10 bulan"],b:0,u:"Julai tolak Mac ialah 4 bulan."},
 {j:"pilih",t:"Parti yang ditubuhkan untuk menentang Malayan Union ialah:",p:["UMNO","MCA","MIC","Parti Negara"],b:0,u:"UMNO ditubuhkan pada 1946."},
 {j:"pilih",t:"Pengerusi pertama UMNO ialah:",p:["Dato' Onn Jaafar","Tunku Abdul Rahman","Tun Razak","Dato' Sri Mohamad"],b:0,u:"Dato' Onn Jaafar menjadi presiden pertama UMNO."},
 {j:"pilih",t:"Raja Sarawak yang menyerahkan Sarawak kepada British ialah:",p:["Charles Vyner Brooke","James Brooke dari England","Charles Brooke dari Sarawak","Sultan Omar Ali dari Brunei"],b:0,u:"Charles Vyner Brooke menyerahkan Sarawak pada 1946."},
 {j:"banyak",t:"Pilih DUA reaksi orang Melayu terhadap Malayan Union.",p:["Menubuhkan UMNO","Raja-raja memboikot upacara pelantikan Gabenor","Menyokong dasar jus soli sepenuhnya","Menyerahkan kuasa raja kepada Gabenor"],b:[0,1],u:"Orang Melayu menubuhkan UMNO dan raja-raja memboikot upacara Gabenor."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Pentadbiran Tentera British dan Malayan Union?",p:["7 bulan","4 bulan","10 bulan","2 bulan"],b:0,u:"September 1945 hingga April 1946 ialah 7 bulan."}},

{n:3, tempat:"Kongres Melayu", sk:"10.3.4 · 10.3.5 · 10.3.6 Membuat kronologi era peralihan", lampiran:null,
 kadNama:"Hidup Melayu", kadEm:"\u{1F4E3}", kadFakta:"Laungan \"Hidup Melayu\" menjadi lambang perpaduan orang Melayu menentang Malayan Union.",
 bosKadNama:"Koloni Mahkota Sabah", bosKadEm:"\u{1F3F0}", bosKadFakta:"Sabah menjadi Koloni Mahkota British pada 15 Julai 1946 apabila Syarikat Borneo Utara British menyerahkan pentadbiran.",
 soalan:[
 {j:"pilih",t:"Seorang wakil Melayu bersemangat selepas Kongres Melayu menolak Malayan Union. Ini menunjukkan:",p:["Perpaduan orang Melayu","Perpecahan orang Melayu","Sokongan kepada British","Kemenangan komunis"],b:0,u:"Kongres menyatukan orang Melayu menentang Malayan Union."},
 {j:"pilih",t:"Sultan memboikot upacara pelantikan Gabenor Malayan Union. Tindakan ini ialah:",p:["Bantahan Malayan Union","Sokongan kepada Gabenor","Perayaan kemerdekaan","Perjanjian damai"],b:0,u:"Boikot menunjukkan bantahan sultan."},
 {j:"pilih",t:"Penduduk Sarawak membantah penyerahan kepada British. Gerakan itu dikenali sebagai:",p:["Anti-Cession","Persatuan Sahabat Pena","Kesatuan Melayu Muda","Gerakan Kaum Muda"],b:0,u:"Gerakan Anti-Cession membantah penyerahan Sarawak."},
 {j:"banyak",t:"Pilih DUA wilayah yang menjadi Koloni Mahkota British pada 1946.",p:["Sarawak","Sabah","Perak","Kedah"],b:[0,1],u:"Sarawak dan Sabah menjadi Koloni Mahkota British pada 1946."},
 {j:"pilih",t:"Selepas bantahan hebat, Malayan Union akhirnya:",p:["Dimansuhkan","Diteruskan","Diperluas","Ditutup Singapura"],b:0,u:"Malayan Union dimansuhkan dan diganti Persekutuan Tanah Melayu 1948."},
 {j:"pilih",t:"Bantahan orang Melayu menggunakan cara:",p:["Aman dan berorganisasi","Peperangan terbuka","Merampas senjata","Meninggalkan negara"],b:0,u:"Mereka menentang melalui kongres, parti dan boikot."},
 {j:"pilih",t:"Gabenor Malayan Union yang pertama ialah:",p:["Sir Edward Gent","Sir Henry Gurney","Sir Harold Briggs","Sir Donald MacGillivray"],b:0,u:"Sir Edward Gent ialah Gabenor Malayan Union."},
 {j:"pilih",t:"Mengapakah orang tempatan Sarawak membantah penyerahan kepada British?",p:["Kehilangan hak memerintah","Memperoleh kemerdekaan","Menjadi lebih kaya","Menyokong Brooke berhenti"],b:0,u:"Penyerahan mengakhiri pemerintahan tempatan yang dikenali."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan reaksi terhadap Malayan Union dengan betul?",p:["Kongres Melayu, UMNO, pemansuhan","UMNO, pemansuhan, Kongres Melayu","Pemansuhan, UMNO, Kongres Melayu","Kongres Melayu, pemansuhan, UMNO"],b:0,u:"Kongres Melayu mencetuskan UMNO, kemudian Malayan Union dimansuhkan."}},

{n:4, tempat:"Arkib Peralihan", sk:"10.3.6 · 10.3.7 Mencerakinkan maklumat tentang era peralihan", lampiran:"p1",
 kadNama:"Mengapa Dibantah", kadEm:"\u{2753}", kadFakta:"Orang Melayu membantah Malayan Union kerana kuasa sultan dikurangkan, kerakyatan terlalu longgar dan kedudukan Melayu terjejas.",
 bosKadNama:"Berani Bersuara", bosKadEm:"\u{1F4E2}", bosKadFakta:"Membantah dengan cara beretika dan teratur lebih berkesan daripada kekerasan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah sultan membantah Malayan Union?",p:["Kuasa dikurangkan","Gaji mereka dinaikkan","Istana dibina semula","Cukai dihapuskan"],b:0,u:"Petikan menyatakan kuasa sultan dihadkan kepada agama dan adat."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah kerakyatan jus soli dibantah?",p:["Kedudukan orang Melayu terjejas","Orang Melayu mahu menjadi pendatang","Bukan Melayu ditolak","British menarik diri"],b:0,u:"Jus soli dianggap menjejaskan kedudukan orang Melayu."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan bantahan tersebut?",p:["Malayan Union dimansuhkan","Malayan Union diperkukuh","Sultan hilang gelaran","British memerintah selama-lamanya"],b:0,u:"Bantahan berkesan memaksa British memansuhkan Malayan Union."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA sebab Malayan Union dibantah.",p:["Kuasa sultan dikurangkan","Kerakyatan terlalu longgar","Pentadbiran menjadi teratur","Gabenor dipilih rakyat"],b:[0,1],u:"Kuasa sultan dikurangkan dan kerakyatan terlalu longgar."},
 {j:"pilih",t:"Bandingkan bantahan di Tanah Melayu dengan di Sarawak. Apakah persamaannya?",p:["Menentang keputusan British","Dipimpin oleh komunis","Dipimpin oleh Jepun","Berlaku pada tahun berbeza"],b:0,u:"Kedua-duanya menentang keputusan British."},
 {j:"pilih",t:"Mengapakah perpaduan penting dalam menghadapi tindakan British?",p:["Suara bersama lebih berpengaruh","Perpecahan membawa kejayaan","Pemimpin tidak diperlukan","Bantahan sendiri lebih kuat"],b:0,u:"Suara bersama lebih berpengaruh."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada sikap British yang memansuhkan Malayan Union?",p:["British akur tekanan","British tidak peduli","British mahu meninggalkan negara","British menyokong komunis"],b:0,u:"British akur kepada bantahan yang kuat dan teratur."},
 {j:"pilih",t:"Apakah kesan penyerahan Sabah kepada British terhadap penduduk?",p:["Ditadbir terus British","Sabah merdeka","Sabah menyertai Filipina","Sabah dikuasai Jepun"],b:0,u:"Sabah ditadbir terus oleh British sebagai Koloni Mahkota."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Bantahan bersatu mengubah dasar","Bantahan tidak berkesan","British tidak menghiraukan sultan","Malayan Union diterima baik"],b:0,u:"Bantahan yang bersatu berjaya mengubah dasar British."}},

{n:5, tempat:"Dewan Penilai Maruah", sk:"10.3.7 · K10.3.8 · K10.3.9 · K10.3.10 Membuat justifikasi", lampiran:null,
 kadNama:"Maruah Bangsa", kadEm:"\u{1F451}", kadFakta:"Mempertahankan maruah bangsa bermaksud menjaga hak, kedaulatan dan kehormatan, tanpa mengorbankan ketertiban.",
 bosKadNama:"Berwaspada", bosKadEm:"\u{1F6A8}", bosKadFakta:"Dalam membuat sebarang tindakan, kita perlu berwaspada dan menimbang akibatnya terhadap masa depan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah bantahan terhadap Malayan Union wajar?",p:["Melindungi kedaulatan","Menimbulkan kekacauan","Menolak kemajuan","Memecahkan kaum"],b:0,u:"Bantahan itu melindungi kedaulatan dan maruah bangsa."},
 {j:"pilih",t:"Seorang murid berkata, \"Malayan Union ada kebaikan sepenuhnya.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia menjejaskan","Tepat, ia sempurna","Tepat, ia menambah kuasa sultan","Kurang tepat, ia tidak wujud"],b:0,u:"Malayan Union menjejaskan kedaulatan sultan."},
 {j:"pilih",t:"Antara berikut, tindakan berani menyuarakan pandangan dengan beretika ialah:",p:["Menulis memorandum","Menyerang pegawai British","Menyebarkan fitnah","Merosakkan harta awam"],b:0,u:"Membantah secara beretika ialah cara yang berkesan."},
 {j:"banyak",t:"Pilih DUA kepentingan menghargai kepimpinan tokoh terdahulu.",p:["Mewarisi semangat perjuangan","Mengambil teladan keberanian","Melupakan jasa mereka","Menjatuhkan nama mereka"],b:[0,1],u:"Menghargai tokoh mewarisi semangat dan teladan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang pentadbiran BMA?",p:["Memulihkan ketenteraman","Gagal dalam setiap aspek","Berjaya dalam setiap aspek","Tidak memberi kesan"],b:0,u:"BMA memulihkan ketenteraman tetapi menghadapi banyak masalah ekonomi."},
 {j:"pilih",t:"Mengapakah berwaspada penting sebelum membuat sebarang tindakan?",p:["Kesan jangka panjang dapat diramal","Tindakan menjadi cepat","Keputusan menjadi sewenang-wenangnya","Rakan menyokong"],b:0,u:"Kewaspadaan membantu menimbang kesan jangka panjang."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada era peralihan?",p:["Perpaduan menguatkan perjuangan","Perpecahan membawa kejayaan","Kuasa asing sentiasa betul","Pemimpin tidak perlu berunding"],b:0,u:"Perpaduan orang Melayu berjaya memansuhkan Malayan Union."},
 {j:"pilih",t:"Mengapakah maruah bangsa wajar dipertahankan?",p:["Kedaulatan dan hak terjamin","Kuasa asing diterima","Kemajuan terhenti","Rakyat berpecah"],b:0,u:"Maruah bangsa berkait rapat dengan kedaulatan dan hak."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang era peralihan kuasa British?",p:["Mencetuskan semangat merdeka","Memadamkan nasionalisme","Menamatkan semua penentangan","Memajukan penjajahan"],b:0,u:"Era itu mencetuskan semangat mempertahankan kedaulatan."}},

{n:6, tempat:"Studio Pentadbiran Cekap", sk:"K10.3.8 hingga K10.3.11 Maruah, berwaspada, berani bersuara dan menghargai tokoh", lampiran:null,
 kadNama:"Suara Rakyat", kadEm:"\u{1F5E3}\u{FE0F}", kadFakta:"Hari ini rakyat boleh menyuarakan pandangan melalui saluran sah seperti wakil rakyat, memorandum dan dialog.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas mengambil iktibar era peralihan untuk membina pentadbiran yang cekap dan berkesan.",
 soalan:[
 {j:"pilih",t:"Murid kurang puas hati dengan peraturan sekolah. Cara beretika menyuarakannya ialah:",p:["Berbincang dengan majlis","Merosakkan harta sekolah","Memulaukan semua guru","Menyebarkan fitnah"],b:0,u:"Saluran sah lebih berkesan dan beretika."},
 {j:"pilih",t:"Jabatan kerajaan mahu cekap dan berkesan. Iktibar daripada pemansuhan Malayan Union ialah:",p:["Mendengar pandangan rakyat","Mengabaikan aduan","Merahsiakan keputusan","Menukar polisi sesuka hati"],b:0,u:"Pentadbiran berkesan mendengar pandangan rakyat."},
 {j:"banyak",t:"Pilih DUA saluran menyuarakan pandangan dengan beretika.",p:["Memorandum rasmi","Dialog dengan pemimpin","Menyebar berita palsu","Menghasut kekacauan"],b:[0,1],u:"Memorandum dan dialog ialah saluran sah."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghargai tokoh seperti Dato' Onn Jaafar?",p:["Pameran dan kajian","Melupakan nama mereka","Menyalahkan mereka","Menjual maklumat palsu"],b:0,u:"Pameran dan kajian memperkenalkan jasa tokoh."},
 {j:"pilih",t:"Seorang rakan berkata, \"Bantahan zaman dahulu tiada kesan hari ini.\" Respons manakah paling rasional?",p:["Ia menjadi teladan","Betul, ia sudah lapuk","Betul, tiada kaitan","Hanya orang dewasa perlu tahu"],b:0,u:"Bantahan itu menjadi teladan menjaga kedaulatan."},
 {j:"pilih",t:"Bagaimanakah murid mempraktikkan sikap berwaspada dalam kehidupan?",p:["Menyemak maklumat","Bertindak mengikut emosi","Mempercayai setiap khabar","Mengelak menimbang akibat"],b:0,u:"Menyemak maklumat ialah tanda berwaspada."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk membentuk sistem pentadbiran sekolah yang berkesan?",p:["Majlis pelajar dengan tugas jelas","Satu orang membuat semua keputusan","Tiada jawatan dilantik","Keputusan diubah setiap hari"],b:0,u:"Majlis pelajar dengan tugas jelas menjadikan pentadbiran teratur."},
 {j:"pilih",t:"Mengapakah menghargai kepimpinan tokoh terdahulu membina negara yang kukuh?",p:["Teladan diwariskan","Sejarah dilupakan","Pemimpin dijatuhkan","Perpecahan digalakkan"],b:0,u:"Semangat dan teladan tokoh diwarisi generasi baharu."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang kesan era peralihan kuasa British bagi mewujudkan sistem pentadbiran yang cekap dan berkesan pada masa hadapan.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada Malayan Union atau penyerahan Sarawak dan Sabah (contoh: kuasa sultan dikurangkan, kerakyatan jus soli, bantahan bersatu, pemansuhan Malayan Union). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Malayan Union dan bantahan terhadapnya, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti mempertahankan maruah, berwaspada dan berani bersuara secara beretika."}}
];

module.exports = {
  id:"s4b6", tingkatan:4, kod:"6.0 Era Peralihan Kuasa British di Negara Kita",
  tajuk:"Malayan Union dan Bantahan",
  subtajuk:"Sejarah Ting. 4 · Bab 6 Era Peralihan Kuasa British di Negara Kita",
  spi:SPI["10.3"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang era peralihan kuasa British di negara kita. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan era peralihan kuasa British berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi tentang era peralihan kuasa British. Galakkan mencerakinkan reaksi penduduk tempatan.",
   4:"{n} mampu mencerakinkan maklumat tentang era peralihan kuasa British. Seterusnya latih membuat justifikasi.",
   5:"{n} dapat membuat justifikasi tentang era peralihan kuasa British di negara kita. Sudah bersedia menjana idea sistem pentadbiran yang berkesan.",
   6:"{n} berjaya menjana idea tentang kesan era peralihan kuasa British bagi mewujudkan pentadbiran yang cekap dan berkesan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Era Peralihan Kuasa British. Cadangan: ulang hentian pertama sambil membina jadual ciri Malayan Union dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"September 1945", label:"Pentadbiran Tentera British bermula"},
     {masa:"Mac 1946", label:"Kongres Melayu Se-Malaya"},
     {masa:"April 1946", label:"Malayan Union dibentuk"},
     {masa:"Julai 1946", label:"Sarawak diserahkan kepada British"}],
     kapsyen:"Rajah 1 · Era peralihan kuasa British",
     alt:"Garis masa menegak: September 1945 Pentadbiran Tentera British bermula; Mac 1946 Kongres Melayu Se-Malaya; April 1946 Malayan Union dibentuk; Julai 1946 Sarawak diserahkan kepada British"},
   p1:petikan(1, "Bantahan terhadap Malayan Union",
     ["Dalam Malayan Union, kuasa sultan dikurangkan kepada hal agama Islam dan adat Melayu, dan kerakyatan jus soli diberikan dengan mudah. Orang Melayu menganggap kedudukan mereka terjejas.",
      "Orang Melayu bersatu menubuhkan UMNO, mengadakan kongres dan memboikot upacara pelantikan Gabenor. Bantahan yang teratur ini akhirnya menyebabkan British memansuhkan Malayan Union."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
