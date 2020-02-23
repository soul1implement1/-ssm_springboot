let limit1 = 3;
let page = 1;
let count1 = 0;
init();

function init() {
    $.ajax({
        type: 'get',
        url: url_nginx + 'open/selectByPage.action',
        data: {
            'limit': limit1,
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
                $("#content").append("请求错误！");
                return false;
            }

            count1 = result.count;
            var content = "";
            var id;
            var a = result.data;
            for (var i = 0; i < a.length; i++) {
                for (var j = i; j < a.length; j++) {
                    if (a[i].id < a[j].id) {
                        //id大前
                        id = a[i];
                        a[i] = a[j];
                        a[j] = id;
                    }
                }
            }
            $.each(a, function(i, item) {
                var title = '<h2><a  href="javascript:;"onclick="read(' + item.id + ')">' + item.title + '</a></h2>';
                var date = '<span class="time"><img src="img/sj.png"/>发表于' + returnTime(item.time) +
                    '</span>';
                var words = '<p class="blogtext">' + item.words + '</p>';
                var star = ' <p class="bloginfo"><span>点赞' + item.starnum + " </span><span>浏览量" + item.visitnum + '</span>';
                var tag = '<span>' + item.btag + '.' + item.stag +
                    '</span></p>';
                $("#content").append('<li>' + title + words + star + tag + date + '</li>');
            });

        }
    });
}

// 窗口滚动事件
$(window).scroll(function() {
    console.log(page)
        //如果窗口划过的距离等于  页面高度减窗口高度   就说明已经到底部了
    if ($(window).scrollTop() == $(document).height() - $(window).height()) {
        page++;
        console.log(page)
        if (page - 1 > parseInt(count1 / limit1))
            alert("没有更多文章了,欢迎访问");
        else
            init();
    }
});

function read(value) {
    window.open("readArticle.html?AsWSUWQsayRTFisiuSAqS=" + btoa(value));
}