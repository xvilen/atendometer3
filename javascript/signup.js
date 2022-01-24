let validname = /^([a-zA-Z]){2,10}$/;
let validemail = /^([_\-\.0-9a-zA-Z]+)@([_\-\.0-9a-zA-Z]+)\.([a-zA-Z]){2,30}$/;
let validuname = /^([_\-\.0-9a-zA-Z]){2,15}$/;
let validpassword = /^([@#$%&*a-zA-Z0-9]){7,30}$/
let fname = document.getElementById('fname')
let lname = document.getElementById('lname')
let email = document.getElementById('email')
let uname = document.getElementById('username')
let password = document.getElementById('password')
let confirmpassword = document.getElementById('confirmpassword')
let signup = document.getElementById('signup')
let login = document.getElementById('login')
let validfn = false
let validln = false
let validem = false
let validun = false
let validps = false
let jsonstorage = {
    firstname: "",
    lastname: "",
    username: "",
    emailaddress: "",
    passwords: ""
}
window.localStorage
fname.addEventListener('blur', () => {

    console.log(validname.test(fname.value));
    if (validname.test(fname.value) == true) {
        jsonstorage.firstname = fname.value
        validfn = validname.test(fname.value)
    }
    else {
        validfn = false
    }
})
lname.addEventListener('blur', () => {
    console.log(validname.test(lname.value));
    if (validname.test(lname.value)) {
        jsonstorage.lastname = lname.value
        validln = true
    }
    else {
        validln = false
    }


})
email.addEventListener('blur', () => {
    console.log(validemail.test(email.value));
    if (validemail.test(email.value)) {
        jsonstorage.emailaddress = email.value
        validem = true
    }
    else {
        validem = false
    }
})
uname.addEventListener('blur', () => {
    console.log(validuname.test(uname.value));
    if (validuname.test(uname.value)) {
        jsonstorage.username = uname.value
        validun = true
    }
    else {
        validun = false
    }
})
password.addEventListener('blur', () => {
    console.log(validpassword.test(password.value));

})
confirmpassword.addEventListener('blur', () => {
    console.log(validpassword.test(confirmpassword.value));
    if (validpassword.test(confirmpassword.value)) {
        if (password.value == confirmpassword.value) {
            console.log(password.value == confirmpassword.value);
            jsonstorage.passwords = password.value
            validps = true

        }
        else {
            validps = false
        }

    }
    else {
        alert('please enter same password in confirm password')
        validps = false
    }
    console.log(jsonstorage);

   
})
signup.addEventListener('click', (e) => {
    if (validfn == true && validln == true && validem == true && validun == true && validps == true) {
        localStorage.setItem('firstname', fname.value)
        localStorage.setItem('lastname', lname.value)
        localStorage.setItem('email', email.value)
        localStorage.setItem('username', uname.value)
        localStorage.setItem('password', confirmpassword.value)
        
e.preventDefault()
window.location.href='info.html'
    } else {
        alert('enter wrong')
        e.preventDefault()
    }
})

login.addEventListener('click',(e) => {
    e.preventDefault()
    window.location.href = 'index.html'
})