/**
 * Kiểu dữ liệu
 * 1. Dữ liệu nguyên thủy - Primitive Data
 *    - Number
 *    - String
 *    - Boolean
 *    - Undefined
 *    - Null
 *    - Symbol
 *
 * 2. Dữ liệu phức tạp - Complex Data
 *    - Function
 *    - Object
 */

//Number
var a = 1
var b = 2
var c = 2.5

//String
var fullName = 'Chi Huynh'
console.log(typeof fullName)
//Boolean
var isSuccess = true

//Undefined
var nothing

//Null (cũng là kiểu Object)
var isNull = null
console.log(typeof isNull)

//Symbol
var id = Symbol('id') //unique
var id2 = Symbol('id') //unique
console.log(typeof id)

//Function
var myFunction = function() {
  alert('Hi')
}
//call: myFunction();
console.log(typeof myFunction)

//Object: mở và đóng NGOẶC NHỌN, bên trong chứa key(trước hai chấm) và value(sau hai chấm), key + value = property(thuộc tính)
var myObject = {
  name: 'Yến Chi',
  age: 20,
  address: 'Ho Chi Minh City',
};
console.log('myObject', myObject)
console.log(typeof myObject)

//Array (cũng là kiểu Object): mở và đóng NGOẶC VUÔNG
var myArray = [
  'tôi',
  'muốn',
  'làm',
  'người',
  'bình',
  'thường'
];
console.log('myArray', myArray)
console.log(typeof myArray)
