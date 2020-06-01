bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    window.location.href = "./userpage.html";
});

function addoption() { 
    var styles = new Array();
    selectAllStyle(styles, function () {
        var datalist = document.getElementById('style');
        for (var i = 0; i < styles.length; i++) { 
            var option = document.createElement('option');
            option.innerHTML = styles[i].sname;
            datalist.appendChild(option);
        }
    });
};

dname = document.getElementById('dishesname-input');
dstyle = document.getElementById('style-input');
dmaterial = document.getElementById('material-input');
dmethod = document.getElementById('method-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => {
    var str1 = textareareg('material-input');
    var str2 = textareareg('method-input');
    if ('' == dname.value || '' == dstyle.value || '' == str1 || '' == str2) {
        alert('信息未填写完，请填写后提交');
    }
    else { 
        insertDishes(dname.value, dstyle.value, str1, str2, function () { 
            alert('新增菜谱成功，返回用户信息界面');
            window.location.href = "./userpage.html";
        });
    }
});

window.addEventListener('load', addoption);
window.addEventListener('resize', addoption);