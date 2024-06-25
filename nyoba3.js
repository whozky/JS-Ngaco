// function declaration

// --------------penjumlahan with function declaration-----------------

// var tanya = confirm('Apakah anda ingin melakukan penjumlahan?');

// if (tanya == true) { 

//     function penjumlahan(a,b) {
//         a = parseInt(prompt('Masukan angka a: '));
//         b = parseInt(prompt('Masukan angka b: '));

//         return a + b;
//     }

//     alert(penjumlahan());

// } else {
//     alert('Okehh..');
// }

// function expretion

//---------------perkalian with function expretion----------------------

// var tanya = confirm('Apakah anda ingin mengalikan bilangan?');

// if (tanya == true) {
    
//     var perkalian = function (a = parseInt(prompt('Masukkan nilai a: ')) ,b = parseInt(prompt('Masukkan nilai b: '))) {

//         return a * b;

//     }

//     alert(perkalian());

// } else {
//     alert('Okehh..');
// }

// -----------loopoing dengan function------------

function loop(l) {
    batas = 5
    if (l == batas) {
        return batas;
    }
    console.log(l);
    return loop(l+1)
}

console.log(loop(1));