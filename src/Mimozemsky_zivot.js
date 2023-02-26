
const today = dayjs()
const coronation = dayjs('2023-05-06')
const pageTitle = document.querySelector('#coronation')

if (today.isAfter(coronation)) {
    pageTitle.textContent = "Ano"
} else {
    pageTitle.textContent ="Ne"
}
