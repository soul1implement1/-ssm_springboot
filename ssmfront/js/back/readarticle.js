//均为同步操作
let count;
let limit = 5;
$.ajax({
    type: 'get',
    url: url_nginx + 'index/getCount.action',
    // 同步
    async: false,
    dataType: 'json',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    success: function(result) {
        count = result;
        $('#goready').append(count);
        //console.log(count)
    }
});
$.ajax({
    type: 'get',
    url: url_nginx + 'index/selectAllByPage.action',
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    data: {
        'limit': limit,
        'page': 1
    },
    async: false,
    dataType: 'json',
    success: function(result) {
        $("#index_comment").empty()
        if (result === "{}") {
            $("#index_comment").append("请求错误！");
            return false;
        }
        $.each(result, function(i, item) {
            var img = '<img class="com_img\" src="' + item.img + '" />';
            var name = '<div style="margin:5px">' + item.id + '楼de匿名网友</div>';
            var star = '<div ><a class="com_star" onclick="dostar(' + item.id + ')">点赞<span id="dostar' + item.id + '">' + item.star + '</span></a></div>';
            var date = '<span >' + returnTime(item.date) +
                '</span>';
            var content = '<div style="color:black;">评论了内容：</div><div class="com_content">' + item.content + '</div>';
            $("#index_comment").append(
                '<div class="commentcontent" >' + img + name + content + star + date +
                '</div>');
        });
    }
});

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
    return '&nbsp;   且于' + y + '年' + MM + '月' + d + '日   ' + h + ':' + m + ':' + s;
}
layui.use('laypage', function() {
    var laypage = layui.laypage;

    // 执行一个laypage实例
    laypage.render({
        elem: 'index_comment_but',
        count: count, // 数据总数，从服务端得到
        limit: limit,
        jump: function(obj, first) {
            // ajax
            if (!first) {
                $.ajax({
                    type: 'get',
                    url: url_nginx + 'index/selectAllByPage.action',
                    data: {
                        'limit': limit,
                        'page': obj.curr
                            //Math.floor(count/10)
                    },
                    xhrFields: {
                        withCredentials: true
                    },
                    crossDomain: true,
                    async: false,
                    dataType: 'json',
                    success: function(result) {
                        $("#index_comment").empty();

                        if (result === "{}") {
                            $('#index_comment').append("请求错误！");
                            return false;
                        }
                        $.each(result, function(i, item) {
                            var img = '<img class="com_img\" src="' + item.img + '" />';
                            var name = '<div style="margin:5px">' + item.id + '楼de匿名网友</div>';
                            var star = '<div class="com_star" onclick="dostar(' + item.id + ')">点赞<span id="dostar' + item.id + '">' + item.star + '</span></div>';
                            var date = '<span >' + returnTime(item.date) +
                                '</span>';
                            var content = '<div style="color:black;">评论了内容：</div><div class="com_content">' + item.content + '</div>';
                            $("#index_comment").append(
                                '<div class="commentcontent" >' + img + name + content + star + date +
                                '</div>');
                        });
                    },
                });
            }
        }

    });
});

function logout() {
    if (confirm("您确定退出此系统吗？")) {
        $.cookie("loginId", null);
        $.cookie("logingroup", null);
        // 发送销毁session的请求
        $.ajax({
            type: "post",
            async: false,
            xhrFields: {
                withCredentials: true
            },
            crossDomain: true,
            url: nginx_url + "/loginout.action",
            success: function(result) {
                window.location.href = '/crazy';
            }
        });

        return true;
    } else
        return false;
}