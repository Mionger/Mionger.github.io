bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    setDsearchFalse(function () {
        window.location.href = "./userpage.html";
    });
});

function display() { 
    var result = new Array();
    getMakrDishes(result, function () {
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
    });
};

window.addEventListener('load', display);
// window.addEventListener('resize', display);