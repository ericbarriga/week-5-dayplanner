let now = moment();

$(document).ready(function () {
    $("#currentDay").append(moment().format("MMMM Do YYYY, "))

})
// 9am
const storage = document.querySelector('.storage')
const text = document.querySelector('.text')
const btn = document.querySelector('.button')
//10am
const storage1 = document.querySelector('.storage1')
const text1 = document.querySelector('.text1')
const btn1 = document.querySelector('.button1')
// 11 am 
const storage2 = document.querySelector('.storage2')
const text2 = document.querySelector('.text2')
const btn2 = document.querySelector('.button2')
//12 am
const storage3 = document.querySelector('.storage3')
const text3 = document.querySelector('.text3')
const btn3 = document.querySelector('.button3')
//1pm
const storage4 = document.querySelector('.storage4')
const text4 = document.querySelector('.text4')
const btn4 = document.querySelector('.button4')
//2pm
const storage5 = document.querySelector('.storage5')
const text5 = document.querySelector('.text5')
const btn5 = document.querySelector('.button5')
//3 pm
const storage6 = document.querySelector('.storage6')
const text6 = document.querySelector('.text6')
const btn6 = document.querySelector('.button6')
// 4 pm
const storage7 = document.querySelector('.storage7')
const text7 = document.querySelector('.text7')
const btn7 = document.querySelector('.button7')
// 5 pm
const storage8 = document.querySelector('.storage8')
const text8 = document.querySelector('.text8')
const btn8 = document.querySelector('.button8')


storage1.addEventListener('input', letters => {
    text1.textContent = letters.target.value
})



// 9am

btn.addEventListener('click', (e) => {
    console.log(storage.value);

    localStorage.setItem('currentHour', storage.value);
})

if (localStorage.getItem('currentHour')) {
    text.textContent = localStorage.getItem('currentHour')
}

storage.addEventListener('input', letters => {
    text.textContent = letters.target.value
})
// 10 am 
btn1.addEventListener('click', (e) => {
    console.log(storage1.value);
    localStorage.setItem('currentHour1', storage1.value);
})

if (localStorage.getItem('currentHour')) {
    text1.textContent = localStorage.getItem('currentHour1')
}
storage1.addEventListener('input', letters => {
    text1.textContent = letters.target.value
})

//11am
btn2.addEventListener('click', (e) => {
    console.log(storage2.value);
    localStorage.setItem('currentHour2', storage2.value);
})

if (localStorage.getItem('currentHour2')) {
    text2.textContent = localStorage.getItem('currentHour2')
}
storage2.addEventListener('input', letters => {
    text2.textContent = letters.target.value
})

// 12 pm 
btn3.addEventListener('click', (e) => {
    console.log(storage3.value);
    localStorage.setItem('currentHour3', storage3.value);
})

if (localStorage.getItem('currentHour3')) {
    text3.textContent = localStorage.getItem('currentHour3')
}

storage3.addEventListener('input', letters => {
    text3.textContent = letters.target.value
})

// 1 pm
btn4.addEventListener('click', (e) => {
    console.log(storage4.value);
    localStorage.setItem('currentHour4', storage4.value);
})

if (localStorage.getItem('currentHour4')) {
    text4.textContent = localStorage.getItem('currentHour4')
}

storage4.addEventListener('input', letters => {
    text4.textContent = letters.target.value
})

// 2 pm 
btn5.addEventListener('click', (e) => {
    console.log(storage5.value);
    localStorage.setItem('currentHour5', storage5.value);
})

if (localStorage.getItem('currentHour5')) {
    text5.textContent = localStorage.getItem('currentHour5')
}

storage5.addEventListener('input', letters => {
    text5.textContent = letters.target.value
})

// 3 pm
btn6.addEventListener('click', (e) => {
    console.log(storage6.value);
    localStorage.setItem('currentHour6', storage6.value);
})

if (localStorage.getItem('currentHour6')) {
    text6.textContent = localStorage.getItem('currentHour6')
}

storage6.addEventListener('input', letters => {
    text6.textContent = letters.target.value
})

// 4 pm
btn7.addEventListener('click', (e) => {
    console.log(storage1.value);
    localStorage.setItem('currentHour7', storage7.value);
})

if (localStorage.getItem('currentHour7')) {
    text7.textContent = localStorage.getItem('currentHour7')
}

storage7.addEventListener('input', letters => {
    text7.textContent = letters.target.value
})

// 5 pm
btn8.addEventListener('click', (e) => {
    console.log(storage8.value);
    localStorage.setItem('currentHour8', storage8.value);
})

if (localStorage.getItem('currentHour8')) {
    text8.textContent = localStorage.getItem('currentHour8')
}

storage8.addEventListener('input', letters => {
    text8.textContent = letters.target.value
})


//let currentTime = moment() /////////////

let current_time = moment().format("HH:mm")

let nine_hours = moment().format("09:59")
let ten_hours = moment().format("10:59")
let elven_hours = moment().format("11:59")
let twelve = moment().format("12:59")
let one_hour = moment().format("13:59")
let two = moment().format("14:59")
let three = moment().format("15:59")
let four = moment().format("16:59")
let five = moment().format("17:59")
let nineSlot = document.querySelector('.nine')
let tenSlot = document.querySelector('.ten')
let elevenSlot = document.querySelector('.eleven')
let twelveSlot = document.querySelector('.twelve')
let oneSlot = document.querySelector('.one')
let twoSlot = document.querySelector('.two')
let threeSlot = document.querySelector('.three')
let fourSlot = document.querySelector('.four')
let fiveSlot = document.querySelector('.five')
const li = document.querySelectorAll('li')

/*if (current_time > nine_hours) {

    $(document).ready(function () {
        $(li).css({ backgroundColor: 'green' });
    });
}*/


$(document).ready(function () {
    $(nineSlot).css({ backgroundColor: '#ccc' });
    if (current_time > nine_hours) {

        $(document).ready(function () {
            $(nineSlot).css({ backgroundColor: '#ffcccb' });
        });
    }
});


$(document).ready(function () {
    $(tenSlot).css({ backgroundColor: '#ccc' });
    if (current_time > ten_hours) {

        $(document).ready(function () {
            $(tenSlot).css({ backgroundColor: 'red' });
        });
    }
});


$(document).ready(function () {
    $(elevenSlot).css({ backgroundColor: '#ccc' });
    if (current_time > elven_hours) {

        $(document).ready(function () {
            $(elevenSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(twelveSlot).css({ backgroundColor: '#ccc' });
    if (current_time > twelve) {

        $(document).ready(function () {
            $(twelveSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(oneSlot).css({ backgroundColor: '#ccc' });
    if (current_time > one_hour) {

        $(document).ready(function () {
            $(oneSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(twoSlot).css({ backgroundColor: '#ccc' });
    if (current_time > two) {

        $(document).ready(function () {
            $(twoSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(threeSlot).css({ backgroundColor: '#ccc' });
    if (current_time > three) {

        $(document).ready(function () {
            $(threeSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(fourSlot).css({ backgroundColor: '#ccc' });
    if (current_time > four) {

        $(document).ready(function () {
            $(fourSlot).css({ backgroundColor: 'red' });
        });
    }
});

$(document).ready(function () {
    $(fiveSlot).css({ backgroundColor: '#ccc' });
    if (current_time > five) {

        $(document).ready(function () {
            $(fiveSlot).css({ backgroundColor: 'red' });
        });
    }
});
