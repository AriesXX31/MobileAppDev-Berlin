//Kelompok Berlin Latihan Modules
import { movies, student, numbers, calculate } from "./index.js";
import { name as studentDetail, hobby as hobbies } from "./index.js"; //kita juga dapat memberikan alias pada saat melakukan import data menggunakan import as.
import listStudentMobile from "./index.js";

console.log(studentDetail); //Menampilkan object name yang kita sudah memberikan alias menjadi studentDetail
console.log(hobbies); //Menampilkan object hobby yang kita sudah memberikan alias sebelumnya menjadi hobbies

console.log(movies);

let filterArray = movies.filter(function (data) {
  //melakukan filter terhadap object hanya menampilkan rating diatas 8.0. Menggunakan fungsi filter.
  return data.rating > 8.0;
});
console.log(filterArray);

numbers.forEach(function (data, index) {
  //menggunakan forEach untuk menampilkan object movies
  console.log(data + " index:" + index);
});

console.log(student.nim);

let sentence = `Halo nama lengkap saya ${student.fullName}, nomor registrasi saya ${student.regisNumber}, dan NIM saya adalah ${student.nim}.`; //menggunakan string literal

console.log(sentence);

calculate();

let list1 = listStudentMobile.map(function (items) {
  //menggunakan map untuk menampilkan array object.
  return items.address;
});

console.log(list1);
