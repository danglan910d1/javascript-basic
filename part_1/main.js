// Part 2: Bien, comments, built-in

// alert("Hi JavaScript basic");

// Lesson 1:  Khai bao bien

// Khai bao bien
var fullName = "Dang Thi Ngoc Lan";
var age = 26; // Khai bao age

// Goi ham thong bao
alert(fullName);
alert(age);

/** Lesson 2: Comments trong JS
 *
 * 1. Muc dich su dung
 * - Ghi chu
 * - Vo hieu hoa ma
 *
 * 2. Loai comments
 * - Comment 1 dong
 * - Comment nhieu dong
 *
 * 3. Cach su dung phim tat
 * - Ctrl + /
 */

// Comment dong
/**
 * Comment khoi
 */

/*
   Lesson 3: Gioi thieu mot so ham built-in

   1. Alert: Thong bao
   2. Console: In ra dong thong bao trong console
   3. Confirm
   4. Prompt
   5. Set timeout
   6. Set interval
*/

// vd:
// console
console.log("day la console.log", fullName);
console.warn("day la canh bao", fullName);
console.error("day la loi", fullName);

// confirm: tao hop thoai tuy chon
confirm("Xac nhan ban du 18 tuoi");

// prompt: tao hop thoai co input de nhap thong tin
prompt("Ban bao nhieu tuoi?");

// setTimeout: cho 1 doan code chay sau 1 khoang thoi gian, don vi la mili giay
setTimeout(function () {
  alert("Thong bao setTimeout");
}, 1000);

// setInterval: Thuc thi lien tuc sau 1 khoang thoi gian mili giay se thuc hien lai 1 lan
// setInterval(() => {
//   alert("Thong bao setInterval");
// }, 1000);

setInterval(function () {
  console.log("Day la log cua setInterval" + Math.random());
}, 1000);
