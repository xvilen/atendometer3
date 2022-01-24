let collagename=document.getElementById('collage-name')
let branch=document.getElementById('branch')
let semester=document.getElementById('semester')
let enrolmentno=document.getElementById('enrolmentno')
let idcard=document.getElementById('idcard')
let submit=document.getElementById('submit')
let validclgname= /^([0-9\w\s]+){0,40}$/;
let valclg = false
let valbranch = false
let valsemester = false
let validenrol = false

collagename.addEventListener('blur',()=>{
    if (validclgname.test(collagename.value)) {
        console.log(collagename.value);
        valclg = true
    }   
})
branch.addEventListener('blur',()=>{
    if (validclgname.test(branch.value)) {
        console.log(branch.value);
        valbranch = true
    }   
})
semester.addEventListener('blur',()=>{
    if (validclgname.test(semester.value)) {
        console.log(semester.value);
        valsemester = true
    }   
})
enrolmentno.addEventListener('blur',()=>{
    if (validclgname.test(enrolmentno.value)) {
        console.log(enrolmentno.value);
        validenrol = true
    }   
    if (valclg==true&&valbranch==true&&valsemester==true&&validenrol==true) {
       document.getElementById('su').setAttribute('href','main.html')
    }
})

submit.addEventListener('click',(e)=>{
    if (valclg==true&&valbranch==true&&valsemester==true&&validenrol==true) {
        localStorage.setItem('Collage Name',collagename.value)
        localStorage.setItem('Branch',branch.value)
        localStorage.setItem('Semester',semester.value)
        localStorage.setItem('Enrollment',enrolmentno.value)
        e.preventDefault()
        alert('sucessfully created account   please login to your account')
        window.location.href='index.html'
    }
    else{
        alert('something wnet wrong')
        e.preventDefault()
    }
})