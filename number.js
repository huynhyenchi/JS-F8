/*
Kiểu số (Number) trong JavaScript

1. Tạo giá trị Number
    - Các cách tạo
    - Nên dùng cách nào? Tại sao?: 2 cách
    - Kiểm tra data type: typeof

2. Làm việc với Number
    - toString()
    - toFixed
 */
'-----------------------------------------------------------'
// 1. Tạo giá trị Number
// Cách 1 tạo number
var age = 20;
var PI = 3.14;

var result = 20 / 'ABC';
console.log(result); // Output: NaN (màu xanh): đại diện 1 số không hợp lệ

console.log(typeof result); // Output: number, vẫn là kiểu số nhưng không hợp lệ

console.log(result == NaN); // Cùng output NaN nhưng so sánh (cả tương đối và tuyệt đối) thì ra kết quả : false (màu xanh). Có 1 cách để kiểm tra biến NaN, đó là: isNaN()

console.log(isNaN(result)) // Output: true

// Cách 2
var otherNumber = new Number(9);
// Tránh cách sử dụng từ khóa "new" -> tạo object, rườm rà, sai typeof

console.log(typeof age, typeof PI); // output: number number
console.log(typeof otherNumber); // output: object

'-----------------------------------------------------------'
// 2. Làm việc với Number

// toString()
console.log(age.toString()); // Output: 20 (màu đen kiểu String)
console.log(typeof age.toString()); // Output: string
console.log(age); // Output: 20 (màu tím xanh)

//toFixed
console.log(PI.toFixed());
// Output: 3 (giá trị sau dấu chấm >=5 thì sẽ làm tròn lên 4)
// Khi không truyền số nào vào ngoặc toFixed thì mặc định nó sẽ hiểu là số 0
console.log(typeof PI.toFixed()); // Output: string

var num = 3000.23534645453543;
console.log(num.toFixed()); //Output: 3000

// Khi muốn rút gọn biến num ngắn hơn thì:
console.log(num.toFixed(3)); //Output: 3000.235
console.log(num.toFixed(2)); //Output: 3000.24 (35 làm tròn lên 4)
