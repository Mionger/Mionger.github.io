bbtn = document.getElementById('back-button');
bbtn.addEventListener('click', () => {
    window.location.href = "./userpage.html";
});

dno = document.getElementById('delete-input');
sbtn = document.getElementById('submit-button');
sbtn.addEventListener('click', () => {
    deleteDishes(dno.value, function () {
        window.location.href = "./userpage.html";
    });
});