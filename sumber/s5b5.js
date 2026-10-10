/* Sumber kandungan — Sejarah KSSM Tingkatan 5, Bab 5 Gagasan Pembentukan Malaysia.
   Standard Kandungan 13.1, Standard Pembelajaran 13.1.1 hingga 13.1.6 serta K13.1.7 hingga K13.1.10
   (DSKP KSSM Sejarah Tingkatan 4 dan 5, dskp/sejarah-t4-t5.pdf). Standard Prestasi disalin kata demi kata. */
const { petikan, SPI } = require("./_k");

const ARAS = [

{n:1, tempat:"Dewan Gagasan Malaysia", sk:"13.1.1 Konsep gagasan Malaysia · 13.1.2 Perkembangan idea", lampiran:null,
 kadNama:"Gagasan Tunku", kadEm:"\u{1F4A1}", kadFakta:"Pada 27 Mei 1961, Tunku Abdul Rahman mencadangkan penggabungan Tanah Melayu, Singapura, Sabah, Sarawak dan Brunei dalam satu persekutuan di Singapura.",
 bosKadNama:"Empat Wilayah", bosKadEm:"\u{1F5FA}\u{FE0F}", bosKadFakta:"Malaysia dibentuk daripada Persekutuan Tanah Melayu, Singapura, Sabah dan Sarawak. Brunei tidak menyertainya.",
 soalan:[
 {j:"pilih",t:"Gagasan Pembentukan Malaysia dicadangkan oleh:",p:["Tunku Abdul Rahman","Dato' Onn Jaafar","Tun Razak","Tun Dr Ismail"],b:0,u:"Tunku Abdul Rahman mencadangkannya."},
 {j:"pilih",t:"Cadangan itu diumumkan pada tahun:",p:["1961","1957","1963","1948"],b:0,u:"Cadangan diumumkan pada 27 Mei 1961."},
 {j:"pilih",t:"Cadangan itu dibuat di:",p:["Singapura","Kuala Lumpur","London","Jakarta"],b:0,u:"Tunku membuat cadangan di Singapura."},
 {j:"pilih",t:"Malaysia dibentuk pada:",p:["16 September 1963","31 Ogos 1957","9 Ogos 1965","1 Februari 1948"],b:0,u:"Malaysia dibentuk pada 16 September 1963."},
 {j:"banyak",t:"Pilih DUA wilayah yang menyertai Malaysia bersama Tanah Melayu pada 1963.",p:["Sabah","Sarawak","Brunei","Thailand"],b:[0,1],u:"Sabah dan Sarawak menyertai. Brunei tidak menyertai."},
 {j:"pilih",t:"Wilayah yang tidak menyertai Malaysia walaupun dirundingkan ialah:",p:["Brunei","Sabah","Sarawak","Singapura"],b:0,u:"Brunei tidak menyertai Malaysia."},
 {j:"pilih",t:"Perdana Menteri Persekutuan Tanah Melayu ketika itu ialah:",p:["Tunku Abdul Rahman","Tun Razak","Tun Hussein Onn","Tun Dr Mahathir"],b:0,u:"Tunku Abdul Rahman ialah Perdana Menteri."},
 {j:"pilih",t:"Konsep gagasan Malaysia ialah:",p:["Penggabungan wilayah","Pemisahan negeri","Pembentukan republik","Pemerintahan penjajah"],b:0,u:"Gagasan menggabungkan wilayah dalam satu persekutuan."}],
 bos:{j:"banyak",t:"Pilih SEMUA padanan wilayah dan keadaannya pada 1963 yang betul.",p:["Singapura: menyertai Malaysia","Sabah: menyertai Malaysia","Sarawak: menyertai Malaysia","Brunei: menyertai Malaysia","Thailand: menyertai Malaysia"],b:[0,1,2],u:"Singapura, Sabah dan Sarawak menyertai. Brunei tidak menyertai."}},

{n:2, tempat:"Bilik Kronologi Gagasan", sk:"13.1.2 · 13.1.3 · 13.1.4 Langkah dan reaksi", lampiran:"gm1",
 kadNama:"Suruhanjaya Cobbold", kadEm:"\u{1F4D1}", kadFakta:"Suruhanjaya Cobbold, diketuai Lord Cobbold, meninjau pendapat penduduk Sabah dan Sarawak pada 1962. Kebanyakan menyokong dengan syarat.",
 bosKadNama:"Perjanjian Malaysia", bosKadEm:"\u{270D}\u{FE0F}", bosKadFakta:"Perjanjian Malaysia ditandatangani di London pada 9 Julai 1963 oleh wakil Persekutuan Tanah Melayu, Britain, Sabah, Sarawak dan Singapura.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Rajah 1, peristiwa manakah paling awal?",p:["Cadangan Tunku","Suruhanjaya Cobbold","Perjanjian Malaysia ditandatangani","Pengisytiharan Malaysia"],b:0,u:"Cadangan Tunku pada Mei 1961 ialah peristiwa paling awal."},
 {j:"pilih",t:"Berdasarkan Rajah 1, bilakah Perjanjian Malaysia ditandatangani?",p:["Julai 1963","Mei 1961","1962","September 1963"],b:0,u:"Rajah 1 menunjukkan Julai 1963."},
 {j:"susun",t:"Berdasarkan Rajah 1, susun peristiwa berikut mengikut kronologi.",p:["Cadangan Tunku","Suruhanjaya Cobbold","Perjanjian Malaysia ditandatangani","Pengisytiharan Malaysia"],b:[0,1,2,3],u:"Mei 1961, 1962, Julai 1963 dan September 1963."},
 {j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara Perjanjian Malaysia dan Pengisytiharan Malaysia?",p:["2 bulan","14 bulan","26 bulan","12 bulan"],b:0,u:"Julai ke September 1963 ialah 2 bulan."},
 {j:"pilih",t:"Negara yang membantah pembentukan Malaysia dan melancarkan konfrontasi ialah:",p:["Indonesia","Thailand","Jepun","India"],b:0,u:"Indonesia di bawah Sukarno menentang Malaysia."},
 {j:"pilih",t:"Negara yang menuntut hak ke atas Sabah ialah:",p:["Filipina","Vietnam","Myanmar","Kemboja"],b:0,u:"Filipina menuntut Sabah."},
 {j:"pilih",t:"Tarikh asal pengisytiharan Malaysia ialah:",p:["31 Ogos 1963","16 September 1963","9 Julai 1963","27 Mei 1961"],b:0,u:"Asalnya 31 Ogos 1963, kemudian ditangguhkan."},
 {j:"banyak",t:"Pilih DUA reaksi terhadap gagasan Malaysia.",p:["Indonesia membantah","Filipina menuntut Sabah","Brunei menyertai serta-merta","Thailand menyerang Malaysia"],b:[0,1],u:"Indonesia membantah dan Filipina menuntut Sabah."}],
 bos:{j:"pilih",t:"Berdasarkan Rajah 1, berapa bulankah antara cadangan Tunku dan Perjanjian Malaysia?",p:["26 bulan","14 bulan","2 bulan","12 bulan"],b:0,u:"Mei 1961 ke Julai 1963 ialah 26 bulan."}},

