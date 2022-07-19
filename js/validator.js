function validate() {
    const name = document.getElementById("name").value;
    const gender = document.getElementsByName("gender");
    const branch = document.getElementById("branch").value;
    const mobile = document.getElementById("mobile").value;
    const email = document.getElementById("email").value;
    const password= document.getElementById("password").value;
    const password2 = document.getElementById("password2").value;
    const term = document.getElementById("term");
    let error = false;
    if (name === "") {
        // console.log('name is required');
        document.getElementById("name_error").innerHTML = "name is required";
        error = true;
    }
    else {
        document.getElementById("name_error").innerHTML = "";
    }

    // gender validation
    if (!gender[0].checked && !gender[1].checked && !gender[2].checked) {
        document.getElementById("gender_error").innerHTML = "please select your gender";
        error = true;
    }
    else {
        document.getElementById("gender_error").innerHTML = "";
    }

    // branch

    if (branch === "") {

        document.getElementById("branch_error").innerHTML = "please select branch ";
        error = true;
    }
    else {
        document.getElementById("name_error").innerHTML = "";
    }
    // mobile
    if (mobile === "") {

        document.getElementById("mobile_error").innerHTML = "please enter your mobile ";
        error = true;
    }
    else if (mobile.length != 10 || isNaN(mobile)) {
        document.getElementById("mobile_error").innerHTML = "please select a 10 digit mobile number";
        error = true;
    }
    else {
        document.getElementById("mobile_error").innerHTML = "";
    }

    // email
    let atPos = email.indexOf('@');
    let dotPos = email.lastIndexOf('.');
    if (email === "") {

        document.getElementById("email_error").innerHTML = "please enter your mail ";
        error = true;
    }
    else if (atPos <=0 ||dotPos <=0|| (dotPos-atPos)<=4 || dotPos == email.length - 1) {
        document.getElementById("email_error").innerHTML = "please select a valid email id";
        error = true;
    }
    else {
        document.getElementById("email_error").innerHTML = "";
    }
    if (password === "") {

        document.getElementById("password_error").innerHTML = "please enter your password ";
        error = true;
    }
    else if (password.length < 8 || password.length > 16) {
        document.getElementById("password_error").innerHTML = "password must have 8-16 char";
        error = true;
    }
    else {
        document.getElementById("password_error").innerHTML = "";
    }

    if (password2 === "") {

        document.getElementById("password2_error").innerHTML = " Re enter your password ";
        error = true;
    }
    else if (password !== password2) {
        document.getElementById("password2_error").innerHTML = "password must be same";
        error = true;
    }
    else {
        document.getElementById("password2_error").innerHTML = "";
    }

    if (!term.checked) {
        // console.log('name is required');
        document.getElementById("term_error").innerHTML = "please agree to the term and conditions";
        error = true;
    }
    else {
        document.getElementById("term_error").innerHTML = "";
    }



    if (error) {
        return false;
    } else {
        return true;
    }
}