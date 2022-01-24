let nameenroll = document.getElementById('nameenroll')
let firstname = localStorage.getItem('firstname')
let lastname = localStorage.getItem('lastname')
let table = document.getElementById('table')
let Enrolment =localStorage.getItem('Enrollment')
let syllabusapi={
    "it" : {
        "1" :{"BT-101":" Engineering Chemistry",
            "BT-102":" Mathematics-I",
            "BT-103":"  English for Communication",
            "BT-104":" Basic Electrical & Electronics Engineering",
            "BT-105":"Engineering Graphics"
        },
        "2" :{
            "BT-201":"  Engineering Physics",
            "BT-202":" Mathematics-II",
            "BT-203":"Basic Mechanical Engineering",
            "BT-204":"Basic Civil Engineering & Mechanics",
            "BT-205":"Basic Computer Engineering"
        },
        "3" :{
            "ES-301":"Energy & Environmental Engineering",
            "IT-302":"Discrete Structure",
            "IT-303":"  Data Structure",
            "IT-304":"Object Oriented Programming & Methodology",
            "IT-305":"Digital Circuits & System"
        },
        "4" :{
            "BT-401":"Mathematics-III",
            "IT-402":"Computer Architecture",
            "IT-403":"Analysis and Design of Algorithm",
            "IT-404":"Analog & Digital Communication",
            "IT-405":"Database Management System"
        },
    
        "5" :{
            "IT-501":"Operating System",
            "IT-502":" Computer Network",
            "IT-503":"Theory of Computation",
            "IT-504":" E Commerce & Governance"
            
        },
        "6" :{
            "IT-601":" Computer Graphics & Multimedia",
            "IT-602":"Wireless and Mobile Computing",
            "IT-603":"Compiler Design",
            "IT-604":"Wireless Sensor Networks"
            
        },
    }
}
let int = localStorage.getItem('Semester')
let k=[]
let v=[];
for (const [key, value] of Object.entries(syllabusapi.it[localStorage.getItem('Semester')])) {
    v.push(value)
    k.push(key)
    
  }
nameenroll.innerHTML=`${Enrolment}${firstname} ${lastname}`

let sr=` <tr class="headimg " >
<th>SRC</th>
<th class="sub">SUBJECT</th>
<th>SUBJECT CODE</th>
<th class="time">TIMING</th>
<th>STATUS</th>
</tr>`
for (let i = 0; i < k.length; ) {
    let keys = k[i];
    console.log('i=',i);
    
    for (let j = 0; j <= i; ) {
        if (i==j) {
            
            const values = v[j];
            console.log('j=',j);
            let time = 11+i
            let timeend = 12+i
            if (time>12) {
                time = time-12
            }
            if (timeend>12) {
                timeend=timeend-12
            }
            sr += `<tr>
            <td>${j+1}</td>
            <td>${k[i]}</td>
            <td>${v[j]}</td>
            <td>${time}:00AM-${timeend}:00PM</td>
            <td class="butten ">
                <a href="attendance.html" style="text-decoration: none;"> <button type="button " class="bt "></button></a>
            </td>
            </tr>`
        }
        j++
    }
    i++
    
}

table.innerHTML = sr