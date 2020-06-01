function displayInfo(callback) {
    // connectDatabase();
    selectUserInfo(function (uname, ulogin) { 
        // console.log(uname);
        // console.log(ulogin);  
        name = document.getElementById('uname-value').innerHTML = uname;
        login = document.getElementById('ulogin-value').innerHTML = datetime2formaltime(ulogin);
        // connectRelease();
        callback();
    });
};

window.addEventListener('load', displayInfo(function () { 
    hbtn = document.getElementById('home-button');
    hbtn.addEventListener('click', () => {
        window.location.href = "./homepage.html";
    });

    lbtn = document.getElementById('logout-button');
    lbtn.addEventListener('click', () => {
        // connectDatabase();

        logoutAdmin(function () { 
            logoutUser(function () {
                // connectRelease();
        
                alert("退出成功，即将回到主页");
                window.location.href = "./index.html";
            });
        });
    });
}));

function display() { 
    var result = new Array();
    selectDishesByUid(result, function () { 
        console.log(result);
        var table = document.getElementById('result-table');
        for (var i = 0; i <= result.length; i++) { 
            if (0 == i) {
                var tr = document.createElement('tr');

                var th1 = document.createElement('th');
                th1.innerHTML = '菜肴编号';
                var th2 = document.createElement('th');
                th2.innerHTML = '菜肴名称';
                var th3 = document.createElement('th');
                th3.innerHTML = '菜肴菜系';

                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);

                table.appendChild(tr);
            }
            else { 
                var tr = document.createElement('tr');

                var th1 = document.createElement('td');
                th1.innerHTML = result[i - 1].did;
                var th2 = document.createElement('td');
                th2.innerHTML = result[i - 1].dname;
                var th3 = document.createElement('td');
                th3.innerHTML = result[i - 1].sname;
                // getStyle(result[i - 1].sid, function (sname) { 
                //     th3.innerHTML = sname;
                // });

                tr.appendChild(th1);
                tr.appendChild(th2);
                tr.appendChild(th3);

                table.appendChild(tr);
            }
        }

        setDsearchFalse(function () {
            isUser(function () {
                var bar = document.getElementById('file-bar');
                var cbutton = document.createElement('button');
                cbutton.className = 'create-button';
                cbutton.id = 'create-button';
                cbutton.innerHTML = '新建菜谱';
    
                bar.appendChild(cbutton);
    
                var mbutton = document.createElement('button');
                mbutton.className = 'mark-button';
                mbutton.id = 'mark-button';
                mbutton.innerHTML = '查看收藏';
    
                bar.appendChild(mbutton);
    
                cbtn = document.getElementById('create-button');
                cbtn.addEventListener('click', () => {
                    window.location.href = "./newdishes.html";
                });
    
                mbtn = document.getElementById('mark-button');
                mbtn.addEventListener('click', () => {
                    window.location.href = "./markpage.html";
                });
            });
        });
    });
};

window.addEventListener('load', display);
window.addEventListener('resize', display);
// window.addEventListener('resize', displayInfo());

dbtn = document.getElementById('delete-button');
dbtn.addEventListener('click', () => {
    window.location.href = "./deletedishes.html";
});

ebtn = document.getElementById('edit-button');
ebtn.addEventListener('click', () => {
    window.location.href = "./selectdishes.html";
});

ubtn = document.getElementById('update-button');
ubtn.addEventListener('click', () => {
    isAdmin(function (admin) {
        if (admin) {
            alert("管理员用户信息不可修改");
        }
        else { 
            window.location.href = "./updateuser.html";
        }
    });
});