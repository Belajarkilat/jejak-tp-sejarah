/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 7 Persekutuan Tanah Melayu 1948.
   Standard Kandungan 10.4, Standard Pembelajaran 10.4.1 hingga 10.4.4 serta K10.4.5 hingga K10.4.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Istana Persekutuan", sk:"10.4.1 Latar belakang penubuhan · 10.4.2 Faktor penubuhan", lampiran:null,
 kadNama:"Perjanjian 1948", kadEm:"\u{1F4DC}", kadFakta:"Perjanjian Persekutuan Tanah Melayu ditandatangani pada 21 Januari 1948 dan berkuat kuasa pada 1 Februari 1948.",
 bosKadNama:"Jawatankuasa Kerja", bosKadEm:"\u{1F465}", bosKadFakta:"Jawatankuasa Kerja dianggotai wakil British, raja-raja Melayu dan UMNO. Ia merangka cadangan Persekutuan Tanah Melayu.",
 soalan:[
 {j:"pilih",t:"Persekutuan Tanah Melayu menggantikan:",p:["Malayan Union","Negeri-negeri Selat","Negeri-negeri Melayu Bersekutu","Pentadbiran Jepun"],b:0,u:"Persekutuan Tanah Melayu 1948 menggantikan Malayan Union."},
 {j:"pilih",t:"Persekutuan Tanah Melayu 1948 berkuat kuasa pada:",p:["1 Februari 1948","16 September 1963","31 Ogos 1957","1 April 1946"],b:0,u:"Persekutuan berkuat kuasa pada 1 Februari 1948."},
 {j:"pilih",t:"Ketua pentadbir Persekutuan Tanah Melayu 1948 bergelar:",p:["Pesuruhjaya Tinggi","Gabenor Singapura","Residen Jeneral","Penasihat Am British"],b:0,u:"Pesuruhjaya Tinggi British mengetuai Persekutuan."},
 {j:"pilih",t:"Wilayah yang dikecualikan daripada Persekutuan Tanah Melayu 1948 ialah:",p:["Singapura","Pulau Pinang","Melaka","Perak"],b:0,u:"Singapura kekal berasingan."},
 {j:"banyak",t:"Pilih DUA pihak dalam Jawatankuasa Kerja.",p:["Raja-raja Melayu","UMNO","Parti Komunis Malaya","Tentera Jepun"],b:[0,1],u:"Raja-raja Melayu, UMNO dan British berunding dalam Jawatankuasa Kerja."},
 {j:"pilih",t:"Faktor utama penubuhan Persekutuan Tanah Melayu ialah:",p:["Bantahan Malayan Union","Kemenangan komunis di hutan","Penyerahan Jepun pada 1945","Keputusan kerajaan Siam"],b:0,u:"Bantahan hebat memaksa British menggantikan Malayan Union."},
 {j:"pilih",t:"Dalam Persekutuan 1948, kedaulatan raja Melayu:",p:["Dikembalikan","Dihapuskan","Diserahkan kepada Gabenor","Ditukar kepada presiden"],b:0,u:"Kedaulatan raja-raja Melayu dipulihkan."},
 {j:"pilih",t:"Persekutuan Tanah Melayu 1948 dibentuk selepas Malayan Union dimansuhkan pada tahun:",p:["1948","1946","1957","1963"],b:0,u:"Malayan Union dimansuhkan apabila Persekutuan berkuat kuasa pada 1948."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan istilah dan maksudnya yang betul.",p:["Pesuruhjaya Tinggi: ketua Persekutuan","Majlis Raja-raja: wakil raja Melayu","Jawatankuasa Kerja: perunding Persekutuan","Pesuruhjaya Tinggi: ketua Malayan Union","Singapura: negeri dalam Persekutuan"],b:[0,1,2],u:"Pesuruhjaya Tinggi mengetuai Persekutuan; Gabenor mengetuai Malayan Union; Singapura dikecualikan."}},

{n:2, tempat:"Bilik Kronologi Persekutuan", sk:"10.4.2 · 10.4.3 Faktor dan ciri Persekutuan Tanah Melayu 1948", lampiran:"gm1",
 kadNama:"PUTERA-AMCJA", kadEm:"\u{1F4C4}", kadFakta:"PUTERA-AMCJA menyediakan Perlembagaan Rakyat sebagai cadangan lain, tetapi British lebih memilih cadangan Jawatankuasa Kerja.",
 bosKadNama:"Hartal 1947", bosKadEm:"\u{1F6D1}", bosKadFakta:"Hartal 20 Oktober 1947 ialah mogok sehari oleh PUTERA-AMCJA yang menunjukkan bantahan terhadap cadangan British.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Jawatankuasa Kerja ditubuhkan","Hartal PUTERA-AMCJA","Perjanjian Persekutuan ditandatangani","Persekutuan berkuat kuasa"],b:0,u:"Jawatankuasa Kerja ditubuhkan pada Disember 1946, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Persekutuan Tanah Melayu berkuat kuasa?",p:["Februari 1948","Januari 1948","Oktober 1947","Disember 1946"],b:0,u:"Rajah 1 menunjukkan Persekutuan berkuat kuasa pada Februari 1948."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Jawatankuasa Kerja ditubuhkan","Hartal PUTERA-AMCJA","Perjanjian Persekutuan ditandatangani","Persekutuan berkuat kuasa"],b:[0,1,2,3],u:"Disember 1946, Oktober 1947, Januari 1948 dan Februari 1948."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara hartal dan penandatanganan perjanjian?",p:["3 bulan","2 bulan","10 bulan","14 bulan"],b:0,u:"Oktober 1947 hingga Januari 1948 ialah 3 bulan."},
 {j:"pilih",t:"Antara ciri Persekutuan 1948 ialah penubuhan:",p:["Majlis Perundangan","Majlis Parlimen Eropah","Jabatan Kerja Siam","Dewan Negara Rom"],b:0,u:"Majlis Perundangan Persekutuan dan Majlis Eksekutif ditubuhkan."},
 {j:"pilih",t:"Syarat kerakyatan dalam Persekutuan 1948 berbanding Malayan Union ialah:",p:["Lebih ketat","Lebih longgar","Sama sahaja","Dihapuskan"],b:0,u:"Syarat kerakyatan dijadikan lebih ketat."},
 {j:"pilih",t:"Pertubuhan yang membantah cadangan Jawatankuasa Kerja ialah:",p:["PUTERA-AMCJA","UMNO","Raja-raja Melayu","MCA"],b:0,u:"PUTERA-AMCJA menyediakan Perlembagaan Rakyat."},
 {j:"banyak",t:"Pilih DUA ciri Persekutuan Tanah Melayu 1948.",p:["Raja-raja Melayu berkuasa semula","Diketuai Pesuruhjaya Tinggi","Diketuai oleh Gabenor British","Singapura dimasukkan dalam Persekutuan"],b:[0,1],u:"Raja-raja berkuasa semula dan Pesuruhjaya Tinggi mengetuai Persekutuan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Jawatankuasa Kerja dan hartal?",p:["10 bulan","3 bulan","14 bulan","1 bulan"],b:0,u:"Disember 1946 hingga Oktober 1947 ialah 10 bulan."}},

