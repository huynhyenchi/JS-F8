/**
 * 55. KIỂU DỮ LIỆU CHUỖI (string)
 *
 * 1. Tạo chuỗi
 *    - Các cách tạo chuỗi
 *    - Nên dùng cách nào? Lí do?
 *    - Kiểm tra data type
 * 2. Một số case sử dụng backslash (\)
 * 3. Xem độ dài chuỗi
 * 4. Chú ý độ dài khi viết code
 * 5. Template String ES6
 */

/**
 * 1. Tạo chuỗi:
 *
 *  - Nên dùng cách 1.
 *  - Cách 2 dài dòng hơn (học nâng cao: khởi tạo 1 đối tượng -> tạo instance)
 *  - Kiểu dữ liệu các Dev không mong muốn: ví dụ typeof fullName2 -> object
 */
var fullName = 'Huynh Yen Chi'; //C1
var fullName2 = new String('Chi Huynh');

console.log(fullName); //output: Huynh Yen Chi
console.log(fullName2); //output: String {'Chi Huynh}
console.log(typeof fullName2); //output: object

/**
 * 2. The backslash is an escape character in JS
 */

var sentence = 'Lập trình thật là \"dễ\".';
console.log(sentence);

/**
 * 3. Xem độ dài chuỗi
 */
console.log(fullName.length) //length là 1 property

/**
 * 4. Độ dài khi viết code
 */
var str = 'Chú ý độ dài khi viết code'
+ ' 1. Chú ý độ dài khi viết code'
+ ' 2. Chú ý độ dài khi viết code'
+ ' 3. Chú ý độ dài khi viết code'
;
console.log(str)

/**
 * 5. Template String ES6
 */
// Rối ren ver.
var firstName = 'Chi';
var lastName = 'Huỳnh';
console.log('Tôi là ' + firstName + ' ' + lastName);

// Phiên bản ES6 - ĐƯỢC GỌI LÀ TEMPLATE STRING
console.log(`Tôi là ${firstName} ${lastName}`);
//Giá trị đưa vào phải là String, nếu không phải là String thì sẽ được tự động convert sang String
