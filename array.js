/*
MẢNG TRONG JAVASCRIPT

1. Tạo mảng
  - Các cách tạo
  - Nên dùng cách nào? Tại sao?
  - Kiểm tra data type
2. Truy xuất mảng
  - Độ dài mảng
  - Lấy phần tử theo index
*/
'-----------------------------------------------------------'
// 1. Tạo mảng

// Cách 1
var languages = [
  'JavaScript',
  'C++',
  'Ruby',
  'Golang',
  20,
  null,
  undefined,
  function (){

  },
  {}
];
console.log(languages)

// Cách 2: tạo bằng object: Không khuyến cáo sử dụng, vì nó tạo ra 1 instance, thực thi chậm hơn
var languages2 = new Array( //không cần []
  'JavaScript',
  'C++',
  'Ruby',
  'Golang',
  20,
  null,
  undefined,
  function (){

  },
  {}
);
console.log(languages2)

// Kiểu dữ liệu của Array là object (check typeof cả 2 cách)
console.log(typeof languages) // Output: object
console.log(typeof languages2) // Output: object
console.log(typeof {}) // Output: object
console.log(typeof []) // Output: object

// Làm sao phân biệt được đâu là 1 array?
// Kiểm tra Array: isArray()
console.log(Array.isArray([])) // Output: true (màu tím xanh)

console.log(Array.isArray(languages)) // Output: true (màu tím xanh)
console.log(Array.isArray(languages2)) // Output: true (màu tím xanh)
console.log(Array.isArray(new Array)) // Output: true (màu tím xanh)

// Kiểm tra Object
console.log(Array.isArray({})) // Output: false (màu tím xanh)

'-----------------------------------------------------------'
// 2. Truy xuất mảng

// Độ dài mảng
console.log(languages.length) // Output: 9

// Lấy phần tử theo index(index=key)
console.log(languages[3]) //Output: Golang
