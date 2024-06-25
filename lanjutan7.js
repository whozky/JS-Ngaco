// Looping for.. of dan for.. in

// for.. of
// melooping iterable object
// iterable object = string, array, arguments, nodeList, typedArray, map, set, user-defined iterable

// array
const org = ['orang1', 'orang2', 'orang3', 'orang4'];

// looping memggunakan for biasa

// for (let i = 0; i < org.length; i++) {
//     console.log(org[i]);
// };

// looping menggunakan forEach

// org.forEach( o => {console.log(o)}); // tampilkan setiap orang dari array 'org'

// looping menggunakan for of

for ([i, or] of org.entries()) { // untuk setiap index dan orang dari array 'org' yang mengantri
    console.log(`${or} adalah orang dengan urutan ke-${i + 1} pada array`); // tampilkan ini
};


// string
const nama = 'namsa';

// kalo menggunakan forEach
// nama.forEach(c => {console.log(c)});

// menggunakan for of
for (h of nama) { // untuk huruf dari string nama
    console.log(h); // tampilkan setiap huruf
};


// nodeList
const nodNam = document.querySelectorAll('.nama');

// menggunakan for of
for (nam of nodNam) { // untuk nama dari nodeList nodNam
    console.log(nam.innerHTML); // tampilkan isi HTML dari nama
};


// for.. in
// melooping enumerable (object)

const buddy = {
    name: 'buddieys',
    gender: 'male',
    age: '26'
};

for (prop in buddy) { // untuk property didalam object buddy
    console.log(prop); // tampilkan property nya
    console.log(buddy[prop]); // tampilkan isi property dari object buddy
};