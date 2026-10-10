/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 4 Sistem Persekutuan.
   Standard Kandungan 12.4, Standard Pembelajaran 12.4.1 hingga 12.4.4 serta K12.4.5 hingga K12.4.8
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Pejabat Persekutuan", sk:"12.4.1 Latar belakang Sistem Persekutuan · 12.4.2 Bidang kuasa", lampiran:null,
 kadNama:"Persekutuan", kadEm:"\u{1F5FA}\u{FE0F}", kadFakta:"Sistem persekutuan membahagikan kuasa antara Kerajaan Persekutuan di peringkat pusat dengan Kerajaan Negeri di peringkat negeri.",
 bosKadNama:"Tiga Senarai", bosKadEm:"\u{1F4CB}", bosKadFakta:"Jadual Kesembilan Perlembagaan mengandungi Senarai Persekutuan, Senarai Negeri dan Senarai Bersama.",
 soalan:[
 {j:"pilih",t:"Malaysia mengamalkan sistem:",p:["Persekutuan","Republik kesatuan","Kerajaan tunggal","Pemerintahan mutlak"],b:0,u:"Malaysia ialah sebuah persekutuan."},
 {j:"pilih",t:"Pertahanan negara dalam bidang kuasa:",p:["Kerajaan Persekutuan","Kerajaan Negeri","Majlis perbandaran","Penghulu mukim"],b:0,u:"Pertahanan di bawah Kerajaan Persekutuan."},
 {j:"pilih",t:"Hal ehwal luar negeri dalam bidang kuasa:",p:["Kerajaan Persekutuan","Kerajaan Negeri","Majlis daerah","Pejabat tanah"],b:0,u:"Hal ehwal luar di bawah Persekutuan."},
 {j:"pilih",t:"Antara berikut, yang manakah bidang kuasa Kerajaan Negeri?",p:["Tanah","Pertahanan","Hal ehwal luar","Mata wang"],b:0,u:"Tanah ialah bidang kuasa negeri."},
 {j:"banyak",t:"Pilih DUA perkara dalam Senarai Persekutuan.",p:["Pertahanan","Kewangan negara","Hal ehwal tanah","Adat Melayu negeri"],b:[0,1],u:"Pertahanan dan kewangan dalam Senarai Persekutuan."},
 {j:"pilih",t:"Agama Islam dan adat Melayu dalam bidang kuasa:",p:["Kerajaan Negeri","Kerajaan Persekutuan","Majlis PBB","Mahkamah Rendah"],b:0,u:"Agama Islam dan adat di bawah negeri."},
 {j:"pilih",t:"Perlembagaan menyenaraikan bidang kuasa dalam:",p:["Jadual Kesembilan","Jadual Pertama","Jadual Ketiga","Jadual Kelima"],b:0,u:"Jadual Kesembilan menyenaraikan bidang kuasa."},
 {j:"pilih",t:"Persekutuan Tanah Melayu 1948 ialah permulaan kepada sistem:",p:["Persekutuan","Kerajaan tunggal","Kesatuan unitari","Pemerintahan Jepun"],b:0,u:"Persekutuan 1948 memulakan sistem persekutuan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan bidang kuasa dan pemegangnya yang betul.",p:["Pertahanan: Kerajaan Persekutuan","Tanah: Kerajaan Negeri","Hal ehwal luar: Kerajaan Persekutuan","Tanah: Kerajaan Persekutuan","Adat Melayu: Kerajaan Persekutuan"],b:[0,1,2],u:"Pertahanan dan hal ehwal luar milik Persekutuan; tanah milik Negeri."}},

