/*
LÀM VIỆC VỚI MẢNG

1. toString
2. join
3. pop : xóa cuối rồi trả
4. push
5. shift : xóa đầu rồi trả
6. unshift
7. splicing
8. concat
9. slicing
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
// 3. pop() : xóa phần tử ở cuối mảng, và trả về mảng sau khi bị xóa
console.log(languages.pop()) // Output: Ruby
console.log(languages) // Output: (2) ['JavaScript', 'PHP']
console.log(languages.shift())
console.log(languages)

// Nếu mảng đã hết phần tử rồi mà vẫn cứ pop thì trả về undefined

'-----------------------------------------------------------'
// 4. push()
console.lo
