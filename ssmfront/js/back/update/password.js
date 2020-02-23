layui.use(['layer', 'form', 'element', 'jquery'], function() {

    let element = layui.element,
        $ = layui.jquery,
        layer = layui.layer,
        form = layui.form;

    form.on('submit(change)', function() {

        $.ajax({
            type: 'post',
            url: url_nginx + 'my/indexC/update.action',
            async: false,
            data: {
                'loginId': $("#ID").val(),
                'password': $("#oldPassword").val(),
                'newpassword': $("#newPassword").val()
            },
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(result) {
                console.log(result)
                if (result === 'SUCCESS') {
                    layer.msg('密码修改成功', {
                        time: 1200,
                        icon: 1
                    }, function() {
                        $('#passForm')[0].reset()
                    });
                } else {
                    layer.msg('密码修改失败', {
                        time: 1200,
                        icon: 2
                    });
                }
            }
        });

        return false;
    })

});