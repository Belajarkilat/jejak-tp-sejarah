/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 2 Nasionalisme di Barat, Asia dan Asia Tenggara.
   Standard Kandungan 9.2, Standard Pembelajaran 9.2.1 hingga 9.2.4 serta K9.2.5 hingga K9.2.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dataran Revolusi", sk:"9.2.1 Maksud nasionalisme · 9.2.2 Nasionalisme di Barat", lampiran:null,
 kadNama:"Maksud Nasionalisme", kadEm:"\u{1F4A1}", kadFakta:"Nasionalisme ialah semangat cinta akan tanah air dan bangsa, serta keinginan untuk bebas daripada kuasa asing.",
 bosKadNama:"Revolusi Perancis", bosKadEm:"\u{1F1EB}\u{1F1F7}", bosKadFakta:"Revolusi Perancis 1789 melaungkan kebebasan, kesamarataan dan persaudaraan. Idea ini menyebar ke seluruh dunia.",
 soalan:[
 {j:"pilih",t:"Nasionalisme bermaksud:",p:["Cinta akan tanah air dan bangsa","Keinginan menguasai negara jiran","Kepercayaan kepada satu agama sahaja","Kesetiaan kepada kuasa penjajah"],b:0,u:"Nasionalisme ialah semangat cinta akan tanah air dan bangsa."},
 {j:"pilih",t:"Revolusi Perancis tercetus pada tahun:",p:["1789","1776","1861","1911"],b:0,u:"Revolusi Perancis berlaku pada tahun 1789."},
 {j:"pilih",t:"Tiga laungan utama Revolusi Perancis ialah kebebasan, kesamarataan dan:",p:["Persaudaraan","Pertanian","Peperangan","Perdagangan"],b:0,u:"Laungannya ialah kebebasan, kesamarataan dan persaudaraan."},
 {j:"pilih",t:"Tiga belas koloni di Amerika mengisytiharkan kemerdekaan daripada Britain pada tahun:",p:["1776","1789","1861","1871"],b:0,u:"Amerika Syarikat mengisytiharkan kemerdekaan pada 1776."},
 {j:"banyak",t:"Pilih DUA negara yang bersatu melalui nasionalisme di Eropah pada abad ke-19.",p:["Itali","Jerman","Kemboja","Burma"],b:[0,1],u:"Itali (1861) dan Jerman (1871) bersatu melalui nasionalisme."},
 {j:"pilih",t:"Tokoh yang menyatukan Jerman pada tahun 1871 ialah:",p:["Otto von Bismarck","Giuseppe Garibaldi","Napoleon Bonaparte","Mahatma Gandhi"],b:0,u:"Otto von Bismarck menyatukan Jerman."},
 {j:"pilih",t:"Tokoh yang berjuang menyatukan Itali ialah:",p:["Giuseppe Garibaldi","Otto von Bismarck","Sun Yat-sen","Jose Rizal"],b:0,u:"Garibaldi dan Cavour menyatukan Itali."},
 {j:"pilih",t:"Idea nasionalisme pada mulanya berkembang di benua:",p:["Eropah","Afrika","Australia","Antartika"],b:0,u:"Nasionalisme moden bermula di Eropah."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan peristiwa dan tahun yang betul.",p:["Revolusi Amerika: 1776","Revolusi Perancis: 1789","Penyatuan Jerman: 1871","Revolusi Perancis: 1911","Penyatuan Itali: 1500"],b:[0,1,2],u:"Revolusi Amerika 1776, Revolusi Perancis 1789 dan penyatuan Jerman 1871."}},

{n:2, tempat:"Bilik Kronologi Dunia", sk:"9.2.2 · 9.2.3 Nasionalisme di Barat dan Asia", lampiran:"gm1",
 kadNama:"Kongres Kebangsaan India", kadEm:"\u{1F1EE}\u{1F1F3}", kadFakta:"Indian National Congress ditubuhkan pada 1885 untuk menuntut hak rakyat India. Mahatma Gandhi kemudian memimpinnya dengan perjuangan tanpa kekerasan.",
 bosKadNama:"Sun Yat-sen", bosKadEm:"\u{1F1E8}\u{1F1F3}", bosKadFakta:"Sun Yat-sen memimpin Revolusi 1911 yang menjatuhkan Dinasti Qing di China berpandukan Tiga Prinsip Rakyat.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Revolusi Amerika","Revolusi Perancis","Kongres Kebangsaan India ditubuhkan","Revolusi China"],b:0,u:"Revolusi Amerika 1776 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Kongres Kebangsaan India ditubuhkan?",p:["1885","1789","1911","1776"],b:0,u:"Rajah 1 menunjukkan Kongres ditubuhkan pada 1885."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Revolusi Amerika","Revolusi Perancis","Kongres Kebangsaan India ditubuhkan","Revolusi China"],b:[0,1,2,3],u:"1776, 1789, 1885 dan 1911."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Revolusi Perancis dan Revolusi China?",p:["122 tahun","96 tahun","26 tahun","135 tahun"],b:0,u:"1911 tolak 1789 ialah 122 tahun."},
 {j:"pilih",t:"Tokoh yang memimpin perjuangan tanpa kekerasan di India ialah:",p:["Mahatma Gandhi","Sun Yat-sen","Ho Chi Minh","Sukarno"],b:0,u:"Mahatma Gandhi menggunakan perjuangan tanpa kekerasan."},
 {j:"pilih",t:"Pemodenan Meiji pada tahun 1868 berlaku di negara:",p:["Jepun","China","India","Burma"],b:0,u:"Pemulihan Meiji memodenkan Jepun."},
 {j:"pilih",t:"Dinasti yang dijatuhkan dalam Revolusi China 1911 ialah:",p:["Dinasti Qing","Dinasti Han","Dinasti Tang","Dinasti Ming"],b:0,u:"Revolusi 1911 menjatuhkan Dinasti Qing."},
 {j:"banyak",t:"Pilih DUA tokoh nasionalis Asia.",p:["Sun Yat-sen","Mahatma Gandhi","Bismarck","Garibaldi"],b:[0,1],u:"Sun Yat-sen dari China dan Gandhi dari India ialah nasionalis Asia."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Revolusi Amerika dan Kongres Kebangsaan India?",p:["109 tahun","96 tahun","135 tahun","26 tahun"],b:0,u:"1885 tolak 1776 ialah 109 tahun."}},

{n:3, tempat:"Kota Nusantara", sk:"9.2.3 · 9.2.4 Mengklasifikasi nasionalisme di Barat, Asia dan Asia Tenggara", lampiran:null,
 kadNama:"Asia Tenggara Bangkit", kadEm:"\u{1F30F}", kadFakta:"Jose Rizal di Filipina, Sukarno di Indonesia dan Ho Chi Minh di Vietnam memimpin kesedaran nasionalisme di Asia Tenggara.",
 bosKadNama:"Jepun Menewaskan Rusia", bosKadEm:"\u{1F3C6}", bosKadFakta:"Kemenangan Jepun ke atas Rusia pada 1905 membuktikan bangsa Asia boleh mengalahkan kuasa Eropah dan memberi semangat kepada gerakan nasionalis.",
 soalan:[
 {j:"pilih",t:"Jose Rizal dikelaskan sebagai tokoh nasionalis dari:",p:["Filipina","Indonesia","Vietnam","Burma"],b:0,u:"Jose Rizal ialah wira nasionalis Filipina."},
 {j:"pilih",t:"Sukarno dikelaskan sebagai tokoh nasionalis dari:",p:["Indonesia","Filipina","Thailand","Kemboja"],b:0,u:"Sukarno memimpin nasionalisme Indonesia."},
 {j:"pilih",t:"Ho Chi Minh dikelaskan sebagai tokoh nasionalis dari:",p:["Vietnam","Indonesia","Filipina","Malaysia"],b:0,u:"Ho Chi Minh memimpin perjuangan Vietnam."},
 {j:"pilih",t:"Revolusi Perancis dikelaskan sebagai nasionalisme di:",p:["Barat","Asia","Asia Tenggara","Afrika"],b:0,u:"Revolusi Perancis berlaku di Eropah, iaitu Barat."},
 {j:"pilih",t:"Pemodenan Meiji dikelaskan sebagai nasionalisme di:",p:["Asia","Barat","Asia Tenggara","Amerika"],b:0,u:"Jepun terletak di Asia."},
 {j:"pilih",t:"Parti Nasional Indonesia ditubuhkan oleh Sukarno pada tahun:",p:["1927","1908","1945","1957"],b:0,u:"Sukarno menubuhkan PNI pada 1927."},
 {j:"banyak",t:"Pilih DUA tokoh nasionalis Asia Tenggara.",p:["Jose Rizal","Ho Chi Minh","Mahatma Gandhi","Sun Yat-sen"],b:[0,1],u:"Rizal dan Ho Chi Minh dari Asia Tenggara. Gandhi dari India, Sun dari China."},
 {j:"pilih",t:"Kemenangan Jepun ke atas Rusia berlaku pada tahun:",p:["1905","1789","1957","1776"],b:0,u:"Jepun menewaskan Rusia pada 1905."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh dan negaranya yang betul.",p:["Jose Rizal: Filipina","Sukarno: Indonesia","Ho Chi Minh: Vietnam","Mahatma Gandhi: Filipina","Sun Yat-sen: Vietnam"],b:[0,1,2],u:"Rizal (Filipina), Sukarno (Indonesia) dan Ho Chi Minh (Vietnam)."}},

{n:4, tempat:"Makmal Idea", sk:"9.2.2 hingga 9.2.4 Mencerakinkan nasionalisme", lampiran:"p1",
 kadNama:"Penyebaran Idea", kadEm:"\u{1F4E1}", kadFakta:"Idea nasionalisme tersebar melalui buku, akhbar dan pelajar yang belajar di luar negara.",
 bosKadNama:"Inspirasi", bosKadEm:"\u{2B50}", bosKadFakta:"Kejayaan satu negara membangkitkan semangat negara lain yang masih dijajah.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah punca utama kebangkitan nasionalisme di Asia?",p:["Penjajah menindas","Kemewahan penjajah","Kekurangan pelajar","Kemarau panjang"],b:0,u:"Petikan menyatakan penindasan penjajah menimbulkan kesedaran nasionalisme."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah yang memberi inspirasi kepada bangsa Asia?",p:["Kejayaan Jepun menewaskan Rusia","Kejatuhan Empayar Rom","Penyatuan Kerajaan Majapahit","Pemerintahan Dinasti Han"],b:0,u:"Kemenangan Jepun 1905 membuktikan bangsa Asia boleh mengalahkan Eropah."},
 {j:"pilih",t:"Berdasarkan Petikan 1, bagaimanakah idea nasionalisme tersebar?",p:["Melalui buku dan akhbar","Melalui peperangan laut","Melalui perdagangan rempah","Melalui upacara istana"],b:0,u:"Buku, akhbar dan pelajar menyebarkan idea nasionalisme."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA sumber penyebaran nasionalisme.",p:["Akhbar","Pelajar di luar negara","Pasukan tentera penjajah","Cukai tanah"],b:[0,1],u:"Akhbar dan pelajar ialah penyebar idea."},
 {j:"pilih",t:"Bandingkan nasionalisme di Barat dengan Asia. Apakah perbezaannya?",p:["Barat menyatukan, Asia menentang","Barat dijajah, Asia menjajah","Kedua-duanya menentang penjajah","Kedua-duanya menyatukan kerajaan lama"],b:0,u:"Di Eropah nasionalisme menyatukan negara, manakala di Asia ia menentang penjajahan."},
 {j:"pilih",t:"Mengapakah pemimpin nasionalis perlu berilmu?",p:["Dapat menyusun strategi","Dapat menambah cukai rakyat","Dapat mengelak perjuangan","Dapat menjadi pedagang kaya"],b:0,u:"Ilmu membantu pemimpin merancang perjuangan yang berkesan."},
 {j:"pilih",t:"Apakah persamaan nasionalisme di Asia dan Asia Tenggara?",p:["Mahu bebas penjajah","Mahu menjajah negara jiran","Mahu menutup perdagangan","Mahu menghapuskan pelajaran"],b:0,u:"Kedua-duanya berjuang untuk bebas daripada penjajahan."},
 {j:"pilih",t:"Apakah kesan nasionalisme kepada negara jajahan?",p:["Tuntutan merdeka kuat","Penjajahan bertambah kukuh","Rakyat menyokong penjajah","Perjuangan terhenti"],b:0,u:"Nasionalisme menguatkan tuntutan kemerdekaan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Nasionalisme tersebar dan berinspirasi","Nasionalisme wujud di Eropah","Nasionalisme dihalang oleh rakyat","Nasionalisme tidak mempengaruhi sesiapa"],b:0,u:"Idea nasionalisme tersebar antara negara dan saling memberi inspirasi."}},

{n:5, tempat:"Dewan Penilai Dunia", sk:"9.2.4 · K9.2.5 · K9.2.6 · K9.2.7 Menilai nasionalisme", lampiran:null,
 kadNama:"Meneladani Pemimpin", kadEm:"\u{1F31F}", kadFakta:"Pemimpin nasionalis seperti Gandhi dan Rizal berjuang dengan ilmu, keberanian dan pengorbanan. Kita wajar meneladani semangat mereka.",
 bosKadNama:"Berwaspada", bosKadEm:"\u{1F6A8}", bosKadFakta:"Sejarah mengajar kita supaya berwaspada terhadap kuasa asing yang cuba mempengaruhi kedaulatan negara.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah pemimpin nasionalis wajar dihormati?",p:["Mereka berkorban","Mereka kaya raya","Mereka tidak pernah gagal","Mereka berkuasa penuh"],b:0,u:"Mereka berkorban untuk kebebasan bangsa."},
 {j:"pilih",t:"Seorang murid berkata, \"Nasionalisme hanya menyebabkan peperangan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia bawa merdeka","Tepat, ia tidak membawa kebaikan","Tepat, ia menghapuskan kedamaian","Kurang tepat, ia tidak wujud"],b:0,u:"Nasionalisme juga membawa kemerdekaan dan penyatuan."},
 {j:"pilih",t:"Antara berikut, sikap berilmu pemimpin nasionalis ditunjukkan oleh:",p:["Menulis buku dan mengasaskan akhbar","Menyembunyikan idea mereka","Menolak pelajaran","Menjual maklumat kepada penjajah"],b:0,u:"Menulis dan menerbitkan akhbar menyebarkan idea perjuangan."},
 {j:"banyak",t:"Pilih DUA iktibar daripada perjuangan nasionalis dunia.",p:["Perpaduan menguatkan perjuangan","Ilmu menjadi senjata utama","Perpecahan membawa kejayaan","Penjajah mudah dikalahkan"],b:[0,1],u:"Perpaduan dan ilmu ialah kekuatan perjuangan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang nasionalisme di Barat?",p:["Menyatukan tetapi bersaing","Membawa keburukan semata-mata","Tidak memberi sebarang kesan","Menyebabkan semua negara bersatu"],b:0,u:"Nasionalisme Barat menyatukan negara, tetapi turut mencetuskan persaingan antara negara."},
 {j:"pilih",t:"Mengapakah berwaspada dengan kuasa asing penting kepada negara baharu merdeka?",p:["Elakkan kedaulatan tergugat","Elakkan semua perdagangan","Elakkan rakyat belajar","Elakkan hubungan antarabangsa"],b:0,u:"Kewaspadaan melindungi kedaulatan negara."},
 {j:"pilih",t:"Antara berikut, sumbangan pemimpin manakah paling penting kepada kedaulatan negara?",p:["Memerdekakan negara","Menambah cukai rakyat","Menutup sekolah desa","Membina istana besar"],b:0,u:"Memperjuangkan kemerdekaan menjamin kedaulatan."},
 {j:"pilih",t:"Mengapakah ilmu penting dalam kehidupan?",p:["Membantu membuat keputusan tepat","Membuat kita bergantung kepada orang","Menyebabkan kita lupa asal","Menambah masalah"],b:0,u:"Ilmu membantu membuat keputusan yang tepat."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang nasionalisme di Barat, Asia dan Asia Tenggara?",p:["Berkembang saling mempengaruhi","Berkembang secara berasingan","Tidak berkaitan antara satu sama lain","Hanya berlaku di Eropah"],b:0,u:"Nasionalisme berkembang dan saling mempengaruhi antara benua."}},

{n:6, tempat:"Studio Rasionalisasi", sk:"K9.2.5 hingga K9.2.8 Meneladani, berwaspada, berilmu dan menghargai pemimpin", lampiran:null,
 kadNama:"Semangat Merdeka", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Semangat nasionalisme yang sama diterapkan kepada murid hari ini melalui kegiatan kebangsaan seperti perhimpunan dan Bulan Kebangsaan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan pengajaran sejarah dunia untuk memupuk cinta akan negara.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu menerapkan semangat nasionalisme. Idea manakah paling berasas?",p:["Pidato tentang tokoh pejuang","Menghapuskan upacara bendera","Melarang pelajar bertanya","Mengejek lagu kebangsaan"],b:0,u:"Pidato tentang tokoh memupuk semangat dan ilmu."},
 {j:"pilih",t:"Seorang rakan berkata, \"Nasionalisme dunia tiada kaitan dengan Malaysia.\" Respons manakah paling rasional?",p:["Ia memberi inspirasi","Betul, ia tidak ada kaitan","Betul, ia sudah lapuk","Hanya negara Barat perlu tahu"],b:0,u:"Nasionalisme dunia memberi inspirasi kepada pejuang negara kita."},
 {j:"banyak",t:"Pilih DUA cara meneladani pemimpin nasionalis.",p:["Berani mempertahankan kebenaran","Menuntut ilmu dengan tekun","Mementingkan diri sendiri","Menyerah apabila gagal"],b:[0,1],u:"Berani dan berilmu ialah teladan pemimpin."},
 {j:"pilih",t:"Idea manakah paling rasional untuk berwaspada dengan pengaruh asing yang negatif?",p:["Menyemak maklumat","Menerima semua budaya asing","Menutup akses maklumat","Menolak ilmu luar"],b:0,u:"Menyemak maklumat melindungi kita daripada pengaruh negatif."},
 {j:"pilih",t:"Bagaimanakah murid menyumbang kepada kedaulatan negara?",p:["Belajar dan patuh undang-undang","Mengabaikan pelajaran","Menyalahgunakan media sosial","Mengutamakan kepentingan sendiri"],b:0,u:"Belajar dan patuh undang-undang menyumbang kepada negara."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menghargai pejuang kemerdekaan dunia?",p:["Kajian dan pameran","Membuang buku sejarah","Mengubah fakta perjuangan","Melupakan nama pejuang"],b:0,u:"Kajian dan pameran menghargai perjuangan."},
 {j:"pilih",t:"Mengapakah kita perlu mengambil iktibar daripada nasionalisme di Asia?",p:["Perjuangan bersatu membawa kejayaan","Perjuangan bersendirian lebih baik","Penjajah tidak boleh ditentang","Kemerdekaan tidak penting"],b:0,u:"Perjuangan yang bersatu membawa kejayaan."},
 {j:"pilih",t:"Idea manakah paling berasas untuk mengukuhkan cinta akan negara dalam kalangan remaja?",p:["Aktiviti sukarela dan kebangsaan","Menutup semua aktiviti sekolah","Menghalang penggunaan bendera","Melarang pertandingan"],b:0,u:"Aktiviti sukarela dan kebangsaan memupuk cinta akan negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menggunakan pengajaran nasionalisme di Barat, Asia atau Asia Tenggara bagi memupuk semangat cinta akan negara dalam kalangan murid.",
  arahan:"Pilih sekurang-kurangnya DUA contoh nasionalisme (contoh: Revolusi Perancis 1789, Gandhi dan Kongres India, Sun Yat-sen, Jose Rizal, Sukarno). Terangkan fakta penting, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang nasionalisme dunia, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti meneladani pemimpin, berwaspada dan cinta akan negara."}}
];

module.exports = {
  id:"s4b2", tingkatan:4, kod:"2.0 Nasionalisme di Barat, Asia dan Asia Tenggara",
  tajuk:"Api Kebangkitan",
  subtajuk:"Sejarah Ting. 4 · Bab 2 Nasionalisme di Barat, Asia dan Asia Tenggara",
  spi:SPI["9.2"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang nasionalisme. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan nasionalisme berserta contoh. Perlu lebih latihan mengklasifikasi nasionalisme di Barat, Asia dan Asia Tenggara sebelum bergerak ke TP3.",
   3:"{n} boleh mengklasifikasi maklumat tentang nasionalisme di Barat, Asia dan Asia Tenggara. Galakkan mencerakinkan punca dan kesannya.",
   4:"{n} mampu mencerakinkan maklumat tentang nasionalisme di Barat, Asia dan Asia Tenggara. Seterusnya latih menilainya.",
   5:"{n} dapat menilai nasionalisme di Barat, Asia dan Asia Tenggara. Sudah bersedia membuat rasionalisasi.",
   6:"{n} berjaya membuat rasionalisasi bagi nasionalisme di Barat, Asia dan Asia Tenggara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Nasionalisme di Barat, Asia dan Asia Tenggara. Cadangan: ulang hentian pertama sambil membina jadual tokoh dan negara dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1776", label:"Revolusi Amerika"},
     {masa:"1789", label:"Revolusi Perancis"},
     {masa:"1885", label:"Kongres Kebangsaan India ditubuhkan"},
     {masa:"1911", label:"Revolusi China"}],
     kapsyen:"Rajah 1 · Beberapa peristiwa nasionalisme di Barat dan Asia",
     alt:"Garis masa menegak: 1776 Revolusi Amerika; 1789 Revolusi Perancis; 1885 Kongres Kebangsaan India ditubuhkan; 1911 Revolusi China"},
   p1:petikan(1, "Penyebaran nasionalisme",
     ["Penindasan kuasa penjajah menimbulkan kesedaran nasionalisme di Asia. Idea nasionalisme dari Eropah tersebar melalui buku, akhbar dan pelajar yang belajar di luar negara.",
      "Kemenangan Jepun ke atas Rusia pada tahun 1905 memberi inspirasi kepada bangsa Asia bahawa kuasa Eropah boleh dikalahkan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
