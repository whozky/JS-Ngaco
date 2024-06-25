const box = document.querySelector('.box'); // ambil elementdengan class='box'

box.addEventListener('click', function () { // ketika box diclick maka jalankan function ini. pake construction function karena membutuhkan 'this'
    let a = 'size'; // variable untuk mengisi value yang memiliki class ='size'
    let b = 'caption'; // variable untuk mengisi value yang memiliki class ='caption'

    if (this.classList.contains(a)) { // jika didalam (ini) mempunyai class='size' maka:
        [a, b] = [b, a] // ubah value dari variable
    }

    this.classList.toggle(a); // jika didalam (ini) mempunyai class='size' maka hapus classnya, jika tidak ada maka buat classnya
    setTimeout(() => { // jalankan yang didalam '{}' setelah menunggu ...milidetik
        this.classList.toggle(b); // jika didalam (ini) mempunyai class='caption' maka hapus classnya, jika tidak ada maka buat classnya
    }, 600); // kenapa 600, karena ditulis dalam satuan milidetik 600/1000 = 0,6 detik
});