{n:3, tempat:"Balai Rundingan", sk:"13.1.4 · 13.1.5 Membuat kronologi langkah Pembentukan Malaysia", lampiran:null,
 kadNama:"Misi PBB", kadEm:"\u{1F310}", kadFakta:"Pertubuhan Bangsa-Bangsa Bersatu menghantar misi tinjauan ke Sabah dan Sarawak pada 1963 dan mendapati majoriti penduduk menyokong Malaysia.",
 bosKadNama:"Jawatankuasa Antara Kerajaan", bosKadEm:"\u{1F465}", bosKadFakta:"Jawatankuasa Antara Kerajaan merangka butiran perlembagaan dan syarat penyertaan Sabah dan Sarawak.",
 soalan:[
 {j:"pilih",t:"Langkah pertama dalam urutan pembentukan Malaysia ialah:",p:["Cadangan Tunku pada 1961","Pengisytiharan 1963","Perjanjian Manila","Pindaan 1965"],b:0,u:"Cadangan Tunku pada 1961."},
 {j:"pilih",t:"Langkah meninjau pendapat penduduk Sabah dan Sarawak dilakukan oleh:",p:["Suruhanjaya Cobbold","Suruhanjaya Reid","Suruhanjaya Razak","Suruhanjaya Barnes"],b:0,u:"Suruhanjaya Cobbold."},
 {j:"pilih",t:"Langkah merangka butiran perlembagaan dilakukan oleh:",p:["Jawatankuasa Antara Kerajaan","Jawatankuasa Hubungan Antara Kaum","Jawatankuasa Kerja","Jawatankuasa Pilihan"],b:0,u:"IGC merangka butiran."},
 {j:"banyak",t:"Pilih DUA langkah sebelum Pengisytiharan Malaysia.",p:["Perjanjian Malaysia ditandatangani","Misi PBB meninjau pendapat","Singapura keluar dari Malaysia","Perjanjian Bangkok ditandatangani"],b:[0,1],u:"Perjanjian dan misi PBB berlaku sebelum pengisytiharan."},
 {j:"pilih",t:"Misi PBB ke Borneo bertujuan:",p:["Mengesah sokongan","Menyerang Indonesia","Menamatkan Darurat","Memilih Agong"],b:0,u:"Misi PBB mengesahkan sokongan penduduk."},
 {j:"pilih",t:"Persetiaan Manila 1963 membabitkan Malaya, Indonesia dan:",p:["Filipina","Thailand","Jepun","India"],b:0,u:"Persetiaan Manila antara Malaya, Indonesia dan Filipina."},
 {j:"pilih",t:"Tarikh pengisytiharan ditangguhkan kerana:",p:["Bantahan luar negara","Banjir besar di Borneo","Pilihan raya di Sabah","Darurat di Semenanjung"],b:0,u:"Tarikh ditangguhkan sementara misi PBB dijalankan."},
 {j:"pilih",t:"Pengisytiharan Malaysia akhirnya dibuat pada:",p:["16 September 1963","31 Ogos 1963","9 Julai 1963","27 Mei 1961"],b:0,u:"16 September 1963."}],
 bos:{j:"susun",t:"Susun langkah pembentukan Malaysia mengikut urutan.",p:["Cadangan Tunku","Suruhanjaya Cobbold","Perjanjian Malaysia ditandatangani","Pengisytiharan Malaysia"],b:[0,1,2,3],u:"Cadangan 1961, Cobbold 1962, Perjanjian Julai 1963, Pengisytiharan September 1963."}},

