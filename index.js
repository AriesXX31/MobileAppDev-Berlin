//Kelompok Berlin Latihan Modules

export let movies = [
  //Kita bisa langsung melakukan export pada array yang berisi object
  {
    id: 1,
    title: "London Has Fallen",
    genre: "Action, War, Thriller",
    desc: "The film follows a plot to assassinate the world leaders of the G7 as they attend the British Prime Minister's funeral in London and Secret Service agent Mike Banning's efforts to protect United States President Benjamin Asher from being killed by terrorists.",
    rating: 9.2,
  },
  {
    id: 2,
    title: "Tenet",
    genre: "Science Fiction, Action, Thriller",
    desc: "Tenet is a 2020 science fiction action thriller film written and directed by Christopher Nolan, who produced it with Emma Thomas. A co-production between the United Kingdom and the United States, it stars John David Washington, Robert Pattinson, Elizabeth Debicki, Dimple Kapadia, Michael Caine, and Kenneth Branagh.",
    rating: 5.5,
  },
  {
    id: 3,
    title: "Mulan",
    genre: "Action, Adventure, Drama, Fantasy",
    desc: "Mulan is a 2020 American fantasy action drama film produced by Walt Disney Pictures. Directed by Niki Caro from a screenplay by Rick Jaffa, Amanda Silver, Lauren Hynek, and Elizabeth Martin, it is a live-action adaptation of Disney's 1998 animated film of the same name, itself based on the Chinese folklore story Ballad of Mulan.",
    rating: 6.5,
  },
  {
    id: 4,
    title: "Black Panther: Wakanda Forever",
    genre: "Action, Adventure, Drama",
    desc: "The people of Wakanda fight to protect their home from intervening world powers as they mourn the death of King T'Challa.",
    rating: 9.5,
  },
  {
    id: 5,
    title: "Thor: Love and Thunder",
    genre: "Action, Adventure, Comedy",
    desc: "Thor enlists the help of Valkyrie, Korg and ex-girlfriend Jane Foster to fight Gorr the God Butcher, who intends to make the gods extinct.",
    rating: 8.8,
  },
];

export let student = {
  //export langsung pada saat membuat sebuah object student
  fullName: "Lawongan, Renaldy Richard",
  regisNumber: "S2200053",
  nim: "105022010016",
  status: "Active",
};

export let numbers = [100, 90, 80, 70, 100, 90, 85, 75]; //export pada sebuah array

let bilangan1 = 10;
let bilangan2 = 42;

const operasiPenjumlahan = () => {
  const hasil = bilangan1 * bilangan2;
  console.log(hasil);
};

//Latihan module
//Export : mengeksport variabel pada file JavaScript, tujuannya variabel yang telah di-export dapat digunakan pada file JavaScript lain dengan menggunakan import.

export let name = {
  //export pada Object
  nama: "Claudia",
  umur: 20,
  alamat: "Jl. Airmadidi",
  hobby: "Play games, & Piano",
};

// export function sayHello(user) { //export pada sebuah function
//     console.log(`Hello, $user!`);
// }

//Cara export bisa dipisah atau bisa digabungkan variable objek dan function nya sekaligus.
// Atau juga bisa terpisah untuk semua kode
//

export let hobby = {
  //export pada Object
  h1: "Play games",
  h2: "Play Piano",
  h3: "Scroll interesting videos on youtube/instagram/tiktok",
  h4: "Sing Cover song",
  h5: "Listening to music",
  h6: "Learn more about ui/ux & game development",
  h7: "Hangout with friends (depends on my mood)",
  h8: "Love aespa so much and snsd also",
  h9: "Sleep <3",
  h10: "Diving (New)",
};

let listStudentMobile = [
  {
    fullName: "John Doe",
    age: 21,
    address: "Paniki Bawah",
  },
  {
    fullName: "Renaldy Lawongan",
    age: 22,
    address: "Airmadidi Bawah",
  },
  {
    fullName: "Claudia",
    age: 23,
    address: "Tobelo",
  },
];

export { operasiPenjumlahan as calculate }; //Penggunaan export as digunakan ketika kita ingin melakukan export secara sekaligus di akhir kode program.

export default listStudentMobile;
//Biasanya export default digunakan untuk membuat salah satu variabel menjadi data utama yang akan di-export pada sebuah module. export default juga bisa digunakan jika hanya ada satu variabel pada suatu module.
