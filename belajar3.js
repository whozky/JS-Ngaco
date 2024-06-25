var jmlhAngkot = 10;
var angkotBeroperasi = 6;
// var noAngkot = 1;

// if (noAngkot <= angkotBeroperasi) {
//     for (noAngkot <= jmlhAngkot; noAngkot <= angkotBeroperasi; noAngkot++){
//         console.log('Angkot no ' + noAngkot + ' beroperasi dengan baik');
//     }
//     for (noAngkot = angkotBeroperasi + 1; noAngkot <= jmlhAngkot; noAngkot++){
//         console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
//     }
// }

// atau

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) {
        console.log('Angkot no ' + noAngkot + ' Beroperasi dengan baik');
    } else {
        console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
    }
}