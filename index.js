const loginForm = document.getElementById("login");
const errorEl = document.querySelectorAll(".error");
loginForm.addEventListener("submit", function(e) {
    e.preventDefault();
    const userLogin = loginForm.userName;
    const userValue = userLogin.value;
    if(userValue == ""){
        errorEl[0].innerHTML='Vui lòng nhập tên đăng nhập';
        userLogin.classList.add("errorSyntax");
    }else if(userValue.length < 6){
        errorEl[0].innerHTML= 'Vui lòng nhập tên đăng nhập trên 6 ký tự';
        userLogin.classList.add("errorSyntax");
    }else{
        errorEl[0].innerHTML="accept";
        errorEl[0].classList.add("correct");
        userLogin.classList.add("correctSyntax");
        console.log(errorEl[0]);
    }
    const emailElm = loginForm.email;
    const emailValue = emailElm.value;
    const syntaxEmail = /@gmail.com/;
    if (emailValue == "") {
        errorEl[1].innerHTML = "Không bỏ trống thông tin này!";
        emailElm.classList.add("errorSyntax");
    }else if(emailValue.length < 10){
        errorEl[1].innerHTML = 'Vui lòng nhập email theo mẫu: user@gmail.com';
        emailElm.classList.add("errorSyntax");
    }else if(syntaxEmail.test(emailValue) == false){
        errorEl[1].innerHTML = 'Vui lòng nhập email theo mẫu: user@gmail.com';
        emailElm.classList.add("errorSyntax");
    }else{
        errorEl[1].innerHTML = 'accept';
        errorEl[1].classList.add("correct");
        emailElm.classList.add("correctSyntax");
    }
    const age = loginForm.ageOfYou;
    const ageValue = age.value;
    if(isNaN(ageValue) == true){
        errorEl[2].innerHTML='Vui lòng nhập tuổi của bạn!';
        age.classList.add("errorSyntax");
    }else if(ageValue == ""){
        errorEl[2].innerHTML='Vui lòng nhập tuổi của bạn!';
        age.classList.add("errorSyntax");
    }
    else if(18<=age<=56){
        errorEl[2].innerHTML='accept';
        errorEl[2].classList.add("correct");
        age.classList.add("correctSyntax");
    }else{
        error[2].innerHTML='Chưa đủ tuổi cho phép!';
        age.classList.add("errorSyntax");
    }
    const psw = loginForm.password;
    const pswValue = psw.value;
    if(pswValue == ""){
        errorEl[3].innerHTML='Vui lòng nhập mật khẩu';
        psw.classList.add("errorSyntax");
    }else if(isNaN(pswValue)==false){
        errorEl[3].innerHTML='Vui lòng nhập mật khẩu chứa ít nhất 1 chữ cái và 1 ký tự đặc biệt';
        psw.classList.add("errorSyntax");
    }else{
        error[3].innerHTML='accept';
        errorEl[3].classList.add("correct");
        psw.classList.add("correctSyntax");
    }
        
})