const angka = [-1, -4, 5, 1, 3, -2, -5, -3, 2, 4,]

// filter() -> memeriksa value (membutuhkan array baru)
// mencari angka yang lebih besar dari 0
// const angkaBaru = angka.filter(function (Elemen) { // membuat array angkaBaru dengan isi dari array angka yang sudah difilter
//     return Elemen > 0; // kembalikan Elemen (angka) yang lrbih dari 0
// });
// console.log(angkaBaru); // tampilkan ke console

// atau dalam function arrow menjadi:
// const angkaBaru = angka.filter((Elemen) => Elemen > 0); // membuat array angkaBaru dengan isi dari array angka yang sudah difilter Elemen yang lebih besar dari 0
// console.log(angkaBaru);

// map() -> memetakan (menghasilkan array baru)
// setiap value dikali 5
// const angkaBaru = angka.map((Elemen) => Elemen * 5 ); // membuat array angkaBaru dengan isi dari array angka yang sudah dimapping setiap Elemen dikali 5
// console.log(angkaBaru);

// reduce() -> menggabungkan semua value (mempunyai 2 parameter)
// menjumlahkan semua value yang ada
// const angkaBaru = angka.reduce((accumulator,currentvalue) => accumulator + currentvalue ); // membuat array angkaBaru dengan isi nilai sebelumnya ditambah nilai sesudahnya
    // accumulator adalah nilai awal, currentvalue adalah nilai saat ini yang akan ditambahkan dengan nilai awal. hasilnya akan menjadi nilai awal, dan currentvalue saat ini adalah nilai selanjutya
// console.log(angkaBaru);

// menggabungkan semua Higher Order Function dengan Method Chaining
// menggabungkan semua kegiatan di atas^^
const angkaBaru = angka.filter((a) => a > 0).map((a) => a * 5).reduce((preV,curV) => preV + curV);
// cari angka yang lebih besar dari 0, kalikan setiap angka angka tersebut dengan 5, tambahkan semua value (hasilnya)
console.log(angkaBaru);