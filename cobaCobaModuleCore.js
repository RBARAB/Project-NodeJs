// memanggil core module milik node js
// const { error } = require("console");
const fs = require("fs");

// menulis data string ke file (sychronus)
// fs.writeFileSync("coba.txt", "Halo bro!");

// menulis error yang terjadi langsung setelah hasil dari file yang dijalankan
// try {
//   fs.writeFileSync("data/coba.txt", "Halo bro!");
// } catch (error) {
//   console.log(error);
// }

// menulis dan membuat file dengan core module secara asynchronus
// fs.writeFile("text.txt", "nama saya adalah elyas ardhinata wicaksono", (e) => {
//   console.log(e);
// });

// baca file secara synchronus
// const read = fs.readFileSync("text.txt");

// console.log(read.toString());

// // baca file secara asynchronus
// fs.readFile("text.txt", "utf-8", (error, data) => {
//   // jika data tidak ditemukan maka akan menampilkan error
//   if (error) {
//     console.log("data tidak dapat dibuka");
//     return;
//   }
//   // jika data ditemukan maka akan memunculkan isi data dari file tersebut
//   console.log("isi data text.txt adalah " + data);
// });
