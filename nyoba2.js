// (-------------------gameSuit--------------------)

// var tanya = confirm('Ingin bermain suit dengan saya?');

// if (tanya == true) {
//     var ulang = true;

//     while (ulang) {
//         var input = prompt('Pilih pilihan anda \nGunting, Batu, Kertas');
//         var comp = Math.random();
//         var hasil = '';
//         var menang = 'Yeayy kamu MENANG!!';
//         var kalah = 'Yahh kamu KALAH :(';
    
//         if (comp < 0.34) {
//             comp = 'gunting';
//         } else if (comp >= 0.34 && comp < 0.67){
//             comp = 'batu';
//         } else {
//             comp = 'kertas';
//         }
    
//         // if (input == comp) {
//         //     hasil = 'Hmm.. Seri';
//         // } else if (input == 'gunting') {
//         //     hasil = (comp == 'Batu') ? kalah : menang;
//         // } else if (input == 'batu') {
//         //     hasil = (comp ==  'Gunting') ? menang : kalah;
//         // } else if (input == 'kertas') {
//         //     hasil = (comp == 'Gunting') ? kalah : menang;
//         // } else {
//         // hasil = 'Kayaknya salah ada yang salah deh.';  
//         // }

//         // ^^code error^^

//         if (input == comp) {
//             hasil = 'Hmm.. Seri';
//         } else if (input == 'gunting') {
//             if (comp == 'batu') {
//                 hasil = kalah;
//             } else {
//                 hasil = menang;
//             }
//         } else if (input == 'batu') {
//             if (comp == 'gunting') {
//                 hasil = menang;
//             } else {
//                 hasil = kalah;
//             }
//         } else if (input == 'kertas') {
//             if (comp == 'gunting') {
//                 hasil = kalah;
//             } else {
//                 hasil = menang;
//             }
//         } else {
//           hasil = 'Kayaknya ada yang salah deh.';  
//         }
    
//         alert(hasil + '\nKamu memilih: ' + input + '\nKomputer memilih: ' + comp);
    
//         ulang = confirm('Ingin bermain lagi?');
    
//     }
    
//     alert('terimakasih sudah mencoba permainan sederhana saya :)');
// } else {
//     alert('Okehh..');
// }

// (-------------------/gameSuit--------------------)

// (gameTebakAngka)
var tanya = confirm('Ingin bermain tebak angka?');

if (tanya == true) {
    var hasil = '';
    var ulang = true;

    while (ulang == true) {
        var nyawa = 3;
        var comp = Math.floor(Math.random() * 10) +1;

        for(nyawa; nyawa > 0; nyawa--){
            var input = prompt('Kamu dikasih ' + nyawa + ' nyawa gunakan sebaik mungkin. \nTebak angka dari 1 sampai 10');
    
            if (input == comp) {
                alert('Yeayy tebakan kamu benar!!');
                nyawa = 0;
            } else if (input < comp) {
                alert('Angkamu terlalu kecil, coba angka yang lebih besar');
            } else if (input > comp) {
                alert('Angkamu terlalu besar, coba angka yang lebih kecil');
            } else if (nyawa = 0 && input != comp) {
                alert('Yahh nyawa kamu habis.. :(');
            } else {
                alert('Kayaknya ada yang salah deh');
            }
    
        }

        alert(hasil + '\nKamu menebak angka ' + input + ' angka yang dicari adalah ' + comp);
        ulang = confirm('Ingin bermain lagi?');

    }

    alert('Terimakasih sudah memainkan game ini :)');

} else {
    alert('Okehh..');
}
// (/gameTebakAngka)