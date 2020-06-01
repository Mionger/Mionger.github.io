function datetime2formaltime(timestr) { 
　　 var year = timestr.getFullYear();
　　 var month = timestr.getMonth()+1;
　　 var date = timestr.getDate();
　　 var hour = timestr.getHours();
　　 var minute = timestr.getMinutes();
    var second = timestr.getSeconds();
    var datetime = year + "-" + month + "-" + date + " " + hour + ":" + minute + ":" + second;
    return datetime;
};

function getStyle(sid, callback) {
    getStyleName(sid, function (name) {
        callback(name);
    });
};

function getUser(uid, callback) {
    getUserName(uid, function (name) {
        callback(name);
    });
};

function textareareg(name) {
    var str = document.getElementById(name).value;
    str = str.replace(/[(^*\n*)|(^*\r*)]/g, '<br/>');
    // str=str.replace(' ',',');
    return str;
}