{n:3, tempat:"Balai Pesuruhjaya", sk:"10.4.3 · 10.4.4 Mengklasifikasi maklumat tentang Persekutuan 1948", lampiran:null,
 kadNama:"Dua Majlis", kadEm:"\u{1F3DB}\u{FE0F}", kadFakta:"Pesuruhjaya Tinggi dibantu Majlis Eksekutif dan Majlis Perundangan Persekutuan, dan sultan duduk dalam Majlis Raja-raja.",
 bosKadNama:"Negeri Terlibat", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Persekutuan 1948 terdiri daripada sembilan negeri Melayu serta Pulau Pinang dan Melaka.",
 soalan:[
 {j:"pilih",t:"Majlis yang diwakili raja-raja Melayu dalam Persekutuan 1948 ialah:",p:["Majlis Raja-raja","Majlis Perundangan","Majlis Kerja","Majlis Perbandaran"],b:0,u:"Majlis Raja-raja mewakili sultan dan raja."},
 {j:"pilih",t:"Ciri Persekutuan 1948 yang melindungi kedudukan Melayu ialah:",p:["Kedudukan Melayu dilindungi","Kedudukan Melayu dihapuskan","Semua kaum dilayan serupa tanpa syarat","Kerakyatan terbuka luas"],b:0,u:"Kedudukan istimewa orang Melayu dilindungi."},
 {j:"pilih",t:"Pulau Pinang dan Melaka dalam Persekutuan 1948 ialah:",p:["Negeri di bawah Persekutuan","Negeri berasingan dari Persekutuan","Negeri tanpa Gabenor","Negeri milik Siam"],b:0,u:"Pulau Pinang dan Melaka menjadi sebahagian Persekutuan."},
 {j:"banyak",t:"Pilih DUA kelebihan Persekutuan 1948 kepada orang Melayu.",p:["Kedaulatan raja dipulihkan","Kerakyatan lebih ketat","Gabenor berkuasa mutlak","Sultan hanya urus agama"],b:[0,1],u:"Kedaulatan raja dipulihkan dan syarat kerakyatan lebih ketat."},
 {j:"pilih",t:"Majlis yang menggubal undang-undang dalam Persekutuan ialah:",p:["Majlis Perundangan","Majlis Raja-raja Melayu","Majlis Eksekutif Negeri","Majlis Perbandaran Bandar"],b:0,u:"Majlis Perundangan Persekutuan membuat undang-undang."},
 {j:"pilih",t:"Tindakan British berunding dengan raja Melayu sebelum Persekutuan menunjukkan:",p:["Menghormati kedaulatan raja","Tidak peduli kepada raja","Takut kepada Jepun","Mahu menamatkan perundingan"],b:0,u:"Rundingan menghormati kedudukan raja."},
 {j:"pilih",t:"Persekutuan 1948 berbeza daripada Malayan Union kerana:",p:["Menghormati kedaulatan","Memperkenalkan jus soli","Menjadikan Gabenor berkuasa","Mengisytiharkan kemerdekaan"],b:0,u:"Persekutuan memulihkan kedaulatan negeri Melayu."},
 {j:"pilih",t:"Persekutuan 1948 dikelaskan sebagai pentadbiran:",p:["Persekutuan negeri","Negara kesatuan","Republik","Kerajaan tentera"],b:0,u:"Ia ialah persekutuan negeri-negeri, bukan negara kesatuan."}],
 bos:{j:"pilih",t:"Antara berikut, ciri manakah milik Persekutuan 1948 dan BUKAN Malayan Union?",p:["Kedaulatan raja dikembalikan","Kerakyatan jus soli diteruskan","Diketuai oleh Gabenor","Singapura dimasukkan ke dalamnya"],b:0,u:"Persekutuan 1948 memulihkan kedaulatan raja-raja Melayu."}},

