// Belajar DOM (Document Object Model)

// ------------------------------------------------------------------getElementById -> element---------------------------------------------------------
// const jdl = document.getElementById('judul');
// jdl.style.color = 'red'; //mengubah warna pada text
// jdl.style.backgroundColor = '#123'; //mengubah warna background pada text
// jdl.innerHTML = 'ini judul'; //mengubah tulisan pada HTML menggunakan javascript

// ------------------------------------------------------------------getElementByTagName -> HTMLcollection []------------------------------------------
// const p = document.getElementsByTagName('p');
// p.style.color = 'cyan'; //error karena p adalah array

// p[0].style.color = 'green'; //harus menambahkan index dari array nya

// jika ingin menyeleksi semua p maka menggunakan pengulangan
// for (let i = 0; i < p.length; i++) {
//     p[i].style.color = 'lightBlue'; //penulisan yang lebih dari 1 kata harus menggunakan cammle letter
// }

// atau jika tag tersebut hanya ada 1 maka
// const sbjdl = document.getElementsByTagName('h3')[0]; //tetap menggunakan index arraynya karena getElementsByTagName mengembalikan nilai array
// sbjdl.innerHTML = 'ini subjudul';

// ------------------------------------------------------------------getElementsByClassName -> HTMLcollection []---------------------------------------
// const p2 = document.getElementsByClassName('p2')[0]; //sama seperti getElementsByTagName
// p2.innerHTML = 'ini diubah dari javascript';

// ------------------------------------------------------------------querySelector() -> element pertama
// const selek1 = document.querySelector('.section2 ul li:nth-child(2)'); // sama seperti selection di CSS (spesific selection)
// selek1.style.backgroundColor = 'orange';

// jika ingin menyeleksi semua element maka menggunakan ----------------------querySelectorAll() - > nodelist []---------------------------------------
// const para = document.querySelectorAll('p') [0]; // sama seperti getElementsByTagName()
// para.style.backgroundColor = 'cyan';

// jika ingin menyeleksi semua maka
// const parall = document.querySelectorAll('p');
// for (let i = 0; i < parall.length; i++) {
//     parall[i].style.backgroundColor = 'magenta';
// };


// -------------------------------------------------------------------------cara mengganti node root-----------------------------------------------------------
const section2 = document.querySelector('.section2'); // set section2 sebagai node root (menggunakan querySelector() karena section2 hanya ada 1)
const list = section2.querySelectorAll('li'); // gunakan section2 sebagai node root (menggunakan querySelectorAll() karena li ada lebih dari 1)
for (let i = 0; i < list.length; i++) {
    list[i].innerHTML = `ini list ke- ${i + 1} yang diubah dari javascript`;
}