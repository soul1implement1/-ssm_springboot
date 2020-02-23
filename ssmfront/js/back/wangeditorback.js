var stagresult = new Array();
$("#btag").click(function() {
    //是否发送请求
    if (stagresult.length == 0) {
        $.ajax({
            type: 'get',
            url: url_nginx + 'my/allTag/selectAllByPage.action',
            data: {
                'limit': 1,
                'page': 1
            },
            async: false,
            dataType: 'json',
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            crossDomain: true,
            success: function(result) {
                if (result != "{}") {
                    stagresult = result;
                    $("#btag").empty();
                    $("#stag").empty();
                    $("#btag").append("<option value=\"\">请选择</option>");
                    $("#stag").append("<option value=\"\">请选择</option>");
                    $.each(result.data, function(i, item) {
                        $("#btag").append('<option value=\"' + i + '\">' + item.btag + '</option>');
                        stagresult[i] = item.stag;
                    });

                } else {
                    layer.msg("标签获取未知错误，请刷新", { time: 1500, icon: 2 }, function() {});
                }

            }
        });
        //置为不发送
        flag = false;
    } else {
        if ($("#btag").val() === '')
            return false;
        var s = stagresult[$("#btag").val()].split(",");
        $("#stag").empty();
        $("#stag").append("<option value=\"\">请选择</option>");
        $.each(s, function(i, item) {
            $("#stag").append('<option>' + item + '</option>');
        });
    }

});

/**
 * 提交文章
 * 
 * @returns
 */
$(".editor_but")
    .click(
        function() {
            if (!check())
                return false;
            commitA("my/article/add.action");
            return false;
        });

function commitA(url) {
    article = editor.txt.html();
    $
        .ajax({
            type: "post",
            url: url_nginx + url,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            data: {
                'content': article,
                'title': $("#mytitle").val(),
                'words': $("#mywords").val(),
                'btag': $('#btag option:selected').text(),
                'stag': $("#stag").val(),
            },
            success: function(result) {
                // console.log(result);
                if (result === "SUCCESS") {
                    layer
                        .msg(
                            "更新|发布文章成功！", {
                                time: 1200,
                                icon: 1
                            },
                            function() {
                                $("#mytitle").val('');
                                $("#mywords").val('');
                                editor.txt.clear();
                                $("#stag").val('');
                                $("#btag").val('');
                            });
                } else {
                    layer.msg("更新|发布失败，可能是内部错误", {
                        time: 1200,
                        icon: 2
                    }, function() {});
                }
            },
            error: function(res) {
                console.log(res);
                layer.msg("404-not found", {
                    time: 1200,
                    icon: 2
                }, function() {});
            }
        });
}

function check() {
    let title = $("#mytitle").val();
    let words = $("#mywords").val();
    let btag = $("#btag").val();
    let stag = $("#stag").val();
    let article = editor.txt.text();
    if (article == '') {
        layer.msg("文章内容不为空", {
            time: 1200,
            icon: 2
        }, function() {});
        return false;
    } else if (article.length < 30) {
        layer.msg("文章内容长度不能过少", {
            time: 1200,
            icon: 2
        }, function() {});
        return false;
    } else if (title === '') {
        layer.msg("标题内容不为空", {
            time: 1200,
            icon: 2
        }, function() {});
        return false;
    }
    if (words === '') {
        layer.msg("描述内容不为空", {
            time: 1200,
            icon: 2
        }, function() {});
        return false;
    }
    if (btag === '' || stag === '') {
        layer.msg("请正确选择文章标签", {
            time: 1200,
            icon: 2
        }, function() {});
        return false;
    }
    return true;
}

/**
 * 富文本
 */
