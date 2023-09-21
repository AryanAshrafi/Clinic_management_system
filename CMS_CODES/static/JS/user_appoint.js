let show_modal_btn = document.querySelectorAll('.btn-success')
const appoint_modal_container = document.querySelector('.appoint_modal_container')
const appoint_modal = document.querySelector('.appoint_modal')
const time_box = document.querySelector('.print_time .time')
const close_btn = document.querySelector('.fa-times')
const contentRow = document.querySelectorAll('.row')

let date = new Date();
let day, month

// console.log(date.getDate());
let userName, doctorName, app_date = ''
show_modal_btn.forEach(btn => {
    btn.addEventListener('click', (e) => {
        userName = e.target.parentElement.parentElement.firstElementChild.textContent;
        doctorName = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.textContent
        app_date = e.target.parentElement.parentElement.firstElementChild.nextElementSibling.nextElementSibling.textContent
    
        modal_maker(userName, doctorName, app_date)
    })
})

function modal_maker(name, doctor, time) {
    appoint_modal_container.classList.add('show')
    setTimeout(() => {
        appoint_modal.classList.add('show_modal')        
    }, 100);
    day = (String(date.getDate()).padStart(2, "0"))
    month = (String(date.getMonth()+1).padStart(2, "0"))
    time_box.innerHTML = `${date.getFullYear()} / ${day} / ${month}` 
    contentRow[1].innerHTML = name
    contentRow[3].innerHTML = doctor
    contentRow[5].innerHTML = time
}

close_btn.addEventListener('click', () => {
    appoint_modal_container.classList.remove('show')
    appoint_modal.classList.remove('show_modal')        
})