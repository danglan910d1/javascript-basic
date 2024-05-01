// Part 3: Toan tu, kieu du lieu

/** Lesson 1: Lam quen voi toan tu
 * 
 * Gioi thieu ve toan tu trong JavaScript
 1. Toan tu so hoc - Arithmetic
 2. Toan tu gan - Assignment
 3. Toan tu so sanh - Comparison
 4. Toan tu logic - Logical
 */

//  vd:
// 1. Toan tu so hoc
var age = 10 + 10;
console.log("age =", age);

// 2. Toan tu gan
var fullName = "Dang Thi Ngoc Lan";
console.log("fullName la:", fullName);

// 3. Toan tu so sanh
var a = 1;
var b = 2;

if (a > b) {
  console.log("True");
} else {
  console.log("False");
}

if (a < b) {
  console.log("True");
} else {
  console.log("False");
}

// 4. Toan tu logic
if (a > 0 && b > 0) {
  console.log("a & b > 0");
}

/** Lesson 2: Toan tu so hoc
 +   Cong
 -   Tru
 *   Nhan
 **  Luy thua
 /   Chia
 %   Chia lay so du
 ++  Tang 1 gia tri so
 --   Giam 1 gia tri so
 */

// vd:
var a = 10;
var b = 5;

console.log("a =", a);
console.log("b =", b);

console.log("a + b =", a + b);
console.log("a - b =", a - b);
console.log("a * b =", a * b);
console.log("a / b =", a / b);
console.log("a ** b =", a ** b);
console.log("a % b =", a % b);

a++;
a++;
console.log("a++ =", a);

b++;
b++;
console.log("b++ =", b);

a--;
a--;
console.log("a-- =", a);

b--;
b--;
console.log("b-- =", b);

/** Lesson 3: Toan tu gan
 * Su dung toan tu gan khi gan gia tri cho 1 bien hoac gan lai gia tri cho 1 bien da tao truoc do  

    Toan tu         Vi du           Tuong duong
    =               x = y           x = y
    +=              x += y          x = x + y
    -=              x -= y          x = x - y
    *=              x *= y          x = x * y
    /=              x /= y          x = x / y
    **=             x **= y         x = x ** y
 */

// vd:
var a = 1;
console.log("a =", a);

a = a + 2;
console.log("a =", a);

a += 2;
console.log("a =", a);

a -= 2;
console.log("a =", a);

a *= 2;
console.log("a =", a);

a /= 2;
console.log("a =", a);

a **= 2;
console.log("a =", a);

/** Lesson 4: Toan tu ++ va --, su dung la hau to (postfix) hay tien to (prefix)
 1. Toan tu ++
 - Toan tu ++ giup tang gia tri cua 1 bien mang gia tri so len 1. Co 2 cach de su dung:
 + Dung lam hau to: variable++ (su dung toan tu nam sau bien)
 + Dung lam tien to: ++variable (su dung toan tu nam truoc bien)
 a/ Su dung ++ lam hau to
 - Toan tu ++ khi dung la hau to se tang gia tri cua bien len 1 va tra ve gia tri truoc khi tang
 b/ Su dung ++ lam tien to
 - Toan tu ++ la tien to se tang gia tri cua bien len 1 va tra ve gia tri sau khi tang

 2. Toan tu --
 - Cach hoat dong tuong tu nhu toan tu ++, diem khac biet la thay vi cong them 1 thi toan tu -- se tru di 1

 3. Tong ket:
 - x++ tang gia tri bien len 1 va tra ve gia tri truoc khi tang
 - ++x tang gia tri bien len 1 va tra ve gia tri sau khi tang
 - x-- giam gia tri bien di 1 va tra ve gia tri truoc khi giam
 - --x giam gia tri bien di 1 va tra ve gia tri sau khi giam

 */

// vd:
// 1.a  Toan tu ++ lam hau to
console.log("___Toan tu ++ lam hau to___");

var number = 1;
number++;
console.log("number =", number); // 2
console.log("output =", number++); // 2
console.log("number =", number); // 3

number++;
console.log("number =", number); // 4
console.log("output =", number++); // 4
console.log("number =", number); // 5

// 1.b Toan tu ++ lam tien to
console.log("___Toan tu ++ lam tien to___");

var number = 1;
++number;
console.log("number =", number); // 2
console.log("output =", ++number); // 3
console.log("number =", number); // 3

++number;
console.log("number =", number); // 4
console.log("output =", ++number); // 5
console.log("number =", number); // 5

// 2.a  Toan tu -- lam hau to
console.log("___Toan tu -- lam hau to___");

var number = 1;
number--;
console.log("number =", number); // 0
console.log("output =", number--); // 0
console.log("number =", number); // -1

number--;
console.log("number =", number); // -2
console.log("output =", number--); // -2
console.log("number =", number); // -3

// 2.b Toan tu -- lam tien to
console.log("___Toan tu -- lam tien to___");

var number = 1;
--number;
console.log("number =", number); // 0
console.log("output =", --number); // -1
console.log("number =", number); // -1

--number;
console.log("number =", number); // -2
console.log("output =", --number); // -3
console.log("number =", number); // -3

// vd nang cao:
var a = 6;
var output_a = a++ * 2 - --a * 2;
console.log("a =", a);
console.log("output a la:", output_a);

var b = 10;
var output_b = b++ * 2 + ++b * 2 - b-- * 2 - --b * 2;
console.log("output b la:", output_b);

/** Lesson 5: Toan tu noi chuoi - String operator
 */

// vd:
var firstName = "Dang";
var lastName = "Lan";

console.log("firstName la:", firstName);
console.log("lastName la:", lastName);
console.log("Name la:", firstName + " " + lastName);

var name = "Dang";
name += "Lan";

console.log("Name:", name);

/** Lesson 6: Toan tu so sanh
 Toan tu
 ==             bang
 !=             khong bang
 >              lon hon
 >=             lon hon bang
 <              be hon
 <=             be hon bang
 */

// vd:]
// so sanh number
// var a = 1;
// var b = 2;
// so sanh string
var a = "Dang Thi Ngoc Lan";
var b = "Dang Thi Ngoc lan";

if (a == b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

if (a != b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

if (a > b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

if (a >= b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

if (a < b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

if (a <= b) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

/** Lesson 7: Kieu du lieu Boolean
 */
var a = 1;
var b = 2;
var isSuccess = a > b;
console.log(isSuccess);

/** Lesson 8: If - else
 *
 * JS co 6 gia tri sau khi convert sang boolean se la false
 * 0
 * false
 * '' - ""
 * undefined
 * NaN
 * null
 *
 * Khac 6 gia tri tren khi convert sang boolean se la true
 */
var age = 18;
var canBuyAlcohol = age >= 18;

if (canBuyAlcohol) {
  console.log("Du tuoi");
} else {
  console.log("Khong du tuoi");
}

var fullName = "Dang Thi Ngoc Lan";
if (fullName) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = 0;
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = false;
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = "";
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = "";
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = undefined;
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = NaN;
if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

var a = null;

if (a) {
  console.log("Dieu kien dung");
} else {
  console.log("Dieu kien sai");
}

/** Lesson 9: Toan tu logical
 * 1. &&  - And
 * 2. || - Or
 * 3. ! - Not
 */

var a = 1;
var b = 2;
var c = 3;

console.log("___Toan tu logical___");
if (a < 0 && b > 0 && c > 0) {
  console.log("Dieu kien dung");
}

if (a < 0 || b > 0) {
  console.log("Dieu kien dung");
}

if (!(a > 0)) {
  console.log("Dieu kien dung");
}
