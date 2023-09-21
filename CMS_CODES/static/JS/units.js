const doctors_number_box = document.querySelector('.doctors_number')
const cards = document.querySelectorAll('.card-container .card')

window.onload = () => {
    doctors_number_box.innerHTML = "تعداد پزشکان این بخش : " + cards.length
}

// profile

const profile_btn = document.querySelector('.profile-box .head')
const profile_elements = document.querySelector('.profile-box .child-box')

// profile_btn.addEventListener('click', () => {
//     profile_elements.classList.toggle('active')
// })
window.addEventListener('click', e => {
    if (e.target.dataset.num < 5 ) {
        profile_elements.classList.toggle('active')
    } else {
        profile_elements.classList.remove('active')
    }
})

// search box 

const search_box = document.querySelector('.search-box')
const erase_btn = document.querySelector('.fa-eraser')
let selected_array = [], input_text = ''

window.addEventListener('load', () => {
    // const doctors_list_items = document.querySelectorAll('.doctor_name')
    // const doctors_list_array = Array.from(doctors_list_items)
    // const card_field = document.querySelector('.card-container')

    search_box.addEventListener('input', (e) => {
        // console.log(5);
        input_text = e.target.value.trim().toLowerCase()
        cards.forEach(card => {
            card.classList.remove('hide')
        })
        cards.forEach(card => {
            if (card.firstElementChild.nextElementSibling.nextElementSibling.textContent.toLocaleLowerCase().indexOf(input_text) === -1) {
                card.classList.add('hide')
            }
        })
    })
})
