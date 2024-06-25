// pengelolaan angkot menggunakan object
// -nama_supir
// -jurusan
// -kas (?)
// -penumpang (naik)
// -penumpang (turun)

function angkot(namaSupir, jurusan, penumpang, kas) {

    this.namaSupir = namaSupir;
    this.jurusan = jurusan;
    this.penumpang = penumpang;
    this.kas = kas;

    this.penumpangNaik = function (namaPenumpang, naikDari) {
        if (this.penumpang.length == 0) {
            this.penumpang.push(namaPenumpang);
            return this.penumpang;
        } for (p = 0; p < this.penumpang.length; p++) {
            if (penumpang[p] == namaPenumpang) {
                console.log('nama ' + namaPenumpang + ' sudah ada dalam angkot');
                return this.penumpang;
            } else if (this.penumpang[p] == undefined) {
                this.penumpang[p] = namaPenumpang;
                return this.penumpang;
            } else if (p == this.penumpang.length - 1) {
                this.penumpang.push(namaPenumpang);
                return this.penumpang;
            }
        }
    }
    
    this.penumpangTurun = function (namaPenumpang,bayar) {
        if (this.penumpang.length == 0) {
            console.log('angkot masih kosong');
            return this.penumpang;
        } for (p = 0; p < this.penumpang.length; p++) {
            if (penumpang[p] == namaPenumpang) {
                penumpang[p] = undefined;
                this.kas += bayar;
                return this.penumpang;
            } else if (p == this.penumpang.length -1) {
                console.log('nama ' + namaPenumpang + ' tidak ada didalam angkot');
                return this.penumpang;
            }
        }
    }
}

var angkot1 = new angkot('ahmad', ['jakarta', 'bandung', 'jogja'], [], 0);