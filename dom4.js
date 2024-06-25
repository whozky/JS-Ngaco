// const tombol = document.createElement('button');
// const tTombol = document.createTextNode('Tombol');
// const random = document.createElement('button');
// const tRandom = document.createTextNode('Random');
// const mer = document.createElement('p');
// const tMer = document.createTextNode('Merah');
// const jo = document.createElement('p');
// const tJo = document.createTextNode('Hijau');
// const bir = document.createElement('p');
// const tBir = document.createTextNode('Biru');
// const br1 = document.createElement('br');
// const br2 = document.createElement('br');
// const br3 = document.createElement('br');

// const sl1 = document.createElement('input');
// sl1.setAttribute('type', 'range');
// sl1.setAttribute('name', 'merah');
// sl1.setAttribute('min', '0');
// sl1.setAttribute('max', '255');

// const sl2 = document.createElement('input');
// sl2.setAttribute('type', 'range');
// sl2.setAttribute('name', 'merah');
// sl2.setAttribute('min', '0');
// sl2.setAttribute('max', '255');

// const sl3 = document.createElement('input');
// sl3.setAttribute('type', 'range');
// sl3.setAttribute('name', 'merah');
// sl3.setAttribute('min', '0');
// sl3.setAttribute('max', '255');

// tombol.append(tTombol);
// random.append(tRandom);
// mer.append(tMer);
// jo.append(tJo);
// bir.append(tBir);
// document.body.append(tombol);
// document.body.append(random);
// document.body.append(br1);
// document.body.append(mer);
// document.body.append(sl1);
// document.body.append(br2);
// document.body.append(jo);
// document.body.append(sl2);
// document.body.append(br3);
// document.body.append(bir);
// document.body.append(sl3);

// tombol.addEventListener('click', function() {
//     document.body.classList.toggle('aqua');
// });

// random.addEventListener('click', function() {
//     const r = Math.round(Math.random() * 255 +1);
//     const g = Math.round(Math.random() * 255 +1);
//     const b = Math.round(Math.random() * 255 +1);
//     document.body.style.backgroundColor = 'rgb('+ r +','+ g +', '+ b +')';
// });

// sl1.addEventListener('input', function() {
//     const r = sl1.value;
//     const g = sl2.value;
//     const b = sl3.value;
//     document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
// });

// sl2.addEventListener('input', function() {
//     const r = sl1.value;
//     const g = sl2.value;
//     const b = sl3.value;
//     document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
// });

// sl3.addEventListener('input', function() {
//     const r = sl1.value;
//     const g = sl2.value;
//     const b = sl3.value;
//     document.body.style.backgroundColor = 'rgb('+ r +', '+ g +', '+ b +')';
// });


// Fungsi untuk membuat elemen dengan teks
function createElementWithText(tag, text) { // buat function untuk tag baru
    const element = document.createElement(tag); // buat tag baru
    const textNode = document.createTextNode(text); // buat text untuk tag baru
    element.appendChild(textNode); // masukan text baru kedalam tag baru
    return element; // menghasilkan tag baru berisi text 
}

// Fungsi untuk membuat slider
function createSlider(name) { // buat funtion untuk slider
    const slider = document.createElement('input'); // buat element dengan tag input
    slider.type = 'range'; // yang type nya range (slider)
    slider.name = name; // yang namanya: 'name'
    slider.min = '0'; // nilai minimal dari slidernya adalah 0
    slider.max = '255'; // nilai maximal dari slidernya adalah 255
    return slider; // menghasilkan tag input yang typenya range, yang namanya adalah 'name', yang nilai minimalnya = 0, nilai maximalnya = 255
}

// Membuat tombol dan slider
const tombol = createElementWithText('button', 'Tombol'); // membuat tag button dengan isi textnya adalah 'Tombol'
const random = createElementWithText('button', 'Random'); // membuat tag button dengan isi textnya 'Random'

const colors = ['Merah', 'Hijau', 'Biru']; // buat array warna sebagai value dari text
const sliders = colors.map(createSlider); // buat slider sebanyak isi dari array colors dan namakan sesuai indexnya
const labels = colors.map(color => createElementWithText('p', color)); // buat tag <p> dan diisi dengan text dari array colors

// Menambahkan elemen ke body
document.body.append(tombol, random); // tambahkan tombol yang sudah berisi text, dan random yang sudah berisi text secara berurutan kedalam body
colors.forEach((color, index) => { // untuk setiap color dengan index ke-...
    document.body.append(document.createElement('br'), labels[index], sliders[index]); // body tambahkan element br yang baru dibuat, tambahkan tag <p> dengan index ke-.., tambahkan slider ke[index]. dimana index berisi urutan value dari array
});

// Event listener untuk tombol toggle class
tombol.addEventListener('click', function() { // setiap tombol diclick jalan kan function
    document.body.classList.toggle('aqua'); // function yang menambahkan class = 'aqua' jika belum ada classnya, dan hapus classnya jika sudah ada
});

// Event listener untuk tombol random
random.addEventListener('click', function() { // setiap tombol random diclick jalankan function
    const r = Math.floor(Math.random() * 256); // buat angka random dari 1 sampai 255 yang dimana setiap angka tersebut dibulatkan
    const g = Math.floor(Math.random() * 256); // buat angka random dari 1 sampai 255 yang dimana setiap angka tersebut dibulatkan
    const b = Math.floor(Math.random() * 256); // buat angka random dari 1 sampai 255 yang dimana setiap angka tersebut dibulatkan
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // ubah background color body menjadi rgb(angka random hasil dari math.random) setiap kali tombol di click
});

// Fungsi untuk mengupdate warna latar belakang
function updateBackgroundColor() { // function untuk srtiap slider digerakkan maka akan mengubah nilai 
    const r = sliders[0].value; // slider dengan index ke-0 akan memberikan nilai untuk constanta r
    const g = sliders[1].value; // slider dengan index ke-1 akan memberikan nilai untuk constanta g
    const b = sliders[2].value; // slider dengan index ke-2 akan memberikan nilai untuk constanta b
    document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`; // ubah background color body menjadi rgb(angka random hasil dari slider yang digerakkan) setiap kali masing-masing slider digerakkan
}

// Menambahkan event listener ke semua slider
sliders.forEach(slider => { // dimana setiap slider
    slider.addEventListener('input', updateBackgroundColor); // tambahkan addEventListener() yang stiap kali slider digerakkan maka jalankan function updateBackgroundColor
});

document.body.addEventListener('mousemove', function(event) { // pada saat mouse digerakkan, jalankan function
    const posX = Math.round((event.clientX / innerWidth) * 256); // tangkap posisi mouse terhadap sumbu x lalu bagi dengan lebar dari window lalu bulatkan dan hasilnya dari 0 sampai 255
    const posY = Math.round((event.clientY / innerHeight) * 256); // tangkap posisi mouse terhadap sumbu y lalu bagi dengan tinggi dari window lalu bulatkan dan hasilnya dari 0 sampai 255
    const bir = Math.round(Math.random() * 50); // setiap pergerakan mouse hasilkan angka random dari 1 sampai 50 yang dibulatkan
    document.body.style.backgroundColor = `rgb(${posX},${posY},${bir})`; // ubah warna background body dengan rgb(posisi mouse terhadap sumbu x, posisi mouse terhadap sumbu y, angka random setiap mouse digerakkan)
});