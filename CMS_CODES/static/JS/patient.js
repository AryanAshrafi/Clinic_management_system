const unit_btns_right = document.querySelector('.right-sidebar').children
const unit_btns_left = document.querySelector('.left-sidebar').children
const content_items = document.querySelectorAll('.unit-info-box')
const default_item = document.querySelector('.default-item')

window.addEventListener('load', () => {
    for (let i = 0; i < unit_btns_right.length; i++) {
        setTimeout(() => {
            unit_btns_right[i].classList.add('show')
        }, 150 * i + 100);
    }
})
window.addEventListener('load', () => {
    for (let i = 0; i < unit_btns_left.length; i++) {
        setTimeout(() => {
            unit_btns_left[i].classList.add('show')
        }, 150 * i + 100);
    }
})

const btns = Array.from(unit_btns_right)
const btns2 = Array.from(unit_btns_left)

btns.forEach(item => {
    item.addEventListener('click', (e) => {
        default_item.style.display = 'none'
        for (let j = 0; j < content_items.length; j++) {
            content_items[j].className = 'unit-info-box'
        }
        content_items[(e.target.dataset.id) - 1].classList.add('active')
    })
})
btns2.forEach(item => {
    item.addEventListener('click', (e) => {
        default_item.style.display = 'none'
        for (let j = 0; j < content_items.length; j++) {
            content_items[j].className = 'unit-info-box'
        }
        content_items[(e.target.dataset.id) - 1].classList.add('active')
    })
})

// PROFILE
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