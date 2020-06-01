const username = document.getElementById('username-input');
const pswd = document.getElementById('password-input');

const lbtn = document.getElementById('login-button');
const rbtn = document.getElementById('register-button');

lbtn.addEventListener('click', () => {
    
    var uname = username.value;
    var upwd = hex_md5(pswd.value);

    // connectDatabase();

    //管理员用户
    checkAdmin(uname, upwd, function (result1) {
        if (result1) {
            // alert("管理员用户");

            loginAdmin(uname, function () {
                // connectRelease();
                window.location.href = "./homepage.html";
            });
        }
        else { 
            //用户
            checkUser(uname, upwd, function (result2) {
                if (result2) {
                    // alert("普通用户");

                    loginUser(uname, function () {
                        // connectRelease();
                        window.location.href = "./homepage.html";
                    });   
                }
                else { 
                    alert("用户名或密码错误！");

                    // connectRelease();
                    window.location.href = "./login.html";
                }
            });
        }
    });
});

rbtn.addEventListener('click', () => {
    window.location.href = "./reg.html";
});