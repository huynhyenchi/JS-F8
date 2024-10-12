// THAM SỐ HÀM

/**
 * 1. Tham số?
 *    - Định nghĩa?
 *    - Kiểu dữ liệu? -> không giới hạn
 *    - Tính private? -> chỉ chạy được trong function đó
 *    - 1 tham số -> VD1
 *    - Nhiều tham số -> VD2: Nếu có
 *      2 tham số mà chỉ truyền 1 đối
 *      số thì vẫn chạy được, đối số
 *      không được truyền sẽ là undefined
 *
 * 2. Truyền tham số
 *    - 1 tham số
 *    - Nhiều tham số
 *
 * 3. Argument (Đối số)
 *    - Đối tượng arguments
 *    - Giới thiệu vòng for of
 */

//VD1
function writeLog(message) {
  console.log(message)
  console.log(typeof message)
}
writeLog("Huỳnh Yến Chi");

//VD2
function writeLog2(name, year_birth) {
  console.log(name, year_birth)
}
writeLog2('Huỳnh Yến Chi', 2004);

//VD3: Đối số
function arg() {
  console.log(arguments)
}
arg('log 1', 'log 2', 'log 3');

//VD4: for ( of )
function loop() {
  for(var param of arguments) { //arguments đang là 1 array, chứa các elements có trong sự gọi hàm bên dưới
    console.log(param)
  }
}
loop('Huỳnh', 'Yến', 'Chi');

//VD5: in ra 1 dòng log cách nhau bằng dấu gạch ngang
function loop2() {
  var myString = '';
  for(var param of arguments) { //arguments đang là 1 array, chứa các elements có trong sự gọi hàm loop2 bên dưới
    myString += `${param} - `
  }
  console.log(myString)
}
loop2('Huỳnh', 'Yến', 'Chi', 'Mục', 'Tiêu', 'Đi', 'Sài', 'Gòn');
