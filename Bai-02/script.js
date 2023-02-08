// # IIFE - Immediately Function Expression 

// > Self-Invoking Function

// ---

// ## Nội dung 
    
    
// 1. IIFE trông như thế nào? OK
(function() {
    console.log("IIFE trông như thế nào !")
})()

// 2. Dùng dấu ; trước IIFE OK
let abc = "ha bin !"
console.log(abc)

;(function(ff) {
    console.log("IIFE", ff)
})('loveride')

// 3. IIFE là hàm "private" OK
let i = 0
;(function myFunction() {
    i ++
    console.log(i)

    if (i < 10) {
        myFunction()
    }
})()

// 4. Sử dụng IIFE khi nào ? OK

// 5. Các cách tạo ra một IIFE Ok
;(function(ff) {
    console.log("IIFE", ff)
})('loveride')

+(function(ff) {
    console.log("IIFE", ff)
})('loveride')

-(function(ff) {
    console.log("IIFE", ff)
})('loveride')

!(function(ff) {
    console.log("IIFE", ff)
})('loveride')

// 6. Ví dụ sử dụng IIFE 

const app = {
    cars: [],
    add(car) {
        this.cars.push(car)
    },
    edit(index, car) {
        this.cars[index] = car
    },
    delete(index) {
        this.cars.splice(index, 1)
    }
}

// Sử dụng IIFE
const acc = (function() {
    // private
    const cars = []
    return {
        get(index) {
            return cars[index]
        },
        add(car) {
            cars.push(car)
        },
        edit(index, car) {
            cars[index] = car
        },
        delete(index) {
            cars.splice(index, 1)
        }
    }
})()

// IIFE 


