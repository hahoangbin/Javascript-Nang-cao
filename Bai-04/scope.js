// # Closure 

// là một hàm có thể ghi nhớ nơi nó được tạo và truy cập được biến ở bên ngoài phạm vi của nó 

// ## Ứng dụng 
// - Viết code ngắn gọn hơn 
// - Biểu diễn, ứng dụng tính Private trong OOP

// ## Tóm tắt 

// ## Lưu ý
// - Biến được tham chiếu (refer) trong closure sẽ không được xóa khỏi bộ nhớ khi hàm cha thực thi xong 
// - Các khái niệm javascript nâng cao rất rễ gây hiểu nhầm 

// function createLogger(namespace) {
//     function logger(message) {
//         console.log(`[${namespace}] ${message}`)
//     }
//     return logger
// }

function createStorage(key){
    const store = JSON.parse(localStorage.getItem(key)) ?? {}

    const save = () => {
        localStorage.setItem(key, JSON.stringify(store))
    }

    const storage = {
        get(key) {
            return store[key]
        },
        set(key, value) {
            store[key] = value
            save()
        },
        remove(key) {
            delete store[key]
            save()
        }
    }

    return storage
}

const profileSetting = createStorage('profile_setting')

console.log(profileSetting.get('fullName'))

profileSetting.set('fullName', 'sown dawng')
profileSetting.set('age', 18)
profileSetting.set('address', 'ha noi')