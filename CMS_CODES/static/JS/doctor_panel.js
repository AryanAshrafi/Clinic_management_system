const table_body = document.querySelector('.table_body')
const table_container = document.querySelector('.table-container')

window.onload = () => {
    if (!(table_body.children.length)) {
        table_container.innerHTML = ''
        table_container.insertAdjacentHTML('afterbegin', `
            <div class="empty-box">
                <img src="/static/images/box.png" alt="empty-box">
                <h5>هیچ وقت ملاقاتی برای شما رزرو نشده</h5>
            </div>
        `)
        table_body.style.transform = "translateY(100px)"
    }
}
console.log(table_body);