console.log("file connected");

let correctUser = "Shihab";
let correctPass = "AIUB1234";
let count = 0;

function collect_data(){
    if(count >= 3){
        document.getElementById("passError").innerHTML ="*You cannot login anymore.";
        return false;
    }

    let isValidUserName = collect_username();
    let isValidPass = collect_pass();

    if(isValidUserName && isValidPass){

        let uname = document.getElementById("uname").value;
        let pass = document.getElementById("pass").value;

        if(uname != correctUser || pass != correctPass){

            count++;

            if(count >= 3){
                document.getElementById("passError").innerHTML =
                "*You cannot login anymore.";
            }
            else{
                document.getElementById("passError").innerHTML ="*Incorrect Username or Password. Attempt Left : " + (3 - count);
            }

            return false;
        }

        alert("Login Successful");
    }

    return false;
}

function collect_username(){

    let uname = document.getElementById("uname").value;

    if(uname == ""){
        document.getElementById("unameError").innerHTML ="*Username can not be empty";
        return false;
    }

    console.log(uname);

    return true;
}

function collect_pass(){

    let pass = document.getElementById("pass").value;

    if(pass == ""){
        document.getElementById("passError").innerHTML ="*Password can not be empty";
        return false;
    }

    if(pass.length < 8){
        document.getElementById("passError").innerHTML ="*Password must be more than 8 characters";
        return false;
    }

    console.log(pass);

    return true;
}