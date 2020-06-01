bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    setDsearchFalse(function () {
        window.location.href = "./find.html";
    });
});

mbtn = document.getElementById('mark-button');
mbtn.addEventListener('click', () => {
    var button = document.getElementById('mark-button');
    isUser(function (user) {
        if (user) {
            if ('收藏' == button.innerHTML) {
                addMark(function () {
                    button.innerHTML = '已收藏';
                });
            }
            else {
                removeMark(function () {
                    button.innerHTML = '收藏';
                });
            }
        }
        else { 
            alert('您没有该操作的权限');
        }
    });
});

cbtn = document.getElementById('comment-button');
cbtn.addEventListener('click', () => {
    isUser(function (user) {
        if (user) {
            var comment = textareareg('comment-input');
            if ('' == comment) {
                alert('评论为空');
            }
            else { 
                newComment(comment, function () {
                    alert('评论成功');
                    window.location.href = "./detail.html";
                });
            }
        }
        else { 
            alert('您没有该操作的权限');
        }
    });
});

function updateMark(callback) { 
    var button = document.getElementById('mark-button');
    isMark(function (flag) {
        if (flag) {
            button.innerHTML = '已收藏';
            // callback();
        }
        else { 
            button.innerHTML = '收藏';
            // callback();
        }
        callback();
    });
};

function displayComments() { 
    var result = new Array();
    getComment(result, function () {
        var table = document.getElementById('comment-table');
        for (var i = 0; i < result.length; i++) { 
            var tr = document.createElement('tr');
            
            var th = document.createElement('th');
            th.innerHTML = result[i].uname + '</br>' + datetime2formaltime(result[i].ctime);
            var td = document.createElement('td');
            td.innerHTML = result[i].content;

            tr.appendChild(th);
            tr.appendChild(td);
            table.appendChild(tr);
        }
    });
};

function displayDishes() { 
    var result = new Array();
    getDsearchDishes(result,function () {
        console.log(result);
        var table = document.getElementById('result-table');

        var tr1 = document.createElement('tr');
        var th1 = document.createElement('th');
        th1.innerHTML = '菜肴编号';
        var td1 = document.createElement('td');
        td1.innerHTML = result[0].did;
        tr1.appendChild(th1);
        tr1.appendChild(td1);
        table.appendChild(tr1);

        var tr2 = document.createElement('tr');
        var th2 = document.createElement('th');
        th2.innerHTML = '菜肴名称';
        var td2 = document.createElement('td');
        td2.innerHTML = result[0].dname;
        tr2.appendChild(th2);
        tr2.appendChild(td2);
        table.appendChild(tr2);

        var tr3 = document.createElement('tr');
        var th3 = document.createElement('th');
        th3.innerHTML = '菜系名称';
        var td3 = document.createElement('td');
        getStyle(result[0].sid, function (sname) { 
            td3.innerHTML = sname;
        });
        tr3.appendChild(th3);
        tr3.appendChild(td3);
        table.appendChild(tr3);

        var tr4 = document.createElement('tr');
        var th4 = document.createElement('th');
        th4.innerHTML = '创建用户';
        var td4 = document.createElement('td');
        getUser(result[0].uid, function (uname) { 
            td4.innerHTML = uname;
        });
        tr4.appendChild(th4);
        tr4.appendChild(td4);
        table.appendChild(tr4);

        var tr5 = document.createElement('tr');
        var th5 = document.createElement('th');
        th5.innerHTML = '编辑时间';
        var td5 = document.createElement('td');
        td5.innerHTML = datetime2formaltime(result[0].dtime);
        tr5.appendChild(th5);
        tr5.appendChild(td5);
        table.appendChild(tr5);

        var tr6 = document.createElement('tr');
        var th6 = document.createElement('th');
        th6.innerHTML = '烹饪食材';
        var td6 = document.createElement('td');
        td6.innerHTML = result[0].material;
        tr6.appendChild(th6);
        tr6.appendChild(td6);
        table.appendChild(tr6);

        var tr7 = document.createElement('tr');
        var th7 = document.createElement('th');
        th7.innerHTML = '烹饪步骤';
        var td7 = document.createElement('td');
        td7.innerHTML = result[0].method;
        tr7.appendChild(th7);
        tr7.appendChild(td7);
        table.appendChild(tr7);
    });
};

window.addEventListener('load', updateMark(function () { 
    displayDishes();
    displayComments();
}));
// window.addEventListener('resize', updateMark(display()));