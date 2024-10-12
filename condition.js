/**
 * Hiểu hơn về câu lệnh điều kiện
 * Hiểu hơn về phép so sánh
 */

var a = 1;
var b = 2;

//Truyền biến trực tiếp

// if(a < b) {
//   console.log('A < B');
// } else {
//   console.log('A >= B');
// }
'-----------------------------------------------------'
//Truyền biến gián tiếp

// var result = a < b;
// if(result) {
//   console.log('A < B');
// } else {
//   console.log('A >= B');
// }
'-----------------------------------------------------'
/* 6 GIÁ TRỊ FALSY
 *
 * 1. 0 (số 0)
 * 2. '' (chuỗi rỗng)
 * 3. null
 * 4. undefined
 * 5. NaN
 * 6. false (vd: biểu thức sai)
*/
'-----------------------------------------------------'
/**
 * Có những phép so sánh trả về boolean nhưng có trường hợp không trả về boolean, sau đây là ví dụ
 */

// var result = a < b && a < 0;
// console.log(result); //Output: false
/**
 * Output: false, không phải do toán tử logic && trả về false,
 * mà là do a<0 là falsy
 */
'-----------------------------------------------------'
// var result = 'A' && 'B' && 'C';
// console.log(result); //Output: C

/**
 * Cả 3 ông A B C đều là truthy nên quét tới ông cuối thì xuất ra ông cuối
 *
 * Nếu đang quét giữa đường gặp 1 trong 6 giá trị falsy thì
 * sẽ pick ông falsy đó xuất ra Output, sau đây là ví dụ:
 */
'-----------------------------------------------------'
//TOÁN TỬ &&: quét từ trái sang phải, nếu lúc quét ko gặp falsy, khi quét tới cuối thì xuất ra thằng truthy cuối, trong lúc quét gặp falsy giữa đường thì xuất thằng falsy đó ra output.
'-----------------------------------------------------'
var result = 'A' && 'B' && 'C';
console.log(result); //Output: C

if(result) {
  console.log('DIEU KIEN DUNG');
} else {
  console.log('DIEU KIEN SAI');
} //Output: DIEU KIEN DUNG ; vì không có falsy
'-----------------------------------------------------'
var result = 'A' && NaN && 'C';
console.log(result); //Output: NaN

if(result) {
  console.log('DIEU KIEN DUNG');
} else {
  console.log('DIEU KIEN SAI');
} //Output: DIEU KIEN SAI
'-----------------------------------------------------'
//TOÁN TỬ ||: ngược với AND, gặp falsy là né, hễ đụng thằng truthy đầu tiên là pick thằng truthy đó xuất ra luôn
'-----------------------------------------------------'
var result = 'A' || 'B' || 'C';
console.log('Logic ||: ',result); //Output: A

if(result) {
  console.log('DIEU KIEN DUNG');
} else {
  console.log('DIEU KIEN SAI');
} //Output: DIEU KIEN DUNG
'-----------------------------------------------------'
var result = null || 0 || 'C';
console.log('Logic ||: ',result); //Output: C
'-----------------------------------------------------'
var result = '' || false || 0;

if(result) {
  console.log('DIEU KIEN DUNG');
} else {
  console.log('DIEU KIEN SAI');
} //Output: DIEU KIEN SAi
