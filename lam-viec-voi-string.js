/**
 * 57. LÀM VIỆC VỚI CHUỖI
 */



// Keyword: JavaScript String Methods

// 1. Length
var myString = 'Yen Chi xin chao';
console.log(myString.length); //output: 16
'-----------------------------------------------------'

// 2. Find index : Ngoài ra còn có phương thức search(), tuy nhiên:
// Khác 1: search() không hỗ trợ cách 2.
// Khác 2: search() hỗ trợ tìm kiếm theo BIỂU THỨC CHÍNH QUY
var myString2 = 'Yen Chi xin chao Huynh Chi Chi Chi';

//Cách 1
console.log(myString2.indexOf('Chi')) //output: 4 ; Nhiều từ giống nhau trong chuỗi nhưng indexOf chỉ trả về từ đầu tiên mà nó tìm thấy, còn lại nó không trả về, nếu muốn trả về thì nhập cú pháp sau:

//Cách 2
console.log(myString2.indexOf('Chi', 7)) // output: 23 ; 5 hay 7 đều OK ; nếu muốn tìm từ Chi cuối cùng thì sao? Xem cú pháp dưới đây:

//Cách 3
console.log(myString2.lastIndexOf('Chi')) //output: 31 ; nếu viết thêm chữ 'Chi' nữa thì nó sẽ tính chữ Chi cuối cùng ; không tìm được thì cũng trả về -1

console.log(myString2.indexOf('Elaina')) // không có trong chuỗi -> output: -1
'-----------------------------------------------------'

// 3. Cut string
var myString3 = 'Yen Chi xin chao.';
// Cắt chữ 'Yen'
console.log(myString3.slice(0, 3)) //output: Yen

// Cắt chữ 'chao'
//dù tối đa 15 ký tự nhưng cắt ký tự cuối cùng là 15 phải nhảy thêm 1 index nữa mới cắt được ký tự cuối
// chữ c trong chữ 'chao' ở index 12 -> start: 12
console.log(myString3.slice(12, 16)) // output: chao

//Cắt từ một chữ đến hết
console.log(myString3.slice(4)) // output: Chi xin chao.

// Cắt từ đầu tới cuối chuỗi
console.log(myString3.slice(0)) // output: Yen Chi xin chao.

// Cắt 1 từ, từ phải sang trái: ...-3 -2 -1 0
console.log(myString3.slice(-5, -1)) // output: chao
'-----------------------------------------------------'

// 4. Replace
var myString4 = 'Chi xin chao Chi Chi Chi';

//Basic level
console.log(myString4.replace('Chi', 'Elaina'))

//Case có nhiều chữ Chi bị trùng lặp -> sử dụng biểu thức chính quy (regular expression)
console.log(myString4.replace(/Chi/g, 'Elaina')); // 2 dấu gạch dùng để định nghĩa biểu thức chính quy ; g được gọi là global flags (cờ tìm kiếm toàn cục)
'-----------------------------------------------------'

// 5. Convert to uppercase
// 6. Convert to lowercase
var myString5 = 'Hoc JS tai F8';
console.log(myString5.toUpperCase());
console.log(myString5.toLowerCase());
'-----------------------------------------------------'

// 7. Trim: xử lý dữ liệu nhập vào của user (nhập thừa space đầu cuối)
var myString7 = '          Hoc JS tai F8     ';
console.log(myString7.trim().length); //output: 13
'-----------------------------------------------------'

// 8. Split: Cắt một chuỗi thành 1 array
//Basic level
var languages = 'JavaScript, PHP, Ruby, Python, Golang'; //string
console.log(languages.split(', ')); //string -> array
//output: (5) ['JavaScript', 'PHP', 'Ruby', 'Python', 'Golang']

//Cắt từng ký tự của 1 từ
var languages2 = 'PHP';
console.log(languages2.split(''));
//output: (3) ['P', 'H', 'P']
'-----------------------------------------------------'

// 9. Get a character by index
const myString9 = 'huynhyenchi' //length: 10
// Cách 1
console.log(myString9.charAt(4)); //output: h
console.log(myString9.charAt(11)); //output: chuỗi rỗng
console.log(typeof myString9.charAt(11)); //output: string : chuỗi rỗng

// Cách 2
console.log(myString9[7]) //output: n
console.log(myString9[11]) //output: undefined
console.log(typeof myString9[11]) //output: undefined (bold hơn)
'-----------------------------------------------------'
// Done bài này thì research thêm nhiều method khác rồi bổ sung vào list trên
