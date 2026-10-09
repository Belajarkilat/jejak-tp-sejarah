import sys

blok = open(sys.argv[1], encoding='utf8').read().rstrip('\n')

# ---------- index.html ----------
p = 'index.html'
s = open(p, encoding='utf8').read()
lama = 'ketokohan Nabi Muhammad'  # penanda sahaja; DUNIA diakhiri s3b8
akhir = 'melalui pemodenan, perlembagaan dan diplomasi."}\n};'
assert s.count(akhir) == 1
s = s.replace(akhir, 'melalui pemodenan, perlembagaan dan diplomasi."},\n' + blok + '\n};', 1)
R = [
    ('untuk Sejarah KSSM Tingkatan 1 hingga 3. Setiap bab', 'untuk Sejarah KSSM Tingkatan 1 hingga 4. Setiap bab'),
    ('Sejarah Tingkatan 1 (8 bab), Tingkatan 2 (10 bab) dan Tingkatan 3 (8 bab) sedia dimainkan.', 'Sejarah Tingkatan 1 (8 bab), Tingkatan 2 (10 bab), Tingkatan 3 (8 bab) dan Tingkatan 4 (12 bab) sedia dimainkan.'),
    ('var JUMLAH_BAB={1:8,2:10,3:8};', 'var JUMLAH_BAB={1:8,2:10,3:8,4:12};'),
    ('"26 bab Sejarah Tingkatan 1 hingga 3 (Bab 1-2 setiap tingkatan percuma; Premium menengah rendah pada harga perintis RM23/tahun hingga 31 Dis 2026)"',
     '"38 bab Sejarah Tingkatan 1 hingga 4 (Bab 1-2 setiap tingkatan percuma; Premium menengah rendah atau menengah atas pada harga perintis RM23/tahun hingga 31 Dis 2026)"'),
]
for a, b in R:
    assert a in s, a
    s = s.replace(a, b, 1)
open(p, 'w', encoding='utf8').write(s)

# ---------- landing.html ----------
p = 'landing.html'
s = open(p, encoding='utf8').read()
R = [
    ('Sejarah KSSM Tingkatan 1 hingga 3 dengan garis masa', 'Sejarah KSSM Tingkatan 1 hingga 4 dengan garis masa'),
    ('Murid menjawab soalan Sejarah KSSM Tingkatan 1 hingga 3 dengan', 'Murid menjawab soalan Sejarah KSSM Tingkatan 1 hingga 4 dengan'),
    ('Sejarah KSSM Tingkatan 1 (8 bab), Tingkatan 2 (10 bab) dan Tingkatan 3 (8 bab). Tingkatan 4 dan 5 belum tersedia.', 'Sejarah KSSM Tingkatan 1 (8 bab), Tingkatan 2 (10 bab), Tingkatan 3 (8 bab) dan Tingkatan 4 (12 bab). Tingkatan 5 belum tersedia.'),
    ('Jejak TP Sejarah · Sejarah KSSM Tingkatan 1–3', 'Jejak TP Sejarah · Sejarah KSSM Tingkatan 1–4'),
]
for a, b in R:
    assert a in s, a
    s = s.replace(a, b)
kad = '''    <div class="plan">
      <span class="siapa">Premium — Menengah atas</span>
      <span class="rm"><s>RM33</s> RM23 <small>/ tahun</small></span>
      <span class="perintis">Harga perintis hingga 31 Dis 2026</span>
      <p>Semua bab Tingkatan 4 (12 bab). Tingkatan 5 akan ditambah kemudian dalam langganan yang sama. Dibeli berasingan daripada Menengah rendah.</p>
    </div>
'''
penutup = '''Ciri-ciri lain sama seperti akaun percuma.</p>
    </div>
'''
assert s.count(penutup) == 1
s = s.replace(penutup, penutup + kad, 1)
open(p, 'w', encoding='utf8').write(s)

# ---------- sw.js ----------
p = 'sw.js'
s = open(p, encoding='utf8').read()
import re
m = re.search(r'const VERSI = "js-2026-10-10([a-z])";', s)
nxt = chr(ord(m.group(1)) + 1)
s = s.replace(m.group(0), 'const VERSI = "js-2026-10-10%s";' % nxt)
open(p, 'w', encoding='utf8').write(s)
print('VERSI baharu: js-2026-10-10' + nxt)
