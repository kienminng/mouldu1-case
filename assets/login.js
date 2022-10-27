// const  formLogin = document.querySelectorAll('.form-text input')
// const  formLabel = document.querySelectorAll('.form-text label')
// for (let i=0 ; i<2;i++){
//     formLogin[i].addEventListener('mouseover',function (){
//         formLabel[i].classList.add('focus')
//     })
//     formLogin[i].addEventListener('mouseover',function (){
//         if (formLogin[i].value=""){
//             formLabel[i].classList.remove('focus')
//
//         }
//     })
//
// }

// let modal = document.getElementById('dialog-login')
// window.onclick= function (event) {
//     // modal.style.display="none"
// }

function Login() {
    document.getElementById('login-window').style.display= 'block'

}
function registerAccount(){
    document.getElementById('register').style.display = 'block'
    console.log("ok")

}

function closeR() {
    document.getElementById('register').style.display='none'
    document.getElementById('login-window').style.display= 'block'

}

function closeL() {
    document.getElementById('login-window').style.display= 'none'

}

// function Check() {
//
//     let a = document.getElementById('account').value
//     let b = document.getElementById('password').value
//     for (let i=0;i<account.length;i++){
//         if (a===account[i]){
//             for (let j=0 ; j<password.length;j++){
//                 if (password.indexOf(b)!=-1) {
//                     console.log("thanh cong")
//                     alert('welcome back user ' + account[i])
//                     document.getElementById('login-window').style.display='none'
//                     document.getElementById('dangNhap').style.display='none'
//                     document.getElementById('signOut').style.display='block'
//                     document.getElementById('result').innerHTML="Welcome" + account[i]
//                     break;
//                 } else {
//                     alert('pls try again')
//                     break
//                 }
//
//             }
//
//         } else {
//             // document.getElementById('login-window').style.display= 'block'
//             document.getElementById('rp').innerHTML='pls try again'
//             break;
//         }
//     }
// }
//

// console.log("hello world")
//
// function Addnew() {
//
//     let newAcc = document.getElementById('name-Account').value
//     let newPass = document.getElementById('createPassword').value
//
//     for (let i=0 ; i<account.length;i++){
//         if (newAcc!=account[i]){
//             for (let j =0;j<password.length;j++){
//                 if (newPass!=password[i]) {
//
//                     account.push(newAcc)
//                     password.push(newPass)
//                     alert('new account was added')
//                     document.getElementById('register').style.display = 'none'
//                     break
//
//                 } else {
//                     alert('pls try again')
//                 }
//             }
//         } else {
//             alert('pls try again')
//         }
//     }
//
//     return account,password
//
//
// }