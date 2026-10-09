/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 8 Ancaman Komunis dan Pengisytiharan Darurat 1948.
   Standard Kandungan 10.5, Standard Pembelajaran 10.5.1 hingga 10.5.4 serta K10.5.5 hingga K10.5.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Ladang Sungai Siput", sk:"10.5.1 Latar belakang pengaruh komunis · 10.5.2 Ancaman dan keganasan", lampiran:null,
 kadNama:"Parti Komunis Malaya", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Parti Komunis Malaya (PKM) ditubuhkan pada 1930 dan menguasai gerakan gerila MPAJA. Selepas perang, PKM beralih kepada keganasan.",
 bosKadNama:"Chin Peng", bosKadEm:"\u{1F464}", bosKadFakta:"Chin Peng menjadi Setiausaha Agung PKM dan memimpin pemberontakan bersenjata terhadap pemerintah.",
 soalan:[
 {j:"pilih",t:"Pemimpin Parti Komunis Malaya semasa Darurat ialah:",p:["Chin Peng","Lai Teck","Ho Chi Minh","Mao Zedong"],b:0,u:"Chin Peng memimpin PKM semasa Darurat."},
 {j:"pilih",t:"Parti Komunis Malaya ditubuhkan pada tahun:",p:["1930","1946","1948","1957"],b:0,u:"PKM ditubuhkan pada tahun 1930."},
 {j:"pilih",t:"Pembunuhan tiga pengurus ladang British yang mencetuskan Darurat berlaku di:",p:["Sungai Siput, Perak","Kuala Lumpur lama","Pulau Pinang utara","Johor Bahru selatan"],b:0,u:"Pembunuhan itu berlaku di Sungai Siput, Perak, pada 16 Jun 1948."},
 {j:"pilih",t:"Darurat diisytiharkan pada tahun:",p:["1948","1946","1955","1960"],b:0,u:"Darurat diisytiharkan pada 18 Jun 1948."},
 {j:"banyak",t:"Pilih DUA bentuk keganasan komunis.",p:["Membunuh pengurus ladang","Merosakkan jalan kereta api","Membina sekolah di kampung","Membuka lombong baharu"],b:[0,1],u:"Komunis membunuh pengurus ladang dan merosakkan jalan kereta api."},
 {j:"pilih",t:"Matlamat Parti Komunis Malaya ialah:",p:["Menubuhkan republik komunis","Menubuhkan Kesultanan baharu","Menyokong British","Menyertai Siam"],b:0,u:"PKM mahu menubuhkan republik komunis."},
 {j:"pilih",t:"Pasukan komunis yang berperang di hutan dikenali sebagai:",p:["Gerila komunis","Pasukan Wataniah","Home Guard","Askar Melayu"],b:0,u:"Mereka dikenali sebagai pengganas komunis."},
 {j:"pilih",t:"Pasukan gerila PKM ketika perang dahulunya dikenali sebagai:",p:["MPAJA","Wataniah","Force 136","Kempeitai"],b:0,u:"MPAJA ialah pasukan gerila yang dikuasai PKM."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh atau peristiwa dan maklumatnya yang betul.",p:["Chin Peng: pemimpin PKM","Sungai Siput: pembunuhan pengurus ladang","Darurat: diisytiharkan 1948","Chin Peng: Perdana Menteri pertama","Darurat: diisytiharkan 1957"],b:[0,1,2],u:"Chin Peng memimpin PKM, pembunuhan di Sungai Siput, dan Darurat diisytiharkan 1948."}},

{n:2, tempat:"Bilik Kronologi Darurat", sk:"10.5.3 · 10.5.4 Usaha menangani ancaman komunis", lampiran:"gm1",
 kadNama:"Rancangan Briggs", kadEm:"\u{1F3E0}", kadFakta:"Rancangan Briggs 1950 memindahkan penduduk luar bandar ke Kampung Baharu supaya komunis terputus daripada bekalan makanan dan maklumat.",
 bosKadNama:"Hati dan Minda", bosKadEm:"\u{2764}\u{FE0F}", bosKadFakta:"Jeneral Gerald Templer menekankan memenangi hati dan minda rakyat selain operasi ketenteraan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Darurat diisytiharkan","Rancangan Briggs dilancarkan","Perundingan Baling","Darurat ditamatkan"],b:0,u:"Darurat diisytiharkan pada 1948, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Perundingan Baling diadakan?",p:["1955","1950","1948","1960"],b:0,u:"Rajah 1 menunjukkan Perundingan Baling pada 1955."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Darurat diisytiharkan","Rancangan Briggs dilancarkan","Perundingan Baling","Darurat ditamatkan"],b:[0,1,2,3],u:"1948, 1950, 1955 dan 1960."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah tempoh Darurat dari pengisytiharan hingga penamatan?",p:["12 tahun","10 tahun","5 tahun","7 tahun"],b:0,u:"1960 tolak 1948 ialah 12 tahun."},
 {j:"pilih",t:"Rancangan yang memindahkan penduduk ke Kampung Baharu ialah:",p:["Rancangan Briggs","Rancangan Templer","Rancangan Malaysia","Rancangan Marshall"],b:0,u:"Rancangan Briggs mengasingkan komunis daripada penduduk."},
 {j:"pilih",t:"Pegawai yang memperkenalkan strategi Hati dan Minda ialah:",p:["Gerald Templer","Sir Harold Briggs","Sir Henry Gurney","Chin Peng"],b:0,u:"Templer menekankan hati dan minda rakyat."},
 {j:"pilih",t:"Perundingan antara Tunku Abdul Rahman dengan Chin Peng pada 1955 diadakan di:",p:["Baling, Kedah","Kuala Lumpur, Selangor","Pulau Pinang","Johor Bahru, Johor"],b:0,u:"Perundingan Baling diadakan di Kedah."},
 {j:"banyak",t:"Pilih DUA usaha menangani ancaman komunis.",p:["Kampung Baharu","Operasi tentera dan polis","Penghapusan perdagangan","Penutupan sekolah"],b:[0,1],u:"Kampung Baharu serta operasi tentera dan polis."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Rancangan Briggs dan Perundingan Baling?",p:["5 tahun","7 tahun","10 tahun","2 tahun"],b:0,u:"1955 tolak 1950 ialah 5 tahun."}},

{n:3, tempat:"Kampung Baharu", sk:"10.5.3 · 10.5.4 Mengklasifikasikan maklumat ancaman dan usaha", lampiran:null,
 kadNama:"Kawasan Putih", kadEm:"\u{26AA}", kadFakta:"Kawasan putih ialah kawasan yang bebas daripada komunis, dan sekatan makanan dilonggarkan di sana.",
 bosKadNama:"Sekatan Makanan", bosKadEm:"\u{1F35A}", bosKadFakta:"Sekatan makanan di kawasan hitam menghalang komunis memperoleh bekalan daripada penduduk.",
 soalan:[
 {j:"pilih",t:"Tindakan komunis membunuh pengurus ladang dikelaskan sebagai:",p:["Keganasan","Usaha menangani komunis","Perundingan damai","Kerjasama dengan British"],b:0,u:"Pembunuhan ialah keganasan komunis."},
 {j:"pilih",t:"Pembinaan Kampung Baharu dikelaskan sebagai:",p:["Usaha menangani komunis","Keganasan oleh komunis","Penentangan terhadap Jepun","Dasar Nipponisasi Jepun"],b:0,u:"Kampung Baharu ialah usaha kerajaan menangani komunis."},
 {j:"pilih",t:"Pasukan Home Guard dikelaskan sebagai:",p:["Pasukan penduduk","Pasukan komunis hutan","Pasukan tentera Jepun","Pasukan raja Siam"],b:0,u:"Home Guard ialah pasukan penduduk yang membantu keselamatan."},
 {j:"banyak",t:"Pilih DUA langkah kerajaan menangani komunis.",p:["Sekatan makanan","Kampung Baharu","Menyembunyikan pengganas","Membekalkan senjata kepada komunis"],b:[0,1],u:"Sekatan makanan dan Kampung Baharu ialah langkah kerajaan."},
 {j:"pilih",t:"Kawasan 'putih' dikelaskan sebagai kawasan:",p:["Bebas komunis","Dikuasai komunis","Dikawal Jepun","Dikuasai Siam"],b:0,u:"Kawasan putih ialah kawasan yang bebas komunis."},
 {j:"pilih",t:"Pembunuhan Sir Henry Gurney pada tahun 1951 dikelaskan sebagai:",p:["Keganasan komunis","Usaha British","Rundingan damai","Bantuan penduduk"],b:0,u:"Gurney dibunuh oleh komunis pada 1951."},
 {j:"pilih",t:"Operasi 'Hati dan Minda' dikelaskan sebagai pendekatan:",p:["Memenangi sokongan rakyat","Menghukum rakyat jelata","Memutuskan hubungan rakyat","Memulaukan kampung lama"],b:0,u:"Pendekatan itu memenangi sokongan rakyat."},
 {j:"pilih",t:"Pengisytiharan Darurat dikelaskan sebagai tindakan:",p:["Keselamatan negara","Pilihan raya umum","Pendidikan sekolah","Perdagangan rempah"],b:0,u:"Darurat ialah tindakan keselamatan negara."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah BUKAN usaha menangani ancaman komunis?",p:["Membekalkan gerila","Rancangan Briggs","Sekatan makanan","Operasi Hati dan Minda"],b:0,u:"Membekalkan makanan kepada gerila membantu komunis."}},

{n:4, tempat:"Arkib Darurat", sk:"10.5.3 · 10.5.4 Mencerakinkan maklumat tentang Darurat", lampiran:"p1",
 kadNama:"Kesan Darurat", kadEm:"\u{1F50D}", kadFakta:"Darurat menjejaskan ekonomi dan kehidupan rakyat, tetapi menguatkan pasukan keselamatan dan mempercepat usaha kemerdekaan.",
 bosKadNama:"Keamanan", bosKadEm:"\u{1F54A}\u{FE0F}", bosKadFakta:"Keamanan ialah syarat kemakmuran. Darurat menunjukkan kos tinggi bagi sebuah negara yang tidak aman.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah penduduk dipindahkan ke Kampung Baharu?",p:["Putus bekalan komunis","Menambah penduduk bandar","Membuka lombong","Mengubah agama"],b:0,u:"Petikan menyatakan bekalan makanan dan maklumat kepada komunis dipotong."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan Darurat terhadap kehidupan rakyat?",p:["Sekatan pergerakan","Kemewahan dan kebebasan","Pengurangan cukai","Kelimpahan makanan"],b:0,u:"Rakyat menghadapi sekatan dan kehilangan harta."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan Darurat terhadap perjuangan kemerdekaan?",p:["Mendesak kerajaan bersatu","Menggagalkan kemerdekaan","Menghentikan pilihan raya","Menguatkan penjajah selama-lamanya"],b:0,u:"Ancaman bersama mendorong pemimpin bersatu."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kesan Darurat.",p:["Ekonomi terjejas","Pasukan keselamatan diperkukuh","Kemakmuran bertambah","Hubungan kaum retak sepenuhnya"],b:[0,1],u:"Ekonomi terjejas dan pasukan keselamatan diperkukuh."},
 {j:"pilih",t:"Bandingkan ancaman Jepun dengan ancaman komunis. Apakah persamaannya?",p:["Mengancam kedaulatan dan keamanan","Datang dari Eropah","Mahu menyokong British","Ditamatkan oleh Kampung Baharu"],b:0,u:"Kedua-duanya mengancam kedaulatan dan keamanan."},
 {j:"pilih",t:"Mengapakah sokongan rakyat penting dalam menamatkan Darurat?",p:["Maklumat dan kerjasama","Rakyat menyertai komunis","Rakyat meninggalkan kampung","Rakyat menolak kerajaan"],b:0,u:"Kerjasama rakyat memudahkan pasukan keselamatan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada kejayaan strategi Hati dan Minda?",p:["Rakyat melemahkan komunis","Peperangan semata-mata cukup","Komunis disenangi rakyat","Sekatan makanan tidak berkesan"],b:0,u:"Sokongan rakyat melemahkan perjuangan komunis."},
 {j:"pilih",t:"Mengapakah operasi ketenteraan sahaja tidak mencukupi untuk menamatkan Darurat?",p:["Sokongan rakyat juga diperlukan","Komunis terlalu lemah","Hutan terlalu terbuka","Rakyat membenci tentera"],b:0,u:"Operasi ketenteraan perlu disertai usaha memenangi sokongan rakyat."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Mengancam tetapi menyatukan","Darurat membawa kemakmuran","Darurat tidak menjejaskan rakyat","Darurat dimenangi komunis"],b:0,u:"Darurat mengancam keamanan tetapi menggalakkan perpaduan menentang komunis."}},

{n:5, tempat:"Dewan Penilai Keamanan", sk:"10.5.4 · K10.5.5 · K10.5.6 · K10.5.7 Menilai ancaman komunis", lampiran:null,
 kadNama:"Berhati-hati", kadEm:"\u{26A0}\u{FE0F}", kadFakta:"Berhati-hati dengan anasir yang menggugat kestabilan negara ialah sikap penting warganegara.",
 bosKadNama:"Strategik", bosKadEm:"\u{265F}\u{FE0F}", bosKadFakta:"Pemikiran strategik membolehkan negara menghadapi ancaman melalui kombinasi keselamatan dan kebajikan rakyat.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah pengisytiharan Darurat 1948 wajar?",p:["Melindungi kedaulatan","Menambah kuasa penjajah","Menutup sekolah","Menyekat pilihan raya"],b:0,u:"Darurat melindungi keselamatan dan kedaulatan negara."},
 {j:"pilih",t:"Seorang murid berkata, \"Darurat tidak menjejaskan kehidupan hari ini.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ada kesannya","Tepat, ia sudah dilupakan","Tepat, ia tiada kesan","Kurang tepat, ia tidak berlaku"],b:0,u:"Pasukan keselamatan dan Kampung Baharu masih menjadi warisan."},
 {j:"pilih",t:"Antara berikut, sikap berhati-hati dengan anasir subversif ialah:",p:["Melapor kegiatan curiga","Menyertai kegiatan haram","Mengabaikan ancaman","Menyebarkan khabar angin"],b:0,u:"Melaporkan kegiatan mencurigakan membantu keselamatan."},
 {j:"banyak",t:"Pilih DUA kepentingan menjamin keamanan negara.",p:["Ekonomi berkembang","Rakyat hidup selamat","Perpecahan berkembang","Pelaburan lari"],b:[0,1],u:"Keamanan menjamin ekonomi dan keselamatan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Rancangan Briggs?",p:["Berkesan tetapi menyusahkan penduduk","Menyusahkan penduduk dalam setiap aspek","Berkesan dalam setiap aspek","Tidak memberi kesan"],b:0,u:"Ia berkesan melemahkan komunis, tetapi memaksa penduduk berpindah."},
 {j:"pilih",t:"Mengapakah pemikiran strategik penting dalam menghadapi ancaman?",p:["Menjaga keselamatan dan rakyat","Menumpukan kepada senjata semata","Mengabaikan kebajikan rakyat","Menyerah kepada ancaman besar"],b:0,u:"Strategi yang menggabungkan keselamatan dan kebajikan lebih berkesan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada Darurat?",p:["Perpaduan menamatkan ancaman","Perpecahan menamatkan ancaman","Ancaman hilang sendiri","Kerjasama tidak diperlukan"],b:0,u:"Perpaduan rakyat dan kerajaan menamatkan ancaman."},
 {j:"pilih",t:"Mengapakah sedia berkorban untuk negara dianggap mulia?",p:["Keselamatan bersama diutamakan","Kepentingan sendiri diutamakan","Tanggungjawab diabaikan","Keselamatan diancam"],b:0,u:"Pengorbanan mengutamakan keselamatan bersama."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang pengisytiharan Darurat 1948?",p:["Langkah wajar menjaga keamanan","Langkah yang tidak berkesan","Langkah penjajahan baharu","Langkah yang menggagalkan kemerdekaan"],b:0,u:"Darurat ialah langkah wajar untuk mempertahankan kedaulatan dan keamanan."}},

{n:6, tempat:"Studio Strategi", sk:"K10.5.5 hingga K10.5.8 Berhati-hati, strategik, keamanan dan sedia berkorban", lampiran:null,
 kadNama:"Keselamatan Hari Ini", kadEm:"\u{1F6E1}\u{FE0F}", kadFakta:"Hari ini kerjasama rakyat dengan pasukan keselamatan, seperti Rukun Tetangga, terus menjaga keamanan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar Darurat untuk menjaga keamanan masa kini.",
 soalan:[
 {j:"pilih",t:"Taman perumahan anda mahu lebih selamat. Iktibar Darurat yang sesuai ialah:",p:["Kerjasama penduduk","Setiap rumah bertindak sendiri","Mengabaikan ancaman","Menyembunyikan maklumat"],b:0,u:"Kerjasama menjamin keselamatan komuniti."},
 {j:"pilih",t:"Sekolah anda mahu memupuk sikap sedia berkorban. Idea manakah paling berasas?",p:["Program sukarelawan komuniti","Menghapuskan kegiatan kelab","Menggalakkan sikap pentingkan diri","Melarang kerja berpasukan"],b:0,u:"Sukarelawan menyemai semangat berkorban."},
 {j:"banyak",t:"Pilih DUA cara menjaga keamanan negara.",p:["Mematuhi undang-undang","Melaporkan perkara mencurigakan","Menyebar fitnah tentang pemimpin","Merosakkan harta awam negara"],b:[0,1],u:"Patuh undang-undang dan melapor perkara mencurigakan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghadapi fahaman ekstrem hari ini?",p:["Pendidikan dan dialog terbuka","Membiarkan fahaman berleluasa","Memencilkan penganutnya sahaja","Mengabaikan maklumat"],b:0,u:"Pendidikan dan dialog melemahkan fahaman ekstrem."},
 {j:"pilih",t:"Seorang rakan berkata, \"Sejarah Darurat tidak berguna.\" Respons manakah paling rasional?",p:["Ia mengajar keamanan","Betul, ia sudah usang","Betul, ia membosankan","Hanya askar perlu tahu"],b:0,u:"Sejarah Darurat mengajar kita menghargai keamanan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan pemikiran strategik dalam kehidupan harian?",p:["Merancang masa","Bertindak tanpa fikir","Menunggu orang lain","Menyalin jawapan"],b:0,u:"Merancang masa dan matlamat ialah pemikiran strategik."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menghormati pasukan keselamatan?",p:["Menghargai mereka","Mengejek perajurit","Menjauhkan diri","Menyebar fitnah"],b:0,u:"Majlis penghargaan menunjukkan rasa terima kasih."},
 {j:"pilih",t:"Mengapakah rakyat perlu mempertahankan kedaulatan dari ancaman dalam negeri?",p:["Keamanan menjamin kemajuan","Keamanan menghalang kemajuan","Ancaman tidak penting","Kedaulatan hanya urusan tentera"],b:0,u:"Keamanan menjamin kemajuan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea berasaskan pengisytiharan Darurat 1948 untuk menghadapi ancaman bagi mengekalkan kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada Darurat (contoh: Rancangan Briggs, Hati dan Minda, sekatan makanan, perpaduan rakyat dan pasukan keselamatan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Darurat, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti berhati-hati, pemikiran strategik dan sedia berkorban."}}
];

module.exports = {
  id:"s4b8", tingkatan:4, kod:"8.0 Ancaman Komunis dan Pengisytiharan Darurat 1948",
  tajuk:"Jejak di Rimba",
  subtajuk:"Sejarah Ting. 4 · Bab 8 Ancaman Komunis dan Pengisytiharan Darurat 1948",
  spi:SPI["10.5"],
  ulasan:{
   1:"{n} dapat memerihalkan ancaman komunis dan pengisytiharan Darurat 1948. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan ancaman komunis dan Darurat berserta contoh. Perlu lebih latihan mengklasifikasikan maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh mengklasifikasikan maklumat ancaman komunis dan Darurat. Galakkan mencerakinkannya.",
   4:"{n} mampu mencerakinkan maklumat tentang ancaman komunis dan Darurat. Seterusnya latih menilai kesannya pada kehidupan hari ini.",
   5:"{n} dapat menilai ancaman komunis dan Darurat yang mempengaruhi kehidupan hari ini. Sudah bersedia membuat rasionalisasi.",
   6:"{n} berjaya membuat rasionalisasi tentang pengisytiharan Darurat 1948 bagi menghadapi ancaman komunis. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Ancaman Komunis dan Darurat. Cadangan: ulang hentian pertama sambil membina garis masa Darurat dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1948", label:"Darurat diisytiharkan"},
     {masa:"1950", label:"Rancangan Briggs dilancarkan"},
     {masa:"1955", label:"Perundingan Baling"},
     {masa:"1960", label:"Darurat ditamatkan"}],
     kapsyen:"Rajah 1 · Darurat 1948 hingga 1960",
     alt:"Garis masa menegak: 1948 Darurat diisytiharkan; 1950 Rancangan Briggs dilancarkan; 1955 Perundingan Baling; 1960 Darurat ditamatkan"},
   p1:petikan(1, "Darurat dan kesannya",
     ["Rancangan Briggs memindahkan penduduk luar bandar ke Kampung Baharu untuk memutuskan bekalan makanan dan maklumat kepada komunis. Rakyat mengalami sekatan pergerakan dan kehilangan harta.",
      "Darurat menjejaskan ekonomi tetapi memperkukuh pasukan keselamatan. Ancaman bersama mendorong pemimpin pelbagai kaum bersatu, dan menyokong usaha ke arah kemerdekaan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
