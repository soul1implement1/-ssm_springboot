function returnTime(value) {
    var date = new Date(value.time);
    var y = date.getFullYear();
    var MM = date.getMonth() + 1;
    MM = MM < 10 ? ('0' + MM) : MM;
    var d = date.getDate();
    d = d < 10 ? ('0' + d) : d;
    var h = date.getHours();
    h = h < 10 ? ('0' + h) : h;
    var m = date.getMinutes();
    m = m < 10 ? ('0' + m) : m;
    var s = date.getSeconds();
    s = s < 10 ? ('0' + s) : s;
    return y + '年' + MM + '月' + d + '日   ' + h + ':' + m + ':' + s;
}

function deleteFun(result) {
    if (result === "SUCCESS") {
        layer.msg("删除成功！", {
            time: 1500,
            icon: 1
        }, function() {});

    } else {
        layer.msg("删除异常！", {
            time: 1500,
            icon: 2
        }, function() {});
    }
}

function updateFun(result) {
    if (result === "SUCCESS") {
        layer.msg("更新成功！", {
            time: 1500,
            icon: 1
        }, function() {});

    } else {
        layer.msg("更新异常！", {
            time: 1500,
            icon: 2
        }, function() {});
    }
}