{n:2, tempat:"Bilik Kronologi Persekutuan", sk:"12.4.2 · 12.4.3 Bidang kuasa dan kerjasama", lampiran:"gm1",
 kadNama:"Wilayah Persekutuan", kadEm:"\u{1F3D9}\u{FE0F}", kadFakta:"Kuala Lumpur menjadi Wilayah Persekutuan pada 1 Februari 1974, diikuti Labuan pada 1984 dan Putrajaya pada 2001.",
 bosKadNama:"Majlis Kewangan Negara", bosKadEm:"\u{1F4B0}", bosKadFakta:"Majlis Kewangan Negara membincangkan hal kewangan antara Kerajaan Persekutuan dengan negeri.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Persekutuan Tanah Melayu dibentuk","Tanah Melayu merdeka","Pembentukan Malaysia","Kuala Lumpur menjadi Wilayah Persekutuan"],b:0,u:"Persekutuan Tanah Melayu 1948 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Kuala Lumpur menjadi Wilayah Persekutuan?",p:["1974","1963","1957","1948"],b:0,u:"Rajah 1 menunjukkan Wilayah Persekutuan pada 1974."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Persekutuan Tanah Melayu dibentuk","Tanah Melayu merdeka","Pembentukan Malaysia","Kuala Lumpur menjadi Wilayah Persekutuan"],b:[0,1,2,3],u:"1948, 1957, 1963 dan 1974."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara kemerdekaan dan Wilayah Persekutuan Kuala Lumpur?",p:["17 tahun","11 tahun","26 tahun","6 tahun"],b:0,u:"1974 tolak 1957 ialah 17 tahun."},
 {j:"pilih",t:"Majlis yang membincangkan tanah antara Persekutuan dan negeri ialah:",p:["Majlis Tanah Negara","Majlis Sukan Negara","Majlis Perbandaran","Majlis Bahasa"],b:0,u:"Majlis Tanah Negara."},
 {j:"pilih",t:"Majlis yang membincangkan kewangan antara Persekutuan dan negeri ialah:",p:["Majlis Kewangan Negara","Majlis Raja-Raja","Majlis Tanah Negara","Majlis Agama"],b:0,u:"Majlis Kewangan Negara."},
 {j:"pilih",t:"Wilayah Persekutuan ditadbir terus oleh:",p:["Kerajaan Persekutuan","Kerajaan Negeri Selangor","Majlis Raja-Raja","Pejabat Daerah"],b:0,u:"Wilayah Persekutuan ditadbir Persekutuan."},
 {j:"banyak",t:"Pilih DUA Wilayah Persekutuan.",p:["Kuala Lumpur","Putrajaya","Ipoh","Johor Bahru"],b:[0,1],u:"Kuala Lumpur dan Putrajaya ialah Wilayah Persekutuan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara Persekutuan Tanah Melayu 1948 dan kemerdekaan?",p:["9 tahun","15 tahun","26 tahun","6 tahun"],b:0,u:"1957 tolak 1948 ialah 9 tahun."}},

{n:3, tempat:"Dewan Kerjasama", sk:"12.4.3 · 12.4.4 Mengkategorikan maklumat Sistem Persekutuan", lampiran:null,
 kadNama:"Kerjasama Pusat-Negeri", kadEm:"\u{1F91D}", kadFakta:"Kerajaan Persekutuan dan negeri bekerjasama melalui majlis seperti Majlis Tanah Negara dan Majlis Kebangsaan bagi Kerajaan Tempatan.",
 bosKadNama:"Kewangan", bosKadEm:"\u{1F4B5}", bosKadFakta:"Kerajaan Persekutuan memberi geran dan bantuan kewangan kepada negeri bagi membiayai pembangunan.",
 soalan:[
 {j:"pilih",t:"Membina lapangan terbang antarabangsa dikategorikan sebagai urusan:",p:["Persekutuan","Negeri","Perbandaran sahaja","Kampung"],b:0,u:"Lapangan terbang antarabangsa ialah urusan Persekutuan."},
 {j:"pilih",t:"Memberi hak milik tanah kepada rakyat dikategorikan sebagai urusan:",p:["Negeri","Persekutuan","Antarabangsa","Pertahanan"],b:0,u:"Pemberian tanah ialah urusan negeri."},
 {j:"pilih",t:"Pendidikan dikategorikan sebagai urusan dalam Senarai:",p:["Bersama","Negeri semata-mata","Persekutuan semata-mata","Tiada senarai"],b:0,u:"Pendidikan dalam Senarai Bersama (pelbagai aspek)."},
 {j:"banyak",t:"Pilih DUA urusan Kerajaan Negeri.",p:["Pentadbiran tanah","Hal ehwal agama Islam","Pertahanan negara","Hal ehwal luar"],b:[0,1],u:"Tanah dan agama Islam ialah urusan negeri."},
 {j:"pilih",t:"Pemberian geran daripada Persekutuan kepada negeri dikategorikan sebagai:",p:["Kerjasama kewangan","Konflik wilayah","Penjajahan","Peperangan"],b:0,u:"Geran ialah kerjasama kewangan."},
 {j:"pilih",t:"Mesyuarat Menteri Besar dengan Perdana Menteri ialah bentuk:",p:["Kerjasama pentadbiran","Pergaduhan politik","Penjajahan","Pengasingan negeri"],b:0,u:"Mesyuarat ialah kerjasama pentadbiran."},
 {j:"pilih",t:"Kelulusan pelan pembangunan bandar melibatkan kerjasama:",p:["Persekutuan dan negeri","Negeri dan Jepun","Persekutuan dan Siam","Negeri dan Belanda"],b:0,u:"Pembangunan melibatkan Persekutuan dan negeri."},
 {j:"pilih",t:"Kerajaan tempatan seperti majlis perbandaran dikategorikan di bawah:",p:["Negeri","Pertahanan","Hal ehwal luar","Mata wang"],b:0,u:"Kerajaan tempatan di bawah negeri."}],
 bos:{j:"pilih",t:"Antara berikut, yang manakah ialah urusan Persekutuan dan BUKAN negeri?",p:["Pertahanan","Tanah","Adat Melayu","Kerajaan tempatan"],b:0,u:"Pertahanan ialah urusan Persekutuan."}},

