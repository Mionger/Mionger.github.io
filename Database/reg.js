const username = document.getElementById('username-input');
const pswd = document.getElementById('password-input');
const pswd2 = document.getElementById('password-again-input');

const sbtn = document.getElementById('submit-button');
const bbtn = document.getElementById('back-button');

sbtn.addEventListener('click', () => {
    if ('' == username.value || '' == pswd.value || '' == pswd2.value) {
        alert('信息未填写完，请填写后提交');
    }
    else { 
        if (pswd.value != pswd2.value) {
            alert("两次输入的密码不一致！");
            window.location.href = "./reg.html";
        }
        else { 
            var uname = username.value;
            var upwd = hex_md5(pswd.value);
    
            // connectDatabase();
    
            // 判断是否和管理员用户冲突
            isAdminVaild(uname, function (result1) {
                if (result1) {
                    // 判断用户名是否存在
                    isUserVaild(username.value, function (result2) {
                        if (result2) {
                            insertUser(uname, upwd);
            
                            // connectRelease();
            
                            alert("注册成功，即将跳转到登陆界面");
                            window.location.href = "./login.html";
                        }
                        else {
                            // connectRelease();
    
                            alert("用户名已被使用！");
                            window.location.href = "./reg.html";
                        }
                    });
                }
                else { 
                    // connectRelease();
    
                    alert("用户名已被使用！");
                    window.location.href = "./reg.html";
                }
            });
        }
    }
});

bbtn.addEventListener('click', () => {
    window.location.href = "./index.html";
});