{n:4, tempat:"Arkib Gagasan", sk:"13.1.5 · 13.1.6 Mencerakinkan maklumat tentang gagasan Malaysia", lampiran:"p1",
 kadNama:"Syarat Borneo", kadEm:"\u{1F4DC}", kadFakta:"Sabah dan Sarawak menetapkan syarat penyertaan, seperti kebebasan beragama, bahasa Inggeris untuk tempoh tertentu, dan hak tempatan dalam imigresen.",
 bosKadNama:"Berwaspada", bosKadEm:"\u{1F6A8}", bosKadFakta:"Pemimpin perlu berwaspada terhadap anasir luar yang cuba menggugat perpaduan dan kedaulatan.",
 soalan:[
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Malaysia dicadangkan?",p:["Keselamatan dan pembangunan","Menjajah wilayah jiran","Menghapuskan semua sultan","Menutup perdagangan dunia"],b:0,u:"Petikan menyatakan gabungan mengukuhkan keselamatan dan pembangunan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, mengapakah Sabah dan Sarawak menetapkan syarat?",p:["Lindungi kepentingan","Menolak Malaysia","Menjadi tanah jajahan","Mengasingkan diri"],b:0,u:"Syarat melindungi kepentingan tempatan."},
 {j:"pilih",t:"Berdasarkan Petikan 1, apakah kesan bantahan luar terhadap Malaysia?",p:["Konfrontasi dan penangguhan","Pembatalan Malaysia sepenuhnya","Penyerahan Sabah kepada asing","Sarawak keluar dari Malaysia"],b:0,u:"Bantahan luar menyebabkan konfrontasi dan penangguhan tarikh."},
 {j:"banyak",t:"Berdasarkan Petikan 1, pilih DUA syarat yang dituntut Borneo.",p:["Kebebasan beragama","Hak tempatan dalam imigresen","Penghapusan perlembagaan","Pemerintahan penjajah"],b:[0,1],u:"Kebebasan beragama dan hak imigresen."},
 {j:"pilih",t:"Bandingkan sambutan di Singapura dan Sabah. Apakah persamaannya?",p:["Menyokong dengan syarat","Menolak sepenuhnya","Meminta penjajahan","Meminta kemerdekaan berasingan"],b:0,u:"Kedua-duanya menyokong dengan syarat."},
 {j:"pilih",t:"Mengapakah kesepakatan penting untuk kestabilan negara?",p:["Perbezaan diatasi","Perbezaan dibesarkan","Perselisihan digalakkan","Rundingan dihentikan"],b:0,u:"Kesepakatan mengatasi perbezaan."},
 {j:"pilih",t:"Apakah yang dapat dianalisis daripada layanan syarat Borneo?",p:["Kepentingan dihormati","Wilayah dipinggirkan","Wilayah dikuasai","Wilayah dilupakan"],b:0,u:"Syarat itu menunjukkan kepentingan wilayah dihormati."},
 {j:"pilih",t:"Apakah kesan penerimaan idea berbeza dalam rundingan?",p:["Persetujuan lebih adil dicapai","Persetujuan gagal dicapai","Konflik bertambah","Rundingan berhenti"],b:0,u:"Menerima idea berbeza menghasilkan persetujuan yang adil."}],
 bos:{j:"pilih",t:"Berdasarkan Petikan 1, kesimpulan manakah PALING tepat?",p:["Dibentuk melalui rundingan","Malaysia dibentuk melalui paksaan","Malaysia dibentuk tanpa rundingan","Malaysia dibentuk oleh penjajah"],b:0,u:"Malaysia dibentuk melalui rundingan dan permuafakatan."}},