{n:4, tempat:"Arkib Persekutuan", sk:"12.4.4 Menganalisis maklumat berkaitan Sistem Persekutuan", lampiran:"p1",
 kadNama:"Faktor Pengukuh", kadEm:"\u{1F517}", kadFakta:"Sistem Persekutuan diperkukuh oleh perlembagaan, kerjasama parti yang memerintah, majlis perundingan dan peruntukan kewangan.",
 bosKadNama:"Musyawarah", bosKadEm:"\u{1F5E3}\u{FE0F}", bosKadFakta:"Bermusyawarah ialah berunding untuk mencapai keputusan bersama yang adil.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah kuasa dibahagi antara Persekutuan dan negeri?",p:["Setiap peringkat urus tugas","Satu pihak menguasai segalanya","Negeri dihapuskan","Raja dihapuskan"],b:0,u:"Petikan menyatakan pembahagian memastikan setiap peringkat menguruskan perkara yang sesuai."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah fungsi majlis seperti Majlis Tanah Negara?",p:["Menyelaras dasar","Mengambil alih negeri","Menghapuskan perlembagaan","Menamatkan pilihan raya"],b:0,u:"Majlis menyelaras dasar antara pusat dan negeri."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan sistem persekutuan terhadap pentadbiran?",p:["Lebih sistematik","Lebih kucar-kacir","Lebih dikuasai asing","Lebih terhad"],b:0,u:"Pentadbiran menjadi lebih sistematik."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA faktor yang mengukuhkan Sistem Persekutuan.",p:["Perlembagaan yang jelas","Kerjasama pusat dan negeri","Perebutan kuasa antara negeri","Pemisahan negeri daripada pusat"],b:[0,1],u:"Perlembagaan dan kerjasama mengukuhkan sistem."},
 {j:"pilih",t:"Bandingkan sistem persekutuan dengan kesatuan. Apakah perbezaannya?",p:["Persekutuan berkongsi kuasa","Kesatuan berkongsi kuasa dengan negeri","Kedua-duanya sama","Kedua-duanya tiada kerajaan"],b:0,u:"Persekutuan berkongsi kuasa dengan negeri."},
 {j:"pilih",t:"Mengapakah bermusyawarah penting dalam membuat keputusan?",p:["Keputusan lebih adil","Keputusan lebih cepat","Satu pihak menang","Perbincangan dielakkan"],b:0,u:"Musyawarah menghasilkan keputusan yang adil."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada peruntukan kewangan Persekutuan kepada negeri?",p:["Membantu negeri membangun","Melemahkan negeri","Menghapuskan negeri","Menambah hutang asing"],b:0,u:"Peruntukan membantu negeri membangun."},
 {j:"pilih",t:"Apakah kesan perselisihan antara pusat dan negeri jika tidak diselesaikan?",p:["Pembangunan terhalang","Pembangunan dipercepat","Kerjasama bertambah","Rakyat bersatu"],b:0,u:"Perselisihan menghalang pembangunan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Berjaya melalui kerjasama","Sistem Persekutuan gagal","Sistem Persekutuan menghapuskan negeri","Sistem Persekutuan ditentukan asing"],b:0,u:"Sistem Persekutuan berjaya melalui kerjasama dan perlembagaan."}},

