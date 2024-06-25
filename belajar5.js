var jmlhAngkot = 10;
var angkotBeroperasi = 6;

for (noAngkot = 1; noAngkot <= jmlhAngkot; noAngkot++){
    if (noAngkot <= angkotBeroperasi) { // jika variable noAngkot kurang dari atau sama dengan angkotBeroperasi maka:
        console.log('Angkot no ' + noAngkot + ' sedang beroperasi');
    } else if (noAngkot <= jmlhAngkot && noAngkot % 2 == 1){ // kalo engga, jika variable noAngkot kurang dari atau sama dengan variable jmlhAngkot, DAN variable noAngkot dibagi 2 menyisakan 1 (atau bisa ditulis dengan 'noAngkot adalah bilangan ganjil') maka:
        console.log('Angkot no ' + noAngkot + ' sedang tidak beroperasi');
    } else { // jika selain diatas maka:
        console.log('Angkot no ' + noAngkot + ' sedang lembur');
    }
}