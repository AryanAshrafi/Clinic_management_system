const time_input = document.querySelectorAll('.time-input')
const phone_input = document.querySelectorAll('.phone')
const form_btn = document.querySelector('.btn-success')
let CT = new Date()  //  CT = current time
let year, month, day = ''

phone_input.forEach(ph => {
    ph.type = "tel"
    ph.pattern = "[0]{1}[0-9]{10}"
    ph.addEventListener('keydown', e => {
        if (e.code.slice(0, 6) !== 'Numpad' && e.code !== 'Backspace') {
            e.preventDefault()
        }
    })
})

time_input.forEach(inp => {
    inp.type = "date"

    inp.addEventListener('change', () => {
        year = +inp.value.slice(0, 4)
        month = Number(inp.value.slice(5, 7))
        day = Number(inp.value.slice(8))
    
        form_validator(year, month, day, inp)
    })    
})

function form_validator(y, m, d, inp) {
    if (y < 2023 || ( y === 2023 && m < CT.getMonth()+1 || (m === (CT.getMonth()+1) && y === 2023 && d <= CT.getDate()))) {
        alert('زمان انتخابی صحیح نیست!')
        inp.value = ''
    } else if (y > 2023 || (y === 2023 && m > CT.getMonth()+3)) {
        alert('زمان انتخابی خیلی دور است!!')
        inp.value = ''
    }
}