{n:5, tempat:"Dewan Penilai Jati Diri", sk:"13.1.6 · K13.1.7 · K13.1.8 · K13.1.9 · K13.1.10 Menilai Pembentukan Malaysia dalam membina jati diri", lampiran:null,
 kadNama:"Berfikiran Strategik", kadEm:"\u{265F}\u{FE0F}", kadFakta:"Pemimpin mengatur langkah satu demi satu, daripada cadangan hingga perjanjian, untuk mencapai matlamat Malaysia.",
 bosKadNama:"Meraikan Perbezaan", bosKadEm:"\u{1F308}", bosKadFakta:"Sikap menerima dan meraikan idea berbeza membolehkan wilayah yang pelbagai bersatu.",
 soalan:[
 {j:"pilih",t:"Pada pendapat anda, mengapakah Pembentukan Malaysia penting kepada jati diri?",p:["Menyatukan kaum dan wilayah","Memecahkan masyarakat kita","Menolak kemerdekaan negara","Mengekalkan penjajahan asing"],b:0,u:"Ia menyatukan pelbagai kaum dan wilayah."},
 {j:"pilih",t:"Seorang murid berkata, \"Malaysia dibentuk oleh satu pihak.\" Penilaian manakah paling tepat?",p:["Kurang tepat, pihak berunding","Tepat, satu pihak sahaja","Tepat, asing menentukan","Kurang tepat, Malaysia tidak wujud"],b:0,u:"Pelbagai pihak berunding."},
 {j:"pilih",t:"Antara berikut, sikap berwaspada terhadap anasir luar ialah:",p:["Menyemak niat pihak luar","Menerima setiap tawaran","Mengabaikan ancaman","Menyebar fitnah"],b:0,u:"Menyemak niat pihak luar."},
 {j:"banyak",t:"Pilih DUA kepentingan kesepakatan untuk kestabilan negara.",p:["Perselisihan diatasi","Perpaduan terjaga","Perpecahan digalakkan","Rundingan dielak"],b:[0,1],u:"Kesepakatan mengatasi perselisihan dan menjaga perpaduan."},
 {j:"pilih",t:"Penilaian manakah paling seimbang tentang Pembentukan Malaysia?",p:["Mengukuhkan negara","Menimbulkan kerugian semata-mata","Tiada cabaran langsung","Tidak memberi kesan"],b:0,u:"Ia mengukuhkan negara tetapi menimbulkan cabaran."},
 {j:"pilih",t:"Mengapakah berfikiran strategik penting?",p:["Langkah teratur","Bertindak tanpa fikir","Meniru orang lain","Menunggu nasib"],b:0,u:"Langkah teratur mencapai matlamat."},
 {j:"pilih",t:"Antara iktibar berikut, yang manakah paling penting daripada pembentukan Malaysia?",p:["Rundingan dan perbezaan","Paksaan dan pemulauan","Persaingan dan perpecahan","Penjajahan dan kawalan"],b:0,u:"Rundingan dan menerima perbezaan."},
 {j:"pilih",t:"Mengapakah meraikan idea berbeza baik untuk negara?",p:["Perpaduan lebih kukuh","Perpecahan bertambah","Kerjasama terhenti","Prasangka berkembang"],b:0,u:"Perpaduan lebih kukuh."}],
 bos:{j:"pilih",t:"Kenyataan manakah PALING berasas tentang Pembentukan Malaysia?",p:["Asas kenegaraan","Peristiwa yang tiada kesan","Tindakan penjajah","Peristiwa yang sudah dilupakan"],b:0,u:"Ia asas kenegaraan dan jati diri Malaysia hari ini."}},

