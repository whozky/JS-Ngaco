// percabangan pengkondisian menggunakan  switch

var component = prompt('pilih komponen yang anda suka! \n contoh: router, switch, hub, kable lan');

switch (component) { // jika component yang dimasukan bernilai:
    case 'router': // jika bernilai ini
    case 'hub': // jika bernilai ini
        alert('komponen tersedia!'); // maka jalankan ini
        break; // selesai (keluar dari percabangan)
    case 'switch': // jika bernilai ini
    case 'kable lan': // jika bernilai ini
        alert('stock komponen habis :('); // maka jalankan ini
        break; // selesai (keluar dari percabangan)
    default: // jika tidak satupun dari yang diatas makan jalankan nilai defaultnya yaitu:
        alert('komponen tidak ditemukan') // maka jalankan ini
        break; // selesai (keluar dari percabangan)
}