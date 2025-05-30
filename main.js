// memanggil file sistem dari module core node.js
const fs = require("fs");

// memanggil module readline
const readline = require("node:readline");
const { stdin: input, stdout: output } = require("node:process");

const rl = readline.createInterface({ input, output });

rl.question("Tulis Nama Anda : ", (nama) => {
  rl.question("Berapa Usia anda : ", (usia) => {
    rl.question("Apa Hobi anda : ", (Hobi) => {
      const contact = { nama, usia, Hobi };
      const data = fs.readFileSync("data/contacts.json", "utf-8");
      const contacts = JSON.parse(data);
      contacts.push(contact);

      fs.writeFileSync("data/contacts.json", JSON.stringify(contacts));
      console.log;

      console.log(`halo ${nama} data anda sudah disimpan`);
      rl.close();
    });
  });
});