{n:6, tempat:"Studio Bangsa Malaysia", sk:"K13.1.7 hingga K13.1.10 Strategik, kesepakatan, meraikan perbezaan dan berwaspada", lampiran:null,
 kadNama:"Hari Malaysia", kadEm:"\u{1F1F2}\u{1F1FE}", kadFakta:"Hari Malaysia disambut setiap 16 September bagi memperingati pembentukan Malaysia pada 1963.",
 bosKadNama:"Idea Berasas", bosKadEm:"\u{1F4A1}", bosKadFakta:"Idea yang berasas menggunakan sejarah pembentukan Malaysia untuk membina negara dan bangsa.",
 soalan:[
 {j:"pilih",t:"Sekolah anda mahu menyambut Hari Malaysia dengan bermakna. Idea manakah paling berasas?",p:["Pameran budaya Borneo","Menghapuskan sambutan","Melarang bendera","Mengejek budaya orang lain"],b:0,u:"Pameran budaya meraikan kepelbagaian."},
 {j:"pilih",t:"Kelas anda berbeza pendapat tentang projek. Iktibar pembentukan Malaysia ialah:",p:["Berunding bersama","Memaksa pendapat sendiri","Memulaukan kumpulan","Membatalkan projek"],b:0,u:"Berunding dan menerima syarat bersama."},
 {j:"banyak",t:"Pilih DUA cara meraikan kepelbagaian di sekolah.",p:["Mempelajari bahasa dan adat rakan","Menyertai perayaan pelbagai kaum","Mengasingkan murid mengikut kaum","Mengejek loghat rakan"],b:[0,1],u:"Belajar adat rakan dan menyertai perayaan."},
 {j:"pilih",t:"Idea manakah paling rasional untuk mengajar sejarah Malaysia secara menarik?",p:["Dokumentari dan lakonan","Menghafal tarikh sahaja","Mengabaikan topik","Menyalin nota semata-mata"],b:0,u:"Dokumentari dan lakonan menarik minat."},
 {j:"pilih",t:"Seorang rakan berkata, \"Pembentukan Malaysia tiada kaitan dengan saya.\" Respons manakah paling rasional?",p:["Ia asas negara kita","Betul, ia sudah lapuk","Betul, ia membosankan","Hanya pemimpin perlu tahu"],b:0,u:"Ia asas negara tempat kita tinggal."},
 {j:"pilih",t:"Bagaimanakah murid berwaspada terhadap anasir luar?",p:["Menyemak maklumat","Percaya setiap berita","Berkongsi tanpa semak","Mengabaikan fakta"],b:0,u:"Menyemak maklumat sebelum percaya."},
 {j:"pilih",t:"Idea manakah paling sesuai untuk mengeratkan hubungan murid Semenanjung dan Borneo?",p:["Program rakan pena","Memisahkan kelas","Menghalang pertukaran","Mengelak berkawan"],b:0,u:"Rakan pena dan lawatan mengeratkan hubungan."},
 {j:"pilih",t:"Mengapakah sikap strategik membantu kejayaan dalam kehidupan?",p:["Perancangan teratur","Perancangan melambatkan kejayaan","Nasib menentukan segalanya","Tindakan tergesa-gesa lebih baik"],b:0,u:"Perancangan teratur menghasilkan kejayaan."}],
 bos:{j:"buka",
  t:"Cadangkan SATU idea tentang Pembentukan Malaysia dalam konsep pembinaan negara dan bangsa.",
  arahan:"Pilih sekurang-kurangnya DUA fakta (contoh: cadangan Tunku 1961, Suruhanjaya Cobbold, syarat Sabah dan Sarawak, Perjanjian Malaysia 1963, Hari Malaysia). Terangkan idea awak, cara melaksanakannya dan nilai yang dipupuk.",
  u:"Jawapan TP6 yang kukuh menggunakan fakta yang tepat tentang Pembentukan Malaysia, mencadangkan idea yang boleh dilaksanakan, dan menonjolkan nilai seperti kesepakatan, meraikan perbezaan dan berwaspada."}}
];

