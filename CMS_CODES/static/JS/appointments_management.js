const search_box = document.querySelector('.search-box')
const erase_btn = document.querySelector('.fa-eraser')
let selected_array = [], input_text = '', search_type = 'text'
const btns = Array.from(document.getElementsByTagName('button'))
const table_rows = Array.from(document.getElementsByTagName('tr'))

window.addEventListener('load', () => {
    btns.forEach(btn => {
        btn.addEventListener('click', (e) => {
            btns.forEach(btn => btn.classList.remove('active'))
            search_box.value = ''
            e.target.classList.add('active')
            search_box.type = e.target.dataset.type
            if (search_box.type === "number") {
                search_box.placeholder = "شماره تماس بیمار را وارد کنید..."
            } else {
                search_box.placeholder = "نام بیمار را وارد کنید..."
            }
            search_type = e.target.dataset.type
        })
    })
    search_box.addEventListener('input', (e) => {
        input_text = e.target.value.trim().toLowerCase()
        table_rows.forEach(row => {
            row.classList.remove('hide')
        })
        if (search_type === "text") {
            table_rows.forEach(row => {
                if (row.firstElementChild.textContent.toLocaleLowerCase().indexOf(input_text) === -1) {
                    row.classList.add('hide')
                }
            })    
        } else {
            table_rows.forEach(row => {
                if (row.lastElementChild.textContent.toLocaleLowerCase().indexOf(input_text) === -1) {
                    row.classList.add('hide')
                }
            }) 
        }
    })
})
erase_btn.addEventListener('click', () => {
    search_box.value = ''
    table_rows.forEach(row => {
        row.classList.remove('hide')
    })
})

// profile /\

const profile_btn = document.querySelector('.profile-box .head')
const profile_elements = document.querySelector('.profile-box .child-box')

window.addEventListener('click', e => {
    if (e.target.dataset.num < 5 ) {
        profile_elements.classList.toggle('active')
    } else {
        profile_elements.classList.remove('active')
    }
})