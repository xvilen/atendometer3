let signup=document.getElementById('signup')
let login = document.getElementById('login')
signup.addEventListener('click',(e)=>{
    window.location.href='signup.html'
    console.log('heyyy');
    e.preventDefault()
})
login.addEventListener('click',(e)=>{
    let username = document.getElementById('username')
    let password = document.getElementById('password')
    var uname=localStorage.getItem('username')
    var pword=localStorage.getItem('password')
    
    if (username.value==uname&&password.value==pword) {
        alert('login sucessfull')
        e.preventDefault()
        window.location.href='main.html'
    }
    else{
        alert('invalid username and pasword')
        document.getElementById('small').innerText=`incorrect username password`
    }
    
}
)
console.log(uname,pword);
