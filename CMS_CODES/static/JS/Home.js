let drops = document.querySelectorAll('.drop')
drops[0].addEventListener('mouseenter', () => {
    drops[1].classList.toggle('disactive')
    drops[2].classList.toggle('disactive')
})
drops[0].addEventListener('mouseleave', () => {
    drops[1].classList.toggle('disactive')
    drops[2].classList.toggle('disactive')
})
drops[1].addEventListener('mouseenter', () => {
    drops[0].classList.toggle('disactive')
    drops[2].classList.toggle('disactive')
})
drops[1].addEventListener('mouseleave', () => {
    drops[0].classList.toggle('disactive')
    drops[2].classList.toggle('disactive')
})
drops[2].addEventListener('mouseenter', () => {
    drops[0].classList.toggle('disactive')
    drops[1].classList.toggle('disactive')
})
drops[2].addEventListener('mouseleave', () => {
    drops[0].classList.toggle('disactive')
    drops[1].classList.toggle('disactive')
})

// social media 
const contact_btn = document.querySelector('.contact-btn')
const medias = document.querySelectorAll('.media')
const contact_ways = document.querySelectorAll('.contact-ways')
contact_btn.addEventListener('click', () => {
    medias[0].classList.toggle('telMove')
    medias[1].classList.toggle('insMove')
    medias[2].classList.toggle('twMove')
    medias[3].classList.toggle('yotMove')

    contact_ways[0].classList.toggle('locMov')
    contact_ways[1].classList.toggle('envMov')
    contact_ways[2].classList.toggle('phonMov')
})

//preLoad
const preLoad_container = document.querySelector('.preLoad-container')
const big_container = document.querySelectorAll('.mainPageContainer')[0]

window.addEventListener('load', () => {
    setTimeout(() => {
        big_container.classList.add('load')
        preLoad_container.style.display = 'none'
    }, 3000);
})