/*
LÀM VIỆC VỚI MẢNG

1. toString : khoải giải thík
2. join : convert array thành chuỗi
3. pop : lấy rồi xóa cuối, trả về độ dài mới
4. push : thêm vào cuối mảng, trả về độ dài mới
5. shift : lấy rồi xóa đầu, trả về độ dài mới
6. unshift : thêm vào đầu mảng, trả về độ dài mới
7. splicing : có thể xóa - cắt - chèn phần tử
8. concat : nối 2 array
9. slice : cắt rồi in ra 1 hoặc vài element của mảng nhưng không làm thay đổi mảng sau khi slice, có thể cắt toàn mảng
*/
'-----------------------------------------------------------'
// 1. toString()
var languages = [
  'JavaScript',
  'PHP',
  'Ruby',
]

console.log(languages.toString());
// Output: JavaScript,PHP,Ruby
// Được ngăn cách nhau bởi dấu phẩy, không thể thay đổi dấu phẩy ấy được, muốn đối dấu phẩy sang dấu khác thì sử dụng: join()

'-----------------------------------------------------------'
// 2. join()

// split() : chuỗi -> array
// join()  : array -> chuỗi
console.log(languages.join()) // Output: JavaScript,PHP,Ruby

// Nếu truyền vào 1 chuỗi rỗng, thì mảng sẽ hiểu đây là ký tự ngăn cách các phần tử trong chuỗi -> bị dính liền nhau
console.log(languages.join('')) // Output: JavaScriptPHPRuby

'-----------------------------------------------------------'
// 3. pop() : lấy rồi xóa cuối, trả về độ dài mới
console.log(languages.pop()) // Output: Ruby
console.log(languages) // Output: (2) ['JavaScript', 'PHP']
console.log(languages.shift()) // Output: JavaScript
console.log(languages) // Output: ['PHP']

// Nếu mảng đã hết phần tử rồi mà vẫn cứ pop thì trả về undefined

'-----------------------------------------------------------'
// 4. push() : thêm vào cuối mảng, trả về độ dài mới
console.log(languages.push('Dart', 'Java')); // Output: 3
console.log(languages); // Output: (3) ['PHP', 'Dart', 'Java']

'-----------------------------------------------------------'
// 5. shift() : lấy rồi xóa đầu, trả về độ dài mới
console.log(languages.shift()); // Output: PHP
console.log(languages.shift()); // Output: Dart
console.log(languages.shift()); // Output: Java
console.log(languages); // Output: []

console.log(languages.shift()); // Output: undefined
console.log(languages); // Output: []

// VD thực tế: Có danh sách sản phẩm, mỗi sản phẩm là 1 phần tử của mảng. Chức năng xóa sp thì cần biết khi nào không còn sản phẩm để xóa.

'-----------------------------------------------------------'
// 6. unshift() : thêm vào đầu mảng, trả về độ dài mới
var favFood = [
  'cơm mẹ nấu',
  'zô li bi',
  'gà sốt bơ tỏi Texas'
];
console.log(favFood.unshift('gà rán'));
console.log(favFood); // Output: (4) ['gà rán', 'cơm mẹ nấu', 'zô li bi', 'gà sốt bơ tỏi Texas']

'-----------------------------------------------------------'
// 7. splicing() : có thể xóa - cắt - chèn phần tử

// XÓA: ['gà rán', 'cơm mẹ nấu', 'zô li bi', 'gà sốt bơ tỏi Texas']

// tham số 1 (start: number) : truyền chỉ mục mình muốn bắt đầu trỏ tới
// tham số 2 (deleteCount?: number) : số lượng element muốn xóa
favFood.splice(0, 1) // trỏ vào 'gà rán' và xóa 1 mình nó
console.log(favFood) // Output: (3) ['cơm mẹ nấu', 'zô li bi', 'gà sốt bơ tỏi Texas']

// nếu splice(0, 2) tức là trỏ vào index 0 -> xóa nó và thằng index 1 kế bên

// Không xóa thằng nào thì: splice(0, 0) -> dùng trong trường hợp CHÈN

// CHÈN:
favFood.splice(0, 0, 'gà rán') // số 0 thứ hai quyết định có xóa ông index0 ko và xóa mấy ông -> khum xóa ai cạ
console.log(favFood) // Output: ['gà rán', 'cơm mẹ nấu', 'zô li bi', 'gà sốt bơ tỏi Texas']

// THAY THẾ:
favFood.splice(0, 1, 'replaced gà rán')
console.log(favFood)

'-----------------------------------------------------------'
// 8. concat() : nối 2 array
/*
favFood = [
'replaced gà rán',
'cơm mẹ nấu',
'zô li bi',
'gà sốt bơ tỏi Texas'
];
*/
var favFood2 = [
  'phở bò kho',
  'bánh Huế',
  'pani puri'
]
console.log(favFood2);
console.log(favFood.concat(favFood2)) // ez hè hè

'-----------------------------------------------------------'
// 9. slice : cắt rồi in ra 1 hoặc vài element của mảng NHƯNG KHÔNG LÀM THAY ĐỔI MẢNG SAU KHI slice(), có thể cắt toàn mảng

console.log(favFood.slice(0, 1)) // start: 0, end: 1 - đầu chỉ mục 1 ; Output: ['replaced gà rán']
console.log(favFood.slice(-4, -3)) // Output: ['replaced gà rán']
console.log(favFood.slice(1)) // Output: ['cơm mẹ nấu', 'zô li bi', 'gà sốt bơ tỏi Texas']