{n:5, tempat:"Dewan Penilai Pentadbiran", sk:"12.4.4 · K12.4.5 · K12.4.6 · K12.4.7 · K12.4.8 Menilai kepentingan Sistem Persekutuan", lampiran:null,
 kadNama:"Pentadbiran Sistematik", kadEm:"\u{1F4CB}", kadFakta:"Pentadbiran yang sistematik memastikan perkhidmatan sampai kepada rakyat di seluruh negara dengan cekap.",
 bosKadNama:"Kerjasama", bosKadEm:"\u{1F91D}", bosKadFakta:"Kerjasama antara Kerajaan Persekutuan dengan negeri mempercepat pembangunan.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Sistem Persekutuan sesuai untuk Malaysia?",p:["Menampung kepelbagaian negeri","Menyatukan semua dalam satu pentadbir","Menghapuskan sultan","Menyekat pembangunan"],b:0,u:"Ia menampung kepelbagaian negeri."},
 {j:"pilih",t:"Seorang murid berkata, \"Negeri tiada kuasa langsung.\" Penilaian manakah paling tepat?",p:["Kurang tepat, negeri berkuasa","Tepat, negeri tiada kuasa","Tepat, semua kuasa milik asing","Kurang tepat, negeri tiada kerajaan"],b:0,u:"Negeri mempunyai kuasa dalam Senarai Negeri."},
 {j:"pilih",t:"Antara berikut, sikap kerjasama pusat dan negeri ditunjukkan oleh:",p:["Berunding dalam majlis","Memutuskan hubungan","Menolak rundingan","Bersaing secara tidak sihat"],b:0,u:"Berunding dalam majlis bersama."},
 {j:"banyak",t:"Pilih DUA kepentingan pentadbiran yang sistematik.",p:["Perkhidmatan lebih cekap","Sumber diurus teratur","Rakyat dipinggirkan","Rasuah berleluasa"],b:[0,1],u:"Perkhidmatan cekap dan sumber teratur."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Sistem Persekutuan?",p:["Mengimbangi kuasa","Sempurna tanpa cabaran","Gagal sepenuhnya","Tidak diperlukan"],b:0,u:"Ia mengimbangi kuasa tetapi memerlukan kerjasama."},
 {j:"pilih",t:"Mengapakah rakyat perlu memahami tanggungjawab pemimpin dan rakyat?",p:["Pembangunan bersama","Pembangunan terhenti","Pemimpin bertindak sendirian","Rakyat tidak terlibat"],b:0,u:"Pemahaman membantu pembangunan bersama."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada Sistem Persekutuan?",p:["Pembahagian kuasa seimbang","Satu pihak perlu berkuasa penuh","Negeri perlu memisahkan diri","Perlembagaan boleh diabaikan"],b:0,u:"Pembahagian kuasa perlu seimbang."},
 {j:"pilih",t:"Mengapakah sikap bermusyawarah baik untuk pentadbiran?",p:["Selesaikan perselisihan","Menambah perselisihan","Menghentikan pentadbiran","Menolak pandangan lain"],b:0,u:"Musyawarah menyelesaikan perselisihan dengan aman."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang kepentingan Sistem Persekutuan?",p:["Pembahagian kuasa","Menumpukan semua kuasa di pusat","Menghapuskan kuasa negeri","Menghalang kerjasama"],b:0,u:"Ia memantapkan pentadbiran melalui pembahagian kuasa."}},

{n:6, tempat:"Studio Bangsa dan Negara", sk:"K12.4.5 hingga K12.4.8 Musyawarah, pentadbiran sistematik, kerjasama dan tanggungjawab", lampiran:null,
 kadNama:"Kerjasama Hari Ini", kadEm:"\u{1F91D}", kadFakta:"Hari ini kerjasama pusat dan negeri dapat dilihat dalam program pembangunan luar bandar dan pembinaan prasarana.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan prinsip persekutuan untuk pembinaan bangsa dan negara.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu majlis kelas dan majlis sekolah bekerjasama. Iktibar Sistem Persekutuan ialah:",p:["Bahagi tugas","Satu pihak buat semua","Elak berunding","Pisahkan setiap urusan"],b:0,u:"Bahagi tugas dan selaras dasar."},
 {j:"pilih",t:"Idea manakah paling berasas untuk mengajar Sistem Persekutuan kepada murid?",p:["Permainan peranan kerajaan","Menghafal senarai tanpa faham","Mengabaikan topik","Menyalin nota semata-mata"],b:0,u:"Permainan peranan menjelaskan kerjasama."},
 {j:"banyak",t:"Pilih DUA cara membina bangsa melalui kerjasama.",p:["Projek komuniti pelbagai kaum","Program pertukaran antara negeri","Pengasingan mengikut negeri","Persaingan tidak sihat"],b:[0,1],u:"Projek komuniti dan pertukaran antara negeri."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pusat dan negeri tidak perlu bekerjasama.\" Respons manakah paling rasional?",p:["Kerjasama mempercepat pembangunan","Betul, mereka berasingan","Betul, kerjasama melambatkan","Hanya pusat perlu bekerja"],b:0,u:"Kerjasama mempercepat pembangunan."},
 {j:"pilih",t:"Bagaimanakah murid mengamalkan musyawarah dalam kelas?",p:["Berbincang dahulu","Ketua memutuskan sendiri","Mengundi tanpa berbincang","Mengelak keputusan"],b:0,u:"Berbincang sebelum membuat keputusan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menyatukan bangsa Malaysia pelbagai negeri?",p:["Pertukaran budaya","Menutup sempadan negeri","Menghalang pergaulan","Mengasingkan kelas"],b:0,u:"Pertukaran budaya dan lawatan menyatukan."},
 {j:"pilih",t:"Mengapakah memahami bidang kuasa membantu rakyat?",p:["Tahu ke mana mengadu masalah","Tidak tahu mengadu","Mengelak aduan","Menyalahkan semua pihak"],b:0,u:"Pemahaman membantu rakyat mengadu dengan betul."},
 {j:"pilih",t:"Mengapakah tanggungjawab bersama rakyat dan pemimpin penting dalam pembangunan?",p:["Pembangunan berkesan","Pembangunan lebih lambat","Pemimpin bekerja sendirian","Rakyat menunggu sahaja"],b:0,u:"Tanggungjawab bersama menjadikan pembangunan berkesan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang Sistem Persekutuan dalam pembinaan bangsa dan negara.",
  arahan:"Pilih sekurang-kurangnya DUA fakta (contoh: Jadual Kesembilan, Senarai Persekutuan dan Negeri, Majlis Tanah Negara, Wilayah Persekutuan, kerjasama kewangan). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Sistem Persekutuan, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti bermusyawarah, kerjasama dan tanggungjawab bersama."}}
];

module.exports = {
  id:"s5b4", tingkatan:5, kod:"4.0 Sistem Persekutuan",
  tajuk:"Pusat dan Negeri",
  subtajuk:"Sejarah Ting. 5 · Bab 4 Sistem Persekutuan",
  spi:SPI["12.4"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang Sistem Persekutuan. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan Sistem Persekutuan berserta contoh. Perlu lebih latihan mengkategorikan maklumat sebelum bergerak ke TP3.",
   3:"{n} boleh mengkategorikan maklumat tentang Sistem Persekutuan. Galakkan menganalisis maklumat.",
   4:"{n} mampu menganalisis maklumat tentang Sistem Persekutuan. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan Sistem Persekutuan dalam memantapkan sistem pentadbiran negara. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang Sistem Persekutuan dalam pembinaan bangsa dan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Sistem Persekutuan. Cadangan: ulang hentian pertama sambil membina jadual bidang kuasa Persekutuan dan Negeri dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1948", label:"Persekutuan Tanah Melayu dibentuk"},
     {masa:"1957", label:"Tanah Melayu merdeka"},
     {masa:"1963", label:"Pembentukan Malaysia"},
     {masa:"1974", label:"Kuala Lumpur menjadi Wilayah Persekutuan"}],
     kapsyen:"Rajah 1 · Perkembangan Sistem Persekutuan",
     alt:"Garis masa menegak: 1948 Persekutuan Tanah Melayu dibentuk; 1957 Tanah Melayu merdeka; 1963 Pembentukan Malaysia; 1974 Kuala Lumpur menjadi Wilayah Persekutuan"},
   p1:petikan(1, "Pusat dan negeri berkongsi kuasa",
     ["Dalam sistem persekutuan, kuasa dibahagi antara Kerajaan Persekutuan dan Kerajaan Negeri supaya setiap peringkat menguruskan perkara yang sesuai. Pertahanan dan hal ehwal luar di bawah Persekutuan, manakala tanah dan agama Islam di bawah negeri.",
      "Majlis seperti Majlis Tanah Negara dan Majlis Kewangan Negara menyelaras dasar. Perlembagaan yang jelas dan kerjasama pusat dan negeri menjadikan pentadbiran lebih sistematik."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
