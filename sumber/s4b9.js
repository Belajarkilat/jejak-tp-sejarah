/* Sumber kandungan — Sejarah KSSM Tingkatan 4, Bab 9 Usaha-usaha ke Arah Kemerdekaan.
   Standard Kandungan 11.1, Standard Pembelajaran 11.1.1 hingga 11.1.5 serta K11.1.6 hingga K11.1.9
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Gerbang Idea Merdeka", sk:"11.1.1 Latar belakang idea negara merdeka · 11.1.2 Jawatankuasa Hubungan Antara Kaum", lampiran:null,
 kadNama:"Asia Merdeka", kadEm:"\u{1F30F}", kadFakta:"Selepas Perang Dunia Kedua, negara seperti Indonesia (1945), Filipina (1946), India (1947) dan Burma (1948) memperoleh kemerdekaan. Ini menggalakkan tuntutan merdeka di Tanah Melayu.",
 bosKadNama:"CLC 1949", bosKadEm:"\u{1F91D}", bosKadFakta:"Jawatankuasa Hubungan Antara Kaum (CLC) ditubuhkan pada 1949 oleh Dato' Onn Jaafar untuk merundingkan perpaduan dan kerakyatan antara kaum.",
 soalan:[
 {j:"pilih",t:"Jawatankuasa Hubungan Antara Kaum (CLC) ditubuhkan pada tahun:",p:["1949","1946","1951","1957"],b:0,u:"CLC ditubuhkan pada tahun 1949."},
 {j:"pilih",t:"Pengasas Jawatankuasa Hubungan Antara Kaum ialah:",p:["Dato' Onn Jaafar","Tunku Abdul Rahman","Tun Razak","Tun Tan Cheng Lock"],b:0,u:"Dato' Onn Jaafar mengasaskan CLC."},
 {j:"pilih",t:"Negara India memperoleh kemerdekaan pada tahun:",p:["1947","1945","1948","1957"],b:0,u:"India merdeka pada 1947."},
 {j:"pilih",t:"Tujuan utama CLC ialah:",p:["Merundingkan perpaduan","Menyerang komunis","Mengisytiharkan kemerdekaan","Menubuhkan sekolah vernakular"],b:0,u:"CLC merundingkan perpaduan dan kerakyatan antara kaum."},
 {j:"banyak",t:"Pilih DUA negara Asia yang merdeka selepas Perang Dunia Kedua.",p:["India","Indonesia","Perancis","Britain"],b:[0,1],u:"India dan Indonesia merdeka. Perancis dan Britain ialah negara penjajah."},
 {j:"pilih",t:"Idea negara merdeka di Tanah Melayu muncul kerana:",p:["Kesedaran nasionalisme","Kemarahan terhadap raja","Dasar British yang memuaskan","Ancaman Jepun"],b:0,u:"Nasionalisme dan kejayaan negara lain membuat rakyat mahu merdeka."},
 {j:"pilih",t:"Pada 1949, parti yang mewakili orang Cina yang ditubuhkan ialah:",p:["MCA","MIC","UMNO","PAS"],b:0,u:"MCA ditubuhkan pada 1949."},
 {j:"pilih",t:"Parti yang mewakili orang India yang ditubuhkan pada 1946 ialah:",p:["MIC","MCA","UMNO","IMP"],b:0,u:"MIC ditubuhkan pada tahun 1946."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan parti dan kaum yang diwakili yang betul.",p:["UMNO: Melayu","MCA: Cina","MIC: India","MCA: India","MIC: Melayu"],b:[0,1,2],u:"UMNO mewakili Melayu, MCA mewakili Cina dan MIC mewakili India."}},

{n:2, tempat:"Bilik Kronologi Merdeka", sk:"11.1.2 · 11.1.3 · 11.1.5 Sistem Ahli dan parti politik", lampiran:"gm1",
 kadNama:"Sistem Ahli", kadEm:"\u{1F4CB}", kadFakta:"Sistem Ahli diperkenalkan pada 1951 supaya tokoh tempatan dilantik memegang portfolio dalam pentadbiran bagi melatih mereka mentadbir negara.",
 bosKadNama:"Parti Perikatan", bosKadEm:"\u{1F91D}", bosKadFakta:"UMNO dan MCA bekerjasama dalam pilihan raya perbandaran Kuala Lumpur 1952. Gabungan itu berkembang menjadi Parti Perikatan apabila MIC menyertainya pada 1954.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["UMNO ditubuhkan","MCA ditubuhkan","Sistem Ahli diperkenalkan","Penyata Razak"],b:0,u:"UMNO ditubuhkan pada 1946, paling awal dalam rajah."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Sistem Ahli diperkenalkan?",p:["1951","1949","1946","1956"],b:0,u:"Rajah 1 menunjukkan Sistem Ahli diperkenalkan pada 1951."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["UMNO ditubuhkan","MCA ditubuhkan","Sistem Ahli diperkenalkan","Penyata Razak"],b:[0,1,2,3],u:"1946, 1949, 1951 dan 1956."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan UMNO dan Penyata Razak?",p:["10 tahun","7 tahun","5 tahun","3 tahun"],b:0,u:"1956 tolak 1946 ialah 10 tahun."},
 {j:"pilih",t:"Tujuan Sistem Ahli ialah:",p:["Melatih tokoh tempatan","Menghapuskan raja","Menyerahkan negara kepada Jepun","Mengisytiharkan Darurat"],b:0,u:"Sistem Ahli melatih tokoh tempatan mentadbir."},
 {j:"pilih",t:"Gabungan pertama UMNO dan MCA berlaku dalam pilihan raya:",p:["Perbandaran KL 1952","Umum 1955","Kemerdekaan 1957","Negeri Selangor 1959"],b:0,u:"UMNO dan MCA bergabung pada pilihan raya perbandaran 1952."},
 {j:"pilih",t:"Parti yang ditubuhkan oleh Dato' Onn Jaafar selepas meninggalkan UMNO ialah:",p:["Parti Kemerdekaan Malaya","Parti MCA Cina","Parti MIC India","Parti Perikatan campuran"],b:0,u:"Dato' Onn menubuhkan Parti Kemerdekaan Malaya (IMP) pada 1951."},
 {j:"banyak",t:"Pilih DUA parti yang bergabung dalam Perikatan pada awalnya.",p:["UMNO","MCA","PAS","IMP"],b:[0,1],u:"UMNO dan MCA ialah dua parti pertama Perikatan."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa tahunkah antara penubuhan MCA dan Penyata Razak?",p:["7 tahun","10 tahun","5 tahun","2 tahun"],b:0,u:"1956 tolak 1949 ialah 7 tahun."}},

{n:3, tempat:"Dewan Pendidikan", sk:"11.1.4 · 11.1.5 Sistem pendidikan kebangsaan dan parti politik", lampiran:null,
 kadNama:"Penyata Razak", kadEm:"\u{1F4DA}", kadFakta:"Penyata Razak 1956 mencadangkan sistem pendidikan kebangsaan dengan bahasa Melayu sebagai bahasa pengantar utama dan kurikulum yang sama untuk semua sekolah.",
 bosKadNama:"Ordinan 1957", bosKadEm:"\u{1F3EB}", bosKadFakta:"Ordinan Pelajaran 1957 melaksanakan cadangan Penyata Razak dan menjadi asas Dasar Pelajaran Kebangsaan.",
 soalan:[
 {j:"pilih",t:"Penyata yang mencadangkan sistem pendidikan kebangsaan pada 1956 ialah:",p:["Penyata Razak","Penyata Barnes","Penyata Fenn-Wu","Penyata Reid"],b:0,u:"Penyata Razak 1956 mencadangkan pendidikan kebangsaan."},
 {j:"pilih",t:"Bahasa pengantar utama dalam Penyata Razak ialah bahasa:",p:["Melayu","Inggeris","Cina","Tamil"],b:0,u:"Bahasa Melayu dijadikan bahasa pengantar utama."},
 {j:"pilih",t:"Penyata Barnes 1951 mencadangkan sekolah yang:",p:["Menggabungkan semua kaum","Memisahkan semua kaum","Menutup sekolah Melayu","Menghapuskan bahasa Melayu"],b:0,u:"Penyata Barnes mencadangkan sekolah kebangsaan untuk semua kaum."},
 {j:"banyak",t:"Pilih DUA ciri pendidikan kebangsaan menurut Penyata Razak.",p:["Kurikulum yang sama","Bahasa Melayu sebagai bahasa pengantar utama","Sekolah vernakular dihapuskan serta-merta","Hanya sekolah Inggeris dibenarkan"],b:[0,1],u:"Kurikulum sama dan bahasa Melayu sebagai pengantar utama."},
 {j:"pilih",t:"Parti yang ditubuhkan pada 1951 untuk memperjuangkan Islam ialah:",p:["PAS","MCA","MIC","UMNO"],b:0,u:"PAS ditubuhkan pada 1951."},
 {j:"pilih",t:"Sebuah sekolah menggunakan kurikulum sama dengan sekolah lain. Ini selaras dengan:",p:["Penyata Razak","Persekutuan 1948","Rancangan Briggs","Malayan Union"],b:0,u:"Kurikulum sama ialah prinsip Penyata Razak."},
 {j:"pilih",t:"Pendidikan kebangsaan bertujuan:",p:["Memupuk perpaduan","Memisahkan kaum","Menambah cukai","Menutup sekolah desa"],b:0,u:"Pendidikan kebangsaan memupuk perpaduan."},
 {j:"pilih",t:"Ordinan Pelajaran 1957 melaksanakan cadangan:",p:["Penyata Razak","Penyata Barnes","Penyata Reid","Penyata Briggs"],b:0,u:"Ordinan Pelajaran 1957 melaksanakan Penyata Razak."}],
 bos:{j:"pilih",t:"Antara berikut, urutan manakah menggambarkan perkembangan pendidikan kebangsaan dengan betul?",p:["Penyata Barnes, Penyata Razak, Ordinan 1957","Ordinan 1957, Penyata Razak, Penyata Barnes","Penyata Razak, Penyata Barnes, Ordinan 1957","Penyata Barnes, Ordinan 1957, Penyata Razak"],b:0,u:"Penyata Barnes 1951, Penyata Razak 1956, kemudian Ordinan 1957."}},

{n:4, tempat:"Arkib Perpaduan", sk:"11.1.5 Mencerakinkan maklumat tentang usaha ke arah kemerdekaan", lampiran:"p1",
 kadNama:"Perpaduan Antara Kaum", kadEm:"\u{1F465}", kadFakta:"Kemerdekaan hanya dapat diperoleh dengan perpaduan kaum. Pemimpin pelbagai kaum menyedari bahawa British tidak akan menyerahkan kuasa kepada rakyat yang berpecah.",
 bosKadNama:"Berorganisasi", bosKadEm:"\u{1F3E2}", bosKadFakta:"Perjuangan yang teratur dan berorganisasi lebih berkesan daripada usaha seorang diri.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah British mahukan perpaduan kaum?",p:["Menyerahkan kuasa kepada rakyat bersatu","Mengekalkan penjajahan British sepenuhnya","Menutup parti politik tempatan","Menamatkan Darurat dengan segera"],b:0,u:"Petikan menyatakan British hanya menyerahkan kuasa kepada rakyat yang bersatu."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan gabungan UMNO dan MCA?",p:["Menang undi","Gagal dalam pilihan raya","Parti dibubarkan","Perpecahan bertambah"],b:0,u:"Gabungan itu menang pilihan raya perbandaran 1952."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah sumbangan pendidikan kebangsaan?",p:["Memupuk perpaduan","Memisahkan kaum","Menghapuskan sekolah","Menambah kos"],b:0,u:"Pendidikan kebangsaan memupuk perpaduan."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA usaha ke arah kemerdekaan.",p:["Penubuhan parti","Perpaduan antara kaum","Perang dengan British","Penutupan sekolah"],b:[0,1],u:"Parti dan perpaduan kaum ialah usaha ke arah merdeka."},
 {j:"pilih",t:"Bandingkan IMP dengan Parti Perikatan. Mengapakah Perikatan lebih berjaya?",p:["Mewakili pelbagai kaum","Mewakili satu kaum","Ditubuhkan oleh British","Dikuasai komunis"],b:0,u:"Perikatan mewakili Melayu, Cina dan India."},
 {j:"pilih",t:"Mengapakah berorganisasi penting dalam perjuangan kemerdekaan?",p:["Kekuatan terkumpul","Setiap orang bergerak sendiri","Pemimpin tidak diperlukan","Matlamat tidak perlu jelas"],b:0,u:"Organisasi mengumpulkan kekuatan secara teratur."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada penubuhan CLC?",p:["Pemimpin sedar perpaduan penting","Pemimpin menolak perpaduan","Pemimpin mahu perang","Pemimpin menyokong Malayan Union"],b:0,u:"CLC menunjukkan pemimpin sedar pentingnya perpaduan."},
 {j:"pilih",t:"Apakah kesan Sistem Ahli terhadap kesediaan memerintah sendiri?",p:["Tokoh tempatan berpengalaman mentadbir","Tokoh tempatan disingkirkan","Pentadbiran British berhenti","Raja memerintah sendirian"],b:0,u:"Sistem Ahli memberi pengalaman mentadbir kepada tokoh tempatan."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Kemerdekaan dicapai melalui perpaduan","Kemerdekaan dicapai oleh British sahaja","Kemerdekaan dicapai tanpa usaha","Kemerdekaan dicapai oleh Jepun"],b:0,u:"Perpaduan dan organisasi membawa kemerdekaan."}},

{n:5, tempat:"Dewan Penilai Kemerdekaan", sk:"11.1.5 · K11.1.6 · K11.1.7 · K11.1.8 Menjustifikasikan usaha kemerdekaan", lampiran:null,
 kadNama:"Permuafakatan", kadEm:"\u{1F54A}\u{FE0F}", kadFakta:"Permuafakatan antara pemimpin pelbagai kaum menjadi asas keharmonian dan kejayaan perjuangan kemerdekaan.",
 bosKadNama:"Pendidikan dan Negara", bosKadEm:"\u{1F4DA}", bosKadFakta:"Pendidikan membentuk rakyat yang bersatu, berilmu dan bersedia memajukan negara.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah usaha ke arah kemerdekaan wajar dihargai?",p:["Ia mempertahankan hak","Ia menghentikan pelajaran","Ia memecahkan kaum","Ia menambah cukai"],b:0,u:"Usaha itu mempertahankan hak dan maruah bangsa."},
 {j:"pilih",t:"Seorang murid berkata, \"Kemerdekaan datang tanpa usaha.\" Penilaian manakah paling tepat?",p:["Kurang tepat, ia hasil perpaduan","Tepat, British memberi percuma","Tepat, Jepun menyerahkannya","Kurang tepat, kemerdekaan tidak wujud"],b:0,u:"Kemerdekaan hasil perpaduan dan perjuangan pemimpin."},
 {j:"pilih",t:"Antara berikut, permuafakatan antara kaum ditunjukkan oleh:",p:["Gabungan parti","Perebutan jawatan","Pemulauan kaum lain","Persaingan sengit"],b:0,u:"Gabungan tiga parti menunjukkan permuafakatan."},
 {j:"banyak",t:"Pilih DUA kepentingan pendidikan untuk kesejahteraan negara.",p:["Melahirkan rakyat berilmu","Memupuk perpaduan","Memecahkan masyarakat","Melemahkan ekonomi"],b:[0,1],u:"Pendidikan melahirkan rakyat berilmu dan bersatu."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Sistem Ahli?",p:["Melatih tokoh tempatan","Merugikan semata-mata","Memberi kemerdekaan penuh","Tidak memberi kesan"],b:0,u:"Sistem Ahli melatih tokoh tempatan, tetapi British masih berkuasa."},
 {j:"pilih",t:"Mengapakah berorganisasi dalam perjuangan penting?",p:["Perjuangan lebih teratur","Perjuangan menjadi lebih sulit","Pemimpin tidak diperlukan","Perpaduan tidak diperlukan"],b:0,u:"Organisasi menjadikan perjuangan teratur dan berkesan."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada usaha ke arah merdeka?",p:["Perpaduan antara kaum menjadi kekuatan","Perpecahan membawa kejayaan","Kemerdekaan tidak memerlukan usaha","Pemimpin bekerja sendirian"],b:0,u:"Perpaduan antara kaum menjadi kekuatan."},
 {j:"pilih",t:"Mengapakah kedaulatan negara wajar dipertahankan?",p:["Negara menentukan nasib sendiri","Negara dikawal asing","Kemerdekaan dilupakan","Rakyat berpecah"],b:0,u:"Kedaulatan membolehkan negara menentukan nasib sendiri."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang usaha ke arah kemerdekaan?",p:["Hasil perpaduan, pendidikan","Hasil keputusan British semata-mata","Hasil perang saudara","Hasil bantuan komunis"],b:0,u:"Perpaduan, pendidikan dan organisasi membawa kemerdekaan."}},

{n:6, tempat:"Studio Perpaduan", sk:"K11.1.6 hingga K11.1.9 Kedaulatan, permuafakatan, pendidikan dan berorganisasi", lampiran:null,
 kadNama:"Satu Malaysia", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Hari ini perpaduan dipupuk melalui sekolah, kejiranan dan dasar negara. Semangat permuafakatan 1950-an masih menjadi teladan.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan iktibar perjuangan kemerdekaan untuk memperjuangkan kedaulatan hari ini.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu memupuk perpaduan antara kaum. Idea manakah paling berasas?",p:["Program kejiranan","Memisahkan kaum dalam kelas","Melarang pergaulan","Menggalakkan pertandingan antara kaum"],b:0,u:"Program bersama memupuk perpaduan."},
 {j:"pilih",t:"Kelab anda perlu menyelaraskan banyak ahli. Iktibar berorganisasi daripada parti Perikatan ialah:",p:["Bahagi tugas dan bermuafakat","Setiap orang bekerja sendiri","Ketua membuat semua kerja","Elakkan perbincangan"],b:0,u:"Bahagi tugas dan bermuafakat menjadikan kelab teratur."},
 {j:"banyak",t:"Pilih DUA cara menjaga kedaulatan negara hari ini.",p:["Memupuk perpaduan rakyat","Menguasai ilmu dan teknologi","Menyebarkan fitnah","Mengabaikan undang-undang"],b:[0,1],u:"Perpaduan dan ilmu menjaga kedaulatan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk menghargai pemimpin kemerdekaan?",p:["Pameran tentang jasa","Melupakan nama mereka","Menyalahkan mereka","Menjual maklumat palsu"],b:0,u:"Pameran memperkenalkan jasa pemimpin."},
 {j:"pilih",t:"Seorang rakan berkata, \"Perpaduan tidak perlu diusahakan.\" Respons manakah paling rasional?",p:["Perpaduan perlu dipupuk","Betul, ia datang dengan sendirinya","Betul, ia memang tidak penting","Pemimpin yang perlu berusaha"],b:0,u:"Perpaduan perlu dipupuk secara berterusan."},
 {j:"pilih",t:"Bagaimanakah murid menunjukkan semangat permuafakatan dalam kelas?",p:["Berbincang dan hormat","Memaksa pendapat sendiri","Mengelak perbincangan","Menyalahkan rakan"],b:0,u:"Berbincang dan menghormati pendapat ialah permuafakatan."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk menggalakkan pendidikan untuk semua?",p:["Biasiswa dan kelas tambahan","Menghapuskan peperiksaan","Menutup perpustakaan","Menghalang kemasukan murid"],b:0,u:"Biasiswa dan kelas tambahan membantu semua murid."},
 {j:"pilih",t:"Mengapakah memperjuangkan kedaulatan melibatkan seluruh rakyat?",p:["Kemerdekaan dinikmati bersama","Hanya pemimpin perlu peduli","Kedaulatan tidak penting","Rakyat tidak boleh membantu"],b:0,u:"Kemerdekaan dinikmati bersama, jadi dijaga bersama."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang usaha ke arah kemerdekaan dalam memperjuangkan kedaulatan negara pada masa kini.",
  arahan:"Pilih sekurang-kurangnya DUA usaha (contoh: CLC 1949, Sistem Ahli 1951, Parti Perikatan, Penyata Razak 1956). Terangkan iktibar, idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang usaha ke arah kemerdekaan, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti permuafakatan, pendidikan dan berorganisasi."}}
];

module.exports = {
  id:"s4b9", tingkatan:4, kod:"9.0 Usaha-usaha ke Arah Kemerdekaan",
  tajuk:"Jalan ke Merdeka",
  subtajuk:"Sejarah Ting. 4 · Bab 9 Usaha-usaha ke Arah Kemerdekaan",
  spi:SPI["11.1"],
  ulasan:{
   1:"{n} dapat menyatakan usaha-usaha ke arah kemerdekaan. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan usaha ke arah kemerdekaan berserta contoh. Perlu lebih latihan membina urutan peristiwa sebelum bergerak ke TP3.",
   3:"{n} boleh membina urutan peristiwa usaha ke arah kemerdekaan. Galakkan mencerakinkan maklumat.",
   4:"{n} mampu mencerakinkan maklumat tentang usaha ke arah kemerdekaan. Seterusnya latih menjustifikasikannya.",
   5:"{n} dapat menjustifikasikan usaha ke arah kemerdekaan dalam mempertahankan hak dan maruah bangsa. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea usaha ke arah kemerdekaan dalam memperjuangkan kedaulatan negara. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Usaha-usaha ke Arah Kemerdekaan. Cadangan: ulang hentian pertama sambil membina garis masa parti politik dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"1946", label:"UMNO ditubuhkan"},
     {masa:"1949", label:"MCA ditubuhkan"},
     {masa:"1951", label:"Sistem Ahli diperkenalkan"},
     {masa:"1956", label:"Penyata Razak"}],
     kapsyen:"Rajah 1 · Beberapa usaha ke arah kemerdekaan",
     alt:"Garis masa menegak: 1946 UMNO ditubuhkan; 1949 MCA ditubuhkan; 1951 Sistem Ahli diperkenalkan; 1956 Penyata Razak"},
   p1:petikan(1, "Perpaduan menuju merdeka",
     ["British mahu menyerahkan kuasa hanya kepada rakyat yang bersatu. Pemimpin pelbagai kaum menubuhkan CLC dan UMNO bergabung dengan MCA, lalu menang dalam pilihan raya perbandaran 1952.",
      "Sistem Ahli melatih tokoh tempatan mentadbir, dan pendidikan kebangsaan memupuk perpaduan antara murid. Perpaduan dan organisasi membawa Tanah Melayu ke arah merdeka."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
