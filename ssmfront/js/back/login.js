layui.use(['layer', 'form', 'jquery'], function() {
    let $ = layui.jquery,
        layer = layui.layer,
        form = layui.form;
    form.on('submit(login)', function() {

        let index = layer.load();
        $.ajax({
            type: 'post',
            url: url_nginx + 'login.action',
            data: {
                'loginId': $('#loginId').val(),
                'password': $('#password').val(),
                'verifycode': $('#verifycode').val(),
                'dec': $('#decs').val()
            },
            dataType: 'json',
            // 同步请求
            async: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            success: function(result) {
                if (result.status === 'SUCCESS') {
                    setTimeout(function() {
                        layer.close(index);
                        layer.msg("登录成功！", {
                            time: 1500,
                            icon: 1
                        }, function() {
                            window.location.href = '../backhtml/manager.html';
                        });
                    }, 1000);
                } else {
                    setTimeout(function() {
                        layer.msg(result.msg + " 登录失败!", {
                            time: 1500,
                            icon: 2
                        }, function() {
                            window.location.href = 'login.html';
                        });
                    }, 1000);
                }
            },
            error: function() {
                layer.msg("404-not found", {
                    time: 1500,
                    icon: 2
                }, function() {});
            }
        });
        return false;
    });
});
// 为表单的必填文本框添加提示信息（选择form中的所有后代input元素）
$("form :input.required").each(function() {
    // 通过jquery api：$("HTML字符串") 创建jquery对象
    var $required = $("<strong class='high'>*</strong>");
    // 添加到this对象的父级对象下
    $(this).parent().append($required);
});
// 为表单元素添加失去焦点事件
$("form :input").blur(function() {
    var $parent = $(this).parent();
    // $parent.find(".msg").remove();
    // //删除以前的提醒元素（find()：查找匹配元素集中元素的所有匹配元素）
    // 验证用户名
    if ($(this).is("#loginId")) {
        var nameVal = $.trim(this.value);
        var regName = /[~#^$@%&!*()<>:;'"{}【】  ]/;

        if (nameVal == "" || nameVal.length < 6 || regName.test(nameVal)) {
            $parent.find(".okimg").remove();
            layer.msg(" 用户名非空,长度6位以上，不包含特殊字符！", { time: 1200, icon: 2 }, function() {});
        }
    }
});