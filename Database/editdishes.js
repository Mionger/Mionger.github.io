function addoption(sname, callback) {
    var styles = new Array();
    selectAllStyle(styles, function () {
        var datalist = document.getElementById('style');
        for (var i = 0; i < styles.length; i++) { 
            var option = document.createElement('option');
            option.innerHTML = styles[i].sname;
            datalist.appendChild(option);
        }
        callback();
    });
};

window.addEventListener('load', display);
window.addEventListener('resize', display);

function display() { 
    var result = new Array();
    getDishesInfo(result, function () {
        console.log(result);
        var dishname = document.getElementById('dishesname-input');
        dishname.value = result[0].dname;
        addoption(result[0].sname, function () {
            var dstyle = document.getElementById('style-input');
            dstyle.value = result[0].sname;
            var dmaterial = document.getElementById('material-input');
            dmaterial.value = result[0].material;
            var dmethod = document.getElementById('method-input');
            dmethod.value = result[0].method;

            bbtn = document.getElementById('back-button');
            bbtn.addEventListener('click', () => {
                resetDishes(function () {
                    window.location.href = "./userpage.html";
                });
            });

            sbtn = document.getElementById('submit-button');
            sbtn.addEventListener('click', () => {
                var dname = document.getElementById('dishesname-input');
                var sname = document.getElementById('style-input');
                var str1 = textareareg('material-input');
                var str2 = textareareg('method-input');
                if ('' == dname.value || '' == sname.value || '' == str1 || '' == str2) {
                    alert('信息未填写完，请填写后提交');
                }
                else { 
                    updateDishes(dname.value, sname.value, str1, str2, function () {
                        alert('保存成功');
                        resetDishes(function () {
                            window.location.href = "./userpage.html";
                        });
                    });
                }
            });
        });
    });
};

