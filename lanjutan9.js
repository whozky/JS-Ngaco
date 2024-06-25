// Rest Parameter => untuk menampung banyak arguments

// menerima lebih dari 1 arguments
function tangkap(...angka) {
    return angka;
};

console.log(tangkap(1, 2, 3, 4, 5, 6));


// parameter default pada function
function tambah(...angka) {
    // menggunakan arguments
    // let total = 0;
    // for (a of arguments) {
    //     total += a;
    // };
    // return total;

    // menggunakan reduce()
    return angka.reduce((i, a) => i + a);
};

console.log(tambah(1, 2, 3, 4));


// array destructuring
const team = ['mamat', 'memet', 'momot', 'asen'];
const [ketua, wakil, ...anggota] = team;

console.log(anggota);


// object destructuring
const tim = {
    ketuaKelas: 'ketua',
    waketu: 'waketu',
    bendahara: 'bendahara',
    anggota1: 'anggota',
    anggota2: 'anggota',
    anggota3: 'anggota',
    anggota4: 'anggota',
    anggota5: 'anggota',
    anggota6: 'anggota',
    anggota7: 'anggota',
    anggota8: 'anggota',
    anggota9: 'anggota',
};

const {ketuaKelas, waketu, bendahara, ...angota} = tim

console.log(angota);


// function filtering
function pilter(type, ...value) {
    return value.filter(v => typeof v === type);
};

console.log(pilter('boolean', 1, 2, 'apa', false, 'aja', 12, true));