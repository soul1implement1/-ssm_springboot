//均为同步操作
let count;
let limit = 6;
let page = 1;

$.ajax({
    type: 'get',
    url: url_nginx + 'index/getCount.action',
    // 同步
    async: false,
    xhrFields: {
        withCredentials: true
    },
    crossDomain: true,
    dataType: 'json',
    success: function(result) {
        count = result;
        $('#goready').append(count);
    }
});

function getComment() {
    if (page - 1 > parseInt(count / limit)) {
        alert("没有更多评论了");
        return;
    }

    $.ajax({
        type: 'get',
        url: url_nginx + 'index/selectAllByPage.action',
        data: {
            'limit': limit,
            'page': page
        },
        async: false,
        xhrFields: {
            withCredentials: true
        },
        crossDomain: true,
        dataType: 'json',
        success: function(result) {

            if (result === "{}") {
                $("#index_comment").append("请求错误！");
                return false;
            }
            $.each(result, function(i, item) {
                var img = '<img class="com_img" src="' + item.img + '" />';
                var name = '<div style="margin:5px">' + item.id + '楼de匿名网友</div>';
                var star = '<div ><a class="com_star" onclick="dostar(' + item.id + ')">点赞<span id="dostar' + item.id + '">' + item.star + '</span></a></div>';
                var date = '<span >' + returnTime(item.date) +
                    '</span>';
                var content = '<div>评论了内容：</div><div class="com_content">' + item.content + '</div>';
                $("#index_comment").append(
                    '<div class="commentcontent" >' + img + name + content + star + date +
                    '</div>');
            });
            $("#one").html('查看更多');
            page++;
        }
    });
}