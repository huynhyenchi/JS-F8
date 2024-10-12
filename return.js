// RETURN TRONG HÀM

/*
var isConfirm = confirm('Do you love me?');
// Trong khi popup hiện ra thì những đoạn code đằng sau nó không được thực thi sau khi người dùng nhập "OK" hay "Cancel"
console.log(isConfirm);
*/

function sum(a, b) {
  console.log(123);
  return a+b;
  //Nếu mất từ return, console trả về undefined.
  //Và nếu khai báo result bên trong hàm rồi gọi result ngoài hàm kết quả sẽ trả về undefined vì result có scope là cục bộ, nghĩa là nó chỉ được truy cập bên trong hàm đó thôi.
}
var result = sum(1, 1)
console.log(result)

/*
1. Nếu không có return, console sẽ trả về undefined.
2. Trong cùng một function, những dòng code bên dưới return sẽ bị bỏ qua.
3. Confirm alert rồi mấy dòng code sau đó mới chạy
*/

function str(a, b) {
  var x = 'Yến Chi năm nay ' + a.toString() + b.toString() + ' tuổi!'
  return x;
}
var result = str(2, 0)
console.log(result)
