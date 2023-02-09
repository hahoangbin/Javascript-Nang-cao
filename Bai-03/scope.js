// # Scope - Phạm vi

// - Các loại phạm vi: 3 loại phạm vi
//     - Global - Toàn cầu
//     - Code block- Khối mã lest/const
//     - Local scope - Hàm var/function

// - Khi gọi mỗi hàm luôn có một phạm vi mới được tạo 
// - Các hàm có thể truy cập các biến được khai báo trong phạm vi của nó và bên ngoài nó 
// - Cách thức một biến được truy cập 
// - Khi nào một biến bị xóa khỏi bộ nhớ ?
//     - Biến toàn cầu ?
//     - Biến trong code block & trong hàm ?
//     - Biến trong hàm được tham chiếu bởi một hàm ?

//     ___

// ## tóm tắt 

// var message = "bien global bien toan cau !"

// console.log(message)
 
// function logger() {
//     console.log(message)
// }logger()


// {
//     const age = 18
//     console.log(age)
//     // code block / bien chi su dung duoc trong ngoac nhon
// }

//  pham vi cua ham 
// pham("sown", "dawng")
// function pham(age, a) {
//     console.log(age, a)

//     const message = "113"
//     function pham2() {

//         console.log(message)
//     }
//     pham2()
// }

// pham("sown", "dawng")
// pham("sown", "tttt")
// const age = 10
// {
//     {
//         const age = 8
//         {
//             {
//                   const age = 6
//                   console.log(age)
//             }
//         }
//     }
// }

// function logger() {
//     const rand = Math.random()
//     console.log(rand)
// }
// logger()

function makeCouter() {
    let couter = 0 

    function increase() {
        return ++couter
    }

    return increase
}

const increase2222 = makeCouter()

console.log(increase2222())
console.log(increase2222())
console.log(increase2222())
console.log(increase2222()) // biến được tham chiếu thì không bị xóa