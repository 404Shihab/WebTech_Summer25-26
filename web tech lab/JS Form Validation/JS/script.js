console.log("file connected")

function collect_data(){
    let isValidUserName = collect_username();
    let isValidPass = collect_pass();

    return false;
}

function collect_username(){
    let uname = document.getElementById("username").value;
    console.log(uname);

    if(uname == ""){
        document.getElementById("unameError").innerHTML="*Username can not be empty";
        return false;
    }

    return true;
}

function collect_pass(){
    let pass = document.getElementById("password").value;
    console.log(pass);

     if(pass == ""){
        document.getElementById("passError").innerHTML="*Password can not be empty";
        return false;
    }

    return true;
}

