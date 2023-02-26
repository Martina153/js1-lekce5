/*const stedryDen = dayjs('2022-12-24')
const today = dayjs()

if (today.isAfter(stedryDen)) {
    alert('Bohuzel si Vanoce promeskal')
} else {
    alert('Vanoce pred nami')
} */


/*const userEmail = prompt("Zadej svuj email: ")
const emailValidation = validator.isEmail(userEmail)
const messageElement = document.querySelector('#msg')

if (emailValidation="True") {
    messageElement.textContent = 'E-mail v pořádku'
    messageElement.classList.add('msg--valid')


} else {
    messageElement.textContent = 'Neplatný e-mail'
    messageElement.classList.add('msg--invalid')
} */


/*const email = prompt('Zadejte váš e-mail')

const isEmail = validator.isEmail(email)
const messageElement = document.querySelector('#message')

if (isEmail) {
	messageElement.textContent = 'E-mail v pořádku'
	messageElement.classList.add('msg--valid')
} else {
	messageElement.textContent = 'Neplatný e-mail'
	messageElement.classList.add('msg--invalid')
} */

/*const userEmail = prompt("Zadej svoj email: ")
const validationEmail = validator.isEmail(userEmail)
const message = document.querySelector('#message')

if (validationEmail) {
    message.textContent = 'Your email has been validated!'
    message.classList.add('msg--valid')

} else {
    message.textContent = 'Your email has been not validated!'
    message.classList.add('msg--invalid') 
} */

// 3 types how we can type the function, use the third one 

/*const mojeFunkce() {
    console.log("Volani z moji funkce")
}

const mojeDruhaFunkce = function() {

} */

/*const plochaTrojuhelniku = (width, height) => {
    return (width*height)/2

}

console.log(plochaTrojuhelniku(20,19)) */

/*const overeniDelkyHesla = (password) => {
    if (password.length >12) {
        console.log("Heslo je bezpecne")
    } else {
        console.log("Heslo nie je bezpecne")
    }
}
const overeniHesla = () => {
    if(password=='1234556') {
        console.log('ok')
    } else {
        console.log(' not ok') 
    }
}
overeniDelkyHesla('mojeheslonkefked') */ 
const pi = Math.PI
const elipseArea = (width, height) => {
    return ((width/2)*(height/2))*pi
}
console.log(elipseArea(1,2))





