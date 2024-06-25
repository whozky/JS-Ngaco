var tanya = confirm('Ingin naik angkot?');

if (tanya == true) {
        var kursiPenumpang = [];
    var tambahPenumpang = function (namaPenumpang, kursiPenumpang) {
        if (kursiPenumpang.length == 0) {
            kursiPenumpang.push(namaPenumpang);
            return kursiPenumpang;
        } else {
            for (k = 0; k < kursiPenumpang.length; k++) {
                if (kursiPenumpang[k] == namaPenumpang) {
                    console.log('Nama ' + namaPenumpang + ' sudah ada didalam angkot');
                    return kursiPenumpang[k];
                } else if (kursiPenumpang[k] == undefined) {
                    kursiPenumpang[k] = namaPenumpang;
                    return kursiPenumpang;
                } else if (k == kursiPenumpang.length - 1) {
                    kursiPenumpang.push(namaPenumpang);
                    return kursiPenumpang;
                }
            }
        }
    }
    var hapusPenumpang = function (namaPenumpang, kursiPenumpang) {
        if (kursiPenumpang.length == 0) {
            console.log('angkot masih kosong');
            return kursiPenumpang;
        } else {
            for (k = 0; k < kursiPenumpang.length; k++) {
                if (kursiPenumpang[k] == namaPenumpang) {
                    kursiPenumpang[k] = undefined;
                    return kursiPenumpang;
                } else if (k == kursiPenumpang.length - 1) {
                    console.log('nama ' + namaPenumpang + ' tidak ada didalam angkot');
                    return kursiPenumpang;
                }
            }
        }
    }
} else {
    alert('Okehh..');
}