/* Sumber kandungan — Sejarah KSSM Tingkatan 3, Bab 2 Pentadbiran Negeri-negeri Selat.
   Standard Kandungan 7.2, Standard Pembelajaran 7.2.1 hingga 7.2.4 serta K7.2.5 hingga K7.2.8
   (DSKP KSSM Sejarah Tingkatan 3, dskp/sejarah-t3.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pulau Pinang", sk:"7.2.1 Peluasan kuasa British di Pulau Pinang, Singapura dan Melaka", lampiran:null,
 kadNama:"Pelabuhan Bebas", kadEm:"\u{2693}", kadFakta:"Pulau Pinang, Singapura dan Melaka menjadi pelabuhan bebas yang tidak mengenakan cukai import, lalu menarik ramai pedagang.",
 bosKadNama:"Negeri-negeri Selat", bosKadEm:"\u{1F3DD}\u{FE0F}", bosKadFakta:"Pulau Pinang, Singapura dan Melaka digabungkan sebagai Negeri-negeri Selat pada tahun 1826.",
 soalan:[
 {j:"pilih",t:"Pulau Pinang diduduki oleh British di bawah pimpinan:",p:["Francis Light","Stamford Raffles","James Brooke","Frank Swettenham"],b:0,u:"Francis Light menduduki Pulau Pinang pada tahun 1786."},
 {j:"pilih",t:"Singapura dibuka oleh British di bawah pimpinan:",p:["Stamford Raffles","Francis Light","Hugh Clifford","William Farquhar"],b:0,u:"Stamford Raffles membuka pangkalan British di Singapura pada tahun 1819."},
 {j:"pilih",t:"Melaka diserahkan oleh Belanda kepada British melalui:",p:["Perjanjian London 1824","Perjanjian Pangkor 1874","Perjanjian Bangkok 1909","Perjanjian Johor 1885"],b:0,u:"Perjanjian London 1824 menyerahkan Melaka kepada British."},
 {j:"pilih",t:"Negeri-negeri Selat terdiri daripada Pulau Pinang, Singapura dan:",p:["Melaka","Kedah di utara","Johor di selatan","Perak di barat"],b:0,u:"Tiga wilayah itu ialah Pulau Pinang, Singapura dan Melaka."},
 {j:"banyak",t:"Pilih DUA wilayah yang termasuk dalam Negeri-negeri Selat.",p:["Pulau Pinang","Singapura","Kuala Lumpur","Johor Bahru"],b:[0,1],u:"Pulau Pinang dan Singapura termasuk dalam Negeri-negeri Selat."},
 {j:"pilih",t:"Negeri-negeri Selat dibentuk pada tahun:",p:["1826","1786","1874","1896"],b:0,u:"Negeri-negeri Selat dibentuk pada tahun 1826."},
 {j:"pilih",t:"Negeri-negeri Selat menjadi Koloni Mahkota British pada tahun:",p:["1867","1826","1786","1948"],b:0,u:"Pada 1867 pentadbiran Negeri-negeri Selat dipindahkan kepada Pejabat Tanah Jajahan di London."},
 {j:"pilih",t:"Ketua pentadbir Negeri-negeri Selat bergelar:",p:["Gabenor","Residen","Penasihat","Sultan"],b:0,u:"Gabenor ialah ketua pentadbir Negeri-negeri Selat."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh dan tempat yang betul.",p:["Francis Light: Pulau Pinang","Stamford Raffles: Singapura","Gabenor: ketua Negeri-negeri Selat","Francis Light: Singapura","Stamford Raffles: Melaka 1511"],b:[0,1,2],u:"Light di Pulau Pinang, Raffles di Singapura, dan Gabenor mengetuai Negeri-negeri Selat."}},

{n:2, tempat:"Bilik Perjanjian", sk:"7.2.2 Perjanjian London 1824 · 7.2.3 Pembentukan", lampiran:"gm1",
 kadNama:"Perjanjian London", kadEm:"\u{1F4DC}", kadFakta:"Perjanjian London 1824 membahagikan Alam Melayu: British mendapat Semenanjung Tanah Melayu dan Belanda mendapat Sumatera serta Kepulauan Riau-Lingga.",
 bosKadNama:"Bencoolen", bosKadEm:"\u{1F501}", bosKadFakta:"British menyerahkan Bencoolen di Sumatera kepada Belanda, dan sebagai balasan memperoleh Melaka.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Negeri-negeri Selat dibentuk?",p:["1826","1786","1867","1946"],b:0,u:"Rajah 1 menunjukkan Negeri-negeri Selat dibentuk pada 1826."},
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah berlaku pada 1867?",p:["Koloni Mahkota","Singapura dibuka","Pulau Pinang diduduki","Perjanjian London"],b:0,u:"Pada 1867 Negeri-negeri Selat menjadi Koloni Mahkota."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Pulau Pinang diduduki","Singapura dibuka","Perjanjian London","Koloni Mahkota"],b:[0,1,2,3],u:"1786, 1819, 1824 dan 1867."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara pendudukan Pulau Pinang dan pembukaan Singapura?",p:["33 tahun","38 tahun","81 tahun","40 tahun"],b:0,u:"1819 tolak 1786 ialah 33 tahun."},
 {j:"pilih",t:"Perjanjian London 1824 menyebabkan British menguasai:",p:["Semenanjung","Sumatera dan Jawa","Kepulauan Maluku","Borneo Utara"],b:0,u:"British mendapat pengaruh di Semenanjung, manakala Belanda di Sumatera."},
 {j:"pilih",t:"Kesan Perjanjian London 1824 kepada Alam Melayu ialah:",p:["Alam Melayu terbahagi dua","Alam Melayu bersatu","Alam Melayu dijajah Jepun","Alam Melayu kembali merdeka"],b:0,u:"Alam Melayu terbahagi kepada pengaruh British di utara dan Belanda di selatan."},
 {j:"pilih",t:"British menyerahkan Bencoolen kepada Belanda kerana:",p:["Mahu mendapat Melaka","Mahu membuka Singapura","Mahu meninggalkan Asia","Mahu berperang"],b:0,u:"Bencoolen ditukar dengan Melaka dalam Perjanjian London."},
 {j:"banyak",t:"Pilih DUA kesan Perjanjian London 1824.",p:["Pengaruh Belanda terhad di Sumatera","British menguasai Semenanjung","Pulau Pinang diserahkan kepada Belanda","Singapura diserahkan kepada Belanda"],b:[0,1],u:"Belanda terhad di Sumatera, manakala British menguasai Semenanjung."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah Negeri-negeri Selat menjadi Koloni Mahkota selepas dibentuk?",p:["41 tahun","48 tahun","81 tahun","43 tahun"],b:0,u:"1867 tolak 1826 ialah 41 tahun."}},

{n:3, tempat:"Pejabat Gabenor", sk:"7.2.3 · 7.2.4 Corak pentadbiran Negeri-negeri Selat", lampiran:null,
 kadNama:"Majlis Perundangan", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Gabenor dibantu oleh Majlis Eksekutif dan Majlis Perundangan untuk mentadbir dan membuat undang-undang.",
 bosKadNama:"Singapura Ibu Negeri", bosKadEm:"\u{1F306}", bosKadFakta:"Singapura menjadi ibu negeri Negeri-negeri Selat pada tahun 1832, menggantikan Pulau Pinang.",
 soalan:[
 {j:"pilih",t:"Seorang pegawai di Negeri-negeri Selat perlu menggubal undang-undang baharu. Badan manakah terlibat?",p:["Majlis Perundangan","Majlis Mesyuarat Kerajaan","Majlis Raja-raja","Dewan Rakyat"],b:0,u:"Majlis Perundangan membantu Gabenor membuat undang-undang."},
 {j:"pilih",t:"Negeri-negeri Selat ditadbir terus oleh London. Maksudnya, ia ialah:",p:["Koloni Mahkota","Negeri naungan","Negeri bersekutu","Negeri merdeka"],b:0,u:"Koloni Mahkota ditadbir terus oleh Pejabat Tanah Jajahan di London."},
 {j:"pilih",t:"Seorang pedagang tiba di Singapura. Mengapa pelabuhan ini menarik kapal dagang?",p:["Tiada cukai import barang","Cukai yang sangat tinggi","Larangan berdagang di pulau","Kekurangan gudang barang"],b:0,u:"Pelabuhan bebas menarik pedagang dari pelbagai tempat."},
 {j:"banyak",t:"Pilih DUA badan yang membantu Gabenor mentadbir.",p:["Majlis Eksekutif","Majlis Perundangan","Majlis Raja-raja","Dewan Negara"],b:[0,1],u:"Majlis Eksekutif dan Majlis Perundangan membantu Gabenor."},
 {j:"pilih",t:"Penduduk di Negeri-negeri Selat memerlukan keselamatan. Pasukan yang ditubuhkan British ialah:",p:["Polis dan askar","Laskar Hulubalang","Pasukan Sakai","Pasukan Aceh"],b:0,u:"British menubuhkan pasukan polis dan tentera untuk menjaga keamanan."},
 {j:"pilih",t:"Pemerintah Negeri-negeri Selat berbeza daripada Negeri-negeri Melayu kerana:",p:["Tiada sultan memerintah","Dipimpin oleh seorang sultan","Dikuasai pembesar tempatan","Mengamalkan Adat Perpatih"],b:0,u:"Negeri-negeri Selat dimiliki British, jadi tiada sultan yang memerintah."},
 {j:"pilih",t:"Ibu negeri Negeri-negeri Selat berpindah ke Singapura pada tahun:",p:["1832","1826","1786","1867"],b:0,u:"Singapura menjadi ibu negeri pada tahun 1832."},
 {j:"pilih",t:"Apakah kelebihan Negeri-negeri Selat kepada British?",p:["Pangkalan dagang dan tentera","Kawasan pertanian padi sawah","Tapak candi lama","Lombong emas yang kaya"],b:0,u:"Ia pangkalan perdagangan dan ketenteraan di Selat Melaka."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah ciri pentadbiran Negeri-negeri Selat?",p:["Ketua pentadbir ialah Gabenor","Ketua pentadbir ialah Sultan","Ketua pentadbir ialah Bendahara","Ketua pentadbir ialah Residen"],b:0,u:"Gabenor ialah ketua pentadbir dan melapor kepada London."}},

{n:4, tempat:"Arkib Koloni", sk:"7.2.2 · 7.2.4 Menghuraikan maklumat", lampiran:"p1",
 kadNama:"Pelabuhan Terbuka", kadEm:"\u{1F6A2}", kadFakta:"Dasar pelabuhan bebas menjadikan Singapura salah satu pelabuhan tersibuk di Asia Tenggara.",
 bosKadNama:"Pelbagai Kaum", bosKadEm:"\u{1F465}", bosKadFakta:"Pelabuhan bebas menarik pedagang dan pekerja Cina, India dan Eropah, lalu masyarakat menjadi pelbagai kaum.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pedagang tertarik ke Singapura?",p:["Tiada cukai import","Cukai yang tinggi","Tiada pelabuhan lain","Dilarang berdagang"],b:0,u:"Petikan menyatakan Singapura dibuka sebagai pelabuhan bebas tanpa cukai import."},
 {j:"pilih",t:"Berdasarkan Petikan 1, siapakah yang mentadbir Negeri-negeri Selat?",p:["Gabenor","Sultan Johor","Bendahara","Pembesar tempatan"],b:0,u:"Gabenor yang dilantik oleh British mentadbirnya."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan pelabuhan bebas kepada penduduk?",p:["Penduduk berbilang kaum","Penduduk semakin berkurang","Penduduk dari satu kaum","Penduduk berpindah ke Eropah"],b:0,u:"Pedagang dan pekerja dari pelbagai bangsa datang menetap."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan Negeri-negeri Selat kepada British.",p:["Pangkalan perdagangan","Pangkalan ketenteraan","Sumber padi utama","Pusat pengajian agama"],b:[0,1],u:"Negeri-negeri Selat menjadi pangkalan perdagangan dan ketenteraan British."},
 {j:"pilih",t:"Bandingkan Pulau Pinang dan Singapura. Apakah persamaannya?",p:["Pelabuhan bebas","Diperintah oleh sultan","Diasaskan oleh Belanda","Kawasan lombong"],b:0,u:"Kedua-duanya pelabuhan bebas di bawah British."},
 {j:"pilih",t:"Mengapakah Perjanjian London 1824 penting kepada British?",p:["Menamatkan saingan dengan Belanda","Menamatkan pentadbiran British","Menyerahkan Singapura kepada Belanda","Menutup Selat Melaka kepada kapal"],b:0,u:"Persaingan British dan Belanda berkurang, jadi British lebih bebas di Semenanjung."},
 {j:"pilih",t:"Apakah cabaran pentadbiran British di tiga wilayah yang berjauhan?",p:["Pengurusan yang amat rumit","Sedikit pedagang berdagang","Tiada pelabuhan sama sekali","Kekurangan penduduk menetap"],b:0,u:"Wilayah yang berjauhan menyukarkan pengurusan, jadi Gabenor diperlukan sebagai penyelaras."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penubuhan Negeri-negeri Selat?",p:["Pangkalan British meluaskan pengaruh","Hasil persahabatan dengan sultan","Perkara yang tidak penting kepada British","Perancangan oleh pihak Belanda"],b:0,u:"Negeri-negeri Selat menjadi pangkalan British untuk meluaskan pengaruh ke Semenanjung."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Pelabuhan bebas memajukan wilayah","Pelabuhan bebas melemahkan British","Pelabuhan bebas menutup perdagangan","Pelabuhan bebas dikuasai sultan"],b:0,u:"Dasar pelabuhan bebas menarik pedagang dan memajukan Negeri-negeri Selat."}},

{n:5, tempat:"Dewan Penilai Selat", sk:"7.2.4 · K7.2.5 · K7.2.7 · K7.2.8 Membahaskan iktibar", lampiran:null,
 kadNama:"Berwaspada", kadEm:"\u{1F6A8}", kadFakta:"Pemerintah tempatan yang menyerahkan sesuatu wilayah tanpa menimbang kesannya akhirnya kehilangan kuasa.",
 bosKadNama:"Pentadbiran Sistematik", bosKadEm:"\u{1F4CB}", bosKadFakta:"Pentadbiran yang teratur memajukan Negeri-negeri Selat, tetapi tidak berada di tangan pemerintah tempatan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, apakah iktibar daripada penyerahan Pulau Pinang oleh Kedah?",p:["Timbang akibat setiap langkah","Serah wilayah apabila diminta","Elakkan sebarang rundingan","Percaya janji tanpa bukti"],b:0,u:"Kedah berharap British membantu menentang Siam, tetapi janji itu tidak ditunaikan."},
 {j:"pilih",t:"Seorang murid berkata, \"Perjanjian London menguntungkan penduduk Alam Melayu.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia memecahkan rantau","Tepat, ia menyatukan Alam Melayu","Tepat, ia memerdekakan Alam Melayu","Kurang tepat, ia tidak wujud"],b:0,u:"Perjanjian itu dibuat oleh British dan Belanda tanpa merujuk penduduk Alam Melayu."},
 {j:"pilih",t:"Antara berikut, yang manakah kelebihan pentadbiran sistematik di Negeri-negeri Selat?",p:["Pelabuhan diurus dengan rapi","Pelabuhan ditutup kepada kapal","Cukai dinaikkan terlalu tinggi","Pedagang dihalau dari pulau"],b:0,u:"Pentadbiran yang teratur memajukan perdagangan."},
 {j:"banyak",t:"Pilih DUA iktibar daripada kehilangan kedaulatan wilayah.",p:["Perpaduan perlu dijaga","Perjanjian perlu diteliti","Kuasa asing sentiasa jujur","Wilayah boleh diserah tanpa kesan"],b:[0,1],u:"Perpaduan dan penelitian perjanjian melindungi kedaulatan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang pembukaan Singapura?",p:["Maju, tetapi di bawah kuasa asing","Merugikan semua penduduk","Tidak mengubah apa-apa","Menjadikan Singapura kampung nelayan"],b:0,u:"Singapura maju sebagai pelabuhan, tetapi dikawal British."},
 {j:"pilih",t:"Mengapakah kedaulatan negara wajar dipertahankan?",p:["Negara berhak menentukan nasib sendiri","Supaya perdagangan dihentikan sama sekali","Supaya pihak asing menguasai negara","Supaya sultan dan rakyat berpecah"],b:0,u:"Kedaulatan membolehkan negara menentukan hala tuju sendiri."},
 {j:"pilih",t:"Sikap berwaspada dalam membuat keputusan bermaksud:",p:["Berhati-hati menimbang kesan","Membuat keputusan dengan cepat","Bergantung pada orang lain","Mengabaikan nasihat pembesar"],b:0,u:"Berwaspada ialah berhati-hati dan menimbang kesan sebelum bertindak."},
 {j:"pilih",t:"Mengapakah pentadbiran sistematik penting untuk kemajuan negara?",p:["Sumber diurus dengan teratur","Rakyat tiada peranan langsung","Undang-undang dihapuskan terus","Pemimpin bekerja sendirian"],b:0,u:"Pentadbiran yang teratur memastikan sumber digunakan dengan baik."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Negeri-negeri Selat?",p:["Maju, tetapi kuasa tempatan hilang","Maju dan dikuasai penduduk tempatan","Mundur dan terasing","Mundur dan merdeka"],b:0,u:"Ia maju sebagai pusat perdagangan, tetapi kuasa pentadbiran dipegang British."}},

{n:6, tempat:"Studio Kedaulatan Selat", sk:"K7.2.5 hingga K7.2.8 Berwaspada dan mempertahankan kedaulatan", lampiran:null,
 kadNama:"Ancaman Bentuk Baru", kadEm:"\u{1F310}", kadFakta:"Penjajahan bentuk baru boleh berlaku melalui penguasaan ekonomi, teknologi dan maklumat, bukan hanya melalui tentera.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar sejarah untuk melindungi kedaulatan hari ini.",
 soalan:[
 {j:"pilih",t:"Sebuah syarikat asing mahu mengawal pelabuhan negara. Iktibar sejarah manakah paling sesuai?",p:["Teliti perjanjian itu dahulu","Terima tawaran dengan segera","Serahkan pelabuhan kepada asing","Abaikan perjanjian yang ada"],b:0,u:"Penelitian perjanjian melindungi kedaulatan."},
 {j:"pilih",t:"Aplikasi asing mengumpul data peribadi rakyat. Cara menangani ancaman bentuk baru yang berasas ialah:",p:["Menguatkan undang-undang data","Membiarkan perkara itu berlaku","Menyerahkan data kepada syarikat","Melarang penggunaan internet"],b:0,u:"Undang-undang yang kukuh melindungi data dan kedaulatan negara."},
 {j:"banyak",t:"Pilih DUA langkah menangani ancaman penjajahan bentuk baru.",p:["Menguasai teknologi sendiri","Memupuk kesedaran rakyat","Bergantung pada asing sepenuhnya","Menyerahkan sumber ekonomi"],b:[0,1],u:"Penguasaan teknologi dan kesedaran rakyat menguatkan negara."},
 {j:"pilih",t:"Kelas anda diajak menyertai projek kerjasama dengan sekolah luar negara. Sikap berwaspada yang bijak ialah:",p:["Semak syarat dan niat","Setuju tanpa membaca syarat","Tolak setiap jemputan luar","Terima syarat apa pun"],b:0,u:"Menyemak syarat memastikan kerjasama memberi manfaat sebenar."},
 {j:"pilih",t:"Idea manakah paling rasional untuk memajukan pelabuhan negara?",p:["Sistem pengurusan yang cekap","Menutup pelabuhan negara","Mengenakan cukai yang tinggi","Menghalang pedagang asing"],b:0,u:"Pentadbiran yang teratur memajukan pelabuhan seperti Negeri-negeri Selat."},
 {j:"pilih",t:"Seorang rakan berkata, \"Penjajahan hanya dengan senjata.\" Respons manakah paling rasional?",p:["Ekonomi juga boleh menjajah","Betul, dengan senjata ketenteraan","Betul, penjajahan sudah tiada","Penjajahan tidak pernah wujud"],b:0,u:"Penguasaan ekonomi dan maklumat juga boleh menggugat kedaulatan."},
 {j:"pilih",t:"Bagaimanakah murid mempertahankan kedaulatan negara dalam kehidupan harian?",p:["Menyokong budaya tempatan","Menghina negara sendiri","Menyebar fitnah dan khabar angin","Mengabaikan sejarah negara"],b:0,u:"Menghargai produk dan budaya tempatan menguatkan negara."},
 {j:"pilih",t:"Mengapakah rakyat perlu memahami isi perjanjian negara?",p:["Supaya kepentingan negara terjaga","Supaya perjanjian diubah sesuka hati","Supaya perjanjian dilupakan","Supaya pemimpin tidak diperlukan"],b:0,u:"Pemahaman rakyat membantu menilai sama ada perjanjian menguntungkan negara."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea untuk menangani ancaman penjajahan bentuk baru bagi mempertahankan kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada sejarah Negeri-negeri Selat (contoh: Pulau Pinang diserahkan tanpa jaminan, Perjanjian London membahagikan Alam Melayu, pelabuhan bebas di bawah kawalan asing). Terangkan ancaman yang dikenal pasti, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat, mengenal pasti ancaman bentuk baru yang sebenar, mencadangkan langkah yang boleh dilaksanakan, dan menonjolkan nilai seperti berwaspada, perpaduan dan mempertahankan kedaulatan."}}
];

module.exports = {
  id:"s3b2", tingkatan:3, kod:"2.0 Pentadbiran Negeri-negeri Selat",
  tajuk:"Pelabuhan Tiga Wilayah",
  subtajuk:"Sejarah Ting. 3 · Bab 2 Pentadbiran Negeri-negeri Selat",
  spi:SPI["7.2"],
  ulasan:{
   1:"{n} dapat memerihalkan Negeri-negeri Selat. Langkah seterusnya ialah memahami Perjanjian London 1824 dan pembentukan Negeri-negeri Selat.",
   2:"{n} memahami peluasan pengaruh British di Negeri-negeri Selat dan dapat menyusun kronologinya. Perlu lebih latihan sebelum bergerak ke TP3.",
   3:"{n} boleh membina kronologi dan menerangkan corak pentadbiran Negeri-negeri Selat. Galakkan menghuraikan kesan peluasan pengaruh British.",
   4:"{n} mampu menghuraikan maklumat tentang peluasan pengaruh British di Negeri-negeri Selat. Seterusnya latih membahaskan iktibarnya.",
   5:"{n} dapat membahaskan iktibar daripada peluasan pengaruh British di Negeri-negeri Selat. Sudah bersedia menjana idea menangani ancaman bentuk baru.",
   6:"{n} berjaya menjana idea menangani ancaman penjajahan bentuk baru untuk mempertahankan kedaulatan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pentadbiran Negeri-negeri Selat. Cadangan: ulang hentian pertama sambil melabel Pulau Pinang, Singapura dan Melaka pada peta dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1786", label:"Pulau Pinang diduduki"},
     {masa:"1819", label:"Singapura dibuka"},
     {masa:"1824", label:"Perjanjian London"},
     {masa:"1826", label:"Negeri-negeri Selat dibentuk"},
     {masa:"1867", label:"Koloni Mahkota"}],
     kapsyen:"Rajah 1 · Perkembangan Negeri-negeri Selat",
     alt:"Garis masa menegak: 1786 Pulau Pinang diduduki; 1819 Singapura dibuka; 1824 Perjanjian London; 1826 Negeri-negeri Selat dibentuk; 1867 Koloni Mahkota"},
   p1:petikan(1, "Negeri-negeri Selat",
     ["Singapura dibuka sebagai pelabuhan bebas tanpa cukai import, lalu menarik ramai pedagang dari Asia dan Eropah. Pedagang dan pekerja dari pelbagai bangsa datang menetap, dan penduduk menjadi berbilang kaum.",
      "Negeri-negeri Selat ditadbir oleh seorang Gabenor yang dilantik oleh British. Ia menjadi pangkalan perdagangan dan ketenteraan British di Selat Melaka."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
