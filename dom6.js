// Traversal (penelusuran silsilah pada DOM)

// parentElement -> elementHTML
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.parentElement.style.display = 'none'; // dari target yang di'Event' parentnya kasih display = 'none'
//     }); // ^^ traversal ini bisa dipangkatkan dengan cara ditulis dua kali, maka dalam kasus ini jika 'parentElement' ditulis dua kali yang terseleksi adalah grand parentnya ^^
// });

// parentNode -> node
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.parentNode.parentNode.style.display = 'none'; // dari target yang di'Event' parentnya kasih display = 'none'
//     }); // ^^ traversal ini bisa dipangkatkan dengan cara ditulis dua kali, maka dalam kasus ini jika 'parentElement' ditulis dua kali yang terseleksi adalah grand parentnya ^^
// });

// nextElementSibling -> elementHTML
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.nextElementSibling.style.display = 'none'; // -> null karena element dengan class  = 'tombol' tidak mempunyai adik (saudara dibawahnya)
//     });
// });

// nextSibling -> node
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.nextSibling.style.display = 'none'; // -> #text (/n) karena didalam penulisan HTML setelah tag dengan class = 'tombol' adalah enter (/n)
//     });
// });

// previousElementSibling -> elementHTML
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.previousElementSibling.style.display = 'none'; // -> kakaknya
//     });
// });

// previousSibling -> node
// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.previousSibling.style.display = 'none'; // -> #text (/n)
//     });
// });

// perbedaan antara node dan elementHTML adalah elementHTML akan mencari Elament HTML sedangkan node akan melihat apapun
// Traversal juga bisa distack (tumpuk) seperti parentElement.nextElementSibling -> ini berarti paman/bibinya

// const tombol = document.querySelectorAll('.tombol'); // ambil semua tag HTML dengan class 'tombol'

// tombol.forEach(function(Element) { // yang mana disetiap tombol jalankan function dengan parameter Element
//     Element.addEventListener('click', function(Event) { // setiap parameter Element diclick jalankan function dengan parameter 'Event' dimana eventnya adalah 'click'
//         Event.target.parentElement.parentElement.previousElementSibling.style.display = 'none'; // dari target yang di'Event' parentnya kasih display = 'none'
//     }); // ^^ traversal ini bisa dipangkatkan dengan cara ditulis dua kali, maka dalam kasus ini jika 'parentElement' ditulis dua kali yang terseleksi adalah grand parentnya ^^
// });

// dalam kasus diatas yang akan dikasih display = 'none' adalah tag <h1> karena parentElement yang pertama menyeleksi card, parentElement yang kedua menyeleksi container, previousElementSibling menyeleksi tag <h1>