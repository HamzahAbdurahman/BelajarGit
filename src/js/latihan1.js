//tampilkan sesuatu

console.log("hallo word !");

console.log(146464665656);

console.log(8+7-13);

console.log("5"+6*10*4);

///simpan kotak penyimpanan

const harga = 8000;
const jumlah= 5;
console.log(harga);
console.log(jumlah);
console.log( harga * jumlah);

//kotak yang isinya boleh di ganti

let stok= 4;
console.log(stok);
stok = stok - 1;
console.log(stok)
stok = stok -2;
console.log(stok);

// bandingkan 2 nilai

const umur = 20;
console.log(umur >= 17);
console.log(umur===17);
console.log(umur ===20);
console.log(20 == "20");

//fungsi otak

function tambah (a,b){
  return a *b;

}

const hasil = tambah(4,20);
console.log(hasil);

//fungsi if
function cekumur(umur) {
if(umur <= 18) return "dewasa";
return "anak";
}

console.log(cekumur(60));
console.log(cekumur(12));

//ulangi 3 kali
const buah = ["apel", "jeruk", "pepaya", "semangka", "pisang"];
for (const nama of buah){
  console.log(nama);
}
console.log("selesai");

console.log(buah);

//tambah angka pakai loop

let total =10;
for (const angka of[1,2,3,10,20]){

  total = total + angka;
}

console.log(total);

///latihan 9
function hitungtotal(daftarharga){
let total =0;
for (const harga of daftarharga) total = total + harga;
return total;

}

console.log(hitungtotal([8000,200,100,500,200,1000,2000]));

//latihan 10 gabung semua

function kasir(harga, jumlah){
  const subtotal = harga * jumlah;
  if (subtotal >= 20000) return subtotal - (subtotal * 0.5);
  return subtotal;
}

console.log(kasir(8000,2));
console.log(kasir(10000,6));
console.log(kasir(5,4000));

