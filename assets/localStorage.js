function Addnew() {
    event.preventDefault();
    let email = document.getElementById('name-Account').value
    let password = document.getElementById('createPassword').value
    let name = document.getElementById('User-Account').value
    let number = document.getElementById('ticket-quantity').value
    let place = document.getElementById('ticket-email').value
    let money= number * 15
    let bill = {
        number : number,
        place : place,
        money : money
    }
    let user = {
        email: email,
        password: password,
        name: name,
        bill : bill
    }

    let listKey = []
    listKey.push(user)

    let json = JSON.stringify(user)

    localStorage.setItem(email, json)
    alert('Đăng kí thành công')
    document.getElementById('register').style.display = 'none'
}


function Check() {

    let email = document.getElementById('account').value
    let password = document.getElementById('password').value
    let name = document.getElementById('User-Account').value


    let user = localStorage.getItem(email)
    let data = JSON.parse(user)
    console.log(data)

    if (email == null) {
        alert('pls try  again')
    } else if (email == data.email && password == data.password) {
        alert('welcome back')
        document.getElementById('login-window').style.display = "none"
        document.getElementById('dangNhap').style.display = 'none'
        document.getElementById('signOut').style.display = 'block'
        document.getElementById('result').innerHTML = "welcome back " + data.name
        document.getElementById('input-name').innerHTML = data.name
        document.getElementById('input-email').innerHTML = data.email
        document.getElementById('input-message').innerHTML = data.password

        let ticker = new Buy(data.bill.number, data.bill.money, data.bill.place)
        buy.splice(0,1,ticker)
        show()
    }
}

function Save() {
    event.preventDefault();
    let email = document.getElementById('input-email').value
    let password = document.getElementById('input-message').value
    let name = document.getElementById('input-name').value
    let number = document.getElementById('ticket-quantity').value
    let place = document.getElementById('ticket-email').value
    let money = number * 15
    let bill = {
        number: number,
        money: money,
        place: place
    }
    let user = {
        email: email,
        password: password,
        name: name,
        bill: bill
    }

    // let listKey=[]
    //
    // number =true
    // if (number<=0) {
    //     alert("pls buy ticket")
    //     return false
    // }

    // email.splice(3,1,bill)


    let json = JSON.stringify(user["bill"])

    localStorage.setItem(email,json)

    alert("your bill was saved")
}


function signout() {
    document.getElementById('result').style.display = 'none'
    document.getElementById('account').value = ""
    document.getElementById('password').value = ""
    document.getElementById('dangNhap').style.display = 'block'
    document.getElementById('signOut').style.display = 'none'
    document.getElementById('input-message').value = ""
    document.getElementById('input-email').value = ""
    document.getElementById('input-name').value=""

    buy = []
    show()

}