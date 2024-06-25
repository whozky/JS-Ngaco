// Destucturing Function

// Destucturing Function with array
function hitung(a, b) {
    return [a + b, a - b, a * b, a / b];
};

const [tambah, kurang, kali, bagi] = hitung(2, 3); // urutan (index) berpengaruh

console.log(kali);


// Destucturing Function with object
function hasil(x, y) {
    return {
        tmbh: x + y,
        kureng: x - y,
        kal: x * y,
        bag: x / y,
        // pngkt: x = (x * y)
    };
};

const {kureng, bag, tmbh, kal, pngkt = 'tidak ada'} = hasil(5, 3); // nama property berpengaruh

console.log(pngkt);


// Destructuring Function Arrguments
const orang = {
    nama: {
        namaPanjang: 'namaaaaaaaa',
        namaPendek: 'n',
        namaSamaran: 'n4m6'
    },
    alamat: 'Jln. Jalan Yuk',
    TTL: 'Jakarta, 31 Juni 1998',
    umur: 26
};

function dataWarga({nama : {namaPanjang, namaPendek, namaSamaran}, alamat, TTL, umur}) { // object yang didalamnya ada object nama
    return `nama panjang = ${namaPanjang}
        nama pendek = ${namaPendek}
        nama samaran = ${namaSamaran}
        tinggal = ${alamat}
        tempat, tanggal lahir = ${TTL}
        usia = ${umur}
    `;
};

console.log(dataWarga(orang));