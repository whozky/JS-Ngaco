// ambil semua elemen hewan
const Hewans = document.querySelectorAll('li[data-umur]'); // ambil element li yang punya attibute data-umur (hasilnya nodelist)
const arrHewans = Array.from(Hewans); // ubah nodelist menjadi array
// pilih yang mamalia
const mamalia = arrHewans.filter(hewan => hewan.classList.contains('mamalia')); // dari array hewan ambil yang classnya 'mamalia'
// jumlah mamalia
const jlmhMamalia = mamalia.length; // hitung ada berapa hewan mamalia
// ambil umur masing masing hewan mamalia
const umurMamalia = mamalia.map(umur => parseInt(umur.getAttribute('data-umur'), 10)); // ambil data umur dari list mamalia dan ubah menjadi integer
// hitung rata rata umur hewan mamalia
const totalUmur = umurMamalia.reduce((tahun, umur) => tahun + (umur)); // jumlahkan umur dari mamalia tersebut
const rataUmurTahun = Math.floor(totalUmur / jlmhMamalia); // untuk mengetahui berapa rata rata tahun dari umur mamalia
const rataUmurBulan = Math.round((totalUmur / jlmhMamalia - rataUmurTahun) * 12); // untuk mengetahui berapa rata rata bulan dari sisa tahun umur mamalia

// simpan di dom
document.querySelector('.jumlahMamalia').textContent = `${jlmhMamalia} Mamalia`; // tampilkan di bagian element dengan class jumlahMamalia
document.querySelector('.rataUmur').textContent = `${rataUmurTahun} Tahun, ${rataUmurBulan} Bulan`; // tampilkan di bagian element dengan class rataUmur