/* Pembantu untuk sumber bab Sejarah. Fail berawalan _ diabaikan oleh bina.js.

   petikan(n, tajuk, perenggan, rujukan): kotak sumber bertulis. Ia ialah <figure>, jadi
   app hanya memaparkannya pada soalan yang menyebut "Petikan" (lihat lampiranUntuk dalam
   index.html). Petikan yang ditulis untuk latihan (contohnya diari rekaan) mesti dilabel
   begitu dalam rujukan supaya murid tidak menyangka ia dokumen sebenar. */
const esc = t => String(t).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function petikan(n, tajuk, perenggan, rujukan){
  const isi = [].concat(perenggan).map(p => "<p>" + esc(p) + "</p>").join("");
  return '<figure class="figure petikan"><blockquote>' + isi +
    (rujukan ? '<span class="sumber-rujuk">' + esc(rujukan) + "</span>" : "") +
    "</blockquote><figcaption>Petikan " + n + " · " + esc(tajuk) + "</figcaption></figure>";
}

/* Dua petikan berdampingan untuk soalan perbandingan tafsiran. */
function duaPetikan(tajuk, a, b){
  const blok = (x) => "<p><b>" + esc(x.nama) + "</b></p>" + [].concat(x.teks).map(p => "<p>" + esc(p) + "</p>").join("") +
    (x.rujukan ? '<span class="sumber-rujuk">' + esc(x.rujukan) + "</span>" : "");
  return '<figure class="figure petikan"><blockquote>' + blok(a) + "</blockquote>" +
    '<blockquote style="margin-top:12px">' + blok(b) + "</blockquote>" +
    "<figcaption>Petikan 1 · " + esc(tajuk) + "</figcaption></figure>";
}

/* Standard Prestasi setiap Standard Kandungan, disalin kata demi kata daripada
   DSKP KSSM Sejarah Tingkatan 1 (Bahagian Pembangunan Kurikulum, 2015, terbitan 2016),
   dskp/sejarah-t1.pdf. Bab buku teks yang berkongsi satu Standard Kandungan
   memakai Standard Prestasi yang sama. */
