bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    window.location.href = "./userpage.html";
});

uname = document.getElementById('username-input');
pswd = document.getElementById('password-input');
pswda = document.getElementById('password-again-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => {
    if ('' == uname.value || '' == pswd.value || '' == pswda.value) {
        alert('信息未填写完，请填写后提交');
    }
    else { 
        getUserInfo(function (user) {
            var flag = false;
            if (user.upwd != pswd.value) {
                // alert('密码发生了修改');
                if (pswd.value != pswda.value) {
                    alert("两次输入的密码不一致！");
                    window.location.href = "./updateuser.html";
                }
                else { 
                    // var upwd = hex_md5(pswd.value);
                    flag = true;
                }
            }
    
            if (uname.value != user.uname) { 
                flag = true;
                // alert('用户名发生了修改');
            }
    
            if (flag) { 
                var uewpwd;
                if (user.upwd != pswd.value) {
                    uewpwd = hex_md5(pswd.value);
                }
                else { 
                    uewpwd = user.upwd;
                }
    
                var uewname;
                if (uname.value != user.uname) {
                    uewname = uname.value;
                }
                else { 
                    uewname = user.uname;
                }
    
                console.log(uewname);
                console.log(uewpwd);
                // 判断是否和管理员用户冲突
                isAdminVaild(uewname, function (result1) {
                    if (result1) {
                        // 判断用户名是否存在
                        isUserVaild(uewname, function (result2) {
                            if (result2) {
                                updateUserInfo(uewname, uewpwd, function () {
                                    alert('用户信息更新成功，请重新登录');
                                    window.location.href = "./login.html";
                                });
                            }
                            else {
                                // connectRelease();
    
                                alert("用户名已被使用！");
                                window.location.href = "./updateuser.html";
                            }
                        });
                    }
                    else { 
                        // connectRelease();
    
                        alert("用户名已被使用！");
                        window.location.href = "./updateuser.html";
                    }
                }); 
            }        
        });
    }
});

function display() { 
    getUserInfo(function (user) {
        var name = document.getElementById('username-input');
        var pwd = document.getElementById('password-input');
        var pwda = document.getElementById('password-again-input');

        name.value = user.uname;
        pwd.value = user.upwd;
        pwda.value = user.upwd;
    });
};

window.addEventListener('load', display);
// window.addEventListener('resize', display);