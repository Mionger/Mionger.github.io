bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    haveOnline(function (isOnline) {
        if (isOnline) {
            window.location.href = "./homepage.html";
        }
        else { 
            window.location.href = "./index.html";
        }
    });
});

findcontent = document.getElementById('find-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => { 
    // var result = new Array();
    selectDishesById(findcontent.value, function (result) {
        if (0 == result) {
            alert("未查询到相关信息，请在搜索界面再次确认");
            window.location.href = "./find.html";
        }  
        else { 
            // console.log(result);

            window.location.href = "./detail.html";
        }
    });
});