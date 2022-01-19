const inputs = document.querySelectorAll(".input");
const contactFrom = document.querySelector('.contact-form');
let name = document.getElementById('name');
let email = document.getElementById('email');
let subject = document.getElementById('subject');
let message = document.getElementById('message');

function focusFunc() {
    let parent = this.parentNode;
    parent.classList.add("focus");
}

function blurFunc() {
    let parent = this.parentNode;
    if (this.value == "") {
        parent.classList.remove("focus");
    }
}

inputs.forEach((input) => {
    input.addEventListener("focus", focusFunc);
    input.addEventListener("blur", blurFunc);
});

contactFrom.addEventListener('submit',(e)=>{
    e.preventDefault();

    let formData = {
        name: name.value,
        email: email.value,
        subject: subject.value,
        message: message.value,
    }



    let xhr = new XMLHttpRequest();
    xhr.open('POST', '/');
    xhr.setRequestHeader('content-type','application/json');

    xhr.onload = function (){
        console.log(xhr.responseText);
        if (xhr.responseText== 'success'){
            alert('Votre message à Jerance à été adréssé avec succès !');
        }
        if (xhr.responseText =='error'){
            name.value = "";
            email.value = "";
            subject.value = "";
            message.value = "";
            alert('Vous avez mal rempli votre Message !')
        }
    }


    xhr.send(JSON.stringify(formData))
})
