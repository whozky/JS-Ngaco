const container = document.querySelector('.container'); // ambil containernya sebagai parent
const prev = document.querySelector('.preview'); // ambil previewnya untuk diubah

container.addEventListener('click', function(event) { // buat Event Listener pada containernya, yang jika diclick akan menjalankan function dengan parameter apa yang diclick
    if (event.target.className == 'pict') prev.src = event.target.src; // periksa jika target yang diclick mempunyai class 'pict', maka gantisrc pada preview dengan src target yang diclick
});