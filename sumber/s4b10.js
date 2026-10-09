/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 10 Pilihan Raya.
   Standard Kandungan 11.2, Standard Pembelajaran 11.2.1 hingga 11.2.4 serta K11.2.5 hingga K11.2.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Undi", sk:"11.2.1 Perkembangan pilihan raya · 11.2.2 Pilihan Raya Umum Pertama", lampiran:null,
 kadNama:"Undi Pertama", kadEm:"\u{1F5F3}\u{FE0F}", kadFakta:"Pilihan Raya Umum Pertama di Persekutuan Tanah Melayu diadakan pada 27 Julai 1955. Parti Perikatan memenangi 51 daripada 52 kerusi yang dipertandingkan.",
 bosKadNama:"Tunku Abdul Rahman", bosKadEm:"\u{1F451}", bosKadFakta:"Tunku Abdul Rahman memimpin Parti Perikatan dan menjadi Ketua Menteri pertama selepas pilihan raya 1955.",
 soalan:[
 {j:"pilih",t:"Pilihan Raya Umum Pertama Persekutuan Tanah Melayu diadakan pada tahun:",p:["1955","1952","1957","1959"],b:0,u:"Pilihan Raya Umum Pertama diadakan pada 27 Julai 1955."},
 {j:"pilih",t:"Parti yang memenangi 51 daripada 52 kerusi pada 1955 ialah:",p:["Perikatan","PAS","Parti Negara","IMP"],b:0,u:"Parti Perikatan menang besar pada 1955."},
 {j:"pilih",t:"Ketua Menteri pertama selepas pilihan raya 1955 ialah:",p:["Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Razak","Tun Dr Ismail"],b:0,u:"Tunku Abdul Rahman menjadi Ketua Menteri."},
 {j:"pilih",t:"Pilihan raya pertama peringkat tempatan diadakan di:",p:["Majlis Perbandaran","Dewan Rakyat","Dewan Negara","Mahkamah Tinggi"],b:0,u:"Pilihan raya bermula di peringkat perbandaran pada 1951 dan 1952."},
 {j:"banyak",t:"Pilih DUA parti yang bertanding dalam pilihan raya 1955.",p:["Parti Perikatan","PAS","Parti Komunis Malaya","MPAJA"],b:[0,1],u:"Perikatan dan PAS bertanding. PKM dan MPAJA ialah pasukan komunis."},
 {j:"pilih",t:"Jumlah kerusi yang dipertandingkan dalam pilihan raya 1955 ialah:",p:["52","98","104","60"],b:0,u:"Sebanyak 52 kerusi dipertandingkan."},
 {j:"pilih",t:"Majlis yang dipilih melalui pilihan raya 1955 ialah:",p:["Majlis Perundangan","Majlis Raja-raja Melayu","Majlis Gabenor Jeneral","Majlis tentera Jepun"],b:0,u:"Majlis Perundangan Persekutuan mempunyai ahli yang dipilih."},
 {j:"pilih",t:"Rakyat berhak mengundi apabila mencapai umur:",p:["21 tahun","12 tahun","15 tahun","18 tahun"],b:0,u:"Pada 1955 umur layak mengundi ialah 21 tahun."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan istilah dan maksudnya yang betul.",p:["PRU 1955: pilihan raya umum pertama","Perikatan: UMNO, MCA dan MIC","Ketua Menteri: Tunku Abdul Rahman","Perikatan: UMNO, PAS dan PKM","PRU 1955: diadakan pada tahun 1959"],b:[0,1,2],u:"PRU 1955 pertama, Perikatan menggabungkan UMNO, MCA dan MIC, dan Tunku ialah Ketua Menteri."}},

{n:2, tempat:"Bilik Kronologi Undi", sk:"11.2.2 · 11.2.3 Perkembangan pilihan raya dan Majlis Perundangan", lampiran:"gm1",
 kadNama:"Majlis Perundangan", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Majlis Perundangan Persekutuan selepas 1955 mempunyai 98 ahli, antaranya 52 ahli dipilih rakyat, dan membuat undang-undang negara.",
 bosKadNama:"Kabinet Pertama", bosKadEm:"\u{1F465}", bosKadFakta:"Kabinet pertama dilantik pada Ogos 1955 dan diketuai oleh Tunku Abdul Rahman sebagai Ketua Menteri.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Pilihan raya Georgetown","Pilihan raya Kuala Lumpur","Pilihan Raya Umum Pertama","Kabinet pertama dilantik"],b:0,u:"Pilihan raya Georgetown pada Disember 1951 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Pilihan Raya Umum Pertama diadakan?",p:["Julai 1955","Februari 1952","Ogos 1955","Disember 1951"],b:0,u:"Rajah 1 menunjukkan PRU Pertama pada Julai 1955."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Pilihan raya Georgetown","Pilihan raya Kuala Lumpur","Pilihan Raya Umum Pertama","Kabinet pertama dilantik"],b:[0,1,2,3],u:"Disember 1951, Februari 1952, Julai 1955 dan Ogos 1955."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara PRU Pertama dan pelantikan kabinet?",p:["1 bulan","3 bulan","5 bulan","12 bulan"],b:0,u:"Julai ke Ogos 1955 ialah 1 bulan."},
 {j:"pilih",t:"Ahli Majlis Perundangan Persekutuan yang dipilih rakyat berjumlah:",p:["52","98","40","104"],b:0,u:"Sebanyak 52 daripada 98 ahli dipilih rakyat."},
 {j:"pilih",t:"Fungsi utama Majlis Perundangan Persekutuan ialah:",p:["Membuat undang-undang","Mengetuai tentera","Memilih sultan","Mengurus pelabuhan"],b:0,u:"Majlis Perundangan membuat undang-undang."},
 {j:"pilih",t:"Pilihan raya perbandaran Kuala Lumpur 1952 dimenangi oleh:",p:["Gabungan UMNO dan MCA","Parti Negara","PAS","IMP"],b:0,u:"UMNO dan MCA menang di Kuala Lumpur."},
 {j:"banyak",t:"Pilih DUA tokoh dalam kabinet pertama.",p:["Tunku Abdul Rahman","Tun Abdul Razak","Chin Peng","Lai Teck"],b:[0,1],u:"Tunku dan Tun Razak berada dalam kabinet. Chin Peng dan Lai Teck ialah pemimpin komunis."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara pilihan raya Georgetown dan Kuala Lumpur?",p:["2 bulan","12 bulan","6 bulan","1 bulan"],b:0,u:"Disember 1951 ke Februari 1952 ialah 2 bulan."}},

{n:3, tempat:"Balai Kabinet", sk:"11.2.3 · 11.2.4 Membina kronologi peristiwa pilihan raya", lampiran:null,
 kadNama:"Perikatan Menang", kadEm:"\u{1F3C6}", kadFakta:"Kemenangan Perikatan 1955 membuktikan rakyat berbilang kaum menyokong perpaduan dan membuka jalan rundingan kemerdekaan dengan British.",
 bosKadNama:"Kerajaan Sendiri", bosKadEm:"\u{1F3DB}\u{FE0F}", bosKadFakta:"Selepas 1955, rakyat tempatan mula memerintah dalam pelbagai bidang walaupun British masih memegang pertahanan dan hal ehwal luar.",
 soalan:[
 {j:"pilih",t:"Seorang pengundi memilih wakilnya dalam PRU 1955. Dia menggunakan hak:",p:["Mengundi","Memerintah","Menghukum","Mencukai"],b:0,u:"Mengundi ialah hak rakyat dalam pilihan raya."},
 {j:"pilih",t:"Selepas menang, Perikatan menuntut kepada British supaya:",p:["Memberi kemerdekaan","Melanjutkan penjajahan","Menutup pilihan raya","Menghapuskan parlimen"],b:0,u:"Perikatan menuntut kemerdekaan."},
 {j:"pilih",t:"Urutan manakah menggambarkan proses pilihan raya dengan betul?",p:["Pendaftaran, pengundian, pengiraan, keputusan","Keputusan, pengundian, pendaftaran, pengiraan","Pengiraan, pendaftaran, keputusan, pengundian","Pengundian, keputusan, pendaftaran, pengiraan"],b:0,u:"Pendaftaran, pengundian, pengiraan, kemudian keputusan."},
 {j:"banyak",t:"Pilih DUA kesan kemenangan Perikatan 1955.",p:["Rundingan kemerdekaan dimulakan","Tunku menjadi Ketua Menteri","Darurat diisytiharkan pada 1955","Malayan Union dibentuk pada 1955"],b:[0,1],u:"Rundingan dimulakan dan Tunku menjadi Ketua Menteri."},
 {j:"pilih",t:"Mengapakah Perikatan memenangi hampir semua kerusi?",p:["Wakil pelbagai kaum","Mewakili satu kaum","Dikuasai British","Dikuasai Jepun"],b:0,u:"Perikatan mewakili Melayu, Cina dan India."},
 {j:"pilih",t:"Selepas PRU, Perikatan membentuk kerajaan. Ini bermaksud:",p:["Memimpin kerajaan","Menjadi pembangkang","Mengundurkan diri","Membubarkan Majlis"],b:0,u:"Parti pemenang membentuk kerajaan."},
 {j:"pilih",t:"Tindakan Tunku menawarkan pengampunan dalam rundingan Baling berkait dengan:",p:["Menamatkan Darurat","Menaikkan cukai","Mengisytiharkan merdeka","Memilih sultan"],b:0,u:"Rundingan Baling bertujuan menamatkan Darurat."},
 {j:"pilih",t:"Pentadbiran negeri selepas 1955 dikongsi antara British dan:",p:["Pemimpin tempatan","Jepun","Siam","Komunis"],b:0,u:"Pemimpin tempatan mula berkongsi tugas pentadbiran."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan peristiwa dengan betul?",p:["PRU 1955, Kabinet, Rundingan London","Rundingan London, PRU 1955, Kabinet","Kabinet, Rundingan London, PRU 1955","PRU 1955, Rundingan London, Kabinet"],b:0,u:"PRU 1955, kabinet pertama, kemudian Rundingan London 1956."}},

{n:4, tempat:"Arkib Demokrasi", sk:"11.2.3 · 11.2.4 Menganalisis maklumat tentang pilihan raya", lampiran:"p1",
 kadNama:"Demokrasi", kadEm:"\u{1F5F3}\u{FE0F}", kadFakta:"Pilihan raya ialah lambang demokrasi kerana rakyat memilih pemimpin melalui undi.",
 bosKadNama:"Perkongsian Kuasa", bosKadEm:"\u{1F91D}", bosKadFakta:"Perikatan berkongsi kuasa antara UMNO, MCA dan MIC supaya kepentingan setiap kaum dijaga.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah pilihan raya penting kepada demokrasi?",p:["Rakyat memilih pemimpin","Raja memilih rakyat","British memilih wakil","Tentera memilih kerajaan"],b:0,u:"Petikan menyatakan rakyat memilih pemimpin melalui undi."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kelebihan Parti Perikatan dalam pilihan raya?",p:["Gabung pelbagai kaum","Mewakili satu kaum","Dikuasai pegawai British","Dikuasai pasukan tentera"],b:0,u:"Perikatan menggabungkan parti pelbagai kaum."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan kemenangan Perikatan?",p:["Mempercepat kemerdekaan","Melambatkan kemerdekaan","Menamatkan pilihan raya","Menghapuskan Majlis Perundangan"],b:0,u:"Kemenangan itu mempercepat rundingan kemerdekaan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri pilihan raya yang adil.",p:["Setiap rakyat layak mengundi mempunyai satu undi","Keputusan ditentukan oleh undi rakyat","Undi dibeli dengan wang tunai","Satu parti sahaja dibenarkan bertanding"],b:[0,1],u:"Setiap pengundi mempunyai satu undi dan keputusan ditentukan oleh undi."},
 {j:"pilih",t:"Bandingkan pilihan raya perbandaran dengan PRU 1955. Apakah perbezaannya?",p:["Perbandaran peringkat tempatan, PRU peringkat negara","Perbandaran peringkat negara, PRU peringkat tempatan","Kedua-duanya peringkat negara","Kedua-duanya peringkat tempatan"],b:0,u:"Pilihan raya perbandaran di peringkat tempatan; PRU di peringkat persekutuan."},
 {j:"pilih",t:"Mengapakah perkongsian kuasa antara kaum penting?",p:["Kepentingan semua kaum dijaga","Satu kaum menguasai segalanya","Persaingan kaum bertambah","Pemimpin tidak diperlukan"],b:0,u:"Perkongsian kuasa menjaga kepentingan semua kaum."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penyertaan ramai pengundi pada 1955?",p:["Rakyat berminat","Rakyat takut mengundi","Rakyat menolak kerajaan","Rakyat tidak peduli"],b:0,u:"Penyertaan ramai menunjukkan minat menentukan masa depan."},
 {j:"pilih",t:"Apakah kesan pilihan raya terhadap kuasa British?",p:["Kuasa tempatan bertambah","Kuasa British bertambah","Raja hilang kuasa","Jepun kembali berkuasa"],b:0,u:"Kuasa pemimpin tempatan bertambah."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Lambang demokrasi, jalan merdeka","Pilihan raya menafikan demokrasi","Pilihan raya dikuasai penjajah","Pilihan raya tidak penting"],b:0,u:"Pilihan raya ialah lambang demokrasi dan membuka jalan merdeka."}},

{n:5, tempat:"Dewan Penilai Demokrasi", sk:"11.2.4 · K11.2.5 · K11.2.6 · K11.2.7 · K11.2.8 Menilai fungsi pilihan raya", lampiran:null,
 kadNama:"Integriti", kadEm:"\u{2696}\u{FE0F}", kadFakta:"Integriti bermaksud jujur dan berpegang pada prinsip. Ia penting bagi pengundi dan pemimpin supaya pilihan raya bebas dan adil.",
 bosKadNama:"Pemimpin Berwibawa", bosKadEm:"\u{1F451}", bosKadFakta:"Pemimpin berwibawa adil, amanah dan mampu menyatukan rakyat berbilang kaum.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah pilihan raya penting dalam demokrasi?",p:["Rakyat menentukan pemimpin","Raja memilih pemimpin","Tentera memilih pemimpin","Penjajah memilih pemimpin"],b:0,u:"Rakyat menentukan pemimpin melalui undi."},
 {j:"pilih",t:"Seorang murid berkata, \"Satu undi tidak bermakna.\" Penilaian manakah paling tepat?",p:["Kurang tepat, undi menyumbang","Tepat, undi tidak penting","Tepat, undi sudah ditetapkan","Kurang tepat, undi tidak wujud"],b:0,u:"Setiap undi menyumbang kepada keputusan."},
 {j:"pilih",t:"Antara berikut, integriti dalam pilihan raya ditunjukkan oleh:",p:["Mengundi tanpa rasuah","Menjual undi","Memalsukan keputusan","Mengugut pengundi"],b:0,u:"Mengundi tanpa rasuah menunjukkan integriti."},
 {j:"banyak",t:"Pilih DUA kepentingan perkongsian kuasa dalam masyarakat berbilang kaum.",p:["Kepentingan setiap kaum dijaga","Keharmonian terpelihara","Satu kaum dikuasai oleh kaum lain","Perpaduan dilemahkan oleh perkongsian"],b:[0,1],u:"Perkongsian kuasa menjaga kepentingan semua dan memelihara keharmonian."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang pilihan raya 1955?",p:["Langkah penting","Gagal dalam setiap aspek","Berjaya dalam setiap aspek","Tidak memberi kesan"],b:0,u:"PRU 1955 ialah langkah penting tetapi British masih memegang pertahanan dan hal ehwal luar."},
 {j:"pilih",t:"Mengapakah kepemimpinan berwibawa penting?",p:["Menyatukan rakyat","Memecahkan rakyat","Mengutamakan diri","Mengabaikan undang-undang"],b:0,u:"Pemimpin berwibawa menyatukan rakyat."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada PRU 1955?",p:["Perpaduan dan undi menentukan","Perpecahan membawa kejayaan","Undi tidak diperlukan","Penjajah menentukan semua"],b:0,u:"Perpaduan dan undi menentukan masa depan."},
 {j:"pilih",t:"Mengapakah jati diri penting dalam kehidupan harian?",p:["Pegangan kukuh pada prinsip","Mengikut arus semata-mata","Mengelak tanggungjawab","Menyalahkan orang lain"],b:0,u:"Jati diri memberi pegangan yang kukuh."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang fungsi pilihan raya dalam sistem demokrasi?",p:["Memberi rakyat hak memilih","Memberi kuasa penuh kepada raja","Menghapuskan hak undi","Menyerahkan kuasa kepada tentera"],b:0,u:"Pilihan raya memberi rakyat hak memilih dan menukar pemimpin."}},

{n:6, tempat:"Studio Hak dan Tanggungjawab", sk:"K11.2.5 hingga K11.2.8 Integriti, demokrasi, kepemimpinan dan perkongsian kuasa", lampiran:null,
 kadNama:"Hak Mengundi", kadEm:"\u{1F5F3}\u{FE0F}", kadFakta:"Hari ini warganegara berumur 18 tahun ke atas layak mengundi. Hak ini perlu digunakan dengan bijak dan bertanggungjawab.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar pilihan raya untuk memupuk kesedaran demokrasi dalam kalangan remaja.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mengadakan pemilihan pengawas. Cara terbaik menunjukkan integriti ialah:",p:["Mengundi ikut kelayakan","Mengundi kawan baik sahaja","Menjual undi kepada calon","Memalsukan undi pengundi"],b:0,u:"Memilih mengikut kelayakan menunjukkan integriti."},
 {j:"pilih",t:"Idea manakah paling berasas untuk melatih kesedaran demokrasi murid?",p:["Pilihan raya kelas yang adil","Pemilihan oleh guru semata-mata","Menghapuskan semua jawatan","Pemilihan secara paksaan"],b:0,u:"Pilihan raya kelas melatih proses demokrasi."},
 {j:"banyak",t:"Pilih DUA tanggungjawab seorang pengundi.",p:["Meneliti latar belakang calon","Mengundi dengan jujur","Menerima wang untuk mengundi","Mengugut pengundi lain"],b:[0,1],u:"Menyelidik calon dan mengundi jujur ialah tanggungjawab."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menggalakkan penyertaan belia dalam pilihan raya?",p:["Pendidikan sivik","Menghalang pendaftaran","Menyembunyikan maklumat","Menutup pusat mengundi"],b:0,u:"Pendidikan sivik dan kempen daftar menggalakkan penyertaan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pilihan raya hanya urusan orang dewasa.\" Respons manakah paling rasional?",p:["Murid perlu faham demokrasi","Betul, murid tidak perlu tahu","Betul, ia membosankan","Pilihan raya tidak penting"],b:0,u:"Murid yang memahami demokrasi lebih bersedia menjadi pengundi."},
 {j:"pilih",t:"Bagaimanakah murid mengamalkan perkongsian kuasa dalam kelas?",p:["Peluang kepada kumpulan","Satu kumpulan menguasai","Mengelak perkongsian","Ketua membuat semua keputusan"],b:0,u:"Perkongsian kuasa memberi peluang kepada semua kumpulan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk memupuk integriti pemimpin pelajar?",p:["Kod etika dan pemantauan terbuka","Merahsiakan semua keputusan","Memberi kuasa mutlak","Mengabaikan aduan"],b:0,u:"Kod etika dan pemantauan terbuka menjaga integriti."},
 {j:"pilih",t:"Mengapakah pilihan raya yang adil perlu dijaga?",p:["Kepercayaan rakyat terpelihara","Kepercayaan rakyat hilang","Demokrasi dilemahkan","Pemimpin bebas daripada rakyat"],b:0,u:"Pilihan raya yang adil menjaga kepercayaan rakyat."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang hak dan tanggungjawab individu dalam pilihan raya.",
  arahan:"Pilih sekurang-kurangnya DUA fakta tentang pilihan raya di Persekutuan Tanah Melayu (contoh: pilihan raya perbandaran 1952, PRU 1955, Perikatan, Majlis Perundangan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang pilihan raya, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti integriti, demokrasi dan perkongsian kuasa."}}
];

module.exports = {
  id:"s4b10", tingkatan:4, kod:"10.0 Pilihan Raya",
  tajuk:"Peti Undi Pertama",
  subtajuk:"Sejarah Ting. 4 · Bab 10 Pilihan Raya",
  spi:SPI["11.2"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang pilihan raya. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan pengetahuan berkaitan pilihan raya berserta contoh. Perlu lebih latihan membina kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membina kronologi peristiwa pilihan raya. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang pilihan raya. Seterusnya latih menilai fungsinya dalam sistem demokrasi.",
   5:"{n} dapat menilai fungsi pilihan raya dalam sistem demokrasi. Sudah bersedia menjana idea tentang hak dan tanggungjawab.",
   6:"{n} berjaya menjana idea tentang hak dan tanggungjawab individu dalam pilihan raya. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Pilihan Raya. Cadangan: ulang hentian pertama sambil membina garis masa pilihan raya awal dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Disember 1951", label:"Pilihan raya Georgetown"},
     {masa:"Februari 1952", label:"Pilihan raya Kuala Lumpur"},
     {masa:"Julai 1955", label:"Pilihan Raya Umum Pertama"},
     {masa:"Ogos 1955", label:"Kabinet pertama dilantik"}],
     kapsyen:"Rajah 1 · Perkembangan pilihan raya di Persekutuan Tanah Melayu",
     alt:"Garis masa menegak: Disember 1951 pilihan raya Georgetown; Februari 1952 pilihan raya Kuala Lumpur; Julai 1955 Pilihan Raya Umum Pertama; Ogos 1955 kabinet pertama dilantik"},
   p1:petikan(1, "Pilihan raya dan demokrasi",
     ["Pilihan raya ialah lambang demokrasi kerana rakyat memilih pemimpin melalui undi. Pilihan raya bermula di peringkat perbandaran pada 1951 dan 1952, kemudian Pilihan Raya Umum Pertama diadakan pada 1955.",
      "Parti Perikatan menggabungkan UMNO, MCA dan MIC, lalu memenangi 51 daripada 52 kerusi. Kemenangan itu mempercepat rundingan kemerdekaan dan menambah kuasa pemimpin tempatan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
