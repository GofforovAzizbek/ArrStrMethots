// Oson (Easy):
// 1-
// const arr = [1, 2, 3, 4, 5];
// const result = arr.reverse();
// console.log(result); // [5, 4, 3, 2, 1]

// 2-
// const str = "hello";
// const result = str.toUpperCase();
// console.log(result); // "HELLO"

// 3-
// const arr = [1, 2, 3];
// arr.push(5);
// console.log(arr); // [1, 2, 3, 4]

// 4-
// const arr = [7, 8, 9];
// const result = arr.length;
// console.log(result); // 3

// 5-
// const str = "Hello World";
// const result = str.replace("World", "JavaScript");
// console.log(result); // "Hello JavaScript"

// 6-
// const arr = [4, 5, 6];
// const result = arr[0];
// console.log(result); // 4

// 7-
// const str = "Uzbekistan";
// const result = str.length;
// console.log(result); // 10

// 8-
// const arr = [2, 3, 4];
// arr.unshift(1);
// console.log(arr); // [1, 2, 3, 4]

// 9-
// const str = "JAVASCRIPT";
// const result = str.toLowerCase();
// console.log(result); // "javascript"

// 10-
// const arr = ["apple", "banana", "cherry"];
// const result = arr.join(", ");
// console.log(result); // "apple, banana, cherry"

// O'rta daraja (Medium):
// 1-
// const arr = [5, 2, 9, 1, 7];
// const result = arr.sort((a, b) => a - b);
// console.log(result); // [1, 2, 5, 7, 9]

// 2-
// const str = "apple, banana,cherry";
// const result = str.split(",").map(item => item.trim());
// console.log(result); 
// // ["apple", "banana", "cherry"]

// 3-
// const arr = [1, 2, 3, 4, 5];
// const result = arr.includes(3);
// console.log(result); 
// // true

// 4-
// const str = "Javascript";
// const result = str.substring(0, 4);
// console.log(result); 
// // "Java"

// 5-
// const arr = [1, 2, 3, 4, 5, 6];
// const result = arr.filter(n => n % 2 === 0);
// console.log(result); 
// // [2, 4, 6]

// 6-
// const str = "hello world";
// const result = str.includes("world");
// console.log(result); // true

// 7-
// const arr = [10, 20, 30, 40];
// const result = arr.indexOf(30);
// console.log(result); // 2

// 8-
// const arr = [1, 2, 3, 4, 5];
// const result = arr.slice(1, 3);
// console.log(result); // [2, 3]

// 9-
// const arr = [5, 10, 15];
// const result = arr.reduce((sum, n) => sum + n, 0);
// console.log(result); // 30

// 10-
// const str = "123-456-789";
// const result = str.replaceAll("-", " ");
// console.log(result); // "123 456 789"

// 11-
// const arr = [1, 5, 3, 9, 2];
// const result = Math.max(...arr);
// console.log(result); // 9

// 12-
// const arr = ["orange", "apple", "banana"];
// const result = arr.sort();
// console.log(result); 
// // ["apple", "banana", "orange"]

// 13-
// const arr = [2, 4, 6];
// const result = arr.every(n => n % 2 === 0);
// console.log(result); 
// // true

// 14-
// const str = "javascript";
// const result = str.split("").reverse().join("");
// console.log(result); 
// // "tpircsavaj"

// 15-
// const arr = [1, 2, 3, 4];
// const result = arr.map(n => n + 2);
// console.log(result); 
// // [3, 4, 5, 6]

// Murakkab (Hard):
// 1-
// const str = "madam";
// const result = str === str.split("").reverse().join("");
// console.log(result);
// // true

// 2-
// const arr = [1, 2, 3, 4, 5, 6, 7, 8];
// const N = 3;

// const result = arr
//   .slice()
//   .sort(() => Math.random() - 0.5)
//   .slice(0, N);

// console.log(result);
// // Masalan: [3, 5, 7]

// 3-
// const str = "apple banana apple orange banana aaaaaaaaaaaaaa";
// const result = [...new Set(str.split(" "))];
// console.log(result);
// // ["apple", "banana", "orange"]

// 4-
// const arr = [1, [2, 3], [4, [5, 6]]];
// const result = arr.flat(Infinity);
// console.log(result);
// // [1, 2, 3, 4, 5, 6]

// 5-
// const str = "hello world from javascript";
// const result = str
//   .split(" ")
//   .map(word => word[0].toUpperCase() + word.slice(1))
//   .join(" ");

// console.log(result);
// // "Hello World From Javascript"
