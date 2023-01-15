// function validateform() {
//     let name = document.getElementById("name")
//     let nameErroe = document.getElementById("nameErroe")
//     let email = document.getElementById("email")

//     let EmailError = document.getElementById("EmailError")


//     if (name.value == "") {
//         nameErroe.innerHTML = "Name field is required"
//         name.classList.add("input-error ")
//     }else if (name.value.trim().lengh < 5) {
//         "Name field must be at least 5 chars."
//         name.classList.add("input-error ")
//     }else  { 
//         nameErroe.innerHTML = ""
//         name.classList.remove("input-error")
//     }

//     if(email.value == "") {
//         EmailError.innerHTML = "Email field is required"
//         email.classList.add("input-error ")
//     }else if (email.value.trim().lengh < 10) {"Email field must be at least 10 chars."
//         email.classList.add("input-error ")
//     }else if (!email.value.includes("@")) {
//         EmailError.innerHTML = "Email field is includes '@'."
//         email.classList.add("input-error")
//     }else {
//         EmailError.innerHTML = ""
//         email.classList.remove("input-error")
//     }
// }

function valuDateForm(){
    let name =document.getElementById("name")
    let nameErorr =document.getElementById("nameErorr")
    let email =document.getElementById("email")
    let emailErorr =document.getElementById("emailErorr")
    let number =document.getElementById("number")
    let numberErorr =document.getElementById("numberErorr")


    if(name.value == ""){
    nameErorr.innerHTML="Name field is required"
    name.classList.add("input-erorr")
    name.classList.add("nameErorr")

    }else if(name.value.trim().length <5){
        nameErorr.innerHTML="Name field must length 5"
        name.classList.add("input-erorr")
    }else if(name.value){
        name.remove
        
    }else{
        nameErorr.innerHTML=""
        name.classList.remove("input-erorr")
    }
    




    if(email.value == ""){
        emailErorr.innerHTML="Name field is required"
        email.classList.add("input-erorr")
        
    }else if(!email.value.includes("@")){
        emailErorr.innerHTML="Enter @"
        email.classList.add("input-erorr")
        email.classList.add("erorr")

    }else if(email.value.trim().length < 8){
        emailErorr.innerHTML="Email field must length 8"
        email.classList.add("input-erorr")
    }else
    emailErorr.innerHTML=""
    email.classList.remove("input-erorr")
}