{n:4, tempat:"Arkib Persekutuan", sk:"10.4.3 · 10.4.4 Mencerakinkan maklumat tentang Persekutuan 1948", lampiran:"p1",
 kadNama:"Kompromi", kadEm:"\u{1F91D}", kadFakta:"Persekutuan 1948 ialah hasil kompromi antara British, raja Melayu dan UMNO. Pihak bukan Melayu kurang diwakili.",
 bosKadNama:"Kestabilan", bosKadEm:"\u{2696}\u{FE0F}", bosKadFakta:"Kestabilan politik bergantung kepada pentadbiran yang dipersetujui oleh pihak yang berkepentingan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Persekutuan 1948 lebih diterima orang Melayu?",p:["Kedaulatan raja dipulihkan","Kerakyatan jus soli diteruskan","Gabenor kekal berkuasa","Sultan hilang kuasa"],b:0,u:"Petikan menyatakan kedaulatan raja Melayu dipulihkan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Persekutuan 1948 dibantah oleh sesetengah pihak?",p:["Wakil bukan Melayu kurang","Kuasa sultan dihapuskan","Singapura dimasukkan","Gabenor dilantik"],b:0,u:"Pihak bukan Melayu merasakan mereka kurang diwakili."},
 {j:"pilih",t:"Berdasarkan Petikan 1, siapakah yang terlibat dalam merangka Persekutuan?",p:["British, raja dan UMNO","Jepun dan raja Siam","Komunis dan Belanda","Portugis dan raja Siam"],b:0,u:"British, raja-raja Melayu dan UMNO terlibat."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA kelemahan Persekutuan 1948.",p:["Wakil bukan Melayu kurang","PUTERA-AMCJA tidak dirunding","Kedaulatan raja dihapuskan","Singapura dimasukkan"],b:[0,1],u:"Wakil bukan Melayu kurang dan PUTERA-AMCJA tidak dirunding."},
 {j:"pilih",t:"Bandingkan cadangan Jawatankuasa Kerja dengan Perlembagaan Rakyat. Apakah perbezaannya?",p:["Jawatankuasa Kerja diterima","Kedua-duanya diterima British","Kedua-duanya ditolak Melayu","Perlembagaan Rakyat diterima"],b:0,u:"British memilih cadangan Jawatankuasa Kerja."},
 {j:"pilih",t:"Mengapakah perundingan dengan semua pihak penting dalam menggubal perlembagaan?",p:["Keputusan lebih adil","Keputusan lebih cepat","Pihak tertentu dipinggirkan","Perundingan tidak perlu"],b:0,u:"Rundingan menjadikan keputusan lebih adil dan diterima."},
 {j:"pilih",t:"Apakah kesan Persekutuan 1948 terhadap kestabilan negara?",p:["Bantahan Melayu berkurang","Menambah bantahan orang Melayu","Menamatkan semua bantahan","Menghapuskan British"],b:0,u:"Bantahan orang Melayu berkurang tetapi bantahan lain tetap ada."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penubuhan Persekutuan 1948?",p:["British akur, kawalan kekal","British menyerahkan kuasa sepenuhnya","British meninggalkan negara","British menamatkan perjanjian dengan raja"],b:0,u:"British menukar dasar tetapi mengekalkan kawalan melalui Pesuruhjaya Tinggi."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Hasil kompromi belum memuaskan","Hasil paksaan British sepenuhnya","Hasil keputusan komunis dahulu","Hasil rundingan dengan Jepun"],b:0,u:"Persekutuan ialah kompromi yang tidak memuaskan semua pihak."}},

