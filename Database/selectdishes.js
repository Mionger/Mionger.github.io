bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    window.location.href = "./userpage.html";
});

dno = document.getElementById('edit-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => {
    var result = new Array();
    existDishes(result, dno.value, function () {
        if (result.length > 0) {
            // window.location.href = "./editdishes.html";
            isAdmin(function (admin) { 
                if (admin) {
                    window.location.href = "./editdishes.html";
                }
                else { 
                    getOnlineUid(function (uid) {
                        if (uid != result[0].uid) {
                            alert('您不是该菜谱的作者');
                            window.location.href = "./selectdishes.html";
                        }
                        else { 
                            window.location.href = "./editdishes.html";
                        }
                    });
                }
            });
        }
        else { 
            alert('该菜谱不存在，请确认后重新操作');
            window.location.href = "./selectdishes.html";
        }
    });
});