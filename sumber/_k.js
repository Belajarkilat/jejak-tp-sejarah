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
 "4.3": ["Mengetahui tamadun Islam.","Memahami tamadun Islam.","Menerangkan dengan contoh tentang tamadun Islam.","Menganalisis maklumat yang berkaitan tamadun Islam.","Membuat penilaian tentang tamadun Islam.","Melahirkan idea yang berasas mengenai tamadun Islam."]
};

module.exports = { petikan, duaPetikan, SPI, esc };
