const form_item = document.querySelectorAll('.form-input')
const form_item_array = Array.from(form_item)
const form_item_label = document.getElementsByTagName('label')
const form_item_label_array = Array.from(form_item_label)

window.addEventListener('load', () => {
    for (let i = 0; i < form_item.length; i++) {
        setTimeout(() => {
            form_item[i].classList.add('show')
        }, i * 250 + 100);
    }
})
window.addEventListener('load', () => {
    for (let i = 0; i < form_item_label.length; i++) {
        setTimeout(() => {
            form_item_label[i].classList.add('show')
        }, i * 250);
    }
})

const number_field = document.querySelectorAll('.num')

number_field.forEach(box => {
    box.addEventListener('keydown', e => {
        if ((e.code.slice(0, 3) !== 'Num' && e.code !== 'Backspace') || (e.code === 'Backslash' || e.code === 'NumpadDivide' ||
            e.code === 'NumpadMultiply' || e.code === 'NumpadSubtract' || e.code === 'NumpadAdd' ||
            e.code.slice(0, 10) === 'NumpadDeci')) {
            e.preventDefault()
        }
    })
})


let err_box = document.querySelector('.alert')

window.addEventListener('load', () => {
    if (err_box.innerHTML.indexOf('equ') > -1) {
        err_box.classList.add('error')
        err_box.innerHTML = ""
        err_box.insertAdjacentHTML('afterbegin', `
    <button type="button" class="m1-2 mb-1 close" data-dismiss="alert" aria-label="Close">
      <span aria-hidden="true">×</span>
    </button>
    رمز عبور به درستی تکرار نشده!
    `)
    }
})