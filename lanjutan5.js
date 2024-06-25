// Destructuring Assignment

// Destructuring Array (urutan berpengaruh)
const destr = [1, 2, 3, 4, 5];

// const [satu, dua, tiga, empat, lima] = destr;
// console.log(tiga);


// skipping items
const [satu, , , empat, lima] = destr;
console.log(lima);


// swap items
let a = 1;
let b = 2;
console.log(a);
console.log(b);
[a, b] = [b, a];
console.log(a);
console.log(b);


// medestruucturing value pada function
function des() {
    return [1, 2];
};

const [x, y] = des();
console.log(x);


// rest parameter
const [q, w, e, r, t] = [1, 2, 3, 4];
console.log(t); // undifined



// Destructuring Object (nama berpengaruh // kecuali di assign ke variable baru)
const ahmd = {
    nama: 'ahmad',
    umr: 18
};

const {nama, umr} = ahmd;
console.log(umr);


// Assignment tanpa deklarasi object
({bahasa, negara} = {bahasa: 'Jawa', negara: 'Indonesia'});

console.log(negara);


// Assign ke variable baru
const pemrograman = {
    bahasa1: 'phyton',
    bahasa2:  'java', 
    bahasa3: 'c++'
};

const {bahasa1: p, bahasa2: j, bahasa3: c} = pemrograman

console.log(j);


// memberikan default value
const mhs = {
    nma: 'mamat',
    kls: 8,
    // umur: 12
};

const {nma, kls, umur = 15} = mhs;

console.log(umur)


// Assign ke variable baru + memberikan default value
const Pemrograman = {
    bahasa1: 'phyton',
    bahasa2:  'java', 
    bahasa3: 'c++',
    bahasa4: 'gajah'
};

const {bahasa1: py, bahasa2: ja, bahasa3: cp, bahasa4: g = 'golang'} = Pemrograman

console.log(g);


// 
const mahasiswa = {
    ID: 123,
    NAMA: 'memet', 
    SEMESTER: 8
};

function getIdMahasiswa({ID, NAMA, SEMESTER}) {
    return ID;
};

console.log(getIdMahasiswa(mahasiswa));