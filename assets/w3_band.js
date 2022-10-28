function change1() {
    document.getElementById("dialog-modal").showModal()
}

function closeDialog() {
    document.getElementById("dialog-modal").close()
}

function SenT() {
    let a = document.getElementById("name-text").value
    document.getElementById("input-name").innerHTML = a
    let b = document.getElementById("email-text").value
    document.getElementById("input-email").innerHTML = b
    let c = document.getElementById('mes-text').value
    document.getElementById('input-message').innerHTML = c
}


//Pay start

class Buy {
    number;
    money;
    place;


    constructor(number, money, place) {
        this.number = number;
        this.money = number * 15;
        this.place = place;
    }

}

let NY = new Buy(1, 1 * 15, "New York")

let buy = []
let divShow = document.getElementById("show")

function show() {
    let str = ""
    for (let i = 0; i < buy.length; i++) {
        str += `<tr class="mt-8">
                       <th>Ticket</th>
                       <th>Money(Dollar$)</th>
                       <th>Place</th>
                       </tr>
                       
                       <tr>
                       <td id="1">${buy[i].number}</td>
                       <td id="2">${buy[i].money} </td>
                       <td id="3">${buy[i].place}</td>
                       <td><button onclick="edit(${i})">Edit</button></td>
                       <td><button onclick="xoa(${i})">Delete</button></td>
                   </tr>`
    }
    divShow.innerHTML = str


}

show()

function edit(index) {
    let number = prompt('num')
    let money = number * 15
    let place = prompt('place')
    let newObj = new Buy(number, money, place)

    buy.splice(index, 1, newObj)
    show()
}

function Pay() {
    let number = document.getElementById('ticket-quantity').value
    let place = document.getElementById('ticket-email').value
    let money= number * 15
    let newObj = new Buy(number, money, place)
    let i = 0




    buy.splice(i,1,newObj)



    alert("You was bought a ticker")

    show()
    document.getElementById('dialog-modal').close()

}

function xoa(index) {
    buy.splice(index, 1)
    show()
}



let myIndex = 0;
let sliders = document.getElementsByClassName('mySlider');

function carousel() {
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].style.display = "none";
    }
    sliders[myIndex].style.display = "block";
    myIndex++;
    if (myIndex === sliders.length) {
        myIndex = 0;
    }
}

setInterval(carousel, 3000)
// // let e = document.getElementById('email').value
// //
// // function Send() {
// //     document.getElementById('Result').innerHTML="welcome to band family"
// }