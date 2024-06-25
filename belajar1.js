// while berfungsi untuk looping (pengulangan)

// jumlah angkot = 10
var angkot1 = 1; // angkot awal
var angkot2 = 9; // angkot tersisa
var pembatasAngkot1 = 10; // jumlah angkot
var pembatasAngkot2 = 0; // batas angkot

while (angkot1 <= pembatasAngkot1 && angkot2 >= pembatasAngkot2) { // logic dengan operasi and
    console.log('Angkot No. ' + angkot1 + ' beroprasi dengan baik, tersisa ' + angkot2 + ' angkot lagi.'); // maka lakukan
    angkot1++; // variable angkot1 di increment kan
    angkot2--; // variable angkot2 di deckrement kan
}

// pengulangan menggunakan while memiliki template:
// let a = 1; // buat variable terlebih dahulu (sebagai kondisi awal)
// let b = 5; // buat variable terlebih dahulu (sebagai kondisi akhir)
// while (a <= b) { // pengecekan kodisi
//     console.log(a); // lakukan ini
//     a++ // kondisi variable di increment
// }