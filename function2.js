//MỘT SỐ ĐIỀU CẦN BIẾT VỀ FUNCTION

/*
1. Khi function đặt trùng tên ?
2. Khai báo biến trong hàm ?
3. Định nghĩa hàm trong hàm ?
*/

//Q1: sẽ bị ghi đè
function showMessage() {
  console.log('A')
}
function showMessage() {
  console.log('B')
}
function showMessage() {
  console.log('C')
}
showMessage();
//Khi hai(hoặc nhiều hơn) function trùng tên, thì function sau sẽ ghi đè function trước.
//Ví dụ này không áp dụng trong thực tế.

//Q2: có thể khai báo biến trong hàm, nhưng phạm vi sử dụng cũng chỉ được ở trong hàm.
function showMessage2() {
  var fullName = 'Chi Huynh'
  console.log(fullName) //hiển thị
}
showMessage2();  // không hiển thị

//Q3: Có thể định nghĩa hàm trong hàm
function showMessage3() {
  function showMessage4() {
    console.log('Message 4');
  }
  showMessage4(); // Nếu chỉ gọi 1 trong 2 hàm showMessage4 và showMessage3 thì sẽ KHÔNG HIỂN THỊ
}
showMessage3(); // Nên là phải gọi cả hai hàm 3 và 4
