//TOÁN TỬ LOGIC

var result = 'A' && 'B' && 'C' && 'D'
console.log(result) //Output: D
/**
 * Nhưng nếu 1 trong những giá trị trên nằm trong
 * 6 giá trị dưới thì lấy giá trị đó gán vào result và trả về
 * ngay lập tức không đếm xỉa tới những ông phía sau nó nữa
 */

/**
 * 6 Giá Trị Convert Sang Boolean Sẽ Được Hiểu Là False
 * 1. 0
 * 2. ''
 * 3. null
 * 4. undefined
 * 5. NaN
 * 6. false
 */
var ketqua = 'A' && 'B' && 'C' && 'D'
if(ketqua) {
  console.log('DIEU KIEN DUNG')
} else {
  console.log('DIEU KIEN SAI')
}








//TOÁN TỬ SO SÁNH = P2

/**
 * ===
 * !==
 */

// var a = 1
// var b = '1'
// console.log(a == b)
// console.log(a === b)
// ==  : chỉ quan tâm value của 2 biến (đều bằng 1)
// === : so sánh cả value cả data type (called so sánh tuyệt đối)

// console.log(a != b)
// console.log(a !== b)

// var c = 1
// var d = 2

// var result = c<d
// console.log("result", result)