module.exports = {
  id:"s5b5", tingkatan:5, kod:"5.0 Gagasan Pembentukan Malaysia",
  tajuk:"Lahirnya Malaysia",
  subtajuk:"Sejarah Ting. 5 · Bab 5 Gagasan Pembentukan Malaysia",
  spi:SPI["13.1"],
  ulasan:{
   1:"{n} dapat memerihalkan pengetahuan tentang gagasan Pembentukan Malaysia. Langkah seterusnya ialah menjelaskannya berserta contoh.",
   2:"{n} dapat menjelaskan gagasan Pembentukan Malaysia berserta contoh. Perlu lebih latihan membuat kronologi sebelum bergerak ke TP3.",
   3:"{n} boleh membuat kronologi peristiwa gagasan Pembentukan Malaysia. Galakkan mencerakinkan maklumat.",
   4:"{n} mampu mencerakinkan maklumat tentang gagasan Pembentukan Malaysia. Seterusnya latih menilai kepentingannya.",
   5:"{n} dapat menilai kepentingan Pembentukan Malaysia dalam membina jati diri. Sudah bersedia menjana idea.",
   6:"{n} berjaya menjana idea tentang Pembentukan Malaysia dalam konsep pembinaan negara dan bangsa. Pencapaian cemerlang bagi bab ini.",
   tiada:"{n} belum menunjukkan bukti penguasaan yang mencukupi bagi bab Gagasan Pembentukan Malaysia. Cadangan: ulang hentian pertama sambil membina garis masa pembentukan Malaysia dengan bimbingan rakan sebaya."
  },
  lampiran:{
   gm1:{jenis:"garismasa", peristiwa:[
     {masa:"Mei 1961", label:"Cadangan Tunku"},
     {masa:"1962", label:"Suruhanjaya Cobbold"},
     {masa:"Julai 1963", label:"Perjanjian Malaysia ditandatangani"},
     {masa:"September 1963", label:"Pengisytiharan Malaysia"}],
     kapsyen:"Rajah 1 · Langkah pembentukan Malaysia",
     alt:"Garis masa menegak: Mei 1961 cadangan Tunku; 1962 Suruhanjaya Cobbold; Julai 1963 Perjanjian Malaysia ditandatangani; September 1963 Pengisytiharan Malaysia"},
   p1:petikan(1, "Rundingan menuju Malaysia",
     ["Gagasan Malaysia dicadangkan untuk mengukuhkan keselamatan dan pembangunan bersama. Sabah dan Sarawak menetapkan syarat seperti kebebasan beragama dan hak tempatan dalam imigresen bagi melindungi kepentingan mereka.",
      "Indonesia dan Filipina membantah, lalu tarikh pengisytiharan ditangguhkan dan konfrontasi bermula. Walaupun begitu, Malaysia dibentuk melalui rundingan dan permuafakatan."],
     "Ringkasan berdasarkan buku rujukan sejarah")
  },
  aras:ARAS
};
