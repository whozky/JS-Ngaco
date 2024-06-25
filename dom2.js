// manipulasi DOM

// 1. innerHTML -> mengubah apapun didalam HTML dan menggantikannya (jika didalam tag HTML tersebut sudah ada isinya maka isinya akan diubah menjadi yang baru)
// const jdl = document.getElementById('judul');
// jdl.innerHTML = 'mengubah "judul" menjadi (kalimat ini)';
// 2. classList
const p1 = document.querySelector('.p1')
p1.classList.add('baru'); // menambahkan class baru
p1.classList.remove('baru'); // menghapus class
p1.classList.toggle('biru-muda'); // menambahkan class jika belum ada, menghapus class jika sudah ada (biasanya digunakan untuk tombol)
p1.classList.item('biru-muda'); // untuk mengetahui element mana yang mempunyai class ini
p1.classList.contains('biru-muda'); // untuk mengetahui element ini mempunyai class ini atau tidak
p1.classList.replace('biru-muda', 'baru'); // untuk mengganti class yang sudah ada menjadi class baru

// membuat paragraf baru di akhir section1 atau setelah paragraf 1
const pBaru = document.createElement('p'); // membuat tag nya
const tpBaru = document.createTextNode('paragraf baru'); // membuat text yang akan dimasukan kedalam tag p yang baru dibuat
const section1 = document.querySelector('.section1'); // menamgkap parentnya

pBaru.append(tpBaru); // memasukkan text kedalam tag p
section1.append(pBaru); // memasukkan tag p yang berisi text kedalam section1 di urutan terakhir

// membuat paragraf baru di tengah tengah child
const ul = document.querySelector('.section2 ul'); // ambil ul sebagai parent & node root
const li2 = ul.querySelector('li:nth-child(2)'); // ambil li kedua sebagi patokan li baru
const liBaru = document.createElement('li'); // buat tag li baru
const tLiBaru = document.createTextNode('ini list baru'); // buat text untuk li baru

liBaru.append(tLiBaru); // masukkan text li kedalam tag li baru
ul.insertBefore(liBaru, li2); // masukkan tag li baru yang sudah diisi text baru kedalam ul, ditaro sebelum li ke 2

// menghapus paragraf
// const section1 = document.querySelector('.section1'); // menamgkap parentnya (karena sudah ada diatas makanya di comment)
const h3 = document.querySelector('h3'); // tangkap child yang akan dihapus

section1.removeChild(h3); // hapus child h3 dari parent section1

// mereplace child terhadap parentnya
const jdl = document.querySelector('#judul'); // ambil objek yang ingin direplace
const jdlBaru = document.createElement('h1'); // buat tag h1 baru
const tJdlBaru = document.createTextNode('Belajar memanipulasi DOM javascript'); // buat text untuk h1 baru

jdl.replaceChildren(jdlBaru, tJdlBaru); // jdl direplace dengan jdlBaru yang isinya tJdlBaru