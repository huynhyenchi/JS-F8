// CÁC LOẠI HÀM

/*
    1. Declaration function: hàm khai báo, định nghĩa trực tiếp
    2. Expression function: hàm biểu thức, phải được gán vào 1 biến
    3. Arrow function (nâng cao sẽ học sâu hơn phần này)
*/
'-----------------------------------------------------'
// 1. Cách khai báo 1 function đơn thuần
declarationFunction(); // <-- Hoisting - di chuyển các khai biến/hàm lên trên đầu trước khi định nghĩa biến/hàm

function declarationFunction() { // bắt buộc phải đặt tên cho function
    console.log('Declaration function');
}
'-----------------------------------------------------'
// 2. Expression function
var expressionFunction = function testName() { // function được gán cho 1 biến
    console.log('Expression function 1');
};
expressionFunction();

// 2. Expression function
setTimeout(function testName() {
    console.log('Expression function 2');
}, 2000);

// 2. Expression function
var myObject = {
    myFunction: function testName() {
    //myFunction là 1 property ; tên testName dùng để gọi đệ quy, thường không cần thiết đối với hàm biểu thức -> function() : anonymous function
    }
}

// --> VIỆC ĐẶT TÊN CHO EXPRESSION FUNCTION KHÔNG CÓ MỤC ĐÍCH GÌ KHÁC NGOÀI ĐỂ CHO NÓ DỄ HIỂU CHỨC NĂNG CỦA NÓ LÀM GÌ

//Sự khác biệt: Hoisting
