cbtn = document.getElementById('connect');
cbtn.addEventListener('click', () => {
    connectDatabase();
});

rbtn = document.getElementById('release');
rbtn.addEventListener('click', () => {
    connectRelease();
});

fabtn = document.getElementById('findall');
fabtn.addEventListener('click',() => {
    var result = new Array();
    console.log(result.length);
    findAllUser(result, () => { 
        console.log(result.length);
        for (var i = 0; i < result.length; i++) { 
            console.log(result[i]);
        }
    });
    
});

const username = document.getElementById('username-input');
hubtn = document.getElementById('haveuser');
hubtn.addEventListener('click', () => {
    console.log(username.value);
    isUserVaild(username.value, function(result){
        alert(result);
    });
});