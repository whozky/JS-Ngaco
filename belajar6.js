var jmlhAngkot = 10;
var angkotBeroperasi = 6;
var noAngkot = 1;

// for (noAngkot = 1; noAngkot <= 10; noAngkot++){
//     if (noAngkot <= angkotBeroperasi && noAngkot != 5) {
//         console.log('Angkot no ' + noAngkot + ' Sedang beroperasi');
//     } else if (noAngkot <= jmlhAngkot && noAngkot % 2 == 1 && noAngkot != 5){ // kondisi didalam pengkondisian if else bisa ditumpuk (stack) bedanya in sama yang bawah adalah:
//         // jika variable noAngkot kurang dari atau sama dengan variable jmlhAngkot, DAN variable noAngkot merupakan bilangan ganjil, DAN variable noAnngkot bukan angka 5 maka:
//         console.log('Angkot no ' + noAngkot + ' Sedang tidak beroperasi');
//     } else {
//         console.log('Angkot no ' + noAngkot + ' Sedang lembur');
//     }
// }

// atau

while (noAngkot <= jmlhAngkot) {
    if (noAngkot <= 6 && noAngkot !== 5) {
        console.log('Angkot no ' + noAngkot + ' Sedang beroperasi');
    } else if (noAngkot == 5 || noAngkot == 8 || noAngkot == 10){ // kondisi didalam pengkondisian if else bisa ditumpuk (stack)
        // jika variable noAngkot = 5, ATAU = 8, ATAU = 10 maka:
        console.log('Angkot no ' + noAngkot + ' sedang lembur');
    } else {
        console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
    }
noAngkot++;
}