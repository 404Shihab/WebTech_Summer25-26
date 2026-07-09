console.log("file connected")


function collect_data(){
    let fname = document.getElementById("fname").value;
    console.log(fname);

    let email = document.getElementById("email").value;
    console.log(email);

    let phone = document.getElementById("phone").value;
    console.log(phone);


    let dob = document.getElementById("dob").value;
    console.log(dob);

    let gender = document.querySelector('input[name="gender"]:checked').value;
    console.log(gender);

    let studentID = document.getElementById("studentID").value;
    console.log(studentID);

    let dept = document.getElementById("department").value;
    console.log(dept);

    let semester = document.getElementById("semester").value;
    console.log(semester);

    // let hobbies =document.querySelector('input[name="hobbies"]:checked').value;
    // console.log(hobbies);

    let address = document.getElementById("address").value;
    console.log(address);

    let profile =document.getElementById("profile").value;
    console.log(profile);


    return false;
}