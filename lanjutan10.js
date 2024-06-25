// Callback => function yang dijadikan sebagai parameter function lain

// Synchronous Callback
function halo(nama) {
    return `Hallo ${nama}`;
};

function sapa(para) {
    return halo(para);
};

console.log(sapa('mamat'));

// Asynchronous Callback
console.log('mulai');

function tunggu() {
    setTimeout();
};

console.log('selesai');