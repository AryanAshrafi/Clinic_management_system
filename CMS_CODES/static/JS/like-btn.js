const like_btn = document.querySelectorAll('.fa-heart')
let random_number

window.addEventListener('load', () => {
    like_btn.forEach(btn => {
        random_number = Math.floor(Math.random() * 40) +12
        btn.nextElementSibling.innerHTML = random_number
    })
})



    like_btn.forEach(btn => {
        btn.addEventListener('click', (e) => {

            e.target.nextElementSibling.classList.toggle('liked')
            if (e.target.nextElementSibling.classList.contains('liked')) {
                // console.log(e.target.nextElementSibling.innerHTML)
                e.target.nextElementSibling.innerHTML++
            } else {
                e.target.nextElementSibling.innerHTML--
            }
            btn.classList.toggle('liked')
        })
    })