var E = window.wangEditor
var editor = new E('#editor')
editor.customConfig.uploadImgServer = '/uploadLocalpicture';
editor.customConfig.menus = [
    'head', // 标题
    'bold', // 粗体
    'fontSize', // 字号
    'fontName', // 字体
    'italic', // 斜体
    'underline', // 下划线
    'strikeThrough', // 删除线
    'foreColor', // 文字颜色
    'backColor', // 背景颜色
    'link', // 插入链接
    'list', // 列表
    'justify', // 对齐方式
    'quote', // 引用
    'emoticon', // 表情
    'image', // 插入图片
    'table', // 表格
    'code', // 插入代码
    'undo', // 撤销
    'redo' // 重复
];
// 表情面板可以有多个 tab ，因此要配置成一个数组。数组每个元素代表一个 tab 的配置
editor.customConfig.emotions = [{
    title: 'gif动态表情包',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
        alt: '',
        src: 'layui/images/0.gif'
    }, {
        alt: '',
        src: 'layui/images/1.gif'
    }, {
        alt: '',
        src: 'layui/images/2.gif'
    }, {
        alt: '',
        src: 'layui/images/3.gif'
    }, {
        alt: '',
        src: 'layui/images/4.gif'
    }, {
        alt: '',
        src: 'layui/images/5.gif'
    }, {
        alt: '',
        src: 'layui/images/6.gif'
    }, {
        alt: '',
        src: 'layui/images/7.gif'
    }, {
        alt: '',
        src: 'layui/images/8.gif'
    }, {
        alt: '',
        src: 'layui/images/9.gif'
    }, {
        alt: '',
        src: 'layui/images/10.gif'
    }, {
        alt: '',
        src: 'layui/images/11.gif'
    }, {
        alt: '',
        src: 'layui/images/12.gif'
    }, {
        alt: '',
        src: 'layui/images/13.gif'
    }, {
        alt: '',
        src: 'layui/images/14.gif'
    }, {
        alt: '',
        src: 'layui/images/15.gif'
    }, {
        alt: '',
        src: 'layui/images/16.gif'
    }, {
        alt: '',
        src: 'layui/images/17.gif'
    }, {
        alt: '',
        src: 'layui/images/18.gif'
    }, {
        alt: '',
        src: 'layui/images/19.gif'
    }, {
        alt: '',
        src: 'layui/images/20.gif'
    }, {
        alt: '',
        src: 'layui/images/21.gif'
    }, {
        alt: '',
        src: 'layui/images/22.gif'
    }, {
        alt: '',
        src: 'layui/images/23.gif'
    }, {
        alt: '',
        src: 'layui/images/24.gif'
    }, {
        alt: '',
        src: 'layui/images/25.gif'
    }, {
        alt: '',
        src: 'layui/images/26.gif'
    }, {
        alt: '',
        src: 'layui/images/27.gif'
    }, {
        alt: '',
        src: 'layui/images/28.gif'
    }, {
        alt: '',
        src: 'layui/images/29.gif'
    }, {
        alt: '',
        src: 'layui/images/30.gif'
    }, {
        alt: '',
        src: 'layui/images/31.gif'
    }, {
        alt: '',
        src: 'layui/images/32.gif'
    }, {
        alt: '',
        src: 'layui/images/33.gif'
    }, {
        alt: '',
        src: 'layui/images/34.gif'
    }, {
        alt: '',
        src: 'layui/images/35.gif'
    }, {
        alt: '',
        src: 'layui/images/36.gif'
    }, {
        alt: '',
        src: 'layui/images/37.gif'
    }, {
        alt: '',
        src: 'layui/images/38.gif'
    }, {
        alt: '',
        src: 'layui/images/39.gif'
    }, {
        alt: '',
        src: 'layui/images/40.gif'
    }, {
        alt: '',
        src: 'layui/images/41.gif'
    }, {
        alt: '',
        src: 'layui/images/42.gif'
    }, {
        alt: '',
        src: 'layui/images/43.gif'
    }, {
        alt: '',
        src: 'layui/images/44.gif'
    }, {
        alt: '',
        src: 'layui/images/45.gif'
    }, {
        alt: '',
        src: 'layui/images/46.gif'
    }, {
        alt: '',
        src: 'layui/images/47.gif'
    }, {
        alt: '',
        src: 'layui/images/48.gif'
    }, {
        alt: '',
        src: 'layui/images/49.gif'
    }, {
        alt: '',
        src: 'layui/images/50.gif'
    }, {
        alt: '',
        src: 'layui/images/51.gif'
    }, {
        alt: '',
        src: 'layui/images/52.gif'
    }, {
        alt: '',
        src: 'layui/images/53.gif'
    }, {
        alt: '',
        src: 'layui/images/54.gif'
    }, {
        alt: '',
        src: 'layui/images/55.gif'
    }, {
        alt: '',
        src: 'layui/images/56.gif'
    }, {
        alt: '',
        src: 'layui/images/57.gif'
    }, {
        alt: '',
        src: 'layui/images/58.gif'
    }]
}, {
    title: '小黄脸静态表情包',
    // type -> 'emoji' / 'image'
    type: 'image',
    // content -> 数组
    content: [{
        alt: '',
        src: 'blimg/gt1.png'
    }, {
        alt: '',
        src: 'blimg/fg.png'
    }, {
        alt: '',
        src: 'blimg/dddd.png'
    }, {
        alt: '',
        src: 'blimg/huaji.png'
    }, {
        alt: '',
        src: 'blimg/shigua.png'
    }, {
        alt: '',
        src: 'blimg/wxzs.png'
    }, {
        alt: '',
        src: 'blimg/xxx.png'
    }]
}]
editor.create()