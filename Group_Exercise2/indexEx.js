//Export

<script type="module" src="index.js"></script>

//Contoh dasar melakukan export pada variabel :
export let name = "Thoriq";

//Kita juga bisa melakukan export pada objek JavaScript:
export let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};

//Selain variabel dan objek kita juga bisa meng-export sebuah function:
export function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

//Lalu kita juga bisa meng-export variabel objek dan function sekaligus:
export let name = "Thoriq";


export let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};


export function sayHello(user) {
  console.log(`Hello, ${user}!`);
}

//Atau juga bisa melakukan export secara terpisah untuk semua kode yang ingin kita export seperti contoh di bawah ini:
let name = "Thoriq";


let orang = {
  nama: "Thoriq",
  umur: 25,
  alamat: "Jl. Kemang Raya",
};


function sayHello(user) {
  console.log(`Hello, ${user}!`);
}


// Mengexport variable name, object orang dan function sayHello sekaligus
export { name, orang, sayHello };

