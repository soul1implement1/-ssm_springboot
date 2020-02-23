function golocal(route) {
    $("#mainpanel").attr("src", route);
}

function outlogin() {
    $.ajax({
        type: 'post',
        url: url_nginx + 'loginout.action',
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        success: function(result) {
            if (result === "SUCCESS") {
                layer.msg("安全退出成功！", {
                    time: 1500,
                    icon: 1
                }, function() {
                    window.location.href = "../index.html";
                });
            } else {
                layer.msg("退出异常！", {
                    time: 1500,
                    icon: 1
                }, function() {});
            }
        }
    });
}