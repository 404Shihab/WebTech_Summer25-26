console.log("test");
let count = 4;
let correctUsername = "AIUB";
let correctPass = "$_student";
function collect_data(){
    let isValidUsername = collect_username();
    let isValidPassword = collect_password();
    console.log(count);

    if(isValidPassword && isValidUsername)
    {
        let uname = document.getElementById("uname").value;
        let pass = document.getElementById("pass").value;

        if(uname != correctUsername || pass!= correctPass ){
            console.log(count);
            count--;
            if(count==1)
            {
                document.getElementById("passError").innerHTML="You have " +count +" attempts left. And You are locked for 5 minutes";
            }

            else{
                document.getElementById("passError").innerHTML="You have " +count +" attempts left";
            }
            
        }
        else{
            document.getElementById("login").innerHTML="Successfully Logged In";
        }
    }

    return false;


}

function collect_username(){
    let uname = document.getElementById("uname").value;
    if(uname == ""){
        document.getElementById("unameError").innerHTML="Username can not be empty"
        return false;
    }

    return true;
}

function collect_password(){
    let pass = document.getElementById("pass").value;
    if(pass=="")
    {
        document.getElementById("passError").innerHTML="Password can not be empty";
        return false;
    }
    return true;
}