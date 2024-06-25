var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) { // jika variable noAngkot kurang dari atau sama dengan variable angkotBeroperasi maka:
        console.log('Angkot no ' + noAngkot + ' sedang beroperasi');
    } else if (noAngkot != 8){ // kalo engga, jika variable noAngkot (tidak sama dengan) 8 maka:
        console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
    } else { // kalo selain diatas maka:
        console.log('Angkot no ' + noAngkot + ' sedang lembur');
    }
}