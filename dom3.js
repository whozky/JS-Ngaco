// DOM Event
// yang paling sering dipake ada 2: onclick (model), dan addEventListener() (method)

// onclick (model)
// const p3 = document.querySelector('.p3'); // ambil element yang ingin di kasih event
// p3.onclick = function() { // buat function yang jika diclick maka akan menjalankan function tersebut
//     p3.style.backgroundColor = 'red'; // isi dari function merubah background menjadi warna merah
// };
// // jika ada dua onclick maka
// p3.onclick = function() { // function dari onclick ini yang akan dijalankan karena onclick menimpa event yang ada
//     p3.style.color = 'green'; // mengubah warna text menjadi hijau
// };

// addEventListener() (method)
// const ul = document.querySelector('.section2 ul');
// const li = ul.querySelectorAll('li');

// for (let i = 0; i < li.length; i++) {
//     li[i].addEventListener('click', function() {
//         const liBaru = document.createElement   ('li');
//         const tLiBaru = document.createTextNode('list baru');
        
//         liBaru.appendChild(tLiBaru);
//         ul.append(liBaru);
//     });
// };

const ul = document.querySelector('.section2 ul'); // ambil parentnya yaitu ul

ul.addEventListener('click', function(event) { // buat event listenernya dengan event = click, dan ketika diclick akan menjalankan function yang mempunyai parameter event (dimana eventnya adalah 'click')
    if (event.target.tagName === 'LI' && event.target === ul.lastElementChild) { // periksa apakah target yang diclick itu 'li' dan 'li' tersebut adalah child terakhir dari parent ul
        const liBaru = document.createElement('li'); // buat li baru
        const tLiBaru = document.createTextNode('list baru'); // buat text untuk li baru
        liBaru.appendChild(tLiBaru); // masukkan text li baru kedalam tag li baru
        ul.append(liBaru); // masukkan li baru yang berisi text li baru kedalam parent ul
    } // selesai
});
// ini akan menambahkan list baru jika list terakhir dari parent ul diclick