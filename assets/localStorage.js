let email = ['kien', 'w3' , 'codegym']
let password = ['123','132','312']



function Addnew(){
    event.preventDefault();
    let email = document.getElementById('name-Account').value
    let password = document.getElementById('createPassword').value
    let user = {
        email : email,
        password : password,
    }

    let json = JSON.stringify(user)
    localStorage.setItem(email,json)
    localStorage.setItem(password,json)
    alert('dang kí thành công')
    document.getElementById('register').style.display='none'
}

function Check() {

    let email = document.getElementById('account').value
    let password = document.getElementById('password').value
    console.log(email + password)
    let user = localStorage.getItem(email)
    let data = JSON.parse(user)

    if (user == null) {
        alert('pls try  again')
    } else if (email == data.email && password == data.password) {
        alert('welcome back')
        document.getElementById('login-window').style.display = "none"
        document.getElementById('dangNhap').style.display = 'none'
        document.getElementById('signOut').style.display='block'
        document.getElementById('result').innerHTML = "welcome back"+ email
    }
}

function signout() {
    document.getElementById('result').style.display='none'
    document.getElementById('account').value = ""
    document.getElementById('password').value = ""
    document.getElementById('dangNhap').style.display = 'block'
    document.getElementById('signOut').style.display = 'none'

}