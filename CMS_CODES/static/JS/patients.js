const text = "لطفاً وارد حساب کاربری خود شوید"
const text2 = "اگر عضو نیستید میتوانید اکانت خود را ایجاد کنید"
let current_text = ''
let current_text2 = ''
let end = 1
let end2 = 1

setTimeout(() => {
    function auto_typing() {
        current_text = text.slice(0, end)
        if (end <= text.length) {
            end++
        }
        document.querySelector('.auto1').innerHTML = current_text
    }
    setInterval(auto_typing, 100);
}, 300)

setTimeout(() => {
    function auto_typing2() {
        current_text2 = text2.slice(0, end2)
        if (end2 <= text2.length) {
            end2++
        }
        document.querySelector('.auto2').innerHTML = current_text2
    }
    setInterval(auto_typing2, 80);
}, 4800);

