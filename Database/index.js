// const gallery = document.getElementsByClassName('gallery')[0];
// const rows = document.getElementsByClassName('dishes-row');
// const cols = document.getElementsByClassName('dishes-col');
// const drows = document.getElementsByClassName('des-row');
// const dcols = document.getElementsByClassName('des-col');
// console.log(rows);
// console.log(cols);

// const adjust = () => {
//     const clientWidth = document.body.clientWidth;
//     const style = getComputedStyle(gallery);
//     const leftValue = parseInt(style.getPropertyValue('left'));
//     const rowWidth = clientWidth - 2 * leftValue;

//     let picSize = 300;
//     if(rowWidth <= 1200) {
//         picSize = 250;
//     } else if(rowWidth <= 1000) {
//         picSize = 200;
//     } else if(rowWidth <= 800) {
//         picSize = 150;
//     } else if(rowWidth <= 600) {
//         picSize = 100;
//     }

//     const colGap = parseInt((rowWidth - 4 * picSize) / 3);
//     const colWidth = picSize;

//     for(let each of rows) {
//         each.style.setProperty('width', rowWidth + 'px');
//         each.style.setProperty('height', colWidth + 'px');
//     }

//     let count = 1;
//     for(let each of cols) {
//         if(count % 4 === 0) {
//             each.style.setProperty('width', colWidth + 'px');
//         } else {
//             each.style.setProperty('width', (colWidth + colGap) + 'px');
//         }
//         each.style.setProperty('height', colWidth + 'px');
//         count++;
//         // console.log(each.style.getPropertyValue('width'))
//     }
    
//     const desHeight = 80;
//     for(let each of drows) {
//         each.style.setProperty('width', rowWidth + 'px');
//         each.style.setProperty('height', desHeight + 'px');
//     }

//     count = 1;
//     for(let each of dcols) {
//         if(count % 4 === 0) {
//             each.style.setProperty('width', colWidth + 'px');
//         } else {
//             each.style.setProperty('width', (colWidth + colGap) + 'px');
//         }
//         each.style.setProperty('height', desHeight + 'px');
//         count++;
//     }
// };

// window.addEventListener('load', adjust);
// window.addEventListener('resize', adjust);

fbtn = document.getElementById('find');
fbtn.addEventListener('click', () => {
    window.location.href="./find.html";
});

sbtn = document.getElementById('search');
sbtn.addEventListener('click', () => {
    window.location.href="./search.html";
});

sibtn = document.getElementById('signin');
sibtn.addEventListener('click', () => {
    window.location.href="./reg.html";
});

libtn = document.getElementById('login');
libtn.addEventListener('click', () => {
    window.location.href="./login.html";
});

// tbtn = document.getElementById('test');
// tbtn.addEventListener('click', () => {
//     window.location.href="./test.html";
// });