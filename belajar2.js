// perbedaan while dan for

var jmlAngkot = 10; // buat variable jumlah seluruh angkot (kondisi akhir)
var angkotBeroperasi = 6; // buat pembatas (sampai mana)
var noAngkot = 1; // buat variable (kondisi awal)

while (noAngkot <= angkotBeroperasi) { // pengecekan kondisi: ketika variable noAngkot lebih kecil atau sama dengan variable angkotBeroperasi maka jalankan
    console.log('Angkot no. ' + noAngkot + ' beroperasi dengan baik'); // jalankan ini

    noAngkot++; // baru variable noAngkot di increment kan
}

// sedangkan dengan pengulangan menggunakan for:

for (angkotBeroperasi = angkotBeroperasi + 1; angkotBeroperasi <= jmlAngkot; angkotBeroperasi++){ // pengecekan kondisi, aturan kondisi, nilai selanjutnya dari kondisi akan di tulis dalam block pengecekan kondisi (kondisi akan dicek seluruhnya beserta aturannya) ketika bernilai 'true' maka lakukan
    console.log('Angkot no. ' + angkotBeroperasi + ' sedang tidak beroperasi'); // jalankan ini
}