{n:5, tempat:"Dewan Penilai Kestabilan", sk:"10.4.4 · K10.4.5 · K10.4.6 · K10.4.7 Membuat justifikasi", lampiran:null,
 kadNama:"Semangat Waja", kadEm:"\u{1F4AA}", kadFakta:"Pejuang awal menunjukkan semangat waja, iaitu tekad yang kuat dan tidak mudah patah, walaupun menghadapi tekanan besar.",
 bosKadNama:"Tanggungjawab Kita", bosKadEm:"\u{1F4CC}", bosKadFakta:"Kesedaran bahawa negara kita ialah tanggungjawab kita mendorong rakyat mempertahankan kedaulatan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah penubuhan Persekutuan 1948 wajar?",p:["Memulihkan kedaulatan raja","Menghapuskan raja","Menyerahkan negeri kepada asing","Memecahkan masyarakat"],b:0,u:"Persekutuan memulihkan kedaulatan raja dan menenangkan keadaan."},
 {j:"pilih",t:"Seorang murid berkata, \"Persekutuan 1948 sempurna dan tiada kelemahan.\" Penilaian manakah paling tepat?",p:["Kurang tepat, wakil kurang","Tepat, ia sempurna","Tepat, tiada bantahan","Kurang tepat, ia tidak wujud"],b:0,u:"Persekutuan mempunyai kelemahan, antaranya wakil bukan Melayu yang kurang."},
 {j:"pilih",t:"Antara berikut, sikap bersemangat waja ditunjukkan oleh:",p:["Terus berjuang","Menyerah apabila gagal","Mengelak masalah","Menyalahkan orang lain"],b:0,u:"Semangat waja bermaksud tidak mudah berputus asa."},
 {j:"banyak",t:"Pilih DUA kepentingan kesedaran tanggungjawab kita terhadap negara.",p:["Kedaulatan dipertahankan","Kepentingan bersama didahulukan","Kepentingan diri diutamakan","Tanggungjawab dielakkan"],b:[0,1],u:"Kesedaran mempertahankan kedaulatan dan mengutamakan kepentingan bersama."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Persekutuan 1948?",p:["Pulih tetapi kurang wakil","Gagal dalam setiap perkara","Berjaya dalam setiap perkara","Tiada sebarang kesan"],b:0,u:"Ia memulihkan kedaulatan raja tetapi kurang mewakili semua kaum."},
 {j:"pilih",t:"Mengapakah implikasi tindakan masa kini terhadap masa depan perlu dipertimbangkan?",p:["Keputusan tentukan masa depan","Keputusan tidak berkesan lagi","Masa depan tidak penting","Keputusan boleh diulang semula"],b:0,u:"Keputusan hari ini memberi kesan jangka panjang."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada Persekutuan 1948?",p:["Rundingan menyelesaikan perselisihan","Perselisihan diselesaikan dengan perang","Kuasa asing sentiasa betul","Perundingan tiada guna"],b:0,u:"Rundingan menghasilkan penyelesaian yang diterima ramai."},
 {j:"pilih",t:"Mengapakah kedaulatan negara wajar dipertahankan?",p:["Negara tentukan nasib sendiri","Negara mudah dikawal asing","Kemerdekaan tidak penting lagi","Kuasa asing lebih baik daripada kita"],b:0,u:"Kedaulatan membolehkan negara menentukan nasib sendiri."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Persekutuan Tanah Melayu 1948?",p:["Langkah menuju kestabilan","Penghalang kepada kemerdekaan","Alat penjajahan Jepun","Perjanjian yang tiada kesan"],b:0,u:"Persekutuan 1948 menjadi langkah menuju kestabilan dan kemerdekaan."}},

{n:6, tempat:"Studio Pentadbiran Berkesan", sk:"K10.4.5 hingga K10.4.8 Kedaulatan, kesedaran, semangat waja dan implikasi tindakan", lampiran:null,
 kadNama:"Perlembagaan Hari Ini", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Perlembagaan Persekutuan hari ini menjadi undang-undang tertinggi negara dan menjamin hak serta tanggungjawab warganegara.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar Persekutuan 1948 untuk memajukan pentadbiran hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu pentadbiran pelajar yang berkesan. Iktibar rundingan Persekutuan 1948 ialah:",p:["Mendengar pandangan semua pihak","Menolak cadangan pelajar","Merahsiakan keputusan","Ketua membuat keputusan sendiri"],b:0,u:"Rundingan dengan semua pihak menghasilkan keputusan yang adil."},
 {j:"pilih",t:"Idea manakah paling berasas untuk memupuk kesedaran tanggungjawab terhadap negara?",p:["Projek khidmat masyarakat","Menyingkirkan kelas sivik","Mengelak aktiviti sekolah","Melarang sukarelawan"],b:0,u:"Khidmat masyarakat melatih tanggungjawab."},
 {j:"banyak",t:"Pilih DUA cara menunjukkan semangat waja dalam belajar.",p:["Terus berusaha selepas gagal","Mencuba kaedah baharu","Berhenti selepas satu kegagalan","Menyalin kerja rakan"],b:[0,1],u:"Berusaha semula dan mencuba kaedah baharu."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perlembagaan lama tidak penting.\" Respons manakah paling rasional?",p:["Ia asas undang-undang","Betul, ia sudah lapuk","Betul, ia sekadar cerita","Hanya peguam perlu tahu"],b:0,u:"Perlembagaan menjadi asas undang-undang negara."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan kesedaran tanggungjawab kepada negara?",p:["Patuh undang-undang","Merosakkan harta awam","Mengabaikan kebersihan","Menyebarkan fitnah"],b:0,u:"Patuh undang-undang dan menjaga alam ialah tanggungjawab."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mengajar Persekutuan 1948 kepada rakan sebaya?",p:["Permainan peranan rundingan","Menghafal tarikh sahaja","Mengabaikan sejarah","Menyalin nota tanpa memahami"],b:0,u:"Permainan peranan membantu memahami proses rundingan."},
 {j:"pilih",t:"Mengapakah rundingan lebih baik daripada konfrontasi?",p:["Mengurangkan kerugian","Menambah kerugian","Menjatuhkan lawan","Menghentikan perbincangan"],b:0,u:"Rundingan mengurangkan kerugian dan menghasilkan persetujuan."},
 {j:"pilih",t:"Mengapakah pentadbiran yang berkesan memerlukan perwakilan semua kaum?",p:["Keputusan lebih adil","Keputusan lebih cepat","Satu kaum dipinggirkan","Perwakilan tidak perlu"],b:0,u:"Perwakilan semua kaum menjadikan keputusan lebih adil."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang penubuhan Persekutuan Tanah Melayu 1948 bagi mewujudkan sistem pentadbiran yang berkesan dalam memajukan negara.",
  arahan:"Pilih sekurang-kurangnya DUA iktibar daripada Persekutuan 1948 (contoh: rundingan dengan pelbagai pihak, kedaulatan raja dipulihkan, kelemahan perwakilan, kompromi). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Persekutuan 1948, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti semangat waja, kesedaran tanggungjawab dan rundingan."}}
];

module.exports = {
  id:"s4b7", tingkatan:4, kod:"7.0 Persekutuan Tanah Melayu 1948",
  tajuk:"Persekutuan Baharu",
  subtajuk:"Sejarah Ting. 4 · Bab 7 Persekutuan Tanah Melayu 1948",
  spi:SPI["10.4"],
  ulasan:{
   1:"{n} dapat menyatakan pengetahuan tentang Persekutuan Tanah Melayu 1948 secara ringkas. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan Persekutuan Tanah Melayu 1948 berserta contoh. Perlu lebih latihan mengklasifikasi maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh mengklasifikasi maklumat tentang Persekutuan Tanah Melayu 1948. Galakkan mencerakinkannya.",
   4:"{n} mampu mencerakinkan maklumat tentang Persekutuan Tanah Melayu 1948. Seterusnya latih membuat justifikasi.",
   5:"{n} dapat membuat justifikasi tentang penubuhan Persekutuan Tanah Melayu 1948 dalam menjamin kestabilan negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang penubuhan Persekutuan Tanah Melayu 1948 bagi mewujudkan sistem pentadbiran yang berkesan. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Persekutuan Tanah Melayu 1948. Cadangan: ulang hentian pertama sambil membina jadual perbandingan dengan Malayan Union bersama rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Disember 1946", label:"Jawatankuasa Kerja ditubuhkan"},
     {masa:"Oktober 1947", label:"Hartal PUTERA-AMCJA"},
     {masa:"Januari 1948", label:"Perjanjian Persekutuan ditandatangani"},
     {masa:"Februari 1948", label:"Persekutuan berkuat kuasa"}],
     kapsyen:"Rajah 1 · Penubuhan Persekutuan Tanah Melayu 1948",
     alt:"Garis masa menegak: Disember 1946 Jawatankuasa Kerja ditubuhkan; Oktober 1947 Hartal PUTERA-AMCJA; Januari 1948 Perjanjian Persekutuan ditandatangani; Februari 1948 Persekutuan berkuat kuasa"},
   p1:petikan(1, "Persekutuan 1948 sebagai kompromi",
     ["Persekutuan Tanah Melayu 1948 dirangka oleh Jawatankuasa Kerja yang terdiri daripada British, raja-raja Melayu dan UMNO. Kedaulatan raja-raja Melayu dipulihkan dan syarat kerakyatan diketatkan.",
      "Namun, wakil bukan Melayu kurang diwakili, dan cadangan PUTERA-AMCJA tidak diterima. Persekutuan ialah kompromi yang tidak memuaskan semua pihak."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
