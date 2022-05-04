var form = document.querySelector("form");
var numbers = document.getElementById("exampleInputMobileNumber");
var names = document.getElementById("exampleInputName");
var email = document.getElementById("exampleInputEmail");




function required(x){
    if(x===""){
        return true;
    }
    return false;
}

function validName(x){
    var exampleInputName = /^[a-zA-Z][a-zA-Z ]*$/ ;
    if(exampleInputName.test(x) == true){
        return false;
    }
    return true;
}

function validEmail(x){
    var exampleInputEmail =/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    if(exampleInputEmail.test(x) == true){
        return true;
    }
    return false;
}

function validNumber(x){
    var exampleInputMobileNumber = /[2-9]{2}\d{8}/;
    if((exampleInputMobileNumber.test(x) == true && x.length===10) || x.length ==0 ){
        return true;
    }
    return false;
}


const showError = (input,message) =>{
    input.classList.remove('is-valid');
    input.classList.add('is-invalid');
    alert(message);
};
const showSuccess = (input) =>{
    
    input.classList.remove('is-invalid');
    input.classList.add('is-valid');
};

function checkEmail(){
    var t = email.value.trim();
    var r = false;

    if(required(t)){
        showError(email, "Email is required");
    }
    else if(!validEmail(t)){
        showError(email , "Enter email in valid format" );
    }
    else{
        showSuccess(email);
        r=true;
    }
    return r;
    
}


function checkName(){
    var t = names.value.trim();
    var r = false;

    if(required(t)){
        showError(names, "Name is required");
    }
    else if(validName(t)){
        showError(names , "Enter name in valid format" );
    }
    else{
        showSuccess(names);
        r=true;
    }
    return r;
    
}


function checkNumber(){
    var t = numbers.value.trim();
    var r = false;


    if(!validNumber(t)){
        showError(numbers , "Enter phone number in valid format");
    }
    else{
        showSuccess(numbers);
        r=true;
    }
    return r;
}

form.addEventListener('submit' , function(e){
    e.preventDefault();
    var isNameValid = checkName();
    var isEmailValid = checkEmail();
    var isPhoneValid = checkNumber();
    var isFormValid =  isEmailValid && isPhoneValid && isNameValid ;

    if(isFormValid){
        var information = {
            "Name" : exampleInputName.value,
            "Phone" :exampleInputMobileNumber.value,
            "Email" : exampleInputEmail.value,
        }
        var array = JSON.parse(localStorage.getItem('information') || '[]');
        array.push(information);
        localStorage.setItem('information' , JSON.stringify(array));



        
    }



var table = document.getElementById('table');
var tbody = document.getElementById('tBody');
var items  = JSON.parse(localStorage.getItem('information'));

if(isFormValid){
    var i=items.length-1;



    var row = document.createElement('tr');

    var col = document.createElement('td');
    var cot = document.createTextNode(items[i].Name);
    col.appendChild(cot);
    row.appendChild(col);

    
    var col = document.createElement('td');
    var cot = document.createTextNode(items[i].Phone);
    col.appendChild(cot);
    row.appendChild(col);

    
    var col = document.createElement('td');
    var cot = document.createTextNode(items[i].Email);
    col.appendChild(cot);
    row.appendChild(col);

    tbody.appendChild(row);
}

})