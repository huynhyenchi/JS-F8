/**
 * Một số hàm built-in
 *  1. alert (box thbao chỉ có mỗi chữ Ok)
 *  2. console (là 1 đối tượng dùng để debug trong quá trình học) log, warn, error
 *  3. confirm (box thbao có chữ Ok và chữ Cancel/Hủy)
 *  4. prompt (giống confirm và có thêm input để nhập chữ)
 *  5. setTimeout (cho 1 đoạn code được chạy sau 1 khoảng thời gian)
 *  6. setInterval (chỉ hiển thị trong console)
 */
var hoVaTen = 'Huynh Yen Chi';
console.log(hoVaTen)

confirm('Bạn có trên 18 tuổi không?');

prompt('Nhập tên của bạn')
setTimeout(function() {
  alert('Đây là hàm setTimeout')
}, 1000) // 1500 là 1500 mili giây

// setInterval(function() {
//   console.log('Đây là hàm setInterval' + Math.random())
// }, 1000)
