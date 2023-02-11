// "use strict";

// báo lỗi khi gán lại giá trị cho thuộc tính xó writable: false
const student = Object.freeze({
    fullName: "nguyen van a"
})

student.fullName  = "a b c "

console.log(student)

// báo lỗi khi hàm có tham số trùng tên
function sum( a,a) {
    return a + a
}

console.log(sum(6, 9))

// khai báo hàm trong code block thì hàm sẽ thuộc phạm vi code block
{
    function sum(a, b) {
        return a + b + a
    }
}
console.log(sum(9, 6))

// không đặt tên biến tên hàm bằng một số từ khóa nhạy cảm của ngôn ngữ 
const private = 113

console.log(private)