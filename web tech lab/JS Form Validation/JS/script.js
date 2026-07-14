console.log("file connected")

function collect_data(){
    let isValidUserName = collect_username();
    let isValidPass = collect_pass();

    return false;
}

function collect_username(){
    let uname = document.getElementById("username").value;
   
    if(uname == ""){
        document.getElementById("unameError").innerHTML="*Username can not be empty";
        return false;
    }

     console.log(uname);

    return true;
}

function collect_pass(){
    let pass = document.getElementById("password").value;
    

     if(pass == ""){
        document.getElementById("passError").innerHTML="*Password can not be empty";
        return false;
    }
    if(pass.length<8){
        document.getElementById("passError").innerHTML="*Password must be more than 8 characters"
        return false;
    }

    console.log(pass);

    return true;
}

