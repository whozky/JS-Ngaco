const tombol = document.querySelectorAll('.tombol'); // ambil semua yang classnya tombol

tombol.forEach((Element) => { // setiap tombol jalankan fungsi dengan parameter Element
    Element.addEventListener('click', (Event) => { // setiap elementHTML yang diclick jalankan function
        Event.target.parentElement.style.display = 'none'; // jika target (tombol) diclick maka parentnya kasih display = none
        Event.preventDefault(); // mencekah aksi default dari suatu element
    });
})