// Spread Operator (...)
// bisa digunakan untuk itarable elements

// memecah array menjadi single element
const array = ['array1', 'array2', 'array3'];

console.log(...array); // tampilkan array yang dibentangkan
console.log(...array[0]); // tampilan array yang dibentangkan dengan index ke 0


// menggabungkan array
const gabung1 = [1, 2, 3, 4];
const gabung2 = [5, 6, 7, 8];

const gabung = [...gabung1, 'devan', ...gabung2]; // variable gabung1 yang di jejer, 'devan', variable gabung2 yang dijejer

console.log(gabung);


// meng-copy array
const yoo = ['abc', 'def', 'ghi'];
const yoi = [...yoo, 'jkl']; // variable 'yoo' yang dijejer, 'jkl'

console.log(yoo);
console.log(yoi);


// 
const wel = document.querySelector('h3'); // ambil element 'h3'

const huruf = [...wel.innerHTML].map(c => `<span>${c}</span>`).join(''); // isi dari element h3 dimasukkan kedalam tag span kemudian gabungkan dengan '' (string kosong)

wel.innerHTML = huruf; // masukkan tag span tadi kedalam h3