const SPI = {
 "1.1": ["Mengetahui pengenalan ilmu Sejarah.","Memahami pengenalan ilmu Sejarah.","Mengaplikasikan pengetahuan pengenalan ilmu Sejarah.","Menganalisis maklumat pengenalan ilmu Sejarah.","Membuat penilaian tentang pengenalan ilmu Sejarah.","Melahirkan idea yang rasional tentang pengenalan ilmu Sejarah."],
 "2.1": ["Mengetahui Zaman Air Batu.","Memahami Zaman Air Batu.","Menggunakan pengetahuan Zaman Air Batu untuk memahami proses pembentukan dunia.","Menganalisis maklumat yang berkaitan dengan Zaman Air Batu.","Membuat penilaian tentang Zaman Air Batu.","Melahirkan idea yang rasional tentang Zaman Air Batu."],
 "3.1": ["Mengetahui Zaman Prasejarah.","Memahami Zaman Prasejarah.","Menerangkan dengan contoh tentang Zaman Prasejarah.","Menganalisis maklumat yang berkaitan Zaman Prasejarah.","Membuat penilaian tentang Zaman Prasejarah.","Melahirkan idea yang rasional mengenai Zaman Prasejarah."],
 "4.1": ["Mengetahui tamadun awal dunia.","Memahami tamadun awal dunia.","Menerangkan dengan contoh tentang tamadun awal dunia.","Menganalisis maklumat yang berkaitan dengan tamadun awal dunia.","Membuat penilaian tamadun awal dunia.","Melahirkan idea yang berasas mengenai tamadun awal dunia."],
 "4.2": ["Mengetahui peningkatan tamadun.","Memahami peningkatan tamadun.","Menerangkan dengan contoh peningkatan tamadun.","Menganalisis maklumat yang berkaitan dengan peningkatan tamadun.","Membuat penilaian peningkatan tamadun.","Melahirkan idea yang berasas mengenai peningkatan tamadun."],
 "4.3": ["Mengetahui tamadun Islam.","Memahami tamadun Islam.","Menerangkan dengan contoh tentang tamadun Islam.","Menganalisis maklumat yang berkaitan tamadun Islam.","Membuat penilaian tentang tamadun Islam.","Melahirkan idea yang berasas mengenai tamadun Islam."],
 /* Tingkatan 2: DSKP KSSM Sejarah Tingkatan 2 (dskp/sejarah-t2.pdf, salinan portal IPIM KPM). */
 "5.1": ["Mengetahui sejarah kerajaan Alam Melayu.","Mempamerkan kefahaman tentang sejarah kerajaan Alam Melayu.","Menggunakan pengetahuan sejarah tentang kerajaan Alam Melayu dalam pelbagai situasi.","Menganalisis maklumat berkaitan sejarah kerajaan Alam Melayu.","Membuat penilaian tentang sejarah kerajaan Alam Melayu.","Melahirkan idea yang berasas tentang sejarah kerajaan Alam Melayu."],
 "5.2": ["Mengetahui warisan kerajaan Alam Melayu.","Mempamerkan kefahaman tentang warisan kerajaan Alam Melayu.","Menggunakan pengetahuan sejarah tentang warisan kerajaan Alam Melayu dalam pelbagai situasi.","Menganalisis maklumat berkaitan warisan kerajaan Alam Melayu.","Membuat penilaian tentang warisan kerajaan Alam Melayu.","Melahirkan idea yang rasional tentang warisan kerajaan Alam Melayu."],
 "6.1": ["Mengetahui sejarah Kesultanan Melayu Melaka.","Mempamerkan kefahaman tentang sejarah Kesultanan Melayu Melaka.","Menggunakan pengetahuan sejarah tentang Kesultanan Melayu Melaka pada masa kini.","Menganalisis maklumat berkaitan sejarah Kesultanan Melayu Melaka.","Membuat penilaian terhadap sejarah Kesultanan Melayu Melaka.","Melahirkan idea yang berasas tentang sejarah Kesultanan Melayu Melaka."],
 "6.2": ["Mengetahui sejarah Kesultanan Johor Riau dan kerajaan-kerajaan Melayu.","Mempamerkan kefahaman tentang sejarah Kesultanan Johor Riau dan kerajaan-kerajaan Melayu.","Menggunakan pengetahuan sejarah tentang Kesultanan Johor Riau dan kerajaan-kerajaan Melayu dalam pelbagai situasi.","Menganalisis maklumat berkaitan sejarah Kesultanan Johor Riau dan kerajaan-kerajaan Melayu.","Membuat penilaian terhadap sejarah Kesultanan Johor Riau dan kerajaan-kerajaan Melayu.","Melahirkan idea yang berasas tentang sejarah Kesultanan Johor Riau dan kerajaan-kerajaan Melayu."],
 "6.3": ["Mengetahui sejarah kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis.","Mempamerkan kefahaman tentang sejarah kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis.","Menggunakan pengetahuan sejarah tentang kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis dalam pelbagai situasi.","Menganalisis maklumat berkaitan sejarah kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis.","Membuat penilaian terhadap sejarah kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis.","Melahirkan idea yang berasas tentang sejarah kerajaan Kedah, Kelantan, Negeri Sembilan dan Perlis."],
 "6.4": ["Mengetahui latar belakang bagi Sarawak dan Sabah.","Mempamerkan kefahaman tentang latar belakang Sarawak dan Sabah.","Menggunakan pengetahuan sejarah tentang latar belakang Sarawak dan Sabah dalam pelbagai situasi.","Menganalisis maklumat berkaitan latar belakang Sarawak dan Sabah.","Membuat penilaian terhadap latar belakang Sarawak dan Sabah.","Melahirkan idea yang rasional tentang latar belakang Sarawak dan Sabah."],
 /* Tingkatan 3: DSKP KSSM Sejarah Tingkatan 3 (dskp/sejarah-t3.pdf). */
 "7.1": ["Menyatakan secara ringkas kedatangan kuasa Barat.","Menjelaskan dengan contoh tentang kedatangan kuasa Barat ke negara kita.","Membina kronologi tentang kedatangan kuasa Barat.","Mencerakinkan maklumat tentang kedatangan kuasa Barat secara sistematik.","Membuat penilaian tentang kedatangan kuasa Barat ke negara kita.","Menjana idea untuk mengekalkan kedaulatan negara dari ancaman luar."],
 "7.2": ["Memerihalkan maklumat berkaitan Negeri-negeri Selat.","Menjelaskan dengan contoh yang sesuai tentang peluasan pengaruh Barat di Negeri-negeri Selat.","Membina kronologi tentang pentadbiran Negeri-negeri Selat.","Menghuraikan maklumat tentang peluasan pengaruh British di Negeri-negeri Selat.","Membahaskan iktibar daripada peluasan pengaruh British di Negeri-negeri Selat.","Menjana idea bagi menangani ancaman penjajahan bentuk baru untuk mempertahankan kedaulatan negara."],
 "7.3": ["Menyatakan Negeri-negeri Melayu Bersekutu.","Menjelaskan tentang pentadbiran British di Negeri-negeri Melayu Bersekutu.","Menyusun maklumat tentang pembentukan Negeri-negeri Melayu Bersekutu di negara kita.","Menganalisis keberkesanan pentadbiran Barat di Negeri-negeri Melayu Bersekutu.","Membuat justifikasi penguasaan British terhadap kemakmuran ekonomi di Negeri-negeri Melayu Bersekutu.","Melahirkan idea bagi mewujudkan pentadbiran yang kompetitif dalam menjamin kemakmuran negara."],
 "7.4": ["Memerihalkan pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu secara ringkas.","Menjelaskan dengan contoh tentang pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu.","Mengelaskan maklumat tentang Negeri-negeri Melayu Tidak Bersekutu.","Mencerakinkan maklumat tentang peluasan pentadbiran British di Negeri-negeri Melayu Tidak Bersekutu.","Membuat justifikasi tentang pembentukan Negeri-negeri Melayu Tidak Bersekutu dalam menjamin kestabilan negara.","Menjana idea bagi mewujudkan pentadbiran yang berkesan dalam memajukan negara."],
 "7.5": ["Memerihalkan pentadbiran Barat di Sarawak dan Sabah.","Menjelaskan dengan contoh tentang pentadbiran Barat di Sarawak dan di Sabah.","Membina kronologi maklumat tentang pentadbiran rejim Brooke di Sarawak dan Syarikat Borneo Utara British di Sabah.","Membanding beza peluasan pengaruh kuasa Barat di Sarawak dan Sabah.","Membuat justifikasi tentang perluasan pengaruh Barat di Sarawak dan Sabah dalam membentuk pentadbiran yang sistematik.","Menjana idea bagi mewujudkan sistem pentadbiran yang berdaya saing di masa hadapan."],
 "7.6": ["Mengetahui kesan pentadbiran Barat terhadap ekonomi dan sosial.","Menjelaskan dengan contoh kesan pentadbiran Barat terhadap ekonomi dan sosial.","Mengklasifikasikan maklumat kesan pentadbiran Barat terhadap ekonomi dan sosial.","Membanding beza kesan pentadbiran Barat terhadap ekonomi dan sosial.","Membuat penilaian kesan pentadbiran Barat terhadap ekonomi dan sosial yang mempengaruhi kehidupan hari ini.","Melahirkan idea untuk pembangunan negara demi keharmonian rakyat."],
 "8.1": ["Menyatakan penentangan masyarakat tempatan.","Menjelaskan dengan contoh penentangan masyarakat tempatan.","Membina urutan peristiwa penentangan masyarakat tempatan.","Mencerakinkan maklumat tentang penentangan masyarakat tempatan.","Menjustifikasikan penentangan masyarakat tempatan dalam mempertahankan hak dan maruah bangsa.","Menjana idea tentang kepimpinan berwibawa dalam memperjuangkan kedaulatan negara."],
 "8.2": ["Menyatakan tindakan raja dan pembesar Melayu dalam menangani cabaran Barat.","Mengemukakan dengan contoh tindakan raja dan pembesar Melayu dalam menangani cabaran Barat.","Mengkategorikan tindakan pemerintah dalam menangani cabaran Barat.","Menganalisis tindakan raja dan pembesar Melayu dalam menangani cabaran Barat.","Menilai usaha raja dan pembesar Melayu dalam menangani cabaran Barat untuk pembangunan negara.","Menjana idea dalam menangani cabaran untuk mempertahankan kedaulatan negara."]
};

module.exports = { petikan, duaPetikan, SPI, esc };
