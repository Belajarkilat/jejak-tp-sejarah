/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 11 Perlembagaan Persekutuan Tanah Melayu 1957.
   Standard Kandungan 11.3, Standard Pembelajaran 11.3.1 hingga 11.3.4 serta K11.3.5 hingga K11.3.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Rundingan London", sk:"11.3.1 Usaha rundingan kemerdekaan · 11.3.2 Suruhanjaya Reid", lampiran:null,
 kadNama:"Rundingan London", kadEm:"\u{1F1EC}\u{1F1E7}", kadFakta:"Pada Januari hingga Februari 1956, delegasi Tanah Melayu diketuai Tunku Abdul Rahman berunding di London. British bersetuju memberi kemerdekaan pada Ogos 1957.",
 bosKadNama:"Suruhanjaya Reid", bosKadEm:"\u{1F4D1}", bosKadFakta:"Suruhanjaya Perlembagaan Persekutuan Tanah Melayu, yang dikenali sebagai Suruhanjaya Reid, ditubuhkan pada 1956 untuk merangka perlembagaan negara merdeka.",
 soalan:[
 {j:"pilih",t:"Rundingan kemerdekaan antara delegasi Tanah Melayu dengan British diadakan di:",p:["London","Kuala Lumpur","Singapura","Bangkok"],b:0,u:"Rundingan Kemerdekaan diadakan di London pada 1956."},
 {j:"pilih",t:"Ketua delegasi Tanah Melayu ke Rundingan London ialah:",p:["Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Razak","Tun Tan Cheng Lock"],b:0,u:"Tunku Abdul Rahman mengetuai delegasi."},
 {j:"pilih",t:"Suruhanjaya yang merangka perlembagaan Persekutuan Tanah Melayu dikenali sebagai:",p:["Suruhanjaya Reid","Suruhanjaya Briggs","Suruhanjaya Barnes","Suruhanjaya Templer"],b:0,u:"Suruhanjaya Reid merangka perlembagaan."},
 {j:"pilih",t:"Pengerusi Suruhanjaya Reid ialah:",p:["Lord Reid","Sir Ivor Jennings","Sir William McKell","Tunku Abdul Rahman"],b:0,u:"Lord Reid ialah pengerusi suruhanjaya."},
 {j:"banyak",t:"Pilih DUA negara yang diwakili dalam Suruhanjaya Reid.",p:["India","Australia","Jepun","Perancis"],b:[0,1],u:"Wakil dari Britain, Australia, India dan Pakistan."},
 {j:"pilih",t:"Tarikh kemerdekaan yang dipersetujui di London ialah:",p:["31 Ogos 1957","16 September 1963","1 Februari 1948","1 April 1946"],b:0,u:"Kemerdekaan dipersetujui pada 31 Ogos 1957."},
 {j:"pilih",t:"Suruhanjaya Reid ditubuhkan pada tahun:",p:["1956","1948","1957","1963"],b:0,u:"Suruhanjaya Reid ditubuhkan pada 1956."},
 {j:"pilih",t:"Suruhanjaya Reid menyerahkan laporannya pada tahun:",p:["1957","1955","1952","1948"],b:0,u:"Laporan diserahkan pada Februari 1957."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan tokoh atau badan dan peranannya yang betul.",p:["Tunku Abdul Rahman: ketua delegasi London","Lord Reid: pengerusi suruhanjaya","Suruhanjaya Reid: merangka perlembagaan","Lord Reid: Ketua Menteri","Suruhanjaya Reid: menyerang komunis"],b:[0,1,2],u:"Tunku mengetuai delegasi, Lord Reid mengerusikan suruhanjaya yang merangka perlembagaan."}},

{n:2, tempat:"Bilik Kronologi Perlembagaan", sk:"11.3.2 · 11.3.3 Penggubalan Perlembagaan", lampiran:"gm1",
 kadNama:"Laporan Reid", kadEm:"\u{1F4C4}", kadFakta:"Laporan Suruhanjaya Reid disiapkan pada Februari 1957 dan menjadi asas Perlembagaan Persekutuan Tanah Melayu merdeka.",
 bosKadNama:"Perjanjian 1957", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"Perjanjian Persekutuan Tanah Melayu 1957 menjadi asas undang-undang bagi Persekutuan yang merdeka.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Rundingan London","Suruhanjaya Reid ditubuhkan","Laporan Reid disiapkan","Perlembagaan berkuat kuasa"],b:0,u:"Rundingan London pada Januari 1956 ialah peristiwa paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Laporan Reid disiapkan?",p:["Februari 1957","Mac 1956","Ogos 1957","Januari 1956"],b:0,u:"Rajah 1 menunjukkan Laporan Reid pada Februari 1957."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Rundingan London","Suruhanjaya Reid ditubuhkan","Laporan Reid disiapkan","Perlembagaan berkuat kuasa"],b:[0,1,2,3],u:"Januari 1956, Mac 1956, Februari 1957 dan Ogos 1957."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Laporan Reid dan Perlembagaan berkuat kuasa?",p:["6 bulan","11 bulan","8 bulan","2 bulan"],b:0,u:"Februari ke Ogos 1957 ialah 6 bulan."},
 {j:"pilih",t:"Perlembagaan Persekutuan Tanah Melayu berkuat kuasa pada:",p:["31 Ogos 1957","31 Ogos 1963","1 Februari 1948","1 April 1946"],b:0,u:"Perlembagaan berkuat kuasa semasa kemerdekaan, 31 Ogos 1957."},
 {j:"pilih",t:"Suruhanjaya Reid menjalankan kerja dengan menerima:",p:["Memorandum pelbagai pihak","Arahan Jepun","Cadangan komunis","Keputusan tentera"],b:0,u:"Suruhanjaya menerima memorandum parti, persatuan dan individu."},
 {j:"pilih",t:"Perlembagaan yang merdeka digubal dengan melibatkan:",p:["Raja-raja dan Perikatan","Pihak British sendirian","Pihak komunis sahaja","Kerajaan Jepun ketika itu"],b:0,u:"Raja-raja Melayu, Perikatan dan British terlibat."},
 {j:"banyak",t:"Pilih DUA peristiwa yang berlaku pada 1956.",p:["Rundingan London","Suruhanjaya Reid ditubuhkan","Perlembagaan berkuat kuasa","Laporan Reid disiapkan"],b:[0,1],u:"Rundingan London dan penubuhan suruhanjaya berlaku pada 1956."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Rundingan London dan penubuhan Suruhanjaya Reid?",p:["2 bulan","6 bulan","11 bulan","1 bulan"],b:0,u:"Januari ke Mac 1956 ialah 2 bulan."}},

{n:3, tempat:"Balai Perlembagaan", sk:"11.3.3 · 11.3.4 Membuat kronologi penggubalan perlembagaan", lampiran:null,
 kadNama:"Kontrak Sosial", kadEm:"\u{1F91D}", kadFakta:"Perlembagaan 1957 mengandungi persetujuan antara kaum: kerakyatan diperluas kepada bukan Melayu, manakala kedudukan Melayu, Islam dan bahasa Melayu dilindungi.",
 bosKadNama:"Raja Berperlembagaan", bosKadEm:"\u{1F451}", bosKadFakta:"Yang di-Pertuan Agong dipilih daripada sembilan raja Melayu secara bergilir dan bertindak mengikut nasihat kabinet.",
 soalan:[
 {j:"pilih",t:"Agama Persekutuan menurut Perlembagaan 1957 ialah:",p:["Islam","Buddha","Hindu","Kristian"],b:0,u:"Islam ialah agama Persekutuan."},
 {j:"pilih",t:"Bahasa kebangsaan menurut Perlembagaan 1957 ialah bahasa:",p:["Melayu","Inggeris","Cina","Tamil"],b:0,u:"Bahasa Melayu ialah bahasa kebangsaan."},
 {j:"pilih",t:"Ketua Negara menurut Perlembagaan 1957 ialah:",p:["Yang di-Pertuan Agong","Perdana Menteri","Hakim Besar","Panglima Tentera"],b:0,u:"Yang di-Pertuan Agong ialah ketua negara."},
 {j:"banyak",t:"Pilih DUA perkara yang dilindungi dalam Perlembagaan 1957.",p:["Kedudukan istimewa orang Melayu","Hak kaum lain yang sah","Pemerintahan Jepun di Tanah Melayu","Dasar Nipponisasi bahasa Jepun"],b:[0,1],u:"Kedudukan Melayu dan hak kaum lain dilindungi."},
 {j:"pilih",t:"Pemberian kerakyatan kepada bukan Melayu dalam Perlembagaan ialah:",p:["Persetujuan kaum","Paksaan British","Arahan Jepun","Keputusan komunis"],b:0,u:"Kerakyatan diperluas melalui persetujuan antara kaum."},
 {j:"pilih",t:"Perjanjian bertulis untuk meletakkan asas Persekutuan merdeka ialah:",p:["Perjanjian Persekutuan 1957","Perjanjian Pangkor 1874","Perjanjian London 1824","Perjanjian Bangkok 1909"],b:0,u:"Perjanjian Persekutuan Tanah Melayu 1957."},
 {j:"pilih",t:"Yang di-Pertuan Agong dipilih daripada:",p:["Raja-raja Melayu","Perdana Menteri","Rakyat melalui undi","Hakim Mahkamah"],b:0,u:"Yang di-Pertuan Agong dipilih dalam kalangan sembilan raja Melayu."},
 {j:"pilih",t:"Raja Berperlembagaan bermaksud raja:",p:["Ikut perlembagaan","Memerintah secara mutlak","Hilang kedudukan sepenuhnya","Dipilih oleh rakyat jelata"],b:0,u:"Raja bertindak mengikut perlembagaan dan nasihat."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan penggubalan perlembagaan dengan betul?",p:["Rundingan London, Suruhanjaya Reid, Perlembagaan","Suruhanjaya Reid, Rundingan London, Perlembagaan","Perlembagaan, Rundingan London, Suruhanjaya Reid","Perlembagaan, Suruhanjaya Reid, Rundingan London"],b:0,u:"Rundingan London, kemudian Suruhanjaya Reid, kemudian Perlembagaan."}},

{n:4, tempat:"Arkib Perlembagaan", sk:"11.3.3 · 11.3.4 Menganalisis maklumat tentang Perlembagaan 1957", lampiran:"p1",
 kadNama:"Kompromi Kaum", kadEm:"\u{1F465}", kadFakta:"Perlembagaan 1957 ialah hasil kompromi kaum yang dicapai melalui rundingan dan permuafakatan dalam Parti Perikatan.",
 bosKadNama:"Keluhuran", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Keluhuran Perlembagaan bermaksud perlembagaan ialah undang-undang tertinggi yang mesti dihormati semua pihak.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Perlembagaan 1957 diterima pelbagai kaum?",p:["Kepentingan setiap kaum dijaga","Hanya satu kaum diberi hak","Dipaksa oleh British","Dipaksa oleh komunis"],b:0,u:"Petikan menyatakan kepentingan setiap kaum dijaga."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah asas kerjasama Perikatan?",p:["Permuafakatan antara kaum","Persaingan antara kaum","Pemisahan kaum","Pemulauan kaum"],b:0,u:"Perikatan berasaskan permuafakatan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan Perlembagaan terhadap kestabilan?",p:["Menjamin kestabilan negara","Menggugat kestabilan negara","Menamatkan pilihan raya","Menghapuskan raja"],b:0,u:"Perlembagaan menjamin kestabilan melalui persetujuan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA ciri Perlembagaan 1957.",p:["Kerakyatan diperluas","Kedudukan Melayu dilindungi","Raja dihapuskan","Pilihan raya dibatalkan"],b:[0,1],u:"Kerakyatan diperluas dan kedudukan Melayu dilindungi."},
 {j:"pilih",t:"Bandingkan Perlembagaan 1957 dengan Malayan Union. Apakah perbezaannya?",p:["Perlembagaan menghormati raja, Malayan Union mengurangkan kuasa raja","Perlembagaan mengurangkan kuasa raja, Malayan Union menghormatinya","Kedua-duanya sama","Kedua-duanya dihapuskan"],b:0,u:"Perlembagaan 1957 menghormati kedaulatan raja."},
 {j:"pilih",t:"Mengapakah keterbukaan penting untuk kemajuan negara?",p:["Mencapai persetujuan","Menolak pandangan lain","Memecahkan masyarakat","Menamatkan rundingan"],b:0,u:"Keterbukaan membawa persetujuan yang adil."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada perlembagaan yang digubal melalui rundingan?",p:["Lebih diterima","Kurang diterima","Cepat gagal","Hanya sesuai satu kaum"],b:0,u:"Perlembagaan yang digubal melalui rundingan lebih diterima."},
 {j:"pilih",t:"Apakah kesan keluhuran perlembagaan?",p:["Undang-undang tertinggi","Undang-undang diabaikan","Raja berkuasa mutlak","Pemimpin menolak undang-undang"],b:0,u:"Perlembagaan ialah undang-undang tertinggi."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Perlembagaan 1957 hasil permuafakatan","Perlembagaan 1957 dipaksa oleh British","Perlembagaan 1957 menolak permuafakatan","Perlembagaan 1957 tidak penting"],b:0,u:"Perlembagaan hasil permuafakatan yang menjamin kestabilan."}},

{n:5, tempat:"Dewan Penilai Keluhuran", sk:"11.3.4 · K11.3.5 · K11.3.6 · K11.3.7 · K11.3.8 Menilai Perlembagaan 1957", lampiran:null,
 kadNama:"Menghormati Keputusan", kadEm:"\u{1F91D}", kadFakta:"Menghormati keputusan pemimpin negara yang dibuat melalui perundingan membantu kestabilan masyarakat.",
 bosKadNama:"Menjunjung Perlembagaan", bosKadEm:"\u{1F4DC}", bosKadFakta:"Menjunjung keluhuran perlembagaan bermaksud mematuhi dan mempertahankan undang-undang tertinggi negara.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Perlembagaan 1957 penting?",p:["Asas undang-undang negara merdeka","Menghalang kemerdekaan","Menambah kuasa penjajah","Memecahkan kaum"],b:0,u:"Ia asas undang-undang negara merdeka."},
 {j:"pilih",t:"Seorang murid berkata, \"Perlembagaan tidak perlu dipatuhi.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia tertinggi","Tepat, ia hanya cadangan","Tepat, ia boleh diabaikan","Kurang tepat, ia tidak wujud"],b:0,u:"Perlembagaan ialah undang-undang tertinggi."},
 {j:"pilih",t:"Antara berikut, menjunjung keluhuran perlembagaan ditunjukkan oleh:",p:["Mematuhi undang-undang negara","Melanggar undang-undang","Mengejek perlembagaan","Menyebarkan fitnah"],b:0,u:"Mematuhi undang-undang ialah menjunjung perlembagaan."},
 {j:"banyak",t:"Pilih DUA kepentingan permuafakatan untuk kestabilan negara.",p:["Perselisihan diselesaikan secara aman","Hubungan kaum terjaga","Perpecahan digalakkan di kalangan rakyat","Rundingan dihentikan oleh pemimpin"],b:[0,1],u:"Permuafakatan menyelesaikan perselisihan dan menjaga hubungan kaum."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Perlembagaan 1957?",p:["Kompromi yang adil","Tiada kelemahan langsung","Penuh kelemahan","Tidak bernilai"],b:0,u:"Ia kompromi yang adil tetapi memerlukan kesabaran semua pihak."},
 {j:"pilih",t:"Mengapakah menghormati keputusan pemimpin penting?",p:["Menjamin keharmonian","Menghalang kemajuan","Melemahkan negara","Menjatuhkan pemimpin"],b:0,u:"Menghormati keputusan menjamin keharmonian."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada penggubalan perlembagaan?",p:["Rundingan menjamin kestabilan","Paksaan menjamin kestabilan","Perpecahan menjamin kestabilan","Keputusan sepihak menjamin kestabilan"],b:0,u:"Rundingan dan permuafakatan menjamin kestabilan."},
 {j:"pilih",t:"Mengapakah sikap terbuka terhadap pandangan lain berguna?",p:["Penyelesaian lebih adil","Penyelesaian lebih cepat","Penyelesaian ditolak","Penyelesaian dielak"],b:0,u:"Sikap terbuka menghasilkan penyelesaian yang diterima."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Perlembagaan Persekutuan Tanah Melayu 1957?",p:["Asas undang-undang","Penghalang kemerdekaan","Alat penjajah","Dokumen tanpa nilai"],b:0,u:"Perlembagaan 1957 ialah asas undang-undang dan kestabilan negara merdeka."}},

{n:6, tempat:"Studio Keluhuran", sk:"K11.3.5 hingga K11.3.8 Menghormati keputusan, permuafakatan, keterbukaan dan keluhuran perlembagaan", lampiran:null,
 kadNama:"Rukun Negara", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Keluhuran Perlembagaan ialah prinsip kedua Rukun Negara. Ia mengingatkan semua rakyat supaya menghormati undang-undang tertinggi negara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar perlembagaan untuk memupuk kesedaran undang-undang dalam kalangan remaja.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk menghormati perlembagaan. Idea manakah paling berasas?",p:["Kuiz dan pameran tentang perlembagaan","Menghapuskan mata pelajaran sivik","Melarang soalan tentang undang-undang","Mengejek perlembagaan"],b:0,u:"Kuiz dan pameran memperkenalkan perlembagaan."},
 {j:"pilih",t:"Dua kumpulan murid berselisih tentang peraturan. Iktibar permuafakatan 1957 ialah:",p:["Berunding sehingga ada persetujuan","Memaksa pendapat sendiri","Memulaukan kumpulan lain","Meninggalkan perbincangan"],b:0,u:"Rundingan menghasilkan persetujuan."},
 {j:"banyak",t:"Pilih DUA cara menjunjung keluhuran perlembagaan.",p:["Mematuhi undang-undang","Menghormati hak orang lain","Mengabaikan peraturan","Menghina lambang negara"],b:[0,1],u:"Mematuhi undang-undang dan menghormati hak orang lain."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengajar perlembagaan kepada rakan sebaya?",p:["Permainan peranan Suruhanjaya Reid","Menghafal pasal tanpa faham","Mengabaikan perlembagaan","Menyalin nota"],b:0,u:"Permainan peranan menjelaskan proses penggubalan."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perlembagaan tiada kaitan dengan saya.\" Respons manakah paling rasional?",p:["Ia melindungi hak","Betul, ia untuk peguam","Betul, ia sudah lapuk","Hanya pemimpin terlibat"],b:0,u:"Perlembagaan melindungi hak dan kewajipan setiap warganegara."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan sikap terbuka dalam kelas?",p:["Mendengar pandangan","Menolak setiap pandangan","Memotong cakap rakan","Mengelak perbincangan"],b:0,u:"Mendengar pandangan berbeza ialah keterbukaan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mempertahankan kedaulatan negara menggunakan perlembagaan?",p:["Mendidik rakyat tentang hak","Menyembunyikan perlembagaan","Mengubah perlembagaan tanpa rundingan","Mengabaikan undang-undang"],b:0,u:"Pendidikan menjadikan rakyat menjunjung perlembagaan."},
 {j:"pilih",t:"Mengapakah menjunjung keluhuran perlembagaan penting kepada perpaduan?",p:["Rakyat dilindungi undang-undang","Satu kaum diutamakan","Hak diabaikan","Persaingan kaum digalakkan"],b:0,u:"Undang-undang yang sama melindungi semua rakyat."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea berasaskan Perlembagaan Persekutuan Tanah Melayu 1957 untuk mempertahankan kedaulatan negara.",
  arahan:"Pilih sekurang-kurangnya DUA fakta tentang Perlembagaan 1957 (contoh: Rundingan London 1956, Suruhanjaya Reid, kontrak sosial, Raja Berperlembagaan, keluhuran perlembagaan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Perlembagaan 1957, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti permuafakatan, keterbukaan dan menjunjung keluhuran perlembagaan."}}
];

module.exports = {
  id:"s4b11", tingkatan:4, kod:"11.0 Perlembagaan Persekutuan Tanah Melayu 1957",
  tajuk:"Piagam Negara Merdeka",
  subtajuk:"Sejarah Ting. 4 · Bab 11 Perlembagaan Persekutuan Tanah Melayu 1957",
  spi:SPI["11.3"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang Perlembagaan Persekutuan Tanah Melayu 1957. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan Perlembagaan 1957 berserta contoh. Perlu lebih latihan membuat kronologi penggubalan sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi penggubalan Perlembagaan 1957. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang Perlembagaan 1957. Seterusnya latih menilainya.",
   5:"{n} dapat menilai Perlembagaan 1957 dalam mematuhi undang-undang. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang Perlembagaan 1957 dalam mempertahankan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Perlembagaan Persekutuan Tanah Melayu 1957. Cadangan: ulang hentian pertama sambil membina garis masa penggubalan perlembagaan dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Januari 1956", label:"Rundingan London"},
     {masa:"Mac 1956", label:"Suruhanjaya Reid ditubuhkan"},
     {masa:"Februari 1957", label:"Laporan Reid disiapkan"},
     {masa:"Ogos 1957", label:"Perlembagaan berkuat kuasa"}],
     kapsyen:"Rajah 1 · Penggubalan Perlembagaan Persekutuan Tanah Melayu 1957",
     alt:"Garis masa menegak: Januari 1956 Rundingan London; Mac 1956 Suruhanjaya Reid ditubuhkan; Februari 1957 Laporan Reid disiapkan; Ogos 1957 Perlembagaan berkuat kuasa"},
   p1:petikan(1, "Perlembagaan sebagai kompromi",
     ["Suruhanjaya Reid menerima memorandum daripada pelbagai pihak sebelum menyiapkan laporannya. Perlembagaan 1957 menjaga kepentingan setiap kaum: kerakyatan diperluas, manakala kedudukan Melayu, Islam dan bahasa Melayu dilindungi.",
      "Perlembagaan itu hasil permuafakatan dalam Parti Perikatan dan rundingan dengan raja-raja Melayu. Ia menjamin kestabilan negara yang merdeka."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
