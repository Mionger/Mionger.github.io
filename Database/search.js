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

searchcontent = document.getElementById('search-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => { 
    var result = new Array();
    selectLikeDishes(result, searchcontent.value, function () {
        if (result.length > 0) {
            console.log(result);
            window.location.href = "./result.html";
        }  
        else { 
            alert("未查询到相关信息，请重新输入");
        }
    });
});